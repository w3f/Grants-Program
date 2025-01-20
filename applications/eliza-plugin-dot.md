
# **eliza-plugin-dot**

- **Team Name:** ChainSupport Labs  
- **Payment Details:**  
  - **DOT:** 12RdrZcEhcrngiNYfyyGiA5dU5aGAj8h7Cj5movAWdkwYGD3  
  - **Payment:** 12RdrZcEhcrngiNYfyyGiA5dU5aGAj8h7Cj5movAWdkwYGD3 (Assethub USDC)  
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1  

## Project Overview :page_facing_up:

This project aims to make it easier for Polkadot AI Agent developers to use the Eliza framework, enabling Polkadot to gain broader adoption in gaming and social scenarios. Through this initiative, Polkadot will be better integrated with AI, Discord, Telegram, and other platforms.  

Eliza, being one of the most popular frameworks in the AI Agent field, is widely used by many AI projects and already integrates with various blockchains. However, it currently lacks Polkadot examples. As active developers in the Polkadot ecosystem, we are confident in introducing Polkadot technologies to more fields while bringing excellent technologies back into the Polkadot community.  

### Overview

We aim to integrate Polkadot technology into the Eliza AI development framework by providing plugins for wallet creation, transfers, message encryption, and more. This will enable Polkadot to be applied in AI, social, and gaming scenarios.  

Our team specializes in promoting and developing Polkadot technology. We are deeply interested in AI and have extensive experience in social products. When we encountered the Eliza framework, we immediately recognized its immense potential. It aligns perfectly with the needs of the Polkadot community for AI technology integration.  

### Project Details

- **Language:** TypeScript  
- **AI Framework:** Eliza  

**Features:**  
1. Wallet creation  
2. Transfers  
3. `sr25519-AES` Message Encryption and Decryption
4. `ed25519-AES` Message Encryption and Decryption  
5. `ECDSA-AES` Message Encryption and Decryption  

> In the social domain, message encryption/decryption is a crucial feature. Drawing from our experience with social products, we recognize its importance. TON Blockchain's outstanding design for ed25519-AES message encryption inspired us. Polkadot, however, is more suited for sr25519 and ed25519 encryption schemes.

Encryption algo is as follows:

Calculate shared_secret using priv_1 and pub_2.
Let salt be the bas64url representation of the sender wallet address with isBounceable=1 and isTestnetOnly=0.
Select byte string prefix of length between 16 and 31 such that len(prefix+msg) is divisible by 16. The first byte of prefix is equal to len(prefix), other bytes are random. Let data = prefix + msg.
Let msg_key be the first 16 bytes of hmac_sha512(salt, data).
Calculate x = hmac_sha512(shared_secret, msg_key). Let key=x[0:32] and iv=x[32:48].
Encrypt data using AES-256 in CBC mode with key and iv.
Construct the encrypted comment:
pub_xor = pub_1 ^ pub_2 - 32 bytes. This allows each party to decrypt the message without looking up other's public key.
msg_key - 16 bytes.
Encrypted data.
This encrypted comment is stored:
Byte string is divided into segments and is stored in a chain of cells c_1,...,c_k (c_1 is the root of the body). Each cell (except for the last one) has a reference to the next.
c_1 contains up to 35 bytes (not including 4-byte tag), all other cells contain up to 127 bytes.
This format has the following limitations: k \<= 16, max string length is 1024.
> This excellent encryption/decryption method ensures the uniqueness of each encrypted message, even for identical content. Additionally, it eliminates the need to store AES encryption keys on servers, making it more universal, secure, and decentralized.
---

### Ecosystem Fit

#### How does your project fit into the ecosystem?  
Integrating Polkadot into the Eliza AI framework.

#### Who is your target audience?  
AI Agent developers.

#### What needs does your project meet?  
It makes it easier for Polkadot developers to create products integrating Discord, Telegram, and AI, unlocking more applications in gaming and social domains.

#### How did you identify these needs?  
Eliza, as a highly popular AI Agent framework, has already integrated various blockchains.
Phala Network has already started deep collaboration with Eliza, showcasing the potential for broader adoption within the Polkadot community.
The developer community looks forward to more integration of Polkadot technology in Eliza.
Reflecting on our past experience in social products, we believe that integrating public chains into existing social platforms has more potential than developing new social software from scratch. This approach enables integration with the world's most advanced technologies. Public chains in the Polkadot ecosystem need to be integrated into more social applications, such as Discord, Telegram, and others. Integration with AI makes products smarter and more attractive, enabling intent-based interactions between users and chains, thereby simplifying user operations.
Furthermore, when combining social products with blockchain, universal and secure message encryption/decryption becomes essential. The TON blockchain offers exemplary use cases in this area, demonstrating the importance of this functionality. This is a critical feature that we all require.
#### Are there any similar projects in the Substrate/Polkadot/Kusama ecosystem?  
no

#### Are there similar projects in related ecosystems?  
Yes, several blockchains have already integrated with Eliza.

---

## Team :busts_in_silhouette:

### Team Members
- **weimeme**

### Contact
- **Contact Name:** weimeme  
- **Contact Email:** weimeme067@gmail.com  

### Legal Structure
- **Registered Address:** Building 2, Xixi Bafang Castle, Yuhang District, Hangzhou, Zhejiang Province, China  
- **Registered Legal Entity:** N/A  

### Team's Experience  
- **weimeme** has nearly two years of Substrate development experience and seven years of experience with Ethereum. He previously worked on the Ethereum cross-chain bridge Orbiter and is highly proficient in Layer 2 and Ethereum technologies.

### Team Code Repos  
- https://github.com/ChainSupport/eliza-plugin-dot.git  
- https://github.com/ChainSupport/eliza.git  

> Upon completion, the project will be submitted as a PR to https://github.com/elizaOS/eliza.  

---

## Development Status :open_book:

The project is in the preparation phase. Code repository: https://github.com/ChainSupport/eliza-plugin-dot.git  

---

## Development Roadmap :nut_and_bolt:

### Overview  
- **Total Estimated Duration:** 1 month  
- **Full-Time Equivalent (FTE):** 1.5  
- **Total Costs:** $10,000 USD  
- **DOT %:** 50%  

### Milestone 1 — Basic Functionality

- **Estimated duration:** 1 month  
- **FTE:** 1.5  
- **Costs:** $10,000 USD  

| Number | Deliverable         | Specification                                                                                     |
|-------:|---------------------|---------------------------------------------------------------------------------------------------|
| **0a.** | License             | Apache 2.0                                                         |
| **0b.** | Documentation       | Inline code documentation and a tutorial|
| **0c.** | Testing Guide       | Comprehensive unit tests for core functions and a testing guide.                                 |
| **0d.** | Docker              | A Dockerfile for testing all delivered functionality.                                            |
| **0e.** | Article             | A published article or workshop explaining the project achievements.                            |
| 1.      | Plugin-dot Package  | Node connection, wallet creation, and transfers, Message Encryption and Decryption.                                              |
| 2.      | sr25519-AES Package | Message Encryption/Decryption Using Combined sr25519 and AES.                                                                              |
| 3.      | ed25519-AES Package | Message Encryption/Decryption Using Combined ed25519 and AES.                                                            |
| 4.      | ECDSA-AES Package   | Message Encryption/Decryption Using Combined ecdsa and AES.                                                                    |

---

## Future Plans

We have consistently provided foundational technical support in the Polkadot ecosystem and are enthusiastic about building our own AI products in the future. Our goal is to enable Substrate-based blockchains to find broader use cases in social and AI domains. We plan to continue enriching Polkadot's functionality and rely on Eliza's large developer community for ongoing maintenance.
