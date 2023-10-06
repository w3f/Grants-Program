# New more balanced pairing with a view toward acceleration of the aggregate BLS signature scheme

- **Team Name:** Dmitrii Koshelev
- **Payment Address:** This information will be given later.
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

In some sense this project is a continuation of an earlier successful W3F grant https://grants.web3.foundation/applications/new_bls12_hash_function. Like that project, the current one aims to accelerate the aggregate BLS signature (a.k.a. BLS multi-signature) scheme. Nevertheless, the new grant proposal is fundamentally different from the former.

### Ecosystem Fit

According to the web-page https://wiki.polkadot.network/docs/learn-cryptography (last updated on Sep 12, 2023), there are plans to apply this signature protocol in future versions of Polkadot. As stated there, 

“Are BLS signatures used in Polkadot?​ 

Not yet, but they will be. BLS signatures allow more efficient signature aggregation. Because GRANDPA validators are usually signing the same thing (e.g. a block), it makes sense to aggregate them, which can allow for other protocol optimizations. 

BLS permits a diverse array of signature aggregation options far beyond any other known signature scheme, which makes BLS a preferred scheme for voting in consensus algorithms and for threshold signatures.

Even though Schnorr signatures allow for signature aggregation, BLS signatures are much more efficient in some fashions. For this reason it will be one of the session keys that will be used by validators on the Polkadot network and critical to the GRANDPA finality gadget.”

### Overview

At the same time, “Boneh-Lynn-Shacham (BLS) signatures have slow signing, very slow verification”. That is why it is vitally important to comprehensively accelerate the given signature scheme, especially its verification phase. So far, the applicant has focused only on optimizing a hash-to-curve function, which is used in BLS to send efficiently and securely an input message to an elliptic curve. 

The present project is dedicated to a much more global modification in comparison with existing implementations of the BLS protocol. Recall that it is based on pairings of the form G1 x G2 -> GT, where G1, G2, GT are some groups of the same large prime order. At the moment, people deploy pairings on so-called pairing-friendly elliptic curves, that is, the groups G1, G2 lie in the point groups of elliptic curves. However, the second group is defined over a larger finite field than the first one. As a result, the group operation in G2 is much slower than in G1. 

Koshelev has an original idea on how to change the pairing for another more “balanced” in such a way that the addition becomes slightly slower in G1, but significantly faster in G2. In total, this should give rise to an essential performance gain of the whole BLS signature scheme. Indeed, “GRANDPA validators are usually signing the same thing (e.g. a block)”. In the notation of https://crypto.stanford.edu/~dabo/pubs/papers/BLSmultisig.html, this means that we deal with the equality (3). In other words, aggregation (i.e., multi-addition) is performed not only for signatures, but also for the same number of public keys. In real-world cryptography this number may be huge. Thus, in both groups G1, G2 we have an approximately equal number of additions (apart from only two final pairings), hence we are forced to speed up arithmetic in each of them. 

By the way, the described situation is opposite for many other pairing-based protocols in which most additions occur in one group. In this setting, all the forces are conversely thrown on speeding up G1 at the price of slowing down G2. On the given theme, see, e.g., the article https://link.springer.com/chapter/10.1007/978-3-030-65411-5_14. 

### Project Details

The core feature of the new pairing consists in the fact that the group G1 is contained in the Jacobian of the hyperelliptic curve C: y^2 = x^5 + bx (of genus 2) rather than in an elliptic curve (of genus 1). It is worth emphasizing that the choice of C is very subtle, otherwise there is no advantage of moving to the genus 2 case. In turn, the group G2 still lies in an elliptic curve (of j-invariant 8000), but over a smaller finite field, which positively influences the performance. 

Such balancing (with the same security level) is impossible if we stay within solely elliptic curves. Recall that the curves y^2 = x^3 + b (of j-invariant 0) are the most attractive in today’s pairing-based cryptography. This is exactly because of the property that the basic field of G2 for them is the smallest among all the elliptic curves.

