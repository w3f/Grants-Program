# Trusted Pods

- **Team Name:** [Comrade Coop](https://comrade.coop/)
- **Payment Address:** [0xAE8687d444511a595Cc1EAdbFc1dFe58eB639C5f](https://etherscan.io/address/0xae8687d444511a595cc1eadbfc1dfe58eb639c5f) (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

### Overview

Trusted Pods is a decentralized compute marketplace where developers can run container pods securely and confidentially through small and medium cloud providers. It is tailored towards providing a one-stop service for finding infrastructure to run pods in a cost efficient, serverless manner.

In Trusted Pods, application publishers, people looking to have their pod deployed, locate compute service providers through a decentralized network. Once the publisher selects a particular provider based on factors such as prices and provided resources, the two establish a payment contract. In turn, the provider runs the pod inside a TEE enclave with monitoring software. The monitoring software measures the resource usage and calculates pricing information periodically. The pricing information is forwarded to the payment contract, validated, and funds are transferred from those locked by the publisher to the provider.

Within the Polkadot ecosystem, Trusted Pods would be an application/dApp—hence it would be layered on top of the rest of the ecosystem, either as a parachain, or as part of one or more parachains.

Trusted Pods is part of a general line of Apocryph-inspired projects, and we are looking to develop this project to further our plans for a dream future of decentralized technology defined by autonomous software agents. As such, it may be considered a continuation of the [Validated Streams grant](https://github.com/w3f/Grants-Program/blob/master/applications/validated-streams.md), yet the two remain entirely separate this far.

### Project Details

#### Overall architecture

Trusted Pods can be considered a set of four pieces of software
interacting with each other: the publisher's client, the provider's client, the decentralized registry, and the payment contract.

As described in the overview, the publisher's client finds a provider through the registry, where the different providers are registered. Once a deal is established, a payment contract is set up, and the pod configuration is transferred to the provider's clients. Afterwards, the provider executes the pod in exchange, until either the payment contract runs out of funds or the publisher cancels the deployment.

A diagram visualizing the process is provided below:

![Diagram showing the steps a publisher coordinating the execution of a Trusted Pod with a Provider decentralized-cloud-solution-design.drawio.png](https://user-images.githubusercontent.com/5276727/265950170-be3e3ccd-1b59-437b-82a3-ec70763e2a3f.png)

#### Publisher client

The publisher client is an executable that the publisher uses to
connect to the network and the provider. It has a variety of functions, mainly related to preparing the pod for deployment:

1. The publisher client encrypts the full set of pod manifests, configuration, and OCI images, and uploads them to the provider (using IPFS to store the encrypted blob) once a deal is through.
2. The publisher client manages the lifecycle of the running pod in the attested environment.
3. The publisher client creates and configures the payment contract on-chain, locking the initial funds in it.
4. The publisher client may eventually include extra features—such as alerting when the payment contract is critically low on funds—aimed at easing the publisher's interactions with the payment contract and the deployed pod.

#### Provider client

The provider client is the piece of software responsible for running the pod on the cloud provider's servers. It also registers the provider in the registry and reacts to incoming orders.

Much of the provider client runs inside a TEE enclave, operating with a public/private key pair generated inside the enclave and subsequently attested to the other participants. The part of the provider client running outside the enclave only arranges for the provisioning of infrastructure and general administration tasks.

1. When a publisher's request arrives, the provider client consults its configured pricing table and available resources and uses those to make a deal.
2. Once a deal is finalized, the provider client downloads the encrypted deployment manifest and decrypts it using its private key inside the enclave. It then deploys it as a sandboxed container.
3. The provider client is also responsible for the required cryptography for transferring any secret configurations required by the pod and ensuring that they don't leave the trusted enclave unencrypted.
4. When deploying, the provider client also runs monitoring tools inside the trusted enclaves alongside the running pods. The monitoring tools report aggregated metrics that are periodically sent off to the payment contract.
5. Finally, the provider client monitors the payment contract, and arranges for the graceful (or forceful) stopping of the pod if the contract runs out of funds.

#### Registry

The registry provides a common place for publishers and providers to find each other. On it, providers list the prices they are willing to offer for running pods, as well as the attestations of the environment in which those pods will run. Later, publishers looking for a provider pick one from the list, open a connection (over libp2p) with the provider directly to finalize the details of the deal, and finish by creating a payment contract on-chain.

#### Payment contract

The payment contract is a smart contract that allows the publisher to pay the provider for the execution of the pod. Initially the contract is created with the pricing configuration agreed on in a bid. Then, the publisher transfers some amount of tokens to the contract, locking them, and optionally configures the maximum rate at which those tokens can be used up. Later on, the provider can withdraw funds from the contract by submitting metrics signed by the enclave.

There are two exceptional cases to this regular operation of the
contract:

1.  The publisher may want to unlock some of the tokens they have locked in the contract. In this case, we start a dispute period during which the provider may submit the latest metrics. Once the metrics are in or once the dispute period runs out, the funds requested for unlocking (if still available) are released, and the publisher may proceed to withdraw them.
2.  The provider may decide to change the contract to a different pricing. In this case, the pricing change has to be confirmed by both sides; the tracking of a dispute period is a responsibility of the provider client. Once the change is confirmed, the provider would submit the last measurement of the old metrics and the first measurement of the new metrics, so as to establish the new starting point.

#### Trusted Pods

In Trusted Pods, the publisher's code runs inside a Trusted Execution Environment enclave, or TEE. TEE-s are a feature of modern server CPUs that has been around for a while (2015 with Intel SGX; 2021 with AMD SEV, 2023 with Intel TDX) but only recently gained prominence as public clouds started offering Confidential Virtual Machines running entirely inside an enclave. In layman terms, a TEE allows running a program or virtual machine in a way that protects it from the host operating system and the rest of the hardware. Furthermore, via [remote attestation](https://en.wikipedia.org/wiki/Trusted_Computing#Remote_attestation), one can prove that specific software is running inside a TEE enclave. Hence, TEE-s allows publishers to trust that providers are running their pods and cannot tamper or leak any of the data contained therein. As such assurance seems fundamental to a distributed cloud platform, we are primarily focusing on developing Trusted Pods for use with providers that have support for Trusted Execution Environments.

#### Technology stack

The technology stack we plan on using is mainly centered around the cloud-native ecosystem, as it is the de-facto standard for describing pods already in use by developers and administrators around the world.

To describe the deployment configuration of a pod, we plan on using manifests closely aligned with the cloud-native ecosystem. We hope that developers using Trusted Pods for their applications will benefit from this standardization, as it allows them to migrate from (or to) other cloud-native solutions with ease.

For provisioning the infrastructure required for deploying the pods themselves, we likewise aim to step on the Kubernetes stack as much as possible, so that providers can benefit from not having to deploy completely-novel software stacks. For this end, we are planning to use [Constellation](https://github.com/edgelesssys/constellation/) (and, later, [CoCo](https://github.com/confidential-containers)) alongside established cloud-native ecosystem projects like [gVisor](https://gvisor.dev/), [Prometheus](https://prometheus.io/), [SOPS](https://github.com/getsops/sops), and others.

For communication between network participants, we will use IPFS/libp2p/protobufs and Substrate-backed blockchains. Once a pod is deployed, depending on how it is configured, it may also be accessible through other internet protocols, such as HTTPS, TCP, or UDP.

All infrastructure included in the technology stack which runs in the TEE enclaves alongside with providers' pods is going to make use of reproducible builds following the [Constellation approach](https://blog.edgeless.systems/reproducible-builds-for-confidential-computing-909b906d2056) and [established best practices](https://reproducible-builds.org/) and tools (e.g. [Bazel](https://bazel.build/)). This will ensure that all of the infrastructural source code can be openly audited and will allow the remote attestation process to confirm that the audited code is exactly the one running inside the TEE enclave.

#### What Trusted Pods is not

Trusted Pods is not a data storage solution. While it could be used for storing data, other protocols are better suited for the task, for example Crust Network or Filecoin.

Trusted Pods is not a blockchain oracle. Nor is Trusted Pods a blockchain layer 2 / scaling solution. While it could be used as either, doing so would require trusting the company attesting the TEEs (e.g. Intel, AMD, etc.), and thus going against the purpose of creating a decentralized, trustless system in the first place.

Trusted Pods does not rely on any specific token—though the payment contract would require *some* token to work. Within the scope of the grant, we will make all the parts of the project easily configurable to work with any token.

### Ecosystem Fit

Within the Polkadot/Kusama ecosystem, Trusted Pods is primarily a decentralized application which uses a blockchain for processing payments. However, as it supports interacting with external software through HTTPS and other protocols, it could also be used to host smart contract interfaces or to bridge webhooks and the like to the chain without reaching out to centralized platforms.

The main audience for Trusted Pods is small and medium private clouds looking for a source of additional customers and revenue; and some of our team members have experience working in the private cloud industry that we hope we can tap into. A challenge here is the availability of TEE-enabled CPUs, since only the newest server CPU models have TEEs—but with regulatory changes related to the confidential processing of data, we expect that support for those will soon be part of the status quo.

In addition, Trusted Pods targets developers and software studios currently developing and deploying applications on public clouds like Heroku, GCP, Azure, AWS. We realize this is a very challenging audience to market to, but we hope that we might start by nibbling away some of the developers who are interested in decentralized architectures and blockchains and are turned away by the high cloud prices prevalent today, and from there advance to more mainstream usage.

We managed to find the the following existing projects that Trusted Pods is similar to:
* [Golem Network](https://golem.network/) – mostly focuses on being a very general set of APIs; arbitrary application support (through VM-s) is still basic, and TEE support is still being worked on.
* [Akash Network](https://akash.network/) – lacks TEE support and has not announced plans to support it.
* [IExec Marketplace](https://iex.ec/marketplace/) – tailored towards running short-lived tasks and not services.
* [DINFRA](https://github.com/w3f/Grants-Program/pull/1622) (Web3 grantee) – focuses more on decentralizing blockchain node deployments and on supporting any deployment manifest format.
* [Hamster](https://github.com/w3f/Grants-Program/pull/789) (Web3 grantee) – lacks TEE support and is tailored towards running tasks.
* [B-Datagray’s Datagen](https://www.b-datagray.com/) (Web3 grantee) - focuses on on-chain dealings and lacks TEE support.
* [Aleph.im](https://aleph.im/), [Ethernity Cloud](https://ethernity.cloud/), [Cudos Blockchain Compute](https://www.cudos.org/) – similar in concept, still works in progress.
* [Sonm](https://sonm.com/), [Nunet](https://www.nunet.io/) – geared towards Fog Computing, no TEE support.

## Team :busts_in_silhouette:

### Team members

- Team leader: Branimir Angelov
- Team members: Bozhidar Marinov, Salih Houadef

### Contact

- **Contact Name:** Bozhidar Marinov
- **Contact Email:** b.marinov@comrade.coop
- **Website:** https://comrade.coop/

### Legal Structure

- **Registered Address:** 47, "Cherni vrah" blvd, Sofia 1407, Bulgaria
- **Registered Legal Entity:** Comrade Cooperative

### Team's experience

Branimir is a seasoned software architect, fluent in a diverse range of programming languages, technologies, and algorithmic techniques. Previously Director of Software Architecture at Wacom Europe, currently he is founder of Kubo, an European Private Kubernetes Cloud provider, and a Board Member of Comrade Cooperative. Branimir specializes in delivering robust and scalable solutions with cloud-native technologies, and has a strong background in designing and operating highly available global infrastructures in both public and private cloud environments. He is also a major contributor to Perper - an open-source framework for stream-based data processing using serverless computing.

Bozhidar has over 14 years of programming experience, including serving as a core developer of the Godot Game Engine. He has expertise in web development, backend systems, and has contributed to various FOSS projects. As a main developer in Perper, he played a crucial role in ensuring code quality and leading feature development. Bozhidar also has experience in decentralized applications and smart contracts, complemented by strong debugging skills. He is currently the Chairman of Comrade Cooperative.

Salih is a recent college graduate with experience in creating various decentralized systems, in particular Blocksharp, a blockchain framework based on an actor model, used to complete his master's thesis on decentralized voting systems. He was also the main contributor to Validated Streams, a recently-completed Web3 Foundation Grant.

### Team Code Repos

- https://github.com/obecto/perper
- https://github.com/comrade-coop/validated-streams
- https://github.com/comrade-coop/apocryph
- https://github.com/comrade-coop/apocryph-dao
- https://github.com/revoltez/Blocksharp
- https://github.com/revoltez/CypherBox

Team Github accounts:
- Branimir Angelov: https://github.com/branimirangelov
- Bozhidar Marinov: https://github.com/bojidar-bg
- Salih Houadef: https://github.com/revoltez

### Team LinkedIn Profiles

- Branimir Angelov: https://www.linkedin.com/in/branimirangelov/
- Bozhidar Marinov: https://www.linkedin.com/in/bojidar-bg/
- Salih Houadef: https://www.linkedin.com/in/houadef-salih/

Advisors:

- Todor Kolev: https://www.linkedin.com/in/todor/

## Development Status :open_book:

After having detailed the solution design documents, we have started prototyping the project in https://github.com/comrade-coop/trusted-pods/. It already features rudimentary implementations of the Provider and Publisher clients in Go, and even a sketch of the Payment contract in ink! Rust.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 1.5
- **Total Costs:** 21,750 USD

### Milestone 1 — Deployment & payment: smart contracts

- **Estimated Duration:** 1.5 months
- **FTE:** 1.5
- **Costs:** 7,250 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT / GPLv3 |
| **0b.** | Documentation | We will provide specifications of all formats defined, along with inline documentation and a basic usage tutorial of all software included in this milestone. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. In addition, integration tests will be provided using a simple development-mode Substrate chain configuration and/or an ink! testnet. |
| **0d.** | Docker | We will provide Dockerfiles and Kubernetes manifests that can be used to test all the functionality delivered with this milestone. |
| 1. | Smart contract: Registry contract | We will develop a Registry smart contract, where providers would be able to register themselves and their prices and publishers would be able to search for a provider that meets their needs. The smart contract will be developed using ink!. |
| 2. | Smart contract: Payment contract | We will develop a Payment smart contract that will receive and verify the metrics signed by the trusted middleware and will calculate the cost. The smart contract based protocol will enable different billing cycles (metered on a per second resolution, but billed daily for example) and updates on the pricing formula published by the providers in IPFS (or on-chain). The smart contract will be developed using ink!.  |
| 4. | Publisher client: Orders and payments | We will extend the Publisher client (written in Go) the network protocol with functionality for listing, comparing, accepting, and managing pod execution requests, though searching the Registry contract, connecting through libp2p to the Provider client, and instantiating and managing Payment contracts. |
| 5. | Provider client: Quotes and payments | We will extend the Provider client (also written in Go) to listen for orders, evaluate them according to configurable pricing rules, and accept them. The Provider client will also have the ability to monitor the payment contract and handle extraordinary situations such as running out of funds in the Payment contract. |
| 2. | Provider platform: Trusted metrics | We will also extend the provider client with functionality which deploys monitoring tools alongside any provisioned pods, so that metrics-based billing can later use the monitored values when charging users. Metrics are recorded on per-second resolution for the running pod depending on quotas for cpu (and/or gpu), memory and instance storage requested in manifest. The metrics are not collected when the pod is not running and a pod which is not currently running can be started again with an HTTP request. |

### Milestone 2 — Execution & metering: TEE-based middleware controller

- **Estimated Duration:** 2.5 months
- **FTE:** 1.5
- **Costs:** 14,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT / GPLv3 |
| **0b.** | Documentation | We will provide specifications of all formats defined, along with inline documentation and a basic usage tutorial of all software included in this milestone. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide Dockerfiles and Kubernetes manifests that can be used to test all the functionality delivered with this milestone. (Since the provider side of the project will normally be deployed in a TEE, we will also provide scripts which start a cluster inside a fake local TEE and apply those Dockerfiles and Kubernetes manifests to it.) |
| 0e. | Article | We will write up and publish an English article on our blog, making sure to link it on HN and relevant communities, that explains the Trusted Pods project, how it works in brief, and how it can be used by developers to deploy their own pods. |
| 1. | Provider platform: Trusted Execution | We will modify the deloyment of the provider client so that it runs locked-down within a TEE, in a way allows for the confidential execution of pods by keeping the storage, memory, and execution parameters of the pod inaccessible by other pods or even by the cluster's administrator. |
| 2. | Provider client: Remote attestation | We will extend the provider client with functionallity for remote TEE attestation of the whole cluster, thus proving the confidential deployment and execution of pods to the Publisher client. |
| 3. | Publisher client: Remote attestation | We will extend the publisher client to support verifying the attestation of the remote trusted execution environment. We will add functionality related to lifecycle management, configuration and monitoring of the running pod. |
| 4. | Publisher client: Management | We will also add functionality to the publisher client which allows it to monitor and manage the lifecycle and configuration of a running pod. |

## Future Plans

After the final milestone, we plan to continue working on expanding Trusted Pods to incorporate more traditional cloud functionality, so that it could become a one-stop solution for developers looking to deploy their applications in the cloud. For example, we would like to add functionality enabling publishers to run one-off tasks in addition to the current functionality for running long-lived services. In addition, we would like to explore running workloads with service mesh topologies and increased resilience, but implementing those would require additional research to balance developer convenience with decentralization. A final direction on our bucket list is to enable the creation of pods that run in dedicated TEE enclaves and bootstrap without any additional supporting software running inside the enclave.

In addition, we would need to work on finding ways for the platform to gain traction, both among small-to-medium cloud providers and application developers. Community building has been a weak point for our team so far, but we hope that as we develop the technology, we would find the channels and people through which to grow this side of the project.

Finally, as Trusted Pods would be an excellent environment to deploy software to algorithmically, we plan on using it as a cornerstone in the implementation of [Apocryph](https://apocryph.network/), a framework and a network for autonomously-operating agents.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We participated in a previous Web3 Foundation Grant, the [Validated Streams](https://github.com/w3f/Grants-Program/pull/1437) project — see there for the original details.

Other financing: We are hoping to approach VC investors (and similar funding options, including the Substrate Builders Program), either during the grant or after its completion.
