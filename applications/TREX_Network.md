# TREX - Timed Release Encryption Xing chains

- **Team Name:** [NexToken Technology](https://github.com/NexTokenTech)
- **Payment Address:** 0x10286c9d17a1aF1D73E19762A5132d604a076585 (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

TREX is a project to develop a protocol and network to support permissionless timed-release encryption in Web3. It is a decentralized network that consists of validators, archivers, off-chain workers in a trusted execution environment (TEE), and other essential substrate nodes. This project is developed based on the Substrate framework as a parachain of the Polkadot ecosystem. We aim at institutional and business clients who need blockchain technology to enhance their data security and build [decentralized reputations](https://newsletter.thedefiant.io/p/-decentralized-reputation-is-about-a8b) on Web3.

### Overview

TREX is the world’s first blockchain platform that enables decentralized timed-release encryption (dTRE) to unlock information (as serialized and structured data) and actions (as serialized procedures to be called in distributed remote nodes) for future events. The data and procedures were encrypted and distributed in a decentralized blockchain network. The data or procedure would be only revealed or executed after specific counts of clock ticks. 
Based on a monetary incentive mechanism, all nodes in the TREX network will collaborate and automatically adjust to ensure 
the accurate release of data and procedures as a consensus-based system.

The dTRE technology is enabled by combining the latest confidential computing hardware and blockchain technology. 
The data is encrypted with a symmetric encryption scheme and sent to random trusted off-chain workers for release. No third party has any early access to the encrypted contents.
The attacker must defeat security hardware to access encrypted data with unknown values. Therefore, we can build a decentralized reputation on the Polkadot-based blockchain ecosystem and security hardware backed by semiconductor giants (e. g. Intel, AMD, and ARM). The dTRE technology provides content creators with a critical tool to monetize their reputation.

The emerging Web3 technology and Polkadot ecosystems could enable enormous cross-chain applications which need time-sensitive and time-critical encryption of data and procedures, 
including DAO governance, DeFi applications, decentralized prediction market, and strategy market. The data and procedures must be confidential in many scenarios until release time. TREX and its blockchain application programming interface (API) could confidently empower the TRE applications on Web 3. With a blockchain-backed reputation system, it could terminate cheap talks and scams on today’s social networks and create new marketplaces for trading time-sensitive confidential data and procedures.

The TREX project roots a new family of Web3 applications in the Polkadot ecosystem and is being actively developed with the Substrate framework.
It aims to support interoperation between parachains in the Polkadot ecosystem and enables a group of new applications with dTRE technology.
The TREX project was initialized to support an idea that needs immutable open records but is hidden until future events.
Applications like elections and blind bidding can be made on Web3 without dependency on centralized services. Our team believes that TRE will support a new type of Web3 application which accelerates the adoption of Web3.

### Project Details

Our targeted clients are strategy markets and AI trading bot markets that need to build up their decentralized reputations (e. g. [tipranks.com](https://www.tipranks.com)). The early encrypted data as a part of the on-chain extrinsic data is immutable; the released early data can help a creator to establish its Web3 reputation. In addition, the delayed release mechanism can effectively monetize the client's Web3 reputation by selling the early access privilege to subscribers.

- Core functionality in TREX network

The TREX network is derived from confidential computing technology that creates a trusted execution environment (TEE) inside an off-chain worker so that a key to access the confidential data can be temporarily held inside the off-chain worker's enclave and released in a pre-determined future.
Besides the regular validator nodes, as in any other substrate-based blockchain network, there is a special kind of "keyholder" node that host off-chain workers in TEEs.

![TREX arch](https://sat02pap001files.storage.live.com/y4mCxh3v92-Q3SeR5Le00nfK2p3UqwRvTLNymJrm1VPHO6pyaC3h4g6IjJ3WeSznwK4llcxYDwVjwTuNSYcG31wx7gbuFPcVA8QZL2nACTkJ4SylngdwUusZKr95ThUv7jCwUaqIIXcCKgYKsmoIRrL-sb3Db3sq-hwkTX-CRxhluIuCYcSh0mMzHtpsLG-AySK?width=947&height=685&cropmode=none)

As shown in the above figure, a client machine can encrypt its data with a symmetric key and send the data to the current block as a part of extrinsic. The client machine must shield the key in use and send the shielded key to the off-chain workers inside the TEE to unlock the encrypted data in the future. The client needs to get remote attestation before trusting the off-chain worker to protect the key from third-party accesses. The client can use a decentralized attestation service, or it may use some cloud-based remote attestation services (e. g. [Azure Confidential Computing Service](https://azure.microsoft.com/en-us/solutions/confidential-compute/)).

Inside the protected enclave, a separated and encrypted region for code and data, the key for releasing the on-chain data is inserted into a priority queue based on its release time. And the off-chain worker has no access to the shielded data in use. Once the release time is approaching its nearest block, the off-chain worker would release the key from the TEE and expose it to the public. Once the key is released, the block index engine can discover the early encrypted data and decrypt it so it can be accessed publicly. 

- Enhanced security in timed-release encryption

The scheduled release is only constructed from the time-lapse inside the enclave without using any unsecured system clock since malicious workers may manipulate the system time to retrieve keys before the schedule. Once the enclave starts, it will acquire current time from the trusted time service with [Intel SGX SDK](https://github.com/intel/linux-sgx/blob/1115c195cd60d5ab2b80c12d07e21663e5aa8030/sdk/tae_service/tae_service.cpp). Furthermore, the latest Xeon scalable processors that support 2nd-gen SGX may use "RDTSC" instruction to calculate relative time within the enclave. A malicious worker may suspend the execution for an arbitrary duration or "rewind" the release process, but it only delays or duplicate the release of encrypted data. An off-chain worker gains nothing from doing that (See TREX tokenomics for more details). As a result, the off-chain worker cannot manipulate the release schedule of keys with an attested executable.

Since there could be security loopholes in Intel SGX or any other similar system, the client cannot rely on a single worker to protect their data from early release. Therefore, key splitting is an effective method for distributing a key to multiple off-chain workers. Furthermore, if a malfunctioned worker may lose a part of a key, the client can send multiple copies of a piece to different workers to reduce the chance of missing parts. Eventually, all parts of a key will be released to the blockchain. Then a block index engine may reconstruct the original key from a collection of pieces and use the key to unlock early data.

- TREX tokenomics

The TREX network comprises different entities, including third-party developers, validators, archivers, and users. A simple example of core functionality in the TREX network.

![Workflow](https://sat02pap001files.storage.live.com/y4m-6fn2EHbIEctqPi4P_8PI0jc8B0HaImf_-065KvTi7GH_A9LUzkFnD5gfszLtS9GQujRDwQanrz_WihcMZvj8s6AhATo0xDIY_hQlDJbUdVNgT_qMJaE-N1k5RC5vEBXStgqTOypL9ql-FbjjDXSiDtNBqBeimm_7CBMsqqPHegLLgnu9mH_uCHHGEPhh6aR?width=662&height=586&cropmode=none)

In this image, creators provide timed-release encrypted data or procedures and send them to the blockchain; and to be released in a future event. For example, an analyst can encrypt its suggested actions toward future events and send them to the TREX network. We call them creators, who create strategies and predictions based on their analysis or other AI algorithms. The creator could be a person or an AI bot. It does not matter since all of his mentions about future events could be recorded on our blockchain, thus, becoming immutable. The encrypted data would be decrypted and released in the future after the event occurs (e. g. Market closed and revealed the final price of an asset). Since the on-chain data is immutable, the creators cannot delete their wrong suggestions or predictions. All of their previous data would generate a reputation for themselves.

Third-party on-chain data services, which disassemble the block data into extrinsic and analyze encrypted forecasts or strategies, could develop ranks or recommendations based on specific metrics (e. g., return of investment). Furthermore, the end users may get early access to a creator's data by paying them a fee. Thus, end users can use the predictions and investment strategies created by the creators for their interests. Those third-party services essentially are archiver nodes hosting a block index engine to decrypt on-chain data and put it into a PostgreSQL database. In addition, they may customize their business logic to their specific service and provide API interfaces to end users and their front-end applications.

![Tokenomics](https://sat02pap001files.storage.live.com/y4mMGg63WzuNDLdTQE20uTLa-6RoCiYlXyidKsJPUw1SqlBkleu7wmYZimXTtZMRitQEmCvOmQEscQoDV1bp6jJ4bM-85nDw4UiEupKd5Ckoay0aNeMTwUAGO5xhe5mLI5CbQW9RwbCYQW6su6uYvfwjgIiGZ6f1IxpjFyQKGnMmTaUdWFwJ5X8_bSO_JXwvEQC?width=764&height=606&cropmode=none)

Since the TREX software is fully open source and free to use, the users only pay fees to use the infrastructure. For example, the tokens on the TREX network could be used as insertion fees for writing dTRE data on the blockchain. The data fee is comprised of a base fee and a data fee per byte. Since there is an upper limit on block size, the data fee is dynamically adjusted based on network usage. New tokens would be created by validators on the TREX network and exchanged to end users and creators. The creators buy tokens from validators and use them to post their dTRE data. The keyholders can also earn tokens from the creators by providing off-chain workers to hold their encryption keys. 

When the creator tries to put dTRE data on the blockchain, it shall contain an instant payment for the validator and a conditional fee for the off-chain worker. The creator randomly chooses one or a few off-chain workers after remote attestation and sends the shielded key to them so that the data can be decrypted after a period. The keyholders may only receive the fee after successfully releasing the key in time. The off-chain worker can only receive the payment after the key is released.

Here are some discussions on tokenomics.

1. Can the client-side hide incorrect data from being revealed? 

For example, if the creator, as the client, wants to publish their data after a specific time, it will put the encrypted data on-chain and seed its encryption key to the off-chain worker. Since the client cannot control the TOCW, the data will be released anyway. 

2. What if the TOCW fails?

If the TOCW fails in case of system failure, the key in such an off-chain worker may be lost. For better safety, the client may send his encryption key to more than one TOCW if the data is highly valuable. If the client finds the key is not there after the schedule, the client may send the key to the TOCW again to make up.

3. Can the TOCW helps the creator cheat?

The off-chain worker may block the key to unlock some incorrect information from release. After the pre-determined release time, if the key does not show up on-chain. The keyholder may receive a penalty. 
To enhance the network security, we may use a safelist (voted by all nodes) for keyholders to put a key on the chain. If a keyholder fails to release a key frequently, it may lose its privilege.
On the other side, if a client has too much dead TRE data, of which the key is lost forever, the archiver, as a block data index service, may label this client's account as a potential cheater. Because it can always send a duplicate key to unlock the previous data after the TOCW failure. If the creator doesn’t want to do that, it implies that they want to hide some information damaging their reputation.


- An overview of the technology stack to be used

Our project is exclusively developed with Polkadot substrate ecosystems.

  1. Our TREX node software uses the latest Substrate framework.
  2. Our TREX block index engine customizes from the Substrate Archive. It releases timed-release encrypted data and archives dTRE data into a PostgreSQL database.
  3. For applications on the TREX network, we provide solutions, including an [API library](https://github.com/NexTokenTech/trex-subxt), to our business partners, who may use it to insert dTRE data on the TREX network and retrieve data with the TREX blockchain index engine.
  4. The DevOps tool uses [Terraform](https://www.terraform.io) to automate the deployment of the TREX infrastructure with other backend services on cloud computing platforms so that our targeted clients can easily integrate the dTRE technology with their existing services.

- Documentation of core components, protocols, architecture, etc. to be deployed

Since our previous whitepaper uses PoW consensus, we are working on our new whitepaper and documentation.

- PoC/MVP or other relevant prior work or research on the topic

We developed an early PoW-based demo and a set of software to exhibit the basic idea of timed-release encryption with blockchain. The demonstration has nothing to do with the actual TREX test-net or main-net but provides a demo of the concept for early users and investors.
It includes the following software:

  1. A demo blockchain node ([GitHub Repo](https://github.com/yangfh2004/Time-Release-Blockchain));
  2. A demo block index engine ([GitHub Repo](https://github.com/NexTokenTech/time-release-watcher-demo));
  3. A WASM library for the demo of dTRE technology ([GitHub Repo](https://github.com/NexTokenTech/trex-app-wasm));
  4. A demo app to use the dTRE technology as a Chrome extension ([GitHub Repo](https://github.com/NexTokenTech/trex-demo-wallet-ext));

The demo mentioned above is deployed on AWS and may be accessed with a [web link](http://www.timecaps.net). It is worth noting that Our final release will use a different type of technology based on hardware encryption.

In the current stage of TREX development, we are working on the following software with the Rust programming language to deliver public test-net and main-net:

  1. TREX node software that supports fundamental blockchain functionalities, consensus, and keyholding;
  2. The customized TREX archive software scans the blockchain and unlocks encrypted data, and releases it according to its preset clock ([GitHub repo](https://github.com/NexTokenTech/trex-archive));
  3. The TREX API library to submit dTRE data as a form of Substrate extrinsic to TREX nodes ([GitHub repo](https://github.com/NexTokenTech/trex-subxt));
  4. The infra-as-code (IaC) TerraForm script to deploy the TREX test-net and backend services ([GitHub repo](https://github.com/NexTokenTech/trex-test-net));

Since we are working on a new version of TREX node software using confidential computing technology, we need to rewrite our consensus code and design the off-chain worker code for keyholding. The first version of the demonstration of dTRE will be built as a side-chain in an existing decentralized network since it has tested its implementation using off-chain workers within the TEE. However, we will have to develop some specific pallets to support our tokenomics. Thus, our network cannot be a side chain in its final formation. Unlike other networks using confidential computing technology, we are not supporting general computing in TEEs but focus on dTRE technology built on top of confidential computing hardware.

- What your project is _not_ or will _not_ provide or implement

We are not working on a universal public chain like ETH or Polkadot that serves as layer-0 infra. Our parachain only focuses on providing a specific decentralized infra service - the decentralized timed-release encryption for cross-chain applications.

We are not building a smart contract platform but provide APIs to any cross-chain smart contracts if using dTRE technology.

We are not going to build a web or mobile application for end-users (e. g. decentralized strategy markets), but we are working with our business partners by providing them dTRE infra services and integration toolchains. Moreover, we are trying to attract more third-party developers to our network and the Polkadot ecosystem to develop various dApps based on the dTRE technology and Polkadot cross-chain technology.

We are not providing infrastructure for general confidential computing but only focus on dTRE technology with confidential computing hardware. 

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

Our final goal is to create a new frontier of dAPPs with dTRE technology in the Web3 domain. The Polkadot ecosystem provides very comprehensive and advanced support for cross-chain interoperability. With Polkadot relay chains, bridges and parachains, arbitrary data could be encrypted with our dTRE technology and transferred across various blockchains, and triggered future events on any other blockchains. The Polkadot multi-chain network allows us to explore the full potential of our dTRE technology since it may be integrated with the whole web3 network and create a large number of new dApps.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Our target audience is whoever needs to send a temporarily confidential message in the future. It could have a list of applications/businesses including but not limited to 

  1. Decentralized strategy market (to replace the centralized service like [tipranks.com](https://www.tipranks.com) ) 
  2. Decentralized prediction market (to replace the centralized service like [predictit.org](https://www.predictit.org) )
  3. Universal key escrow (encrypted arbitrary crypto key to hold the escrow fund and release in the future)
  4. Decentralized voting system (encrypted ballot and reveal it in the future)
  5. Decentralized blind bidding (encrypted all bids and reveal in the deadline to find the final bid winner)

Any creators and developers with the above applications could be our target audience. For example, they could be parachains and dApps that provide decentralized trading platforms, strategy markets, prediction markets and so on.

- What need(s) does your project meet?

Essentially, the world needs [decentralized reputations](https://newsletter.thedefiant.io/p/-decentralized-reputation-is-about-a8b) to open a new Web3 frontier. Our dTRE technology helps dApp dev and owners build up their decentralized reputations and creates marketplaces for temporarily confidential data. Therefore, the early access privilege to the dTRE data can be traded so that the reputed content creator can sell their strategies or predictions. Additionally, the dTRE technology can support a range of new Web3 applications that need features for timed data release.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

No, according to our best knowledge, we are creating all new decentralized applications in the Web3 domain. We don't see similar projects in blockchains providing decentralized timed-release encryption (dTRE) services.
We believe that the dTRE technology will radically change many existing centralized applications since it builds up a trustless and permissionless mechanism to send a message to the future and create markets for early access or subscription.

The [Integritee Network](https://integritee.network) pioneers confidential computing in Web3 as a project in the Substrate / Polkadot / Kusama ecosystem. It provides remote attestation services for us to build a fully decentralized tech stack. Although the TREX network uses the same type of confidential computing technology as theirs, the TREX network anchors on a different kind of service, working with another category of clients. We will eventually grow into two different types of projects in the same ecosystem.

## Team :busts_in_silhouette:

### Team members

- Leo Yu (executive, finance and product)
- Fanghao Yang (research, engineering, and technology development)
- Oscar Wang (operation and human resource)
- Xingqiu Yuan (chief scientist)
- Jake Jian (consultant, strategy and data science)
- Dan Yin (senior software engineer)

### Contact

- **Contact Name:** Fanghao Yang
- **Contact Email:** team@trex.ink
- **Website:** www.trex.ink

### Legal Structure

- **Registered Address:** 165 ARRETON RD, PRINCETON, NEW JERSEY 08540
- **Registered Legal Entity:** NexToken Technology LLC

### Team's experience

Leo Yu: Serial entrepreneur of crypto technology startup companies with several successful entrepreneurial projects and good investment returns. Excellency at integrating international resources and having an outstanding strategic development vision. Proficiency in communication with global clients and team coordination skills. [Resume](https://1drv.ms/b/s!AmAQnrV8ivm-hqx4tSxtL5LBTynnCA?e=NiON2k)

Fanghao Yang: former researcher & software engineer in IBM Research, US DOE national lab at Princeton University, worked with a few startup companies leading a team of developers. See the [LinkedIn page below](#team-linkedin-profiles).

Oscar Wang: Serial entrepreneur with more than ten years of business management and marketing experience covering markets from technology to manufacturing. More than five years of experience as a general manager of large-scale enterprises, with excellent skills in solving complex problems, business planning, team management, and interpersonal skills, strong learning ability in new fields, and firm team-oriented. [Resume](https://1drv.ms/b/s!AmAQnrV8ivm-hqxz2lU8gDhlMasAmA?e=KqTwvi)

Xingqiu Yuan: chief research scientist in US DOE national labs for distributed computing and large-scale HPC software design. See the [LinkedIn page below](#team-linkedin-profiles).

Jake Jian: former Morgan Stanley analyst and Accenture consultant team lead. Directors and senior management of many prestige IT companies. See the [LinkedIn page below](#team-linkedin-profiles).

Dan Yin: 10+ years of experience in the development of fintech services and software [Resume](https://1drv.ms/b/s!AmAQnrV8ivm-hqx3VjTtmlBvMlYZ4g).

### Team Code Repos

- https://github.com/NexTokenTech
- https://github.com/NexTokenTech/TREX
- https://github.com/NexTokenTech/trex-archive
- https://github.com/NexTokenTech/trex-subxt
- https://github.com/NexTokenTech/trex-test-net
- https://github.com/NexTokenTech/elgamal_trex

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/yangfh2004
- https://github.com/xyuan
- https://github.com/kaisuki

### Team LinkedIn Profiles

- https://www.linkedin.com/in/fanghaoyang/
- https://www.linkedin.com/in/xingqiu-yuan-68b62b38/
- https://www.linkedin.com/in/jakejian/

## Development Status :open_book:

- TREX core node code ([GitHub repo](https://github.com/NexTokenTech/TREX))

The early version of dTRE technology uses PoW consensus, which is no longer suitable for today's climate change and energy crisis. We are actively working on the new node software leveraging confidential computing hardware to achieve the same or even better results.

- TREX block index engine ([GitHub repo](https://github.com/NexTokenTech/trex-archive))

It is in progress to be integrated with our business partners to support the deployment of the dTRE technology in existing platforms with the rabbitMQ message broker.

- TREX API library ([GitHub repo](https://github.com/NexTokenTech/trex-subxt))

Tested and successfully submitted dTRE data to the TREX blockchain node.

## Development Roadmap :nut_and_bolt:

In the current stage, our first milestone is to deliver an early demonstration using confidential computing hardware for decentralized timed-release encryption. We will develop our first demo as a side-chain in a decentralized network that supports off-chain workers in TEEs. We request a level-1 grant for the early demonstration and will work on the next level in the following application. We have accumulated solid experience in development with the Substrate framework, so we believe that we can implement our network at a fast pace.

At the next level, our second milestone is integrating the TOCW with our network under our particular consensus and mechanism. We will also implement key splitting as a third milestone to enhance the security and reliability of our system at the next level.
Finally, our fourth milestone is the implementation of XCMP for cross-chain applications.

### Overview

- **Total Costs:** 10,000 USD


### Milestone 1 — Implement TREX network as a Polkadot para-chain

- **Estimated duration:** 2 months
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT License
| 0b. | Documentation | We will provide both **inline documentation** of the code, API documentation and a basic **tutorial** that explains how a dApp user can publish his timed-release data on the blockchain. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an online documents that explains how this module works as described in the following figure.
| 1. | TREX key-holder (off-chain worker) | A TREX off-chain worker (named as "key-holder") in TEE so that client can safely send encrypted data to the network and send the shielded key to the key-holder. The key-holder worker is remotely attested by a decentralized network so that the worker node cannot manipulate the release of the encrypted data. The "key-holder" node will provide a key-holder service to hold the key piece inside the TEE and release it until it expired.
| 2. | TREX node | A TREX core node provides pallets and APIs so that a key-holder can publish its remote attestation reports on the chain and other clients can access the report to verify its TEE. The TREX node also provides APIs to post timed-released data and expired keys to unlock those datas.
| 3. | CLI tool | A CLI tool to provide basic blockchain and TEE functionalities like generation of accounts, checking account balance and getting public key for shielding encryption key.

## Future Plans
In the short term, our team is working on landing the first dTRE infrastructure on the Web3 frontier and promoting the technology in the Polkadot/Substrate ecosystem.
- As long as more funding and resource are allocated, the latest confidential computing technology (e. g. [Intel TDX](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-trust-domain-extensions.html) ) will be supported and integrated into the TREX node. As an active open-source project, TREX will follow up on trends and development in confidential computing hardware and integrate solutions from different chip makers to support various hardware. Since only the off-chain workers use the TEE, many different versions of off-chain workers may co-exist on our network as long as it fits our remote attestation policy.
- In the long run, we focus on expanding the cross-chain applications and interoperability with the Polkadot ecosystem. We are working on many software tools, deployable containers, and API libraries for dApp developers using dTRE technology in their applications. While more and more users and dApp devs join the TREX network, we will design the sharding solution to reduce the data insertion fee on the layer-1 network so that dTRE applications can be more affordable.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website and Twitter.
