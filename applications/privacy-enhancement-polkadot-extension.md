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

- State of Art
Account sharing on network:

The extension manages accounts and the dapp websites can call the account numbers using the authorization feature. Authorized webpages can be found under settings>Manage Website Access (link: index.html#/auth-list). A dapp website have to ask for authorization and after the authorization is approved in extension, all visible accounts are shared with the dapp. As example, visit https://apps.karura.network/ and select polkadot as wallet and following window will appear: 

![Authorization Panel](https://i.imgur.com/Ad3GfWz.png).

At this stage, it is considered as weak privacy, because the users might tend to share all accounts because the user might forget to check the visibility or just do not make any change in extension due to negligence.

Account visibility on GUI:

All accounts are always visible in GUI with the account addresses. In case of the users desktop is visible to any other person during the screen is shared, this is considered as privacy violation because the participants of meeting might record the screen sharing.

- Privacy concept

The privacy concept for GUI and network are treated separately.

Account sharing on network:
Authorization for a webpage shall not provide access to users accounts without the user explicitly decides which accounts have to be shared. In the authorization panel shall be possible to decide which accounts are to be provided but unvisible accounts can not be shared.

All visible accounts shall be listed in the authorization panel as a checkbox (default: all unchecked). The GUI offers three buttons:

    - Select all

    - Select none

    - Approval button, which already exists: "Yes, allow this application access"


This decision for provided accounts shall be visible in GUI similar to "account (network) visibility" an icon (link/unlink) shall show the state of an account, if the account is shared. That means, that the intended "link/unlink" function will overtake the function of current "account (network) visibility" and the visibility button shall be only used to filter the accounts during authorization of dapp website. This decision shall be remembered for each authorized dapp.

Additionally a menu button ("Block all accounts") shall block all accounts with single-click and another menu button shall revert this step: "Unblock all accounts". In this case the account setting for linking/unlinking shall be not be changed but the icon shall be outgrayed.

Account groups are considered to be too complex and not worthy.

Account visibility on GUI:
It shall be possible to hide an account as windows OS file visibility feature. If an account is set as "hidden", it shall be immediately removed from GUI and can only be reverted if the menu checkbox "Show hidded accounts" is checked.

Same feature for hiding accounts, shall be implemented for hiding the account addresses.

- Implementation

The solution for the concept above can be realized with four new properties of accounts:

    - Visibility (This property exists already but the usage will be changed)

    - Blocked

    - Linked (Same as current account visibility)


An account is only provided if it is not Blocked and Linked. Linking is only possible by clicking on link button in GUI or selecting the account during authorization

    - Hidden (GUI)
    - AddressHidden (GUI)


### Ecosystem Fit

As described in the [RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/privacy-enhancement-polkadot-extension.md), the development will enhance the GUI and network privacy of the Polkadot Extension.

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

Feasibility for development environment and an example for hiding the addresses in gui using an existing button: https://imgur.com/a/qsfhD0z. GUI mock-ups are added in milestones

The GUI modifications are done to generate GUI wireframes. The screenshots of those wireframes are added in each specification in milestones. The new features rely heavily on privacy concept, which kept as simple as possible, so that the user only have to set a privacy level to change the visibility of accounts in GUI and in network. If this solution is not sufficient, privacy level can be splittet into two different privacy levels; the GUI privacy and network privacy. This can be decided by grant committee and the concept will be adjusted without changes in "estimated duration" and FTE.

## Development Roadmap :nut_and_bolt:

The development shall comply the with tasks from milestones. The stakeholder shall provide coding guide lines or standards if those exist. The estimated FTE about 1 month (160h) shall be splitted for each task like this. Project budget of 10.000$ is equal to 62,5$/h. The funding amount calculation is based on 60$/h.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | "Hide all" | A global button that hides/un-hides all addresses | 
| 2.  | "View-Groups" | Create and name groups which a user can organize their accounts to. For example, a "polkadot-js" group could unhide all accounts, while a "Parachain X" group only unhides those accounts a user knows that they have those parachain tokens on. | 
| 3. | "Privacy Mode" | A setting that automatically changes the extension to a specific view group (which could be "hide all"). |
| 4. | "Hide from Extension" | A feature that lets users hide addresses in the extension itself. This is useful for doing demos or presenting the screen. Those accounts are listed in a special tab and can be unhidden from there. | 
| 5. | "Link View-Groups to URLs" | The extension already features an access control to specific URLs. To add on that, the extension could automatically switch to a defined view-group when entering an URL. Building on that, upon *first* authorization of a website, the extension could ask which view-groups to add it to or offer to create a new one. | |
| 6. | Translate GUI  | Add i18n for German and Spanish |


### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  166 hours
- **Total Costs:** 9960 USD

### Milestone 1 Hide and show the accounts in network

- **Estimated duration:** 8 days
- **FTE:** 16h
- **Costs:** 960 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can hide and show all accounts using a menu entry. |
| 0c. | Testing Guide | Hiding and showing accounts in network will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests. If a testsuit already exists, this test environment will be extended.|
| 1. | GUI Menu | I will create a privacy menu, which contains two menu items to hide and show all accounts in network. Example: ![Privacy Menu](https://i.imgur.com/bOqR0c3.png) |  

### Milestone 2 Implement group assignation for accounts

- **Estimated duration:** 36 days
- **FTE:**  72h
- **Costs:** 4320 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how a group is created, renamed and an account can be assigned to this group. Furthermore, the override order of accounts network visibility will described, so that the user know exactly how to control the network visibility |
| 0c. | Testing Guide | Creating, renaming and association of accounts to groups will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests. If a testsuit already exists, this test environment will be extended.|
| 1. | Create and rename groups | After first installation of extension, there is no existing groups. Open the groups menu. Add a new group. A group shall be automatically selected, if it is created. Test it, if renaming and removing of groups works. Go to account properties menu and assign an account to this group. Export and import the account, to check if the group assignment of an account can be saved. Change the both visibility properties for a group: "Account visibility in GUI" and "Account visibility in network". Change the privacy level in privacy menu and see the changes. Test cases will be added after approval. ![Groups Menu](https://i.imgur.com/iG4hg1A.png) |  
| 2. | Remember groups and group associations of an account |  Export and import the account, to check if the group assignment of an account can be saved. Change the account visibility in network and GUI. Change the privacy level in privacy menu and see the changes. Test cases will be added after approval. ![Account Menu](https://i.imgur.com/a39ItOm.png)|  
| 4. | Override account network visibility |  If an account is assigned to a group with higher privacy level, current network visibility will be taken from group. It shall be decided, if the user can override the network visisbility of the group for a single account.  |  

### Milestone 3 Implement privacy level

- **Estimated duration:** 16 days
- **FTE:**  36h
- **Costs:** 2160 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how the privacy level is associated to a group and the privacy level can be set using privacy menu in GUI. |
| 0c. | Testing Guide | Setting the privacy level will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests. If a testsuit already exists, this test environment will be extended. The testing will cover both new properties of an account (visibility in network and in GUI). |
| 1. | Set privacy level | Privacy level can be changed in gui and defined as an enum : "low", "medium", "high". Default value for privacy level is "low". |  
| 2. | Change privacy |  If the user changes the privacy level in privacy menu, the visibility of accounts in network and gui will be changed based on the group properties. ![Privacy Menu](https://i.imgur.com/bOqR0c3.png) |  


### Milestone 4 Define an account as hidded

- **Estimated duration:** 8 days
- **FTE:**  16h
- **Costs:** 960 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how an account can be set as hidden in GUI, how the user can show the hidden accounts and can reset this property to make an account visible again. |
| 0c. | Testing Guide | Setting the account visibility will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests. If a testsuit already exists, this test environment will be extended. The testing will cover that some accounts from account list will be randomly set as hidden and those are not visible in the gui. This settings shall be saved, so after reset of GUI, the hidden accounts are still invisible |
| 1. | Override group property for account visibility in GUI | Default value for hidden account is false. If the user sets an account as hidden, this account will be immediately removed in gui. ![Account Menu](https://i.imgur.com/a39ItOm.png) |  
| 2. | Hide/Show hidden accounts | In the privacy menu, the hidden accounts can be made visible and their visibility can be resetted. This feature shows and hides account as hidden files in Windows OS. A hidden account is not visibile unless all hidden files are shown. ![Privacy Menu](https://i.imgur.com/bOqR0c3.png) |  


### Milestone 5 Set privacy level using an URL

- **Estimated duration:** 8 days
- **FTE:**  16h
- **Costs:** 960 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains, how an URL can change the privacy level. |
| 0c. | Testing Guide | Setting the privacy level using an URL will be fully covered by unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests. If a testsuit already exists, this test environment will be extended. In the tests, the privacy level will be set on 3 different values (low, medium, high) and both properties of privacy concept: visibility of accounts in gui and network will be checked. |  
| 1. | Set privacy level using an URL | The extension already features an access control to specific URLs. To add on that, the extension will switch to a defined privacy level when entering an URL. |  

### Milestone 6 Add i18n for Spanish and German

- **Estimated duration:** 4 days
- **FTE:**  8h
- **Costs:** 480 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Testing Guide | All translatable GUI elements will be checked in GUI for all new languages manually |  
| 1. | Add spanish and german GUI i18n | I will translate current GUI elements and all translatable (t<string>) elements in German and Spanish. All translations will be reviewed by native speakers (German: native Germany, Spanish: native Argentinian) |  



**How did you hear about the Grants Program?** : https://github.com/jonasW3F posted it on reddit