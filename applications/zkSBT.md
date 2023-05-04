# zkSBT
- **Team Name:** AsMatch
- **Payment Address:** 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

The first framework for SoulBound Tokens (SBTs) was first introduced by Vitalik Buterin, E. Glen Weyl, Puja Ohlhaver, in a whitepaper entitled [“Decentralized Society: Finding Web3’s Soul,”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763) released in May 2022. The whitepaper highlights how Soulbound tokens can be used as a great tool for achieving a fully decentralized society, in view of the amazing possibilities it presents.

SoulBound tokens (SBTs) are non-transferable digital tokens that represent an individual's identity in the Web3 ecosystem. SoulBound tokens (SBTs) can be said to be a form of Digital Curriculum Vitae (CV), as it gives detailed credentials of the user who owns it. These records are stored or distributed via wallets referred to as "Souls". The soul can be said to be a Blockchain wallet that stores publicly accessible, non-transferable tokens.

zkSBT (Zero-Knowledge Soulbond Token) is an enhanced Soulbond Token that uses ZKPs to provide security and privacy features compared to traditional SBTs. Similar to SBTs, zkSBTs are easy to mint and use for verification purposes, offering the same user experience but with added privacy. The users can easily prove their specific identities through zkSBT without inputting any private key to sign the signatures. 


### Project Details

AsMatch is the world’s first astrology-based Web3 social-Fi matching app that combines AI-generated content (AIGC) and zero-knowledge proofs (ZKPs) for mobile phones. The zkSBT is one of the most important features of AsMatch. We are supporting more and more SBTs from different blockchain ecosystems, hoping to make it easier for users to import their own credentials. At the same time, this is also an excellent landing scene for the on-chain data of blockchain.

The details about AsMatch zkSBT:

* AIGC Profiles - Generate unique profiles using AIGC technology
* On-chain Credentials - Privately authorize personal information and token holder verification
* ZK Verification - Privately verify ownership of assets without revealing the associated wallet address & Embark on a Web3 journey without the need to connect wallets

The following is the workflow designed for our zkSBT service for Polkadot.

For AsMatch Team:

* Deploy ink SBT smart contract to Polkadot blockchain
* Deploy PC website for users to mint SBT and generate proof key

For AsMatch Users:

* Install polkadot.js wallet and Manta wallet, and create key pairs for both of these two wallets
* The user uploads the photo as an SBT picture and the AsMatch back-end service will generate similar AIGC pictures with different styles
* The user selects one of the AIGC pictures and signs the mint transaction to the Polkadot blockchain
* The user sign transaction by Manta wallet to sync SBT metadata from Polkadot blockchain to Manta
* The user generates a proof key of SBT on the AsMatch PC website
* The user opens AsMatch APP on iOS/Android, and copy-paste or scans the QR code of the proof key to verify the ownership of SBT
* The user set SBT picture as the profile photo

PC website:

![](https://raw.githubusercontent.com/As-Match/documentation/main/images/UploadPhotos.png)
![](https://raw.githubusercontent.com/As-Match/documentation/main/images/SelectTheme.jpg)
![](https://raw.githubusercontent.com/As-Match/documentation/main/images/Minted.png)

iOS/Android APP:

![](https://raw.githubusercontent.com/As-Match/documentation/main/images/EnterProofKey.jpg)
![](https://raw.githubusercontent.com/As-Match/documentation/main/images/BindzkSBT.png)
![](https://raw.githubusercontent.com/As-Match/documentation/main/images/BindzkSBT2.png)

### Ecosystem Fit

The SBT is playing more and more important roles in the Web3 World. SBTs have a wide range of potential use cases. Here are some examples that could potentially find use in everyday life.

* KYC proof - For example, [Binance Account Bound (BAB)](https://www.binance.com/en/support/faq/how-to-mint-binance-account-bound-bab-token-bacaf9595b52440ea2b023195ba4a09c) tokens are the first-ever Soulbound Token (SBT) built on the BNB Chain. BAB token is non-transferable and has no monetary value. It will function as a digital verification tool for Binance users who have completed Identity Verification.

* Education history - When people graduate from university, they receive a certificate proving completion of the required courses. The university could be a Soul issuing the SBTs, and the students would be Souls on the receiving end. The SBT would store the student’s credentials, proving they hold the relevant qualifications and are a member of the university. Simply put, the SBT would function as proof of attendance.

* Job applications – In theory, job applicants could submit all their prior work history and professional certificates using official SBTs issued by previous companies and institutions. The SBTs would function as proof of skill certificates.

After all, the zkSBT that we are proposing is not only a use case for AsMatch but also a best SBT practice for the Polkadot ecosystem. The ink SBT smart contract we are developing is a good example for Dapps which also want to deploy SBT on the Polkadot blockchain. And we are ready to integrate more SBTs from the Polkadot blockchain into AsMatch users.


## Team :busts_in_silhouette:

### Team members

* Pico: Lead the team, responsible for project coordination and strategic planning.

* Yahuang: Fullstack Dev
* Damon: Fullstack Dev
* Yi: Backend Dev
* Ryan: Dev Ops
* Mike: Backend Dev
* Martin: Marketing
* Ye Han: UI Designer


### Contact

- **Contact Name:** Pico
- **Contact Email:** pico@asmatch.app
- **Website:** https://asmatch.app

### Legal Structure

### Team's experience

Our team members all come from the Internet industry and have worked for Soul, MOMO, Tantan, Kuaishou, Shopee, and other first-tier Internet companies and first-tier social APPs. Our team helps connect people all over the world for dating, social connections, professional networking, and casual friendship.


### Team Code Repos

https://github.com/As-Match/asMatch-front-end

## Development Roadmap :nut_and_bolt:

* ink! SBT smart contract
* PC website for user to generate AIGC photos and mint SBT to the Polkadot blockchain and generate proof key
* AsMatch iOS/Android App support verifies the proof key and sets the SBT picture as the user's photo

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 50,000 USDT

### Milestone 1 - zkSBT PC Platform

- **Estimated duration:** 2 months
- **FTE:**  2
- **Costs:** 20,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0e. | Article | We will publish an article that explains what was done as part of the grant |
| 2. | PC website | The PC website for users to upload pictures and generate AIGC pictures and generate proof key|
| 3. | iOS/Android App | AsMatch iOS/Android App support verify the proof key and set SBT picture as the users' photo |


### Milestone 2 - AsMatch iOS/Android Application

- **Estimated duration:** 1.5 months
- **FTE:**  2
- **Costs:** 15,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0e. | Article | We will publish an article that explains what was done |
| 1. | iOS/Android | We will deliver iOS/Android applications that allow users to copy-paste or scans the QR code of the proof key to verify the ownership of SBT and set the SBT photo as the user’s photo. |

### Milestone 3 - ink! SBT smart contract & Manta

- **Estimated duration:** 1.5 months
- **FTE:**  2
- **Costs:** 15,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0e. | Article | We will publish an article that explains what was done |
| 1. | Smart contract: SBT | We will deliver an ink smart contract that will allow users to mint SBT from the PC website and store metadata on-chain. |
| 2. | Sync Service | We will deliver a back-end service(Node.js) monitoring the SBT smart contract and syncing SBT metadata to the Manta network for generating proof keys by ZKP. |

## Future Plans

Please include here

- how you intend to use, enhance, promote, and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** 
- **Payment Address:** 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.



