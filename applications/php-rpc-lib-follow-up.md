# PHP RPC Lib Follow up

* **Team Name:** [gmajor](https://github.com/gmajor-encrypt)
* **Payment Address:** 0xC3094f0ddce699a1Ad9Ef2621DF68Cd297a4c44F (Dai)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

As Gavin mentioned in this [CoinDesk article](https://www.coindesk.com/tech/2021/05/25/polkadots-gavin-wood-webassembly-is-the-future-of-smart-contracts-but-legacy-evm-is-right-now/), WebAssembly is the future of smart contracts.

However, WebAssembly, as the main Smart Contract in the substrate ecosystem, lacks the necessary infrastructure. Except for the lib of contracts provided by polkadot.js, there are no more third parties that can query the contract storage and interact with the package.

PHP is one of [the most popular development languages in the world](https://www.stackscale.com/blog/most-popular-programming-languages/), PHP is used by 77.8% of all the websites whose server-side programming language(https://w3techs.com/technologies/details/pl-php).

Traditional PHP Website developers will lack the necessary SDK if they come into contact with the substrate,
However, the lack of support for contracts in the current [php-substrate-api](https://github.com/gmajor-encrypt/php-substrate-api) makes it very difficult to use PHP as a development language to interact with the substrate.

Therefore, this proposal is an extension of [php-substrate-api](https://github.com/gmajor-encrypt/php-substrate-api) to improve the practicability of this package further and increase support for smart contracts.

### Project Details

* Abi encode & decode, support contract metadata **v0,v1,v2,v3,v4**, this will be used to read and write smart contracts

* Deploy wasm smart contract

Example

```php
$api = new SubstrateRpc("websocket_or_http_url");
$api->rpc->contracts->new("wasm_code", "gas limit","value");
```

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

CIt can help PHP language developers easily access the substrate (polkadot) ecology

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

| Number | Deliverable    | Specification                                                                                                                                                     |
|-------:|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License        | MIT                                                                                                                                                               |
|    0b. | Documentation  | Documentation on how to use this lib and how to test                                                                                                              |
|     1. | ABI            | Abi encode & decode, contract [metadata](https://use.ink/metadata/) v0,v1,v2,v3,v4 will be supported                                                              |  
|     2. | Deploy         | [php-substrate-api](https://github.com/gmajor-encrypt/php-substrate-api) implement new method of deploy wasm smart contract                                       |  
|     3. | Read contract  | Implement method read contract values and decode as human readable, similar to [api-contract-read](https://polkadot.js.org/docs/api-contract/start/contract.read) |  
|     4. | Write contract | Implement method send Contract transaction, similar to [api-contract-tx](https://polkadot.js.org/docs/api-contract/start/contract.tx)                             |
|     5. | Test           | Including all the unit tests mentioned above                                                                                                                      |
|     6. | Example        | Provide some simple examples of using this lib                                                                                                                    |  
|     7. | Packagist      | Submit to [Packagist](https://packagist.org/) for composer to use                                                                                                 |  
|     8. | Github action  | Auto Test when new commit                                                                                                                                         |  

## Future Plans

This milestone still lacks support for smart contract verification, there is no better solution at present, and will be supported after research
