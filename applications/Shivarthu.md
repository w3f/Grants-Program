# W3F Open Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/#pencil-process) on how to submit a proposal.

* **Project Name:** Shivarthu
* **Team Name:** Reaudito
* **Payment Address:** 0x7e30FB962f951ef78D901865F87DD036fc5aa946 (DAI)


> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Shivarthu: The blockchain-based decentralized governance system. Democracy is about fair and equal treatment of everyone in a country. But it becomes unrealistic to achieve when political parties have their conflict of interest, and leaders don’t have the expertise to make evidence-based policies and neither have the skill and manpower for solving problems that surround our society and ecosystem. The new fair democracy provides an elegant way of governance that separates the representative responsibility according to their specialization and can grow into any complexity. The governance is divided into various departments, and each department is supervised by representatives with expertise in the field. Voters are rational and need to have enough knowledge about the departments and the department problems, in order to vote for the selecting representatives of a department. The selection process of representatives is “difficult in and easy out”,
which allows only utilitarian actors to hold the responsibility, weeding out frivolous ones.  

https://shivarthu.reaudito.com/paper/Shivarthu_whitepaper.pdf 

Shivarthu will be build on Substrate.

Our democracy has many challenges, blockchain can provide a way to tackle those challenges by minimizing trust through game theory.  That made our team interested in creating this project.


### Project Details

Project Github link: https://github.com/amiyatulu/shivarthu


#### Departments:
The governance is divided into many departments like education, infrastructure, health, community service for every locality.
#### Expertise evaluation of representatives :
Voters and especially representatives need to have some experience or expertise in the department. Experience is required because education about the department leads to better decision making. 
Their experience is evaluated by schelling game.    
<img src="https://raw.githubusercontent.com/amiyatulu/shivarthu_mockups/main/Portfolio.svg" alt="portfolio" height="600"/>

#### Schelling Game:
In this project, the Schelling game is used for experise evaluation and review of projects. We use a modification of Schelling game named score Schelling game for fund distribution of projects.
Juror applies for making a decision like whether the required experience can be accepted or review quality of projects is acceptable. The probability of being drawn as a juror is proportional to the amount of tokens a juror stakes. The higher the amount of tokens he stakes, the higher the probability that he will be drawn as a juror. Also, jurors are drawn randomly. This protects the system from sybil attacks. 
We will use the substrate randomness trait for generating a random number.
https://substrate.dev/recipes/randomness.html
Then jurors will vote for their decision using the commit and reveal scheme. In the commit phase, they submit the hash of the vote string. Then, in the reveal phase, they submit the hash and the vote string. If the vote string matches with the hash, then the vote is accepted. 
If a juror's vote is coherent (more than 51% of other jurors agree) then they receive incentives, otherwise, incentives are deducted from the stake of the juror. 

#### Voting for selection of representatives:
The election is multi-winner approval.  We will use seq-phragmen of the substrate to select the representatives. Here, we will keep vote weight as reputation score (instead of stake), the amount of score they obtained through the participation of network. 
https://substrate.dev/rustdocs/v3.0.0/sp_npos_elections/fn.seq_phragmen.html   
Approval Voting:   
<img src="https://raw.githubusercontent.com/amiyatulu/shivarthu_mockups/main/Approval%20Voting.svg" alt="Approval Voting" height="600"/>   
Winners:   
<img src="https://raw.githubusercontent.com/amiyatulu/shivarthu_mockups/main/Winners.svg" alt="Winner" height="600"/>

#### Project application and acceptance:
The representatives are in charge of accepting the incoming projects for funding. 
People will submit their problems, for example, waterlogging in the locality.
Then experts all around the globe will submit the solution. The solution will be peer-reviewed to check its pros, cons, and suggest improvements that can be made. The review must meet the scientific guidelines. The solution can undergo revision through peer review feedback.
The solution provider and peer reviewer have to stake some money to receive incentives for their work. The solution and peer review will again be approved and disapproved through the shelling game after checking whether the content meets the quality as recommended in scientific guidelines. The solutions provider and reviewer will get the incentives if it gets approved, otherwise, some money will be cut from the stake. It creates pressure on the reviewer to maintain quality without noise.   
<img src="https://gateway.ipfs.io/ipfs/QmUTMU4ndH6TpjYZkuES78wDNbMKLr1d2eSjE6SMh4nmwJ/Problem_Solution.svg" alt="Problem Solution" height="600"/>   

The representatives of the department will select the most optimal solution.
After that persons wanting to take the lead to implement the solution will apply. Again representatives will select the best project leader from the application.   
  
<img src="https://gateway.ipfs.io/ipfs/QmUTMU4ndH6TpjYZkuES78wDNbMKLr1d2eSjE6SMh4nmwJ/Leadership.svg" alt="Leadership" height="600"/>      



### Money for projects:

People can either directly donate to the projects or to the department funding pool. Transaction fees of governance token are also collected and kept in the tax funding pool. 

The amount you can contribute to the department funding pool is calculated using the following formula.

Total Transaction Fees collected for 15 days = X
Total Stake fees for all users for 15 days = Y
Your stake = small y

