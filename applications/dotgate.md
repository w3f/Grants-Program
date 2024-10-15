# DotGate

- **Team Name:** KSoftware
- **Payment Details:**
  - **DOT**: 16jRaizDGYPXH1wmoYotUCFMYDY1B1dniM3oF5haCW7UARQB
  - **Payment**: USDC 16jRaizDGYPXH1wmoYotUCFMYDY1B1dniM3oF5haCW7UARQB
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

**DotGate** is a wallet and extension management UI library specifically tailored for the Polkadot ecosystem. Inspired by successful tools like RainbowKit and WalletConnect in the Ethereum space, **DotGate** aims to simplify wallet integration and management for developers by providing a standardized and user-friendly interface across Polkadot projects.

Our team is highly invested in this project, as we have previously implemented extension management UIs for several projects within the Polkadot ecosystem. This hands-on experience has highlighted the recurring challenges developers face when integrating wallet functionalities. By creating **DotGate**, we intend to address these challenges by offering a reusable, framework-agnostic solution that streamlines development efforts and enhances the overall user experience.

### Project Details

#### PoC/MVP or other relevant prior work or research on the topic

We have developed a Proof of Concept (PoC) for **DotGate**, which is accessible at https://dotgate.github.io/dotgate-poc/. This PoC demonstrates the core functionalities and provides an example of how **DotGate** will function within applications in the Polkadot ecosystem.

#### Mockups/designs of any UI components

We have developed initial designs for the **DotGate** UI components to illustrate the user interface and user experience we aim to provide. These designs focus on simplicity and ease of use for both developers integrating the library and end-users interacting with wallet connections.

