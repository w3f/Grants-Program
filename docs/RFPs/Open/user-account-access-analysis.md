# User Account Access Security Analysis for Wallets

* **Status:** Open
* **Proposer:** [Bhargav Bhatt](https://github.com/bhargavbh), [David Hawig](https://github.com/Noc2)
* **Objectives** Security analysis of the user interface of Polkadot Wallets, particularly account access and recovery.

## Project Description :page_facing_up: 

Security is as strong as its weakest link. More often than not, it's the users (humans) that are the most vulnerable point in the system. This proposal aims to comprehensively analyse the security of user-facing protocols of Polkadot. In particular, Polkadot’s account generation and access is quite complex for users in the ecosystem. Several non-conventional mechanisms for account access like [multi-signatures](https://wiki.polkadot.network/docs/learn-account-multisig), intent-specific [proxies](https://wiki.polkadot.network/docs/learn-proxies), and [social recovery mechanisms](https://github.com/paritytech/substrate/tree/master/frame/recovery) provide interesting functionalities but also result in non-trivial user experiences. 

The proposal intends to first formally model the account generation, access, backup, and recovery mechanism for popular Polkadot wallets considering human-interactions as part of the system. Secondly, a comprehensive security analysis (automated or otherwise) is warranted to detect loop-holes in account access by the user, covering features like multi-signatures and anonymous proxies. A systematic technique for modelling and analysing account access is described in the paper ['User Account Access Graphs'](https://people.inf.ethz.ch/rsasse/pub/AccountAccessGraphs-CCS19.pdf). The security analysis should focus on detecting unauthorised access across attack surfaces, and also detect possible scenarios of genuine users being locked-out of the account. This analysis may also lead to detecting redundancies in the authentication process and streamlining the user experience. 


## Deliverables :nut_and_bolt:

The project is well-suited to be completed as a Bachelor's Thesis/ Master's Thesis/ Internship at an academic institute in collaboration with the Research Team at Web3 Foundation. The deliverables are just a template and can be modified taking into consideration the interests of the appplicant. 

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Document describing the threat model, scope of the analysis, and  description of the approach/methodology used. |
| 1 | Analysis Report| Security analysis report of the current account generation, access, back-up, and restoring mechanism used in popular Polkadot wallets like [Polkadot-JS Browser Extension](https://polkadot.js.org/extension/), [subkey](https://docs.substrate.io/reference/command-line-tools/subkey/), [Polkadot-JS UI](https://github.com/polkadot-js/ui), [Parity Signer](https://www.parity.io/technologies/signer/), [Talisman](https://www.talisman.xyz/) etc. The analysis should also take into consideration features like multi-signatures, stashing, proxies, and anonymous proxies. The analysis includes: 1) sound and complete detection of unauthorised access; 2) minimal counterexamples for exploits if any; 3) lockout risks for users | 
| 2 | Analysis Report| Possible improvements in usability (e.g., getting rid of redundant authentication layers during restoration) stemming from the analysis should be documented. | 
| 3 | Models/Code | Models developed to formalise and analyse the different wallets. Code and set-up for automated analysis, if any. |
| 4 | Engagements | Engage with the Web3 Foundation teams to validate the correctness of models and the specifications.|
