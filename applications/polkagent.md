# Polkagent (Phase 1): **AI‑Ready** Metadata‑Driven Macro Tools & Planner (Read‑Only)

* **Team Name:** Hack Ink
* **Payment Address:**

  * `156HGo9setPcU2qhFMVWLkcmtCEGySLwNqa3DaEiYSWtte4Y (DOT, vested)`
  * `156HGo9setPcU2qhFMVWLkcmtCEGySLwNqa3DaEiYSWtte4Y (USDC on Polkadot AssetHub)`
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> :exclamation: The combination of our submitting GitHub account and the payment address above will be our unique identifier during the program. We will keep both safe.

---

## Project Overview :page_facing_up:

*Not an RFP.* This is Phase 1 in a multi‑grant roadmap (later phases: write ops & controlled HTTP integrations).

### Overview

* **Tag line (AI focus):** *Turn Substrate metadata into a few **AI‑ready macro tools** and a multi‑turn **Planner**, so agents and humans can query chain data safely in natural language.*

* **Brief description:**
  Polkagent exposes a **small, stable macro‑tool surface** via a Rust CLI + HTTP gateway, plus an **AI Planner** for multi‑turn task solving. Instead of thousands of fine‑grained endpoints, we provide four high‑level tools designed for **LLM/agent integration** and manual CLI use:

  1. `registry.search` – Top‑K tool discovery (brief JSON‑Schema & examples)
  2. `registry.describe` – full JSON‑Schema (+ `$defs`), examples, constraints for a named tool
  3. `graph.hint` – alias/`x-typetag`‑based linking across **Substrate** tools (e.g., SS58 links)
  4. `tool.execute` – **single execution entrypoint** (Phase 1: Substrate **read‑only** backend only)

  Phase 1 focuses on **Substrate read‑only**: storage‑key construction, RPC `state_getStorage`, and dynamic SCALE decoding (`scale-info` / `scale-value`). Each result carries `specVersion`, `metadataHash`, and `rpcUsed` for auditability/reproducibility.
  **Planner is included in Phase 1** (multi‑turn `Need → SelectAndFill → Finish` dialog), using the same macro tools.

* **Relation to Substrate / Polkadot / Kusama:**
  We transform **on‑chain metadata** into strongly‑typed, discoverable macro tools. Execution builds storage keys deterministically (e.g., `twox128("System") || twox128("Account") || blake2_128_concat(AccountId32)`), retrieves values via RPC, and decodes dynamically using the chain’s portable registry.

* **Why this project:**
  SDKs and explorers are developer/UI‑centric. **AI assistants and non‑developers** need a safe, auditable entrypoint. Polkagent “toolizes” Substrate metadata into **AI‑friendly** building blocks, enabling “ask → answer” flows without sacrificing validation or determinism.

* **Research or technical?**
  **Technical**. We will publish a technical report and code (OSS) describing the architecture, APIs, Planner loop, and validation approach.

---

## Project Details

### Problems & Importance

* **Unscalable tool surfaces for AI:** Thousands of endpoints are unsuitable as LLM tools. We need a **compact** surface with **discoverability** and **safety**.
* **Safety & auditability:** Natural‑language intents must become **JSON‑Schema‑validated** calls through a **single execution gate**, with strong auditing.
* **Reproducibility:** Runtime upgrades change layouts; answers need **versioned metadata** and recorded RPC endpoints.

### Methodology

* **Metadata‑driven generation:** Load `bundle.json` and `tools_skeleton.jsonl` → produce `params_brief/returns_brief/examples/x-typetag`.
* **Search & semantics:** Build a Tantivy (BM25) index across tool summaries & schema excerpts; aliases/intent signals improve ranking.
* **Graph hinting (Substrate‑only in Phase 1):** Generate edges between tools using `x-typetag` (e.g., SS58) and aliases (`accountId` ↔ `who/address/dest`).
* **Single execution gate:** All executions via `POST /validate_and_execute`; compile/merge the tool’s `$defs`, validate `args` (Draft 2020‑12), then execute.
* **Dynamic decoding:** Use `scale-info` + `scale-value` to decode SCALE values using the chain’s portable registry.
* **Audit logging:** Record `trace_id`, `tool_name`, `args_hash` (blake2_256), `specVersion`, `metadataHash`, `rpcUsed`, `latency_ms`, `ok/err_kind`.
* **Planner (Phase 1):** Multi‑turn ReAct‑style loop (`Need/SelectAndFill/Finish`) that calls the same macro tools; states store **Observations** and filled slots.

