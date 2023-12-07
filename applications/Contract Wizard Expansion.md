# Contract Wizard Expansion
​
- **Team Name:** Protofire
- **Payment Address:** 0xD662E05ce522B3861b70FC376F60bF50E200abfA (USDC - Ethereum network)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3 
​
## Project Overview :page_facing_up:
​
This is the last phase of the Contract Wizard project, our primary objective is to significantly enhance the functionality and versatility of our users contract creation process. Building on the success of the previous phases, this phase aims to introduce a broader range of smart contract standards and a novel feature allowing users to inject custom code.
​
### Overview:
​
At this stage of the Polkadot Contract Wizard, we aim to further improve the tool by adding more templates and the ability for users to write custom code in the final step of contract creation. This templates will include the integration of additional contracts such as a payment splitter, a proxy, a vault with a time-lock, and a simple flipper. This last addition will provide users with basic structures to build contracts without starting from scratch.
​
#### Proposed Features:
​
1.- **Integration of New Templates**: Adding templatess like a payment splitter, proxy, vault with time-lock, and a simple flipper.

2.- **Support latest OpenBrush version**: Upgrade the contracts to the latest OpenBrush version that's already audited by OpenZeppelin.

3.- **Robust Authentication Mechanism**: Implementing an advanced authentication to check the identity of the connected wallet. This feature will ensure that only authorized users can perform specific actions within the wizard application.

4.- **Custom Code Writing Capability**: This feature allows users to write custom code directly on the browser, which will simplify contract creation and testing. This, eliminates the need to install any software in the users computer. Prototypes can be tested directly by deploying the generated code to the blockchain.

5.- **Optimized User Interface**:  We will refine the user interface to seamlessly incorporate new features and guarantee a user-friendly experience. Building on our successful track record, we aim to craft a polished interface that caters to both existing and new users, ensuring a fluid and intuitive interaction.

6.- **Documentation and Tutorials**: Providing comprehensive documentation and tutorials to assist users in utilizing the new features effectively. 
​
#### Goals for Phase 3:
​
- Offer a broader range of contract templates and standards to cater to diverse user needs.
- Enable advanced users to add custom functionalities to their contracts.
- Provide a tool with no installation for teachers and educators.
- Maintain and enhance the user-friendly nature of the tool.
- Support the growing needs of the Polkadot and Kusama ecosystem communities.
- Be up to date to the audited version of the contracts.
- Provide authentication mechanism to be able to identify a wallet connected api calls.
​
#### Team's Approach:
The team plans to leverage their experience and community feedback, incorporating features that align with the evolving needs of users. The focus will be on maintaining the platform's ease of use while introducing advanced functionalities.
​
## Project Details 

#### <a name="step1"></a> Integration of New Templates
**Objective**: To expand the range of contract templates available in the Polkadot Contract Wizard.
**Details**:
- *Payment Splitter*: Implement a template for a contract that can split incoming payments among different addresses based on predetermined shares.
- *Proxy Contract*: Add a proxy contract standard. 
- *Vault with Time-Lock*: Introduce a vault contract template with the ability to introduce a time-lock feature, enabling delayed withdrawals and enhancing security.
- *Flipper*: Include a basic flipper contract as a foundational template for users to understand and build upon.
​
#### <a name="step2"></a> Support latest OpenBrush version
**Objective**: Provide the latest OpenBrush version.
**Details**:
- *Update Ink! version*: Upgrade to the audited version to be up to date with the community standards.

#### <a name="step3"></a> Robust Authentication Mechanism
**Objective**: To implement a secure and efficient authentication for verifying wallet ownership and permissions.
**Details**:
- *Wallet Authentication*: Develop an authentication for the connection of a wallet, ensuring that the user is the legitimate owner by signing a message.
- *Permission Checks*: Integrate a system to verify that the connected wallet has the necessary permissions to perform specific actions.
- *Security Enhancement*: By confirming the identity and permissions of wallet holders, add an extra layer of security.
- *User Verification Interface*: Design a user-friendly interface within the Contract Wizard that allows users to easily authenticate and verify their wallets.

#### <a name="step4"></a> Custom Code Writing Capability
**Objective**: To enable users to write and integrate custom code into their contracts in the final step of the contract creation process.
**Details**:
- *Custom Code Editor*: Turn the code preview into a code editor within the Contract Wizard interface, allowing users to write or paste their custom code.
- *Syntax highlighting*: Implement real-time syntax highlighting to assist users in writing error-free code.
- *Compilation and Integration*: Compile and integrates your code seamlessly with the chosen contract template. Add a section to be able to check the compiling errors or compilation success.
​
#### <a name="step5"></a> Optimized User Interface
**Objective**: To update and improve the user interface to accommodate new features and ensure a smooth user experience.
**Details**:
- *UI Design for New Templates*: Design and implement user interface elements for the new contract standards.
- *Interactive Code Editor Interface*: Develop a user-friendly interface for the custom code editor, ensuring ease of use for both novice and experienced users.
- *Step-by-Step Guidance*: Provide clear, step-by-step instructions and tooltips within the UI to guide users through the process of using new features.
- *Editor opening*: Provide a way to access the editor directly with a single click from the interface
- *Load templates button*: This button will enable the ability to import some templates in the UI to simplify the blueprint selection when producing custom smart contracts.
​
#### <a name="step6"></a> Documentation and Tutorials
**Objective**: To provide users with the necessary resources to understand and effectively use the new features.
**Details**:
- *Updated Documentation*: Create comprehensive documentation covering the new contract templates and custom code functionality.

