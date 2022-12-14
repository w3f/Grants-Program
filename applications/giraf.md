# GIRAF - Legislation for communities

- **Team Name:** Slonigiraf
- **Payment Address:** bc1qyuk4rdeqvc2rmetfhr3key4clty5sglaw4n5wx (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview
1. **GIRAF** is a system that allows the creation and lobbying of laws in groups of different sizes: from small communities to a size of a country.

Laws are a fundamental part of human civilization and are generally understood to be a set of instructions or rules that people have agreed to follow. Examples of laws include the Bill of Rights in the United States, the Wikipedia article on DNA, history schoolbook, and the balance of a specific bitcoin wallet. However, the exact definition of the term "law" is a matter of debate. In this document, we will use the above definition for the purposes of our discussion.

The process of lawmaking is closely tied to economic activity. For example, politicians in the United States often rely on [funding from lobbyists](https://en.wikipedia.org/wiki/Lobbying_in_the_United_States) to run for office and push for legislation that benefits those lobbyists. Similarly, editors of Wikipedia articles may spend their valuable time and resources [fighting for the content](https://en.wikipedia.org/wiki/Wikipedia:Edit_warring) of an article, and the author of a schoolbook or a publishing house may receive funding from individuals or groups who wish to promote [their point of view](https://meduza.io/feature/2019/10/21/ministerstvo-prosveschenie). In the case of Bitcoin, miners [are paid](https://bitcoin.org/bitcoin.pdf) for their work in changing the balances of wallets. In some cases, foreign countries may even intervene in the lawmaking process of another country [with money](https://www.reuters.com/article/politicsNews/idUSN2450753720071024).

It can be argued that the practice of buying and selling laws, also known as lobbying, is a global norm that is generally accepted and serves as an important tool for creating consensus in society. This in turn can lead to economic well-being, as seen in the United States with its well-established lobbying practices.

2. **We plan to build a system on top of Substrate** that allows the **creation and lobbying of laws** in groups of different sizes: from small communities to a size of a country. It will be used in groups that lack legislation due to the small size of a group or in bigger societies to speedup the creation of a public consensus. The use of hashes for the text of laws would allow for the efficient storage of laws using a system like IPFS, while the usage of **Substrate** and blockchain technology will allow providing protection against unauthorized changes to the text of the laws.

3. By building our system as a pallet or a smartcontract on the **Polkadot and Kusama networks**, we can provide users with a secure, decentralized platform for utilizing the time-honored technique of lobbying to drive positive change within the community and influence voting outcomes. Also this module will provide an extended functionality to the published Substrate pallet designed for [a blockchain reputation managing](https://github.com/slonigiraf/recommendation-letter).

4. The GIRAF project code will be extensively used in our main project, [Slonigiraf](https://github.com/slonigiraf/whitepaper/blob/main/slon/ENG.md), which is a tool designed for the creation of digital recommendation letters and diplomas. The essence of the lawmaking process there is the coordination of various companies and educational organizations in determining the skills that need to be assessed and the appropriate methods of assessment for those skills.

### Project Details

In this project, we plan to work on both the backend and frontend components. The backend will be responsible for storing and managing the data associated with each law, while the frontend will provide a user-friendly interface for interacting with the system.

The backend of our system will consist of a database to store entries for each law. Each entry will include the following information:

- A unique identifier for the law, such as a serial number or ID.
- A hash of the text of the law, which will be generated using a system such as IPFS (InterPlanetary File System) to ensure the integrity and immutability of the law's content.
- The amount of money that was used for lobbying when the law was created.

In terms of implementation, we plan to develop the backend database as a Substrate pallet rather than an ink! smart contract. This is because not all Substrate-based projects are able to run smart contracts, and using a pallet instead will allow our technology to be more widely adopted within the ecosystem. Additionally, our team has more experience with writing Substrate pallets, which will ensure the quality and security of the code.

To provide users with a convenient way to interact with the system, we also plan to develop a user interface (UI) for the database. This UI will be built using React components, and will allow users to create, view, and cancel laws as needed. It will provide a simple and intuitive interface for managing the laws in the database.

<img alt="Image" src="https://github.com/slonigiraf/grant-proposals/blob/main/img/giraf-grant-ui.jpeg?raw=true" width="700">

Overall, our plan is to develop a robust and user-friendly system for storing and managing laws, leveraging the power of smart contracts and the Substrate framework to ensure security, transparency, and accessibility.

Our team has successfully built a [PoC/MVP product](https://slon-i-giraf.ru/app/work?view=jobcentreView&language=ENG) on the Java Vaadin framework. The MVP is focused on helping teachers collaborate and share resources more effectively. It provides a central repository for documents and other materials that are used by multiple teachers, and allows them to easily make changes and updates to these materials. This eliminates the need for teachers to constantly send updated versions of documents back and forth, and ensures that everyone has access to the most up-to-date information.

### Ecosystem Fit

The Polkadot and Kusama networks use a [sophisticated governance mechanism](https://wiki.polkadot.network/docs/learn-governance) to roll out blockchain updates. This mechanism involves voting on referenda and council decisions, and a Technical Committee that has the power to fast-track proposals. Similar ideas [underlie](https://polkadot.network/blog/polkadao-is-live/) the decentralized autonomous organizations (DAOs) within these ecosystems.

Historically, bribery has been [viewed negatively](https://decrypt.co/7102/live-at-eth-ny-its-vitalik-buterin) within the blockchain community, so lobbying is not a common practice in blockchain-based dApps. We aim to fill this gap by creating a system that mimics how laws were traditionally created.

We believe that different parachains and DAOs could benefit from our project, as it would add new governance functionality to their voting processes. The code for our GIRAF project will also be used extensively in our main project, [Slonigiraf](https://github.com/slonigiraf/whitepaper/blob/main/slon/ENG.md), which is a tool for creating digital recommendation letters and diplomas. It will be used for the coordination of various companies and educational organizations in determining the skills to be assessed and the appropriate methods of assessment for those skills.

## Team :busts_in_silhouette:

### Team members

- Denis Reshetov - Team leader, Rust/JavaScript developer
- Ilya Moskvin - JavaScript developer
- Aleksey Pastutsan - Rust/JavaScript developer
- Natalie Andreeva - Project manager

### Contact

- **Contact Name:** Denis Reshetov
- **Contact Email:** reshetovdenis@gmail.com
- **Website:** <https://www.slonigiraf.org/>

### Legal Structure

- **Registered Address:** Ulmas Umarbekov, 20, Tashkent, Uzbekistan
- **Registered Legal Entity:** Individual entrepreneur Reshetov Denis

### Team's experience

Denis Reshetov is a highly skilled and dedicated full-stack developer and [scientist](https://pubmed.ncbi.nlm.nih.gov/?term=reshetov+d). He has a passion for building tools for decentralized society, and his leadership skills have proven invaluable in guiding teams to successfully complete complex projects. For example, he, as an Individual entrepreneur Reshetov Denis, received a grant from the Web3 Foundation for a [SLON - a recommendation letter system](https://github.com/w3f/Grants-Program/blob/master/applications/slonigiraf.md) that he successfully completed. Also he has recieved a [grant from IPFS](https://github.com/ipfs/devgrants/issues/156), work on which was also successfully done. In addition to his technical expertise, Denis is known for his ability to motivate and inspire his team members. He has a clear vision for the projects he works on, and he is able to effectively communicate that vision to his team in a way that encourages [collaboration and fosters a sense of shared purpose](https://pubmed.ncbi.nlm.nih.gov/35039573/).

Ilya Moskvin is a highly skilled JavaScript developer with a wealth of experience in building complex ERP systems. He has a [deep understanding of the web3 stack](https://github.com/iamoskvin/), and he has been instrumental in developing applications in the Ethereum space over the last two years. He is a strong communicator and is always willing to help his colleagues whenever they need it. His positive attitude and his commitment to excellence make him a pleasure to work with and a valuable contributor to the project.

Aleksey Pastutsan has [decades of experience](https://github.com/almipa) in software engineering, and his current focus is on web3 projects based on the Typescript/Rust stack. He is a highly skilled developer with a wealth of knowledge and expertise in the field. Aleksey's expertise in web3 technology and his ability to create robust, scalable solutions make him an invaluable member of the  project. His dedication to advancing the field of decentralized technology and his passion for building tools that can improve the lives of people around the world make him a valuable asset to our team.

Natalie Andreeva is a highly experienced financial manager with a background in fintech. She has a proven [track record](https://www.linkedin.com/in/natalie-andreeva-4a250b56/) of successfully organizing and coordinating teams working on specific projects, and she is skilled at allocating resources and managing people in order to achieve project objectives. Natalie's expertise in financial management and her ability to effectively coordinate teams make her an invaluable member of the project.

### Team Code Repos

Team projects:

- [Main repository](https://github.com/slonigiraf/)
- [Typescript library to sign recommendation letters and store them on IPFS](https://github.com/slonigiraf/helpers)
- [Rust module for recommendation letter issuing](https://github.com/slonigiraf/recommendation-letter)
- [React example UI for recommendation letter issuing](https://github.com/slonigiraf/recommendation-letter-example-ui)
- [Full functional UI for recommendation letter issuing](https://github.com/slonigiraf/slonigiraf-front-end)
- [Blockchain for recommendation letter issuing](https://github.com/slonigiraf/recommendation-letter-example-node)

GitHub accounts of all team members:

- [Denis Reshetov](https://github.com/reshetovdenis)
- [Ilya Moskvin](https://github.com/iamoskvin)
- [Aleksey Pastutsan](https://github.com/almipa)
- [Natalie Andreeva](https://github.com/cbdoslon)

### Team LinkedIn Profiles

- [Denis Reshetov](https://www.linkedin.com/in/reshetovdenis/)
- [Ilya Moskvin](https://www.linkedin.com/in/ilya-moskvin-02794b22b/)
- [Aleksey Pastutsan](https://www.linkedin.com/in/aleksey-pastutsan-a07ab2158/)
- [Natalie Andreeva](https://www.linkedin.com/in/natalie-andreeva-4a250b56/)

### Google Scholar Profiles
- [Denis Reshetov](https://scholar.google.com/citations?user=AICnRQsAAAAJ)

## Development Status :open_book:

- We've built PoC/MVP product on Java Vaadin framework that can be used via
  [link](https://slon-i-giraf.ru/app/work?view=jobcentreView&language=ENG)
- The white paper and overall design is presented [here](https://github.com/slonigiraf/whitepaper/blob/main/giraf/ENG.md)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 8 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  4
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | User Story 1 | As a user of demo UI, I can create a law by providing a text and an amount of tokens to be spent |
| 2. | User Story 2 | As a user of demo UI, I can view a list of published laws |
| 3. | User Story 3 | As a user of demo UI, I can see details of a selected law: it text, hash and current price |
| 4. | User Story 4 | As a user of demo UI, I can spend my tokens to make the law more expensive and solid |
| 5. | User Story 5 | As a user of demo UI, I can spend my tokens to make the law less expensive and less solid |
| 6. | User Story 6 | As a user of demo UI, I can cancel the law by spending my tokens |

### Milestone 2 — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  4
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains what was done/achieved as part of the grant |
| 1. | User Story 7 | As a user of polkadot.js wallet fork, I can sign up and sign in to the app |
| 2. | User Story 8 | As a user of polkadot.js wallet fork, I can bookmark laws |
| 3. | User Story 9 | As a user of polkadot.js wallet fork, I can create a law by providing a text and an amount of tokens to be spent |
| 4. | User Story 10 | As a user of polkadot.js wallet fork, I can view a list of published laws |
| 5. | User Story 11 | As a user of polkadot.js wallet fork, I can see details of a selected law: it text, hash and current price |
| 6. | User Story 12 | As a user of polkadot.js wallet fork, I can spend my tokens to make the law more expensive and solid |
| 7. | User Story 13 | As a user of polkadot.js wallet fork, I can spend my tokens to make the law less expensive and less solid |
| 8. | User Story 14 | As a user of polkadot.js wallet fork, I can cancel the law by spending my tokens |


## Future Plans

- The GIRAF project code will play a crucial role in our main project, [Slonigiraf](https://slonigiraf.org/), which aims to coordinate various companies and educational organizations in identifying the skills that need to be assessed and determining the appropriate methods of assessment for those skills during teaching and examination.
- In a short term we will integrate this code to [ui.slonigiraf.org](https://ui.slonigiraf.org/#/recommendations) and then are planning to work on a mobile friendly UI version of our polkadot.js wallet fork.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Our team lead has previously successfully completed a work on a Web3 grant. 

- [PoC/MVP product](https://slon-i-giraf.ru/app/work?view=jobcentreView&language=ENG)
- [The white paper](https://github.com/slonigiraf/whitepaper/blob/main/giraf/ENG.md)
- Previous grants we've got: [Web3 grant](https://github.com/w3f/Grants-Program/blob/master/applications/slonigiraf.md), [IPFS grant](https://github.com/ipfs/devgrants/issues/156).
