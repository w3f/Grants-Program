
# TuxedoDapp

- **Team Name:** MLabs
- **Payment Address:** FIAT
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Develop a Tuxedo Web Wallet and Dapp

### Overview

Unlike traditional account-based systems, UTXO-based systems treat each transaction output as a distinct entity, introducing advantages in parallel processing and state transition simplicity. 
The Tuxedo project endeavours to demonstrate the flexibility and interoperability of Polkadot by implementing UTXO as one of its paradigms. MLabs, with expertise in the Cardano ecosystem utilizing UTXO as its core model, sees an opportunity to contribute to Tuxedo's success, address identified issues, and engage in future collaborative activities.

Our goal is to showcase the potential of Polkadot using the UTXO paradigm for the end user, leveraging Tuxedo. The project will consist of two key stages:

- Stage 1: Developing a simple Web Wallet
- Stage 2: Developing a basic Dapp

### Project Details

- Stage 1: Developing a simple Web Wallet

Develop a user-friendly web wallet that allows users to manage their UTXOs on the Tuxedo-based Polkadot network which is similar to polkadot.js which will get the chain info(genesisHash, runtime metadata, chain runtime version, API version), block info
Focus on simplicity, security, and ease of use to provide a seamless experience for users interacting with UTXOs.

**Technical Requirements** 
 
**Security:** : Private key storage:
Web-based wallet will provide a secure method for private key storage on the client side, such as a browser's secure storage or hardware wallets.

**Functionality**: 
1. Feature Parity Between Web-Based and CLI Wallets
The web-based wallet will be designed to mirror the core functionality of the CLI wallet, offering seamless UTXO synchronization and token handling, ensuring that users have an equivalent experience across both interfaces
Note : Feature Parity: Means web-based and command-line interface (CLI) wallets, have the same set of features and functionalities and both versions provide an equivalent or identical user experience by offering the same core capabilities, options.

3. Issues Fix in web-based wallet :(issues/62)
The current implementation of a cli based wallet allows sending inputs from multiple owners in a single transaction, but it only supports a single recipient for all specified outputs.

4. Browser compatibility:
Web-based wallet will ensure compatibility with Chrome, Firefox and Edge.

**Blockchain Integration**:
Web-based wallet will connect to the blockchain node to fetch relevant data.
We will check if there is any lib such as the one used by "https://polkadot.js.org/" to interact with the Tuxedo based blockchain for easy integration. 

**Transactions**:
web-based wallet will implement transaction creation and signing on the client side.
We will consider using libraries that support the specific blockchain's transaction format for Tuxedo with UTXO instead of accounts.

**Local Database**:
web-based wallet will consider using databases for storing non-sensitive user data.
Local database (e.g., IndexedDB, WebSQL, or a lightweight client-side database) to store relevant wallet data locally on the user's device. 

**Technology Stack**:
polkadot{.js}  - We will try to re-use as much as possible 
Vue.js with Vuex and the Vue Router
TypeScript
webpack
Babel - for backwards compatibility in older Browsers
Local database: IndexedDB or WebSQL, or any lightweight client-side database to store relevant wallet data locally on the user's device.

- Stage 2: Dapp Development

Create a simple decentralized application to demonstrate the viability and maturity of the Tuxedo framework, as required by this opened ticket  "Full Tuxedo App Implementation" https://github.com/Off-Narrative-Labs/Tuxedo/issues/76
Showcase the unique features of UTXO-based transactions on Polkadot, emphasizing scalability and robustness.
Address identified gaps and limitations in the current Tuxedo product to enhance overall functionality.
We think that a successful showcase of a dapp is Cryptokitties which is also used as an example in Tuxedo wardrobe https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/wardrobe/kitties
We want to use this concept and extend the wardrobe codebase implementing a basic web interface and allowing the trading of generated pets between users.
This dapp is intended for educational purposes only, and not for production use. The web-wallet previously developed will be used for this Dapp.

**Technical Requirements** 

**Functionality**:
Pet Creation with NFTs:
Represent each pet as a unique NFT on the Tuxedo blockchain.
Use Tuxedo runtime pieces i.e. kitties. to handle NFT-based pet creation transactions.

