# W3F Grant Proposal

- **Project Name:** Privacy Enhancement for Polkadot Extension
- **Developer:** Ender Dogan
- **Payment Address:** Ethereum: 0xD4130B0F66F1a621A901888B6e239906D1B680Ee
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

The project description, deliverables and Milestone 1 is described here: https://github.com/w3f/Grants-Program/blob/master/rfps/privacy-enhancement-polkadot-extension.md

### Project Details

As a newcomer to Polkadot environment, I was able to create chrome extension and make some changes to work in the development environment. I was able to extend the global settings but I had to change the polkadot/ui-settings package. I didn't want to change too much but wanted to see a first result so I used an existing button to see, if I can show/hide the address of an account. It was possible and I made a gif of it: https://imgur.com/a/qsfhD0z

I would make GUI mock-ups and a concept of change in the code hierarchy (interfaces, etc) before starting with the tasks of Milestone 1. In my professional projects, I like to use the [v-model](https://www.geeksforgeeks.org/software-engineering-sdlc-v-model/#:~:text=The%20V%2Dmodel%20is%20a,associated%20with%20the%20testing%20phase.) but I would like to present my solution and proposal to the stakeholders before I start coding.

### Ecosystem Fit

As described in the [RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/privacy-enhancement-polkadot-extension.md), the development will enhance the privacy of the Polkadot Extension.

## Team :busts_in_silhouette:

### Team members

- Single Developer: Ender Dogan

### Contact

- **Contact Name:** Ender Dogan
- **Contact Email:** ender@doganmail.de / enderodogan@gmail.com
- **Website:**

### Legal Structure

- **Registered Address:** 
- **Registered Legal Entity:** Freelancer

### Team's experience

- No open source professional project. Only hobby projects which are targetted for educational purposes (children between 9-14)
- TypeScript is used in this project https://github.com/nodi-andy/noditron. Forked from shapez.io and the goal was to create a gamefied programming language. A demo is running on www.noditron.com
- C/C++/C# programmer since 2004.

### Team Code Repos

- https://github.com/nodi-andy


### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ender-dogan-38007b234/


## Development Status :open_book:

Feasibility for development environment and the completion of first task: https://imgur.com/a/qsfhD0z

The task #2 might be challenging and the implementation have to be arranged between stakeholder and developer. The arrengement is done by review of test cases for non-visual functionalities and UI design shall have an additional first-step and approval for GUI extension proposal.

## Development Roadmap :nut_and_bolt:

The development shall comply the with tasks from milestones. The stakeholder shall provide coding guide lines or standards if those exist. The estimated FTE about 1 month (160h) shall be splitted for each task like this. Project budget of 10.000$ is equal to 62,5$/h. The funding amount calculation is based on 60$/h.

| Number | Deliverable | Specification | Time | Total cost | Delivery date |
| ------------- | ------------- | ------------- | -------------  | -------------  | -------------  |
| 1. | "Hide all" | A global button that hides/un-hides all addresses |  20h | 1200 $ | 01.05.2022|
| 2.  | "View-Groups" | Create and name groups which a user can organize their accounts to. For example, a "polkadot-js" group could unhide all accounts, while a "Parachain X" group only unhides those accounts a user knows that they have those parachain tokens on. | 40h | 2400 $ | 25.05.2022 |
| 3. | "Privacy Mode" | A setting that automatically changes the extension to a specific view group (which could be "hide all"). | 30h | 1800 $ | 15.06.2022 |
| 4. | "Hide from Extension" | A feature that lets users hide addresses in the extension itself. This is useful for doing demos or presenting the screen. Those accounts are listed in a special tab and can be unhidden from there. | 20h | 1200 $ | 30.06.2022 |
| 5. | "Link View-Groups to URLs" | The extension already features an access control to specific URLs. To add on that, the extension could automatically switch to a defined view-group when entering an URL. Building on that, upon *first* authorization of a website, the extension could ask which view-groups to add it to or offer to create a new one. | 20h | 1200 $ | 15.07.2022 |
| 6. | Translate GUI: Add i18n for German and Spanish |  |4h | 240 $ | 16.07.2022 |
| 7. | Milestone  budget |  | 134h | 8040 $ | 16.07.2022 |


### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  20 days
- **Total Costs:** 10,000 USD

### Milestone 1 Hide and show the addresses in network

- **Estimated duration:** 2 days
- **FTE:** 16h
- **Costs:** 960 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can hide and show all addresses using a menu entry. |
| 0c. | Testing Guide | Hiding and showing addresses in network will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests. If a testsuit already exists, this test environment will be extended.|
| 1. | GUI Menu | I will create a privacy menu, which contains two menu items to hide and show all addresses in network. Example: ![Privacy Menu](https://i.imgur.com/ckyhjbm.png) |  

### Milestone 2 Implement group assignation for accounts

- **Estimated duration:** 9 days
- **FTE:**  72h
- **Costs:** 4320 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how a group is created, renamed and an account can be assigned to this group. Furthermore, the override order of accounts network visibility will described, so that the user know exactly how to control the network visibility |
| 0c. | Testing Guide | Creating, renaming and association of accounts to groups will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests. If a testsuit already exists, this test environment will be extended.|
| 1. | Create and rename groups | After first installation of extension, there is no existing group. Open the groups menu. Add a new group. A group shall be automatically selected, if it is created. Test if renaming and removing of groups works. Go to address properties menu and assign an account to this group. Export and import the account, to check if the group assignment of an account can be saved. Change the three visibility properties for a group: "Account visibility in GUI", "Address visibility in GUI" and "Address visibility in network". Change the privacy level in privacy menu and see the changes. Test cases will be added after approval. ![Groups Menu](https://i.imgur.com/sZ9gwes.png) |  
| 2. | Remember groups and group associations of an account |  Export and import the account, to check if the group assignment of an account can be saved. Change the "Address visibility in network". Change the privacy level in privacy menu and see the changes. Test cases will be added after approval. ![Account Menu](https://i.imgur.com/a39ItOm.png)|  
| 4. | Override account network visibility |  If an account is assigned to a group with higher privacy level, current network visibility will be taken from group. It shall be decided, if the user can override the network visisbility of the group for a single account.  |  

### Milestone 3 Implement privacy level

- **Estimated duration:** 4 days
- **FTE:**  32h
- **Costs:** 1920 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how the privacy level is associated to a group and the privacy level can be set using privacy menu in GUI. |
| 0c. | Testing Guide | Setting the privacy level will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests. If a testsuit already exists, this test environment will be extended. The testing will cover all 3 three new properties of an account (address visibility in network, address visibility in GUI, account visibility in GUI). |
| 1. | Set privacy level | Default value for privacy level is 1. If the user changes the privacy level in privacy menu ![Privacy Menu](https://i.imgur.com/ckyhjbm.png) the visibility of addresses in network will be change. |  
| 2. | GUI privacy |  Add 2 another properties: "account visibility in GUI" and "address visibility in GUI" based on the group property "address visibility in network" |  


### Milestone 4 Define an account as hidded

- **Estimated duration:** 2 days
- **FTE:**  16h
- **Costs:** 960 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how an account can be set as hidden in GUI, how the user can show the hidden accounts and can reset this property to make an account visible again. |
| 0c. | Testing Guide | Setting the account visibility will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests. If a testsuit already exists, this test environment will be extended. The testing will cover that some accounts from account list will be randomly set as hidden and those are not visible in the gui. This settings shall be saved, so after reset of GUI, the hidden accounts are still invisible |
| 1. | Override group property for account visibility in GUI | Default value for hidden account is false. If the user changes the account visibility in account menu ![Account Menu](https://i.imgur.com/ckyhjbm.png) the visibility of an account gui will be changed. |  
| 2. | Hide/Show hidden accounts | In the privacy menu, the hidden accounts can be made visible and their properties can be editted ![Privacy Menu](https://i.imgur.com/ckyhjbm.png) |  


### Milestone 5 Set privacy level using URL

- **Estimated duration:** 2 days
- **FTE:**  16h
- **Costs:** 960 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how an url can change the privacy level. |
| 0c. | Testing Guide | TBD |  
| 1. | TBD | TBD |  

### Milestone 6 Add i18n for Spanish and German

- **Estimated duration:** 1 day
- **FTE:**  8h
- **Costs:** 480 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how an url can change the privacy level. |
| 0c. | Testing Guide | TBD |  
| 1. | TBD | TBD |  


## General rules of validation

The delivered code, libraries or UI design, shall be approved by the stakeholder based on following criteria.

Tests shall be executed in chrome and firefox extensions in privacy mode without any other extensions installed.

A validation (approval) shall start after following pre-checks:
- Check the completeness of verification tests
- Execute the manual tests
- Approve that the function of the menu items complies with generic GUI design and user experience.
- Save the chrome version and commit hash in review protocoll.                  |               |

## Additional Information :heavy_plus_sign:

The solution for the milestones above is based on four new properties of accounts: 
- Group membership
- Visibility properties: "Account visibility in GUI", "Address visibility in GUI" and "Address visibility in network"
- Privacy level, which affects the three visibilities
- Global Account Visibility
- Global Address Visibility

The main GUI will show an account only if an account is:
- Not hidden or ( Hidden but Hidden accounts shall be shown )  AND
- Group Privacy Level of the account is lower than user-defined privacy level

The main GUI will show an account address only if an account has:
- (Group Address Visibility is set on TRUE in privacy menu AND Global address Visibility is set on FALSE by user) OR
- Global address Visibility is set on TRUE by user


**How did you hear about the Grants Program?** : https://github.com/jonasW3F posted it on reddit