### Ecosystem Fit
​
The Polkadot Contract Wizard aims to streamline the onboarding process and enhance usability within the Polkadot and Kusama ecosystem.
​
This project will contribute to the ecosystem in the following ways:
​
1. **Simplifying smart contract creation**: The Polkadot Contract Wizard will offer a user-friendly interface that allows individuals with varying levels of technical expertise to create smart contracts without the need for extensive programming knowledge. This will empower more people to participate in the ecosystem and explore the possibilities offered by smart contracts.
​
2. **Enhancing user experience**: By providing video tutorials, detailed documentation, and an intuitive interface, we will create a welcoming environment for new users, making it easier for them to get started with smart contracts on Polkadot and Kusama.
​
3. **Expanding the ecosystem's reach**: With the inclusion of multiple chains and custom contract creation, the Polkadot Contract Wizard will cater to a broader audience, encouraging more projects and developers to join the Polkadot and Kusama ecosystem.
​
4. **Encouraging community growth and collaboration**: By offering comprehensive support and resources, we aim to foster a strong, collaborative community around the Polkadot Contract Wizard, encouraging users to share their experiences, contribute to the project, and help one another succeed.
​
5. **Driving innovation and adoption**: By simplifying the process of working with smart contracts, we hope to inspire more users to experiment with new ideas and solutions, driving innovation and adoption within the Polkadot and Kusama ecosystem.
​
## Team :busts_in_silhouette:
​
### Team members
​
- Luca Auet (Rust Engineer)
- Matias Dastugue (Front-end engineer)
- Gabriel Gonzalez (Rust Engineer)
- Agustin Longoni (UI/UX Designer)
- Cristian Malfesi (Product Owner)
- Camila Mancusi Mandado (Quality Assurance Engineer)
- Henry Palacios (Front-end engineer)
​
### Contact
​
- **Contact Name:** Cristian Malfesi
- **Contact Email:** cristian@protofire.io
- **Website:** [protofire.io](https://protofire.io/)
​
### Legal Structure
​
- **Registered Address:** 1607 Ponce de Leon Avenue, GM-06, San Juan, PR, 00909
- **Registered Legal Entity:** Altoros LLC (DBA Protofire)
​
### Team's experience
​
Protofire has proven expertise in building decentralized infrastructure, protocols, applications, and developer platforms to accelerate growth of network’s ecosystems. By delivering hands-on coding and contributions, Protofire specializes in supercharging developer adoption, bootstrapping, and network usage
We are not only a dev shop company, but we create long term partnerships with the projects we are part of, building and working as ambassadors for the community. We believe in the projects and also participate by running nodes and taking the validator or staker roles.
​
### Team Code Repos
​
- https://github.com/protofire/polkadot-contract-wizard/
- https://github.com/protofire/ink-compiler-be
- https://github.com/protofire/moonbeam-web-core
- https://github.com/protofire/blockchain-learning-path
- https://github.com/protofire/omen-exchange
- https://github.com/protofire/kyber-pool-master-proxy-contract

​
GitHub accounts of team members.

- https://github.com/0xLucca <Luca Auet>
- https://github.com/matextrem <Matias Dastugue>
- https://github.com/GabrielCamba <Gabriel Gonzalez>
- https://github.com/alongoni <Agustin Longoni>
- https://github.com/camimancusi <Camila Mancusi Mandado>
- https://github.com/henrypalacios <Henry Palacios>
​
### Team LinkedIn Profiles
​
- https://www.linkedin.com/in/lucaauet/
- https://www.linkedin.com/in/matiasdastugue/
- https://www.linkedin.com/in/gabriel-nicolas-gonzalez/
- https://www.linkedin.com/in/agustinlongoni/
- https://www.linkedin.com/in/cristian-malfesi/
- https://www.linkedin.com/in/camilamancusi
- https://www.linkedin.com/in/henrydpalacios/
​
## Development Status :open_book:
​
Our platform now simplifies the deployment of standard smart contracts, making it accessible for users without advanced technical knowledge and saving significant time and resources.
​
Key achievements of the Polkadot Contract Wizard project, led by Protofire, include:
​
1. **Interaction with Deployed Contracts**: The platform now allows users to directly interact with their deployed contracts through an intuitive user interface. This dynamic functionality is tailored according to the metadata of the contracts, facilitating efficient contract management.
​
2. **Interaction with Custom Smart Contracts**: Users can interact with any smart contract by providing its metadata, network, and address. This feature automatically generates a user-friendly layout, simplifying the interaction with custom contracts.
​
3. **Shareable Contract Interaction Links**: A new feature for creating shareable contract interaction links has been implemented. This allows users to generate a unique link containing all necessary information for interacting with a contract, streamlining the process and enhancing collaborative efforts within the community.
​
4. **Support for Multiple Chains**: The tool has been expanded to support connections to various parachains in the Polkadot, Kusama, and Rococo networks, broadening the platform's applicability and reach within the ecosystem.
​
These developments underscore our commitment to making the Polkadot Contract Wizard a top choice for deploying smart contracts within the Dotsama ecosystem. We are incredibly grateful for the support we have received and remain dedicated to continuously enhancing the platform's capabilities and user experience.
​
## Development Roadmap :nut_and_bolt:
​
The enhancement of the Polkadot Contract Wizard will be meticulously executed in two distinct phases, each focusing on specific aspects of development to ensure a comprehensive and high-quality upgrade.
​
### Phase 1: Foundation and Preliminary Development
The initial phase of the project is dedicated to laying the groundwork and developing core functionalities. This phase includes three key components:
​
1. **Back-End Preparation for new kind of Compilation:**
   - **Objective:** Enhace back-end system to be capable of providing appropriate feedback. Use the latest audited version.
   - **Outcome:** Immediate and clear feedback on user code, enhancing development experience and efficiency. It will be compatible with the latest OpenBrush audited version.
​
2. **UI/UX Design for the Complete Phase:**
   - **Objective:** Design an intuitive and user-friendly interface that accommodates all new features seamlessly.
   - **Outcome:** A visually appealing and functional user interface that simplifies contract creation and customization.
​
3. **Implementation of New Added Contracts with Modifiers:**
   - **Objective:** Expand the range of contract templates available in the wizard, incorporating new templates and modifiers. Develop and integrate new contract templates such as payment splitters, proxies, vaults with time-locks, and a flipper, along with customizable modifiers. Check that everything is compatible with the latest audited version.
   - **Outcome:** A broader selection of contract templates for user customization.

### Phase 3: Integration and Quality Assurance
The second phase focuses on bringing together all the developed components and ensuring their quality.
​
1. **Integration of Custom Contracts:**
   - **Objective:** Seamlessly integrate the back-end compilation system with the new UI/UX and the added contract templates. Merge all developed elements into a cohesive platform, ensuring smooth interaction between the user interface and back-end functionalities.
   - **Outcome:** A fully integrated system providing a seamless experience from contract selection, to edition and compilation.
​
2. **Quality Assurance (QA) Process:**
   - **Objective:** Guarantee the quality, reliability, and user-friendliness of the delivered product. Conduct rigorous testing of the entire platform, including functional, and usability testing.
   - **Outcome:** A high-quality, robust, and user-friendly platform meeting user needs and real-world usage demands.
​
## Overview
​
- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):** 3.5 
- **Total Costs:** 122500 U$D
​
## Milestones

