# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Iridius
- **Team Name:** TODO
- **Payment Address:** Ethereum 0x00874b14ec1e9430f3c9870f02fdb25a6183d7ab (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

**Iridius: Peer review web/app software signing and user-sided verification to close Web3 interface centralisation chokepoints**


While blockchains technologically are decentralized, the ways users interact with them is not. A key centralized weak point are the server-hosted DApp websites, and all mobile apps and browser extensions currently in use by Blockchain users. This requires everyday users to trust the developer of the particular app, which is against blockchain spirit. For example, if someone gains access to the server of **polkadot.js.org/apps** and pushes an update that makes users unknowingly delegate to a malicious validator, this would compromise the security of the Polkadot chain. 

Iridius presents a consensus-driven way to sign DApp websites, Android and iOS apps, and browser extensions. Users' browser or phone would automatically verify that signature to ensure that the software is what it should be. For example, when the developer of a DApp wants to publish an update, they will start an on-chain vote where users and auditors review and accept the update. Then, a network of Multiparty Computation (MPC) nodes sign that update with a key that the developer does not control. Lastly, the users would only be able to open the DApp if it holds a valid signature from the MPC nodes. Verification is transparent, similarly to how SSL authentication works for servers, so users do not need to be aware of it. 

How DApps are verified depends on the platform. On the Web, due to the lack of native ways to authenticate server content, users need to install a browser extension. On Android, iOS, and Firefox extensions, verification happens out-of-the-box because every app is signed by a developer key by design - all that needs to happen is for developers to stop using their key and start using the MPC's key. For Chrome extensions, which are not signed by default, we propose a new extension webstore for verified software. 

We are interested in this project simply because we are looking to work on a high-impact, security-focused project involving novel cryptography research. 

### Project Details

TODO

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

### Ecosystem Fit

Iridius's MPC backend (non-user-verification) side, which is responsible for voting, accepting, and signing software revisions, will be based in a Polkadot parachain. The main criteria is for the environment to be accessible enough to as many ecosystems as possible (we anticipate this to be useful for nearly every Blockchain ecosystem), as well as scalability. In particular, we anticipate users to be both developers of Blockchain projects, the stakeholders in these ecosystems' DAOs (which should be given the vote on updates), and end-users, who either do nothing or just install an extension. 

We could not find a relevant Polkadot project which addresses this problem (in fact, we could not find something like that on any chain!). The closest project we found is a recent initiative by Meta named Code Verify, which developed an open-source web-based extension for the verification of WhatApp Web and other sites (part of what we want to do too, but their verification relies on a trusted third party). The fact that even a major centralized corporation is trying to solve this problem shows that the need for such a solution is even more critical in Web3. 

We therefore decided to list large Polkadot projects which are vulnerable to a server-sided attack, which our project should be able to prevent within the scope of this grant.

1. Main Polkadot Portal (polkadot.js.org/apps), through which most users delegate and manage their DOT funds;
2. Centrifuge (centrifuge.io) - with a TVL of $84,381,086; 
3. Astar (astar.network) - with a TVL of $1B;
4. Parallel (parallel.fi) - with a TVL of $537,850,936;
5. Moonbeam (moonbeam.network), whose DApp manages their native token and Staking mechanics.

## Team :busts_in_silhouette:

### Team members

- **Team Leader:** Zvezdin Besarabov (CEO)
- **Team members:** Ana-Maria Pricop (COO), Alexi Ned (Advisor)

### Contact

- **Contact Name:** Zvezdin Besarabov
- **Contact Email:** me@zvezd.in

### Legal Structure

- **Registered Address:** Apartment 4, Read House, 1 Childer Close, Coventry, CV6 5NG
- **Registered Legal Entity:** PUI LTD TODO

### Team's experience

We are two founders - one with a security and Blockchain protocol design background, and the other with project management, partnerships & community and trust building experience. 

Zvezdin (Tech):
- Education: University College London
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
- Ex CEO & Co-founder: ucurious.co
- Project manager: Mission Automate, Cambridge House
- Start-up advisor & mentor - pricop.co
- 3 Published research papers in Global economy
- Managed more than 20 teams, including tech teams
- Philanthropy:
  - Oxford for Romania -  board member, free summer school for brilliant highschool students from Romania
  - KIND - founder, national campaign for kids with oncological problems
  - Lindenfeld Association - math teacher, orphanage

### Team Code Repos

- Demo code for an earlier iteration of our Polkadot grant proposal, after which we pivoted (read about this in “Additional information” at the end):
  - Demo version of a ZK verifier and circuit: https://github.com/OutDID-io/passport-verifier-circom
  - Proof of concept android ZK prover: https://github.com/OutDID-io/passport-reader
- https://github.com/Zvezdin

TODO ana can you find links to projects you did or something people can verify about you

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/zvezdak/
- https://www.linkedin.com/in/ana-pricop/

## Development Status :open_book:


If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

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
| 0c. | Testing Guide | This milestone focuses on building a research prototype, and prototype-level of code quality should be expected. Testing will come later.. |
| 0d. | Docker | Not relevant at this stage in our project. |
| 0e. | Article | We will publish an article that explains how the general proof of concept works, including how software is usually signed, what MPC frameworks exist and hwo can we use them to create a signing model, as well as solutions to long-term problems
| 1. | Research App Signing Models | Determine and document how exactly Android/iOS apps and browser extensions are signed by the developer. In particular, what are the accepted signature algorithms, and what information is required by the signing process, and what are the operations. We will demonstrate this by writing shell scripts which manually sign an Android/iOS/Extension app. This is needed to determine what the MPC nodes need to support later on. |  
| 2. | Research and identify a suitable MPC framework that supports the operations we need | From the research of app signing models, we know what operations need to be completed in an MPC setting. Here we need to find the best developed, ideally security audited, MPC implementation that supports these operations. As a minimum, the framework needs to support distributed key generation and the signature algorithm supported by most app models - probably RSA and/or ECDSA |  
| 3. | Create a proof of concept demo of signing and verifying a Web3 DApp | Here, we want to create a quick & dirty demo of a group of MPC nodes (using the selected MPC framework) generating a signing key, storing it, and then signing messages with it. Then we will sign the hash of a Web3 DApp demo website that connects to Metamask (or any other wallet) to do a simple operation. We will try to fork an existing signature verification browser extension which should verify the Web3 site, check that the signature matches, and check that the front files have been unaltered. Otherwise, the user will be notified. The demo will be documented and you will be able to play with it by setting up the extension. |  
| 4. | Research solutions to longer-term sustainability theoretical problems | Identify the key theoretical challenges in this project which need to be solved to make it long-term sustainable. Then, for each issue, find relevant academic papers and ideally, open source implementations, that solve these issues. <br /> For example, something we are already researching is how to provide dynamic proactive secret sharing in our MPC nodes. Without this, the private key used in the MPC setting holds the risk of being slowly revealed by a careful attacker, or otherwise forgotten forever as nodes inevitably leave and join the MPC committee. |  


### Milestone 2 - Consensus-led Software Signing Demo

- **Estimated duration:** 1 month
- **FTE:**  4 (2 co founders working 60hrs/week @ 4,000USD + 2 part-time developers @ 4,000USD)
- **Costs:** 16,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Some open-source (License depends on our software dependencies, which depend on our research efforts) |
| 0b. | Documentation | We will document our research outcomes in full detail. The smart contract's code, interface, and functionality would be properly documented, similarly for the MPC software |
| 0c. | Testing Guide | This milestone is already very packed with research complexity so we would provide partial system tests for the MPC software and the smart contract |
| 0d. | Docker | We will provide an image for the MPC software |
| 0e. | Article | We will publish a workshop that explains how to setup and run the demo project, including forming on-chain consensus, launching MPC nodes, and getting things signed
| 1. | Research and propose a theoretical solution to the problem of identifying DApps | The security of any signature verification system is only as strong as the security of the public key infrastructure behind it. In other words, how can the user’s browser find what is the “right” public key for the signing of a given website? If this isn’t properly secured, then an attacker can easily change the site contents, together with the signing key, and pull off an attack. <br/> So we must research - how can the user know which is the right signing key for some website? Clearly, we need some sort of an identity for DApps, how would that work and with what security model?
| 2. | Develop a demo smart contract that allows consensus-based software signing | Design and implement a contract where: <ul><li>Developers can submit their intent to publish an update to some DApp</li><li>Users and auditors get a chance to review and vote on the update. For now, the voters would be hardcoded. Ideally, the list of voters would be sourced from the DAO of the DApp.</li><li>If the vote passes, the MPC nodes receive this signal and are expected to issue a signature. <li>MPC nodes’ identities are kept as a hardcoded list for now.</li><li>MPC nodes can announce the public verification key for the signatures of the respective DApp</li><li>MPC nodes can announce the signature produced after a vote passes. </li></ul>
| 3. | Develop demo MPC Client software | For now, we will assume that the set of MPC nodes is fixed and hardcoded. Every MPC node will run client software that will: <ul><li>Store secret-shared variables (private keys) in a table, one separately for every DApp identity</li><li>Listen to the smart contract for voting outcomes. If a vote passes:</li> <ul><li>If this is a new DApp, execute a distributed key generation algorithm to generate this DApp’s signing key. Store that key in the secret shared table. Go on-chain, and store the respective public verification key in the smart contract. </li><li>Get the DApp’s signing key from the secret shared table. Get the hash of the software to be signed. Execute the requested signature algorithm (e.g. ECDSA or RSA).</li><li>Publish the signature on-chain. Only one MPC node needs to successfully do this.</li></ul>

### Milestone 3 - Testnet launch

- **Estimated duration:** 1 month
- **FTE:**  4 (2 co founders working 60hrs/week @ 4,000USD + 2 part-time developers @ 4,000USD)
- **Costs:** 16,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | At this time we should have solidifed which open source license to use |
| 0b. | Documentation | We will provide setup & building docs for all relevant code. We will document our research findings thoroughly. Our browser extension will have user-sided documentation. Finally, we will document how users can start using our testnet version |
| 0c. | Testing Guide | We will provide a comlete suite of tests for the on-chain smart contract. |
| 0e. | Article | We will publish an article inviting the community to start interacting with our test version, with separate guides for DApp developers, their community members (who should vote on the software), and how end-users can protect themselves
| 1. | Develop a web DApp | A web interface to our smart contract. DApp developers would be able to register their DApp in our system, set up the initial voter set, and submit their app versions for vote and signing. Voters would be able to vote on app versions. Users would be able to query and receive the last accepted DApp version, together with its signature. 
| 2. | Research a way to create long-term sustainable MPC secrets storage | This could be a separate research paper by itself. Key problem with MPC setups right now is that they assume MPC nodes are trusted to start with, and that they don’t change. Namely, they are designed to hold secrets (e.g. private keys) for short-term computations only. We need to keep them for years if not decades to do proper app signing. Meaning, MPC nodes need to dynamically leave, new ones join, and all without allowing a clever attacker to learn the secret or for the MPC network to forget it. <br/> We already found cutting-edge research papers that prove this problem is solvable. The question is how. How would you elect MPC nodes? Do you need to have a token? Does this incentivise them to behave honestly long-term? How would you kick out malicious MPC nodes, etc. 
| 3. | Develop our own verifying browser extension | Until now, our PoC used an existing browser extension, possibly slightly modified to use a hardcoded verification key. Crucially, it does not query the blockchain to see what is the right verification key for the given website. We need to develop our own extension which does that query, verifies the website files, and notifies the user upon failure. This could be a separate grant application on its own, so for now we would develop a minimal demo version.
| 4. | Launch a public test version on a Polkadot parachain | Decide on a suitable parachain to deploy to. For now we’ll have a lightweight smart contract, likely EVM or WASM. The smart contract needs to be easily accessible by many projects which would want to test our verification mechanism. <br\> Partnering projects will provide a test voter list for app versions, their developers will submit the actual app versions to be voted on and signed, and their users will set up our extension

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

We had already spent 2 months working towards a slightly different idea - building a Zero-Knowledge KYC solution leveraging ZK proofs and MPC. We wrote a whitepaper, had live code demos, a list of blockchain projects interested in integrating this verification for their users, and even a draft of a Polkadot grant proposal. However, we then made the decision to pivot as we believe we’ve identified a larger opportunity with our current proposal. Nonetheless, we would share details of our prior work to show our team’s determination and ability to deliver:

- Polkadot grant proposal of our KYC solution, with extensive research of the Polkadot ecosystem fit: https://bit.ly/3lYCljZ
- Technical whitepaper: https://bit.ly/3wXCUki
- Code demos
  - Demo version of a ZK verifier and circuit: https://github.com/OutDID-io/passport-verifier-circom
  - Proof of concept android ZK prover: https://github.com/OutDID-io/passport-reader

Lastly, we would mention that we were already building our KYC idea on the Terra Blockchain, and were about to receive a grant from them, before it collapsed, together with our savings. As such, receiving a grant from Polkadot for our new direction at this time would greatly accelerate the development of this innovation which can be universally applied throughout the Polkadot ecosystem and all other chains. 
