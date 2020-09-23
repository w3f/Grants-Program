# Open Grant Proposal

- **Project:** SubDEX
- **Proposer:** subdarkdex
- **Payment Address:** 36RukKN8Qa1QTjsQqCfZ5CzrvAKVg2vro8

## Project Description :page_facing_up:

SubDEX is a decentralized cross-chain exchange based on AMM (automated market maker) protocol. This project was initially submitted to [Hackusama](https://devpost.com/software/dark-dex). The SubDEX team's goal goes beyond what was produced in the hackathon. We aim to continue to build SubDEX and hope it becomes a parachain that connects to Kusama and Polkadot networks, so that other parachain assets can be exchanged on it with privacy in a decentralised way.

Centralised Exchanges (CEXs) have grown exponentially in last decade, because

1. demands for fiat to crypto asset exchange
2. demands for assets exchange between different blockchain assets
3. different blockchains are isolated from each other like islands in oceans

Users have to rely on a middle man (CEX) to exchange different blockchain assets.

DEXs have existed on Ethereum blockchain a few years, but they usually have low liquidity and bad user experience. [Vitalik's research](https://ethresear.ch/t/improving-front-running-resistance-of-x-y-k-market-makers/1281) inspired Uniswap team and [Uniswap's success](https://cointelegraph.com/news/defi-explosion-uniswap-surpasses-coinbase-pro-in-daily-volume#:~:text=Uniswap%2C%20the%20most%20widely%2Dused,daily%20volume%20on%20Aug%2030.&text=According%20to%20the%20data%20from,volume%2C%20according%20to%20CoinMarketCap%20data.) inspired us. We think it is time for DEXs to disrupt CEXs

Uniswap's success is exciting, but it is mainly used to only exchange Ethereum assets (ETH and ERC20 tokens). Some solutions such as REN exists for user to exchange BTC with Ethereum assets, but most of other blockchain assets cannot be traded on Ethereum DEXs. Furthermore, as AMM protocol evolves, we have seen that Uniswap V1 evolved to Uniswap V2 and Bancor evolved to Bancor V2, both old and new versions have to co-exist because the old version cannot be seemlessly upgraded to new version on Ethereum.

Kusama / Polkadot's cross-chain protocol and on-chain upgrade make them the perfect blockchain to build a DEX. We are aware there are other DEXs such as Polkaswap and Acala being built now, however, SubDEX is designed to align with the substrate FRAME framwork and adds to the ecosystem with a set of pallets that are reusable and a interface for good user experience.

The team met during the hackthon and have established strong inter-team relationships through a common goal - _to provide a DEX that is built by, used by and maintained by the community._

## Team :busts_in_silhouette:

- **Members:** Arsen Kondratiev, Belsy Yuen, Fei Yang, Herry He, Stasi Kondaurova
- **LinkedIn Profiles:** https://www.linkedin.com/in/arsen-kondratiev-031801172/, https://www.linkedin.com/in/belsy/, https://www.linkedin.com/in/fyang1024/,,https://www.linkedin.com/in/kstasi/
- **Code Repos:** https://github.com/subdardex
- **Website:** http://subdex.io.s3.eu-west-2.amazonaws.com/index.html
- **Legal Structure:** Individuals
- **Team's Experience:**
  - Arsen is a software engineer, particularly interested in the blockchain domain. During the last year was mostly focused on substrate runtime development at [Joystream](https://github.com/Joystream/joystream/tree/content_directory_second_try) and Liqum projects. Earlier, worked on infrastructure backends for DAPPs, based on TRON and EOS blockchain platforms.
  - Belsy is a software engineer who focused on working with the substrate framework in the last year. Prior to that, she has worked as a full stack engineer for other blockchain projects on Ethereum, Hyperledger Burrow / Fabric.
  - Fei has been a full stack software engineer for over 10 years and he got involved in blockchain development in May 2017. He worked in centralised exchanges such as [Bitfinex](https://www.bitfinex.com/) and [SDCE](https://sdce.com.au) and believes DEX is the future.
  - Herry is a 6-year e-commerce entrepreneurial veteran as well as an enthusiast of blockchain. After a lecture by Brian from Acala in 2019, where she was shocked by Substrate technology, she decided to devote herself into the tide of Polkadot.
  - Stasi is is a software engineer, technology-agnostic who prefers working on DApps for developing Blockchains like Tezos or TON. But also has expertise with more sustainable blockchains: Ethereum, Stellar, EOS, UTXO-based blockchains, currently works on [Quipuswap](https://medium.com/madfish-solutions/how-to-use-quipuswap-on-carthagenet-44c7ebfb97b) (DEX on Tezos), has a hobby to draw [mock-ups](https://www.figma.com/proto/bdS7KgUPIoUtWybrYewVHD/Cepheus?node-id=45%3A0&scaling=min-zoom) and write [articles](https://medium.com/madfish-solutions/sol2ligo-in-action-migrating-solidity-smart-contract-to-ligo-sol2ligo-update-3-961ddbd9715c)

## Development Roadmap :nut_and_bolt:

- **Total Estimated Duration:** 8 weeks
- **Full-time equivalent (FTE):** 2 FTE
- **Total Costs:** 2.5 BTC

### Milestone 1

In this grant application we aim to provide as many features that can be packaged into reusable components as possible, the aim is so that when the development of parachains and XCMP are more mature, the community or the subdex team will be able to use / build on such components to realise the goal of a DEX parachain.

| Number | Deliverable                 | Specification                                                                                                                                                                                                                                                                 |
| ------ | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.     | UI connection               | Update UI to support user specified connections to Subdex parachain nodes and connection to browser wallet                                                                                                                                                                    |
| 2.     | UI feature                  | Allow user to set allowed slippage                                                                                                                                                                                                                                            |
| 3.     | UI Theme                    | Provide 2 themes for UI -- light and dark and allow user to choose which one                                                                                                                                                                                                  |
| 4.     | Dex Pallet                  | Implement Uniswap V2 AMM protocol with full test coverage and eliminate overflow/underflow risks in calculation in the chain, publish as a standalone pallet                                                                                                                  |
| 5.     | Dex XCMP Pallet             | Handle relay chain asset creation and test this placeholder XCMP pallet that will be used to create demo for testnets for this milestone                                                                                                                                      |
| 6.     | Generic Token Dealer Pallet | Create a generic token dealer pallet that can handle generic assets and/or native parachain currency, based on the [token dealer](https://github.com/paritytech/cumulus/tree/master/rococo-parachains/pallets/token-dealer) pallet example and publish as a standalone pallet |
| 7.     | UI Infrastrcture            | Deploy frontend to IPFS                                                                                                                                                                                                                                                       |
| 8.     | Network Infrastructure      | Deploy to secured and high reliability server(s) to host a demo relay chain and parachains testnets.                                                                                                                                                                          |

#### Community and Documentation

Our initial focus will be development, but we will setup medium and twitter account to start building community as well. We will provide a tutorial on how to use the Pallets created to connect a DEX parachain to a generic parachain with the Generic Token Dealer pallet.

## Additional Information :heavy_plus_sign:

We have broken down the SubDEX product roadmap into small manageable steps and would like to get feedback from the community and the foundation every step of the way, and we intend to apply for other grants after this milestone, which will put all that is built in this milestone to the test with the connection to the Roccoco testnet.

The overview of the features SubDEX intend to have are the follow:-

- Implements an AMM protocol
- Liquidity provider fee - which will be set to 0.3% initially but will be set by the Liquidity providers and traders through the democracy module when the network has enough users.
- Node runner fee - will be set to 0.1% initially but will be set by the node runners through the democracy module when the network has enough community nodes
- Support exchange of KSM & DOT and other parachain assets
- Support other blockchain assets such as ETH, XTZ, BTC when the bridges are ready
- Customizable user interface (user can select any DEX node to connect to, user can adjust allowed slippage, user can select favorite theme etc).
- Optional privacy for users
