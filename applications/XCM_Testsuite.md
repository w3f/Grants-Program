# Open Grant Proposal

**Project Name:** XCM Testsuite

**Team Name:** MixBytes

**Payment Address:** 0xc8d968165cd47b90Cf390626017d6D69CA242a0F


## **Project overview**


### Overview

XCM Testsuite is a tool for the development of cross-chain messaging logic in the Polkadot ecosystem. It allows to run a pack of parachains, register messaging channels between them and run tests that send and receive cross-chain messages. Also it allows to test interfaces to both connected parachains and analyze their behaviour by reading one log instead of three (or more).

The problem, solved by this software, is complicated testing scenarios for any XCM interactions. To test logic one needs to run a relay chain, two parachains with different pallets, setup message channels, run transactions, and collect logs. XCM Testsuite allows doing it by running chains in separate processes on a single machine, dropping them when stopped, allowing it to perform testing in a repeatable way.

**Key benefits:**
*   Easy development and debugging of XCM-based protocols
*   Possibility to develop “sending” and “receiving” logic in the same codebase
*   Stateless repeatability of testsware development

### Project details

XCM Testsuite is a bunch of several components:
*   runtime part of relay chain (combination of pallets)
*   runtime part of parachain-1 (combination of pallets)
*   runtime part of parachain-2 (and other parachains if needed)
*   python script to perform setup actions (register parachains in relay chains, confirm registrations)
*   bash config containing testing parameters, versions of chains, Rust, commit numbers
*   main bash script combining all components into a testsuite (described below)

The main script of XCM Testsuite builds all needed runtimes (relay chain, parachains) using given versions and commit numbers, performs cleanup before start (if needed), starts each chain as a pack of processes presenting relay chain validators and parachain collators (example: 4 validators of relay chain + one collator of parachain-1 + one collator of parachain-2), runs Python script to register cross-chain messaging channels.

```bash
root@ubuntu-s-8vcpu-16gb-fra1-01-TEMP:~/xcm-testsuite/scripts# ./init.sh
[SETUP] It will start 4 validator nodes and 2 parachain nodes (paraid 100 and 200)
[SETUP] use next parachain addresses to access accounts in parachains and relay chains
[SETUP] in relay chain  parachain 100 address 5Ec4AhP7HwJNrY2CxEcFSy1BuqAY3qxvCQCfoois983TTxDA
[SETUP] in relay chain  parachain 200 address 5Ec4AhPTL6nWnUnw58QzjJvFd3QATwHA3UJnvSD4GVSQ7Gop
[SETUP] in parachain 100  parachain 200 address 5Eg2fntGQpyQv5X5d8N5qxG4sX5UBMLG77xEBPjZ9DTxxtt7
[SETUP] in parachain 200  parachain 100 address 5Eg2fnsvNfVGz8kMWEZLZcM1AJqqmG22G3r74mFN1r52Ka7S

[SETUP] Print validators websocket RPC endpoints:
[SETUP] validator 1: ws://localhost:9950/
[SETUP] validator 2: ws://localhost:9951/
[SETUP] validator 3: ws://localhost:9952/
[SETUP] validator 4: ws://localhost:9953/
[SETUP] Parachain(100) endpoint: ws://localhost:10054/
[SETUP] Parachain(200) endpoint:  ws://localhost:10055/
https://polkadot.js.org/apps/?rpc=ws://localhost:9950/

[SETUP] Exporting genesis state for parachain 100 to /root/xcm-testsuite/var/100.gen
[SETUP] Exporting genesis state for parachain 200 to /root/xcm-testsuite/var/200.gen
run  relay alice on localhost:9950
run  relay bob on localhost:9951
run  relay dave on localhost:9952
run  relay charlie on localhost:9953
```
Next part is controlled by the developer. He modifies pallets of parachains or a relay chain, and performs needed tests using basic Python scripting like:

```python
def hrmp(app, paraid, msg):
    '''
    Transfer 15 tokens to Charlie in 200 parachain by passing xmp (hrmp) message via 100 parachain

    :param app  substrate connection instance
    '''
    call = app.compose_call(
        call_module='TemplateModule',
        call_function='send_para_chain',
        call_params={
            'paraid': paraid,
            'call': msg
        }
    )
    extrinsic = app.create_signed_extrinsic(call=call, keypair=bob )
    receipt = app.submit_extrinsic(extrinsic, wait_for_inclusion=True)
```

