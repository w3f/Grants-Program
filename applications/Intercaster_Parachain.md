# Intercaster

- **Team Name:** Intercaster
- **Payment Details:**
  - **DOT**: For the **DOT** compensation, please provide a Polkadot address (e.g. 15oF4...).
  - **Payment**: 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview

Intercaster aims to bridge the Farcaster protocol and its innovative Frames feature with the Polkadot ecosystem through a custom parachain implementation. This proposal outlines the development of a specialized parachain that leverages Polkadot's cross-consensus messaging (XCM) capabilities to validate and process Farcaster messages, creating a seamless integration between these two powerful ecosystems. 

By enabling this interoperability, we can expand the potential applications of decentralized social protocols and empower developers to build cross-chain applications that leverage the strengths of both networks.


### Project Details

Intercaster will act as a bridge between the Farcaster social protocol and the Polkadot ecosystem, enabling seamless interaction between these two networks. Our goal is to develop a parachain that can validate, process, and relay Farcaster messages, particularly those involving Frames, using Polkadot's XCM capabilities.

This integration will allow developers to create applications that combine Farcaster's social features with Polkadot's cross-chain capabilities, opening up new possibilities for decentralized social applications. By leveraging both ecosystems, we can create more powerful, interoperable decentralized applications that extend beyond current limitations.

#### Technical Architecture

The Intercaster parachain architecture consists of interconnected components that enable seamless bridge functionality between the Farcaster and Polkadot ecosystems. The system operates through three primary layers: the Farcaster ecosystem providing social data and identity management, the Intercaster parachain serving as the validation and translation bridge, and the Polkadot ecosystem offering cross-chain messaging and shared security.

##### Custom Farcaster Hub Validation Layer

The Intercaster implementation incorporates the bridge module directly into a custom Farcaster Hub. The custom Hub maintains full compatibility with the Farcaster protocol while extending functionality to support Polkadot integration. The integrated Hub processes Farcaster messages through the standard validation pipeline while simultaneously preparing relevant messages for cross-chain transmission. This approach leverages the Hub's existing Ed25519 signature verification and message validation infrastructure, reducing resource requirements and operational complexity. The unified system operates within the established Farcaster gossip network while providing additional bridge functionality.

This Hub-layer validation leverages Farcaster's established trust model, where Hubs serve as the authoritative validators of protocol compliance. The custom Hub extends standard functionality with enhanced anti-spam mechanisms and real-time bridge processing.

##### Parachain Pallet Validation Layer

The Message Validation Pallet in the Intercaster parachain provides secondary verification focused on cross-chain security:

- Attestation Verification: Validates Hub-generated proofs using stored public keys
- Parachain Policy Enforcement: Applies custom rules including XCM message formatting requirements, destination parachain compatibility checks, and gas limit enforcement
- Frame-Specific Validation: For Frame interactions, verifies Frame URL whitelisting, button action permissions, and state transition consistency

This dual-layer approach creates a defense-in-depth security model where protocol validation occurs at the source (Hub) while cross-chain integrity checks happen at the destination (parachain).

##### XCM Integration Architecture

The XCM Integration functionality translates validated Farcaster messages into XCM-compatible formats for transmission across the Polkadot network. This translation process maintains message integrity while adapting to XCM's standardized instruction format. The system encodes messages according to XCM version 4 specifications, ensuring compatibility with the current Polkadot infrastructure.

Message routing utilizes Horizontal Relay-routed Message Passing (HRMP) channels for communication between parachains. The system implements timeout handling, failure recovery mechanisms, and delivery confirmation to ensure reliable cross-chain message transmission. XCM messages carry sufficient context and authorization information to enable secure execution on target parachains.


