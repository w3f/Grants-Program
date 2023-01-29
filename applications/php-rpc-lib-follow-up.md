# PHP RPC Lib Follow up

* **Team Name:** [gmajor](https://github.com/gmajor-encrypt)
* **Payment Address:** 0xC3094f0ddce699a1Ad9Ef2621DF68Cd297a4c44F (Dai)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

As Gavin mentioned in this [CoinDesk article](https://www.coindesk.com/tech/2021/05/25/polkadots-gavin-wood-webassembly-is-the-future-of-smart-contracts-but-legacy-evm-is-right-now/), WebAssembly is the future of smart contracts.

However, WebAssembly, as the main Smart Contracts in the substrate ecosystem, lacks the necessary infrastructure. Except for the lib of contracts provided by polkadot.js, there are no more third parties that can query the contract storage and interact with the package.

PHP is one of [the most popular development languages in the world](https://www.stackscale.com/blog/most-popular-programming-languages/), PHP is used by 77.8% of all the websites whose server-side programming language(https://w3techs.com/technologies/details/pl-php).

Traditional PHP Website developers will lack the necessary sdk if they come into contact with substrate,
However, the lack of support for contracts in the current [php-substrate-api](https://github.com/gmajor-encrypt/php-substrate-api) makes it very difficult to use php as a development language to interact with substrate.

Therefore, this proposal is an extension of php-substrate-api to further improve the practicability of this package and increase support for smart contracts.

### Project Details

* Abi encode & decode, support contract metadata v0,v1,v2,v3,v4 

* Deploy contract, 

* Read contract values 

Example

```php
$api = new SubstrateRpc("websocket_or_http_url");
$api->rpc->contracts->balanceOf("from","contract");
```

* Send Contract transaction

Example
```php
$api = new SubstrateRpc("websocket_or_http_url");
$signer = new SubstrateRpc\Util\Keyring\Signer("privatekey");// or HD
$api->setSigner($signer);
$tx = $api->tx->contracts->transfer("to_address", 10000);
$tx->signAndSend();
```


### Ecosystem Fit

Can help php language developers to easily access the substrate (polkadot) ecology

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

I have many years of php development experience and nearly five years of blockchain development experience, familiar
with PHP, GOLANG, PYTHON, Nodejs, Rust

### Team Code Repos

<https://github.com/gmajor-encrypt/php-scale-codec>

<https://github.com/gmajor-encrypt/php-substrate-api>

<https://github.com/gmajor-encrypt/sr25519-bindings>

<https://github.com/gmajor-encrypt/scale-codec-comparator>

## Development Status :open_book:

Not yet

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 1.5 months
* **Total Costs:** 10000 DAI

### Milestone 1

* **Estimated duration:** 1.5 month
* **FTE:**  1
* **Costs:** 10000 DAI

| Number | Deliverable    | Specification                                                 |
|-------:|----------------|---------------------------------------------------------------|
|    0a. | License        | MIT                                                           |
|    0b. | Documentation  | Simple documentation on how to use and how to test            |
|     1. | ABI            | Abi encode & decode, support contract metadata v0,v1,v2,v3,v4 |  
|     2. | Deploy         | Provide the method of deploy contract                         |  
|     3. | Read contract  | Read contract values                                          |  
|     4. | Write contract | Send Contract transaction                                     |
|     5. | Test           | Including all the unit tests mentioned above                  |  
|     6. | Packagist      | Submit to Packagist for composer to use                       |  
|     7. | Github action  | Auto Test when new commit                                     |  

## Future Plans

This milestone still lacks support for smart contract verify, there is no better solution at present, and will be supported after research
