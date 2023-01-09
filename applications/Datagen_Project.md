# Datagen Project

- **Team Name:** B-Datagray
- **Payment Address:** 0x330330C5F676cec700CB30aF9E37D3012f525AeE - Ethereum Network - USDC
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview

### Overview

B-Datagray’s Datagen project concerns the development of a decentralized infrastructure for CPU/GPU cloud computing, in chain, through different blockchain components.

The Datagen infrastructure requires the creation of a Substrate-based blockchain with some key features: low latency time, high efficiency (compatibly with the decentralized nature of the network), high degree of decentralization (higher than a traditional PoS would allow) of the physical hardware providing the cloud computing (therefore requiring a customized consensus protocol) and in-chain (or near-in-chain) computation (no off-chain based solutions).

The Datagen infrastructure primarily want to serve: privacy friendly search engines and browsers, decentralized Web3 games and other ones (for example decentralizing the hardware layer of PoS blockchains, typically hosted on AWS and similar, etc…).

What the Datagen infrastructure aims to be is basically a Web3 version of AWS, mostly for Web3 native applications (+privacy friendly search engines regardless if Web2 or Web3) requiring low latency times and efficiency rates that previous designs of decentralized networks for in-chain computation didn’t allow.

B-Datagray team is really interested in creating this solution because we think that for the Web3 revolution to grow, and stay decentralized, is very important to go down to the backbones of the Web. B-Datagray team thinks that is a remarkable problem that most Web3 applications are still using AWS and similar centralized providers to run (if we go down to the hardware layer) and helping to diversify the array of solutions available to other Web3 project is a very inspiring goal for us.

### Project Details

Architecture: The infrastructure will rely on two main pillars: a fast and independent substrate based blockchain (Fast Blockchain FB) and a slower but more resilient Polkadot/ Kusama parachain (Heavy Blockchain HB).

