## Open Grant Proposal

- **Project:** Multi-signature_Management_Tool
- **Proposer:** [Hong Tao](https://github.com/carlhong)
- **Payment Address:** 3P1DGw78xgkQ2pTPT1hcwmzozY1T93gmTB

## Project Description

When we developed and used the multi-signature feature, we found that there is no multisignature wallet tool that can be used conveniently. The current wallet project is mainly designed for different usage environments, such as mobile wallet app, web wallet, chrome extension, etc. The development of these wallets (except the polkadot.js app) is at an early stage, and lack of multi-signature module . Polkadot.js apps is a very powerful tool. The dappforce version provided a web UI about multi-signature, but it was based on Substrate 1.0, and it was not upgraded and maintained in time, and users have difficulties in using it.

Therefore, we want to develop a Web Multisignature Management Tool (like [gnosis](https://wallet.gnosis.pm/#/wallets) based on Ethereum), implement a Substrate multisignature Portal and Web Tool integration, and bring users a better experience when using subscan. At current stage, our goal is offering users have a convenient multisignature tool and helping  developers reduce the development cost of similar functions.

- Network scalability

All chains built  on substrate [`as_multi`](https://github.com/paritytech/substrate/blob/v2.0.0-alpha.4/frame/utility/src/lib.rs#L321>)  module can use our tools to complete related operations directly. The chain that changes the [`as_multi`](https://github.com/paritytech/substrate/blob/v2.0.0-alpha.4/frame/utility/src/lib.rs#L321>)  module can use our UX design partly or completely according to their needs to reduce the development cost.

- Platform scalability

The web Multi-signature Management Tool can not only run on PC and use it with extension programs, but also serves as a dapp, using it with the mobile wallet app. Developers of mobile wallets can use this tool as a multi-signature solution as needed.

- Future

Regarding multi-signature module versions, we are currently based on dappforce versions, and will follow a wider range of community standards in the future, such as [w3f/PSPs#7](https://github.com/w3f/PSPs/pull/7) .

## Objectives

- Create multi-signature account and send extrinsic
- Manage multi-signature wallets and extrinsic progress
- `as_multi` Module subscan browser adaptation
- Support multiple networks that are based on Substrate development
- UX optimization across terminals

## Team members

[Wan Bei](https://github.com/woeom), [Hong Tao](https://github.com/carlhong), [Yakio](https://github.com/yakio),

## Legal Structure

Shanghai Yitaiyuan Tech

## Team Website

<https://www.subscan.io/>

## Team's experience

Our team is based in Shanghai. We are very interested in substrate and we have done a lot of related development work, such as helping Darwinia build web wallet. 

But our focus has always been Subscan blockchain explorer, which keeps it updated quickly.

## Team Code Repos

<https://github.com/itering/subscan>

<https://github.com/itering/subscan_ui>

## Development Roadmap

### Basic function: generate Multisig account and send Extrinsic

- Web page design
- Generate Multisig address
- Generate the `Call` Hash according to the Call of Extrinsic
- Provide `as_multi` function 
- Provide `approve` function 
- Provide `cancel` function 
- Provide Signers sorting feature 
- Integrate with wallet plugin
- Design and Handle the misuse case 
- Example of integrating the plugin with backend service 

Total for worker implementation: 18 days

Budget: 1.3 BTC

### Advanced function: manage Multi-sig account and Extrinsic progress

- Feature on import/export from multisignature wallets 
- Feature on reviewing the transaction details
- Feature on query and review other signers status and the overall status
- Feature on checking the Compatiblity and the adaptability from the source code of the target network 
- Frontend testing case 
- Example for the plugin integrate with backend service

Total for worker implementation: 16 days

Budget: 1.2 BTC

### Custom function：Network and terminal adaptation

- Feature on switching node
- Feature on integration with subscan
- Mobile terminal ux adaptation
- API for calling mobile terminal signature
- Docker Files and Images
- tutorials

Total for worker implementation: 14 days

Budget: 1 BTC

 

**Total Budget: 3.5 BTC**
