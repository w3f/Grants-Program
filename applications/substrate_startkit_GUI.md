# Substrate startkit GUI

* **Proposer:** MVP Workshop - https://github.com/MVPWorkshop
* **Payment Address:** bc1qltgppjfmvh7yldel9afntnmp358xxnqtxgw7rd 

## Project Description :page_facing_up: 

Please provide the following:
  * A brief description of the project.
  
  The idea is to create a GUI where users can quickly select the runtime pallets, enter their genesis configurations, and satisfy their dependencies without forking the template repository and writing any RUST code. The application would add/remove the necessary files and set configurations and dependencies in the codebase behind the scene. In the end, the user will generate a code base with all the components.

  The GUI should have the following features:
  
    * Select (drag&drop) pallets
    * Add/Remove pallets from codebase
    * Generate good-enough default configs or enter custom configuration
    * Change pallet dependencies
    * On submit - create Github repo with commit (user enter Github creds)
    * Indicate connected pallets that to go with each other
    * Prevent users from building blockchains that won't compile
    * Pre Built solution for common patterns
    * Tooltips with explanations and links to documentation
 
  We are considering going with a drag&drop solution. Of course, our design team will come up with the most consistent UX flow during the first phase of the project.

  * An indication of why this project is good for the ecosystem.
  
  It would make life easier for everyone who wants to kick off their Substrate blockchain and would lower the entry barrier for both experimentation and development with Substrate. Also, the application will have a clear educational purpose for beginners to understand the power of runtime pallets and all the features that you can get just by adding them to your blockchain.
## Team :busts_in_silhouette:

* **Members:** Djordje Stevanovic, Panto Andjelic, Milica Spasojevic, and other developers/personnel at MVP Workshop if needed to help and/or consult.
* **LinkedIn Profiles:** https://www.linkedin.com/in/djordje-stevanovic-43b61091/, https://www.linkedin.com/in/panto-andjelic-088583100/, https://www.linkedin.com/in/milica-spasojevic-2a648b40/
* **Open-source Code Repos:** https://github.com/MVPWorkshop/electionr https://github.com/MVPWorkshop/lemon.email-dApp https://github.com/MVPWorkshop/badoom-ts
* **Website:**	https://mvpworkshop.co/
* **Legal Structure:** MVP Workshop doo, Cara Dušana 51 Zemun, Republic of Serbia
* **Team's Experience:** MVP Workshop is a blockchain product research and development studio. We have more than four years of experience in building decentralized systems. 
For our clients, we built a vast number of different Dapps and blockchain: 
  * Celsius Network - https://mvpworkshop.co/wp-content/uploads/2019/07/MVP-Workshop-Celsius-Network-Case-Study.pdf
  * Swarm - https://mvpworkshop.co/wp-content/uploads/2019/08/MVP-Workshop-Swarm-Case-Study.pdf
  * Anchor - https://mvpworkshop.co/wp-content/uploads/2019/12/Anchor-Case-Study.pdf
  * Cere Network
  * Legaler

  When it comes to Polkadot, we are a member of the Substrate Delivery Partners program and few of our team members are Polkadot ambassadors as of recently. We hosted an online Substrate event - https://www.youtube.com/watch?v=dJLUO7s-n3M&t=2s
  Also, organized internal Substrate learning sessions were we modified the democracy runtime pallet to support quadratic voting mechanism - https://github.com/MVPWorkshop/substrate-quadratic-democracy
  We are also members of the Ethereum Enterprise Alliance and the Stellar Development Foundation.

The UX/UI of the app will be an essential part. So let me share with you some of our previous work on dribbble -https://dribbble.com/mvpworkshop.

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 2.5
* **Total Costs:** 3 BTC

### Milestone 1

* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 1.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Design components for GUI | Visual design of application components (in invision) |  
| 2. | Design UX flows | Create a UX that is pleasant to work with |  
| 3. | Backend | postgresSQL database, node.js project setup |  
| 4. | GUI web application | Set React app project structure |  
| 5. | Documentation & specification | Explore all the runtime pallets intentions and define their relations in the project documantation |  
| 6. | Github OAUTH2 Integration | Integrate Github OAUTH so users can login and later deploy codebase on their account |


### Milestone 2

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 1.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | GUI web application | React app components |  
| 2. | Github Integration | Integrate Github library so the user could generate a initial commit with the code base on his account |  
| 3. | Backend | API's for handling the code base structure and setting configuration and dependencies with and corresponding tests |  
| 4. | Demo video | Video showcasing how to use the app |  
| 5. | Documentation | Describe functionalities and instructions on compiling and running the app, including a feature list and written tutorial. | 
| 6. | Continuous Integration environment | Pipeline that build the web applications |  
| 7. | Automated tests | for the whole app |

Deliverables will be dockerized.

### Long term plans and the target users of such an application

The target users would definitely be beginners and even people that wanna play a bit and not really start a production-ready blockchain. Experienced blockchain devs beginning to build a project with Substrate are probably familiar with how to start, and whoever has to deep dive into the code so they are not the ones that will benefit the most. We didn't consider the possibility of online chain running in this phase of the project, but it could be an option for some future version.
Looking long term, this GUI would be the place for everyone to quickly get informed on runtime pallets so it should be periodically updated with new information.
So the primary purpose is educational but also promotional. We added in the deliverables features focused on education such as:

 * Tooltips/popups with an explanation of every pallet
 * Links to the substrate docs
 * Video tutorial on how to use the app
 * Documentation with a feature list and written tutorial
