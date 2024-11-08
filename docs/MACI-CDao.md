# Minimal anti-collusion infrastructure 

- **Team Name:** CDao
- **Payment Details:**
  - **DOT**:      12ukKnLvKCbrS31TmaeGPHZSVoP4rsiaXbN9D6x4CJtspShD
  - **Payment**:  12ukKnLvKCbrS31TmaeGPHZSVoP4rsiaXbN9D6x4CJtspShD
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
 
## Project Overview :

### Overview

- This application is a response from the [anti-collusion infrastructure RFP](https://grants.web3.foundation/docs/RFPs/anti-collusion_infrastructure).
  
- Decentralized decision-making aims to be a  ACI(anti-collusion infrastructure) implementation for the Polkadot ecosystem.

- In certain situations where collective decision-making is required, it is a basic requirement to design a mechanism that effectively prevents any on-chain collusion, but, as explained in the RFP, existing voting systems, such as on-chain secondary funds, are likely to pass Collusion and bribery were exploited (see Vitalico's post on collusion).This proposal is intended to serve as a proof of concept that can help enable true anti-collusion infrastructure in the Substrate ecosystem.
  
- This is a regular pallet that can be incorporated into any substrate-based blockchain. 

- Our team's goal is to develop a super fair governance chain, and realize that all applications on the chain meet the requirements of decentralized decision-making (i.e. DDapp), and a basic property of decentralized decision-making is anti-collusion and avoid bribery.

### Project Details

- MACI use case 
  
  ![usecase][def]
  
- An overview of the technology stack to be used 
  
  pallet_cdao_decentralized_desion
  pallet_cdao_collective  

- The functions related are as follows:
  
  For organizational managers:
  
  Organizational management
  
  1.1 register_collective: Register a collective organization,
  
  1.2 remove_collective:   Delete collective organizations,
  
  1.3 reset_collective:    Modify collective organization,
    
  Member Management
  
  2.1 add_member:    Add a member;
  
  2.2 remove_member: Delete a member;
  
  2.3 reset_member:  To modify a member;

  Topic management
  3.1 add_issue:    Add voting topic,
  
  3.2 remove_issue: Delete voting topic;
  
  3.3 reset_issue:  Modify the voting topic;
  
  3.4 set_schedule: Voting time planning, including start time, disclosure time, decision time, feedback time, etc;
  
  3.5 set_share_snapshot: Snapshot of equity shares during the voting period;

  Proposal management
  
  4.2 exec_motion:       Execute the proposal;
  
  4.3 record_misconduct: Records improper behavior,
  

  For organizational members, the relevant functional functions are as follows:
  
  5.1 transfer_to:  Transfer of Shares
  
  5.2 commit:       To submit a commitment vote;
  
  5.3 reveal:       Reveal the voting value;
  
  5.4 confirm_decision:  confirms whether the decision result is fair;
  
  5.5 report_misconduct:  Report misconduct Behavior of Selected Nodes
_  
 
- PoC/MVP or other relevant prior work or research on the topic

  A specific case of implementing MACI is as follows:
  
  Assuming that five nodes A, B, C, D, and E have the right to create a new block (and therefore have the right to share the gas cost brought by the new block);
  Assuming that the five nodes have voting shares of 5, 40, 40, 5, and 10 respectively;
  
  Question: How to produce blocks and how to allocate gas costs? 
 
  The solution for super fair governance is as follows:
  
  Firstly, each node provides its own block production plan and the total gas that can be obtained from that plan (using bit commitment model, following the step of first committing and then revealing, to provide its own plan);
  
  Secondly, the decentralized desion system provides a solution.

  Assuming that A, B, C, D, and E have expected gas returns of 9, 7, 6, 5, and 4 tokens for the new block, respectively.
  
  The decentralized desion result is as follows:

  A is responsible for generating new block and paying 8.415 tokens to the other four nodes;
  B received a profit of 3.88 tokens,
  C received a profit of 3.48 tokens,
  D received a profit of 0.385 tokens,
  E received a profit of 0.67 tokens.

  The analysis of super fairness is as follows:
  
  E believes that the new block can generate 4 tokens and holds 10% of the shares,
  Therefore, in a fair state, 0.4 tokens should be distributed;
  
  Also, due to the fact that E actually received 0.67 tokens,Therefore, in E, the share of income per ticket that exceeds the fair value is (0.67-0.4)/10=0.027.

  Similarly,It can be analyzed that in B, C, and D, the income per ticket also exceeds the fair value by 0.027 tokens;

  Finally, analyze A:
  
  A believes that the new block can generate 9 tokens, with others holding 95% of the shares,
  Therefore, in a fair state, 8.55 tokens should be paid to others;
  
  Also, due to A's actual payment of 8.415 tokens, Therefore, in A, the share of income per ticket that exceeds the fair value is (8.55-8.415)/5=0.027.

  Overall,
  
  Decentralized decision-making systems allocate block allocation rights for new blocks,Each token holder can earn 0.027 more than their fair state earnings.
  
  Conclusion:
  
  In the above allocation scheme, regardless of how other participants collude,As long as the participants' own voting is honest, the final benefit will exceed their fair share.
  
  So, we have established a minimal anti-collusion infrastructure and implemented a mechanism to prevent bribery and collusion. 

 
- What your project is *not* or will *not* provide or implement 
 
  At present, it is not yet a universal anti-collusion system, and the next step of expansion can be used for voting governance on general and controversial issues.
  
  MACI now can only be applied to simple consensus mechanism processing, such as service provider, providing NFT equity division services for the collective co-creation of NFTs, determining which node is responsible for creating blocks and how to allocate gas fees for consensus nodes, etc. 
 
### Ecosystem Fit
 
- Where and how does your project fit into the ecosystem?
  
  Provide services for parachain or dapp in the form of pallets;

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  
  Any collective organization that requires the use of decentralized decision-making services, including DAO, Parachain, etc.

- What need(s) does your project meet?
  
  Provide a decentralized decision-making and voting service interface. The decision result meets the following requirements:
  
  1 Anti collusion, prohibiting the infringement of the rights and interests of minority opinion holders,
  
  2 Eliminate governance attacks,
  
  3 Avoiding the tyranny of the majority,
  
  4 Enhance members' enthusiasm for participating in governance.

- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
 
  The implementation of anti-collusion is based on super fair governance. The concept of super fair governance comes from super fair distribution. Super fair distribution is a mathematical model for solving cake distribution problems.
  Typical cake-cutting solutions are envy-free division and super fair distribution, two decentralized decision-making techniques based on the principle of unanimous consent, which aim to make everyone believe that their cake is bigger than that of others or that their cake is bigger than that of the average.
  
  Related papers can be referred to:
  
  1 Arnsperger C. Envy-Freeness and Distributive Justice[J]. Journal of Economic Surveys , 1994 , 8(2):155-186.
  
  2 Brams S J, Taylor AD. Fair Division: From Cake-Cutting to Dispute Resolution[J] Social Justice Research,1999,12(2).
  
  3 Liu Chao, Wang WenJie,Super Fair Distribution Based on Individual Preference[C],International Conference on Management Science And Intelligent Control(ICMSIC 2011), 2011-8:368-372.
  
  4 Chen Y , Lai J K , Parkes D C ,et al. Truth, justice, and cake cutting[J].Games & Economic Behavior, 2013, 77(1):284-297. 


- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  
  - There is no such pallet that supports Minimal anti collusion infrastructure. The reasons for the failure of these projects are as follows:
  -  
    The existing voting system, especially the voting system based on the principle of majority, will inevitably lead to damage to the rights of minority opinion holders and cannot avoid collusion among voters to obtain improper benefits.

    Using encryption methods to assist in voting decisions can only ensure that participants accurately do what they want to do, but cannot guarantee that the system does the right thing.
      
    The solution to the problem lies in changing the principle of majority voting to the principle of unanimous consent.In other words, any final decision must be unanimously agreed upon by all voters.
  
 
- Are there any projects similar to yours in related ecosystems? 
  
    There is no such projects in related ecosystems.


## Team : 

### Team members

- Name of team leader:    LIU Chao
- Names of team members:  Sam

### Contact

- **Contact Name:**       LIU Chao
- **Contact Email:**      liu_chao@aliyun.com 

### Legal Structure

- **Registered Address:**       NA
- **Registered Legal Entity:**  CDAO

### Team's experience

LIU Chao, Senior software engineer, More than 20 years of control software development experience in traditional fields, the proponent of the super fair distribution theory, and master's degree in computer application from the Graduate School of the Chinese Academy of Sciences，and the initiator of the CDao. 

Sam, MBA, Senior Project Manager, Data Analyst, with over 20 years of cross disciplinary experience Project experience, CDao initiator.

### Team Code Repos

- [ SuperFairGovernance ](https://github.com/SuperFairGovernance) 

## Development Status :  

  The application is in response to the [anti-collusion infrastructure RFP](https://grants.web3.foundation/docs/RFPs/anti-collusion_infrastructure). 

  Development status will be found over at [super-fair-chain](https://github.com/iunknow588/super-fair-chain). The anti-collusion infrastructure  will be implemented by several pallets components of the super fair chain.

## Development Roadmap :  

### Overview

- **Total Estimated Duration:**    3 months
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:**                 28,000 USD
- **DOT %:**                       50%

### Milestone 1 :  Pallet logic — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**                1
- **Costs:**              8,000 USD 
 
- Description: Pallet written in Rust for Substrate 2.0 based blockchains. The Pallet will use decentralized decision algorithms to implement the Minimum Anti-Collusion Infrastructure (MACI) mechanism. 

| Number | Deliverable    | Specification | 
| ------ | -----------    | ------------- |
| 0a.    | License        | Apache 2.0    |  
| 0b.    | Documentation  | Code documentation, API reference |  
| 0c.    | Tests          | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide, we will describe how to run these tests. |  
| 1.     | Usage example  |  Example of how to use the pallet inside code  |    


### Milestone 2  Pallet logic — Auxiliary functions features

- **Estimated Duration:** 1 month
- **FTE:**                1.5
- **Costs:**              10,000 USD 
- Description: Pallet written in Rust for Substrate 2.0 based blockchains. The Pallet will implement  member management and bit commitment voting process,together with decentralized decision pallets, it forms the Minimum Anti Collusion Infrastructure (MACI).   

| Number | Deliverable    | Specification | 
| ------ | -----------    | ------------- |
| 0a.    | License        | Apache 2.0    |  
| 0b.    | Documentation  | Code documentation, API reference |  
| 0c.    | test           | The code will have unit-test coverage (min.70%) to ensure functionality and robustness. In the guide, we will describe how to run these tests. |  
| 1.     |  Usage example | Example of how to use the pallet inside code.|   
| 2.     | Anti-collusion | Implement a mechanism to prevent bribery and collusion, leveraging encrypting votes potentially via Minimum Anti-Collusion Infrastructure (MACI) | 

### Milestone 3  Demo case —— Extended functionality features

- **Estimated Duration:** 1 month
- **FTE:**                2
- **Costs:**              10,000 USD 
  
- Description: Develop a simple ddapp, demonstrate the minimum anti collusion mechanism, and publish an article that explains the work done as part of the grant   

| Number | Deliverable    | Specification | 
| ------ | -----------    | ------------- |
| **0a.**| License        | Apache 2.0    |  
| **0b.**| Documentation  | Code documentation, API reference. |  
| **0c.**| test           | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness.| 
| **0d.**| Article        | We will publish an article that explains the work done as part of the grant. |  
| 1.     | Anti-collusion | Implement Minimum Anti-Collusion Infrastructure (MACI). | 
| 2.     | Voting Example | Integrate a basic voting example that test the mechanism.  | 
   


## Future Plans 

 First, we hope to extend the minimum anti-collusion infrastructure into a new consensus mechanism and build a super fair governance chain;
 
 Second, we will construct a general, super fair solution to the general dispute problem, i.e., a sufficient anti-collusion infrastructure;
 
 Finally, we look forward to the emergence of more and more decentralized decision-making applications (ddapps) on the super fair governance chain, which requires the joint efforts of community members. 

## Additional Information : 

**How did you hear about the Grants Program?** 

 Announcement by  OneBlock. 

**other additional information**  

- The paper about super fair governance is still under review.
  
- In polkadot-hackathon-2024 , We plan to build a super fair governance chain, but we are just planning, the workload exceeded expectations, so we need to redo the development plan. 


[def]: https://github.com/iunknow588/super-fair-chain/blob/a645a872f0e967b0cec23405cac5e70cbdfd852b/docs/maci.png
