# W3F Open Grant Proposal

* **Project Name:** Tokeur (Euro Stablecoin)
* **Team Name:** NEOFACTO Blockchain Team
* **Payment Address:** 0x3379fd693f59935C0461FC046CfFB469b689a2Ef

## Project Overview :page_facing_up:

*NEOFACTO Blockchain Team* (hereafter referred to as NEO) wants to port its existing stablecoin which is currently running (in Beta) on Ethereum, Tezos and Next (an Ethereum based private POA blockchain) towards the Polkadot Technology. The stablecoin is called Tokeur and is developped by *tknext OÜ* in Estonia. tknext is a sister company of NEOFACTO and is authorized to provide stablecoins services in the EU. Tokeur is the first building block of a larger vision which is aiming at implementing and providing _DeFi_ services in an efficient and compliant way. Thanks to a specific agreement made with our cash depositor, the 1:1 coverage of all the Tokeur coins in circulation can be monitored in real-time. Moreover, thanks to the help of Scorechain, all Tokeur transactions are monitored insuring an end-to-end compliance.

### Overview

#### Description

* Port Tokeur on the Polkadot Technology first with Substrate components
* Use the Polkadot Relay Chain and Parachain Statemine
* Target Statemint (more specifically Statemine) for the port of Tokeur

### Project Details

**Schema of the Polkadot part**

Our new components linked to Polkadot will be included in this global architecture: 

