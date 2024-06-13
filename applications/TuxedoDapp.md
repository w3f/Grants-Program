# TuxedoDApp

- **Team Name:** MLabs
- **Payment Address:** FIAT
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Develop a Tuxedo DApp, extend the CLI-Wallet and integrate Talisman

### Overview

Unlike traditional account-based systems, UTXO-based systems treat each transaction output as a distinct entity, introducing advantages in parallel processing and state transition simplicity.

The Tuxedo project endeavours to demonstrate the flexibility and interoperability of Polkadot by implementing UTXO as one of its paradigms. MLabs, with expertise in the Cardano ecosystem utilizing UTXO as its core model, sees an opportunity to contribute to Tuxedo's success, address identified issues, and engage in future collaborative activities.

Our goal is to showcase the potential of Polkadot using the UTXO paradigm for the end user, leveraging Tuxedo. The project will consist of two key stages:

- Stage 1: Extend the CLI-wallet and integrate Talisman
- Stage 2: Developing a basic CryptoKitties DApp

### Project Details

- Stage 1: Extend the CLI-wallet and integrate Talisman

We start by extending the CLI-wallet to allow all the functionalities required by the DApp. 

We had the idea to build a basic web wallet ad hoc for Tuxedo-based app, however, a better approach for helping Tuxedo to expand was to make an integration with Talisman, a well-known Polkadot web wallet. Talisman doesn't support UTXO, overcoming this limitation is the biggest challenge.

We want to ensure users can perform the same actions on the CLI and the Web wallet.

**Functionality**:

1. Feature parity between Web-Based and CLI wallets

The web-based wallet allows core functionality of the CLI wallet, offering seamless UTXO synchronization and token handling, ensuring that users have an equivalent experience across both interfaces.

2. Talisman integration:

The Web-based wallet Talisman to allow transactions of the DApp.

