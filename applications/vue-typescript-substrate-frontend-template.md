# Vue.js + TypeScript Substrate Front-End Template

- **Team Name:** Wunderbar Network
- **Payment Address:** 0x6F76BED39E9B9D57cAb4d9b81D65d2fa088cB68E (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/1601#issuecomment-1758669016) 

## Project Overview :page_facing_up:

### Overview

When building our app (The Wunderbar Network team is part of the **Substrate Builders Program**), we have used a very useful existing community template - the [Substrate Front End Template](https://github.com/substrate-developer-hub/substrate-front-end-template) from the Substrate Developer Hub. This template is built using React.js and JavaScript. We are proposing to create an _alternative_ version of this template, which would achieve three major outcomes:

1) Create an extendable template app, where developers can quickly connect and interface with the Substrate blockchain, using simple, clear and strongly typed examples, with a great baseline UX (which could provide a starting point for an entire new project).

This will build on top of what the current community template provides.

2) It would use Vue.js instead of React.js

According to [StackOverflow's 2022 Developer Survey](https://survey.stackoverflow.co/2022/), React.js is still undeniably in the lead when it comes to web framework popularity (according to the survey, **42.62%** of projects would be using React), however at **18.86%** Vue.js is still in the top 6 and is on the rise.

3) It would be written using TypeScript as opposed to JavaScript.

Even though most developers who code in TypeScript can work well with JavaScript and vice versa, the "conversion" is not always straight-forward, and despite JavaScript being around for a very long time (and seemingly not going anywhere), TypeScript is gaining rapidly in popularity and most greenfield projects would prefer TypeScript over JavaScript.

According to same survey mentioned above, JavaScript is the most commonly used technology (for the tenth year in a row!), however TypeScript is steadily closing in. Looking at the _loved vs. dreaded_ category though, the picture is very different - TypeScript is loved by **73.46%** of developers (and is near the very top of the list), whereas JavaScript achieved a score of **61.46%** to be placed in the middle of the table.

Overall, we believe that the combination of TypeScript's strong, static typing, and Vue's simplicity will together serve the purpose of providing an alternative source of very clear examples of how to interface with a Substrate Node from a modern front-end application, which should be of great value to the community.

### Project Details

