# W3F Grant Proposal

- **Project Name:** OpenBox
- **Team Name:** OpenBox.io
- **Payment Address:** 0x678176dbb2d18dcae0f20a58e5a46dc6470c6e7a (ERC USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 

## Project Overview :page_facing_up:

### Overview

- Web 3.0 & A decentralized multi-chain NFT MarketPlace
- OpenBox  is a multi-chain aggregated decentralized NFT trading market, supporting ETH, BSC, Polygon,and supporting more chains shortly: Polkadot（Wasm,RMRK）, Avalanche, Solana, Flow...Utilize blockchain technology to create immutable digital resources and ownership transfer channels for physical NFT works, game equipment, art, music, books... and establish limited digital resources.

Users can mint, share, collect, auction, and trade in the marketplace, which is realized through blockchain intelligent contracts without central control and secure copyright ownership. Protected ownership will be established and guaranteed using NFTs, where each NFT item has a unique and immutable blockchain identifier. At the same time, the corresponding metadata will be permanently stored in decentralized storage platforms such as IPFS and Arweave.
In the early stage, Box will mainly support popular  ecological chains that adopt EVM-based casting standards of 721 and 1155. Creators can complete the creation, casting, and storage of NFTs in a few minutes. Users can buy, sell, and auction their NFTs on the platform.

At the same time, Box will also build a Mystery Box system so that users can enjoy more collection fun.
OpenBox is committed to serving creators around the world and inspiring creativity. At the same time, more high-quality works will be oriented to users...

- We will  Building Multichain NFT MarketPlace on Substrate Blockchain.We will support NFT minting and transaction circulation based on Wasm, RMRK... based on the Polkadot ecosystem.Finally, with the help of Polkadot's across-chain technology, to achieve NFT's across-chain circulation transactions. 

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

-  https://openbox.io/  UI1. ![image](https://user-images.githubusercontent.com/103482054/165080450-cc12f6e0-02ad-47d3-b4ed-c49973a07ebe.png)
-  UI2.  ![image](https://user-images.githubusercontent.com/103482054/165080655-a7fc72af-20ef-48ff-b18f-6566dbb10c91.png)


- . ![image](https://user-images.githubusercontent.com/103482054/165156033-61730553-5fa8-4a63-bc03-a9177926524c.png)
  . ![image](https://user-images.githubusercontent.com/103482054/165156132-988d79ef-5017-4883-a159-5802f6ad26b2.png)
  . ![image](https://user-images.githubusercontent.com/103482054/165167074-f7f9c1ea-6500-4ac0-a0be-16cb6dfbaacb.png)

Core functions:
     
     function createMarketItem(address nftContract,uint256 tokenId,uint256 price) payable 
     function deleteMarketItem(uint256 itemId) public
     function createMarketSale(address nftContract,uint256 id) public payable
 
 Query functions:
 
     function fetchActiveItems() public view returns (MarketItem[] memory) 
     function fetchMyPurchasedItems() public view returns (MarketItem[] memory)
     function fetchMyCreatedItems() public view returns (MarketItem[] memory) 


Make directories:

    --nftmarket
    --chain
    --webapp
  
  
NFT smart contract(ERC721):
 
     // contracts/BadgeToken.sol
     // SPDX-License-Identifier: MIT
     pragma solidity ^0.8.0;

     import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
     import "@openzeppelin/contracts/utils/Strings.sol";
     import "@openzeppelin/contracts/utils/Base64.sol";

     contract BadgeToken is ERC721 {
     uint256 private _currentTokenId = 0; //tokenId will start from 1

     constructor(
        string memory _name,
        string memory _symbol
     ) ERC721(_name, _symbol) {

     }
     function _getNextTokenId() private view returns (uint256) {
        return _currentTokenId+1;
     }
     function _incrementTokenId() private {
        _currentTokenId++;
     }function _incrementTokenId() private {
        _currentTokenId++;
     }
     function tokenURI(uint256 tokenId) override public pure returns (string memory) {
        string[3] memory parts;

        parts[0] = "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif;        font-size: 300px; }</style><rect width='100%' height='100%' fill='brown' /><text x='100' y='260' class='base'>";

        parts[1] = Strings.toString(tokenId);

        parts[2] = "</text></svg>";

        string memory json = Base64.encode(bytes(string(abi.encodePacked(
            "{\"name\":\"Badge #", 
            Strings.toString(tokenId), 
            "\",\"description\":\"Badge NFT with on-chain SVG image.\",",
            "\"image\": \"data:image/svg+xml;base64,", 
            // Base64.encode(bytes(output)), 
            Base64.encode(bytes(abi.encodePacked(parts[0], parts[1], parts[2]))),     
            "\"}"
            ))));

        return string(abi.encodePacked("data:application/json;base64,", json));
        }    
    }

  MarketPlace smart contract:

    import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
    import "@openzeppelin/contracts/utils/Counters.sol";
    import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
    import "@openzeppelin/contracts/utils/Address.sol";

    import "hardhat/console.sol";

    contract NFTMarketplace is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemCounter;//start from 1
    Counters.Counter private _itemSoldCounter;

    address payable public marketowner;
    uint256 public listingFee = 0.025 ether;

    enum State { Created, Release, Inactive }

    struct MarketItem {
    uint id;
    address nftContract;
    uint256 tokenId;
    address payable seller;
    address payable buyer;
    uint256 price;
    State state;
    }

    mapping(uint256 => MarketItem) private marketItems;

    event MarketItemCreated (
    uint indexed id,
    address indexed nftContract,
    uint256 indexed tokenId,
    address seller,
    address buyer,
    uint256 price,
    State state
    );

    event MarketItemSold (
    uint indexed id,
    address indexed nftContract,
    uint256 indexed tokenId,
    address seller,
    address buyer,
    uint256 price,
    State state
    );

    constructor() {
    marketowner = payable(msg.sender);
     }

    /**
    *  Returns the listing fee of the marketplace
    */
    function getListingFee() public view returns (uint256) {
    return listingFee;
     }

    /**
    *  create a MarketItem for NFT sale on the marketplace.
    * 
    * List an NFT.
    */
    function createMarketItem(
    address nftContract,
    uint256 tokenId,
    uint256 price
    ) public payable nonReentrant {

    require(price > 0, "Price must be at least 1 wei");
    require(msg.value == listingFee, "Fee must be equal to listing fee");

    require(IERC721(nftContract).getApproved(tokenId) == address(this), "NFT must be approved to market");

    // change to approve mechanism from the original direct transfer to market
    // IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

    _itemCounter.increment();
    uint256 id = _itemCounter.current();

    marketItems[id] =  MarketItem(
      id,
      nftContract,
      tokenId,
      payable(msg.sender),
      payable(address(0)),
      price,
      State.Created
    );


    emit MarketItemCreated(
      id,
      nftContract,
      tokenId,
      msg.sender,
      address(0),
      price,
      State.Created
      );
     }

    /**
    *  delete a MarketItem from the marketplace.
    * 
    * de-List an NFT.
    * 
    * todo ERC721.approve can't work properly!! comment out
    */
    function deleteMarketItem(uint256 itemId) public nonReentrant {
    require(itemId <= _itemCounter.current(), "id must <= item count");
    require(marketItems[itemId].state == State.Created, "item must be on market");
    MarketItem storage item = marketItems[itemId];

    require(IERC721(item.nftContract).ownerOf(item.tokenId) == msg.sender, "must be the owner");
    require(IERC721(item.nftContract).getApproved(item.tokenId) == address(this), "NFT must be approved to market");

    item.state = State.Inactive;

    emit MarketItemSold(
      itemId,
      item.nftContract,
      item.tokenId,
      item.seller,
      address(0),
      0,
      State.Inactive
      );

     }

    /**
    * (buyer) buy a MarketItem from the marketplace.
    * Transfers ownership of the item, as well as funds
    * NFT:         seller    -> buyer
    * value:       buyer     -> seller
    * listingFee:  contract  -> marketowner
    */
    function createMarketSale(
    address nftContract,
    uint256 id
    ) public payable nonReentrant {

    MarketItem storage item = marketItems[id]; //should use storge!!!!
    uint price = item.price;
    uint tokenId = item.tokenId;

    require(msg.value == price, "Please submit the asking price");
    require(IERC721(nftContract).getApproved(tokenId) == address(this), "NFT must be approved to market");

    IERC721(nftContract).transferFrom(item.seller, msg.sender, tokenId);

    payable(marketowner).transfer(listingFee);
    item.seller.transfer(msg.value);

    item.buyer = payable(msg.sender);
    item.state = State.Release;
    _itemSoldCounter.increment();    

    emit MarketItemSold(
      id,
      nftContract,
      tokenId,
      item.seller,
      msg.sender,
      price,
      State.Release
      );    
      }

     /**
     * Returns all unsold market items
     * condition: 
     *  1) state == Created
     *  2) buyer = 0x0
     *  3) still have approve
     */
     function fetchActiveItems() public view returns (MarketItem[] memory) {
     return fetchHepler(FetchOperator.ActiveItems);
     }

 
     function fetchMyPurchasedItems() public view returns (MarketItem[] memory) {
     return fetchHepler(FetchOperator.MyPurchasedItems);
     }

     function fetchMyCreatedItems() public view returns (MarketItem[] memory) {
     return fetchHepler(FetchOperator.MyCreatedItems);
     }

     enum FetchOperator { ActiveItems, MyPurchasedItems, MyCreatedItems}

     function fetchHepler(FetchOperator _op) private view returns (MarketItem[] memory) {     
     uint total = _itemCounter.current();

     uint itemCount = 0;
     for (uint i = 1; i <= total; i++) {
      if (isCondition(marketItems[i], _op)) {
        itemCount ++;
       }
      }

     uint index = 0;
     MarketItem[] memory items = new MarketItem[](itemCount);
     for (uint i = 1; i <= total; i++) {
      if (isCondition(marketItems[i], _op)) {
        items[index] = marketItems[i];
        index ++;
        }
      }
     return items;
    } 

    function isCondition(MarketItem memory item, FetchOperator _op) private view returns (bool){
    if(_op == FetchOperator.MyCreatedItems){ 
      return 
        (item.seller == msg.sender
          && item.state != State.Inactive
        )? true
         : false;
     }else if(_op == FetchOperator.MyPurchasedItems){
      return
        (item.buyer ==  msg.sender) ? true: false;
     }else if(_op == FetchOperator.ActiveItems){
      return 
        (item.buyer == address(0) 
          && item.state == State.Created
          && (IERC721(item.nftContract).getApproved(item.tokenId) == address(this))
        )? true
         : false;
      }else{
        return false;
      }
      }

      }
   

  
### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- OpenBox uses the Substrate architecture for development because Substrate not only supports WebAssembly (Wasm) and is perfectly compatible with EVM. OpenBox can support the casting and trading of NFTs based on EVM, RMRK, and Wasm. The substrate is also a necessary condition for OpenBox to support NFT cross-chain transactions in the later stage.
- Target audience： own user base,NFT collectors，collaborative Investment Community,The former partner's cryptocurrency website has more than 700,000 DAU and can cooperate to convert users. He will also give guidance on traffic acquisition and user conversion.
- What need(s) does your project meet?
- Multi-chain NFT collection and transaction, High gas solution： NFT cross-chain trade , collection fun, and social sharing
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - There are some products with similar functions, but no platform supports multi-chain, cross-chain, and the logic of the mysterious box on the chain designed by itself like OpenBox. Moreover, OpenBox has advantages in brand promotion, operation, marketing, and creator resources.

## Team :busts_in_silhouette:

### Team members

- Michael Choo -Expert on global collaborations: he built technology collaborations for various government agencies, leading MBA schools, premier security companies and security media companies. Had received investment from top cex capital in the industry. 
- Mo Ismail - Mo2.ae Managing Director，SnapCity.me Founder，five years at AT&T.
-  Stephen Chen- Partner of Kentmoore Capital,NFT expert.Business Executive with a network of global family offices.Worked at JP Morgan 
- Henry X-Software Technical Advisor.Senior technical developer, a Bitcoin believer, worked at Huobi in the past.（one of the former partners）


### Contact

- **Contact Name:** Michael Choo
- **Contact Email:** Contact@openbox.io
- **Website:** https://openbox.io/

### Legal Structure

- **Registered Address:** No legal structure yet.
- **Registered Legal Entity:** No legal structure yet.

### Team's experience
Our team members participated in Polkadot's ICO in 2017. And led many people in the Asia-Pacific region to join Polkadot ICO. Assisted many people in operating and completing Picops KYC.Has been a supporter of the Polkadot ecosystem since 2017.
Team members have invested in and participated in many notable projects and promoted the community development of well-known projects. The team has a mix of backgrounds. Some are listed companies, some are from top CEX, some are senior blockchain investors, some are senior blockchain operators, and others are members of e-commerce organizations.

Past achievements of team members: founders of well-known exchanges actively seek cooperation;  had received investment from top capital institutions in the industry.


### Team Code Repos

- https://github.com/openbox-NFT

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/openbox-NFT


### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/mo-ismail-0468526b/
- www.linkedin.com/in/michael-choo-b49353236
- https://www.linkedin.com/in/stephenchen/

## Development Status :open_book:
The team has completed the construction of the overall logical framework and the erection of the front-end page, which can demonstrate essential functional interaction：https://openbox.io/ . The development of NFT minting, trading, auction contracts, and back-end is in progress to improve the debugging of API functions displayed on the front-end. Currently, a Pre-Seed round of financing is also underway to address development and operating funding issues.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** Duration of the whole project (3months)
- **Full-Time Equivalent (FTE):**  5FTE
- **Total Costs:** 50000 USD

### Milestone 1 Example — Implement Substrate Modules

- **Estimated duration:** 2 month
- **FTE:**  5 FTE
- **Costs:** 30000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | Documents containing the description of whole architecture design for Openbox NFT MarketPlace . |
| 0c. | Testing Guide | Provide a full test suite and guide for NFT MarketPlace. Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Front End | Complete the development of the basic interactive page, which can demonstrate essential functional interaction: https://openbox.io/ .Use Unique marketplace's custom UI to improve front-end architecture.https://github.com/UniqueNetwork/unique-marketplace-frontend#readme https://github.com/UniqueNetwork/unique-marketplace-api#readme |  
| 0e. | Article | We will publish an **OpenBox&Web3.Foundation**/workshop that explains the work done as part of the grant .  |
| 1a. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 2. | Develop an NFT contract that also uses the EVM chain based on Substrate | Develop NFT, minting, and trading contracts for BSC using Substrate FRAME EVM compatible with Solidity|  
| 3. |Extend ETH and Polygon on top of previous| Based on the previous Substrate and support for BSC, continue to expand to support ETH, Polygon, and other EVM-based multi-chain NFTs. |  
| 4. | Test | A test developed NFT MarketPlace contracts supporting ETH, BSC, and Polygon and generated test reports |  


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  5
- **Costs:** 20000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up, which will show how the new functionality(Mystery Box on Chain) works. |
| 0c. | Testing Guide | Unit tests will fully cover core functions to ensure new functionality(Mystery Box on Chain) and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Front End | Based on the previous front-end page, add the interactive page of Mystery Box, and complete the contract access to the function of Mystery Box. |  
| 0e. | Article | describing how to use the new functionality(Mystery Box on Chain)  |
| 1a. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.|

## Future Plans

- ![image](https://user-images.githubusercontent.com/103482054/165083428-327a4e45-99ad-4cc3-8d74-06b2519f7f0d.png)
## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

-
