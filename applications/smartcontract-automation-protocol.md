# Smartcontract Automation Protocol

- **Team Name:** Talentica
- **Payment Address:** 0x8bd54ec34A35f3A2f668A33d9578b5C3A6b730dE
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Smartcontract Automation Protocol enables Polkadot developers to schedule calls to their smartcontracts that will be honored by decentralized infrastructure.

### Overview

We may have come across situations wherein a smartcontract had to be invoked regularly for the smooth functioning of a Dapp.
Some examples of such scenarios are,
  1. Lending protocols(with lending periods on tokens)
  2. Limit orders
  3. Periodic rounds on prediction markets
  4. Funding wallets

The first thing that comes to a Dapp builder's mind when faced with such a situation is to setup their own infrastructure to address this issue.
There are two reasons as to why this design is the first to come to a Dapp builder's mind:
  1. Web 2.0 has solved this problem in a straight-forward way and offers several centralized solutions, some of which are easy-to-use, transparent (in their technicalities and billing), reliable (promises like 99.999% uptime), cost-effective and,
  2. Web 3.0 hasn't yet provided an open-standard solution that in addition to all the aforementioned features, is also decentralized.

Existing Web 3.0 automation solutions deliver well on a subset of the aforementioned features while compromising on the others.

Therefore, I propose we design and implement an open-standard protocol to address this challenge in an efficient and elegant manner.

### Project Details

We are currently brainstorming on the protocol design and welcome ideas and contributions from everyone.

The protocol will be driven by a few core design guidelines. They are,
  1. Technology/Tool agnostic
  2. Open to everyone
  3. Unbiased and focused towards Stakeholders
  4. Simple, transparent and affordable automation economics
  5. Governed by stakeholders

We aim to share an open-source design(language-agnostic technical specification) of the aforementioned protocol followed by a reference implementation(choice of the programming language is deferred for now) of the same.

- The protocol aims to investigate and address the following key concerns,
    1. be easy to join and use, for both the availers and providers of the automation service,
    2. ensure the availability of the infrastructure,
    3. ensure every party contributing to the decentralized infrastructure gets equal opportunity to serve and get rewarded,
    4. strive for affordable and transparent automation charges,
    5. ensure that the automation tasks are honored and enable the verification of the same in a decentralized manner,
    6. adapt to address any new related concern 

- Addressing the aforementioned key concerns requires us to tackle a research topic,
`Decentralized and uniform allocation of tasks/workload among homogeneous agents while optimizing on a parameter`
and the following abstract may put things in perspective,
A decentralized approach to uniformly distribute tasks(in our case, scheduled blockchain transactions) among homogeneous agents(in our case, network of automation nodes owned and operated by several parties) while optimizing on a parameter(in our case, transaction gas fees).
The keywords within the above title capture some of our core design guidelines,
  1. Decentralized, because we want to build a Web 3.0 protocol and also because the infrastructure is decentralized
  2. Uniform allocation, because we want every automation service provider to get equal opportunity(key concern 3)
  3. Optimizing on gas fees, keeping it as low as possible, because we want the protocol to promote fair and affordable automation economics(key concern 4)

- Our approach to designing this protocol is to start by defining the flow in the form of sequence diagrams. This provides us with a minimal structure to build upon and is also easy to modify.
Then, we take each phase in the sequence, come up with a simple approach to solving it, identify the shortcomings, brainstorm, iterate and improve, may be make a few modifications to the previous phase so it fits well.
Coming to the core concern of decentralized task scheduling, we have identified a few published research papers and are actively searching for more that discuss related problems. We will build on top of them wherever we can, thereby deriving their mathematical soundness but we also acknowledge that we will have to come up with novel approaches to solve the rest of the parts of our problem.
Finally, we will simulate each phase and see if it all fits well, explain and justify the design decisions and the tradeoffs made.
The entire journey will be captured in a live document.
  
- We will collect and analyse data from the existing Web 3.0 automation protocols to discover trends and distributions. This analysis will be included in the design document and also considered while designing the protocol.

- The outcome of the current phase will be a detailed technical design document describing the protocol specification in a language agnostic way, description along with a high-level interface for each of the components that constitute the protocol, a discussion and a justification(in the form of mathematical models/proofs wherever possible) of the design decisions and the entire protocol.

- Members of our team have worked on related problem statements,
  1. [Distribution of IoT edge computing tasks on to a Blockchain network](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=m-KbvBsAAAAJ&citation_for_view=m-KbvBsAAAAJ:d1gkVwhDpl0C)
  2. [Addressing privacy and integrity of decentralized computation of IoT edge computing tasks](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=m-KbvBsAAAAJ&citation_for_view=m-KbvBsAAAAJ:qjMakFHDy7sC)

