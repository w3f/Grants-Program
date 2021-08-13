# W3F Open Grant Proposal

* **Project Name:** simPolk

* **Team Name:**   Fuu

* **Payment Address:**  0xF8105ea1cC3130501bad5De60Bd3D794a9115dE2 (USDT)

  

## Project Overview :page_facing_up:

### Overview

* SimPolk is a simulator for Polkadot. Developers who have never been in contact with blockchain development, can quickly understand blockchain and Polkadot, and quickly build application on Polkadot . That's the goal of simPolk.
* Polkadot has made blockchain development simple and modular, but the threshold for web developers is still high. New developer needs to be familiar with many new concepts. At the same time, building a private parachain is also a huge project. As the development of polkadot is in rapid iteration, only maintaining the software version needs to spend a lot of energy and face various compilation errors.
* As a programmer from web to blockchain, I have experienced this time-consuming and labor-consuming painful process and faced great challenges. I spent a lot of time and energy from learning rust to debugging the substrate, from adding pallet to upgrading the substrate version. However, the problem has not been well solved. Have a look at the pending project [virtual block world](https://github.com/ff13dfly/VirtualBlockWorld)。 The product design and development of dapp depend on a stable and easy-to-use blockchain network.
* Keep thinking about these troublesome, SimPolk was born. SimPolk ( Polkadot simulator ), abandoning the various skills required to establish a private chain, can simulate most of the private chain behavior by simply copying the code and configuring the setting file. Moreover, simPolk is a stand-alone simulator, which can be familiar with Polkadot  without any network support. By saving application developers from the bottom of the blockchain , developers can focus on application.
* In the future, the application can also be directly switched to the real Polkadot network through a gateway. In this way, the development of Polkadot application can be carried out step by step.



### Project Details

* Simpolk is a complete set of blockchain simulator, which can simulate the behavior of blockchain on localhost, including block generation, block structure, transaction structure, chain storage structure and smart contract structure. These structures are parsed in JSON for easy reading and use. All of these come from simPolk's goal, fast reading, fast understanding and fast use. Within 10 minutes, you can preliminarily understand the important technical points involved in the blockchain and start building your own application.
* Currently,simPolk has released version 0.1,Demo: [http://simpolk.android.im/ui](http://simpolk.android.im/ui) , Github : [https://github.com/ff13dfly/simPolk](https://github.com/ff13dfly/simPolk)
* Based on the goal of simple use, PHP is used as the program language , redis is used as the data storage engine, and JSON  is used as the data response format. The future version will support file saving, which is more convenient to check the data struct.
* SimPolk returns the data struct consistent with Polkadot by simulation, which provides intuitive data results for understanding the core concepts such as utxo, block structure and Merkle tree. You can also directly call the API part of simplok through jsonp to try to quickly enter the development of Polkadot.
* Only a single PHP file is used to simulate Polkadot . You can quickly build a virtual network,  to observe the mining process and to observecoinbase  or Merkle tree in details.
* A single PHP file is used  to simulate Polkadot's pallet, which helps developer building product prototypes and optimizing products effectively.



### Ecosystem Fit

* Polkadot ecosystem hopes to attract more developers and develop more applications based on Polkadot. But new developers face two major obstacles: system framework understanding and development language. Simpolk simulates Polkadot network through simple and easy-to-use PHP to help developers quickly overcome these two obstacles.
* As an application developer myself, I agree with the conception of Polkadot , and focus on application of Polkadot (like [virtual block world](https://github.com/ff13dfly/VirtualBlockWorld)). There are a huge number of developers like me, as a common web developer, the coding stack is "PHP + JS". We have a steep learning curve for the compiled languages RUST, and can be blocked from blockchain development in the early stage easily . Blockchain is a complex technology, and various concepts are rarely touched in daily development.
* In the process of developing simPolk, I had a deeper understanding of blockchain structure, utxo, smart contract and other important blockchain concepts. In particular, simPolk has developed the function of pending simchain.  It is very helpful to understand Polkadot.Developer can  statically observe the simchain and understand the relationship between various data items.
* After checking the official support projects of Polkadot, no similar projects have been found at present. The current solution for developers is completely open source and provides a large number of test networks, but the complexity is too high for a web developer. New developers need to spend a lot of time to build their own applications.
* After using simpolk skillfully, you can first carry out prototype development based on simPolk, which greatly improves the development efficiency. I have used this method in the development of  [virtual block world](https://github.com/ff13dfly/VirtualBlockWorld) and quickly solved several problems, which are caused by the differences between blockchain  and web.



## Team :busts_in_silhouette:

### Team members

* Zhongqiang Fu , a web developer and metaverse developer.


### Contact

* **Contact Name:** Zhongqiang Fu
* **Contact Email:** ff13dfly@163.com
* **Website:** [https://github.com/ff13dfly](https://github.com/ff13dfly)



### Legal Structure

* Individual.



### Team's experience

My personal development experience mainly focuses on the web development. It is precisely because I want to develop applications based on Polkadot that simPolk comes into being. 

* virtual block world ( [https://github.com/ff13dfly/VirtualBlockWorld](https://github.com/ff13dfly/VirtualBlockWorld) )，a metaverse virtual world rely on Polkadot. A virtual world totally on blockchain, both data and application.
* Jeditor ( [https://github.com/ff13dfly/Jeditor](https://github.com/ff13dfly/Jeditor) )，a simple json editor. With only one reference, you can quickly edit JSON data. Jeditor  is also used in simPolk 's UI development.
* simPolk ( [https://github.com/ff13dfly/simPolk](https://github.com/ff13dfly/simPolk) )，a simulator for Polkadot.



### Team Code Repos

* [https://github.com/ff13dfly/VirtualBlockWorld](https://github.com/ff13dfly/VirtualBlockWorld)

* [https://github.com/ff13dfly/Jeditor](https://github.com/ff13dfly/Jeditor)

* [https://github.com/ff13dfly/simPolk](https://github.com/ff13dfly/simPolk)

  

## Development Status :open_book:

* SimPolk has released version 0.1, details as follow. SimPolk have both  API and UI, developer can use it directly.
  * Demo of simPolk :  [http://simpolk.android.im/ui/](http://simpolk.android.im/ui/)
  
  * Github of simPolk : [https://github.com/ff13dfly/simPolk](https://github.com/ff13dfly/simPolk)

    
  
* Program structure

  * Simpolk implements the goal of simplicity and ease of use and does not use any PHP framework. There is only one PHP file in the simulation part of the blockchain, which is easy to understand and read.

  * SimPolk's file list（simPolk/API/）

    | 目录  | 文件名              | 功能描述                                                     |
    | :---: | ------------------- | ------------------------------------------------------------ |
    | ./lib | core.class.php      | Class of data storage and basic functions. Use redis as the database. |
    | ./lib | simulator.class.php | Class of simulator, UTXO, blockchain data structure and other core simulation parts. |
    | ./sim | account.class.php   | Class of interface, account create and account inquiry       |
    | ./sim | chain.class.php     | Class of interface, transaction and block browse             |
    | ./sim | contract.class.php  | Class of interface, functions of smart contract              |
    | ./sim | node.class.php      | Class of interface, functions of smart node                  |
    | ./sim | sample.class.php    | Class of interface, sample for pallet development            |
    | ./sim | storage.class.php   | Class of interface, functions of storage on chain            |
    |  ./   | config.php          | Simchain config fiel , JSON format                           |
    |  ./   | entry.php           | Request entry point                                          |

    

  * Rule of simPolk's routing. 

    The sample url :`entry.php?mod=account&act=list&p=3&callback=?`

    | 参数     | 值      | 说明                                                         |
    | :------- | ------- | ------------------------------------------------------------ |
    | mod      | account | Parameter for routing，required，used to include file as sim/{mod}.class.php |
    | act      | list    | Parameter for routing，required，used to call task method {act}  in {mod}.class.php |
    | callback | ?       | Parameter for JSONP callback，not required                   |
    | p        | 3       | More parameters，not required，sent to the target method     |

    

  * SimPolk use redis (key-value database) as data engine, and using file as data engine will be developed later, which is more convenient for observing the data structure.

    

* UI introduction

  * Setting of simchain, such as pending simchain , blockchain speed , coin name, basecoin award and more. One of the important functions is to pend the simchain. By using this function, the simchain will pend the generation of blocks, developer can observe the status of the blockchain and carry out operations on the chain.

    ![config](http://android.im/simpolk/ui_config.png)

    

  * Data browsing of the simchain. Developer  can see the current status of the simchain, browse the specified block (JSON mode) on chain, and check the list of the collected transactions, storage and smart contracts.

    ![config](http://android.im/simpolk/ui_chain.png)

  * Account management of simchain. You can display the list of all accounts in the simchain, search the details of the specified account and the details of the specified available input.

    ![config](http://android.im/simpolk/ui_account.png)

    

  * Transaction of simchain. Transfer to the specified target account and search the details of the specified available input.

    ![config](http://android.im/simpolk/ui_transaction.png)

    

  * Storage management of simchain. Add storage to simchain with the specified account and search the specified storage details.

    ![config](http://android.im/simpolk/ui_storage.png)

    

  * Contract management of simchain. Add contract to simchain with the specified account and search the specified contract details.

    ![config](http://android.im/simpolk/ui_contract.png)

    

  * Node management of simchain.

    ![config](http://android.im/simpolk/ui_node.png)

* Manuals.

  * Manual for simPolk operation.
  * Manual for simPolk setting.
  * Manual for simPolk node setting.
  * Manual for simPolk API.



## Development Roadmap :nut_and_bolt:

* SimPolk's stand-alone simulator helps developers get familiar with the development of Polkadot, and then connects to the parachain through the gateway to help developers realize the rapid uplink of applications.

  * Data flow of stand-alone simulator (verion 1.0)

  ![version 1.0](http://android.im/simpolk/v1.png)

  * Data flow of gateway to parachain (verion 2.0)

  ![version 2.0](http://android.im/simpolk/v2.png)

  

* Parts of simPolk ：API , UI , Node

  * API, basic functions of simulator and the functions of APIs。
  * UI, management portal for simchain.
  * Node,simulator of simchain node.

### Overview

* **Total Estimated Duration:** 3 months

* **Full-Time Equivalent (FTE):**  4 FTE

* **Total Costs:** 24,000 USD

* This development of simPolk mainly solves the two aspects of data structure matching and smart contract implementation. After that, we will try to apply it to the [virtual block world](https://github.com/ff13dfly/VirtualBlockWorld), understand the development requirements, and lay a good foundation for the next development from simPolk to gateway.

  

### Milestone 1 : Data structure simulation

* **Estimated duration:** 1 month
* **FTE:**  1FTE
* **Costs:** 6,000 USD

SimPolk has completed the framework development of blockchain, but the data structure is different from that of Polkadot. It is necessary to understand the block structure of Polkadot network and make gradual correction. The purpose is to make the data structure and data type of the simchain consistent with the real Polkadot, so as to give developers a more real experience, and provide support for the data connection of the subsequent simchain gateway.

| Number | Deliverable   | Specification                                                |
| :----- | ------------- | ------------------------------------------------------------ |
| 0a.    | License       | Apache 2.0                                                   |
| 0b.    | Documentation | Instructions for use and data structure will be provided.    |
| 0c.    | Testing Guide | Unit test the functions of 'api/lib/simulator.class.php' file and provide unit test code |
| 0d.    | Docker        | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. The new version will be deployed, link [http://simpolk.android.im](http://simpolk.android.im) |
| 0e.    | Source Code   | Details as follow.Not all file listed, just the ones need to be improved. |

* api/lib/simulator.class.php, all simulator methods in this file.
  * [ ] $raw, block data structure, need to be modified the same as Polkadot.
  * [ ] $utxo,UTXO data structure, need to be modified the same as Polkadot.
  * [ ] $from, UTXO input data structure, need to be modified the same as Polkadot.
  * [ ] $to,UTXO output data structure, need to be modified the same as Polkadot.
  * [ ] $account, account data structure, need to be modified the same as Polkadot.
  * [x] Block chain I/O , use redis as storage engine.
  * [x] UTXO function.
  * [x] Collected pool.
  * [x] Storage function.

* api/sim/storage.class.php,

  * [ ] $raw, storage data structure, need to be modified the same as Polkadot.
  * [x] Set storage.
  * [x] Get storage.

* client/server.php

  * [ ] Works as a cache server, response correctly to API calls.
  * [ ] Mining simulation.

* UI/

  * [ ] Select target simulate node.

  * [ ] Simchain contract management. 

  * [x] Simchain setting. Pending the simchain,change the coin name. You can try this link http://simpolk.android.im/ui/#summary

  * [x] Simchain browser.Simchain status, collected pool, block browse. You can try this link http://simpolk.android.im/ui/#chain

  * [x] Simchain account management. You can try this link http://simpolk.android.im/ui/#account

  * [x] Simchain transaction. You can try this link http://simpolk.android.im/ui/#transaction

  * [x] Simchain storage management. You can try this link http://simpolk.android.im/ui/#storage

  * [x] Simchain node management. Node list, Mining simulation.  You can try this link http://simpolk.android.im/ui/#node

    

### Milestone 2 : Smart contract function

* **Estimated duration:** 1 month
* **FTE:**  2FTE
* **Costs:** 12,000 USD

Complete the simulation of smart contract, so that simPolk users can understand the operation principle of smart contract, write and run the simulated smart contract, and better design the smart contract applied by developers.

| Number | Deliverable   | Specification                                                |
| :----- | ------------- | ------------------------------------------------------------ |
| 0a.    | License       | Apache 2.0                                                   |
| 0b.    | Documentation | Documentation for the creation and execution of smart contracts, as well as instructions on how to simulate the implementation of smart contracts |
| 0c.    | Testing Guide | Unit test the contract functions of 'api/lib/simulator.class.php' file and provide unit test code |
| 0d.    | Docker        | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. The new version will be deployed, link [http://simpolk.android.im](http://simpolk.android.im) |
| 0e.    | Source Code   | Details as follow.Not all file listed, just the ones need to be improved. |

* api/lib/simulator.class.php

  * [ ] Collect contract to pool.
  * [ ] Set contract by hash.
  * [ ] Get contract by hash.

* api/sim/contract.class.php

  * [ ] Filter parameters for adding contract to simchain.
  * [ ] Get contract ( raw Javascript code )  from simchain.
  * [ ] Run contract . Current solution is that node sent the contract body ( raw Javascript code ) to browser, code will run in browser, it will do two things, call transaction or update storage.

* UI/

  * [ ] contract submisstion form.
  * [ ] contract search.
  * [ ] other neccessary modification.

  

### Milestone 3 : Application integration 

* **Estimated duration:** 1 month

* **FTE:**  1FTE

* **Costs:** 6,000 USD

Switch the data request of [virtual block world](https://github.com/ff13dfly/VirtualBlockWorld) to simPolk to verify whether simPolk can help application development. Verifying simPolk 's simulation function can help application development verify data structures and smart contracts, and can quickly join Polkadot ecosystem.

| Number | Deliverable   | Specification                                                |
| :----- | ------------- | ------------------------------------------------------------ |
| 0a.    | License       | Apache 2.0                                                   |
| 0b.    | Documentation | Provides the PHP class file for virtual block world integration, which explains in detail how to realize the function. |
| 0c.    | Testing Guide | Unit test the VBW functions of 'api/sim/vblock.class.php' file and provide unit test code |
| 0d.    | Docker        | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.VBW means [virtual block world](https://github.com/ff13dfly/VirtualBlockWorld) |
| 0e.    | Source Code   | Details as follow.Not all file listed, just the ones need to be improved. |

* api/sim/anchor.class.php. Anchor is public access to simchain, loading Javascript application by this way.You can treate this file  as a pallet in substrate.

  * [ ] Set anchor by name
  * [ ] Get anchor by name
  * [ ] Cache anchor data
  * [ ] Rebuild anchor cache from simchain

* api/sim/vblock.class.php. vBlock is a  JSON format string storaged in simchain . It is the basic stick of [Virtual Block World]() .

  * [ ] Set  vblock by coordinate
  * [ ] Get vblock by coordinate
  * [ ] Cache vblock data
  * [ ] Rebuild vblock cache from simchain

* api/sim/vworld.class.php, vWorld is a  JSON format string storaged in simchain. It is the world setting of [Virtual Block World]() 

  * [ ] Set  world setting by world ID.
  * [ ] Get world setting by world ID.
  * [ ] Cache world setting.
  * [ ] Rebuild world setting cache from simchain

* api/sim/vsource.class.php, vSource is Base64 string storaged in simchain. It can be any type of file, will be decoded by application.

  * [ ] Set  source by  sha256(name).

  * [ ] Get source by  sha256(name).

  * [ ] Cache source files.

  * [ ] Rebuild source files cache from simchain.

    

## Future Plans

* SimPolk will be applied to the [virtual block world](https://github.com/ff13dfly/VirtualBlockWorld) project to verify the rationality of the function.

* In the near future, simPolk's gateway will be assumed to access the Polkadot  parachian in KV way. It can participate in the Polkadot  ecosystem only by configuring the necessary parameters.




## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  Web3 Foundation Website .

* Submitted  [virtual block world](https://github.com/ff13dfly/VirtualBlockWorld) to Open Gant Application, the metaverse concept at that time was not widely recognized and not be accepted.