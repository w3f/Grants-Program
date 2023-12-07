# JsonRpsee socks5 proxy

* **Team Name:** [gmajor](https://github.com/gmajor-encrypt)
* **Payment Address:** 0xC3094f0ddce699a1Ad9Ef2621DF68Cd297a4c44F(USDC)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/2068#issuecomment-1840145149) 

## Project Overview :page_facing_up:

RFPs [https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/jsonrpsee-proxy-support.md](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/jsonrpsee-proxy-support.md)

### Overview

This proposal is to develop a JsonRpsee socks5 middleware proxy. 

### Project Details
    
This proposal is to develop a JsonRpsee [socks5](https://datatracker.ietf.org/doc/html/rfc1928) middleware proxy.


### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

  This project is a middleware that can be used to proxy connections using a socks5 proxy. It can be used in any application that uses jsonrpsee as a client.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase,
  yourself)?

  jsonrpsee client developers

- What need(s) does your project meet?

  Enhance the JsonRpsee package and add support for socks5 proxy

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

   Nothing

## Team :busts_in_silhouette:

### Team members

* gmajor

### Contact

* **Contact Name:** gmajor
* **Contact Email:** gmajorencrypt@gmail.com
* **Website:** <https://github.com/gmajor-encrypt>

### Legal Structure

individual

### Team's experience

I have many years of PHP development experience and nearly five years of blockchain development experience, familiar
with PHP, GOLANG, PYTHON, Nodejs, Rust

### Team Code Repos

- https://github.com/gmajor-encrypt/php-scale-codec
- https://github.com/gmajor-encrypt/php-substrate-api
- https://github.com/gmajor-encrypt/scale-codec-comparator
- https://github.com/gmajor-encrypt/sr25519-bindings
- https://github.com/gmajor-encrypt/xcm-tools

## Development Status :open_book:

Not yet

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 1 months
* **Total Costs:** 9000 USDC

### Milestone 1


* **Estimated duration:** 4 week
* **FTE:**  1
* **Costs:** 9000 USDC

| Number | Deliverable               | Specification                                                                                                                                                   |
|-------:|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                   | MIT or Apache 2.0                                                                                                                                               |
|    0b. | Documentation             | Simple documentation on how to use and how to test                                                                                                              |
|    0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|     1. | Socks5 middleware support | Enable a jsonrpsee client to proxy connections using a socks5 proxy                                                                                             |  
|     2. | Example	                  | I will now provide an example to demonstrate the usage of this socks 5 middleware.                                                                              |  
|     3. | Pull request              | Create pull request merge into [jsonrpsee](https://github.com/paritytech/jsonrpsee)                                                                             |  


## Future Plans

If there are any problems with this feature, I will still maintain it.
