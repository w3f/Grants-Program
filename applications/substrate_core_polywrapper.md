# Substrate Core Polywrapper

- **Team Name:** ChainSafe
- **Co-Sponsor:** Polywrap DAO ([Approved Grant Proposal](https://snapshot.org/#/polywrap.eth/proposal/0x1c4b651c654c9409353e70e4675b3311f06a06ab40d8818e4370faa064c5645d))
- **Payment Address:** 0x85D81Ab61Fe16CDcaeF2Ca556ED4577A51b9b07C (USDC preffered)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

For this proposal, we'll be developing:
1. **Substrate Core RPC Polywrapper:** Polywrapper in Rust that enables users to interact with substrate-based chains using any language on any platform.
2. **Substrate Signer Provider Plugin (js):** Polywrap Plugin for Javascript host that allows signing of messages and transactions to be done using the polkadot-js browser plugin.
3. **Developer Documentation:** Documentation showing developers how they can use the substrate core wrapper within their dapps and wrappers.

In the future, we'd like to continue this work by developing:

1. **Token Balance Interface:** Polywrap standard interface that defines common functionality for all pallets supporting "balances".
2. **Balances Implementation Wrapper:** An implementation of the "Token Balance" interface that interacts with the [Balances pallet](https://github.com/paritytech/substrate/tree/master/frame/balances)'s ABI.
3. **[Pallet ABI -> Polywrapper] Codegenerator:** A code generator that generates Polywrap code based on a Pallet's ABI (leveraging the [chain's metadata](https://github.com/paritytech/substrate/pull/8615)).
4. **Developer Documentation:** Documentation showing developers how they can use the Balance wrapper, implement their own Balances implementation, and generate Polywrappers from pallet ABIs.

Future proposals will be made for the above. Below we'll explain the work in its entirety.

**About Polywrap:**
Polywrap is a dev toolchain that enables easy integration of Web3 protocols into any application. It makes it possible for software on any device, written in any language, to read and write data to Web3 protocols.

<https://polywrap.io/#/>

### Project Details

Polywrapper will be written in Rust and compiled to WASM so that it can be used by developers to call substrate methods by simply invoking graphql calls. We will deploy the Substrate wrapper to IPFS.

Project heavily relies on the Polywrap toolchain and Polywrap team support.

### Ecosystem Fit

- **Where and how does your project fit into the ecosystem?**
  
  Polywrap will allow polkadot dapp developers to integrate protocol logic into dapps in a simple, familiar way, regardless of their implementation language.

  Additionally it will enable a new "standardization layer" for dapps developers to use, enabling the aggregation of multiple similar-but-different chains. The first standard interface we'll be developing in the future will be the "token balance" interface. We will create an implementation of this interface for the [Substrate Balance Pallet](https://github.com/paritytech/substrate/tree/master/frame/balances).

- **Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?**

  Our initial target audiences are dapp/wallet developers, as well as the broader web3 developer ecosystem since Polywrap is architected in a chain-agnostic way. We'll be working with the [Talisman](https://talisman.xyz/) team to ensure the work we're doing aligns with their wallet's needs. We've already had preliminary conversations with them, and they're excited to work with the software we build for this grant.
  
  Additionally the Talisman team has confirmed that, if this Polywrap integration suites their needs like they/we think it will, they are willing to help contribute to the codebase(s) going forward along with ChainSafe and the Polywrap DAO.

- **What need(s) does your project meet?**
  
  Polywrap meets the needs of dapp developers who want a simple way to integrate protocol logic into their dapps.  The Polywrap integration experience should be extremely familiar to any develop who has integrated a Web 2.0 API.  The dapp dev simply needs to add the Polywrap client into their dapp, and then they will be able to send GraphQL queries to an endpoint to execute protocol functions.
  
  Additionally, as previously stated, we've noticed that in the multi-para-chain future there is a need for another layer of standardization. This is because pallet ABIs may be different amongst multiple chains, but be effectively serving the same purpose (Tokens, AMMs, Profiles, Governance, etc). With Polywrap developers can create standard interfaces that can be implemented in many different ways, depending on the pallet being used. The dapp developer simply uses the standard interface methods/types, and doesn't have to care about the implementation details of the chain/pallet. We feel that this goes hand-in-hand with the ["enriched metadata & typeinfo"](https://github.com/paritytech/substrate/pull/8615) feature that was recently merged.
  
  Lastly, it's worth noting that polywrappers can be downloaded and executed at run-time due to the security and portability of WebAssembly. This means that dapps using the "Token Balance" interface can potentially update themselves without having to be rebuilt, dynamically supporting new chains as they come online.

- **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

  There are not other projects solving the integration issue today at the SDK layer. As previously mentioned, the ["enriched metadata & typeinfo"](https://github.com/paritytech/substrate/pull/8615) PR solves the introspection problem at the chain-level, but there is more to do farther down the integration pipeline at the dapp level. This is where Polywrap will help.

## Team :busts_in_silhouette:

### Team members

* Matthias Seitz - Team Lead
* Tianyi Zhang
* Willes Lau
* Willem Olding

### Contact

- **Contact Name:** Marin Petrunić
- **Contact Email:** marin@chainsafe.io
- **Website:** <https://chainsafe.io/>

### Legal Structure

- **Registered Address:** 251 Spadina Ave, Unit 204, Toronto, Ontario, Canada
- **Registered Legal Entity:** ChainSafe Systems Inc.

### Team's experience

ChainSafe is a global leader in blockchain protocol and infrastructure solutions for Web 3.0. The firm encompasses top engineering talent from around the world. The company is architecting official client implementations on Ethereum 2.0 (“[Lodestar](https://github.com/ChainSafe/lodestar)”), Polkadot (“[Gossamer](https://github.com/ChainSafe/gossamer)”), Filecoin (“[Forest’’](https://github.com/ChainSafe/forest)), a [Rust implementation of the Mina Protocol](https://github.com/ChainSafe/mina-rs), and many more.

ChainSafe rounds out their deep Web 3.0 portfolio with undertakings into product development via their privacy-first file storage solution [ChainSafe Files](https://app.files.chainsafe.io/), the [ChainSafe Gaming SDK](https://github.com/ChainSafe/web3.unity), as well as their flagship product [ChainBridge](https://github.com/ChainSafe/ChainBridge).

### Team Code Repos

- <https://github.com/ChainSafe>
- <https://github.com/ChainSafe/gossamer>
- <https://github.com/ChainSafe/PINT>
- <https://github.com/ChainSafe/chainlink-polkadot>
- <https://github.com/polywrap>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* https://github.com/mattsse
* http://github.com/clearloop
* https://github.com/willeslau
* https://github.com/willemolding/

### Team LinkedIn Profiles (if available)

* https://www.linkedin.com/in/matthias-seitz-a49378211/
* https://www.linkedin.com/in/tianyi-zhang-2277191a3/
* https://www.linkedin.com/in/willem-olding/

## Development Status :open_book:

- Academic publications relevant to the problem
  - Documentation: [https://docs.polywrap.io/](https://docs.polywrap.io/)
- Links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
  - Blog Post - Polywrap: Improving how dApps Integrate with Uniswap v2
    - [https://blog.polywrap.io/p/uniswap-v2](https://blog.polywrap.io/p/uniswap-v2)
- References to conversations you might have had related to this project with anyone from the Web3 Foundation
  - In July, Rohan Joseph, a member of the Parity ecosystem growth team reached out to Jordan, one of the original developers, to learn more about the Polywrap technology
  - In August, the Polywrap team met with Rohan and also his coworker, Surag Sheth, to go over the Polywrap tech.  The Polywrap team also learned more about the W3F Grants Program and the benefits of applying
  - After this meeting, Rohan connected the Polywrap team to Marcin from the W3F.
  - In an email to Marcin, Kevin from the Polywrap team asked ChainSafe can work on the Polkadot &lt;&gt; Polywrap integration, and whether the Level 3 application would work.
    - Marcin let us know to just submit the application which will be reviewed
- Progress on the project:
  - 13 slide deck showing progress: [https://www.canva.com/design/DAEp9ePJUQ0/HaHaeo5uC3ERY0iyuLPHMw/view?utm_content=DAEp9ePJUQ0&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent](https://www.canva.com/design/DAEp9ePJUQ0/HaHaeo5uC3ERY0iyuLPHMw/view?utm_content=DAEp9ePJUQ0&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent)
  - Core toolchain with CLI support: [https://github.com/polywrap/monorepo](https://github.com/polywrap/monorepo)
  - Rust support (pending review): [https://github.com/polywrap/monorepo/pull/523](https://github.com/polywrap/monorepo/pull/523)
  - Polywrap Hub - the web3 aggregator (in progress): [https://github.com/polywrap/hub](https://github.com/polywrap/hub)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  2 Software Engineer, 0.5 Project Manager
- **Total W3F Costs:** 50 000$
- **Total Polywrap DAO Costs:** 27 000$ & 60 WRAP ([Approved Grant Proposal](https://snapshot.org/#/polywrap.eth/proposal/0x1c4b651c654c9409353e70e4675b3311f06a06ab40d8818e4370faa064c5645d))
- **Start Date:** 11. April 2022

### Milestone 1 - Substrate RPC Polywrapper

- **Estimated duration:** 1 month
- **FTE:**  2 Software Engineer, 0.5 Project Manager
- **Costs:** 50 000$

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can interact with polywrapper |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests and e2e tests using polywrap recipes json tests |
| 0d. | Article | We will publish an article that explains the what/why/how of integrating Substrate based chains using Polywrap. Some examples from the BlockWatch team's Tezos integration: [launch article](https://blockwatch.cc/blog/announcing-tezos-polywrapper/), [dev docs](https://blockwatch.gitbook.io/polywrap-tezos/). |
| 1. | Schema Definitions | Described below |
| 2. | `signer-provider` Polywrap Client JavaScript Plugin | Described below |
| 3. | `rpc-wrapper` Wrapper | Described below |

> NOTE: 2 & 3 can be developed in parallel once schemas are defined.

### 1. Schema Definitions

There will be 2 Polywrap schemas:
- `signer-provider` - Low-level interface for accessing the application's configureable signer / provider.
- `rpc-wrapper` - Higher-level interface for interacting with a substrate based chain. This depends upon on an implementation of the substrate-signer-provider interface above.

To get a better idea of what this "separation of concerns" looks like in practice, please refer to [this example specification](https://github.com/polywrap/integrations/blob/main/near/Near%20Polywrapper%20Specification.md#near-polywrapper-specification) for the Polywrap &lt;&gt; Near integration that's actively being developed.

### 2. `signer-provider` JavaScript Plugin

Plugins, in the context of Polywrap, are a special type of wrapper. Instead of being run as WebAssembly, they run as native modules in the application's language (ex: JavaScript). This allows the wrappers to access the application's native capabilities (ex: filesystem access), unlike WebAssembly wrappers which are run within their own nano-process sandboxed.

The Substrate `signer-provider` plugin will enable the `rpc-wrapper` to:
* Get all available accounts within the application's wallet (`Keyring`).
* Sign arbitrary messages.
* Sign transaction payloads.

Polkadot.js will be used as the backing `Keyring`, enabling developers to use the browser-based wallet provided by the Polkadot.js extension, or additionally use a `FileStore` which can be used to load a wallet from the filesystem.

The plugin would typically be instantiated and configured when instantiating the Polywrap Client, like so:

```typescript
import { substrateSignerProviderPlugin } from "substrate-signer-provider-plugin-js";
import { PolywrapClient } from "@polywrap/client-js";

const plugin = substrateSignerProviderPlugin();

const client = new PolywrapClient({
  plugins: [{
    uri: "ens/substrate-signer-provider.chainsafe.eth",
    plugin
  }]
})

// Now we can use the above client to invoke the RPC wrapper,
// which requires "ens/substrate-signer-provider..." as a dependency
const accounts = await client.invoke({
  uri: "ens/substrate-rpc-wrapper.chainsafe.eth",
  method: "getSignerProviderAccounts"
});
```

Additionally, users can configure the plugin with their own `SignerProvider` instance, like so:
```typescript
import {
  substrateSignerProviderPlugin,
  KeyringSignerProvider
} from "substrate-signer-provider-plugin-js";
import { Keyring } from "@polkadot/ui-keyring";
import { FileStore } from "@polkadot/ui-keyring/stores";

// Load keystore from a directory
const filestore = new FileStore("/path/to/keystore/dir");

// Create your own keyring
const keyring = new Keyring();

// Load the keystore into the keyring
keyring.loadAll({ store: filestore });

const plugin = substrateSignerProviderPlugin({
  provider: new KeyringSignerProvider(keyring)
})
```

To get an idea of what the `substrate-signer-provider` schema might look like, please see the Near plugin's schema [here](https://github.com/polywrap/integrations/blob/main/near/Near%20Polywrapper%20Specification.md#near-javascript-plugin).

### 3. `rpc-wrapper` Wrapper

The Polywrapper is a set of WASM modules that contain the bulk of the logic needed to interact with substrate based chains. The Polywrapper calls the aforementioned JavaScript Plugin only when necessary to perform signing tasks.

A call to the Polywrapper might look something like this (TS/JS application):

```typescript
const result = await client.invoke({
  uri: "ens/substrate-rpc-wrapper.chainsafe.eth",
  method: "chainGetBlock",
  args: {
    url,
    number: 0
  }
});

if (!result.ok) {
  handleError(result.error);
  return;
}

const blockOutput = result.value;
```

Or by using the Polywrap toolchain's application codegen, you can have this be fully typed like so:
```typescript
import { Substrate_Module, Substrate_BlockOutput } from "./wrap";

const result = await Substrate_Module.chainGetBlock({
  url,
  number: 0
}, client);

if (!result.ok) throw Error("...");

const output: Substrate_BlockOutput = result.value;
```

The rpc-wrapper exposes the following interface that maps closely to the default Substrate node RPC:

- getSignerProviderAccounts
- chainGetMetadata
- blockHash
- genesisHash
- chainGetBlock
- constant
- getRuntimeVersion
- getStorageValue
- getStorageMap
- getStorageMapPaged
- rpcMethods
- accountInfo
- getNonceForAccount
- palletCallIndex
- sign
- send
- signAndSend

We will be heavily leverage existing Rust crates in the substrate developer ecosystem to implement the wrapper detailed above.

## Future Plans

As stated above, we'd like to continue to build upon the work done within this proposal, by enabling multi-chain token balance aggregation (through the use of Polywrap interfaces).

We hope that with this work complete, a team like Talisman will be able to continuing using the tooling we've developed to fully realize their vision of having a fully featured multi-para-chain wallet.

The work created by this grant will be stewarded by the ChainSafe & Polywrap DAO teams, as well as the Talisman team if they decide to build upon what we've created.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation
