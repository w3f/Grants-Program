# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Iridius
- **Team Name:** Iridius
- **Payment Address:** Ethereum 0x48ea6C35ed906bEAa2bFebf0725D67b4Bb39C161 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 (Note: We saw that you reduced level 2 to 30k a few hours ago. Given that this grant application has been in preparation for weeks (and the technical complexity involved with implementing our security models), we would appreciate if you could express flexibility and allow us to apply for level 2 with the previous maximum budget)

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

**Iridius: Peer review web/app software signing and user-sided verification to close Web3 interface centralisation chokepoints**


While blockchains technologically are decentralized, the ways users interact with them is not. A key centralized weak point are the server-hosted DApp websites, and all mobile apps and browser extensions currently in use by Blockchain users. This requires everyday users to trust the developer of the particular app, which is against the spirit of blockchain.

[Just last week, Convex's frontend was hijacked](https://thedefiant.io/convex-exploit/). A few months ago [BadgerDAO lost $130M](https://twitter.com/hiddentao/status/1466323984056791043), and [Cream Finance](https://twitter.com/CreamdotFinance/status/1371448627663491088) and [PancakeSwap](https://twitter.com/PancakeSwap/status/1371471934999777281) were compromised in March 2021. The server of **polkadot.js.org/apps**, the main way Polkadot users govern and secure the network, is also vulnerable to these attacks, together with the **Polkadot.js browser extension**. For example, an attacker could push an update that makes users unknowingly delegate to a malicious validator, which would compromise the security of the Polkadot chain. The cost to ensure that this doesn't happen? A $50k grant :) 

Iridius presents a consensus-driven way to sign DApp websites, Android and iOS apps, and browser extensions. Users' browser or phone would automatically verify that signature to ensure that the software is what it should be. For example, when the developer of a DApp wants to publish an update, they will start an on-chain vote where users and auditors review and accept the update. Then, a network of Multiparty Computation (MPC) nodes sign that update with a key that the developer does not control. Lastly, the users would only be able to open the DApp if it holds a valid signature from the MPC nodes. Verification is transparent, similarly to how SSL authentication works for servers, so users do not need to be aware of it. [Our pitch deck](https://docs.google.com/presentation/d/1dswx0b31pTVWaZcUxC_6yY6B-rBE4OBIJIAh4OeDlnE/edit?usp=sharing) visualises this process. 

How DApps are verified depends on the platform. On the Web, due to the lack of native ways to authenticate server content, users need to install a browser extension. On Android, iOS, and Firefox extensions, verification happens out-of-the-box because every app is signed by a developer key by design - all that needs to happen is for developers to stop using their key and start using the MPC's key. For Chrome extensions, which due to google policies **cannot even be signed by the developer**, we would partner with Brave or other Web3 enabled browsers to include the necessary functionality to secure extensions. 

We are interested in this project simply because we are firm believers in decentralisation, privacy, and security, and the opportunity we have identified is both high-impact and involves novel methodologies in the field of cryptography. Lastly, we are applying for a Polkadot grant, and not a grant from one of its parachains, because we like Polkadot's focus on decentralisation without compromise, and we think that our proposal resonates with this. 

### Project Details

By the end of the grant, we expect to have a backend system (on-chain smart contract) which will allow developers to submit software revisions to be voted on by their community. We will also have a network of Multiparty Computation nodes which will sign all software revisions which have passed a vote. We will also design a public key infrastructure (PKI) where anyone will be able to learn the correct signing identity for any given app (say, **polkadot.js.org**). We will focus primarily on verifying Web3 websites. In order for users to verify the websites they visit, they will setup a browser extension we will develop, which will connect to the PKI and verify that the signature served by the web server matches that public key. 

