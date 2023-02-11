# Anchor, On-chain Linked List pallet and Name Service

- **Team Name:** Fuu
- **Payment Address:** 13u5kLGrt4n1Smc78ZXtYVedgp1U1LyGAAHtPFtVcv6Z1BtR (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview :page_facing_up:

### Overview

- Anchor is a on-chain linked list system base on substrate 3.0.0. It is used to support cApp ( Chain Application ) development. On another hand, Anchor can alse be treated as Name Service or on-chain key-value storage system.

- Anchor is a isolated substrate pallet. It is currently used in the application of freeSaying. It can provide flexible data structure on the chain and handle complex logic without upgrading the substrate node itself.
You can access the [freeSaying ( Only applicable to mobile )](https://freesaying.net) demo to know well. Anchor network is the very important basic storage system. Anchor.js is a isolate JS library to access Anchor network, can read and write data easily.
Anchor pallet is a part of EasyPolka, the relationship as follow :

![easypolka.png](http://android.im/anchor/easypolka.png)

QR to access to freesaying.net.
![easypolka.png](http://android.im/anchor/qr.png)

- With Anchor, you can use run a substate network just need a bit upgrade. Through the highly customizable data structure and the ability of cApp, the threshold of application development on the chain is greatly reduced. It means that new developers who even does not know blockchain well can build cApp just by Javascript and publish it nearly free.

- As a web developer, I firmly believe in the future of blockchain technology, but when I turn to blockchain development, I encounter a huge threshold. It takes a lot of time to get familiar with both language and various concepts. At the same time, technology is still improving, and a stable development environment cannot be obtained. All of these prompted me to improve EasyPolka for my own development.
So far, only one person myself can develop complex cApp ( on-chain applications ). I believe that this can help other developers to build cApps more efficiently.
Will try to apply the left part, it is a bit complex, I am working on regrouping them now. The image show the whole structure.

![easypolka.png](http://android.im/anchor/easypolka_not.png)

### Project Details

- Anchor development itself has been done, and it is deployed here [check "wss://dev.metanchor.net" on polkadot.js.org](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdev.metanchor.net#/explorer). One cApp is deployed to test too, the URL is [https://freesaying.net](https://freesaying.net). This React project load the target Anchor "freeSaying" from dev.metanchor.net, then run the cApp which is a socail media application.

- There are 4 methods and 2 stores to implement the on-chain linked list function in Anchor pallet.

- Substrate 3.0.0 and Rust for Anchor pallet. Javascript for anchor.js.

- Code here [https://github.com/ff13dfly/Anchor](https://github.com/ff13dfly/Anchor), the document is the next step.

- Treat Anchor as Name Service, there is no available pallet can be use. Have checked here [Open Source Polkadot Stack](https://wiki.polkadot.network/docs/build-open-source).
![easypolka.png](http://android.im/anchor/status.png)

- The function of Anchor has been finalized and will not be further expanded on substrate side. The function of the current version is the final form.

### Ecosystem Fit

- An available Name Services on Substrate 3.0.0, and it is extended to a On-chain Linked List system.

- Developers who have not yet used substrate/Polkadot. Developers who do not like Smart Contract way to develop application.

- Developer can build application flexibly without understanding the whole blockchain system. I think this is attractive to many developers.

- From the [Open Source Polkadot Stack](https://wiki.polkadot.network/docs/build-open-source), there are 4 Name Service pallets, 2 red ( can not compatible to substrate 3.0.0 ) and 2 yellow ( code not updated more than 2 months by checking github ).

## Team :busts_in_silhouette:

### Team members

- Zhongqiang Fu, individual developer.

### Contact

- **Contact Name:** Zhongqiang Fu
- **Contact Email:** ff13dfly@163.com
- **Website:** https://github.com/ff13dfly/

### Legal Structure

- Individual

### Team's experience

- On substrate, Substrate with Anchor pallet has been build successful and run at [wss:dev.metanchor.net](wss:dev.metanchor.net). I have tried to load a three nodes network successful.

### Team Code Repos

- https://github.com/ff13dfly/
- https://github.com/ff13dfly/Anchor

### Team LinkedIn Profiles (if available)

## Development Status :open_book:

- Demo cApp [freeSaying](https://android.im/vManager/) is published now. The test network is available, you can access [wss:dev.metanchor.net](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdev.metanchor.net#/explorer). Anchor pallet functions have been developed, but not tested entirely.

## Development Roadmap :nut_and_bolt:

### Anchor pallet

- There are 4 methods exposed. One for setting data, Three for trading anchor.
  ![easypolka.png](http://android.im/anchor/methods.png)
  1. setAnchor, set Anchor data method.

    ```RUST
    pub fn set_anchor(
      origin: OriginFor<T>,   //default
      key: Vec<u8>,           //Anchor name
      raw: Vec<u8>,           //raw data to storage
      protocol: Vec<u8>,      //data protocol, used to decide how to decode raw data
      pre:T::BlockNumber      //the previous block number which storage anchor data
    ) -> DispatchResult {
      // code here.
      Ok(())
    }
    ```

  2. sellAnchor, sell your Anchor publish or to target account.

    ```RUST
    pub fn sell_anchor(
      origin: OriginFor<T>,   //default
      key: Vec<u8>,           //Anchor name
      cost: u32,              //unit accuracy
      target:<T::Lookup as StaticLookup>::Source  //target buyer SS58 address. If the same as owner, can be sold to anyone.
    ) -> DispatchResult {
      // code here.
      Ok(())
    }
    ```

  3. unsellAnchor, revoke Anchor sell status.

  ```RUST
    pub fn unsell_anchor(
      origin: OriginFor<T>,   //default
      key: Vec<u8>,           //Anchor name
    ) -> DispatchResult {
      // code here.
      Ok(())
    }
  ```

  4. buyAnchor, buy target Anchor which is on sell.

  ```RUST
    pub fn buy_anchor(
      origin: OriginFor<T>,    //default
      key: Vec<u8>,            //Anchor name
    ) -> DispatchResult {
      // code here.
      Ok(())
    }
  ```

- There are two Runtime Storage. One for the anchor data status, one for the on-sell list.
  ![easypolka.png](http://android.im/anchor/storage.png)
  ```RUST
    // (T::AccountId,T::BlockNumber)
    //  T::AccountId, the anchor owner ss58 address
    //  T::BlockNumber, last block number when updated data successfully.
    pub(super) type AnchorOwner<T: Config> = StorageMap<_, Twox64Concat, Vec<u8>, (T::AccountId,T::BlockNumber)>;

    // (T::AccountId, u32,T::AccountId)
    // T::AccountId, the anchor owner ss58 address
    // u32, the sell price for the anchor
    // T::AccountId, the target buyer. If the same as owner, it is free to buy.
    pub(super) type SellList<T: Config> = StorageMap<_, Twox64Concat, Vec<u8>, (T::AccountId, u32,T::AccountId)>;
  ```

### anchor.js

- exposed methods. Three parts : basic substrate functions, anchor data I/O functions, anchor exchange functions. It has been used in the demo freeSaying, but no isolated yet. And exchange part need to code this time.
Anchor.js can help developer accessing Anchor network by this single JS.

  ```JS
    /*******************************/
    /* substrate related functions */
    /*******************************/

    //link to target substrate node
    exports.link=function(endpoint,callback){
      /* return callback && callback(PolkadotJS.API) */
    };

    //load encry file to get pair
    exports.load=function(file,password,callback){
      /* return callback && callback(pair) */
    };

    //subcribe the latest block
    exports.subcribe=function(callback){
      /* return callback && callback(anchorDataList) */
    };

    //check account balance
    exports.balance=function(ss58Address,callback){
      /* return callback && callback(amount) */
    },
    
    /***********************************/
    /* Anchor pallet related functions */
    /***********************************/

    /* data part */
    //get the latest anchor data
    exports.latest=function(anchor,callback){
      /* return callback && callback(formattedAnchorData) */
    };

    //get the anchor data on special block.
    exports.target=function(anchor,block,callback){
      /* return callback && callback(formattedAnchorData) */
    };

    //get the list data of anchor.
    exports.history=function(anchor,callback,limit){
      /* return callback && callback(listofAnchorsData) */
    };

    //set target Anchor data.
    exports.write=function(pair,anchor,raw,protocol,callback){
      /* return callback && callback(toChainProcessStatus) */
    };

    /* market part */
    //set Anchor status to sell.
    exports.sell=function(pair,anchor,cost,target,callback){
      /* return callback && callback(true/false) */
    };

    //buy anchor on sell.
    exports.buy=function(pair,anchor,callback){
      /* return callback && callback(true/false) */
    };

    //revoke anchor from selling.
    exports.unsell=function(pair,anchor,callback){
      /* return callback && callback(true/false) */
    };
  ```

### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 6,000 USDT

### Milestone 1 — Anchor pallet testing & documents, anchor.js full function

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 6,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. On anchor.js, will supply demo to test. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. I am not so fimilar with Docker, that will take a bit long time. |
| 0e. | Anchor pallet | Will fix if neccessary. Mainly testing this time. |
| 0f. | anchor.js | A demo with all functions will be developed by React |

## Future Plans

- Anchor is the data storage part of EasyPolka, it is the most important component. Next, the whole EasyPolka will be open source. At present, it includes the following contents.

| Order | Name | Demo | Github | introduction |
| -----: | ----------- | ------------- | ------------- | ------------- |
| 1 | Anchor | wss://dev.metanchor.net | [https://github.com/ff13dfly/Anchor](https://github.com/ff13dfly/Anchor) | Linked list on chian & Name service |
| 2 | Saying | [https://freesay.net](https://freesay.net) | Not yet | Plinth for cApp |
| 3 | cSaying | on block 2,220 | Not yet | FreeSaying cApp , pure JS app |
| 4 | vGateway | [https://android.im/vGateway/](https://android.im/vGateway/) | Not yet | Gateway access to vServices |
| 5 | vManager | [https://android.im/vManager/](https://android.im/vManager/) | Not yet | Management portal for vServices |
| 6 | vHistory | No domain, node.js app | Not yet |Anchor cache vService |
| 7 | vSaying | No domain, node.js app | Not yet] | FreeSaying comment vService |
| 8 | vMarket | No domain, node.js app | Not yet | Free charge vService |
| 9 | vMix | No domain, node.js app | Not yet | Front mixer vService |
| 10 | vSocial | No domain, node.js app | Not yet | Fav & tread vService |

![easypolka.png](http://android.im/anchor/easypolka_not.png)

- The functions above, you can test on the cApp [freeSaying](https://freesaying.net).
It is not very stable to access Github here, so the left codes are on my private git server.

- The whole EasyPolka framework works properly, but still so many details to fix and neccesary function to add.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website.

- Demo cApp [freeSaying](https://android.im/vManager/) is published now. The test network is available, you can access [wss:dev.metanchor.net](wss:dev.metanchor.net).

- I have tried twice to apply the Gant Application but not accepted.
  Anchor, a key-value storage system for substate. Now, it is extended, and applying again, :-)
  SimPolk, simulator of Polkadot.