[Screenshot 1](https://raw.githubusercontent.com/dotgate/dotgate-poc/refs/heads/main/assets/screenshot_1.png): This image showcases the wallet selection modal, where users can choose from a list of supported Polkadot wallets and extensions. 

[Screenshot 2](https://raw.githubusercontent.com/dotgate/dotgate-poc/refs/heads/main/assets/screenshot_2.png): This screenshot displays the connection status interface, indicating a successful wallet connection. It includes user account information and options to manage the connection.

#### Data models / API specifications of the core functionality

The core functionality of **DotGate** is built around providing developers with easy-to-use APIs and React hooks to integrate wallet connection and management features into their Polkadot-based applications. Below you can find data models and API specifications:

##### Creating a DotGate Instance

```typescript
createDotGate(options?: DotGateOptions);
```

- Description: Initializes a **DotGate** instance with the provided options, allowing developers to overwrite default settings.
- Parameters:
  - options: An object of type DotGateOptions to configure the instance.
- Usage: This function sets up the necessary configurations for **DotGate** and prepares it for integration into the application.

```typescript
interface DotGateOptions {
  name?: string;
  title?: string;
  mode?: 'light' | 'dark';
  theme?: DotGateTheme;
  authenticationMode?: 'connect' | 'sign-in';
  ttl?: number;
}
```

- name (optional): The name of the application integrating **DotGate**. This can be used to personalize the user interface.
- title (optional): Custom title to be displayed instead of 'Connect Wallet'.
- mode (optional): The theme mode 'light' or 'dark'.
- theme (optional): An object defining the theme settings (DotGateTheme) to customize the appearance of the UI components.
- authenticationMode (optional): The authentication mode 'connect' or 'sign-in'.
- ttl (optional): The time-to-live (in seconds) for the authentication session if authenticationMode is 'sign-in'.

##### React Hooks

**useModal()**

- Purpose: Manages the opening and closing of the wallet selection modal.
- Functionality:
  - open(options): Opens the modal with optional parameters such as account type to filter the accounts displayed.
  - close(): Closes the modal.
- Usage: Allows developers to control the modal's visibility and customize its behavior based on user interactions.

**useAddress()**

- Returns: The address of the selected account as a string.
- Usage: Retrieves the currently selected account's address for use in transactions or display within the application.

**useSigner()**

- Returns: The Signer object from the extension.
- Usage: Provides the functionality to sign transactions or messages using the selected wallet.

**useAccounts()**

- Returns: A list of available accounts (`InjectedAccountWithMeta[]`) from the selected extension.
- Usage: Accesses all accounts provided by the wallet extension, which can be useful for allowing users to switch between accounts.

**useExtension()**

- Returns: Information about the selected extension (`InjectedExtensionInfo`).
- Usage: Retrieves metadata about the wallet extension in use, such as its name and version.

**useExtensions()**

- Returns: An array of available extensions (`InjectedExtensionInfo[]`).
- Usage: Lists all detected wallet extensions, enabling features like prompting users to install a wallet if none are found.

**useToken()**

- Returns: If authenticationMode is `sign-in` and user signed in, the token for the selected account, otherwise undefined.
- Usage: Provides the token for the selected account, which can be used to authenticate the user.

##### Other functions

**isTokenValid(token: string)**

- Returns: A boolean indicating the token's validity and data object if the token is valid.
- Usage: Validates the token and provides the user data if the token is valid.

#### An Overview of the Technology Stack to Be Used

**DotGate** will be developed using Lit, a modern library for building web components. By leveraging Lit and the Web Components standard, we ensure that **DotGate** is framework-agnostic and can be seamlessly integrated with any JavaScript framework, including React, Angular, Vue, or even vanilla JavaScript applications. This approach maximizes compatibility and allows developers across the Polkadot ecosystem to adopt **DotGate** without being constrained by their choice of frontend technology.

#### What your project is *not* or will *not* provide or implement

**DotGate** will not include social login features or passkey authentication methods, unlike some projects in the Ethereum ecosystem. This grant focuses solely on developing a wallet and extension management UI library for the Polkadot ecosystem without integrating social authentication options.

### Ecosystem Fit

Currently, there are no existing solutions within the Polkadot ecosystem that offer a standardized wallet and extension management UI library. While similar tools exist in the Ethereum ecosystem—such as [RainbowKit](https://www.rainbowkit.com/), [AppKit by Reown](https://reown.com/appkit) (WalletConnect), [Privy](https://www.privy.io/), and [AccountKit by Alchemy](https://accountkit.alchemy.com/)—Polkadot lacks an equivalent solution. **DotGate** aims to fill this gap by being the first to provide such a tool specifically for Polkadot developers.

#### Comparison with Similar Projects in Other Ecosystems

- [RainbowKit](https://www.rainbowkit.com/): A React library for Ethereum wallet connection, focusing on ease of use and developer experience.
- [AppKit by Reown](https://reown.com/appkit): A toolkit for building Web3 applications with streamlined wallet integration on Ethereum.
- [Privy](https://www.privy.io/): Offers authentication and user management solutions for Web3 applications.
- [AccountKit by Alchemy](https://accountkit.alchemy.com/): Provides a plug-and-play solution for integrating wallets into Ethereum applications.

By bringing similar functionalities to Polkadot, **DotGate** will enhance the developer toolkit and contribute to a more robust and user-friendly ecosystem.

## Team :busts_in_silhouette:

### Team members

- [Elmar Kenigs](https://github.com/ekenigs) (Team Lead)
- [Richard Kenigs](https://github.com/rihyx)

### Contact

- **Contact Name:** Elmar Kenigs
- **Contact Email:** elmar.kenigs@gmail.com

### Legal Structure

- N/A

### Team's experience

Our team brings over three years of experience in developing DApps and other Web3 projects within the Polkadot ecosystem and more than a decade of experience in software development. As part of [OpsLayer](https://opslayer.com), we developed the Moonbeam [XCM-SDK](https://github.com/moonbeam-foundation/xcm-sdk), which is utilized by numerous projects in the Moonbeam ecosystem. Additionally, we have contributed to the development of the [Moonbeam DApp](https://apps.moonbeam.network/moonbeam) and [Tanssi DApp](https://apps.tanssi.network/).

### Team Code Repos

All project related repositories will be available at https://github.com/dotgate with the main repository being https://github.com/dotgate/dotgate.

- https://github.com/ekenigs
- https://github.com/rihyx

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/elmar-kenigs/
- https://www.linkedin.com/in/richard-kenigs-48a552b5/


## Development Status :open_book:

We have initiated the implementation of **DotGate** and have already completed a significant portion of the first milestone. This progress includes developing key features and setting the groundwork for the second milestone. Our progress is demonstrated in [the Proof of Concept (PoC)](https://dotgate.github.io/dotgate-poc/) we created, showcasing the core functionalities and validating the feasibility of the project.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1: Basic functionality, hooks and basic documentation

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can start using **DotGate** for their project. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Core UI | We will implement the core UI components for wallet and extension management. |
| 2. | React hooks | We'll build the core hooks described in the [General API Design / React hooks](#React-hooks) section excluding `useToken()`. |
| 3. | Publish to NPM | We'll publish the library to NPM and make it available to the public. |

### Milestone 2: Theming, customization and additional wallets

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can start using DotGate for their project. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Light and Dark Theme | We'll add themes for light and dark mode. |
| 2. | Customization | We'll allow developers to customize the look (theme colors) of **DotGate** to match the branding of their project. |
| 3. | Additional Wallets | We'll add support for additional wallets and extensions. |
| 4. | Example dApp | We'll add an example dApp that uses **DotGate** to interact with the extensions. |

### Milestone 3: Documentation and additional features

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can start using **DotGate** for their project. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Documentation | We'll add documentation site to the repository. |
| 2. | Sign-in | We'll add functionality to sign-in instead of connecting a wallet. |
| 3. | Verify | We'll add functionality to verify the user's identity. |
| 4. | Publish to JSR | We'll publish the library to [JSR](https://jsr.io). |

## Future Plans

- Support for more wallets and extensions.
- UI Design improvements.
- More examples and tutorials.
- Social login.
- Passkey authentication.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Polkadot Decoded 2024
