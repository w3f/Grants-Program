# Relaycode: An Improved Extrinsics Builder for Polkadot

- **Team Name:** Yogesh Kumar
- **Payment Details:** 
  - **DOT Address**: 13rG8sHiKv3JfhFA2ijzhrZBhPw9Dd2WfqjkPbxZmvGStZHb
  - **Payment**: USDC
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

Relaycode is an advanced extrinsics building platform that enhances the user experience for developers and users in the Polkadot ecosystem. It provides an intuitive interface for building and analyzing extrinsics, making it easier for both novice and experienced users to interact with the network.

Our project aims to simplify the process of creating and submitting extrinsics by offering:
1. A user-friendly interface for building extrinsics across all pallets
2. Real-time encoding and decoding of extrinsic data
3. Wallet integration for seamless signing and submission
4. Comprehensive documentation for each pallet and guides

Relaycode integrates directly with Substrate-based chains, focusing initially on Polkadot, moving on to Kusama and other parachains. It leverages the [Dedot](https://github.com/dedotdev/dedot) library to interact with the networks and provide real-time editing, encoding and decoding of extrinsics.

Our team is passionate about improving the developer experience in the Polkadot ecosystem. We believe that by simplifying the extrinsics building process, we can lower the barrier to entry for new developers and increase the efficiency of experienced ones.

### Project Details

![Relaycode Demo](https://raw.githubusercontent.com/itsyogesh/polkadot-hackathon-2024/refs/heads/main/singapore/27-Relaycode/docs/demo.gif)

- UI Components: We will provide a split-view interface with an extrinsic builder on the left and an information pane on the right. The builder will include dropdown menus for selecting pallets and functions, and input fields for parameters. The information pane will display encoded call data, call hash, and other relevant information.

- Technology Stack:
  - Frontend: React.js with TypeScript
  - State Management: React Context API
  - Styling: Tailwind CSS
  - UI Components: shadcn/ui
  - Blockchain Interaction: dedot
  - Wallet Integration: Polkadot.js extension/Talisman

We chose [dedot](https://github.com/dedotdev/dedot) over [polkadot-api/papi](https://github.com/polkadot-api/polkadot-api) for several reasons:
1. First-class inbuilt support for SCALE codecs in TypeScript, which is crucial for our project's performance in handling real-time changes.
2. Automatic fetching of metadata for any chain, simplifying our development process.
3. Better performance for type handling, which is essential for the real-time encoding and decoding features of Relaycode.

- Core Functionality:
  1. Dynamic loading of all available pallets and their respective functions
  2. Real-time encoding and decoding of extrinsic data
  3. Support for all input types across all pallets
  4. Wallet integration for signing and submitting extrinsics
  5. Color-coded display of encoded call data for easy understanding

- What Relaycode will not provide:
  1. Custom blockchain explorers or block navigators
  2. Extensive transaction history or account management features
  3. Support for non-Substrate based chains

### Ecosystem Fit

Relaycode fills a crucial gap in the Polkadot ecosystem by providing a more intuitive and user-friendly interface for building and analyzing extrinsics. While tools like Polkadot.js Apps offer similar functionality, Relaycode focuses on improving the user experience and lowering the barrier to entry for new developers.

Target Audience:
- Developers building on Substrate-based chains
- Parachain teams needing to test and debug extrinsics
- dApp developers integrating with Polkadot
- Blockchain researchers and auditors

Relaycode addresses the need for a more accessible and efficient extrinsics builder, as identified through:
- Feedback from the Polkadot developer community
- Discussions in Polkadot forums and social channels
- Personal experience with existing tools

## Team :busts_in_silhouette:

### Team members

- Yogesh Kumar
- 1 FTE (To be decided)

### Contact

- **Contact Name:** Yogesh Kumar
- **Contact Email:** itsyogesh@outlook.com
- **Website:** https://github.com/itsyogesh

### Legal Structure

- **Registered Address:** 5/12, West Patel Nagar, New Delhi, India - 110008
- **Registered Legal Entity:** Yogesh Kumar

### Team's experience

Yogesh Kumar has 10+ years of experience in fullstack development, with a focus on Blockchain development for the past 5 years. He has contributed to various projects and built products on Bitcoin, Ethereum and Polkadot ecosystem.

Our team has not previously applied for a Web3 Foundation grant.

### Team Code Repos

- https://github.com/itsyogesh
- https://github.com/itsyogesh/polkadot-hackathon-2024/blob/main/singapore/27-Relaycode/

### Team LinkedIn Profiles

- https://www.linkedin.com/in/itsyogesh

## Development Status :open_book:

Relaycode was initially developed as part of a hackathon project. The current prototype demonstrates the basic functionality of the extrinsics builder and information pane. We have implemented:

- A basic UI layout using React and Tailwind CSS
- Integration with the Dedot library for fetching pallet and function data
- Simple encoding and decoding of extrinsic data

[Hackathon Project](https://github.com/itsyogesh/polkadot-hackathon-2024/blob/main/singapore/27-Relaycode/README.md)

We have received positive feedback from the hackathon judges and participants, encouraging us to further develop and refine the project.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 — MVP Development and Basic Deployment

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 15,000 USD
- **DOT %:** 50%

|  Number | Deliverable                   | Specification                                                                                                                                            |
| ------: | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                       | Apache 2.0                                                                                                                                               |
| **0b.** | Documentation                 | We will provide basic documentation including: **Inline code documentation** and a **simple tutorial** explaining how to use the MVP version of Relaycode |
| **0c.** | Testing and Testing Guide     | We will develop unit tests covering the core encoding and decoding functions. A basic testing guide will be provided in the repository.                  |
| **0d.** | Docker                        | We will provide a Dockerfile to easily run the MVP version of Relaycode.                                                                                 |
|      1. | Basic UI Implementation       | Implement the basic split-view interface using React, Tailwind CSS, and shadcn/ui components.                                                            |
|      2. | Pallet and Function Selection | Implement dropdown menus for selecting pallets and their respective functions.                                                                           |
|      3. | Parameter Input Fields        | Create dynamic input fields for extrinsic parameters based on the selected function.                                                                     |
|      4. | Encoding and Decoding         | Implement real-time encoding and decoding of extrinsic data using dedot.                                                                                 |
|      5. | Information Pane              | Display encoded call data and call hash in the information pane.                                                                                         |
|      6. | Demo Deployment               | Deploy the MVP version of Relaycode to a cloud platform for demonstration purposes.                                                                      |

### Milestone 2 — Enhanced Functionality and Production Deployment

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 15,000 USD
- **DOT %:** 50%

|  Number | Deliverable                   | Specification                                                                                                                                                                                                 |
| ------: | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                       | Apache 2.0                                                                                                                                                                                                    |
| **0b.** | Documentation                 | We will provide comprehensive documentation including: **Detailed inline code documentation**, and an **in-depth tutorial** explaining all features of Relaycode API specifications for core functionality |
| **0c.** | Testing and Testing Guide     | We will expand our test suite to include integration tests and edge cases. A comprehensive testing guide will be provided.                                                                                    |
| **0d.** | Docker                        | We will update the Dockerfile for the production version of Relaycode.                                                                                                                                        |
|     0e. | Article                       | We will publish an article on Medium explaining the features and benefits of Relaycode for the Polkadot ecosystem.                                                                                     |
|      1. | UI Refinement                 | Enhance the user interface with responsive design and improved user experience based on feedback from Milestone 1.                                                                                       |
|      2. | Wallet Integration            | Integrate with the Polkadot.js extension/Talisman for signing and submitting extrinsics.                                                                                                                               |
|      3. | Error Handling and Validation | Implement robust error handling and input validation to provide clear feedback to users.                                                                                                                      |
|      4. | Performance Optimization      | Optimize the application for fast loading and responsive interaction, even when dealing with complex extrinsics.                                                                                              |
|      5. | Production Deployment         | Deploy the full version of Relaycode to a production environment with proper security measures.                                                                                                               |

## Future Plans

Short-term plans:
- Gather user feedback and implement iterative improvements
- Create video tutorials and host webinars to promote Relaycode and educate the community

Long-term vision:
- Expand Relaycode to support other Substrate-based chains beyond Polkadot
- Develop additional features such as extrinsic templates and a visual extrinsic builder
- Explore possibilities for integration with other tools in the Polkadot ecosystem

To ensure long-term maintenance and development:
- We plan to seek additional funding through ecosystem grants and potentially through a decentralized autonomous organization (DAO) specifically created for Relaycode
- We will build a community around Relaycode, encouraging open-source contributions
- We will explore partnership opportunities with parachain teams and other projects in the ecosystem

## Referral Program :moneybag: 

- **Referrer:** AwesomeDOT(Fardeen Haque)
- **Payment Address:** 12uoF3PZxDBURLVqj5DAJiyUADiqdCYwhq27wAmr2ML1L7fG (Polkadot Asset Hub)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We were encouraged to apply by the hackathon organizers after presenting our project.

- We have already developed a working prototype as part of the hackathon, which demonstrates the core functionality of Relaycode.
- Our team is committed to the long-term development of this project and sees it as a valuable contribution to the Polkadot ecosystem.
- We are open to feedback and suggestions from the Web3 Foundation team to further align our project with the needs of the ecosystem.
