# Privacy Enhancement for Polkadot Extension

* **Status:** [Under Development](https://github.com/w3f/Grants-Program/blob/master/applications/polkadot-js-extension-per-account-auth.md)
* **Proposer:** jonasW3F
* **Projects you think this work could be useful for** [optional]: https://github.com/polkadot-js/extension
* **Teams/People that could deliver the RFP:** @celrisen

## Project Description :page_facing_up: 

An increasing number of websites require access to the Polkadot extension with a growing ecosystem. By allowing access to the extension, websites (naturally) can see the addresses that are contained in the extension. This imposes a big risk to privacy, because malicious actors could create lists about which addresses belong to one entity and, in the worst case, even link it to real-world identities (if at least one address is linked to an on-chain identity). A feature to prevent this is currently the "hide" button on single addresses, which prevent websites from seeing that address. However, it is currently cumbersome to handle that feature. The idea of this RFP is to extend on that feature and include a few QOL functionalities to make it easier for users to protect their privacy.

## Deliverables :nut_and_bolt:

As outlined [here](https://github.com/polkadot-js/extension/issues/893), the deliverable should include five features to the extension and a successful completion of this RFP includes a merge of a PR to the main polkadot-js/extension repo. **It is of great importance to generate clean code that follows best-practices**. 

* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):**  Amount of time (in days) required for a single person to complete this project ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) 
* **Total Costs:** $10'000. 

### Milestone 1
 
* **Estimated Duration:** 1 month
* **FTE:**  Amount of time (in days) required for a single person to complete this milestone
* **Costs:** $10'000


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | "Hide all" | A global button that hides/un-hides all addresses |  
| 2.  | "View-Groups" | Create and name groups which a user can organize their accounts to. For example, a "polkadot-js" group could unhide all accounts, while a "Parachain X" group only unhides those accounts a user knows that they have those parachain tokens on. |
| 3. | "Privacy Mode" | A setting that automatically changes the extension to a specific view group (which could be "hide all"). | 
| 4. | "Hide from Extension" | A feature that lets users hide addresses in the extension itself. This is useful for doing demos or presenting the screen. Those accounts are listed in a special tab and can be unhidden from there. | 
| 5. | "Link View-Groups to URLs" | The extension already features an access control to specific URLs. To add on that, the extension could automatically switch to a defined view-group when entering an URL. Building on that, upon *first* authorization of a website, the extension could ask which view-groups to add it to or offer to create a new one. | 
