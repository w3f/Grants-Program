# Quantum Lock for QBITCOIN

- **Team Name:** BQP
- **Payment Address:** 0x063c75324504D1595a972462A30A230d703f655e (ETH)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/904#issuecomment-1297382772)


## Project Overview :page_facing_up:

The application is for the new project, which introduces the Quantum Lock -- the proof of quantum work (PoQW).

### Overview

We are developing an enhancement to the blockchain consensus protocol to enable it to run on a quantum computer. This enhancement allows an existing blockchain to be quantum enabled, and take advantage of the significant potential benefits that quantum computation promise to deliver.

The most significant benefit is the potential to drastically diminish the energy consumption involved in a classical proof-of-work computation. As our Quantum Lock uses quantum computation with marginal energy cost that is only a fraction of its classical counter-part. (quantum computation is reversible and thermodynamically efficient, thus the expected marginal increase of energy usage of running quantum computation tends toward being comparatively negligible).

Quantum computing is per se energy more efficient and energy consumption does not scale in the same way for classical computing. By some estimation, the reduction in energy consumption as result of processing data with quantum computing can be a factor of 10^-2 to 10^-3, which is huge. There will be competition in improving the ability to do quantum computing between the nodes but such competition cannot be trivially won by more brute force energy consumption. Consequently, we hope that there will be such a competition enabled by our protocol which can promote genial technological progress in quantum error correction, quantum circuit optimization and distributed quantum computation, which would in turn bring substantial positive impact in various domains. On the contrary, traditional PoW in many sense, unfortunately, has zeroed in on a pattern of destructive competition.

The Quantum Lock is developed in Substrate and it will be utilised in the QBITCOIN. We aim to integrate the QBITCOIN with the rest of the Polkadot ecosystem, the way of integration (as an independent network with bridge or as a parachain) is to be determined. We are applying for funding in order to cover the initial development costs for the PoQW technology. Our team consists of several quantum algorithm researchers and quantitative finance specialists. The focus on blockchain and the implementation of quantum technologies is a natural fit for our product specialists.  

We chose this path as we realized that a quantum technology enabled blockchain can be energy efficient, as the nature of a proof-of-work can be radically changed with the application of quantum processors. This inspired us to develop the quantum lock and a blockchain ready for the quantum era. Being able to address one of the most pressing problems in blockchain is a major motivation for our work.

### Project Details

The Quantum Lock embodies the PoQW. The core of the PoQW is a Forrelation function which is, from the complexity-theoretic perspective, an optimal problem to separate bounded-error quantum polynomial-time (BQP), and the polynomial hierarchy (PH). Without detailing the formal definitions, the class BQP contains decision problems that can be efficiently solvable by a quantum computer within a bounded error. A problem separating BQP from PH can be thought of as the optimal problem to distinguish the capability of quantum from classical computers.

The project focuses on the implementation of the mechanics of the Quantum Lock protocol. The complementary part of the project is the “forging“ agent – the term forging is an analogy to classical mining with an iterative calculation of double hash function. The role of the mining agent is to efficiently perform iterative evaluations of the forrelation function such that the solution is found (see below for details). The calculation can be effectively performed using the quantum computer and this a separate stream of research work in our team. The Quantum Lock itself needs to evaluate the Forrelation function only once to verify the validity of the mined block. This task is achievable for any node with a standard computational resource.

The first stage of our project aspires to implement the Forrelation function within the Substrate protocol and create a module that can be natively used. In the subsequent stages, we aim to incorporate the Quantum Lock protocol into a full PoQW consensus in a form of an independent blockchain QBITCOIN. We have separated the implementation of the Quantum Lock from the full protocol to stress the difference between the concept and its application.

Furthermore, the Quantum Lock can be used in a more versatile way and the community could benefit from its independent application. As a complement to the Quantum Lock module, we will provide a wrapper for Python code which access Quantum Resources through Qiskit/Braket libraries. This will allow any Substrate user to easily access numerical modules with quantum subroutine and backends, and thus  further stipulate the “quantum“ aspect within the Ecosystem.

