# Open Grant Proposal

* **Project Name:** FIAT on-off-ramp
* **Team Name:**  element36
* **Payment Address:**  Ethereum 0x56788E08C97d2677DAdED801e69bfE5D33ddACD5

## Project Overview :page_facing_up:

### Overview

The onboarding of FIAT currencies (like the US-Dollar or Euro) to a Blockchain solution is very cumbersome, especially for end-users. They need to be "in the system" already - means, that the users often need to buy and transfer DAI or other cryptocurrencies in order to take part in a Smart Contract. For doing that, they need to have quite some crypto knowledge. If your business wants to reach a broader user-base outside of the crypto-universe, you need to offer a simple solution for on- and off-ramping traditional FIAT currencies.

We want to implement a FIAT on- & off-ramp solution for the Polkadot ecosystem: Anyone should be able to link tokens to their own bank account, thus creating a "private" fully pegged stable-coin which mirrors the balance of his bank account. The bank account only has the purpose of pegging the token, nothing more. A wire-transfer of an end-user to this bank account will automatically create (mint) new stable-coins and place it to a target address or contract. Burning these stable-coins will trigger a wire-transfer from the pegging account. The balance of the bank account is always the same as the total supply of these stable-coins. So its one stable-coin per bank account, synchronized in both (!) directions.

We are interested in that project, because we think the general idea is applicable and valuable to any blockchain-based solution who wants to reach a consumer market. This assumption was validated with the project [crowdlitoken.com](crowdlitoken.com): Users can invest into real estate with Swiss Francs. Once they are transferred their funds, their balance of Crowdlitoken is shown in Swiss Francs, where 1 Franc = 1 Crowdlitoken. Means - exactly what they have invested is shown as token-balance. Crowdlitoken runs on Ethereum - currently the high transaction fees are unbearable - this is another motivation to implement our solution on Polkadot.

The scope for this initial grant is: Implement a substrate based chain with a fully pegged stable-coin, synchronized via an off-chain worker with a fully pegging bank account. Incoming bank transactions (FIAT payments) and burning of stable-coins will trigger a sync, a token transfer does not trigger actions on the bank account. So transferring real funds to the bank account leads 
to a mint of new stable-coins. A burn triggers a "real" bank transaction from the pegging account to some other bank account. This concept is quite different to existing stable-coins like DAI, TrueUSD or Tether: Everybody with a bank account is able to attach his own bank account to his own para-chain or smart contract, and create his own stable-coin. But our focus is not the stable-coin - it is about providing a technical solution for FIAT on- and off-ramping.

Another, more philosophical angle on the project:
The banking system can be seen (not technically of course) as a ledger with a blocktime of 1 day (in best case), with a proof of authority and consensus between banks, and the payment network acting as a "relay chain". We want to attach this ledger to the polkadot ecosystem - like it is done with other blockchain systems already. Value in FIAT should flow in & out of the para chains & relay chain seamlessly. Technically we make banking interfaces (APIs for getting balance & sending FIAT) compatible with Polkadot.

## Project Details

### Brief description

We want to build a solution to on- and off-ramp FIAT currencies (currency is not relevant) to the Polkadot Ecosystem. We do not want to create another FIAT-stable-coin, but rather integrate the existing banking-infrastructure in a "blockchain manner".

Aim is to create a system  which connects any bank account to the Polkadot ecosystem. The main functions are:

* **Mint**: Send funds from the banking system to Polkadot which brings new value into the Polkadot system where it floats for whatever reason.
* **Burn**: Polkadot can send funds to any bank account outside the system, thus taking value out of the Polkadot system.

### Mockups/designs of any UI components

We will implement the system as **API first** - so do not expect to see much UI components.  Anyhow - because a similar concept is already live on Ethereum, we can demo the concept with existing systems with UIs and demo pages, which were created by element36 (this team). Check out our examples based on our Ethereum solution [here](https://github.com/element36-io/cash36-examples). Be aware, just porting the Ethereum based system is NOT what we intend to do on Polkadot - this proposal here is much narrower in scope and thus should be easier to use in other systems.

### Architecture Overview

Logically we have three components:

* A) A Substrate FRAME based chain with a stable-coin. This "Fiat-chain" is able to mint a stable-coin directly to a target address (wallet or contract).
* B) A pallet (module) with a REST API, which can read daily statements of a bank account and trigger wire-transfers.
* C) An active component which monitors both the bank account and the chain (listens to events) and calls the respective functionalities to keep everything in sync.

