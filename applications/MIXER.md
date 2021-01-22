# Open Grant Proposal

* **Project Name:** Webb Mixer
* **Team Name:** Webb
* **Payment Address:** 0xAC8E9305dc7AC95685c7D52E759c35aCd9eB90Ff

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview
- We will design and develop a zero-knowledge mixer with no trusted setup in a series of pallets.
- We will integrate this to a Substrate node.
- We like zkps and deploying tech.

### Project Details 
https://www.notion.so/hicommonwealth/W3F-Open-Grants-1-4a26651baefb488ba5db3734920f8de0

### Ecosystem Fit 
Everyone else is doing some DeFi stuff (with respect to ZKP). I think the innovations that can be made here are more interesting.

## Team :busts_in_silhouette:

### Team members
Drew Stone
Filip Lazovic
Shady Khalifa
1 other member

### Contact
- Drew Stone
- drew@commonwealth.im
- https://commonwealth.im

### Legal Structure 
- 1 World Trade Center, New York City, New York 10007
- Commonwealth Labs

### Team's experience
Our team has deep experience building on Substrate and growing experience building zero-knowledge proof based applications. I have been building on Substrate for 2 years and helped launch Edgeware. Shady worked on Sunshine Protocol as well.

### Team Code Repos
- https://github.com/edgeware-builders/bulletproofs
- https://github.com/edgeware-builders/anon

### Team LinkedIn Profiles
- https://www.linkedin.com/in/drewcstone/

## Development Roadmap :nut_and_bolt: 
### Overview
* **Total Estimated Duration:** 3-4 months
* **Full-time equivalent (FTE):**  3-4 FTE
* **Total Costs:** $30,000 DAI/USDC/ETH/DOTS

### Milestone 1 Example — Implement Substrate Modules and circuits
* **Estimated Duration:** 1 month
* **FTE:**  4
* **Costs:** $30,000

| Number | Deliverable | Specification |
| ------------- | ------------ | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Substrate module: SparseMerkleTree (SMT) | We will create a Sparse Merkle Tree module that will support a standard interface for interacting with Merkle Trees |  
| 2. | Substrate module: Mixer | We will create a Mixer module that will facilitate a deposit/withdraw functionality for mixing a token. |  
| 4. | Substrate chain | Modules SMT/Mixer of our custom chain will interact in such a way, allowing a user to deposit native tokens into the mixer and withdraw them with a valid zero-knowledge proof. |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

*Additional details about modules*
1. Build out and standardize a common interface for all zero-knowledge proof circuits we will use to facilitate the mixer.
    - Merkle tree proof verification circuits.
    - Support for a variety of commitment types.
2. Design and develop the pallets necessary for the underlying storage of data and funds in a mixer.
    - A sparse merkle tree pallet that exposes a common merkle tree interface (insert, verify proof)
    - A mixer pallet that facilitates the mixer and allows for creating, deleting, as well as other governance functions over mixers.
    - A standard interface for integrating a new zero-knowledge verifier of a given circuit.

## Future Plans
The team's future plans are to build zero-knowledge products with extensible UIs and composable runtime primitives. We want to explore governance in zero-knowledge and we see mixers as being the core primitives towards this pursuit.

## Additional Information :heavy_plus_sign: 
Nope

### What work has been done so far?
- We have spent a decent amount of time researching available tools, creating sample circuits, and playing around with all the concepts and tools mentioned in this document. Currently, no part is deployable or composable as we would want to get this system to.
### Are there are any teams who have already contributed (financially) to the project?
- No
### Have you applied for other grants so far?
- One very long ago which I don't think we ever proceeded with.
