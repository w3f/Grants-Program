# Open Grant Proposal


* **Project:** Thunderous Network - An Industry-Drive Education Protocol. 
* **Webiste:** https://thunder.university
* **Whitepaper:** [Whitepaper](http://thunder.university/wp-content/uploads/2020/11/Whitepaper-draft.pdf)
* **Proposer:** https://github.com/kaicodex
* **Payment Address:** 1LBN9Y6BpSBAWLpsV1FVog9DiCxut2gmPA

## Project Overview :page_facing_up: 

### Overview

**Brief description of the project**

Reinvigorate the Master-Apprentice Model. Thunderous Protocol is the blockchain network implementing the industry-driven education protocol. Thunder.University will be the DApp using Thunderous protocol.

Tokenization with customized blockchain rules will push learning, teaching, mentoring and innovating experience to a new level. 

**Here are some typical use cases**
* Learn & Earn Back Model
  * A learner pays the full course fee, and will get half of that refunded after meeting certain criteria during the learning journey e.g. attendance is met.
* Sponsored Learning Model
  * A learner deposits the full course fee, the employer also deposits the full course fee for the learner. When the learner meets certain criteria set by employers, employer's charged, learner's deposit is refunded. Otherwise learner is charged, employer is refunded.
* Learn to Earn Model
  * Variation 1: A learner gets paid after meeting certain criteria. No upfront fee is required.
  * Variation 2: A learner gets paid after meeting each KPI of the whole criteria. No upfront fee is required.


**An indication of how you will integrate this project into Substrate / Polkadot / Kusama.**

* Create our own blockchain network with Substrate technologies.
* Develop the pallets/runtime modules for the education protocol.
* Interested to launch on Kusama, then conduct IPO to get a slot on Polkadot.

**An indication of why your team is interested in creating this project.**

* :point_right: Launched the Substrate Runtime Developer Program. We worked together with Parity Technologies and Acala Network. :100:We'd love to use this protocol to run the program one day. More http://ic.guru/substrate
* :point_right: Using industry-driven & apprentice-master approach at Industry Connect - a global tech education under our group.
* :point_right: Operating a successful education Saas software which gives us the rich knowledge in education management. More info http://aimy.io
* :point_right: Piloted the concept of the protocol with tokenization in a centralized solution, we've received amazing result. More info http://io.ic.guru/


### Project Details 

The whole project consists of two main components. This application focuses on the blockchain/protocol part.

* The blockchain and protocol, it is called Thunderous Network.
* The DApp implementing the protocol, it is called Thunder University.

Here are some creatives illustrating how the protocol will work

**Overview of Use Cases**


![Transactions overview](https://mvp.studio/wp-content/uploads/2020/11/Picture6.png)

**Master-Led Learning & Startup Journey**

![Master-Led overview](https://mvp.studio/wp-content/uploads/2020/11/Picture1.jpg)

**Employer-Led Learning Journey & Employment Journey**

![Employer-Led overview](https://mvp.studio/wp-content/uploads/2020/11/Picture3.jpg)

**How Verified Professional Skills Work**

![Verified Professional Skills](https://mvp.studio/wp-content/uploads/2020/11/Picture4.jpg)



### Ecosystem Fit 
As far as we know, our protocol would be the first education centric protocol in the ecosystem. 

We're confident to roll this out and have its pratical use so that we would bring good communities to the Polkadot/Substrate ecosystem.

Notably, 
* We've been operating a tech education business since 2013.
* We've been operating a Saas education management software since 2015.
* We've piloted some of the concept from the protocol since 2017 and received expected results.


## Team :busts_in_silhouette:

### Team members
* Kai Zhang
* David Kurniawan
* Allan Liang

Advisor & Supporters
* Ray Lu (Group Founder)
* Shannon Christie
* Justin Pham

### Team Website	
* https://thunder.university

### Legal Structure 
Industry Connect Ltd. 
B3, 34 Triton Dr. Rosedale, Auckland, New Zealand.

### Team's experience

Kai Zhang
* CTO at Aimy.io (A company under MVP STUDIO Group) - developed an education Saas software from inception to 100K active users with $US 35M transactions of invoices per year.
* Holding two degrees ie. economics and software developemt.
* Worked as tech mentor at Industry Connect.

David Kurniawan
* Full-stack Software Developer at Aimy.io (A company under MVP STUDIO Group)
* Postgraduate Dipoma in Computing.
* Extremely hard worker.

Allan Liang
* Senior Full-stack Software Developer at Aimy.io (A company under MVP STUDIO Group)
* Postgraduate Dipoma in Computing.
* Led the team created a payment product in NZ.

Ray Lu (Group Company Founder)
* Currently focusing Bit.Country development which was approved for the open grant.
* A Polkadot Ambassador based in New Zaland.
* Has hand-on coding experience over a decade. He wrote the first line of code in Basic when he was 15 on IBM-8086.
* Founded a Saas Startup from inception to growth. So far it has transacted USD$173,899,846 of bookings and serving 107,800 active users.
* Founded a Tech Edu Startup from inception to growth that has 300 new enrollments every year with a customer base across 8 countries.
* Bsc in Computer Science at Univerity of Auckland. (Top 1 in writing compiler subject)


### Team Code Repos
* https://github.com/thunder-university


### Team LinkedIn Profiles
* Kai Zhang - https://www.linkedin.com/in/kai-zhang-02676a77/
* David Kurniawan -  https://www.linkedin.com/in/david-kur/
* Allan Liang - https://www.linkedin.com/in/allan-liang-0a8555124/

Advisor & Mentor
* Ray Lu (Polkadot Ecosystem) - https://www.linkedin.com/in/codemeit
* Shannon Christie (Substrate) - https://www.linkedin.com/in/shannonchristie/
* Justin Pham (Substrate) - https://www.linkedin.com/in/justinphamit/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 1 Month
* **Full-time equivalent (FTE):**  2.5 FTE
* **Total Costs:** 1 BTC

### Implement Substrate Modules 
* **Estimated Duration:** 1 month
* **FTE:**  2.5
* **Costs:** 1 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation |This will be done at code level as well as updated whitepaper.|
| 0c. | Testing Guide | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. | 
| 1. | Substrate module: Program |Masters can manage programs in ths pallet. create_program, create_intake for program |  
| 2. | Substrate module: RuleEngine|Users can create rules, program can link to a rule created to determin the payment, refund and completeion criteria|
| 3. | Substrate module: Enrolment |Apprentice can enrol_program with fees, cancel_enrolment, master can terminate_enrolment. All the logic is determined by the rule set in the program.|  
| 4. | Substrate module: KPI |In the rule applied to the program, it requires KPI logs to determine if the criteria in the rule is met for the program. Once all the KPIs are met, the actions within the rule will be executed. Actions could be taking deposit, refund, partial refund, reward, certification etc. Program owners can also apply the rule to the program in this pallet.
| 5. | Substrate module: Angel | |  
| 6. | Substrate module: Program | |  
| 7. | Substrate module: Project | |  
| 8. | Substrate module: Cohort | | 
| 9. | Substrate module: SmartCV | |
| 10. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  
| 11. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |


### Community engagement

**Published Medium Article**

* [Introducing the Master-Apprentice model for the modern age!](https://thunder-university.medium.com/introducing-the-master-apprentice-model-for-the-modern-age-2aa1006e1e77). 

**Facebook Campaign**

* Concept Validation

![Thunder University](https://mvp.studio/wp-content/uploads/2020/11/20201115215850.png)


**Promo Video**
[![Watch Video](https://mvp.studio/wp-content/uploads/2020/11/thunder.jpg)](https://vimeo.com/442526152/aaa4ba2c40)


## Future Plans

After developing the protocol, we will start implementing the dapp. We are very interested to integrate with Kusama and Polkadot to share the secuirty. We will be interested to do crowd funding to connect with Polkadot.


## Additional Information :heavy_plus_sign: 

**What work has been done so far?**

* We've proved the model with centralized solution.
* We've created our branding and website.
* The white paper had been done and ready to make public.

**Are there are any teams who have already contributed (financially) to the project?**

MVP Studio, our group company, had invested all the resources into this project so far.

**Have you applied for other grants so far**

The other team (Bit.country) under our group had also applied for the open grant which had been approved.
Their team will offer us some mentorship along the way. Some of us worked in the same office based in Auckland, New Zealand.

