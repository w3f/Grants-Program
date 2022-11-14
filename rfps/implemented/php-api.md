# PHP Substrate API

* **Proposer:** [swader](https://github.com/api)
* **Status:** [Implemented](https://github.com/gmajor-encrypt/php-substrate-api)

## Project Description :page_facing_up: 

The Substrate API is currently most developed in TypeScript and Rust. This RFP is looking for teams willing to implement a PHP version, perhaps in tandem with the PHP SCALE Coded (see relevant RFP).

The PHP API should:

- be able to hook into a running Substrate node via WS or HTTP
- read and write to RPC endpoints (will need SCALE codec - see relevant related RFP)

Optionally, the API should support types as exposed by the API. Supporting types is a long term project as those evolve constantly and differ from chain to chain, so if this road is taken by the applying team, it should be stated in a separate milestone and well defined in added maintenance time and cost (i.e. this is not something that can be delivered once - it would require a long term commitment).

## Deliverables :nut_and_bolt:

The basic deliverable of this project is an API package hosted on Packagist which can instantiate a connection to a Substrate node and talk to constants, chain storage, and RPC endpoints. For inspiration, see the JS version: https://polkadot.js.org/docs

Example use:

- reading from RPC

```php
$api = new SubstrateApi\Api("websocket_or_http_url");
echo $api->rpc->system->chain(); // Kusama
```

- writing a tx:

```php
$api = new SubstrateApi\Api("websocket_or_http_url");
$signer = new SubstrateApi\Keyring\Signer("privatekey");
$api->setSigner($signer);
$tx = $api->tx->balances->transfer("recipient_address", 10000);
$tx->signAndSend();
```

## Notes

- look into https://github.com/paritytech/scale-info