### Data Collection & Analysis Procedures

* **Data sources:** On‑chain metadata; tool skeletons; RPC responses from an allow‑listed endpoint.
* **Analysis:** Verify storage key derivations; assert schema validation behavior (incl. negative tests); confirm decoding matches metadata types.
* **Reproducibility checks:** Re‑run across **spec upgrades** and confirm either correct decode or deterministic failure with a clear error.

### CLI Usage & Planner Interaction (Phase 1)

* **Command‑style usage**:

  ```bash
  polkagent search "balance 15xxx" -k 5
  polkagent describe query.system.account
  polkagent hint query.system.account,query.balances.locks
  polkagent call query.system.account --arg accountId=15xxx
  ```

* **Dialog‑style usage:**

  ```bash
  polkagent chat
  You: check balance
  Agent: I need the SS58 address. Please provide it (e.g., 15xxx...).
  You: 15sZ...abc
  Agent: Free: 1.23 DOT; Frozen: 0; Reserved: 0; Nonce: 3. (specVersion:..., metadataHash:...)
  ```

  The Planner runs a multi‑turn loop: `Need` (ask minimal missing info) → `SelectAndFill` (choose tool & args) → `Finish` (present result + meta). Everything still goes through the **single execution gate** with **schema validation**.

### Knowledge Base (extensible by users)

* We ship a **knowledge base** alongside the registry for synonyms, aliases, examples, and **user‑extensible “recipes”** (safe post‑processing formulas over decoded fields).
* Example `knowledge.json` entry (Phase 1 supports safe arithmetic via a minimal expression engine):

  ```json
  {
    "recipes": [
      {
        "name": "transferable_balance",
        "description": "free - max(misc_frozen, fee_frozen) [ - existential_deposit (optional) ]",
        "inputs": [
          { "tool": "query.system.account",
            "map": { "free": "$.data.free", "misc": "$.data.misc_frozen", "fee": "$.data.fee_frozen" } }
        ],
        "expr": "free - max(misc, fee)"
      }
    ],
    "synonyms": { "balance": ["free balance","token amount","余额"] },
    "aliases": { "accountId": ["who","address","dest"], "at": ["blockHash"] }
  }
  ```

  *Note:* Recipes are **local post‑processing** over validated, decoded results (non‑authoritative hints). Users can add their own knowledge (e.g., alternative formulas); Polkagent will label default recipes with **recommended semantics** and allow user overrides.

### Expected Results & Verification

* **APIs available & documented**: `search`, `describe`, `hint`, `validate_and_execute`, `healthz`.
* **Deterministic execution**: Storage‑key inputs/outputs & decoding paths documented.
* **E2E examples**: Transferable balance computed from decoded fields via a recipe.
* **Reproducibility artifacts**: `{specVersion, metadataHash, rpcUsed}` in results; `trace_id` & hashed args in logs.

### Related Work

* Subalfred (developer toolbox) → Polkagent **toolizes** read‑only capabilities for broader, **AI‑friendly** use.

### What the project is not (Phase 1)

* **Not** writing extrinsics / signing / submitting.
* **Not** integrating external HTTP APIs (Subscan/Polkassembly/etc.).
* **Not** a remote web UI.
* **Not** tokenomics or business plans.

---

## Ecosystem Fit

* **Where it fits:** An **AI‑oriented tool registry + macro tools + Planner** layer for Substrate that prioritizes discovery, schema‑level validation, safe execution, and auditability.
* **Target audience:** parachain/dapp/wallet/UI devs; data/infra teams; **end users & AI agents** requiring “ask → answer” read‑only queries.
* **Needs met:** Smaller integration surface for LLMs; schema‑enforced safety; **multi‑turn Planner** to resolve ambiguity; reproducibility across upgrades.
* **Similar projects & difference:** Subalfred and SDKs are developer‑centric; Polkagent exposes **macro tools with a single audited execution gate and a built‑in Planner** optimized for NL/AI flows.