The mathematics underlying the grant proposal is quite complicated and most researchers with necessary background switched to post-quantum cryptography, while BLS signatures began to be utilized in practice relatively recently. All this explains why no one had ever thought before of such an interesting reincarnation of hyperelliptic curve cryptography. Once again, the new pairing is useless whenever the addition in G2 plays a minor role with respect to the addition in G1 or pairing computation. This circumstance was previously decisive in favor of elliptic pairings instead of (semi-)hyperelliptic ones.

Due to the academic nature of the project, there is unfortunately no possibility to provide here all the technical details on the topic. Some of them are given in the following crypto.stackexchange questions posed by the applicant:
https://crypto.stackexchange.com/questions/108170/real-world-protocols-based-on-pairings-such-that-the-number-of-additions-in-ma

https://crypto.stackexchange.com/questions/101359/will-a-semi-hyperelliptic-pairing-be-used-in-real-world-cryptography-if-it-is-fa

## Team :busts_in_silhouette:

### Team members

- Name of team leader
  
  Dmitrii Koshelev
  
- Names of team members
  
  There are no other members

### Contact

- **Contact Name:** Dmitrii Koshelev
- **Contact Email:** dimitri.koshelev@gmail.com
- **Website:** https://www.researchgate.net/profile/Dimitri-Koshelev

### Legal Structure

- **Registered Address:** Cours de la Liberté 79, Lyon 69003, France
- **Registered Legal Entity:** There is no registered legal entity

### Team's experience

The applicant has a solid background in (hyper)elliptic curve cryptography, especially in accelerating various primitives on (hyper)elliptic curves. This is confirmed by numerous articles in quite prestigious international scientific journals such as 
"IEEE Transactions on Information Theory", 
"Finite Fields and Their Applications", 
"Cryptography and Communications", 
"Designs, Codes and Cryptography", 
"Journal of Cryptographic Engineering", 
"SIAM Journal on Applied Algebra and Geometry", 
"Journal of Mathematical Cryptology",
"Applicable Algebra in Engineering, Communication and Computing". 
And even more eprints are currently under review in other famous journals on applied mathematics and cryptography.

