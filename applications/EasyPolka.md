# EasyPolka

- **Team Name:** Fuu
- **Payment Address:** 13u5kLGrt4n1Smc78ZXtYVedgp1U1LyGAAHtPFtVcv6Z1BtR (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview

- EasyPolka is a simple way to develop blockchain application which is called **cApp ( chain application )**, this way depends on the [Anchor Pallet](https://github.com/ff13dfly/Anchor). The diagram as follow, the orange part is the applying this time. It means that you can storage your application on chain then it is trustable.
<img src="http://metanchor.net/easy/EasyPolka_structure.png" width="45%">

- There are three parts to support **cApp** development. First of all, the green part called [Anchor](https://github.com/ff13dfly/Anchor) is the storage access to blockchain node. The orange part is this applying one, `protocol` and `launcher` to build&run **cApp**. The grey part is the gateway part, a micro-service system which can connect both web3.0 and web2.0 service to support **cApp** development.

- EasyPolka is a pretty easy way for developer to join Web3.0 even he/she can only code in Javascript. Just by one-day learning, developer can join Polkadot world.

- If EasyPolka system works well enough, then the network is valuable. Hope to build a parachain called **Anchor**.

### Project Details

- Three parts are needed to show how `EasyPolka` works, they are Protocol, Launcher and cApp. Will describe them one by one in details.

- Codes here.

  | Name | Github |
  | ------ | ----------- |
  | Easy Protocol | [https://github.com/ff13dfly/EasyPolka](https://github.com/ff13dfly/EasyPolka) |
  | Plinth | [https://github.com/ff13dfly/plinth](https://github.com/ff13dfly/plinth) |
  | cHomepage | [https://github.com/ff13dfly/cHomepage](https://github.com/ff13dfly/cHomepage) |

#### Easy Protocol

- **Easy Protocol** is a simple protocol to run application on Anchor node. There is no UI for it, but documents and a demo to implement the functions. In short, it is about how to load `cApp` and confirm the authority of related anchors. Details will be here : [https://github.com/ff13dfly/EasyPolka/blob/main/protocol/README.md](https://github.com/ff13dfly/EasyPolka/blob/main/protocol/README.md).

- Data structure of **Easy Protocol** has been finished, more details you can check [https://github.com/ff13dfly/EasyPolka/blob/main/protocol/src/protocol.ts](https://github.com/ff13dfly/EasyPolka/blob/main/protocol/src/protocol.d.ts). Three exposed methods will be supplied.

  1. easyRun. The method to run `cApp`

      ```Typescript
        //run cApp from anchor location
        //1. if everything is fine, will run target cApp with proper parameter
        //2. otherwise, will return error
        (location:anchorLocation,inputAPI:APIObject,ck:Function) => cAppResult
      ```

  2. easyProtocol. Get the protocol object from config.

      ```Typescript
        //get the cApp protocol from target config
        (type:rawType,cfg?:any|undefined) => dataProtocol|appProtocol|libProtocol
      ```

  3. linkDecoder. Decode the `Anchor link` to object.

      ```Typescript
        //decoder the anchor linker
        (link:string,cfg?:any,ck?:Function) => decoderResult
      ```

- Will use `Typescript` to implement the **Easy Protocol**. Automatic test will supply to check it.

- Documents is an important part for **Easy Protocol**, mainly subject as follow.

  1. **Anchor location**. Details about `Anchor Location`, there will be a `Anchor Link` to link the data on Anchor network.

      ```Typescript
        //two ways of anchor location
        type localtionObject=[
          name  : string,
          block : number,
        ]|string;
      ```

      ```Javascript
        //Anchor Link is the same as the URL.
        //There are three formats of Anchor Link.

        //normal Anchor Link
        `anchor://${anchor}/${block}`;

        //latest Anchor Link
        `anchor://${anchor}`;

        //Anchor Link with parameters
        `anchor://${anchor}/${block}?${key_1}=${value_1}&${key_2}=${value_2}`;
      ```

  2. **How to launch**. Details about launching a cApp from an `Anchor Location`. Parameters and the necessary callback will be described exhaustively.

      ```Typescript
        //the protocol details of a cApp
        type appProtocol={
          "type":rawType.APP;                 // `app` type
          "fmt":formatType.JAVASCRIPT;        // app format, JS only now
          "ver":string;                       // the cApp version, need incremnet when update
          "lib"?:anchorLocation[];            // the list of required anchor list
          "hide"?:hideMap|anchorLocation;     // anchor which storage the hide list defined by hideMap
          "auth"?:authMap|anchorLocation;     // the list of auth anchor;when anchorLocation, map storage there.
        }
      ```

  3. **How to call**. Details about comminicating between cApps.

      ```Typescript
        //the protocol details of data anchor to call cApp
        type dataProtocol={
          "type":rawType.DATA;                // `data` type
          "fmt":formatType;                   // raw data format
          "code"?:codeType;                   // data code
          "call"?:anchorLocation;             // call target anchor
          "push"?:string[];                   // list of push to target cApp name
          "hide"?:hideMap|anchorLocation;     // anchor which storage the hide list defined by hideMap
          "auth"?:authMap|anchorLocation;     // the list of auth anchor;when anchorLocation, map storage there.
        }
      ```

### Plinth, Instance of Launcher

- Plinth is a web application, follow the **Easy Protocol** to launch **cApp**. The layouts design as follow. You can treat it as a container for **cApp**.

<img src="http://metanchor.net/easy/plinth_layout.png" width="30%">

- Launch **cApp** from `Plinth` will be easy, the `link={anchor_location}` way is recommend.

  ```Javascript
    //launch the latest anchor
    `http://domain.com/?link=anchor://${anchor_name}/`

    //launch the target anchor
    `http://domain.com/?link=anchor://${anchor_name}/${block_number}`

    //full parameters of anchor location
    `http://domain.com/?link=anchor://${anchor_name}/${block_number}?tpl=black&page=2&force=true`
  ```

- In order to access Anchor node fully, these functions need to implement. Then the **cApp** can be able to run properly.
  <img src="http://metanchor.net/easy/plinth_buttons.png" width="30%">

  1. Account management, the acccounts can access Anchor node, base on Polkadot Keyring, multi accounts support.
    <img src="http://metanchor.net/easy/cApp_user_management.png" width="20%">  <img src="http://metanchor.net/easy/cApp_user_reg.png" width="20%">  <img src="http://metanchor.net/easy/cApp_user_login.png" width="20%">

  2. Server management, nodes which integrated the Anchor pallet and the gateway server in the furture.
    <img src="http://metanchor.net/easy/server_management.png" width="20%">

  3. Publish management, when you are the owner of target cApp, you need this to manage the publish.
    <img src="http://metanchor.net/easy/version_management.png" width="20%">

  4. Setting, basic setting for `Plinth`. As normal setting page, no UI design yet, will be some switcher and button.

- Plinth will be developed on React. `anchorJS` which bases on `@polkadot/api` is needed.

- Document is about how to use `Plinth`, the **cApp** part especially.

- Plinth is not an UI for `Polkadot` network, you can not interact with Substrate node without Anchor pallet. The function is limited to Anchor functions.

### cHomepage, Chain Application ( cApp ) Example

- `cHomepage` is a sample of cApp, you can publish a website for your business by one-page template which all of the data is storage on Anchor node.

- It is important to show the relationship of 3 roles, the authority base on `Easy Protocol`. The only thing all of them need to do is that create an Anchor and update it.
  | Role | description | Anchor Name | Easy Protocol | owner |
  | ------ | ----------- | ------------- |------------- |------------- |
  | Customer |who will run the `homepage` | mock_site | `dataProtocol` | mock_owner_a |
  | Developer |who develop `cHomepage` | mock_cHomeApp | `appProtocol` | mock_owner_b |
  | Supplier |who supply the website template | mock_template | `dataProtocol` | mock_owner_c |

  ```Javascript
    //customer anchor data sample
    {
      //mock anchor name to call cApp
      "name":"mock_site",
      
      //raw data of anchor pallet `protocol` feild
      "raw":{
        "title":"this is mock data",
      },

      //Easy Protocal data
      "protocol":{
        "type":"data",
        "fmt":"json",
        "args":{"style":"dark"},
      }
    }
  ```

  ```Javascript
    //Developer anchor data sample
    {
      "name":"mock_template",
      "raw":"{mock_cHomeApp}",
      "protocol":{
        "type":"app",
        "fmt":"js",
        "ver":"1.0.1",
        "auth":{
          "mock_owner_a":23457,
        }
      }
    }
  ```

  ```Javascript
    //Supplier anchor data sample
    {
      "name":"mock_template",
      "raw":{
        "template":"{{title}} is a good design",
        "vars":{
          "title":"default title",
        }
      },
      "protocol":{
        "type":"data",
        "fmt":"json",
      },
      "auth":{
        "mock_owner_b":0,
      }
    }
  ```

- Javascript is easy to build it right now.

- Documents is mainly about the different roles, that's the business model of Web2.0, people do their own job to earn money. Now it is coins.

- Convenient editor will not be supplied this time, just a textarea to update.

### Ecosystem Fit

- A trying of new way to develop application on blockchian.

- More developers who do not understand substrate well can join and build interesting cApps. Developers who have not yet used substrate/Polkadot.

- Creating non-financial applications is a charming subject for blockchain system. More trying is a solution I can image.

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
- https://github.com/ff13dfly/EasyPolka
- https://github.com/ff13dfly/plinth

### Team LinkedIn Profiles (if available)

## Development Status :open_book:

- Demo cApp [freeSaying](https://android.im/vManager/) is published now. The test network is available, you can access [wss:dev.metanchor.net](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdev.metanchor.net#/explorer).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3.5 month
- **Full-Time Equivalent (FTE):**  3.5
- **Total Costs:** 28,000 USDT

#### Milestone 1 — Easy Protocol

- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 12,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Easy Protocol v1.0 documents in details. This will take a bit long time.|
| 0c. | Testing Guide | Protocol full test via node.js.  |
| 0d. | Docker | Will provide a Dockerfile(s) to run the `Easy Protocol` test. |

#### Milestone 2 — Plinth

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 8,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can deploy this launcher to load cApp. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker |  Will provide a Dockerfile(s) that can run this `Plinth` launcher with anchor node.|

#### Milestone 3 — cHomepage

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 8,000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can publish a homepage via cHomepage and how to update the content via anchor updateing.  |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.|
| 0d. | Docker | Will provide a Dockerfile(s) that can run `Plinth` to call `cHomepage`. |

## Future Plans

- This applying is the direct way of cApp. If it is done, developer can start their work easily on it. The next step should be the gateway for cApp.

| Order | Name | Demo | Github | introduction |
| -----: | ----------- | ------------- | ------------- | ------------- |
| 1 | **Anchor** | wss://dev.metanchor.net [https://playground.metanchor.net](https://playground.metanchor.net) | [https://github.com/ff13dfly/Anchor](https://github.com/ff13dfly/Anchor) | Linked list on chian & Name service |
| 2 | **Easy Protocol** | - | [https://github.com/ff13dfly/EasyPolka/tree/main/protocol](https://github.com/ff13dfly/EasyPolka/tree/main/protocol) | Protocol of Chain Application |
| 3 | **Plinth** | - | [https://github.com/ff13dfly/plinth](https://github.com/ff13dfly/plinth) | Launcher for cApp |
| 4 | **cHomepage** | Not yet |[https://github.com/ff13dfly/cHomepage](https://github.com/ff13dfly/cHomepage) |  Demo cApp |
| 5 | vGateway | [https://android.im/vGateway/](https://android.im/vGateway/) | Not yet | Gateway access to vServices |
| 6 | vManager | [https://android.im/vManager/](https://android.im/vManager/) | Not yet | Management portal for vServices |
| 7 | vCache | No domain, node.js app | Not yet |Anchor cache vService, sample vService |

- The functions above, you can test on the cApp [freeSaying](https://freesaying.net).

- EasyPolka framework will be published step by step and try to meet W3F standard, it is easy for the develop to understand.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website.

- Demo cApp [freeSaying](https://android.im/vManager/) is published now. The test network is available, you can access [wss:dev.metanchor.net](wss:dev.metanchor.net).

- [Anchor Pallet](https://github.com/ff13dfly/Anchor) is just finished. Now will try to meet the W3F standard in my furture projects.