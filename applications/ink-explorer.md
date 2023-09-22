# Ink Explorer

- **Team Name:** Blockcoders
- **Payment Address:** Ethereum (USDT/USDC/DAI) 0x0B7144E7960Ac666A6AD6B38Fe65C2fe96E65994
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 


## Project Overview :page_facing_up:

Ink Explorer is an application that provides Ink contracts related information on Substrate based blockchains. It subscribes to blockchain and Ink modules events and store the information on its own PostgreSQL database. The backend exposes an API that can interact with the DB and run fast queries to get specific information in a short time. 

The idea of this project is to have fast way to start a node that can be used as an explorer getting live and old data for specific contracts or addresses. 

This project serves useful information that is not available anywhere else. Since the back end is in charge of obtaining information related to the balances, transactions and more, of the contracts that use Ink modules. Ink Explorer uses polkadot.js to communicate with the Substrate / Polkadot networks. It is safe to say that this project is a must. 

Blockcoders is a team that is always contributing to blockchain projects to help the growth of the ecosystem.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  - It gives a solution for all the ones that are interested in analyzing Ink contracts information.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  - Anyone who is interested in working with contracts that use the Ink protocol and has an interest in accessing as much information as possible about what is happening with said contracts.
- What need(s) does your project meet?
  - Obtain the greatest amount of information about what is happening with contracts that use the Ink protocol in a fast and easy way.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - There are block explorers, but these are limited to saving and accessing information related to blocks and transactions, but are not intended to provide contract-oriented information.

## Team :busts_in_silhouette:

### Team members

- Jose Ramirez
- Damián Fixel
- Fernando Sirni

### Contact

- **Contact Name:** Jose Ramirez
- **Contact Email:** jose@blockcoders.io
- **Website:** http://blockcoders.io/

### Legal Structure

- **Registered Address:** Bouchard 705, Buenos Aires Argentina
- **Registered Legal Entity:** Blockcoders

### Team's experience

Our team has been contributing with different projects in blockchain for a few years, building APIs, SDKs and developer tools. Our goal is to continue to drive the crypto space forward by investing intellectual capital into projects, participating actively to help shape the ecosystems we believe in.

### Team Code Repos

- https://github.com/blockcoders
- https://github.com/blockcoders/nestjs-ethers
- https://github.com/blockcoders/harmony-marketplace-sdk
- https://github.com/blockcoders/near-rpc-providers
- https://github.com/athenafarm/athena-vault-contracts
- https://github.com/athenafarm/athena-sdk

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/0xslipk
- https://github.com/fersirni
- https://github.com/damianfixel

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/jarcodallo/
- https://www.linkedin.com/in/fernando-sirni-1931ba122/
- https://www.linkedin.com/in/dami%C3%A1n-fixel-6a3928163/

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 month
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 30000 USD

### Milestone 1 - Backend

- **Estimated duration:** 2.5 month
- **FTE:**  2
- **Costs:** 20,000 USD

In this milestone the focus is on creating a new service that can be consider a full node of the aplication that will create a new DB and will start syncing all the data from the blockchain (can be synced from genesis or a specific block). This node will also have the frontend covered in Milestone 2.
The service will expose an API that will provide all the required information that the frontend may need.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **english** and **spanish** versions of the documentation. This will cover step by step how to set up and start the project using both docker and running the node locally. |
| 0c. | Testing Guide | Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests. |
| 0d. | Docker | A Dockerfile will be provided that will be able to start the node and run tests for all the functionality delivered within this milestone. |
| 0e. | Article | We will post an article on Twitter and Reddit for both english and spanish speakers communities.
| 1. | Create database | Create a docker container to start a PostgreSQL database to store all the information, define the models to store and create tables and indexes. |  
| 2. | Backend service | Create a docker container to start a typescript service that subscribes to blockchain events and Ink modules events. This service will store and index the information in the database to be accessed quickly and easily. Add all subscriptions needed to retrieve the information of the emited events from both the blockchain (using polkadot.js) and Ink modules. Store and index the events data on the database. (If needed sync all data from blockHash - can be from genesis but it will take longer) |  
| 3. | API | Extend the service functionality to expose an API that gets the contracts data |
| 4. | Testing | Achieve a testing coverage of the functionalities above 90% |

Deliverables in this milestone will be dockerized. We will provide a README with examples showing how to start the service, and query the API.

### Milestone 2 - Frontend

- **Estimated Duration:** 1.5 month
- **FTE:**  2
- **Costs:** 10,000 USD

This milestone is entirely about creating a frontend app and making it work along with the back end service. The app will be mounted on the same docker as the backend service so it can be started with a single docker command.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **english** and **spanish** versions of the documentation. This will cover step by step how to set up and start the project using both docker and running the node locally. |
| 0c. | Testing Guide | Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests. |
| 0d. | Docker | A Dockerfile will be provided that will be able to start the node and run tests for all the functionality delivered within this milestone. |
| 0e. | Article | We will post an article on Twitter and Reddit for both english and spanish speakers communities.
| 1. | Create App | Create a frontend application that follows the proposed design. Cover the following functionalities: Blocks explorer, Transactions explorer and Contracts explorer (this section will provide to the user information related to the contract, such as transactions, the contract data and events). Dockerize the app to start in a container. |
| 2. | Support for Spanish speakers community | Translate the app to spanish and add support to switch languages. |  
| 3. | Testing | Add tests to the components. Achieve a testing coverage of the functionalities above 90% |
| 4. | Final setups | Deal with all production issues/configuration requirements such as creating the final docker image, reviewing the documentation and verifying everything works fine. |
| 5. | Deploy the app | Define the final domain and deploy the app. |

#### User Interface

The user interface will be based on this [mock-up](https://www.figma.com/file/WzYV7xQIfFx7HpMB77z9NS/inkExplorer?node-id=42%3A619):

![Blockcoders Ink Explorer](https://user-images.githubusercontent.com/3802516/180186130-7a6b6856-f926-44f2-8887-b82e4cb640b4.png)

## Future Plans

We plan to expose all the data throughout a Graphql application and add support for more languages.

## License

Apache license version 2.0
