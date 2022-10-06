# W3F Grant Proposal

- **Project Name:** Sub Artion NFT marketplace ink! contracts on Substrate 
- **Team Name:** Lee
- **Payment Address:** 0x352a7f69df71bda6c51ee7fa938dd76ff2375087(USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Sub Artion NFT marketplace is heavily inspired by Artion implementation [artion](https://github.com/Fantom-foundation/Artion-Contracts.git)
The NFT marketplace is a market where people can sell NFTs — [PSP34](https://github.com/w3f/PSPs/blob/master/PSPs/psp-34.md/[ERC 721](https://eips.ethereum.org/EIPS/eip-721) or [PSP37](https://github.com/w3f/PSPs/blob/master/PSPs/psp-37.md)/[ERC 1155](https://eips.ethereum.org/EIPS/eip-1155) tokens — at a fixed price ( what we'll refer to as a "Direct listing"), or auction them (what we'll refer to as an "Auction listing").
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


### Ecosystem Fit

#### Artion 
It is feature-filled, open-source, fast, and inexpensive: 0% commissions, with the near-zero transaction costs and fast finality that you are used to.
Key features:
* Low minting fees and 0% commissions on sales
* PSP34/ERC721 support
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
  
* sub-art-nft-marketplace-front-end screenshot picture
![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/1.png)![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/2.png)![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/3.png)

![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/4.png)![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/5.png)![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/6.png)

![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/7.png)![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/8.png)![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/9.png)

![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/10.png)![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/11.png)![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/12.png)

![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/13.png)![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/14.png)![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/15.png)

![image](https://github.com/rust-0x0/sub-art-nft-marketplace-docs/blob/dev/images/16.png)


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
| 4. |  ink! Contract: sub_art_factory  | This contract is the custom PSP37/ERC1155 token factory feature of the market.create NFT contract ,register token contract, disable token contract ,exists ,update parameters, and so on. |  
| 5. |  ink! Contract: sub_art_factory_private  | This contract is the  custom PSP37/ERC1155 token(mint by the owner) factory feature of the market.create NFT contract ,register token contract, disable token contract ,exists ,update parameters, and so on. |  
| 6. |  ink! Contract: sub_nft_factory  | This contract is the custom PSP34/ERC721 token factory feature of the market.create NFT contract ,register token contract, disable token contract ,exists ,update parameters, and so on. |  
| 7. |  ink! Contract: sub_nft_factory_private  | This contract is the  custom PSP34/ERC721 token(mint by the owner) factory feature of the market.create NFT contract ,register token contract, disable token contract ,exists ,update parameters, and so on. |  
| 8. |  ink! Contract: sub_art_tradable | This contract is the custom PSP37/ERC1155 token tradable  contract . |  
| 9. |  ink! Contract: sub_art_tradable_private  | This contract is the  custom PSP37/ERC1155 token(mint by the owner) tradable contract. |  
| 10. |  ink! Contract: sub_nft_tradable | This contract is the custom PSP34/ERC721 token tradable contract . |  
| 11. |  ink! Contract: sub_nft_tradable_private  | This contract is the  custom PSP34/ERC721 token(mint by the owner) tradable contract. |  
| 12. |  ink! Contract: sub_address_registry  | This contract is the address registry feature of the market.update address parameters,get addresses, and so on. |  
| 13. |  ink! Contract: sub_price_seed  | This contract is the price seed feature of the market.register oracle,update oracle,get price,update address registry, and so on. |  
| 14. |  ink! Contract: sub_token_registry  | This contract is the token registry feature of the market.add token address ,remove token address, and so on. |  
| 15. |  ink! Contract: sub_artion | This contract is the custom PSP34/ERC721 token tradable contract . |  
| 16. |  NFT marketplace front-end  | We will deliver the  react-based front-end based on substrate-front-end-template  with the contract,which demonstrates core methods of the contract. |  

## Future Plans

No.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

- personal recommendation.
- Previous grants I have applied for:
  - [hex space social graph](https://github.com/w3f/Grants-Program/blob/master/applications/hex.md) 

