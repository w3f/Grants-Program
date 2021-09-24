# W3F Grant Proposal


* **Project Name:** PHP RPC Lib
* **Team Name:** [gmajor](https://github.com/gmajor-encrypt)
* **Payment Address:** 0xC3094f0ddce699a1Ad9Ef2621DF68Cd297a4c44F(Dai)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1 


## Project Overview :page_facing_up:

PHP RPC Lib is PHP lib for query http rpc used by substrate.

### Overview

* PHP is an extremely common development language in the web field, and currently there is no RPC library for substrate. 
I have already developed https://github.com/gmajor-encrypt/php-scale-codec in the previous grant. PHP RPC Lib is necessary to interact with the chain

### Project Details


* Metadata v14 support
* Send transaction
* Read HTTP/Websocket to RPC endpoints

### Ecosystem Fit

Can help php language developers to easily access the substrate (polkadot) ecology


## Team :busts_in_silhouette:

### Team members

* gmajor

### Contact

* **Contact Name:** gmajor
* **Contact Email:** gmajorencrypt@gmail.com
* **Website:** https://github.com/gmajor-encrypt

### Legal Structure

individual

### Team's experience

I have many years of php development experience and nearly three years of blockchain development experience, familiar with PHP, GOLANG, PYTHON, JS

### Team Code Repos

https://github.com/gmajor-encrypt/php-scale-codec

https://github.com/gmajor-encrypt/php-substrate-api

## Development Status :open_book:

* RPC lib basic framework https://github.com/gmajor-encrypt/php-substrate-api


## Development Roadmap :nut_and_bolt:


### Overview

* **Total Estimated Duration:** 2 months
* **Total Costs:** 12000 DAI

### Milestone 1 

* **Estimated duration:** 1 month
* **FTE:**  1
* **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Simple documentation on how to use this library |
| 1. | Metadata v14 support | Support substrate latest update https://github.com/paritytech/substrate/pull/8615 |  
| 2. | HTTP RPC support  | Http Rpc support, include http/websocket |  
| 3. | Unit test | Including all the unit tests mentioned above  |  
| 4. | Packagist |  Submit to Packagist for composer to use  |  


### Milestone 2 

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Simple documentation on how to use this library |
| 1. | Extrinsic encode | Extrinsic encode |  
| 2. | Signed Extrinsic send | Send transaction support, include ed25519&sr25519|  
| 3. | substrate rpc api | support all substrate rpc like https://polkadot.js.org/docs/substrate/rpc |  
| 3. | Unit test | Including all the unit tests mentioned above  |  
| 4. | Packagist |  Submit to Packagist for composer to use  |  


## Future Plans

1.  Long-term support, Because I found that the underlying changes of the substrate are still very frequent, like metadata, I expect will be a long-term job in the future
