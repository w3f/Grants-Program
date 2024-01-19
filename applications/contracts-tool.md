# Contracts performance messurement tool

- **Team Name:** Gloslab
- **Payment Address:** Fiat 18.05.2023, 20:22
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

The key objective of this grant is to build a tool which allows to compare contracts performance and to track its regressions.
Subject of comparison are solidity, and ink! contracts running on parachains (pallet-contract and pallet-evm).
Tool will be integrated with CI and running each night, generating measurements data and providing its visualizations.

Our team has strong interest in contracts development on Polkadot and building Polkadot ecosystem.

### Project Details

#### Generating benchmarking results

Project is based on smart-bench Parity repo https://github.com/paritytech/smart-bench and developed in rust language.
Apart of existing ink! and solidity contracts support, will be introduces support for solang compiled contract running on pallet-contract.
Finally the tool will measure performance of:
- Ink! contract run on pallet-contract (currently supported)
- Solidity contracts compiled with solc run on pallet-evm (supported but outdated)
- Solidity contracts compiled with solang and run on pallet-contract (new functionality)

The tool is run with following command:
```
smart-bench [OPTIONS] --instance-count <INSTANCE_COUNT> --call-count <CALL_COUNT> <TYPE> [CONTRACTS] --url <WS_NODE_ADRESS>
```
where as a type can be used ink-wasm, sol-wasm or evm

example:
```
smart-bench ink-wasm erc20 erc1155 --instance-count 10 --call-count 20 --url ws://localhost:9988
smart-bench sol-wasm erc20 erc1155 --instance-count 10 --call-count 20 --url ws://localhost:9988
smart-bench evm erc20 erc1155 --instance-count 10 --call-count 20 --url ws://localhost:9988
```

The performance measurements are run against test network, which will be setup using Zombienet.
Required scripts, which spins network and run smart-bench, will be delivered with the tool.
Smart bench collects following stats:
```
Block number
PoV size 
Block Weight - reference time and proof size
Witness
Block size
Number of extrinsics processed in block
```

#### Integrating Smart-bench with CI/CD

