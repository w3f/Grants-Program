# OpenSea.js on polkadot

- **Proposer:** vlbos
- **Payment Address:** 1NpKNwNSAdoVgwD4XXwe8caLheZRVrFVBL
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/110#issuecomment-908594354)

## Project Overview :page_facing_up:

### Overview

#### A brief description of the project.
When it comes to the rise of crypto collectables, it’s no surprise that many secondary markets have arisen for the exchange of these unique assets.

For those unfamiliar with non-fungible tokens (better known as NFTs), they are tokens which are unique from one another due to special characteristics or identifiers which distinguish them from others in a similar set.

Specifically within DeFi, we’ve seen NFTs play a role in the tokenization of assets and contracts alike, all of which play a larger role in the notion of composability – or different products interacting with one another towards a larger ecosystem.

In this overview, we’ll dive into OpenSea – an industry-leading decentralized exchange (DEX) for NFTs built on Polkadot/Kusama.

OpenSea is an open-sourced crypto collectible marketplace which allows users to trade popular tokens built on interoperable standards like .

Prior to OpenSea, there was no easy way to trade crypto collectables other than brokering over-the-counter (OTC) deals – a situation which invokes a large amount of trust and counterparty risk.

With OpenSea, users can bid directly for items owned by other users, with assets being exchanged instantaneously in the event the seller accepts a bid or a buyer accepts an offer.

While there are a number of other crypto collectible marketplaces on the market, OpenSea currently leads as the defacto choice for swapping NFTs.


#### An indication of how you will integrate this project into Substrate / Polkadot / Kusama.

OpenSea is a decentralized exchange platform. It will have three high-level components.

- A Parachain on Polkadot for bringing liquidity from Polkadot’s interoperability community.

#### An indication of why your team is interested in creating this project.

We are amused by the OpenSea of centralized institutions cropping up around the decentralized idea of open, peer to peer, programmable internet of value. Decentralized Exchanges are built on the idea of non-custodial interoperability. Polkadot and Substrate are the most promising blockchain interoperability platforms. We want to provide our users with maximum liquidity, security, and world-class user experience. Hence, we are excited and confident that building a DEX on Substrate, supported by Polkadot’s interoperability, will increase user engagement and overall trading experience when combined with our trading expertise over the years.

### Project Details

#### Build your own OpenSea-powered marketplace

OpenSea provides a robust suite of tools for developers building projects with blockchain-based digital assets.

Project developers can power their marketplace directly on OpenSea's infrastructure, gaining instant access to our full suite of ecommerce features and earning revenue every time a sale is made.

1. The most advanced marketplace feature set
   OpenSea's platform provides the most powerful way for your users to buy and sell their items—auctioning, bidding, bundling, you name it. All developers get instantaneous access to our suite of marketplace features:
2. Product Listing Items can be sold at a set price or gifted
3. Dutch Auctions Item's price can fluctuate up or down in a set timeframe
4. Item Bidding eBay-style Bidding Auction your items to the highest bidder
5. Bundle Sales Items can be sold in groups

#### Full customizability

You can tailor your marketplace exactly how you want it. Whether you're building with our instant OpenSea storePortal solution, on your own domain with our white-labeled integration, or with a DIY approach using the OpenSea SDK, you'll be able to get the exact look and feel you want for your marketplace experience.


#### OpenSea SDK

Build your own marketplace on OpenSea, using our SDK

Want to build your own integration on top of OpenSea? Check out our SDK for the underlying toolset that allows you to power your in-game marketplace with our platform.

With the SDK, developers can build your own marketplace from scratch and integrate it more deeply in your game. Perhaps you're building a custom backend for your game and want to create trades server-side, or perhaps you need people to be able to create auctions in a deep area of gameplay. The sky is really the limit with the SDK.

#### OpenSea frontend portal Creator

The simplest way to leverage OpenSea is through the OpenSea frontend portal creator feature. As long as your contract is stardard compliant, this option works instantly. Just follow the OpenSea developer tutorial to set up your items and get an instant marketplace for your items. Developers have called the process "magical".

- An overview of the technology stack to be used

* Node.js
* Polkadot-js/api
* substrate-developer-hub/substrate-node-template
* Polkadot
* Kusama

### Ecosystem Fit

Are there any other projects similar to yours? If so, how is your project different?
To the best of our knowledge, there is no project working on creating collectables NFTs in Polkadot. There are some existing projects that create NFTs in Ethereum ( OpenSea etc.).