Earlier, Koshelev won and successfully completed several grants of renowned blockchain organizations, namely 
Ethereum Foundation (https://blog.ethereum.org/2021/11/04/esp-allocation-update-q2-2021) and 
Web 3 Foundation (https://medium.com/web3foundation/web3-foundation-grants-wave-13-recipients-3e948cd29f18). 
These grants were dedicated to research and development of hashing to elliptic curves. 

More precisely, within the Ethereum grant the applicant invented a series of indifferentiable hash functions to elliptic curves of j-invariants 0, 1728. 
One of them (https://link.springer.com/article/10.1007/s10623-022-01012-8) is relevant for the curve BLS12-381, 
which is a de facto standard in today's real-world pairing-based cryptography. 
By the way, the given hash function is highly appreciated in Chávez-Saab et al.’s article (https://link.springer.com/chapter/10.1007/978-3-031-22963-3_3) 
recognized as one of the three best papers at Asiacrypt 2022. 

In turn, the purpose of the W3F grant was implementing the new hash function. Koshelev prepared a reference implementation in Sage 
(https://github.com/dishport/Indifferentiable-hashing-to-ordinary-elliptic-curves-of-j-0-with-the-cost-of-one-exponentiation) 
and then his colleague Zhenfei Zhang developed an efficient Rust implementation (https://github.com/zhenfeizhang/indifferentiable-hashing). 
The latter demonstrates that the new hash function is actually the fastest among all ones to BLS12-381 (and to the SNARK-friendly curve BLS12-377).

Besides, Koshelev's hash functions to curves of j-invariant 1728 were chosen (by the renowned cryptographer Diego Aranha) 
as the best to implement in the cryptography library RELIC as seen on github:
https://github.com/relic-toolkit/relic/blob/kss16/src/ep/relic_ep_map.c, 
https://github.com/relic-toolkit/relic/blob/kss16/src/epx/relic_ep4_map.c

It is also worth noting that the applicant has a successful work experience directly with pairings. 
Indeed, in the paper https://link.springer.com/article/10.1007/s13389-022-00296-9 (supplemented by the appendix https://link.springer.com/article/10.1007/s13389-023-00331-3) 
he invented a novel approach (based on the Tate pairing) allowing to instantly check if a curve point belongs to the prime-order subgroup or not. 
Subgroup membership testing is known to be an often inevitable procedure to thwart fault attacks. Interestingly, the new subgroup check is relevant for the majority of (non-pairing-friendly) elliptic curves actually used in practice.

### Team Code Repos

- https://github.com/dishport

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/dimitri-koshelev

## Development Status :open_book:

- links to your research diary, blog posts, articles, forum discussions or open GitHub issues
  
  https://crypto.stackexchange.com/questions/108170/real-world-protocols-based-on-pairings-such-that-the-number-of-additions-in-ma

  Among other things, Koshelev disscussed (in private correspondence) the represented idea with Aurore Guillevic (https://members.loria.fr/AGuillevic) and Georgios Fotiadis (https://www.uni.lu/en/person/NTAwMzQ3MjRfX0dlb3JnaW9zIEZPVElBRElT/),
  renowned researchers on pairing-based cryptography.

- references to conversations you might have had related to this project with anyone from the Web3 Foundation
  
  As you can see on this web-page https://crypto.stackexchange.com/questions/101359/will-a-semi-hyperelliptic-pairing-be-used-in-real-world-cryptography-if-it-is-fa, Syed (a.k.a. @drskalman), an employee of Web3 Foundation writes:

  "In particular, we at the research group of Web3 foundation are open to experience with more efficient emerging mathematical solutions and especially those which result in speeding up our zero-knowledge and succinct proof solutions.
  This includes systems which rely on hyperelliptic crypto for its security to demonstrate hyperelliptic cryptography in practice and encourage other researchers to evaluate their security.

  In short, the proposed research seems to be of interest from many angles."

## Development Roadmap :nut_and_bolt:

Not applicable to the current project

### Overview

- **Total Estimated Duration:** 1 year
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 15,000 EUR

### Milestone 1

- **Estimated duration:** 1 year
- **FTE:**  1
- **Costs:** 15,000 EUR

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Not applicable |
| **0b.** | Documentation | Not applicable |
| **0c.** | Testing and Testing Guide | Not applicable |
| **0d.** | Docker | Not applicable |
| 0e. | Article | The unique deliverable will be a paper (with affiliation of Web3 Foundation) in a prestigious scientific journal (or in the proceedings of a conference) on cryptography or applied mathematics. The paper will contain all the technical aspects of the new semi-hyperelliptic pairing (written as clearly as possible) in addition to an accurate performance comparison with the best elliptic pairings. |
| 1. | Substrate module: X | Not applicable |
| 2. | Substrate module: Y | Not applicable |
| 3. | Substrate module: Z | Not applicable |
| 4. | Substrate chain | Not applicable |
| 5. | Library: ABC | Not applicable |
| 6. | Smart contracts: ... | Not applicable |

## Future Plans

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

First of all, the applicant plans to disseminate future research results in thematic seminars or conferences. Besides, the text of the article will be uploaded in open access to conventional sites such as https://eprint.iacr.org and https://www.researchgate.net. 

The project under consideration can be theoretically enhanced even further by applying certain pairing-friendly algebraic curves of higher genera g > 2. 
The reason for that is analogous: increasing the genus contributes to better balancing of arithmetic between the groups G1 and G2. 
This is a promising research direction whose outcomes may make the BLS multi-signature an order of magnitude faster than the state-of-the-art implementations without higher-genus curves. 
However, one needs to primarily study the case g = 2.

By the way, resistance of the discrete logarithm problem (DLP) in the Jacobians of g > 1 curves is not questioned, because in the context of pairings we deal with huge cofactors. 
In other words, the groups G1, G2 are embedded deeply inside of the Jacobians. 
Therefore, potential improvements of attacks on DLP, exploiting somehow Jacobians properties, will not probably have any advantage with respect to Pollard's classical rho method applied directly to G1, G2. 
Moreover, any elliptic curve can be in fact constructively embedded into the Jacobian of some genus 2 curve. Thereby, vulnerability of hyperelliptic cryptography would seemingly affect the security of (ordinary) elliptic cryptography.

## Referral Program (optional) :moneybag:

- **Referrer:** Not applicable
- **Payment Address:** Not applicable

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

