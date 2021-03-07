# W3F Open Grant Proposal

* **Project Name:** Treasury pallet Bug-bounty
* **Team Name:** DotHacks team
* **Payment Address:** 0xf48cb0f783a79bac37abe8f76edcf80ba78b1f83(DAI)

## Project Overview :page_facing_up: 

In this Open Grant Application, we want to propose a solution for cybersecurity response on Polkadot ecosystem. In specific, we propose to extend the substrate Treasury pallet by adding a new spending instrument named Bug-bounty. Thus the council will be able to address cybersecurity issues in a more transparent, fair, and privacy-protected manner, and improve the efficiency of treasury funds usage at the same time.

### Overview

The blockchain world has been suffering from vulnerabilities, e.g.,

1. in centralized blockchain applications: MtGox hack (https://en.wikipedia.org/wiki/Mt._Gox),
2. in cryptography: double-spending in Bytecoin due to small subgroup attack (https://jonasnick.github.io/blog/2017/05/23/exploiting-low-order-generators-in-one-time-ring-signatures/),
3. in smart contracts: The DAO hack (https://en.wikipedia.org/wiki/The_DAO_(organization)).

Moreover, since 1) the market value involved is massive, 2) there is still lacking clearly defined or practical legal protections for cryptocurrency users, and 3) the techniques used in blockchains are still emerging and keeping evolving, which makes blockchain security specialists become more desired, the security concerns of blockchain systems become significantly crucial.

However, there is no current Security Response Center (SRC) existing in the Polkadot ecosystem to mitigate the loss caused by blockchain vulnerabilities.

In this RFP, we want to propose a solution for cybersecurity response based on the Substrate Treasury pallet, which has funds controlled by the Council. This idea will be implemented through a new spending Instrument called Bug-bounty, which is independent of the current existing instrument of Proposal, Tipping, and Bounty. After implementation, we will merge the code upstream to the Substrate repo's Treasury pallet. 

Since Substrate is becoming more widely recognized and used, by implementing the Bug-bounty Instrument, the Polkadot Council, or any other Substrate blockchain Council, will be able to create a private cybersecurity response center respectively, by publishing bug-bounty programs, receiving vulnerability reports, and issuing bug-bounty reward for its own assets through the Treasury pallet. 

### Project Details 

Conventional SRC and crowdsourced bug-bounty solutions suffer from limitations including:

* insufficient privacy protection for whitehats
* insufficient privacy protection for vulnerability reports
* centralized arbitration mechanism

By contrast, our solution will address cybersecurity response issues in a more transparent, fair, and privacy-protected manner:

* Whitehats can choose to submit reports anonymously.
* Vulnerability reports are encrypted and point-to-point transmissed between the whitehat and the curator.
* Use randomness for the curator election to improve arbitration fairness and vulnerability report privacy.

In specific, Bug-bounty works as follows:

**Fig.1 Bug-bounty program workflow**(from the Council's perspective)

![](https://github.com/dothacks/dothacks.github.io/raw/main/assets/treasury_council.png)


**Fig.2 Bug-bounty program workflow**(from a Curator's perspective)

![](https://github.com/dothacks/dothacks.github.io/raw/main/assets/treasury_curator.png)

**Fig.3 Bug-bounty program workflow**(from a Whitehat's perspective):

![](https://github.com/dothacks/dothacks.github.io/raw/main/assets/treasury_whitehat.png)

#### Storage and Interface

Data structure for the Bug-bounty program to be stored: 

* bug-bounty description - Description of the bug-bounty program, including the assets available for penetration test, vulnerabilities assessment rules and corresponding bounty award and other information.
* bug-bounty count - Number of bug-bounty reports that have been made.
* bug-bounty report - A map for storing vulnerability reports, which includes key and value. Key is the index of report, and value is detail information of the report contains the whitehat account, curator account, encrypted report, report status and other information.
* curator list - A set of stored pre-agreed curators with qualification of bug-bounty program. The curator election will be conducted in this list.

The Bug-bounty Instrument will expose the following dispatchable functions:

Functions of the Council

* configure_program - Initiate/modify/disable/enablethe bug-bounty program for configuration.
* add_curator - Add curators to the curator list.
* delete_curator - Delete curators from the curator list.
* send_rewards - Send rewards to the curator and the whitehat respectively.

Functions of the Whitehat

* apply_bug_bounty - Apply for the bug-bounty with a few deposits, meanwhile a curator will be randomly elected and get matched. (The purpose of deposit is to improve quality of vulnerability reports submitted, the required amount can be adjusted by the configuration trait.）
* submit_report - Encrypt the detailed vulnerability report information with curator's Public Key, then upload them to IPFS (as one of the solution). Then the url will be delivered to the matched curator.

Functions of the Curator

* determine_report - Decrypt the vulnerability report content, then make a determination about the validity and value of the detailed report information.

### Ecosystem Fit 

There is no current Security Response Center or Bug-bounty platform existing in Polkadot ecosystem.

## Team :busts_in_silhouette:

### Team members
We would like to keep our team information private.

### Contact
* **Contact Name:** DotHacks team
* **Contact Email:** dothacks.official@protonmail.com

### Legal Structure 
We would like to keep our team information private.

### Team's experience
We would like to keep our team information private.

### Team Code Repos
https://github.com/dothacks/substrate

### Team LinkedIn Profiles
None.

## Development Status :open_book: 
In the communication with w3f, we agreed to implement private SRC on Polkadot by extending the Treasury pallet. https://github.com/w3f/Open-Grants-Program/pull/249#issuecomment-779251198

## Development Roadmap :nut_and_bolt: 

### Overview
* **Estimated Duration:** 4 weeks
* **FTE:**  3
* **Costs:** $9,000 DAI

### Milestone 1
* **Estimated Duration:** 4 weeks
* **FTE:**  3
* **Costs:** $9,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation with detailed Introduction of the Bug-bounty spending Instrument APIs. |
| 1. | Storage, Events and Errors | We will complete the design of data structure in storage of the bug-bounty program. Meanwhile, design of the events when the transaction succeeded, and errors when transaction failed for the bug-bounty process will also be completed. |  
| 2. | Dispatchable Functions | We will develop dispatchable functions to achieve the complete process of the bug-bounty program workflow. |  
| 3. | Weight information | We will design weighting to quantify the resources consumed while executing transactions, so that appropriate fees can be applied. |  
| 4. | Unit tests | The code will have proper unit-test coverage to ensure functionality and robustness. | 

## Future Plans

1. Continue to update functions and the corresponding code of our private SRC solution based on the Treasury bug-bounty instrument.
2. Build DotHacks, a public crowdsourced vulnerability platform based on Polkadot substrate. Meanwhile we will formulate Vulnerability Assessment Standards for the blockchain industry, based on CVSS (Common Vulnerability Scoring System) and a large amount of real blockchain vulnerabilities cases collected. 
3. We will try to build a world-influential cybersecurity community that will attract global whitehats, security agencies and vendors to join Polkadot and DotHacks. We want to make DotHacks the world-leading vulnerability platform in the nearest future.


## Additional Information :heavy_plus_sign: 

* What work has been done so far?
    * Design of Private SRC solution on Palkadot Treasury pallet, and architecture of the public crowdsourced vulnerability platform DotHacks on Substrate.
* Are there are any teams who have already contributed (financially) to the project?
    * No.
* Have you applied for other grants so far?
    * No
