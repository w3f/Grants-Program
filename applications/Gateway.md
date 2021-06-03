# Gateway


## Project Overview :page_facing_up:

### Overview

Gateway is an open source substrate runtime module for bridge of bank digital currencies.


Core Runtime Module

#### Bank Digital Currency module `/bank-digital-currency`

Bridge module manages inbound/outbound transfers from bank and the blockchain

#### Open runtime module libraries

ORML's `orml-currencies`, `orml-tokens` may be used for compatibility between other parachains to transfer bank digital currencies.

Ecosystem Fit
Stablecoins are just approaches to the non-volatile asset, and they are usually dependant to the price of money in a nation. Many people sometimes don't understand this. Instead of few stablecoin projects that tries to limit community to only use their stablecoins applying maximalism and zealotry convincing that their asset will be the next money, Digital Native Foundation just tries to accomodate real money by building a bridge to digitize independant variable, money to cryptocurrency ecosystem starting with Standard Protocol. This will ultimately bring freedom to people and form a co-existing check and balance system between crypto and fiat. If nations go wild, and hyperinflation rises, people can rely on stablecoins in crypto. If crypto goes wild and market crashes due to some regulations from a certain powerful government, people can always switch back their asset to fiat currency.


Team members:busts_in_silhouette:

Team member:
Hyungsuk Kang, team leader

Legal Structure
Fiat Bridge is built by Digital Native Foundation, Key for managing bank digital currency providng liquidity is done by Ginkgo Bank, Aynil inc. is a payment gateway company to provide transfer API for fiat money in South Korea. 

Member’s experience
As the boundary between crypto and fiat money is becoming more permeable, Hyungsuk and his team maintains Standard protocol to test and deliver the digital asset standard between them. Digital Native Foundation is an open source software working groups to develop new social infrastructure for next generations.

Team Code Repos

Member LinkedIn Profile
https://www.linkedin.com/in/hyungsukkang

Team member:
DoHyung Jeon, Ginkgobankex Leader

Member's experience
DoHyung is the leader of Ginkgobankex. Ginkgobankex is Korea’s first digital bank that professionally manages blockchain digital assets and legal assets. DoHyung has managed to incorporate virtual assets into the real economy by collaborating with traditional Korean licensed digital banking institutions. Lastly, He has launched reasonable cryptocurrency financial products in the financial ecosystem for investors. 


Member LinkedIn Profile
https://www.linkedin.com/in/dohyungjeon



## Development Roadmap :nut_and_bolt:

### Overview

The overall process for building this solutions are:

1. Build a bank digital currency module in substrate runtime in layer 1


2. Build a multi-container solution with `docker-compose` where it integrates 
- a local cron client to listen to outbound transfer request from blockchain to fiat with polkadot.js then notify payment gateway server 
- a local express.js server to listen on the inbound transfer from fiat to blockchain and submit txs with polkadot.js 
- a kotlin/java payment gateway server to accept fiat transfer from user to bank account and notify inbound transfer to the express.js server, keeping a table of fiat account corresponding to the crypto address 

3. build a smart contract and try with layer 2 solution(submitted in a separate grant)

### Milestone 1 - Bank digital currency module

Total Estimated Duration: 4 months
Full-time equivalent (FTE): 2(1 for substrate, 1 for devops)
Total Costs: 6000USDT
Payment Address: 0x6EaD823cfB6d45996b8E413C7bE43282f042A78e
Milestone 1 - Bank digital currency 
Estimated Duration: 3 month
FTE: 1
Costs: 3000USDT
This milestone focuses on building a substrate runtime module to manage the bridge transactions and transferring inbound assets 

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0|
| 1. | Bridge runtime module | A bridge runtime module code with test codes will be provided |
| 2. | Documentation | Documentation will introduce on how the module works with the diagram on inbound/outbound transfer with bridge clients | 
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality of the oracle provider |

### Type
`Role`: `Enum that determines the role of an account (Admin, Provider, Pauser)`
`Role::Admin`: `An actor which can only allocate a role for an account`
`Role::Provider`: `An actor that can adjust total supply of the fiat asset to transfer`
`Role::Pauser`: `An actor that can shutdown the whole process of the bridge in emergent situations`
`Role::Bridge`: `A bridge client account where it can operate the transfer`

### Storage
`InQueue`: `queue of account ids that need to process for inbound tranfer`
`OutQueue`: `queue of account ids that need to process for outbound transfer`
`Roles`: `hashmap of account id as key and value as Role enum value`
`OutstandingOutBound`: `hashmap of account id as key and value as outstanding balance that needs to be processed by the bridge after initiating outbound transfer`
`OutstandingInBound`: `hashmap of account id as key and value as outstanding balance that needs to be processed by the bridge after initiating inbound transfer`


### Functions

#### Submitted by Bridge
`process_inbound(account id)`: `a node.js cron client process inbound transfer of an account and remove the acccount id in InQueue. As a result of inbound transfer, the bank digitial currency from module account is moved to the user account`
`process_outbound(account id)`: `a node.js cron client process outbound transfer of an account and remove the acccount id in InQueue. As a result of outbound transfer, the bank digital currency from user account is moved to module account`
`inbound_transfer(account id, amount)`: `an express.js server initiates inbound transfer after receiving notificaton from payment gateway server`

#### Submitted by User
`outbound_transfer(amount)`: `initiate outbound transfer from crypto to fiat with the amount of bank digital currency to send`

### Events
`SetTotalSupply(totalsupply)`: `Report total supply change by Provider`
`ProcessedInboundTransfer(account, amount)`: `Report processed inbound transfer`
`ProcessedOutBoundTransfer(account, amount)`: `Report processed outbound transfer`
`InitiatedInBoundTransfer(account, amount)`: `Report initiated inbound transfer`
`InitiatedOutBoundTransfer(account, amount)`: `Report initiated outbound transfer`
`ChangedRole`: `Report role change by the admin`

### Milestone 2 - Bridge clients 
* **Estimated Duration:** 3 month
* **FTE:**  3(1 for devops engineer, 1 for Java developer, 1 for node.js developer)
* **Costs:** 9000USDT

This milestone focuses on building bridge clients to submit initiating and processing calls.

The deliverable of this solution will consist of docker-compose file with 3 containers.
- a local cron client to listen to outbound transfer request from blockchain to fiat with polkadot.js then notify payment gateway server which is similar to current oracle [client](https://github.com/digitalnativeinc/lumen)
- a local express.js server to listen on the inbound transfer from fiat to blockchain and submit txs with polkadot.js 
- a kotlin/java payment gateway server to accept fiat transfer from user to bank account and notify inbound transfer to the express.js server, keeping a table of fiat account corresponding to the crypto address



| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0. | License | Apache 2.0|
| 1. | initiator client | A cron job software to periodically check txs to check events and initiate txs in each queue |
| 2. | Documentation | Documentation will share brief architecture of multi-container structure and introduce how to run bridge using `docker-compose` with trouble shooting | 
| 3. | Processor Client | a local express.js server to listen on the inbound transfer from fiat to blockchain and submit txs with polkadot.js will be provided. |  
| 4. | DockerCompose | We will provide a `docker-compose.yml` file to run the multicontainer clients in one command `docker-compose up`|


Future Plans
- Kubernetes settings on bridge clients will be prepared to handle requests from the bank
- [Bank of Korea is now seeking corporates to deliver their money](https://www.bok.or.kr/portal/bbs/P0000559/view.do?nttId=10064600&menuNo=200690), and we hope this software will help them to solve their problem
- Full funciton test on PoS testnet, Opportunity
- Full function test on Kusama/Rococo.
- Full function test on Polkadot.
