# NFT908 Protocol

- **Project:** NFT908 Protocol on polkadot
- **Proposer:** dego-labs


### Project Description :page_facing_up: 

At the end of 2017, an application based on ERC721, called CryptoKitties, took place and boosted the development of the NFT market. As the depth and width of NFT have been continuously improved for these few years, the shortcomings of the 721 protocol have also emerged. Although we have some new subsequent protocols such as ERC1155, ERC918 and many other relevant NFT protocols, they are still having major flaws under the following application scenarios:


* The rental scenario of NFT. As compared with FT, where integers are used to describe the capitalization of properties, NFT adopted a structural way to describe many attributes of an asset, in which way the descriptive ability is way better that of an FT. The most important feature of ERC721 NFT assets is the ownership of the assets. But in reality, only a certain period of right-of-use rather than ownership is transferred such as the rental of real estate and car rental scenarios. Therefore, we need to describe the right-of-use of NFT assets and separate the ownership from the right-of-use.


* The portfolio of NFT. In RPGs, a full set of legendary gears typically have upper-body armour, lower-body armour, weapons, etc. A fine weapon may be further upgraded by various gems to improve its attack, defence and other relevant attributes. These complex traits of combinations need support from NFT.


* Parallel uses of NFT. After CryptoKitties has first been introduced, some Dapps use the NFT property of CryptoKitties to form up services where CryptoKitties can fight each other, or kitties are given new and different attributes. But these new characteristics have deviated from the original NFT protocol of CryptoKitties and the new traits are separated. We need the NFT to be given different traits in different Dapps, and these traits should be able to practice sharing with ease.


Based on our study and experience in NFT, on top of ERC721 protocol of Ethereum, we are making use of the Polkadot network and forming a new NFT protocol, addressing all the issues that are mentioned above, making the NFT protocols enabled by Polkadot wider, adding up to the variety of the on-chain NFT assets.

We would like to make NFT908 Protocol the standard NFT protocol for the Polkadot ecosystem and provide an open-source library to all developers in the Polkadot ecosystem, lowering the development cost for relevant NFT, making NFT908 an infrastructure for Polkadot, and bringing prosperity for the Polkadot ecosystem.


## Team :busts_in_silhouette:

### Team members
* [dego-labs](https://github.com/dego-labs)

### Team Website	
* https://dego.finance/
* https://www.treasureland.market/


### Team's experience
Many of our teammates come from gaming industries  with more than 10 years of experience in the industry and, in the year of 2018, officially join us at the blockchain industry. Many Dapps have been made on eth, eos, tron, iost since then and enriched our blockchain developing experience.

### Team Code Repos
* https://github.com/dego-labs/dego-nft
* https://github.com/dego-labs/dego-core
* https://github.com/dego-labs/erc908



## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 6 weeks
* **Total Costs:** 0.4 BTC

### Milestone 1: Protocol Design and Implementation
* **Estimated Duration:** 3 weeks
* **Costs:** 0.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Asset Establishment/Destruction | Realize the mint and burn of NFT |  
| 2. | Asset ownership authorizing/transfer/batch transfer | Support ownership authorization and transfer |  
| 3. | Asset data query | Support asset data query |  
| 4. | Asset unit data module | Allow external customized data connection to meet the need of reusing under different scenario. |  
| 5. | Asset compound/decompose | Allow merging multiple assets into one and the reverse is also allowed |
| 6. | Authorization/transfer of right-of-use of an asset | Support the authorization, transfer and return of right-of-use |


### Milestone 2 Example — Test & Document & Demo
* **Estimated Duration:** 3 weeks
* **Costs:** 0.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Unit Test | Test examples and unit test |  
| 2. | App Demo | A simple web showcasing the major traits of NFT908 Protocol |  
| 3. | Documentation | The detail of protocol |  


## Additional Information :heavy_plus_sign: 

Until today, the demand analysis and interface design have been finished. We have referred to the ERC721 protocol and ERC155 protocol of Ethereum. The project is: [ERC908](https://github.com/dego-labs/erc908). The interface coding in the Solidity version is as follows:

### IERC908
Basic contract, on top of ERC721, providing batch transfer interface

```
contract IERC908 is  IERC721 {
    function safeBatchTransferFrom(address from, address to, uint256[] memory ids , bytes memory data) public;
}
```
### IERC908Combinable
Asset compounding and decomposing contract, providing the query interface for the compounded or decomposed assets and parrent asset

```
contract IERC908Combinable is IERC165 {
    function getChildren(uint256 tokenId) public view returns (uint256[] memory) ;
    function getParrent(uint256 tokenId) public view returns (uint256) ;
    function compound(uint256 tokenId, uint256[] memory ids) public;
    function decompose(uint256 tokenId) public;
}
```

### IERC908Usership
Usership contract, providing the authorization, transfer and inquiry interface of usership

```
contract IERC908Usership is IERC165 {
    function balanceOfUsership(address user) public view returns (uint256 balance);
    function getUsershipInfo(uint256 tokenId) public view returns (UsershipInfo memory) ;
    function usershipOf(uint256 tokenId) public view returns (address) ;
    function usershipApprove(address to, uint256 tokenId) public ;
    function getUsershipApproved(uint256 tokenId) public view returns (address) ;
    function setUsershipApprovalForAll(address to, bool approved) public ;
    function isUsershipApprovedForAll(address user, address operator) public view returns (bool) ;
    function usershipTransfer(address from, address to, uint256 tokenId) public ;
    function usershipSafeTransfer(address from, address to, uint256 tokenId) public ;
    function usershipSafeTransfer(address from, address to, uint256 tokenId, bytes memory data) public ;
}
```

### IERC908Enumerable
Asset usership inquiry, providing usership data inquiry

```
contract IERC908Enumerable is IERC908Usership  {
    function tokenOfUsershipByIndex(address user, uint256 index) public view returns (uint256 tokenId);
    function tokenOfUsership(address user) public view returns (uint256[] memory);
}
```

### IERC908Receiver
Receiver contract, providing return interface for the safety transfer of usership.

```
contract IERC908Receiver {
    function onERC908Received(address operator, address from, uint256 tokenId, bytes memory data) public returns (bytes4);
    function onERC908UsershipReclaim(address operator, address from, uint256 tokenId, bytes memory data) public returns (bytes4);
}
```

### IERC908Full
Full IERC908 protocol interface, providing the interface up to the 908 standard for the mint, burn, authorization and return including reclaim of usership.

```
Contract IERC908Full is IERC908Combinable,IERC908Enumerable,IERC908 {
    function mint(address to, uint256 tokenId) public returns (bool) ;
    function burn(uint256 tokenId) public ;
    function compoundMint(address to, uint256 tokenId, uint256[] memory ids) public;
    function decomposeBurn(uint256 tokenId) public;
    function usershipIssue(uint256 tokenId, address to, uint256 period) public ;
    function usershipReturn(uint256 tokenId) public;
    function usershipReclaim(uint256 tokenId, bytes memory data) public;
}
```




