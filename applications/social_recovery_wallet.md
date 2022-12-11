# Social Recovery Wallet

- **Team Name:** Hypha Hashed Partners
- **Payment Address:** bc1q7axtazzhsdttextp0qspueaagv4pgfm5l9ne64 (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Proposal for the RFP titled [Social Recovery Wallet](https://github.com/w3f/Grants-Program/blob/master/rfps/open/social-recovery-wallet.md).

### Overview

We develop Flutter wallets. We have experience developing social recovery wallets in Flutter. We develop the [SEEDS Light wallet](https://github.com/JoinSEEDS/seeds_light_wallet), found at the [Android store](https://play.google.com/store/apps/details?id=com.joinseeds.seedswallet) and the [iOS store](https://apps.apple.com/us/app/seeds-light-wallet/id1507143650).

We have implemented social recovery in that Flutter wallet. It operates on [Telos](https://telos.net).

### Project Details

#### Recovery Screen Mockups / Descriptions

These screens include:

- Splash and main screen (mockup)

<img width="613" alt="image" src="https://user-images.githubusercontent.com/65412/174815365-1433cb1a-7a11-4893-b03b-64f2c65758d2.png" />

- Set / Remove social recovery accounts ("guardians")

<img width="713" alt="image" src="https://user-images.githubusercontent.com/65412/174815676-7e06f431-ac95-4520-aae2-ef78af64b522.png" />

- Recover account screens - generate recovery link to send to guardians

<img width="535" alt="image" src="https://user-images.githubusercontent.com/65412/174815926-2121f5fb-3e58-47d9-8b0b-42c421af7c34.png" />

- Recovery wait countdown screen

<img width="365" alt="image" src="https://user-images.githubusercontent.com/65412/174816028-5e7dd8ab-7c72-4850-a1cb-dd76d5b0f39a.png" />


- Process recovery URL to recover someone's account (see video of existig wallet)
- Cancel recovery - prevent maliciuous actors (see video of existing wallet)

The process overall will look similar to the existing Seeds Light Wallet process

See the video here https://www.youtube.com/watch?v=Vpb8IbHvcNU


#### Recovery Link

To make recovery easy for a user, we provide a deep link users can share with their guardians.

To make recovery more difficult to attack, we require the user to send the link to their recoverers outside the wallet.

The recoverers then just click on the recovery link.

#### Sign and Broadcast

In addition to social recovery, we will also migrate our Sign and Broadcast feature. It scans the QR code provided by polkadot.{js}, signs it, and broadcasts it to the network.

#### Improvement on Parity Signer

Parity Signer scans QR codes that are produced by polkadot.{js}. Parity Signer is a fully airgapped wallet, so the payload is signed on the device and the signed QR code is scanned back into browser plugin to be broadcast.

Our wallet will scan the same QR codes, but broadcast it to skip the step of having to scan the QR back in. Scanning QR codes from mobile back into a webcam is an extra step. It is the most time consuming part because you have to align the phone over the webcam correctly, and it always takes another second or two to focus on the QR code.

With social recovery fully implemented, wallet users can be more confident leaving their mobile wallets online.

## Scoping

- **_Features_** - All steps of the [Social recovery on Substrate](https://www.parity.io/blog/social-recovery-on-substrate/) article will be implemented.
- **_Deployment_** - We will deploy the wallet to iOS and Android application stores.
- **_Maintenance_** - We will maintain the components on the mainline releases of Substrate for no less than 2 years

## Team :busts_in_silhouette:

### Team Members

- Nikolaus Heger - Flutter & Blockchain Developer https://github.com/n13
- Gerardo Guijarro  - Flutter Developer https://github.com/gguijarro-c-chwy
- Jason Doh - UX Design
- Other team members as needed

We have already been learning Substrate and we are partnering with the [Hashed Network](https://github.com/hashed-io). Many of our users are already planned to migrate over.

### Contact

- **Contact Name:** Nikolaus Heger
- **Contact Email:** nheger@gmail.com
- **Website:** https://hypha.earth

### Legal Structure

- **Registered Address:** 30 N. Gould St, Ste R, Sheridan, Wyoming
- **Registered Legal Entity:** Hypha DAO LLC

### Team's experience

We have deployed and implemented the Seeds Light Wallet. Nikolaus Heger and Gerardo Guijarro specced, implemented, and deployed social recovery for the Seeds Light Wallet. We also implemented the smart contracts. Smart contracts were deployed on Telos, an EOSIO fork. Hypha is a Hashed Network launch partner.  

### Team Code Repos

Hypha develops two products, the Hypha DAO, and the SEEDS regenerative currency, DAO, and ecosystem.

- https://github.com/JoinSEEDS
- https://github.com/JoinSEEDS/seeds_light_wallet
- https://github.com/JoinSEEDS/seeds-smart-contracts
- https://github.com/JoinSEEDS/seeds-smart-contracts/blob/master/include/seeds.guardians.hpp

- https://github.com/hypha-dao
- https://github.com/hypha-dao/dao-contracts


### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/nikolausheger
- https://www.linkedin.com/in/gguij002/
- https://www.linkedin.com/in/jasonkihyun/

## Development Status :open_book:

We have started research of how to integrate Polkadot JS into the flutter app.

https://github.com/JoinSEEDS/seeds_light_wallet/tree/feature/polkadot1

We have deployed a full implementation in the Seeds Light Wallet

We created a video showing off how the feature works on Telos - it's going to be a bit different due to the way Polkadot recovery pallet works, but 90% of the design and specifications are going to be the same (wait on recover, prevent hacks, set up guardians). It's less than 5 minutes, enjoy!

https://www.youtube.com/watch?v=Vpb8IbHvcNU

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** 45,500 USD

#### Languages

- All deliverables will be written in Flutter/Dart.

## Milestones


### Milestone 1 — Screen Designs and Configure Recovery

- **Estimated duration:** 4 weeks
- **FTE:**  2.5
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can deploy the app on their mobile phone. |
| 0c. | Testing Guide | Business logic functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests. |
| 0d. | App Binaries | We will provide an APK for Android and deliver the app on both Android and iOS platforms via the respective testing tracks in the Google Play and Apple App stores. |
| 0e. | Video | We will record and publish a video explainer and demonstration of all features. |
| 1. | Screen Designs | We will work with our designer to design the screens for all of the steps required. Designed in Figma, images will be in repository. |  
| 2. | Configure Recovery | Functionality for a user to add recovery configuration to their account. Identify a list of existing accounts to serve as guardians, and select threshold |  

| Pallet calls |
| ------------ |
| create_recovery |

### Milestone 2 — Initiate Social Recovery, Vouch, Claim, and Recover

- **Estimated duration:** 5 weeks
- **FTE:**  2.5
- **Costs:** 17,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can deploy the app on their mobile phone. |
| 0c. | Testing Guide | Business logic functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests. |
| 0d. | App Binaries | We will provide an APK for Android and deliver the app on both Android and iOS platforms via the respective testing tracks in the Google Play and Apple App stores. |
| 0e. | Video | We will record and publish a video explainer and demonstration of all features. |
| 1. | Recovery Lookup | The ability to add guardians and an indicator whether that an account has a an active recovery.  |  
| 2. | Vouch | The ability to vouch for user that has an active recovery requesting signature from the account in the wallet.  |  
| 3. | Claim and Recover | When threshold is met, user will have the ability to claim and recover their tokens.  |  

#### Pallet calls

| Type | Pallet call |
| ---- | ------- |
| query | activeRecoveries |
| extrinsic | initiate_recovery |
| extrinsic | vouch_recovery |
| extrinsic |claim_recovery |
| extrinsic | as_recovered |
| extrinsic | close_recovery |
| extrinsic | remove_recovery |

### Milestone 3 — Scan QR code, Sign, and Broadcast

- **Estimated Duration:** 4 weeks
- **FTE:**  2.5
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can deploy the app on their mobile phone. |
| 0c. | Testing Guide | Business logic functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests. |
| 0d. | App Binaries | We will provide an APK for Android and deliver the app on both Android and iOS platforms via the respective testing tracks in the Google Play and Apple App stores. |
| 0e. | Video | We will record and publish a video explainer and demonstration of all features. |
| 1. | QR Code Format | Flutter library for scanning polkadot.{js} QR codes |  
| 2. | Node Selector | User can configure which network they are connecting to |  
| 3. | Sign and Broadcast | Integrate Sign and Broadcast for Flutter |  
| 4. | Deployment | Wallet deployed to iOS and Android app stores |  

## Future Plans

We plan to continue enhancing the wallet. Many of our users are migrating to Hashed Network and will require Flutter modules for custom pallets.

### Other Pallets

Support for multisig and proxy pallets, plus other similar pallets.

### Enhanced Sign and Broadcast

Sign and Broadcast also establishes a trusted link between the browser and the device. The transaction results are reported on both the device and the browser. This feature uses the Flutter implementation of [Anchor Link](https://github.com/greymass/eosio-signing-request).


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Referral - Max Gravitt
