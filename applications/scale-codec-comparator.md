# SCALE Codec Comparator

* **Team Name:** [gmajor](https://github.com/gmajor-encrypt)
* **Payment Address:** 0xC3094f0ddce699a1Ad9Ef2621DF68Cd297a4c44F(Dai)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

This Proposal is based on <https://github.com/w3f/Grants-Program/blob/master/rfps/scale-codec-comparator.md>.
To date, there are more than 9 published implementations of the SCALE Codec. Since each is implemented by a different team & the
reference implementation still introduces small fixes, it would be beneficial to compile a table of
feature-completeness. This would provide (some) assurance that the implementation in a given language is safe & sound to
use.

I have already developed <https://github.com/gmajor-encrypt/php-scale-codec>
&& <https://github.com/gmajor-encrypt/php-substrate-api> in the previous grant.

### Project Details

1. Providing an FFI to Rust's reference implementation
2. Tested with rust's FFI along with the scale lib <https://docs.substrate.io/reference/scale-codec/>
3. Passing the test will release the scale code badge of the GitHub action
4. Add Github action ci automatically test if these libs are updated

### Ecosystem Fit

Help developers choose suitable the scale code package in the ecosystem to avoid unknown errors

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

## Development Status :open_book:

Not yet

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 3.5 months
* **Total Costs:** 12500 DAI

### Milestone 1

* **Estimated duration:** 2 month
* **FTE:**  1
* **Costs:** 5000 USD

| Number | Deliverable      | Specification                                                                                                               |
|-------:|------------------|-----------------------------------------------------------------------------------------------------------------------------|
|    0a. | License          | MIT                                                                                                                         |
|    0b. | Documentation    | Simple documentation on how to use and how to test                                                                          |
|     1. | enable Unit test | Providing a FFI make test for [scale.go](https://github.com/itering/scale.go), [php-scale-codec](https://github.com/gmajor-encrypt/php-scale-codec),[scale.rb](https://github.com/itering/scale.rb),[py-scale-codec](https://github.com/polkascan/py-scale-codec),[polkadot-js](https://github.com/polkadot-js/api)|  
|     2. | github action    | Auto test when comparator commit code                                                                                       |  

### Milestone 2

* **Estimated duration:** 1 month
* **FTE:**  1
* **Costs:** 5000 USD

| Number | Deliverable      | Specification                                                                                                               |
|-------:|------------------|-----------------------------------------------------------------------------------------------------------------------------|
|    0a. | License          | MIT                                                                                                                         |
|    0b. | Documentation    | Simple documentation on how to use and how to test                                                                          |
|     1. | enable Unit test | Providing a FFI make test for [as-scale-codec](https://github.com/LimeChain/as-scale-codec),[cScale](https://github.com/MatthewDarnell/cScale),[scale-codec-cpp](https://github.com/soramitsu/scale-codec-cpp),[hs-web3](https://github.com/airalab/hs-web3/),[polkaj](https://github.com/emeraldpay/polkaj),[scale-ts](https://github.com/unstoppablejs/unstoppablejs/tree/main/packages/scale-ts#scale-ts)|  
|     2. | github action    | Auto test when comparator commit code

### Milestone 3

* **Estimated Duration:** 2 week
* **FTE:**  1
* **Costs:** 2,500 USD

| Number | Deliverable            | Specification                                            |
|-------:|------------------------|----------------------------------------------------------|
|    0a. | License                | MIT                                                      |
|    0b. | Documentation          | Simple documentation on how to use and how to test       |
|     1. | GitHub badge           | Create a GitHub badge for SCALE feature complete libs    |
|     2. | GitHub Ci ensure badge | Libs are tested with github actions if they are released |

## Future Plans

I have been maintaining php scale code and php api lib for 2 years, and this application will continue to be maintained
