# Multisignature Management Tool 
A web tool helps users manage their multi-signature for multi-chain

## Project Description  
The multisignature feature is implemented in Wave 5 as an substrate runtime module. This is a great project!  
We used the multisignature feature and found that this part of the exploration is currently mainly dedicated to the realization of the function, which is still lacking in usability, user experience, management functions, browser support, etc.  

As a user and developer for the substrate runtime module, we find following issues that we can enhance.  
- There is no method to generate `call_hash: [u8; 32]`, issue 5499
- The tx deails of call is not stored, such that other approver can not review the detail of Call Content
- There is specific order for signators, but lack of tools
- Absence of interface to query `multi_account_id ` by signators and threshold
- Absence of good interactive interface on Web
- Some operation is manually, such as `as_multi_sig`
- The lack of detailed and complete documentation and user tutorials


We will provide the following details to enhance the user experience and saving development time for the people working with this runtime module.

### Objectives
- Review the runtime modules and fix issues 
- Web plugin integrated with wallet
- Advanced features for developers
- Deploy tools

## Team members
Yakio, Wan Bei, Hong Tao

## Legal Structure
Shanghai Yitaiyuan Tech

## Team Website  
https://www.subscan.io/

## Team's experience
Our team works in Shanghai and is very interested in substrate, and has done a lot of related development work, such as help Darwinia building web wallet. But our focus has always been on the subscan blockchain explorer, which keeps it updated quickly.

## Team Code Repos  
We are not opensource currently.

## Team LinkedIn Profiles


## Development Roadmap  

### Review Runtime Module
- Review the runtime modules and fix issues  (40h)

Total for worker implementation: 40 hours  
Budget: 2,400 USD  

### Web Plugin Integrated with Wallet
- Web page design (32h)
- Base on Signers to generate Multisig address (32h)
- According the `Call` of Extrinsic to generate the Call Hash (32h)
- Providing `as_multi` function (16h)
- Providing `approve` function (16h)
- Providing `cancel` function (16h)
- Providing Signers sorting feature (8h)
- integrate with wallet plugin (32h)
- Design and Handle the misuse case (32h)
- Example for the plugin integrate with backend service (24h)

Total for worker implementation: 240 hours  
Budget: 14,400 USD  

### Advanced features for developers
- Feature on switching nodes (24h)
- Feature on reviewing the transaction details  (32h)
- Feature on query and review other signers status and the overall status (32h)
- Feature on checking the Compatiblity and the adaptability from the source code of the target network (32h)
- Feature on integration with blockchain browsers (24h)
- Feature on import/export from multisignature wallets (16h)
- Frontend testing case (24h)
- Example for the plugin integrate with backend service (24h)

Total for worker implementation: 208 hours  
Budget: 12,480 USD  

### Deploy Tools
- Docker Files and Images (8h)
- tutorials (4h)

Total for worker implementation: 12 hours  
Budget: 720 USD  

#### Total Budget: 30,000 USD

## Future Plans  
Subscan is providing a better web experience for users and developers in the Substrate ecosystem.
