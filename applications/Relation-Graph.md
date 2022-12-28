# Relation Graph

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** Relationlabs
- **Payment Address:** 0x9fE784bD844C6c7eB7a570467937e6005eEd1C4C   Ethereum (USDT/DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status:** [Terminated](https://github.com/w3f/Grant-Milestone-Delivery/pull/569#issuecomment-1299292773)

## Project Overview :page_facing_up  

### Overview

`Relation Graph` is a substrate pallet that allows anyone to use GraphDB in [Substrate platform](https://substrate.io/).
`Relation Graph` provides organizations with ready-to-use GraphDB service for successfully running Dapps on the Substrate.  using `Relation Graph` Dapps builders can focus on bussiness logic by removing the complexities of Substrate.

### Project Details

**Relation Graph**

`Relation Graph` is a substrate pallet that allows anyone to use GraphDB in [Substrate platform](https://substrate.io/).
`Relation Graph` provides organizations with ready-to-use GraphDB service for successfully running Dapps on the Substrate.  using `Relation Graph` Dapps builders can focus on bussiness logic by removing the complexities of Substrate.
1、one click deploy on substrate;
2、Mask complex all on-chain operations with sparql;
3、sparql as blockchain.

It supports the following specifications:
- [SPARQL 1.1 Query](https://www.w3.org/TR/sparql11-query/), [SPARQL 1.1 Update](https://www.w3.org/TR/sparql11-update/), and [SPARQL 1.1 Federated Query](https://www.w3.org/TR/sparql11-federated-query/).
- [Turtle](https://www.w3.org/TR/turtle/), [TriG](https://www.w3.org/TR/trig/), [N-Triples](https://www.w3.org/TR/n-triples/), and [N-Quads](https://www.w3.org/TR/n-quads/).
- [SPARQL 1.1 Query Results JSON Format](https://www.w3.org/TR/sparql11-results-json/) and [SPARQL 1.1 Query Results CSV and TSV Formats](https://www.w3.org/TR/sparql11-results-csv-tsv/).

![arch.png](https://user-images.githubusercontent.com/91399393/165587783-c55954fe-6d72-4702-95d9-75a4521e980d.png)

**Usage**

1. SPARQL Update

Call extrinsic `sparql_update` with SPARQL for `insert, update, delete` operations.

Try SPARQL update in [Pallet Interactor](http://localhost:8000/substrate-front-end-template) as follows.

- Insert Data

Sample SPARQL: insert a record for person `P001`

```sparql
INSERT DATA
{
   :P001 :name "Luna" ;
         :gender "Female" ;
         :age 35 ;
         :birthdate "1986-10-14"^^xsd:date ;
         :friends :P2, :P3 .
}
```

- Update Data

Changes to existing triples are performed as a delete operation followed by an insert operation in a single update request.
The specification refers to this as `DELETE/INSERT`

Sample SPARQL: update age to `36` for person `P001`

```sparql
DELETE
{ :P001 :age ?o }
INSERT
{ :P001 :age 36 }
WHERE
{ :P001 :age ?o }
```

- Delete Data

Sample SPARQL: delete all properties of person `P001`

```sparql
DELETE WHERE
{
:P001 ?p ?o .
}
```

Sample SPARQL: delete partial properties of person `P001`

```sparql
DELETE WHERE
{
:P001 :age ?age;
      :name ?name .
}
```

2. SPARQL Query

Call RPC `sparql_query` with SPARQL for `query` operations.

```bash
curl -H "Content-Type: application/json" \
    -d '{"id":1, "jsonrpc":"2.0", "method": "sparql_query", "params": ["SELECT ?name ?age  WHERE { :P1 :name ?name; :age ?age .}"]}' \
    http://localhost:9933    
```

### Ecosystem Fit

- Relation graph  can effectively reduces the development threshold of building Web3 decentralized applications which contains large data.
- It will bring a pallet of graph database to Polkadot ecosystem.

## Team :busts_in_silhouette:

### Team members

- Jessica Chang  Founder
- Yann Ren  CTO
- Santry Huang  CMO
- Ben Zhang  Chief Software Architect
- Joe Guo  CPO

### Contact

- **Contact Name:** Joe Guo
- **Contact Email:** pikajoe@relationlabs.ai
- **Website:** <https://relationlabs.ai/>

### Legal Structure

- **Registered Address:** 10 ANSON ROAD, #11-20, INTERNATIONAL PLAZA, SINGAPORE 079903
- **Registered Legal Entity:** RELATION LABS PTE. LTD.

### Team's experience

- Jessica Chang  Founder

Crypto and commodity trader

5+ years of blockchain experience

CFA, ACCA

Visiting researcher at Imperial College NUS

- Yann Ren  CTO

15+ years of experience in cloud computing, bigdata and large-scale distributed systems.

Led team of 200+ members AsiaInfo, HP, AWS

- Santry Huang  CMO

Former CMO at Patract Labs

9+ years of marketing and operation and experience

- Ben Zhang  Chief Software Architect

former core development engineer of IBM, AWS and other companies,

10+ years of back-end development experience, Problem solving Bigdata

- Joe Guo  CPO

former product leader of top blockchain companies,

6+ years of project experience in finance, logistics, social networking, games products

### Team Code Repos

- <https://github.com/relationlabs>
- <https://github.com/gembin>
- <https://github.com/bbo268>

### Team LinkedIn Profiles (if available)

- Jessica Chang, Founder, <https://www.linkedin.com/in/jessica-chang-a63313235/>
- Santry Huang, CMO, <https://www.linkedin.com/in/santryhuang/>
- Yann， CTO， <https://www.linkedin.com/in/yann-ren-361b91235/>
- Joe，CPO，<https://www.linkedin.com/in/joe-guo-783780ab/>

## Development Status :open_book:

- We have finished a version on Internet computer.It is a graph database written in Rust and deployed on WASM.Ereryone can try it here(<https://kziov-eaaaa-aaaag-aaaxa-cai.ic0.app/ic_graph_developer.html>).

## Development Roadmap :nut_and_bolt:

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 — Relation Graph deploy as pallet，contains insert,query,delete and update

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation and a tutorial of use and deploy pallet |
| 0c. | Testing Guide | We will add unit tests to cover all basic logic.|
| 1. | wasm package | We will create a wasm package that can deployed as pallet,contains insert,query,delete and update|  

### Milestone 2— Expand the basic functions of database，contains ACL,OGM and subgraph

- **Estimated duration:** 2 month
- **FTE:**  2
- **Costs:** 16,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will enhance inline documentation and create a tutorial of ACL,OGM and subgraph. |
| 0c. | Testing Guide | We will add unit tests to cover all ACL,OGM and subgraph.|
| 0e. | Article | We will publish an article that explains function and structure of Relation graph,and helping developers understand it.  |
| 1. | wasm package | We will create a updated wasm package that can deployed as pallet,contains ACL,OGM and subgraph.|  

### Milestone 3 — Finish use case，scaffold and demo for Relation Graph (scaffold is a package of technique tools for building and using the relation graph easily)

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide documentation of use case，scaffold and demo for Relation graph |
| 0c. | Testing Guide | we wil provide functional tests to ensure scaffold  functionality and robustness. In the guide, we will describe how to run the scaffold. |
| 1. | package of scaffold | We will create a package of scaffold ,developer can easily and quickly bulid their business function. |
| 2. | demo | A demo to show the process use the scaffold,built by js+rust.It will contains simple UI. |
| 3. | open source code | the actual pallet as open source code. |

## Future Plans

- Based on Relation Graph, we intend to provide a Web3 social DAPP build on substrate.
