# Social Recovery Wallet

* **Status:** [Under Development 1](https://github.com/w3f/Grants-Program/blob/master/applications/Plus-social-recovery-wallet.md), [Under Development 2](https://github.com/w3f/Grants-Program/blob/master/applications/social_recovery_wallet.md)
* **Proposer:** [Noc2](https://github.com/Noc2)

## Project Description :page_facing_up: 

Managing your own private keys is a difficult task. The average person doesn’t want to spend multiple hours to ensure the security of their keys. This leads to people having difficulties to join the blockchain space or even worse leads to the loss of funds. One solution to this problem is the implementation of a social recovery system. It allows users to recover their accounts if their key or other authentication mechanism has been lost. Therefore you usually set up at least 3 "guardians" (e.g. other devices, friends or family or institutions), of which a majority can cooperate to change the key of the account (often after some delay). Kusama has for this purpose currently the [social recovery pallet implemented](https://github.com/paritytech/substrate/blob/master/frame/recovery). 

The goal of this RFP is to find teams that are willing to leverage this or similar mechanism to create wallet solutions (desktop, web, mobile, extensions, etc.) which are as easy to use as possible and at the same time offer a high security for the average user. 

Apart from the [social recovery pallet](https://github.com/paritytech/substrate/blob/master/frame/recovery), the support of the [Proxy Module](https://github.com/paritytech/substrate/tree/master/frame/proxy) and [Multisig Module](https://github.com/paritytech/substrate/tree/master/frame/multisig) is encouraged as part of this RFP to further improve the user experience. 

**Existing Social Recovery Wallets on Ethereum:** 
- https://www.argent.xyz/ 
- https://loopring.io/#/  

**Other interesting sources:** 
- https://www.parity.io/social-recovery-on-substrate/ 
- https://vitalik.ca/general/2021/01/11/recovery.html 
- https://github.com/paritytech/substrate/blob/master/frame/recovery 
- https://github.com/paritytech/substrate/tree/master/frame/proxy 
- https://github.com/paritytech/substrate/tree/master/frame/multisi

## Deliverables :nut_and_bolt:

The deliverables highly depend on the exact wallet implementation and therefore aren’t further described as part of this RFP. For the grant application you should take a look at the [application template](https://github.com/w3f/Grants-Program/blob/master/applications/application-template.md#overview-1) and try to specify the deliverables as detailed as possible. 
