# BPF-based ink! smart contracts

:::danger
This Request for Proposals is _closed_, meaning we are not looking for any more proposals on this topic at the moment.
:::

* **Status:** [Closed](https://forum.polkadot.network/t/ebpf-contracts-hackathon/1084/13?u=david)
* **Proposer:** [takahser](https://github.com/takahser)

## Project Description :page_facing_up: 

Substrate's [FRAME contracts pallet](https://docs.rs/crate/pallet-contracts/latest) allows for WASM-based smartcontracts on Substrate, written in [ink!](https://github.com/paritytech/ink), a Rust-based [eDSL](https://wiki.haskell.org/Embedded_domain_specific_language). WASM comes with a lot of advantages, such as high flexibility, tooling, a good compiler ([wasmtime]([https://xxxwasmtime](https://github.com/bytecodealliance/wasmtime))) and a lot of high level constructs. However, these features comes with a cost: complexity of the API and compiler implementation as well as impacts on performance. For example, Substrate does not embed the API for WASM VM due to its complexity.

### eBPF as a WASM alternative

An alternative to WASM here would be [eBPF](https://ebpf.io/), a technology for running sandboxed programs in an operating system kernel. It originated from BSD's [BPF](https://www.freebsd.org/cgi/man.cgi?bpf) that comes with a [permissive](https://en.wikipedia.org/wiki/Permissive_software_license#:~:text=A%20permissive%20software%20license%2C%20sometimes,usually%20including%20a%20warranty%20disclaimer.) open-source license and represents a Linux-compatible implementation thereof, that instead uses a [viral](https://www.lawinsider.com/dictionary/viral-open-source-license) open-source license.

### eBPF constraints

However, vanilla eBPF has some serious constraints:
1. [LLD](https://lld.llvm.org/) can't link BPF code (LLD is the [linker](https://en.wikipedia.org/wiki/Linker_(computing)) contained in [LLVM](https://llvm.org/) which is the compiler framework that Rust's compiler `rustc` relies on).
2. `rustup` doesn't include any `core` nor `std` library for LLVM (and rustc)'s a upstream BPF targets (`bpfeb-unknown-none` and `bpfel-unknown-none`)
3. Loops are [not fully supported](https://lwn.net/Articles/740157/).

While 1) and 2) technically can be worked around by using [bpf-linker](https://github.com/aya-rs/bpf-linker), 3) needs further research. Also, 2) will only work if loops are bound statically due to constraints within the LLVM backend. A viable solution here would be to replace this constraint by using [gas metering](https://github.com/paritytech/wasm-instrument/blob/b51701088e3d4f13b77047237a2480b488e6d099/src/gas_metering/mod.rs#L108).

### eBPF advantages

Despite the constraints, eBPF-based ink! smart contracts would be expected to have the following advantages over its WASM-based counterpart:

- Simplicity: Due to its register-based instruction set it would be easier to compile
- Efficiency and performance

### Previous work

[Alex](https://forum.polkadot.network/u/Alex) and [pepyakin](https://forum.polkadot.network/u/pepyakin) have attempted to use eBPF instead of WASM for ink! smart contracts when attending a hackathon. While they didn't manage to compile to BPF, their resources might be useful as a starting point:

- eBPF contracts [hack report](https://forum.polkadot.network/t/ebpf-contracts-hackathon/1084/3)
- Version of [pallet-contracts that can run eBPF contracts](https://github.com/pepyakin/substrate-seal-ebpf)
- [Example contract](https://github.com/athei/bpf-adder)

### Conclusion

The goal of this RFP is to allow for eBPF-based smart contracts.
To summarize, the rough process should be:

1. Compile Rust-based ink! smart contracts using [rBPF](https://github.com/qmonnet/rbpf), returning an *eBPF ELF file*
2. Store the ELF file on-chain
3. Execute the ELF file within the eBPF VM that will convert it to machine code