OpenSea will make it to buy and sell collectables NFTs in Polkadot/Kusama. It aims to close the gap and enable more business use cases for collectables NFTs in Polkadot ecosystems.

OpenSea is deeply committed to web3 and our stack is focussed firmly on helping make it simple for developers to bring truly decentralized applications, online autonomy and new business models to users. Adding the ability to interface with parachains, as a bridge to the Polkadot ecosystem opens up a world of financial and other tools to those developers, and provides developers working in or interested in the Polkadot ecosystem a fast simple way to get started. collectables NFT in Defi is the perfect proving ground for this.

Main differences:

- Support Chinese
- Base on Polkadot/Kusama
- Build smartcontract parachain

Pacific_store vs Rarelink differences:

| Pacific_store | Rarelink                                   |
| --------------------------------------------------- | ------------------------------------------ |
| Cross-chain buying and selling NFT marketplace      | Cross-chain mint and transfer NFT Protocol |
| Dapp for instant buying and selling NFT            | Infrastructure of creating dynamic NFT     |
| Build an instant, customizable marketplace for your game items, collectibles, or other ERC721 assets |   |
| Deploy an instantly tradeable ERC1155 contract               |                        |
| Build own custom sale contract               |                     |
| Build the peer-to-peer marketplace for your users to trade your items    |
| Issue your initial items to your users       ||
| Sell packs of items to your users            ||
| Airdop items to users as rewards               ||
| Have lootboxes that can be purchased and even traded by users     ||
| Integrate an existing NFT contract into OpenSea    ||
| Build a customizable, marketplace for your NFT         ||
| Provides the most powerful way for your users to buy and sell their items—auctioning, bidding, bundling, you name it     |       |
| Provides a set of r smart contracts specifically designed for buying and selling unique digital assets. You won't need to deploy any additional smart contracts (other than your ERC721 or ERC155 contract) in order for your items to be instantly tradeable with the SDK. |                              |
| Full customizability,you can tailor own marketplace exactly how you want it|                    |
| Cross-chain via IBC  | Cross-chain via Oracle                     |
| Cross-chain based on Polkadot,Ethereum,Eos,Bos,Tron          | Cross-chain based on Polkadot,Ethereum     |

## Team :busts_in_silhouette:

### Team members

* Sam Lee  
* yang zhou  
* Jack
* Simon Wang
* Frank 
  
### Team Website

No.

### Legal Structure

FOS Foundation LTD, Singapore (Reg 201729444E)  
22 NORTH CANAL ROAD #02-00, Singapore, 048834

### Team's experience

Our team is based in China . We are very interested in substrate and we have done a lot of related development work, such as build smartcontract parachain of eos and tron.

But our focus has always been interblockchain communitcation , which extends it more domains .

### Team Code Repos

* Sam Lee  https://github.com/vlbos  
* yang zhou  https://github.com/TraceBundy  
* Jack https://github.com/Jack-Jhon
* Simon Wang - https://github.com/vonhenry
* Frank - https://github.com/Frank-AFN
  
### Team LinkedIn Profiles

* https://www.linkedin.com/in/vchengsong/
* https://www.linkedin.com/in/yuyang-zhang-499292107/


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 12 weeks
- **Full-time equivalent (FTE):** 1
- **Total Costs:** 0.7 BTC.
                                                                                                                                  

### Milestone 1 - Opensea.js backend  orderbook On Polkadot 

- **Estimated Duration:** 6 weeks
- **FTE:** 1
- **Costs:** 0.4 BTC
- **Programming Language & framework**:Rust  with substrate
  

