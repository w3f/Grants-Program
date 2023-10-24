# Interstellar - New Recovery Options


- **Team Name:** Interstellar
- **Payment Address:**  Fiat 04.04.2023, 22:42
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

**Follow-up of Interstellar - Wallet Phase 1 & 2**

Amendment P1: [w3f/Grants-Program#1354](https://github.com/w3f/Grants-Program/pull/1354)

Amendment P2: [w3f/Grants-Program#2028]( https://github.com/w3f/Grants-Program/pull/2028)



### Overview

We aim at leveraging the current Substrate Frame Recovery Pallet to introduce both an original NFC Recovery based on day-to-day NFC devices (payment/access/transportation cards, smartwatches, car keys, headphones, speakers, or any other NFC tags) and a specific Recovery File Token based on a one-time visual cryptographic code. A new recovery setup will allow for only a single or a combination of multiple recovery options (devices/files/social recovery).


### Project Details

To streamline the process and avoid modifying the Substrate recovery  pallet at this stage, virtual friends i.e item account ids are created and associated to an NFC device or a recovery file/program token. Those item account ids are managed by a dedicated `extended_recovery` pallet within TEE/Integritee validators to ensure recovery security and privacy.

The recovery interface enables the user to manage both the recovery setup and recovery initiation within a mobile app, letting the `extended_recovery` pallet manage `create_recovery` or `initiate_recovery` calls based on recovery options chosen by the user.



#### NFC Recovery with extended recovery pallet
##### Recovery Setup
1.	The user taps their NFC device(s) on their mobile
2.  The user is prompted for a `threshold` (if applicable) and `delay_period`
> `delay_period`: "The number of blocks after a recovery attempt is initialized that needs to pass before the account can be recovered"

> `threshold`: "The number of friends that must vouch for a recovery attempt before the account can be recoverd"

3.	The app reads the NFC's serial number(s), applies a hash function and sends it to the `extended_recovery` pallet
4.	The pallet stores the hashed serial number(s) rehashed with a salt
5.	Create item account id(s) associated to the hashed serial number(s)
6.	The `extended_recovery` pallet calls `create_recovery` from the standard recovery pallet specifying the NFC's account id(s) i.e. virtual friend(s) with the `threshold` and `delay_period`

> A hash is used to ensure pseudonymity of the data to comply with data protection regulations and other legal requirements

> Multiple NFC tags can be used, each associated with their respective item account ids for recovery

##### Initiate Recovery from the new account
1.	The user taps their NFC device(s) on their mobile
2.	The app reads the NFC's serial number(s), applies a hash function and sends it to the `extended_recovery` pallet
3.	The hashed serial number(s) is retrieved and verified
4.	The `extended_recovery` pallet calls `initiate_recovery` and `vouch_recovery` from the standard recovery pallet
5.	The old app associated with the old account receives a notification (assuming the app still exits)
> The notification will be used to approve or reject the recovery within a specified period later - [Future improvements](https://github.com/Interstellar-Network/Grants-Program/blob/recovery/applications/Interstellar-Network-Recovery.md#planned-future-improvement)


#### Recovery File Token with extended recovery pallet

##### Recovery Setup
1. Create a token file i.e. [visual cryptographic garbled circuit](https://book.interstellar.gg/VC-GC.html) with an embedded one-time recovery code, encrypted with AES
2. The user is prompted for a`threshold` (if applicable) and `delay_period`
3. The token is sent to the app and could be stored on a cloud service (like Google Drive) or as a local file on your mobile
> Unlike a seed phrase, this token can't be used to access any private keys
4. Create an item account id associated to the unique circuit
5. The `extended_recovery` pallet calls `create_recovery` from the standard recovery pallet specifying the token's account id(s) i.e. virtual friend(s) with the `threshold` and `delay_period`
>  Multiple program tokens can be used, each associated with their respective item account ids for recovery

##### Initiate Recovery from the new account
1.  Import the token file within the app
2.	The AES key associated with the token is received, used to decrypt the recovery circuit i.e. visual cryptographic garbled circuit which  displays the one-time recovery code to the user through a validation screen
3.	The user's input is received by the `tx-validation` (or similar)pallet, which verifies the code
4.	The `extended_recovery` pallet calls `create_recovery` and `vouch_recovery` from the standard recovery pallet
5.	The old app associated with the old account receives a notification (assuming the app still exits)
> The notification will be used to approve or reject the recovery within a specified period later - [Future improvements](https://github.com/Interstellar-Network/Grants-Program/blob/recovery/applications/Interstellar-Network-Recovery.md#planned-future-improvement)



#### Social Recovery
The recovery interface will allow the user to select contacts/friends for the recovery setup.


#### Finalize the recovery process with the standard recovery pallet
1.	Once a threshold number of friend and item accounts have vouched for the recovery attempt, the account owner needs to wait until the delay period has passed, starting when they initiated the recovery process
2.	Now the account owner is able to call `claim_recovery`, which subsequently allows them to call `as_recovered` and directly make calls on behalf of the lost account
3.	Using the now recovered account, the account owner can call `close_recovery` on the recovery process they opened, reclaiming the recovery deposit they placed
4.	The account owner should then call `remove_recovery` to remove the recovery configuration on the recovered account and reclaim the recovery configuration deposit they placed
5.	Using `as_recovered`, the account owner is able to call any other pallets to clean up their state and reclaim any reserved or locked funds. They can then transfer all funds from the recovered account to the new account
6.	When the recovered account becomes reaped (i.e. its free and reserved balance drops to zero), the final recovery link is removed


####  Architecture Overview
##### Recovery Setup


Bob is the account that create the recovery configuration

![create-2023-10-20-1110](https://github.com/Interstellar-Network/Grants-Program/assets/4605611/669e0b66-fffe-41cb-8c96-0d548c2f112b)


##### Recovery Stage

Alice is the new account created on the new mobile device

![initiate-2023-10-20-1110](https://github.com/Interstellar-Network/Grants-Program/assets/4605611/cfcb76f0-70f3-4d23-bb53-ec5eb8588d57)


#### Technology stack

- Verilog
- C/C++
- Rust/Substrate
- IPFS
- Java/Kotlin/Jetpack Compose/Swift/Swift UI


#### Planned future improvements:
* The recovery pallet can be forked and extended to manage recovery option changes by the user e.g. add/remove a friend or recovery item without a complete recovery reset.

* The initiated recovery notifications will enable the users to approve or reject the recovery within a specified period before the `vouch_recovery` is sent.
>This mechanism can prevent accidental or malicious account recovery attempts in case the NFC tag or token file is lost or stolen

* Integrating a cloud backup interface for the token recovery files will enable a one-clik onboarding experience whithout compromising recovery safety in case a cloud service is breached.

* A dedicated NFC smartcard could be used by power users/web3 teams/corporates/enterprises for recovery as well as multi-signature transactions.

>NFC payment cards could additionaly be leveraged through ZKP


### Ecosystem Fit

We already talked to a lot of Parachain Teams which are really excited to support our project, as it would help them to provide a seedless onboarding with novel recovery options through a day-to day mobile. The NFC and Token recovery were seen as a significant improvement to streamline the recovery process. Parachains could choose to integrate this new recovery pallet directly into their system or wait until we integrate it into the future substrate-based Interstellar Network to leverage additional features including cold wallet security.

### Future Plan
After some conversations with existing Polkadot wallet providers and to reach the maximum net benefit for all of the Polkadot ecosystem, we chose to shift from being a stand-alone wallet solution to become a universal account abstraction layer for existing and upcoming Polkadot wallets. Working together instead of competing against eachother will not only bring down the overall user acquisition costs for the ecosystem, but enable an upgraded UX and Security for everyone while leveraging already established Wallet <> Parachain integrations.

Since Interstellar’s substrate-architecture can also supports native Bitcoin/Ethereum/... transactions, we have been in contact with upcoming native cross-chain swap protocols to unlock BTC/ETH/... liquidity to freely flow into the Polkadot ecosystem.


## Team :busts_in_silhouette:


### Team members
- Name of team leader:
- Jean-Luc Leleu
- Names of team members:
- Nathan Prat
- Eliot Leleu

- Philippe Salats (advisor)

### Contact

- **Contact Name:** Jean-Luc Leleu
- **Contact Email:** jll@interstellar.gg
- **Website:** <https://www.interstellar.gg/>


### Legal Structure

- **Registered Address:** 61 rue de Lyon, Paris, France
- **Registered Legal Entity:** Interstellar SAS

### Team's experience
We are now multiple security and fintech entrepreneurs, security researchers, patents fillers who turned open-source developers and blockchain enthusiasts.


### Team Code Repos

- <https://github.com/Interstellar-Network>

- <https://github.com/nathanprat>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/jlleleu/> Jean-Luc Leleu

- <https://www.linkedin.com/in/nathan-prat/> Nathan Part

- <https://www.linkedin.com/in/eliotjfl/> Eliot Leleu


- <https://www.linkedin.com/in/philippesalats/> Philippe Salats (advisor)


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2.5
- **Total Costs:** 30,000 USD

### Milestone 1 — NFC Recovery

- **Estimated duration:** 4 weeks
- **FTE:** 2.5
- **Costs:** 15,000 USD


|  Number | Deliverable                  | Specification                                                                                                                                                                                                                |
| ------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                      | APACHE 2                                                              
| **0b.** | Documentation                | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up our stack and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide    | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                         
| **0d.** | Docker    |  We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. 
|      **1.** | NFC Recovery | We will develop a pallet to handle NFC recovery with a day-to-day NFC device like contacless payment or transportation cards





### Milestone 2 — Circuit file Recovery

- **Estimated duration:** 4 weeks
- **FTE:** 2.5
- **Costs:** 15,000 USD


|  Number | Deliverable                  | Specification                                                                                                                                                                                                                |
| ------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License | APACHE 2                                                             
| **0b.** | Documentation                | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up our stack and send test transactions, which will show how the new functionality works.
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.
| **0d.** | Docker    |  We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.
|      **1.** | Recovery File Token | We will develop a pallet to handle  recovery with a recovery file token based on garbled circuits |



**Additional information:**

For simplicity purposes and to provide a recovery solution that is independent of the Interstellar Network specificities, this grant does not focus on Interstellar's specific AA model (mobile devices hardware secure element/TEE and its key managements). Instead we will use Alice, Bob, etc. accounts with hardcoded keys.

The android device used for evaluation requires NFC capabilities.
> Such capabilities are getting more and more ubiquitous on smartphones

All deliverables are to be run / compiled on Linux x86_64 to comply with our current CI.







