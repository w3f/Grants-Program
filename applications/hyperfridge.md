# Hyperfridge: A Trustless Bidirectional Bridge to Banking Networks

- **Team Name:** element36 AG
- **Payment Address:** 0x56788E08C97d2677DAdED801e69bfE5D33ddACD5 (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Today blockchain and traditional ledgers (banks) are connected via "FIAT gateways" - through crypto exchanges or payment systems like Stripe which support Crypto. One remaining problem is, that we still can not "see" through the blockchain lens what is going on in traditional finance ledgers, e.g. we can not query the balance of a bank account on-chain (often referred as [information asymmetry](https://en.wikipedia.org/wiki/Information_asymmetry)). This disparity is surprising given the existence and standardisation of banking APIs. Furthermore, it's noteworthy that conventional financial systems also rely on cryptography to safeguard their APIs and to hash and sign their data.

With our first grant delivery ([FIAT-on-off-ramp](https://github.com/w3f/Grants-Program/blob/master/applications/FIAT-on-off-ramp.md)) we are able to "look inside" a bank account, synchronise data and trigger new wire transfers on-chain. Now we propose to use Zero-Knowledge Proofs to validate the data without compromising on data privacy thus achieving *soundness* for the FIAT ramp. We claim to be trustless, because we validate bank-signatures and assume that banking ledgers can be trusted due to "proof of authority" (they are heavily audited and regulated). Thus the “ramp” becomes  a “bridge” quite similar to what we use when (hyper) bridging different blockchain protocols. Hyperfridge can be run by anyone on their own hardware to connect their nodes to their own bank account without intermediaries.

 We believe to be the first group who provides an open source solution stack to balance the information asymmetry between crypto and traditional finance in a non-centralized and non-SaaS-way without intermediaries, but cryptographically validated. The vision is to create a FIAT-utility para-chain which allows anyone to "plug-in" their own bank account to Polkadot and be able to write safe applications which can send and receive funds through the banking ledgers.


Note: The submission relates to an RFP [ISO 20022](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/ISO_20022.md).

### Overview

The aim of Hyperfridge is to create a trustless bridge between traditional banking networks to blockchains specifically to the Polkadot ecosystem. Our solution allows users to "plug in" their bank accounts into the Polkadot network, enabling bidirectional data exchange between the blockchain and the banking ledger with trustless assurance.

Through the utilisation of zero-knowledge proofs, we establish a trustless oracle that validates and verifies transactions and activities associated with the "plugged" bank accounts. This technology facilitates secure settlements for purchasing or selling tokens in fiat, while extending its functionality to encompass a broader range of applications beyond mere transactions: Any smart contract can effortlessly trigger payments and respond to new transactions, essentially automating traditional fiat transactions on the blockchain. Our mission is to eliminate the need of centralised exchanges as intermediaries, providing users with the ability to leverage smart contracts without forcing users to convert their funds into cryptocurrencies. This will remove a barrier of adoption - many use cases would appreciate the finality of a ledger but can not expose themselves to the risk which comes with handling cryptocurrencies and private keys. In the end, hyperfridge works as a simple library which secures and transports information from a standardised banking API trustlessly onto the chain.

Our backend-APIs are built upon highly standardised banking protocols ([Ebics](https://ebics.org), [SEPA](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html), [ISO20022](https://www.iso20022.org/) messages), making it easy to connect seamlessly with banking networks. Many applications, including bookkeeping, already utilise these APIs, often available at no cost or minimal fees from many banks. Hyperfridge embraces these standardised APIs, ensuring a user-friendly and cost-effective integration process available for free to Polkadot programmers. Noteworthy is that some banks are already supporting immediate settlement, which will likely become mandatory in the SEPA area for all banks. Hyperfridge would then be able to support interactive scenarios - e.g. enabling Fiat/Crypto Swaps in one go.

Hyerfridge aims to be available as a free and open sourced library - and not just as a service or platform as it is today. Hyperfridge would further allow any project to run its own business logic to span both crypto and traditional finance, which we think would be unique. Crypto applications would not depend on intermediaries like Stripe or Crypto Exchanges to connect with traditional finance.

### Project Details

At this point we would like to point to our [whitepaper](https://github.com/element36-io/ocw-ebics/blob/main/docs/hyperfridge-draft.pdf). To understand the implementation strategy we need to go into some specific properties of the banking interfaces we are going to use.

#### Fundamental properties of the banking interface (ISO20022 and Ebics)

The basic idea is the following: Whenever the bank (the banking API) is transmitting documents, it sends its data with a signature - using [XML encryption standards](https://www.w3.org/TR/xmlenc-core1/). For example a response document for a daily statement of balance and transactions would contain a section like this: 

```xml
<ebicsRequest xmlns="http://www.ebics.org/H003" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Revision="1" Version="H003">
  <header authenticate="true">
    <static> ...
      <!-- Signature of the bank. "Z53" refers to which kind document was requested (and signed) -->
      <OrderDetails><OrderType>Z53</OrderType> ...
      </OrderDetails>
      <BankPubKeyDigests>
        <Authentication Version="X002" Algorithm="http://www.w3.org/2001/04/xmlenc#sha256">__some_base64_=</Authentication>
        <Encryption Version="E002" Algorithm="http://www.w3.org/2001/04/xmlenc#sha256">__some_base64_=</Encryption>
      </BankPubKeyDigests> ...
    </static> ...
  </header>
  <AuthSignature>
  <!-- Hashed and signature of Z53 document (usually a ZIP) -->
    <ds:SignedInfo>
      <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" />
      <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256" />
      <ds:Reference URI="#xpointer(//*[@authenticate='true'])">
        <ds:Transforms>
          <ds:Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" />
        </ds:Transforms>
        <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
        <ds:DigestValue>PQxx__some_base64_aaaa=</ds:DigestValue>
      </ds:Reference>
    </ds:SignedInfo>
    <ds:SignatureValue>__some_base64_</ds:SignatureValue>
  </AuthSignature>
  <body />
</ebicsRequest>
```

A wrapped Z53 document containing the daily statement showing 30191.23 as CHF balance would look similar to this:

```xml
  <BkToCstmrStmt>
    <Stmt>
      <Id>5e9ea1005fe64f1b924e968898bcfa7c</Id>
      <ElctrncSeqNb>146</ElctrncSeqNb>
      <CreDtTm>2023-06-30T19:24:46.387</CreDtTm>
      <Acct><Id><IBAN>CH4323432442432537312</IBAN></Id> </Acct>
      <Bal><Amt Ccy="CHF">30191.23</Amt><Dt><Dt>2023-06-30</Dt></Dt></Bal>
      <Ntry>...</Ntry>
    </Stmt>
  </BkToCstmrStmt>
```

The hash of the (zipped) Z53 documents needs to be validated with the data given in the ebicsRequest. "X002" refers to RSA signature key with a key length of 2048 bits, "E002" defines RSA algorithm for encryption using  ECB (Electronic Codebook) and PKCS#1 v1.5 padding ([Also see here](https://www.ibm.com/docs/en/b2b-integrator/5.2?topic=eckf-managing-certificates-keys-users)) or take a look at standardization page on [Ebics](https://www.ebics.org/en/home) and [ISO20022](https://www.iso20022.org/) or a better readable [national page](https://www.six-group.com/dam/download/banking-services/standardization/ebics/market-practice-guidelines-ebics3.0-v1.2-en.pdf). Remark: A typical question is "what is the difference between Ebics and ISO20022?" An analogy might be that EBICS is to ISO20022 what HTTP is to HTML; that is, EBICS serves as the communication protocol while ISO20022 defines the message format structure.

We use zero-knowledge proofs (circuits) to check signatures so that we do not have to publish bank statements, because this would reveal identities of transactions in clear-text. This allows us to veryfiy the data and its claim (a certain balance in our case). It is trustless to the extend that we use both secrets of the bank and the account owner to generate the proof (MPC - multi-party-computation).

Now we can shift the trust from the bank account owner to the bank itself. But can we trust the keys of the bank? Here we would rely on the processes and the key ceremonies between a bank and its client and between a bank and its national bank. Hashes of banks are published - just google for *ebics hash*. Note that each bank uses [same keys for the communication with their clients and their respective national bank](https://www.bundesbank.de/resource/blob/868928/0d72f44f05be86cf78de84138a73d837/mL/verfahrensregeln-ebics-2021-data.pdf). Thus we only need to trust the top of the authorities, not individual banks. Thus the trust can be moved further up to the nation authorities who are auditing its nations' banks.

But can we trust a nation or a government? The nations are monitored and measured by an independent international organisation called [FATF](https://www.fatf-gafi.org/en/home.html) who is responsible in setting worldwide standards on anti-money-laundering and evaluates the execution of these standards [regularly](https://www.fatf-gafi.org/en/publications/Mutualevaluations/Assessment-ratings.html) for each nation, which are usually [incorporated into local (e.g. Swiss) financial regulations](https://www.finma.ch/en/finma/international-activities/policy-and-regulation/fatf/). A system like hyperfridge can easily exclude certificates from banks from high risk countries.

To sum up: Even if you are not trusting the banking system or governments; technically hyperfridge is "as good as it can get" for integrating the traditional system on a zero-trust basis. We do not aim to improve the legacy banking systems but use protocols with a wide adoption.

For this grant we would aim at implementing *step &alpha;* of the [whitepaper](https://github.com/element36-io/ocw-ebics/blob/main/docs/hyperfridge-draft.pdf). This includes validation of account balance and validating hash and signature of the bank within the ZKP. This already creates a trustless information-exchange setup with the account holder. But we will not aim for *step &beta;* of the paper to prove "transaction inclusion". An example for transaction inclusion is that the bank statement contains a transaction which shows that Alice has sent 5 CHF to the bank account- again without revealing any transaction data publicly. Reason is that we do not want to overload the delivery with complexity and we still at the beginning of your zero-knowledge learning curve.

#### Proof system implementation

As a library we will use [Risk-Zero](https://www.risczero.com/). Reasons are:

- The risc0-verifier got [formally](https://www.github.com/risc0/risc0-lean4) verified.
- It allows complex computing (e.g. unzipping files) with existing libraries using its Risc-5 architecture. It would be much harder to use a [Rank-1 constraint system](https://www.zeroknowledgeblog.com/index.php/the-pinocchio-protocol/r1cs) like [Circom](https://docs.circom.io/).
- Its an actual ZKP library written in Rust and supporting 'no_std'.
- It is based on STARKs (not SNARKs as the Hyperfridge paper suggests). SNARKs are cheap to validate (therefore good for EVM based systems) but the of STARKs be can automated (non-interactive). As we use Off-Chain-Workers the disadvantages of SNARKs do not matter for us and we can benefit from an easy setup to reach a "trustless" state.
- But Risk-Zero provided a framework to wrap the STARK in a SNARK which can be validated with EVM based Smart Contracts.
- Risk-Zero is very efficient - which is important if we want to process large XML documents. We expect that generating a single proof based on an XML document could take several hours without [CUDA](https://en.wikipedia.org/wiki/CUDA) acceleration or using [Bonsai](https://dev.risczero.com/bonsai).
- Risk-Zero supports hardware acceleration and is offering validation as-a-service, which lowers adaption complexity.  
- We had first experiences with working with it (a proof-of-reserve system for a bank) and we like the fact to be able to implement our circuits in Rust rather than another language.

As disadvantages we see:

- Still a young framework - limitations (e.g. new ZK-vm version would likely require new proofs) and unstable APIs, especially "waiting time" for library developments need to be taken into account.
- Potentially high proofing time; but we only need one proof a day.
- Proof-size: Proof size may be too large for on-chain verification; This can be solved by snarking the STARK which would be likely solved by risc-zero framework, which we would include at a later stage. 


The library will be used generate the proof on our bankend to create a *receipt* - a document which contains the proof. We will change the existing Off-Chain-Worker (OCW) crate to validate the receipt before updating any state of the OCW. See [risk zero proofing system](https://dev.risczero.com/proof-system/) for details.

Specification of proof system (see [Hyperfridge whitepaper](https://github.com/element36-io/ocw-ebics/blob/main/docs/hyperfridge-draft.pdf) for more details):

- Secret input: Ebics envelope as XML and Z53/Camt53 as ZIP binary. See XMLs above.
- Public input: Public Certificate of the Bank or name of bank, bank account number,  balance and date.

The prof system consists of (see [for details](https://dev.risczero.com/proof-system/proof-system-sequence-diagram)):

- The circuit (for risk-zero an ELF lib) including its hash.
- Client code which generates a Receipt (ZKP) as a modification to the [Ebics-Backend](https://github.com/element36-io/ebics-java-service) from our first grant.
- The modifications of the [FIAT-ramp Off-Chain-Worker](https://github.com/element36-io/ocw-ebics/blob/main/INSTRUCTIONS.md) which validates the receipt.

#### Other areas of implementation

Our first grant contained a stable coin as an application for the FIAT-on-off ramp. We adapt this use case for mint (on-ramp), burn (off-ramp) and adapt units tests. UIs will provide access to receipts for self-validation.

### Ecosystem Fit

The information asymmetry is an important topic in the whole blockchain ecosystem, especially when integrating crypto- with traditional finance - think of FTX, Tether etc. It means that traditional finance is considered a black box, and can not be integrated like we would typically bridge blockchain protocols on a pure technical layer in a trustless manner. What is often overlooked here is that also traditional finance widely uses standardised APIs and messages, secured by digests and signatures to exchange data - very similar to blockchain protocols. Our library will use and validate the data provided (and digitally signed) by banks - means that anyone with a regular bank account is now able generate proof of balance or transactions to a ledger. The bank account owner is not able to generate those proofs without the bank's signature.   We think we can add relevant delivery to closing the gap of information asymmetry by providing our library to the public. 

Every stage of the journey to integrate traditional finance into the crypto world will create value for the connecting protocol, because it is possible to enable new use cases and bring value into the system. Employing zero-knowledge proofs to ensure the trustlessness of these bridges represents a groundbreaking initiative, paving the way for potential blueprints for future projects. The unique aspect of our approach lies in our objective. We are not seeking to establish a contract or parachain-based system, akin to projects like Soracard or Stripe. Rather, our goal is to openly share our source code as infrastructure, detailing how to securely connect to banking networks in a trustless manner.

The same principles can extend to the Financial Information eXchange protocol [(FIX)](https://en.wikipedia.org/wiki/Financial_Information_eXchange), which provides standardised messages for asset management. This opens the possibility to establish bidirectional and trustless bridges for entire asset portfolios (e.g automated tokenized ETFs or  treasury bills) onto the blockchain.

#### Similar Projects

[Stripe](Stripe.com): is a leading traditional payment provider typically used by webshops all over the world. It solves the problem of companies receiving payments from anywhere in the world. Stripe is including blockchain use-cases as well: “Web3 companies can now direct customers to a Stripe-hosted onramp to buy cryptocurrencies.” [Stripe Fiat-to-Crypto-onramp](https://stripe.com/en-dk/newsroom/news/fiat-to-crypto-onramp). Hyperfridge would allow Web3 companies to replace stripe on the frontend with QR code as a payment gateway reducing fees from up to 3 % of stripe to 0 % with hyperfridge. But more importantly hyperfridge allows to consume events (payouts from stripe) and trigger payments on-chain and trustless.

[Soracard](https://soracard.com/): Polkaswap offers to connect Soracard to your wallets. Its basically a bank offering an account, which allows you to on- and offramp crypto with payments directly to your Sora bank account. Hyperfridge is a library (not a platform or bank) which allows you to implement functionality like Sora offers. Hyperfridge could be used with a Sora bank account to consume events on the bank account if they offer ISO20022 compliance messages; but only banks in the EU are obliged to support API based banking.


## Team :busts_in_silhouette:

### Team members

* Leader: Walter Strametz, CTO Sygnum Bank, founder element36.io: Worked on roughly a dozen blockchain projects in Switzerland - among them building world's first digital asset bank ([Sygnum AG](https://sygnum.com)).
* Dastanbek Samatov: Senior Rust Engineer with 3 years of experience in Substrate. Worked as a core developer in a couple of parachain teams and was part of multiple Web3 Foundation grants. See more in [Team's Experience](#teams-experience) section.
* Vladimir Nicolic, Full Stack Developer: Javascript Senior, worked on decentral identity, large parts of the element36 modules and the Dapp for the exchange and compliance-administration.
* Nicolas Le Bel, Cryptograph: Working full-time on zero-knowledge systems and once peer with Walter at Sygnum bank. He is advising us on architectural decisions especially regarding the proof system.

We are in touch with [Risc-Zero](https://risczero) team who will support us with reviews, technical support at access to the [Bonsai](https://dev.risczero.com/bonsai) as proof-generation-system via their API.  

### Contact

- **Contact Name:** Walter Strametz
- **Contact Email:** walter.strametz@element36.io
- **Website:** https://element36.io

### Legal Structure 

- **Registered Address:** Bahnmatt 25, CH-6340 Baar, Zug,Switzerland
- **Registered Legal Entity:** element36 AG, [CHE-180.390.659](https://zg.chregister.ch/cr-portal/auszug/auszug.xhtml?uid=CHE-180.390.659)

### Team's experience

We have already submitted a grant project successfully meeting standard and requirements: [FIAT-on-off-ramp](https://github.com/w3f/Grants-Program/blob/master/applications/FIAT-on-off-ramp.md). The project is also linked under the [RFP section](https://grants.web3.foundation/docs/RFPs/ISO_20022). 

Walter (and element36) a fully pegged ERC-20 stable-coin (EUR, CHF) and an exchange based on Ethereum, has extensive experience in the financial industry and is currently CTO of Sygnum Bank, a Swiss Crypto Bank. Dastan implemented the Substrate part of the last grant - a [FIAT-on-off-ramp](https://github.com/element36-io/ocw-ebics), which this grant is building upon. Nicolas will support us especially on the architecture level of the ZK proof system.

Here is the list of relevant repos:

Walter:

- [Fiat-on-off-ramp, backend](https://github.com/element36-io/ebics-java-service)
- [Eth-Stablecoin](https://github.com/element36-io/cash36-contracts)
- [Frontend (Exchange for Stablecoin](https://github.com/element36-io/cash36-exchange)
- [Usage Examples for Stablecoin](https://github.com/element36-io/cash36-examples)

Dastan:

- [Fiat-on-off-ramp](https://github.com/element36-io/ocw-ebics).
- [ISO-8583](https://github.com/w3f/Grants-Program/pull/1809)
- [Subsemly](https://github.com/LimeChain/subsembly).
- [Runtime in Assemblyscript](https://github.com/LimeChain/as-substrate-runtime).
- [SCALE CODEC](https://github.com/LimeChain/as-scale-codec)

### Team Code Repos

- https://github.com/element36-io/ocw-ebics: The off-chain worker of our first grant [FIAT-on-off-ramp](https://github.com/w3f/Grants-Program/blob/master/applications/FIAT-on-off-ramp.md). 
- https://github.com/element36-io/ebics-java-service: A wrapper for bank-APIs where we will integrate the ZKP. 
- https://github.com/element36-io/ocw-ebics/blob/main/docs/hyperfridge-draft.pdf: The hyperfridge whitepaper discussing the concept.

### Team LinkedIn Profiles (if available)

- [Walter](https://www.linkedin.com/in/walter-strametz-6b44618b/)
- [Dastan](https://www.linkedin.com/in/dastanbek-samatov-30ab71128/)
- [Nicolas](https://www.linkedin.com/in/nicolas-le-bel/)

## Development Status :open_book:

Relates to RFP: [ISO 20022](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/ISO_20022.md).

Repos:

- https://github.com/element36-io/ocw-ebics: The off-chain worker of our first grant [FIAT-on-off-ramp](https://github.com/w3f/Grants-Program/blob/master/applications/FIAT-on-off-ramp.md). 
- https://github.com/element36-io/ebics-java-service: A wrapper for bank-APIs where we will integrate the ZKP. 
- https://github.com/element36-io/ocw-ebics/blob/main/docs/hyperfridge-draft.pdf: The hyperfridge whitepaper discussing the concept.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months, 5 milestones
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** USD 30'000

### Milestone 1 - Risk-Zero ZKP implementation based on static test data

- **Estimated duration:** 2 month
- **FTE:**  1.5
- **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code, a basic tutorial and a markdown description of the proof system. |
| 0c. | Testing Guide | Provide unit tests of core functions and test data to ensure functionality. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1a. | risc0 Guest Program | Code (circuit) to generate the proof, later used by the proving system. Secret input of [Guest Program](https://dev.risczero.com/terminology#guest-program): Ebics envelope as XML and Z53/Camt53 file(s) as ZIP binary - see XML examples above. The Public input is: Public Certificate of the Bank or name of bank, bank account number, balance and date. The [journal](https://dev.risczero.com/terminology#journal) will contain balance, currency, timestamp in the ebics-envelope, timestamp of the proof, client-account-number, Bank-ID and sequence number of the bank-statement. The circuit will check the hash of the (zipped) Z53 documents and compares it with the data given in the ebicsRequest. It checks the signature of the Ebics request and the signed hash of the ZIP file using crypto standards X002 and E002. "X002" refers to RSA signature key with a key length of 2048 bits, "E002" defines RSA algorithm for encryption using  ECB (Electronic Codebook) and PKCS#1 v1.5 padding.|
| 1b. | Generate Receipt | Generate [receipt](https://dev.risczero.com/terminology#receipt) which proves that the computation (e.g. balance) is correct and signed by the bank.  |
| 1c. | Validator | Code to validate the receipt. |
| 1d. | Hyperfridge Crate | The crate to create and validate recipes (ZKPs), wrapping the functionality.  |
| 2. | Unit Tests | We will add unit tests and test data for creating and validating proofs which includes edge cases like wrong balance claims or faulty signature of the bank. |
| 3. | Performance Benchmark | Present a table with performance metrics, so that hyperfride proofing times can be interpolated with data from [risc-zero](https://dev.risczero.com/datasheet.pdf). |


### Milestone 2 - Banking API Integration

- **Estimated duration:** 1 month
- **FTE:**  1.2
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can start the backend and send test transactions, which will show how the new functionality works.|
| 0c. | Testing Guide | Adapt unit tests of core functions and test data to ensure functionality and robustness of the overall system (bridge and proofs). In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Generate Receipt | Retrieve data form backend and generate receipt (proof) using the proving system.  |
| 2. | Provide API | We will provide an application based on Spring-Boot that will contain `getBankstatements():Statement[]` (which includes account balance),  `createOrder (OutgoingPayment)` and `simulatePayment(Payment)`  as a REST interface as [described](#b-bank-account-rest-api). The recipe data is added in the [backend API](http://w.e36.io:8093/ebics/swagger-ui/?url=/ebics/v2/api-docs/#/) `/ebics/api-v1/bankstatements`` with two new fields in the top level of the JSON-response: `risc0Recipe:base64` and `risc0Hash:base64` as its hash so that clients can use a public verifier. |
| 3. | Provide Banking-UI | Show a UI to see the status of banking backend (show accounts, transactions etc). We will use [LibEuFin](https://github.com/element36-io/ebics-java-service/blob/main/docs/SANDBOX.md) - same as in our first grant. |
| 4. | Unit Tests | We will adapt unit tests and test data to cover creating and validating proofs.  |
| 5. | Repository | Repository will be the existing repo [ebics-java-service](https://github.com/element36-io/ebics-java-service)  |
| 6. | Backend-Docker | Provide docker-compose images for setting up banking API wrapper, LibEuFin proxy for banking-API. Set up test data in the backend via script and run tests which include the proving system.  |
| 7. | Swagger | Provide Swagger docu for the backend. |


### Milestone 3 - Integration into fiat-ramp pallet

- **Estimated duration:** 1 month
- **FTE:**  1.2
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can integrate hyperfridge and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Adapt unit tests of core functions and test data to ensure functionality and robustness of overall system (bridge and proofs). In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Integrate Receipt | Code to integrate the validitator in the Off-Chain Worker: when synchronising using following steps: a) poll the bank account for incoming (new) bank transactions and initiate `mint` transactions accordingly if proof validades. b) Listen for burn-events for stablecoins on our substrate chain to initiate outgoing transactions on our bank account. c) Use local storage to map between bank account and wallet or contract address for the mint and burn. Enter a "suspended" state if validation fails until a valid proof arrives. As validator either use own code or - if available - [universal rollup](https://dev.risczero.com/litepaper#solution) and Bonsai validator .   |
| 2. | fiat-ramp pallet | Code will be found in [fiat-pallet](https://github.com/element36-io/ocw-ebics/tree/main/pallets/fiat-ramps). |
| 3. | Unit Tests | We will adapt unit tests and test data to cover creating and validating proofs.  |


### Milestone 4 - Node with stable-coin application


- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 7,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can  spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Adapt unit tests of core functions and test data to ensure functionality and robustness of overall system (bridge and proofs). In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Stablecoin App | Change stablecoin implementation include validating the proof for mint, burn and updates on the FIAT-bridge. Failed validating leads to breaking operations issuing a "validation failed" events.  |
| 2. | fiat-ramp node | Code will be found in [fiat-node](https://github.com/element36-io/ocw-ebics/tree/main/node) part of the repo. |
| 3. | Unit Tests | We will adapt unit tests and test data to cover creating and validating proofs.  |
| 4. | Whitepaper| Update the hyperfridge whitepaper with new learnings and description of the implementation. |
| 5. | API| Update the hyperfridge whitepaper with new learnings and description of the implementation. |


### Milestone 5 Demo-UI with stable-coin application

* **Estimated Duration:** 1 month
* **FTE:**  0.5
* **Costs:** 1.000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can start the UI and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Adapt unit tests of core functions and test data to ensure functionality and robustness of overall system (bridge and proofs). In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains the hyperfridge. |
| 1a. | Buy me a coffee dApp | Same as in our first grant, but with ZKPs: DApp where users can accept donations in stablecoin or via bank transfer, making receipts available for self-validation. This will consist of a frontend app in React which serves as an interface for interacting with the chain. Users will be able to link their on-chain `AccountId` to their bank account details (IBAN, balance, etc.), withdraw on-chain balance to their bank account and transfer funds in the bank account via on-chain extrinsic. |
| 1b. | Proof-Download | UI will provide Proof data and instructions, so that anyone can check the proofs offline by themselves, without UI. |
| 2. | Docker-Compose: node & Dapp | We will add the Dapp to the docker-compose file of previous Milestones to demonstrate the full functionality of our chain, the ocw, including a proxy for the FIAT Rest Interface.  |


## Future Plans

In the short term, our primary focus is on the challenging task of implementing and refining the Zero-Knowledge Proofs (ZKPs). As immediate follow-up we see:

- If needed (smaller proofs), snarking the Risc0 Stark of this grant for on-chain verification.
- Adding proofs for *transaction inclusion*, as discussed in the whitepaper. Risc0 is finalising its work on ["sub-proofs"](https://www.risczero.com/news/continuations) which will likely allow an efficient implementation for generating a separate proof for each transaction.
- Risc0 is working on a general on-chain validator and an ecosystem to make it easy for applications to integrate.
- Having the above features we see a compelling case for a para-chain.

<!-- A note to *transaction inclusion* - the focus on the grant is only on *step &alpha;* as referred in the whitepaper. Transaction inclusion is a very powerful extension and would allow a zero-trust FIAT bridge on a transaction level. Besides the balance of an account (basic case for a stablecoin) we would be able to create smart contracts which interact with bank-accounts in a trustless manner (e.g. proof-of-reserve, for payments or cross-chain-bridges having FIAT on the other end). -->

We plan to showcase our progress at select events and conferences (sub0, Polkadot decoded or Meetups). The team of risc0 is very supportive and they see our implementation as a strong use-case for their libraries. [Polymec](https://parachains.info/details/polimec) is strongly interested in using the system. We maintain a strong relationship with Crypto-operating banks in Switzerland.

## Referral Program (optional) :moneybag:

None.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**: Web3 Foundation Website 

Additional information:

- Note the grant we have submitted [FIAT-on-off-ramp](https://github.com/w3f/Grants-Program/blob/master/applications/FIAT-on-off-ramp.md). 
- There are no other financial contributions other than our own and the one from our first grant. 
- We did not apply to any other grant, but - if we are successful with this - we look into implementing a EVM validator based on SNARKs which are able to validate Receipts generated with the codebase and runtimes of this grant.