The core technology stack is Vue 3 + Typescript, integrated with the [Polkadot.js](https://github.com/polkadot-js) set of packages. The app will deliver Vue3 native components and "composables" (reusable functions), that other developers will easily be able to integrate/build on top of.

The app will also provide a `Dockerfile` and container.

We have created a mockup design (in both dark and light mode), screenshots below (we also have a high-fidelity Figma file that can be provided upon request).

[![Dark version](https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQvkTiAXhC3_deoufEJbZY_inAtdJNv6bmvMUKTIsVvPG675sEu5I0Qr3EYxicwu3saj8hniDu3EwZqmFh6em-6DN9Vbw=w3024-h1612)](https://drive.google.com/file/d/1FfN8ZTCO2ihwZkBjdQ1dmW4yFqjT7pw3/view?usp=sharing)
[![Light version](https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOSkRaSUSZhS7u7rhuepjwBXzteL2GUqvRSx3AHpC31dCiRZOy4yXkkgJLPd0805t8Ivlbga1RX_xCPNUvCwR_f5YOJ0=w3024-h1612)](https://drive.google.com/file/d/1Q-bkWzzvEgMBJcdY2wTHfvEMRMBSphHV/view?usp=sharing)

Note that Wunderbar Network team is already using the same technology stack to consume Substrate blockchain features into the app we are building as part of the Substrate Builders Program, therefore we already have experience in both the core technology stack, and the Polkadot.js API packages.

This grant **will not** include future ongoing maintenance of the deliverables, unless agreed prior (i.e. smaller grants to periodically refresh/keep up to date), or additional feature requests after the agreed milestone deliveries. We will however address reported bugs and major security vulnerabilities.

### Ecosystem Fit

- **Where and how does your project fit into the ecosystem?**

This app provides a more robust and extendable example/template app compared to the current Substrate Front End Template app, which should be of great value to builders within the ecosystem, that are utilising the same or similar tech stack as ours.

- **Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?**

Primarily UI developers, although any builders interfacing with Substrate would find value. New users, hackathon teams, etc - would also be strong contenders to use this app as a template/baseline for what they are building.

- **What need(s) does your project meet?**

The combination of TypeScript's strong, static typing, and Vue's simplicity will together serve the purpose of providing an alternative source of very clear examples of how to interface with a Substrate Node from a modern front-end application, which should be of great value to the community.

- **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

The [Substrate Front End Template](https://github.com/substrate-developer-hub/substrate-front-end-template) from the Substrate Developer Hub. Our project aims to provide a more robust example app, providing all the benefits and advantages mentioned above.

## Team :busts_in_silhouette:

### Team members

- Dan Henton
- Mila Dymnikova
- Miloš Ranđelović

### Contact

- **Contact Name:** Dan Henton
- **Contact Email:** dan@wunderbar.network
- **Website:** [Wunderbar Network](https://wunderbar.network)

### Legal Structure

- **Registered Address:** Level 1, 320 Ti Rakau Drive, Burswood 2013, Auckland, New Zealand
- **Registered Legal Entity:** Greengate Global Ltd

### Team's experience

Wunderbar Network is a currently active participant of the Substrate Builders Program. We have extensive experience building Typescript + Vue.js apps, and interfacing with Substrate Nodes via API.

### Team Code Repos

- https://github.com/WunderbarNetwork

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/DanHenton
- https://github.com/Milarr
- https://github.com/MilosRandelovic

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/company/wunderbar-network/

## Development Status :open_book:

Not started yet, mockup designs/wireframes provided above.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  0.5 FTE
- **Total Costs:** US$ 30,000.00

### Milestone 1 - Foundations + Header + Account panels

- **Estimated duration:** 2 months
- **FTE:**  0.5
- **Costs:** US$ 10,000.00

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Foundations of a Vue.js app | A standalone Vue.js/Typescript app (built using Vite) |
| 2. | UI/UX elements | Common UI/UX elements from the provided mockup designs for the Header, Balance Transfers and Account Balances panels |
| 3. | Composables | Common composables to connect and interface with a Substrate node and all supported Web3 wallets |
| 4. | Header | Provide common Substrate node metadata and select an "active" account from a list of seeded and injected accounts |
| 5. | Account Balance List & Transfer | Provide the ability to see the balances (and perform a transfer) between both seeded and injected accounts |

### Milestone 2 - Runtime management, Event Panel and Pallet Interaction Composables

- **Estimated duration:** 2 months
- **FTE:**  0.5
- **Costs:** US$ 10,000.00

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Runtime management | The ability (via the header) to choose a Substrate Node connection and upgrade the runtime |
| 2. | Event panel | Display a panel which live-updates from global Substrate Node events |
| 3. | Pallet interaction composables | Composables that are able to call queries, extrinsics, RPCs and read constants |

### Milestone 3 - Complete Vue.js App

- **Estimated duration:** 2 months
- **FTE:**  0.5
- **Costs:** US$ 10,000.00

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). |
| 1. | Pallet Interaction Panel | A panel that can execute extrinsics, RPC calls or display constants, using mapped parameters dynamically generated for each call, and displaying live events as the transaction transitions state |
| 2. | Chain State Query Panel | A panel that can display the chain state, optionally providing parameters, and displaying live events as the transaction transitions state |

## Future Plans

We plan to promote this project within the development community. In case of significant Substrate/Polkadot.js API changes in the future, the app should be upgraded to reflect those (out of scope for the grant, as mentioned above).

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Via the Substrate Builders Program, networking with people from Parity/Web3 Foundation
