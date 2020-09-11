## Open Grant Proposal

- **Project:** Multi-signature_Management_Tool
- **Proposer:** [Hong Tao](https://github.com/carlhong)
- **Payment Address:** 3P1DGw78xgkQ2pTPT1hcwmzozY1T93gmTB

## Project Description

When we developed and used the multi-signature feature, we found that there is no multisignature wallet tool that can be used conveniently. The current wallet project is mainly designed for different usage environments, such as mobile wallet app, web wallet, chrome extension, etc. The development of these wallets (except the polkadot.js app) is at an early stage, and lack of multi-signature module . Polkadot.js apps is a very powerful tool, however the user experience and interface of substrate's native multi-signature module integrated in polkadot js is not friendly enough.

Therefore, we want to develop a Web Multisignature Management Tool (like [gnosis](https://wallet.gnosis.pm/#/wallets) based on Ethereum), implement a Substrate multisignature Portal and Web Tool integration, and bring users a better experience. Besides, subscan will support multisig Extrinsic details display. At current stage, our goal is offering users have a convenient multisignature tool and helping  developers reduce the development cost of similar functions.

- Network scalability

All chains built  on substrate [`as_multi`](https://github.com/paritytech/substrate/blob/v2.0.0-rc6/frame/multisig/src/lib.rs#L235>)  module can use our tools to complete related operations directly. The chain that changes the [`as_multi`](https://github.com/paritytech/substrate/blob/v2.0.0-rc6/frame/multisig/src/lib.rs#L235>)  module can use our UX design partly or completely according to their needs to reduce the development cost.

- Platform scalability

The web Multi-signature Management Tool can only run on PC and use it with extension programs.

## Objectives

- Create multi-signature account and send extrinsic
- Manage multi-signature wallets and extrinsic
- `as_multi` Module subscan browser adaptation
- Support multiple networks that are based on Substrate development
- UX optimization

## Team members

[Wan Bei](https://github.com/woeom), [Hong Tao](https://github.com/carlhong)

## Legal Structure

Shanghai Yitaiyuan Tech

## Team Website

<https://www.subscan.io/>

## Team's experience

Our team is based in Shanghai and Nanjing. We are very interested in substrate and we have done a lot of related development work, such as helping Darwinia build web wallet. 

But our focus has always been Subscan blockchain explorer, which keeps it updated quickly.

## Team Code Repos

<https://github.com/itering/subscan>

<https://github.com/itering/subscan_ui>

## Development Roadmap

### Basic function: generate Multisig account and send Extrinsic

- General UI design (in [Figma](https://www.figma.com/proto/WaysNQWlEB4wWK0a4mzYJQ/Multisig?scaling=min-zoom&node-id=0%3A2))
- backend design doc(in [Notion](https://www.notion.so/backend-doc-e7b4f79ede7b4d9cb39a52769c2aab2d), in [Google Docs](https://docs.google.com/document/d/18OgQ2Oh1oR9LIiZ9Uct35zHQ25f7gN1C-ngiqyrMfxU/edit?usp=sharing))
- Integrate with polkadot js extension 
- Multisig wallet creation and management 
- Basic Multisig Extrinsic(transfer) create and process in Multisig wallet
- Multisig wallet support polkadot mainnet
- Build user-friendly UI to list decoded call data with its hash for users who participated in the multi-signatures, data will be verified by hash on frontend
- Use database or other backend service to store the index data.
- Docker Files and Images
- Unit tests and integration test
- Tutorials

Total for worker implementation: 25 days

Budget: 1 BTC

### Advanced function: more features for multisig wallet and support more network

- Multisig wallet support more kinds of Extrinsic such as staking, Democracy
- Support kusama ,Darwinia and other network which base on Substrate 2.0 
- Docker Files and Images
- Unit tests and integration test
- Tutorials

Total for worker implementation: 30 days

Budget: 1 BTC

 

**Total Budget: 2 BTC.**
