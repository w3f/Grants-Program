# W3F Open Grant Proposal

* **Project Name:** pantera 
* **Team Name:** PTG
* **Payment Address:0x008199029f508335e08AB096d9A011E5269E3FE5

## Project Overview ：the trace and the management of the DATA of waste sorting in environmental protection

### Overview

Please provide the following:

* this is the project in the waste sorting. 
* the dpt of environmental in china needs to supervise the next level , and master & trace the data of end users， to improve the terrible situation now and Provide the evidence
* In separate regions, we will use different side chains for data supervision, and implement cross chain in the whole region to solve the problem of data island and cross chain traceability, and do data interaction in cross chain
* Before this, it was a topic in the University. Then, according to the guidance of the policy, we found that there are demands in all regions, and we can use the structure of Boca substrate to store and trade cross link data, which is very attractive.
### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

* Mockups/designs of any UI components：https://github.com/pantera612/pantera-project-UI
* Data models / API specifications of the core functionality:•Use standard JSON format 
* An overview of the technology stack to be used:•The substrate-node-template and rust technology stack will be used for development
* Documentation of core components, protocols, architecture, etc. to be deployed:https://github.com/pantera612/wasting-sort-/blob/main/Documentation%20of%20core%20components%2C%20protocols%2C%20architecture.docx
* PoC/MVP or other relevant prior work or research on the topic:  not yet, we did some reseach on th topic, we have some questions wiht different dpt and finaly user face to face way and 90% user have intrested in this. we did not make an records based on these questions. 
* What your project is _not_ or will _not_ provide or implement
  * we will finish the project and open for public. 

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

* Where and how does your project fit into the ecosystem? this project fit into substrate
* Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)? our own user base 
* What need(s) does your project meet? it is the tool to help the envir dpt to manage and trace the data, and Research user habits based on data
* Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  * If so, how is your project different?
  * If not, are there similar projects in related ecosystems? no

## Team :

### Team members

* Name of team leader： kenny wong; 
* Names of team members ：chengcheng cui, 
* part time members: shuxian Huang, shusheng wang, lingyuan Xi, Tianfeng Xu, Peiwen Zhen 

### Contact

* **Contact Name:** kenny wong
* **Contact Email:**7305242@qq.com
* **Website:envir-link.com 

### Legal Structure

* **Registered Address:** south of tongchen road 355，hefei， anhui，china 
* **Registered Legal Entity:** Hefei Fengmao Information Technology Co., Ltd

### Team's experience

kenny wong is the leader of the group. have 20 years experence for differen project. including 5 years for software project, the last project named AR-TIME, for the AI exchange between photograph and VIDEO. based on the wechat but cannot have url here. 
Cui Chengcheng has worked in Ericsson, Ant Financial and other companies for more than 7 years of software development experience. Among them, more than 3 years of blockchain development experience participated in the underlying development of AntChain, and more than two years of ai voice development experience, leading wiz's Talkbot Project development
shuxian Huang, shusheng wang, lingyuan Xi, Tianfeng Xu, Peiwen Zhen are students in the hefei university of technology. have good technology in UI Desgin, environmental, economic model, computer languange, and physical trade. with good level in compitition.  

### Team Code Repos

* https://github.com/pantera612
* https://github.com/xinzuicheng
* 

### Team LinkedIn Profiles

* https://www.linkedin.com/in/%E5%86%A0-%E7%8E%8B-7408aa166/


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

* links to improvement proposals or [RFPs](https://github.com/w3f/General-Grants-Program/tree/master/rfp-proposal) (requests for proposal),
* academic publications relevant to the problem,
* links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
* references to conversations you might have had related to this project with anyone from the Web3 Foundation,
* previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE): 7.25  
* **Total Costs:** $29,000

### Milestone 1  — Implement Substrate Modules

* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 12,000 USD
* total 7 staffs, 5 full time job and 2 part time. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article/Tutorial | We will publish an article/tutorial/workshop that explains how the program work and how the ending customer use it (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)
| 1. | Substrate module: X | We will create a Substrate module that will for Data Entry.|  
| 2. | Substrate module: Y | We will create a Substrate module that will for User authority management|  
| 3. | Substrate module: Z | We will create a Substrate module that will for administar authority management |  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a wa once we have date form X  to Y, and x (for example) write the data on x chain, y will received it automaticly, and then y analyzed the data. will show the result to z, based on the final result, Z will show yes or no to X, and give the benefits or punishement.  |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |



### Milestone 2 Example — Implement Substrate Modules

* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 12,000 USD
* * total 7 staffs, 5 full time job and 2 part time. 


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article/Tutorial | We will publish an article/tutorial/workshop that explains how the program work and how the ending customer use it (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)
| 1. | Substrate module: X | We will create a Substrate module that will for data analysis|  
| 2. | Substrate module: Y | We will create a Substrate module that will for User/adminstrater interaction and creat token|  
| 3. | Substrate module: Z | We will create a Substrate module that will for destroy the token or exchange|  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a wa once we have date after analysied form X  to Y, and y will send token to X, anfter X exchanged the token and usd the protocal, z will chenck the token which should be burned and destroy the token|  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |


https://github.com/pantera612/pantera-project-UI/blob/main/Technical%20documents.docx

...
### Milestone 3 Example — Additional features

* **Estimated Duration:** 1 month
* **FTE:**  1.25
* **Costs:** 5,000 USD
* total 2 full time and 2 part time. 
* 
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article/Tutorial | We will publish an article/tutorial/workshop that explains how the program work and how the ending customer use it (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)
| 1. | We will test our all node to make sure all are works and find out the problem to fix. |  
| 2. | we will improve something based on the feedback from our user|  
| 3. | we will do the Security Assessment|  
| 4. | we will start the whole project on the chain and internet for public|

## Future Plans

Please include here

* we need more full time members and we need to do some testing in some subdistrict where people live. and even we do testing of different API with AI hardware. 
* we would to conver 20% even 50% of the city and then the whole province to make sure we have more and more data to analysied, and we will have AI hardwear and AI photograph recognition algorithm to bring a testing standard to the public. 


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  Web3 Foundation Website / personal recommendation / substrate group had been in our universtiy (hefei university of technology)

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

* we have done some UI 
* we spend our own money 
* we did not applied for any Previous grants 
