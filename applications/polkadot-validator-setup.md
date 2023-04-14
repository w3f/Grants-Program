# Polkadot validator setup repository maintenance

- Team Name: Eiger
- Payment Address: Fiat 14.04.2023, 16:50 UTC+3
- [Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels): 3

## **Project Overview 📄**

This application is a response to this `polkadot-validator-setup` maintenance [RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/validator-setup-maintenance.md).

### **Overview**

The Polkadot validator setup repository is a comprehensive collection of resources, scripts, and documentation designed to assist users in setting up and operating a Polkadot validator node.

The idea behind the repository is to offer numerous benefits to the Polkadot ecosystem, including increased accessibility by simplifying the setup process and promoting decentralisation, enhanced security through the provision of best practices and recommended configurations to protect validator nodes against potential attacks, and improved stability by offering resources and guidance for maintaining reliable and well-functioning validator nodes.

We will directly work on the issues brought up in the RFP:

- Fixing issues and improving documentation
- Updating any libraries/dependencies needed
- Adding support for additional Terraform backends to store the Terraform state
- Investigate pass-phrased ssh key deployment: [issue 109](https://github.com/w3f/polkadot-validator-setup/issues/109)
- Add additional cloud providers to Terraform: Alicloud, OVS.

As well as note down possible areas for future maintenance work or improvements.

**GOAL:** Perform maintenance on the `polkadot-validator-setup` repository as requested. Look for other opportunities for future maintenance and upgrade work.

**Motivation:** Our driving force as a group of skilled web3 developers lies in our dedication to nurturing and promoting blockchain development and support, particularly for the Polkadot blockchain, which has demonstrated significant potential. By maintaining the Polkadot validator repository, we can leverage our expertise to contribute to the ecosystem's growth and success, ensuring its continued advancement and resilience.

### **Maintenance list**

The repository that needs maintenance and further development:

- [https://github.com/w3f/polkadot-validator-setup](https://github.com/w3f/polkadot-validator-setup)

## **Team 👥**

### **Team Members**

- Eloy (Github [https://github.com/eloylp](https://github.com/eloylp)) is a Cloud Software Engineer with extensive experience in Rust and Go, focusing on observability and resilience. He likes to collaborate in blockchain-related projects and distributed high-traffic cloud environments.

### **Contact**

- **Contact Name**: Daren Tuzi
- **Contact Email**: [daren@eiger.co](mailto:daren@eiger.co) (Founder & CEO of Eiger)
- **Website:** [Eiger.co](http://eiger.co/)

### **Legal Structure**

- **Registered Address**: Linnankatu 3 A 24, 20100 Turku, Finland
- **Registered Legal Entity**: Eiger Oy

### **Team’s Experience**

Web3 promises to upgrade the very foundations of our society – from money, finance, and governance to media, gaming, and science. To deliver on that promise, decentralised technologies are to be integrated into the everyday experiences of billions of people. For engineering, this is a mountain of a challenge.

Eiger was founded to develop infrastructure for web3 mass adoption. We help technology companies improve and integrate the core technologies of web3 to meet the climbing demands for scaling and performance.

We currently employ 25+ senior web3 engineers across the globe and work with some of the most ambitious organisations in the industry, including Forte, Aleo, and XRP Labs, to name a few.

### **Team Code Repos**

As mentioned in the Teams section, Eiger already has extensive experience developing large infrastructural projects. Some chosen examples:

- The SnarkOS for Aleo, the privacy-focused smart contract L1 platform going into production this summer. [https://github.com/AleoHQ/snarkOS](https://github.com/AleoHQ/snarkOS)
- OrbitDB is a distributed, p2p, serverless database. [https://github.com/orbitdb/orbit-db](https://github.com/orbitdb/orbit-db)
- The rust implementation of IPFS, now archived. [https://github.com/rs-ipfs/rust-ipfs](https://github.com/rs-ipfs/rust-ipfs)
- The main implementation of Internledger in Rust, which we developed and maintained. [https://github.com/interledger/interledger-rs](https://github.com/interledger/interledger-rs)
- Ziggurat - A Network protocol testing framework for ZCash, XRP, and Algorand. Notably, critical network vulnerabilities were found and reported to the core teams. [https://github.com/runziggurat](https://github.com/runziggurat)

### **Team LinkedIn Profiles**

- [https://www.linkedin.com/in/eloylp/](https://www.linkedin.com/in/eloylp/)

## Development Status 📖

As of last summer, [the existing repository](https://github.com/w3f/polkadot-validator-setup) has been archived and has not received active maintenance. We intend to resume from where it was left off, thoroughly verify each step, update the repository to ensure it is current, and address the concerns detailed in the Request for Proposal (RFP).

### **Maintenance Responsibilities🔩**

We plan to address the issues raised in the maintenance RFP, update the repository's dependencies, and improve code quality.

### **Overview**

- **Start Date:** We are ready to start work within weeks of approval
- **Total Duration:** 8 weeks
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 48’000 USD

### **Milestone 1 - Maintenance**

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 24’000 USD

The objective of the initial milestone is to enhance the current repository’s status, streamline its contents, and ensure usability without incorporating new functionalities. The following tasks will be undertaken:

- Confirm the reproducibility of all existing processes.
- Address and resolve issues as they emerge.
- Refine and expand documentation.
- Update libraries and dependencies

### **Milestone 2 - New features**

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 24’000 USD

The second milestone aims to augment the existing repository with new capabilities, as outlined below:

- Expand support for additional Terraform backends to store the Terraform state (currently limited to GCP; potential additions include S3, local storage, or even Git — though the latter is not recommended for production, it may prove invaluable for testing purposes). Relevant issues: [Issue 108](https://github.com/w3f/polkadot-validator-setup/issues/108) and [Issue 7](https://github.com/w3f/polkadot-validator-setup/issues/7)
- Explore the deployment of passphrase-protected SSH keys: [Issue 109](https://github.com/w3f/polkadot-validator-setup/issues/109)
- Incorporate additional cloud providers within Terraform: Alicloud and OVS.

## **Future Plans**

The Eiger team would be interested in contributing to the continued maintenance of the validator setup repository mentioned in this RFP and possibly other associated repositories.

The plans may change depending on the discussions regarding a rolling [Maintenance Grant](https://github.com/w3f/Grants-Program/blob/83f1deedd70075b3fdca0b0de694cac375a38924/docs/maintenance.md).

## **Additional Information**

**How did you hear about the Maintenance Grants Program?**

We learned about it when looking at open RFPs by the web3 foundation on their website.

We wanted to get back up to date on what is happening in the Polkadot ecosystem, and working on grants, specifically RFPs, has been a great way to do so.

Looking to apply to other RFPs currently open as well. Stay tuned!
