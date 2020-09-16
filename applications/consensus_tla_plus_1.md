# Polkadot Consensus in TLA+

* **Project:** Polkadot Consensus in TLA+
* **Proposer:** ebuchman
* **Payment Address:** bc1qxgt224sy8xddpgmchcamq4u96a34708twvxu8t96n68942w7ehtqcl344j

## Project Description

As start of a potentially longer engagement, we propose to formalize
and model check the abstract architecture underlying your project's
paper draft "Byzantine Finality Gadgets" (from May 2, 2019). 
In a longer engagement, we would eventually like to model check the
Grandpa protocol. 

Here, we propose a prerequisite step that is necessary for future
verification efforts, whether Web3 chooses to continue with our
approach based on TLA+ model checking, or whether Web3 chooses other
formal approaches with less automated verification. In particular, we
propose to establish a formal representation of the interaction
between Grandpa and the block production protocol, as well as
invariants of systems of nodes that execute these protocols. In the
draft, this interface can be mainly inferred (somewhat between the
lines) in Definition 1.4, the three lines before this definition, and
quite implicit in the pseudo code given on page 7.
It is crucial to formally capture the interaction between block production, eventual consensus, finality oracle, and the chain structure. By analyzing executions at this level, we may find underspecified parts of the finality gadget architecture.
The ecosystem will benefit from a TLA+ specification with precise semantics of the interface of Grandpa,
which is both human-readable and machine-readable: 

- In our experience, the feedback provided by working on a TLA+
specification can be used to improve English specification and white
papers, and thus make the concepts more accessible to a broader
audience.

- It will lead to better implementations, as system engineers can use
  invariants to guide implementations, and produce tests.

- Model checking TLA+ specification will make explicit, and help
formalizing, hidden assumptions behind protocols (typically for
liveness specifications).

- By model checking temporal properties of the finality gadget (as
  stated in Definition 1.4), we may find example executions that would
  help the authors to refine the formal definitions. In case, the
  model checker does not flag violations of the temporal properties,
  we can produce examples of the valid executions. In our experience,
  some of such examples are not expected by the protocol designers.
  
For this proposal we have focused on Pages 1-7 of the draft. This
means we will formalize the system in TLA+, using linear temporal
properties. In particular, we will not consider probabilistic
guarantees of block production. In the draft, the block production is
described by "conditional eventual consensus" which is explained in
terms of non-deterministic systems (that is, without
probabilities). 

Similarly, as we focus on the modular structure, we will not consider
internals of Grandpa in this proposal, that is, we will not model the
exchanged messages and the rules in the Figure on page 7. The rationale
behind this is that a detailed formalization depends on the properties
in the interfaces; e.g., what is the formal definition of "best chain"
(used in rule 3 in the box) and what temporal properties can be
assumed about its evolution is part of this interface definition, and
without it, no meaningful transition relation of the grandpa protocol
can be defined.  Also, we will not consider the randomized version of
grandpa.

This formalization step for the interface is necessary, if we want
continue with the formalization and verification of Grandpa. If we
started with a complete specification of Grandpa, this could result in
a large monolithic specification. Thus, this first step will give us the
first module in the decomposition, as proposed in the Grandpa paper.


## Team members

The main work will mainly be done by **Igor Konnov** and **Josef Widder**. **Ethan
Buchman** and **Zarko Milosevic** will provide additional feedback and
internal reviews.

## Team Website	
* https://informal.systems

## Legal Structure 

Informal Systems Inc.  
180 John Street  
Suite 314  
Toronto ON M5T 1X5  
Canada

## Team's experience

The project will be mainly conducted by Igor Konnov and Josef Widder.

Igor started his research by developing theoretical techniques for
parameterized model checking of protocols. As a postdoc at TU Wien and
later a researcher at INRIA Nancy, he has been developing 
parameterized verification methods for Byzantine fault-tolerant
distributed algorithms.
To address practical needs of algorithm designers, Igor is developing the new model checker Apalache.
Apalache is a symbolic model checker for TLA+, whose accompanying paper at ACM OOPSLA receives
broad attention. Due to his intimate understanding of TLA+ and the
underlying model checking algorithms, he can not
"just write" TLA+ specifications, but indeed writes them in a
way that allows the tools to report meaningful results. Moreover, his
development efforts for the APALACHE model checker are largely guided
by applications in fault-tolerant distributed systems.

Josef started his career in the mathematical analysis of Byzantine
fault-tolerant distributed algorithms. He wrote his PhD thesis on
partial synchrony, has subsequently worked on fault-tolerant
distributed algorithms and has published his results in top venues in
this area ACM PODC, DISC, DSN, SIAM Journal on Computing. In the last
years he moved his attention to automated verification, and developed
verification methods based on abstractions and reductions.

