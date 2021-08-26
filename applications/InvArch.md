# W3F Grant Proposal

* **Project Name:** InvArch
* **Team Name:** InvArch
* **BTC Payment Address:** bc1q8ere0hsz2rnledqev0e96artwuwtgrj4jf0u8z
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Please provide the following:

* InvArch aims to revolutionize startup networking by bridging the gap between ideas & creations. 
* InvArch is a next generation platform for intellectual property tokenization using the RMRK 2.0 NFT standard.
* The InvArch platform provides utility for this new technology by allowing intellectual property tokens (IPTs) to be owned by a 
Decentralized Entrepreneurial Venture (DEV) contract and governed as a DAO using built-in fungible IPT Ownership (IPTO) tokens. These tokens
may also be leverages by participants in a DEV to raise startup funds for their projects.
* InvArch is built using Substrate/Rust, the RMRK 2.0 standard, Ink! smart contracts, with intentions to deploy on the Karura parachain.
* Every member of the time has an honest belief that this project will help make the world better through increased economic decentralization and by
helping to catalyze future innovations, it's a belief that motivates and inspires every one of us to see this project through.

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

* [InvArch Whitepaper](https://invarch.io/invarch-whitepaper/)

* [InvArch Litepaper](https://invarch.io/invarch-litepaper/)

* [InvArch Pitch Deck](bit.ly/invarch_deck)

![](https://i.ibb.co/kGYzwms/Screen-Shot-2021-08-24-at-10-43-10-PM.png)
![](https://i.ibb.co/GJZySz9/Screen-Shot-2021-08-24-at-10-50-20-PM.png)
![](https://i.ibb.co/g6HjVgL/Screen-Shot-2021-08-24-at-10-50-39-PM.png)
![](https://i.ibb.co/RpCZSt5/Screen-Shot-2021-08-24-at-10-50-52-PM.png)

### Technologies
1. The RMRK standard is a multi chain & open-source standard under the GNU General Public License v3.0, and allows for minting multi-attribute, multi-layer, and governable NFTs throughout the Kusama ecosystem.
2. Ink! is an open-sourve eDSL, under the Apache License 2.0, to write smart contracts in Rust for blockchains built on the Substrate framework. ink! contracts are compiled to WebAssembly.
3. Docker
4. Substrate
5. Rust
6. Vue.js

### Limitations
While InvArch is designed to allow user to protect, store, authenticate, and securely share their intellectual property, it does not provide a system 
for handling theft. Instead, the platform offers many of the resources needed to take action against an individual. It is important to note that the full contents/data of an IPT are not initially fully exposed on the platform. The platform addresses the problem of security by 1. integrating decentralized KYC, a requirement for users to access the platform, 2. only exposing limtited data (name, industry, focus, description) to users until after they have applied to a DEV and 3.) the initializer of said DEV reviews, interviews, and elects to share a temporary private-key fullu exposing the IPTs data. The platform does not litigate attempts of intellectual property theft. The platform does, however, provide governance measures to handle bad actors within a DEV. The platform is designed to prevent bad actors from taking over a project through the allocation structure of a DEV's IPT Ownership (IPTO) tokens. The platform extends the same security to intellectual property as digital art NFTs supply, but just as NFT platforms do not mitigate disputes, the InvArch platform does not as well. 

### Components
### 1. Invention Arch & IPT Minter
This component of the application will feature an IPT Minter utilizing IPFS storage that will allow users to tokenize & store 
their intellectual property in a similar manner to how individuals are able to do the same for their digital art works. IPTs will 
be multi-layer, meaning that they can be bonded with one another. They will also be multi-attribute, meaning that they can 
consist of a variety & multiple of file types (PDF, 3D, DOC, JPEG, PNG, MP3, MP4, etc.). This will be achieved through the implementation
of the [RMRK Specifications & Standards](https://github.com/rmrk-team/rmrk-spec), which provides the basic foundation for IPT smart 
contract design. Contracts will be written using Substrate's [Ink!](https://github.com/paritytech/ink). The starting point before any DEV 
can be formed is for an IPT to be minted. IPTs are intellectual property tokens or concepts for innovations stored as NFTs. IPTs consist 
of certain parameters such as a unique name, the related industry (i.e. healthcare, engineering, software & applications, etc.), the 
industry focus (i.e. insurance, civil engineering, cloud security, etc.), an abstract of the IPT, and any attached files that include 
schematics or images, documents, and/or any other elaborated details related to itself. The InvArch platform's native token ($VArch) is 
needed to stake when creating an IPT. The staked $VArch is deposited and locked into a separate wallet address dedicated to the InvArch
platform and not controlled by any centralized entity. This remains secured until its respective IPT is completely dissolved, at which 
point the staked $VArch is returned to its owner’s wallet. Unlike standard NFTs, intellectual property tokens do not include 
linked “editions” similar to what is seen in the digital art space. IPTs can be updated; however, while having mirroring editions has 
many uses in the digital art and metaverse worlds, it would cause defectiveness in its intended function of building partnerships.

### 2. Involvement Arch & DEV Networking
Partnerships formed over the InvArch platform between authors of IPTs and users with the
skills and resources required to actualize an IPT are called decentralized entrepreneurial
ventures (DEVs). A DEV is an NFT built on top of an IPT that is governed by DAOs and exists to
ensure compliance and security over the network.
<br>
![](https://i.ibb.co/mX6ckGn/Screen-Shot-2021-08-24-at-11-03-56-PM.png)
<br>
DEVs consist of several processes throughout their existence:
* Formation
DEVs are first created by staking $VArch, bonding an IPT, and providing the following
parameters: The roles that the DEV is seeking to fill to actual its IPT. The division and
allocation of IPTO throughout the project and being offered for each role. A Charter that
reviews the previously mentioned parameters in addition to the DEVs governance and
participant functions, the timeline expectations for the project, and a brief description
of the project, which is pulled from its IPT. Participants can apply to join a DEV as a
co-founder/partner, and upon the DEV founder's discretion, the full contents/details of a
DEV can be displayed after the requester has completed and signed an NDA.
* Charters
Charters are governing constitutions that decide how the DEV will be regulated. Charters
provide a clear and well-defined breakdown of the roles and responsibilities within the
DEV, the allocation and uses of the project's IPTO, compliance standards and
expectations, what is defined as misconduct within the project, and how to handle
violations.
* Governance
Projects are governed by DAOs as direct democracies. Every DEV has a maximum and a
preset number of 10,000 votes that can be submitted within themselves. These votes are
reflected through IPTO, meaning that a participant has 1 vote for each IPTO that is theirs.
Consensus is reached in majorities of 51% and 67%, depending on the measure being
voted on.
* Security & Compliance
To prevent bad actors from taking over DEVs, preset distribution ranges of IPTO must be
followed within a DEV to incorporate a decentralized democracy to take part in
governing and oversight when needed. While this body does not have to be included
when voting measures that pertain directly to business and financial measures within a
DEV, their inclusion could be invoked by another founding member of the DEV, or when
actions of misconduct are being addressed. Examples of misconduct. Misconduct is
predefined as acts of blackmail, extortion, theft, and/or negligence; however, additional
actions can be included in a DEV. Consequences can result in termination of one’s stake
and participation in a DEV. Weekly logs and repository updates are required to record and 
track development performance and progress. These distribution structures are elaborated more
in the following section cover IPTO.
* Restructuring After Completion
Multiple options for restructuring are provided upon the completion of a DEV.
Completion is primarily defined as an MVP being available for deployment or sale;
however, completion is defined and reached through a 67% consensus vote among DEV
participants. When completion has been reached, depending on the founding structure of a DEV,
projects can restructure as non-profits, corporations, or even be deployed as
decentralized organizations. Other options may be added or created in the future, but
these are the options that the InvArch platform will provide to start.
* Termination Based Liquidation
If a participant is voted out of a DEV due to misconduct, then they will relinquish their
IPTO stake in that project. If the participant had to stake $VArch as a condition for
joining the DEV, then that participant will have their $VArch unstaked and returned to
them. The IPTO will then be returned to its DEV’s treasury fund.
### 3. Investment Arch & IPTO Listings
To leverage fungible tokens representing both ownership and voting weight, fractionalized IPT
ownership (IPTO) is minted in quantities of 10,000 at the inception of a DEV. Each IPTO
represents a 0.01% stake in the project and 1 total vote over governance measures.
* Security Through Distribution
What ensures security between participants in a DEV is the fact that they are
decentralized. That being said, they are not centralized agreements made between 2 or 3
actors. They are decentralized ventures that involve 2 or 3+ co-founders and a
democratic voting bloc that consists of the general public throughout the InvArch
platform.
To ensure that no single actor can have a 51% hold over a project, IPTO can be
distributed within the following ranges: <br>
![](https://i.ibb.co/M6nLnh2/IPTO-distribution.png)
<br>
A DEV can dedicate 0-66% (0- Max. 6600) of its IPTO to its founders (non-profits would
distribute 0%). The rest (Min. 3400-10,000 IPTO) would be allocated to the DEVs treasury.
The total distribution between these two must equal 100% of the DEV’s IPTO.<br>
<br>
* 𝑓 + 𝑡 = 10000 | 0 ≤ 𝑓 ≤ 6600 | 3400 ≤ 𝑡 ≤ 10000<br>
<br>
Among the Founders, out of however much IPTO is decided to be allocated, no single
participant can have more than 50% (Max. 3300) of the allocated IPTO. No single
co-founder can have a higher stake than the founder. The distribution algorithm for the
founder’s distribution is:<br>
<br>
* 𝑓(𝑂) / 𝑝(𝑛) ≥ 𝑝(𝑂)<br>
<br>
Where 𝑓(𝑂)represents the founder’s total IPTO ownership, 𝑝(𝑛)represents the number of
co-founders, and 𝑝(𝑂)represents a co-founder’s IPTO ownership. This statement must
pass to form a DEV, and changes that break this statement cannot be implemented.
* Financial Inclusion
IPTO can be dedicated towards the general public for a low-cost fee paid in $VArch or
kUSD and is used towards the development and/or marketing of a DEV. Similar to how
many cryptocurrencies are used as both utility and a means to raise funds, IPTO can be
utilized in the same manner. While initial plans are to allow sales of IPTO to only be
performed between a DEV and a buyer (not between the general public), IPTO could later
be integrated into a DEX through the Karura network.
* Voting Weight
IPTO acts as a governance token over a DEV. Holders have the right to propose
development changes, financing strategies, report misconduct, and vote on status
consensus reports. Every DEV has 10,000 votes, with an IPTO representing a single vote.
The more IPTO a participant has, the more voting weight they have.
### Ecosystem Fit

### We are building on top of and integrating with many great projects in the Substrate ecosystem as an Substrate-based application

* [RMRK.app](https://github.com/rmrk-team/rmrk-spec)
* [Acala/Karura](https://acala.network/karura)
* [Polkadex](https://www.polkadex.trade/)
* [Ink!](https://github.com/paritytech/ink)

### Project Uniqueness
* InvArch is unique because there's nothing else like it. It's more than a platform, it's a tool for the entire world to build a better future with. 
It's not just a platform for those who are interested in blockchain, it's an entirely new world of economic opportunity for everyday people. It's 
unique because it's bold, it's powerful, and it has the ability to foster a global decentralized economy. We're reinventing NFTs and giving them a 
powerful use-case unlike anything possible before the advancement of Web3 technologies.
### Target Audience
* Entrepreneurs/Founders -> Provides a new way to attract cofounders for their project without dealing with a private entity or sacrificing private information.
* College/Trade Students -> Provides a more rewarding way to focus their skillsets and seek significant and fair economic opportunities for themselves.
* Individual/private Investors -> Provides immediate access to invest in innovative startups and projects during their earliest stages of development at the largest scale ever made available to them.
### Problem Addressed
* No platform exists where intellectual property can be verified, protected, openly shared, and used for building partnerships. As a result, many 
innovations never find the skills they require to become real and in the end, great ideas fade. How many great ideas have never had the opportunity 
to partner with the skills they needed to develop further? How many life-changing innovations have faded away in the minds of their founders? How many 
people have never had the chance to contribute their skills towards something remarkable? What would the world look like if no great idea ever faded?

## Team :busts_in_silhouette:

### Team members

* [Dakota Barnett](https://www.linkedin.com/in/dakotasb97), Founder
* [Gabriel Facco de Arruda](https://github.com/arrudagates), Sr. Rust Dev
* [Danny Salman](https://github.com/DannyS03), Substrate Dev
* [Kresna Sucandra](https://github.com/SHA888), Substrate Dev
* [Mindaugas Savickas](https://www.linkedin.com/in/savickas), Head of Marketing
* [Brunk Škvorc](https://www.linkedin.com/in/swader), Technical Advisor
* [Sonja Prstec](https://www.linkedin.com/in/sonja-prstec-mag-iur-89a0b324), Legal Advisor

### Contact

* **Contact Name:** Dakota Barnett
* **Contact Email:** dakota@invarch.io
* **Website:** [invarch.io](https://www.invarch.io)

### Legal Structure

Information Pending. To be transparent, the legal structure has not yet been formed.

### Team's experience

* [Dakota Barnett](https://www.linkedin.com/in/dakotasb97) has experience succesfully directing and leading multi-national teams, overseeing and directing 
succesful project management strategies, and scaling large operations. He's a seasoned developer, programming in JavaScript (3yrs), Node.js (2yrs), 
React.js (2yrs), Python (2yrs), Rust (1yr), and the Substrate framework (1yr). Past work includes private projects for previous employers focused on machine
learning, task automation, and website development. 💡

* [Gabriel Facco de Arruda](https://github.com/arrudagates) has experience as a Rust Developer, programming for the past 3 years, and as a developer in the 
Web3 ecosystem. Gabriel is a a dedicated programmer and DeFi ninja who loves cutting edge technology and all things Substrate/Rust. He is committed to building
applications that help promote a more decentralized global economy, and comes with past experience developing and scaling such applications. He brings direct 
experience developing applications for the Substrate ecosystem and as a Polkadot ecosystem contributor dedicated to building the future. 🧠

* [Danny Salman](https://github.com/DannyS03) comes with 3 years of solid experience as a developer, utilizing languages like C, JavaScript, TypeScript, and Rust. Danny is 
also an educator at the Web3 Foundation. Danny is a blockchain enthusiast and educator with a background in computer engineering, who has a keen interest in blockchain 
infrastructure and interoperability, DeFi and NFTs. He leverages past experience in DevOps management and brings first-hand insights and experience as a software developer, 
Web3 educator and researcher. Danny is a Polkadot ecosystem contributor committed to a decentralized web. 🌐

* [Kresna Sucandra](https://github.com/SHA888) is a dedicated programmer and Parity/Substrate enthusiast. Kusandra has been dedicated for the past year learning everything 
there is to know about the Web3 ecosystem. Kresna is a medical doctor turned programmer with a background in Substrate blockchain development focusing on multi-chain 
interoperability, DeFi, NFTs, and the Metaverse. He brings first-hand insights and experience as a former blockchain startup co-founder and developer with a history focusing 
on JavaScript and Rust programming. Kresna is a Polkadot ecosystem contributor who loves entrepreneurship. 🚀

* [Mindaugas Savickas](https://www.linkedin.com/in/savickas) is a veteran marketing advisor and fundraising rockstar with a background providing strategic marketing solutions 
and scaling over 40+ product & marketing teams worldwide. He Provides a proven history of success and strategic insights as a Harvard Business School graduate and tech marketing 
guru who lives & breathes strategic marketing. 📈

### Advisors

* [Brunk Škvorc](https://www.linkedin.com/in/swader) is one of the most knowledgeable programmers in the Polkadot/Kusama ecosystem as a former Web3 educator, Polkadot Council 
member, and the founder of the RMRK standard. 

* [Sonja Prstec](https://www.linkedin.com/in/sonja-prstec-mag-iur-89a0b324) is one of the most informed legal experts in the blockchain field, having served as a 
legal advisor for the Web3 Foundation, and as an active advisor for NEAR protocol.


### Team Code Repos

* https://github.com/InvArch
* https://github.com/InvArch/InvArch
* https://github.com/InvArch/Varch/

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* [Dakota Barnett](https://github.com/Invarchitect), Founder
* [Gabriel Facco de Arruda](https://github.com/arrudagates), Sr. Rust Dev
* [Danny Salman](https://github.com/DannyS03), Substrate Dev
* [Kresna Sucandra](https://github.com/SHA888), Substrate Dev

### Team LinkedIn Profiles (if available)

* [Dakota Barnett](https://www.linkedin.com/in/dakotasb97), Founder
* [Gabriel Facco de Arruda](https://www.linkedin.com/in/gabriel-facco-de-arruda-00880787), Sr. Rust Dev
* [Danny Salman](https://www.linkedin.com/in/dannysalman), Substrate Dev
* [Kresna Sucandra](https://www.linkedin.com/in/kresna-sucandra/), Substrate Dev
* [Mindaugas Savickas](https://www.linkedin.com/in/savickas), Head of Marketing
* [Brunk Škvorc](https://www.linkedin.com/in/swader), Technical Advisor
* [Sonja Prstec](https://www.linkedin.com/in/sonja-prstec-mag-iur-89a0b324), Legal Advisor

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

* Early-stage, node setup and Ink! smart contracts have begun being designed. (Please see our [GitHub](https://github.com/InvArch))
* [InvArch Whitepaper](https://invarch.io/invarch-whitepaper/)
* [InvArch Litepaper](https://invarch.io/invarch-litepaper/)
* [InvArch Pitch Deck](bit.ly/invarch_deck)
* [Publish0x](https://www.publish0x.com/blockchain-economy)
* Conversations regarding the arhitecture design of InvArch as well as the development path forwards have been held with former Web3 Educator [Brunk Škvorc](https://www.linkedin.com/in/swader), who has joined InvArch as the project's Technical Advisor.
* Conversations are ongoing with the co-founders of Acala/Karura regarding a partnership and future collaboration between their parachains and the InvArch platform.

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

For each milestone,

* make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md).
* include the amount of funding requested _per milestone_.
* include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
* provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
* commit to providing Dockerfiles for the delivery of your project.
* indicate milestone duration as well as number of full-time employees working on each milestone.
* **Deliverables 0a-0d are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):** 2
* **Total Costs:** $34,500

### Milestone 1 — Implement IPT Standards

* **Estimated duration:** 4 weeks
* **FTE:**  2
* **Costs:** $11,000

Goal - Provide a standard and UI prototype for users to mint IPTs.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | Documentation includes We will provide both inline documentation of the code and a tutorial that explains how a user use the Invention Arch, and deploy their own IPT contracts, RMRK 2.0 Standard documentation, Polkadot.js Integration Guide, Readme file. |
| 0c. | Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 1. | IPT Standards: Integrating RMRK | integrate with RMRK 2.0, wrap RMRK 'Art Lego' functionality into our library. This deliverable is dependant on the development of the [RMRK 2.0 Standard](https://github.com/rmrk-team/rmrk-spec).|
| 2. | IPT Standards: Extending RMRK | We will extend the RMRK Standards for minting a multi-attribute IPT needed for the MVP. Deploy smart contracts using Ink! rust-based native smart contract platform to the Karura Network. This deliverable is dependant on the development of the [Acala Platform](https://github.com/AcalaNetwork/Acala), please see the Acala [Developer Guide](https://wiki.acala.network/build/development-guide). |  
| 3. | IPT Minter: UI | We will create a simple UI to interact with our smart contract and mint an IPT consisting of a variety of file-types and information accuractly capturing intellectual property. |  
| 4. | Web dapp: Invention Arch  | Implement the dApp by deploying on the Karura parachain. | 
| 5. | Article | We will publish an **article**/workshop that explains the process for minting an IPT focused towards university and trade school students, as well as throughout the Kusama ecosystem.


### Milestone 2 Example — Additional features

* **Estimated duration:** 8 weeks
* **FTE:**  2
* **Costs:** $23,500

Goal - Expand IPT utility by implementing DEVs.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code, a tutorial that explains how to intitialize a DEV, and a Readme file. |
| 0c. | Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 1. | DEV Framework: Smart Contract | We will create a smart contract framework for forming a DEV and implementing that framework. |
| 2. | DEV Governance: IPTO | We will expand functionality to include IPT ownership (IPTO) tokens for both governance and financial utility. |  
| 3. | DEV Participation: Listing a DEV | We will create a simple UI for interacting with, applying to, and reviewing a DEV listing.  | 
| 4. | DEV Integration: Invention + Involvement Arch | We will integrate the two features in order to bond an IPT to a DEV generate IPTO. |
| 5. | Web dapp: Involvement Arch | Implement a very simple MVP dApp by deploying on the Karura platform and fully integrating with the Invention Arch. | 
| 6. | Article | We will publish an **article**/workshop that explains the process for Launching a DEV |

## Future Plans

Our vision is to help foster a robust, user-friendly, and decentralized platform that catalyzes future innovations and promotes economic fairness. Future plans 
for growth include government and enterprise innovation bounty partnerships, a community development team focusing on addressing problems on a global scale, 
bolstering our professional development network, integrating more project management tools, and implementing premium features and tools that users pay the network's 
native token in order to access. Upon full decentralization of the platform, these funds will instead be redirected towards a platform treasury.

1. Expanding the Involvement Arch component and building a robust professional networkng platform for DEV based partnerships and information.
2. Expanding IPTO for listing functionality and integrate additional technologies to provide for IPTO DEX listings.
3. Integrating decentralized KYC technologies and increasing the platform's provided security over DEV participants.
4. Developing a DEV log to help monitor and assist with the project management and development processes.
5. Incorporating crypto loan and banking services for DEVs and platform users.
6. Adding a 'Innovation Bounty Board' feature to the platform.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

Only the InvArch team has financially contributed at this time.
