# polka.run - PolkaVM Disassembler

* **Proposers:** [Rotko Networks](https://rotko.net)
* **Payment Address:** 1Qrotkokp6taAeLThuwgzR7Mu3YQonZohwrzixwGnrD1QDT

## Project Overview

### Overview

polka.run aims to be a premier website offering web tools designed to demystify PolkaVM bytecode.
The cornerstone of this suite is a disassembler GUI, enabling users to convert .polkavm binary
files into human-readable formats.  

### Key Features

- Ability to read binary data in both HEX and ASCII formats.
- A robust disassembler that translates binary data into RISC-V assembly instructions.
- A user-friendly GUI, ensuring easy interaction and navigation for various skill levels.
- Do processing as much as possible in the client-side.

### Benefits

- Facilitates a deeper understanding of PolkaVM bytecode, making it accessible to a broader audience.
- Enhances the debugging and development process for PolkaVM-based smart contracts.
- Encourages innovation and experimentation within the PolkaVM ecosystem by lowering the barrier to entry.
- Supports the growth of the PolkaVM community by providing essential development tools.

### Challenges
- Keep it performant and responsive to be able to handle large files like doom.polkavm(1.1Mb),
  while code is running in the client-side browser.
- Loading a lot of html elements gets the browser, so we need to find a way to load only the visible
  elements and load more dynamicly as the user interacts with the interface.
- Make it easy to use even for new developers to learn riscv32e instructions
  without forking repositories and running code locally.
- Frontend development with Rust is still extremely cutting edge and leptos as a framework is still
  in its infancy. This will cause development be done in a slower pace than we are used to due
  to the [tooling not being as mature](https://youtrack.jetbrains.com/issue/RUST-11857/RustRover-Failing-to-Find-Methods-Autocompletions-in-Leptos-RSX-fileRust-with-HTML-inside-macros) as we would like it to be.
- Working with alpha level upstream as dependency, means that we will have to be prepared to be alert
  for breaking changes and be ready to adapt to them. Also building too fancy features on top of
  upstream might be risky, as they might change in the future. 
- PolkaVM does not have any documentation yet, so we will have to rely on the source code.

### Tech stack

  #### frontend:
  - [leptos](https://leptos.dev) - Rust frontend framework
  - [UnoCSS](https://unocss.dev) - CSS engine
  - [leptos-use](https://leptos-use.rs/) - Rust frontend state management

  #### client-side backend: 
  - [rustlang](https://www.rust-lang.org/)
  - [polkavm](https://github.com/koute/polkavm) - bytecode parser
  - [gloo-worker](https://github.com/rustwasm/gloo/tree/master/gloo-worker) - WebWorkers
  - [web_sys](https://rustwasm.github.io/wasm-bindgen/api/web_sys/) - wasm bindings for browser API's
  - [rexie](https://) - IndexedDB wrapper

### Development Plan

#### [x] Phase 1: Research and Design

- **Research on PolkaVM Bytecode:** Conduct an in-depth study of PolkaVM bytecode specifications to understand the technical requirements.
- **Tech Stack Selection:** Choose the appropriate technology stack based on research findings and project needs.
- **GUI Design:** Design a user-friendly and functional Graphical User Interface (GUI), drawing inspiration from PE-bear’s structure to enhance usability.

#### [x] Phase 2: Development of prototype

- **Prototype Development:** Build a prototype to test the core functionalities including:
   - Integration of the upstream PolkaVM to parse for assembly instructions.
   - Incorporation of client-side file upload and processing mechanisms.
   - Implementation of UI to show memorydump in offset, HEX and ASCII. 
   - Development of a graphical representation of disassembled instructions with offset and HEX.

#### Phase 3: Backend Development (Client-Side Data Management and Processing)

1. **Setup and Dependencies:**
   - Integrate Rexie for efficient IndexedDB interactions, setting up a robust
     client-side database environment.
   - Define a detailed IndexedDB schema for storing `.polkavm` files.

2. **IndexedDB Data Management:**
   - Develop efficient read/write functions using `web_sys::FileReader` for IndexedDB.
   - Implement pagination within IndexedDB to manage large data sets effectively.

3. **Chunk-based Processing:**
   - Utilize gloo worker for creating web workers to handle data processing without
     occupying main thread for UI.
   - Use Web Workers for the disassembly of file segments.
   - Dynamically determine segment sizes for optimized processing and store processed data
     in IndexedDB for quick retrieval.

#### Phase 4: Frontend Development (User Interface and Interaction)

In Phase 4, we're focusing on advancing the user interface and interaction,
utilizing Rust and Leptos framework, and leveraging leptos-use utilities for
efficient data handling:

1. **Interactive Master Scroll UI**:
   - Develop a scroll bar for the entire data set, allowing swift navigation.
   - Auto-update the `OffsetScrollState` upon user selection on the scroll bar
     to fetch and load the relevant data section, optimizing HTML element loading.
   - Dynamically calculate and adjust offsets based on user interactions for
     precise data representation.

2. **Enhanced Data Loading**:
   - Revise data fetching to pull from IndexedDB, triggered by `OffsetScrollState` changes.
   - Synchronize `MemoryDumpView` and `DisassemblyView` to accurately display data
     relevant to the current offset.

3. **Optimized Scrolling**:
   - Guarantee smooth, independent scrolling in both `MemoryDumpView` and `DisassemblyView`.
   - Each view independently manages scroll events for a fluid user experience.

4. **Performance and Usability Optimization**:
   - Prioritize swift data retrieval and rendering, focusing on smooth transitions
     and navigation within the application.

5. **Comprehensive Testing for Jump-to-Data**:
   - Conduct extensive testing on the jump-to-data functionality to ensure precision
     in offset calculations and data loading responsiveness.
   - Test across various scenarios and data volumes for maximum reliability and accuracy.

### Ecosystem Fit

PolkaVM, with its deterministic execution, stellar performance, and robust security, has emerged
as a strong contender to WASM in the virtual machine space, particularly for smart contracts and
extending to broader applications such as parachain verified functions.  

Our focus is on developing tools that not only enhance the learning experience but also lower the
entry barrier for new developers, enabling them to efficiently create both host and guest functions
within the PolkaVM ecosystem.  

## Team

### Team Members

- [Tommi](https://github.com/hitchhooker): UI Developer
- [Dan](https://github.com/d-r): Backend Developer


### Contact

- **Contact Name:** Tommi Niemi
- **Contact Email:** hq@rotko.net
- **Website:** https://rotko.net

### Legal Structure

- **Registered Address:** Akadeemia tee 21-4, Tallinn, 12618 Estonia
- **Registered Legal Entity:** Rotko Networks OÜ (16740319)

### Team's Experience

Team is spearheaded by seasoned professionals, each bringing a wealth of knowledge and experience to the table.  

Tommi, ecosystem validator for around 3 years and IBP infrabuilder for South East Asia at [Rotko Networks](https://rotko.net/docs/introduction.html), is a full-stack developer. Maintains open Proxmox Ansible rolebooks for running blockchains([Unlabored](https://github.com/rotkonetworks/unlabored)).

Dan is a seasoned veteran in the field of programming, boasting over 20 years of experience.
He began his journey in the 90s programming with C, drawing inspiration from the music demoscene.
His expertise in Rust and functional programming, combined with a passion for writing clear and efficient code.  

### Team Code Repos

- [polka.run master](https://github.com/rotkonetworks/polka.run)
- [polka.run dev(Milestone II worked here)](https://github.com/rotkonetworks/polka.run/compare/master...dev)
- [Unlabored - Proxmox Ansible infrastructure for blockchains](https://github.com/rotkonetworks/unlabored)

## Development Roadmap

### Overview

- **Duration:** 24 weeks
- **FTE:** 0.458
- **Total Costs:** 26400 USD

### Milestones

#### Milestone 1 — Disassembler GUI Core Development

- **Estimated Duration:** 7.5 weeks
- **FTE:** 1
- **Costs:** $18,000 USD

|  Number | Deliverable | Specification |
|--------:|-------------|---------------|
| **0a.** | License | Dual-licensed under Apache 2.0 and MIT for maximum compatibility with the open-source ecosystem. |
| **0b.** | Documentation | Comprehensive documentation including development setup, architecture overview, and user guide. Hosted on GitHub and project website. |
| **0c.** | Testing Framework | Implementation of a robust testing framework covering unit tests for all major components and end-to-end integration tests. |
| **0d.** | Core Disassembler Engine | Development of a core disassembler engine for .polkavm files, with capabilities to handle files up to 4MB. Integration of web storage for session persistence and efficient data paging for optimized performance. |
| **0e.** | User Interface Implementation | Creation of a user-friendly GUI with a functioning menu, lazy-loaded scrolling for memory and disassembly data, and interactive data linkage. Emphasis on responsive design for desktop users. |
| **0f.** | Client-Side Processing | Implementation of client-side processing with WebAssembly and HTML5's File API for secure file handling. Use of IndexedDB for local storage and data retrieval, enhancing privacy and security. |
| **0g.** | Interactive Master Scroll UI | Development of an interactive master scroll UI to enable users to navigate and jump to specific data points within a 1MB blob. Implementation of `OffsetScrollState` for synchronized data loading across multiple views. |
| **0h.** | Data Management and Optimization | Setup of efficient IndexedDB data management strategies. Implementation of chunk-based processing with Web Workers and optimization for smooth, responsive data loading and rendering. |
| **0i.** | Maintenance Plan | Development of a maintenance plan detailing regular updates, security patches, and support strategies. |

## Future Plans

- **Enhanced Disassembler Features:** Adding hint fields to each instruction for better understanding(LSP?).
- **RISC-V Assembly LSP Development:** Crafting a Language Server Protocol to provide interactive
  features like hover/click details for disassembled RISC-V code.
- **Interactive Binary Editor:** Introducing a tool for editing and reassembling binary data,
  enhancing user interaction and control.
- **Binary Execution on Custom Host Functions:** Implementing functionality to run binaries
  with bespoke host functions for advanced testing and experimentation.
- **Color coded disassembly output:** Color code the disassembly output to make it easier to read.
  Add color coding to offset navigation bar to make it easier to navigate.
- **Code Reconstruction and Reassembly:** Long-term goal to enable editing and reconstruction
  of disassembled code for complete cycle management.

## Additional Information

### Inspirational projectts

- [PE-bear](https://github.com/hasherezade/pe-bear) -  A comprehensive, user-friendly tool for analyzing
and editing PE (Portable Executable) files. It's a great example of combining functionality with ease
of use, something we strive to achieve in our own tools.
- [blinkenlights](https://justine.lol/blinkenlights/) - An innovative project that creatively
demonstrates system internals and operations. Its unique approach to visualizing and interacting with
system processes is both educational and engaging.
- [binaryninja](https://binary.ninja/) - Binary Ninja is an interactive decompiler, disassembler, debugger,
and binary analysis platform built by reverse engineers, for reverse engineers.

### MVP

MVP GUI is already done and available for use at [polka.run](https://polka.run/disassembler)
Can be tested with the [hello_world.polkavm](https://github.com/koute/polkavm/blob/master/guest-programs/output/example-hello-world.polkavm) and [doom.polkavm](https://github.com/koute/polkavm/blob/master/examples/doom/roms/doom.polkavm) binaries.

[![Video application](http://img.youtube.com/vi/LkAKGYxx9Ec/0.jpg)](http://www.youtube.com/watch?v=LkAKGYxx9Ec "Video Application")