### Milestone 1 - New Template Contracts and Authentication 
​
- **Estimated duration:** 2 months
- **FTE:** 3.5
- **Costs:** 49000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use the new features. |
| **0c.** | Testing and Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that allows users to easily run the application. |
| 1. | Integration of New Templates | The functionallity based on [step 1](#step1) of the Project Details section. |
| 2. | Support Latest Audited Version | The functionallity based on [step 2](#step2) of the Project Details section. |
| 3. | Authentication Mechanism Integration | The functionallity based on [step 3](#step3) of the Project Details section. |
| 4. | Optimized UI | The functionallity based on [step5](#step5) of the Project Details section will be implemented to seamless integrate the previous points |



​### Milestone 2 - Custom Contracts implementation
​
- **Estimated duration:** 3 months
- **FTE:** 3.5
- **Costs:** 73500

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use the new features. |
| **0c.** | Testing and Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that allows users to easily run the application. |
| 1. | Custom Code | The functionallity based on [step 4](#step4) of the Project Details section. |
| 2. | Optimized UI | The functionallity based on [step 5](#step5) of the Project Details section. |
| 3. | Documentation and Tutorials | The functionallity based on [step 6](#step6) will be integrated and we will update the calls to support that authentication. |
​

## Future Plans
​
At contractwizard.xyz team in protofire, our mission is to continue innovating and developing our platform to cater to the ever-changing needs of the smart contract community. We recognize the importance of providing our users with a comprehensive tool that enables them to manage all ink! smart contracts.
​
As we continue to develop our platform, we understand the importance of building a community around it. We believe that by creating a community of users, we can facilitate the sharing of knowledge, contracts, and different approaches to problem-solving. Through our platform, users will have the ability to share their experiences, ask questions, and engage with others within the community. This will create an environment that fosters innovation and encourages collaboration, leading to the development of new and exciting ideas. Our hope is that our platform will serve as a hub for all things smart contract-related, where users can come together to learn, grow, and innovate.
​
## Additional Information :heavy_plus_sign:
​
**How did you hear about the Grants Program?** Web3 Foundation Website