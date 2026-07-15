# On-chain cash exchange

- **Team Name:** Bela Supernova
- **Payment Address:** 0xC0d28794eA40Ce9b9F4B62a1B2Bb42FD34b7d305 (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Bela Supernova and BitIns propose to develop a universal payment service for Polkadot ecosystem that supports private and confidential payments in relevant crypto currencies as well as real-time on-ramp for cash payments, that can convert fiat in to crypto “on the fly”.

On the current market a user has to set up his personal crypto wallet or even a few for buying and using crypto currencies or to set up smart-contracts in different blockchains. This seems too complicated for non-crypto inspired users, that hinders the mass development of crypto-assured services and also brings overheads for multiple transaction fees.

At the same time Bitins represents the simplest way to crypto that is currently available: a simple POS transaction or an SMS message are enough to purchase a coupon that is redeemable as Bitcoins. Through a partnership with Kraken exchange and leading Slovenian companies – Petrol and Telekom Slovenije, Bitins became a widely used ramp to crypto that doesn’t include the need for a crypto-wallet or even a banking account.

Vouchers or coupons remain a specific financial instrument that is regulated in a particular manner. Similar rules have evolved for limited digital payments, used by telecoms, FinTech startups and banks. Bitins was able to explore and integrate both opportunities into a unique platform.

While the current model is locally profitable and ready for internationalization, as it does provide both the maximal simplicity and services to unbanked/underbanked segments within a growing crypto market, we believe that additional work on the platform would facilitate this route and further enable the envisioned global expansion

### Project Details

![DOT coupons](https://user-images.githubusercontent.com/98888366/152210061-f2784234-6712-413f-8fe9-41ba0306f5cf.png)

Coupons are technically utility tokens by definition. While efficient by current centralized exchanged based standards, BSN together with Bitins sit on the opportunity to widely improve efficiency and reduce system complexity. Direct exchange of coupons to tokens does not only improve the efficiency of the system, but due to existing utility it complies with most legal frameworks by design.

While this is a robust and logical expansion of Bitins, probably the most lucrative route of further development lies within the future expansion of services on top of the token platform. While integration with existing DeFi systems is logical, there might be enough traction within the basic platform for the development of an own exchange/DeFi platform.

The system itself as it seen by BSN will have five functional modules:
1.	Ink! smart contract, that executes all logic for cashflows and coupons operations;
2.	Centralized system management module for stakeholders (coupons generation, invalidation and financial management);
3.	Centralized system management module for service provider (commissions management and stats) with front-end service for new off-chain users: all-in-one service for wallet generation and immediate transaction with gas charged from service provider’s pool;
4.	Management apps;
5.	User apps.

![Architecture 2 drawio](https://user-images.githubusercontent.com/98888366/155559730-166ed4da-8712-48a3-941f-168f825d1649.png)

### Ecosystem Fit

In the entire BitIns service each coupon has a code that is issued by a centralized backend and printed on a POS terminal upon payment. A user redeems a coupon using this code.
Under this project the main idea of the service will be redeveloped in a confidential and trustless manner using a smart-contract in a blockchain: each coupon will get two keys (codes) - a private and a personal one: the public one will be stored in the smart contract and the private key will be known only to a buyer/user from the entire coupon (it may be encrypted in a QR-code on the coupon or written in any other safe manner). The destination wallet address for the transaction will be signed by the private key so that no destination wallet spoofing could be done by scams.

The new proposed smart-contract will become an on-ramp for fiat currencies: a native or non-native token of choice could be issued/exchanged for fiat within a coupon redemption. Some of anticipated ways of fiat-to-crypto exchange:
- issue a native stablecoin upon coupon redemption;
- on-line exchange of the coupon value for native Polkadot or parachain tokens (e.g. DOT, LINK, COMP etc.) or stablecoins like aUSD using Polkadex or other DEX projects in the ecosystem;
- on-line exchange of the coupon value for native assets from other blockchains like BTC using 3rd party EX like Kraken.

As the token natively represents the bridge from fiat to crypto it can also enable an integration with a DeFi/CeFi environment on top and development of the same further down the road: further parts of the project include developing of a payment widget, that can make a transaction to a target wallet with a crypto-currency of choice without even issuing a personal wallet – straight coupon-to-crypto payments.

Immediate benefits of the token system would be the integration with global FinTech platforms and NFT markets and potentially expansion of the coupon system to using coupon-issued stablecoins for all transactions.
The key benefits are:
- Enhance payment options for DeFi projects with a fiat-to-crypto ramp;
- Propose a reliable but private and confidential state of payment with crypto assets.

## Team :busts_in_silhouette:

### Team members

- Gregor Knafelc, CEO at BitIns Ltd.
- Andrej Muzevic, member of the Board at Bela Supernova d.o.o
- Sergey Cymbal, MBA, CEO at Bela Supernova d.o.o
- Sergey Zolotukhin, CTO at Bela Supernova d.o.o
- Dmitrii Putilov, Blockchain Department Director at Bela Supernova d.o.o
- Dmitrii Volodin, COO at Bela Supernova d.o.o
- Ilia Shavrin, Full stack software developer at Bela Supernova d.o.o
- Anton Shramko, Full stack software developer at Bela Supernova d.o.o
- Ksenia Baranova, QA Lead at Bela Supernova d.o.o
- Alexey Vexin, Project Manager at Bela Supernova d.o.o
- Anton Borisov, DevOps Engineer at Bela Supernova d.o.o

### Contact

- **Contact Name:** Sergey Cymbal
- **Contact Email:** sc@bsn.si
- **Website:** https://www.bsn.si, https://bitins.net/

### Legal Structure

- **Registered Address:** Cesta v Mestni log 55, Ljubljana 1000, Slovenia
- **Registered Legal Entity:** BELA SUPERNOVA, sistemske rešitve d.o.o.

### Team's experience

Our team has extensive expertise on multiple levels starting from progressive vision all the way down to software and solution development. This blend of knowledge and skills ensure we tackle the most ambitious challenges and come up with commercially successful solutions in FinTech industry. Natural ability of some of the team member to navigate and predict future technological trends combined with technical experience and project management skills of other members translates into the clear roadmap. 

Gregor Knafelc is a trailblazer who developed a unique business model and software for selling crypto vouchers on POS. He built one of the most recognized regional brands serving regional bluechip companies and established a strategic partnership with the state oil company Petrol and a national Telecom. Gregor’s company disrupted the crypto market being the first to start selling crypto through ATMs.

Andrej Muzevic for the last 25 years acts as an Advisor and Investor for high tech businesses empowering and mentoring bright minds who build technologies of the future. He has the most experience in Blockchain, CeFi, DeFi, Data and other knowledge intensive areas. Andrej is also a very active member of Etherium Community.

Sergey Cymbal is an experienced executive, leader and visioner responsible for the most disruptive innovations initiatives across Oil/Gas, Utilities, and Telcos in Russia. Ex-member of Sochi Olympics HQ, responsible for digitalization, Smart grid evangelist. Blockchain early follower, participates in several crypto initiatives.

Sergey Zolotukhin has over 20 years of experience in R&D and software development with a deep focus on Machine Learning, Neural Networks and Mobile solutions design in Telcos and Pension Funds. Led several enterprise machine learning project, has various experience in crypto and blockchain development.

Dmitrii Putilov has over 17 years of experience leading the teams creating and maintaining high availability sites. His portfolio contains creation of the robee.io investment platform included in top500 in coinmarketcap.

Dmitrii Volodin has a background in IT. For over 15 years he has been helping customers build, implement, and maximize value of their critical IT infrastructure and solutions across Enterprise, Manufacturing and Healthcare industries.

Ilia Shavrin is a solution architect and full stack software developer with over 12 years of experience in high load enterprise applications. His most recent focus is on blockchain and creation of decentralized applications.

Anton Shramko is an experienced developer with 7 years of experience on various positions, including solution architect in Krypton. Anton active contributor to open source and blockchain communities, he is also a frequent speaker in DevCon conferences. 

Ksenia Baranova is an QA test engineer with over 5 years of experience. Ksenia has exceptional knowledge and skills in the field. She is highly referred within this team, as well as by her former teams.

Alexey Vexin is product owner and project manager with 10+ years of experience in managing complicated telecoms and IT projects in Telco, Utilities and Governmental sectors with deep focus on business process management. Led a dozen of federal scaled projects for IT systems implementation and industry scaled technology development, standardization and implementation.

Anton Borisov is a DevOps Engineer with broad experience. For over 15 years Anton was supporting, administering, and maintaining secure networks, servers, and clusters. He also has versatile experience with CI/CD, IT Infrastructure Monitoring, and Kubernetes on-premise and in Cloud. One of the most recent projects Anton participated in was building a first on chain casino.

Bela Supernova has already apllied for a grant [OpenEHR Integration](https://github.com/filecoin-project/devgrants/issues/418)

### Team Code Repos

- https://github.com/ManageIQ/manageiq-providers-amazon/commits?author=aiperon
- https://github.com/ManageIQ/manageiq/commits/?author=aiperon
- https://github.com/friktor?tab=repositories

### Team LinkedIn Profiles (if available)

- [Gregor Knafelc] (https://www.linkedin.com/in/gregorknafelc/)
- [Andrej Muzevic] (https://www.linkedin.com/in/andrej-muzevic-075b674a/)
- [Sergey Cymbal] (https://www.linkedin.com/in/sergecymbal/)
- [Sergey Zolotukhin]
- [Dmitrii Putilov] (https://www.linkedin.com/in/dmitri-p-96b0a140/)
- [Dmitrii Volodin] (https://www.linkedin.com/in/dm1tr11-volodin/)
- [Ilia Shavrin] (https://www.linkedin.com/in/ilia-shavrin-716552228/)
- [Anton Shramko] (https://www.linkedin.com/in/anton-shramko-25971b162/)
- [Ksenia Baranova] (https://www.linkedin.com/in/mayawotson/)
- [Alexey Vexin] (https://www.linkedin.com/in/alexey-vexin-800a4068/)
- [Anton Borisov]

## Development Status :open_book:

[BitIns](https://bitins.net/en/) is a company that since 2016 has provided the fastest and easiest access to Bitcoin via buying a Bitcoin coupon, which is sold in Slovenia through partner shops and via SMS messages.

## Development Roadmap :nut_and_bolt:

At this stage we’ll execute three deliverables:
- an Ink! smart contract with main functional logic;
- centralized management back-end MVP;
- Buyer's UI MVP.

![Milestones 3](https://user-images.githubusercontent.com/98888366/157524704-713d8b35-0d99-46e2-9248-139b2660582c.png)

The project will be split in 2 milestones that will be supported by a group of 2 developers, 1 UI/UX designer, 1 PO and 1 QA.

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  4 FTE
- **Total Costs:** 36,100 USD

### Milestone 1 — Design and development of an Ink! smart contract

- **Estimated duration:** 1 month
- **FTE:**  2 FTE
- **Costs:** 17,400 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can run our smart contract and send test transactions, which will show how the functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Liquidity pool management methods | We will create methods for keeping and managing main liquidity pool, withdraw/top-up assets from/to main liquidity pool (service provider's pool) |  
| 2. | Coupon data storage | We will create a method for storing issued and sold coupons in the smart contract |  
| 3. | Coupon registration | We will create a coupon registration method (for each registered coupon code an appropriate assets volume will be locked in the liquidity pool) and coupon code ZK-validation method (to prove to a coupon seller, that the coupon is registered and there’s enough liquidity locked for it without showing the private key) |  | 4. | Coupon validation | We will create an algorithm for validation of a redeemable coupon using its public and private keys. Each coupon will have public and private keys: the public one will be stored in the smart contract and the private one will be known only to buyer/user from the entire coupon. The destination wallet address for the transaction will be signed by the private key so that no destination wallet spoofing could be done by scams. Smart contract will validate the coupon and the destination address with the public key, pushed to the contract by the management back-end. After validation of the coupon smart contract will transfer appropriate sum from the liquidity pool to the specified wallet. |  
| 5. | Coupon liquidation | We will create a coupon burn method upon it’s redemption and corresponding transaction | 

### Milestone 2 — Design and development of system management tools

- **Estimated Duration:** 1 month
- **FTE:**  2 FTE
- **Costs:** 18,700 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can run our smart contract and send test transactions, which will show how the functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains what was achieved, how to use the new Dapp and what benefits what are the benefits of using the system |  
| 1. | Centralized management back-end | We will develop service provider’s CLI tools for coupon lifecycle management including: coupon generation algorithm implementation, coupon storage DB, coupon registration in a blockchain. Also it will include tools for liquidity pool management – assets top-up or withdrawal, get balance. Each coupon will consist of a public and a private key. Public keys will be delivered to the smart contract for operations. Private keys will be accessible only to buyers and will validate the transaction upon coupon redemption. Upon registration of a coupon in the smart contract the appropriate sum of tokens will be locked in the service provider’s pool as a collateral for the coupon balance. |  
| 2. | Buyer's web interface | We will develop a web UI for coupons' redemption for users that already have an existing wallet with non-zero balance. Validation of the coupon will be made straight by the smart contract with gas taken from the user’s wallet. |  

## Future Plans

Above defined deliverables are just a start position for future development of the product – a unified platform for users for easiest exchange of their fiat assets to crypto and with a personal wallet that can be used for payments in the ecosystem without excessive transactions and gas fees. Also, this is going to be a service for sellers and service providers to add straight fiat-to-crypto payments to their apps and smart contracts. The easiest way to perform a reliable yet confidential way of payments.

Our future plans for the project:
- Developing a user’s mobile app for “on-the-fly” coupon redemption by scanning a QR-code on the coupon – private key will be coded with a QR-code;
- Algorithmic stablecoin development for using as a native service asset;
- Payment widget and APIs development for straight coupon-to-crypto payments in 3rd party Dapps;
- Fiat off-ramp development: a converse coupon technology to withdraw cash on sales partners POS terminals.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Our team includes blockchain enthusiasts who have strong hi-tech experience and strive to implement their ideas and give maximum value to emerging blockchain and crypto markets. That's why the Grants Program is a self-evident knowledge for our team.
