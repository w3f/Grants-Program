# Pass3

- **Team Name:** AtScale Technologies
- **Payment Address:** 1WPF8Zi6BfRvedsXDMDc3oF1CPZk8tfev94abGdPGeXcdzq - Polkadot - USDT 
- **Level:** 3

## Project Overview :page_facing_up:

This application is in response to the [Social Recovery Wallet RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/social-recovery-wallet.md)

### Overview

Pass3 is a crypto wallet, engineered for simplicity without compromising security. It leverages Passkeys for effortless wallet setup and employs a social guard system for account recovery in case of device loss. Built as a mobile-first web application, Pass3 ensures seamless functionality across both mobile and desktop platforms.

Pass3 is crafted for Polkadot Ecosystem and seamlessly compatible with the any Substrate-based chain, contributing to interoperability and enhanced functionality across these networks.

As regular Web3 users ourselves, we understand firsthand the complexities and challenges associated with traditional crypto wallets. With Pass3, we aim to tackle these pain points head-on, simplifying the user experience without compromising on security and functionality.

### Project Details

#### Wireframes

**Sign Up**

<img width="1183" alt="SignUp01" src="https://github.com/atscaletech/Grants-Program/assets/92568442/7042c649-eb67-42eb-b8d6-76a519c1d621">
<img width="1308" alt="SignUp02" src="https://github.com/atscaletech/Grants-Program/assets/92568442/d9172369-6074-485b-a264-808c477abc55">

**Sign In**

<img width="1281" alt="Sign In" src="https://github.com/atscaletech/Grants-Program/assets/92568442/714156d7-7e0a-43cb-81b3-3743fd737a52">


**Asset Management**

<img width="1386" alt="ManageAssets" src="https://github.com/atscaletech/Grants-Program/assets/92568442/1dc13bc5-d508-45d8-9144-f2c32859c0f6">


**Setup Recovery**

<img width="1257" alt="SetupRecovery-01" src="https://github.com/atscaletech/Grants-Program/assets/92568442/fac46369-2a77-47a8-be9b-a1ba6f04cb35">
<img width="1161" alt="SetupRecovery-02" src="https://github.com/atscaletech/Grants-Program/assets/92568442/50f3d075-da75-4d91-ac17-f090bffef856">


**Recovery Process**

<img width="1393" alt="Recovery Process" src="https://github.com/atscaletech/Grants-Program/assets/92568442/f0926481-1eac-4c7a-b0a4-236753bf49ce">


**Wallet Link**

<img width="1396" alt="WalletLink" src="https://github.com/atscaletech/Grants-Program/assets/92568442/2eeb4f03-ce0a-497a-89bb-fa1b59263b6e">


#### Technical Stacks

**Passkeys**
A passkey is a digital credential that is used as an authentication method for a website or application. The passkeys standard is a type of passwordless authentication, promoted by the World Wide Web Consortium and the FIDO Alliance.

For additional references, please see:
- https://fidoalliance.org/passkeys/
- https://developer.apple.com/passkeys/
- https://developers.google.com/identity/passkeys
- https://www.microsoft.com/en-us/security/blog/2023/05/04/how-microsoft-can-help-you-go-passwordless-this-world-password-day/

**Frontend:** ReactJs
**Backend:**
- Typescript
- Nest.Js
- PostgresQL

**Devops:**
- Docker
- AWS and Terraform

**CI/CD:** Github Actions

#### Notes
The wireframe provided are of low fidelity, implying that the final product's design might differ somewhat. Nonetheless, the fundamental logic and features should stay the same.

### Ecosystem Fit
Pass3 is a wallet specifically designed for the Polkadot Ecosystem. We believe it will significantly enrich the ecosystem. Primarily aimed at entry-level users, Pass3 intends to make the initiation into Web3 as barrier-free as possible. Moreover, we anticipate that Pass3 will elevate the user experience within the Polkadot Ecosystem, relieving users of the burden of key management. Despite the variety of wallets already present in the ecosystem, we're confident that Pass3 will provide a uniquely enhanced user experience.

## Team :busts_in_silhouette:

### Team members