There is an alternative to the proof-of-work consensus protocol, namely do this off chain via offchain worker. This is intended as a further step, where would use the quantum work to serve as a proof of quantum authority (node has ability to perform quantum work). It will be certainly useful when thinking about quantum smart contracts and calculation of useful quantum tasks.

#### Mathematical Background: Forrelation Function

Let us consider two Boolean functions f1 and f2. The Boolean function is in the protocol represented as an array of binary of length nBit. The length of the array is

`nBit = 2 ^ nQubit`

where nQubit is the number of qubits, the parameter which drives the complexity of the problem. For `nQubit`, there `2^nQubit` configurations of bits (and function can take `0/1` on every each of such configuration).

The basic operation we need to do with the Boolean functions is to calculate forrelation. The forrelation is defined as

`forrelation = 0`

`for i1=1,...,nBit`
`for i2=1,...,nBit`

`forrelation += b2PM(f1[i1]) b2PM(f2[i2]) (-1)**bXb(v2b(i1,nB),v2b(i2,nB))`

and the forrelation is normalised as

`forrelation=forrelation * 2 ^ (-3*nQubit/2)`

Further, `b2PM(b)` converts bit to `+1/-1`, and `bXb`  calculates the dot-product of two bit arrays, which are obtained by function `v2b` (it converts the integer into bit array).

The block is considered valid, if and only if:

`forrelation(f1,f2,nBit) within [target-precision;target_precision]`

inclusive the borders. We need to ensure that we use the fix precision of the numbers such that there is no inconsistency in the comparison.

For forging the block, we need to have `f1` and `f2` such that the result is withing the allowed intrerval.

For more references, see the QBITCOIN white paper.

### Header

In order to incorporate the Quantum Lock into the blockchain protocol, we need to amend the information stored in the header. We need to include following items to the header (assuming that certain information is already there, like block id etc), the variables are mentioned in chronological order:

* **Hash of the previous block**– we use classical hash to refer to the previous block. We will use SHA512 (at least). This will ensure continuity of the chain. Type hexadecimal array of given length. Hash is calculated by double hashing. Hash is taken from the header (data are included through Hash of the Merkle tree).

* **Data** – hash of Merkle tree of the transactions

* **Index of the block** – integer, counting the blocks since genesis

* **Nonce** – not needed (mentioned to stress out the difference to classical mining procedure). The function f2 plays a role of the nonce, the Quantum Lock forging protocol provides this piece of data

* **nBit** – the number of bits to represent function with nQubits qubits used for a given block. This is an example of a value, which can be in the header but needs to be controlled by the protocol so miner cannot cheat. The verification of the block requires check of this value. nBit needs to be strictly smaller than nMax.

* **Precision** – this value is provided by the protocol, it depends on the speed of forging over past the past history. The value can be stored in the header for reference, but needs to be verified by the protocol.

* **f1** – Binary array of length nMax, where `nMax` is the hardcoded parameter, which specifies the maximum number of qubits we consider.

  * The value is obtained as follows: Binary representation of the hash of the merkle tree (see data above) and the binary sum with the binary representation of the hash of the previous block. We consider last `nBit` bits of the array.

* **Target** – The value which is target by forrelation the value is derived from the hash of the previous block – the link to previous block. Target is a number within `(-a,a)` interval, where a depends on nQubits.

* **f2** – Binary array of length nMax. Value forged for the quantum lock.

  * This value, together with `f1`, `Target` and `Precision` are basis of the Quantum Lock (this is a Quantum Lock analogue to nonce).

*  **Time** – the time at nanosecond level, when the block is published.

*  **Hash-hash of the entire header.** - This value does not need to be calculated nor stored, but this is the signature of the forged block.

### Remarks

The key variable determined by the protocol is the Target, which is to be aimed by the forrelation. The value depends on the nQubit. We set

Target within `[-1/2^nQubit;1/2^nQubit]`

