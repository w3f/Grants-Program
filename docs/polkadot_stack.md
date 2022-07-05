# Open Source Polkadot Stack <!-- omit in toc -->

The goal of this page is to provide an overview of the open-source Polkadot/Kusama Tech Stack.

This is a living document and we are relying on our community to contribute to it and help maintain it. [**Please feel free to make edits and additions via pull requests**](#construction_worker-contributing). We apologize if we missed your project!

---

- [:clipboard: About](#clipboard-about)
- [:battery: Funding](#battery-funding)
- [:bookmark_tabs: Layers of Polkadot Stack](#bookmark_tabs-layers-of-polkadot-stack)
  - [:iphone: User Interface](#iphone-user-interface)
  - [:wrench: Tools, APIs and Languages](#wrench-tools-apis-and-languages)
  - [:memo: ink Smart Contracts](#memo-ink-smart-contracts)
  - [:link: Chains and Pallets](#link-chains-and-pallets)
  - [:black_circle: Host](#black_circle-host)
  - [:electric_plug: Network Maintenance Tools](#electric_plug-network-maintenance-tools)
  - [:black_nib: Signatures](#black_nib-signatures)
  - [:heavy_check_mark: Consensus](#heavy_check_mark-consensus)
  - [:satellite: Networking](#satellite-networking)
- [:construction_worker: Contributing](#construction_worker-contributing)

## :clipboard: About

The Polkadot Tech Stack is a subset of the Web 3.0 Tech Stack, which consists of the **open-source** technologies contributing to and relying on [Polkadot](https://polkadot.network/), [Kusama](https://kusama.network/) and [Substrate](https://substrate.dev/). It is meant to be used for decentralized application (Dapp) development within numerous verticals including DeFi, Gaming, Provenance and many others not pictured below.

<!-- markdownlint-disable MD040 -->
```
|------|--------|------------|
| DeFi | Gaming | Provenance |
|______|________|____________|
            Dapps
|--------------------------/-|
| Explorers, Wallets      /  |
|------------------------/---|
| Tools, Apis, Languages/    |
|----------------------/-----|
| 2nd layer protocols /      |
|--------------------/-------|
| Chains            /  other |
|------------------/---    --|
| *Polkadot*      |   tech   |
|------------------\---------|
| P2P, Crypto, Wasm \        |
|--------------------\-------|
```

## :battery: Funding

The Web3 Foundation's [Grants Program](https://github.com/w3f/Grants-Program)<!-- NO_STATUS_BADGE --> is focused on funding development work to build out all layers of the Polkadot Tech Stack. 

To get a better understanding of the projects we consider most relevant, you can explore a detailed breakdown of the various layers of the stack below. We divide each of the layers into the various *components* which we feel are most important. We then highlight some of the *existing projects* that address these components as well as some *potentially interesting projects* that we would like to fund.

We typically like to fund more than one project for each component. So, if you see a component with 1 or 0 existing projects, it's likely that we would consider an application in this area. In order to consider funding a proposal that addresses a component with many existing projects, we would need to be persuaded that yours brings unique value to the ecosystem. Such value could come in many forms including but not limited to differentiated functionality, better user experience, the attraction of new users to the ecosystem or a high likelihood that the technology would be maintained for a long period of time.

By describing our areas of priority in detail, we do not wish to preclude grant applications that address different areas that we may not have thought of. We would like to fund all projects that bring value to the ecosystem. If you are considering applying for a project and are not sure if it falls within our areas of interest, please get in touch with us to discuss it.

For open source infrastructure projects that are no longer maintained, we are also interested in signing [maintenance grants](https://github.com/w3f/Grants-Program#hammer_and_wrench-maintenance-grants)<!-- NO_STATUS_BADGE -->. 

## :bookmark_tabs: Layers of Polkadot Stack

In the below sections you can find a list of different layers of the Polkadot Stack.

**Maintenance Status**: 
- :green_circle: Actively maintained
- :yellow_circle: Stale (no activity since 1 month)
- :red_circle: Unmaintained (no activity for more than 3 months)

### :iphone: User Interface 

| Components | Existing projects | Potentially interesting projects
|-|-|-
| Desktop/Web Wallets | [Talisman Web Application](https://github.com/TalismanSociety/talisman-web) :green_circle: , [AirGap](https://github.com/airgap-it/airgap-wallet) :green_circle: , [Sakura](https://github.com/w3finance/sakura) :red_circle: | User-friendly Wallet based on the [Recovery Pallet](https://github.com/paritytech/substrate/tree/master/frame/recovery) :green_circle: , Web wallets focused on user-onboarding (e.g. using [localStorage](https://github.com/near/near-wallet) :green_circle: )
| Browser Extensions | [Polkadot{.js}](https://github.com/polkadot-js/extension) :green_circle: , [Polkadot-Js-Plus-Extension](https://github.com/Nick-1979/polkadot-Js-Plus-extension) :green_circle: , [SubWallet-Extension](https://github.com/Koniverse/SubWallet-Extension) :green_circle: , [Doter](https://github.com/ChainBridgeNetworkTeam/Doter) :red_circle: , [Enzyme](https://getenzyme.dev/), [Speckle OS](https://github.com/GetSpeckle) | Sign-in with your polkadot, kusama, etc. account.  
| Mobile Wallets|  [Lunie](https://github.com/luniehq/lunie) :red_circle: , [Polkawallet](https://github.com/polkawallet-io/polkawallet-flutter) :red_circle: , [Parity Signer](https://github.com/paritytech/parity-signer) :green_circle: , [imToken](https://github.com/consenlabs/token-core) :red_circle: , [Fearless Wallet Android](https://github.com/soramitsu/fearless-Android) :green_circle: , [Fearless Wallet iOS](https://github.com/soramitsu/fearless-iOS) :green_circle: , [Stylo](https://github.com/stylo-app/stylo) :green_circle: , [Nova Wallet](https://github.com/nova-wallet), [Fractapp](https://github.com/fractapp/fractapp/) :red_circle: 
| Burner Wallets/Faucet| [KodaDot](https://kodadot.js.org/), [Astar Faucet Bot](https://github.com/AstarNetwork/astar-faucet-bot) :green_circle: | Faucet (a sybil-resistant way to receive free tokens)
| CLI Wallet | [Subwallet](https://github.com/yxf/subwallet) :red_circle: , [Proxy-hot-wallet](https://github.com/canontech/proxy-hot-wallet) :red_circle: 
| Multisignature Wallets| [Subscan Multisig UI - React](https://github.com/itering/subscan-multisig-react) :green_circle: , [Subscan Multisig UI](https://github.com/itering/subscan-multisig-ui) :red_circle: , [Dorafactory-Multisig](https://github.com/DoraFactory/dorafactory-multisig) :yellow_circle: |
| Hardware Wallets | [Ledger Polkadot](https://github.com/ZondaX/ledger-polkadot) :green_circle: , [Ledger Kusama](https://github.com/Zondax/ledger-kusama) :green_circle: , [NGRAVE](https://ngrave.io/) | Trezor
| Block Explorers | [Polkascan](https://github.com/polkascan), [Polkastats](https://github.com/Colm3na), [Subscan](https://github.com/itering/subscan) :green_circle: , [Statescan](https://github.com/opensquare-network/statescan) :green_circle: , [Edgscan](https://github.com/edgeware-builders/edgscan) :red_circle: | Ink Smart Contract Explorer, Mempool focused explorer (including parachain transaction)
| Validator Dashboards | [Polkacube](https://github.com/hashquark-io), [YieldScan](https://github.com/buidl-labs/YieldScan) :red_circle: , [Hubble](https://github.com/w3f-community/hubble/tree/master/app/controllers/polkadot) :grey_question: 
| Node Explorers | [Polkadot Node Explorer](https://github.com/protos-research/polkadot-node-explorer) :red_circle: 
| NFT Explorer | [NFT Explorer for Kusama & Polkadot](https://github.com/kodadot/nft-gallery) :green_circle: 
| Governance Dashboards | [Polkassembly](https://github.com/premiurly/polkassembly) :green_circle: , [dotreasury](https://github.com/opensquare-network/dotreasury) :green_circle: , [Bright Treasury](https://github.com/bright/bright-tresury) :red_circle: , [OpenSquare offchain voting](https://github.com/opensquare-network/collaboration) :green_circle: | UI for the kusama and/or polkadot treasury (see [bounty module](https://github.com/paritytech/substrate/pull/5715) :green_circle: ), UI for Parachain Lease Offering (PLO)  |
| Staking | [Staking Rewards Collector](https://github.com/w3f/staking-rewards-collector) :yellow_circle: , [Staking Rewards Viewer](https://github.com/jackson-harris-iii/staking-rewards-viewer) :red_circle: , [Polkadot Staking Site](https://github.com/cryptolab-network/polkadot-staking-site) :red_circle: , [Polkadot Staking Dashboard](https://github.com/paritytech/polkadot-staking-dashboard) :green_circle: |
| Bridge UI | [Parity Bridges UI](https://github.com/paritytech/parity-bridges-ui) :red_circle: , [Donut Interface (Steem <> Dot)](https://github.com/nutbox-dao/donut-interface) :red_circle: | |
| Parachain/Crowdloan | [Parachains.Network](https://github.com/jhonalino/parachains.network) :red_circle: , [PolkAuction](https://github.com/CrommVardek/polk-auction-ui) :green_circle: | |
| Identicon | [PolkadotWebIdenticon](https://github.com/RidOne-technologies/polkadot-web-identicon) :red_circle: , [Polkadot Angular IdentIcon](https://github.com/RidOne-technologies/polkadot-angular-identicon) :red_circle: , [Bird Identicon](https://github.com/Noc2/Bird-Identicon) :red_circle: |
| Other | [KappaSigmaMu Fratority](https://github.com/KappaSigmaMu/ksm-app) :green_circle: , [Quadratic Funding Webapp](https://github.com/OAK-Foundation/quadratic-funding-webapp) :red_circle: , [Polkawatch](https://gitlab.com/polkawatch), [Bytepay](https://github.com/bytepayment/bytepay) :green_circle: , [charging-management-platform](https://github.com/Delmonicos/charging-management-platform) :yellow_circle: , [subidentity-webapp](https://github.com/TDSoftware/subidentity-webapp) :green_circle: | Portfolio Viewer like Zapper or Zerion

### :wrench: Tools, APIs and Languages

| Components | Existing projects | Potentially interesting projects
|-|-|-
| Parachain | [Parachain utilities](https://github.com/AcalaNetwork/parachain-utilities) :yellow_circle: , [Gantree](https://github.com/flex-dapps)| Tools to create parachains from frameworks used in other ecosystems |
| Client Libraries | [Go](https://github.com/centrifuge/go-substrate-rpc-client) :green_circle: , [.Net](https://github.com/usetech-llc/polkadot_api_dotnet) :red_circle: , [.NET Standard 2.0](https://github.com/ajuna-network/Ajuna.NetApi) :green_circle: , [C++](https://github.com/usetech-llc/polkadot_api_cpp) :red_circle: , [C](https://github.com/finoabanking/substrate-c-tool) :red_circle: , [Haskell](https://github.com/airalab/hs-web3) :yellow_circle: , [Javascript](https://github.com/polkadot-js/api) :green_circle: , [Substrate API Sidecar - TypeScript](https://github.com/paritytech/substrate-api-sidecar) :green_circle: , [Ruby](https://github.com/itering/scale.rb) :red_circle: , [Python](https://github.com/polkascan/py-substrate-interface) :green_circle: , [Java (+ Android)](https://github.com/emeraldpay/polkaj) :green_circle: , [Substrate Client Java](https://github.com/strategyobject/substrate-client-java) :green_circle: , [Rust SCS](https://github.com/scs/substrate-api-client) :green_circle: , [Rust Parity](https://github.com/paritytech/substrate-subxt) :green_circle: , [PHP (gmajor-encrypt)](https://github.com/gmajor-encrypt/php-substrate-api) :yellow_circle: , [PHP (neha0921)](https://github.com/neha0921/substrate-interface-package) :red_circle: , [RPC-Ethereum](https://github.com/paritytech/frontier) :green_circle: , [Swift](https://github.com/tesseract-one/Substrate.swift) :red_circle: | |
|Substrate Contract clients | [PatractGo](https://github.com/patractlabs/go-patract) :red_circle: | |
| SCALE Codec | [Rust](https://github.com/paritytech/parity-scale-codec) :green_circle: , [Python](https://github.com/polkascan/py-scale-codec) :green_circle: , [Golang Chainsafe](https://github.com/ChainSafe/gossamer/tree/development/lib/scale) :green_circle: , [Golang Itering](https://github.com/itering/scale.go) :green_circle: , [C](https://github.com/MatthewDarnell/cScale) :red_circle: , [C++](https://github.com/soramitsu/scale-codec-cpp) :yellow_circle: , [JavaScript](https://github.com/polkadot-js/api) :green_circle: , [AssemblyScript](https://github.com/LimeChain/as-scale-codec) :red_circle: , [Haskell](https://github.com/airalab/hs-web3/tree/master/src/Codec) :yellow_circle: , [Java](https://github.com/emeraldpay/polkaj) :green_circle: , [Ruby](https://github.com/itering/scale.rb) :red_circle: , [Dart](https://github.com/nbltrust/dart-scale-codec) :red_circle: , [Swift](https://github.com/tesseract-one/swift-scale-codec) :red_circle: , [PHP](https://github.com/gmajor-encrypt/php-scale-codec) :yellow_circle: ,  [JavaScript by Soramitsu](https://github.com/soramitsu/scale-codec-js-library) :green_circle: |
| Easy Runtime Development | [VS Code Plugin](https://github.com/everstake/vscode-plugin-substrate) :red_circle: , [Atom Code Plugin](https://github.com/everstake/atom-plugin-substrate) :red_circle: , [Substrate Playground](https://github.com/paritytech/substrate-playground) :green_circle: , [Substrate Marketplace VS Code Plugin](https://github.com/paritytech/vscode-substrate) :red_circle: , [AssemblyScript Runtime Generation](https://github.com/LimeChain/as-substrate-runtime) :red_circle: , [Substrate Package Manager](https://github.com/clearloop/sup) :red_circle: , [Subsembly: Framework for developing AssemblyScript Substrate Runtimes](https://github.com/LimeChain/subsembly) :red_circle: , [dependency diener](https://github.com/bkchr/diener) :red_circle: | |
| Easy Smart Contract Development | [ink-playground](https://github.com/staketechnologies/ink-playground/tree/master) :red_circle: , [Ink! Remix Plugin](https://github.com/blockchain-it-hr/ink-remix-plugin) :red_circle: 
| Runtime Security | [K specifications](https://github.com/kframework/wasm-semantics) :yellow_circle: , [PolPatrol - Polkadot Runtime Checker](https://github.com/ChainSecurity/polpatrol) :red_circle: | Automated Runtime checking tools, economic audit simulator such as [gauntlet.network](https://gauntlet.network/)
| Smart Contract Languages | [Ask!](https://github.com/patractlabs/ask) :red_circle: , [Subscript](https://github.com/slickup/subscript) :red_circle: , [Solang](https://github.com/hyperledger-labs/solang) :green_circle: , [Ink!](https://github.com/paritytech/ink) :green_circle: , [Pact](https://github.com/kadena-io/), [Move VM Substrate](https://github.com/pontem-network/sp-move) :yellow_circle: , [Move smart contract by Neatcoin](https://github.com/neatcoin/neatcoin) :red_circle: , [Sol2Ink](https://github.com/Supercolony-net/sol2ink) :yellow_circle: | Functional Programming Languages, other languages with developed toolchains |
| Smart Contract Security |
| Testing | [Halva](https://github.com/orgs/halva-suite) :grey_question: , [Ink Waterfall](https://github.com/paritytech/ink-waterfall) :green_circle: , [Redspot](https://github.com/patractlabs/redspot) :red_circle: , [MixBytes Tank](https://github.com/mixbytes/tank) :red_circle: , [sub-flood](https://github.com/NikVolf/sub-flood) :red_circle: , [Substrate debug-kit](https://github.com/paritytech/substrate-debug-kit) :red_circle: , [Dotscale - SCALE Codec Comparator](https://github.com/arijitAD/dotscale) :red_circle: , [Asset CLI tool](https://github.com/JesseAbram/asset_cli_tool) :green_circle: , [sub_crash](https://github.com/JesseAbram/unfinished_testing_tool) :red_circle: , [subwasm](https://github.com/chevdor/subwasm) :green_circle: , [subsee](https://github.com/ascjones/subsee) :yellow_circle: , [polkadot-lab](https://github.com/w3f/polkadot-lab) :red_circle: , [Zombienet](https://github.com/paritytech/zombienet) :green_circle: , [RPC-perf](https://github.com/dwellir-public/rpc-perf/) :green_circle: 
| Testnet | [Polkadot Launch](https://github.com/paritytech/polkadot-launch) :green_circle: , [polkadot-starship](https://github.com/koute/polkadot-starship) :red_circle: , [Fork off Substrate](https://github.com/maxsam4/fork-off-substrate) :red_circle: , [Parachain Launch](https://github.com/open-web3-stack/parachain-launch) :green_circle: |
| Benchmarking | [Substrate Graph Benchmarks](https://github.com/shawntabrizi/substrate-graph-benchmarks) :red_circle: |
| Blockchain Indexing Engine | [Substrate Archive](https://github.com/paritytech/substrate-archive) :green_circle: , [PSQL Indexer](https://github.com/usetech-llc/polkadot_psql_indexer) :red_circle: , [Polkadothub Indexer](https://github.com/figment-networks/polkadothub-indexer) :green_circle: , [Substrate Graph](https://github.com/playzero/substrate-graph) :yellow_circle: , [Hydra](https://github.com/subsquid/hydra) :red_circle: , [Subquery](https://github.com/OnFinality-io/subql) :green_circle: , [Polkadot Profit Transformer](https://github.com/p2p-org/polkadot-profit-transformer) :green_circle: |
| Blockchain/Event Monitoring | [Web3 Guardian](https://github.com/open-web3-stack/guardian) :yellow_circle: , [Aurras Event Manager](https://github.com/HugoByte/aurras-event-manager) :green_circle: , [@commonwealth/chain-events](https://github.com/hicommonwealth/chain-events) :green_circle: |
| Gaming | [Mobile Game Framework for Substrate](https://github.com/creator-rs/creator/) :green_circle: | [Amethyst](https://amethyst.rs/) + [Substrate](https://substrate.dev/)
| No-code Platforms | [EzCode's Polkadot.js plugin on Bubble.io](https://bubble.io/plugin/polkadotjs-1639402639641x977692461648052200), [Blackprint Visual Programming Polkadot.js module](https://github.com/Blackprint/nodes-polkadot.js) :green_circle: | |
| XCM | [XCM-tools](https://github.com/PureStake/xcm-tools) :green_circle: | |
| Wallet Connection | [Tesseract](https://github.com/tesseract-one/Tesseract.rs) :green_circle: , [WalletConnect](https://github.com/WalletConnect-Labs/walletconnect-v2-monorepo) :red_circle: | |
| Other | [open-web3 JS library](https://github.com/open-web3-stack/open-web3.js) :yellow_circle: , [VM-Bridge](https://github.com/CycanTech/GVM-Bridge) :red_circle: , [srtool](https://github.com/paritytech/srtool) :yellow_circle: , [Substrate Tip Bot](https://github.com/paritytech/substrate-tip-bot) :green_circle: , [ORI (Onchain Risk Intelligence)](https://github.com/syntifi/ori) :yellow_circle: , [PolkaTools](https://github.com/albertov19/PolkaTools) :green_circle: , [polkadot-scripts](https://github.com/paritytech/polkadot-scripts) :yellow_circle: , [Static analyzer for Substrate FRAME's pallets](https://github.com/simon-perriard/saft) :green_circle: , [Sube](https://github.com/virto-network/sube) :red_circle: , [data-store-sidecar](https://github.com/CESSProject/data-store-sidecar) :green_circle: 

### :memo: ink Smart Contracts 

| Components | Existing projects | Potentially interesting projects
|-|-|-
| Bridges | [Dante Protocol](https://github.com/dantenetwork/protocol-stack-for-ink) :green_circle: | |
| DeFi | [Vera](https://github.com/veradefi/defi) :red_circle: , [Nsure Insurance](https://github.com/nsure-tech/dot-contract) :red_circle: , [Everlasting Cash](https://github.com/CycanTech/ELC) :red_circle: , [Coinversation](https://github.com/Coinversation/coinpro) :red_circle: , [zenlink-dex-contract](https://github.com/zenlinkpro/zenlink-dex-contract) :green_circle: , [AlgoCash](https://github.com/ReserveLabs/AlgoCash) :red_circle: | New seigniorage-style stable coins
| Gaming | [NewOmega](https://github.com/WiktorStarczewski/newomega.polkadot/blob/master/newomega_delegator/newomega/newomega.rs) :red_circle: | |
| DAO | [subDAO](https://github.com/SubDAO-Network/subDAO-contracts) :red_circle: , [RainbowDAO](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1) :red_circle: | |
| Spam Protection | [Prosopo](https://github.com/prosopo-io/integration) :green_circle: | |
| Other | [Candle Auctions](https://github.com/agryaznov/candle-auction-ink) :red_circle: , [polkasign-contract](https://github.com/SubDAO-Network/polkasign-contract) :red_circle: , [OCEX](https://github.com/w3f-community/ocex-smartcontract) :green_circle: | |


### :link: Chains and Pallets 

| Components | Existing projects | Potentially interesting projects
|-|-|-
| Scalable Transactions | [Perun channels](https://github.com/perun-network/perun-polkadot-pallet) :green_circle: , [CLI demo of Perun](https://github.com/perun-network/perun-polkadot-demo) :red_circle: , [Astar](https://github.com/AstarNetwork/Astar) :green_circle: , [Celer](https://github.com/celer-network), [Gunclear](https://github.com/GunClear)| roll-ups, DAG-based consensus mechanisms, side chains |
| Bridges |  [interBTC](https://github.com/interlay/interbtc) :green_circle: , [Ethereum by Centrifuge](https://github.com/centrifuge/), [EOS by Bifrost](https://github.com/bifrost-finance), [POA <> Substrate](https://github.com/paritytech/parity-bridge) :red_circle: , [Substrate <> Ethereum DAI Bridge](https://github.com/akropolisio/POC-polkadai-bridge) :red_circle: , [Substrate <> Substrate Bridge](https://github.com/paritytech/substrate-bridge-relay) :red_circle: , [BTC by ChainX](https://github.com/chainx-org/ChainX) :yellow_circle: , [Cosmos-Substrate bridge](https://github.com/ChorusOne/wormhole-bridge) :red_circle: , [Substrate IBC Pallet](https://github.com/octopus-network/substrate-ibc) :green_circle: , [Polkadot Ethereum Bridge](https://github.com/Snowfork/polkadot-ethereum) :green_circle: , [Darwinia](https://github.com/darwinia-network/darwinia) :green_circle: , [Stellar/DeFi Bridge by Pendulum](https://github.com/pendulum-chain/pendulum-prototype) :red_circle: , [Filecoindot](https://github.com/ChainSafe/filecoindot) :red_circle: | ZCash |
| Privacy | [Webb Anon](https://github.com/webb-tools/anon) :red_circle: , [ZeroChain](https://github.com/LayerXcom/zero-chain) :red_circle: , [pLibra (Phala Network)](https://github.com/phala-network), [Automata Network](https://github.com/automata-network/automata) :green_circle: , [zCloak Network](https://github.com/zCloak-Network), [Zero Network](https://github.com/zero-network) |  [Multi-Asset Shielded Pool (MASP)](https://github.com/anoma/masp) :yellow_circle: , [Zkay](https://arxiv.org/pdf/2009.01020.pdf), [Zexe](https://eprint.iacr.org/2018/962.pdf)
| ZKP | [ZeroPool](https://github.com/zeropoolnetwork), [Megaclite](https://github.com/patractlabs/megaclite) :red_circle: , [zkMega](https://github.com/patractlabs/zkmega) :red_circle: , [PLONK for Substrate](https://github.com/AstarNetwork/plonk) :green_circle: , [Webb Anchor Protocol](https://github.com/webb-tools/protocol-substrate) :green_circle: |
| Off-Chain | [substraTEE](https://github.com/scs/substraTEE) :red_circle: 
| DeFi | [Compound Gateway](https://github.com/compound-finance/gateway) :red_circle: , [Parallel Finance](https://github.com/parallel-finance/parallel) :green_circle: , [PINT](https://github.com/ChainSafe/PINT) :red_circle: , [Katal Chain](https://github.com/katalchain), [Laminar Chain](https://github.com/laminar-protocol/laminar-chain) :red_circle: , [Acala](https://github.com/AcalaNetwork), [Centrifuge](https://github.com/centrifuge/), [Stafi](https://github.com/stafiprotocol/stafi-node) :red_circle: , [Bandot](https://github.com/bandotorg/Bandot) :grey_question: , [Definex](https://github.com/y2labs-0sh), [OAX Foundation](https://github.com/OAXFoundation/parrot) :red_circle: , [Cybex](https://github.com/alexxuyang/substrate-dex) :red_circle: , [Zenlink](https://github.com/zenlinkpro/pallet-zenlink) :red_circle: , [Swaps Pallet](https://github.com/lsaether/pallet-swaps) :red_circle: , [Polkadex](https://github.com/Polkadex-Substrate/Polkadex/tree/master) :yellow_circle: , [SubDEX](https://github.com/subdarkdex), [HydraDX](https://github.com/galacticcouncil/hack.HydraDX-node) :green_circle: , [Substrate Stablecoin](https://github.com/apopiak/stablecoin) :red_circle: , [Standard protocol](https://github.com/digitalnativeinc/standard-substrate) :yellow_circle: , [Polkaswap](https://github.com/sora-xor/sora2-network) :green_circle: , [Curve AMM](https://github.com/equilibrium-eosdt/equilibrium-curve-amm) :red_circle: , [Konomi Network](https://github.com/konomi-network/cumulus/) :red_circle: , [Composable Finance](https://github.com/ComposableFi/composable) :green_circle: , [Stable Asset](https://github.com/nutsfinance/stable-asset) :yellow_circle: , [Libra Payment](https://github.com/atscaletech/libra) :yellow_circle: , [Mangata](https://github.com/mangata-finance/mangata-node) :green_circle: , [Tidechain](https://github.com/tidelabs/tidechain) :green_circle: | DEX with privacy and confidentiality features such as those found in a [dark pool](https://en.wikipedia.org/wiki/Dark_pool)
| Smart contract chains | [moonbeam](https://github.com/PureStake/moonbeam) :green_circle: , [Edgeware](https://github.com/hicommonwealth), [EVM Module](https://substrate.dev/docs/en/next/conceptual/runtime/contracts/evm_module), [ParaState](https://github.com/ParaState/substrate-ssvm-node) :red_circle: , [gear](https://github.com/gear-tech/gear) :green_circle: , [CENNZnet](https://github.com/cennznet/cennznet) :green_circle: , [SkyeKiwi](https://github.com/skyekiwi/skyekiwi-network) :green_circle: , [OAK-blockchain](https://github.com/OAK-Foundation/OAK-blockchain) :green_circle: | smart contract chains with novel security approaches, smart contract chains based on existing toolchains|
| Oracle | [Laminar](https://github.com/laminar-protocol/open-runtime-module-library/tree/master/oracle) :green_circle: , [Parallel Finance](https://github.com/parallel-finance/parallel/blob/feature-oracle/pallets/ocw-oracle/src/lib.rs) :green_circle: , [Katal Chain](https://github.com/katalchain/blockchain/tree/master/modules/oracle) :grey_question: , [Chainlink-polkadot](https://github.com/smartcontractkit/chainlink-polkadot) :red_circle: , [Ares Protocol](https://github.com/aresprotocols/ares) :green_circle: , [Kylin Network](https://github.com/Kylin-Network/kylin-node) :green_circle: , [interbtc-clients oracle](https://github.com/interlay/interbtc-clients/tree/master/oracle) :green_circle: , [Anonima](https://github.com/webb-tools/anonima) :red_circle: , [Apollo](https://github.com/ComposableFi/composable/tree/main/frame/oracle) :green_circle: 
| Identity/DID | [Caelum Labs](https://gitlab.com/caelum-tech/lorena), [Litentry](https://github.com/litentry/litentry-runtime) :red_circle: , [pallet-did](https://github.com/substrate-developer-hub/pallet-did) :red_circle: , [dot-id](https://github.com/prasad-kumkar/dot-id) :red_circle: 
| IoT | [Nodle](https://github.com/NodleCode/), [MXC/DataHighway](https://github.com/DataHighway-DHX/node) :red_circle: , [peaq-network-node](https://github.com/peaqnetwork/peaq-network-node) :yellow_circle: 
| Verifiable Claims | [KILT](https://github.com/KILTprotocol), [Dock](https://github.com/docknetwork), [Fennel Protocol](https://github.com/fennelLabs/Fennel-Protocol) :green_circle: 
| Supply chain| | | 
| Health care| [AriaHealth](https://github.com/AriaHealth/MetaNetwork) :red_circle: | | 
| Social Networking | [Social Network](https://github.com/social-network), [SubSocial](https://github.com/dappforce/dappforce-subsocial) :red_circle: , [ZeroDAO](https://github.com/ZeroDAO/ZeroDAO-node) :yellow_circle: , [Myriad Node](https://github.com/myriadsocial/myriad-node) :green_circle: , [Wika Network](https://github.com/randombishop/wika_etl) :red_circle: , [Project Liberty](https://github.com/LibertyDSNP/mrc) :green_circle: | Private instant messenger that uses on-chain identity
| Governance/DAO| [Hashed Network](https://github.com/hashed-io/hashed-substrate) :green_circle: , [Sunshine DAO](https://github.com/sunshine-protocol/sunshine-bounty) :red_circle: , [Governance OS](https://github.com/NucleiStudio/governance-os) :red_circle: , [Idavoll Network](https://github.com/idavollnetwork/idavoll) :red_circle: , [Substrate Moloch](https://github.com/DoraFactory/Substrate-Moloch-V2) :red_circle: , [QRUCIAL-DAO](https://github.com/Qrucial/QRUCIAL-DAO) :green_circle: , [Societal](https://github.com/sctllabs/societal-node) :green_circle: |   [Consul](https://github.com/consul/consul) :green_circle: - Open Government and E-Participation Web Software
| Prediction Markets and Futarchy| [Zeitgeist](https://github.com/zeitgeistpm/zeitgeist) :green_circle: , [X Predict Market](https://github.com/XPredictMarket) |
| Messaging | [HOPR](https://github.com/validitylabs/HOPR-PL-Substrate) :red_circle: , [Mailchain](https://github.com/mailchain), [Nolik](https://github.com/chainify/pallet-nolik/) :red_circle: 
| File Storage, Cloud | [DatDot](https://github.com/playproject-io/datdot) :red_circle: , [Crust Network](https://github.com/crustio), [offchain::ipfs](https://rs-ipfs.github.io/offchain-ipfs-manual/), [Canyon Network](https://github.com/canyon-network/canyon) :red_circle: , [CESS](https://github.com/Cumulus2021/cess) :green_circle: , [CESS Proving Subsystem](https://github.com/CESSProject/cess-proving-system) :red_circle: , [Iris](https://github.com/ideal-lab5/substrate) :red_circle: , [fmd-cess](https://github.com/CESSProject/fmd-cess) :red_circle: , [IPFS Frame V3](https://github.com/DanHenton/pocket-substrate/tree/ipfs-ocw) :green_circle: , [Threefold Chain](https://github.com/threefoldtech/tfchain) :green_circle: 
| Name Service| [Substrate Names](https://github.com/xaya/substrate-names) :red_circle: , [ENS on Substrate](https://github.com/hskang9/substrate-name-service) :red_circle: , [PNS-Pallets](https://github.com/pnsproject/pns-pallets) :red_circle: 
| Gaming | [Bit.country](https://github.com/bit-country/Bit-Country-Blockchain) :green_circle: , [SubGame](https://github.com/SubGame-Network/subgame-network) :yellow_circle: , [subzero](https://github.com/playzero/subzero) :red_circle: , [Web3Games](https://github.com/web3gamesofficial/web3games-blockchain) :yellow_circle: , [Ajuna Network](https://github.com/ajuna-network/), [Gafi Network](https://github.com/cryptoviet/gafi) :green_circle: , [Asylum](https://gitlab.com/asylum-space/asylum-item-nft) | 
| Computation/AI | [DeepBrain Chain](https://github.com/DeepBrainChain/DeepBrainChain-MainChain) :green_circle: , [AI Infrastructure on Blockchain](https://github.com/anudit/cerebrum) :red_circle: |
| Enable specific use-cases | [Robonomics](https://github.com/airalab/substrate-node-robonomics) :green_circle: , [UniversalDOT](https://github.com/UniversalDot), [Evercity Sustainable Finance Protocol](https://github.com/EvercityEcosystem/evercity-chain) :green_circle: , [Fennel Protocol](https://github.com/fennelLabs/Fennel-Protocol) :green_circle: , [logion](https://github.com/logion-network/)
| NFT | [ternoa](https://github.com/capsule-corp-ternoa/chain) :green_circle: , [FRAME Pallet: NFTs for Substrate](https://github.com/danforbes/pallet-nft) :red_circle: , [NFT Parachain by usetech](https://github.com/w3f-community/nft_parachain) :red_circle: , [DNFT](https://github.com/DNFT-Team/dnft-substrate-node/tree/master/pallets) :red_circle: , [RMRK-Substrate](https://github.com/rmrk-team/rmrk-substrate) :green_circle: 
| Randomness | [DKG and Randomness Beacon](https://github.com/Cardinal-Cryptography/substrate/tree/randomness-beacon) :yellow_circle: 
| Licensing | [Anagolay Network](https://github.com/anagolay/anagolay-chain) :green_circle: | 
| Banking Integration | [FIAT on-off-ramp](https://github.com/element36-io/ebics-java-service) :green_circle: 
| Crowdfunding | [Imbue Network](https://github.com/ImbueNetwork/imbue) :green_circle: , [Quadratic Funding pallet by Dora](https://github.com/zhangjiannan/QFgrant) :red_circle: , [Quadratic Funding pallet by OAK](https://github.com/OAK-Foundation/quadratic-funding-pallet/tree/master) :red_circle: |  [Minimum Anti-Collusion Infrastructure (MACI)](https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413) 
| Licensing | [Anagolay Network](https://github.com/anagolay/anagolay-chain) :green_circle: | 
| Collection of Pallets | [Substrate Open Runtime Module Library](https://github.com/open-web3-stack/open-runtime-module-library) :green_circle: , [warehouse](https://github.com/galacticcouncil/warehouse) :green_circle: , [InvArch FRAME Pallet Library](https://github.com/InvArch/InvArch-Frames) :green_circle: | 
| Other | [Substrate Account Filter](https://github.com/gautamdhameja/substrate-account-filter) :red_circle: , [Subtensor](https://github.com/opentensor/subtensor) :green_circle: , [BitGreen](https://github.com/bitgreen/bitg-node) :green_circle: , [AdMeta](https://github.com/AdMetaNetwork/admeta) :green_circle: , [Chocolate Node](https://github.com/chocolatenetwork/chocolate-node) :red_circle: , [Virto Network](https://github.com/virto-network/virto-node) :yellow_circle: , [Substrate Validator Set](https://github.com/gautamdhameja/substrate-validator-set) :yellow_circle: , [DEIP](https://github.com/DEIPworld/deip-substrate) :grey_question: , [DeBio](https://github.com/debionetwork/debio-node) :green_circle: , [MathChain](https://github.com/mathwallet/MathChain) :red_circle: , [encointer](https://github.com/encointer/encointer-node) :green_circle: , [Grassland](https://github.com/grasslandnetwork/substrate_node) :yellow_circle: , [Substrate-Tutorials](https://github.com/rusty-crewmates/substrate-tutorials) :green_circle: , [Fair Squares](https://github.com/Fair-Squares/fair-squares) :green_circle: , [Totem Live Accounting](https://github.com/totem-tech/totem) :red_circle: | Decentralized review/reputation system

### :black_circle: Host

| Components | Existing projects | Potentially interesting projects
|-|-|-
| Rust | [Substrate](https://github.com/paritytech/substrate) :green_circle: , [Cumulus](https://github.com/paritytech/cumulus) :green_circle: 
| C++ | [Kagome](https://github.com/soramitsu/kagome) :green_circle: 
| Go | [Gossamer](https://github.com/ChainSafe/gossamer) :green_circle: 
| AssemblyScript |
| Light Client | [Substrate Connect](https://github.com/paritytech/substrate-connect) :green_circle: |

### :electric_plug: Network Maintenance Tools

| Components | Existing projects | Potentially interesting projects
|-|-|-
| Secure validator setup | [Polkadot Validation Node Ansible Setup](https://github.com/polkachu/polkadot-validator) :green_circle: , [Trutzone-based HSM](https://github.com/ZondaX), [W3F Polkadot Validator Setup](https://github.com/w3f/polkadot-validator-setup) :red_circle: 
| High availability setup | [Archipel](https://github.com/luguslabs/archipel) :yellow_circle: , [Polkadot Failover Mechanism](https://github.com/protofire/polkadot-failover-mechanism) :red_circle: , [Open Node Framework](https://github.com/Tenet-X/open-node) :grey_question: 
| Load Balanced Endpoints | [terragrunt-polkadot](https://github.com/insight-w3f/terragrunt-polkadot) :red_circle: , [Geometry Labs' Substrate Meta repo](https://github.com/sudoblockio/substrate-meta) :yellow_circle: 
| Deployment Tools| [Polkadot Package Manager](https://github.com/Blockdaemon/bpm-sdk) :red_circle: , [PolkaHub](https://github.com/akropolisio/polkahub-monorepo) :red_circle: , [Avado](https://github.com/AvadoDServer/AVADO-DNP-Polkadot-custom) :red_circle: , [Polkadot Deployer](https://github.com/w3f/polkadot-deployer) :red_circle: 
| Validator monitoring | [SubVT](https://github.com/helikon-labs/subvt) :green_circle: , [P.A.N.I.C.](https://github.com/SimplyVC/panic_polkadot) :red_circle: , [Polkalert](https://github.com/galacticcouncil/polkalert) :red_circle: , [B-Harvest](https://github.com/nodebreaker0-0/substrate/tree/prometheus_v0.3) :red_circle: , [nmonpolkadot](https://github.com/stakezone/nmonpolkadot) :red_circle: , [Polkadot-K8s-Monitor](https://github.com/ironoa/polkadot-k8s-monitor) :yellow_circle: , [Polkadot-Watcher](https://github.com/w3f/polkadot-watcher) :green_circle: , [1KV Telegram Bot](https://github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot) :yellow_circle: 
| Validator payout management | [Substrate validator auto payout](https://github.com/Colm3na/substrate-auto-payout) :yellow_circle: , [Polkadot Payouts](https://github.com/w3f/polkadot-payouts) :yellow_circle: , [staking-payouts CLI](https://github.com/emostov/staking-payouts) :green_circle: , [Payctl](https://github.com/stakelink/substrate-payctl) :red_circle: , [crunch](https://github.com/turboflakes/crunch) :red_circle: |

### :black_nib: Signatures

| Components | Existing projects | Potentially interesting projects
|-|-|-
| SR25519 | [rust](https://github.com/w3f/schnorrkel) :red_circle: (contains partial bindings for C, JavaScript, and Python), [.Net bindings](https://github.com/gautamdhameja/sr25519-dotnet) :red_circle: , [C](https://github.com/usetech-llc/sr25519) :red_circle: *(old)*, [C](https://github.com/TerenceGe/sr25519-donna) :red_circle: *(new)*, [C/C++](https://github.com/soramitsu/soramitsu-sr25519-crust) :red_circle: , [C#](https://github.com/usetech-llc/sr25519_dotnet) :red_circle: , [Go](https://github.com/ChainSafe/go-schnorrkel) :yellow_circle: , [java](https://github.com/debuggor/schnorrkel-java) :red_circle: , [PHP](https://github.com/gmajor-encrypt/sr25519-bindings) :yellow_circle: 
| Distributed key generation (DKG) | [keygen.rs](https://github.com/isislovecruft/frost-dalek) :red_circle: 
| Validator HSMs| |
| Validator HSM-like solutions|

### :heavy_check_mark: Consensus

| Components | Existing projects | Potentially interesting projects
|-|-|-
| PoC | [Spartan](https://github.com/subspace/substrate) :red_circle: |
| PoW | [PoW consensus for Substrate](https://github.com/paritytech/substrate/tree/master/client/consensus/pow) :green_circle: , [RandomX](https://github.com/kulupu/kulupu/tree/master/pow) :yellow_circle: , [Sha3 PoW](https://github.com/substrate-developer-hub/recipes/tree/master/consensus/sha3pow) :red_circle: |
| Block production | [BABE](https://github.com/paritytech/substrate/tree/master/client/consensus/babe) :green_circle: , [Aura](https://github.com/paritytech/substrate/tree/master/client/consensus/aura) :green_circle: |
| Finality | [GRANDPA](https://github.com/paritytech/substrate/tree/master/frame/grandpa) :green_circle: |
| Other | [Nimbus: Upgradeable consensus framework](https://github.com/PureStake/nimbus) :green_circle: | 


### :satellite: Networking

| Components          | Existing projects                                                                                               | Potentially interesting projects |
|---------------------|-----------------------------------------------------------------------------------------------------------------|----------------------------------|
| DHT crawler         | [Go](https://github.com/atredispartners/dht-crawler-polkadot) :red_circle: , [Kotlin](https://github.com/emeraldpay/polkabot) :red_circle: |                                  |
| RPC Tor-like access | [WhiteNoise](https://github.com/Evanesco-Labs/WhiteNoise.rs) :red_circle: |                                  |

## :construction_worker: Contributing

Pull requests, issues, or other contributions from the community are encouraged!  You can not only add specific projects, but also potentially interesting fields/areas which are currently missing in the tech stack.

:heavy_exclamation_mark: All technologies listed above need to be open-source. Ideally, the links lead directly to the code.

_Note: You will need a GitHub account to suggest changes or open issues. If you do not have one, you may [sign up for free](https://github.com/join)._