- Andrew Le - Team Leader
- Luke Nguyen - Fullstack Software Engineer
- Anthony Dong - Product Advisor

### Contact

- **Contact Name:** Andrew Le
- **Contact Email:** andrew@atscale.xyz
- **Website:** https://atscale.xyz

### Legal Structure

- **Registered Address:** 68 Circular Road , #02-01 , 049422, Singapore
- **Registered Legal Entity:** AtScale Technologies Pte. Ltd.

### Team's experience

AtScale Technologies is a team specialized in Web3 product development. We aim to rely on Web3 technologies to solve real-world problems and facilitate blockchain-based products to mass adoption.

**Andrew Le:** Andrew is an ardent Web3 enthusiast, passionately believes in Web3's future. His experience includes over seven years in software development, supplemented by two years specifically focused on crafting payment solutions within the Web3 era.

**Luke Nguyen:** Luke is a seasoned full-stack engineer with nearly a decade of experience in software development. His expertise particularly shines in front-end implementation, where he prioritizes high performance and an outstanding user experience.

**Anthony Dong:** Anthony successfully built and exited several internet startups during the last ten years. Anthony was the CTO in his recent company, helping the company bootstrapped from zero to $20 million ARR (Annual Recurring Revenue) in 3 years.

Our team has previously applied for a grant to implement a [decentralized payment network](https://github.com/atscaletech/Grants-Program/blob/master/applications/Libra.md) and successfully delivered on it.

### Team Code Repos

#### Team

- https://github.com/atscaletech/libra
- https://github.com/atscaletech/libra-js

#### Team members

- https://github.com/andrwlt
- https://github.com/antdo
- https://github.com/Lukenguyen099

### Our team product
- https://golibra.xyz

## Development Status :open_book:
As previously noted, part of our project aligns with the [Social Recovery Wallet RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/social-recovery-wallet.md). I have also had a call with David from W3F to gather feedback before the submission of this application.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** 60,000 USD

### Milestone 1 - Core functionalities

- **Estimated duration:** 2 months
- **FTE:**  2,5
- **Costs:** 20,000 USD 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use the wallet and how it works |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | CI/CD | We will provide CI/CD setup files as GitHub Actions for code checking, automated testing, and deployment. |
| 2. | Infrastructure | We will provide infrastructure code using Terraform, enabling effortless AWS infrastructure bootstrapping. |
| 3. | Web Application | We will develop a mobile-first web application featuring sign-up, sign-in, and asset management functionalities as outlined in the provided wireframe. |
| 4. | Backend Services | We will deliver backend services for sign-up, sign-in, and asset management features. |


### Milestone 2 — Backup and recovery

- **Estimated duration:** 2 months
- **FTE:**  2,5
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use the recovery and backup features, how it works and setup guide |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Feature: Social Recovery | We will implement the social recovery setup and management screens as depicted in the above wireframe. |
| 2. | Feature: Recover Wallet | We will implement recover screens as depicted in the above wireframe. |
| 3. | Feature: Encrypted Cloud Backup | We will implement feature allow user encrypt and sync the key to the cloud storage|
| 4. | Feature: Notifications | We will implement email notifications for balance updates and security alerts, such as recovery initiation prompts.  |
| 5. | Backend Services | We will implement the backend services for 1, 2, 3, 4 sections  |


### Milestone 3 — Wallet Link

- **Estimated duration:** 2 months
- **FTE:**  2,5
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use the wallet link |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Feature: Wallet Link Builder | We will implement a page builder that allows users to create and customize their public wallet profile. |
| 2. | Feature: Wallet Link Template | We will implement wallet profile templates to enable users to start creating their wallet profiles with minimal configuration. |
| 3. | Feature: Wallet Link Public Page | We will implement public wallet profile that show pages created by builder in session 1. |
| 4. | Feature: Payment Link | We will implement a payment page to facilitate the collection of cryptocurrencies from others or for self-deposit, minimizing the risk of errors. |
| 5. | Backend Services | We will implement the backend services for 1, 2, 3, 4 sections |


## Future Plans
Our plan is to roll out the product in the Polkadot Ecosystem following each milestone. This will allow us to gather feedback to refine existing features and incorporate additional ones if needed.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