- We acknowledge that a part(the research one) of the outcome of this work can and will be published in one of the conferences. However, we would like to take some time to decide upon it and will share the specifics eventually.

- We aim to design the protocol specification and also provide a reference implementation of the same. We hope to build a thriving ecosystem of automation service users and providers around this protocol who will ultimately steer/govern it. We have no intentions of monetizing/governing the project. We can, however, provide some minimal infrastructure for the time being to promote this endeavour and may stop it once the project sees adoption.

### Ecosystem Fit

- Polkadot has attracted a diverse and vibrant community, who have built a vivid vareity of projects or will soon do so. Many wonderful ideas from the Web 2.0 era are constantly being reimagined and resurrected in a decentralized way into the Web 3.0 space. Several of these ideas require some kind of automatic execution. I have already discussed few such cases but there are many more. Some of these ideas are undervalued, rightly so, because this one issue is being dealt in an inelegant manner or not at all. We hope to change that.

- Our target audience are both Dapp developers looking for decentralized and affordable automation solutions as well as parties who want to better utilize their infrastructure and get rewarded for the same.

- Our project aims to connect Dapp developers in need of decentralized and affordable automation solutions with it's providers.

- No, there are none in the Polkadot ecosystem. However, there are/have been for a long time a few in the Ethereum Ecosystem.

## Team :busts_in_silhouette:

### Team members

- Pankaj Mendki - Advisor and mentor, Researcher(Blockchain and Edge Computing)
- Debasish Ray Chawdhuri - Advisor, Researcher(Blockchain and Cryptography)
- Nikhil Desai - Protocol Ideator, Designer and Blockchain Engineer
- Ankit Wasnik - Blockchain Engineer

### Contact

- **Contact Name:** Nikhil Desai
- **Contact Email:** Nikhil.Desai@talentica.com
- **Website:** https://www.talentica.com/

### Legal Structure

- **Registered Address:** Talentica Software Inc., 6200, Stoneridge Mall Road, Pleasanton, California 94588, USA.
- **Registered Legal Entity:** Talentica Software Inc.

### Team's experience

- Members of our team have worked on related problem statements,
  1. [Distribution of IoT edge computing tasks on to a Blockchain network](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=m-KbvBsAAAAJ&citation_for_view=m-KbvBsAAAAJ:d1gkVwhDpl0C)
  2. [Addressing privacy and integrity of decentralized computation of IoT edge computing tasks](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=m-KbvBsAAAAJ&citation_for_view=m-KbvBsAAAAJ:qjMakFHDy7sC)

- We've successfully delivered an RFP titled [ink!/pallet/solidity performance benchmarking](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/implementation-benchmarking.md)

### Team Code Repos

