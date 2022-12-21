# Dante Network

- **Team Name:** Dante Network
- **Payment Address:** 14yr1tovebKbRbxggduV1vbTPtRQtgzTXh9tdZ34w3pGbc4W (Polkadot (Statemint) USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview

We are sincerely applying for a grant from Web3 Foundation to build an infrastructure to help multi-chains currently in web3 be connected together just as OSI did for the internet in web2. We call this infrastructure Dante Network.

Dante Network is a middleware to empower multiple ecosystems to interoperate and interconnect in web3. In Dante Network, we define and offer a general protocol stack to realize interoperability and interconnection. This is an infrastructure bringing innovative experiences in web3, just as internet protocol is for today’s internet. With this infrastructure, participants in web3 can make general message transmission and contract invocation between multi-chains.

We will cooperate with the smart contract platforms in Polkadot/Kusama to build and deploy our protocol stack, such that the whole Polkadot/Kusama ecosystem can interoperate with public chains temporarily not able to access XCMP generally. For example, more general than token, general information can be sent from contracts on Ethereum to Crust with the help of our protocol stack deployed on Moonriver and XCMP of Polkadot/Kusama.


### Project Details

Dante Network will build a multi-chain Collaboration protocol stack along with an implementation of it.
- Firstly, Dante protocol stack will be implemented as smart contracts deployed on multi-chains including more than one smart contract platform in the Polkadot ecosystem, through which DApps' in the Polkadot ecosystem can send or receive general messages, to or from contracts deployed on chains outside. Besides, Contracts deployed on different chains can call each other as convenient as they did in the same chain.
- Secondly, we will build off-chain routers called "Adaption nodes" to make the underlying information routing. Anyone can participate in Dante Network by deploying an "Adaption node" with their own private key.
- Thirdly, we will provide SDKs covering multiple technology stacks for DApp developers to make multi-chain interoperations more convenient and easier. The technology stacks will include Rust (OAK in Polkadot, and Near, ICP outside), Solidity (Moonriver, Shiden in Polkadot, and EVM chains outside), Cadence (Flow), etc.

More details of the project are as follows: 

**Architecture**
![Architecture](https://github.com/dantenetwork/Pitch-Deck/blob/main/images/%5BEN%5DDante%20Pitch%20Deck3.7_06.jpg)

Generally, the protocol stack includes three layers, the “Service Presentation Layer”, the “Security Quality Layer”, and the “Consensus Verification Layer”. We make a concrete implementation of these.

The “Service Presentation Layer” is at the top of the protocol stack. They have defined the message organization protocol, the invocation method, and the service interfaces, which can be analogous to “RESTful Web Service” and “HTTPS” in web2. This makes developers of web3 DApps easier to construct. We will bring privacy transaction technology into our protocol stack to help protect the privacy of behavior and data on chain.

The “Security Quality Layer” is the next down from the top, which defines a collection of security mechanisms that can be chosen according to the demand of the application. “SQoS” defines the concrete mechanisms of routing, verification, privacy, authority, etc. This can be analogous to the “QoS” in TCP/IP protocol cluster. 

The “Consensus Verification Layer” is the bottom layer of the protocol stack, which is especially for web3. The verification algorithms include commitment verification and belief verification, which can be adapted to a wider range of scenarios in web3. And besides, a “Parallel Route Scheduling” algorithm is within the protocol responsible for the selection of the routers, along with which are the algorithms include evaluation, incentives, and challenge. At the bottom of this layer, they define a “Physical” protocol defining the standard behavior of the routing node(named “Adaption node” officially), which is just analogous to the “Physical Layer” of OSI. 


That’s the overview of the protocol stack in Dante Network. We think it can be regard as the “Internet protocol” of Web3. The implementation of the protocol stack can be embedded in public chains as the smart contract along with the off-chain "Adaption node". That’s just like the TCP/IP protocol cluster embedded in operating systems to construct the computer network along with the routers.

#### Highlights
- Multi-ecosystem barrier-free Collaboration (Including a Token, and more than a Token): Provide a general data verification protocol to execute the circulation of the Token, the comprehensive sensing of information, and the free collaboration of DApps among multi-chains just like the “internet”.
- A dynamic balance between security, scalability, and decentralization: Provide an SQoS mechanism to customize to various scenarios just like the QoS in TCP/IP protocol cluster.


**Technology stack**
* ink!, Rust
* node.js

### Ecosystem Fit

![ecosystem fit](https://github.com/dantenetwork/Pitch-Deck/blob/main/images/%5BEN%5DDante%20Pitch%20Deck3.7_05.jpg)

Polkadot/Kusama creates an interesting and great thing that various chains in its ecosystem with different abilities can be connected and cooperate with each other. We cannot agree on this philosophy more. The future of web3 would be in a multi-chains world, and currently, besides Polkadot ecosystem, there also has been lots of chains with special abilities, some of which are very famous and have made great success already (such as Ethereum, Solana, Avalanche, Near, etc.), some of which are really special (such as Flow, PlatON, Arweave, etc.). Although chains in Polkadot/Kusuma can make general communications with each other with XCMP, there's no way general and convenient enough for them to interact with chains outside of Polkadot. 

Aligned with the philosophy of Polkadot/Kusama, Dante Network provides a suitable method to connect Polkadot/Kusama with the other chains of the web3 world. Unlike current Token bridges from Polkadot to other ecosystems, more general than token, we provide a general message distribution and contracts invocation mechanism between Polkadot and other ecosystems. With Dante Network, every participant in Polkadot can enjoy not only the services provided by chains within the Polkadot ecosystem but also a wider range of services provided by the whole web3 world. And more users outside of Polkadot can visit services and resources within the Polkadot ecosystem without leaving their familiar environment. 

In general, Dante Network will help Polkadot to expand its boundaries.


## Team :busts_in_silhouette:

### Team members & experience

- Shawn Zheng (Tech leader of Dante Network)
    - Worked for a state-owned enterprise (Fortune 500) engaged in the security business for 10+ years.
    - Full-stack engineer in information security, AI, blockchain, etc.
    - Hackathon winner as a team tech leader: [Near Metabuild Hackathon](https://devpost.com/software/universal-trusted-cross-chain-bridge), [PlatON Dorahacks](https://forum.latticex.foundation/t/topic/5676);
    - Github: https://github.com/xiyu1984
    - Mail: xiyuzheng1984@gmail.com

- Zack Wu (Full-stack Dev in web3, core dev in Dante Network)
    - EOS, PlatON technical community senior participant (output 40 technical articles, help EOS, PlatON fix many bugs).
    - Technical mentor for EOS 1st Hong Kong Hackathon Live.
    - Technical leader of EOS Genesis node eosiomeetone, the largest node in Asia in terms of traffic when the main network was launched, with TPS 8k+.
    - Senior full-stack engineer (worked in Go, Snowball).
    - Hackathon winner: [Near Metabuild Hackathon](https://devpost.com/software/universal-trusted-cross-chain-bridge), [PlatON Dorahacks](https://forum.latticex.foundation/t/topic/5676);
    - Github main page: https://github.com/wuyahuang.
    - Technical articles: https://github.com/meet-one/documentation.
    - Mail: wuyahuang@gmail.com

- George Huang (Full-stack Dev in web3, core dev in Dante Network)
    - 2Senior participant of PlatON technical community ported Chainlink project for PlatON and exported several technical articles.
    - Built and maintained Polkadot, Kusama, PlatON, Ethereum2.0, ChainX, and other project nodes
    - Crust, Phala project node data center leader, responsible for project operations and maintenance, and the development of operations and maintenance-related tools.
    - 10 years as a full-stack engineer in finance, games, education, etc.
    - Hackathon winner: [Near Metabuild Hackathon](https://devpost.com/software/universal-trusted-cross-chain-bridge), [PlatON Dorahacks](https://forum.latticex.foundation/t/topic/5676);
    - Github: https://github.com/virgil2019.
    - Mail: hht2015ily@gmail.com

- Kay Lin (Full-stack Dev in web3, core dev in Dante Network)
    - A state-owned enterprise medical alliance chain development, as well as the construction and maintenance of distributed storage network, related SDK development.
    - Years of experience in blockchain, a deep participant in EOS, PlatON, and other communities, exporting technical articles, and modifying bugs.
    - Participate in EOS node maintenance, EOS DApp development.
    - Hackathon winner: [Near Metabuild Hackathon](https://devpost.com/software/universal-trusted-cross-chain-bridge), [PlatON Dorahacks](https://forum.latticex.foundation/t/topic/5676);
    - GitHub: https://github.com/kay404.
    - Mail: kay20475@gmail.com

- James Fan (Full-stack Dev in web3, core dev in Dante Network)
    - Over 10 years of working experience in various aspects of computer programming, analysis, development, and testing.
    - EOS, Fluence, Nervos technical community participant.
    - Full-stack engineer(worked in Go/Rust/C++/Javascript)
    - Hackathon winner: [FluenceLabs gitcoin hackathon](https://gitcoin.co/issue/fluencelabs/sovereign-data-hackathon/1/100026738), [nervos gitcoin hackathon](https://www.nervos.org/blog/nervos-gitcoin-hackathon-winners-announced). 
    - Github: https://github.com/fsy412
    - Mail: fsy412@gmail.com


### Contact

- **Contact Name:** Shawn Zheng
- **Contact Email:** DanteDev01@hotmail.com, xiyuzheng1984@gmail.com
- **Website:** https://www.dantechain.com/
- **Twitter:** https://twitter.com/DanteNetwork 
- **Medium:** https://dante-network.medium.com/ 
- **Telegram:** https://t.me/DanteNetworkEN 
- **Email:** murphy_l@dantechain.com 

### Legal Structure

- **Registered Address:** 
5001 BEACH ROAD 
\# 07-37 
GOLDEN MILE COMPLEX 
SINGAPORE (199588)
- **Registered Legal Entity:** KVANACE TECHNOLOGY FOUNDATION LTD.

### Team's experience

Our technical team consists of several experienced full-stack engineers and scientists. Each member has many years of technical experience. Our members have a lot of experience in the web3 world. They are deep participants in several technical communities, hackathon winners, and node service providers for Polkadot/Kusama, EOS, and PlatON.


### Team Code Repos

- [Github Organization](https://github.com/dantenetwork)
- [Demo Repo](https://github.com/dantenetwork/cross-chain-demo/tree/develop)
- [SDK Repo](https://github.com/dantenetwork/solidity-contract-template)

#### Team members' repos:
- [Shawn Z](https://github.com/xiyu1984)
- [Zack W](https://github.com/wuyahuang)
- [George H](https://github.com/virgil2019)
- [Kay L](https://github.com/kay404)
- [James F](https://github.com/fsy412)

## Development Status :open_book:

### Demo Vedio
The principle of Dante protocol stack can be seen below: 
https://www.youtube.com/watch?v=CYXx4O8Xgcs

### Demo
Everyone can try a simple demo at [Demo](https://github.com/dantenetwork/cross-chain-demo/tree/develop)

### Tasting SDK
We’ve published a tasting version of the dev SDK for multi-chain DApp developers at: 
[tasting SDK](https://github.com/dantenetwork/solidity-contract-template/tree/develop)


## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 30,000 USD. 

### Milestone 1 — Service expression layer,  message verification & router credibility evaluation algorithms, basic off-chain routers, basic SDK

- **Estimated duration:** 3 month
- **FTE:**  3
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the the SDK of Dante smart contract developed in ink! to build their own Omnichain DApps. At this stage, the tutorial will cover how to make message communications and contract invocations between Polkadot’s smart contract parachains and other chains(like Ethereum).|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an **article** that explains what was done as part of the grant. And we will publish a series of articles that explains how Dante Protocol Stack works from a high-level perspective. The content of the articles will be consistent with the functions at this stage.
| 1. | (ink!)smart contracts: Service expression layer | Development and testing of Service expression layer on some of Polkadot’s smart contract parachains (Astar/Edgeware); Demos for communication and interoperation between one of Polkadot’s smart contract platforms and Ethereum, Near, Avalanche.|
| 2. | (ink!)smart contracts: message verification algorithm | Development and testing of verification algorithms of the consensus verification layer on some of Polkadot’s smart contract parachains (Astar/Edgeware) and other chains including Ethereum, Near, Avalanche, Flow, PlatON. Verification contracts deployed on testnet. Demos for information verification.|  
| 3. | (ink!)smart contracts: router credibility evaluation algorithm | Development and testing of the credibility evaluation algorithms of the consensus verification layer; Selection of growth function and decrease function suitable for smart contract on-chain is the key point; Router behavior evaluation contracts deployed on testnet; Demos for router evaluation according to their behaviors.|
| 4. | off-chain routers: general message sharing | Development and testing of the basic abilities of the off-chain router, including general message encoding and decoding, message delivery between multi-chains; Demos for some of Polkadot's smart-contracts parachain, along with Ethereum, Near, PlatON, etc. |
| 5. | (Rust)SDK: general message sharing | Build an early-stage SDK including a general message sending and receiving interface. Adapted to some of Polkadot's smart-contracts parachain, along with Ethereum, Near, PlatON, etc. |          


### Milestone 2 — parallel router scheduling algorithms, SQoS, off-chain routers, SDK, testnet

- **Estimated duration:** 3 month
- **FTE:**  3
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the the SDK of Dante smart contract developed in ink! to build their own Omnichain DApps. At this stage, the tutorial will cover how to use SQoS to balance security and scalability when making multi-chain operations. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains what was done as part of the grant. And we will publish a series of articles that explains how Dante Protocol Stack works from a high-level perspective. The content of the articles will be consistent with the functions at this stage.
| 1. | (ink!)smart contracts: parallel router scheduling algorithm | Development and testing of parallel router scheduling algorithms of the consensus verification layer; Suitable randomness is the key point; Scheduling contracts deployed on testnet. Demos for router scheduling, a router with high credibility will have a higher probability to be chosen. |  
| 2. | (ink!)smart contracts: SQoS | Development, and testing of the SQoS (Security Quality of Service) mechanisms including hidden & reveal, challenge confirm, error rollback, verification threshold, authority context, etc. Multi-chain message contracts deployed on testnet. Demos for showing each of the SQoS items. |  
| 3. | off-chain routers: SQoS | SQoS abilities related to off-chain routers, including hidden & reveal, challenge confirm, error rollback, verification threshold, authority context, etc.  Adapted to some of smart contract parachain in Polkadot, along with Ethereum, Near, PlatON, etc. | 
| 4. | (Rust)SDK: contracts invocation; SQoS | Interface of contracts invocation between multi-chains and setting of SQoS;  Adapted to some of smart contract parachain in Polkadot, along with Ethereum, Near, PlatON, etc. | 
| 5. | testnet | The testing for the basic abilities of the whole protocol stack. Demos for the whole abilities. Launch the testnet of Dante Network.|  


## Future Plans

After the `ink!` version of the Dante protocol stack is fully tested, we would like to implement a `pallet` version for Polkadot ecosystems. Anyone who is integrating it can communicate with other ecosystems conveniently.

Our next step is to work with many application-based projects to iterate our SDK for developers based on their needs, making web3's multi-chain interaction easier.

At the same time, we will continue to improve and update our protocol stack as we use it. We will invite more project parties, developers, and end-users to participate and give their valuable suggestions.

Security is the most important point in this field, so it will be fully tested on the testnet. And there will also be some targeted hackathon events related to security.

Dante Network will be a long-term project because our final goal is to provide a simple, easy-to-use, secure infrastructure. At that time, the interactions between most of the chains in web3 will be as convenient as the interactions with terminal devices in web2 through the internet. 


## Additional Information :heavy_plus_sign:

We highly endorse the philosophy of Web3 Foundation. We think the web3 world is expected to be an “internet” of multi-chains, each of which can provide its own special features and every participant can share it worldwide. So there should be a kind of infrastructure that can provide consistent and convenient multi-chain interoperability for DApps in Web3 so that they can focus on their application business. At that time, DApps can serve the whole web3 market instead of staying in some certain ecosystem. 

In our idea, we think different chains are like realms in mythology. There are barriers for users to having universal transportation to travel around the different realms. And there is Bifrost to open a teleport between realms, but it is neither cheap nor easy.  So inspired by this, we want to grow a “World Tree” that supports open and collaborative ecosystems in web3. 

It can take roots in the computing resources and storage infrastructures in web3 and web2 to provide orderly resource scheduling. And it can grow by offering non-differentiated data collaboration services for DApps in web3 and providing valid resources. This is why we have the Dante Network. 


