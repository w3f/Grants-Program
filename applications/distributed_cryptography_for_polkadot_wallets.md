# Distributed Cryptography for Polkadot Wallets
- **Team Name:** PolyCrypt GmbH
- **Payment Address:** 0x308Ca526B009e10Ef0482C38A3370BFb44A32908 (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

Cryptocurrency wallets are a highly attractive target for cyberattacks. An attacker that breaks into a wallet gets access to secret keys, thereby gaining full control over the user's funds. Many examples illustrate that hacks of cryptocurrency wallets are one of the major security threats for blockchain users. For example, in the recent security breach of the popular atomic wallet, hackers allegedly stole over $100 M worth of cryptocurrency from users of the atomic wallet. 

The overall goal of this project is to develop a cryptographic library to protect Polkadot wallets against cyberattacks. This will be done via threshold cryptography. Threshold cryptography is an emerging technology that can significantly strengthen the security of cryptocurrency wallets. The main idea is to share the secret key over multiple entities/devices, thereby making it much harder for an attacker to gain control over the user’s funds. There has recently been a lot of interest in academia and industry in designing new threshold cryptographic schemes that come with additional security features and offer better efficiency \[[1](https://eprint.iacr.org/2020/1390.pdf),[2](https://dl.acm.org/doi/10.1145/3372297.3423367),[3](https://eprint.iacr.org/2019/114)\]. Some of these schemes (or variants thereof) are currently deployed in both custodial and shared custodial wallets (e.g., [Fireblocks](https://www.fireblocks.com/) or [ZenGo](https://zengo.com/)). Most research and implementation of threshold signatures focus on the ECDSA signature scheme. This is because ECDSA is widely used by the two largest cryptocurrencies Bitcoin and Ethereum. In our project, we will focus on the Schnorr signature scheme, which is the main signature scheme used by the Polkadot ecosystem.

Concretely, we will develop a library that allows to thresholdize BIP32 wallets. BIP32 is a wallet standard that is widely deployed in practice and offers deterministic and hierarchical key derivation. Members of our team have previously designed a threshold BIP32 protocol for the ECDSA signature scheme \[[4](https://eprint.iacr.org/2023/312)\]. In the first phase of this multi-phase grant, we will adapt our threshold BIP32 scheme for Schnorr signatures that are used by Polkadot (i.e., the Schnorrkel/Ristretto). We will summarize our results as white paper that will include a full technical description of our scheme and a rigorous security analysis. We will also give advice on implementing our scheme to avoid common security incidents (e.g., missing range checks or zero knowledge proofs). Finally, we will disseminate our results via a medium article and if suitable through a publication at an academic conference (e.g., Financial Crypto, ACM CCS,...). 

Over the past years, our group has carried out intensive research on threshold cryptography and cryptographic wallets \[[4](https://eprint.iacr.org/2023/312),[5](https://dl.acm.org/doi/10.1145/3319535.3354236),[6](https://dl.acm.org/doi/10.1145/3460120.3484807)\]. With this project, we hope to see some of our research deployed and integrated in practice. Threshold cryptography has many fascinating applications for blockchain systems, and we hope that with this project we can contribute to this emerging field. We choose to focus on thresholdizing cryptographic wallets for two reasons. First, most of our prior research has been on this topic. Second, cryptographic wallets are a fundamental building block that is crucial for any blockchain application (DeFi, staking, gaming,...). Moreover, we have previously talked to researchers at web3/Polkadot, who encouraged us to apply for a grant on this topic. 

### Project Details

As mentioned above, in this grant we will research threshold cryptographic wallets. We will not develop code at this stage of the project (see the section on Future plans for more details on this), but instead deliver a white paper describing our new cryptographic scheme (including its formal security analysis). Moreover, this white paper will contain a specification that will be a solid basis to enable developers implementing our wallet scheme. Our research in this proposal is mainly based on our prior work on the ECDSA BIP32 wallets \[[4](https://eprint.iacr.org/2023/312),[5](https://dl.acm.org/doi/10.1145/3319535.3354236),[6](https://dl.acm.org/doi/10.1145/3460120.3484807)\]. Let us briefly describe our prior work relevant to this project below.

In \[[5](https://dl.acm.org/doi/10.1145/3319535.3354236),[6](https://dl.acm.org/doi/10.1145/3460120.3484807)\], we provide the first rigorous security analysis of the BIP32 standard. BIP32 has two main features. First, it offers a deterministic key derivation, where session secret keys are derived via an additive key derivation function from a master secret key. Second, BIP32 offers support for key hierarchies, which are particularly important for larger organizations managing cryptocurrency funds. Hierarchical key derivation also offers two types of wallets: hardened and non-hardened nodes. Hardened nodes offer better security as corrupting the secret keys assigned to such nodes does not affect the security of other nodes in this key hierarchy. The figure below gives a graphical representation of a BIP32 hierarchical wallet.

![bip32-hierarchical-wallets](https://user-images.githubusercontent.com/48735321/260511645-2ab7c1d1-5490-4300-94da-1f8f21767139.png)

In our research work published at the academic conference ACM CCS 2021, we propose a formal security model for hierarchical deterministic wallets. We define two security properties called wallet unforgeability and wallet unlinkability. The first says that funds cannot be stolen as long as the secret keys remain secure. We also integrate hardened node corruption, where the attacker is allowed to learn the secret keys assigned to a hardened node of its choice. The unlinkability property is a privacy feature and guarantees that individual wallets derived from the same master key are unlinkable. Finally, we show that the BIP32 standard satisfies wallet unforgeability and unlinkability. The analysis in our prior work \[[4](https://eprint.iacr.org/2023/312)\] only shows these security features for the ECDSA signature scheme.  For further details on BIP32, we refer to the description in our paper \[[6](https://dl.acm.org/doi/10.1145/3460120.3484807)\]. 

The second work that is relevant for this grant application is our work on thresholdizing BIP32 \[[4](https://eprint.iacr.org/2023/312)\]. We propose a cryptographic protocol for thresholidzing the ECDSA BIP32 wallet. We also give a security model and formally analyze the security of our cryptographic scheme within this model. A key insight of our work is that by slightly adjusting the BIP32 standard, we can offer significantly better efficiency. To this end, we rely on a threshold verifiable random function (TVRF) and show that for an appropriately chosen TVRF, we can seamlessly integrate it with an ECDSA threshold signature scheme. 

At a high level, this project will combine the results from \[[4](https://eprint.iacr.org/2023/312)\] and extend them to work with the Schnorr signature scheme used within the Polkadot ecosystem. Our work consists of a theoretical and more applied component. On the more conceptual/theoretical side, we will select an appropriate threshold scheme for Schnorr that is compatible with the Schnorrkel/Ristretto environment and offers overall good efficiency. We will design the protocols for threshold Schnorr BIP32. Moreover, we will investigate if our threshold TVRF idea from \[[4](https://eprint.iacr.org/2023/312)\] can also be applied for Schnorr signatures. If this is not the case, we will seek alternatives (e.g., using efficient multiparty computation to evaluate the hash function of BIP32). Finally, we will deliver a security argument for our scheme following the approach from our prior research. On the more applied side, our white paper will contain a specification for developers (with background in cryptography) to implement the key components of our proposal. We provide more details on the tasks carried out in this project as part of the development roadmap. 

### Ecosystem Fit

There is a large number of wallets supporting the Polkadot/Kusama ecosystem. While there exist general purpose wallets such as [ZenGo](https://zengo.com/) that use threshold cryptography to secure funds, there is a large number of Polkadot/Kusama specific wallets that currently do not offer their users support for threshold cryptography (e.g., [PolkaWallet](https://polkawallet.io/)). With threshold cryptography, our project meets the urgent need to offer better security to every user in the Polkadot/Kusama ecosystem. This is achieved without inducing additional blockchain fees as unlike multisignatures, threshold signatures produce standard Schnorr/ECDSA signatures that can be verified against a single public key. The results of the first phase of this project can be used by developers to integrate threshold cryptography in their products/wallets. Moreover, it forms the basis for our own software library that we could implement in a follow-up grant.

As mentioned above, there are multiple projects that build general purpose wallets leveraging threshold cryptography (e.g. [ZenGo](https://zengo.com/) or [Coinbase](https://www.coinbase.com/cloud/products/waas) as a distributed custodial wallet). We are not aware of any Substrate / Polkadot / Kusama dedicated project that works on threshold wallets. Moreover, even existing solutions in the wider blockchain ecosystem will not offer the features that we aim to achieve in this project since our work is based on recent research from members of our team. In particular, except for our own prior work \[[4](https://eprint.iacr.org/2023/312)\], we are not aware of any threshold BIP32 scheme – in particular, there currently does not exist any variant that is compatible with the Schnorr signature scheme.

## Team :busts_in_silhouette:

### Team members

Team members are listed in alphabetical order:
- **Hendrik Amler:** Hendrik is a co-founder and CEO of PolyCrypt. He holds a Master degree in IT Security from the Hochschule Darmstadt. 
- **Jan Bormet:** Jan is a Master student of Computer Science at the Technical University of Darmstadt. He is currently finishing his Master thesis on threshold cryptography and is a core developer at PolyCrypt.
- **Andreas Erwig:** Andreas finished his PhD degree in Applied Cryptography at the Technical University of Darmstadt in July 2023. His research focuses on the security of cryptographic wallets. He is co-author of most prior work mentioned in this proposal. 
- **Sebastian Faust:** Sebastian is a professor of Computer Science at the Technical University of Darmstadt. He leads the Applied Cryptography Group which focuses on cryptography for blockchain applications. He is a co-inventor of the Perun protocols and has published more than 70 academic papers at leading venues for research in cryptography and IT Security. He is co-founder and research lead at PolyCrypt.

### Contact

- **Contact Name:** Hendrik Amler
- **Contact Email:** hendrik@polycry.pt
- **Website:** https://polycry.pt

### Legal Structure

- **Registered Address:** Hilpertstraße 31, 64295 Darmstadt, Trakt C, Germany
- **Registered Legal Entity:** PolyCrypt GmbH, Handelsregister Darmstadt HRB 101219, VAT DE339864467

### Team's experience

The team has extensive experience in the design and analysis of cryptographic protocols and blockchain technology. Members of the team have co-invented the Perun state channel protocols \[[7](https://link.springer.com/chapter/10.1007/978-3-030-17653-2_21),[8](https://ieeexplore.ieee.org/document/8835315),[9](https://dl.acm.org/doi/10.1145/3243734.3243856)\], which have been published at the leading venues for research in IT Security and cryptography (ACM CCS, IEEE S&P and Eurocrypt). The Perun state channels are implemented for several major blockchain ecosystems including Ethereum, Polkadot and Cardano. Most important for this project is the team’s prior work on analyzing and designing cryptographic wallets \[[4](https://eprint.iacr.org/2023/312),[5](https://dl.acm.org/doi/10.1145/3319535.3354236),[6](https://dl.acm.org/doi/10.1145/3460120.3484807),[10](https://dl.acm.org/doi/10.1145/3372297.3423361)\]. Members of the team designed the first formal model for deterministic wallets \[[5](https://dl.acm.org/doi/10.1145/3319535.3354236)\], devised wallets with post-quantum security \[[10](https://dl.acm.org/doi/10.1145/3372297.3423361)\] and provided the first security analysis of the BIP32 standard \[[6](https://dl.acm.org/doi/10.1145/3460120.3484807)\]. The team also has extensive experience in threshold cryptography \[[4](https://eprint.iacr.org/2023/312),[11](https://eprint.iacr.org/2021/1290),[12](https://eprint.iacr.org/2023/1076)\]. 

PolyCrypt is a spin-off of the Technical University of Darmstadt that is a specialized technology provider for research in blockchains and cryptography. The current product portfolio of PolyCrypt includes the blockchain agnostic state channel framework Perun (https://perun.network) and a TEE-based second-layer solution called Erdstall (https://erdstall.dev). PolyCrypt also offers consulting services in topics such as anonymous credentials, threshold cryptography and privacy preserving technologies. Customers include major European technology companies and leading blockchain ecosystems.

PolyCrypt has strong prior expertise in the Polkadot ecosystem and was already funded by the web3 foundation in the past. It has developed a Polkadot backend for Perun state channels and various extensions for it (https://grants.web3.foundation/applications/perun_channels, https://grants.web3.foundation/applications/perun_channels-integration, https://grants.web3.foundation/applications/perun_app_channels). Moreover, we are currently collaborating with Ajuna (https://ajuna.io/) to build a second-layer solution on Polkadot for the gaming industry.

### Team Code Repos

- Github Organization: [perun-network](https://github.com/perun-network)
- [go-perun Framework](https://github.com/hyperledger-labs/go-perun)
    - Polkadot
        - [Backend](https://github.com/perun-network/perun-polkadot-backend)
        - [App-Demo](https://github.com/perun-network/perun-polkadot-appdemo)
        - [Pallet](https://github.com/perun-network/perun-polkadot-pallet)
        - [CLI-Demo](https://github.com/perun-network/perun-polkadot-demo)
    - Backend for [EVM-compatible chains](https://github.com/perun-network/perun-eth-backend/)
    - Backend for [Cosmos](https://github.com/hyperledger-labs/perun-cosmwasm-backend)
    - Backend for [Hyperledger Fabric](https://github.com/perun-network/perun-fabric)
    - Backend for [Cardano](https://github.com/perun-network/perun-cardano-backend)
    - Backend for [Nervos/CKB](https://github.com/perun-network/perun-ckb-backend)
    - Backend for [Internet Computer](https://github.com/perun-network/perun-icp-backend)
- Erdstall/Wildcard (collab w/ Ajuna Network)
    - [Erdstall TS SDK](https://github.com/perun-network/erdstall-ts-sdk)
    - Polkadot Operator (tba)
    - Pallet (tba)
    - Ethereum Operator (tba)
    - [Ethereum Contracts](https://github.com/perun-network/erdstall-contracts)

### Team LinkedIn Profiles

- https://www.linkedin.com/in/hendrik-amler-932506191/
- https://www.linkedin.com/in/jan-bormet-08a64421a/
- https://www.linkedin.com/in/andreas-erwig-b8352b146/
- https://www.linkedin.com/in/sebastian-faust-365278/

### Google Scholar Profiles (Or other research indexer profile, ex. Researchgate)

- https://scholar.google.com/citations?hl=en&user=ZJp1L-AAAAAJ
- https://scholar.google.com/citations?hl=en&user=V8iftrkAAAAJ

## Development Status :open_book:

As discussed above, the team has extensive research experience in cryptographic research and engineering cryptographic/blockchain protocols. Relevant for this project is our own prior research on cryptographic wallets and threshold cryptography:
- BIP32-Compatible Threshold Wallets: https://eprint.iacr.org/2023/312
- The Exact Security of BIP32 Wallets: https://eprint.iacr.org/2021/1287 (published at ACM CCS’21)
- Deterministic Wallets in a Quantum World: https://eprint.iacr.org/2020/1149 (published at ACM CCS’20)
- A Formal Treatment of Deterministic Wallets: https://eprint.iacr.org/2019/698 (published at ACM CCS’19)
- Threshold BBS+ From Pseudorandom Correlations: https://eprint.iacr.org/2023/1076

Moreover, Andreas Erwig and Sebastian Faust were in contact with cryptographic researchers at web3. In particular, we had several calls with Handan Kilinc Alper and Jeff Burdges on topics related to this proposal. Andreas Erwig also gave a talk on cryptographic wallets in the research seminar of the web3 crypto team.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 7.25 months
- **Full-Time Equivalent (FTE):** 1.25 FTE
- **Total Costs:** 87,000 USD

This is mostly a basic research project and hence a detailed development plan is difficult to give. We will make all results publicly available through a whitepaper that we plan to publish on an archive (e.g., the cryptology eprint archive or arxiv.org). Moreover, if suitable, we will publish the results of our research (or parts of it) via a publication at an academic conference (e.g., Financial Crypto or ACM AFT). We will further disseminate the results of our project via a medium article on our webpage (https://medium.com/perunnetwork). This article will be less technical and highlight our main findings for a broader audience.

Based on our previous experience with publicly funded research projects, we plan the following main tasks and milestones. Notice that the description slightly deviates from the application template as it is not planned to deliver code in this project.

### Milestone 1 – Research on cryptographic algorithms

- **Estimated duration:** 1.5 months
- **FTE:** 1.25 FTE
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **1.0a.** | Copyright and Licenses | CC BY 4.0 |
| **1.0b.** | Documentation/Tutorial | As we do not plan on delivering code we will not provide documentation in that sense. The delivered report at the end of this milestone will serve as documentation. |
| **1.0c.** | Methodology | This milestone will be achieved mainly by compiling and reading relevant literature as well as internal talks and discussions. We may involve interviews with external parties such as web3 researchers and/or wallet developers, specifally for Task 1.2. Our results can be verified through the report delivered in this milestone. |
| **1.0d.** | Infrastructure | We expect that all our work and deliverables for this milestone can be reviewed and understood without need for specific infrastructure or software except from a web browser. |
| **1.0e.** | Article | We will deliver a short report that contains a list of academic papers that we studied and a discussion on which cryptographic schemes are most suitable for our goal of building Threshold BIP32 wallets for Schnorr. The report will contain the results from Tasks 1.1 to 1.3. The report is mainly for internal use and hence will be approx. 2 pages. We will make sure that the report is easiliy accessible to the reviewers and the community. |
| **1.1.** | Investigation into threshold Schnorr protocols | We will investigate the current state of the art in threshold Schnorr protocols that are suitable to work with the Schnorrkel/Ristretto environment. We will evaluate them according to efficiency (round complexity, communication complexity) and security. For the latter, important criteria are: (1) static vs. adaptive corruption, (2) corruption threshold, (3) robustness, (4) cryptographic assumptions and models (e.g., only RO vs. AGM). |
| **1.2.** | Identification and prioritization of desirable features | We will research and discuss the priority and importance of specific efficiency and security features for our application (wallets). If necessary, we may involve interviews with external parties such as web3 researchers and/or wallet developers. |
| **1.3.** | TVRFs for threshold Schnorr wallets | We will investigate if existing protocols for TVRFs are compatible with the threshold Schnorr protocols from Task 1.1. We will classify them according to the criteria mentioned for Task 1.1. |

### Milestone 2 – Design of the basic Threshold BIP32 wallet for Schnorr

- **Estimated Duration:** 1.5 months
- **FTE:** 1.25 FTE
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **2.0a.** | Copyright and Licenses | CC BY 4.0 |
| **2.0b.** | Documentation/Tutorial | As we do not plan on delivering code we will not provide documentation in that sense. The delivered report at the end of this milestone will serve as documentation. |
| **2.0c.** | Methodology | This milestone will be achieved mainly by reading relevant literature as well as internal research discussions. We will make use of our experience and prior work regarding Threshold BIP32 wallets. |
| **2.0d.** | Infrastructure | We expect that all our work and deliverables for this milestone can be reviewed and understood without need for specific infrastructure or software. Access is possible via a web browser. |
| **2.0e.** | Article | We will deliver a report that contains: (1) a description of the security model and definitions, (2) the pseudocode of the cryptographic scheme from Task 2.2 and (3) a brief discussion on the security of our protocol. The article is still mainly for internal use and will be extended during the next tasks. We will make sure that the report is easiliy accessible to the reviewers and the community. |
| **2.1.** | Security Model | We will develop a security model to rigorously analyze Threshold BIP32 wallets for Schnorr. Most likely, this task will be rather easy as the model will be similar to what we have done in our prior works. We will start to sketch the model and security definitions in our report. These definitions may later be adjusted depending on the final scheme. |
| **2.2.** | Protocol Design | We will design the basic protocol for Threshold BIP32 wallets for Schnorr. We will either base our novel protocol on an existing Schnorr threshold scheme or design a threshold Schnorr scheme that is particularly tailored for our use case. We will give a pseudocode description of the protocol as common in cryptographic research. |
| **2.3.** | Protocol Evaluation | We will evaluate our basic protocol with respect to security and efficiency. We will not deliver a full security analysis here as the final protocol may still change during later phases of the project. |

### Milestone 3 – Extensions for efficiency and security

- **Estimated Duration:** 2 months
- **FTE:** 1.25 FTE
- **Costs:** 24,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **3.0a.** | Copyright and Licenses | CC BY 4.0 |
| **3.0b.** | Documentation/Tutorial | As we do not plan on delivering code we will not provide documentation in that sense. The delivered report at the end of this milestone will serve as documentation. |
| **3.0c.** | Methodology | This milestone will be achieved mainly by reading relevant literature as well as internal discussions. We will make use of our experience and prior work regarding Threshold BIP32 wallets. We will involve external experts and potential users of our wallet scheme, especially for Task 3.2. |
| **3.0d.** | Infrastructure | We expect that all our work and deliverables for this milestone can be reviewed and understood without need for specific infrastructure or software. Access is possible via a web browser. |
| **3.0e.** | Article | We will extend our report with: (1) the full specification of the Threshold BIP32 protocol for Schnorr signatures and (2) a discussion on why we decided on a particular threat model (see Task 3.2). The report is still mainly for internal use and will be extended during the next tasks. |
| **3.1.** | Efficiency Improvements | In this task, we will focus on efficiency improvements. Most importantly, we will explore the combination with a TVRF as done in our work on ECDSA. If feasible, this will significantly reduce communication and computation complexity. We will also investigate if techniques for de-randomizations can be integrated into our wallet scheme. |
| **3.2.** | Stronger Security Model | In this task, we will investigate stronger security models. In particular, our current construction for ECDSA only supports static corruption. We will explore if this can be strengthened to resist active corruptions. We will also explore various choices for the corruption threshold and what impact it has on efficiency. Finally, we want to investigate the pro-active setting as it can be used for key updates (e.g., in case of key loss or when the threshold is adjusted). We will decide which of these extensions will be integrated into the final specification. Our decision is based mainly on efficiency/practicality concerns as well as input from external experts and potential users. |

### Milestone 4 – Security analysis

- **Estimated duration:** 1.5 months
- **FTE:** 1.25 FTE
- **Total Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **4.0a.** | Copyright and Licenses | CC BY 4.0 |
| **4.0b.** | Documentation/Tutorial | As we do not plan on delivering code we will not provide documentation in that sense. The delivered report at the end of this milestone will serve as documentation. While there is no code or code documentation, we will deliver implementation considerations for developers as part of this milestone.  |
| **4.0c.** | Methodology | This milestone will be achieved mainly by compiling and reading relevant literature as well as internal discussions. We will make use of our experience and prior work regarding Threshold BIP32 wallets. |
| **4.0d.** | Infrastructure | We expect that all our work and deliverables for this milestone can be reviewed and understood without need for specific infrastructure or software. Access is possible from a web browser. |
| **4.0e.** | Article | We will extend our report with the security analysis. We will also add an overview of common challenges when implementing threshold cryptography and how to mitigate these attacks. |
| **4.1.** | Security Analysis | We will do a security analysis and a security proof of our construction. The exact threat model and assumptions are based on our work from Milestone 3. We will update the report with a security analysis/proof of our scheme. |
| **4.2.** | Implementation Considerations | We will do research on secure implementations of threshold signature schemes and discuss common pitfalls. There have been multiple incidents in implementations of threshold ECDSA (e.g., missing range checks and validity checks), and we will investigate if similar problems may arise in implementations of our selected threshold Schnorr scheme and our wallet scheme. |

### Milestone 5 – Finalizing and publication of white paper

- **Estimated duration:** 0.75 months
- **FTE:** 1.25 FTE
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **5.0a.** | Copyright and Licenses | CC BY 4.0 |
| **5.0b.** | Documentation/Tutorial | As we do not plan on delivering code we will not provide documentation in that sense. |
| **5.0c.** | Methodology | We will achieve this milestone by compiling and polishing the results from all previous milestones. |
| **5.0d.** | Infrastructure |We expect that all our work and deliverables for this milestone can be reviewed and understood without need for specific infrastructure or software. Access is possible from a web browser. |
| **5.0e.** | Article | We will complete the final report and publish it on an archive server. We will prepare a summary article and publish it on our medium blog. If suitable, we will also prepare an academic publication. All articles will contain the following statement in an acknowledgments section: This work was supported by a research grant from the Web3 Foundation.|
| **5.1.** | Whitepaper & Academic Publication | We will polish the report and release it as a white paper on a suitable archive (e.g., the eprint archive or arxiv.org). If suitable, we will also prepare an academic publication. |
| **5.2.** | Medium Article | We will write a medium article that summarize our findings for a broader audience and release it on https://medium.com/perunnetwork |

## Future Plans

We will promote our research results with companies building and running wallets within the Polkadot ecosystem. Moreover, we plan to continue our work in the following directions:
- Once the research is completed, we plan to work on the implementation of our cryptographic protocol and offer it as an open source SDK. We hope to fund this via a follow-up grant from the web3 foundation.
- Based on our SDK, we plan integration projects with wallet providers in the Polkadot / Kusama ecosystem.
- We also plan to run multiple threshold servers, where users may outsource parts of their key shares to. This will be offered as part of a freemium service, where the basic functionality is provided for free but extensions (e.g., better usability, key recovery features, support of key hierarchies etc.) may be purchased by the user.

Finally, we believe that our research on threshold Schnorr signatures may have applications outside of wallets, e.g., to secure the consensus protocol of modern blockchains. 

## Additional information :heavy_plus_sign:

We were referred to the web3 grant program by web3 cryptographic researchers (Handan Kilinc Alper and Jeff Burdges). We have already successfully completed multiple web3 grants on the Perun state channel framework and are currently collaborating with Ajuna to build a second-layer solution for the Polkadot gaming industry.