![Tokeur Architecture](https://www.tknext.eu/2021.06.14-TokeurArchitecture.png)

**Global Part of the architecture of our solution** 

Our project includes: 

* Back-end developed in Java, running on Karaf, MySQL, Camunda BPM and using Web3J, EJ4Tezos, ActiveMQ, Camel, Velocity, CXF
* UI developed in React.js
* Blockhain part : Ethereum (public and private), Tezos or Polkadot Technology, either ready-to-use framework or Parathread (and Relay Chain)

### Ecosystem Fit

Stablecoin projects on various networks and especially on Polkadot network are now being studied and developed by different kind of organizations.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Laurent Kratz
- Names of team members: 
   -  Laurent Kratz
   -  Frédéric Hubin
   -  Léa Narzis
   -  Simon Thomas

### Contact

* **Contact Name:**  Laurent Kratz
* **Contact Email:** laurent.kratz@neofacto.com
* **Website:** https://neofacto.com/home/

### Legal Structure

* **Registered Address:** 12, Avenue du Rock’n’Roll, 4361 Esch-sur-Alzette, Grand-Duchy of Luxembourg
* **Registered Legal Entity:** NEOFACTO Luxembourg S.A.

### Team's Experience

- **Neofacto:** 
NEOFACTO builds and runs a strong network of experts, able to provide high quality IT services to its customers for more than 20 years. Its spin-off, [Scorechain](https://scorechain.com/), is today the European leader in compliance solutions for crypto-assets with more than 100 licenses sold in 26 countries. NEOFACTO is also: 
   - Technical partner of Société Générale / Forge Digital Capital Market, supporting its client in the [issuance of covered bonds as “security tokens” on a public blockchain](https://neofacto.com/event/blockchain-itdays).
   - Winner with the Banque Centrale du Luxembourg at the Hackathon organized by [Banque de France on CBDCs](https://www.linkedin.com/posts/neofacto_hackathon-decentralised-euro-activity-6630398253353570304-qFiJ/tknext) at the end of January 2020.
   - Creator of [tknext](https://www.tknext.eu/) (who owns its stablecoin [Tokeur](https://demo.tokeur.com/)), a delivery vs payment (DVP) platform for OTC operators whose collateral is guaranteed in real-time thanks to a DSP2 interfacing from the depositary banks of the sequestration’s receiver.
   - Technical partner of Nomadic Labs (Tezos Foundation) for the implementation of [EuroTz](https://eurotz.eu/), the Euro’s stablecoin for the Tezos’ blockchain.
   - NEOFACTO’s technology EuroTz is used for [Casino grocery stores' stable coin](https://cointelegraph.com/news/french-retail-giant-will-launch-tezos-based-stablecoin).
   - Technical partner of  Société Générale / Forge Digital Capital Market / European Investment Bank, supporting its clients in [the emission of a digital bond](https://www.eib.org/en/press/all/2021-141-european-investment-bank-eib-issues-its-first-ever-digital-bond-on-a-public-blockchain).

- **Laurent Kratz:**
Laurent is an Internet Entrepreneur, Founder of multiple successful start-ups. The two main company creations in the Luxembourg area were [www.lesfrontaliers.lu] (https://www.lesfrontaliers.lu/) and [www.jamendo.com](https://www.jamendo.com/). www.lesfrontaliers.lu was successfully sold to a media group, and Jamendo raised several significant rounds of VC funding and continues its growth in the digital music space. In the ICT field, Laurent is the CEO of NEOFACTO (formerly NFS S.A.) a software services company based in Luxembourg, Brussels and Paris. NEOFACTO serves its market with highly skilled profiles in high tech projects. The company has been awarded several times for its outstanding achievements in delivering web and mobile projects. In the FinTech field, Laurent started Scorechain, a company that builds compliance solutions for crypto-assets. As a business angel, Laurent is a member of TheFamily and invests in software, mobile, gaming or internet-of-things projects.

- **Frédéric Hubin:**
Frédéric has been working in the banking and financial sector for almost 25 years with experience gained in Switzerland, Luxembourg, United-Kingdom, Belgium, Netherlands and France. His expertise covers most of the activities of a bank from payments to derivative products pricing or from compliance to clearing and settlement. Frédéric’s interest in DLT dates back to 2013 and he started developing smart contracts mimicking derivative instruments as early as 2016. Frédéric was part of the NEOFACTO/Central Bank of Luxembourg team which won the European Central Bank Eurochain Hackaton in Paris in January 2020 and, more recently, he was part of the team which won the INFRACHAIN CHALLENGE "Public Sector Blockchain" organised by INFRACHAIN in Luxembourg.

- **Léa Narzis:** 
Léa is a full-stack developer. Her interest in Blockchain started from an internship at the University of Malta during her engineering and computer science study. Her interest never stopped growing and was fully deployed in different Blockchain development teams like IBM and EY.
She has now joined NEOFACTO to tackle new Blockchain and IT challenges. 

- **Simon Thomas:**
Simon Thomas has been a crypto-enthusiast since 2017. He has gained substantial experience as a manager of a 10 consultants team for 2 years with a focus on the development of security apps. He is now one of the principal managers of NEOFACTO France. 

### Team Code Repos

* https://gitlab.com/tezos-paris-hub/ej4tezos
* https://gitlab.com/tezos-paris-hub/eurotz-euro-stable-coin

* https://gitlab.com/fhubin - https://github.com/fhubin

### Team LinkedIn Profiles

* https://www.linkedin.com/in/lkratz/
* https://www.linkedin.com/in/fhubin/
* https://www.linkedin.com/in/leanarzis/
* https://www.linkedin.com/in/simon-thomas-381245137/

## Development Status :open_book:

In order to get a better understanding and evaluate the direct usability of Polkadot components, we have already locally deployed a relay chain and a parachain, thanks to the Substrate workshop tutorials.

We are testing the development of ink! smart contracts and the deployment of parathread also thanks to substrate workshops.

The supporting back-end is 90% functional and ready to integrate _Polkadot Connectivity_.

Front-End Components are ready and the user interface only needs to be customized to enable Polkadot transactions.

## Development Roadmap :nut_and_bolt:

#### Technology Stack ####
* Blockchain: Substrate + Rust 
* Backend: Java, MySQL, Camunda BPM, Web3J, EJ4Tezos, ActiveMQ, Camel, Velocity, CXF 
* Frontend: React.js/Redux

### Overview

* **Total Estimated Duration:** 2 months
* **Full-Time Equivalent (FTE):** 2 FTE
* **Total Costs:** 30k USD

### Milestone 1 - Implement Basic StableCoin Functionalities with Statemint 

* **Estimated duration:** 1 month
* **FTE:**  2
* **Costs:** 15k USD

Our vision for Milestone 1:

In case Statemine is useable for our needs: 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |  
| 0b. | Documentation X1 | We will provide **inline documentation** of the code. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)
| 1. | Connector | Create connector to link our solution and Statemint with Multisign and Proxy account abstractions |  
| 2. | Integration Test | Write appropriate and detailed test to verify the connexion and its limits |  
| 3. | Governance | Evaluate the utility to add governance motion with self-sufficient property
| 4. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 5. | Documentation X2 | A complementary documentation about how we use Statemine and our feedbacks/tips that can help people to make similar deployments and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |


## Future Plans

* First of all, we intend to deploy in production all the functionalities (and potentially more stablecoins) we achieve during the project and provide support for them;
* We would like to upgrade our solution to be fully GDPR compliant (using ZKP to introduce confidentiality and Claims to make wallets identifiable only by authorized parties);
* Depending on the use-case, we would like to investigate if a transaction processing speed improvement would be appreciated by the users of our stable coin;
* We would also evaluate the possibility of use XCMP to move part of our backend business logic to parachains/threads;
* Depending on the maturity and the functionality of Statemint, we could consider deploying a custom platform with Acala solution, that seems to correspond to our needs;

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

* We heard about the Grants Program thanks to the Web3 Foundation Website 
* We deployed a relay chain and a parachain with Substrate components, and especially with Cumulus extension. We are now developing smart contracts with ink!.
* The existing research to prepare this grant application has been fully financed by NEOFACTO Luxembourg S.A. and tknext OÜ.
* We won a grant from the Tezos Foundation to implement [EJ4Tezos](https://ej4tezos.org/)
