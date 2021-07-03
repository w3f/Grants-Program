# General Grant Proposal

* **Project Name: Name** *Glow*: Simple, Secure DApp DSL
* **Team Name: Name** [Mutual Knowledge Systems, Inc.](https://mukn.io)
* **Payment Address:** (BTC) bc1qma9gmt7njg0pjftv3grpgj7l052j0d2f6a4zxh

## Project Overview :page_facing_up:

### Overview

We propose to port our programming language Glow to the Polkadot platform. This three-month, $30,000 project will benefit Polkadot in the long run by bringing DApp users and developers to it. In the short run, the project will also benefit Polkadot by allowing its users to have a cross-platform language that generates matching smart contract and client/server code for financial interactions. In the long run, formal verification will drastically reduce the risks, and layer2-aware code generation will help safely scale transactions and reduce fees, thus making Polkadot a competitive blockchain for any smart contract-based business. The proposed port would be a proof of concept of the Glow language. Further work would be required to robustly support the entire feature set of Polkadot.



#### Relevance to Polkadot

This project will benefit Polkadot and Substrate in the long run
by bringing DApp users and developers to it.
In the short run, the project will also benefit Polkadot
by allowing its users to have a cross-platform language that generates
matching smart contract and client/server code for financial interactions.
In the long run, formal verification will drastically reduce the risks,
and layer2-aware code generation will help safely scale transactions
and reduce fees,
thus making PolkaDot a competitive blockchain for any smart contract-based business.

The proposed port would be a proof of concept of the *Glow* language.
Further work would be required to robustly support the entire feature set of Substrate.

### Project Details

#### The *Glow* Language: Safer, Cheaper DApps

[*Glow*](https://glow-lang.org) is a domain-specific (programming) language for Decentralized Applications (DApps).
Compared to competing DApp languages, *Glow* provides much higher-level abstractions,
that make DApp development not only drastically simpler,
but also portable and amenable to formal verification.
With *Glow*, DApps will be much cheaper and faster to develop and to use,
but also, importantly, to audit and to trust—and thus safer in the end.

The *Glow* compiler automatically enriches a DApp with details like
intermediate transactions, timeouts, and collaterals.
It can emit code in “direct style” as typically followed by humans writing DApps today, but also for “generalized state channels” that allow for scalable private contracts.
The *Glow* compiler then generates not just a “smart contract” for a DApp,
but also matching client and server code.

Last but not least, *Glow* generates a logical model that notably uses
Game Semantics to allow formal verification of security properties of the DApp
in the adversarial environment of permissionless blockchains.
The model is checked using the theorem prover, Z3, as a prerequisite to accepting to run the DApp.
Entire classes of bugs thus disappear when using the *Glow* language,
that today cost millions of dollars in development
and/or operating losses to companies deploying DApps.

#### Relevance to Substrate & Polkadot

Substrate has a good lower-level language for smart contracts, *Ink!*;
but it is missing a good higher-level language:

A language at a high-enough level
one that can generate at the same time matching contract, client/server code, and formal model,
from the same specification;

One that will make it hard or impossible
to write bugs due to missing or reversed authorization checks without being caught;


DApps are interactions between multiple mutually distrusting parties,
who exchange digital assets based on algorithmically verifiable rules
enforced by blockchain smart contracts.

*Ink!* is a great language for contracts at the relatively low-level.

Current languages There is no current language

This project will also spearhead the ability for Polkadot to host DApps written in languages other than its native Rust+Substrate. Since this feat has not been achieved before, we anticipate that this ability may require changes to the platform and to its documentation, that won’t be discovered until the attempt is completed. This will help the Polkadot ecosystem evolve toward effective feature parity or superiority compared to its rival Ethereum, on the dimensions that matter to DApp development.

With respect to Substrate, existing consensus mechanisms include proof-of-authority (Aura), proof-of-stake (Babe), and proof-of-work (Kulupu). We would like to extend this with two more constructions: proof-of-space (Spartan) and (in a later grant) proof-of-storage (Subspace). Both of these are instances of a more general class of proof-of-capacity protocols, which seek to replace "one-CPU-one-vote" with "one-disk-one-vote". Upon completion, this grant would serve to further demonstrate the flexibility of Substrate and FRAME for any abstract blockchain. Other teams seeking to implement slot-based PoC blockchains would also be able to re-use the core crates to reduce development time.  Note that any proof-of-replication implies an underlying proof-of-space. We therefore intend to begin with the much simpler task of implementing Subspace as a pure proof-of-space consensus protocol (Spartan) before extending it into a full proof-of-storage (or replication) protocol envisioned in our whitepaper. 

#### Team Motivation

We are committed to empowering humans to build secure DApps, using our simple to understand and use domain specific language.

Our values include open-source technologies, synergies, and interdisciplinary knowledge.

Our team’s expertise includes game theory, computer science and economics.


#### *Glow* So Far

The first version of *Glow* was released in February 2021, and can work on
either the Ethereum Virtual Machine (EVM), or Cardano's Plutus ecosystem.
Documentation for *Glow* is available at https://glow-lang.org/docs/

[Mutual Knowledge Systems, Inc.](https://mukn.io), a.k.a. MuKn (pronounced “Moon”)
has been developing *Glow* for a year and a half,
based on a prototype previously developed by one of its co-founders.
We are committed to ever growing the language and its ecosystem.

Development for *Glow* is currently funded for the next few months. Our current Docker image is based on Nix, and we have a new one in progress based on Guix.

Upcoming features include a user-friendly web-browser [UI](https://www.youtube.com/watch?v=0ltm6RmyDnM), a [MOOC](https://gitlab.com/mukn/glow-mooc)and several new types of smart contracts.



### Ecosystem Fit

Product Fit for Substrate:

Substrate provides a great platform to build the necessary lower-level layers of blockchain infrastructure: cryptography, gossip, consensus, scaling, elementary accounting, token economics, isolated virtual machine evaluation, etc. With Glow, we are focusing on higher-level layers of functionality: interactions between distrusting human participants, contract-level resource-preservation, automating the use of escrows, collaterals, timeouts, game theory, atomic transactions, etc.

We believe there is a great complementarity between our approaches, and that together we can build a complete product that is robust underneath, while providing users with a language embodying the concepts that matter to them: resources being managed and traded between multiple participants. The combination would provide enhanced security and usability compared to the alternatives.

We intend to port it to the Polkadot ecosystem targeting Polkadot’s language to generate Substrate scripts and Rust client code.


### Background on Glow / Relevance to Polkadot

Glow is a Domain-Specific Language (DSL) to develop secure Decentralized Applications (DApps) on the blockchain. Unlike existing languages, Glow covers much more than a DApp’s “smart contract”: the Glow compiler also generates crucially matching client code, and a logical model of your DApp so you can prove it correct. Formal methods are not an afterthought in Glow, they are built into the language and its implementation. Furthermore, Glow’s logic is designed to deal with the inherently adversarial aspect of DApps, that existing formal tools blatantly overlook. Underlying Glow is an architecture that in the future will make it possible to prove correctness of Glow itself, and can later grow into a complete DApp Operating System. Mutual Knowledge Systems, Inc. is developing Glow as an Open Source platform, with an ambitious Business Model to become the go-to company for all blockchain developments.

## Team :busts_in_silhouette:

### Team Members

* **François-René Rideau:** Team leader, Co-Founder, Chief Executive Officer
* **Alexander Smart:** Co-Founder, Chief Operating Officer
* **Gauthier Lamothe:** Co-Founder, Chief Communications Officer
* **Alexander Plotnick:** Developer
* **Drew Crampsie:** Senior Developer
* **Alexander Knauth:** Junior developer
* **Emeka Nwanko:** Developer


### Contact

* **Contact Name:** François-René Rideau
* **Contact Email:** fare@mukn.io
* [**Glow Website**](https://glow-lang.org)
* [**Mutual Knowledge Systems Website**](https://mukn.io)

### Legal Structure

* **Registered Address:** Mutual Knowledge Systems, Inc. is a Delaware C corporation with its main office at 12 Aldwin Road, Boston, MA 02131, USA.
We are three co-founders, and are looking to raise money,
but without too much haste for we are currently cashflow positive.

* **Registered Legal Entity:**  We at Mutual Knowledge Systems, Inc. envision a world where everyone uses blockchains for commercial and financial transactions. In this world, simple auditable DApps maximize how much users can trust the system while minimizing how much they need to trust other users. And our *Glow* language helps make DApps orders of magnitude simpler and more auditable.

### Team's experience

* **François-René Rideau** (team leader): Co-Founder
François-René has been making programming languages and distributed systems usable for 25 years. Alumnus of the École Normale Supérieure, Former Senior Engineer at ITA Software, he also worked at Google and Bridgewater Associates. While working in the industry, he notably maintained and rewrote ASDF, the build system at the heart of the Common Lisp open source community; he also kept publishing academic papers and speaking at programming language conferences. Early in his career, he even proved in Coq the correctness of a (centralized) payment protocol. Eventually, his interests in economics and software security converged with his experience in open source software and formal methods and he started working on Layer 2 solutions for the Blockchain. Since January 2018, he has made plenty of mistakes as co-founder of startups, and learned the hard way to become his own CEO.

* **Alexander Smart**: Co-Founder
Co-Founder, has always thought fast, but learned to think deep and sharp at UChicago. After studying law at Pepperdine, he spent nearly fifteen years guiding executives and decision makers through litigation, in matters ranging from shoplifting and speeding tickets to multi-forum international investment bank disputes. His practice honed his ability to quickly assimilate and master new information, and deliver that information clearly at any level of sophistication. Tiring of courthouses, he found his skills were readily applicable and desperately needed in the blockchain space. 

* **Gauthier Lamothe**: Co-Founder
Gauthier has been a seasoned coach, psychotherapist and instructor in communication and management. He doubled his career as a media expert (film and software producer, then e-marketing manager).
He participated in a few blockchain projects, for entities such as the Free Republic of Liberland, and worked on decentralized justice systems, tokenization of governance, and of course crypto-currencies.
His work in the MuKn ecosystem is to take care of every aspect related to communications and human issues, both within the company and with customers and partners, for awareness of human-related safety risks are often dramatically underestimated in the blockchain space. 

* **Alexander Plotnick:** Developer
A Ph.D in computer science from Brandeis University, Alex is an experienced and versatile programmer. He has worked on natural language processing systems, machine learning, embedded systems, and programming language design & implementation.
His skills include natural language processing, machine learning and neural networks, knowledge representation and automated inference, and many programming languages such as (Rust, JavaScript, Java, Ruby, Python, Tcl, Perl, Prolog, C, Forth, Lisp, Fortran, Assembly)

* **Drew Crampsie:** Developer
Drew is an independent system developer with over 20 years of experience in designing, implementing and maintaining Internet based applications and servers with a focus on "bleeding edge" Web Apps. Drew is a seasoned user in non-mainstream and mainstream techs and languages (Scheme, Common Lisp, SQL, Javascript, C...).

* **Emeka Nwanko:** Developer
2005 Alumnus from Nnamdi Azikiwe University. Worked for several companies as a Field Engineer or Operations Manager, such as Schlumberger Nigeria or Northern Oilfield. Also worked for Satajanus Nigeria Limited as a software developer in the field of Blockchain industry, both in C# and F#, but also in Rust and Solidity. Also a teacher. 

* **Alexander Knauth:** Junior Developer
Alex has already co-authored two notable papers and contributed to the Racket ecosystem. His previous work on combining types and macros is directly relevant to building our compiler.

* **Noel Kwan:** Intern Developer
Sophomore at the National University of Singapore, Noel already holds significant experience in Haskell, Javascript, and Rust. He also has a strong understanding of AWS systems, NixOS and even full-stack web development. He already developed a DSL, a chat-server application, and worked on several projects as a software engineering intern previously.


### Advisors and Partners

* **Nada Amin**:  namin.seas.harvard.edu 
* [**Rick Dudley**](https://www.linkedin.com/in/afdudley/)
* [**Dominik Franek**](http://dominikfranek.com/)


### Team Code Repos

* [Glow](https://gitlab.com/mukn/glow)
* [François-René Rideau](https://github.com/fare)
* [Alexander Plotnick](https://github.com/plotnick)
* [Alexander Knauth](https://github.com/AlexKnauth)
* [Ian Denhart](https://gitlab.com/users/isd)
* [Noel Kwan](https://github.com/kwannoel)


### Team LinkedIn Profiles

* [François-René Rideau](https://www.linkedin.com/in/fahree)
* [Alexander Smart](https://www.linkedin.com/in/alexandersmart)
* [Gauthier Lamothe](https://www.linkedin.com/in/gauthier-lamothe/)

## Development Status :open_book:

Development for *Glow* is currently funded for the next few months.
Upcoming features include a user-friendly web-browser [UI](https://www.youtube.com/watch?v=0ltm6RmyDnM), and several other types of smart contracts.  We are also currently developing a [MOOC](https://gitlab.com/mukn/glow-mooc)


## Development Roadmap :nut_and_bolt:


### Overview

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 1.5
* **Total Costs:** $30,000

### Milestone 1 — Bridge *Glow* and Substrate

* **Estimated Duration:** 1.5 
* **FTE:** 1.5
* **Costs:** $15,000

| Number | Deliverable | Estimated Time | Specification |
| ------------- | ------------- | ------------- | ------------- |
| 0a. | License | 0 | Apache 2.0 |
| 0b. | Onboarding | 1 week | Having a developer get familiar with the relevant parts of both *Glow* and Substrate |
| 0c. | Experimentation | 1 week | Having the developer run lots of small manual tests to determine how exactly to match the concepts of *Glow* and Substrate together. |
| 1a. | Substrate module for *Glow* runtime support | 2 weeks | We will create a Substrate module (in Rust) that will interface with the *Glow* runtime (in Scheme) such that *Glow* can interface with Substrate chains, send transactions, create contracts, send messages to contracts, watch messages received by contracts, and marshal data between Substrate and *Glow*. |
| 1b. | Slack | 1 week | Handle unforeseen difficulties in the above |

### Milestone 2 — *Glow* language backend targeting Substrate

* **Estimated Duration:** 1 month
* **FTE:** 1.5
* **Costs:** $15,000

| Number | Deliverable | Estimated Time | Specification |
| ------------- | ------------- | ------------- | ------------- |
| 2a. | *Glow* backend into Substrate smart contracts | 2 weeks | We will create passes for the *Glow* compiler and support in the *Glow* runtime so that existing *Glow* programs can be compiled on a Substrate chain. |
| 2b. | Test environment | 1 week | We will provide a deterministic build using Nix or GUIX, from which a docker image can be generated that can reliably run tests for CI/CD in gitlab |
| 2c. | Documentation | 1 week | We will update the documentation of *Glow* with explanations on how to deploy our DApps on a relevant test or production Substrate chains. |
| 2d. | Slack | 1 week | Handle unforeseen difficulties in the above |

## Future Plans

### Community Engagement

We will publish progress reports on our Blog on https://mukn.io,
including a variant of our [tutorial](https://glow-lang.org/docs/Glow_Tutorial.html) especially targeting using Polkadot test and production networks. 

We are also currently developing a [MOOC](https://gitlab.com/mukn/glow-mooc).


## Additional Information :heavy_plus_sign:


*Glow* on Polkadot

While the *Glow* language is portable across blockchains,
the *Glow* compiler needs to be adapted to Polkadot.
We intend to port it to the Polkadot ecosystem targeting Polkadot’s language to generate Substrate scripts and Rust client code. Our initial port will take two months and support the elementary subset of features of our language, and will enable testing of simple DApps end-to-end on Polkadot. This project will open the Polkadot ecosystem to all the applications that in the future can be written portably in *Glow*.

Deliverable: Upon completion of the project, we will deliver a working demo of DApps written in *Glow*, running on Substrate, with documentation and a nix recipe to deterministically reproduce the demo.
Our compiler and runtime are published under the Apache 2.0 license. All work we do to support Polkadot support will be included under the same license.

## Bibliography

Our domain specific language, *Glow*,
was designed by our Co-Founder François-René Rideau,
formerly a researcher in Programming Language Semantics and Distributed Systems.

An extensive bibliography about the design and implementation of *Glow*,
Including related present and past works by its authors, is available
[on our wiki](https://gitlab.com/mukn/glow/-/wikis/Bibliography/Glow).

## Appendix A: Simple DApps in *Glow*

... Let’s include the Closing DApp here, and/or the gist of my latest talk.
The asset swap isn’t quite there yet, and the crowdfunding even less so.
Crowdfunding was an example that made sense only for Cardano, that uses it
as its basic example for Plutus.

### Asset Swap
*Glow* is a mostly-pure typed functional programming language, extended to express multi-party computations that control digital assets. The syntax of *Glow* is largely derived from JavaScript, with many elements borrowed from ReasonML. Its semantics is closely related to ML. The only side effects are aborting transactions (primitive require!), communication with the protocol (primitive publish!), and depositing assets into the interaction (primitive deposit!) and withdrawing assets from the interaction (primitive withdraw!). Participants can also define local computations (annotated by @participant), the results of which are not seen by other participants unless and until they use publish! to share the results with these other participants.

Thus, an asset swap in *Glow* can be defined in eight lines as follows:

@interaction
let swap = (A: Participant, basket1: Assets,
            B: Participant, basket2: Assets) => {
  deposit! A -> basket1;
  deposit! B -> basket2;
  withdraw! B <- basket1;
  withdraw! A <- basket2;
}

In the above example, a function swap is defined that exchanges two baskets of assets between two participants. It can be called with an expression:

swap(alice, {ETH: 10}, bob, {DAI: 2084});

The execution model is that the first participant, Alice, will deposit her basket into the escrow for the current interaction. Then the second participant will deposit his basket. Finally they will each withdraw the other basket. When compiling, Glow will automatically divide this interaction into two transactions:
The first transaction is the deposit by participant A. The transaction must end there, because the next action is done by the other participant.
The second is the deposit by participant B followed by both withdrawals. The withdrawals are done by the consensus and therefore do not depend on a change of participant.
To protect the first participant, in case the second one fails to deposit his basket, a timeout will automatically be added, that allows them to withdraw the basket they have deposited into the interaction. These automatically added timeouts ensure that the interaction is either completed or aborted, but not stuck forever waiting.

So far, Glow only directly supports swaps between assets on a same blockchain, and wrappers have to be used to trade assets on other blockchains.


### Crowdfunding
Here is how we can express the benchmark “crowdfunding” application, wherein pledgers pool money into a common account, the contents of which will be disbursed to the organizer if and only if a total target amount is reached before deadline. The hosts of the crowdfunding platform earn a small commission on the assets raised, which limits how much the organizer can take from the pledgers if he doesn’t reach the target.

data Action = Pledge(TokenAmount) | Collect | Reclaim(TokenAmount);

let platformCommission amount = quotient(amount, 100);

let crowdfunding =
  (Organizer: Participant, Platform: Participant,
   target: TokenAmount, expirationTime : Timestamp) => {
   require! expirationTime > currentTime();

   let rec crowdfund = (ledger : Table(TokenAmount <- Participant),
                        totalPledged: TokenAmount) => {
     assert! totalPledged == totalAmount(ledger);
     choice {
       | ForAllParticipant (NewPledger) {
           @NewPledger amount =
             input(["Enter next pledge"], TokenAmount);
           publish! NewPledger -> Pledge(amount);
           deposit! NewPledger -> amount;
           require! currentTime() < expirationTime;
           crowdfund(Table.add(ledger, NewPledger, amount),
                     totalPledged + amount);

       | publish! Organizer -> Collect;
           require! currentTime() >= expirationTime;
           require! totalPledged >= target;
           let commission = platformCommission(totalPledged);
           withdraw! Platform <- commission;
           withdraw! Organizer <- totalPledged - commission;

       | ForAllParticipant(Pledger)
           publish! Pledger -> Reclaim(amount);
           require! currentTime() >= expirationTime;
           require! totalPledged < target;
           require! Table.get(ledger, Pledger) == amount;
           withdraw! Pledger <- amount;
           crowdfund(Table.remove(ledger, Pledger),
                     totalPledged - amount);
   }
   crowdfund({}, 0);
}

This application illustrates several principles not in the previous application:
Defining an algebraic data type to encode a choice of actions taken in the DApp.
A choice {} between several actions, by potentially different participants.
Opening the contract to anyone with ForAllParticipant.
Explicit timeout handling by comparing currentTime() to a deadline.
Recursion with let rec.

The total number of lines (about 40) is much less than the hundreds of lines required in Solidity, Scilla, or substrate. The result is portable, unlike with the previous languages. The compiler outputs include client code, as with substrate and unlike Solidity or Scilla. The security is improved, as actions are clearly attached to participants, and the system can prove that contract accounts are balanced at all times. Unlike the substrate tutorial example, our contract does ensure that the “collection” transaction only counts contributions in the total. It demonstrates use of such contract wide data by computing a commission to the crowdfunding platform (that also serves as deterrent to self-contribution by the organizer).



## Appendix B: Comparison between *Ink!* and *Glow*

### “Closing” contract in *Ink!*

use ink_env;
use ink_env::Environment;
use ink_lang as ink;

#[ink::chain_extension]
pub trait RecoverId {

    type ErrorCode = SigRecoveryErr;

    // See: https://paritytech.github.io/ink/ink_lang_macro/attr.chain_extension.html#attributes
    // 1101 here is arbitrary, depends on implementation in substrate node.
    #[ink(extension = 1101, returns_result = false)]
    fn recover_id(v: u8, r: [u8; 32], s: [u8; 32]) -> ink_env::AccountId;
}

#[derive(Debug, Copy, Clone, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum SigRecoveryErr {
    InvalidSignature,
}

impl ink_env::chain_extension::FromStatusCode for SigRecoveryErr {
    fn from_status_code(status_code: u32) -> Result<(), Self> {
        match status_code {
            0 => Ok(()),
            1 => Err(Self::InvalidSignature),
            _ => panic!("encountered unknown status code"),
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum SignEnv {}

impl Environment for SignEnv {
    const MAX_EVENT_TOPICS: usize = 5;

    type AccountId = <ink_env::DefaultEnvironment as Environment>::AccountId;
    type Balance = <ink_env::DefaultEnvironment as Environment>::Balance;
    type Hash = <ink_env::DefaultEnvironment as Environment>::Hash;
    type BlockNumber = <ink_env::DefaultEnvironment as Environment>::BlockNumber;
    type Timestamp = <ink_env::DefaultEnvironment as Environment>::Timestamp;
    type ChainExtension = RecoverId;
}

#[ink::contract(env = crate::SignEnv)]
pub mod closing {
    #[ink(storage)]
    pub struct Closing {
        buyer: AccountId,
        seller: AccountId,
        digest: [u8; 32],
        price: u128,
    }

    // Third parties can verify this for themselves.
    #[ink(event)]
    pub struct Signed {
        #[ink(topic)]
        signee: AccountId,
        #[ink(topic)]
        digest: [u8; 32],
        #[ink(topic)]
        v: u8,
        #[ink(topic)]
        r: [u8; 32],
        #[ink(topic)]
        s: [u8; 32],
    }

    impl Closing {
        /// Buyer calls this with signed document (digest),
        /// and price that should be paid to seller.
        #[ink(constructor)]
        pub fn new(buyer: AccountId, seller: AccountId, digest: [u8; 32], price: u128) -> Self {
            Self { buyer, seller, digest, price }
        }

        /// Seller calls this after verifying digest for Buyer's signature,
        /// and signing it.
        /// This verifies and publishes the Seller's signature against the digest
        /// before releasing payment.
        #[ink(message)]
        pub fn verify_and_withdraw(&mut self, v: u8, r: [u8; 32], s: [u8; 32]) {
            let caller: AccountId = self.env().caller();
            assert!(caller == self.seller);
            assert!(self.price <= self.env().balance(), "Insufficient funds!");

            // Verify seller signature
            assert_eq!(self.seller, self.env().extension().recover_id(v, r, s).unwrap());

            // Publish signature
            self.env().emit_event(Signed {
                signee: self.seller,
                digest: self.digest,
                v, r, s
            });

            // Seller receives their funds, terminate the contract
            self.env().transfer(self.seller, self.price);
            self.env().terminate_contract(self.buyer);
        }
    }
}



### “Closing” contract in Glow
#lang glow

// Buyer calls this with signed agreement (digest) and payment (price).
@interaction([Buyer, Seller])
let payForSignature = (digest : Digest, price : Nat) => {
  deposit! Buyer -> price;

  // Seller then signs, and allows buyer to verify
  @publicly!(Seller) let signature = sign(digest);
  // The line above is equivalent to the three below:
  //// @verifiably!(Seller) let signature = sign(digest);
  //// publish! Seller -> signature;
  //// verify! signature; // This line is itself the same as the one below:
  ////// require! isValidSignature(Seller, signature, digest);

  withdraw! Seller <- price;
};


As you can see, the amount of code required to obtain the same result in Glow is significantly lower than in Ink!.

This doesn’t mean that a low level of abstraction is always problematic, but most smart contracts will suffer the classical problems of such a level of abstraction : expensive auditing, bug-vulnerability, high risks.

