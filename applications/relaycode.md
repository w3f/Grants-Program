# Relaycode: An Improved Extrinsics Builder for Polkadot

- **Team Name:** Eva Interactive Co.
- **Payment Details:** 
  - **DOT**: [Your Polkadot address]
  - **Payment**: [USDC/USDT Polkadot AssetHub address or Fiat payment details]
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

<img src="https://raw.githubusercontent.com/itsyogesh/polkadot-hackathon-2024/refs/heads/main/singapore/27-Relaycode/docs/demo.gif" alt="Relaycode Demo" width="500">

- UI Components: We will provide a split-view interface with an extrinsic builder on the left and an information pane on the right. The builder will include dropdown menus for selecting pallets and functions, and input fields for parameters. The information pane will display encoded call data, call hash, and other relevant information.

- Technology Stack:
  - Frontend: React.js with TypeScript
  - State Management: React Context API
  - Styling: Tailwind CSS
  - UI Components: shadcn/ui
  - Blockchain Interaction: dedot
  - Wallet Integration: Polkadot.js extension/Talisman

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

Relaycode fills a crucial gap in the Polkadot/Kusama ecosystem by providing a more intuitive and user-friendly interface for building and analyzing extrinsics. While tools like Polkadot.js Apps offer similar functionality, Relaycode focuses on improving the user experience and lowering the barrier to entry for new developers.

Target Audience:
- Developers building on Substrate-based chains
- Parachain teams needing to test and debug extrinsics
- dApp developers integrating with Polkadot/Kusama
- Blockchain researchers and auditors

Relaycode addresses the need for a more accessible and efficient extrinsics builder, as identified through:
- Feedback from the Polkadot developer community
- Discussions in Polkadot forums and social channels
- Personal experience with existing tools

Similar Projects:
- Polkadot.js Apps: While it offers an extrinsics submitter, it lacks the user-friendly interface and real-time encoding/decoding features of Relaycode.
- Substrate Front-End Template: Provides basic extrinsics functionality but is not as comprehensive or user-friendly as Relaycode.

Relaycode distinguishes itself through its focus on user experience, real-time data presentation, and comprehensive support for all pallet functions and input types.

## Team :busts_in_silhouette:

### Team members

- Yogesh Kumar

### Contact

- **Contact Name:** Yogesh Kumar
- **Contact Email:** itsyogesh@outlook.com
- **Website:** https://github.com/itsyogesh

### Legal Structure

- **Registered Address:** 190, Baba Farid Puri, New Delhi, India
- **Registered Legal Entity:** Eva Interactive Co.

### Team's experience

Yogesh Kumar has 10+ years of experience in fullstack development, with a focus on Blockchain development for the past 5 years. He has contributed to various projects and built products on Bitcoin, Ethereum and Polkadot ecosystem.


Our team has not previously applied for a Web3 Foundation grant.

### Team Code Repos

- https://github.com/[your_organisation]/relaycode
- https://github.com/[your_organisation]/[other_relevant_project]

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
- **Total Costs:** 26,000 USD
- **DOT %:** 50%

### Milestone 1 — Enhanced Functionality and Production Readiness

- **Estimated Duration:** 2 months
- **FTE:** 2
- **Costs:** 26,000 USD

|  Number | Deliverable                   | Specification                                                                                                                                                                                            |
| ------: | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                       | Apache 2.0                                                                                                                                                                                               |
| **0b.** | Documentation                 | We will provide comprehensive documentation including: <br>- Inline code documentation<br>- A tutorial explaining how to use Relaycode<br>- API specifications for core functionality                    |
| **0c.** | Testing and Testing Guide     | We will develop unit tests covering all core functions. Integration tests will be implemented to ensure proper interaction with the Polkadot.js API. A testing guide will be provided in the repository. |
| **0d.** | Docker                        | We will provide a Dockerfile to easily run a demo version of Relaycode.                                                                                                                                  |
|     0e. | Article                       | We will publish an article on Medium explaining the features and benefits of Relaycode for the Polkadot/Kusama ecosystem.                                                                                |
|      1. | UI Enhancement                | We will refine the user interface using shadcn/ui components, implementing a responsive design for various screen sizes.                                                                                 |
|      2. | Comprehensive Pallet Support  | We will ensure that Relaycode supports all input types across all pallets, with proper encoding and decoding.                                                                                            |
|      3. | Real-time Data Updates        | Implement real-time updates of encoded call data and call hash as users input parameters.                                                                                                                |
|      4. | Wallet Integration            | Integrate with the Polkadot.js extension for signing and submitting extrinsics.                                                                                                                          |
|      5. | Error Handling and Validation | Implement robust error handling and input validation to provide clear feedback to users.                                                                                                                 |
|      6. | Performance Optimization      | Optimize the application for fast loading and responsive interaction, even when dealing with complex extrinsics.                                                                                         |
|      7. | Deployment                    | Deploy Relaycode to a cloud platform for public access, with proper security measures in place.                                                                                                          |

## Future Plans

Short-term plans:
- Gather user feedback and implement iterative improvements
- Create video tutorials and host webinars to promote Relaycode and educate the community

Long-term vision:
- Expand Relaycode to support other Substrate-based chains beyond Polkadot and Kusama
- Develop additional features such as extrinsic templates and a visual extrinsic builder
- Explore possibilities for integration with other tools in the Polkadot ecosystem

To ensure long-term maintenance and development:
- We plan to seek additional funding through ecosystem grants and potentially through a decentralized autonomous organization (DAO) specifically created for Relaycode
- We will build a community around Relaycode, encouraging open-source contributions
- We will explore partnership opportunities with parachain teams and other projects in the ecosystem

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We were encouraged to apply by the hackathon organizers after presenting our project.

- We have already developed a working prototype as part of the hackathon, which demonstrates the core functionality of Relaycode.
- Our team is committed to the long-term development of this project and sees it as a valuable contribution to the Polkadot ecosystem.
- We are open to feedback and suggestions from the Web3 Foundation team to further align our project with the needs of the ecosystem.
