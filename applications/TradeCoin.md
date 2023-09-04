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

We believe that choosing Rust over Python or JavaScript for the development of TradeCoin has several advantages.

Performance: Rust is a systems programming language that prioritizes performance. It provides low-level control over memory and resources, allowing for efficient execution of code. This is particularly important for a trading bot that requires quick and responsive execution of trades.

Safety: Rust's strict compile-time checks and memory safety guarantees help in preventing common programming errors such as null pointer dereferences, buffer overflows, and data races. This reduces the likelihood of bugs or vulnerabilities that could potentially impact the security and reliability of the trading bot.

Concurrency: Rust's ownership and borrowing system ensure thread safety and enable concurrent programming without the need for locks or other synchronization mechanisms. This can be particularly beneficial in a trading bot that may need to process multiple requests simultaneously.

Ecosystem: Rust has a rapidly growing ecosystem with a variety of libraries and crates that can be leveraged for building reliable and efficient software. The Rust crates mentioned in [substrate docs](https://docs.substrate.io/learn/architecture/) and telebot (https://docs.rs/telebot/latest/telebot/) provide ready-to-use functionalities for interacting with Polkadot and building Telegram bots, respectively.

Considering these advantages, Rust is a suitable choice for developing TradeCoin, ensuring high performance, safety, concurrency, and access to a rich ecosystem of libraries and tools.



### Ecosystem Fit

We take inspiration from the latest trend in the blockchain ecosystem which we aim to replicate on polkadot.

Unibot is a Telegram bot that allows users to trade cryptocurrencies without leaving the Telegram app. Unibot offers various features, such as decentralized copy trading, limit orders on decentralized exchanges (DEXs), protection against MEV (Miner Extractable Value) bots, and more. The platform has gained momentum and has shown significant growth in trade volume, revenue, and user counts over the last two months. Unibot also has its native token called UNIBOT, with holders receiving a portion of transaction fees and trading volume.

The UNIBOT has seen substantial user growth and has facilitated trades worth $54 million, distributing nearly $1 million in revenue back. Holders of UNIBOT tokens receive rewards of 40% of transaction fees and 1% of the platform's total trading volume.

The appeal of Unibot and other Telegram-based trading bots lies in their user-friendly interface, providing ease of use compared to decentralized exchanges like Uniswap. With Unibot, traders can execute market buy/sell orders through a simple Telegram command, eliminating the need for continuous wallet logins and cross-checking token information. This streamlined process is particularly advantageous for fast swaps and scalping strategies, attracting traders who value efficiency and.

Unibot's success has received endorsement from the crypto community, with popular crypto traders on Twitter praising the platform's user experience and its advantage of trading directly through Telegram for various trading strategies. As a result, newer tokens like WagieBot, 0xSniper, Bridge, and Bolt have experienced significant growth, emulating Unibot's trajectory.

## Team :busts_in_silhouette:

### Team members

- Alexandr Fedotov

### Contact

- **Contact Name:** Alexandr Fedotov
- **Contact Email:** alexkekfedotov@gmail.com
- **Website:** trade-coin-xi.vercel.app/

### Legal Structure

Individual

### Team's experience

Our project won in XDC hackathon. Previously, its name was "XRC-Swap" 
https://xdc.devpost.com/project-gallery

Also, our project was a finalist on "TRON DAO". This thread has had a lot of comments and positive feedback.

https://forum.trondao.org/t/overview-of-the-tradecoin-project/16511

The project also participated in the "FVM Impact Evaluator". Follow the link you can find us:

https://spacewarp.fvm.dev/#ie

### Team Code Repos

- https://github.com/AlexFedotovqq/TradeCoin

- https://github.com/AlexFedotovqq

### Team LinkedIn Profiles (if available)

No

## Development Status :open_book:

Researching specification to better fit into polkadot ecosystem.

https://docs.google.com/document/d/1lvy1vcGz_uXYZ3TYdkrk1hZPpuvMrHh13zsgooCKf00/edit?usp=sharing

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** $10000

### Milestone 1: Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1a. | Bot setup | Telegram bot in rust. |
| 1b. | keypairs | The bot should be capable of creating multiple wallets, importing and exporting private keys safely. |
| 1c. | integrations | The bot integrates with polkadot and kusama. |
| 2. | UI | Landing Page in NextJs that links to the telegram bot. |

### Milestone 2 — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT|
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains how to use TradeCoin and how it was build. |
| 1. | Network access | We will access Substrate runtimes from the bot and process live data on the server to make rust client as lightweight as possible. |
| 2. | DeFi integration | We will connect to at least two DeFi protocols such as Parallel Finance / HydraDX / etc. and conduct multiple trades with just one click. |

## Future Plans

This integration opens up possibilities for various features and functionalities within TradeCoin. For example, users may be able to engage in decentralized copy trading, which enables them to automatically copy the trading strategies of successful traders on Polkadot. This feature can attract traders who value efficiency and seek to maximize their trading opportunities.

Additionally, limit orders allow traders to set specific price levels at which they want to buy or sell assets, providing more control and flexibility in executing trades. This feature can be particularly appealing to traders who employ specific trading strategies that rely on executing trades at predetermined price levels.

Moreover, TradeCoin may offer protection against MEV (Miner Extractable Value) bots. MEV refers to the manipulation of transaction order on the blockchain by miners to maximize their profits. By incorporating mechanisms to mitigate MEV risks, TradeCoin can enhance the security and fairness of trading activities for its users.

Finally, we will further promote our project on [Twitter](https://twitter.com/_TradeCoin_)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

Overall, the integration brings about a range of exciting opportunities for users. It enables seamless access to the blockchain, enhances user experience, and offers various advanced features that can attract traders who value efficiency and seek to optimize their trading strategies.
