# ZK-Snarks tutorial
* **Team Name:** Bright Inventions
* **Payment Address:** 0xD75dDC4Aa3618e1417c68E5Df79ef9D66E4B1Ed9
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Description :page_facing_up: 

### Overview

Main goal of this PoC is to introduce the substrate community into the zk-snarks concept. At this point we would like to create a few blog posts with the tutorial codebase, which will help in better understanding the zk-snarks for the substrate community.


### Project Details
Short description of the problem: Bob has sha256 hashed value and he would like to make sure Alice knows hashed value without Alice revealing it. To do so, Alice can use zksnarks to prove him she knows given value without making it public.

```
function C(X, w) -> bool {
  return ( sha256(w) == X );
}
```

### Technology stack


* Rust - groth16 proof verification
* Substrate - environment for pallet creation
* [Circom compiler](https://docs.circom.io/) - model problem to be solved by prover
* SnarkJS - zksnark setup and proof generation
* PolkadotJS - presentation purposes



### Ecosystem Fit

By preparing a tutorial with basic implementation of the ZK-Snarks ion Substrate ecosystem, we hope to popularise this concept and make it more accessible to the Substrate developers. There are similar initiatives available in other blockchain technologies, however currently there is no easily accessible up to date demonstrational implementation of ZK-Snarks. 

Few years ago a project aiming at such implementation ([Zeropool Substrate](https://github.com/zeropoolnetwork/zeropool-substrate-groth16-example)) was shared on github, however it is not up to date at the moment. We haven't found a working, updated solution available to the public.

As our implementation will be accompanied by series of blog posts and a youtube tutorial video, we aim to reach wider audience and provide an accessible introduction to ZK-Snarks in Substrate for developers. 

## Team :busts_in_silhouette:
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
 https://github.com/bright/

### Team LinkedIn Profiles
- https://www.linkedin.com/in/michal-gralinski-b464152/
- https://www.linkedin.com/in/kziemianek/
- https://www.linkedin.com/in/katarzyna-łukasiewicz-b473901aa/



## Development Roadmap :nut_and_bolt:
### Overview
> 
- **Total Estimated Duration:** 10 weeks
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 25 000 DAI
### Milestone 1
- **Estimated duration:** 4 weeks
- **FTE:**  1
- **Costs:** 10 000 DAI

Create a pallet which will store a necessary data for a zk-Snarks + Research on ZK-Snarks concept 
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide inline documentation. The accompanying blogpost will also serve as an additional documentation. |
| **0c.** | Testing and Testing Guide | We will provide unit tests for the pallet and the guidelines for running and testing it. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | The pallet | Pallet allows storing a verification key and the proof on the blockchain and run the on-chain verification. With the first milestone we will provide a dummy version mechanism, which is going to be replaced with the grooth16 in the next milestone. |
| 2. | Blog post | With the first blog post we would like to focus on describing the audience the Zk-Snarks concept: A/ what are the zk-snarks, B/ describing the “Bob” problem and how they can solve it. C/ describing the process of creating proof D/ creating a “circom” example where we generate a proof. |


### Milestone 2
- **Estimated duration:** 6 weeks
- **FTE:**  1
- **Costs:** 15 000 DAI

Implement the on-chain proof verification mechanism followed by series of educational materials. 


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both inline documentation of the code and a tutorial (which will be a part of the blog post) that explains how a user can (for example) spin up Substrate nodes and upload a verification key and the proof. This will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | We will provide unit tests for the proof verification mechanism. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Research notes | Mathematical calculations based on Groth16 |
| 2. | Groth16  proof verification method | Implement Groth16  proof verification method which will be used by pallet |
| 3. | Demo | Create a demo, where we will use a 3-rd party tool to verify a solution & where we Alice could be rewarded for finding a solution. |
| 4. | Circuits in circom | Prepare a circuits in circom, which will describe our problem |
| 5. | Blog post: Tutorial Groth16 (Part 1) |  describing the groth16 & running "circom proof" from previous post with the Rust Unit test / CMD |
| 6. | Blog post: Tutorial Pallet (Part 2) | updating the pallet with the groth16 & running an example from the previous tutorial with the PolkaJS |
| 7. | Youtube video |Youtube video tutorial explaining the concepts from the blog posts |
