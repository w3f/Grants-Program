# Open Grant Proposal

* **Project:** Two-Party threshold library
* **Proposer:** gcc2ge
* **Payment Address:** 16StvMU4XpgGm1E5TMM6sXzrKJPRkgvgeV

## Project Description 

Substrate generates a single private key for users. Securing the private key that control your assets can be a lot of work. Keys can be lost, preventing anyone from ever moving those assets again. Keys can also be stolen.  On a long enough timeline, both of these risks will present themselves in one way or another. 

Two-Party threshold library provides ways to distribute the private keys and to produce signatures in a distributed manner.Two-Party threshold library is a set of protocols which allow two parties to jointly generate a single public key, along with two private shares of a joint secret key ,and then privately sign messages if and only if two of those parties participate in the signing operation.

Two-Party threshold library includes four protocols:

- DKG: distributed key generation for creating secret shares
- Signing: use the secret shares to generate a signature
- Rotation: update the distributed secret shares
- Secret Shares Recovery:  recover a secret share

There are two roles in Two-Party threshold library:
- Owner: have ownership of asset in the blockchain
- Providers: take participate in creating secret shares

Ensure that the Owner keeps control over its assets, we introduce the following two requirements:

1. No transaction can be made without the Owner participation.
2. At any point in time the Owner can recover the full private key.

Here is a high-level overview of the Two-Party threshold library architecture.

![](https://i.loli.net/2020/08/21/8WsD1CmHXEAnxoU.jpg)

At the bottom we have a utility library that implements simple EC cryptographic primitives :

- verifiable secret sharing
- commitment schemes
- zero knowledge proofs
- ECDH
- coin flip

the utility library currently supported elliptic curves:

- secp256k1
- ed25519
- jubjub
- ristretto
- bls12-381

On top we have our 2P-ECDSA, 2P-Schnorr, 2P-Eddsa library  that consumes Paillier and ECC that we implemented below.

higher than that we have a key management system (KMS) library  that packs 2P-ECDSA ,2P-Schnorr , 2P-Eddsa communication messages . 

Substrate developers can build their wallet on KMS.Polkadot JS can use KMS to generate private key and signature.

Our team have developed a keyless wallet, the wallet currently support 2P-ecdsa.




## Team 

* **Members:** Daniel Wu, Putin Liu, Nathan Qin
* **LinkedIn Profiles:** https://www.linkedin.com/in/gcc2ge/, https://www.linkedin.com/in/putin-liu-pmp-662b6043/
* **Code Repos:** https://github.com/HashKeyHub/kms-substrate
* **Website:**	 Https://me.hashkey.com
* **Legal Structure:**  HASHKEY DIGITAL ASSET GROUP LIMITED
* **Team's Experience:** Daniel wu has been working on blockchain development for 4 years, he has published two books on blockchain development.

## Development Roadmap 

* **Total Estimated Duration:** 9 weeks
* **Full-time equivalent (FTE):**  1
* **Total Costs:** 2.1 BTC

### Milestone 1

* **Estimated Duration:** 3 weeks 
* **FTE:**  1
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | 2P-Ecdsa(secp256k1) client| implement lindell_2017 protocol client side|  
| 2.  | 2P-Ecdsa(secp256k1) server |implement lindell_2017 protocol server side|  
| 3.  | unit test | implement two test cases : DKG ,threshold_sign|  
| 4.  | document | the document is mainly about how to  integrate 2p-ecdsa into developer's application |  

### Milestone 2

* **Estimated Duration:** 3 weeks 
* **FTE:**  1
* **Costs:** 0.8 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | 2P-Eddsa(ed25519) client|  implement feldman'vss protocol  client side|  
| 2.  | 2P-Eddsa(ed25519) server |implement feldman'vss protocol  server side|  
| 3.  | unit test | implement two test cases : DKG ,threshold_sign|  
| 4.  | document | the document is mainly about how to  integrate 2p-eddsa into developer's application |  

### Milestone 3

* **Estimated Duration:** 3 weeks 
* **FTE:**  1
* **Costs:** 0.8 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | 2P-Schnorr(ristretto255) client | implement feldman'vss protocol client side| 
| 2.  | 2P-Schnorr(ristretto255) server |implement feldman'vss protocol  server side|   
| 3.  | unit test | implement two test cases : DKG ,threshold_sign |  
| 4.  | document | the document is mainly about how to  integrate 2p-schnorr into developer's application |     


### Additional Information

Our algorithm reference the following paper:

- [Y. Lindell. Fast Secure Two-Party ECDSA Signing. In CRYPTO 2017, Springer (LNCS 10402), pages 613-644, 2017](https://eprint.iacr.org/2017/552.pdf)
- [Adaptively Secure Feldman VSS and Applications to Universally-Composable Threshold Cryptography](https://eprint.iacr.org/2004/119.pdf)




