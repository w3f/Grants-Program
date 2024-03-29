# ISO20022 Implementation POC

- **Team Name:** Solidbit GmbH
- **Payment Address:** CHF (22 November, 2023, 08:57 UTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview

This proposal is a response to [this RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/ISO_20022.md).


ISO20022 is the future standard of financial transactions of all kinds including payments, foreign exchange and securities trading. Many blockchain ecosystems like [Ripple](https://ripple.com/), [Cardano](https://cardano.org/) and [Stellar](https://stellar.org/) are already ISO20022 compliant. In order to make Polkadot ISO20022 compatible as well, it is necessary to start designing how such an integration would look like in pratice. Some [prior theoretical research](https://github.com/w3f/Grants-Program/blob/master/applications/ISO20022.md) has been conducted and in this project we want to go a step further and build a practical Proof-Of-Concept for ISO20022 payments in Substrate. ISO20022 covers a vast amount of different messages for different financial transactions. In this project, we want to focus on customer-to-customer interbank payments evolving around the ISO20022 message [pain.001.001.11](https://developer.gs.com/docs/services/transaction-banking/pain001FedACHsample/)(CustomerCreditTransferInitiationV11).

### Project Details

The goal of this project will be to implement a fully functional minimal viable product (MVP) that lets banks settle payments on the Polkadot blockchain using the ISO20022 standard. We will focus on customer-to-customer interbank payments and payment reversals, ie. Customer C1 with a bank account at bank B1 sending an amount of DOT to customer C2 with an account at bank B2 using ISO20022 messages.

#### MVP Components
This MVP will consist of the following components:

##### 1. Substrate Pallet
The first component is a pallet that will be responsible for storing hashed ISO20022 messages and handling interbank payment settlements as well as a payment reversal mechanism.
1. **Account management for banks:** Banks create an account and transfer some DOT to it.
2. **Transaction management:** Banks can submit a hashed (and salted) ISO20022 message along with the receiving bank account and DOT amount to the pallet in order to transfer a certain amount of DOT to the receiving bank.
3. **Payment reversal mechanism:** Banks will be able to revert payments in order to be compliant with ISO20022 messages such as pain.007.001.11 (CustomerPaymentReversalV11) or pacs.007.001.12 (FIToFIPaymentReversalV12).

##### 2. Client for Banks
In order for banks to use Polkadot as a payment settlement system, they will need to run a client which offers the following funcionality:

1. API to receive customer payment instructions
2. ISO20022 message parser/creator
3. Send extrinsics to pallet for transfer
4. Send extrinsic to pallet for reversal
5. Send/Read ISO messages to bus
6. Verify relevant ISO messages on chain
7. Client account management system
    - Create for each client an account number
    - Store for each client a list of hashes form the chain
    - Functionality to derive client balance from onchain hashes
8. Hashmap-like storage of all ISO messages and salts

We will use NodeJs to build this MVP client.

##### 3. Interbank Message Bus
As the blockchain only stores hashes of the ISO 20022 messages in order to preserve privacy, we need some a  communication system to exchange ISO20022 messages between banks.


#### Payment Flow
The below diagram describes the steps necessary to complete an ISO20022 payment using the Substrate pallet as the settlement system. Customer1 with a bank account at Bank1 is sending DOT to Customer2 with an account at bank Bank2. In this example we use two ISO20022 messages (for an example please see the appendix):
1. pain.001.001.11 (CustomerCreditTransferInitiationV11) for the customer to initiate the payment.
2. pacs.008.001.11 (FIToFICustomerCreditTransferV11) for the interbank transfer.

![Payment Flow](https://solid-bit.com/w3f/iso20022.png "Payment Flow")

#### Design Choices

1. We do not process ISO20022 messages onchain in order to preserve privacy.
2. We do not use offchain-workers for message processing also for privacy reasons.
3. We do not create customer accounts on chain, because they could easily be linked to a real person, again breaking privacy.
4. We do not use one centralized message processing institution, as we want to give each bank full access to their on-chain funds, at least guaranteeing decentralization on the interbank level.




### Ecosystem Fit

Many competing blockchain ecosystems are already ISO20022 compliant (see above). If Polkadot as well wants to become compatible with the traditional finance industry, an ISO20022 integration will be the right place to start.

## Team :busts_in_silhouette:

### Team members

- Piero Guicciardi (Project Lead & Developer)
- Christian Langenbacher (Advisor Implementation)

### Contact

- **Contact Name:** Piero Guicciardi
- **Contact Email:** pg@solid-bit.com
- **Website:** https://solid-bit.com

### Legal Structure

- **Registered Address:** General Wille Strasse 99, CH-8706 Meilen, Switzerland
- **Registered Legal Entity:** Solidbit GmbH (CHE-267.620.734)

### Team's experience

Piero has been a core protocol developer for [Encointer](https://github.com/encointer) for the last two years, has recently become a member of the Polkadot Technical Fellowship and was granted a [W3F Grant](https://github.com/w3f/Grants-Program/pull/2123).

Below you can find a list of contributions by Piero:

#### W3F Grant Democratic Governance
- Application: https://github.com/w3f/Grants-Program/pull/2123
- Submission: https://github.com/w3f/Grant-Milestone-Delivery/pull/1101 

#### Encointer core protocol:
- Design and implement faucet
    -  https://github.com/encointer/book/pull/14
    - https://github.com/encointer/encointer-node/pull/333
    - https://github.com/encointer/pallets/pull/319
    - https://github.com/encointer/pallets/pull/326
    - https://github.com/encointer/encointer-parachain/pull/193
- Design and implement democracy module
    - https://book.encointer.org/protocol-democracy.html
    - https://github.com/encointer/pallets/pull/273
- Redesign participant attestations
    - https://github.com/encointer/pallets/pull/231
    - https://github.com/encointer/pallets/issues/215
- Endorsement after registration 
    - https://github.com/encointer/pallets/pull/202
- Early reward payout 
    - https://github.com/encointer/pallets/pull/233
- Allow for upgrading registrations and unregistering 
    -   https://github.com/encointer/pallets/pull/254
- Allow reputables to endorse
    - https://github.com/encointer/pallets/pull/268
- Geohash location validation algorithm
    - https://github.com/encointer/pallets/pull/55
- Constant time random permutation for meetup assignment
    -  https://github.com/encointer/pallets/pull/68

#### Misc:
- Implement custom RPCs
    - https://github.com/encointer/pallets/pull/196
- Implement storage migrations for Weight V2
    - https://github.com/encointer/pallets/pull/308
- Various polkadot/substrate dependency bumps
    - https://github.com/encointer/pallets/pull/299
    - https://github.com/encointer/encointer-parachain/pull/171
- Fee payment in Encointer community currency
    - https://github.com/encointer/encointer-node/pull/194/files
    - https://github.com/encointer/encointer-node/pull/226
    - https://github.com/encointer/pallets/pull/190
- Integrate try runtime 
    - https://github.com/encointer/encointer-parachain/pull/177/files
    - https://github.com/encointer/encointer-node/pull/312/files

	
#### Non rust contributions:
- Build an indexer using qubquery
    - https://github.com/encointer/subquery (Main author)
- Build an accounting tool for encointer businesses
    - https://github.com/encointer/accounting-frontend (Main author)
    - https://github.com/SolidbitGmbH/encointer-accounting-backend (Main author)
- Build an integration for Encointer personhood in KILT
    - https://github.com/encointer/kilt-personhood (Main author)
- Contributions to encointer js
    - https://github.com/encointer/encointer-js/pull/78


The project advisor Christian Langenbacher is the tech lead of [Encointer](https://github.com/encointer) and [Integritee](https://github.com/integritee-network).


Piero has previously received a W3F grant for a different project(see above).


### Team Code Repos

- https://github.com/pifragile
- https://github.com/SolidbitGmbH

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/pifragile
- https://github.com/clangenb


### Team LinkedIn Profiles

- https://www.linkedin.com/in/piero-guicciardi-66b939152/
- https://www.linkedin.com/in/christian-langenbacher-baa629182/


## Development Status :open_book:
This project has not started yet, but there has been some previous related work in the ecosystem (see references), which we studied and will build upon.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 month
- **Full-Time Equivalent (FTE):** 0.43 (26 person days)
- **Total Costs:** 27040 CHF

### Milestone 1 — Substrate Pallet

- **Estimated duration:** 1 month
- **FTE:**  0.5 (10 person days)
- **Costs:** 10400 CHF


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. |  Scope and Protocol | We will define all relevant ISO20022 messages for the MVP and     - define a minimal set of XML attributes for each ISO20022 message|
| 2. |  Blockchain | Create a Substrate chain.|
| 3. |  Pallet | We will implement the pallet as described above.|



### Milestone 2 — Bank Client for Blockchain Interaction and Substrate Integration Tests

- **Estimated duration:** 2 months
- **FTE:**  0.4 (16 person days)
- **Costs:** 16640 CHF


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that descibes the functionality of the pallet, bank client and message bus.|
| 1. |  Bank client | We will implement the bank client that interacts with the Substrate Chain as well as with other banks as specified above.|
| 2. |  Interbank Message Bus | We will implement the interbank message bus as described above.|
| 3. |  Integration Tests | Connect all parts using a running Substrate blockchain, a message bus and two customers with accounts at two banks, creating transactions and transaction reversals.|

## Future Plans

There are many ways in which this project can be extended in the future. Some of them are:

### Protocol
1. Allow for multiple currencies on the Polkadot Asset Hub
2. Give customers direct access to their onchain funds
3. Process a wider variety of ISO20022 transactions like card payments, currency conversions or even securities trading
4. Make bank client PCI SSC compliant

### Adoption
1. Create partnerships with banks for pilot phase
2. Polkadot becomes a ISO20022 member to drive adoption

## References
- [ISO 20022 Message Catalogue](https://www.iso20022.org/iso-20022-message-definitions?business-domain=1)
- [Nice website describing payment flows](https://www.iso20022payments.com/)
- [Book ISO20022 For Dummies](https://www.swift.com/campaign/iso-20022/iso-20022-dummies)
- [ISO20022 example messages](https://developer.gs.com/docs/services/transaction-banking/pain001sample/)

### Previous Related W3F Grants

ISO20022 Research:
- https://github.com/w3f/Grants-Program/blob/master/applications/ISO20022.md
- https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/ISO20022-milestone1.md


ISO8583 Research:
- https://github.com/w3f/Grants-Program/blob/master/applications/Integrating-ISO8583.md
- https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/ISO8583-milestone-1.md


ISO8583 Implementation:
- https://github.com/w3f/Grants-Program/pull/2184
- https://github.com/w3f/Grants-Program/pull/1809
- https://github.com/w3f/Grants-Program/blob/master/applications/ISO-8583-implementation.md
- https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/iso_8583_PoC_milestone_1.md

## Additional Information :heavy_plus_sign:

## Appendix
### 1. pain.001.001.11 message example ([source](https://developer.gs.com/docs/services/transaction-banking/pain001FedACHsample/))
```
<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pain.001.001.03" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:iso:std:iso:20022:tech:xsd:pain.001.001.03 file:///C:/pain.001.001.03.xsd">
   <CstmrCdtTrfInitn>
      <GrpHdr>
         <MsgId>431053</MsgId>
         <CreDtTm>2022-03-11T01:33:49</CreDtTm>
         <NbOfTxs>2</NbOfTxs>
         <CtrlSum>600.11</CtrlSum>
         <InitgPty>
            <Nm>Initiating Party Name</Nm>
            <Id>
               <OrgId>
                  <Othr>
                     <Id>Party Id</Id>
                  </Othr>
               </OrgId>
            </Id>
         </InitgPty>
      </GrpHdr>
      <PmtInf>
         <PmtInfId>13036902</PmtInfId>
         <PmtMtd>TRF</PmtMtd>
         <NbOfTxs>2</NbOfTxs>
         <CtrlSum>200.00</CtrlSum> 
         <PmtTpInf>
            <SvcLvl>
               <Cd>MURG</Cd>
            </SvcLvl>
            <LclInstrm>
               <Cd>CTX</Cd>
            </LclInstrm>
            <CtgyPurp>
               <Prtry>Mortgage</Prtry>
            </CtgyPurp>
         </PmtTpInf>
         <ReqdExctnDt>2022-03-11</ReqdExctnDt>
         <Dbtr>
            <Nm>Debtor Name</Nm>
            <PstlAdr>
               <StrtNm>Debtor Streeet Name</StrtNm>
               <TwnNm>Debtor Town Name</TwnNm>
               <CtrySubDvsn>Debtor country sub division</CtrySubDvsn>
               <Ctry>US</Ctry>
            </PstlAdr>
            <Id>
               <OrgId>
                  <Othr>
                     <Id>GS00005132</Id> 
                  </Othr>
               </OrgId>
            </Id>
            <CtryOfRes>US</CtryOfRes>
         </Dbtr>
         <DbtrAcct>
            <Id>
               <Othr>
                  <Id>Debtor Account Number</Id>
               </Othr>
            </Id>
            <Ccy>USD</Ccy>
         </DbtrAcct>
         <DbtrAgt>
            <FinInstnId>
               <ClrSysMmbId>
                  <ClrSysId>
                     <Cd>USABA</Cd>
                  </ClrSysId>
                  <MmbId>026015079</MmbId>
               </ClrSysMmbId>
               <PstlAdr>
                  <Ctry>US</Ctry>
               </PstlAdr>
            </FinInstnId>
         </DbtrAgt>
         <CdtTrfTxInf>
            <PmtId>
               <EndToEndId>Paymen end to end Id </EndToEndId>
            </PmtId>
            <Amt>
               <InstdAmt Ccy="USD">200.00</InstdAmt>
            </Amt>
            <CdtrAgt>
               <FinInstnId>
                  <ClrSysMmbId>
                     <ClrSysId>
                        <Cd>USABA</Cd>
                     </ClrSysId>
                     <MmbId>Clearing system Membership ID</MmbId>
                  </ClrSysMmbId>
                  <PstlAdr>
                     <Ctry>US</Ctry>
                  </PstlAdr>
               </FinInstnId>
            </CdtrAgt>
            <Cdtr>
               <Nm>Creditor Account Name</Nm>
               <PstlAdr>
                  <Ctry>US</Ctry>
               </PstlAdr>
            </Cdtr>
            <CdtrAcct>
               <Id>
                  <Othr>
                     <Id>Creditor Account Number</Id>
                  </Othr>
               </Id>
               <Tp>
                  <Cd>CACC</Cd>
               </Tp>
            </CdtrAcct>
         </CdtTrfTxInf>
      </PmtInf>
      <PmtInf>
         <PmtInfId>13036906</PmtInfId>
         <PmtMtd>TRF</PmtMtd>
         <CtrlSum>200.00</CtrlSum> 
         <PmtTpInf>
            <SvcLvl>
               <Cd>MURG</Cd>
            </SvcLvl>
            <LclInstrm>
               <Cd>CTX</Cd>
            </LclInstrm>
            <CtgyPurp>
               <Prtry>Proprietary code </Prtry>
            </CtgyPurp>
         </PmtTpInf>
         <ReqdExctnDt>2022-03-11</ReqdExctnDt>
         <Dbtr>
            <Nm>Debtor Name</Nm>
            <PstlAdr>
               <StrtNm>Street Name</StrtNm>
               <TwnNm>Town Name</TwnNm>
               <CtrySubDvsn>country Sub Division</CtrySubDvsn>
               <Ctry>Country</Ctry>
            </PstlAdr>
            <Id>
               <OrgId>
                  <Othr>
                     <Id>GS00005134</Id>
                  </Othr>
               </OrgId>
            </Id>
            <CtryOfRes>US</CtryOfRes>
         </Dbtr>
         <DbtrAcct>
            <Id>
               <Othr>
                  <Id>270008045186</Id>
               </Othr>
            </Id>
            <Ccy>USD</Ccy>
         </DbtrAcct>
         <DbtrAgt>
            <FinInstnId>
               <ClrSysMmbId>
                  <ClrSysId>
                     <Cd>USABA</Cd>
                  </ClrSysId>
                  <MmbId>026015079</MmbId>
               </ClrSysMmbId>
               <PstlAdr>
                  <Ctry>US</Ctry>
               </PstlAdr>
            </FinInstnId>
         </DbtrAgt>
         <CdtTrfTxInf>
            <PmtId>
               <EndToEndId>NSMGSB13036911</EndToEndId>
            </PmtId>
            <Amt>
               <InstdAmt Ccy="USD">400.11</InstdAmt>
            </Amt>
            <CdtrAgt>
               <FinInstnId>
                  <ClrSysMmbId>
                     <ClrSysId>
                        <Cd>USABA</Cd>
                     </ClrSysId>
                     <MmbId>028000082</MmbId>
                  </ClrSysMmbId>
                  <PstlAdr>
                     <Ctry>US</Ctry>
                  </PstlAdr>
               </FinInstnId>
            </CdtrAgt>
            <Cdtr>
               <Nm>Creditor Name</Nm>
               <PstlAdr>
                  <Ctry>US</Ctry>
               </PstlAdr>
            </Cdtr>
            <CdtrAcct>
               <Id>
                  <Othr>
                     <Id>31062765</Id>
                  </Othr>
               </Id>
               <Tp>
                  <Cd>CACC</Cd>
               </Tp>
            </CdtrAcct>
         </CdtTrfTxInf>
      </PmtInf>
   </CstmrCdtTrfInitn>
</Document>
```