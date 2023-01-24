# larch - Zoombinet Automation
  

- **Team Name:** [Zeeve](https://www.zeeve.io)
- **Payment Address:** Ethereum (USDT/USDC) 0x5E1257E928aa42E3D0cd9E2A7537E37D108D811B
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

### Overview

Blockchain adoption is happening at a very rapid rate, with a lot many use cases being implemented and seeing the light of the day. The concept of the parachain enables the possibilities further. While we focus on building the use cases, code them and implement the business logic of it, including the creation of Parachain and then further logic running upon it, we majorly underestimate the DevOps activity to deploy, maintain, scale and manage the parachain itself. This includes initial launch of the parachain, its thorough testing using Zoombie-net and scaling it further by providing support for users to create and deploy validator, full and archive nodes with ease as well as to have secure RPC endpoints. The most deficit we see is around advanced analytics and proactive monitoring to ensure a production grade incident management of networks and nodes.

### Project Details

Zeeve will provide a command line based tool to setup of new Substrate parachain network with in-depth and flexible configurations in few clicks on the cloud of choice to distribute nodes upon (AWS, GCP, DigitalOcean and Linode) - supporting K8 and native VMs whichever fits the parachains better.

A GUI will be built to allow a quick setup of the parachain with zombie-net with the desired capabilities to test multiple configurations and compare the results. This in turn will allow the developers and parachain teams to try multiple chain configurations while setting up the parachains with Zoombie-net, as well as to choose different nodes to try and test for the best possibilities on the parachain.

This not only will allow configurations on the parachain side but will also allow you to pick different DSL templates on Zombie net as well as creating new templates without needing to write the code. The configurator will be an intuitive graphical wizard based interface to create in-depth [Network definition spec](https://paritytech.github.io/zombienet/network-definition-spec.html#network-definition-spec) and apply on the go. Furthermore, to allow seamless testing using the dynamic wizard based DSL creation allowing to choose and configure all available [Assertions](https://paritytech.github.io/zombienet/cli/test-dsl-definition-spec.html#available-assertions)

The graphical control panel will support all the other configurations or operations required to enable the developer or parachain team to test with as much flexibility as required. These operations include:

- Restart - after x seconds, will stop the `process` and start again after the `x`amount of seconds or immediately.
- Stop - will pause (SIGSTOP) the process)
- Resume - will pause (SIGCONT) the process)
- Sleep - will allow config to sleep the test-runner for `x` ammount of seconds)

**Test result and logs**
The interface will allow the developer to test and see live logs of the test run, post run results and logs on the aforementioned interface and save them for analysis later to be able to compare with the previous executions on demand. Furthermore, a stack of Prometheus and Grafana will allow easy monitoring of the parachain nodes. Along with the mentioned CLI capabilities to the developers.
	
	
**Templating**
The control panel will also allow the developer or the parachain team to one-click replicate one of the existing network configurations, save as template or pick from previously saved template and re-create a new test with some rapid tweaks to it.

## Team :busts_in_silhouette:

### Team members

- Ghan Vashishtha
- Sankalp Sharma
- Arjun Chamyal
- Rahul Meena

### Contact

- **Contact Name:** Ghan Vashishtha
- **Contact Email:** ghan@zeeve.io
- **Website:** www.zeeve.io

### Legal Structure

- **Registered Address:** 1603 Capitol Ave Ste 310, Cheyenne 82001, WY
- **Registered Legal Entity:** Zeeve Inc.

### Team's experience

Founded by a team of experienced professionals and enterprenuers from industry, Zeeve's cofounders collectively have over 45+ years of experience in technology, product development, and various business verticals. Zeeve has built an enterprise-grade no-code Blockchain Infrastructure Automation platform that enables Enterprises, Blockchain Startups, Blockchain Consulting Companies and Web3 Developers to deploy Blockchain nodes and Decentralised Apps within minutes, and manage them with advanced analytics and real-time alerts. In June 2022, the Startup raised $2.65 Million in a Seed Round from Leo Capital and Blu Ventures. It plans to deploy the funds towards product development, augmenting the technology team and enhancing its reach among DApp developers and global corporations, please consider visiting our prior [work](https://www.zeeve.io/platform).

### Team Code Repos
- https://github.com/Zeeve-App
- https://github.com/Zeeve-App/sawtooth-artifacts
- https://github.com/Zeeve-App/Zeeve-read-the-docs

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://www.zeeve.io/about-us

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ghan-vashishtha/
- https://www.linkedin.com/in/sankalp-sharma-502008139/
- https://www.linkedin.com/in/arjun-chamyal-a4466086/
- https://www.linkedin.com/in/rahul-m-0ba16487/

## Development Status :open_book:

Before applying for the Web3 Foundation Grant, the Zeeve team has built a DevOps automation for Polkadot and other substrate chains, also created substrates based relay chains:

- Automated Polkadot deployments including validator nodes, archive nodes [here](https://www.zeeve.io/blockchain-protocols/deploy-polkadot-node/)
- Automated Kusama deployments including validator nodes, archive nodes [here](https://www.zeeve.io/blockchain-protocols/deploy-kusama-node/)
- Created a relay chain on substrate with some customisations done at the core to accomodate the tokenomics and custom reward mechanism [here](https://axscan.axiacoin.network/#/explorer)
- Published a [blog post](https://www.zeeve.io/blog/how-to-use-substrate-to-create-parachains-in-polkadot/) about the usage and omlememtation of praachains
- The focus for Zeeve will be automating the parachain deployments, dedicated node setups and help with faster testing with zombie-net.
- Spoke with David Hawig, Richard Casey and Gautam Dhameja from the Parity team regarding the development of Zeeve and the Web3 Grant application

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 4 FTE
- **Total Costs:** 100,000 USD.

### Milestone 1 — Implement Core Parachain Automation

- **Estimated duration:** 1 month
- **FTE:** 4
- **Costs:** 25,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b.  | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) create a new Substrate based Zoombinet nodes and initiate testing, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker/Cluster | We will provide a Dockerfile(s)/Cluster Yaml(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | Using our PR channels, we will publish an **article** that explains the high-level overview of automation as part of the grant, followed by a set of extensive examples. |
| 1. | Initial Automation | We will build the core GUI driven automation to create and deploy the substrate based Zoombienet configurations including relaychain and parachain configurations. |
| 2. | Configuration | Parachain configuration is critical and complicated, we will provide the GUI based pick and choose for genesis parameters and chain configs to start wtih parachain setup for the desired Zoombinet |
| 3. | Node type support | Implement setup of all node types including Full node, Validator node and Collator node for the respective relay chain and parachain within the configured Zoombi-net. |
| 4. | Cloud agnostic setup | Design and implement the multi cloud deployment support for Zoombinet nodes including AWS, DigitalOcean, GCP. |


### Milestone 2 — Network Monitoring

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 25,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) create a new Zoombinet, test and setup monitoring for it, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker/Cluster | We will provide a Dockerfile(s)/Cluster Yaml(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | Using our PR channels, we will publish an **article** that explains the high-level overview of automation as part of the grant, followed by a set of extensive examples. |
| 1. | Design monitoring strategy | The Zoombinet doesn't provide any embedded monitoring tool, we will with the node setup automation, automatically setup prometheus and Grafana on the nodes. |
| 2. | Setup Dashboard | The deployment done for Prometheus and Grafana will show standard Dashboard having node resource and Blockchain specific details shown on the aforementioned Grafana GUI Dashboard. |

### Milestone 3 — Zombie net automation and testing

- **Estimated Duration:** 2 month
- **FTE:** 4
- **Costs:** 50,000 USD 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) create a new Substrate based parachain nodes and start one command testing with Zoombie net on it, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker/Cluster | We will provide a Dockerfile(s)/Cluster Yaml(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | Using our PR channels, we will publish an **article** that explains the high-level overview of automation as part of the grant, followed by a set of extensive examples. |
| 1. | Design testing strategy | GUI driven Setup of K8/native based Zombienet and guided configuration of validators and parachains, including Prometheus/Grafana stack to monitor.|
| 2. | Setup Testing | Intuitive GUI for testing including options to, pick Network definition spec from a set of pre-defined templates, Create and choose from available DSL files to start. |
| 3. | Templating | Create and save configurations for setup as templates, replicate further to create to conduct A-B testings, GUI to display test results, logs and compare results from different templates. |

## Application Mockup

Following are the mockups for high-level application operations, these are subject to change during development basis the requirement and behaviour.

### Dashboard
![Dashboard](https://larch.zeeve.net/images/larch%20-%20Dasboard.png)

### Zoombinet network list

![List all created Zoombie networks](https://larch.zeeve.net/images/larch-znet-list.png)

### Create a new Zoombinet

![Zoombinet Settings](https://larch.zeeve.net/images/larch-znet-settings.png)

![Zoombinet Relaychain Configuration](https://larch.zeeve.net/images/larch-znet-relaychain.png)

![Zoombinet Parachain configuration](https://larch.zeeve.net/images/larch-znet-parachain.png)

![Zoombinet Collator configuration](https://larch.zeeve.net/images/larch-znet-collator.png)

![Zoombinet HRMP configuration](https://larch.zeeve.net/images/larch-znet-hrmp.png)

### Relaychain, Parachain, specfile and WASM templates

![Zoombinet Configuration teomplates](https://larch.zeeve.net/images/larch-template-config.png)

![Zoombinet WASM image templates](https://larch.zeeve.net/images/Larch-Template-image.png)

### User activity and operation history

![User activity and operation history](https://larch.zeeve.net/images/larch-user-activity.png)

### DSL Templates

![DSL Template list](https://larch.zeeve.net/images/larch-dsl-list.png)

### Embedded DSL Editor

![DSL Editor](https://larch.zeeve.net/images/larch-dsl-editor.png)

## Technology Stack
- ReactJS
- NodeJS
- Apache/Nginx
- TailwindCSS
- System Scripts
- Kubernetes/Podman/Docker
- Terraform
- Prometheus, Grafana, Telegraph

## Future Plans

- We will promote the project by giving talks in the community, writing tutorials and videos.
- We will spread the project in Zeeve's developer and client community of 15K+
- We will also work closely with the developers and clients of the Parity ecosystem for getting feedback and refine our project.
- Our long-term plan is to make the tool become one of the default Parachain tools for the Parity ecosystem.
- We will also add more followup, integration with the Zeeve enterprise platform allowing more flexibility for enterprises to built and deploy use case or application specific parachains.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Parity team / a conversation with Richard Casey.