In 2011, Igor and Josef joined forces and unite their
backgrounds in distributed systems and model checking.  They have made
breakthroughs in automated verification of Byzantine fault-tolerant
distributed algorithms, and published their results in top academic
venues such as ACM POPL, CAV, CONCUR, and TACAS. 
Together they developed the
Byzantine Model Checker - the tool for parameterized verification of
fault-tolerant distributed algorithms. This tool is receiving
increasing interest from the academic community, e.g., see the
[recent tutorial](https://www.discotec.org/2020/tutorials#parameterized-verification-with-byzantine-model-checker) at DisCoTec 2020. 

In 2020 both have joined Informal as Principal Scientists. In projects
for the Interchain Foundation, they are formalizing and model checking
Tendermint protocols. As first project, we formalized and analyzed
Fastsync (see the repo below) and reported several liveness issues
that may appear in the presence of faulty nodes. We have been also
formalizing Tendermint consensus and Tendermint light client.
In the latter, specification and development go hand-in-hand.


## Team Code Repos

* https://github.com/informalsystems/tendermint-rs
* https://github.com/informalsystems/ibc-rs
* https://github.com/informalsystems/apalache
* https://github.com/konnov/bymc

For examples of our specification work, see:

* https://github.com/informalsystems/tendermint-rs/tree/master/docs/spec/
* https://github.com/informalsystems/ibc-rs/tree/master/docs/spec/

## Team LinkedIn Profiles

* https://www.linkedin.com/in/igor-konnov-7683241/
* https://www.linkedin.com/in/josef-widder

## Development Roadmap

**Daily Rate and Costs**

We expect the project to span six weeks total. As the milestones contain meetings for discussions with the Web3 team, the project's time frame is subject to the availability of involved persons at Web3.

The total cost of this project is 28,800 CHF (2.9091 BTC). As described below, the current milestones are estimated to take Josef and Igor 5-7 working days together (10-14 person-days total) plus 0.5 person-days each from Ethan Buchman and Zarko Milosevic for internal review and feedback. 

* Total person working days = 11-15 days
* Total project time = 6 weeks
* Total cost = 28,800 CHF (2.9091 BTC)

BTC Address: bc1qxgt224sy8xddpgmchcamq4u96a34708twvxu8t96n68942w7ehtqcl344j

### Milestone 1 - Formalization of Shared Data and Modules - CHF 8,800 (0.88889
BTC)

- 2 hour meeting: In the preparation of this proposal we have
  collected several questions that we need to clarify regarding the
  draft. As the draft is written in a natural language, there several
  ambiguities with respect to the decomposition, and coordination
  between block generator and grandpa. There is implicit assume/rely
  reasoning in the draft, that we need to clarify.

- 1-2 day TLA+ work: We will formalize a node that executes two modules, an
  abstract block generation and an abstract consensus algorithm

- Internal review with Ethan and Zarko

### Milestone 2 - Grandpa's temporal properties - CHF 15,200 (1.53536 BTC)

- 2 hour meeting: Once we have established a model of the modules, we
  can use the introduced terms to discuss in detail the expected
  temporal properties and quantification
  over processes. Also here several ambiguities in the text need to be
  sorted out. For instance, grandpa is supposed to be executed
  repeatedly, while this iterative nature of the system is not
  consequently addressed in the current write-up of Definition 1.4

- 2-3 day TLA+ work: to formalize the temporal properties of grandpa, and
  development of invariants to check soundness

- Internal review with Ethan and Zarko


### Milestone 3 - Final Specification - CHF 4,800 (0.48485 BTC)

- 1 hour meeting: we do a preliminary presentation of the TLA+
 specification,
 and discuss final adjustment to be made for a final presentation for
 a broader audience (system engineers)
- 0.5-1 day TLA+ work : polishing the specification, and preparation of a
  presentation 
  
- Internal review with Ethan and Zarko
  
- 1 hour final presentation and future work for a broader audience


## Future Plans
<!-- * Please include the team's long-term plans and intentions. -->
Our goal is to make formal verification tools more accessible to distributed systems engineers, with an initial focus on blockchain projects, especially their consensus protocols. We hope that by formally verifying these protocols, we can gain confidence in them and their implementations, and better facilitate interoperability between them and the systems built on top of them.

We're currently executing on a contract with the Interchain Foundation that involves verifying and implementing a substantial portion of the Cosmos technology stack. We aim to enter into similar such agreements with other blockchain projects.

While we have proposed here a small project to get started, we hope to follow up with larger projects to cover more of the Polkadot technology stack.

## Additional Information
<!-- Any additional information that you think is relevant to this application that hasn't already been included. -->

<!-- Possible additional information to include: -->
<!-- * What work has been done so far? -->
<!-- * Are there are any teams who have already contributed (financially) to the project? -->
<!-- * Have you applied for other grants so far? -->
<!-- * Are there any other projects similar to yours? If so, how is your project different?   -->
