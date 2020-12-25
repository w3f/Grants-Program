# Open Grant Proposal

* **Project:** Quadratic Funding Pallet & GUI
* **Proposer:** MVP Workshop - https://github.com/MVPWorkshop
* **Payment Address:** bc1qltgppjfmvh7yldel9afntnmp358xxnqtxgw7rd 

## Project Description :page_facing_up: 

Please provide the following:
  * A brief description of the project.
  
    There are numerous crowdfunding platforms dedicated to boosting the development and growth of different blockchains and their communities. One of the most famous ones is Gitcoin.co, which has had a significant influence on the Ethereum ecosystem's development.
    Some of them are based on the quadratic funding mechanism, which turned out to be one of the fairest and most efficient ways to allocate funds to a sufficient number of projects that contribute to the ecosystem. 
  
    However, a similar solution hasn't been developed for the substrate-based blockchains. Thus, we want to create one. Moreover, we want to create a package that will include a quadratic funding pallet and GUI for the crowdfunding platform. Thereby we will offer a finished solution that anyone can use to collect and allocate funds among different projects within their ecosystems. 
  
    **Quadratic funding pallet**
  
    Once a pallet is merged into the substrate-based blockchain, it will enable the administrator to dedicate a specific amount of funds (e.g., from the treasury) allocated to a particular number of projects. The number of funds that are allocated for each funding circle (round) and its duration will be left to the admin to define. 
  
    **Graphical User Interface**
  
    GUI will support all the actions that are required to create, monitor, and fund projects.
    It will be open-sourced and accessible to anyone to use and adapt based on their needs. E.g., change colors, logo, or some other components and elements. 

    Graphical User Interface will have the following set of features:
    - As a user ISBAT submit a project application form so I can participate in the current funding round
    - As a user ISBAT receive donations so I can fund my project
    - As a user ISBAT have an overview of projects that are part of the current funding round as well as the ones that were part of the previous funding rounds
    - As a user ISBAT donate to a specific project so I can support it 
    - As a user, ISBAT receive funds from the community pool (e.g., treasury) at the end of the funding round (amount to be received is calculated based on the quadratic formula) 
  
  * An indication of why this project is good for the ecosystem.
  
    Tomorrow, there will be plenty of substrate-based blockchains, and it will be significantly easier for each of them to support different kinds of projects within their communities. It will also boost the development of those blockchains through fair and transparent funding of valuable initiatives based on community preferences.    
## Team :busts_in_silhouette:

* **Members:** Filip Pajic, Ivor Jugo, Marija Djurdjevic, Milos Novitovic. Other developers, product managers and designers from the MVP Workshop will be consulted.
* **LinkedIn Profiles:** 
    - [https://www.linkedin.com/in/pajicf/](https://www.linkedin.com/in/pajicf/)
    - [https://www.linkedin.com/in/milos-novitovic-9ab578b4/](https://www.linkedin.com/in/milos-novitovic-9ab578b4/)
    - [https://www.linkedin.com/in/mdjurdjevic/](https://www.linkedin.com/in/mdjurdjevic/)
    - [https://www.linkedin.com/in/ivor-jugo-6baa1a4a/](https://www.linkedin.com/in/ivor-jugo-6baa1a4a/)
* **Open-source Code Repos:** https://github.com/MVPWorkshop/electionr https://github.com/MVPWorkshop/lemon.email-dApp https://github.com/MVPWorkshop/badoom-ts
* **Website:**	https://mvpworkshop.co/
* **Legal Structure:** MVP Workshop doo, Cara Dušana 51 Zemun, Republic of Serbia
* **Team's Experience:** MVP Workshop is a blockchain product research and development studio with more than four years of experience building decentralized systems. We have developed a vast number of different Dapps and blockchain for our clients and us. Some of them are listed below: 
  * Celsius Network - https://mvpworkshop.co/wp-content/uploads/2019/07/MVP-Workshop-Celsius-Network-Case-Study.pdf
  * Swarm - https://mvpworkshop.co/wp-content/uploads/2019/08/MVP-Workshop-Swarm-Case-Study.pdf
  * Anchor - https://mvpworkshop.co/wp-content/uploads/2019/12/Anchor-Case-Study.pdf
  * Cere Network
  * Legaler
  * Aidonic

  We are a member of the Substrate Delivery Partners program, and few of our team members are Polkadot ambassadors. We hosted an online Substrate event - https://www.youtube.com/watch?v=dJLUO7s-n3M&t=2s
  
  Recently we finished another web3 grant that we had been working on - Substrate Blockchain Starter Kit - https://substrate-starterkit.mvpworkshop.co/#/. 
  
  We are also members of the Ethereum Enterprise Alliance and the Stellar Development Foundation.

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 2.5 months
* **Full-time equivalent (FTE):** 2
* **Total Costs:** 1.2 BTC

### Milestone 1

* **Estimated Duration:** 1.5 month
* **FTE:**  2
* **Costs:** 0.7 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Pallet Specification | A document that explains pallet functionalities and implementation details |  
| 2. | Develop the pallet | Write the rust module for the quadratic funding pallet |  
| 3. | Pallet tests | Write automated tests to ensure the pallet functions properly |  
| 4. | Product UX & UI design | Figma or Invision file with UI screen for the whole platform  |  

### Milestone 2

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Frontend development | Develop a frontend used to interact with a substrate-based chain that uses the previously developed pallet |  
| 2. | Documentation | Description of how to compile and run the Frontend application |  
| 3. | CI | Pipeline that builds and runs automated tests on the app |  
| 4. | Dockerization | The deliverable will be dockerized |  


### Long term plans and the target users of such an application

The ones that can directly benefit are the substrate-based blockchains and their communities. They can use this solution right away for supporting different projects and initiatives within their ecosystem by allocating their funds according to community preferences. 

Indirectly, this solution will enable individuals and organizations to contribute directly to the project they value and increase the project’s chances to receive a more significant portion of treasury funds at the end of each funding round.

Finally, this solution will significantly impact different initiatives, projects, and teams by funding their work and ensuring stable growth.

Additionally, we are willing to establish and maintain the first (Kusama) crowdfunding platform in the substrate ecosystem. Once the solution is developed, we will look forward to getting in touch with the Kusama team and proposing them to integrate a quadratic funding pallet into their blockchain and dedicate a portion of assets for funding projects initiatives within the Kusama ecosystem. Besides, the GUI that we will develop as a part of this grant will be used to submit, fund, and monitor projects and teams that want to apply. All the details may be discussed with the Kusama team once we have the pallet and GUI developed.
