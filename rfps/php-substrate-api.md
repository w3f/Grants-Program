# PHP substrate API

* **Status:** Open
* **Proposer:** Nitor Infotech 
* **Your Project(s):** : https://github.com/nitor-infotech-oss/rust-webassembly https://github.com/nitor-infotech-oss/blockchain-property-transfer https://github.com/nitor-infotech-oss/substrate-demo https://github.com/nitor-infotech-oss/rust-library-mgmt
* **Projects you think this work could be useful for** : Substrate RPC API client integration
* **Teams/People that could deliver the RFP** : tejbahadur.singh@nitorinfotech.com neha.reddy@nitorinfotech.com Kapil.joshi@nitorinfotech.com arati.bongale@nitorinfotech.com

## Project Description :page_facing_up: 

Substrate RCP end points are implemented in Go, Ruby, Python, C++ etc. We are adding one more language to the fold by implementing the APIs in PHP. They can be used in any PHP application by composer installation. 

This project will help to avail substrate features in applications/platforms build using PHP language. 

## Deliverables :nut_and_bolt:

A class which can be instantiated in an application to use endpoints
```php
$testClass = new SubstrateInterface("http_url");
echo $testClass->rpc->system->name();
```

once RPC endpoints are consumed package it and make it usable for other applications to integrate it.
```bash
composer require neha0921/substrate-interface-package
```

* **Total Estimated Duration:** 15 days
* **Full-time equivalent (FTE):**  55 FTE 
* **Total Costs:** 7000 
### Milestone 1

substrateinterface class for applications to integrate it and respective packagist for composer installation 
* **Estimated Duration:** 15 
* **FTE:**  55 FTE
* **Costs:** 7000


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | substrate RPC enpoint integration | Integrate all substrate RPC endpoints in PHP to make them available in other PHP applications |  
| 2.  | packaging application for integration | make packagist of this integration to enable composer installation | 
