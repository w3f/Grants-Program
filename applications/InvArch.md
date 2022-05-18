# W3F Grant Proposal

* **Project Name:** InvArch - IP Infrastructure for Substrate
* **Team Name:** InvArchitects
* **BTC Payment Address:** bc1q8ere0hsz2rnledqev0e96artwuwtgrj4jf0u8z
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

* InvArch is a next generation blockchain for intellectual property tokenization, development, & networking.
* Under this grant, the [InvArch Pallet Library](https://github.com/InvArch/InvArch-Pallet-Library) would be delivered, and would provide an IP tokenization and utility infrastructure for the Substrate ecosystem.
* The InvArch platform provides utility for this new technology by allowing intellectual property tokens (IPTs) to be owned by a 
Decentralized Entrepreneurial Venture (DEV) contract and governed as a DAO using built-in fungible IP Ownership (IPO) tokens. These tokens
may also be leverages by participants in a DEV to raise startup funds for their projects. 
* InvArch is built using Substrate/Rust.
* Every member of the time has an honest belief that this project will help make the world better through increased economic decentralization and by
helping to catalyze future innovations, it's a belief that motivates and inspires every one of us to see this project through.

### Project Details

* [InvArch Whitepaper](https://invarch.io/invarch-whitepaper/)
* [InvArch Litepaper](https://invarch.io/invarch-litepaper/)
* [InvArch Pitch Deck](bit.ly/invarch_deck)

<div align=center>
  <img src="https://i.ibb.co/cxTZQqK/Screen-Shot-2021-08-28-at-5-42-07-PM.png">
</div>

### InvArch approaches ideas (IP) as a set of non-fungible components: 
* IP Set = Idea
* IP Tokens  = components of their idea. 
* An IP Set can have built-in IP Ownership tokens. 
* You can,`list`,`sell`,`buy`,`transfer`, and `destroy` an IP Set, but not individual IP Tokens, since they're only components. 
* A new IP set can be created (`create`) and new IPT can be minted (`mint`) and added to a Set.
* Existing IPT can be burned (`burn`) or amended (`amend`). 
* Subsequently, an entire IP Set could be destroyed (`destroy`) as well, burning all of its contents.
* IPFS or Interplanetary File System allows data and IP contents to be securely stored off-chain and given a CID, or content identifier, that serves as a unique hash and is used to mint IP Tokens. The InvArch protocol will include the [`ipfs_api`](https://docs.rs/ipfs-api/0.11.0/ipfs_api/) crate to help achiave this.

### InvArch's approach to Decentralized Entrepreneurial Ventures (DEVs): 
* DEV = An agreement that defines the required/requested roles a project needs and their IP Ownership allocations, sets its milestones/deliverables, copyright terms, if any, and decides its application process. A DEV can also be imagined as a deigital representation of a real-world development project.
* You can `initialize`,`list`,`amend`,`apply`,`launch`,`unlist`, and `deconstruct` a DEV.

### Technologies
1. Substrate
2. Rust
3. Vue.js

### Limitations
While InvArch is designed to allow user to protect, store, authenticate, and securely share their intellectual property, it does not provide a system 
for handling theft. Instead, the platform offers many of the resources needed to take action against an individual. It is important to note that the full contents/data of an IPT are not initially fully exposed on the platform. The platform addresses the problem of security by 1. integrating decentralized KYC, a requirement for users to access the platform, 2. only exposing limtited data (name, industry, focus, description) to users until after they have applied to a DEV and 3.) the initializer of said DEV reviews, interviews, and elects to share a temporary private-key fullu exposing the IPTs data. The platform does not litigate attempts of intellectual property theft. The platform does, however, provide governance measures to handle bad actors within a DEV. The platform is designed to prevent bad actors from taking over a project through the allocation structure of a DEV's IP Ownership (IPO) tokens. The platform extends the same security to intellectual property as digital art NFTs supply, but just as NFT platforms do not mitigate disputes, the InvArch platform does not as well. The United States Copyright Office put out a summary of its basic rules. Generally, any original work of authorship, be it music, paintings, books, or any other even minimally creative tangible work, is protected under federal law. However, different countries have different rules. The European Union views NFTs in this same light. Due to the complexity of these institutions, InvArch does not serve to replace them. InvArch is only able to provide legal copyright where NFTs are recognized as such, considering that the scope of legal recognization is a matter based off of institutional perspective.

### Components

### InvArch Pallet Library

### 1. IP Protocol & Pallets
* `Pallet_ips` - Provides basic functionality for creating and managing an `IPSet`. You can think of an `IPSet` as an idea, which is basically a collection of components (intellectual property tokens) that define and describe that idea.
* `Pallet_ipt` - Provides basic functionality for creating and managing an `IPToken`. You can think of an `IPToken` as a component of an idea. For example, a business summary PDF file, or even a 3D rendering of a prototype mold. When combined and stored in an `IPSet`, that collection forms the foundtion for an idea. The more detailed and/or comprehensive an `IPSet` is, the stronger the idea.
* `Pallet_ipo` - Provides basic functionality for creating and managing a `IPOwnership` tokens. You can think of `IPOwnership` tokens as a form of fungible and fractionalized ownership that are built-in to every `IPSet`.
<div align=center>
  <img src="https://i.ibb.co/Cn1Vsvb/Screen-Shot-2021-08-29-at-11-48-57-AM.png">
</div>

### 2. DEV Protocol & Pallets
* `Pallet_dev` - Provides basic functionality for structuring, managing, and listing a `DEV`(Decentralized Entrepreneurial Venture). You can think of a `DEV` as an agreement between multiple parties to come together as cofounders over a project in order to contribute towards an `IPSet`'s actualization.
* `Pallet_dao` - Provides basic functionality for creating and managing a `DAO` that helps govern a `DEV`. You can think of a `DAO` as a `DEV`'s governance mechanism. It helps regulate the and ensure the integrity and prudence of participants within a `DEV`.
* `Pallet_worklog` - Provides basic functionality for creating and managing a `WorkLog` within a `DEV`. You can think of a `Worklog` as a `DEV`'s method of recording and storing milestone/deliverables progressions and completions.
* `Pallet_deliverables` - Provides basic functionality for creating and managing a `Deliverables` distribution mechainism for `IPOwnership` throughout a `DEV`. You can think of `Deliverables` as a mechanism for automatically distributing `IPOwnership` tokens to participants in a `DEV` as milestones/deliverables are met and confirmed by its `Worklog`.
* `Pallet_listings` - Provides basic functionality for creating and managing a `Listing` for a `DEV`'s `IPOwnership` tokens. `Listings` allows for public listings of `IPOwnership` to be purchased by outside participants/investors.

### Key Info Regarding `IPOwnership`
To ensure that no single actor can have a 51% hold over a project, IPO can be
distributed within the following ranges: <br>
<div align=center>
  <img src="https://i.ibb.co/7NKWDM6/Screen-Shot-2021-08-28-at-5-41-35-PM.png">
</div>
<br>
A DEV can dedicate 0-66% (0- Max. 6600) of its IPO to its founders (non-profits would
distribute 0%). The rest (Min. 3400-10,000 IPO) would be allocated to the DEVs treasury.
The total distribution between these two must equal 100% of the DEV’s IPO.<br>
<br>
<div align=center>
  𝑓 + 𝑡 = 10000 | 0 ≤ 𝑓 ≤ 6600 | 3400 ≤ 𝑡 ≤ 10000<br>
</div>
<br>
Among the Founders, out of however much IPO is decided to be allocated, no single
participant can have more than 50% (Max. 3300) of the allocated IPO. No single
co-founder can have a higher stake than the founder. The distribution algorithm for the
founder’s distribution is:<br>
<br>
<div align=center>
  𝑓(𝑂) / 𝑝(𝑛) ≥ 𝑝(𝑂)<br>
</div>
<br>
Where 𝑓(𝑂)represents the founder’s total IPOwnership tokens, 𝑝(𝑛)represents the number of
co-founders, and 𝑝(𝑂)represents a co-founder’s IPOwnership tokens. This statement must
pass to form a DEV, and changes that break this statement cannot be implemented.
* Voting Weight
IPO acts as a governance token over a DEV. Holders have the right to propose
development changes, financing strategies, report misconduct, and vote on status
consensus reports. Every DEV has 10,000 votes, with an IPO representing a single vote.
The more IPO a participant has, the more voting weight they have.

### Ecosystem Fit

:link:  **Chains and Pallets**<br>
InvArch could arguably be applied to any of the one sub-categories below:
* Social Networking
* NFT
* Governance/DAO
* Other (IP Infrastructure on Substrate)

### Project Uniqueness
* InvArch is unique because there's nothing else like it. It's more than a blockchain, it's a tool for the entire world to build a better future with. 
It's not just a platform for those who are interested in blockchain, it's an entirely new world of economic opportunity for everyday people. It's 
unique because it's bold, it's powerful, and it has the ability to foster a global decentralized economy. We're reinventing NFTs and giving them a 
powerful use-case unlike anything possible before the advancement of Web3 technologies.
### Target Audience
* Entrepreneurs/Founders -> Provides a new way to attract cofounders for their project without dealing with a private entity or sacrificing private information.
* College/Trade Students -> Provides a more rewarding way to focus their skillsets and seek significant and fair economic opportunities for themselves.
* Individual/private Investors -> Provides immediate access to invest in innovative startups and projects during their earliest stages of development at the largest scale ever made available to them.
* Educators/Researchers -> Provides a way for them to securely and share protect their work.
* Developers -> We're introducing a blockchain where developers will have a new type of digital-asset to play with and initegrate into their projects.
### Problem Addressed
* No network exists where intellectual property can be verified, protected, openly shared, and dynamically used for building partnerships. As a result, many 
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

* [Danny Salman](https://github.com/DannyS03) comes with 3 years of solid experience as a developer, utilizing languages like C, JavaScript, TypeScript, and Rust. Danny is also an educator at the Web3 Foundation. Danny is a blockchain enthusiast and educator with a background in computer engineering, who has a keen interest in blockchain infrastructure and interoperability, DeFi and NFTs. He leverages past experience in DevOps management and brings first-hand insights and experience as a software developer, Web3 educator and researcher. Danny is a Polkadot ecosystem contributor committed to a decentralized web. 🌐

* [Kresna Sucandra](https://github.com/SHA888) is a dedicated programmer and Parity/Substrate enthusiast. Kusandra has been dedicated for the past year learning everything there is to know about the Web3 ecosystem. Kresna is a medical doctor turned programmer with a background in Substrate blockchain development focusing on multi-chain interoperability, DeFi, NFTs, and the Metaverse. He brings first-hand insights and experience as a former blockchain startup co-founder and developer with a history focusing on JavaScript and Rust programming. Kresna is a Polkadot ecosystem contributor who loves entrepreneurship. 🚀

* [Mindaugas Savickas](https://www.linkedin.com/in/savickas) is a veteran marketing advisor and fundraising rockstar with a background providing strategic marketing solutions and scaling over 40+ product & marketing teams worldwide. He Provides a proven history of success and strategic insights as a Harvard Business School graduate and tech marketing guru who lives & breathes strategic marketing. 📈

### Advisors

* [Brunk Škvorc](https://www.linkedin.com/in/swader) is one of the most knowledgeable programmers in the Polkadot/Kusama ecosystem as a former Web3 educator, Polkadot Council member, and the founder of the RMRK standard. 

* [Sonja Prstec](https://www.linkedin.com/in/sonja-prstec-mag-iur-89a0b324) is one of the most informed legal experts in the blockchain field, having served as a 
legal advisor for the Web3 Foundation, and as an active advisor for NEAR protocol.

### Team Code Repos

* https://github.com/InvArch
* https://github.com/InvArch/InvArch-node
* https://github.com/InvArch/InvArch-Pallet-Library

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

* Early-stage, node setup and Ink! smart contracts have begun being designed. (Please see our [GitHub](https://github.com/InvArch))
* [InvArch Whitepaper](https://invarch.io/invarch-whitepaper/)
* [InvArch Litepaper](https://invarch.io/invarch-litepaper/)
* [InvArch Pitch Deck](bit.ly/invarch_deck)
* [Publish0x](https://www.publish0x.com/blockchain-economy)
* Conversations regarding the arhitecture design of InvArch as well as the development path forwards have been held with former Web3 Educator [Brunk Škvorc](https://www.linkedin.com/in/swader), who has joined InvArch as the project's Technical Advisor.

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):** 2
* **Total Costs:** $28,000 equivalent

### Milestone 1 — Implement IP Pallets & Standards

* **Estimated duration:** 4 weeks
* **FTE:**  2
* **Costs:** $10,000 equivalent

Goal - Develop and deliver the IP Pallets & Standards for the InvArch Chain/InvArch Pallet Library

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | Documents containing the description of the whole architecture design for InvArch, an introduction video, and appropriate `README.md` files will be included. |
| 0c. | Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Node Repo | Complete the deployment of the InvArch chain (https://github.com/InvArch/InvArch) |
| 2a. | Pallet_ips | Complete the development of [pallet_ips](https://github.com/InvArch/InvArch-Pallet-Library/tree/main/ips) and realize the IP Sets standard. |
| 2b. | Pallet_ipt | Complete the development of [pallet_ipt](https://github.com/InvArch/InvArch-Pallet-Library/tree/main/ipt) and realize the IP Token Standard.  |
| 2c. | Pallet_ipo | complete the development of [pallet_ipo](https://github.com/InvArch/InvArch-Pallet-Library/tree/main/ipo) and realize the fractionalized ownership mechanism. |
| 3. | Article | 	We will write an **article** that explains the work done as part of the grant. |



### Milestone 2 — Implement DEV Pallets & Standards

* **Estimated duration:** 8 weeks
* **FTE:**  2
* **Costs:** $18,000 equivalent

Goal - Develop and deliver the DEV Pallets & Standards for the InvArch Chain/InvArch Pallet Library

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 | 
| 0b. | Documentation | An introduction video, and appropriate `README.md` files will be included. |
| 0c. | Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1a. | Pallet_dev | complete the development of pallet_dev and realize the project structuring mechanism. |
| 1b. | Pallet_dao | Complete the development of pallet_dao and realize the governance mechanisms. |
| 1c. | Pallet_worklog | Complete the development of pallet_worklog and realize the development worklog mechanism mechanism. |
| 1d. | Pallet_deliverables | Complete the development of pallet_deliverables and realize the deliverables mechanism. |
| 1e. | Pallet_listings | Complete the development of pallet_listings and realize the IPO listing mechanism. |
| 2. | InvArch UI | We will develop a basic UI for our chain in Vue.js |
| 3. | Article | 	We will write an **article** that explains the work done as part of the grant. |

## Future Plans

* 1a. Integrate decentralized KYC capabilities into our chain (Likely using KILT Protocol).
* 1b. Look into extending IPO listing capabilities by integrating with Polkadex.
* 1c. Expand IP Token capabilities by integrating with RMRK (if possible), or by expanding the standards.
<div align=center>
  <br>(concept: Multi-attribute IPT)<br>
  <img src="https://i.ibb.co/XsG84qs/Screen-Shot-2021-08-29-at-11-49-33-AM.png">
  <br>(concept: Multi-layer IPS)<br>
  <img src="https://i.ibb.co/2gCx7cm/Screen-Shot-2021-08-29-at-11-50-01-AM.png">
</div>

* 2a. **Flagship dApp**: Launch a decentralized professional social networking platform for DEV partnership.
* 2b. Develop a private instant messenger that uses on-chain identity.
* 2c. Add an Innovation Bounties Board feature to our dApp.
* 2d. Implement an on-chain treasury to promote future development and maintain platform upkeep.
* 3. Research uses cases of tokenized IP and explore the implementation of a decentralized education platform.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
Web3 Foundation Website

Only the InvArch team has financially contributed at this time.
