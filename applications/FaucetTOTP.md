# Name of your Project

- **Team Name:** TurnaLabs
- **Payment Details:**
  - **DOT**: 13YqVAq8Yihh9FWHLT91wzKU7okFQueg4fgDGDVK4WZ8bi3k (Polkadot:DOT) 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1

## Project Overview :page_facing_up:

### Overview

A secure, sybil-resistant faucet for the Westend and Paseo testnets, enabling verified token claims using Google Authenticator.

The Westend & Paseo Testnet Faucet is a lightweight application designed for developers building on Polkadot. It enables them to receive test tokens securely by verifying their identity via TOTP (Time-based One-Time Password) using Google Authenticator. To prevent abuse, the system includes Redis-powered rate limiting to enforce a 24-hour claim cooldown per user.

We built this faucet to streamline the developer experience in the Polkadot ecosystem. Test tokens are essential for building and testing parachains and dApps, yet distributing them manually or with insecure faucets leads to sybil attacks or spam. Our solution offers a modern, developer-friendly and secure approach.

### Project Details

#### UI & Stack

- Frontend: React (Vite) + Material UI

- Backend: NestJS + Redis + Polkadot.js API

- Auth: TOTP (Google Authenticator)

- Redis: Used for storing OTP verifications and enforcing rate limits

- Polkadot RPCs: Westend and Paseo endpoints via WSS

![Image1](https://raw.githubusercontent.com/labturna/Faucet-TOTP/refs/heads/master/assets/ui.png)

#### Data Flow

1. User scans QR → Adds secret to Authenticator

2. User enters OTP + wallet address

3. Backend verifies OTP using speakeasy

4. If valid, backend sends tokens via Polkadot.js API

#### Deliverables Include

* Responsive web frontend

* Backend with RESTful endpoints:

    * /setup (generate secret)

    * /claim (verify TOTP and send tokens)

* Redis integration for 24h cooldown per user

* Support for both Westend and Paseo

### Ecosystem Fit

* Fit: This faucet is a direct utility dApp to support the growth and testing of parachains and dApps on Polkadot. It supports both current testnets: Westend and Paseo.

* Audience: Primarily developers building with Substrate/Polkadot who need test tokens for deployment, transactions, or parachain testing.

* Needs Met: Provides a secure, developer-friendly faucet with sybil resistance. Eliminates the need for social login, wallet signature, or captchas.

* Need Validation: This need is consistently raised on Element channels and GitHub repos for testnet projects (e.g., Polkadot-JS Apps, Ink! playgrounds). Existing faucets often suffer from abuse or manual verification delays.

* Similar Projects: Few public faucets exist, and they often use simplistic verification (e.g. reCAPTCHA or none). Our project uses TOTP, which is more secure and scalable.
    * [Substrate Faucet](https://github.com/OAXFoundation/substrate-faucet)
    * [Polkadot Testnet Faucet](https://github.com/paritytech/polkadot-testnet-faucet)
    * [Sybil Resistant Substrate Faucet](https://github.com/karooolis/sybil-resistant-substrate-faucet)

## Team :busts_in_silhouette:

### Team members

- Arslan Bilecen - Core Developer

### Contact

- **Contact Name:** Arslan Bilecen
- **Contact Email:** arslanblcn@proton.me

### Legal Structure

- **Registered Address:** Ankara / Turkiye
- **Registered Legal Entity:** -

### Team's experience

As a security engineer with 2 years of professional experience, I have developed a strong foundation in application security, including penetration testing, vulnerability assessment, and secure development practices. Alongside my professional role, I have explored full-stack development as a hobby, building various Web2 projects using technologies like React, Node.js, and Express.

Recently, I have shifted my focus toward the Web3 ecosystem, driven by a growing interest in decentralized technologies. I am actively learning and building within the Polkadot ecosystem, and this faucet project represents both my technical curiosity and my desire to contribute to meaningful infrastructure in the space.

In addition to this project, I received a grant from the DFINITY Foundation for my work on MoDojo, a learn-to-earn platform designed to teach developers the Motoko programming language through interactive coding challenges and dApp projects. This experience has further strengthened my ability to architect secure, developer-friendly applications within decentralized ecosystems.

### Team Code Repos

- [TurnaLabs](https://github.com/labturna)

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- [arslanblcn](https://github.com/arslanblcn)

### Team LinkedIn Profiles (if available)

- [Arslan Bilecen](https://www.linkedin.com/in/arslan-bilecen-27020a172/)


## Development Status :open_book:

- Public repo: [Faucet-TOTP](https://github.com/labturna/Faucet-TOTP)
- Core functionality implemented (frontend, backend, TOTP verification)
- QR generation, OTP verification, and token transfer working
- Deployed locally for testing; preparing for hosted version on Vercel/Fly.io
- Frontend and backend separation complete (Docker coming soon)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 6000 USD

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | README, detailed usage guide including backend setup instructions, API usage documentation, frontend interaction flow, and inline code comments for both frontend and backend components |
| **0c.** | Testing and Testing Guide | Unit tests for backend OTP and Redis functions |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language, and medium should reflect your target audience described above.) |
| 1. | Backend API | NestJS API with /setup and /claim endpoints |
| 2. | OTP Auth | TOTP-based Google Authenticator flow with speakeasy |
| 3. | Redis Logic | User-based rate limiter (24h claim cooldown) |
| 4. | Frontend UI | React + MUI claim form, QR generation, and OTP input |
| 5. | Faucet Transfers | Token transfers using Polkadot.js API on Westend & Paseo |

## Future Plans

- Add admin dashboard to track claim volume and abuse prevention
- Support other networks (e.g. Kusama testnets, parachain localnets)
- Integrate optional email-based OTP (for broader accessibility)

## Additional Information :heavy_plus_sign:

- Project is actively maintained and continuously tested locally.
- We plan to open-source it fully and invite community contributions after milestone 1.

**How did you hear about the Grants Program?** Web3 Foundation Dev Forum

