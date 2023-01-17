# php substrate api

* **Team Name:** Nitor Infotech
* **Payment Address:** We are doing this free to contribute to Blockchain community
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

<https://github.com/w3f/Grants-Program/blob/master/rfps/php-api.md>

### Overview

* PHP Substrate RPC api lib
* lib for using the substrate RPC end points.
* As a team we are already working on blockchain. We are already contributing in Hyperledger and ethereum. This is our steps to get involved in polkadot using substrate lib. We have already integrated the RPC endpoints and working on it's function of balance transfer as an example to demonstrate.

### Project Details

Substrate RCP end points are implemented in Go, Ruby, Python, C++ etc. We are adding one more language to the fold by implementing the APIs in PHP. They can be used in any PHP application by composer installation. We have followed PSR-4 conding standard as coding standard for development.

This project will help to avail substrate features in applications/platforms build using PHP language.

### Code repo
<https://github.com/nitor-infotech-oss/parity-substrate-interface>

### component structure

![](https://grantimage.blob.core.windows.net/images/php-substrate-rpc-component.jpg)

### Technology involved

* PHP
* php_curl
* composer
* substrate RPC

### Ecosystem Fit

* This helps in making RPC endpoints available for applications build in PHP
* It is adding a lib to client integration section of substrate
* Any PHP application that want to have a substrate blockchain capability.

## Team :busts_in_silhouette:

### Team members

* Tejbahadur Singh ( tejbahadur.singh@nitorinfotech.com )
* Kapil Joshi ( Kapil.joshi@nitorinfotech.com )
* Neha Reddy ( neha.reddy@nitorinfotech.com )
* Arati Bongale ( arati.bongale@nitorinfotech.com )

### Contact

* **Contact Name:** Kapil Joshi
* **Contact Email:** Kapil.joshi@nitorinfotech.com
* **Website:** <https://www.nitorinfotech.com/>

### Legal Structure

* **Registered Address:** Rhine, Block 1.5, Embassy Tech Zone,
Rajiv Gandhi Infotech Park, Hinjewadi
Phase- II, Pune – 411057
phone +91-20-66940100
* **Registered Legal Entity:** Nitor Infotech Pvt. Ltd.

### Team's experience

Kapil Joshi is a Technical Manager and Blockchain Practice Lead
He has extensive experience working with Microsoft Technology Stack in Web, Data and Collaboration space
This includes .Net, SharePoint, SQL, MSBI, Azure
Highly capable at delivering end-to-end solutions overlooking low and high level solution design, requirement gathering, quality analysis, change management, team leading/mentoring and project execution.
He is a Blockchain enthusiast and believes in its potential to bring about digital transformation in various industries.

Tejbahadur Singh is a team manager and Blockchain developer cum researcher. He is well versed with technology like PHP, Rust, Python, Go for development. He is a full stack developer and tech enthusiast. He enjoys to give solution to different technical issues. He is having experience in email, medical, media domains. He has developed many enterprise email solutions. He has built and maintained enterprise and small scale website also. He is good at performance enhancement of website and debugging the issues. He is good at AWS services for maintaining performance and availibility of website. Good security researcher also.

Neha Reddy is a software developer and Blockchain developer.
She has built and maintained website and web applications by using PHP and JAVA technology. Also worked on API's for mobile application and third party API's integration.
Neha is a passionate coder and works on different technical stacks as the situation demands and very eager to learn new things.

Arati Bongale is a Software engineer. She is an enthusiastic developer. Eager to learn new technologies and methodologies. She has experience working with various Blockchain technologies like Hyperledger, Ethereum, Substrate and Programming languages like Go lang, Rust, Cpp, Java. She has done projects in Ethereum, Hyperledger Fabric; Web Application using Rust, Substrate etc. She is familiar with database like Postgres SQL, MySQL & tools like truffle, Remix . She has also used wallets like Ganache & Metamask for her Blockchain project. Always willing to innovate the new things which can improve the existing technology.

### Team Code Repos

* <https://github.com/nitor-infotech-oss>
* <https://github.com/nitor-infotech-oss/rust-webassembly>
* <https://github.com/nitor-infotech-oss/blockchain-property-transfer>
* <https://github.com/nitor-infotech-oss/substrate-demo>
* <https://github.com/nitor-infotech-oss/rust-library-mgmt>

* <https://github.com/tejbahadursingh>
* <https://github.com/KapilJoshiNitor>
* <https://github.com/neha0921>
* <https://github.com/aratibongale95>

### Team LinkedIn Profiles (if available)

* <https://www.linkedin.com/in/tejbahadur-singh-ba705121/>
* <https://www.linkedin.com/in/neha-reddy-0b0024119>
* <https://www.linkedin.com/in/arati-bongale-2213511a1>

## Development Status :open_book:

For implementing the library class to make RPC endpoint call is being created. Work on initialisation of properties and methids is going on. Deliverables as comply to rfp are in progress.

* <https://github.com/w3f/Grants-Program/blob/master/rfps/php-api.md>,

## Development Roadmap :nut_and_bolt:

A class which can be instantiated in an application to use endpoints

```php
$testClass = new SubstrateInterface("http_url");
echo $testClass->rpc->system->name();
```

once RPC endpoints are consumed package it and make it usable for other applications to integrate it.

```bash
composer require neha0921/substrate-interface-package
```

### Overview

* **Total Estimated Duration:** 15 days
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 0 USD

### Milestone 1 Example — Implement Substrate Modules

* **Estimated duration:** 10 days
* **FTE:**  2
* **Costs:** 0 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **example** that explains how a user can use this library. A documentation containing class, function details.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | substrate RPC enpoint integration | Integrate all substrate RPC endpoints in PHP to make them available in other PHP applications |  

### Milestone 2 Example — Additional features

* **Estimated Duration:** 5 days
* **FTE:**  1
* **Costs:** 0 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 1.  | packaging application for integration | make packagist of this integration to enable composer installation |
| 2.  | integration and use | an example of how to use this package in PHP application |

## Future Plans

* Substrate is continuasly changin, to support it's functionality and working with changes, we are planning to provide lifetime support.
* We are workging on Blockchain as well, so we want to be involved in it's development with multichain connectivity and future development.
* With this we are involved in rust development as well. In future looking to work on development/issue fixing of Substrate.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We got a suggestion of Gautam from parity about start with some grant

* We have already build a lib for invoking the RPC endpoints.
* We have implemented some RPC endpoints as well.
