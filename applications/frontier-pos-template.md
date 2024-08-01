# frontier-pos-template

- **Team Name:** ChainSupport
- **Payment Details:**
  - **Payment**: 0xcC1974d462B9F22F37D09c70F6023Ef9167EB3De (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

This is a development template based on Polkadot's NPOS consensus, compatible with EVM. 
It aims to enable new developers or teams in the Polkadot ecosystem to quickly create EVM-compatible chains based on NPOS consensus.

### Project Details

Our team of engineers has previously been employed by various blockchain teams, particularly within the Polkadot and Ethereum ecosystems, 
and they possess extensive experience in public chain development. Polkadot is one of the world's most outstanding public chains, 
especially due to its provision of the excellent Substrate framework for developing public chain infrastructure.

We have taken note of the latest JAM gray paper and the community's extensive discussions on UX upgrades. 
These future roadmaps indicate that while Polkadot continues to make great technological innovations, 
it is also striving to make the technology more user-friendly, enhance the user experience, and improve compatibility with the Ethereum ecosystem. 
These efforts aim to attract more new users and capital to the Polkadot ecosystem.

Based on our past experience, we believe that while UX is certainly important, the developer experience (DX) is equally indispensable. 
This is crucial for determining whether new teams will ultimately adopt Polkadot technology and how many projects will emerge within the Polkadot ecosystem.


This template serves developers and teams aiming to create EVM-compatible standalone chains. 
These developers have high demands on their development progress (not starting from POA) and wish to leverage Polkadot's NPOS or all available pallets.
We recognize that Proof of Stake (PoS) has become the mainstream in blockchain technology, with very few teams using POA, which clearly cannot meet their needs.

We have observed that while there are many EVM-compatible parachains in the Substrate ecosystem, even platforms like Moonbeam do not directly benefit such developers. 
Creating an EVM standalone chain with NPOS consensus still requires extensive modifications. 
This means that new development teams may not receive adequate initial development support, 
potentially leading them to mistakenly perceive the technical costs as too high and thus abandon Substrate technology.

The discussions around the Plaza chain have clearly demonstrated the importance of smart contracts and EVM for public chains. 
Therefore, a mature EVM template with NPOS is highly needed here.

A few days ago, [SuperEx](https://www.superex.com/), a rapidly growing EX team, approached us. They are looking to create a public chain that is EVM-compatible with high security and TPS. We immediately recommended Polkadot to them. However, after nearly a week of technical research, we found it to be a regrettable situation. When we needed a template for an EVM-compatible NPOS consensus, it simply did not exist. This is such a common need, and this difficulty should not be present for future teams.

For new developers and teams, making complex code modifications can lead to potential security issues. A secure and universally applicable runtime and client are crucial. Therefore, we chose to develop this project to benefit these teams and allow users in the Ethereum ecosystem to utilize NPOS, achieving a highly decentralized chain.

For the community, they need more than just a [POA template](https://github.com/substrate-developer-hub/substrate-node-template) for learning and hackathons. Development teams require an NPOS template that can be directly and quickly used in production environments.

We have interacted with many developers and teams in the past, and they often mention that developing in the Polkadot ecosystem is too difficult. 
Some of this is due to the inherent complexity of Rust, while another part is the lack of simpler and more developer-friendly templates. 
This causes significant frustration in the early stages of engagement, leading many to abandon the effort, which should not happen.

This project will not develop unnecessary modules. As a template, it should be generic and strive to provide all the current templates and functionalities that Substrate offers.
It will be a composite of [Frontier](https://github.com/polkadot-evm/frontier) and the [Polkadot SDK Substrate node](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/bin/node). 
We hope this project will evolve into a community-developed scaffold.



### Ecosystem Fit

- Where and how does your project fit into the ecosystem?  

  As a community universal development template.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Serving teams and developers looking to create EVM-compatible NPOS standalone chains, as well as developers from the Ethereum ecosystem.
- What need(s) does your project meet?

  Enabling new developers and teams to quickly create their own EVM-compatible NPOS chains.
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
  As long-term users of Substrate, we find it very painful to use the substrate-node-template. 
Generally, the requirement is not to start with POA and then switch to NPOS, which causes many teams to spend a lot of effort on this upgrade.
For new teams, they must understand the differences between the two and how to implement the technical upgrade, 
leading to fear and lack of confidence among new developers, while older developers and teams waste time.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem? If so, how is your project different? Please identify and assess any projects addressing the same need and explain how your project is distinct. Feel free to include applicable research data, statistics, or metrics.
  https://github.com/substrate-developer-hub/substrate-node-template， No EVM compatibility and no NPOS.
  https://github.com/substrate-developer-hub/frontier-node-template, No NPOS and the code structure is not developer-friendly.
  https://github.com/paritytech/polkadot-sdk/tree/master/substrate/bin/node, No EVM and the code structure is not developer-friendly.
  
  Why is it necessary to develop this project even with the existing templates?   
  We know that Polkadot's official team has focused more on innovations in the underlying technology. 
  This is akin to creating airplanes to connect two cities, but once people leave the airport, 
  they still need more convenient transportation like taxis or subways. This project serves a similar purpose. 
  It greatly facilitates developers by eliminating the need to repeatedly perform the same tasks, 
  making the development process much more enjoyable and efficient. It also helps more enthusiasts of NPOS and EVM understand how Substrate can be compatible with EVM.
  This is very meaningful. In addition, as a public template, it will pay attention to the development of other EVM chains in the Polkadot ecosystem, 
  pay attention to what interesting functions and RPC they have done, and provide it as much as possible. 
  This will directly benefit more developers. These tasks cannot be complete directly by Polkadot officials, 
  because they have their own areas of concern, which is the innovation of underlying technologies.

  
## Team :busts_in_silhouette:

### Team members

- weimeme
- JimYam

### Contact

- **Contact Name:** weimeme
- **Contact Email:** weimeme067@gmail.com

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** N/A

### Team's experience

- `JimYam` is an active and enthusiastic developer in the Polkadot ecosystem, a code contributor since 2019. He has been guiding early developers in China and recommending them to apply for grants.

- `weimeme` has nearly two years of development experience with Substrate and seven years with Ethereum. He previously worked at the Ethereum cross-chain bridge Orbiter and is very proficient in L2 and Ethereum technologies.

### Team Code Repos

- https://github.com/ChainSupport/frontier-pos-template

- https://github.com/JimYam
- https://github.com/weimeme

> Because our entire team of developers typically serves different public chain development teams, 
> there is a requirement for a certain level of anonymity for our past GitHub accounts. If you need to know which specific projects we participated in, feel free to message me privately.
## Development Status :open_book:

### project
https://github.com/ChainSupport/frontier-pos-template


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1/3 months
- **Full-Time Equivalent (FTE):**  6 FTE
- **Total Costs:** 4,000USD
> It will drive community discussions on further optimizing the public chain development process, allowing the community to collaboratively enhance the development experience at the application layer. 
> The work involved could easily cost much more than this $4,000. We simply hope that it doesn't waste too much money before being widely adopted. In short, this initiative is worth pursuing.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1/3 month
- **FTE:**  6
- **Costs:** 4,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                  |
|--------:|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | Apache 2.0                                                                                                                                                                                                                                                                                                     |
| **0b.** | Documentation             | We will provide a documentation tutorial for creating an EVM template based on NPOS consensus from scratch, for the community's reference. This will help future developers maintain the project and facilitate community code review.                                                                         |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                  |
|     0e. | Article                   | We will publish an **article** that explains [...] (what was done/achieved as part of the grant). (Content, language, and medium should reflect your target audience described above.)                                                                                                                         |
|      1. | Client                    | An NPOS consensus and EVM-compatible client.                                                                                                                                                                                                                                                                                             |
|      2. | runtime                   | An NPOS consensus and EVM-compatible runtime.                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                        |
|      3. | Substrate chain           | An EVM-compatible chain with NPOS consensus.                                                                                                                                                                                                                                                                                               |
|     4.  | Friendly code structure                     | A developer-friendly code structure, similar to the one found in https://github.com/substrate-developer-hub/substrate-node-template.git.                                                                                                                                                                                                                        |


## Future Plans

- As a team that supports public chain development, we have a strong interest in continuously maintaining this project, as it relates to our future collaborations on more projects. Additionally, SuperEx, as the first team to adopt this template, will provide ongoing funding support for the development and upgrades of this template.)

- We will collaborate with projects in the Polkadot community to publish related tweets, raising awareness of the template within the community. This will encourage more community developers to participate in its development and maintenance, further increasing security and ensuring the project can be updated in a timely manner.

- Provide a more comprehensive client with additional developer-friendly scripts and thorough technical documentation.

## PS

The goal of our team is to help developers further lower the barriers to using Substrate technology, 
expand the adoption of Substrate, and assist more teams needing to create public chains in using Substrate technology to build their chains. 
Our objective is clear: quick chain creation is our goal, which is crucial to our work efficiency. 
Through our practice, we better understand the difficulties and needs of new developers when using Polkadot technology. 
We hope the Web3 Foundation supports us in gradually building this capability, even though we are still a small team.

In the future, our tutorials and technology will cover a more comprehensive range, 
allowing new developers to quickly understand the tools needed to create a Substrate chain and how to achieve their goals more quickly through us. 
We are confident in our ability to provide this technical education, just like JimYam, who has helped many Substrate developers. 
We also understand that in China, there are educational platforms like Polkaworld and the Polkadot Ecology Research Institute, 
which are excellent. However, when it comes to technical discussions, we feel there are still some shortcomings. 
This is clearly not their expertise, and they may not even know how to guide a new technical team to quickly use Polkadot ecosystem technology. 
Thank you again.