![High Level Arch](https://github.com/Shritesh99/polkadot-farcaster-demo-parachain/blob/master/img/High_level_arch.png?raw=true)

#### Message Flow Architecture

##### Frame Interaction Processing

The message flow begins when users interact with Farcaster Frames within Warpcast or other compatible clients. User actions such as button clicks generate FrameAction protobuf messages containing the frame URL, button index, cast ID, and optional input text. These messages are cryptographically signed using the user's Ed25519 account key, ensuring authenticity and non-repudiation.

Frame servers receive POST requests from Farcaster clients and must respond within the 5-second timeout limit. The server forwards the signed message data to a Farcaster Hub for validation, which verifies the signature against the user's registered public key and validates message structure compliance. Upon successful validation, the Hub returns the decoded message payload to the Frame server.

###### Hub-to-Parachain Transmission

The integrated Intercaster Hub processes validated Frame interactions through the following steps:

1. User Action: Warpcast sends signed Frame interaction to the Frame server

2. Hub Validation: Custom Hub performs primary validation (signature + protocol checks)

3. Attestation Packaging: Hub generates Merkle proof of message inclusion, validation timestamp, and signer public key reference.

4. Bridge Transmission: Attested message sent to parachain via libp2p direct channel

The Hub applies filtering logic to determine which messages require cross-chain processing, avoiding unnecessary overhead for purely social interactions. Messages destined for blockchain operations undergo additional validation and are queued for XCM transmission. The bridge maintains detailed logs of all processed messages for monitoring and debugging purposes.

##### Parachain Processing and Cross-Chain Execution

Once received by the Intercaster parachain, messages undergo secondary validation through the Message Validation Pallet:

1. The pallet verifies attestation proofs from the Hub
2. It checks for replay attacks by comparing message timestamps
3. The pallet enforces parachain-specific policies and constraints
4. Valid messages are forwarded to the XCM Integration Pallet

The XCM Integration Pallet then:

1. Encodes the validated message into XCM format
2. Routes the message through HRMP channels to the target parachain
3. Monitors for delivery confirmation or timeout events

Target parachains receive XCM messages through their configured channels and decode the embedded instructions. Upon receipt, destination parachains execute the encoded operations such as DeFi transactions, NFT minting, or governance actions. The execution typically completes within 2 seconds, with results emitted as blockchain events for dApp consumption.

![Sequence Diagram](https://github.com/Shritesh99/polkadot-farcaster-demo-parachain/blob/master/img/Seq.png?raw=true)

### Ecosystem Fit

Intercaster positions itself as a specialized middleware parachain bridging Farcaster's decentralized social protocol with Polkadot's multi-chain ecosystem. Our target audience spans parachain developers seeking social integration capabilities, dApp developers building cross-chain applications, Farcaster creators wanting blockchain functionality, and users seeking seamless social-to-DeFi experiences. The project addresses the critical interoperability gap between social protocols and blockchain infrastructure—enabling Frame interactions to trigger cross-chain operations while maintaining security through hybrid validation models.

We identified these needs through evidence including Farcaster's rapid growth (20M+ MeWe users integrating with Frequency parachain, Solana wallet integration driving user adoption), increasing demand for SocialFi applications (Base network's 54,341 daily token launches driven by Zora-Farcaster integration), and the $25,000 weekly Creator Rewards Program demonstrating monetization demand. Unlike existing Polkadot social projects—Frequency focuses on DSNP messaging infrastructure while Subsocial provides general social networking features—Intercaster specifically enables Farcaster Frame interactions to execute blockchain operations across any Polkadot parachain via XCM, creating unique cross-chain social functionality unavailable elsewhere.

Similar projects in related ecosystems include RainFrame (Ethereum-Farcaster DeFi integration) and Zora-Base integration (social token creation), but these lack Polkadot's cross-consensus capabilities and shared security model that Intercaster leverages for trustless, scalable social-blockchain bridging across multiple specialized chains simultaneously. The project fills a previously impossible niche by combining Farcaster's social engagement with Polkadot's cross-chain composability, enabling novel applications like governance voting through social feeds, cross-chain creator monetization, and Frame-triggered DeFi operations—capabilities that couldn't exist until both ecosystems reached sufficient maturity for secure integration.

## Team :busts_in_silhouette:

### Team members
- Shritesh Jamulkar

### Contact

- **Contact Name:** Shritesh Jamulkar
- **Contact Email:** shritesh.sj@gmail.com

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

I am an individual contributor to the project. I have experience in developing cross-chain blockchain soulution of 5+ years. I have written multiple research papers in the blockchains and was an active contributer to the Hyperledger foundation.

### Team Code Repos

- https://github.com/Shritesh99/pallet-farcaster_frame

- https://github.com/Shritesh99

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/shritesh99/

## Development Status :open_book:

I have already started working on the project as a part of the previous grant. I have created the pallet for the parachain https://github.com/Shritesh99/pallet-farcaster_frame. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 30K (20K USDC + 10K USD locked in DOT)
- **DOT %:** 33%

### Milestone 1 - Intercaster Hub development

The initial phase focuses on developing the core integrated Hub architecture and establishing fundamental bridge functionality. This includes:
- Extending the existing Farcaster Hub codebase to incorporate bridge module functionality
- Implementing basic message validation and XCM message format development
- Establishing development environments and testing frameworks

- **Estimated duration:** 1 month
- **Costs:** 10,000 USD

### Milestone 2 - Parachain Development

The second phase implements Frame processing capabilities and cross-chain message routing on the Intercaster parachain. Key activities include:

- Developing state management for complex multi-step Frame applications
- Implementing efficient XCM message batching and routing
- Conducting comprehensive testing on Rococo/Paseo testnet

- **Estimated duration:** 1 month
- **Costs:** 10,000 USD

### Milestone 3 - Deploymnet

The final phase focuses on mainnet deployment and ecosystem development. Key activities include:

- Securing a parachain slot through auction or lease mechanisms
- Conducting final security reviews and performance optimization
- Deploying the integrated Hub to the mainnet with comprehensive monitoring
- Releasing developer tools, SDKs, and example applications

- **Estimated duration:** 1 month
- **Costs:** 10,000 USD

## Future Plans

This project brings the integration of the Polkadot Ecosystem with the Farcaster communities. We will be incentivizing from each parachain who wants to expand their community to the Farcaster frames. We'll be hosting seminars and workshops to onboard users to use the parachain and expand their dApps to Farcaster frames.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** [Piet Wolff](https://github.com/PieWol) recommended this grant program.

- This project was a winning project of a EasyA Polkadot Hackathon 2024.