The Target is obtained as follows:

* Take the Hash of the previous block (hash and hash). The Hash is represented by `nHash` bits.

* Split the interval `[-1/2^nQubit;1/2^nQubit]` into `(2^nHash)-1` equidistant intervals and thus `2^nHash` points, where the smallest one is `-1/2^nQubit` and the largest one is `1/2^nQubit`.

* The Target is then found by matching the grid point within the interval with the Hash value (when the binary representation converted to integer).

The genesis block starts with `nQubit0`. The nQubit can be increased over time. The `nQubit` never goes down. The nQubit determines the Era of the protocol.

#### Forrelation Parameters

Our team is in parallel conducting a research around to assess the parametrisation. In particular, the number of qubits is the leading parameter and will lead the divergence between quantum and classical computer performance.


### Technology Stack

#### UI Frontend

* A UI forks from the substrate frontend template with a new quantum style theme, used for visualization transactions and block information, add an extra visualization panel for quantum information.

#### Blockchain Backend

* Adding a new consensus mechanism called QPoW (Proof of Quantum Work), it will be built as a substrate frame pallet that can be used in all the parachains and even Polkadot.

* Building a blockchain node client based on substrate framework and PoQW with some modification to the block heads, which can run as an independent chain or a parachain in Polkadot ecosystem.

* Adding more functions to RPC-API to implement the interaction between the node client and quantum forrelation solver backend.

#### Forrelation Solver Backend

* Focusing on the forging part (solving the forrelation problem), built as an independent program.

* Offering an RPC-API which gives access to forrelation solving ability on quantum computers. It can be used by the PoQW consensus pallet and any other program that needs a forrelation solver.

* Implementation:

  * Classical solution: an algorithm can be run on a classic computer as a fallback solution when there is no quantum computer available. In the case of classical resources, we consider:

  * Amazon bracket solution: a forrelation solver implemented on the Amazon bracket system.

  * Qiskit solution: a forrelation solver implemented on the most widely used open-source quantum computing library which also contains adapter to many popular quantum computing systems like IBM Q.

#### DevOps Pipeline for Scaling Clusters with Quantum Computers

* Building a devcontainer for developers, which can offer a stable rust development and quantum computing environment.

* Dockerfiles and Scripts used for deploying and scaling clusters with quantum computing on IBM Cloud and AWS.



### Ecosystem Fit

Our project is based on Substrate. We use the modularity of the framework to build all the elements we need to end up with the layer using the proof of quantum work – the QBITCOIN. In addition, we aim to keep the blockchain connected with the rest of the ecosystem (the best way is to be determined, either to aspire to become a parachain or through bridges). The PoQW and concepts of quantum computation can enhance the entire ecosystem, making Substrate/Polkadot the first truly quantum enabled block chain.

The primary audience are the users of the QBITCOIN, which is a blockchain on its own. We do however anticipate in the next iterations to deploy the Quantum Lock across different applications (bridges, for instance).

Firstly, our project introduces the proof of quantum work and thus bridges the abrupt development in the quantum computing with the blockchain. Across the board, every industry is preparing for the adoption of quantum computing and the Quantum Lock is doing this task for the Polka ecosystem. Once the PoQW is deployed, the quantum resources can be further extended and used across (quantum) smart contracts. Secondly, the Quantum Lock gives an extra protection to the consensus against the adversarial quantum miners as the Quantum Lock scales with the growing quantum power and keeps it is proof of work integrity. Last but not least, the application of Quantum Lock and  PoQW paves a way to significantly ameliorate the carbon footprint of classical PoW, since it is energy efficient and de facto serves as a proof of quantum authority rather than burning protocol burning significant amount of global available energy.

Existing projects with quantum computing focus on quantum security, mainly using the lattice cryptography algorithm. Our approach is different, as we focus on integrating quantum technology with the consensus protocol itself. In addition, the Quantum Lock aims to create an economic activity for available quantum resources, which will in turn stimulate the continue development of the quantum computing industry, thus creating a desirable positive feedback loop. The ecosystem that adopts quantum resources early will first and for most enjoy the spring of opportunities coming with the dawning the quantum era.

