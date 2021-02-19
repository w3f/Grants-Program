# Open Grant Proposal

* **Project:** Web3 Compatible API for Substrate EVM Chains
* **Proposer:** https://github.com/PureStake, @dtyoo
* **Payment Address:** 1EMk3z9VMmXN6y3qwA37s6Qps4xRKGGE9G

## Project Description :page_facing_up: 

Project Moonbeam (https://moonbeam.network/) aims to create a Polkadot parachain that offers Ethereum compatibility.  We envision Moonbeam serving as an easy entry point to Polkadot for existing Ethereum developers -- a place where Ethereum based Dapps can run with a minimal amount of changes required.  We believe this will help drive adoption of Polkadot by reducing friction for existing Ethereum based projects and by providing compatibility and support for the rich set of Ethereum ecosystem tools such as Truffle.

Substrate already includes key components needed to achieve Ethereum compatibility, most notably the EVM frame pallet which is a full EVM implementation in Rust, and a basic way to dispatch calls to the EVM.  However, there are other critical missing pieces needed to achieve Ethereum interoperability.  One of these is a Web3 compatible API that offers the same API as an Ethereum node.  Another is Pallet-Ethereum, a Substrate runtime that Parity is developing that extends and enhances the way calls are dispatched to the EVM that is contained in Pallet-EVM.

We are seeking grant funding to help build a Substrate based Web3 compatible API that will interface with Pallet-Ethereum.  We plan to use this implementation as part of Moonbeam, but other projects that want to implement Ethereum compatible parachains or parathreads could also include them into their projects and benefit from them.

## Team :busts_in_silhouette:

* **Members:** Derek Yoo, Alan Sapede, Telmo Michelena
* **LinkedIn Profiles:** https://www.linkedin.com/in/derek-yoo-8a050/, https://www.linkedin.com/in/alansapede/, https://www.linkedin.com/in/telmo-gonz%C3%A1lez-michelena-35869a14/
* **Code Repos:** https://github.com/PureStake/moonbeam, https://github.com/paritytech/frontier
* **Website:**	https://www.purestake.com/, https://moonbeam.network/
* **Legal Structure:** PureStake Ltd, Floor 4, Willow House, Cricket Square, Grand Cayman, KY1-9010, Cayman Islands 
* **Team's Experience:**

The PureStake team has extensive experience developing and delivering complex web2 software systems.  In the last year, PureStake has built a number of web3 infrastructure projects including Algorand API Services (https://developer.purestake.io/) and the Goalseeker block explorer (https://goalseeker.purestake.io/), among others.

Derek co-founded Fuze in 2006 and as CTO was responsible for engineering, technical operations, product management, and design as the company grew over time into a 700 person cloud business.  Alan was responsible for and hands on developed large parts of the Fuze cloud backend.  Before joining Fuze, Alan was on the Google Streetview Team and also worked at NVidia developing drivers.  Telmo has worked in a variety of roles as a backend engineer and is knowledgeable in C++, Rust, and a variety of backend data stores, data pipelines, and big data technologies.

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):**  2 FTE 
* **Total Costs:** 2.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Substrate Runtime | We will create a base Substrate runtime that will be capable of running Solidity based smart contracts that have been compiled to EVM bytecode, based on Pallet-EVM. |  
| 2. | Web3 RPC Module | We will deliver a working substrate module that implements the Web3 RPC API that can be added to a substrate runtime.  The Web3 RPC module will depend on and require Pallet-Ethereum and Pallet-EVM.  Note that Pallet-Ethereum is still under development by the Parity team.  PureStake will assist Parity with the development of Pallet-Ethereum as necessary to demonstrate the scenarios below. |  
| 3. | Basic Transaction Support | Running this module and its dependencies in a substrate runtime it will be possible to send a transaction between 2 EVM accounts using the standard Web3 API. |
| 4. | ERC20 Demonstration | Running this module and its dependencies in a substrate runtime it will be possible to deploy the Open Zeppelin ERC20 contract and exercise its transfer functionality. |
| 5. | Truffle Demonstration | Running this module and its dependencies in a substrate runtime it will be possible to configure Truffle to connect to the node to deploy smart contracts. |
| 6. | Metamask Demonstration | Running this module and its dependencies in a substrate runtime it will be possible to configure Metamask to connect to the node and send funds from one account to another.|
| 7. | Unit Tests | The code will have proper unit-test coverage to ensure functionality and robustness.|
| 8. | Docker Image | We will build a Docker image with a substrate based chain, demonstrating its functionality.|
| 9. | Documentation | We will provide both inline documentation of the code and tutorials describing how the software can be used as well as how to deploy smart contracts.  Code and documentation will be delivered according to the Web3 Milestone deliverables guidelines for each milestone. |

## Additional Information :heavy_plus_sign: 
We intend to use the developed module as part of our Moonbeam parachain project, however the functionality will not be Moonbeam-specific.  We plan to first deploy Moonbeam to the Westend testnet, then to the Kusama network, and finally to the Polkadot mainnet.

 
