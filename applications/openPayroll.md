# Open Payroll

- **Team Name:** Polkadrys Labs
- **Payment Address:** 0xe675dC5B4957d78B740D13A58FBC51bD33De068D (DAI - Ethereum network)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Blockchain decentralized nature, transparency, and immutability make it a promising solution for many industries. We believe that blockchain technology has the potential to revolutionize the way we live our lives, and we want to be a part of that revolution.

At our core, we are a team of innovators who are passionate about leveraging blockchain technology to build real-life solutions. We believe that the power of blockchain can be harnessed to create a more transparent and secure world. Our goal is to create solutions that are not only technologically advanced, but also practical and applicable to everyday life.

We ran into a common problem while working for a crypto development shop: The payment process sometimes became erratic, partial payments, late payments and no transparency into how the final number that was assigned in a spreadsheet actually came to be. We believe that the blockchain can make this transparent to the members of a collective, without having to sacrifice privacy nor making it super cumbersome to use.

In recent years, a growing number of organizations have made a commitment to financial transparency, recognizing the benefits of sharing information about earnings with their employees and stakeholders. Tech workers' cooperatives in the Argentine Federation of Cooperatives [FACTTIC](https://facttic.org.ar/) are a notable example of this trend, providing detailed financial information to members.

In addition to cooperatives, several companies have positioned themselves as "open numbers" enterprises, providing employees with access to information about the salaries of both workers and owners [Ten Pines](https://cultura.10pines.com/#numeros-abiertos) is a good example of this trending culture. [Buffer](https://buffer.com/resources/revenue-dashboard/), for instance, publishes the salaries of all its employees on its website, and [Whole Foods](https://www.tableau.com/solutions/customer/whole-foods-market-democratizes-data-across-460-retail-stores-with-tableau) allows employees to access financial information on a need-to-know basis. These efforts reflect a growing recognition of the importance of financial transparency in promoting trust and accountability within organizations.

The benefits of financial transparency are not limited to the private sector, however. Nonprofit organizations such as Charity: Water and The Wikimedia Foundation have also made transparency a priority, regularly publishing detailed financial reports and making them available to the public. As transparency becomes more widespread, it is likely to become an increasingly important tool for promoting fairness, equity, and accountability across a range of sectors and organizations.

### Overview

The objective of Open Payroll is to meet the needs of organizations that wish to make transparent payments during a given period.
The objective is to create a contract that enables anyone to configure and generate their own payroll system.

The payroll contract is owned entirely by its creator. This creator could be a DAO address, a multisig or a single person. The contract manages a treasury from where all the payments are deducted. There is a base amount and a set of multipliers associated to the addresses of the payees.

E.g. We create a payroll contract for paying developers salaries. We will have a base amount and only one multiplier which is the employee's seniority.
Alice is a junior employee and Bob is a senior employee. Alice's multiplier is 1 and Bob's multiplier is 2. The base amount is 1000. The payroll contract will allow Alice to claim 1000 and Bob 2000 every period.

The payroll smart contract transparently displays the addresses of all participants, along with the multipliers being utilized, allowing complete visibility to everyone. The initial rollout of this project will be super opinionated and geared towards an open payroll system, but this notion can later be applied to various scenarios, such as salaries, recurring payments, subscriptions, etc.

### Project Details

Based on what we exposed in the project Overview section and our past experience, we decided to implement a tool to takle this use case of the blockchain technology stack.

We'll use following tech stack in the latest stable version: React, Next.js, MUI, PolkadotJS wallet extension, Ink!, Rust, Docker, Git.

These are the steps that will be done to implement the proposed solution:

#### <a name="step1"></a>1.- Design a front end based on the wireframe proposed

This is the wireframe that we propose for the frontend:

- Contract Creation Screen

![New Contract](https://raw.githubusercontent.com/rtomas/resources/main/polkadot-openPayroll/img_new_contract.jpeg)

---

- Add Beneficiary Screen

![New Payee](https://raw.githubusercontent.com/rtomas/resources/main/polkadot-openPayroll/img_new_payee.jpeg)

---

- Contract Overview Screen

![Contract Overview](https://raw.githubusercontent.com/rtomas/resources/main/polkadot-openPayroll/img_contract_overview.jpeg)

---

- Claim Payment Screen

![Claim Payments](https://raw.githubusercontent.com/rtomas/resources/main/polkadot-openPayroll/img_claim_payment.jpeg)

---

- Contracts Dashboard Screen

![Contract List](https://raw.githubusercontent.com/rtomas/resources/main/polkadot-openPayroll/img_contract_list.jpeg)

The development will be focused on providing a good user experience, taking into account the user personas that will be using the product.

In this step we will create the mockup in Figma.

#### <a name="user_personas"></a>User Personas

- An owner or many owners of a company that want to open the numbers in order to be transparent in the way they manage payments in the organization.

- A cooperative that wants to implement an automated payment for the payroll.

- A group managing the treasury, aiming to maintain easy regular payments while focusing on its growth.

#### <a name="step2"></a>2.- Develop the user interface based on the design created in the previous step.

Implement a frontend with focus on usability, since we understand that the main obstacle for this type of solutions is the difficulty in their use by 'normal users'
The frontend includes:

- A Dashboard for the owner of the contract, where they can create a new contract and configure its parameters
- A dashboard for the payees of the contract, where they can claim the payments that are already released.

#### <a name="step3"></a>3.- Implement and test the payroll contract

Build an Ink! contract, which purpose is to manage a treasury, that can only be spent by the parameters set by the owner at creation point. Those parameters can be changed over the time and more beneficiaries can be added or removed. The funds in the treasury can be withdrawn by the owner of the contract if needed. This could be helpful in the case of migrating to a new version of openPayroll, amending a mistake of sending too much funds, etc. The data contained on chain are the addresses of the beneficiaries, the owners address, the period, the base payment and the multipiers. This information is public and accessible though the blockchain explorer for every person. Each payee multipliers can be updated individually E.g. if a developer is promoted, his seniority multiplier will be changed so he will earn more money. The contract also will be pausable, so the owner can stop the payments if needed. We will provide some helper functions to let the payees know how much they can claim at any given time, and also a function that the owner can call to know how much will be paid in the next period with the current parameters.

#### <a name="step4"></a>4.- Integrate the interface with the contracts

Use polkadotJs to generate all the posible interactions with the contract, those include:

- Creation parameters needed to create a new payroll contract:

  - Base amount
  - Multipliers
  - Period
  - Beneficiaries

- Contract interactions from the owner's perspective:

  - Change the current parameters in the contract.
  - Add or remove beneficiaries.
  - Withdraw funds from the treasury.
  - Pause the contract.
  - Change the owner of the contract.
  - Calculate the amount that will be paid in the next period.

- Contract interactions from the payees' perspective:
  - Calculate the amount that they can claim.
  - Calculate the amount that they can claim in the next period with the current parameters.
  - Claim the payments that are already available.

#### <a name="step5"></a>5.- Quality Assurance

In this step we'll work on security and usability, checking the functionality and reviewing all of the interactions between the UX and the smart contracts.
This includes building a suite of automated testing not only including happy paths, but also including edge cases. We aim for a high code coverage to minimize the chances of bugs. We will perform e2e testing using tools such as Selenium or Puppeteer to ensure that the frontend and the smart contract are behaving as expected.

#### <a name="step6"></a>6.- Build a Dockerized deliverable

Our deliverable is built using Docker to ensure easy reproducibility across various architectures and computers. All the necessary functionality is containerized, making it simpler to deploy and run.

#### <a name="step7"></a>7.- Write project documentation

Build meaningful documentation, including:

- Video and blog post on how to run the tool.
- Video and blog post on how to create a payroll contract from the ui and showing how to claim the amount released on a period of time.

### Ecosystem Fit

A transparent payroll smart contract fits into the Polkadot/Kusama ecosystem by being built on one of the independent blockchains connected to the Polkadot network. The smart contract will be used to automate and secure payroll transactions between diffent actors, with all information being recorded transparently on the blockchain without sacrificing privacy.

By utilizing the Polkadot network, the payroll smart contract can benefit from the security and scalability of blockchain technology, while also being able to communicate and transact with other chains and technologies in a decentralized and trustless way. Ultimately, this could lead to a more efficient and transparent payroll system that empowers both employers and employees in a completely decentralized web where users are in control.

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  As far as we can tell there is no work being done by the community in this type of solutions and we believe this is a commonn enough problem that a good community solution could help us catch up to other blockchains that already have mature solutions present.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  See [User Personas](#user_personas)
- What need(s) does your project meet?
  We believe there are a lot of small projects in the polkadot space that require recurring payments for services and that those are currently done outside the ecosystem. This project would create a way to make those payment within the Polkadot/Kusama umbrella with good UI, making it simple for newbie orgs to use it.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  It has some passing similarities with opengov and treasury, but our project is a smart contract instead of a pallet and is geared towards a much more simple use case.
  We found a smart contract that could be helpful for inspiration but it doesn't have the same approach as our vision. (https://docs.openbrush.io/smart-contracts/payment-splitter/)

## Team :busts_in_silhouette:

### Team members

- Luca Auet
- Ezequiel Golub
- Gabriel González
- Tomas Rawski

### Contact

- **Contact Name:** Gabriel González
- **Contact Email:** gabrielnicolasgonzalez@gmail.com

### Legal Structure

We don't have a legal structure. We are a group of developers that want to build together. Probably we will create a legal structure for future projects. We plan on dogfooding the project and make our payments through the smart contract we are building

### Team's experience

We know each other from different places but we began working together at the Polkadot Blockchain Academy 2023 in Buenos Aires, Argentina. We formed a tight knit study group and helped each other to better navigate the Academy's teaching and to complete the myriad of coding assignments we needed to do in order to get certified as a Blockchain developer, which we all accomplished.

Here are some brief backgrounds on each of us:

- Ezequiel has experience as a CTO of an latam edtech with 60k paying users. He has worked as Engineering Director in Rappi managing over 50 developers. Has a lot of previous experience as a backend dev and as devops.
- Gabriel, Luca and Tomas are advocates from The Graph Protocol. They have experience building subgraphs for different projects including CowSwap, MakerDAO and Lens protocol.
- At the Latam Hackathon of Polkadot (https://polkadothackathonlatam.com), Gabriel and Luca won the first place in the Web3/Blockchain Tooling category with their project (https://polkadothackathonlatam.com/proyecto-inner/LactobaciloGG/usuario-single/).
- Tomas is a full-stack and Solidity developer with several years of experience.
- Luca is developer with experience in low-level programming, blockchain technology, and embedded systems.

### Team Code Repos

- https://github.com/protofire/messari-subgraphs
- https://github.com/protofire/maker-protocol-subgraph
- https://github.com/rtomas/OracleSolver-ChainLink
- https://github.com/rtomas/lens-protocol-subgraph
- https://github.com/cowprotocol/subgraph
- https://github.com/alongoni/polkadot-contract-wizard
- https://github.com/Altoros/swarm-markets-subgraph

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/0xLucca
- https://github.com/ezegolub
- https://github.com/GabrielCamba/
- https://github.com/rtomas

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/lucaauet/
- https://www.linkedin.com/in/ezegolub/
- https://www.linkedin.com/in/gabriel-nicolas-gonzalez/
- https://www.linkedin.com/in/tomas.rawski

## Development Status :open_book:

We started to work after we finished the Polkadot Blockchain Academy. We explored the Polkadot ecosystem and we found that there is a lot of potential for solving real world community problems with the technology currently available.

To ensure a smooth and intuitive user experience, we've built a [Wireframe](#step1) that outlines the user flow of the project. This wireframe serves as a visual representation of how the user will interact with the project and provides a clear roadmap for the design and development process. By creating a wireframe at the early stages of development, we can identify any potential usability issues and make adjustments before investing significant time and resources into the design and development process. Ultimately, this will lead to a better user experience and a more successful project.

## Development Roadmap :nut_and_bolt:

Described in project details.

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 20,000 USD

### Milestone 1 — UI and Contract Development

- **Estimated duration:** 4 months
- **FTE:** 2
- **Costs:** 20,000 USD

|  Number | Deliverable                                                                                                 | Specification                                                                                                                                                                                      |
| ------: | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                                                                                     | GPLv3                                                                                                                                                                                              |
| **0b.** | Documentation                                                                                               | We will provide both inline documentation of the code and a basic tutorial that explains how a user can generate its own smart contracts. Corresponds to [step 7](#step7) of the Project Details.  |
| **0c.** | Testing and Testing Guide                                                                                   | The code will have unit-test coverage to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                               |
| **0d.** | Docker                                                                                                      | We will provide a docker container with current milestones deliverables to easily run the application. The functionality to be implemented corresponds to [step 6](#step6) of the Project Details. |
|      1. | Desing frontend interface (Figma)                                                                           | The functionality to be implemented corresponds to [step 1](#step1) of the Project Details section.                                                                                                |
|      2. | Develop the interface based on the previous task result (React, Next.js, PolkadotJS wallet extension, Jest) | The functionality to be implemented corresponds to [step 2](#step2) of the Project Details section.                                                                                                |
|      3. | Develop the payroll smart contract (Ink!, Rust)                                                             | The functionality to be implemented corresponds to [step 3](#step3) of the Project Details section.                                                                                                |
|      4. | Integrate the UI with the contracts.                                                                        | The functionality to be implemented corresponds to [step 4](#step4) of the Project Details section.                                                                                                |
|      5. | Quality Assurance                                                                                           | The functionality to be implemented corresponds to [step 5](#step5) of the Project Details section.                                                                                                |

...

## Future Plans

After the completion of this project, we would love to broaden its scope.

**Multiple Assets**

- Add support for allowing the payee to choose the asset to be paid in.
- Add support for allowing the treasury to hold different assets.

**Pallet**

- Create a pallet based on this funcionallity that can be used by other projects.

**Cover Different Scenarios**

- Provide more customizable features for different scenarios such as:
  Define start and end date for a payment, define the amount of times to repeat a payment.
- We a few changes this project can also be used to automated DAO payroll.
- Paying the rent, paying for subscriptions, paying for services, etc.
- DCA (Dollar Cost Averaging) for crypto assets.
- Automated savings.
- Gradual token incentive distribution to replace vested air drops.

**Token Streaming**

- Allow the treasury to stream tokens to the payees over time instead of them receiving the full amount at once per payment.

## Referral Program (optional) :moneybag:

- **Referrer:** Jose Ignacio Belossi (PEPE.Dot)
- **Payment Address:** 0x86ebcf938616eaa85391ed8f7a84fc91b6d15462 (USDT)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Polkadot Blockchain Academy
