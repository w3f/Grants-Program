# Parachain Validation Conformance Testing

* **Status:** Open
* **Proposer:** [bkchr](https://github.com/bkchr)

## Project Description :page_facing_up: 

Each Polkadot host implementation that wants to take part in consensus needs to implement the Parachains protocol. Part of the Parachains
protocol is the execution of the Parachain Validation Function (`PVF`). The `PVF` is a wasm blob that is required to provide the `validate_block`
function that takes a fixed set of arguments (part is the proof of validity from a collator), validates the proof of validity and returns (on success) some
information back to the Polkadot host implementation. The `PVF` is a black box for the Polkadot node and it can only use the `validate_block` to 
make use of it. The execution of these `PVF`s is required to stay in certain limits to reach consensus across different node implementations,
node versions, different hardware configuration and OS configurations. Some of these limits are:

- A deterministic maximum stack depth. All node implementations should support the same stack depth.
- A deterministic maximum memory. All node implementations should support the same maximum memory usage per `PVF` execution.
- A deterministic maximum execution time. All node implementations should execute a given `PVF` in the same maximum time frame.
- A deterministic compilation/preparation of the `PVF`. All node implementations should compile/prepare a given `PVF` in the same maximum time frame and maximum memory budget.

There are probably a lot of other limits as well. To ensure that all node implementations/versions are staying in these limits it is required
to have conformance tests. These should include basic execution of valid wasm files over to complex wasm files that ensure that the compilation/preparation 
stays in the given limits and/or helps to define these limits properly across different implementations. 

**Useful resources:**
- [The Polkadot Parachain Host Implementers' Guide](https://paritytech.github.io/polkadot/book/index.html) 
- [Pre-checking for PVF Compilation time](https://github.com/paritytech/polkadot/issues/3211) 

## Deliverables :nut_and_bolt:

- Basic conformance tests that are running valid wasm files
- Conformance tests that are resulting in running over the limits.
- Fuzzing across different implementations ensuring that all are coming to the same result

This is more some never ending task trying to find issues in different implementations, getting them fixed and searching for new vulnerabilities. 
In the end these tests should ensure that updating wasm engines, introducing new node implementations 
etc can be done in a sane way without hoping for the best.
