# High-availability validator setup


- **Team Name:** Bright Inventions
- **Payment Address:** 0xD75dDC4Aa3618e1417c68E5Df79ef9D66E4B1Ed9, DAI
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):**  2 


## Project Overview :page_facing_up:

Validator leader selection via Raft consensus.
This is a follow-up to the previous version of the grant, that was up for discussion with the Parity development team. 

### Overview

Currently, the recommended setup is to have one active node per validator. The main advantage of this approach is that it removes the danger of equivocation, thus preventing slashing. The key drawback is the lack of a ready backup machine to takeover the responsibility of producing blocks, voting on finality etc. in case the primary one fails. 

The drawback can be somewhat remedied by having a backup node in sync, but without access to the session keys necessary for authoring blocks. The process of replacing the keys, however, is manual. Furthermore, the session keys cannot be replaced mid-session and this introduces a time delay for when the validator is active again.

### Project Details

Rather than relying on one validator node to perform the work, what if we had multiple nodes equally capable of taking part in consensus, yet still avoiding the risk of equivocation?

Since all our validator nodes are trusted and we don't worry about censorship resistance, we can leverage a leader-follower model to ensure high availibility. [Raft](https://raft.github.io/) is a good candidate - it offers a simple consensus mechanism, fault-tolerance and performance. It ensures only one leader is ever in charge of interacting with the network, while the followers simply receive the state updates and automatically replace the leader in case of a failure.

Following the feedback from the Parity developers team our solution is not tightly coupled with Substrate node as it adds too much complexity in the node. It should be implemented in a way that makes this optional and loosely coupled with the node. 

### Ecosystem Fit

The goal is to present a solution that would update the current recommended setup of one active node per validator and allow to use multiple nodes.

## Team :busts_in_silhouette:

### Team members

- Katarzyna Łukasiewicz
- Kasper Ziemianek
- Michał Graliński

### Contact

- **Contact Name:** Katarzyna Łukasiewicz
- **Contact Email:** katarzyna.lukasiewicz@brightinventions.pl
- **Website:** https://brightinventions.pl/

### Legal Structure

- **Registered Address:** ul. Jana Matejki 12, 80-232 Gdańsk, Poland
- **Registered Legal Entity:** Bright Inventions Sp. z o. o.

### Team's experience

Bright Inventions is a team of over 70 full-time onsite developers, project managers & UX/UI designers - experts in mobile and web applications, systems integration, IOT devices and Blockchain platforms.

We believe that building a software product is about people working together in a collective way. By offering complex support – mobile and web development as well as IT consultancy we try to eliminate roadblocks towards engaging clients as partners at every step of the process.

We support startups, digital agencies as well as medium to big businesses. We cooperate with startups, accelerators and incubators. Whatever the client profile is, we always aim to establish a satisfying partnership for both sides. Since 2012 we have built software for more than 40 businesses worldwide.

The team: 
- Michał - Rust Developer, for over 12 years he has been working as a C++ developer. In his career he participate in various projects, starting from the embedded devices, automotive, mobile games and ending on the financial systems. Right now he is focused on the blockchain technology.
- Kasper - Software developer with 10 years of experience. Former Java Developer who has recently switched to Rust. Around blockchain ecosystem since 2017.
- Kasia - she has been working with agile methods for over 10 years, both as a researcher and a practitioner. She believes in teamwork and a power of user centered mindset. With experience in leading international projects, she knows how to support and encourage timely and high quality deliveries.

Previous grants that the team members were involved in:
- BrightTreasury
- ZK-Snarks tutorial in Substrate

### Team Code Repos

- https://github.com/bright/substrate

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/bufta
- https://github.com/kziemianek
- https://github.com/mgralinski-bright

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/katarzyna-łukasiewicz-b473901aa/
- https://www.linkedin.com/in/kziemianek/
- https://www.linkedin.com/in/michal-gralinski-b464152/


## Development Status :open_book:

This grant proposal is a follow-up to a discussion that began in autumn 2022. Since then we managed to receive some required feedback from Parity development team and we continued to apply their suggestions in the span of these few months. It allowed us to already develop most of the original scope. 

## Development Roadmap :nut_and_bolt:


### Overview

The development of the specified goal will be broken into 3 milestones, lasting 4 weeks (M1), 3 weeks (M2) and 2 weeks (M3).