1. **Breeding and NFT Ownership**:
Dapp ensures NFT ownership is transferred correctly during breeding transactions.
Leverage NFT attributes to determine genetics and other breeding-related factors.

2. **Trading NFTs**:
Dapp enables a marketplace for trading pets (NFTs) between users.
Implement an offer system for users to make and accept NFT-based offers for pet transactions.

**Blockchain Integration**:
Tuxedo Runtime pieces.(wardrobe/kitties ):
We need Leverage Tuxedo runtime pieces for implementing specific Dapp functionalities in the UTXO model, with a focus on NFTs, if some modification is required or if some new functionality is required we need customize runtime logic to suit the requirements of the UTXO-based pet trading Dapp.

**Transaction Handling**:
Dapp implements transaction handling logic in the web application to initiate UTXO-based transactions, including NFT-related transactions, on the Tuxedo blockchain.
Provide feedback to users on transaction status and confirmations.

**Event Handling**:
Dapp Listen for UTXO and NFT-related events to update the user interface in real time.
Utilize event-driven programming to respond to changes in the UTXO set and NFT ownership.

**Transaction Confirmation**:
Dapp implements a transaction confirmation mechanism to ensure that users are informed about the progress and finalization of UTXO and NFT-based transaction

**Personal Dashboard**:
We will develop a personal dashboard for users to view and manage their NFT-based pet collections.
Display detailed information about each NFT, including ownership history and transaction history.
Manage NFT means , it icludes below :
1. Viewing NFTs:
   Users should be able to see a comprehensive list or visual representation of all the NFTs (pets) they own.
   Display detailed information about each NFT, including attributes such as species, color, pattern, eyes, ears, tail, etc.
2. Ownership History:
   Show the ownership history of each NFT, indicating when it was created, bred, or traded.
   Provide transparency on how the ownership of each pet has changed over time.
3. Transaction History:
   Display a record of all transactions involving each NFT, such as creation, breeding, and trading.
   Include details like transaction timestamps, involved parties, and any fees associated with the transactions.
4. Breed and Trade Options:
    User should be able to initiate breeding and trading directly from the dashboard.
    Include options to send breeding requests, accept offers, and initiate trades.
5. Naming and Customization:
   Enable users to customize and name their pets directly from the dashboard.
   Allow for a personalized touch, letting users give distinct identities to their NFTs.
6. Transfer and Ownership Management:
   Provide options for transferring ownership of NFTs to other users within the platform.
7. Interactivity:
   Make dashboard interactive, allowing users to click on individual NFTs to access more detailed information or initiate specific actions.

**Tech Stack:**
IPFS (InterPlanetary File System) for storage 
TypeScript
webpack

### Ecosystem Fit

**Where and how does your project fit into the ecosystem?** 
- TuxedoDapp seeks to propel the Tuxedo project forward by addressing its current limitations and showcasing the capabilities of Polkadot with the UTXO paradigm. By developing a user-friendly web wallet and a simple Dapp, we aim to provide a valuable use case for users of this ecosystem with limited experience in UTXO.

**Who is your target audience?**
- **Developers and Enthusiasts from other blockchains:** Developers interested in experimenting with another paradigm but also developers from other ecosystem more "bitcoin-based" that want to try Polkadot.
    
- **New Learners in Blockchain Development:** Individuals who are new to blockchain development and want to learn by engaging with the Tuxedo framework. The Tuxedo Web Wallet and Dapp can serve as educational tools, providing a practical environment for learners to understand and experiment with UTXO-based blockchain concepts.

**Are there any other projects similar to yours in the Substrate/Polkadot/Kusama ecosystem?**

- Tuxedo is unique and we are not aware of any implemented Dapp as of today.

## Team :busts_in_silhouette:

### Team members

- Mario Altimari
- Amit Nadiger

### Contact

- **Contact Name:** Mario Altimari 
- **Contact Email:** marioaltimari@mlabs.city
- **Website:** https://www.mlabs.city

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. MLabs LTD, 1st-floor Citibase Millbank Tower,21-24 Millbank, LONDON SW1P 4QP, United Kingdom
- **Registered Legal Entity:** MLabs LTD

### Team's experience

