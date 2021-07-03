# Open Grant Proposal

- **Project Name:** Substrate Parachain - Elrond Cross-chain Bridge (SPEC-B)
- **Team Name:** XP.network
- **Payment Address:** BTC: bc1qdpx2e6lejre536ph0csskas888ua3pz5p4pkuj

## Project Overview

### Overview

XP.network is a blockchain-agnostic platform for building NFT DApps. With XP.network, even non-developers can create NFT marketplaces, galleries, lending apps, and more - without a single line of code and on any blockchain, thanks to the interoperability features of Polkadot.

In this project, we aim to bring Elrond users and the ecosystem to Polkadot.

### SPEC-B UI

The bridge is accompanied by intuitive UI:

![img](https://github.com/xp-network/w3f_application/blob/main/Cross%20Chain%20Bridge-1.png)


### Project Details

The proposed Substrate Parachain - Elrond Cross-chain Bridge (SPEC-B) will link the two non-identical unsynchronized blockchains, allowing liquidity transfers.

### Use-cases

![img](https://github.com/xp-network/w3f_application/blob/main/XP-Elrond%20bridge-1.png)

+ Liquidity transfer from an account in a substrate Parachain to Elrond or from Elrond to a Parachain.
+ Selling or purchasing Parachain based NFTs by an account holder in Elrond or vice versa.
+ Cross-chain games with RPC-connected smart contracts.
+ Lending or borrowing eGold, sovereign Parachain coins, or other liquidity.
+ Cross-chain NFT smart contracts with royalties.
+ Cross-chain insurances.

#### SPEC-B Structure:
#### 1. A Substrate pallet implementing the following functionality:
  + Fungible token transfer
    ```rust
    /// Transfer to elrond chain event
    /// validators must subscribe to this
    pub struct Transfer {
        action_id: u128,
        to: String,
        value: Balance
    }
    ```
  + Fungible liquidity freezing </br>
    Sovereign parachain tokens as well as wrapped eGold are locked in the pallet to avoid duplication during the transfer.
    Currently implemented in the "Freezer" smart contract in Ink! Will be implemented in Rust as a part of the pallet.
    ```rust
    ///TODO: implement in Milestone 1
    ```
  + Fungible liquidity release </br>
    A transferred number of wrapped eGold or Parachain native tokens can be released to an arbitrary account in the target parachain.
    ```rust
        /// unfreeze tokens and send them to an address
        /// only validators can call this
        pub fn pop(&mut self, action_id: String, to: AccountId, value: Balance) {
            self.verify_action(action_id, Action::Unfreeze { to, value })
        }
  
  + Non-fungible liquidity freezing </br>
    NFTs are locked in the pallet to avoid duplication.
    Currently implemented in the "Freezer" smart contract in Ink! Will be implemented in Rust as a part of the pallet.
    ```rust
    ///TODO: implement in Milestone 1
    ```
  + Non-fungible liquidity release to an arbitrary account </br>
    Wrapped NFTs alongside their data can be released to a designated account in the target parachain.
    ```rust
    ///TODO: implement in Milestone 1
    ```
  + Support of cross-chain RPC with an arbitrary number of arguments </br>
    A remote procedure call can be executed via the pallet. The call will contain the following parameters:
    ```rust
      pub struct ScCall {
        action_id:  u128,         // Unique action identifier
        to:         String,       // smart contract address in a parachain
        endpoint:   String,       // smart contract function name
        args:       Vec<Vec<u8>>  // Target smart contract function arguments
    }
    ```
  + Bridge relay validator subscription mechanism implementation </br>
    This mechanism allows dynamically to add new validators in a decentralized way after the system launch.
    ```rust
        /// Subscribe to events & become a validator
        pub fn subscribe(&mut self) {
            ...
        }
    ```
  + BFT consensus mechanism implementation </br>
    A blockchain embedded smart contract checks whether 2/3 * n + 1 validators have signed the transaction, where **n** is the total number of validators.
    ```rust
    if validated == (2*validator_cnt/3)+1 {
                self.exec_action(act);
            }
    ```
  + Event emission </br>
    To signal the validators that one of the bridge-related events has occurred the pallet emits events with the accompanying data.
  ```rust
	/// Emit an SCCall event
	/// TODO: Replace the Ink! implementation with Rust in Milestone 1
	pub fn send_sc_call(&mut self, target_contract: String, endpoint: String, args: Vec<Vec<u8>>) {
	    bech32::decode(&target_contract).expect("Invalid address!");
	    ...
	    self.env().emit_event( ScCall {
		action_id: self.last_action,
		to: target_contract,
		endpoint,
		args
	    } )
	}
  ```
 + Runtime Storage defined by our module:</br>
 
	Locally scoped storage, accessible only from within the pallet will contain the following data:
 ```rust
// Subject to implementation change:
HashMap<AccountId, ()>,		// The set of the validators
HashMap<String, ActionInfo>,	// The hash map of the actions
last_action: u128
 ```
 
#### 2. Relay validator/prover written in TypeScript. Supplied in a docker container.

The intention behind our choices was to keep the set-up simple, robust, and secure.

**Architecture**
1. A full node, synced with the mainnet / testnet of a bridged Substrate Parachain;
2. A full node synced with the mainnet / testnet of Elrond;
3. Schnorrkel/Ristretto sr25519 elliptic curve related 256 bits long public and 512 bits long private key-pair for signing the transactions on the parachain side and Edwards-curve (Ed25519) related keys with the same key lengths for signing on Elrond's side.
4. Event listening, processing, and relaying middleware
  
  
**Centralized validators**</br>
At the present stage, we've chosen the PoA consensus mechanism. Each validator is meticulously chosen. For security reasons, a new validator node can currently be only manually subscribed by one of our development team members. This may change in the future versions of the present bridge.
  
**Proof-of-Authority (PoA)**</br>
Principle: a centralized network of trusted bodies backing the validator nodes with their reputation. A new validator is added or removed by a centralized body, the team of the project.

However, in order to stimulate the validators to keep the endpoints in the best-operating shape, we are using the reputation ranking system which will decide how to distribute the transaction fee rewards.</br>
1. The reputation assessment will be centralized to mitigate a number of attacks (for details see challenges below)</br>
2. The reputation assessment feedback will be in the range of 0 - 100.</br>
3. The system ensures the following principles: </br>
- Liveliness - a user cannot reach such a high score at which no damage to reputation can be made.</br>
- Visibility is global, which means, all the nodes can see it. </br>
- Durability </br>
4. The chosen aggregation model is the historical mean of the feedbacks, collected through each epoch.</br>
5. The expected insignificant overhead costs will occur due to the usage of the bandwidth, Computational power, and storage of the reputational scores. The costs will be covered from the bias component of the transaction fee formula.</br>

![img](https://github.com/xp-network/w3f_application/blob/main/Reputation%20System%20Choice.png)

Challenges faced by reputation systems to be mitigated:</br>

1. The following attacks can be mitigated by a centralized assessment.</br>

	**Sybil Attack** is when an attacker creates multiple identities to gain an unfair advantage over honest users who own a single identity.</br>
	**Self-Promotion**, Ballot Stuffing happens when a user with multiple identities or a group of users promotes themselves by assigning themselves additional positive feedback after every interaction.</br>
	**Slandering, Bad-Mouthing** is the act of sabotaging an honest user's reputation by assigning unfairly low feedback to ruin a competitor's reputation. Centralized reputation assessment is not vulnerable to such attacks.</br>
	**Random Ratings** are when an attacker submits randomly generated feedback instead of providing an accurate evaluation of the peer's behavior.</br>
	**Free Riding** is a situation when a user does not provide any feedback taking advantage of the system without providing any contribution.</br>

2. The following types of attack can be mitigated by viewing every new user as untrustworthy. A positive reputation must be built by consistent benevolent behavior over a long period of time.</br>

	**Whitewashing** is when a user with a negative reputation quits the system and returns with a new identity and fresh reputation.</br>
	**Oscillation** is when a user quickly builds a good reputation in several low-value transactions and then reverses its good behavior to malicious taking advantage of the mislead counterparts.</br>

3. KYC or knowing the real world identities of the validators can mitigate the following attack:</br>

	[**Supermajority attack**](https://twitter.com/thorshadowd/status/1386747751426297857?s=21) is when, depending on the system architecture 51% or 68% of the validators are taken over by a single malicious entity or are organized to take the bridge down or to steal assets, to double-spend liquidity.

#### Transaction Award
The participating validators will be awarded the transaction fees on one condition:</br>

A validator must respond fast enough to appear in the BFT threshold in the target blockchain (this measure stimulates the validators to use fast and highly efficient servers).

The participating validators will be awarded a share of the transaction fee, calculated like so:</br>

TX<sub>award</sub> = TX<sub>mul</sub> * size(TX<sub>bin</sub>) * Val<sub>rep</sub> </br>

Where:</br>
**TX**<sub>award</sub> is the transaction fee share paid to a validator.</br>
**TX**<sub>mul</sub> is the multiplier equal to XPNET 0.0005</br>
**size**(**TX**<sub>bin</sub>) is the binary size of the transaction code</br>
**Val**<sub>rep</sub> - is the reputation of a validator during an epoch </br>

The remainder, if there is one will be used for covering the bridge maintenance.</br>

While the full transaction fee for a user will be calculated as follows:

TX<sub>fee</sub> = bias + TX<sub>mul</sub> * size(TX<sub>bin</sub>) + TX<sub>a</sub> + TX<sub>b</sub></br>

Where:</br>
**bias** is the fixed value of XPNET 0.005 - to cover the bridge maintenance costs</br>
**TX**<sub>mul</sub> is the multiplier equal to XPNET 0.0005</br>
**size**(**TX**<sub>bin</sub>) is the binary size of the transaction code</br>
**TX**<sub>a</sub> - the gas or transaction fee in the blockchain of origin</br>
**TX**<sub>b</sub> - the gas or transaction fee in the blockchain of the destination</br>

The "Elrond-Minter" smart contract will collect the appropriate data in the following format: 
```rust
L = Vec<(TotalTxFee, [Validators; T])>
``` 
and will send it to the pallet once in an epoch for proper awarding the validators according to the results of their performance. Only the validators, who were the first to respond and appeared in the BFT threshold will get their transaction reward.

Example of calculating the **Val**<sub>rep</sub>:

```rust
    // Example means of the reputation scores assigned to each validator during an epoch:
    let rep =  [36f32, 78.0, 91.0, 85.0, 76.0, 45.0];
    
    // Sum total of the rating feedbacks
    let s: f32 = rep.iter().sum();
    
    // Awards aggregator
    let mut awards = rep.clone();

    for i in awards.iter_mut() {
        *i /= s;
    }
    
    println!("{:?}", awards);
    
    // Output: [0.08759124, 0.18978104, 0.22141121, 0.20681266, 0.18491484, 0.10948905]
```
**Collecting the reputation feedback**

Validator reputation is based on whether it responded fast enough before the BFT threshold is reached. The simulation code below randomly selects whether a validator made it or not. Of course, the pseudo-random simulation appears to be bell-curved with the majority of the outcomes in the middle gradually diminishing towards the edge cases, by contrast with the real-world scenarios, where we expect most of the feedbacks to be near the top. However, it serves its purpose of demonstrating how the feedback could be collected.

The system of promotion and slashing of the active and passive validators ensures security and fast response times of the validators. All the transaction fee awards remain with the validators. But its distribution depends on the performance of each validator.
A validator can gradually earn the reputation back if it was lost due to a node being inactive. The other, more reliable validators, will be partially sharing this validator's awards as a punitive measure for the unreliability.

The validator in the simulation below starts with the maximum reputation of 100 points, however, in reality, the reputation a validator earned in the previous epoch will be the starting point for the reputation during the next epoch to avoid situations when a completely turned off validator earns some fee till its reputation falls to 0.

**Reputation feedback simulation**

```rust
// This code will NOT be used in the project as is.
// Namely, the rand::Rng will NOT be used.
// This is a SIMULATION only to demonstrate
// How the reputation of the validators will be
// Promoted or slashed

use rand::Rng; // 0.8.4
use std::iter;

fn main() {
    let mut rng = rand::thread_rng();
    let mut rep: u8 = 100;  // All validators start at maximum reputation
    let mut fd: u64 = 0;    // Feedback aggregator
    
    // Simulation of a 24 hour long epoch
    // with a round equal to 6 seconds:
    for _ in iter::repeat(()).take(24*60*10) {
    
        // Simulation of a validator node
        // appearing in the BFT threshold:
        if rng.gen::<bool>() {
        
            // promotion
            if rep < 100 {
                rep += 1;
            }
        } else {
            // slashing
            if rep >= 1 {
                rep -= 1;
            }
        }
        fd += rep as u64;
    }

    println!("Current block reputation: {}", rep);
    println!("Epoch mean: {}", fd/(24*60*10));
}

// Example output:
Current block reputation: 82
Epoch mean: 69
```
**Dealing with Fraudulent Validators**

A more serious malicious activity, namely double signing, or signing alternative to the BFT threshold versions of transactions will be reported to the development team by the smart contract in Elrond or the substrate pallet, depending on which side the fraudulent activity occurred. The team members will contact the validator and will decide whether to continue cooperation or unsubscribe the validator from the pool.

**Validator-related functionality distribution in code**:

![img](https://github.com/xp-network/w3f_application/blob/main/PoA%20code%20distribution-1.png)


  
#### 3. “Elrond-Minter” smart contract written in Rust deployable on Elrond blockchain.
  + Transfer Liquidity
  ```rust
  Action::SendXP { to, amount, data } => {
	let token = self.token().get();
	self.send().esdt_local_mint(&token, &amount);
	Ok(PerformActionResult::SendXP(SendToken {
		api: self.send(),
		to,
		token: token.into(),
		amount,
		data
	}))
}
  ```
  + Fungible liquidity freezing </br>
    eGold or wrapped Parachain native tokens are locked to avoid duplication
  + Fungible liquidity release to an arbitrary account </br>
    Wrapped Parachain native tokens or eGold are released to an arbitrary target address in Elrond.
    ```rust
	#[payable("*")]
	#[endpoint(withdraw)]
	fn withdraw(&self, #[payment] value: Self::BigUint, #[payment_token] token: TokenIdentifier, to: String)  -> SCResult<Self::BigUint> {
		require!(value > 0, "Value must be > 0");
		require!(token == self.token().get(), "Invalid token!");

		self.send().esdt_local_burn(&token, &value);

		let ident = self.event_ident().update(|event| { 
			event.add_assign(Self::BigUint::from(1u64));
			event.clone()
		});
		self.event_mapper().insert(ident.clone(), EventInfo::new(Event::Unfreeze { to, value }));

		Ok(ident)
	}
    ```
  + Non-fungible liquidity freezing </br>
    NFTs are locked in the smart contract to avoid duplication.
    ```rust
    ///TODO: implement in Milestone 1
    ```
  + Non-fungible liquidity release to an arbitrary account </br>
  + ```rust
    ///TODO: implement in Milestone 1
    ```
  + Support of cross-chain RPC with an arbitrary number of arguments </br>
  A remote procedure call, made from a Substrate pallet, will be executed by a smart contract deployed on Elrond. The call will contain the following parameters:
    ```rust
    Action::SCCall {
		to,
		amount,
		endpoint,
		args
	} => {
		let mut contract_call_raw =
			ContractCall::<Self::SendApi, ()>::new(self.send(), to, endpoint)
				.with_token_transfer(TokenIdentifier::egld(), amount);
		for arg in args {
			contract_call_raw.push_argument_raw_bytes(arg.as_slice());
		}
		Ok(PerformActionResult::AsyncCall(
			contract_call_raw.async_call(),
		))
	}
    ```
  + Bridge relay validator subscription </br>
    This mechanism allows dynamically to add new validators in a decentralized way after the system launch.
    ```rust
	  /// Initiates board member addition process.
	  /// Can also be used to promote a proposer to board member.
	  #[endpoint(proposeAddValidator)]
	  fn propose_add_validator(&self, uuid: Self::BigUint, board_member_address: Address) -> SCResult<PerformActionResult<Self::SendApi>> {
		  self.validate_action(uuid, Action::AddValidator(board_member_address))
	  }
    ```
  + BFT consensus mechanism </br>
    A blockchain embedded smart contract waits for the BFT threshold to execute a required transaction.
    ```rust
            if validated == (2*validator_cnt/3)+1 {
                self.exec_action(act);
            }
    ```
  + Event emission </br>
    To signal the validators that one of the bridge-related events has occurred the smart contract emits events with the accompanying data.
    ```rust
    /// Event emission will be implemented by Elrond in ~ 2 months
    ```
### Ecosystem Fit

  + Substrate parachain users will be able to trade, exchange or transfer their tokens to and from Elrond with minimal effort and transaction fees. It will open a new market for the Polkadot community and will make the tokens of both the systems more liquid.
  + Substrate parachain smart contracts will be able to call smart contracts functions in Elrond with an arbitrary number of arguments via the bridge relay validators. The same will be possible from the side of Elrond.
  + Polkadot already has bridges to [Bitcoin](https://beta.polkabtc.io/), [Ethereum](https://snowbridge.snowfork.com/), Cosmos, [EOS](https://github.com/bifrost-finance/bifrost), [Ethereum Classic](https://github.com/ChainSafe/ChainBridge), etc., but there's no bridge to Elrond. This project will fill the gap.


## Team

### Team members

- Dmitry Brook - CTO, Project Lead
- Rupansh Sekar - Expert in C, Rust, and blockchain development

### Contact

- **Contact Name:** Dmitry Briukhanov

- **Contact Email:** dima@xp.network

- [XP.network website](https://xp.network/)

### Advisors

- [Stas Oskin](https://www.linkedin.com/in/stasoskin/)</br>

### Legal Structure

- **Registered Address:** HaHagana, 15, Or Yehuda, Israel
- **Registered Legal Entity:** XP Network


### Team Experience

**Dmitry Briukhanov**

- Over 18 years of experience in Development and Management 
- Former Senior Software Developer in Best Systems, Israel
- Former Team Lead in NLK, Russia


**Rupansh Sekar**

- Over 1 year of experiences in Blockchain Development 2 years in Rust, 4 years in C


### Team Code Repos

[Team repository](https://github.com/xp-network/)</br>
[Project Documents](https://xp-network.github.io/poc-documentation/) Method names, parameters with types, return types, and description.
</br>
[PoC repository](https://github.com/xp-network/XP.network-Elrond-Migration)</br>

### GitHub Repos

[Dima Brook](https://github.com/DimaBryuhanov)</br>
[Rupansh Sekar](https://github.com/rupansh)</br>


### Team LinkedIn Profiles

[Dmitry Bryukhanov](https://www.linkedin.com/in/dmitry-briukhanov-60b2ab45/)</br>
[Rupansh Sekar](https://www.linkedin.com/in/rupansh-sekar-10941b16a/)


## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 months
- **Total Costs:** $ 12,000.00


### Milestone 0 - PoC version of SPEC-B

- **Actual Duration:** 1 month (done)
- **Costs:** $0.00

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the Alpha version of the bridge, detailed documentation in a [GitBook](https://xpnetwork.gitbook.io/cross-chain-bridge-substrate-parachain-elrond/) |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.</br>1. "Freezer" smart contract</br>2. Relay validators </br>3. Testsuite UI & backend |
| 1. | SPEC-B architecture | SPEC-B architecture is developed and documented in textual descriptions and UML diagrams |
| 2. | Smart Contracts in Ink! | Functionality: </br>1. Fungible token locking & releasing </br>2. Limited RPC functionality ```args: Vec<uint8>```</br>3. Relay validators subscription and BFT validation |
| 3. | Centralized relay validators | 21 Bridge relay validators written in Typescript and ready for deployment on a remote server |
| 4. | Smart Contracts in Rust (on Elrond) | Functionality: </br>1. Fungible token locking & releasing </br>2. RPC functionality ```args:Vec<Vec<uint8>>```</br>3. Relay validators subscription and BFT validation |



### Milestone 1 — Pre-Alpha version of SPEC-B

- **Estimated Duration:** 1 month
- **FTE** 1-2
- Effort: 1 month
- **Costs:** $4,000.00

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains </br>1. How to attach an XP.network SPEC-B pallet to a parachain, </br>2. How to use the SPEC-B to interact with Elrond blockchain, detailed documentation in a [GitBook](https://xpnetwork.gitbook.io/cross-chain-bridge-substrate-parachain-elrond/) |
| 0c. | Testing | Core functions will be fully covered by unit tests covering at least 85% of the code to ensure functionality and robustness. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.</br>1. Substrate parachain</br>2. Local relay validators </br>3. Testsuite UI & backend|
| 1. | Substrate pallet | Migration of the smart contracts from Milestone 0.2 to a substrate pallet. </br>1. Fungible token locking & releasing </br>2. Full RPC functionality ```args: Vec<Vec<uint8>>```</br>3. Relay validators subscription and BFT validation   |
| 2. | NFT support | We will add NFT transfer functionality from a parachain to Elrond or vice versa </br> We'll be locking the NFT in the source blockchain and will mint a wrapped one in the target blockchain |
| 3. | Integration tests & a testing guide | We will write automated integration testing for all of the functionality of the code and running on Elrond's live testnet. In the guide, we will describe how to run these tests. |
| 4. | Transaction fees solution | Solving the transaction fee in the “foreign” blockchain problem. We will charge the account of the source blockchain in the native currency. The transaction fees will be sent to the validators for executing the transaction in the target blockchain. We will use the existing exchanges to convert the native coins. The validators must maintain a minimum amount of native coins of both the blockchains. | 
| 5. | PoA consensus implementation | We will implement the PoA consensus mechanism and will address a number of professional validators with a request to join as validators.| 


### Milestone 2 — Alpha version of SPEC-B

- **Estimated Duration:** 1 month
- **FTE** 1-2
- Effort: 1 month
- **Costs:** $4,000.00

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains </br>1. How to attach an XP.network SPEC-B pallet to a parachain, </br>2. How to use the SPEC-B to interact with Elrond blockchain, detailed documentation in a GitBook |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Adding yet unsupported ERC-20 equivalent token | We will add the automated new token support functionality. We will prepare a ERC-20 equivalent token* smart contract template. It will be populated with the metadata of the token, once it becomes known. It will be automatically deployed by our pallet or the bridge smart contract on Elrond. |
| 2. | Governance for new token support | We will add the governance for the users to vote what new tokens will the bridge support. Based on the voting results, a new token support will be added according to Milestone 2.1 |
| 3. | Using a parachain as a bridge | We will implement the functionality which will allow to use a parahcian equipped with our bridge to be used by another parachain connected via Polkadot and will make it operational in ROCCOCO, Kusama and the Polkadot mainnet |
| 4. | Testing under load | Testing the bridge with increasing load from 100 to 1000 transactions concurrently. We will gradually grow the number of transactions untill we see the bottle neck or reach the target. |

*ERC-20 equivalent in Elrond is ESDT.

### Milestone 3 — Beta version of SPEC-B

- **Estimated Duration:** 1 month
- **FTE** 1-2
- Effort: 1 month
- **Costs:** $4,000.00

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains </br>1. How to attach an XP.network SPEC-B pallet to a parachain, </br>2. How to use the SPEC-B to interact with Elrond blockchain, detailed documentation in a GitBook |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Bridge UI | The UI in React allowing codeless cross-chain transactions of a parachain native tokens or eGold  |
| 2. | Unbonding the validators | We will implement the architecture for the relay validators unbonding (a procedure of withdrawing from the validator pool) |
| 3. | Elrond wallet integration | We will integrate the Elrond Wallet into the bridge UI. A user will be able to use one's account to access the functionality of the Elrond wallet. In addition to that bridge operations will be available. |
| 4. | Security & efficiency audit | Testing the system resilience to fraudulent or erroneous validators and making architectural decisions about the optimal numbers of relay validators, transaction speed, and transaction fees. |

## Future Plans

+ We will build similar bridges to HECO, Solana, VeChain, Klaytn, Algorand, Avalanche, etc.
+ We will keep the same validators to make it financially attractive for the validators which will keep the bridge secure and decentralized.
+ We may add support for the PoS (Proof-of-Stake) or PoI (Proof-of-Importance) mechanizms.
+ We will automate the relay validators' consensus mechanizm change PoA <-> PoA <-> PoS.
+ We will integrate our bridge and other cryptocurrency wallets.
+ We will implement a transaction fee calculator with the UI showing how much a transaction will cost on both sides Parachain & Elrond

## Additional Information 
[The project repo](https://github.com/xp-network)</br>
The present bridge is built in close cooperation with the Elrond team.</br>

[Official Elrond announcement about this bridge](https://elrond.com/blog/elrond-bridge-polkadot-xpnetwork-nft-dapps/) 
