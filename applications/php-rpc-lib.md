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

* Sr 25519 

Since PHP does not have an encryption library for sr25519

Will provide the following interfaces

1. SR25519.NewKeypairFromSeed(seed)
2. SR25519.sign(message), 
3. SR25519.verify(message, signature)


* Send transaction

Example
```php
$api = new SubstrateRpc("websocket_or_http_url");
$signer = new SubstrateRpc\Util\Keyring\Signer("privatekey");// or HD
$api->setSigner($signer);
$tx = $api->tx->balances->transfer("to_address", 10000);
$tx->signAndSend();
```

* Read/subscribe HTTP/Websocket to RPC endpoints

Example

```php
$api = new SubstrateRpc("websocket_or_http_url");
$api->rpc->System->Heath();

# or read storage 
$api = new SubstrateRpc("websocket_or_http_url");
$api->rpc->state->System->Account("/ALICE");

```

* Support all substrate RPC method https://polkadot.js.org/docs/substrate/rpc

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
* **Total Costs:** 9000 DAI

### Milestone 1 

* **Estimated duration:** 1 month
* **FTE:**  1
* **Costs:** 5000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Simple documentation on how to use this library |
| 1. | HTTP RPC support  | Http Rpc support, include http/websocket |  
| 2. | sr25519  | sr25519 bindings |  
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
| 4. | Unit test | Including all the unit tests mentioned above  |  
| 5. | Packagist |  Submit to Packagist for composer to use  |  


## Future Plans

1.  Long-term support, Because I found that the underlying changes of the substrate are still very frequent, like metadata, I expect will be a long-term job in the future