Definition of Done for each deliverable:
<ul>
<li>Unit tests passed</li>
<li>Code has been reviewed by peer</li>
<li>Acceptance criteria were met</li>
<li>Internal QA has been performed</li>
<li>Documentation has been written</li>
</ul>


At the end of each milestone:
- The deliverables listed for the given milestone have been implemented and the DoD criteria were met, allowing the user to perform the defined actions
- The functioning code has been pushed to the public repository, indicated in the proposal

## Deliverables :nut_and_bolt:

* **Total Estimated Duration:** 9 weeks
* **Full-time equivalent (FTE):** 1
* **Total Costs:** 25,000 DAI

### Milestone 1 - Block authoring, finalization  & liveness PoC

The goal of the first milestone will be adding a switch to the substrate codebase, which will conditionally allow block production, voting or sending `I'm online` message. We will achieve this by introducing a `PermissionResolver` trait. Only for the purpose of this milestone there are going to be two trivial implantations of this trait. First configuration will grant the validator permissions and the second one will not. At this stage we only want to verify if hardcoded conditional logic works well with the nodes with the same auth key but different configurations (permission granted/denied). For the testing purpose we will provide an additional option to the CLI, to run a validator with one of the pointed configurations.

* **Estimated Duration:** 4 weeks
* **FTE:** 1
* **Costs:** 12,500 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- | 
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide inline documentation.|
| **0c.** | Testing and Testing Guide | We will provide unit tests and the guidelines for running and testing it the scope. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Update substrate | Modify the substrate code to conditionally submit blocks/votes for finalised blocks (GRANDPA)/`I'm online` messages. |
| 2. | Update substrate client - cli | Modify the substrate code to conditionally grant or permit permissions. There will be option to run node in permission granted or permission denied mode). It will be useful to prove that permissioning works by running two nodes with same auth keys but different modes (permission granted/denied) |
| 3. | Integration test | A dockerised setup that allows to run network in setup described above. |

### Milestone 2 - External service for permission granting

The second milestone introduces a microservice which will test dynamic switching of the permission granting, during the validator's work. We will be able to test permission granting triggered whenever the block is produced, the vote is made on the finalized block (GRANDPA) and a message (`I'm online`) is sent for communicating liveness. Only the leader validator will be granted to run those actions. At worst, the author may miss a slot.

The service should contain only basic logic (e.g. return `true` for node that asked first and `false` for following ones).


* **Estimated Duration:** 3 weeks
* **FTE:** 1
* **Costs:** 7,500 DAI

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide inline documentation.|
| **0c.** | Testing and Testing Guide | We will provide unit tests and the guidelines for running and testing it the scope. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Basic service | Create a microservice that accepts connections from the node. | 
| 2. | Getting permission from microservice | Set up a custom node repository and write the `PermissionResolver` trait implementation for getting permission from the microservice. |
| 3. | Allow as optional | The choice of using an outside decision making agent for block submission should be configurable in the cli. |
| 4. | Clean up substrate code | Remove deprecated cli options. |
| 5. | Integration test | A dockerized setup that allows to run custom node networks and a microservice in order to show that the created solution works. |

### Milestone 3 - Raft based current leader selection

Replace the dummy microservice as an infrastructure component with a [TiKV](https://github.com/tikv/tikv) cluster used for leader selection. 
Each node should try to get authorship permission based on the KV (Key-value) state. Replace the current microservice client with a TiKV client and add corresponding logic.

* **Estimated Duration:** 2 weeks
* **FTE:** 1
* **Costs:** 5,000 DAI 

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide inline documentation.|
| **0c.** | Testing and Testing Guide | We will provide unit tests and the guidelines for running and testing it the scope. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Run the necessary Raft services | Set up a local dev infrastructure to run TiKV components in order to provide a distributed KV store. |
| 2. | Integrate a Raft client into the node | Replace the previous logic with a TiKV based one and modify configs to allow the TiKV client to connect to Placement Drivers. Placement Drivers (PD) is one of the components which stores metadata for the entire TiKV cluster. It is responsible for sending commands to the TiKV nodes. The minimum setup for PD is to manage three TiKV nodes. | 
| 3. | Integration test | A dockerised setup that allows to test the Raft consensus mechanism. | 



#### Leader selection process

![](https://i.imgur.com/ummEJOK.png)
Similar for rounds and sessions.
