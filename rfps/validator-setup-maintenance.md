# polkadot-validator-setup maintenance

* **Status:** Open
* **Teams/People that could deliver the RFP:** @melozo, @pmensik, @tylerztl, @bLd75

## Project Description :page_facing_up: 

One of the more accessible ways of spinning up validator nodes is by using the [`polkadot-validator-setup`](https://github.com/w3f/polkadot-validator-setup) repository, which uses a mix of terraform and ansible tools to create a server, adjust its configuration and install the necessary packages needed for running a substrate node.

This RFP aims at providing maintenance to that repository and add some small features.

## Deliverables :nut_and_bolt:

A list of possible tasks to work on:
- fixing issues and improving documentation
- updating any libraries/deps needed
- support additional terraform backends to store the terraform state (currently only `gcp`, could add `s3`: see [this issue](https://github.com/w3f/polkadot-validator-setup/issues/108) and local storage or even git - it should be discouraged in prod but very useful for testing). See also [this issue](https://github.com/w3f/polkadot-validator-setup/issues/7)
- investigate pass-phrased ssh key deployment: [issue 109](https://github.com/w3f/polkadot-validator-setup/issues/109)
- add additional cloud providers to terraform: [alicloud](https://github.com/w3f/polkadot-validator-setup/issues/111), [OVS](https://github.com/w3f/polkadot-validator-setup/issues/116)
