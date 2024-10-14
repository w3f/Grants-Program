# Improve & Update Typechain Polkadot

- **Team Name:** C Forge
- **Payment Address:** 1Gciq9ByqbBycweYAzHpGMFPU6TwPjCMGBNXvJo6bqFoiMb (Both USDT & vested DOT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

The presence of Typechain in the Polkadot ecosystem is crucial for developers. It provides a way to generate TypeScript types to interact with ink! smart contracts on substrate chains, which is essential for building front-end applications as well as node.js development (e2e testing, one-off scripts, bots etc). 
However, the current state of Typechain prevents it from being a useful, reliable tool due to lots of pitfals, bugs and design issues. This project aims to improve and update Typechain to ensure it is a valuable tool for developers.

### Overview

#### Current state of Typechain

Currently Typechain fell behind due to lack of maintenance and required updates to work with the latest ink! version (missing for example a crucial update to handle ink! 5 events). Its typegen feature does work however the produced code contains solutions that are not optimal, cumbersome to use and may introduce bugs in developer's code - handling result/lang errors, handling numbers etc. 

#### Why do we want to work on Typechain?

Our team has been using Typechain for both script writing, extensive e2e-testing & front-end development. We see a great value in such library yet have encountered many issues and limitations that prevent us from using Typechain to its full potential. Having to create workarounds, monkeypatch the library or patch typechain's output was necessary yet very troublesome. We believe that improving Typechain will benefit the whole ecosystem and make it more attractive for developers.

### Project Details

#### Remove ReturnNumber
The ReturnNumber wrapper class is unnecessary and makes the code harder to read and use. Introduces runtime bugs, false assumptions and redundant additional complexity on top of polkadot.js. We will remove it and replace it with BN.

#### Update to ink! 5
Update Typechain to work with ink! 5 - specifically to handle the way events are being presented in contracts ABI.

#### Simplify & enhance usage of deployment classes
The current design of Typechain generated code induces runtime errors due to improper handling of ABI. Our goal is to make the code runtime-safe and more intuitive.
    Additinally we will add a possibility to upload code without instantiating the contract. [Corresponding issue](https://github.com/Brushfam/typechain-polkadot/issues/106)

#### Fix/improve typechain-complier
Typechain-compiler has never worked for us reliably and we had to develop our own solution. 
The goal here will be to integrate our changes with typechain-compiler, make it work with both non-workspace projects & workspace projects out of the box - currently developer is required to provide additional data upon running which is sub-optimal DX. Additionally we'll improve logging, artifact handling and make it more reliable overall.

#### Improve Result/Error handling
As for now usage of contract query call result is cumbersome. We will perform developers community consultations and attempt to make it more intuitive.

#### Generate Enums for events
We will generate enums for events to make it easier to work with them in the code - seemed always like a crucial feature that was missing when working with event listening in typescript.

#### Handle other bugs & issues
We will address all the issues and bugs we encounter on our way.
    Additionally we'll fix as many issues as possible from the current issue tracker - https://github.com/Brushfam/typechain-polkadot/issues.

#### Incorporate docker build into typechain
We will make a possibility for typechain to use docker image instead of local environment for build process. This will make it easier for developers to use typechain without the need to install all the dependencies as well as produce verifiable builds.

### Ecosystem Fit

#### Where and how does your project fit into the ecosystem?
Typechain is an essential tool for typescript developers. Provides an easy way to interact with smart contracts using typescript enabling easy front-end, test and bot development.

#### Who is your target audience?
Our primary audience consists of ink! smart contract developers, front-end developers, and node.js developers.

#### What need(s) does your project meet?
The need for a reliable, easy to use and up-to-date tool for generating TypeScript types for smart contracts in the Polkadot ecosystem.

#### How did you identify these needs?
1) We've been vocal about the problems on supercolony/Brushfam's developer chats and have seen other developers struggle with the same issues.
2) Our insights into these needs stem from our extensive experience as ink smart contract developers spanning over two years using Typechain Polkadot for both front-end and smart contract e2e testing where we encountered mentioned issues and limitations.

#### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
This proposal does not intend to establish a new project but rather to improve and update an existing one.

## Team :busts_in_silhouette:
### Team members

