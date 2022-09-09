# W3F Grant Proposal

- **Project Name:** Sub NFT marketplace  ink! contracts on Substrate 
- **Team Name:** Lee
- **Payment Address:** 0x352a7f69df71bda6c51ee7fa938dd76ff2375087(USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Sub NFT marketplace is heavily inspired by Artion implementation [artion](https://github.com/Fantom-foundation/Artion-Contracts.git)
The NFT marketplace is a market where people can sell NFTs — [ERC 721](https://eips.ethereum.org/EIPS/eip-721) or [ERC 1155](https://eips.ethereum.org/EIPS/eip-1155) tokens — at a fixed price ( what we'll refer to as a "Direct listing"), or auction them (what we'll refer to as an "Auction listing").
#### Buying, Selling, and Auctions
It offers different options for buying and selling NFTs.

#### Set price 
Sellers can specify a sale price. If the buyer accepts, the NFT is sold. Conversely, buyers can make an offer, which sellers can choose to accept or decline.

#### Auctions
When selling an NFT at auction, sellers specify a starting bid, a reserve price (a minimum price that the seller will accept), and a start- and end-time for the auction. Some of these parameters may be modified once the auction is underway. 

Note that once a bid has been placed, it cannot be withdrawn. Bids are first sorted by highest to lowest, and then by earliest to latest.

At the end of a successful auction, the seller signs a transaction to send the NFT to the buyer. The seller receives funds escrowed in the auction smart contract on behalf of the buyer (minus any royalties). 

### Project Details

it includes marketplace,bundle marketplace and auction.

####  The core features:
* auction
  *  create_auction
  *  place_bid
  *  withdraw_bid
  *  result_auction
  *  cancel_auction
* marketplace 
  *  list_item
  *  cancel_listing
  *  buy_item
  *  create_offer
  *  cancel_offer
  *  accept_offer
  *  register_royalty
  *  register_collection_royalty
* bundle marketplace
  *  list_item
  *  cancel_listing
  *  buy_item
  *  create_offer
  *  cancel_offer
  *  accept_offer

#### Direct Listings
An NFT owner (or 'lister') can list their NFTs for sale at a fixed price. A potential buyer can buy the NFT for the specified price, or make an offer to buy the listed NFTs for a different price or currency, which the lister can choose to accept.

The listed NFTs do not leave the wallet of the lister until a sale is executed with the seller and buyer's consent. To list NFTs for sale, the lister must own the NFTs being listed, and approve the market to transfer the NFTs. The latter lets the market transfer NFTs to a buyer who buys the NFTs for the accepted price.

When making an offer to a direct listing, the offer amount is not escrowed in the Marketplace. Instead, making an offer requires the buyer to approve Marketplace to transfer the appropriate amount of currency to let Marketplace transfer the offer amount from the buyer to the lister, in case the lister accepts the buyer's offer.


A sale will fail to execute if either (1) the buyer does not own or has not approved Marketplace to transfer the appropriate amount of currency (or hasn't sent the appropriate amount of native tokens), or (2) the lister does not own or has removed Markeplace's approval to transfer the tokens listed for sale.

A sale is executed when either a buyer pays the fixed price, or the seller accepts an offer made to the listing.

#### Auction listings

An NFT owner (or 'lister') can auction their NFTs. Potential buyers make bids in the auction. At the closing of the auction, the buyer with the wining bid gets the auctioned NFTs, and the lister gets the winning bid amount.


### Ecosystem Fit

While OpenSea has dominated the NFT market so far, several other venues for buying and selling NFTs are gaining traction. 
Key Takeaways
OpenSea has become the home of NFT trading, but its various problems are leading users to seek out alternatives.
LooksRare caused a storm when it launched with a token for active OpenSea traders last month.
Coinbase NFT should also have a major impact on the space once it launches this year.
OpenSea became the go-to NFT marketplace during the technology’s 2021 boom. However, the platform’s high fees, centralized model, and recent listing issues have driven collectors to seek out alternative options for buying and selling non-fungibles.

#### NFTs and OpenSea
To talk about the rise of NFTs is to talk about the rise of OpenSea. 

Launched in December 2017, OpenSea emerged as the first open marketplace for Ethereum-based NFTs. Over the next three years, OpenSea quietly developed its platform, catering to the few blockchain geeks who were weathering the crypto bear market by trading CryptoKitties and MoonCats, two historical NFT projects that were among the first collections traded on OpenSea.

While OpenSea had found its niche, it wasn’t until January 2021 that the platform started to realize its true potential. On the back of high-profile NFT sales such as Beeple’s Everydays: The First 5,000 Days and the advent of NFT avatar collections like Bored Ape Yacht Club, NFTs quickly gained popularity and notoriety in both the crypto and mainstream worlds. OpenSea had a tremendous ten-fold increase in revenue between January and February 2021, but this was only a taste of things to come.  

Throughout the rest of 2021, OpenSea’s revenues kept increasing. According to data from Token Terminal, OpenSea’s current revenue stands at $440 million for January 2022, making it the marketplace’s best month ever. With an estimated 90% of the total market share of NFT trading venues, OpenSea achieved a $13.3 billion valuation in a raise led by venture capital giants Paradigm and Coatue at the beginning of the month. However, despite its successes, several factors are driving many in the NFT community away from the leading NFT marketplace in favor of smaller alternatives. 

####  The Problems With OpenSea 
One common complaint with OpenSea centers on its high fees. 2.5% of the final sale value for every NFT sold goes straight to OpenSea, which is one reason for the company’s high margin profits. Factoring in OpenSea’s fees with the high royalties paid on some collections, users stand to lose up to 10% of the final sale value on secondary sales of NFTs. 

Those focused on the ideals of Web3 and decentralization also take issue with OpenSea’s high degree of centralization. Many members of the NFT community had hoped that OpenSea would issue a governance token to its users to help decentralize the company and give back to the users who were instrumental in its growth. However, these hopes were seemingly shot down in December when OpenSea’s new Chief Financial Officer, Brian Roberts, revealed that he had hopes of taking the company public through a stock offering. Although Roberts quickly backtracked on his words, an OpenSea token does not look likely anytime soon. 

As OpenSea is centralized, there’s a risk that it will create a closed ecosystem akin to existing Web2 platforms. As a demonstration of the centralization issue, OpenSea recently froze 16 NFTs stolen from New York’s Ross+Kramer Art Gallery owner Todd Kramer. The fact that OpenSea has the power and is willing to freeze assets traded through its smart contracts sets a worrying precedent. 

Also of concern is OpenSea’s habit of delisting NFT artists’ collections without warning. Recently, the platform delisted 16 NFTs from the late hip-hop photographer Chi Modu without comment. Modu owns the rights to the photography and was not breaking any of the platform’s community guidelines.  

Another complaint with OpenSea is a listing issue that has resulted in numerous high-value NFTs being sold for a fraction of their market value. If a user lists an NFT for sale then transfers it to a different wallet, the listing gets canceled on OpenSea’s frontend as it cannot be fulfilled. However, if the user doesn’t pay a gas fee to cancel the transaction first, the listing reactivates if the user transfers the NFT back to the original wallet at a later date.

To make matters worse, OpenSea sent out an email to users with inactive listings on their accounts advising them to cancel listings without first transferring their NFTs away from the address with the associated listing. This process makes it easier for opportunists to snipe mispriced NFTs by checking the Ethereum mempool for cancelation transactions then paying a high gas fee to execute a purchase transaction before the cancelation.

As OpenSea’s users continue to lose patience with the platform, other NFT marketplaces and trading solutions have emerged. Many of these competitors have quickly gathered momentum by acknowledging OpenSea’s shortcomings and launching cheaper, more decentralized, and more user-friendly ways for collectors to buy and sell NFTs. 

#### LooksRare
The first contender on our list—and one of the newest projects—is a platform that takes direct aim at OpenSea’s business model. LooksRare launched last month and has attracted users through a combination of a token airdrop and trading rewards. Anyone who traded at least 3 ETH worth of NFTs between Jun. 16 and Dec. 16, 2021 was eligible to claim an allocation of LOOKS tokens, with more tokens dropped to those with higher trading volumes. 

LOOKS holders can stake their tokens to earn a portion of the trading fees generated through sales on LooksRare. The yield for LOOKS staking currently sits at over 600%, a testament to the high trading volumes on the marketplace. In addition, LooksRare undercuts OpenSea by charging 1.5% on trades rather than 2.5%. Since LooksRare launched on Jan. 10, it has outpaced OpenSea in raw trading volumes almost every day—but there’s a catch. 

LooksRare is currently distributing LOOKS tokens to users with the highest trading volumes. This has incentivized several users to conduct wash trades on high-value NFTs, trading them between wallets to rack up higher trading volumes, and thus, more LOOKS token rewards. LooksRare has facilitated many legitimate sales too, with high activity on trending collections such as Bored Ape Yacht Club, CloneX, and Azuki.

With its motto of “by NFT people, for NFT people,” LooksRare emphasizes decentralization and community involvement. Even for those who care less about the ideals of Web3, LooksRare offers users a cheaper, more streamlined experience with the ability to earn through NFT purchases. 

#### gem.xyz
As more and more NFTs get spread out over different marketplaces, a place to aggregate listings is becoming a necessity. Enter gem.xyz, a newly-released NFT aggregator that makes comparing listings across several marketplaces easy. 

The biggest boon of using gem is the ability to buy multiple NFTs in the same transaction, allowing for substantial gas fee savings. Users can select the NFTs they want to purchase from a collection, and gem’s user interface will show the total cost and the gas fee savings from rolling all the trades into a single transaction. 

The more NFTs a user purchases in a single transaction, the more gas they save. gem estimates that buying 14 NFTs at once equals a gas saving of 33% over OpenSea or other NFT aggregators such as genie.xyz. As gem makes it easier and cheaper to buy NFTs in bulk, it’s the perfect tool to “sweep the floor” by buying up the cheapest available items from an NFT collection. 

Additionally, gem allows users to pay for NFTs using almost any ERC-20 asset or combination of assets, simplifying the buying experience further. It also pulls data directly from other marketplace’s smart contracts, so even if the frontend of these sites goes down, users can still buy and sell NFTs listed on them through gem. 

gem is still in beta but has already facilitated over $50 million worth of NFT sales. Those who test the platform out may even be rewarded in the future if gem decides to launch a token as other NFT marketplaces have done in the past. 

#### sudoswap
While NFT marketplaces offer a convenient way to get eyes on an NFT you want to sell, there’s usually a fee for the service. However, if you’ve already found a buyer, or even someone willing to trade one or more of their NFTs for yours, you can head over to sudoswap and create a custom swap for free, minus the cost of gas. 

On sudoswap, users can create open swaps that anyone can view and interact with or select a specific address to be the exclusive participant in a trade. Not only can NFTs be traded for ETH or WETH like on OpenSea, but also between any ERC-20 token, ERC-721 or ERC-1155 NFTs, or even a combination of all three. 

Gas costs are optimized, so users only need to pay for asset approvals and swaps, unlike OpenSea and other NFT marketplaces that require users to pay gas to create orders. sudoswap is completely trustless, with assets remaining in users’ wallets until both participants confirm a trade. 

As an added level of security, sudoswap uses trade codes instead of allowing users to post hyperlinks to swaps. This stops scammers from luring unsuspecting users with fake hyperlinks. To send a specific trade to another user, the creator must give the trade code to the other party, who can then input it into the official sudoswap site. 

sudoswap lets NFT collectors avoid marketplaces entirely by allowing them to trustlessly solicit trades with buyers and sellers. As it takes 0% commission, users can save substantial amounts when trading high-value NFTs. 

#### SuperRare
While traditional NFT marketplaces cater to casual buyers looking to trade avatar collections or generative art runs, SuperRare targets a different demographic of NFT collectors. It has established itself as the go-to platform for exclusive artists selling unique single-edition artworks. 

Because SuperRare is still in early access mode, the marketplace is only onboarding a hand-picked selection of artists. Even after the platform fully launches in the future, those wanting to sell their NFTs must first submit their artist profile to SuperRare and be chosen for inclusion on the site. 

However, despite the difficulty of being listed on SuperRare, the rewards for artists are great. The platform favors creators, ensuring they receive 10% of all secondary sale revenue for art initially sold on the SuperRare marketplace. 

While SuperRare has cultivated an exclusive arena for high-value NFT artwork, it comes at a price. Compared to other marketplaces, SuperRare is expensive, with 15% of primary sales going to SuperRare, 10% of secondary sales going to creators, and an additional 3% tax on all purchases paid by buyers. 

However, in return, SuperRare offers a white-glove service for all market participants and ensures creators are supported so they can continue producing high-quality digital art. The platform also holds decentralization close to its heart and uses a DAO system to manage the community treasury and guide the platform’s future development. 

#### Coinbase NFT
The last OpenSea alternative on our list hasn’t yet launched but is sure to disrupt the NFT world when it does. 

Coinbase NFT is set to focus on accessibility for non-crypto native users. Whether other marketplaces require users to connect with a non-custodial Web3 wallet such as MetaMask, Coinbase NFT will integrate with the Coinbase exchange and let users buy and sell NFTs in U.S. dollars using credit and debit cards. Additionally, Coinbase will custody NFTs for users while letting them mint, collect, discover, and showcase their non-fungibles all in one place.

The Coinbase NFT initiative is currently led by the company’s Vice President of Products, Sanchan Saxena, an industry veteran with a proven track record of developing products for companies such as Airbnb and Instagram.

#### Artion 
It is feature-filled, open-source, fast, and inexpensive: 0% commissions, with the near-zero transaction costs and fast finality that you are used to.
Key features:
* Low minting fees and 0% commissions on sales
* ERC721 support
* Buying, Selling, and Auctions
* Set price 
* Auctions

It responds to the incredible, pent-up demand for NFTs that the successes of Fantom-based projects indicate. Artion is easy to use, it offers NFT holders an easy way to buy and sell NFTs across collections, and most of all, it empowers artists and creators seeking to showcase and sell their work.
we are true believers in the potential of the Creator Economy to directly connect anyone with their audiences without intermediaries. But a true Creator Economy simply isn’t possible when one needs coding knowledge to mint an NFT, and tens or even hundreds of dollars in up-front fees to simply interact on a platform. 

## Team :busts_in_silhouette:

### Team members

- Lester 

### Contact

- **Contact Name:** Lester Lee
- **Contact Email:** rust.0x0@gmail.com
- **Website:**
No.
### Legal Structure

Individual

### Team's experience

Lester has 20+ years of software development experience and 4 years working in Blockchain   developer.now working as a freelancer.He is proficient in C++. He has 2 years Rust development experience and 3 years Solidity development experience.

### Team Code Repos

- https://github.com/rust-0x0/sub-art-nft-marketplace/tree/dev


- https://github.com/rust-0x0


### Team LinkedIn Profiles (if available)

No.

## Development Status :open_book:

sub nft marketeplace  ink! contract implement finished.

-  https://github.com/rust-0x0/sub-art-nft-marketplace/tree/dev
  



## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:**  1 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:**  10,000 USD

### Milestone 1 — Implement Sub NFT Marketplace  ink! Contract Modules

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:**  10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. |  Unlicense |
| 0b. | Documentation |We will provide both inline documentation of the code and a basic tutorial that explains how a user can deploy our smart contract, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Docker file(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article on medium detailing our social protocol construction .
| 1. |  ink! Contract: sub_auction | This contract is the auction feature of the market.creates a new auction ,places a new bid,withdraw the bid ,closes a finished auction,cancels and inflight and un-resulted auctions,update parameters, and so on. |  
| 2. |  ink! Contract: sub_marketplace  | This contract is the marketplace feature of the market.listing NFT ,canceling listed NFT, updating listed NFT , buying listed NFT,offering item,canceling the offer,accepting the offer,register a royalty,register a collection royalty,update parameters, and so on. |  
| 3. |  ink! Contract: sub_bundle_marketplace  | This contract is the marketplace feature of the market.listing NFT bundle,canceling listed NFT bundle, updating listed NFT bundle , buying listed NFT bundle,offering bundle item,canceling the bundle offer,accepting the bundle offer,update parameters, and so on. |  
| 4. |  ink! Contract: sub_art_factory  | This contract is the custom ERC1155 token factory feature of the market.create NFT contract ,register token contract, disable token contract ,exists ,update parameters, and so on. |  
| 5. |  ink! Contract: sub_art_factory_private  | This contract is the  custom ERC1155 token(mint by the owner) factory feature of the market.create NFT contract ,register token contract, disable token contract ,exists ,update parameters, and so on. |  
| 6. |  ink! Contract: sub_nft_factory  | This contract is the custom ERC721 token factory feature of the market.create NFT contract ,register token contract, disable token contract ,exists ,update parameters, and so on. |  
| 7. |  ink! Contract: sub_nft_factory_private  | This contract is the  custom ERC721 token(mint by the owner) factory feature of the market.create NFT contract ,register token contract, disable token contract ,exists ,update parameters, and so on. |  
| 8. |  ink! Contract: sub_address_registry  | This contract is the address registry feature of the market.update address parameters,get addresses, and so on. |  
| 9. |  ink! Contract: sub_price_seed  | This contract is the price seed feature of the market.register oracle,update oracle,get price,update address registry, and so on. |  
| 10. |  ink! Contract: sub_token_registry  | This contract is the token registry feature of the market.add token address ,remove token address, and so on. |  


## Future Plans

No.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

- personal recommendation.
- Previous grants I have applied for:
  - [hex space social graph](https://github.com/w3f/Grants-Program/blob/master/applications/hex.md) 

