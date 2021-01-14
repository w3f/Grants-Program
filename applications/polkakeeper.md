# Polkakeeper Grant Proposal
![](https://rampdefi.com/polkakeeper/digitalassets/polkakeeperlogo.png)

# Open Grant Proposal

* **Project Name:** Polkakeeper
* **Team Name:** RAMP DEFI
* **BTC Payment Address:** 1DQNr9EyYmoS5hbwRzQkfNrw5DS247cpF8

## Polkakeeper - A Community-Led Value Assurance Protocol Empowering DeFi Markets Efficiency on Polkadot


**Project Overview**

Polkakeeper is a decentralized value assurance underwriter that empowers community creation of keeper strategies on the Polkadot network and bridged chains. On Polkakeeper, Strategists create Keepers (smart contracts), which can be executed by Finders who actively search for keeper execution opportunities. Backers are users who deposit their funds or assets into Vaults to back the deployment of keeper strategies. 

Keepers are automated on-chain value assurance strategies that increase overall DeFi market efficiencies, such as liquidating undercollateralized positions in lending / margin trading protocols, or smoothing asset prices through arbitrage strategies across exchanges. Uniquely, Keepers may deploy assets across chains, which give strategies new dimensions in identifying profit opportunities. A simple example of a Keeper strategy can be for Finders to monitor asset prices across multiple DeFi protocols such as Acala, Polkadex etc, and deploying assets from Vaults to close off pricing differences with no risks to the principal.

Upon successful Keeper execution, the protocol takes 3.5% of the profits, and the remaining is distributed among the Strategist, Finder and Vaults. Where funds or assets in Vaults are not utilized, they are deployed to lending protocols and optimized for the best yields across chains.

The vision for Polkakeeper is to become the leading value assurance protocol and through DAO governance, organizes the Polkadot developer and user communities towards optimizing and maintaining high level of market efficiencies for Polkadot DeFi protocols. Polkakeeper is designed to empower community collaboration for Strategists, Finders and users to act collectively, rather than individually.

Polkakeeper is designed as an independent, composable Substrate component that can be seamlessly integrated and deployed across Polkadot’s multi-chain network.


## Project Details 

Overview Diagram of how Polkakeeper works
![](https://rampdefi.com/polkakeeper/digitalassets/technical_diagram.png)


# Sample Scenario
A description of how Polkakeeper works, by walking through a typical scenario:
* Polkakeeper goes live, and publishes its SmartContract API
* A user (Strategist) writes a Smart Contract that implements a certain trade or action and deploys/registers it.
* Another user (Finder) finds a newly registered SmartContract on the Polkakeeper app and makes a NodeJS app that scans the relevant (para) chain for opportunities to apply the Keeper Strategy on.
* The Finder may choose to fund each execution of the Keeper herself, or leverage with extra funding from the Vault. In this case dividends will be paid on the results of the execution.
* Meanwhile, yet another user who is not technically savvy but wants to participate, deposits in the Vault as a Backer. This makes him eligible for dividends on results of the Keeper executions if the funds are used.
* The Finder (or an automated task) calls the PolkaKeeper chain to execute the chosen Keeper with the found parameters
* After all the actions are completed, results will be paid out to Finder and Backers.

# Components
* Native Token
  * A native token shall be issued to power the Polkakeeper ecosystem, rewarding developers, users and node operators who contribute to the growth and continued development of Polkakeeper.
  * Implementation: The built-in Currency trait from FRAME.

* Account
  * Accounts live on the Polkakeeper network, and identify the user. Depending on the security level needed to be Strategists or Finders, additional verification can be added
  * Implementation: The built-in account system from FRAME.

* Node
  * Polkakeeper will run several Collator and Full nodes to ensure functioning and reliability of the network, and to enable the features added by the off chain workers. 
  * The parachain will be implemented using  Substrate+Cumulus, initially for local development and later on the Rococo testnet. 
  * The nodes will run the Polkakeeper Runtime, which, among other features, includes the Contracts Pallet, enabling deployment of the KeeperManager and Keeper contracts. 
  * Eventually, Nodes will be set up in such a way that a direct connection with other Parachains is possible, without going through the Relay Network.

* KeeperManager (Runtime)
  * Extrinsic that enables viewing/adding/removing/changing/disabling Keepers by accounts in the chain.
  * Implementation: A Smart Contract that can be transacted with through the UI and programmatically. 
  * The Polkakeeper Runtime makes available Chain Extensions that allow the smart contracts to utilize relevant parts of the Polkadot ecosystem and connected parachains, bridges and off chain functionality.
  * Connectivity to other parachains is implemented with XCMP using the Xcm::Transact type (once available)

* Keeper (Smart Contract)
  * Logic that is designed to be applied on specific targets. For example, a function that executes a specific trade on another parachain such as Acala. The logic is predefined, but the input (the tokens and amounts) are parameterized.
  * Implemented as Smart Contracts to be deployed to the chain by the users. These still have to be registered in the KeeperManager.

* Strategist
  * A user who designs new Keepers (strategies), authors, deploys the Smart Contracts and registers these in the KeeperManager.

* Finder
  * A user who finds opportunities to execute a Keeper strategy against. The finding is done off-chain due to the required computing/network resources needed. The outcome is a transaction that invokes a Keeper with specific Parameters.

* Backer
  * A user who provides liquidity to the Vault. In exchange for this, executing Keepers can be done with larger leverage, and depending on the configuration set by the Strategist, profits are shared.

* Vaults
  * (Shared) Keepers can utilize a pool of user funds to enter profit opportunities. Profits may be shared with the pool participants.
  * The vault is implemented as a Smart Contract or directly in the Runtime, and will be available programmatically or through the User Interface. Functionality includes: deposit, withdrawal.

# Runtime Modules
* KeeperManager (Main runtime)
  * Events
    * KeeperDeployed, KeeperRemoved, KeeperRun, KeeperDisabled, KeeperEnabled
    * VaultDeposit, VaultWithdrawal
  * Storage
    * Keepers (StorageDoubleMap)
      * keeperOwners: (address => “owner” => address)
      * keeperEnabled: (address => “enabled” => address)
    * VaultBalances (StorageDoubleMap)
      * Balance: (address => “tokenID” => number)
    * Dividends (StorageDoubleMap)
      * Dividend: (address => “tokenID” => number)
  * Public Methods
    * registerKeeper(address)
    * listKeepers() -> Vec<Keeper>
    * removeKeeper(keeperAddress)
    * runKeeper(address) -> CallResult
    * disableKeeper(address)
    * enableKeeper(address)
    * claimDividend()
    * Custom dispatchable extrinsics (for calling from Chain Extension in Keepers)
      * Here we would implement predefined cross-parachain XCMP calls, dispatchable from inside the contract. For example executing a specific trade in Acala, for which all tokens and permissions are already in place.
    * Additionally, methods provided by the Contracts Pallet will be exposed as well. These allow for deployment and instantiation of the SmartContracts.
* Keeper (SmartContract)
  * All the usual Ink! Functionality is available.
  * Documented Chain Extensions from the Runtime
    * Cross-Parachain functionality
    * Offchain Worker functionality

# Backend Development
As of now we don’t expect to do direct backend development. The functionality on the nodes should be sufficient. That said, we may implement example Finder tasks on a NodeJS backend.
Deployment of the chain during development will use Docker and AWS. We expect to use local deployments and the Rococo Testnet.

# UI Development
We will implement the frontend in React + Javascript + Polkadot.js. Since there is no dynamic backend, the hosting of the built webapp will probably be done on S3 + Cloudfront or a comparable configuration.

# Team
## Team members
**Lawrence Lim**
* Project Lead for RAMP DEFI, a leading DeFi protocol providing cross-chain liquid staking solutions.
* Head of International Growth at IOST, a layer 1 blockchain protocol.
* Global Sales at TradeGecko, an inventory management software company acquired by Intuit.
* Corporate finance and private banking in global financial institutions including JP Morgan, BNP Paribas and KPMG.
* LinkedIn: https://www.linkedin.com/in/lawrencelimhz/

**Loh Zheng Rong**
* Global Marketing Lead for RAMP DEFI overseeing overall project marketing execution and team operations.
* Investments and blockchain advisory at Merkle Ventures.
* COO of Toucan, Payments aggregator platform in S.E.A region.
* LinkedIn: https://www.linkedin.com/in/lohzhengrong/

**Jade Wang**
* Greater China Marketing Lead for RAMP DEFI, focusing on China market growth and development.
* International Marketing Manager for IOST, a layer 1 blockchain protocol with headquarters in Beijing.

**Caspar Oostendorp**
* Technical Lead for RAMP DEFI overseeing technical R&D, multi-chain protocol deployments and multi-chain node operations.
* Co-founder of BlockDevs Asia, a community of DLT/Blockchain tech devs. 
* Co-founder of Oost & Voort, specializing in cloud and blockchain solutions.
* LinkedIn: https://www.linkedin.com/in/caspar-oostendorp-7bb82873/

**Anu Nair**
* Blockchain Lead for RAMP DEFI overseeing product R&D, multi-chain protocol integrations and smart contracts development.
* Senior blockchain developer at Propine, a digital asset custodian regulated by the Monetary Authority of Singapore.
* Senior software engineer in leading software companies including Oracle and Manthan.
* LinkedIn: https://www.linkedin.com/in/anu-b-nair-0551763a/

**Jeannette Zhang**
* Operations Lead overseeing business operations and finance.
* Strategy and Finance Manager at Hashed.Labs, a blockchain incubator in partnership with the Singapore government.
* Senior Auditor at Deloitte overseeing audit engagements.
* LinkedIn: https://www.linkedin.com/in/jeanettez/

# Team's Experience
Polkakeeper is conceptualized by RAMP DEFI, a leading DeFi project specializing in cross-chain staked liquidity solutions. The team members collectively have commercial experiences in scaling up decentralized projects and node operations, and have deep technical expertise in blockchain protocol developments in various programming languages including Solidity, Javascript and Python.
RAMP helps users unlock the value of non-ERC20 assets by collateralizing them into fungible liquidity and bridging this liquidity into Ethereum. As of today, RAMP had already created integrations across Ethereum, IOST, Tomochain and Tezos, with more integrations under active development. 
RAMP is already building cross-chain keeper solutions, and its suite of DeFi products for staked liquidity and value assurance can similarly be customized and launched for the Polkadot network.

App link: https://app.rampdefi.com/#/
 
RAMP Vaults TVL: 15.4 Million USDT value
https://app.rampdefi.com/#/vault 

![](https://rampdefi.com/polkakeeper/digitalassets/vaults.png)

RAMP DEFI rStake: Cross-chain integrated stake farming with native assets
* https://app.rampdefi.com/#/stake/iost 
* https://app.rampdefi.com/#/stake/tomo 
* https://app.rampdefi.com/#/stake/tezos 

![](https://rampdefi.com/polkakeeper/digitalassets/rstake.png)

**Integration Partners for RAMP DEFI include:**

IOST | TOMOCHAIN | SOLANA | ELROND | NULS | MOONSTAKE | INJECTIVE PROTOCOL | CRUST | STONE FINANCE | ALLIANCE BLOCK


### Team Code Repos
* https://github.com/RAMP-DEFI
* https://github.com/RAMP-DEFI/RAMP_IOST
* https://github.com/RAMP-DEFI/RAMP_TOMOCHAIN
* https://github.com/RAMP-DEFI/RAMP_VERSION_TEZOS
* https://github.com/RAMP-DEFI/RAMP_REWARDS_MANAGER
* https://github.com/RAMP-DEFI/RAMP_API
* https://github.com/RAMP-DEFI/RAMP_WEB_MAIN
* https://github.com/RAMP-DEFI/RAMP_wRAMP
* https://github.com/RAMP-DEFI/RAMP_IOSTSWAP
* https://github.com/RAMP-DEFI/RAMP_Public_Sale
* https://github.com/RAMP-DEFI/RAMP_ERC_CLAIM_DAPP
* https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_REWARDS
* https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_IOST
* https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_TOMOCHAIN

# Contact
* Contact Name: LOH ZHENG RONG
* Contact Email: zr@rampdefi.com
* Website: https://polkakeeper.com

# Legal Structure
* Registered Address: 14 ROBINSON ROAD #08-01A FAR EAST FINANCE BUILDING S(048545)
* Registered Legal Entity: Ramp Protocol Pte Ltd

# Ecosystem Fit
**Comparable projects**
* Keep3r.network: https://keep3r.network/ (Ethereum)
* KeeperDao: https://keeperdao.com/ (Ethereum)
* Web3 Guardian : https://github.com/open-web3-stack/guardian (Ethereum)

# Milestones:
### Overview
* **Total Estimated Duration:** 3 Months / POC
* **Full-time equivalent (FTE):**  2.75
* **Total Costs:** 0.8 BTC

### Technical Milestones

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both inline documentation of the code and a full tutorial that explains how to interact and communicate with the testnet protocol |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Medium Article | We will publish a medium article that announces all deliveries and a step by step tutorial to the community once evaluation is passed
| 1. | Testing | We will conduct testing of the developed functionalities on Rococo testnet |  
| 2. | Substrate: NativeCurrency | Polkakeeper native token implementation and tools |  
| 3. | Substrate: VaultManager | Functionality regarding shared deposits, funds |  
| 4. | Substrate: Accounts | Account related code  |  
| 5. | Substrate: PolkadotConnector | Code related to bridging with Polkadot |
| 6. | Substrate: RpcEndpoints | External endpoints for Finders and other consumers  |
| 7. | Substrate: Keepers | Basic Keeper logic and custom smart contract base  |
| 8. | Repository | Repository including a README that describes the milestone and explains how to run, test and contribute |
| 9. | Docker | A docker container that will also run on CI to test the deliverables of the milestone |


## Marketing and Community Engagement
We will write articles and grow marketing awareness around Polkakeeper’s development and implementation on Polkadot. As RAMP is a leading DeFi project, there is a ready community of DeFi users who can consume this content, and a marketing network for content distribution. They include, but are not limited to:
* Medium Articles on the product design, integration and tutorials for users.
* Twitter posts covering development and other announcements.
* Community engagement by running a range of incentivised testnets to get more feedback from the existing end-users to improve the Polkakeeper solution.
* On-boarding and seeding the Polkakeeper community via the RAMP community.

## Future Plans
Future Developments will focus on the following:
* Collaboration with DeFi partners on Polkadot 
* Bug bounties to enhance security for users
* Community developer grants and incentive programs for Strategists and Finders to develop Polkakeeper and scale up network value

## Additional Information

**What work has been done so far?** 
Base layer groundwork has been completed with substrate infrastructure planning. Subsequent bottom up construction of the solution would be developed in parts to ensure each running functionality performs as intended.


**Are there any teams who have already contributed (financially) to the project?** 
Our R&D expenses have been covered thus far via RAMP DEFI with world class investors who took part in RAMP DEFI’s private sale round such as Alameda Research, Mechanism Capital, Arrington XRP, Parafi Capital, among others. 

We have further investment interest for follow-on investment should the need arise between the use of this grant and our next source of funding, whether that be the General Grants program or another VC-led investment.


**Have you applied for other grants so far?** 
No.


**How can I get involved?** 
Anyone looking to get involved with RAMP DEFI is welcomed to reach out to us at: team@polkakeeper.com