3. Issues Fix to support transactions to multiple recipients (https://github.com/Off-Narrative-Labs/Tuxedo/issues/62)

The current implementation of a CLI-based wallet allows sending inputs from multiple owners in a single transaction, but it only supports a single recipient for all specified outputs.

**Blockchain Integration**:

Web-based and CLI wallet to connect with the blockchain node and fetch data.

- Stage 2: Developing a basic CryptoKitties DApp

Create a simple decentralized application to demonstrate the viability and maturity of the Tuxedo framework, as required by this opened ticket  "Full Tuxedo App Implementation" https://github.com/Off-Narrative-Labs/Tuxedo/issues/76
Showcase the unique features of UTXO-based transactions on Polkadot, emphasizing scalability and robustness.
Address identified gaps and limitations in the current Tuxedo product to enhance overall functionality.
We think that a successful showcase of a DApp is Cryptokitties which is provided in Tuxedo via pieces in "https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/wardrobe/kitties".
We want to use this concept and extend the wardrobe codebase by implementing a basic web interface and allowing breeding, trading, searching, and updating the kitty features such as name, price and tradable status of kitties.
This DApp is intended for educational purposes only, and not for production use. The integrated Talisman will be used for this DApp.

**Technical Requirements**

**Functionality**:

Kitties Creation with NFTs:
Represent each kitty as a unique NFT on the Tuxedo blockchain.
Use Tuxedo runtime pieces i.e. kitties to handle NFT-based kitties creation transactions.

**Breeding and NFT Ownership**:

DApp ensures NFT ownership is transferred correctly during breeding transactions.
Leverage NFT attributes to determine genetics and other breeding-related factors.

**Trading of kitties between users**:

DApp ensures Kitties can be traded between the users.
Ensure ownership is transferred successfully once trading is completed.

**Updating the kitty details**:

DApp ensures Kittie's details such as name, tradable status(Yes or No) and Price can be updated.

**Search kitties owned by other users**:

DApp helps search the kitties other users own based on the user's public key.
This displays the list of kitties owned by other users with all details required for trading such as Gender, Tradable status, Price, Parents, etc.

**Blockchain Integration**:

Tuxedo Runtime pieces (wardrobe/kitties):
We need to leverage Tuxedo runtime pieces for implementing specific DApp functionalities in the UTXO model, with a focus on NFTs, if some modification is required or if some new functionality is required we may need to customize runtime logic to suit the requirements of the UTXO-based DApp.
For this scope, we plan to modify the kitties' pieces code to support the below features:

1. Generating the kitty without the parent when the user inserts the new key in the wallet (basically, 1 kitty is provided for free as an onboarding process)
2. Implementing the Trading of kitties between users
3. Searching kitties owned by other users
4. Adding/Updating more details of kitties such as Gender, Tradable status, Price, and Name.

**Transaction Handling**:

DApp implements transaction handling logic in the web application to initiate UTXO-based transactions, including NFT-related transactions, on the Tuxedo blockchain.
Provide feedback to users on transaction status and confirmations.

**Personal Dashboard**:

We will develop a personal dashboard for users to view and manage their NFT-based Kitties collections.
Display detailed information about each NFT, including ownership history and transaction history.
Manage NFT means, it includes below :

1. Viewing NFTs:

   Users should be able to see a comprehensive list or visual representation of all the NFTs (kitties) they own.
   Display detailed information about each NFT, including attributes such as below:
   - Name
   - parents (mom and dad)
   - free_breedings (numbers)
   - DNA (H256 Hash value)
   - num_breedings (number)
   - Tradable (yes or No)
   - Price
   - Status (Ready for Raring, Tired (only for Dad), Had birth recently (only for Mom))

2. Trade:

    Users should be able to buy the kitty from other users via the search kitty screen or directly from the Trade Kitty screen by inputting the kitty & owner details

3. Breed:

    Users should be able to initiate breeding directly from the dashboard

4. Update:

    Users should be able to update features such as Tradable status, price, and name from the dashboard by clicking on any cell which will navigate to update the kitty screen

5. Interactivity:

   Make the dashboard interactive, allowing users to click on individual NFTs to access more detailed information or initiate specific actions

**Tech Stack:**

- React Framework (React + Redux + React Router)
- TypeScript
- Babel (for backward compatibility in older browsers)
- Jest (JavaScript Testing Framework)
- Rust
- Axum (Rust Web Application Framework)
- Sled (embedded database)

DApp Wireframes: [![DApp Wireframes](https://lh3.googleusercontent.com/d/1dCr5Wwi0L-fGPdwAQGFPDhmTeBQYPDy1=w3692-h1932-iv1)](https://drive.google.com/file/d/1dCr5Wwi0L-fGPdwAQGFPDhmTeBQYPDy1/view?usp=sharing)


### Ecosystem Fit

**Where and how does your project fit into the ecosystem?**

- TuxedoDApp seeks to propel the Tuxedo project forward by addressing its current limitations and showcasing the capabilities of Polkadot with the UTXO paradigm. By developing a simple DApp and integrating the Talisman wallet, we aim to provide a valuable use case for users of this ecosystem with limited experience in UTXO.

**Who is your target audience?**

- **Developers and Enthusiasts from other blockchains:** Developers interested in experimenting with another paradigm but also developers from other ecosystems more "bitcoin-based" that want to try Polkadot.

- **New Learners in Blockchain Development:** Individuals who are new to blockchain development and want to learn by engaging with the Tuxedo framework. The Tuxedo DApp and the Talisman integration can serve as educational tools, providing a practical environment for learners to understand and experiment with UTXO-based blockchain concepts.

**Are there any other projects similar to yours in the Substrate/Polkadot/Kusama ecosystem?**

- Tuxedo is unique and we are not aware of any DApp implemented as of today.

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
He has successfully implemented advanced practices, including Prometheus and Grafana for metrics and telemetry, forkless upgrades of runtime, and pallets using polkadot.js.org.
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
- **Total Costs:** $24000 (USD)

### Milestone 1  — Extend the CLI-wallet and integrate Talisman 

- **Estimated duration:** 1 month
- **FTE:**  *1*
- **Costs:** $10000 (USD)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide a basic **video** that shows how a user can use Talisman to send test tuxedo transactions, together with other videos showing how to do the same with the CLI-wallet interface. We will publish information in a wiki format about: how to build and run the project, the APIs, libs, etc. |
| **0c.** | Testing and Testing Guide | The extension of the CLI-wallet will be fully covered by unit tests. Documentation about how to test will be provided|
| **0d.** | Article | We will publish information about the DApp specification, the talisman integration and the extended CLI-wallet functionalities |
| **0e.** | Docker image containing any changes/issue fix in Tuxedo core | If the tuxedo core need changes due the Talimans integration and/or the CLI wallet, we will provide the docker image containing the changes |
| **0f.** | CLI-wallet extended and Talisman wallet integration | The CLI-wallet will be extended to support the new functionalities of the DApp. We will integrate Talisman web-based wallet to support all the transactions of the DApp. |


### Milestone 2 — Stage 2: Developing a basic CryptoKitties DApp

- **Estimated Duration:** 2 months
- **FTE:**  2
- **Costs:** $14000 (USD)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide a basic **video** that shows how a user can use the DApp to breed and trades kitties |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Article | We will publish information in a wiki format about: the APIs built, the DApp specification, the frontend libs used, the game design, the wireframes of the DApp|
| **0e.** | DApp | We will create a web-based DApp to support functionality such as "create the kitty as NFT", managing the ownership of NFT/Kitties, Breeding, Trading kitties, and showing info (meaning of "Management of NFT" is mentioned above in Dashboard section ) |
| **0f.** | Personalized Dashboard | We will create a personal dashboard for users to view and manage their NFT-based kitty collections. Display detailed information about each NFT, including ownership and other details such as parents, dna, Tradable status, Price, etc  |

## Future Plans

**Indexer and caching**: Implement an indexer that listens to the Tuxedo blockchain and captures relevant events and data related to kitties, enabling fast data retrieval. Introduce a caching layer to further optimize data retrieval and reduce database lookup lag. 

## Referral Program (optional) :moneybag:

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Meeting with the Web3 Foundation team at the beautiful Sub0 conference in Lisbon
