# Open Grant Proposal

-   **Project:** Deeper Chain
-   **Proposer:** [deeper.network](https://deeper.network)
-   **Payment Address:** 1ZgK8ic8gmVSS3jJUwLJiWHaK5rhZVppF

## *Note to the grant approvers*

*We have delayed the milestone completion for the following 2 reasons:*

1. *The original application submitter left the team in May 2021 and the grant application was not handed over to any other team members and hence overlooked.*
2. *Deeper Network has been busy recently preparing the mainnet launch at the end of this month (Aug 2021)*

*We request that the starting date for the milestone will be the approval of this amendment. Much appreciated!*

## Project Overview :page_facing_up:

### Overview

Deeper's vision is to combine network security, network sharing, and blockchain technology to create a safer, freer, and faster decentralized network. Our flagship product is called Deeper Connect. Its security protection, privacy protection, and network acceleration functions can significantly improve users’ Internet access experience. Deeper Network, a decentralized p2p network, is composed of thousands to millions of Deeper Connect devices. We are developing the following decentralized network services on Deeper Network:

1. DPN (Decentralized Private Network)<br>
   DPN is a decentralized P2P bandwidth sharing private network. By leveraging the power of interconnected user devices, each user can access the Internet privately and safely. There is no need to worry about being eavesdropped and censored by the ISP.

2. Decentralized DNS<br>
   DNS is the infrastructure for resolving IP addresses and querying the Internet. The centralized DNS layout makes the Internet extremely fragile, and site IPs may be blocked by centralized organizations at any time. Decentralized DNS services make the Internet more democratic and cannot be monopolized by institutions.

3. Decentralized web<br>
   Anyone can build their own website and register it in the Deeper Network. In Deeper Network, the IP address of the web server is hidden, which comes with the benefit of anti-censorship and anti-DDoS attacks.

4. Decentralized gateway<br>
   Deeper Connect is a decentralized gateway to web3.0. True decentralization means that no single organization can dominate over the entire network. It also means that a single point of failure will affect the functioning of the entire network. Decentralized gateways, decentralized public chains, and decentralized applications. For example, Ethereum Network remains centralized at the gateway level and is overly dependent on the API interface services provided by Infura for major dApps. Infura itself relies on AWS cloud services provided by Amazon. This means that the Ethereum ecosystem cannot be uncoupled from centralized network structures and is not truly decentralized. This naturally lends itself to the pitfalls of centralized network structures. This is evident as the recent Infura downtime has led to the paralysis of most Ethereum dApps. Deeper, on the other hand, has achieved true decentralization on all levels: decentralized gateways, decentralized public chains, and decentralized applications.

### Project Details

#### Delegated Proof of Credit

The deeper network consists of two layers. The top layer will contain hundreds of validators that generate new blocks constantly. The deeper layer will consist of millions of deeper network devices. Proof of credit allows deeper network devices to mine new tokens by sharing their bandwidth. Each device will be associated with an account, i.e., public address. The more bandwidth a device shares, the more credit will be earned by the account. Each device will delegate its credit to a validator. The consensus of the deeper chain will be the GRANDPA/BABE hybrid consensus built in the Substrate node. The validator election algorithm is initially based on both popularity of the validator and a white list, and the white list will be removed in future so that any party can run validator nodes once the network run smoothly for a certain period and is proved to be stable and secure. The popularity of a validator is simply calculated as the number of deeper network devices that delegate its credit to the validator. We call this election algorithm as Delegated Proof of Credit (DPoC). Each era (or each day according to the time setting) the devices will be rewarded DPR tokens proportional to their credits. As in any credit systems of modern society, each account’s credit accumulation in a short period is capped by some maximum value Cmax.

#### Micropayment and credit update

There are two roles of deeper network devices – a server device is a device that shares data/bandwidth with others; a client device is a device that is consuming the data/bandwidth served. For each MB of data that the server provides to the client, the client will pay the server a certain amount of DPR tokens. This is called micropayments. If the client does not make the micropayment, the server can stop providing bandwidth anytime. We allow the server to choose the micropayment period, i.e., the server can stop the service after serving a threshold amount of data without receiving any micropayments. The micropayments happen in the deeper layer which is off-chain. Whenever a device claims micropayment, its credit is updated according to the rules on the chain.

#### Network topology of light nodes

The topology of the deeper layer is a big graph that contains potentially millions of nodes (i.e., one node is one deeper device). During each epoch, we consider the graph is fixed. Between two epochs, the graph is randomly generated by some distributed random seed, e.g. modified from BABE random seed. We use the randomness generated at the end of each epoch to construct the deeper layer topology of next epoch. More specifically, given a node, we will randomly assign 8 to 16 neighbor nodes to it. Thus, the degree of a node in the graph is between 8 to 16. This can be done by a smart contract. The security of Proof of Credit depends on the distributed random seed. For the detail analysis of DPoC security, please refer to our [whitepaper](https://deeper.network/assets/pdf/whitepaper/Deeper-WP-EN-1009.pdf).

### Ecosystem Fit

The biggest problem with web3.0 is not technological innovation from 0 to 1, but rather market adoption from 1 to n. Namely, how to expand awareness and transition users from web2.0 applications to web3.0 applications.

Deeper's goal is to provide a product similar to the iPhone, starting with users’ real needs, focusing user experience, and improving the user's Internet access experience and gradually attracting them to the web3.0 ecosystem. A standout feature of our product is its intuitive plug and play usability. Users do not need any technical knowledge and blockchain background. A user only needs to plug the device between the modem and the router, and gain benefit from the network security and privacy protection that our product provides, as well as network acceleration and fair mining. The user experience of our products is top notch. We did a product pre-sale on Indiegogo this year. In two months, we achieved 650,000 U.S. dollars in sales, surpassing 99.9% of Indiegogo projects.

The smartphone is a user's portal to the mobile Internet. It enabled an influx of massive user base into the mobile era of web2.0. Similarly, Deeper Connect is a home gateway product. Everyone in the house and all devices need to go online through this device. It can be regarded as a web3.0 portal. Deeper Connect can attract a large number of web2.0 users, and then let them seamlessly join the web3.0 revolution. The audience of most blockchain projects is limited to the blockchain community that accounts for an insignificant percentage of the total number of Internet users; the target audience of Deeper is all Internet users.

From a technical perspective, our Deeper Chain is implemented using Substrate. Deeper Connect can not only connect to the Deeper Chain, but also connect to any other public chain in the Polkadot ecosystem. Through a simple development process, a user interface for other public chain dApps can be provided. Deeper Connect is also a dApp Store. In the future, we will also support the plug-in mode and provide third-party developers with plug-in development APIs. Third-party developers can developed and distribute dApps in the dApp Store. The developers of these application-type public chains have since eliminated the work of acquiring users from scratch and developing a public chain client from scratch. In addition, the management background of our device integrates the function of a hardware wallet. Users can directly use the DPR token or other tokens in their wallets in these third-party dApps. Deeper Connect also has the security function of an enterprise-level firewall, which also provides a strong security guarantee for users' digital assets in the process of storage and use.

We are developing a hardware product with a cost of only US\$5, and we are confident that this product can bring millions of users to Polkadot.

## Team :busts_in_silhouette:

### Team members

-   Hui Liu
-   Zhiwu Liu
-   Zhuang Jin
-   Yang Liu
-   Fei Yang

### Contact

-   **Contact Name:** Fei Yang
-   **Contact Email:** fei.yang@deeper.network

### Team Website

[https://deepernetwork.io/](https://deepernetwork.io/)
[https://deeper.network/](https://deeper.network/)

### Legal Structure

-   **Registered Address:** 5200 Great America pkwy, Santa Clara CA USA 95054
-   **Registered Legal Entity:** Deeper Network Inc

### Team's Experience

**Hui Liu**  
Hui worked at Intel, Fortinet, and Palo Alto Networks, where he held positions such as R&D Manager and Chief Engineer. He brings more than ten years of experience in network security and operating system development. He spearheaded the development of the cloud firewall engine which still brings billions of dollars in annual revenue for the company.

**Zhiwu Liu**  
Zhiwu has a master’s degree in Computer Science. He has been engaged in the software development of high security systems, from airborne embedded software development to blockchain software development.

**Zhuang Jin**  
Zhuang has a master’s degree in Electrical Engineering. He has working experience in network security, distributed system, and embedded system development.

**Yang Liu**  
Yang worked at Bytedance, Alibaba, Windriver, and has working experience in cloud infrastructure, operating system and embedded system.

**Fei Yang**  
Fei has been active in blockchain space since early 2017. He has worked as software engineer in blockchain startups, crypto exchanges and other blockchain project grants. He has led teams organised on the Internet to  win a couple of blockchain hackathons.

### Team Code Repos

[deeper-chain](https://github.com/e2chain-dev/deeper-chain)

## Development Roadmap :nut_and_bolt:

### Overview

-   **Total Estimated Duration:** 1 month
-   **Full-time equivalent (FTE):** 5 FTE.
-   **Total Costs:** 20,000 USD

In this application, the deliverables are the micropayment pallet, the client codes and tutorial document. The micropayment pallet contains all the necessary functions for a user to interact with the blockchain including open channel, close channel, claim micropayments etc. The client codes contains two parts: one is for a user to interact with blockchain, the other is for a user to interact with another user. The micropayment design, use cases as well as detailed examples will be given in the totorial document. In the next phases/applications, we will add Proof of Credit and light node discovery pallets as well as their corresponding client codes.

### M1: Micropayments – 4 weeks

-   **Estimated Duration:** 4 weeks
-   **FTE:** 5
-   **Costs:** 20,000 USD

| Number | Deliverable          | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License              | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0b.    | Description          | For our testnet, we use one-way micropayment protocol. There are 2 parties: Sender (Client) and Receiver (Server). There are 3 steps: Sender opens a channel; sender sends accumulated micropayments to receiver; Receiver closes a channel or the channel closed after expiration. When sending the accumulated micropayments, the sender will sign the following data: (receiver, address, nonce, sessionId, accumulateAmount). Each time a new (sender, receiver) channel is opened, nonce is increased by 1 to avoid replay attack. sessionId represents one unique session inside one channel. When a channel is open/active, it can contain multiple sessions. The receiver can only claim once for each unique (nonce,sessionId) pair. |
| 0c.    | Testing Guide        | The tests will verify the basic functionalities like opening channels, sending micropayments, claiming payments, and closing channels. 1. Opening channels: verify that sender has enough balance to reserve and the channels are unique; 2. Sending micropayments: verify that receiver info and payment amount is correct, the payment is indeed signed by sender, and sender has enough reserved balance. Verify that micropayments are received in each service period; 3. Claiming payments: Verify that balance transfer is submitted on chain; 4. Closing channels: only receiver can close the channel. Clear any outstanding micropayment balances and free reserved balance of sender.                            |
| 0d.    | Language/Framework   | Rust/Substrate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0e.    | Tutorial             | Add tutorial documentation including blockchain setup, client setup. Add code examples to demonstrate the interaction between clients to blockchain, as well as clients to clients.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.     | Channel open         | sender who opens the channel should reserve enough funds for accumulated micropayments. Channel data structure contains sender, receiver, nonce (to avoid replay attack), expiration time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.     | Channel close        | channel will be closed after expiration time passed. Only the receiver can close the channel before the expiration time. The remaining amount which is not claimed by the receiver will be refunded to sender during close.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.     | Claim payments       | During the lifetime of the channel, the receiver can claim accumulated micropayments. The sessionId becomes invalid after claim, and the sender should start using a different sessionId for a different micropayment session.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 4.     | Client to Blockchain | The client inside a deeper device (light node) can automatically interact with blockchain: open channel (client only), close channel (server only), claim payment (server only), add balance (client only), and close expired channels (client only)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 5.     | Client to Client     | The client inside a deeper device (light node) can automatically interact with each other: start services, send micropayments, stop services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Future Plans

1. Light node discovery. Each deeper device is acting as a light node in deeper layer. There are potential millions of light nodes in p2p network. We need pairing light nodes with unbiased randomness and design discovery mechanism in a decentralized way.
2. Proof of Credit is a core component in deeper network. We already have built MVP functions for PoC. But there are more work to be done.
3. Testnet: Build an end to end blockchain system that running deeper devices smoothly.

## Additional Information :heavy_plus_sign:

### What work has been done so far?

1. Code is open source at https://github.com/deeper-chain/deeper-chain
2. MVP is developed for core features: micropayments(master branch), light node(master branch), delegated proof of credit(master branch).

### Have you applied for other grants so far?

We have applied for Substrate Builder's program and got accepted.
