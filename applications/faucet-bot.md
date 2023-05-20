# W3F Grant Proposal

- **Project Name:** Generic sybil-resistant chat based faucet bot
- **Team Name:** Nikita Orlov PR
- **Payment Address:** 0x49F19FA78C4E766b8C5592e53CC35b1411a5E11f (USDC/DAI)
- **Level:** 1

## Project Overview

### Overview

Sybil-resistant faucet is a generic chat bot based faucet solution that can be used on any existing parachain (substrate-based chain, either pallets or ink! smart contracts). 

### Project Details

#### Mockup

    bot that handle all messages like /request {wallet_public_address}, and trying to send tokens if it eligible

#### Technology stack

- Golang
- Redis
- Discord sdk (go)
- Matrix sdk (go)

#### Architecture

![architecture](https://raw.githubusercontent.com/StringNick/sybil-resistant-chat-bot-substrate-faucet/main/arch.png)

#### Configuration

To make the faucet generic, it will store its configuration settings in `.env` file which will include the following settings:

- `DRIP_CAP` - how many tokens to send per request
- `DRIP_DELAY` - how often user's can request to drip tokens (in ms)
- `REDIS_ENDPOINT` - Redis instance endpoint
- `RPC_ENDPOINT` - Substrate node endpoint
- `FAUCET_ACCOUNT_MNEMONIC` - mnemonic of faucet's wallet

Based on addons, it can be credentials for any platform, what will be used, in based version discord/matrix.

### Ecosystem Fit

Many dApps are facing an issue where it’s difficult to onboard new users. Thus, the goal is to simplify the process by making it easier for parachain and dApp developers to spin up their own faucets, and give users free tokens without people exploiting the system. In order to make the system sybil-resistant, centralised solutions like Discord, Matrix and any other chat based platforms, that will uniquely identify users, and enable requesting tokens to the account only once per given time period.

Some similar projects include:
- https://github.com/paritytech/substrate-matrix-faucet
- https://github.com/OAXFoundation/substrate-faucet

## Team

### Team members

- Nikita Orlov 

### Contact

- **Contact Name:** Nikita Orlov
- **Contact Email:** stringnickq@gmail.com
- **Matrix:** rozeme@matrix.org

### Legal Structure

- **Registered Address:** Jurija Gagarina 231, Beograd
- **Registered Legal Entity:** Nikita Orlov PR

### Team's experience

ETH Waterloo 2019 hackathon prize-winner, is a engineer with over 8 years of experience in development and integration of fault-tolerant high-loaded SaaS IT solutions including relevant experience in blockchain solutions.

### Team Code Repos

- * https://github.com/stringnick

### Team LinkedIn Profiles

- * https://www.linkedin.com/in/nikita-orlov-aa6910186/

## Development Roadmap

### Overview

- **Total Estimated Duration:** 1.5 month
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** 7,500 USD

### Milestone 1 — Implement the Faucet

- **Estimated duration:** 1.5 month
- **FTE:** 1.5
- **Costs:** 7,500 USD

| Number | Deliverable                       | Specification                                                                                                                                                              |
| -----: | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                           | Apache 2.0                                                                                                                                                                 |
|    0b. | Documentation                     | I will provide both **inline documentation** of the code and a **tutorial** that explains how a developer can spin up his/her own faucet.                                  |
|    0c. | Testing Guide                     | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.                           |
|    0d. | Article                           | I will publish an **article** that explains how the faucet works, why it was created, and how it can be used by developers.                                                |
|     1. | Universal message interface (UMI) | I will create module with universal interface of methods that unify all chat providers, that support send/read messages, for quickly and easy integration of new providers |
|     2. | Discord                           | I will create module that support UMI                                                                                                                                      |
|     3. | Matrix                            | I will create module for discord authorization, message handlings                                                                                                          |
|     4. | Wallet status                     | I will create a module for checking whether user is eligible to receive free tokens                                                                                        |
|     5. | Faucet drip                       | I wil create a module that will send user free tokens if eligible                                                                                                          |

## Future Plans

- Keep adding another chat providers.
- Keep maintaining the project in case of potential issues.
- Analytics for owner with dashboard UI.
