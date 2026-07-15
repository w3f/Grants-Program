# frontier-pos-template

- **Team Name:** ChainSupport Labs
- **Payment Details:**
  - **Payment**: 13p2gp4kLSgTx4aXxyXznwJLrnzG2yT2s2a7Dwv4L5VTGyuK(Assethub USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

This is a development template based on Polkadot's NPOS consensus, compatible with EVM. 
It aims to enable new developers or teams in the Polkadot ecosystem to quickly create EVM-compatible chains based on NPOS consensus.

  > We have found that many teams prefer to start with the NPOS template rather than the POA template when developing public chains using Substrate. They need to quickly create a chain with all the common functionalities in a short period of time. In other words, what they need is an NPOS template that can quickly launch their testnet and mainnet.Compatibility with Ethereum EVM will also be a trend for public chains for a long time. At the same time, Substrate's high performance, the high degree of decentralization of NPOS, and Substrate's excellent on-chain governance philosophy are all technologies that many teams want to have simultaneously. Currently, no team is making efforts in this area, and this project will address these issues.

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
  We have already secured cooperation with four teams that need to create public solo chains, and they will soon benefit from this public template.

- What need(s) does your project meet?

  Enabling new developers and teams to quickly create their own EVM-compatible NPOS chains.
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
    As long-term users of Substrate, we find it very painful to use the substrate-node-template. 
  Generally, the requirement is not to start with POA and then switch to NPOS, which causes many teams to spend a lot of effort on this upgrade.
  For new teams, they must understand the differences between the two and how to implement the technical upgrade, 
  leading to fear and lack of confidence among new developers, while older developers and teams waste time.

  Polkadot compatibility with EVM is a future technological trend, and it is necessary to encourage the community to make more technical attempts in this area. Many current EVM-compatible chains do not integrate well with Polkadot's native staking and BABE consensus. The entire community lacks a unified technical solution, which means that many new teams with such needs waste their time, face more potential security issues, and find it difficult to widely use NPOS. We should make more efforts to enable people to easily obtain EVM, NPOS, and decentralized governance functionalities simultaneously.

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

- **Registered Address:** Building 2, Xixi Bafang Castle, Yuhang District, Hangzhou, Zhejiang Province, China
- **Registered Legal Entity:** N/A

### Team's experience

- `JimYam` is an active and enthusiastic developer in the Polkadot ecosystem, a code contributor since 2019. He has been guiding early developers in China and recommending them to apply for grants.

- `weimeme` has nearly two years of development experience with Substrate and seven years with Ethereum. He previously worked at the Ethereum cross-chain bridge Orbiter and is very proficient in L2 and Ethereum technologies.

### Team Code Repos

- https://github.com/ChainSupport/frontier-pos-template
- https://github.com/superexchain/scs-chain
- https://github.com/weimeme/scs-chain
- https://github.com/JimYam
- https://github.com/weimeme


> Because our entire team of developers typically serves different public chain development teams, 
> there is a requirement for a certain level of anonymity for our past GitHub accounts. If you need to know which specific projects we participated in, feel free to message me privately.
## Development Status :open_book:
We are currently writing Substrate client code compatible with Ethereum and NPOS for SuperEx [Super Smart Chain](https://github.com/superexchain/scs-chain). Most of this functionality has already been developed, but we were clearly too optimistic and underestimated the difficulty of this task. Our initial estimate was to complete it in two weeks, but it ended up taking us nearly a month. However, this has been a very meaningful attempt, allowing us to think from a developer's perspective about how to further reduce development difficulty for this ecosystem and benefit more developers. Especially with the arrival of Polkadot 2.0, Ethereum compatibility will become a major trend. Such projects are particularly important, and many teams need them (currently, there are four teams planning to collaborate with us. They really like Polkadot's technology because NPOS is more decentralized, and Substrate has nearly perfect decentralized governance features. Substrate's modular development also gives them more opportunities to customize functions at the chain level, and EVM allows them to attract more application developers). We are currently preparing to develop the babe-consensus-data-provider and keyring parts, which are estimated to be completed in two weeks.

### project
https://github.com/ChainSupport/frontier-pos-template



## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 months
- **Full-Time Equivalent (FTE):**  1,5 
- **Total Costs:** 8,000USD
- - **DOT %:** 50%
> It will drive community discussions on further optimizing the public chain development process, allowing the community to collaboratively enhance the development experience at the application layer. 
> The work involved could easily cost much more than this $8,000. We simply hope that it doesn't waste too much money before being widely adopted. In short, this initiative is worth pursuing.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  10
- **Costs:** 8,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                  |
|--------:|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | Apache 2.0                                                                                                                                                                                                                                                                                                     |
| **0b.** | Documentation             | Provide documentation explaining how to quickly launch a testnet and mainnet based on this template, how to quickly develop pallets and Ethereum smart contracts, and how to connect wallets, use Blockscout, Remix, etc. This will help developers understand how to use existing technologies to quickly serve their needs, rather than conducting repetitive and meaningless technical research (we spent at least two weeks on technical research in this area).                                                                |
| **0c.** | Testing and Testing Guide | The test coverage of the new code is above 80% |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                  |
|      1. | Client                    | An NPOS consensus and EVM-compatible client.                                                                                                                                                                                                                                                                                             |  
| 2. |   crate: babe-consensus-data-provider   |Consensus data provider, pending api uses this trait object for authoring blocks valid for any runtime.|                                                                                                                                                                            
| 3. | crate: ecdsa-keyring| Add an ECDSA implementation similar to sr25519 or ed25519 found in https://github.com/paritytech/polkadot-sdk/blob/master/substrate/primitives/keyring/.|                                                                                              |                                                                                                                                                                                                        |
|     4.  | Friendly code structure                     | A developer-friendly code structure, similar to the one found in https://github.com/substrate-developer-hub/substrate-node-template.git. Including two `features` for testnet and mainnet, allowing developers to quickly launch testnet and mainnet.                                                                                                                                                                                                          |
|      5. | Substrate chain           | An EVM-compatible chain with NPOS consensus.                                                                                                                                                                                                                                                                                               |



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

> We have found that although there are excellent products like Blockscout, perfect compatibility with Ethereum still requires more community developers to improve related functionalities. For example, common functions like transfers are not well supported; when using the balances module, transfer records do not display correctly in Blockscout. We hope to contribute more code in these areas in the future.


## Personal views of Weimeme

> In the past, the high cost of parachain slots forced many startup teams to abandon Polkadot when making technical choices. Coretime was introduced in this context, addressing the issue of slot auctions to some extent. Additionally, the development of the Tanssi network has shown the appeal of low technical barriers for initial teams. In summary, the above solutions address the technical and financial barriers for startup teams, all aimed at promoting the widespread adoption of Polkadot technology. However, all of this assumes that these projects have a centralized team (in reality, many community projects do not have such a team, such as the Dota Inscription project on Polkadot) and have the financial capability to pay for these services, as well as sufficient profitability or passion to support the long-term operation of the chain. This, to some extent, causes their users to lose long-term confidence. Essentially, it does not solve the dilemma of developers needing to pay for the project in advance and for the long term, nor the issue of reliance on centralized teams.I believe the best model should be the coexistence of solo chains and parachains. When a project has not yet found a profitable model and more users, it should use the solo chain approach. This way, it can fully utilize the technical advantages of Polkadot Substrate and have greater flexibility than parachains. In fact, staking can fully mobilize community activity and participation in new projects. When the business reaches a certain scale and there is a need for shared security, and there is funding, parachains can be considered. Therefore, the Polkadot ecosystem should focus on the development of solo chains, which are almost as important as parachains. They are more community-oriented and diverse, which is a necessary step for achieving the goals of Web3 and the widespread adoption of Polkadot technology. Sufficient inclusiveness can bring sufficient prosperity.