---

## Team :busts_in_silhouette:

### Team members

* **Xavier Lau**

### Contact

* **Contact Name:** Xavier Lau
* **Contact Email:** [x@hack.ink](mailto:x@hack.ink)
* **Website:** [https://github.com/hack-ink](https://github.com/hack-ink)

### Legal Structure

Personal. (no legal structure entry)

### Team's experience

* **Xavier Lau** — [https://github.com/aurexav](https://github.com/aurexav)

  * 8 years Rust; 5 years Substrate
  * Darwinia Network core dev (since 2019)
  * Subscan/Helixbox core dev (since 2024)
  * Active on Substrate StackExchange
  * Multiple W3F grant contributions

### Team Code Repos

* [https://github.com/hack-ink/subalfred](https://github.com/hack-ink/subalfred)
* [https://github.com/hack-ink/AiR](https://github.com/hack-ink/AiR)
* [https://github.com/hack-ink/array-bytes](https://github.com/hack-ink/array-bytes)
* [https://github.com/hack-ink/atomicalsir](https://github.com/hack-ink/atomicalsir)

**Team GitHub accounts**

* [https://github.com/aurexav](https://github.com/aurexav)

### Team LinkedIn Profiles (if available)

* [https://www.linkedin.com/in/xavier-lau-b0655310a](https://www.linkedin.com/in/xavier-lau-b0655310a)

---

## Development Status :open_book:

* Existing CLI/registry/search scaffolding will be extended to the macro‑tool APIs and Planner.
* Phase 1 centers on **Substrate read‑only** execution with dynamic SCALE decode; a **single audited execution gate**; and a **multi‑turn Planner** integrated into `polkagent chat`.

---

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** ~1 month
* **Full‑Time Equivalent (FTE):** ~3.5
* **Total Costs:** **30,000 USD**
* **DOT %:** **50%** (vested DOT), remaining **50%** in **USDC (Polkadot AssetHub)**

> :exclamation: **Default deliverables 0a–0e are mandatory for all milestones.**

### Milestone 1 — Registry, Search, Describe, Graph Hint (Substrate‑only)

* **Estimated duration:** ~10 days
* **FTE:** ~1.2
* **Costs:** 10,000 USD

|  Number | Deliverable                   | Specification                                                                                                                                                                  |
| ------: | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **0a.** | Copyright and Licenses        | **GPLv3**.                                                                                                                                                                     |
| **0b.** | Documentation/Tutorial        | Module docs; CLI tutorial for `polkagent search/describe/hint`; HTTP contracts.                                                                                                |
| **0c.** | Methodology                   | Metadata ingestion, schema generation, `$defs` merging, BM25 ranking, alias generation.                                                                                        |
| **0d.** | Infrastructure                | Single **Dockerfile** to build & run unit tests; versions pinned.                                                                                                              |
| **0e.** | Article                       | Short technical write‑up introducing macro tools and Phase‑1 API surface.                                                                                                      |
|      1. | Registry loader               | Load IR (`bundle.json`, `tools_skeleton.jsonl`), generate `params_brief/returns_brief/examples/x-typetag`. **DoD:** `polkagent registry inspect` prints counts + sample brief. |
|      2. | `registry.search`             | BM25 search over Substrate tools. **DoD:** `curl /registry/search -d '{"query":"balance 15xxx","k":5}'` returns `query.system.account` with brief & example.                   |
|      3. | `registry.describe`           | Return **full JSON‑Schema** (+ `$defs`) + examples. **DoD:** `curl /registry/describe -d '{"tool_name":"query.system.account"}'` shows merged `$defs`.                         |
|      4. | `graph.hint` (substrate‑only) | Alias/typetag‑based edges (e.g., SS58). **DoD:** `curl /graph/hint` over a whitelist returns edges & aliases.                                                                  |

### Milestone 2 — Substrate Execution Pipeline (Read‑Only)

* **Estimated Duration:** ~10 days
* **FTE:** ~1.1
* **Costs:** 10,000 USD

|  Number | Deliverable                        | Specification                                                                                                                                                                                                                                 |             |                                                            |
| ------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------- |
| **0a.** | Copyright and Licenses             | **GPLv3**.                                                                                                                                                                                                                                    |             |                                                            |
| **0b.** | Documentation/Tutorial             | Storage‑key construction (`twox128`, `blake2_128_concat`), SS58 validation, RPC usage, dynamic decoding walkthrough.                                                                                                                          |             |                                                            |
| **0c.** | Methodology                        | Validation strategy (JSON‑Schema 2020‑12, `$defs` merge, optional `unevaluatedProperties:false`), audit fields.                                                                                                                               |             |                                                            |
| **0d.** | Infrastructure                     | Dockerfile runs unit + integration tests; example RPC configs.                                                                                                                                                                                |             |                                                            |
|      5. | `tool.execute` (substrate backend) | Single gate → `state_getStorage` → **dynamic SCALE decode** via `scale-info`/`scale-value`. **DoD:** `curl /validate_and_execute -d '{"tool_name":"query.system.account","args":{"accountId":"<SS58>"}}'` returns decoded fields and `nonce`. |             |                                                            |
|      6. | Result meta                        | Attach `{specVersion, metadataHash, rpcUsed}` to success responses.                                                                                                                                                                           |             |                                                            |
|      7. | Error typing                       | Structured errors: `schema`, `exec` (`RpcError                                                                                                                                                                                                | DecodeError | NotFound`),`bad_request`; consistent HTTP codes & bodies. |

### Milestone 3 — CLI End‑to‑End, **Planner & Chat**, Knowledge Recipes

* **Estimated Duration:** ~10 days
* **FTE:** ~1.2
* **Costs:** 10,000 USD

|  Number | Deliverable                   | Specification                                                                                                                                                                                                                   |
| ------: | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | Copyright and Licenses        | **GPLv3**.                                                                                                                                                                                                                      |
| **0b.** | Documentation/Tutorial        | E2E tutorial: **search → describe → hint → execute**; **Planner chat** usage; knowledge recipes guide.                                                                                                                          |
| **0c.** | Methodology                   | Planner loop (`Need/SelectAndFill/Finish`), Observation handling, safety guarantees (still via `/validate_and_execute`).                                                                                                        |
| **0d.** | Infrastructure                | Dockerfile runs E2E checks & example scripts; Planner service config via env.                                                                                                                                                   |
| **0e.** | Article                       | Community article/workshop on macro tools, Planner chat, and a derived‑metric recipe.                                                                                                                                           |
|      8. | CLI features                  | `polkagent search/describe/hint/call` **and** `polkagent chat` (dialog mode). **DoD:** Chat resolves missing params via `Need` and returns structured answers with meta.                                                        |
|      9. | Planner (service or embedded) | Minimal **LangGraph‑style** Planner integrated (multi‑turn, strict JSON outputs, whitelist enforcement). **DoD:** Given vague queries (e.g., “check balance”), chat asks for SS58 then executes successfully.                   |
|     10. | Knowledge recipes (Phase 1)   | Support user‑extensible **safe formulas** (e.g., `transferable_balance = free - max(misc_frozen, fee_frozen) [ - ED ]`) over decoded results. **DoD:** Provide a sample recipe + CLI example that computes it for a given SS58. |

---

## Future Plans

* **Write operations**: sign & submit extrinsics; fee/nonce estimation; dry‑run; explicit confirmation flows.
* **External HTTP/API integrations**: controlled HTTP executor (allow‑listed domains/paths, strict schemas, rate limits, size/type caps, JSONPath/JMESPath extractors) for Subscan/Polkassembly/Subsquare; exposed via the same macro tools.
* **MCP Server mode**: export macro tools to agent ecosystems.
* **Remote UI**: simple web front‑end.

---

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation website; community recommendations.

**Previous/related grants:** Team members have contributed to prior W3F grants (see GitHub profiles and Subalfred lineage).

---

**AI emphasis recap:** Polkagent is **AI‑ready** by design—**macro tools** (`search/describe/hint/execute`) plus a built‑in **Planner & chat** provide a compact, schema‑validated, auditable surface that LLMs and human users can safely compose for read‑only Substrate queries. The **knowledge base** is user‑extensible (synonyms, aliases, **safe formulas/recipes**), enabling richer answers without expanding the execution surface.
