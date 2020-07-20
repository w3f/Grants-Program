# Open Grant Proposal

* **Project:** Substrate Storage Inspector
* **Proposer:** [Itering](https://github.com/itering)
* **Payment Address:** 3JGrCfDGWpGGX2CPYNmMyhYNkbNg5QQTwq

Substrate Storage Inspector is tool that displays interesting data information of Substrate based blockchains.  

The tool provides a similar developing experience in Ethereum ecosystem as following pictures.  
![snapshot](https://raw.githubusercontent.com/yanganto/Open-Grants-Program/ssi-draft/applications/substrate_storage_inspector_demo.png)

The tool provides the data information to help developers to inspect the storage such that helps developers developing the runtime/pallet in Substrate blockchain.

## Project Description :page_facing_up: 

Please provide the following:
  * A brief description of the project.  
  This is a tool help developers discover the changing data in blockchain in substrate ecosystem. 

  * An indication of why this project is good for the ecosystem.  
  When building application or contract, the developers are used to watch the data change, the tool will providing a similar developing
  experience for the substrate developers, such that it is much easier to debug and therefor good to the ecosystem.

  * An indication of why your team is interested in creating this project.  
  When we work on substrate, we find that if there were some tools, the developing will be much easier, and the developing speed can be quicker, so I start to work on this project.

## Team :busts_in_silhouette:

* **Members:** [BoBin](https://github.com/freehere107), [yanganto](https://github.com/yanganto)
* **LinkedIn Profiles:**  [BoBin](https://www.linkedin.com/in/sunbobin/), [yanganto](https://www.linkedin.com/in/yanganto/)
* **Code Repos:** https://github.com/yanganto/ssi (Currently under studing and implement in proof of concept level)
* **Website**: https://www.itering.io/
* **Legal Structure:** Itering Tech Pte. Ltd.
* **Team's Experience:** Darwinia network developer, Subscan backend developer

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):** 1
* **Total Costs:** 2.2 BTC

### Milestone 
* A tool for developer to diff the data and directly query the DB storage in substrate based blockchain
  * load the metadata of substrate based blockchian 
    * the metadata can be fetched if rpc endpoint is provided
* Provide WebApp as human interface
  * list storage fields of all pallet
  * user can select the pallet and field to generate storge key 
  * user can query and differentiate the data from block to block
    * try to display original pallet name, field name, key name
* Docker Image
  * Providing docke file and docker image 

* **Estimated Duration:** 
* **FTE:** 1
* **Costs:** 2.2 BTC

| Item | Deliverable                      | Specification                                          |
|------|----------------------------------|--------------------------------------------------------|
| 1.   | Directly load metadata           | Load the metadata in JSON format                       |
| 2.   | Load metadata from a living node | Fetch the metadata from RPC                            |
| 3.   | List all pallet and field        | List pallet and field based on metadata                |
| 4.   | Storage key generating feature   | Generate storage key base on pallet, field and key     |
| 5.   | List all member of a HashMap     | List all the nodes in the storage field                |
| 6.   | Visualize data difference        | Provid a diffview for a single value or tire structure |
| 7.   | Docker image                     | Implement Docker file and provid docker image          |

## Additional Information :heavy_plus_sign: 
* UI Flow Draft
![snapshot](https://raw.githubusercontent.com/yanganto/Open-Grants-Program/ssi-draft/applications/substrate_storage_inspector_flow_draft.png)
