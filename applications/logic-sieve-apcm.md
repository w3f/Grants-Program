---
project_name: LS_APCM
amount_requested: 30000 USD
applicant: Ilyosjon Isamuxamedov
email: apcm.core@gmail.com
license: MIT
repository: https://github.com/lspsifoundation/logic-sieve-apcm

---

# LS_APCM — Deterministic Private Constraint Matching for Substrate

## Summary

LS_APCM explores whether deterministic private constraint verification can be executed inside a Substrate runtime under strict memory and Weight constraints.

The project evaluates if a bounded, `no_std`-compatible primitive can perform private eligibility checks (returning a single verification bit) without introducing non-determinism or intermediate data leakage.

The outcome will provide empirical evidence on whether such functionality can safely be considered for future Substrate-native primitives.

---

## Product Context

Substrate runtimes currently lack native support for private eligibility verification without revealing underlying attributes.

If feasible, LS_APCM enables:

- Runtime-level gated dispatchables
- Private governance participation checks
- Compliance-aware logic inside pallets
- Deterministic eligibility validation without trusted oracles

The deliverable is not a standalone application, but a reusable runtime engineering primitive intended for integration by Substrate developers.

---

## Problem Statement

Substrate requires deterministic execution and bounded resource consumption. Existing private verification mechanisms:

- Depend on trusted intermediaries
- Rely on heavy cryptographic systems incompatible with strict `no_std`
- Introduce unpredictable Weight behavior

There is currently no deterministic runtime-level primitive that:

- Returns only a single verification bit
- Avoids heap allocation
- Guarantees bounded execution cost
- Preserves runtime determinism

---

## Proposed Solution

LS_APCM implements a deterministic primitive:

`V(C, R) ∈ {0, 1}`


Where:

- `C` = normalized constraint sketch
- `R` = normalized reference sketch

### Design Constraints

- Sketch size: `S = 256 bits`
- OT batch size: `256`
- No heap allocation
- `no_std` compatible
- Symmetric cryptographic primitives only
- All parameters compile-time constants

---

## Determinism Definition

Execution is deterministic if, for identical inputs across ≥ 3 independent nodes:

- Output bit identical
- Storage state identical
- Event log identical
- State root identical

---

## Performance Bound

Let:

`TargetBlockWeight` = configured maximum block Weight of the runtime at evaluation time.

`W` = worst-case Weight of `verify_and_execute` over all valid `(C, R)` pairs.

Valid input space:

- `|C| = S`
- `|R| = S`
- Fixed proof size
- Format-valid inputs only

Success condition:

`W <= 0.01 * TargetBlockWeight`



Measured using the Substrate benchmarking framework.

Worst-case defined as maximum observed `W` across bounded valid input space.

---

## Threat Model

Adversary model: semi-honest.

Observable:

- Output bit
- Storage state
- Event logs

Intermediate value:

Any byte sequence derived from sketch or OT transcript not equal to input or output bit.

Security objective:

No intermediate value appears in:

- Storage
- Event logs
- Return data

Excluded from scope:

- Malicious runtime modification
- Hardware side-channel attacks
- Validator collusion

---

## Deliverables

### Milestone 1 — Core Primitive ($10,000)

- `no_std` Rust crate (public repository)
- ≥ 1,000,000 fuzz test inputs
- Benchmark report with measured `W`
- Determinism test suite

Acceptance:

- No panic under fuzzing
- Determinism across ≥ 3 nodes
- `W <= 0.01 * TargetBlockWeight`

---

### Milestone 2 — Substrate Integration ($10,000)

- `pallet-ls-apcm`
- Dispatchable `verify_and_execute`
- Integration tests
- Multi-node reproducibility log

Execution success if:

- If `V = 1` → predefined storage mutation occurs
- If `V = 0` → no storage mutation occurs and execution aborts
- Identical state root across ≥ 3 nodes

---

### Milestone 3 — Research Artifacts ($10,000)

- Technical audit review document
- Public integration report
- Benchmark logs
- Reproducibility logs

---

## Timeline

- Milestone 1: 6 weeks
- Milestone 2: 4 weeks
- Milestone 3: 2 weeks

Total estimated duration: 12 weeks


## Team & Execution Plan

### Applicant

Ilyosjon Isamuxamedov  
LinkedIn: https://www.linkedin.com/in/ilyosjon-isamuxamedov-756019307/

Responsibilities:

- Primitive implementation
- Substrate pallet integration
- Fuzz testing
- Benchmarking
- Determinism validation
- Documentation and reporting

Execution model:

- Public repository from project start
- CI pipeline with deterministic test validation
- Milestone-based development
- Continuous benchmarking verification

---

## Maintenance Plan

The project is licensed under MIT.

The applicant commits to:

- Maintaining the repository for at least 12 months after completion
- Addressing critical bugs
- Reviewing external pull requests
- Maintaining compatibility with current Substrate stable releases

Future evolution depends on ecosystem adoption.

---

## Risks and Mitigations

**Information leakage**  
Failure: intermediate value detected in storage, events, or return data.  
Mitigation: static inspection + storage diff validation.

**Non-determinism**  
Failure: differing state root or output across nodes.  
Mitigation: cross-node validation test suite.

**Approximation error**  
Failure: false positive or false negative detected during adversarial evaluation.  
Mitigation: adversarial dataset testing and publication of results.

**Weight overflow**  
Failure: `W > 0.01 * TargetBlockWeight`.  
Mitigation: automatic No-Go declaration.

---

## Budget Logic

Total requested: $30,000.

Milestone-based release:

- $10,000 — Milestone 1
- $10,000 — Milestone 2
- $10,000 — Milestone 3

Release strictly conditioned on measurable acceptance criteria.

---

## Metrics of Success

- Deterministic execution confirmed across ≥ 3 nodes
- `W <= 0.01 * TargetBlockWeight`
- Public reproducibility logs
- Public benchmark data
- Formal Go / No-Go feasibility conclusion

---

## GO / NO-GO Conditions

No-Go if:

- Leakage detected
- Non-determinism observed
- `W > 0.01 * TargetBlockWeight`

In case of No-Go:

- Public technical report
- All benchmark data disclosed
- Formal notification to grantor