- [provenance-usecase](https://github.com/TalenticaSoftware/provenance-usecase)
- [simpleblockchain](https://github.com/Talentica/simpleblockchain)
- [substrate-benchmarking](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking)
- [loan-lending-platform](https://github.com/TalenticaSoftware/loan-lending-platform)

- https://github.com/pdmendki
- https://github.com/Nikhil-Desai-Talentica
- https://github.com/Ankitwasnik

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/pankaj-mendki-8576363/
- https://www.linkedin.com/in/nikhil-desai-1209a38b/
- https://www.linkedin.com/in/ankit-wasnik-834858143/

### Google Scholar Profiles (Or other research indexer profile, ex. Researchgate)

- https://scholar.google.com/citations?user=m-KbvBsAAAAJ&hl=en
- https://www.researchgate.net/profile/Debasish-Ray-Chawdhuri

## Development Status :open_book:

We are currently brainstorming on the protocol design, and have had internal discussions about the design principles, challenges we might have to address along this journey.

- We have found a few research papers that address related problems but not exactly the one we have discussed and are actively looking for research papers that are more closely related and appreciate your help in the same. Here are the ones identified so far,
  1. [Brunet, Luc & Choi, Han-Lim & How, Jonathan. (2008). Consensus-Based Auction Approaches for Decentralized Task Assignment. AIAA Guidance, Navigation and Control Conference and Exhibit. 10.2514/6.2008-6839.](https://www.researchgate.net/publication/228529155_Consensus-Based_Auction_Approaches_for_Decentralized_Task_Assignment)
  2. [H. -L. Choi, L. Brunet and J. P. How, "Consensus-Based Decentralized Auctions for Robust Task Allocation," in IEEE Transactions on Robotics, vol. 25, no. 4, pp. 912-926, Aug. 2009, doi: 10.1109/TRO.2009.2022423.](https://ieeexplore.ieee.org/document/5072249/citations#citations)
  3. [Johnson, Luke & Ponda, Sameera & Choi, Han-Lim & How, Jonathan. (2010). Improving the Effciency of a Decentralized Tasking Algorithm for UAV Teams with Asynchronous Communications. 10.2514/6.2010-8421.](https://www.researchgate.net/publication/259741237_Improving_the_Effciency_of_a_Decentralized_Tasking_Algorithm_for_UAV_Teams_with_Asynchronous_Communications)
  4. [S. Ismail and L. Sun, "Decentralized hungarian-based approach for fast and scalable task allocation," 2017 International Conference on Unmanned Aircraft Systems (ICUAS), Miami, FL, USA, 2017, pp. 23-28, doi: 10.1109/ICUAS.2017.7991447.](https://ieeexplore.ieee.org/document/7991447)
  5. [S. Nayak et al., "Experimental Comparison of Decentralized Task Allocation Algorithms Under Imperfect Communication," in IEEE Robotics and Automation Letters, vol. 5, no. 2, pp. 572-579, April 2020, doi: 10.1109/LRA.2019.2963646.](https://ieeexplore.ieee.org/document/8949727)


## Development Roadmap :nut_and_bolt:

Protocol design consists of the following tasks,
  1. high-level flow definition
  2. high-level design
  3. research on decentralized and uniform task allocation
  4. research on automation economics
  5. low-level flow definition and design
  6. formal specification

Because of the difference in the nature of tasks involved, we have devised a two phase plan to accomplish the aforementioned tasks.
Accrodingly, we will submit one grant application per phase, of which this is the first and the following are the tasks that will be accomplished in the current phase,
  1. high-level flow definition
  2. high-level design
  3. research on decentralized and uniform task allocation
  4. research on automation economics

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 30,000 DAI

### Milestone 1 — High-Level Flow and Design

- **Estimated duration:** 1 month
- **FTE:**  2 FTE
- **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 |
| **0b.** | Documentation | We will provide detailed explanations of the high-level flow and design artifacts. |
| **0c.** | Methodology | Detailed explanation of the design decisions made and also the changes to expect. |
| **0d.** | Infrastructure | We will provide these artifacts in popular formats in order to ensure accessibility. |
| **0e.** | Article | We will share an article explaining how the design evolved and the reasoning behind it. The assumptions made and the issues that were considered in coming up with the design.  |
| 1. | High-Level Flow artifacts | We will provide system sequence diagrams depicting the flow in an easily accessible format. |
| 2. | High-Level Design artifacts | We will provide component diagrams depicting the high-level design in an easily accessible format. |

### Milestone 2 — Literature review and research

- **Estimated Duration:** 2 months
- **FTE:**  2 FTE
- **Costs:** 20,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 |
| **0b.** | Documentation | We will provide a list of research questions we are investigating and reason about why it is required and how does it fit into the protocol design. |
| **0c.** | Methodology | We hope to review existing literature about each of the research topics, consider alternatives wherever available, study comparisions, and use the best approach as it is wherever we can and build on top of it otherwise. |
| **0d.** | Infrastructure | We will provide these artifacts in popular formats in order to ensure accessibility. |
| **0e.** | Article | We will share an article talking about the published papers that we have reviewed, reasoning about the choice of a particular approach in case of alternatives, explaining why and how we intend to extend it if necessary.  |
| 1. | List of academic papers regarding decentralized task allocation | We require access to the aforementioned academic papers and will let you know if we come across anymore that might be helpful. |
| 2. | Academic paper draft | We will share a draft of the academic paper describing the research we did which will eventually be presented at an appropriate venue, be it a conference or a journal. |

## Future Plans

- We will immediately follow this up with a grant application wherein we will develop a low-level design in the form of UML Class diagrams along with a formal specification of the protocol in a language-agnostic way.
- Later, we will submit a grant application wherein we will develop a reference implemention the same. We can also provide some minimal infrastructure in it's infancy to promote this endeavour and may stop it once the project sees adoption.
- We hope to build a thriving ecosystem of automation service users and providers around this protocol who will ultimately steer/govern it.

## Additional Information :heavy_plus_sign:

- Gautam Dhameja told us about the Grants program and encouraged us to apply to the same.
- We've successfully delivered on an RFP titled [ink!/pallet/solidity performance benchmarking](https://github.com/w3f/Grant-Milestone-Delivery/commit/27d653ac65a35feb410a1d0ee805469321ab4120)