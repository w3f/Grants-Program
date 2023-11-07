# Decentralized Private Computation

- **Team Name:** Ann
- **Payment Address:** 18ncUy5KM8ydNGQC6opKnEEhpDLr82aHpS (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:


This Project based in [ZEXE](https://github.com/AleoHQ/zexe/tree/master) and [ZEXE paper](https://eprint.iacr.org/2018/962).
In order to  implement ideal_ledger,plain_dpc,delegable_dpc Pallet. 


### Overview

This project will implement ideal_ledger,plain_dpc,delegable_dpc pallet (The following content is taken from  ZEXE paper):

1. ideal_ledger pallet
    In ZEXE's prototype.It is simply an ideal ledger, an append-only log of valid transactions that is stored in memory.
    It maintain a Merkle tree.
2. plain_dpc  pallet
    It is decentralized private computation (DPC) schemes, a cryptographic primitive in which parties with access to an ideal append-only ledger execute computations offline and subsequently post privacy-preserving, publicly-verifiable transactions that attest to the correctness of these offline executions. 
3. delegable_dpc  pallet
	It is a DPC scheme in which a user can delegate to an untrusted worker the expensive computations associated with producing a transaction. The security goal is that the worker should not be able to produce valid transactions that have not been authorized by the user.
4. dpc_cli
    It is offline proof computation cli tool.It implements `execute` function part of plain_dpc and delegable_dpc.



## Team :busts_in_silhouette:

### Team members

- Aric Lee 
- Zen Zhou

### Contact

- **Contact Name:** Aric Lee 
- **Contact Email:** aric0x02@gmail.com
- **Website:** None

### Legal Structure

None

### Team's experience

Aric has 22 years of software development experience and 5 years working in Blockchain developer. Now working as a freelancer. He has 3 years Rust development experience and 5 years NodeJs experience.

Zen has 22 years of software development experience and 1 years working in Blockchain developer. He has 1 years Rust development experience .
### Team Code Repos

- https://github.com/aric0x02
- https://github.com/ant8ee

### Team LinkedIn Profiles (if available)

None

## Development Status :open_book:
[DPC](https://github.com/aric0x02/substrate-dpc.git)

### Overview

- **Total Estimated Duration:** 6 month
- **Full-Time Equivalent (FTE):**   1 FTE
- **Total Costs:**  30,000 USD. 

### Milestone 1  — ideal_ledger pallet

- **Estimated duration:** 2 month
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 and MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | ideal_ledger pallet| We will implement main functions:`push transaction`,`prove transaction`,`verify transaction` and so on. |


### Milestone 2 — plain_dpc  pallet

- **Estimated Duration:** 2 month
- **FTE:**  1
- **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 and MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | plain_dpc  pallet | We will implement main functions:`verify` and so on. |
| 2. | dpc_cli  tool | We will mainly implement `execute` part of **DPC** and so on. |

### Milestone 3 — delegable_dpc  pallet

- **Estimated Duration:** 2 month
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 and MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the usage detail of DPC pallets. |
| 1. | delegable_dpc  pallet | We will implement main functions:`verify` and so on.  |

## Future Plans





## Additional Information :heavy_plus_sign:

**How did you hear about the Maintenance Grants Program?**  personal recommendation .


