# W3F Open Grant Proposal


* **Project Name:** Entropy
* **Team Name:** WinTogether Labs LTD.
* **Payment Address:** 0x6cb772074be9cfEAa6B5B83C31CD316e975bc9F9(DAI)


## Project Overview :page_facing_up:



### Overview

Entropy is an innovative prediction market offering users the choice between high-risk high-reward payout mechanism and low-risk stable-reward mechanism, with integration with yield generating platforms which can significantly boost yield even in a bear market. Entropy provides users a principal-guaranteed method to predict on crypto market movement, NFT bidding activities, and real-world assets. Our TWAP settlement process and lossless nature protects user from liquidity risks in traditional margin trading products. 

Besides principal-guaranteed products, Entropy also offers loss-realized product and asymmetrical product on crypto synthetic indexes, which could be used as a trustless, autonomous insurance for protocol exploits. The long-term goal for Entropy is to build exotic, user-friendly derivatives that can effectively help Defi users to hedge their risks, and for protocol developers to signal their quality of projects via staking in derivatives products.

Our project aims to become the first prediction market to be deployed on the Polkadot/Kusama ecosystem. As the DeFi offerings grow in the Polkadot/Kusama ecosystem, Entropy could become an apparatus for DeFi users to actively participate in prediction market with a minimal liquidation risk. Our team built this product based on our own experience of margin trading and the realization that many low-risk preference users are being under-served by the existing derivatives platform.

### Project Details

Please see Development Status for the current documentation.

### Ecosystem Fit

Entropy will become a part of the Polkadot/Kusama DeFi ecosystem, helping DeFi protocols to attract more TVL, and provide users the utility of participating the market speculation in a low-risk way. Our target audience are users who want to participate in market speculation yet does not want to be exposed to liquidation risks.

There are decentralized prediction market on the Ethereum/EVM-compatible ecosystem, for example, Hxro and Pancakeswap prediction market. However, Entropy is unique from those competitors by offering a lossless prediction market.


## Team :busts_in_silhouette:

### Team members

The core development team has three members: Zehua Wang, Daniel Tong, and Dingan Chen.
Dr. Zehua Wang is the lead for this project.

### Contact

* **Contact Name:** Dingan Chen
* **Contact Email:** Dignanc@umich.edu
* **Website:**

### Legal Structure

* **Registered Address:** 3 Fraser Street #05-25 Duo Tower Singapore (189352)
* **Registered Legal Entity:** WINTOGETHER FOUNDATION LTD.

### Team's experience

The core development team has three members: Zehua Wang, Daniel Tong, and Dingan Chen. Zehua Wang has worked as the Chief Scientist at RighMesh, a decentralized mesh network protocol, and he is currently the core faculty member at the Blockchain@UBC program. Daniel Tong is the tech lead for this project, and he previously worked at 5G Smart City blockchain project for Rogers communications. Dingan Chen is the product lead for this project. Dingan has been working as a on-chain analyst since 2018.

### Team Code Repos

https://github.com/orgs/LosslessBattle/dashboard

### Team LinkedIn Profiles (if available)

* https://www.linkedin.com/in/zitian-daniel-tong-829169128/
* https://www.linkedin.com/in/wangzehua/
* https://www.linkedin.com/in/derekdinganchen/

## Development Status :open_book:
The team has been developing in a private repository for now. Please contact dinganc@umich.edu for access.

The team has developed three iterations of the smart contract in Solidity. The V1 and V2 can be found at:
https://github.com/LosslessBattle/Lossless-V2-Core

# Lossless Protocol [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)

> WinTogether-V2-Core

<img src="https://user-images.githubusercontent.com/26049843/117237291-9fd58f80-adf8-11eb-8b2c-58bf9dd0b1a1.png" width=80% />


## WinTogether Gitbook

> Here is the link to our Gitbook

- WinTogether User Facing [Documentation](https://wintogether.gitbook.io/wintogether/)

> <img src="https://user-images.githubusercontent.com/26049843/117338939-262bb900-ae6d-11eb-9256-ee07a5c77d92.png" width=40% />

## Document Structure
> an overall of current code strucutre

    └── LosslessProtocol
        ├── contracts           # smart contract files
        │   ├── core            # core contracts contains v1 and v2 core contracts
        │   │     ├── v1            # v1 core contract    
        │   │     └── v2            # v2 core contract
        │   └── interfaces      #interfaces contians v1 and v2 interfaces
        │         ├── v1            # v1 interface    
        │         └── v2            # v2 interface   
        ├── migrations          # truffle migration files (for deploying contracts)
        └── test                # all test related files
             ├── v1                 # v1 core testing    
             └── v2                 # v2 core testing  

## Setup Your Environment

1. install all packages 
    ```shell
    ❯ yarn install
    ```

2. create your own .env file, check out the sample [.env_sample](.env_sample)
    ```shell
    ❯ touch .env
    ```

3. to deploy a contract with many dependent files
    - flattern the .sol file by using
    ```shell
    ❯ truffle-flattener <solidity-files>
    ```
    - modify [deploy contract](./migrations/2_deploy_contracts.js)
    - Note: use [abi.hashEX](https://abi.hashex.org/#) to generate ABI-encoded output
    - deploy command
    ```shell
    ❯ truffle migrate --network ropsten   --skipDryRun                                                                                                                                                                     
    ```
    
## Local Tests

> [Waffle](https://github.com/EthWorks/Waffle) (with [ethers.js](https://github.com/ethers-io/ethers.js/)) is used for testing.

1. make sure you have compiled our contracts. The build files should locate under folder `abis`
  ```shell
  truffle compile
  ```
2. run test
  ```shell
  yarn waffle-test
  ```

## Static Analyse using Slither
> install [slither](https://github.com/crytic/slither) first

1. run slither

```
slither . --truffle-build-directory abis/core
```

> save output to a file 
> 1. `script [filename]` (for example: `script output.txt`)
> 2. run slither


## run with Docker
1. Install `docker` and `docker-compose`
2. set up '.env'
3. create running environment and start a new bash
```
# first way
docker-compose run contracts-env bash

# second way 
yarn start-docker
```

The V3 repository can be found at:
https://github.com/LosslessBattle/Lossless-V3-Core



## Development Roadmap :nut_and_bolt:


### Overview

* **Total Estimated Duration:** 1 months
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 10k DAI

### Milestone 1 Example — Binary Prediction

* **Estimated duration:** 1 month
* **FTE:**  2
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License| GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Binary Prediction Factory | We will create a factory contract that can deploy pool contract on any of the prediction pairs, for example, USDT-WBTC pair, which settles on a weekly basis |  
| 2. | Binary Prediction Pool Creation | We will create a pool contract, which is the interface that user will interact to enter into a prediction |  
| 3. | Settlement Price Query | We will connect the pool contract to a secured oracle, such that the pool contract can query the correct settlement price at the end of the prediction period to determine which users are correct |  
| 4. | Yield Generator Integration | We will integrate the pool contract with a yield generator, such that users' deposits are being used to generate interest and be distributed among winners |  



## Future Plans

Currently, the project is supporting crypto assets and NFTs. However, we plan to add more products in three stages:

| Stage 1: Crypto Assets | Stage 2: Off-chain Assets| Stage 3: DeFi KPI |
| -----: | ----------- | ------------- |
| BTC |  AAPL | DeFi Index|
| ETH |  Gold | TVL Volatility|
| LTC |  TSLA | LP Token Fair Value|
| Doge |  Silver | Ecosystem Index|


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

We were referred by Eric Wang from Parity