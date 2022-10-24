# PHP Version of SCALE Codec

* **Proposer:** [swader](https://github.com/swader)
* **Status:** [Done](https://github.com/w3f/Grants-Program/pull/235)

## Project Description :page_facing_up: 

The SCALE codec is the de-factor encoding method in Substrate-based chains. It is necessary for APIs to be able to communicate with a running node. There are several implementations already available in the wild, all listed [here](https://substrate.dev/docs/en/knowledgebase/advanced/codec). This proposal is for a team to build a PHP version.

## Deliverables :nut_and_bolt:

The deliverable should be a standalone SCALE codec package, hosted on Packagist. It can (but does not have to) depend on existing Base58 packages already present on Packagist.org.

The package *can* also be delivered as a companion PHP **extension** but the extension should be exclusivley a performance upgrade to the existing package. In other words, the Packagist-installable library should work on its own, but can be improved by also downloading the (optional) PHP extension. If the applicant decides to also create the extension, they should submit it as a separate milestone.
