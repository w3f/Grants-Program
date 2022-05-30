# SCALE Codec Comparator

* **Status:** [In progress](https://github.com/arijitAD/dotscale) for Golang, submissions for other languages welcome, [Under Development](https://github.com/w3f/Grants-Program/blob/master/applications/scale-codec-comparator.md)
* **Proposer:** [Marcin Górny](https://github.com/mmagician/)

## Project Description :page_facing_up:

To date, there are [9 published](https://substrate.dev/docs/en/knowledgebase/advanced/codec#implementations) implementations of the SCALE Codec. Since each is implemented by a different team & [the reference implementation](https://github.com/paritytech/parity-scale-codec) still introduces small fixes, it would be beneficial to compile a table of feature-completeness.
This would provide (some) assurance that the implementation in a given language is safe & sound to use.

One approach would be to provide wrappers to the Rust reference implementation, like in [scale.rb](https://github.com/itering/scale.rb/blob/develop/src/lib.rs) and using the Foreign Function Interface (e.g. [here](https://github.com/itering/scale.rb/blob/develop/spec/ffi_helper.rb)) to call these directly from within the library.

Stage 2: To take this a step further, a GitHub action could be integrated to run all native unit tests also against the Rust lib. For repos which provide feature completeness & pass all relevant tests, a SCALE specific badge could be awarded.

## Deliverables :nut_and_bolt:

* **Total Estimated Duration:** 2+ months
* **Full-time equivalent (FTE):**  1
* **Total Costs:** ~ 12,000 DAI

### Milestone 1: Feature-completeness & FFI to Rust

* **Estimated Duration:** 2 months
* **FTE:**  1
* **Costs:** ~ 10,000 DAI

For each library listed on [substrate.dev](https://substrate.dev/docs/en/knowledgebase/advanced/codec#implementations):
* Create a PR, providing a FFI to Rust's reference implementation.
* Ensure feature completeness, by ensuring there are comprehensive unit tests for each data type.

### Milestone 2: Badge integration

* **Estimated Duration:** 1 week
* **FTE:**  1
* **Costs:** ~ 2000 DAI

* Create a GitHub badge for SCALE feature complete libs
* Ensure that each lib listed above has the process of publishing the badge integrated into the CI workflow (e.g. GitHub action to run tests & award badge on successful run)

Note: The goal is to have your changes merged upstream. While the final decision is taken by the repo owners, you should make sure that your PRs pass all checks specific to each lib, conforms to their contributing guidelines etc.
