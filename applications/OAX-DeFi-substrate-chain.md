# Open Grant Proposal

* **Project:** OAX - making DeFi easy with Substrate
* **Proposer:** [OAX Foundation](https://github.com/oaxfoundation)
* **Payment Address:** 37phLsj2Bj5tRTEnXw758ZD9v3SRr2i7Np 

## Project Description :page_facing_up: 

The objective of this project is to build the OAX blockchain using Substrate, to be part of the Polkadot network as a Parachain. The OAX Parachain will focus on building an ecosystem catering to Decentralized Finance (DeFi) by offering features such as atomic swaps, multi-transfer, fee delegation and other enhanced transactional abilities. These features will be used to develop custom runtime modules, implementing DeFi protocols to attract DeFi DApp builders to the OAX Parachain.

Once the OAX Chain goes live, the Foundation will support the migration of our ERC20 token, thus becoming the native token for the new blockchain.

Building the OAX chain on Substrate gives us the Polkadot benefits of performance, scalability and cross chain operability which are all crucial for the creation of DeFi products.

DApps experienced an explosive growth in 2019, with DeFi being a key segment of that Dapp growth with USD3.65bn total volume. DeFi excluding exchanges had the most impressive growth in 2019, with a 610% increase in number of DApp users and a 250% increase in transaction volume. We believe this growth will continue and the specific needs of DeFi will be addressed through the OAX chain.

## Team :busts_in_silhouette:

* **Members:** Wayland Chan, Akshay Ramasubramanian
* **LinkedIn Profiles:** [Wayland](https://www.linkedin.com/in/wayland-chan-9071899/), [Akshay](https://www.linkedin.com/in/akshay-ramasubramanian-943b8a93/)
* **Code Repos:** https://github.com/OAXFoundation, https://github.com/waylandc, https://github.com/araa47
* **Website:**	https://www.oax.org
* **Legal Structure:** SWIM Limited, a company limited by share capital and incorporated in Hong Kong is the a wholly owned subsidiary of the OAX Foundation Limited, a company limited by guarantee and incorporated in Hong Kong. The registered address for both companies is Room F, 19/F CNT Tower, 338 Hennessy Road, Wan Chai, Hong Kong.
* **Team's Experience:** 

The OAX Foundation has been developing blockchain solutions for 2 years. Our previous projects centred around decentralized exchanges, initially developing a 0x based DEX prototype before focusing on developing and releasing our [Layer 2 Exchange Protocol (L2X)](https://github.com/OAXFoundation/l2x-trustless-exchange) on Ethereum in 2019.

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 9 weeks
* **Total Costs:** 2.93 BTC

### Milestone 1: Atomic Swap

* **Estimated Duration:** 3 weeks 
* **Costs:** 1 BTC

For this milestone we already have a functionining token standard equivalent to Ethereum's ERC20 with which will write an atomic swap function to guaranteee both legs of a swap transfer but within the context of one blockchain transaction. Atomic swaps implemented on other blockchains such as Ethereum require a smart contract to facilitate multiple transactions whichis tedious and has extra transaction costs.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Custom Runtime Module | runtime API to swap 2 assets between 2 addresses in one transaction |  

### Milestone 2: Multi-Transfer

* **Estimated Duration:** 3 weeks 
* **Costs:** 0.93 BTC

Multi-transfer function which allows a user to send funds to multiple addresses in one function call to save gas costs.

Note that it's not atomic, if sender runs out of funds before sending to all addresses, the previously successful ones are not rolled back, we just stop processing the rest of the transfers.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1.  | Custom Runtime Module| runtime API allowing sender to send array of tuples for multiple recipients |  

### Milestone 3: Fee Delegation

* **Estimated Duration:** 3 weeks 
* **Costs:** 1 BTC

Fee delegation allows the gas cost of a transaction to be paid by someone other than the user.

This feature eases adoption for DApps because users do not need to have the native OAX tokens in order to transact with the OAX chain. Users not having to have a particular tokent o pay for gas removes a significant hurdle for DApp adoption. If a user wanted to trade tokens on a decentralized exchange (DEX) that was deployed on OAX chain; normally they would need to have OAX tokens in addition to whatever they were trading. By allowing a DApp operator to pay for those fees (via fee delegation), the entire user experience is much more simplified.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1.  | Custom Runtime Module| Extend the existing Substrate fees pallet to support delegation |  


## License
The OAX Foundation intends on licensing all work on an open source basis under Apache 2.0. Should it not be possible to license using Apache 2.0 because of any licensing restrictions, the OAX Foundation will still license all work on an open source basis under the GNU GPL v3.0 license (as provided for under the Web3 General Grants Program guideline).

## Additional Information :heavy_plus_sign: 

* What work has been done so far?
To facilitate the work on atomic swaps, we needed an ERC20 token standard implementation (so that we have 2 tokens that can be swapped) working on Substrate which we've already completed. 

* Are there any teams who have already contributed (financially) to the project?
The OAX Foundation has been sponsoring and covering all expenses related to the project from the beginning.

* Have you applied for other grants so far?
No.

* Are there any other projects similar to yours? If so, how is your project different?
We understand that there are other DeFi projects tailored to specific use cases. OAX focuses more on making general but user and developer friendly features to promote development of DeFi apps using the Polkadot network and the OAX parachain.

* The team's long-term plans and intentions with this project.
To build an ecosystem catering to DeFi by surveying to landscape and adding features we feel will incentivize and motivate developers to develop on our chain.

 
