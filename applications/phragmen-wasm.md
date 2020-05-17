# Open Grant Proposal

- **Project:** Phragmen WASM
- **Proposer:** Colm3na
- **Payment Address:** 3982fvdPfs1hHUF7BYc2GbaU3LdfN4Ruzg

## Project Description :page_facing_up:

Create a new phragmen implementation for WASM.

This implementation is intended to work as a library, so it can be embedded
in any application and since it will be a WASM module, it could potentially run
inside any programming language or runtime.

Unlike [offline-phragmen](https://github.com/paritytech/offline-phragmen), the
implementation will not require external services
(like a substrate node). You will be able to pass any input to the algorithm and
it will just compute the result. This can be useful for block explorers like
Polkastats which already have all the information needed to run the algorithm
and currently needs to run `offline-phragmen` binary which fetches again the
data.

## Team :busts_in_silhouette:

- **Members:** Mario, Fredy, Diego
- **LinkedIn Profiles:**
  - [Mario](https://www.linkedin.com/in/mariopinouceda/)
  - [Fredy](https://www.linkedin.com/in/alfredoluque/)
  - [Diego](https://www.linkedin.com/in/dieferbar)
- **Code Repos:** [phragmen-wasm](https://github.com/orgs/Colm3na/teams/phragmen/repositories)
- **Website:** https://colmenalabs.org
- **Legal Structure:** Colmena Labs, Calle el Aceitunillo, 9, Local, 6B, 41930 Bormujos, Sevilla.
- **Team's Experience:**

Team ColmenaLabs has a vast expertise in blockchain technologies, conducting Ethereum meetups since earlier 2016. ColmenaLabs is also one of the most active blockchain communities of the whole Iberian Peninsula (Spain + Portugal). Our previous blockchain experience has facilitated our landing in the Proof of Stake era, where we are participating so far with great success and good reputation on many projects. We have 2 winners of the Game of Stake Hackathon, we are validating on Kusama testnet and we support Polkadot testnets since PoC-1. Our latest contribution as well as the reason of this application is our new beloved child, polkastats.io

## Development Roadmap :nut_and_bolt:

- **Total Estimated Duration:** 12 weeks
- **Total Costs:** 3.15 BTC

### Milestone 1

- **Estimated Duration:** 4 weeks
- **Costs:** 1.25 BTC

| Number | Deliverable | Specification                                             |
| ------ | ----------- | --------------------------------------------------------- |
| 1.     | library     | PoC core library of the algorithm targeting `wasm32-wasi` |
| 2.     | wrapper     | PoC Rust wrapper around the core library                  |

### Milestone 2

- **Estimated Duration:** 3 weeks
- **Costs:** 0.64 BTC

| Number | Deliverable | Specification                                                                                       |
| ------ | ----------- | --------------------------------------------------------------------------------------------------- |
| 1.     | library     | Release core library of the algorithm targeting `wasm32-wasi` with unit tests                       |
| 2.     | wrapper     | Release Rust wrapper around the core library with unit tests                                        |
| 3.     | binary      | Rust CLI using the library. It will allow to run phragmen on existing data and get a JSON as result |

### Milestone 3

- **Estimated Duration:** 3 weeks
- **Costs:** 0.64 BTC

| Number | Deliverable   | Specification                                                                                 |
| ------ | ------------- | --------------------------------------------------------------------------------------------- |
| 1.     | PoC library   | TypeScript wrapper library around the WASM library intended to run in the browser and Node.js |
| 2.     | Documentation | Library API documentation                                                                     |

### Milestone 4

- **Estimated Duration:** 2 weeks
- **Costs:** 0.62 BTC

| Number | Deliverable | Specification                                                                                       |
| ------ | ----------- | --------------------------------------------------------------------------------------------------- |
| 1.     | Polkastats implementation | Release backend version able to leaverage phragmen-wasm output                        |

## Additional Information :heavy_plus_sign:

- We'll be targeting `wasm32-wasi` so we can use
  [wasmtime](https://github.com/bytecodealliance/wasmtime) or
  [wasmer](https://wasmer.io/) to create new wrappers in the future.
