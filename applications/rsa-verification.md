# Open Grant Proposal

* **Project:** RSA Signature Verification on Substrate
* **Proposer:** @yuki-js
* **Payment Address:** TBD


## Project Description :page_facing_up: 

There is Japan Individual Number Card (mynumber card as follows) in Japan, which can sign hashed message with RSASSA-PKCS1-v1_5 signature algorithm defined in RFC8017. I want to handle Substrate blockchain with the mynumber card.

By Implementing this, the mynumber card, Estonian eID card, and other smartcards that supports RSA signing can be used for signing the transaction.

## Team :busts_in_silhouette:

* **Members:** Yuki Aoki
* **LinkedIn Profiles:** I don't have LinkedIn account yet.
* **Code Repos:** TBD
* **Legal Structure:** Individual
* **Team's Experience:** Please describe the team's relevant experience.

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 3 weeks
* **Total Costs:** 0.75 BTC

### Milestone 1

* **Estimated Duration:** 2 weeks
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Modify MultiSignature | Modify Add variant & impls into `sp_runtime::MultiSignature` and make RSA signature verifiable instead of algorithms such as Ed25519. |
| 2. | Create RSA verification crate(optional) | `rsa` crate seems to be non-stable. So, in some cases, it might be better to develop the crate. |

### Milestone 2

* **Estimated Duration:** A week
* **Costs:** 0.25 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Modify polkadot-js | Add RSA variant to `polkadot-js` |

## Additional Information :heavy_plus_sign: 
 
I've developed "Mynachain" so far. It can verify signature of mynumber card but its code is not sophisticated. This project will make it verify signatures in the manner of substrate.