![datagen_infrastructor_diagram](https://i.imgur.com/3VDy0Wm.png)

The actual cloud computing will happen in our FB Datagen (substrate based). The reason for which we are having the cloud computing in an independent blockchain is that we need our blocktime to be lower than Polkadot’s / Kusama’s blocktime (ideally < 1sec when the infrastructure is ready) to be able to provide cloud computing to most Web3 gaming applications and privacy-friendly search engines.

While, what happens in this HB will be asynchronously and randomly verified in the Parachain.

We adopt the relativistic point of view of the data-flow from the user to explain the underlying process.
The user connects to the network (typically through the API of the application provider that is using the Datagen Infrastructure), than the user goes through the so called ECHO procedure: he/she sends a package of raw data to be processed by the network and the first validator that answers correctly to him/her is paired to the user on a one to one basis (this is the only PoW heavy-like process that is happening in the whole infrastructure and is done to pair any user with the most efficient validator to him/her, starting from the assumption that by geography and/or specific application in use and/or other factors not all the users and the same validators have the same latency time).

The user is now paired to a specific validator (for a given amount of time -in the magnitude of some weeks-; after that given amount of time the user will send periodically other ECHOs, to allow to reassess the efficiency of the validators in the network).
The user (through the Application Provider’s API) sends raw data both to the paired validator in the FB Datagen and to the HB Polkadot’s Parachain.

The validator in the FB must solve the raw computational request and turn it into a hash, within the blocktime, so, the hashed data must propagate in the whole FB, but there is no need for the raw data to be processed multiple times (like in a PoW) in the FB.

So, what is verifiably shared by the validators of the FB is the series of hashes and not the reiteration of the same computational process. The FB, as a whole, is so behaving more alike a PoS blockchain than a PoW.

Since the blocktime of the Parachain is longer than the blocktime of the FB, both the raw data from the user and the hashed data from the validator are sent to the Parachain in an asynchronous way (typically it could be every 10 to 30 blocks of the FB).
The parachain is not re-computing all the raw and the hashed data, for the moment is just storing them in a verifiable way.
![datagen_deep_infrastructure_diagram](https://i.imgur.com/w0obsru.png)

**Example**: `raw data X` came from `user A`, resulting in `hash Y` from `validator A`. Randomly, the Parachain extracts some computational problems to be double-checked. For example, it can randomly extract `raw data X` for double-checking and entrust it to validator `B`, `C` and `D` (sending back the request to them in the FB).
`B`, `C` and `D` compute `X` again. Presuming that the majority of `B`, `C` and `D` (so at least two of them) are honest, the majority of them should compute `X` and obtain the same hash (`hash Z`). They send the hash back to the Parachain, and than compare the hashes. If for at least two validators (between `B`, `C` and `D`) `hash Z`  = `hash Y` (the same hash obtained by `validator A`), `validator A` is then presumed honest and can continue with its validating activity.
If, instead, for at least 2 validators (between `B`, `C` and `D`) `hash Z` ≠ `hash Y`, `validator A` is presumed a liar.
Since to be a validator `A` needed both to provide GPU and/or CPU processing capacity and to buy and stake DataGen native tokens, is easy to impose an economical cost for the cheating `validator A` by making it loose staked coins as a consequence of its wrong computation. In this regard the Parachain acts as an authority for the random processes of the FB.

We prefer the use of a Parachain, instead of two FB or a HB of our own FB, because of the improved resiliency that the Polkadot ecosystem can provide.

We must underline that, even if the goal of this very complex design is to keep even the hardware layer as decentralized as possible (compared to a PoS network, where there is strong economic incentive for a validator to host the computing capacity on the top of centralized server farm like AWS) we can’t prevent the validators hosted on centralized providers to participate to the network.

The trade-off for such a result would so impede efficiency and low latency that, instead of trying to attain it (for some ideological reason of decentralization per self) we think we should try keeping the hardware layer of the network _decentralized enough_. We think that this can be attained as a collateral result of the above explained ECHO procedure (whose primary goal is to increase the overall efficiency and decrease the overall latency time of the network, by pairing users and validators on the basis of response time).

This collateral positive externality happens since validators that are faster to respond to specific clusters of users are rewarded by the process with the right to provide the cloud computing power requested by those clusters, with meaningful consequences for the geographical distribution of the validators themselves: in some geographical contexts (US coasts or Western Europe), where the internet connection is fast and big server farms are close-by, this will keep the economic incentive for validators to be hosted in centralized server farms; on the opposite, in other contexts (like some parts of South-East Asia, Sub-Saharan Africa and LATAM), where broadband connection is slow or inexistent and server farms far away, there will be a strong economic incentive to set up independent hardware facilities to validate the activity of local or regional areas.

Those independent validators, while not optimally located to compete with AWS-hosted validators for users in the “north of the world”, can also become validators of last resort in the case in which the centralized server farms are not providing service anymore (it can be due to technical outage or political pressure for censorship or other factors). As said, the goal is not to expel AWS-hosted validators from the Datagen network, but to keep it decentralized enough while being at the same time low latency and computationally efficient.

The only computational activity that is happening off-chain is (following the example above) the act of `validator A` processing the `raw data X` and giving it to the `user A`, but: to receive the reward in `#DG`, `validator A` needs also to send the hashed data to both the other validators of the FB lighter chain and to the Parachain, since failing to do so will mean no reward because `validator A` would be processing off-chain data which wouldn't be recorded in the blockchain. Raw data is also sent independently from the `user A` to the Parachain and the correct pairing between hashing and raw data is always verified in-chain.

Ideally, we would like to explore some technic to keep light the blockchains long-term to keep it clean of old unnecessary raw data and just having hashes long term (that’s why we like so much Polkadot’s feature that allows blockchains to evolve without forking).

So Datagen is **NOT**:

- providing cloud storage of processed data;
- doing substantial stuff off-chain;
- PoW;
- PoS.


### Ecosystem Fit

The Datagen project fits into Polkadot ecosystem by expanding its use cases to the segment of decentralized cloud computing, whose importance can never be underlined enough for the healthiness of the broader Web3 and blockchain industries. Since the Datagen infrastructure is targeting mostly Web3 application providers as main customers to provide cloud computing to, this can loop in a positive feedback of new projects entering in the Polkadot ecosystem and as well as a very valuable use for a Polkadot’s / Kusama’s parachain.

In the Polkadot / Kusama ecosystem the most similar project is the  Phala Network  (https://www.phala.network/en/).
Even if Phala Network’s goal is similar to the one of Datagen (decentralized cloud computing), the technical approach is radically different, since Phala is pursuing off-chain computation secured by a secure smart-contract platform.

Both solutions are technically viable, but we feel that (without the presumption of being too knowledgeable about someone’s else target market or to give suggestions to someone else) Phala can be more appealing for legacy industries that want to  interface blockchain (and Web3) to innovate existing business model (for example we think that Phala could be very compelling for health-tech applications that want to validate sensitive clinical data with a secure, encrypted network) while (from the feedbacks that we receive) we feel that in-chain computation would be more compelling for Web3 native applications, since in-chain computation is perceived as more decentralized and more secure (not necessarily rightly) by the semi-technical management that often decides what provider is more suitable.

For the above explained reasons, we see Phala more like a complementary project than like an outright competitor (even if, of course, some marginal market overlapping could appear in some specific areas), since off-chain and in-chain computation, even if equally decentralized, can draw user-base from different contexts.

In other ecosystems we can see different competitors, each one with a very different both technical and go to market approach (explaining them one to one will be too long to explain in this grant application), both off-chain and in-chain.

Off-chain SONM (independent copy-cat of the Ethereum blockchain), Aleph.im (Solana, cross-chain compatible). And (more or less) in-chain: Akash (Solana Nodes + Cosmos), Golem (Ethereum), Cudos (L1, independent, cross-chain compatible), StackOS (Binance Polygon, Avalanche) and others.

The existence of many competitors (each different from the other) in many different stacks is for us a confirmation that we are working on something that matters and we think that for the Polkadot ecosystem is important to harbor different cloud computing projects, with different (in some points complementary and in other alternative) approaches, both to help boosting the wider Web3 environment to shift away from centralized Web2 providers like AWS, Google Cloud, Azure, IBM, Alibaba and to acquire and retain valuable projects while competing with other major stacks, because cloud computing matters a lot in the web economy and in the web physical infrastructure and for a top stack like Polkadot / Kusama should matter _where_ cloud computing, as a strategic asset, is happening.

In particular is possible to observe that the Solana ecosystem is backing both one in-chain (Akash) and one off-chain (Aleph.im) decentralized cloud computing project, clearly in light of the different markets than in-chain and off-chain decentralized cloud computing can tap. In this way Solana ecosystem is positioning itself with a strong head-start to win the race for decentralized cloud computing.

## Team

### Team members

- Angela Griggio (CEO)
- Luca Eugenio Barlassina (COO)
- Niccolò Baldini (Head of Substrate Division)
- Ren Okamoto (Head of Solidity Smart-Contracts Development)
- Alawiye Olukayode (front end developer)
- William Liu (part-time / blockchain developer)
- Giulia Cortinovis (part time / web designer)
- Ahmed Abdel Al (part time / graphic designer)


### Contact

- **Contact Name:** Angela Griggio
- **Contact Email:** team@b-datagray.com
- **Website:** https://www.b-datagray.com/

### Legal Structure

- **Registered Address:** Castleforbes Road 22, Dublin 1, Dublin, Ireland, EU.
- **Registered Legal Entity:** B-Datagray Limited

### Team's experience

Both founders (Angela & Luca) have a legal background. They entered in the blockchain space in 2019 (shifting carrier) because they both strongly believe in the transformative power that the blockchain revolution can have on society.

After ≈1 year of self-taught study of the blockchain technology and market, they incorporated B-Datagray in late 2020. At the beginning it was a very lonely but enriching journey, since they had 0 previous connection in the industry, 0 track record and 0 capital. Angela and Luca started being full-time on the project in January 2021.

In Spring 2021 they started building the technical team (at the beginning all part time, due to the lack of capital) and not without encountering not particularly honest devs, while that made things more difficult short-term, long-term it allowed the funders to become more skilled in managing a team. Our currently beautiful team started to come togheter after summer 2021.

In that period, we also entered in the XEurope Accelerator. Ren (with 7 years of coding experience and 5 of Solidity coding) was the first to become mostly full-time, in October 2021, before we were able to pay him a salary.

In November B-Datagray received the first VC investment and to date we have 2 VC and 2 angel investments.  We have developed all the tokenomic smart contracts, including a community governance smart contract to help smoothing the transition from the BSC to our Native + Polkadot blockchain and all of them have been audited by Certik. B-Datagray has also been recently finalist at the MIT Bitcoin Pitch Competition 2022.

We know that we still have much to grow and to learn, but all the journey until here and now taught to B-Datagray’s founder a great deal about bootstrapping and managing a company and about doing much with very little.

The ability and willingness to learn and grow and change and to work hard and to believe, even in the most difficult moment, and to find the resources, in the inner-self and in the other people, even when is seemingly and rationally impossible, in our opinion is more important than any learned skill for team and project leaders, since is an attitude that you have inside you and that you express in every aspect of your personal and professional life and that will be determinant to solve any of the multiple problems that will inevitably and unexpectedly occur during the project’s lifetime.

All our devs (and our designers) are professionals and also very committed to learning and improving constantly their skills.


### Team Code Repos

- https://github.com/Datagen-Project (B-Datagray’s website front-end and back-end and the front-end of our past in-chain sales and of our ongoing airdrop are in private repo)
- Alawiye ( https://github.com/oluseyi-frontend?tab=repositories )
- Luca (https://github.com/Lord-Nymphis )
- Niccolò ( https://github.com/viac92 )
- Ren ( https://github.com/fantasy2345 )
- William ( https://github.com/Crypto-One-dev )


### Team LinkedIn Profiles

- Angela (https://www.linkedin.com/in/angela-griggio-30a6a0182/)
- Ahmed (http://www.ahmedabdelal.com/ -Personal Website-)
- Alawiye (https://www.linkedin.com/in/alawiye-olukayode-aa365298/)
- Giulia (https://www.linkedin.com/in/giulia-cortinovis-98702796/)
- Luca (https://www.linkedin.com/in/luca-eugenio-barlassina-293077180/)
- Niccolò (https://www.linkedin.com/in/niccol%C3%B3-baldini-0400baa9/)
- Ren (https://www.linkedin.com/in/ren-okamoto-140a97224/)
- William (https://www.linkedin.com/in/william-liu-8a4672218/)


## Development Status

What we have already developed (using Solidity) is all the tokenomic smart contracts regulating our DataGen token (#DG), including one to smooth the transition from the BSC network to the Polkadot / Native Datagen Infrastructure, with a rigorously decentralized community voting procedure (https://github.com/Datagen-Project/DataGen-Smart-Contracts/blob/main/contracts/MiningReservation.sol).

In total our team has already developed around ≈2K lines of code of smart contracts just for the Datagen project, excluding of course the default configurations (like lock.json , etc…), we are speaking of functional code. In addition to that, we have in private repo the functional code for the website and the sale interface.

Regarding anyone in the Web3 foundation (and/or Parity Technologies) that we spoke with about our intended development with substrate we had: some technical email and email exchange with Gavin Wood, casual technical conversation with Richard Casey in a Dublin blockchain event, some calls (including technical explanations) with Rohan Joseph and Surag Sheth. One technical call with Justin Frevert. A long technical chat in person with Dan Shields at the MIT Bitcoin Expo 2022. A call with Santiago Balaguer.


## Development Roadmap

We will implement only a PoC with this grant.

The goal is to achive a fully functional mechanism for the random selection of the nodes in the fast blockchian and smooth communication between the two blockchains.

### Overview

- **Total Estimated Duration:** 5 months (starting date - August 2022)
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 44,000 USD

### Milestone 1 — Implement the randomized substrate pallet `pallet_random_node_selector` and `pallet_check_node_computational_work`

- **Estimated duration:** 1,5 month
- **FTE:**  2
- **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and an API specifications |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** on Medium that explains how we are going to develop the pallet. |
| 1. | Substrate pallet | We will create a `pallet_random_node_selector` that implement the randomized selection of the nodes for the fast blockchain using the Substrate `Randomness` trait. This pallet run on the Heavy Blockchain. |
|1a.| Functions | <ul><li>`reliable_node` update the list of the reliable nodes on the Heavy Blockchain.</li><li> `random_checker_node_selector` select 3 reliable random nodes in the fast blockchain to check the computational work.</li><li>`random_node_to_check` select a single random node to be check by the 3 checker nodes.</li></ul>
|2.| Substrate pallet | We will create a `pallet_computational_work` that runs computational work on the fast nodes and pair them with their works.
|2a.| Functions | <ul><li>`math_work_testing` this function will provide math problems to solve by Fast Blockahin nodes, just for testing.</li><li>`hash_work` function will hash the raw math problem and the elaborated result from the node and pair, comunicate to the Heavy Blockchain.</li></ul>
|3.| Substrate pallet| We will crate a `pallet_check_node_computational_work` that manage the control process on the Fast Blockchain.
|3a.| Functions | <ul><li>`check_computational_work` take info from the Heavy Blockchain (from the `pallet_random_node_selector`) and check the computational work of the target node. At this moment the nodes will make a simple math calculations just to check the mechanism.</li><li>`check_result` elaborate the result of the check process. If checked node has the same result of the majority of the checker nodes nothing happen. If the majority of the nodes have a different result from checked node this one will lose all his staked tokens (at this moment we only simulate the token lost) and checked node will be excluded from the Fast Blockchain.</li><li>`reliable_node` update the list of the reliable nodes on the Fast Blockchain.</li></ul>


### Milestone 2 — Connecting the two blockchains

- **Estimated Duration:** 1,5 months
- **FTE:**  2
- **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and and an documentation of the infrastructure |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** on Medium that explains how we are going to develop this step. |
| 1. | RPC Method (Random Selector) | We will create a custom RPC method to get the result of the random selection of the nodes to the Fast Blockchain. We will implement comunication to get: <ul><li> Random node id to check and raw math problem (From HB to FB) </li><li>3 Random node id for the checkers and raw math problem (From HB to FB)</li></ul>|
| 2. | RPC Method (Blockchain status) | We will implement a set of RPC methods to check the status of the two blockchains. <ul><li>Mapping of all nodes an their status (reliable or not reliable) sync from Heavy Blockchain.</li><li>Computetional works done and to be done by FB (total and mapping for every fast node)</li></ul> |
| 3. | Setup the two blockchains | We will setup the two blockchains to deep test the communications and `pallet_random_node_selector`, `pallet_check_node_computational_work` and `pallet_computational_work`.|



### Milestone 3 — Web Dapp

- **Estimated Duration:** 2 months
- **FTE:**  2.5
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and and an documentation of the infrastructure |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** on Medium that explains how we are going to develop this step. |
| 1. | Web Dapp | We will create a web dapp to verify the functionality of the infrastructure, the GUI will display interactions between the two blockchains. |
| 1a.| Dapp Mock-up| Download the mock-up of the dapp at [this link](https://drive.google.com/drive/folders/1SJRPbczZhRaXVLHnLvmp_XIeBtBBv0g-). |
| 1b. | Home page | ![home page](https://i.imgur.com/MhQVfEj.png) <ol><li>Filter to switch between the two blockcahins for searching purpose </li><li>Searching field (could search for blocks or nodes by typing id)</li><li>The id of the last node checked with `check_computational_work` pallet</li><li>The total number of nodes checked with `check_computational_work` pallet</li><li>Total checks with `check_computational_work`</li><li>Avarage number of checks on a single fast node with `check_computational_work` pallet</li><li>Id of a fast blockchain node</li><li>Number of checks on a node with `check_computational_work` pallet</li><li>The fast nodes that verify the computational work with `check_computational_work` pallet</li><li>Check result from `check_computational_work` pallet</li><li>Total blocks finalized by the blockcahin</li><li>Total nodes of the blockchain</li><li>Block height</li><li>Block age</li><li>Validator id of the block</li></ol>|
| 1c. | Fast Blockchain - Block Page| ![FB Block](https://i.imgur.com/ZDMuX7I.png) <ol><li>Blockchain identifier</li><li>Block  identifier (height)</li><li>Block height, arrows change the block by 1 (left -1, right +1)</li><li>The age of the block and its creation time</li><li>Validator identifier, optionally a name and time required to validate the block</li><li>Total  number of  fast nodes at this block height</li><li>Number of nodes checked with `check_computational_work` pallet in this block</li></ol>|
| 1d. | Heavy Blockchain - Block Page | ![HB Block](https://i.imgur.com/iJCc6nh.png) For functionalities see 1c. list. |
| 1e. | Fast Blockchain - Node Page | ![FB Node](https://i.imgur.com/wOBlIdp.png) <ol><li>Node identifier</li><li>Node identifier arrows change the node by 1 (left -1, right +1)</li><li>Blockchain identifier</li><li>Last time node  checked with `check_computational_work` pallet.</li><li>Total number of checks with `check_computational_work` pallet on this node</li><li>How many pass results on this block</li></ol>|
| 1f. | Heavy Blockchain - Node Page | ![HB Node](https://i.imgur.com/IYEyVzA.png) For functionalities see 1e. list.|


## Future Plans

- Short term, while the development team works on the grant proposal, the management team will continue the private sale of our DataGen token (to ensure more financial resources for our project) and increase our available network;

- Our long term plan is to access the Substrate Builder's Program and walk the path to obtain a Parachain.