| Number | Deliverable                                        | Specification |
| ------ | -------------------------------------------------- | -------|
| 1.     | Documentation                                      | Describe functionalities and instructions on compiling   |
| 2.     | Substrate Runtime Module:backend orderbook |The orderbook includes:`postOrder``postAssetWhitelist`,`getOrder`,`getOrders`,`getAsset`,`getAssets`.|
| 3.     | Substrate Runtime Module:wyvern Exchange |The Exchange includes:`hashOrder`,`requireValidOrder`,`validateOrderParameters`,`validateOrder`,`approveOrder`,`cancelOrder`.[wyvern](https://github.com/ProjectOpenSea/wyvern-js/blob/master/src/wyvern-ethereum/contracts/exchange/ExchangeCore.sol) |
| 4.    | Unit Tests                             | The code will have 95% unit-test coverage to ensure functionality |
| 5.    | Docker file                            | Docker image with a Substrate chain using the sdk, demonstrating its functionality |



### Milestone 2 opensea.js integrate polkadot.js 

- **Estimated Duration:** 6 weeks
- **FTE:** 1
- **Costs:** 0.3 BTC
- **Programming Language & framework**:Javascript/Typescript with node.js
- 
| Number | Deliverable                            | Specification  |
| ------ | -------------------------------------- | --- |
| 1.     | Documentation                          | Provides the api of functions of the code .   |
| 2.     | SDK tutorial                           | How to create buyorder ,sell order ;how to create crowdsale,how to create auction etc.  |
| 3.     | Base SDK:Pacific Store-js/api :base         | |
| 3a.     | `getAsset` Fetching Assets                        | Assets are items on OpenSea. They can be non-fungible (conforming to standards like ERC721), semi-fungible (like ERC1155 assets), and even fungible (ERC20).The `Asset` type is the minimal type you need for most marketplace actions. You can fetch an asset using the `OpenSeaAPI`.|
| 3b.     | `getAssetBalance` Checking Balances and Ownerships       | the `Asset` type is that it unifies logic between fungibles, non-fungibles, and semi-fungibles.Once you have an `Asset`, you can see how many any account owns, regardless of whether it's an ERC-20 token or a non-fungible goods.You can use this same method for fungible ERC-20 tokens . As a convenience, you can use this fungible wrapper for checking fungible balances.`getTokenBalance`|
| 3c.     | `createBuyOrder` Making Offers                          | Once you have your asset, you can do this to make an offer .When you make an offer on an item owned by an OpenSea user, **that user will automatically get an email notifying them with the offer amount**, if it's above their desired threshold.|
| 3d.     | `createSellOrder` Making Listings / Selling Items        | To sell an asset, call `createSellOrder`. You can do a fixed-price listing, where `startAmount` is equal to `endAmount`, or a declining Dutch auction, where `endAmount` is lower and the price declines until `expirationTime` is hit. || 3i.    | Fetching Orders                        | To retrieve a list of offers and auction on an asset, you can use an instance of the `OpenSeaAPI` exposed on the client. Parameters passed into API filter objects are underscored instead of camel-cased, similar to the main OpenSea API parameters.|
| 3e.    | `getOrder({ side: OrderSide.Sell, ... })` `fulfillOrder` Buying Items                           | To buy an item , you need to fulfill a sell order.If the order is a sell order , the taker is the _buyer_ and this will prompt the buyer to pay for the item(s). |
| 3f.    | `getOrder({ side: OrderSide.Buy, ... })` `fulfillOrder`Accepting Offers                       | Similar to fulfilling sell orders , you need to fulfill a buy order on an item you own to receive the tokens in the offer.If the order is a buy order , then the taker is the _owner_ and this will prompt the owner to exchange their item(s) for whatever is being offered in return.|
| 4.     |  `createBundleBuyOrder` Bidding on Multiple Assets             | You can also make an offer on a bundle of assets. This could also be used for creating a bounty for whoever can acquire a list of items.When you bid on multiple assets, an email will be sent to the owner if a bundle exists on OpenSea that contains the assets. In the future, OpenSea will send emails to multiple owners if the assets aren't all owned by the same wallet.|
| 4a.     | `createBuyOrder (PNSShortNameAuction)` Bidding on PNS Short Name Auctions     | The Polkadot Name Service (PNS) is auctioning short (3-6 character) names that can be used for labeling wallet addresses and more. To bid, you must use the PNS Short Name schema.|
| 4b.     | `createSellOrder(waitForHighestBid: true)` Creating English Auctions              | English Auctions are auctions that start at a small amount (we recommend even doing 0!) and increase with every bid. At expiration time, the item sells to the highest bidder. |
| 5.    | `createFactorySellOrders` Running Crowdsales                     | You can now sell items to users To create a presale or crowdsale and create batches of sell orders for a single asset factory, creating your crowdsale contract. |
| 6.    | Advanced SDK:Pacific Store-js/api      | Provides purchasing for users server-side or with a bot, making bundling items together, or making bids in different Standard(ERC-20) tokens. |
| 6a.    | `transfer({  asset: { tokenId, tokenAddress },  fromAddress, toAddress})` Transferring Items or Coins (Gifting)  | OpenSea.js is the ability to transfer any supported asset (fungible or non-fungible tokens) .|
| 6b.    | `fulfillOrder({  order,  accountAddress,   recipientAddress })` Purchasing Items for Other Users       | You can buy and transfer an item to someone else in one step! Just pass the `recipientAddress` parameter.If the order is a sell order , the taker is the _buyer_ and this will prompt the buyer to pay for the item(s) but send them to the `recipientAddress`. If the order is a buy order ( `OrderSide.Buy`), the taker is the _seller_ but the bid amount be sent to the `recipientAddress`.|
| 6c.    | `transferAll` Bulk Transfers           | OpenSea.js is the ability to transfer multiple items at once in a single transaction. This works by grouping together as many `transferFrom` calls as the Polkadot gas limit allows, which is usually under 30 items, for most item contracts. |
| 6d.    | `createBundleSellOrder` Creating Bundles                       | You can also create bundles of assets to sell at the same time! If the owner has approved all the assets in the bundle already, only a signature is needed to create it.|
| 6e.    | `createSellOrder(...,paymentTokenAddress)` Using Standard(ERC-20) Tokens Instead of DOT/KSM | You can use `getPaymentTokens` to search for tokens by symbol name. And you can even list all orders for a specific Standard(ERC-20) token by querying the API.|
| 6f.    | `createSellOrder(...,buyerAddress)` Private Auctions                       | Now you can make auctions and listings that can only be fulfilled by an address or email of your choosing. This allows you to negotiate a price in some channel and sell for your chosen price on OpenSea, **without having to trust that the counterparty will abide by your terms!** |
| 6g.    | `createSellOrder(...,buyerEmail)` Airdrops and Email Whitelisting        | create a private sell order targeted to a specific email. The buyer will have to verify that email to fulfill the order. |
| 7.     | Affiliate Program SDK:Pacific Store-js/api ||
| 7a.    | Affiliate Program                      | OpenSea.js allows to you easily create an affiliate program . It's the crypto-equivalent of bounty hunting, and best of all, it's **fully paid for by OpenSea** so you can keep all of your winnings.If you want to be an affiliate, you can use this to **win at least 1%** of the sale price of any listing, both for assets and bundles.|
| 7b.    | `fulfillOrder({ order, accountAddress, referrerAddress })` Referring Listings                     | You can instantly create an affiliate program for your assets by just passing in one more parameter when fulfilling orders. **and OpenSea will pay for it!** Whenever someone refers a sale or the acceptance of an offer.This works for buying assets and bundles, along with accepting bids that had no referrer attached to them.As long as the referrer hasn't referred the buyer before,OpenSea will send the referrer an email congradulating them, along with **1%** of the item's sale price. |
| 7c.    | `createBuyOrder({...,  referrerAddress })`  Referring Offers                       | you can also refer offers on assets! When the seller accepts the offer, the referrer will get credit.  |
| 7d.    | `createBuyOrder({ referrerAddress })` Custom Affiliate Programs              | You can use `createBuyOrder({ referrerAddress })` to create your own affiliate programs as well.When buyers place offers or bids on an asset, the referrers will automatically be recorded on OpenSea.cn. Then, you can use the Orderbook API to inspect the `metadata` for orders and manually pay out referrers if you want to. The referrer will be labeled as `referrerAddress` in the `metadata` field. |
| 7e.    | `createSellOrder({..., extraBountyBasisPoints: extraBountyPercent * 100})`  Custom Referral Bounties               | Sellers can customize the bounties they add to their items when listing them for sale. By default, OpenSea will pay referrers 1% and sellers pay them nothing, but sellers can increase this up to the full OpenSea fee for both assets and bundles. | 
| 8.    | Unit Tests                             | The code will have 95% unit-test coverage to ensure functionality  |
| 9.    | Docker file                            | Docker image with a Substrate chain using the sdk, demonstrating its functionality |



### Community engagement

The tutorials and Documentation that we provide will be published as articles in Medium. Meanwhile, we will give talks and do defi sessions to advertise the project to the Polkadot community.

## Future Plans

- Build & deploy OpenSea template contracts on Polkadot/Kusama/Rococo.
- Full function test on Polkadot/Kusama/Rococo.

## Additional Information :heavy_plus_sign:

- What work has been done so far?
  No.
- Are there are any teams who have already contributed (financially) to the project?
  No.
- Have you applied for other grants so far?
  No.
