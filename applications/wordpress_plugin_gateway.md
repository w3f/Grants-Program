# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Wordpress payment gateway with KSM/DOT 
* **Proposer:** comprobot
* **Payment Address:** 3KTBjd72GFjY8ckVeQjMTEte4NE2mqjTAt

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
If this application in response to an RFP then please indicate this on the first line of this section.
We would like to build a middleware  with a WordPress plugin connecting Polkadot network with the existing internet application such as e-commerce.  We shall build a payment gateway for digital payment service provided by the third party to the eCommerce services. It authorizes direct payments, e-wallet, or credit/debit cards at online retailers, eCommerce websites or traditional physical stores. It also provides retailers with access to merchant services in order to process payments from major financial institutions. We add payment gateway methods for different infrastructure or web applications build from different open-source software such as php, ruby and java.  Polkadot has high TPS rate which can handle huge amount payments online in currently internet world. Let Polkadot payment become popular.
### Overview

WordPress (WP, WordPress.org) is a free and open-source content management system (CMS) written in PHP and usually paired with a MySQL or a MariaDB database as fundamental infrastructure
WordPress is already using by more than 60 million websites, including 39% of the top 10 million websites as of January 2021. WooCommerce is an open-source e-commerce plugin for WordPress. A study conducted in 2017 by Todd Wilkins, Head of WooCommerce, suggested that WooCommerce stores would collectively account for nearly $10 billion in sales. We would like to add payment gateway for wordpress and woocommerce with Polkadot. It could attract huge amount of people to use Polkadot for crytocurrency payment in daily business. Nevertheless, we will not keep any information regarding merchant’s private keys or money. As such, all payments processed through our Gateway is considered a completely final and fully settled.


### Project Details 
![wordpress plugin](https://raw.githubusercontent.com/comprobot/Open-Grants-Program/master/src/wordpress-plugin-setting.png)


### Ecosystem Fit 
Are there any other projects similar to yours? If so, how is your project different?

## Team :busts_in_silhouette:

### Team members
* Name of team leader
* Names of team members	

### Team Website	
* http://carwaii.io/

### Legal Structure 
Please provide the name and registered address of the legal entity executing the project.

### Team's experience
Please describe the team's relevant experience.  If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

### Team Code Repos
* https://github.com/<your_repo_1>
* https://github.com/<your_repo_2>

### Team LinkedIn Profiles
* https://www.linkedin.com/<person_1>
* https://www.linkedin.com/<person_2>

## Development Roadmap :nut_and_bolt: 

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions it should be clear how the project is related to Substrate and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their roadmap as 1 month = 1 milestone. 

For each milestone:
* Please be sure to include a specification of your software. Treat it as a contract - the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* Please include total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project. 
* Please indicate the milestone duration, as well as number of Full-Time Employees working on each milestone, and include the number of days along with their cost per day.

### Overview
* **Total Estimated Duration:** Duration of the whole project
* **Full-time equivalent (FTE):**  Workload of an employed person ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) 
* **Total Costs:** Amount of Payment in BTC for the whole project. The total amount of funding needs to be below $30k at the time of submission.

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.75 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be coded for the first milestone) |  
| 2. | Substrate module: Y | We will create a Substrate module that will... |  
| 3. | Substrate module: Z | We will create a Substrate module that will... |  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 2 Example — Additional features
...

### Community engagement

As part of the Program, we require that you produce an article/tutorial and publish it (for example on [Medium](https://medium.com/)). It should explain your work done as part of the grant. 

Normally, we ask you to submit the write-up upon the completion of your grant, although for larger projects it might make sense to publish multiple articles after the completion of different milestones.

## Future Plans
Please include the team's long-term plans and intentions.

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far?