## Team :busts_in_silhouette:

### Team members

### Contact

- **Contact Name:** bqp team
- **Contact Email:** code@qbitcoin.tech
- **Website:**

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** (the legal entity will be specified in the coming weeks)

### Team's experience

bqp1: Blockchain dimension, blockchain development, Substrate/Rust, distributed databases.

bqp2: Quantum dimension, quantum computing, algorithms for use in financial trading using near term quantum processors.

bqp3: System dimension, quantitative trading development, machine learning.

bqp4: Commercial dimension, front office trading, quantum computing ventures.


### Team Code Repos

Our team repository is just being built up and we do not have anything in public domain yet.

- Team: https://github.com/bqpquantum/


## Development Status :open_book:

The Quantum Lock project is in its development infancy from the Rust perspective. We have been focusing so far on the Quantum Computing side, where we have done extensive research in Qiskit/Braket framework (as part of this project, we will provide Rust wrappers to the Python functions accessing quantum resources, which will open the quantum resources to the Rust/Substrate community beyond our project).

We have discussed the project with Polkadot team and we have been encouraged to apply for this project to start building the POC and implement the chain with proof of quantum work (QBITCOIN).

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 1.5 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 10,000USD (ETH)

### Milestone 1: — Implement Quantum Lock Substrate Modules

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 7,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | 	Follow Substrate |
| 0b. | Documentation | The functionality will be documented in the code. In addition, we add detailed README and link it to the white paper. |
| 0c. | Testing Guide | Forrelation and the adjoint functions will be covered with unit tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | White paper | We extend the existing White Paper we have with cross references to the code, which can also serve as complementary documentation. |
| 1. | Substrate module: Forrelation | The Substrate module will be responsible for the calculation of the Forrelation function and management of the data structures.  |  
| 2. | Substrate module: Quantum Lock | The subsequent Substrate module will utilise the Forrelation module and implements the proof of work based on the Forrelation as described above. |  
| 3. | Substrate chain | We develop the basic framework to implement the consensus mechanism based on the Quantum Lock. The objective is to have a POC. |  


### Milestone 2: — Quantum Computing Libraries

- **Estimated duration:** 0.5 month
- **FTE:**  2
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | 	Follow Substrate |
| 0b. | Documentation | The White paper refers to the algorithms, which utilise the Quantum Computing (real QPU or simulators) to efficiently calculate the Forrelation.  |
| 0c. | Testing Guide | Functions will be tested through unit tests. |
| 0d. | Docker/git | 	The code will be part of the repository. Some of the routines requires login to resources (Qiskit, for example, offers free access to simulated resources, but personal account needs to be created) and thus the vanilla Docker may not be applicable (user provided config files may be needed). |
| 0e. | White paper | Part of the White paper refered above. The quantum routines are not important for the Quantum Lock itself, but they are important for the process of forging (mining using the proof of quantum work). We thus complement the Milestone 1 with these routines. In addition, this will bring the “quantum“ to the Substrate. |
| 1. | Substrate module: Quantum Resource Access | We provide a module using Foreign Language Interface PyO3 to wrap the Python functions, which are responsbile for managing and accessing the quantum resource. This module will have a complementary Python repository, which will hold the body of the functions. |  
| 2. | Substrate chain |  This module complements the chain POC outlined above. |  


## Future Plans

Our long-term plan is to implement the full blockchain based on the proof of quantum work. We use Substrate to be able to bridge to other protocols. The Quantum Lock can be used across different projects and we consider this is a first step to bring the quantum computation into the blockchain – utlimately, we envisage the creation of the Quantum Smart Contracts, where Quantum Computation will be available through the contract.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Meeting with Parity team, who recommended us to join this programme. We have been admitted to bootcamp programme organised by Outliers Venture.  
