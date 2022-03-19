# W3F Grant Proposal

- **Project Name:** Privacy Enhancement for Polkadot Extension
- **Developer:** Ender Dogan
- **Payment Address:** Ethereum: 0xD4130B0F66F1a621A901888B6e239906D1B680Ee
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

The project description, deliverables and Milestone 1 is described here: https://github.com/w3f/Grants-Program/blob/master/rfps/privacy-enhancement-polkadot-extension.md

### Project Details

As a newcomer to Polkadot environment, i was able to create chrome extension and make some changes to work in the development environment. I was able to extend the global settings but i had to change the polkadot/ui-settings package. I didn't want to change so far but wanted to see first result so i used an existing button to see, if i can show/hide the address of an account. It was possible and i made a gif of it: https://imgur.com/a/qsfhD0z

I would make GUI mock-ups and a concept of change in the code hierarchy (interfaces, etc) before starting with the tasks of Milestone 1. In my professional projects, i like to use v-modell but i would like to present my solution and proposal to stakeholder before i start coding.

### Ecosystem Fit

As described in RFPS, the development will enhance the privacy of the Polkadot Extension.

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

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/nodi-andy
- No open source professional project. Only hobby projects which are targetted for educational purposes (children between 9-14)
- TypeScript is used in this project https://github.com/nodi-andy/noditron. Forked from shapez.io and the goal was to create a gamefied programming language. A demo is running on www.noditron.com

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

The rest 30h (1800$) shall be used for architectural concepts and/or meetings. The total funding budget is set on 9600 $.

Technical development might force that the task order and so the delivery date of order can be shifted.

20% of development time shall be used for testing and documentation.

## Validation of deliverables

The delivered code, libraries or UI design, shall be approved by the stakeholder based on following criteria.

Tests shall be executed in chrome and firefox extensions in privacy mode without any other extensions installed.

| Number        | Test (Verification) | Approval (Validation)   | Documentation |    Concept    |
| ------------- | -------------       | -------------           | ------------- | ------------- |
| 1. |  Testsuit: Test_101 Call a function to set address visibility on true. Check GUI. Test_102: Call a function to set address visibility on false. Observe GUI changes.  Manual tests: Select the menu item "Hide all addresses" and see the change of the visibility. Select the menu item "Show" all addresses and see the change of visibility.  |  Check the completeness of verification tests, execute a manual tests, approve that the button complies with generic GUI design and user experience. Record the chrome version and commit hash in review protocoll.                  |  The documentation shall introduce the privacy menu in GUI and describe that the visibility of all accounts are affected by the buttons click funtion.                       |    ![GUI Proposal](https://imgur.com/a/avJXaGL)          |
| 2. |                                |                     |                         |               |
| 3. |                                |                     |                         |               |
| 4. |                                |                     |                         |               |
| 5. |                                |                     |                         |               |



## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** : https://github.com/jonasW3F posted it on reddit