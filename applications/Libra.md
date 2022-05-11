# Project Libra

- **Project Name:** Libra - Decentralized Payment Network
- **Team Name:** @Scale Technologies
- **Payment Address:** 0x77AE9e7c90E6f6137AC3b3cd09A4bdc4654A0fe5 (ERC20 USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Libra Payment Network is a decentralized-first payment system. Libra allows people to accept cryptocurrencies as a payment method and handle real-world eCommerce transactions without hassle.

### Overview

Blockchain is revolutionizing eCommerce, making payment safer and faster while bringing greater access to global consumers.  
Due to the nature of digital currency protocols, transactions cannot be canceled or altered once they are initiated.  
However, global eCommerce data shows that at least 30% of all products ordered online are returned.  

How can we adopt blockchain to eCommerce with such a barrier?

Libra was born to tackle this problem and help facilitate blockchain adoption in the eCommerce industry.  
Libra is a decentralized payment network. Through its SDK, Libra allows sellers to accept cryptocurrency payments in minutes.  
Libra includes a Lock and Release Payment (LRP) Protocol and Resolvers Network at its core.  
LRP Protocol helps the buyer to purchase with confidence. It also helps the seller to increase conversion and do proper order handling.  
Resolvers Network leverages the power of blockchain and the community to resolve transaction conflict in a quick and efficient method without involving any financial institution.  

Libra bridges the gap between blockchain and eCommerce to enable all people to exchange value and transact globally, securely, at significantly lower cost, and more inclusively than traditional financial systems allow.  

### Project Details
The project's scope is to build three core components that define the foundation of Libra Network: LRP protocol, Resolver Networks, and Javascript SDK. From these components, people can easily integrate the cryptocurrencies payment to their business while their customers are protected by Libra Network.

#### LRP protocol

LRP protocol allows buyer and seller to make a p2p payment while the cryptocurrencies of the buyer have locked until the seller delivers the order. The below diagram will explain the logic of LRP protocol when the sellers integrate with Libra Network.

![Project Libra-LRP Protocol](https://user-images.githubusercontent.com/92568442/148349639-145690aa-98c3-4e13-b9a3-ccfa01d55f6a.png)


For the LRP protocol, the data model for LRP protocol should be generic and flexible for any use cases. Besides, it should be small to store on-chain but need to provide enough information if needed (e.g. dispute case).

##### Data model
```json
{
  "id": "uuid",
  "payer": "5ERjkQVj8M7v5UVZQ8qTbZ2qb1o5TgNXq9tXt2BsWF9jBpDu",
  "payee": "5GWeq3dqEp4gzZS8jnEzTdTtPYxAp4AMcvjdhJdse4nU8zb2",
  "amount": 1000,
  "currency": "LIBRA",
  "description": "This is charged by @Scale Tech",
  "status": "pending",
  "receipt_hash": "b55126a39f9b1170a32e6f61e4a694c45235e5ac11c05ecd6ff6395de6a11187",
  "created_at": 1640761503329,
  "updated_at": 1640761504444
}
```
##### State transition

![state-transition](https://user-images.githubusercontent.com/92568442/148345661-fd24292a-389b-44ef-95a5-5d8422f546c6.png)

#### Resolvers network

Although most payments can be processed on the LRP protocol, disputes are inevitable and they need to be resolved by humans. The estimated dispute rate of the traditional payment platforms is about 2%. A dispute occurs when buyer and seller cannot decide the outcome of the payment by themselves and the fund is still locked in the LRP protocol. We considered many of ideas and we believe the resolvers network is the best way to implement a decentralized dispute resolution.

The dispute can be issued by the buyer and the seller can appeal the dispute. Both dispute and appeal action will need the fee estimated at $10 pay by Libra’s token. A dispute will be resolved by a random resolver on the resolver's network. To become a resolver, a person needs to stake a required amount of Libra’s token or create a candidate application and receive enough nominations from the community. 50% of the dispute fee is distributed to resolvers and the counterpart share to the nominators of the resolver.

In the case that buyer or seller does not accept the final decision from the resolver, they will have 72 hours to decide to escalate the dispute or not. To request to escalate, they need to deposit $20 and the resolvers network will pick two more resolvers to re-investigate the dispute. After the investigation, the resolvers will vote for the final decision. If the final decision is different from the first resolver made, the first resolver will be slashed $20 to cover escalate fee and decrease the credibility. If the credibility is too low, the resolver will be banned permanently on the network.

This diagram shows the whole dispute process

![Project Libra- Dispute process](https://user-images.githubusercontent.com/92568442/148343813-2f581a72-36b7-4065-bf69-cb0d642f25f5.png)

#### SDK
The SDK is indispensable for the product’s adoption. It should be developer-friendly and easy to integrate with a few lines of the code. The interface of the SDK is listed below.

**Install**
```bash
npm install libra-sdk
```

```jsx
import Libra from "@libra-sdk";

const libra = new Libra(config);
```
**Checkout**

Create a payment with the SDK

```jsx
const payment = libra.createPayment({
	payee,
	amount,
	currency,
	description,
	receipt
});
```

Cancel a payment (before the seller accept)

```jsx
libra.cancelPayment(payment.id)
```

Complete a payment 

```jsx
libra.complePayment(payment.id);
```

Dispute a payment 

```jsx
libra.dispute({
	paymentId: payment.id,
	evidence: {...}
});

libra.escalateDispute(disputeId);
```
**Seller’s dashboard**

Get payments

```jsx
libra.getPayments();
```

Accept or reject a payment

```jsx
libra.acceptPayment(paymentId);

libra.rejectPayment(paymentId);
```

Confirm full fill the order

```jsx
libra.fullFill(paymentId);
```

Appeal a dispute

```jsx
libra.appeal(disputeId);

libra.escalate(disputeId);
```

**Governance dashboard**

Setup identity

```jsx
libra.setIdentity({
	displayName,
	legalName,
	email,
	website,
	...
});
```

Apply resolver

```bash
libra.apply({
	role: "resolver",
	application: {...},
	deposit: 100000,
});
```

Nominate

```jsx
libra.nominate({
	address,
	amount,
	...
});
```

Resolve a dispute

```jsx
libra.approveDispute(disputeId);
\\ OR 
libra.rejectDispute(disputeId);
```

Resolve an appeal

```jsx
libra.approveAppeal(disputeId);
\\ OR 
libra.rejectAppeal(disputeId);
```

### Ecosystem Fit

- **Where and how does your project fit into the ecosystem?** Libra is built on top of Substrate. Thanks to Substrate's ecosystem, Libra supports all substrate tokens as a payment method by default. 
- **Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?**
Libra's target audience is sellers/buyers who want a safer, faster, more straightforward solution for online payment using cryptocurrencies. Through Resolvers Network, Libra also brings new jobs and a new way to earn income by solving disputes.  
- **What need(s) does your project meet?** Libra provides a safe mechanism for both buyers and sellers to transact online 
- **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?** As far as we know, Libra, with its unique LRP protocol and Resolvers network, is the first project designed to solve real-world eCommerce transactions. There are no similar projects in the ecosystem yet. 

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Anthony Dong
- Names of team members: Andrew Le

### Contact

- **Contact Name:** Anthony Dong
- **Contact Email:** anthony@atscale.xyz
- **Website:** https://atscale.xyz

### Legal Structure
(We're in the process of registering the legal entity)
- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

AtScale is a team specialized in blockchain development. We aim to rely on blockchain technologies to solve real-world problems and facilitate blockchain-based products to mass adoption. 

- **Anthony Dong**: Anthony successfully built and exited several internet startups during the last ten years. Anthony was the CTO in his recent company, helping the company bootstrapped from zero to $15 million ARR (Annual Recurring Revenue) in 2 years. 
- **Andrew Le**: Andrew was the Lead Researcher at his previous company, specializing in AI/Machine Learning and Blockchain technologies. He led the development to build one of the most accurate body measurement prediction engines in the industry during his past job.

### Team Code Repos

- https://github.com/atscaletech/<AtScale Technologies>
- https://github.com/atscaletech/polkadot-hackathon-apac<Hackathon Submission>

### Team LinkedIn Profiles (if available)

Due to privacy concerns, the team information will provide in private by email if requested.

## Development Status :open_book:
Libra is founded and developed in the Polkadot APAC Hackathon 2021. We already built a proof of concept application and here is our hackathon submission:

- Pitch video: https://youtu.be/pR4_2nrrJQQ
- Demo screencast: https://youtu.be/cR7gKSzVoAY
- Live demo: https://app.libra.atscale.xyz
- Explorer: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.libra.atscale.xyz#/explorer 
- Git repository: https://github.com/atscaletech/polkadot-hackathon-apac

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** ~ 4 months
- **Full-Time Equivalent (FTE):** 1.5 FTE
- **Total Costs:** 16,000 USD
	
### Milestone 1 - LRP Protocol Implementation

- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | The documentation includes: general concepts explanation, setup and run node guide, RPC specs |
| 0c. | Testing | All of the code will be covered by unit and integration test suites with the testing instruction.  |
| 0d. | Live testnet | The live testnet with a few nodes and public RPC endpoints to test or connect more nodes. |
| 1. | Substrate module: LRP pallet | The LRP protocol implementation. |  
| 2. | Substrate module: Currencies pallet | The extended module of ORML currencies allows creates and manages currencies by bonding some native tokens. |    
| 3. | Substrate based chain | The integration LRP protocol with substrate chain. |  

### Milestone 2 - Resolvers Network Implementation

- **Estimated duration:** 2 months
- **FTE:**  1.5
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | The documentation includes: general concepts explanation, setup and run node guide, RPC specs |
| 0c. | Testing | All of the code will be covered by unit and integration test suites with the testing instruction.  |
| 1. | Substrate module: Identity pallet | The identity pallet handles more specific fields of on-chain identity including identity credibility which is calculated by the actions that identity made on-chain such as transactions, dispute rates, dispute decisions... We will also add domain verification to prevent identity impersonation. |  
| 2. | Substrate module: Resolvers pallet | Resolver's application and nomination logic. |  
| 3. | Substrate module: Dispute resolution pallet | Dispute resolution implementation. |  
| 4. | Substrate chain integration | Integrate identity pallet, resolvers pallet and dispute resolution pallet with current chain.  |  

### Milestone 3 — Javascript SDK Implementation

- **Estimated Duration:** 1 month
- **FTE:**  1.5
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | The documentation is about the basic concepts, functions specs, and samples of how to use SDK to integrate with the Libra Network.    |
| 0c. | Testing | The unit tests and integration tests will cover at least 70% of the code. |
| 0d. | CI/CD | The lint, tests, and release will run automatically on the Github actions. If a new version is available, it will be published on NPM.|
| 1. | SDK | The set of Javascript libraries and utils that help front-end developers easy to integrate their web app with the Libra network. The specification of the SDK is listed in the project detail session. |  

## Future Plans

Once three components (LRP protocol, Resolvers Network, JS SDK) are done, we stand on a solid foundation and are ready to scale up.

In the short term, we plan to launch the validation and testing phase:

- **Develop MVPs:** Based on three core components (LRP protocol, Resolvers Network, JS SDK) that we have done, we will build some sample products such as an online shop, p2p marketplace, one-page checkout, ... These products will let us know what we need to do for the next steps and it also allows end-users to have a chance to interact with the Libra Network test-net and give us the valuable feedback from the end-user perspective.
- **Build branding and community:** Community is an important part of a decentralized network. We cannot do anything i.e. build a resolver network without the supports of the community. That is why we put it on the high priority in the short term. ****
- **Improvement from the community feedback:** Once we get valuable feedback, we can improve these components to make them production-ready.
- **Canary network launch:** At the end of this phase, we plan to join the Kusama para-chain auction and launch the canary network.

For the long term plan, we will:
- Launch Polkadot para-chain
- Acquire more users and boost the network's GMV (gross merchandise value)
- Scale up the resolvers networks
- Develop tools for Libra such as fraud payment detection, API, AI/ML dispute processor, ...


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
