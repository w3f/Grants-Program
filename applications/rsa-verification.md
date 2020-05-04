# Open Grant Proposal

* **Project:** RSA Signature Verification on Substrate
* **Proposer:** [@yuki-js](https://github.com/yuki-js)
* **Payment Address:** 12whryLeVFj6ieL6x1jZzC7fFhPfSzfKMh


## Project Description :page_facing_up: 

There is Japan Individual Number Card (mynumber card as follows) in Japan, which can sign hashed message with RSASSA-PKCS1-v1_5 signature algorithm defined in RFC8017. I want to handle Substrate blockchain with the mynumber card.

By Implementing this, the mynumber card, Estonian eID card, and other smartcards that supports RSA signing can be used for signing the transaction.

## Team :busts_in_silhouette:

* **Members:** Yuki Aoki
* **LinkedIn Profiles:** <https://www.linkedin.com/in/%E5%8B%87%E6%A8%B9-%E9%9D%92%E6%9C%A8-a878541a6/>
* **Code Repos:** <https://github.com/my-number/substrate>, <https://github.com/my-number/polkadotjs-api>
* **Legal Structure:** Individual (personal address will be provided via the invoice form)
* **Team's Experience:** Developed [Mynachain](https://github.com/my-number/mynachain) and won the grand prize of [Endowed Chair for Blockchain Innovation, the University of Tokyo](https://www.blockchain.t.u-tokyo.ac.jp/)

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 6 weeks
* **Total Costs:** 1.2 BTC

### Milestone 1

* **Estimated Duration:** 3 weeks
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Add RSA feature | Implement `crypto::Pair` trait & add variant into `sp_runtime::MultiSignature` so that RSA signature can be verifiable instead of algorithms such as Ed25519. |

### Milestone 2

* **Estimated Duration:** 4 week
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Example app | Make simple transaction transmitter app |
| 2. | Tests | Integration test |
| 3. | Documentation | Specification, How to use, etc. |

## Additional Information :heavy_plus_sign: 
 
I've developed [Mynachain](https://github.com/my-number/mynachain) so far. It can verify signature of mynumber card but its code is not sophisticated. This project will make it verify signatures in the manner of substrate.
