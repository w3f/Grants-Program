# Open Grant Proposal

* **Project:** Mobile Game Framework for Substrate
* **Proposer:** [enfipy]
* **Payment Address:** 1Gkvai1HtZmtQ5DWDGrCwarKHh4SErAufe 

## Project Description :page_facing_up: 

We want to make it simple to create and build Android and iOS game projects and connect them with Substrate blockchain. Currently, setup build of rust game project with basic requirements (like 2D/3D rendering, sounds, touch events, textures, etc) for iOS and Android is a pretty hard task. So a lot of developers don't start projects on top of rust-lang game engines because of uncertainty that they will be able to publish them to Google Play and App Store. We want to change this situation and make sure that anybody will be able to create, build and publish their mobile games to the marketplaces. Make this process simple yet reliable.

Also, we are extremely excited about decentralized games and what kind of games can be created with this idea in mind! Substrate blockchain framework is ideal for this as it can provide forkless updates, smart contracts, light client and so much on. We plan to create a setup for mobile development first, build a Substrate light client in mobile app and connect it to Substrate full node (or make a connection via JSON-RPC). Make sure that we can subscribe to data and send extrinsics to any Substrate based network. So that anybody from community of Polkadot will able to create own game projects, build for mobile platforms and publish them.

There are already plenty of interesting game engines made with rust-lang (e.g. [Piston], [Amethyst], [BevyEngine]. But we don't want to make it possible to build only with one specific rust game engine so we will do this framework game engine agnostic as much as possible.

Pros for Polkadot Ecosystem:
1. We will setup mobile development environment - community of Polkadot will be able to create own mobile game projects on top of it. This is also very useful for rust game development community.
2. We will create integration and communication with substrate node and make sure that it runs on mobile platforms flawlessly.
3. The community of Polkadot will be able to set up their own substrate-based game projects in a matter of minutes.
4. The first decentralized mobile game on top of the Substrate.

After the finish of this project, our team wants to create a mobile strategy game with all backend logic in Substrate. So this project important step forward decentralized mobile game on top of the Substrate.

## Team :busts_in_silhouette:

* **Members:**
    * David - Blockchain/Backend/Frontend Developer (Rust, Golang, Vue, TypeScript)
    * Oleksii – Backend/Game Developer (Rust, C++11/14/17, Wasm).
* **LinkedIn Profiles:**
    * https://www.linkedin.com/in/ackerman-david/
    * https://www.linkedin.com/in/oleksii-knyshenko/
* **Code Repos:** https://github.com/creator-rs/creator
* **Website:** https://github.com/creator-rs
* **Legal Structure:** Individual
* **Team's Experience:** 

    Worked together on many private and open source projects for several years. Here is a small list of projects that somehow relatable to the tech stack of this project.

    * [Cryga][cryga_org] - Cryptocurrency Gambling website developed fully in Rust and Vue. With tech stack: [actix-web], [tokio], [sqlx], [juniper], [bitcoin-core-rpc], [thiserror]. Has huge amount of unit tests, integration tests on backend and E2E tests on frontend. Has CI/CD with [Github Actions][github-actions] and deployed with [Cloudflare Workers][cloudflare-workers]. Has 50,000+ lines of code and clear project documentation (docs and readmes). By [enfipy] and [olvyko].

    * Substrate [Atom][atom_rep] and [VSCode][vscode_rep] plugins - Have contributed some code to Web3Foundation Grant for Substrate [VSCode][vscode_rep_con] and [Atom][atom_rep_con] plugins while worked on outsource company. By [enfipy].

    * [Polkadot CosmosSDK Integration][cosmos] - Also, contributed to another Web3Foundation Grant while worked in another outsource company. Built some logic behind [ABCI][abci], [pallet][pallet] and some setup of test servers. By [enfipy].

    * [Lolaland][lolaland_rep] - Very small yet cute game about kitty named Lola. Created on top of [Amethyst] game engine by [olvyko].

    * [Itte][itte_rep] - Small test Flutter Application that was published to Google Play with only one abstract question understandable in their own way. By [enfipy].

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 12 weeks
* **Full-time equivalent (FTE):** 2.0
* **Total Costs:** 2.5 BTC

### Milestone 1 - Create setup for Android (parallel milestone 3)

* **Estimated Duration:** 4 weeks
* **FTE:** 2.0
* **Costs:** 1.0 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Project on Android | Setup basic project and Android Application build and run it on Android device and emulator. |
| 2. | Working app with Rust code inside | Link rust code to Android application. |
| 3. | Basic app UI, working touch events and storage access | Add touch events, storage access for game assets (textures, images, sounds, etc) and simple UI for Android Application. | 
| 4. | Substrate inside Android app | Build Substrate light client (or JSON-RPC API client) for Android Application. |
| 5. | Connection to Substrate network from app | Add connection from rust code in app to the Substrate network. |
| 6. | Blockchain explorer | Add simple blockchain explorer to Application for showcase of working Substrate connection side. |
| 7. | CI and tests | Add Github CI for automatically build and test Android application. |
| 8. | Documentation | Write documentation to create and build similar applications for Android. |

### Milestone 2 - Create setup for iOS (parallel milestone 3)

* **Estimated Duration:** 4 weeks
* **FTE:** 2.0
* **Costs:** 1.0 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Project on iOS | Setup iOS Application build and run it on iOS Simulator. |
| 2. | Working app with Rust code inside | Link rust code to iOS application. Make it work with Xcode-compatible iOS bitcode. | 
| 3. | Basic app UI, working touch events and storage access | Add touch events, storage access for game assets (textures, images, sounds, etc) and simple UI for iOS Application. |
| 4. | Substrate inside iOS app | Build Substrate light client (or JSON-RPC API client) for iOS Application. |
| 5. | Connection to Substrate network from app | Add connection from rust code in app to the Substrate network. |
| 6. | Blockchain explorer | Add simple blockchain explorer to Application for showcase of working Substrate connection side. |
| 7. | CI and tests | Add Github CI for automatically build and test iOS application. |
| 8. | Documentation | Write documentation to create and build similar applications for iOS. |

### Milestone 3 - Create generic framework, documentation, tutorials and examples

* **Estimated Duration:** 4 weeks
* **FTE:** 2.0
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Simple interface of creation of Android and iOS projects | Encapsulate logic and pipeline of building for Android and iOS as much as possible. |
| 2. | Templates for Android and iOS projects to make it possible to create projects from it in one call | Create template Android and iOS platform projects to create new applications from them. |
| 3. | CLI and build utilities | Make utilities to make it possible setup build in matter of minutes. |
| 4. | Support of CD with Fastlane | Add support of continuous delivery with [Fastlane]. |
| 5. | Test Substrate network with test data | Run Substrate testnet with pallets and data that can be used in Applications. |
| 6. | Documentation, tutorials and example project | Create detailed documentation, tutorials and example projects (with connection to substrate node) for the project. |

## Future Plans

* We want to create a mobile game in a military-economic strategy genre with Substrate blockchain. Then publish our game to Google Play and App Store. Continue to develop and polish it.
* Integrate non-fungible tokens (NFT) in our game world in the form of game items. Also, add ability to create and deploy smart contracts by players to enhance their base or automate things. Run mainnet and connect to Polkadot as a parachain.

<!-- Reference Links block -->

[enfipy]: https://github.com/enfipy
[olvyko]: https://github.com/olvyko
[piston]: https://github.com/PistonDevelopers/piston
[amethyst]: https://github.com/amethyst/amethyst
[bevyengine]: https://github.com/bevyengine/bevy
[cryga_org]: https://github.com/cryga
[vscode_rep]: https://github.com/everstake/vscode-plugin-substrate/graphs/contributors
[vscode_rep_con]: https://github.com/everstake/vscode-plugin-substrate/graphs/contributors
[atom_rep]: https://github.com/everstake/atom-plugin-substrate/graphs/contributors
[atom_rep_con]: https://github.com/everstake/atom-plugin-substrate/graphs/contributors
[pallet]: https://github.com/adoriasoft/polkadot_cosmos_integration/tree/develop/substrate/pallets/cosmos-abci
[abci]: https://github.com/adoriasoft/polkadot_cosmos_integration/tree/develop/substrate/pallets/cosmos-abci/abci
[itte_rep]: https://github.com/enfipy/itte
[lolaland_rep]: https://github.com/olvyko/lolaland
[actix-web]: https://github.com/actix/actix-web
[tokio]: https://github.com/tokio-rs/tokio
[sqlx]: https://github.com/launchbadge/sqlx
[juniper]: https://github.com/graphql-rust/juniper
[bitcoin-core-rpc]: https://github.com/rust-bitcoin/rust-bitcoincore-rpc
[thiserror]: https://github.com/dtolnay/thiserror
[github-actions]: https://github.com/features/actions
[cloudflare-workers]: https://workers.cloudflare.com/built-with/projects/cryga
[cosmos]: https://github.com/adoriasoft/polkadot_cosmos_integration
[fastlane]: https://github.com/fastlane/fastlane