Architecture for performance tracking tooling is built upon the concept of [Flat Data](https://githubnext.com/projects/flat-data), whereas sets of data is stored within repository itself. Data is being created and processed for storage on a timely schedule.

Github repository used in this architecture is self sufficient in terms of spinning up benchmarking environment, storing and processing benchmark results created within run of Github Action workflow. Repository contains all configuration files required for provisioning of benchmarking environment. Other provided utilities also allow to effortlessly start local Grafana and InfluxDB instances (available as Dockerfiles and Docker Compose configuration) for out of the box experience of running visualizations against data where all of this is part of the same repository. For syncing of most recent data standard git operations apply (sync local git repository with remote origin to get latest data).

Github Action is responsible for running smart-bench software against Zombienet to create benchmarking results. Results are then post-processed to also include various metadata about environment used for its creation. Results are then committed and pushed to the repository. Metadata of benchmark results consists of various properties such as (consider following as draft, to be defined exactly as implementation proceeds):

- Commit hashes of Zombienet, parachain implementation (Moonbeam or contract-pallet based) and smart-bench
- Human readable versions of above if can be determined
- Type of contract
- Contract compiler
- Parachain to run the contract

Measurements themselves are raw data as returned by smart-bench software. 

Performance tracking is concerned with Moonbeam and pallet-contracts. Coverage of the benchmarks strives to create results for binary release of parachains. So for every binary release of parachain, results will be created and stored in the repository.

Summary of items provided by repository:
- Dockerfiles to run grafana, influxdb, smart-bench
- Docker Compose to ease local setup of all components
- Scripts to transform smart-bench output to data format ingestible by InfluxDB
- Scripts uploading data to InfluxDB will try to parse benchmarking data from smart-bench provided format and accompany them with metadata to create contexts for visualizations. Repository will also provide configuration files for dashboards of Grafana

The Grafana dashboard provided offers a comprehensive regression detection feature, enabling the visualization of performance comparisons between Ink! and pallet-contracts against Solidity and Moonbeam. The dashboard prominently displays the contracts' throughput as a key metric, calculated individually for each contract type. The graph within the dashboard showcases the temporal dimension on the X-axis, representing dates, while the Y-axis represents the throughput. This graph comprises three distinct data series, each corresponding to one of the contract types. The graph's are preserved as PNG dumps and stored in the repository.

Limitations:
the project does not compile the contracts by itself, contracts are delivered in binary form.


### Ecosystem Fit

The project is useful for ecosystem at contracts development stage to track its performance and regressions on Polkadot.
It is going to be used also to measure ink! language performance by Parity core team.

## Team :busts_in_silhouette:

### Team members

- Sebastian Miasojed
- Karol Kokoszka

### Contact

- **Contact Name:** Sebastian Miasojed
- **Contact Email:** s.miasojed@gmail.com
- **Website:** 

### Legal Structure

- **Registered Address:** Racula-Janusza Korczaka 15B, 66-004 Zielona Góra, Poland, NIP:5961572852
- **Registered Legal Entity:** Gloslab Sebastian Miasojed

### Team's experience

We combine development and architecting skills from embedded world, cloud systems and apply them to crypto world.
Until now the team has shown his proficiency aligning smart-bench with newest libraries required by ink! contracts.
- https://github.com/paritytech/smart-bench/pull/32
- https://github.com/paritytech/smart-bench/pull/31
- https://github.com/paritytech/smart-bench/pull/28
- https://github.com/paritytech/blockstats/pull/22

### Team Code Repos

- https://github.com/smiasojed
- https://github.com/karolk91

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/sebastian-miasojed-83b6123
- https://www.linkedin.com/in/karol-kokoszka-a66959103


## Development Status :open_book:

Work has been started, smart bench has been updated with new libraries and is able to build and run on test net with ink! contracts.
- https://github.com/paritytech/smart-bench/pull/32
- https://github.com/paritytech/smart-bench/pull/31
- https://github.com/paritytech/smart-bench/pull/28
- https://github.com/paritytech/blockstats/pull/22

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 7 months
- **Full-Time Equivalent (FTE):**  0.3
- **Total Costs:** 15000 EUR

### Milestone 1 Smart-bench updated — Basic functionality

- **Estimated duration:** 10 weeks
- **FTE:**  0.5
- **Costs:** 6500 EUR

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up test net and run contracts with transactions. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | Create Docker and docker-compose related configurations to build and start smart-bench, Zombienet and parachains to generate benchmarking results. |
| 1. | Updated evm contracts | We will update tool with support for newest Moonbeam parachain. |
| 2. | Support for solidity-wasm contracts | We will deliver support for solidity contract compiled with solang to wasm. |
| 3. | Launch scripts | Scripts which will allow to launch the tool on Zombienet. |


### Milestone Smart-bench in CI/CD flow — Additional features

- **Estimated Duration:** 23 weeks
- **FTE:**  0,25
- **Costs:** 8500 EUR

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the performance tracking tooling to generate the graphs. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | Create Docker and docker-compose related configurations to run Grafana and InfluxDB pre-configured with dashboards and measurements. |
| 0e. | Article | We will publish article on Medium that explains what was done/achieved as part of the grant. |
| 1. | Github Actions benchmark jobs | Create workflow and implement a job to utilize Dockerized benchmarking for generating results and uploading them to repository. |
| 2. | Results processing tools | Implementation of tooling to translate smart-bench output format to format of InfluxDB. |
| 3. | Github Actions workflow | Create complete workflow running parallel jobs based on matrix strategy for all missing measurements. |
| 4. | Updated smart-bench | We will update the tool to use new subxt crate |


...


## Future Plans

We are going to promote the project writing article and involve other developers to maintain it in the future

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Parity team