You can contribute to the Funding pool = X/Y * y

Total transaction fees collected: 50000
Total stake = 10000
Your stake = 100

You can contribute to the funding pool = 50000/10000 * 100

Then, funding to the projects is distributed through the score schelling game. 

### Price discovery through Score Schelling Game:
You can rate the project from 1-5, without knowing what others are assigning. If the “mean” of all the product rating is near to your rating then the juror will get incentives, otherwise, juror incentives will be deducted. So, the juror will try to match the score with what others will assign based on information available rather than defecting by any arbitrary rating.
We can discover the prices of projects that need to be funded from a common funding pool.
Here is an algorithm:
1) When you submit a project, you need to provide details of the funding needed for work to be done.
You can’t provide a funding amount value of more than 4/5 power of the total funding pool amount.
e.g. If the total funding pool has $50000, you can’t assign a value larger than $5743
2) Then, we will have a percentage Schelling game to predict the price. That is, you can predict whether to increase or decrease the funding amount in percentage. Remember, it can’t be larger than (Total funding pool amount)^(4/5). Score values will remain from -10 to +10, -10 means 100% decrease, +10 means 100% increase
The range of -10 to +10 has a problem because the mean works best without extreme values. So, if someone gives -10, and others give 1, the mean result can get screwed due to the -10 outlier. So the trick is to remove outliers by computing the standard deviation. Remove all values more than one standard deviation away from the mean. Then, we calculate the new mean of the left values (it consists of 68.27% data of the set).
Code to calculate new mean:
https://gateway.ipfs.io/ipfs/QmdgL7ytRPSE8vyp5KBffaAjmhGRLusiPcEbt9VWFkgMjf

<img src="https://raw.githubusercontent.com/amiyatulu/shivarthu_mockups/main/Project%20score%20schelling%20game.svg" alt="Score Schelling Game" height="600"/>  


3) Then, we will do quality score voting Schelling game that checks the project meets the quality guidelines. The score range is 0-5
4) The amount of funding will be directly proportional to (Predicted Price) * (Quality Score/5*2)
Code:
https://gateway.ipfs.io/ipfs/QmcPfQFJKzozLMHFkAesDQc9n2CaEh6M8M4VWdsozgWRB9
The algorithm tries to meet the values of teal organization through reduced compensation inequality




### Ecosystem Fit


The project will be built on the substrate as a parachain or parathread. 

Other projects similar to it is gitcoin, but its not in Substrate / Polkadot / Kusama ecosystem. Gitcoin uses quadratic funding, but we will use score schelling game for allocation of funds. Gitcoin is for mainly blockchain projects, but our projects includes local community problems. 

## Team :busts_in_silhouette:

### Team members

* Amiya Behera (Developer)
* Soumya Ranjan Behera (Developer)
* Mahesh Sahoo (Advisor)

### Contact

* **Contact Name:**  Amiya Behera
* **Contact Email:** amiyatulu@gmail.com
* **Website:** https://shivarthu.reaudito.com/#/

### Legal Structure

* **Registered Address:** Charampa, Bhadrak, Odisha, India
* **Registered Legal Entity:** Reaudito

### Team's experience

Amiya Behera is a full-stack developer and has build many webapps and a few dapps. Has experience in substrate, rust, reactjs, python and also in building mobile apps in react native. 
Soumya Ranjan Behera is also a full stack developer with experience in reactjs, react native and python.



### Team Code Repos

* https://github.com/amiyatulu
* https://github.com/soumyababu
* https://github.com/amiyatulu/shivarthu







## Development Roadmap :nut_and_bolt:


### Overview

* **Total Estimated Duration:** 8 Months
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 20,000 DAI

### Milestone 1 Example — Implement Substrate Modules

* **Estimated duration:** 4 month
* **FTE:**  2
* **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  MIT  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user about the project |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains our project (what was done/achieved as part of the grant.) |
| 1. | Substrate module: Experience Evaluation | Schelling game for experience evaluation |
| 2. | Substrate Module: Approval voting| Selection of representatives through multi winner approval |
|3.| Reactjs UI for Experience Evaluation| Uploading evidence of experience for the department using IPFS, UI for commit and reveal voting for schelling game and interaction of UI with substrate |
|4.| Reactjs Approval Voting UI| Userfriendly UI for voting the representatives where their profile is shown |




### Milestone 2 — Additional features

* **Estimated Duration:** 4 month
* **FTE:**  2
* **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  MIT  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user about the project |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains our project (what was done/achieved as part of the grant.) |
| 1. | Substrate module: Peer review system | Reviewing the projects using schelling game | 
| 2. | Substrate module: Fund allocation | Allocating the fund using score schelling game | 
| 3.| Reactjs UI for peer review system and Fund allocation | User friendly UI for reviewing the projects, schelling game voting interface, and fund allocation |
| 4. | Search Engine| Offchain search engine for project discovery and finding representatives |




## Future Plans

Short-term:
 Improve the ideas with discussing with community
 Increase social media reach
 Write the source code
 
Long-term:
    Onboard people into the app, and improve it taking feedback from the community.
    Enhance the app, provide upgrades when required.  


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 
