# Omniverse DLT

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** Omniverse Labs(Formerly Dante Team)
- **Payment Address:** 14yr1tovebKbRbxggduV1vbTPtRQtgzTXh9tdZ34w3pGbc4W (Polkadot (Statemint) USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
## Project Overview :page_facing_up:

- [Proposal: Dante Network](https://github.com/w3f/Grants-Program/blob/master/applications/Dante_Network.md)
  - [Milestone 1 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/Dante_Network_milestone_1.md)
  - [Milestone 2 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/Dante_Network_milestone_2.md)

As we know, Dante Network is a protocol that serves heterogeneous consensus and can help Polkadot expand the outer edge. In the previous work, Dante has completed its basic technology abilities. Now we come to the **technical form** of the token, and we have mentioned in the [future work](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/Dante_Network_milestone_2.md#future-work) of the last delivery that as an infrastructure for multi-chains, the first thing is that the token of Dante would be used on all chains we support. More importantly, we want the token of Dante to be treated as **a whole**, instead of being divided into different parts as current assets bridges did.  
So in our research, we innovatively found a more suitable Token model - Omniverse DLT. A more interesting thing is that, Omniverse DLT can be used not only for Dante, but also for all kinds of assets. We will present the details in the [Ecosystem Fit](#ecosystem-fit) section.  

### Overview
#### Tag Line
Omniverse DLT, **O-DLT** for short.

#### Brief description
The Omniverse DLT is a new **application-level** token protocol built **over** multiple existing L1 public chains, enabling asset-related operations such as transfers, receptions, and transactions running **over** different consensus spaces **synchronously and equivalently**.  

The core meaning of **Omniverse** is that ***The legitimacy of all on-chain states and operations can be equivalently verified and recorded simultaneously over different consensus spaces, regardless of where they were initiated.***  

#### Relates to Polkadot
In this application, three form implementations of the Omniverse DLT will be provided. 
- It will be implemented as a `substrate pallet assets`, which can be used as a basic component in their project.
- It will be implemented as an `ink!` smart contract, which is an upgrade to the current FT/NFT smart contract.
- It will be implemented as an `solidity` smart contract(for Moonbeam), which is an upgrade to the current ERC20/ERC721 smart contract.  

Besides being used for Dante's token, everyone in Polkadot can use O-DLT as a component to build their own project if they want their tokens to be global.  

In addition, we will implement a swap platform especially for different Omniverse tokens, which will be implemented as a `substrate pallet`.    

#### Why we are intrested in it
As an infrastructure serving multiple chains, we definitely want Dante's token to be accessed in multiple chains. However, we do not believe that the asset-bridge model is appropriate.  
- We want Dante's token to be treated as a whole not being devided into different parts on different public chains. O-DLT can get it. 
- When one chain breaks down, we don't want to lose our assets along with it. None of the assets-bridges can provide a guarantee for this. O-DLT can provide this guarantee even if there's only one chain that works.   
- Not just for Dante's token, we are willing to help other projects make their token omniverse if they need it. O-DLT is such a new kind of token protocol at the application level.      

### Project Details
#### Architecture
![image](https://user-images.githubusercontent.com/83746881/211817046-8c42543b-0dcc-49d3-8219-b1d2af06368b.png)  
<p align="center">Figure.1 Architecture</p>  
Generally, this project is composited with the O-DLT component, a swap component for Omniverse tokens, and the off-chain synchronizers.  

#### Components
- O-DLT is implemented as a `substrate pallet` and `ink! smart contract` on Polkadot, and as a smart contract on other chains(EVM chains for instance). A special cryptographic commitment is used to make a verification when a change in ownership of the token occurs, which can be verified in an equivalent approach on different tech stacks of different blockchains. The special commitment is unfakeable and non-deniable. Moreover, the transfer of Omniverse tokens happened on an Omniverse Account Protocol, and be guaranteed by an Omniverse Transaction Protocol.:
  - The implementation of the Omniverse Account is not very hard, and we temporarily choose a common elliptic curve secp256k1 to make it out, which has been already supported by many blockchains. 
  - The Omniverse Transaction guarantees the ultimate consistency of transactions across all chains. 
  - We will difine an application-level data structure to describe omniverse transactions, which can be treated as the same in different tech stacks. The [example code of the *TransactionData*]() will be similar to the follows:  
    ```Rust
    #[derive(Clone, PartialEq, Eq, Debug, Encode, Decode, TypeInfo)]
    pub struct OmniverseTransactionData {
      pub nonce: u128,                  // Global transaction identifier
      pub chain_id: u32,                // The chain where the transaction is initiated
      pub Initiator_address: Vec<u8>,   // The identifier of an Omniverse Token. This is globally unique
      pub from: [u8; 64],               // The Omniverse account transfer from
      pub op_type: u8,                  // The operation type(mint, burn, transfer, ...)
      pub op_data: Vec<u8>,             // The operation data, `to` account for instance
      pub signature: [u8; 65],          // The signature of the above informations
    }
    ```
  - The core operations of the O-DLT are `omniverse_transfer`, `omniverse_mint`, and `omniverse_burn`, in which the first thing is verifying the signature of the transaction data. Then the operation will be added to a pre-execution cache, and wait a user-defined time until being executed. The off-chain synchronizer will carry the transaction data to other chains. If another transaction data with the same nonce and the same sender account is received within the waiting time, if there's any sector different, a malicious thing happens and the related account will be punished. We provide some example codes [here](https://github.com/virgil2019/omniverse-swap/blob/4cfa0557f6f3ad8233fe16a8c6d963e577d06387/pallets/assets/src/functions.rs#L877) and [here](https://github.com/virgil2019/omniverse-swap/blob/4cfa0557f6f3ad8233fe16a8c6d963e577d06387/pallets/assets/src/functions.rs#L909) to explain how it works.     
  - The commitment verification protocol is a underly mechanism, which is a newest research result of Dante. It provides an absolute cryptographic way to make verifications for omniverse operations, in which malicious things could be found out determinedly.  

- The OSC(Omniverse Swap Component) is a direct swap platform for exchanges of Omniverse tokens. The calculation of the transaction amount is done by an O-AMM model we create. The details of the underlying mechanisms can be found in the [Principle of Omniverse-AMMM](). An omniverse swap operation can be initiated based on the O-DLT. OSC is implemented as a substrate pallet, and a mechanism similar to *abstract account smart contract* is made out to operate an abstract account for the omniverse swap along with the substrate consensus.

- The bottom is the off-chain synchronizer layer. The synchronizer is a very light off-chain procedure, and it just listens to the Omniverse events happening on-chain and makes the information synchronization. As everything in Omniverse paradigm is along with a commitment and is verified by cryptographic algorithms, there's no need to worry about synchronizers doing malicious things. So the off-chain part of O-DLT is indeed trust-free. Everyone can launch a synchronizer to get rewards by helping synchronize information. The detailed steps may as follows:  
  - When an Omniverse transaction happens on one chain first, the related nonce will plus 1, so the nonce on the first chain will be larger than others. 
  - After the transaction is validated according to the commitment, it is published to the public. 
  - Every synchronizer sees the new transaction and checks if any other chain has not received it, if not, they will deliver this transaction along with the commitment to the other chains.  
  - Note that synchronizers deliver **other users'** omniverse transactions with **other users'** signatures, and there's no chance for risks or cheating as the submission will be verified by the deterministic cryptographic method, and the synchronizer who submits and passes the validation first will receive rewards, so as soon as the synchronizers discover a new legitimate transaction, they are eager to submit it for a reward.
- In addition, we provide a [proof for the ultimate consistency](https://github.com/xiyu1984/o-amm/blob/main/docs/Proof-of-ultimate-consistency.md) for better understanding of the synchronization mechanisms.  

#### Implementations
- The O-DLT has the following features:
  - The omniverse token(o-token for short) based on O-DLT deployed on different chains is not separated but as a whole. If someone has one o-token on Polkadot, he will have an equivalent one on Ethereum and other chains at the same time.
  - The state of the tokens based on O-DLT is synchronous on different chains. If someone sends/receives one token on Polkadot, he will send/receive one token on Ethereum and other chains at the same time.
  - The workflow of O-DLT is as below. ***Note that in an Omniverse token transaction the user only needs to initiate a sending transaction on whatever blockchain he prefers, and the rest things are all processed by the underlying protocols.***  
    ![image](https://user-images.githubusercontent.com/83746881/211828536-bca481a5-588e-49ec-818b-0b5d6685ffd7.png)  
    - A common user initiate an omniverse transfer operation on Near by calling `omniverse_transfer` for example.
    - The O-DLT smart contracts on Near verify the signature of the transaction data at an application-level.
    - If the verification passed, the o-transaction will be published.
    - The off-chain synchronizers find the new published transaction, and they will find the nonce is larger than the related account on other chains. These synchronizers will rush to carry this message, because whoever submits to the destination chain first will get a reward. Finally, the O-DLT smart contracts/pallets deployed on other chains will all receive the transaction data, verify the signature and execute it when the waiting time is over.   
    

#### Demos
- We have provide a [demo video](https://o20k.s3.us-west-2.amazonaws.com/omniverse-swap.mp4) to explain how O-DLT works.
- We also provide a [manually trying tutorial]()

### Ecosystem Fit

Intuitively but non-rigorously, we consider a single public chain as a country, and any country wants their currency to be common in other countries as well.  
We are trying to provide an infrastructure to help all assets on Polkadot/kusama be global without being divided into different parts as current assets-bridges did, and the breaking of any other chain will not influence the assets on Polkadot/kusama ecosystem.   
We will make the O-DLT an open source-protocol so that everyone in Polkadot/Kusama ecosystem can use it to publish their own omniverse tokens all by themselves. We will provide the following things to Polkadot/Kusama:  
- O-DLT `substrate pallets`
- O-DLT `ink! smart contracts`
- O-DLT `solidity smart contracts` for Moonbeam
- O-Swap `substrate pallets`

The above components can be uses as single component for all developers of Polkadot/kusama.  

## Team :busts_in_silhouette:

### Team members

- Name of team leader
- Names of team members

### Contact

- **Contact Name:** Full name of the contact person in your team
- **Contact Email:** Contact email (e.g. john@duo.com)
- **Website:** Your website

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. 

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/<your_organisation>/<project_1>
- https://github.com/<your_organisation>/<project_2>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/<team_member_1>
- https://github.com/<team_member_2>

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/<person_1>
- https://www.linkedin.com/<person_2>


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone. You can refer to details provided in previous sections.) |
| 2. | Substrate module: Y | The Y Substrate module will... |
| 3. | Substrate module: Z | The Z Substrate module will... |
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |
| 5. | Library: ABC | We will deliver a JS library that will implement the functionality described under "ABC Library" |
| 6. | Smart contracts: ... | We will deliver a set of ink! smart contracts that will...


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

...


## Future Plans

- Firstly, we will make out a mechanism similar to abstract account smart contract to make omniverse tokens absolutely compatible to current native and ERC20/721 like tokens so that o-tokens on Polkadot/kusama can exchange with current tokens.  
- Secondly, we will make the token of Dante an omniverse so that it be better to integrate with the inter-operability functions of the Dante Network.    

## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** BTC, Ethereum (USDT/USDC/DAI) or Polkadot/Kusama (aUSD) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