See [architecture component diagram](#architecture) for a visual overview.

### A) API specification Fiat-chain

In the center of the integration is one bank account with a specific currency like the Dollar or Euro. The balance of the bank account is mirrored by the total supply of a fully pegged stable-coin - 100 Euro will be 100 stable-coins. So if this account receives funds then new coins are minted for a specific target address. To find out the target wallet address (or contract) who actually will get the stable-coins, we will use a default value or a specific code on the bank-transaction (on the payment slip), which can be translated by our system to a blockchain address on Polkadot. So it's possible to wire-transfer to any address in the blockchain ecosystem using a freshly minted stable-coin. The words "freshly minted" point out the main difference to other stable-coins.

Any holder of our stable-coin will be able to burn stable-coins. A burn of a stable-coin will trigger a wire-transfer (bank transfer). But how do we find the correct receiver's bank account? We use either a default or the burner can give a "clue" which can be translated to a real bank account by our system. A clue is flexible - it could be as simple as a username or even an old transaction id. In the later case you can create a burn transaction which is similar to: "Please send 5 Euro to the bank account, which sent me 100 Euro a year ago using the transaction 223445".

We will create a basic token with `init`, `mint`, `burn`, `transfer`, `getBalance` and `getTotalBalance`. `Burn` and `transfer` will emit events and errors. Only the non-obvious functions will be described here. The Fiat-chain will be a substrate node - implementation will be based on Substrate FRAME (and creating Pallets for modules) or Substrate Core, if substrate FRAME is too limiting. But we think using FRAME is OK.


#### Mint: receiving FIAT funds

```
mint (amount, targetAddress)
```

Our Fiat-chain will be initialized with 0 stable-coins, and a pegging bank account with 0 balance. First we need some stable-coins. The only way stable-coins find their way onto our Fiat-chain is via a wire-transfer to the pegging bank account. We will provide an API to fake incoming payments, so that you can test the system without real payments.

Please check the [sequence diagram](#mint) for the mint-case.

#### Burn: sending FIAT funds

By "burning" tokens we mean that the total supply of tokens will be reduced. This is necessary, if we want to support also the off-ramping of FIAT currencies. A burn of tokens will trigger a wire-transfer on the pegging bank account, so that bank account balance ==  total supply of tokens.
```
burn (amount, clue)
```

When we trigger a wire-transfer, we need to know the target real-world bank account number who should receive the funds. For that, we use a "clue", which is interpreted by our system using backend-logic with a classical data-store which is able to resolve the clue to real world bank account coordinates. (On the Ethereum implementation we experiment to substitute the data-store with a ZK-rollup based architecture).

A ***clue*** refers to some information, where the system can derive the actual bank account where the funds need to be transferred. A clue can be:  

* IBAN number (bank account)
* An address (wallet/contract): The system will hold a map of bank accounts and wallets and issue a wire-transfer accordingly.
* Or empty: Then the system will try to find out which bank account is registered with the address (wallet or contract) which is burning the tokens.
* Transaction id of an historic transaction: So you can tell the system: Send 10 Dollars to the one, who sent me 100 Dollars with the transaction (tx-id:13454345).
* If the wire-transfer can not be done due to missing data (e.g. target IBAN) then the burn should fail - this basically requires a whitelisting of accounts of which we know the bank account.

Please also check the [sequence diagram](#burn) for the burn-case.

The burn may also be implemented by sending tokens to a specific address - and the active component will execute the actual burn and adjust the total supply accordingly.

#### Transfer: moving FIAT funds - thus changing ownership

```
transfer (from, to, amount)
```

Transfer of stable-coins between accounts in the Fiat-chain will work out-of-the box, once a coin is minted. Anyone who holds stable-coins in his wallet or contract, may burn the coins and "cash out" FIAT. 

### B) Bank account REST API 
There will be an off-chain worker using our pallets to connect to open banking APIs. The specifications for banking APIs are quite complicated - we do not go into details and use pseudo-code. We have already used these APIs in a production environment, so we hope you trust us to implement that for Polkadot as well. Here is a pick of standard documents:

* https://en.wikipedia.org/wiki/Electronic_Banking_Internet_Communication_Standard
* https://www.ppi.de/fileadmin/user_upload/Software-Produkte/Publikationen/2018-03-23_EBICS_3.0_Kompendium_V6_D6_EN.pdf

Here is the specification of the PAIN.001 file we use to process bank statements: 

* https://wiki.xmldation.com/General_Information/ISO_20022/pain.001

#### Get bank account balance

Getting the account balance, which should be equal to total supply of the stable-coins, if there are no outstanding mint or burn orders. 

```
getAccountBalance():Decimal
```

#### Get new incoming orders (payments)

Gets a list of new incoming payments which will be used to create an order to mint new stable-coins.

```
getIncomingOrders():IncomingPayments
```

#### Trigger outgoing order

If we detect a burn of stable-coins, we use the create order to initiate a wire-transfer on our bank account. If the transaction fails for some reason - e.g. the provided IBAN is not existing - then the pegging balance of the bank account will be higher then the total supply of stable-coins, the order reamins open until it can be resolved outside of the system, e.g. manually.

```
createOrder (OutgoingPayment)
```
### C) Event Processing (off-chain-worker)

The Event Processing Module is responsible for synchronizing the pegging account with the stable-coins of our chain:

1. Process incoming transactions with `A.getIncomingOrders():IncomingPayments` and initiate `B.mint(amount,targetAddress)`
2. Listen to blockchain events from module B) and initiate `A.createOrder(OutgoingPayment)`
3. Check consistency `B.getAccountBalance() = (A.getTotalBalance() + balanceOfoutstandingOrders())`
4. Generate payment information and store the mapping between bank accounts and blockchain accounts to do step 1. and 2.


### Attack vectors

#### Double Spending of the stable-coins and FIAT by the issuer

The owner of the pegging bank account can access his bank account anytime and withdraw funds so that the pegging gets broken, and modify the FIAT-Rest Bank interface to fake account balances and outgoing transactions.  The problem is similar to oracles and the trust which is put on accessing data of external systems. Strategies to mitigate the risk are:

- Proof of Staking: Integrating another "staking contract" which holds cryptocurrencies at stake - e.g. a contract that holds more DAI then the pegging account.
- Proof of Authority: The bank account may be audited by a central party like a bank or a trusted auditing authority, or run by a bank or financial intermediary (which is the business model element36)
- Over-the-counter transactions: This case covers many real world use-cases and actually does not need PoS or PoA. E.g. if your smart contract converts the stable-coins into digital shares or assets and the issuing party is also the account beneficiary, then there is no double spending attack. The owner of the pegging account is the recipient of the stable-coin.
 The duty of blockchain is to do the transparent "bookkeeping" of the transaction and to grant rights according to the smart and legal contracts. This pattern is also used by crowdlitoken.com, and we think this is applicable to many other business cases.


#### Cancelling wire transfers?

What if Alice sends Bob our stablecoin via a wire-transfer and after the minting it cancels the wire transfer? Alice would still have the FIAT money, and Bob would have the money in stable-coins. This is only true for transfers based on e.g. Credit Card, Paypal or Stripe.  We use Ebics/ISO20022 and the SEPA network, where a wire transfer has finality, once you see it on the bank statement.

#### Hacking the off-chain worker

If the off-chain worker (including the Open-Banking API) is hacked, then creating, burning and also mapping between bank accounts to chain accounts can be manipulated. To mitigate the risk,  off-chain worker and bank-API should run in a pure "egress-mode", which means that the components do not nead any external open ports in order to operate. Besides that, both ledgers (blockchain and bank) provide a log which can not or hardly be manipulated.


### Ecosystem Fit

The need for the ecosystem to integrate in the legacy financial system is huge, many use cases exist. Current solutions to on- and off-ramp FIAT are linked to FIAT stable-coins, either as fully pegged solutions like Tether/TrueUSD or as crypto-economical solutions like the DAI. For any of those solutions, you need to buy (or exchange) your FIAT currency into something else on a crypto-exchange, which is able to accept FIAT currencies. For any blockchain-based solution, FIAT onboarding is a two-step process: 1. an end-user needs to convert FIAT into a token, and 2. master blockchain-technology to transfer the tokens e.g. in a smart contract. So it's a bit like in a Casino. At the entrance you can buy your tokens and only then you can buy drinks within the casino with those tokens. And you can not spend your tokens outside the casino - you need to change back when you leave the casino.

We change this two-step process into a seamless, one-stop transaction: We provide a *frictionless* technical solution for on- and off-ramping FIAT. Means, that an end-user should be able to send funds to a wallet or smart contract *directly* via an old-school wire-transfer. And a smart contract should be able to initiate a wire transfer, without asking a user to change e.g. DAIs on an exchange. This makes the user-journey for the end-user much simpler, for any Dapp which wants to work with FIAT currencies.

What do we mean by frictionless? With our on-off-ramp, a user does NOT need to have a wallet in order to invest in a smart contract. And we do not need a "fake" wallet managed by a central entity. How is that possible? An end-user sends 100 USD via wire transfer using our system to a smart contract - you should be informed by now how this technically works. A year later, the smart contract burns 5 USD in favour of the person who did the initial investment of 100 USD. The user receives 5 USD on his bank account. The overall investment process can be done without wallets, and decentrality is not sacrificed. This is a completely new model of using smart contracts and FIAT currencies, and many other projects may benefit from that.

As an example for a usage scenario , we want to refer again to crowdlitoken.com, a blockchain based real-estate funds (16 mCHF) where we have built the investment platform: An end-user can invest into real estate by sending e.g. 100 CHF to the platform's bank account. After the 100 CHF arrive at the bank account, 100 CHF show up on the platform as "CRTs" (crowdlitokens), where one CRT is one CHF. This is easy to understand for any user. After that, the end-user may assign his account balance (CRT-tokens) to a real estate property (a smart contract) which grants him a certain yield in the shape of CRTs.

## Team :busts_in_silhouette:

### Team members

* Leader: Walter Strametz, full-stack developer, founder element36.io: Worked on roughly a dozen blockchain projects in Switzerland - among them the digital identity project for the City of Zug, Swiss OTC Blockchain - the predecessor of the blockchain based swiss digital exchange (sdx.ch), ethereum smart contracts (ERC20 stablecoin and compliance contracts), and large parts of the element36 backend, especially access to banking system.
* Vladimir Nicolic, Full Stack Developer: Javascript Senior, worked on decentral identity, large parts of the element36 modules and the Dapp for the exchange and compliance-administration.
* Ivan Baresic, Frontend and javascript full-stack developer: CI/CD, javascript-backend components, React-frontends and Dapp development.

The team consists of more members, who we do not see as necessary for implementing the project.

### Contact

* **Walter Strametz**, walter.strametz@element36.io,  https://element36.io

### Legal Structure 
* **element36**, Bahnmatt 25, CH-6340 Baar, Zug,Switzerland
* **element36 AG, [CHE-180.390.659](https://zg.chregister.ch/cr-portal/auszug/auszug.xhtml?uid=CHE-180.390.659)**

### Team's experience

Team: We implemented a fully pegged ERC-20 stable-coin (EUR, CHF) and an exchange based on Ethereum, which serves as the blueprint for this proposal. Therefore we covered many technical aspects already - for example interacting with open-banking standards, creating stable-coins, the APIs and an exchange. We might be able to reuse e.g. our Ebics-Code (banking-API) and improve our current API with new implementation on Polkadot. In the Ethereum based project we added a lot of legal code to be compliant for Swiss Law and international Anti-Money Laundering regulations - which we do not see as part of this proposal. We want to focus on a slim, technical solution which can be used by many people, regardless of their jurisdiction. The team also implemented the investment platform crowdlitoken.com, which is our first real-world use case. On the Ethereum side we are currently working on a solution to use ZK-rollups (Zero knowledge proofs) to "expose" the proof our bank-account balance data plus client data accordingly without breaching data-protection.

### Team Code Repos

Here are our public repositories of the core product. We had quite a "break" because we were working on our mandate with crowdlitoken.com, which is a commercial product which does not expose their code. So we were more active than it seems on github. More modules are in a private gitlab repo - we will refactor project related code and make it public with respective open-source licences. We are happy to show you the private code on gitlab as well.

* https://github.com/element36-io/cash36-contracts
* https://github.com/element36-io/cash36-exchange 
* https://github.com/element36-io/cash36-frontend
* https://github.com/element36-io/cash36-examples

### Team LinkedIn Profiles

* https://www.linkedin.com/in/walter-strametz-6b44618b/
* https://www.linkedin.com/in/vladimir-nikolic-941634b7/

## Development Status :open_book:

Much of the technology is already implemented on an Ethereum based project (see [cash36.io](cash36.io) and [element36.io](element36.io)). We expect that we can refactor, reuse and generalize existing code and transfer the core concept to the Polkadot ecosystem within 3 months. Because Polkadot is all about integration, we think that our idea of private stablecoins, well integrated in a large ecosystem, blends perfectly with the vision of Polkadot (or Kusama).  We see our use cases can be expanded beyond the implementation on Ethereum in regards to privacy, efficiency and connectivity. Anyway - our implementation is a great blueprint, a proof for our capabilities as a team and we can apply "lessons learned" for the Polkadot implementation.  

Contacts Web3 Foundation:

* Aeron Buchanan (Web3 Founding Member) who I talked about the project via email - Mathias Bucher (below) got me in touch.
* Mathias Bucher (Former Member or the Council), who I worked with several times in the past and who follows my project closely.

## Development Roadmap :nut_and_bolt:

For this proposal we focus on building a simple substrate based chain containing a stable-coin which is pegged and synchronized with a bank account. Dapps can build on that infrastructure, to create FIAT based smart contracts. We use github and Apache 2.0 licences.

### Project plan, 3 milestones and its deliverables

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:**  $30k for initial grant

### Milestone 1 Implement FIAT Rest interface

* **Estimated Duration:** 0.5 month
* **FTE:**  2
* **Costs:** 5.000 USD

* APIs: createOrder(Payment),  getIncomingPayments():Payments, simulatePayment(Payment)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can link the Open Banking Client to an Ebis/ISO20022 compatible bank account. Once the docker instance is up, it will be possible to query balance, to read new transactions and to send test and real transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Module: Open Banking Client | We will create a module based on Spring-Boot that will provide `getAccountBalance():Decimal`, `getIncomingOrders():IncomingPayments`,  `createOrder (OutgoingPayment)` and `simulatePayment(Payment)`  as a REST interface as [described](#b-bank-account-rest-api). Aim of the module is to provide a much simpler and Json/REST based runtime to access account information, thus remove necessity to use a [complicated protocol](https://www.ebics.org/en/home) and XML based documents like [Pain-001](https://wiki.xmldation.com/General_Information/ISO_20022/pain.001) files for accessing account information.|  
| 2. | Docker | We will provide a dockerfile for the Open Banking Client on Docker Hub, where we add documentation on how to link the image with a bank account.  |

### Milestone 2 Implement substrate based chain

* **Estimated Duration:** 2 months
* **FTE:**  2
* **Costs:** 20.000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up one of our Substrate nodes and connect it to a real or a test bank account. Once the node is up, it will be possible to trigger mint and burn test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions of the basic token and the off chain worker will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Off chain worker pallet: Event Processing | We will create a Substrate ocw pallet (rust or javascript) that will a) poll the bank account for incoming (new) bank transactions and initiate  `mint` transactions accordingly. b) Listen for burn-events for stablecoins on our substrate chain to initiate outgoing transactions on our bank account. c) Use local storage to map between bank account and wallet or contract address for the mint and burn. |
| 2. | Pallet: FIAT stable coin | We will create a basic token with init, mint, burn, transfer, getBalance(address) and getTotalBalance. Burn and transfer will emit events and errors. At this point for simplicity, we will not use [Currency](https://substrate.dev/recipes/currency.html) trait.  |
| 3. | Substrate chain | Use described modules of our custom chain will provide a token, which synchronizes with a fully pegging bank account as described throughout the document.  |
| 4. | Unit Tests | We will add unit tests to cover mint, burn, transfer, getBalance, getTotalBalance for the basic token. We will add unit tests to the off chain worker to test the local datastore with the map of IBAN to addresses and vice-versa, plus mint and burn.  |
| 5. | Docker-Compose Substrate node | We will provide a docker-compose file to demonstrate the full functionality of our chain, the ocw, including a stub for the FIAT Rest Interface developed in Milestone 1. |

### Milestone 3 Documentation & Demo-Dapp

* **Estimated Duration:** 0.5 month
* **FTE:**  2
* **Costs:** 5.000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Tutorial | Installation instruction with  "Hello World" example. We want to provide a similar repos like the ones used by our Ethereum solution: https://github.com/element36-io/cash36-ping and a "buy me a coffee" demo app similar to that one here: https://github.com/element36-io/cash36-examples |
| 1. | Coffee Smart Contract | A "buy me a coffee" contract. It will accept a payment and cash out automatically to the benefit of a hardcoded recipient who will be receiving the funds in FIAT. |
| 2. | Dapp | The Dapp which uses the "by me a coffee" Smart Contract. |
| 3. | Docker-Compose: node & Dapp | We will add the Dapp to the docker-compose file of Milestone 2 to demonstrate the full functionality of our chain, the ocw, including a proxy for the FIAT Rest Interface developed in Milestone 1 and the "buy me a coffee" Dapp. |
## Future Plans

First step is to prove technical feasibility and also to learn more about the concepts of the Polkadot ecosystem. We already have some ideas in which direction we want to continue, but that is to be validated. In other words - maybe our thoughts will not make sense once we know more :) So far, our next milestones and development goals:

* Integrate with relaychain, so that a node/token can be used throughout the ecosystem.
* Support additional Bank-APIs
* Make it easier to configure the pegging bank account.
* Integrate with an identity system and provide similar functionality as we do now on Ethereum with our contracts. Means: Only whitelisted identities may receive or mint funds.
* Create a nice API and project/landing page, integrate with no-code tools like Integromat or Zapier to make our Functionality easy & accessible for developers.
* Use a staking/pegging contract instead of a pegging bank account, try to combine both to remove the need for a trusted oracle for the pegging account balance.
* Use Currency trait for the FIAT-stable-coin.
* Investigate attack-vectors.
* Investigate implementation which runs without the need of local storage and address - IBAN mapping.

Our vision is to remove the pain point of FIAT onboarding: How can an end user transfer funds to a smart contract? How can a smart contract transfer funds to a user? Our approach is to wrap a bank account with blockchain tech, so that end users can interact with Smart contracts without tokens and wallets, but just using their bank account.  

## Additional Information :heavy_plus_sign:

> Any additional information that you think is relevant to this application that hasn't already been included.

* What work has been done so far?
We already created a similar (more complex) system on Ethereum. In our projects (e.g. crowdlitoken) Ethereum transaction cost is now a killer for the live system. The project with Polkadot may be an alternative for future projects.

* Are there any teams who have already contributed (financially) to the project?
No.
* Have you applied for other grants so far?
No.

## Diagrams :page_facing_up:

### Target Architecture <a name="architecture"></a>

Our target architecture - how we connect the banking system with Polkadot.


```
                                             +-------------------------------------------------------+
   +-----+                                   |                                                       |
   |     |       +----------------+          |    +----------------+                                 |
   |  B  |       |                |          |    |                |                                 |
   |  A  |       |                |          |    |                |                                 |
   |  N  +-------+ Bank Account   +---------------+ Open Banking   |                                 |
   |  K  |       |                |          |    | Client (Ebics) |                                 |
   |     |       |                |          |    |                |                                 |
   |  L  |       +----------------+          |    +----------------+                                 |
   |  E  |                                   | +--------------------------------------------------+  |
   |  D  |                                   | |                                                  |  |
   |  G  |                                   | |  +----------------+          +----------------+  |  |      
   |  E  |                                   | |  |                |          |                |  |  |      
   |  R  |                                   | |  |                |          | FIAT-bridge    |  |  |      
   |     |                                   | |  | Event          +----------+   substr Cain  +------------+ 
   +-----+                                   | |  | Processing     |          |                |  |  |     
      |                                      | |  |                |          |                |  |  |     
   +-----+       +----------------+          | |  +----------------+          +----------------+  |  |      
   |     |       |                |          | |                                                  |  |
   |  S  |       | International  |          | |                                                  |  |
   |  E  |       | Payment        |          | |  Code based on substrate                         |  |
   |  P  +-------+ Network        |          | +--------------------------------------------------+  |
   |  A  |       |                |          |                                                       |
   |     |       +----------------+          | Scope of the project                                  |
   +-----+                                   +-------------------------------------------------------+

```
Generated with  https://textart.io/sequence

```
object TargetAccount FiatChain EventProcessing OpenBankingClient BankAccount
RelayChain -> TargetAccount: getBalance = 100
TargetAccount -> FiatChain: burn 100 recipient abc
FiatChain -> EventProcessing: transfer 100 € to abc
EventProcessing -> EventProcessing: resolve  abc to bank # DE12.45
EventProcessing -> OpenBankingClient: initiate transfer to DE12.45
OpenBankingClient -> BankAccount : initiate transfer to DE12.45
```

### Remove value from the system - burn Sequence Diagram  <a name="burn"></a>

This is how we remove value and liquidity:  The "targetaccount" burns 100 stable-coins for his own good, 
which triggers a wire-transfer which finally removes the same amount from the pegging bank account. 
The call on the balance is just informative. 

```
+---------------+                +-----------+                 +-----------------+                       +-------------------+                    +-------------+
| TargetAccount |                | FiatChain |                 | EventProcessing |                       | OpenBankingClient |                    | BankAccount |
+---------------+                +-----------+                 +-----------------+                       +-------------------+                    +-------------+
        |                              |                                |                                          |                                     |
        | burn 100 recipient abc       |                                |                                          |                                     |
        |----------------------------->|                                |                                          |                                     |
        |                              |                                |                                          |                                     |
        |                              | transfer 100 € to abc          |                                          |                                     |
        |                              |------------------------------->|                                          |                                     |
        |                              |                                |                                          |                                     |
        |                              |                                | resolve  abc to bank # DE12.45           |                                     |
        |                              |                                |-------------------------------           |                                     |
        |                              |                                |                              |           |                                     |
        |                              |                                |<------------------------------           |                                     |
        |                              |                                |                                          |                                     |
        |                              |                                | initiate transfer to DE12.45             |                                     |
        |                              |                                |----------------------------------------->|                                     |
        |                              |                                |                                          |                                     |
        |                              |                                |                                          | initiate transfer to DE12.45        |
        |                              |                                |                                          |------------------------------------>|
        |                              |                                |                                          |                                     |

```

```
object BankAccount OpenBankingClient EventProcessing FiatChain TargetAccount
EventProcessing -> OpenBankingClient: Check new Transactions
OpenBankingClient -> BankAccount: daily statement
EventProcessing -> EventProcessing: found new incoming Payment:+100 €
EventProcessing -> FiatChain: mint 100 to TargetAddress
FiatChain -> TargetAccount: assign 100 tokens
TargetAccount -> RelayChain: do transfers...
TargetAccount -> FiatChain: do transfers...
```

### Add value - Mint Sequence Diagram <a name="mint"></a>

THis is how we add value and liquidity. Our system regularly polls for new incoming transactions. 
If y payment is found we evaluate the "additional information" on the payment slip which 
should give us the information to which contract or address we shall mint new tokens. If 
this information is not there or an error case, we fall back to a default. Important is, 
that the balance of the bank account and the stable-coins stay the same. A default can be 
to wire-transfer funds back to the originator or to mint the stable-coins to a predefined address.   

```
+-------------+          +-------------------+              +-------------------+                         +---------------+           +---------------+         
| BankAccount |          | OpenBankingClient |              | EventProcessing   |                         | FiatChain     |           | TargetAccount |         
+-------------+          +-------------------+              +-------------------+                         +---------------+           +---------------+     
       |                           |                                  |                                           |                           |                         
       |                           |                                  |                                           |                           |          
       |                           |                                  |                                           |                           |
       |                           |                                  |                                           |                           |                         
       |                           |           Check new Transactions |                                           |                           |                         
       |                           |<---------------------------------|                                           |                           |                         
       |                           |                                  |                                           |                           |                         
       |           daily statement |                                  |                                           |                           |                        
       |<--------------------------|                                  |                                           |                           |                         
       |                           |                                  |                                           |                           |                         
       |                           |                                  | found new incoming Payment:+100 €         |                           |                         
       |                           |                                  |----------------------------------         |                           |                        
       |                           |                                  |                                 |         |                           |                         
       |                           |                                  |<---------------------------------         |                           |                         
       |                           |                                  |                                           |                           |                         
       |                           |                                  | mint 100 to TargetAddress                 |                           |                         
       |                           |                                  |------------------------------------------>|                           |                         
       |                           |                                  |                                           |                           |                         
       |                           |                                  |                                           | assign 100 tokens         |                         
       |                           |                                  |                                           |-------------------------->|                         
       |                           |                                  |                                           |                           |                         
       |                           |                                  |                                           |                           |        
       |                           |                                  |                                           |                           |
       |                           |                                  |                                           |                           |                         
```



