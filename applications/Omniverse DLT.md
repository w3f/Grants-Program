# Omniverse DLT

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** Omniverse Labs (Formerly Dante Team)
- **Payment Address:** 14yr1tovebKbRbxggduV1vbTPtRQtgzTXh9tdZ34w3pGbc4W (Polkadot (Statemint) USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
## Project Overview :page_facing_up:

- [Previous Proposal: Dante Network](https://github.com/w3f/Grants-Program/blob/master/applications/Dante_Network.md)
  - [Milestone 1 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/Dante_Network_milestone_1.md)
  - [Milestone 2 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/Dante_Network_milestone_2.md)

As we know, Dante Network is a protocol that serves heterogeneous consensus and can help Polkadot expand the outer edge. In the previous work, Dante has completed its basic technology abilities. Now we come to the **technical form** of the token, and we have mentioned in the [future work](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/Dante_Network_milestone_2.md#future-work) of the last delivery that as an infrastructure for multi-chains, the first thing is that the token of Dante would be used on all chains we support. More importantly, we want the token of Dante to be treated as **a whole**, instead of being divided into different parts as current assets bridges did.  
So in our research, we innovatively found a more suitable Token model - Omniverse DLT. A more interesting thing is that, Omniverse DLT can be used not only for Dante, but also for all kinds of assets on Polkadot/Kusama. We will present the details in the [Ecosystem Fit](#ecosystem-fit) section.  

### Overview
#### Tag Line
Omniverse DLT, **O-DLT** for short.

#### Brief description
The Omniverse DLT is a new **application-level** token protocol built **over** multiple existing L1 public chains, enabling asset-related operations such as transfers and receptions running **over** different consensus spaces **synchronously and equivalently**.  

The core meaning of **Omniverse** is that ***The legitimacy of all on-chain states and operations can be equivalently verified and recorded simultaneously over different consensus spaces, regardless of where they were initiated.***  

O-DLT works at an **application level**, which means everything related is processed in **smart contracts** or **pallets**. **Nothing** relates to the native transactions of a single chain.   

#### Relates to Polkadot
In this application, three forms of implementation of the Omniverse DLT will be provided. 
- It will be implemented as a `substrate pallet`, which can be used as a basic component in any `Substrate Parachain` project. The omniverse assets part will derive from `pallet assets`.
- It will be implemented as `ink!` smart contracts, which is an upgrade to the current FT/NFT smart contract for `Substrate Ink!`.
- It will be implemented as `solidity` smart contracts (for Moonbeam), which is an upgrade to the current ERC20/ERC721 smart contract. **This is not part of this grant, but we will still provide it**.  

Besides being used for Dante's token, everyone in Polkadot can use O-DLT as a component to build their own project if they want their tokens to be global.  

- In addition, we will implement a swap platform especially for different Omniverse tokens, which will be implemented as a `substrate pallet`.    

#### Why we are intrested in it
As an infrastructure serving multiple chains, we definitely want Dante's token to be accessed anywhere. However, we do not believe that the asset-bridge paradigm is appropriate.  
- We want Dante's token to be treated as a whole instead of being devided into different parts on different public chains. O-DLT can get it. 
- When one chain breaks down, we don't want to lose our assets along with it. Assets-bridge paradigm cannot provide a guarantee for this. O-DLT can provide this guarantee even if there's only one chain that works.   
- Not just for Dante's token, we are willing to help other projects make their token omniverse if they need it. O-DLT is such a new kind of asset paradigm at the application-level.      

### Project Details
#### Architecture
![image](https://user-images.githubusercontent.com/83746881/211817046-8c42543b-0dcc-49d3-8219-b1d2af06368b.png)  
<p align="center">Figure.1 Architecture</p>  
Generally, this project is composited with the O-DLT components, a swap component for Omniverse tokens, and the off-chain synchronizers.  

#### Components
- O-DLT is implemented as a `substrate pallet` and `ink! smart contract` on Polkadot, and as smart contracts on other chains(EVM chains for instance). A special cryptographic commitment is used to make a verification when a change in ownership of the token occurs, which can be verified in an equivalent approach on different tech stacks of different blockchains. The special commitment is unfakeable and non-deniable. Moreover, the transfer of Omniverse tokens happened on an Omniverse Account Protocol, and be guaranteed by an Omniverse Transaction Protocol.
  - The implementation of the Omniverse Account is not very hard, and we temporarily choose a common elliptic curve secp256k1 to make it out, which has been already supported by many blockchains. 
  - The `Omniverse Transaction` guarantees the ultimate consistency of omniverse transactions(**o-transaction** for short) across all chains. 
  - We will define an **application-level** data structure to describe omniverse transactions, which can be treated in the same way in different tech stacks. The [example code of the *TransactionData*](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/69cebda3e567df1c807a9cb0cda180528f4de091/pallets/omni-protocol/src/types.rs#L60) will be similar to the following:  
    ```Rust
    #[derive(Clone, PartialEq, Eq, Debug, Encode, Decode, TypeInfo)]
    pub struct OmniverseTransactionData {
      pub nonce: u128,                  // Global o-transaction identifier
      pub chain_id: u32,                // The chain where the o-transaction is initiated
      pub Initiator_address: Vec<u8>,   // The identifier of an Omniverse Token. This is globally unique
      pub from: [u8; 64],               // The Omniverse account transfer from
      pub op_type: u8,                  // The operation type(mint, burn, transfer, ...)
      pub op_data: Vec<u8>,             // The operation data, `to` account for instance
      pub amount: u128,                 // The amount of assets
      pub signature: [u8; 65],          // The signature of the above informations
    }
    ```
    - The `nonce` is very important, which is the key point to **synchronize** the states globally, which will be described later.  
    - The `nonce` appears at two places, one is `nonce in o-transaction` data as above, the other is `account nonce` maintained by on-chain O-DLT pallets/smart-contracts([example codes](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/69cebda3e567df1c807a9cb0cda180528f4de091/pallets/omni-protocol/src/lib.rs#L61)).  
    - The `nonce in o-transaction` data will be verified according to the `account nonce` managed by on-chain `Omniverse DLT` pallets/smart-contracts. Some [example codes](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/69cebda3e567df1c807a9cb0cda180528f4de091/pallets/omni-protocol/src/functions.rs#L39) can be found here.  
  - The core operations of the O-DLT are `omniverse_transfer`, `omniverse_mint`, and `omniverse_burn`, in which the first thing is verifying the signature of the o-transaction data. Then the operation will be added to a pre-execution cache, and **wait for a fixed time** until being executed. The waiting time will be able to be settled by the deployer and this will be determined until fully tested, in addition, we will provide the least recommended time. The off-chain synchronizer will carry the o-transaction data to other chains. If another o-transaction data with the same nonce and the same sender account is received within the waiting time, and if there's any sector different, a malicious thing happens and the related account will be punished. We provide some example codes [here](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/69cebda3e567df1c807a9cb0cda180528f4de091/pallets/assets/src/functions.rs#L877) and [here](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/69cebda3e567df1c807a9cb0cda180528f4de091/pallets/assets/src/functions.rs#L932) to explain how it works.     
  - The commitment verification protocol is an underly mechanism, which is a newest research result of Dante. It provides an absolute cryptographic way to make verifications for omniverse operations, in which malicious things could be found out determinedly.  

- The OSC(Omniverse Swap Component) is a direct swap platform for exchanges of Omniverse tokens. The calculation of the o-transaction amount is done by an O-AMM model we create. The details of the underlying mechanisms can be found in the [Principle of Omniverse-AMM](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/Principle%20of%20Omniverse%20AMM.md). An omniverse swap operation can be initiated based on the O-DLT. OSC is implemented as a substrate pallet, and a mechanism similar to *abstract account smart contract* will be made out to operate an abstract account for the omniverse swap along with the substrate consensus.

- The bottom is the off-chain synchronizer layer. The synchronizer is a very light off-chain procedure, and it just listens to the Omniverse events happening on-chain and makes the information synchronization. As everything in Omniverse paradigm is along with a commitment(signature for instance) and is verified by cryptographic algorithms, there's no need to worry about synchronizers doing malicious things. So the off-chain part of O-DLT is indeed trust-free. Everyone can launch a synchronizer to get rewards by helping synchronize information. The detailed steps can be found in the next chapter.  

#### Implementation & Example
- The O-DLT has the following features:
  - The omniverse token(o-token for short) based on O-DLT deployed on different chains is not separated but as a whole. If someone has one o-token on Polkadot, he will have an equivalent one on Ethereum and other chains at the same time.
  - The state of the tokens based on O-DLT is synchronous on different chains. If someone sends/receives one token on Polkadot, he will send/receive one token on Ethereum and other chains at the same time.
  - The workflow of O-DLT is as below. ***Note that in an Omniverse token o-transaction the user only needs to initiate a sending transaction on whatever blockchain he prefers, and the rest things are all processed by the underlying protocols.***  
    <p id="figure.2" align="center">Figure.2 An Example</p>  

    ![image](https://user-images.githubusercontent.com/83746881/211828536-bca481a5-588e-49ec-818b-0b5d6685ffd7.png)  
    - Suppose a common user `A` and the related operation `account nonce` is $k$.
    - `A` initiate an omniverse transfer operation on Near by calling `omniverse_transfer`. The current `account nonce` of `A` in O-DLT deployed on Near is $k$ so the valid value of `nonce in o-transaction` needs to be $k+1$.   
    - The O-DLT smart contracts on Near verify the signature of the o-transaction data at an **application level**. If the verification for the signature and data succeeds, the o-transaction data will be published. The verification for the data includes:
      - whether the amount is valid 
      - and whether the `nonce in o-transaction` is 1 larger than the `account nonce` maintained by the on-chain O-DLT
    - Now, `A`'s newest submitted `nonce in o-transaction` on Near is $k+1$, but still $k$ on Polkadot, Ethereum, and Flow. 
    - The off-chain synchronizers find the new published o-transaction, and they will find the `nonce in o-transaction` is larger than the related `account nonce` on other chains. 
    - These synchronizers will rush to carry this message, because whoever submits to the destination chain first will get a reward. There's no will for independent synchronizers to do evil, because they just carry `A`'s o-transaction data. 
    - Finally, the O-DLT smart contracts/pallets deployed on other chains will all receive the o-transaction data, verify the signature and execute it when the **waiting time is up**. After execution, the underlying `account nonce` will add 1. Now all the `account nonce` of account `A` will be $k+1$.  

We have provide a detailed [proof for the **ultimate consistency**](https://github.com/Omniverse-Web3-Labs/o-amm/blob/main/docs/Proof-of-ultimate-consistency.md) for better understanding of the **synchronization** mechanisms. 

#### Attack Vector Analysis
According to the [above](#implementations), there are two roles: 
- **common users** who initiate a o-transaction (at the application level)
- and **synchronizers** who just carry the o-transaction data if they find differences between different chains.  

The two roles might be where the attack happens:  
- **Will the *synchronizers* cheat?**  
  - Simply speaking, it's none of the **synchronizer**'s business as **they cannot create other users' signatures** unless some **common users** tell him, but at this point, we think it's a problem with the role **common user**.  
  - The **synchronizer** has no will and cannot do evil because the transastion data they carry is verified by the related **signature** of others(a **common user**).  
  - The **synchronizers** will be rewarded as long as they submit a valid o-transaction data, and *valid* only means that the signature and the amount are both valid even if the `nonce in o-transaction` is **invalid**. This will be detailed explained later when analyzing the role **common user**.  
  - The **synchronizers** will do the delivery once they find differences between different chains:
    - If the current `account nonce` on one chain is smaller than a published `nonce in o-transaction` on another chain
    - If the transaction data related to a specific `nonce in o-transaction` on one chain is different from another published o-transaction data with the same `nonce in o-transaction` on another chain

  - **Conclusion: The *synchronizers* won't cheat because there's no benifits and no way for them to do so.**

- **Will the *common user* cheat?**
  - Simply speaking, **yes they will**, but fortunately, **they can't succeed**.
  - Suppose current `account nonce` of a **common user** `A` is $k$ on all chains.  
  - Common user `A` initiates an o-transaction on a Parachain of Polkadot first, in which `A` transfer `10` o-tokens to an o-account of a **common user** `B`. The `nonce in o-transaction` needs to be $k+1$. After signature and data verification, the o-transaction data(`ot-P-ab` for short) will be published on Polkadot.
  - At the same time, `A` initiates an o-transaction with the same nonce $k+1$ but different data(transfer `10` o-tokens to another o-account `C`) on Ethereum. This o-transaction(named as `ot-E-ac`) will pass the verification on Ethereum first, and be published.  
  - At this point, it seems `A` finished a ***double spend attack*** and the O-DLT states on Polkadot and Ethereum are different.  
  - **Response strategy**:
    - As we mentioned above, the synchronizers will deliver `ot-P-ab` to the O-DLT on Ethereum and deliver `ot-E-ac` to the O-DLT on Polkadot because they are different although with the same nonce. The synchronizer who submits the o-transaction first will be rewarded as the signature is valid.
    - Both the O-DLTs on Polkadot and Ethereum will find that `A` did cheating after they received `ot-E-ac` and `ot-P-ab` respectively as the signature of `A` is non-deniable.  
    - We mentioned above that the execution of an o-transaction will not be done immediately and instead there needs to be an fixed waiting time. So the `double spend attack` caused by `A` won't succeed.
    - There will be many synchronizers waiting for delivering o-transactions to get rewards. So although it's almost impossible that a **common user** can submit two o-transactions to two chains, none of the synchronizers deliver the o-transactions successfully because of a network problem or something else, we still provide a solution:  
      - The synchronizers will connect to several native nodes of every public chain to avoid the malicious native nodes.
      - If it indeed happened that all synchronizers' network break, the o-transaction will be synchronized when the network recovered. If the waiting time is up and the cheating o-transaction has been executed, we will revert it from where the cheating happens according to the `nonce in o-transaction` and `account nonce`. 
    - `A` will be punished(lock his account or something else, and this is about the tokenomics, so we won't discuss it according to [application-template.md](./application-template.md#L40)).  
  - **Conclusion: The *common user* will cheat but won't succeed.**

#### Demos
- We have provide a [demo video](https://o20k.s3.us-west-2.amazonaws.com/omniverse-swap.mp4) to explain how O-DLT works.
- We also provide a [manually trying tutorial](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/README.md)

### Ecosystem Fit

Intuitively but non-rigorously, we consider a single public chain as a country, and any country wants their currency to be common in other countries as well.  
We are trying to provide an infrastructure to help all assets on Polkadot/kusama be global without being divided into different parts as current assets-bridges did, and the breaking of any other chain will not influence the assets on Polkadot/kusama ecosystem.   
We will make the O-DLT an open source-protocol so that everyone in Polkadot/Kusama ecosystem can use it to publish their own omniverse tokens all by themselves. We will provide the following things to Polkadot/Kusama:  
- O-DLT `substrate pallets`
- O-DLT `ink! smart contracts`
- O-DLT `solidity smart contracts` for Moonbeam. **This is not part of this grant and we will still provide it**.  
- O-Swap `substrate pallets`

The above components can be uses as single component for all developers of Polkadot/kusama.  

## Team :busts_in_silhouette:

### Team members

- Shawn Zheng
  - GitHub: https://github.com/xiyu1984
  - Email: xiyuzheng1984@gmail.com
- Members:
  - George Huang
    - GitHub: https://github.com/virgil2019
    - Email: hht2015ily@gmail.com
  - Kay Lin
    - GitHub: https://github.com/kay404
    - Email: kay20475@gmail.com

### Contact

- **Contact Name:** Shawn Zheng
- **Contact Email:** xiyuzheng1984@gmail.com
- **Website:** https://dantenetwork.notion.site/Dante-Network-37b3fb6b70a845ecb4f6bc9d0f23229b
- **Twitter:** https://twitter.com/DanteNetwork 
- **Medium:** https://dante-network.medium.com/ 
- **Telegram:** https://t.me/DanteNetworkEN 

### Legal Structure

- **Registered Address:** 5001 BEACH ROAD #07-37, Golden Mile Complex, Singapore
- **Registered Legal Entity:** Kvanace Technology Foundation Ltd.

### Team's experience

We are Dante Network team and our team is composed of several skilled Web3 geeks, and some of us have more than 10 years of technology working experience.  
We have got several hackathon rewards, especially the first prize in the Polkadot Asian Hackathon in 2022 summer.  
We have finished the first step of Dante Network granted by Web3 Foundation. Details can be found [here](https://github.com/w3f/Grants-Program/blob/master/applications/Dante_Network.md) and [here](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/Dante_Network_milestone_2.md).  

### Team Code Repos

To be more clearly, we have created a new organization to manage the related code:  
- https://github.com/Omniverse-Web3-Labs/  

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/xiyu1984
- https://github.com/virgil2019
- https://github.com/kay404

## Development Status :open_book:

Before apply for this grant, we have done some neccessary researches and built some prototypes to verify them.  
  - [Simulation of Omniverse DLT on Substrate Pallets](https://github.com/Omniverse-Web3-Labs/omniverse-swap)
  - [Off-Chain Simulation of O-AMM mathematic model](https://github.com/Omniverse-Web3-Labs/o-amm)
  - [On-Chain Simulation of O-AMM mathematic model](https://github.com/Omniverse-Web3-Labs/O-AMM-ParaSim)

After the simulation, we believe that the Omniverse DLT is achievable on Polkadot and other chains.  

## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 30,000 USD. 

### Milestone 1 — O-DLT: Substrate Pallet

- **Estimated duration:** 2 month
- **FTE:**  3
- **Costs:** 15,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | - We will provide docs to explain how O-DLT works in a high-level <br> - We will provide dev docs to explain how to develop an O-DLT component in Substrate Pallet <br> - We will provide tutorial docs to explain how to use it |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an **article** that explains what was done/achieved in this milestone as part of the grant. |
| 1. | Substrate module: omniverse assets | We will create a Substrate module that will manage the Omniverse tokens, which will be derived from standard `pallet assets` |
| 2. | Substrate module: omniverse protocol | We will create a Substrate module that will manage the underlying omniverse functions like omniverse account, omniverse signature, omniverse verification, etc. |
| 3. | Substrate chain | Modules omniverse assets, protocol of our custom chain will interact in such a way that can make creation, omniverse mint, burn, and transferring for o-tokens |
| 4. | Off-Chain Tools: Operate the o-tokens | We will provide off-chain tools to operate o-tokens for both `Substrate Pallets` |

### Milestone 2 — Ink! tech stack and Omniverse Swap

- **Estimated Duration:** 2 month
- **FTE:**  3
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | - We will provide docs to explain how the Omniverse Swap based on O-DLT works in a high-level <br> - We will provide dev docs to explain how to develop an O-DLT component in `Ink!` smart contract <br> - We will provide tutorial docs to explain how to use the omniverse swap |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) to run Synchronizers along with the documentation of the setup. |
| 0e. | Article | We will publish an **article** that explains what was done/achieved in this milestone as part of the grant. |
| 1. | Substrate module: swap | We will create a Substrate module that will make exchanges for different o-tokens. |
| 2. | Substrate chain | Modules omniverse assets, protocol & swap of our custom chain will interact in such a way that can make swaps between two different kind of o-tokens, user can add liquidity themselves, the O-AMM model can be calculated off-chain and verified on-chain. |
| 3. | Ink! smart contract implementation | We will create the fully O-DLT protocol in `Ink!` tech stack. It will have the same functions as in `Substrate Pallets` |
| 4. | Off-Chain Synchronizer | We will provide the source code and the executable program of the off-chain synchronizer. |

## Future Plans

- Firstly, we will make out a mechanism similar to abstract account smart contract to make omniverse tokens absolutely compatible to current native and ERC20/721 like tokens so that o-tokens on Polkadot/kusama can exchange with current tokens.
- Secondly, we will provide a mechanism to make omniverse tokens exchange with current native and ERC20/721 like tokens in other DEX like Uniswap. 
- Thirdly, we will make the token of Dante omniverse so that it will be better to integrate with the inter-operability functions of the Dante Network.    

## Additional Information :heavy_plus_sign:

Firstly, we really appriciate the help and support we have got from Web3 Foundation, with which we have completed the first steps of Dante Network.  

Secondly, we want to report some new progresses and plans of Dante Network.
- On one side, Dante's token will base on O-DLT, and we believe it will be a brand-new asset paradigm.  
- On another side, we are trying to make more steps be deterministic when interactions happen between heterogeneous consensus spaces. We have found a multi-layer gaming model that may provide higher security and more efficiency. Maybe we will apply for another grant after we finish the detailed designation.  

Thirdly, as always, we highly endorse the philosophy of the Web3 Foundation. We are continuing to build more and deeper on Polkadot.   
 