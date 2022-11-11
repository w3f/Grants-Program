# W3F Grant Proposal

- **Project Name:** Generic sybil-resistant faucet
- **Team Name:** MB Karolio reikalai
- **Payment Address:** 0xc3e6eFA4D0847203dD4E19B7D114516Eb45840EC (DAI)
- **Level:** 1

## Project Overview :page_facing_up:

### Overview

Sybil-resistant faucet is a generic browser-based faucet solution that can be used on any existing parachain (substrate-based chain, either pallets or ink! smart contracts).

### Project Details

#### Mockup

![mockup](https://user-images.githubusercontent.com/3159964/182354014-6cee3694-af8a-4585-8eaf-348365981716.png)

#### Technology stack

- Next.js
- TypeScript
- Tailwind
- Redis
- @polkadot{.js}

#### Architecture

![architecture](https://user-images.githubusercontent.com/3159964/182353857-8784b612-154f-458f-b7d8-b81e0fb51f90.png)

#### Configuration

To make the faucet generic, it will store its configuration settings in `.env` file which will include the following settings:

- `DRIP_CAP` - how many tokens to send per drip
- `DRIP_DELAY` - how often user's can request to drip tokens (in ms)
- `REDIS_ENDPOINT` - Redis instance endpoint
- `RPC_ENDPOINT` - Substrate node endpoint
- `PORT` - Substrate node port
- `FAUCET_ACCOUNT_MNEMONIC` - mnemonic of faucet's wallet
- `NEXTAUTH_ENDPOINT` - authentication endpoint
- `NEXTAUTH_JWT_SECRET` - used to encrypt JWT tokens
- `TWITTER_CLIENT_ID` - Twitter client ID
- `TWITTER_CLIENT_SECRET` - Twitter client secret
- `GITHUB_CLIENT_ID` - GitHub client ID
- `GITHUB_CLIENT_SECRET` - GitHub client secret

### Ecosystem Fit

Many dApps are facing an issue where it’s difficult to onboard new users. Thus, the goal is to simplify the process by making it easier for parachain and dApp developers to spin up their own faucets, and give users free tokens without people exploiting the system. In order to make the system sybil-resistant, centralised solutions like Twitter or GitHub login will be integrated, that will uniquely identify users, and enable dripping tokens to the account only once per given time period.

Some similar projects include:
- https://github.com/paritytech/substrate-matrix-faucet
- https://github.com/OAXFoundation/substrate-faucet

## Team :busts_in_silhouette:

### Team members

- Karolis Ramanauskas: full-stack developer & product designer

### Contact

- **Contact Name:** Karolis Ramanauskas
- **Contact Email:** hi@krl.is
- **Website:** https://krl.is/

### Legal Structure

- **Registered Address:** Liepų g. 83, Klaipėda 92195
- **Registered Legal Entity:** MB Karolio reikalai

### Team's experience

Karolis is product-minded software engineer who enjoys the challenge of creating pleasant, easy-to-use user experiences. He has worked on large-scale projects for his employers, as well as side-projects of his own. Some of the most notable experiences include building observability tools used by thousands of engineers at Uber that alert and help resolve new incidents, and enable to build more reliable services. He has also worked on a design system for Volvo Cars, and then became responsible for building tools to replace existing translation processes at the company to make them more effective.

### Team Code Repos

- * https://github.com/karooolis

### Team LinkedIn Profiles

- * https://www.linkedin.com/in/karolisram/

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 4,000 USD

### Milestone 1 — Implement the Faucet

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a **tutorial** that explains how a developer can spin up his/her own faucet. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests. |
| 0d. | Article | I will publish an **article** that explains how the faucet works, why it was created, and how it can be used by developers.
| 1. | User Interface | I will create faucet UI with Tailwind. It will include address form, login buttons, as well as error and success states. |  
| 2. | Authentication | I will create a module for 0Auth user authentication that will uniquely identify users and make faucet sybil-resistant. |  
| 3. | User status | I will create a module for checking whether user is eligible to receive free tokens. |  
| 4. | Faucet drip | I wil create a module that will send user free tokens if eligible. |

## Future Plans

- Keep adding additional 0Auth options or other features if needed.
- Keep maintaining the project in case of potential issues.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Developer DAO