- Konrad Wierzbik
- Łukasz Łakomy
- Igor Cieślar

### Contact

- **Contact Name:** Łukasz Łakomy
- **Contact Email:** wookie.xp.07@gmail.com
- **Website:** ---

### Legal Structure

- **Registered Address:** aleja Powstania Warszawskiego 15, 31-539 Kraków, POLAND
- **Registered Legal Entity:** C Forge sp. z.o.o

### Team's Experience

We take pride in the extensive experience of our team members, Konrad Wierzbik and Łukasz Łakomy, who are well-versed in the development of ink! smart contracts. Their expertise spans over two years in this domain, making them seasoned professionals in the field.

Furthermore, their recognition by the Aleph Zero Ecosystem Founding Program underscores their dedication and recognition within the ecosystem. They were among the very first to be accepted into this prestigious program, solidifying their commitment to the growth and advancement of the ink! smart contract ecosystem.

Our team developed the Pendzl library.

### Team Code Repos
- https://github.com/Nradko/pendzl
- https://github.com/AbaxFinance/dao-contracts
- https://github.com/AbaxFinance/abax-liquidator
- https://github.com/Nradko/StableCoinProject

### Team Github Profiles

- https://github.com/Nradko
- https://github.com/WookashWackomy

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/konrad-wierzbik/
- https://www.linkedin.com/in/%C5%82ukasz-%C5%82akomy-901b75145/


## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 1,25 months
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** $30,000

### Milestone 1 Crucial Updates

- **Estimated duration:** 0,75 month
- **FTE:**  3
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT  |
| **0b.** | Documentation | We will cover the changes and newly added features in documentation and usage examples. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **1.** | Update to support ink! 5 |  Typechain-polkadot library will work with smart-contracts built using ink! 5 producing completely valid, usable output |
| **2.** | Remove ReturnNumber | We will remove ReturnNumber class, clean up the code and replace it with a more reliable solution. |
| **3.** | Testing and Testing Guide | We will update existing tests and provide additional ones to ensure proper behavior. In the guide, we will describe how to run these tests. |
| **4.** | Update Typechain-compiler | We will update typechain compiler according to project details description. |
| **5.** | Generate Enums for events | We will generate enums for events to make the work with event listening in typescript more intuitive. |


### Milestone 2 Additional Updates

- **Estimated Duration:** 0,5 month
- **FTE:**  3
- **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT | 
| 0b. | Documentation | We will cover the changes and newly added features in documentation and usage examples. | 
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Docker (optional) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. | 
| 0e. | Article | We will publish an article that will explain improvements, reasonings behind them as well as overall DX benefits. | 
| **1** | SC Deployment code | We will have simplified & enhanced usage of deployment classes. Code's API will be consulted with the community to ensure it fits its needs. |
| **2** | Improve Result/Error handling | We will perform a research & consulations on how to make the DX better & implement the solution. |
| **3** | Handle bugs & issues | We will address all the issues and bugs we encounter on our way. Additionally we'll fix as many issues as possible from the current issue tracker. The goal is to have all of them addressed. |
| **4** | Incorporate docker build into typechain | Will make a possibility for typechain to use docker image instead of local environment for build process |


## Future Plans

We believe a project such as Hardhat is crucial for the developer ecosystem. Thus we envision typechain-polkadot & typechain-compiler to become a go-to tools for developers in the Polkadot ecosystem, accompanied by additional future tooling that will provide and capture similar dev experience to what hardhat does. Polkadot ecosystem needs such tooling to attract more developers and typechain-polkadot as well typechain-compiler are must haves for that.

## Referral Program (optional) :moneybag:

none

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  personal recommendation, we have developed a project that was funded by W3F - pendzl.

## Additionally

We want to explicitly acknowledge that the concept and previous groundwork were established by the 727-ventures team. At Abax, we relied on Typechain to write e2e tests for our smart contracts and interact with them in scripts/front-end. With our commitment to advancing smart contract development & tooling around it, we are decided to make Typechain a trusted, reliable go-to tool for typescript developers in the Polkadot ecosystem. We are aware of the challenges and limitations of the current Typechain implementation and are determined to address them. Our goal is to make Typechain a valuable asset for developers, enabling them to write smart contracts with ease and confidence.
