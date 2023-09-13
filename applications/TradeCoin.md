# TradeCoin

- **Team Name:** TradeCoin
- **Payment Address:** 0xd5f17FE381292a1ca3a0b1231ba4b543dAA871cE (USDС)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

TradeCoin is a Telegram bot that allows users to trade without leaving the Telegram app.

Our proposal aims to develop a user-friendly Telegram bot that provides seamless access to DeFi and data related to the Polkadot ecosystem. The bot will enable users to interact with the network and perform essential tasks, such as monitoring account balances, executing transactions and placing orders.

### Project Details

By facilitating direct interaction through the bot, the integration with the ecosystem eliminates the need for users to navigate through multiple interfaces, simplifying the process and saving time.

### Technical Details

1. Technical Stack: Rust, teloxide

   We believe that choosing Rust over Python or JavaScript for the development of TradeCoin has several advantages.

   Performance: Rust is a systems programming language that prioritizes performance. It provides low-level control over memory and resources, allowing for efficient execution of code. This is particularly important for a trading bot that requires quick and responsive execution of trades.

   Safety: Rust's strict compile-time checks and memory safety guarantees help in preventing common programming errors such as null pointer dereferences, buffer overflows, and data races. This reduces the likelihood of bugs or vulnerabilities that could potentially impact the security and reliability of the trading bot.

   Concurrency: Rust's ownership and borrowing system ensure thread safety and enable concurrent programming without the need for locks or other synchronization mechanisms. This can be particularly beneficial in a trading bot that may need to process multiple requests simultaneously.

   Ecosystem: Rust has a rapidly growing ecosystem with a variety of libraries and crates that can be leveraged for building reliable and efficient software. 
   
   Considering these advantages, Rust is a suitable choice for developing TradeCoin, ensuring high performance, safety, concurrency, and access to a rich ecosystem of libraries and tools.

   To go into more details regarding rust crates, we are going to utilize [teloxide: An elegant Telegram bots framework for Rust](https://github.com/teloxide/teloxide).
   To interact with the Polkadot: 
   - [subxt](https://github.com/paritytech/subxt) - A library to submit extrinsics to a substrate node via RPC.
   - [polkadot sdk](https://github.com/paritytech/polkadot-sdk)

   We are going to use XCM to interact and communicate between substrate pallets.

2. System Architecture:

   [Beosin](https://cointelegraph.com/news/should-telegram-trading-bots-be-trusted) highlights the security risks of using Telegram bots, including centralized control and the potential for losing control of funds if the Telegram account is hacked.

   Hence, we advocate for a decentralized, transparent and open-source solution.

   In our system, Telegram bot acts as an interface between blockchain and a user.

   Rust back end creates a keypair that will be protected by encryption and a pass phrase.

   In particular, we aim to provide superior experience by developing the following features:

   - Account Monitoring: The TradeCoin Telegram bot will allow users to monitor their account balances, including their token holdings and transaction history. This feature will provide users with real-time visibility into their portfolio and enable them to make informed trading decisions.

   - Transaction Execution: Users will be able to execute transactions directly through the Telegram bot. This includes sending and receiving tokens, as well as interacting with smart contracts on the Polkadot ecosystem. The bot will provide a secure and convenient way for users to interact with the blockchain without leaving the Telegram app.

   - Order Placement: TradeCoin will also support order placement functionality. Users will be able to place buy and sell orders for various tokens within the Polkadot ecosystem. The bot will execute these orders automatically based on predefined conditions, such as price thresholds or trading volume.

   The overall system architecture of TradeCoin will be designed with decentralization and transparency in mind. The Telegram bot will act as an interface between the user and the blockchain. The Rust backend will generate a key pair for each user, which will be protected by encryption and a passphrase. This approach ensures that users have full control over their funds and minimizes the risk of centralized control or loss of funds in case of a Telegram account hack.

   By developing TradeCoin, we aim to provide a seamless and user-friendly trading experience within the Telegram app. Users will have direct access to DeFi and data related to the Polkadot ecosystem, eliminating the need to navigate through multiple interfaces. Our focus on performance, safety, and decentralization will ensure a secure and reliable trading platform for users.  

3. Wallet Creation and Key Management:

   To ensure a secure and user-friendly experience, TradeCoin will incorporate wallet creation and key management features. Here are some details on how these functionalities will be implemented:

   Wallet Creation: 

      1. When a user interacts with the TradeCoin Telegram bot for the first time, they will be prompted to create a new wallet. The bot will guide the user through the process, providing clear instructions and options.

      2. The bot will generate a new key pair for the user, consisting of a public key and a private key. The private key will be securely encrypted and stored on the user's device. This ensures that only the user has access to their funds.

      3. Users will be asked to set a strong passphrase to encrypt their private key. This passphrase will be needed to access and authorize transactions from their wallet.

      4. Once the wallet is created, the bot will provide the user with their public key and other relevant details. Users can share their public key with others to receive funds or verify their identity on the Polkadot network.

   Key Management:

      1. The TradeCoin bot will securely store the encrypted private key on the user's device. Users will need to enter their passphrase to decrypt the private key whenever they want to initiate a transaction.

      2. The bot will provide options for users to update or change their passphrase if desired. This ensures that users can maintain the security of their wallet over time.

      3. In case the user forgets their passphrase, the TradeCoin bot will not have access to it, and thus, cannot recover or reset the wallet. Therefore, it is crucial for users to remember their passphrase and store it securely.

      4. The TradeCoin bot will also provide backup options for the encrypted private key. Users will be encouraged to securely backup their private key in case they lose or change their device.

   With these wallet creation and key management features, TradeCoin aims to provide a secure and user-friendly experience for users. By generating and encrypting key pairs, users have complete control over their funds, reducing the risk of unauthorized access. Encouraging the use of strong passphrases and providing backup options helps to ensure the security and accessibility of the wallet over time.

### Ecosystem Fit

We take inspiration from the latest trend in the blockchain ecosystem which we aim to replicate on polkadot. Telegram bots have gained popularity in the crypto market, with a total market capitalization of [$303 million](https://www.dlnews.com/articles/defi/unibot-telegram-bot-unveils-cloud-service-for-private-keys/).

For example, Unibot is a Telegram bot that allows users to trade cryptocurrencies without leaving the Telegram app. Unibot offers various features, such as decentralized copy trading, limit orders on decentralized exchanges (DEXs), protection against MEV (Miner Extractable Value) bots, and more. The platform has gained momentum and has shown significant growth in trade volume, revenue, and user counts over the last two months. Unibot also has its native token called UNIBOT, with holders receiving a portion of transaction fees and trading volume.

The UNIBOT has seen substantial user growth and has facilitated trades worth $54 million, distributing nearly $1 million in revenue back. Holders of UNIBOT tokens receive rewards of 40% of transaction fees and 1% of the platform's total trading volume.

The appeal of Unibot and other Telegram-based trading bots lies in their user-friendly interface, providing ease of use compared to decentralized exchanges like Uniswap. With Unibot, traders can execute market buy/sell orders through a simple Telegram command, eliminating the need for continuous wallet logins and cross-checking token information. This streamlined process is particularly advantageous for fast swaps and scalping strategies, attracting traders who value efficiency and.

Unibot's success has received endorsement from the crypto community, with popular crypto traders on Twitter praising the platform's user experience and its advantage of trading directly through Telegram for various trading strategies. As a result, newer tokens like WagieBot, 0xSniper, Bridge, and Bolt have experienced significant growth, emulating Unibot's trajectory.

Furthermore, in TradeCoin we improve on private keys storage location by providing an opensource solution.
[CertiK](https://www.dlnews.com/articles/defi/unibot-telegram-bot-unveils-cloud-service-for-private-keys/), a blockchain security firm, raises concerns about the lack of information provided by Unibot regarding the storage location and encryption method of private keys. The involvement of a third-party provider could potentially pose a risk such as susceptibility to supply chain attacks.

## Team :busts_in_silhouette:

### Team members

- Alexandr Fedotov

### Contact

- **Contact Name:** Alexandr Fedotov
- **Contact Email:** alexkekfedotov@gmail.com
- **Website:** [trade-coin-xi.vercel.app](https://trade-coin-xi.vercel.app)

### Legal Structure

Individual

### Team's experience

My project won in [XDC online worldwide hackathon](https://xdc.devpost.com/project-gallery).

Also, our project was a top-7 finalist out of 695 submissions in "TRON DAO". Our [thread](https://forum.trondao.org/t/overview-of-the-tradecoin-project/16511) has had a lot of comments and positive feedback.

The project also participated in the ["FVM Impact Evaluator"](https://spacewarp.fvm.dev/#ie).

### Team Code Repos

- https://github.com/AlexFedotovqq
- https://github.com/TradeCoinPol
- https://github.com/AlexFedotovqq/TradeCoinPol

### Team LinkedIn Profiles (if available)

No

## Development Status :open_book:

Working on Rust Telegram bot.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** $10000

### Milestone 1: Basic functionality

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 5,000 USD

|  Number | Deliverable               | Specification                                                                                                                                                   |
| ------: | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | MIT                                                                                                                                                             |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a **tutorial**.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.|
|     1a. | Bot setup | Telegram bot in rust.|
|     1b. | Generate Sr25519 keypairs | The bot should be capable of creating multiple wallets, importing and exporting private keys safely. Private keys should be protected by a passphrase similar to metamask.|
|     1c. | RPC connection | The bot integrates with polkadot testnet RPC Rococo.|
|      2. | Landing Page for SEO| Landing Page in NextJs that links to the telegram bot for the SEO purposes.|

### Milestone 2 — Additional features

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 5,000 USD

|  Number | Deliverable               | Specification                                                                                                                                                   |
| ------: | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | MIT                                                                                                                                                             |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial**.                                                                             |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.|
|     0e. | Article | We will publish an **article** that explains how to use TradeCoin and how it was build.|
|      1a. | Mainnet Network access | We will access mainnet rpc from the bot and process live data on the server to make rust client as lightweight as possible.|
|      1b. | DeFi integration | We will connect to at least two DeFi protocols such as Parallel Finance / HydraDX / etc. with XCM and conduct multiple trades with just one click.|

## Future Plans

This integration opens up possibilities for various features and functionalities within TradeCoin. For example, users may be able to engage in decentralized copy trading, which enables them to automatically copy the trading strategies of successful traders on Polkadot. This feature can attract traders who value efficiency and seek to maximize their trading opportunities.

Additionally, limit orders allow traders to set specific price levels at which they want to buy or sell assets, providing more control and flexibility in executing trades. This feature can be particularly appealing to traders who employ specific trading strategies that rely on executing trades at predetermined price levels.

Moreover, TradeCoin may offer protection against MEV (Miner Extractable Value) bots. MEV refers to the manipulation of transaction order on the blockchain by miners to maximize their profits. By incorporating mechanisms to mitigate MEV risks, TradeCoin can enhance the security and fairness of trading activities for its users.

Finally, we will further promote our project on [Twitter](https://twitter.com/_TradeCoin_)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

Overall, the integration brings about a range of exciting opportunities for users. It enables seamless access to the blockchain, enhances user experience, and offers various advanced features that can attract traders who value efficiency and seek to optimize their trading strategies.
