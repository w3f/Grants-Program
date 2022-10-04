# High-availability validator setup


* **Proposer:** Bright Inventions
* **Projects you think this work could be useful for:** Validators
* **Payment Address:** 0xDDcfd2a1D4Bcf058cf2828eb78dB59b300e80F8d

## Project Description :page_facing_up: 

### Summary

Validator leader selection via Raft consensus.

### Present state

Currently, the recommended setup is to have one active node per validator. The main advantage of this approach is that it removes the danger of equivocation, thus preventing slashing. The key drawback is the lack of a ready backup machine to takeover the responsibility of producing blocks, voting on finality etc. in case the primary one fails. 

The drawback can be somewhat remedied by having a backup node in sync, but without access to the session keys necessary for authoring blocks. The process of replacing the keys, however, is manual. Furthermore, the session keys cannot be replaced mid-session and this introduces a time delay for when the validator is active again.

### Solution

Rather than relying on one validator node to perform the work, what if we had multiple nodes equally capable of taking part in consensus, yet still avoiding the risk of equivocation?

Since all our validator nodes are trusted and we don't worry about censorship resistance, we can leverage a leader-follower model to ensure high availibility. [Raft](https://raft.github.io/) is a good candidate - it offers a simple consensus mechanism, fault-tolerance and performance. It ensures only one leader is ever in charge of interacting with the network, while the followers simply receive the state updates and automatically replace the leader in case of a failure.

## Team 

### Team members
- Michał Graliński - Rust Developer
- Kasper Ziemianek - Rust Developer
- Katarzyna Łukasiewicz - Project Manager

### Contact
* **Katarzyna Łukasiewicz:** 
* **Contact Email:** katarzyna.lukasiewicz@brightinventions.pl
* **Website** https://brightinventions.pl/

### Legal Structure

Bright Inventions is a limited liability company based in Gdansk, Poland. Company was founded in 2012 by Daniel Makurat and Michał Łukasiewicz.


Full address details:


Bright Inventions Sp. z o. o.

ul. Jana Matejki 12

80-232 Gdańsk, Poland

info@brightinventions.pl

www.brightinventions.pl

Company registration number: 0000687244

VAT EU: PL5842761920

REGON: 367805647 


Bright Inventions is a team of oveer 70 full-time onsite developers, project managers & UX/UI designers - experts in mobile and web applications, systems integration, IOT devices and Blockchain platforms. 


We believe that building a software product is about people working together in a collective way. By offering complex support – mobile and web development as well as IT consultancy we try to eliminate roadblocks towards engaging clients as partners at every step of the process. 


We support startups, digital agencies as well as medium to big businesses. We cooperate with startups, accelerators and incubators. Whatever the client profile is, we always  aim to establish a satisfying partnership for both sides. Since 2012 we have built software for more than 40 businesses worldwide.

### Team's experience
- Michał - Rust Developer, for over 12 years he has been working as a C++ developer. In his career he participate in various projects, starting from the embedded devices, automotive, mobile games and ending on the financial systems. Right now he is focused on the blockchain technology.
- Kasper - Software developer with 10 years of experience. Former Java Developer who has recently switched to Rust. Around blockchain ecosystem since 2017.
- Kasia - she has been working with agile methods for over 10 years, both as a researcher and a practitioner. She believes in teamwork and a power of user centered mindset. With experience in leading international projects, she knows how to support and encourage timely and high quality deliveries.

### Team Code Repos
 https://github.com/bright/substrate

### Team LinkedIn Profiles
- https://www.linkedin.com/in/michal-gralinski-b464152/
- https://www.linkedin.com/in/kziemianek/
- https://www.linkedin.com/in/katarzyna-łukasiewicz-b473901aa/

## Development Roadmap 
The development of the specified goal will be broken into 3 milestones, lasting 3 weeks (M1), 4 weeks (M2) and 5 weeks (M3).


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

* **Total Estimated Duration:** 12 weeks
* **Full-time equivalent (FTE):** 1
* **Total Costs:** 30,000 DAI

### Milestone 1 - Block authoring PoC

The main goal of the PoC is to add a switch to the substrate node which allows it to decide whether it's a valid block producer or not (i.e. to execute the BABE/Aura protocol).
At the begining of the slot nodes will try to get a permission for block production. Once permission is granted it cannot be changed. It means that the node with permission cannot be replaced by another during the slot (in case of failure). At worst author may miss a slot.

The service should contain only basic logic (e.g. return `true` for node that asked first and `false` for following ones).

* **Estimated Duration:** 4 weeks
* **FTE:** 1
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Basic service | Create a microservice that accepts connections from the substrate node. | 
| 2. | Microservice logic | Hardcoded logic for deciding which node is the leader. |
| 3. | Update substrate client | Modify the substrate code to reach out to a remote service for receiving permission (or not) for submitting blocks. |  
| 4. | Allow as optional | The choice of using an outside decision making agent for block submission should be configurable in the cli. |
| 5. | Integration test | A dockerised setup that allows to test the developed PoC. | 

### Milestone 2 - Block finalization & liveness PoC

Similar to the previous milestone, but concerning other validator jobs, namely voting on finalised blocks (GRANDPA) and communicating liveness (`I'm online`). At the beggining of each "round", nodes will try to get permission for block finalisation. Only one node will be granted to vote in the "round". Diuring the "session", nodes will request for permission to send `I'm online` message. Only one node will be granted to send `I'm online` messages during the "session".

* **Estimated Duration:** 3 weeks
* **FTE:** 1
* **Costs:** 7,500 DAI

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Update substrate client - finalisation | Modify the substrate code to conditionally submit votes for finalised blocks (GRANDPA). |
| 2. | Update substrate client - I'm online | Modify the substrate code to conditionally submit `I'm online` messages. |
| 3. | Update microservice | Extend microservice logic to store "rounds" and "sessions". |

### Milestone 3 - Raft based current leader selection

Replace the dummy microservice as an infrastructure component with a TiKV cluster used for leader selection. 
Each node should try to get authorship premission based on the KV state. Replace current microservice client with TiKV client and add corresponding logic.

* **Estimated Duration:** 5 weeks
* **FTE:** 1
* **Costs:** 12,500 DAI 

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Run the necessary Raft services | Setup local dev infrastructure to run TiKV components in order to provide distributed KV store. |
| 2. | Integrate a Raft client into the node | Replace previous logic with TiKV based one and modify configs to allow TiKV client to connect to provided Placement Drivers. | 
| 3. | Integration test | A dockerised setup that allows to test the Raft consensus mechanism. | 
| 4. | Monitoring | Feed the Raft consensus data into Prometheus and display basic info in Grafana.


#### Leader selection process

![](https://i.imgur.com/ummEJOK.png)
Similar for rounds and sessions.