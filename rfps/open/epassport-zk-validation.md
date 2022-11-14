# e-Passport ZK Validation

* **Status:** Open
* **Proposer:** [burges](https://github.com/burges), [FlorianFranzen](https://github.com/FlorianFranzen)


## Project Description :page_facing_up: 

The issue of verifying identities on-chain and providing Proof-of-personhood is a challenging one.

One idea to authenticate users is to ask them to submit the details from their e-passports. While it would provide authentication, it forgoes the aspect of privacy.

This proposal aims to provide the verifiability of personal data coming from e-passports, while ensuring protection of personal information by using zero-knowledge proofs.

## Deliverables :nut_and_bolt:

Please note that the below given details do not comprise neither detailed nor security-complete plan of development. The implementing party should perform in-depth research on each part of the protocol in order to understand its limitations and nuances.

### Milestone 1 - transparent solution PoC on substrate

* **Estimated Duration:** 3 months (incl. research)
* **Costs:** 60,000 kUSD

As the first step, we propose the creation of a working PoC without the use of zero-knowledge proofs that can be deployed on substrate.

Deliverables:
- Chain can store the necessary certificates from CSCA
- User can upload their DSO (Document Security Object) as well as the associated DSC (Document Signer Certificate) on chain
- The chain logic verifies:
    - DSC is valid against CSCA
    - the signature contained within the DSO checks out against DSC

### Milestone 2 - adding ZK functionality

* **Estimated Duration:** 5 months
* **Costs:** 100,000 kUSD

Rather than supplying the entire DSO, which would reveal the user's personal information, users should be able to upload a cryptographic proof that they indeed know the data contained within the DSO, without revealing it in its entirety.

There should be two parts to this functionality: off-chain prover and on-chain verifier.

The users would supply all their private information to the off-chain prover (which they can either run themselves or use a trusted third party) and the prover would produce a cryptographic proof.

Later, the proof is uploaded on-chain, and the chain logic performs verification of the proof given the pre-agreed circuit. The circuit must be shared between prover and verifier and should include public inputs such as the latest [Master List](https://www.icao.int/Security/FAL/PKD/Pages/ICAO-Master-List.aspx) of CSCA certificates, revocations, etc., as well as use the same algorithms and parameters.

### Milestone 3 - Updateability

* **Estimated Duration:** 1 month
* **Costs:** 20,000 kUSD

The Master List is expected to, albeit unfrequently, receive updates as new countries join the PKD or as they update their certificates periodically. Furhtermore, countries are expected to publish the revocations of any compromised certificates.

It is important that both prover and verifier circuits are updated accordingly - else the proof won't match.