- Mario has witnessed the evolution of the web from its early days to the present, as an IT expert with more than two decades of experience. He has worked on various projects with different roles involving Web 1, Web 2 and Web 3 technologies, and has a deep understanding of the challenges and opportunities in each domain.
- Amit is a seasoned software professional with over 18 years of extensive experience in the industry.
His expertise spans a variety of programming languages, including C, C++, Java, Kotlin, and Rust, as well as diverse technologies such as Blockchain, Android app development, and AOSP (Android Open Source Project) development.
In the blockchain space, Amit has showcased his proficiency in Pallet Development.
He has successfully implemented advanced practices, including Prometheus and Grafana for metrics and telemetry, forkless upgrades of runtime and pallets using polkadot.js.org.
Additionally, Amit has hands-on experience in Ink-based SmartContract development and deployment using a web interface in Substrate Blockchain, demonstrating his versatility in running nodes with different roles, such as Validator/Author and Full node, and configuring Aura and Grandpa through chain specification updates in customSpec.json.
His diverse skill set showcases a comprehensive understanding of blockchain technologies and their practical applications.
Amit has more than 100 technical blogs in Blockchain specifically in Substrate, Polkadot and Rust language, Wasm: https://www.linkedin.com/pulse/consolidated-article-categorization-amit-nadiger/

Nobody applied for a Web3 Foundation grant before.


### Team Code Repos

- Mario Altimari [https://github.com/AltiMario](https://github.com/AltiMario)
- Amit Nadiger [https://github.com/NadigerAmit](https://github.com/NadigerAmit) 

### Team LinkedIn Profiles (if available)

- Mario Altimari https://www.linkedin.com/in/altimario/
- Amit Nadiger https://www.linkedin.com/in/amit-nadiger-94a7224/


## Development Status :open_book:

We have had conversations with the W3F team to validate the idea and find a starting point for collaboration 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  2 FTE 
- **Total Costs:** $30000 (USD)

### Milestone 1  — Stage 1: Developing a simple Web Wallet 

- **Estimated duration:** 1 month
- **FTE:**  *1*
- **Costs:** $10000 (USD)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the web wallet app for Tuxedo (Private key configuration, local URI to be used to connect to blockchain) and send test transactions, tuxedo balance, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an **article**/workshop that explains how to use the web-based wallet which can be used to configure the user private key and also get the information from the tuxedo based blockchain, how to do the transactions based on UTXO instead of account-based blockchain. |
| 0e. | Web-based wallet | We will create a web-based wallet which will have functionalities like Storing the private key of the user,(send and receive) Transaction support, Basically all the functionalities provided by the CLI-based wallet (AmoebaDemo, VerifyCoin, SpendCoins, InsertKey, GenerateKey, ShowKeys, RemoveKey, ShowBalance, ShowAllOutputs) |



### Milestone 2 — Stage 2: Developing a basic Dapp

- **Estimated Duration:** 2 months
- **FTE:**  2
- **Costs:** $20000 (USD)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the Dapp app to breed pets, trade pets, view and manage the pets using the dashboard |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|**0d.** | Article | We will publish an **article**/workshop that explains how to use the Dapp which can be used to "create the pet as NFT", managing the ownership of NFT/Pet, Breeding of pets and Trading and also how to use the Dashboard |
| **0e.** | Dapp | We will create a web-based Daap to support functionality such as "create the pet as NFT", managing the ownership of NFT/Pet, Breeding of pets and Trading.(Meaning of "Managment of NFT" is mentioned above in Dashboard  ) |
| **0f.** | Personalized Dashboard | We will create a personal dashboard for users to view and manage their NFT-based pet collections. Display detailed information about each NFT, including ownership history and transaction history |
...


## Future Plans

Please include here

**Authentication**: Web-based wallet will consider multi-factor authentication for enhanced security if required
**Backend Development**: 
When we implement the authentication backend server is required to handle user authentication and manage connections to the blockchain node. 
**Encrypting the local database:** 
We will consider encrypting sensitive data stored in the local database, especially private keys.
**Piece development**: 
We would like to develop undeveloped and required pieces which are equivalent to pallets in Substrate framework which are built using FRAME. Ex: Babe, Sudo, System, membership, etc.


## Referral Program (optional) :moneybag:


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Meeting with the Web3 Foundation team at the beautiful Sub0 conference in Lisbon