More details are [found in our whitepaper here](https://drive.google.com/file/d/1YQLlk-oG6kj4lyMI9zDbPOs9rozeeKTw/view). 

Beyond the scope of the grant, we will also support the signing of Android and iOS apps, as well as Browser extensions. We expect Iridius to live in a multichain environment, finding utility in most major Blockchains and apps. 


### Ecosystem Fit

Iridius's MPC backend (non-user-verification) side, which is responsible for voting, accepting, and signing software revisions, will be based in a Polkadot parachain. The main criteria is for the environment to be accessible enough to as many ecosystems as possible (we anticipate this to be useful for nearly every Blockchain ecosystem), as well as scalability. In particular, we anticipate Iridius to interact with developers of Blockchain projects, the stakeholders in these ecosystems' DAOs (which might want to review and vote the updates), and end-users, who either do nothing or just install an extension. 

We could not find a relevant Polkadot project which addresses this problem (in fact, we could not find something like that on any chain!). The closest project we found is a recent initiative by Meta named [Code Verify](https://github.com/facebookincubator/meta-code-verify), which developed an open-source web-based extension for the verification of WhatsApp Web and other sites (part of what we want to do too, but their verification relies on a trusted third party). The fact that even a major centralized corporation is trying to solve this problem makes us think that the need for such a solution is even greater in Web3. 

We therefore decided to list large Polkadot projects which are vulnerable to a server-sided attack, which our project should be able to secure within the scope of this grant.

1. Main Polkadot Portal (polkadot.js.org/apps), through which most users delegate and manage their DOT funds;
2. Centrifuge (centrifuge.io) - with a TVL of ~80M; 
3. Astar (astar.network) - with a TVL of $1B;
4. Parallel (parallel.fi) - with a TVL of ~500M;
5. Moonbeam (moonbeam.network), whose DApp manages their native token and Staking mechanics.
## Team :busts_in_silhouette:

### Team members

- **Team Leader:** Zvezdin Besarabov (CEO)
- **Team members:** Ana-Maria Pricop (COO), Alexi Ned (Advisor)

### Contact

- **Contact Name:** Zvezdin Besarabov
- **Contact Email:** me@zvezd.in

### Legal Structure

- **Registered Address:** Apartment 4, Read House, 1 Childer Close, Coventry, CV6 5NG, United Kingdom
- **Registered Legal Entity:** Pui Ltd

### Team's experience

We are two founders - one with a security and Blockchain protocol design background, and the other with project management, partnerships & community and trust building experience. 

Zvezdin Besarabov (Tech):
- Education: University College London
- Co-Founder at https://outdid.io/
- Ex CTO and Co-Founder at https://burrowvest.com/
- Founding member & tech lead https://scynet.ai/
- Founding member https://wetonomy.com/
- [3 Research papers](https://arxiv.org/search/?query=zvezdin+besarabov&searchtype=all&source=header) in security, blockchain protocol design, and AI
- 4 top international research awards for the above papers from [ISEF](https://www.societyforscience.org/isef/) in [2018](https://www.societyforscience.org/press-release/intel-international-science-and-engineering-fair-2018-special-award-winners/) and [2019](https://www.societyforscience.org/press-release/intel-isef-2019-special-awards-winners-announced/)
- Blockchain teacher since 2016, created a [Solidity University course](https://softuni.bg/trainings/1765/smart-contract-development-with-solidity) (Bulgarian).
  - One of my students is the founder of [Hack.bg](https://hack.bg). Also in 2020, another student got an all-time high research award as a Bulgarian national
- Philanthropy: Started a political campaign in Bulgaria to improve the high school system.

Ana-Maria Pricop (Management & Partnerships):
- Education: Sciences Po Paris
- Co-Founder at https://outdid.io/
- Business Startup consultant at [pricop.co](https://pricop.co)
- Ex CEO & Co-founder: [ucurious.co](https://www.facebook.com/ucurious.co)
- Project manager: [Mission Automate](https://www.missionautomate.com/), [Cambridge House](http://cambridgehouse.ro/cursuri-engleza/)
- [3 Published research papers in student conferences](https://drive.google.com/drive/folders/1sJJBhS13ZNV9rId7xWDo7fqZVa5okiCh) in Global economy
- Managed more than 20 teams, including tech teams
- Philanthropy:
  - [Oxford for Romania](https://www.oxfordforromania.org/) -  board member, free summer school for brilliant highschool students from Romania
  - [KIND](https://www.facebook.com/KidsInNeedofDreams) - founder, national campaign for kids with oncological problems
  - [Lindenfeld Association](https://www.en.ajungemmari.ro/) - math teacher, orphanage

### Team Code Repos

- Demo code for Iridius
  - [DApp website to be secured](https://github.com/Zvezdin/iridius-demo-website)
  - [Browser extension veirfying the website](https://github.com/Zvezdin/iridius-demo-extension)
  - [A decentralised way to source verification data from an on-chain smart contract](https://github.com/Zvezdin/iridius-the-graph)
- Demo code for an earlier iteration of our Polkadot grant proposal, after which we pivoted (read about this in “Additional information” at the end):
  - Demo version of a ZK verifier and circuit: https://github.com/OutDID-io/passport-verifier-circom
  - Proof of concept android ZK prover: https://github.com/OutDID-io/passport-reader
- https://github.com/Zvezdin

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/zvezdak/
- https://www.linkedin.com/in/ana-pricop/

## Development Status :open_book:

We have conducted appropriate technical and theoretical research, together with a theoretical explanation on how the proposed system works and its limitations, are summarized in [our Whitepaper linked here](https://drive.google.com/file/d/1YQLlk-oG6kj4lyMI9zDbPOs9rozeeKTw/view). 

We also developed a minimal demo on securing a web3-enabled website which uses Metamask to do on-chain actions. We forked & developed a browser extension which would verify this website. The extension connects to a smart contract on-chain to retrieve what is the “consensus approved” version of the website is. It then verifies it against what the user’s browser has loaded, and notifies the user if something has changed. To execute this on-chain connection, we leverage The Graph in order to deliver this in a decentralised way (otherwise this connection itself would be a single point of failure). Links in "Code Repos" section. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  4
- **Total Costs:** 48,000USD

### Milestone 1 - Research-Grade Proof-of-Concept

- **Estimated duration:** 1 month
- **FTE:**  4 (2 co founders working 60hrs/week @ 4,000USD + 2 part-time developers @ 4,000USD)
- **Costs:** 16,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Some open-source (License depends on our software dependencies, which depend on our research efforts) |
| 0b. | Documentation | Priority is to produce a quick & dirty academic prototype. Documentation on how to set up, build & run the prototype will be provided with limited in-code or other documentation. All research results will be properly and carefully documented. |
| 0c. | Testing Guide | We will provide a guide that allows you to test our manual app signing scripts, and setup and run the proof of concept demo |
| 0d. | Docker | Not relevant at this stage in our project. |
| 0e. | Article | We will publish an article that explains how the general proof of concept works, including how software is usually signed, what MPC frameworks exist and hwo can we use them to create a signing model, as well as solutions to long-term problems
| 1. | Implement Manual App Signing | Write a set of shell scripts which input a private key, a software package (An Android, iOS app package, a Firefox extension, or a website), produce a signature for it, and return a modified version of that package with an attached signature. This would involve researching and documeting how exactly Android/iOS apps and Firefox extensions are signed by the developer. In particular, what are the accepted signature algorithms, and what information is required by the signing process, and what are the operations. What these shell scripts does will be a blueprint for what the Multiparty Computation Nodes are responsible to do. |  
| 2. | Research and identify a suitable MPC framework that supports the operations we need | From the manual app signing work, we know what operations need to be completed in an MPC setting. Here we need to find the best developed, ideally security audited, MPC implementation that supports these operations. As a minimum, the framework needs to support distributed key generation and the signature algorithm supported by most app models - probably RSA and/or ECDSA |  
| 3. | Create a proof of concept demo of signing and verifying a Web3 DApp | Here, we want to create a quick & dirty demo of a group of MPC nodes (running off-chain client software we develop using the selected MPC framework) generating a signing key, storing it, and then signing messages with it. Using this MPC committee, we will sign the hash of a Web3 DApp demo website that connects to Metamask (or some Web3 wallet) to do a simple operation. We will implement a browser extension which will verify the Web3 site by checking that the signature matches and that otherwise the site is unaltered. We will fork and reuse [existing work](https://github.com/facebookincubator/meta-code-verify). The demo will be documented and you will be able to play with it by setting up the extension. |  
| 4. | Research a way to create long-term sustainable MPC secrets storage | In order to make sure that the MPC software we will deliver as part of this grant is actually useful in a real-world setting, we need to find a solution to an important theoretical problem. <br/> Key problem with MPC setups right now is that they assume MPC nodes are trusted to start with, and that they don’t change. Namely, they are designed to hold secrets (e.g. private keys) for short-term computations only. We need to keep them for years if not decades to do proper app signing. Meaning, MPC nodes need to dynamically leave, new ones join, and all without allowing a clever attacker to learn the secret or for the MPC network to forget it. <br/> We identified research papers which solve this problem, namely [CHURP](https://eprint.iacr.org/2019/017.pdf) and [BGGHKLRR20](https://eprint.iacr.org/2020/464). The task is to find which paper both solves this problem, and where its solution can be implemented more easily. We will produce a report with how such a solution will be implemented, which will be needed in later milestones. 


### Milestone 2 - Consensus-led Software Signing Demo

- **Estimated duration:** 1 month
- **FTE:**  4 (2 co founders working 60hrs/week @ 4,000USD + 2 part-time developers @ 4,000USD)
- **Costs:** 16,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Some open-source (License depends on our software dependencies, which depend on our research efforts) |
| 0b. | Documentation | We will document our research outcomes in full detail. The smart contract's code, interface, and functionality would be properly documented, similarly for the MPC software |
| 0c. | Testing Guide | We will publish a guide that explains how to manually run our smart contract and our MPC client. We would also provide partial-coverage system tests for the MPC software and the smart contract. The next milestone will invest more in finalising and testing that software.  |
| 0d. | Docker | We will provide an image for the MPC software |
| 0e. | Article | We will publish a workshop that explains how to setup and run the demo project, including forming on-chain consensus, launching MPC nodes, and getting things signed
| 1. | Finalise the design of the verification system | Until now, we will have a proof-of-concept model that works in some cases, but cannot verify everything. Taking the learnings from the previous milestone, here we will design the final verification system. In particular, what are the participating parties (developers, voters, users), how can new entities be elected and leave, how are they properly incentivised to behave honestly, how does consensus get met, and finally, how does an app get signed (there are different ways of doing so with different security properties). Also, there would have to be some sort of Public Key Infrastructure that allows end-users to learn what is the "correct" verification key for a given app. <br/> The output of this task will be an answer to all of the above questions, formulated in the whitepaper, and with clearly defined security properties. 
| 2. | Develop a demo smart contract that implements the verification system | Design and implement a smart contract which performs the most important aspects of the final system design as outlined above. Note: We would like to implement the contract in ink!, but it seems like we'll have to settle for EVM. In a later milestone we will be using a decentralised data provider, such as The Graph, to read data from that contract, and for the time being they support EVM contracts, but not ink!. Let us know if there's an alternative non-centralised API provider for ink!-based contracts and we can go that way. <br/> The contract will work as follows: <ul><li>Developers can submit their intent to publish an update to some DApp</li><li>Users and auditors get a chance to review and vote on the update. For now, the voters would be hardcoded and we would not implement schemes. </li><li>If the vote passes, the MPC nodes receive this signal and are expected to issue a signature. <li>MPC nodes’ identities are kept as a hardcoded list for now.</li><li>MPC nodes can announce the public verification key for the signatures of the respective DApp</li><li>MPC nodes can announce the signature produced after a vote passes. </li></ul>
| 3. | Develop demo MPC Client software | Our MPC nodes will need to run custom, off-chain software, which will implement the MPC part of our verification system. For now, we will assume that the set of MPC nodes is fixed and hardcoded. The client software would be written in the most convenient language given the software dependencies we decide to have. At minimum, this software should: <ul><li>Store secret-shared variables (private keys) persistently in a table, one separately for every DApp identity</li><li>Listen to the smart contract for voting outcomes. If a vote passes:</li> <ul><li>If this is a new DApp, execute a distributed key generation algorithm to generate this DApp’s signing key. Store that key in the secret shared table. Go on-chain, and store the respective public verification key in the smart contract. </li><li>Get the DApp’s signing key from the secret shared table. Get the hash of the software to be signed. Execute the requested signature algorithm (e.g. ECDSA or RSA).</li><li>Publish the signature on-chain. Only one MPC node needs to successfully do this.</li></ul>

### Milestone 3 - Minimum Valuable Product

- **Estimated duration:** 1 month
- **FTE:**  4 (2 co founders working 60hrs/week @ 4,000USD + 2 part-time developers @ 4,000USD)
- **Costs:** 16,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | At this time we should have solidifed which open source license to use |
| 0b. | Documentation | We will provide setup & building docs for all relevant code. We will document our research findings thoroughly. Our browser extension will have user-sided documentation. Finally, we will document how users can start using our testnet version |
| 0c. | Testing Guide | We will provide a complete suite of tests for the on-chain smart contract, as well as a guide on how to run it and the MPC software. |
| 0e. | Article | We will publish an article inviting the community to start interacting with our test version, with separate guides for DApp developers, their community members (who should vote on the software), and how end-users can protect themselves
| 1. | Develop a web DApp | A web interface to our smart contract. DApp developers would be able to register their DApp in our system, set up the initial voter set, and submit their app versions for vote and signing. Voters would be able to vote on app versions. Users would be able to query and receive the last accepted DApp version, together with its signature. 
| 2. | Develop our own verifying browser extension | Until now, our PoC used an existing browser extension, possibly slightly modified to use a hardcoded verification key. Crucially, it does not query the blockchain to see what is the right verification key for the given website. We need to develop our own extension which does that query (in a decentralised way, for example using The Graph), verifies the website files, and notifies the user upon failure. This could be a separate grant application on its own, so for now we would develop a working version focused on providing strong security with minimal user interface
| 3. | Extend the smart contract to cover the full specification of our verification system | The smart contract from the previous milestone implements core functionality, such as submission and certification of software, but it leaves out mechanisms in which, for example, MPC committee nodes or voters are selected to participate, as well as any relevant economic incentives for them. This task focuses to fully implement the spec as completed in the previous milestone. 
| 4. | Extend the MPC client software | In Milestone 1, we researched long-term secrets storage for MPC. This task is to implements this feature in our client software. At this point, the client should be one of the first, if not the first Multiparty Computation implementation with long-term reliability suitable for a Blockchain setting  - a value proposition from which many other projects can benefit. 
| 4. | Secure the web DApp | Demonstrate the utility of Iridius by submitting the Iridius DApp for Iridius verification and getting it an Iridius certification (haha, circular dependency fun). The Polkadot grants team could be given the right to review and vote on the initial version of the DApp. 

NB: We talked very little about Polkadot-specific (or production-ready) code here, because most of the current work is very research-heavy. Eventually, we’ll need to establish a DAO where our MPC nodes will be elected and managed, together with community governance decisions. We want to build the basis of this system in a multi-chain ecosystem, such as Polkadot, in order to allow many more DApps to integrate with our system quickly. 

## Community Engagement

We felt the necessity to add this section as it is relevant to our project. We are committed to the long-term success of the project, and that involves more than building code. As a complement to our technical milestones, one of the cofounders will be fully dedicated to building trust among our users and creating our 2-sided market. 

Firstly, growing trust across our network of end users is of existential importance to Iridius. There is little use of genius tech if users do not understand how it works and do not trust how the project handles their data. This is of existential importance to the project. 

Second, building a bilateral market requires attention to both end-users and projects adopting Iridius verification for their software. On one hand, websites will choose our solution for two reasons: to create a safer environment for their users and to protect themselves against online attacks. On the other hand, as we have noticed from user reviews of relevant software, people are not aware of the weaknesses of websites and apps. This means that there is a need for awareness campaigns on what is involved in using websites and the associated risks. 
Moreover, both projects and their users must be addressed at the same time because Iridius cannot grow without their concomitant involvement. For example, a project using Iridius might find it unjustified to give up control on their software distribution while only 1% of users decide to benefit from that. Similarly, users might not have a strong incentive to download our web extension if only 5% of the DApps use this verification. 

Other responsibilities in relation to the community engagement include:  

- Discovering & negotiating the first Polkadot projects to adopt us, starting with letters of intent.
- It is important for a business to create and maintain proper documentation for all its activities and transactions. Since these documents are subject to the scrutiny of investors, maintaining and updating them is an important duty of a co-founder.
- Issuing a monthly transparency report to update everyone on our internal progress and strategic decisions;
- Write articles on Medium about our project and other interesting Blockchain-related topics;
- Creating, maintaining, growing, and continuously engaging communities over Telegram, Twitter and Email in a timely manner;
- Making sure the community is always involved in key decisions.


## Future Plans

In order to make our MPC system long-term sustainable, we need to implement more cutting-edge research theories, which would take some time but would make our project the first long-term sustainable MPC project deployed on a Blockchain. Eventually, this novelty could open doors to expand our system to a general MPC-as-a-service with the same long-term reliability value proposition. In this case, Polkadot would also be a natural environment to establish such a global system. 

Business-wise, we will try to partner with as many projects as possible who would like to secure their Web3 frontends. Being in the polkadot ecosystem would make it easy for many other projects to benefit from this service early on. 

Longer-term, we would expand our code signing to also sign Android, iOS, and browser extensions. From Milestone 1, we would have already researched and demonstrated how doable and feasible is it to do that, and this way we could close the last few centralized choke points on the road to mass Web3 adoption. 

In the speculative longter-term, we would like more open source projects and libraries to adout our code signing system to bring more trust and reliability in existing software distribution pipelines. Imagine if React itself was signed, together with all of its dependences! Peer review for software wohoo. 


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation

Summary of external resources for Iridius:
- [Pitch deck](https://docs.google.com/presentation/d/1dswx0b31pTVWaZcUxC_6yY6B-rBE4OBIJIAh4OeDlnE/edit?usp=sharing)
- [Whitepaper](https://drive.google.com/file/d/1YQLlk-oG6kj4lyMI9zDbPOs9rozeeKTw/view)
- Demo code
  - [DApp website to be secured](https://github.com/Zvezdin/iridius-demo-website)
  - [Browser extension veirfying the website](https://github.com/Zvezdin/iridius-demo-extension)
  - [A decentralised way to source verification data from an on-chain smart contract](https://github.com/Zvezdin/iridius-the-graph)

We had already spent 2 months working towards a slightly different idea - building a Zero-Knowledge KYC solution leveraging ZK proofs and MPC. We wrote a whitepaper, had live code demos, a list of blockchain projects interested in integrating this verification for their users, and even a draft of a Polkadot grant proposal. However, we then made the decision to pivot as we believe we’ve identified a larger opportunity with our current proposal. Nonetheless, we would share details of our prior work to show our team’s determination and ability to deliver:

- Polkadot grant proposal of our KYC solution, with extensive research of the Polkadot ecosystem fit: https://bit.ly/3lYCljZ
- Technical whitepaper: https://bit.ly/3wXCUki
- Code demos
  - Demo version of a ZK verifier and circuit: https://github.com/OutDID-io/passport-verifier-circom
  - Proof of concept android ZK prover: https://github.com/OutDID-io/passport-reader

Lastly, we would mention that we were already building our KYC idea on the Terra Blockchain, and were about to receive a grant from them, before it collapsed, together with our savings. As such, receiving a grant from Polkadot for our new direction at this time would greatly accelerate the development of this innovation which can be universally applied throughout the Polkadot ecosystem and all other chains. 
