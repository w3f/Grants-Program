# EightFish

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
> 
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** EightFish
- **Payment Address:** 0xdF75b4D1EBF1682eD59a256E50800DFD9047C5Eb (Ethereum ERC20 USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

![](https://github.com/miketang84/eightfish_assets/blob/master/eightfish_logo_light_small.png?raw=true)

EightFish is an OpenWeb/Web3 application development framework.

EightFish is based on Substrate, and consists of some other components. A typical EightFish container node looks like the following:

![](https://github.com/miketang84/eightfish_assets/blob/master/eightfish_node.png?raw=true)

We think for Web3 application, the substrate framework itself is merely enough, people need do more work, especially the off chain part work, to accomplish the Web3 backend development. EightFish introduces a new programming model for Web3 application development - based on Substrate - that writing Web3 backend is just like writing a Web server backend by doing CRUD.

The aims of EightFish are to make the Web3 development easier, import more traditional internet developers into the Web3/Substrate/Rust communities, and bring the Web3 applications into people's daily life.

### Project Details

#### The Basis of Theory

There is an article: [The Road to Open Web](https://medium.com/@daogangtang/the-road-to-open-web-b684879a5571) talking about why currently Web3 failed in the field of internet application and why we need a new direction: open data and open web, to extend the Web3 application to the traditional internet users.

And EightFish is an engineering implementation for this new direction.

#### The Approaches

On designing this architecture, we have two major rules:

1. The division of business and assets
2. Put major computing and storage into off chain

#### The Architecture

![node](https://github.com/miketang84/eightfish_assets/blob/master/eightfish_node.png?raw=true)

Let's look into the components in the above figure:

- On-chain, blockchain node
- Off-chain Wasm Worker
- Traditional SQL database

The blockchain node is in charge of synchronization, data table indexing, and code upgrade. The Off-chain wasm worker is in charge of biz logic computing, db operation and so on. The SQL database is in charge of data storing and query.

The overview diagram for the whole network is as follow: 

![network_overview](https://raw.githubusercontent.com/miketang84/eightfish_assets/master/network_overview.webp)

As we can see, only the blockchain node of a eightfish node participates in the network communications.

In this architecture, we define the mapping relationship between the on-chain storage and the SQL database tables. Please look at the following diagram:

![inspiration](https://raw.githubusercontent.com/miketang84/eightfish_assets/master/inspiration.webp)

We ensure that the items in the on-chain storage — the id-hash pairs — are always the same as the items in each row of the SQL db table. By this way, we create a mapping between the on-chain storage items and the SQL db table. Once we get agreements on the on-chain id-hash pairs, we get agreements on the table data of the SQL database by rows too. And its granularity is on the row level, not on the whole table level or db level. This brings grand flexibility for programming and framework design.

The writing process is as follow:

![write_process](https://raw.githubusercontent.com/miketang84/eightfish_assets/master/writing_process.webp)

The main flow without errors handling of the above diagram is as following:

1. User makes http request to the off-chain wasm worker
2. After some basic checks, the wasm worker forwards the user request to the blockchain node (runtime)
3. The blockchain node adds this request to the block, and emits an event out. The wasm worker listens to the blockchain node, gets the event emitted from the blockchain node, and implements the real business logics in this worker
4. After processing the event, including calculating out the hash of the object going to write to the database, the wasm worker sends the update SQL command with data to the SQL database, and waits for the result returned from the database
5. If writing command executed well, send another RPC request with the object id-hash pair value calculated in step 4 to the blockchain node, and store it to the on-chain storage
6. If all steps go well, return ok 200 to the user’s browser; if has error, return other status codes

The query process is as follow:

![query_process](https://raw.githubusercontent.com/miketang84/eightfish_assets/master/query_process.webp)

The main flow without errors handling of the above diagram is as following:

1. User makes http query request to the off-chain wasm worker
2. After some basic checks, the wasm worker make SQL query from the SQL database
3. Database outputs the query result rows to off-chain wasm worker, and the wasm worker process the data, select out the hash and id columns from rows, make a id-hash pair list
4. Send this id-hash pair list to blockchain node to check whether are they right on equalities in the corresponding map structure in the on-chain storage
5. If all list items are checked and is right, the blockchain node returns true to the off-chain wasm worker
6. Once get the true result from the blockchain node’s checks, the off-chain wasm worker returns the data manipulated to conform the format of API view to the user/browser

The code upgrading process is as follow:

![code_upgrade](https://raw.githubusercontent.com/miketang84/eightfish_assets/master/code_upgrade.webp)

The main flow without errors handling of the above diagram is as following:

1. Use a supervisor privilege (Or a DAO governance) to update the new wasm bytecode to the blockchain node on-chain storage
2. Trigger the off-chain wasm worker to send the request to grab the new version of the wasm code from the on-chain storage, by interval timer or http request directive
3. Download the new version of the wasm code to wasm worker, and reboot itself on the fly
4. Now the code running is the latest version

#### The Tech Stack

- Substrate
- Subxt
- [Spin (fermyon/spin)](https://github.com/fermyon/spin)
- Wasmtime
- Webassembly
- Redis
- Postgresql

Substrate, one of the core components, as the fundamentals and mechanism for synchronization of the data table indexing, consensus and code upgrading.

#### The SDK Interface Sample

We design the developer SDK interface as a MVC web framework alike:

```
pub fn article_create(req: &mut Request) -> EightFishResult<Response> {
     // biz stuff
}

fn router(&self, router: &mut EightFishRouter) -> EightFishResult<()> {
    router.get("/article/:id", Self::article_path_page);
    router.post("/s/article/create", Self::article_create);
    Ok(())
}
```

#### The Outstanding Features of the Application Developed by EightFish

We can summarize the outstanding features of the application developed by EightFish:

- Use blockchain as the mechanism for synchronization of the data table indexing, 
  consensus and code upgrade
- Pursuing for the high performance tps, lower to 2~4 nodes, to run a blockchain 
  application, to get the highest performance
- Put major computing off-chain
- Easy and quick query and indexing 
- No assets on it, but credits (asset is transferable, credit is non-transferable)
- No need for collateral

By this way, this solution can be adopted and deployed by EVERY person/organization, and doesn't rely on any public service, we call it self-sovereign like what Web1.0 provides (http protocol, nginx servers, etc).

There is no need to force users to use a web browser wallet plugin to kick off the beginning of the application. 
No new concepts need to be mastered, so it's relatively easy to import the internet users into the open web  application.

EightFish is a programming framework whose SDK interface is as simple as a traditional MVC web development framework. A good profit we can get is that this solution keeps programming models as the same as Web2.0 (MVC, CRUD, RESTFUL, GRAPHQL), and easily imports traditional web programmers into Open Web. 

This solution leverages all existing outstanding achievements in the database and distributed computing/storage industry from the internet time begins. We can build our next generation of applications based on the shoulders of giants

### Ecosystem Fit

EightFish itself is a development framework, its users are developers.

The experience of Web2 MVC framework alike will help import amounts of Web2 developers into Web3 and Substrate dev communities, meanwhile help Web3 developers implement their applications for broader internet users easily and quickly. Indirectly, we hope to attract more end users into Web3, by providing better UX and performances, which rely on the underlying framework. Thus we believe in the more adoption of EightFish, the more adoption of Substrate.

Right now we don't find similar projects on this direction in the Substrate / Polkadot / Kusama ecosystem, and even in other ecosystems. Because most of other ecosystems are in fact ecosystems of smart contract public blockchains, the projects among them are unlikely going to adopt the appchain approach that Polkadot uses.

## Team :busts_in_silhouette:

### Team members

- Daogang Tang (Mike Tang)
- Keqin Tao (Hacken)

### Contact

- **Contact Name:** Daogang Tang
- **Contact Email:** daogangtang@gmail.com
- **Website:** N/A

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

Daogang Tang (Mike Tang), a Rust enthusiast in China, the co-founder of Rust Chinese Community (RustCC), the advocator of the Substrate framework in China, has more than 15-years experiences on coding and architecture. He is also the ex-cofounder of Octopus Network, in charge of developer community building. He has done many research on Substrate and Web3, and published some articles on public media. He has been striving to promote the mass adoption of Rust, Substrate and Web3. 

Keqin Tao (Hacken), a Rust language lover, active in Rust Chinese Community. He is a certified AWS solution architect. He endeavours to introduce Rust into the projects of his company. He has much experience on Rust and Substrate developing.

### Team Code Repos

- https://github.com/miketang84/eightfish
- https://github.com/miketang84/openforum-subnode
- https://github.com/miketang84/openforum-subxtproxy
- https://github.com/miketang84/openforum
- https://github.com/miketang84/openforum-upgrade

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/miketang84
- https://github.com/taokeqin

## Development Status :open_book:

In Dec, 2022, Daogang Tang published his research on the theory of Open Web, a subset of Web3, the link is [The Road to Open Web](https://medium.com/@daogangtang/the-road-to-open-web-b684879a5571). This work has been lasting for about 2 years.

And roughly from the June, 2022, Daogang Tang started to construct the EightFish framework, the framework to implement the theory of Open Web. Till now the five core components have been developed, and need another estimated one or two months to make them work together. So it is the right time to apply for the grant of W3f, and introduce the work we did to the whole substrate community.

A full version deck of EightFish can be found here: [EightFish Deck](https://docs.google.com/presentation/d/1fcg1UFuCElRW8YLTtlh151X9wc0zxmIBLq0o6YOrYis/edit?usp=sharing)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3.5 months
- **Full-Time Equivalent (FTE):**  2 FTEs
- **Total Costs:** 30,000 USD

### Milestone 1 — Accomplishing All Basic Components of EightFish

- **Estimated duration:** 1 month 
- **FTE:**  2
- **Costs:** 10,000 USD

| Number  | Deliverable                 | Specification                                                                                                                                                                                                                                 |
| -------:| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                     | GPLv3                                                                                                                                                                                                                                         |
| **0b.** | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide   | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| **0d.** | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
| 0e.     | Article                     | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant).                                                                                                                                    |
| 1.      | Substrate module: eightfish | We will create a Substrate module that will:<br/> 1. record the coming requests; <br/>2. record the coming model indexes; <br/>3. update the on-chain wasm code for the off-chain worker                                                      |
| 2.      | Subxt proxy                 | Use subxt to build a client proxy for the Substrate node and the spin worker node                                                                                                                                                             |
| 3.      | Off-chain wasm worker       | We use spin as the wasm engine and to execute the code retrieved from the Substrate on-chain storage, interact with redis and postgresql                                                                                                         |
| 4.      | Upgrade utility             | Some tools or scripts to help on code upgrade: <br/> 1. the tool for uploading new wasm file to the substrate node; <br/> 2. the timer daemon for checking the new version of on-chain wasm code by interval; <br/> 3. a monitor for wasm worker that while new version of wasm code loaded, reboot the wasm worker to execute new wasm code                                  |
| 5.      | A set of rust derive procedural macro          |  Help write SQL literals and the type convertions between Rust types and SQL results easierly                                                                                                                                                                        |
| 6.      | Framework SDK interface            | 1. A router in the wasm worker to help write dispatching code; <br/> 2. the handler definition; <br/> 3. middlewares; <br /> 4. a mechanism of shared varialbes;                                                                                                                                                                        |

### Milestone 2 — Integration

- **Estimated Duration:** 2 weeks
- **FTE:**  2
- **Costs:** 5,000 USD

| Number  | Deliverable               | Specification                                                                                                                                                                                                                                 |
| -------:| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | GPLv3                                                                                                                                                                                                                                         |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
| 0e.     | Article                   | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant).                                                                                                                                    |
| 1.      | Writing process           | Integrate all components built in milestone 1 and do testings on writing process                                                                                                                                                                                   |
| 2.      | Query process             | Integrate all components built in milestone 1 and do testings on query process                                                                                                                                                                                     |
| 3.      | Code upgrading process    | Integrate all components built in milestone 1 and do testings on code upgrading process                                                                                                                                                                            |
| 4.      | A simple demo             | Prepare a demo for all processes with a simple web page UI, user can click on the web page to experience the capabilities of EightFish                                                                                                        |
| 5.      | A 4 nodes network         | Build a 4 nodes network to test and run smoothly                                                                                                                                                                                              |

### Milestone 3 — Optimizations

- **Estimated Duration:** 8 weeks
- **FTE:**  2
- **Costs:** 15,000 USD

| Number  | Deliverable                                             | Specification                                                                                                                                                                                                                                 |
| -------:| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                                 | GPLv3                                                                                                                                                                                                                                         |
| **0b.** | Documentation                                           | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide                               | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| **0d.** | Docker                                                  | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
| 0e.     | Article                                                 | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant).                                                                                                                                    |
| 1.      | Optimize the performance of id-hash pair index updating | by introducing a new algorithm in the transaction pool of Substrate, we can promote the performance of the entire blockchain network on the consensus for the results submitted from the off-chain wasm worker.A brief explanation on this algorithm: <br/> Usually, the way we process the oracle data is to collect the data from all nodes' off-chain workers, and then vote on the temporary list in the next round, this will postpone the finalization of this piece of data some blocks (depending on the GRANDPA). For the token price oracle, this is acceptable. But for an application oriented to internet users, it's unacceptable. Let's do some basic calculations. The whole process to get consensus will conduct 2 x N^2 (N is the number of nodes) network traffic. And delay about 6 x M (M>=2) seconds. So we conceive a new idea to optimize it. <br/> A rough idea is that mark the index updaing transation as a special transaction with attribution of non-propagation, just store it in local transaction pool, and will check it in the next block generation and validation. There are some details. If find the local value in self's node wrong, this node will retrieve this transaction with a flag from all nodes' transaction pool, and discard the local one. By this means, we can make the model indexes avalaible in one block, after the next block is executed and the state space is updated. For most internet applications, 6 seconds on post is acceptable for most of users. The details of this algorithm have to be designed carefully, and maybe it's a hard work. It's an efficiency improving method.                               |
| 2.      | Optimize the mechanism of code upgrading                | by refering the set_code mechanism substrate uses, make the code upgrading mechanism reliable.                                                                                                                                                |

## Future Plans

Next step, we will port the [RustCC forum](https://rustcc.cn) onto EightFish, compile it into wasm code, and run it on the EightFish/Substrate network, that would be a 4 nodes network. And then we will use EightFish to build its own official website.

We will spend about 12 months to verify the performance and UE of this forum, find defects of it, and improve the underlying EightFish framework.

Meanwhile, we will start to promote the adoption of EightFish in our dev community, encourage them to test the EightFish framework, use it to develop some applications.

After enough verifications, we will promote EightFish to all developers around the world.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

Daogang Tang developed a Rust MVC web framework [sapper](https://github.com/miketang84/sapper) years ago, and the [RustCC forum](https://rustcc.cn) is running on it, so he will design the EightFish SDK interface by refering this work. 