All validators and collators logs are combined and each line is tagged (“[Relay chain]”, “[Parachain-100]”, etc) to distinguish messages from different chains allowing to easily debug a problem in a chain interaction using one log.

In a “non-stoppable” variant this product can be used as devnet, also allowing to test frontend applications using XCM.


### Ecosystem fit

MixBytes team developed a number of runtime pallets, and the amount of requests for XCM-based functionality greatly increased last year. For any development team testing of such complicated scenarios like “run relay chain, run one parachain, run second parachain, connect them, perform multi-step protocol between them, etc” is challenging to automate and requires a developer to control several nodes, reset their states, and repeat many steps any time. He changes the logic in any single parachain.

So, such a tool, from our point of view, is required by developers to automate all tasks including cross-chain messaging logic in Polkadot.


## **Team**


### Team members

- Sergey Prilutskiy
- Dmitry Dulesov
- Vadim Buyanov


### Contact
*   **Contact Name:** Vadim Buyanov
*   **Contact Email:** vadim@mixbytes.io
*   **Website:** http://mixbytes.io/


### Team experience
MixBytes() is a fully staffed team of engineers, auditors and analysts experienced in decentralized systems and blockchain technology.

**Sergey Prilutskiy**: 4 years of blockchain experience, 1.5 years of Polkadot/Substrate development experience. 10+ years of senior-level experience in high-loaded services (antispam, mail, portals), previously in reverse engineering, antiviral software, software research.

**Dmitry Dulesov:** 1 year of blockchain experience (Substrate/Polkadot), 4+ years of Rust development, previous excellent senior-level development experience in many languages, code analysis, high-loaded and financial systems.

### Team code repos
*   [https://github.com/mixbytes](https://github.com/mixbytes?q=polkadot)
*   [https://github.com/mixbytes?q=polkadot](https://github.com/mixbytes?q=polkadot)
*   [https://github.com/mixbytes?q=substrate](https://github.com/mixbytes?q=substrate)

### Team LinkedIn Profiles
*   [Sergey Prilutskiy](https://www.linkedin.com/in/sergey-prilutskiy-2a619951/)
*   [Vadim Buyanov](https://www.linkedin.com/in/vadim-buyanov/)

## **Development roadmap**

### Overview

*   **Total Estimated Duration:** 6 weeks
*   **Full-time equivalent (FTE):** 0,9
*   **Total Costs:** $ 21.600

### Milestone 1: one-way XCM test using standard pallets

*   Estimated Duration: 2 weeks
*   FTE: 1.1
*   Costs: $ 8.800

| Number | Deliverable                          | Specification                                                |
| ------ | ------------------------------------ | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Documentaion | We will provide well-documented scripts and test scenarios with a complete guide on how to configure your own tests and use testsuite for the development of parachains. |
| 1. | Testsuite. One way test for standard runtimes | We will develop all modules allowing to run tests for the call function in one parachain from another: runtimes, based on Rococo and Cumulus standard pallets |
| 2. | Demo | We will provide a screencast video demonstrating the one-way test on a clean Linux machine |

### Milestone 2: two-way XCM test using custom pallets and confirmations

*   Estimated Duration: 4 weeks
*   FTE: 0,8
*   Costs: $ 12.800

| Number | Deliverable                          | Specification                                                |
| ------ | ------------------------------------ | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide well-documented scripts and test scenarios with a complete guide on how to configure your own tests and use testsuite for the development of parachains |
| 1. | Testsuite. Two-way test for pallets from the existing parachains | We will develop and document several tests for real projects, with logic of moving tokens, asynchronously calling functions from other parachains receiving confirmations |
| 2. | Presentation | We will make a public report and present it on at least one of the developers meetup, explaining our approach to XCM testing and demonstrating how to work with XCM Testsuite |
| 3. | Demo | >We will provide a screencast video demonstrating the two-way test on a clean Linux machine |


## **Future Plans**

Use the testsuite for testing multiple cross-chain projects we are currently developing that requires continuous support of this tool at least until the stabilization of the full production-ready cross-chain messaging protocol in Polkadot.


## **Additional Information**

We have already developed the proof-of-concept of XCM Testsuite fully working with fixed versions of Cumulus and Rococo, and actively use it for our own test case scenarios. Working on this grant for us means making this tool usable not only for us but for any developer, trying to implement complicated cross-chain scenarios and asynchronous parachain interaction logic.


### **Have you applied for other grants so far?**

MixBytes team has successfully realized the grant to develop a Benchmarking tool named [MixBytes Tank](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/MixBytes_Tank.md)

