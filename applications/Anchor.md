# W3F Grant Proposal

- **Project Name:** Anchor
- **Team Name:** Fuu
- **Payment Address:** 0xF8105ea1cC3130501bad5De60Bd3D794a9115dE2 (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

- Anchor is a key-value on-chain storage system based on substrate, which is convenient for developing on-chain applications (cApp). By this way, you can develop blockchain app totally on Javascript. Compared with Pallet and smart contracts, the technical threshold is much lower, and the efficiency is much improved, allowing developers to pay more attention to the application itself.

- Anchor can also be regarded as a domain name service, similar to ENS (Name service of Ethereum) , which can capitalize the simple and easy-to-remember key (chain name), and gradually become valuable in the case of free transactions. This value is not just static data, but also applications. This trusted on-chain data can also be accessed into the future metaverse.
  
- Anchor on-chain data can be customized, and developers can use customized protocol to develop complex applications without the need to develop Pallets or smart contracts. That is to say, the Anchor pallet only needs limited upgrades and continuous improvement of security to support the development of complex cApps. That is to say, the development of cApp does not generate more coins or tokens, and also distinguishes writers and readers, and readers do not need to pay fees, which allows more users to use Polkadot.

- Anchor has currently developed to version "1.0.0-dev" ([Anchor github](https://github.com/ff13dfly/Anchor)). Dev network is deployed, the websocket link is wss://network.metanchor.net.

- This appling is for the improvement of Anchor. There are two main functions, one is to connect the history of Anchor, and the other is to sell Anchor to specified account.

- Video about Anchor, main function included.
  
1. Creating and Updating Anchor https://www.youtube.com/watch?v=28nxOI-nDuA
2. Selling and Buying Anchor https://www.youtube.com/watch?v=i5eIPOM9ZAk
3. Loading cApp,  https://www.youtube.com/watch?v=3SP7NNzzcH8

### Project Details

#### Architecture

![Anchor_Pallet.png](http://android.im/anchor/Anchor_Pallet.png)

- Anchor key-value system is completely implemented using only 3 methods, the simple system is easier to write, the better for the creator of cApp. The methods can be called via Polkadot.js easily . The function of the 3 methods are as follows:
  
| API |  Specification |
| ------------- | ------------- |
|  setAnchor | Set the data of the Anchor and connect the history of the Anchor |
|  sellAnchor| Set the Anchor on-sale status, you can specify the account |  
|  buyAnchor | Purchase the specified Anchor |  
  
- Use the built-in storage map of substrate to maintain the basic Anchor information, it is easy to query via Polkadot.js .

#### Technologies

1. React, Build a front-end program that operates the Anchor network.
2. Polkadot.js, JS library for interacting with Anchor nodes.
3. Docker
4. Substrate
5. Rust

#### Components

- The functionality of the Anchor pallet, which implements complete key-value logic using 3 methods.
  
1. setAnchor
   The method of setting and updating Anchor, the implementation logic is as follows:
   ![set_anchor.png](http://android.im/anchor/set_anchor_3.png)
   - Parameters of 1.0.0-dev   ``` key: Vec<u8>,raw: Vec<u8>,protocol: Vec<u8> ```
   - Parameters of 2.0.0-dev   ``` key: Vec<u8>,raw: Vec<u8>,protocol: Vec<u8> ```

2. sellAnchor
    Set and update Anchor to the state of sale, the implementation logic is as follows:
    ![sell_anchor.png](http://android.im/anchor/sell_anchor_3.png)
    - Parameters of 1.0.0-dev   ``` key: Vec<u8>, cost: u32 ```
    - Parameters of 2.0.0-dev   ``` key: Vec<u8>, cost: u32 , target : T::AccountId ```

3. buyAnchor
    The purchase of Anchor is in the state of sale, and the implementation logic is as follows:
    ![buy_anchor.png](http://android.im/anchor/buy_anchor_2.png)
    - Parameters of 1.0.0-dev  ``` key: Vec<u8> ```
    - Parameters of 2.0.0-dev  ``` key: Vec<u8> ```

- Two StorageMaps to maintain the state of all Anchor. This upgrade mainly link the Anchor history by adding data:
  
1. AnchorOwner StorageMap, Add a third value to save the last updated block.
Data struct of 1.0.0-dev : ```Vec<u8> -> (T::AccountId, T::BlockNumber)```
Data struct of 2.0.0-dev : ```Vec<u8> -> (T::AccountId, T::BlockNumber, T::BlockNumber)```

1. SellList StorageMap，Add a third value to sell Anchor to the specified account.
Data struct of 1.0.0-dev : ```Vec<u8> -> (T::AccountId, u32)```
Data struct of 2.0.0-dev : ```Vec<u8> -> (T::AccountId, u32, T::AccountId)```

- The blog program on Anchor realizes the startup of cApp, and can normally perform blog publishing and browsing functions.

### Ecosystem Fit

What sets this project apart is the introduction of a pure on-chain application (cApp), a simplified economic model.

- Simple Name Service that can quickly locate the content on the chain.
- On-chain APP development decoupled from assets simplifies access to blockchain data.
- Free customized cApp development.

## Team :busts_in_silhouette:

### Team members

- Zhongqiang Fu, individual developer.

### Contact

- **Contact Name:** Zhongqiang Fu
- **Contact Email:** ff13dfly@163.com
- **Website:** https://github.com/ff13dfly/Anchor

### Legal Structure

- Individual.
  
- **Registered Address:** R1115, Yunding , 499 Xinsheng Road , Wuxi , Jiangsu, China
- **Registered Legal Entity:**  None

### Team's experience

Personal development experience is mainly concentrated in the non-blockchain , but I have always wanted to join the blockchain development. Block chain development  is a bit difficult for traditional development. After continuing to study, I tested the way of Anchor, which treats substrate as a key-value system.  It is much convenient for traditional development.

- Anchor, Substrate-based key-value system.
  
- vExplorer, Anchor web explorer , can decode special data.

- cApp, cApp demos。

- Jeditor, simple and easy to use JSON editor. Quickly edit json data with just one reference.

### Team Code Repos

- https://github.com/ff13dfly
- https://github.com/ff13dfly/Anchor
- https://github.com/ff13dfly/vExplorer
- https://github.com/ff13dfly/cApp
- https://github.com/ff13dfly/jEditor

### Team LinkedIn Profiles (if available)

## Development Status :open_book:

- Anchor version '1.0.0-dev' : https://github.com/ff13dfly/Anchor
- Anchor dev network websocket link : wss://network.metanchor.net
- Anchor explorer : https://github.com/ff13dfly/vExplorer
- Anchor cApp demo : https://github.com/ff13dfly/cApp

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 10,000 USDT

### Milestone 1 - Anchor Pallet Develop

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | Documentation includes Inline Code Documentation, Configuration Documentation, Event Post Action Deployment guide, Docker and Docker compose setup documentation, Openwhisk Setup Documentation, Readme file |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 80%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1a. | Pallet Anchor: setAnchor | Set the data of the Anchor and connect the history of the Anchor |
| 1b. | Pallet Anchor: sellAnchor| Set the Anchor on-sale status, you can specify the account |  
| 1c. | Pallet Anchor: buyAnchor | Purchase the specified Anchor |  

### Milestone 2  — Anchor cApp ( on-chain Application ) Blog Demo

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | Documentation includes Inline Code Documentation, Configuration Documentation, Kafka and Zookeeper Deployment guide, wskdeploy guide, Readme file |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 80%) to ensure functionality and robustness. In the guide we will describe how to run these tests |  
| 1a. | cApp : blog | Normal blog application based on Anchor, coded just by Javascript. |


## Future Plans

Please include here

- Set up Anchor network to support cApp development. Hope to find a partner.
- In-depth development of blog and twitter programs based on Anchor for commercial use.
- Develop Metaverse product VBW based on Anchor.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

- What work has been done so far?  
Anchor v1 deployed.
Network entry : [wss://network.metanchor.net](wss://network.metanchor.net).
Demo link : [http://demo.metanchor.net](http://demo.metanchor.net/).
You can run the basic cApp 'blog' by searching 'blog' on http://demo.metanchor.net/.

- Are there are any teams who have already contributed (financially) to the project?  
No , it is great to have partners to move forward.

- Have you applied for other grants so far?  
No , tried but failed, still helpful, :-).
