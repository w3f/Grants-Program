# GRANDPA formal verification

- **Team Name:** MLabs
- **Payment Address:** FIAT
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

This application is in response to the RFP ["Formal Guarantees for GRANDPA Finality Gadget"](https://grants.web3.foundation/docs/RFPs/formal_guarantees_for_grandpa)

### Overview

MLabs has extensive experience in formal verification processes gained through many Cardano projects, where formal verification is (in many cases) a key requirement. Mlabs would like to share its knowledge and expertise with Polkadot in this peculiar area of software development.  

## Project Details

### **_The proof approach_**

When mathematicians write proofs with 'pen and paper', they need to review them by themselves multiple times before they share them with the mathematical community. Even then they need to pass the scrutiny of multiple pairs before the proofs can be accepted. Although this process exists and is followed rigorously, mistakes can happen, and invalid results can reach the public, in those cases, mathematicians usually offer new proofs of statements and in very rare cases they retract the results.

Proof assistants are more rigorous than people in the sense that unless we explicitly request for exculpation of proof, the proof assistant would reject to accept a non-rigorous proof.

On the other side, proof assistants have the weakness that the validity of the proof is tied to various assumptions:

- The implementation of the 'minimal kernel' of the proof assistants is done right.
- The language of implementation and its compiler/interpreter are right.
- The previous tools used to create the compiler/interpreter do a correct translation of them.

In that direction, we can go back in time across multiple languages and compilers/interpreters, but even summing that all of them are correctly implemented, we also need to ensure that:

- The machine that is running is in good condition and results are reproducible
In this aspect, we can go as far as to ensure that the machine can’t be a victim of cosmic rays or other rare cases that can cause the hardware fault.

It is for this reason that although the '4 colors theorem' has been proven with the help of COQ, there is a controversy in the mathematical/logic community about its validity as a formal proof.
With this in mind, we propose an approach to the proofs that we hope can minimize the risks of faults by the mix of both the human procedure and the machine verification.

The method consists of writing down two kinds of proofs, one the traditional 'pen and paper' proof, and the other implemented in the proof assistant. The idea is to do first the `pen and paper` proof and then iterate over the proof attempts in the proof assistant to refine the 'pen and paper'  proof until we can convince the proof assistant that our proof is right. This way, we would end with two proofs that are closely related and verified by both humans and computers.

An example of the successful application of a similar approach can be found in the paper <https://www.tandfonline.com/doi/full/10.1080/11663081.2019.1647653>

As a consequence of this method, we can end with a large portion of 'technical lemmas', those are statements that aren’t needed for us humans but that the proof assistant needs, or otherwise it would reject the proof. This is an inevitable result to the best of our knowledge, and the growth of those 'technical lemmas' can be exponential over time.

For this reason, we present a plan of work in which we try to discover as many of the required '_technical lemmas_' as possible in the shortest amount of time possible. This way, after the discovery of the 'technical lemmas', we can review the plan and adjust it. A possible outcome of this is that we may discover that the approach of formal verification of the GRANDPA protocol can’t be made in a reasonable time or an established budget. The early discovery of 'technical lemmas' would allow us to stop the work before spending too many resources.

We can split the plan into three main sections:

- Preamble, which corresponds to sections 2 and 3 of the GRANDPA paper.
- Safety, corresponds to section 4.1.
- Liveness, corresponds to section 4.2.

 Every section can also be divided into:

- Search for required abstractions
- Modification of proofs and discovery of 'technical lemmas'
- Writing of the statements in the proof assistant without proofs
- Proofs of the statements
However, the '_Search of required abstractions_' would happen mainly in the '_Preamble section_'.
A detailed list of the required steps for every section is presented below.

### Preamble

1. Sketch proofs of section 2 lemmas
2. Split of section 2 proofs in more elemental lemmas
3. Formal proofs of the lemmas and formal definition of the `g` function outside  the proof assistant
4. Proofs refactorization in a way that can be followed in COQ code
5. List all the required structures to define the `g` function and to express the GRANDPA algorithm
6. Split the list of required structures in implementable ones and those with only interfaces
7. Write the interface of all the structures in the list
8. Write the statements of all the lemmas and the principal conclusions
9. Implementation of the `g` function using only the interfaces
10. Implementation of the GRANDPA protocol using only the interfaces
11. Proofs of section 2 lemmas

### Safety

12. Refactor of proof sketches in section 4.1 using the developed abstractions.
13. Split the proofs of section 4.1 in more elemental lemmas.
14. Formal proofs of section 4.1 lemmas.
15. Refine proofs to make them as close to COQ reasoning as possible.
16. Write the statements to be proved in COQ.
17. Proof of the lemma 4.2
18. Proof of Theorem 4.1
19. Proof of Corollary 4.3
20. Proof of intermediate lemmas.

### Liveness

21. Refactor of proof sketches of section 4.2
22. Split of proofs of section 4.2 in more elemental lemmas.
23. Formal proofs of section 4.2 lemmas.
24. Refine proofs to make them as close to COQ reasoning as possible.
25. Write statements to be proved in COQ.
26. Proof of lemma 4.4.
27. Proof of lemma 4.5.
28. Proof of lemma 4.6.
29. Proof of lemma 4.7.
30. Proof of lemma 4.8.
31. Proof of lemma 4.9.
32. Proof of intermediate lemmas.

### Disclaimer on code extraction

When we say code extraction, we don’t mean full implementation of the mentioned functions or data types. We refer to literal extraction of the functions/data types as is to `Haskell` code without extraction of the required definitions for the result to be a compilable program in `Haskell`.
This allows us to replace some types and functions used in `COQ` with those already existing in the `Haskell` ecosystem.
The complete extraction of the protocol including all the needed types would require a complete implementation of the protocol and is out of the scope of this proposal.

### Detailed activities

#### 1. Sketch proofs of section 2 lemmas

The lemmas 2.5 and 2.6 were stated without proof after the introduction of the required definitions and an informal discussion. This task is about refactoring such statements in an ordered sequence, highlighting the steps required for the proof, and ensuring that those two lemmas are true.
The latter part of the task concerns the lemma 2.5, in our exploration of the GRANDPA paper we had limited time and were unable to conclude its truthfulness.
The deliverable of this task is the sketch of the proofs in a readable format, such as PDF, but other formats may be acceptable.

#### 2. Split section 2 proofs in more elemental lemmas

For this task, we would review the sketch of the proofs and identify sections of it that may be difficult for a proof assistant to accept without further work, then establish such facts as separate lemmas.
The deliverable for this is modifications to the document of task 1.

#### 3. Formal proofs of the lemmas and formal definition of the 'g' function outside the proof assistant

Until now, we have only sketches of proofs, that is, informal proof written in a mixture of formal statements and regular English prose without much care for the details. This task is to take those sketches and transform them into more formal statements, with close attention to the details of the proofs.
In this process, we may find new technical lemmas.
The deliverable for this is more editions of the task 1 document.

#### 4. Proofs refactorization in a way that can be followed in COQ code

The deliverable of the previous task would give us formal proofs in an amicable form for COQ. However, we expect that we may discover even more technical lemmas if we refactor the proofs to make them as close to COQ code as possible.
Although we expect to find more technical lemmas, we also hope to have a semi-stable structure of proofs.
The deliverable for this is more editions of the task 1 document.

#### 5. List all the required structures to define the `g` function and to express the GRANDPA algorithm

The last refactor should highlight the necessary structures to implement the g function and the GRANDPA algorithm, this task consists of grouping all of them with the properties of such structures used in the proofs.
The time of this task is bound by the amount of structures and properties that are needed.

#### 6. Split the list of required structures into implementable ones and those with only interfaces  

This is a critical task for the project.
In principle, all the structures used can be left as interfaces and all its properties may be assumed. Doing this will help with very complex structures but abusing it would introduce doubts on the resulting proof.

The objective of this task is to equilibrate the pros and cons of leaving every structure as a simple interface or implementation of it. We also want to consider the replacement of some structures used in the paper with others more adequate for the proof assistant.

A primer example is Sets and Blockchains.

- Sets are known to be hard to reason using a proof assistant, and we may need to replace it with a more friendly structure.
- Blocks of chains can be implemented and this may help to generate very natural induction principles that would help in proofs.  

When we refer to 'implement' we don’t mean a full implementation that can be extracted but a minimal implementation that captures the properties we are looking for in the proof.

For example, in the case of a Blockchain, we won’t implement the needed hash functions, but instead, we would implement it in a way that the concept of 'a' block B that is not the original block has a previous block B 'associated'.

Of huge concern are the structures that would express the time relation, for now, we model them as regular functions that depend on the time, but we may need better models for inclusion of reasoning of the algorithm of GRANDPA.

We also include the research for suitable libraries that implement the structures that require implementation in this task.

The deliverable is the inclusion of all the results and considerations in the document of task 1.

#### 7. Write the interface of all the structures in the list

Although some structures may need an implementation, we begin by expressing all the structure's interfaces.

This task also includes the setting of a reproducible environment for programming in COQ.

Deliverable: Establishment of a repository with COQ code with all the necessary interfaces.

#### 8. Write the statements of all the lemmas and the principal conclusions

Translate the lemmas that we want to prove in COQ and modify the interface of structures as needed.

**Deliverable:** Changes in the COQ code.

#### 9. Implementation of the 'g' function using only the interfaces

This requires some exploration, the implementation can be made in various ways and some of them would be better suited for proofs.
**Optional:** write a version using only system F features, allowing code extraction (need more time).

All the considered alternatives of the '_g_' function should be preserved.
Sometimes when we want to prove something about a thing '_c_' we can find an equivalent representation of '_c_' as another thing '_a_' for which this task can be trivial. Once we have such an '_a_', we can proceed to establish how '_c_' and '_a_' are the '_same_' in some sense, and exploit the fact that we have our proof for '_a_' to get our proof for '_c_'.

**Deliverable:** Addition of various versions of '_g_' to the code.

#### 10. Implementation of the protocol using only the interfaces

As in the last task, we need to explore different ways of implementing the algorithm, maybe with various versions of '_g_'. The explanation for this is the same as in task 9.

**Deliverable:** Addition of various versions of the GRANDPA algorithm to the code.

**Optional:** write a version using only system F features, allowing code extraction (need more time)

#### 11. Proofs of section 2 lemmas

For this, we can think of this task as successful if we can do it in a short time.
If we haven’t stopped at this point, it means that we see the proof of these two lemmas as something possible.
This task also includes the completion of all the technical lemmas involved so that we can claim that we have complete proof.
Deliverable: First proofs in code.
Optional: Code extraction to Haskell.

#### 12. Refactor of proof sketches in section 4.1 using the developed abstractions

Utilize the abstractions developed until now to express the lemmas of section 4.1 and its proofs sketch, this includes a change in the order of introduction of 4.2 and 4.1.

**Deliverable:** Audition of the proof sketches to document task 1.

#### 13. Split the proofs of section 4.1 in more elemental lemmas

This is part of our effort to discover technical lemmas.
Thanks to the previous effort, some lemmas should be already proven, reducing the future amount of work.

**Deliverable:** Addition of the refactors to document of task 1.

#### 14. Formal proofs of section 4.1 lemmas

We take the sketches of the previous task and use them to establish formal proofs.
We should use as much as we can of the already defined abstractions, their properties, and the existing technical lemmas.
We expect to find new technical lemmas, but not so much of them.

**Deliverable:** Addition of the new proofs and lemmas to document task 1.

#### 15. Refine proofs to make them as close to COQ reasoning as possible

The previous proofs for section 4.1 should put us in the right direction, but we may have some concessions for humans before. This task must clean up all the results and format them in a way that the proof can be followed in COQ.

**Deliverable:** Addition of the new proofs to document of task 1.

#### 16. Write the statements to be proved in COQ

Utilizing the previously developed structures, formalize the statements to be proved in COQ.
We may need to still do a few corrections, but those must be minimal.
Deliverable: Changes in the COQ code, including the new statements

#### 17. Proof of the lemma 4.2

The lemma 4.2 is used in the proof of theorem 4.1, we need to state it before lemma 4.1
While developing this poof, new auxiliary lemmas can be created and may be left as pending proofs.

 **Deliverable:** Proof of lemma 4.2 with maybe some assumptions to be proved.

#### 18. Proof of Theorem 4.1

This is the main theorem establishing the safety of the protocol, it introduces an algorithm to find a set of Byzantine voters in case of failure. We may change on opinion later, but for now, we propose to implement the described algorithm separately and establish properties about it before we proceed to the proof.
Some assumptions may be left open while working on the proof.

**Deliverable:** Proof of theorem 4.1 and establishment of the algorithm to find Byzantine voters in case of failure.

#### 19. Proof of Corollary 4.3

This is an immediate consequence of theorem 4.1 in the proof assistant, but the translation to the assistant may make this a not immediate fact.

**Deliverable:** Proof of corollary 4.3

#### 20. Proof of intermediate lemmas

Over the way to proof 4.1, 4.2, and 4.3, we may leave some assumptions (lemmas), this is the task responsible to complete the more critical of them.
Critical here means, non-technical lemmas.
If the amount of non-technical lemmas is low, we can spend the rest of the time with the technical lemmas.

**Deliverable:** A complete formal verification of the liveness of the algorithm.

#### 21. Refactor of proof sketches of section 4.2

As with the other two sections, this task consists of modifying the proof sketches provided in the paper and modify them. Among other things, the result sketches must include the mention of all the steps necessary to prove the corresponding result. So, if a sketch includes a sentence like “An easy induction completes the proof of the proposition” we should replace it specifying in prose what the inductive hypothesis should be and sketches for the 0 and inductive step.
Even with this requirement, the proofs are expected to be sketches and not formal proofs.

**Deliverable:** Addition of the liveness sketches to document of task 1.

#### 22. Split of proofs of section 4.2 in more elemental lemmas

In the previous proofs, the paper omitted the network involved as much as it could, and this approach worked fine.
However, in liveness, we need to explicitly work with the model of time.
These two facts mean that we may find many intermediate lemmas in this section, as we haven’t needed lemmas involving explicit times. This alone augments the expected required time for the task related to liveness compared with the times established for safety.

**Deliverable:** Addition of new lemmas to document of task 1.

#### 23. Formal proofs of section 4.2 lemmas

This task is for the exchange of the previous proof sketches for new proofs that are completely formal. As mentioned in the previous task, we now depend heavily on time, this may mark an increase in the number of technical lemmas discovered in this task.

**Deliverable:** Addition of technical lemmas and formal proofs for section 4.2 in the document of task 1.

#### 24. Refine proofs to make them as close to COQ reasoning as possible

We should make changes as needed in the proofs to make them friendly to COQ. As in the previous task, we expect the discovery of many technical lemmas.

**Deliverable:**  Addition of the new proofs to the document of task 1.

#### 25. Write statements to be proved in COQ

We may find that we need to some adjustments to express the statements to prove, which can increase by a little amount the required time for the translation.

**Deliverable:** Addition of the statements to be proved in COQ.

#### 26. Proof of lemma 4.4

Although we have used lemmas 2.5 and 2.6 in the previous section, the use was implicit, now the sketch of the proof of lemma 4.4 directly involves the use of both lemmas. This means that 4.4 is particularly dependent on them.

**Deliverable:** Inclusion of the proof for lemma 4.4 in COQ.

#### 27. Proof of lemma 4.5

This lemma leaves open the end of the proof with the sentence “An easy induction completes the proof of the proposition.”. There's a high probability that the previous steps split this proof, this task only involves the proof of the main statement of the lemma and leaves open the chance that the intermediate results may be proved later.

**Deliverable:** Inclusion of proof of lemma 4.5 in COQ.

#### 28. Proof of lemma 4.6

This lemma introduces 4 conclusions, although COQ can express this, it is better to write a separate lemma for every conclusion. We expect to do the split in the previous stages for liveness. This means that this particular task may be split in the future.

**Deliverable:** Proofs of lemmas directly stating the results of lemma 4.6

#### 29. Proof of lemma 4.7

As in the previous case, this lemma states two conclusions, so we will split it and modify this task accordingly.

**Deliverable:** Proof of lemmas directly stating the results of lemma 4.7

#### 30. Proof of lemma 4.8

This lemma relies on lemmas 4.6, 4.7, and 4.3 for its proof, according to our plan of work those must be already done. This means that apart from technical lemmas, this proof should be short.

**Deliverable:** Proof of lemma 4.8

#### 31. Proof of lemma 4.9

This is the last proof and most of the lemmas and theorems are already done, the proof on the paper is also short and relies on 4.7 and 4.3. For this, we expect little difficulty in accomplishing the proof.

**Deliverable:** Proof of lemma 4.9

#### 32. Proof of intermediate lemmas

We expect that some intermediate lemmas for this section or previous ones are already open, this task is to complete as many of them as possible. There must already exist a hierarchy of priorities for those lemmas. As a guide, we shouldn’t leave open the non-technical lemmas, but we may leave without proof of some technical lemmas.

## Project Details of the Alternative Approach

### **_The Model Checker TLC_**

Apart from the theorem-proving aspect, we can try to support the formal verification of GRANDPA Finality Gadget using TLA+ and TLC model checker. TLA+, short for Temporal Logic of Actions, is a powerful tool for designing, modelling, documenting, and verifying software systems, particularly those featuring concurrency and distributed nature. Here's a quick overview:

### What it is

**A formal specification language:** It allows you to precisely define the desired behaviour of a system in mathematical terms.

**Exhaustively-testable pseudocode:** Think of it as drawing detailed blueprints for software, enabling thorough testing before a single line of code is written.
Combines set theory and temporal logic: This unique combination lets you define both safety (preventing bad things) and liveness (ensuring good things happen eventually).

### What it's used for

**Designing reliable systems:** Minimize bugs and unexpected behaviour by catching errors early in the design phase.

**Formal verification:** Use automated tools (model checkers) to prove that your system's specifications are indeed met by its implementation.

**Clear documentation:** TLA+ specifications serve as precise and unambiguous references for developers and stakeholders.

**Property driven development (PDD):** The idea of PDD is that you should decide precisely what a program should do before writing the code that describes how the program does it.  These are the properties the program's output should satisfy.

### Key features

**Expressive:** Define complex system behaviour with ease.

**Modular:** Break down specifications into manageable pieces.

**Scalable:** Handle systems of varying sizes and complexity.

### Limitations

**Convergence:** If the state-space of the model is too large, then it can take a lot of time to get a proof or disproof for that model.

A system specification consists of a lot of ordinary mathematics glued together with a tiny bit of temporal logic. Using TLA+ to implement the specification can be cumbersome. TLA+ toolbox accepts the language PlusCal, which is very intuitive for coders. TLA+ toolbox can compile the PlusCal code to TLA+ code on the fly. Thus making it easy to use TLC model checker to check the properties. There are two different types of properties that we can provide in PlusCal:
Precondition: This condition is used to restrict the possible inputs of the design under test (DUT), to check the DUT only for valid inputs. This is also known as assumptions.

**Postcondition:** This condition is used to check the correctness of the DUT. This is where we express the behaviours (lemmas, theorems) that should be satisfied by the DUT.

When the properties fail, the model checker generates a counter-example. This counter-example helps to debug the specification and understand the reason for the failure.

### Formal Verification Plan using Model Checker TLC

Formal verification has two stages, in the first stage, we try to encode the specification in a modelling language. Then in the second stage we write properties that should be valid according to the specification.

#### Modelling in TLA+/PlusCal

This is the first step to apply model checking i.e., creating the model from the specification. In the following steps we will run the model checker (TLC in this case) on this model. TLA+/PlusCal is very algorithmic in nature, so we use the following specification of the finality to get the pseudocode of the algorithms. This works as a blueprint. For example, I list the algorithms and the expected time required to code them in TLA+/PlusCal.

Initiate GRANDPA:

![Initiate GRANDPA](https://lh3.googleusercontent.com/d/16Cs-jaz2wxpCg5dTkaatQSkGw-QivZSO=w1247-h1097-iv1 "Initiate GRANDPA")

This represents the initial state of the finality protocol. Note that this algorithm calls the function Play-GRANDPA-round. Which is our next algorithm as shown below.

Play GRANDPA-round:

![Play GRANDPA-round](https://lh3.googleusercontent.com/d/15eJeB-0woALj_63vmQ108CYxpJDBsJYu=w1247-h1097-iv1 "Play GRANDPA-round")

This is the main algorithm to encode in the PlusCal.

Derive-Primary:

![Derive-Primary](https://lh3.googleusercontent.com/d/1qqG3QSbKfrBppGYi1zBsPSnqm98uou-B=w1802-h1097-iv1 "Derive-Primary")

This is the algorithm that chooses the primary voter in each round.

Best Final Candidate:

![Best Final Candidate](https://lh3.googleusercontent.com/d/1YElV6MyGJN0GJEcSopZu1l7tQr6g9iJL=w1247-h1097-iv1 "Best Final Candidate")

This algorithm finds the best final candidate.

GRANDPA-Ghost:

![GRANDPA-Ghost](https://lh3.googleusercontent.com/d/1CH5_UyicbG8XSfq0FA6zs3nhRHflH8jf=w1247-h1097-iv1 "GRANDPA-Ghost")

This algorithm implements the GRANDPA-Ghost algorithm.

Best pre-Vote Candidate:

![Best pre-Vote Candidate](https://lh3.googleusercontent.com/d/1KLWaEt5TLDNTw_YTt9cR971GP0slPIos=w1247-h1097-iv1 "Best pre-Vote Candidate")

Algorithm to choose the best pre-vote candidate.

Attempt to Finalize at Round:

![Attempt to Finalize at Round](https://lh3.googleusercontent.com/d/10ZMhnjhviyl3Dd3uerTGLxn82fdpFWTv=w1247-h1097-iv1 "Attempt to Finalize at Round")

This algorithm attempts to finalize a round.

Finalizable:

![Finalizable](https://lh3.googleusercontent.com/d/1n5eE50sFufTobwk3dsU9aVxlYYYHY4mU=w1247-h1097-iv1 "Finalizable")

The final algorithm that finalizes? This should check the conditions of completability.

Process-Catchup Request:

![Process-Catchup Request](https://lh3.googleusercontent.com/d/1CnQuCsPJTZ3ZiODySANeaWBChcJea9Of=w1247-h1097-iv1 "Process-Catchup Request")

Process catchup request algorithm to be encoded in TLA+/PlusCal.

Process-Catchup Response:

![Process-Catchup Response](https://lh3.googleusercontent.com/d/18i_lFPXmWBiQn2heGPGUh8VB82lJ7Zhe=w1247-h1097-iv1 "Process-Catchup Response")

Similarly, the Process-Catchup-Response should be encoded in TLA+/PlusCal.

#### Property Verification

To formally verify the specification, we need to properly encode the properties that we want to check on these models. These properties can be of different types. Based on the properties, the model checker may or may not converge. When a property fails, there are four possible reasons,

1. There is an error in the specification,
2. The properties we wrote are not correct
3. We are allowing some behavior that is not allowed as per the specification
4. We are not modelling it properly.

That is why when we face a failure we must debug very carefully to find what is going wrong. Normally, the time required to debug a property failure is the same or more than the time required to code the model.

Note that convergence issues can become very complicated quickly. Based on the parameters (variables) the state space of the specification can grow really quickly and soon it can go out of the scope of the model checker. Here we try different techniques to help the model checker. Some of the techniques are,

1. Partitioning the model/ properties so that the individual parts can be formally verified easily
2. Reducing the state space by reducing the size of the parameters
3. Adding lemmas that help to cut down the state space

### Ecosystem Fit

Application in response to the RFP "Formal Guarantees for GRANDPA Finality Gadget"

## Team :busts_in_silhouette:

### Team members

- Mario Altimari
- Luis Alberto Díaz Díaz
- Sparsa Roychowdhury

### Contact

- **Contact Name:** Mario Altimari
- **Contact Email:** <marioaltimari@mlabs.city>
- **Website:** <https://www.mlabs.city>

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. MLabs LTD, 1st-floor Citibase Millbank Tower,21-24 Millbank, LONDON SW1P 4QP, United Kingdom
- **Registered Legal Entity:** MLabs LTD

### Team's experience

- Mario has witnessed the evolution of the web from its early days to the present, as an IT expert with more than two decades of experience. He has worked on various projects with different roles using many technologies.
- Luis is a mathematician, in 2020 he began a master of science with focus on formal verification, he will graduate this year with a thesis in modal logic. He has been working for MLabs since January 2022 for multiple projects Cardano based
- Sparsa have been working as Formal Verification Engineer since 2022. He has extensive experience in formally verifying hardware and software. He developed new models and methodologies during his PhD that can be used to formally verify real-time systems with concurrency.

Mario Altimari applied for a Web3 Foundation grant before: TuxedoDapp by Mlabs

### Team Code Repos

- Mario Altimari [https://github.com/AltiMario](https://github.com/AltiMario)
- Luis Alberto Díaz Díaz [https://github.com/Luis-omega](https://github.com/Luis-omega)
- Sparsa Roychowdhury publications <https://dblp.org/pid/259/1497.html>

### Team LinkedIn Profiles (if available)

- Mario Altimari <https://www.linkedin.com/in/altimario/>
- Luis Alberto Díaz Díaz <https://www.linkedin.com/in/luis-alberto-d%C3%ADaz-d%C3%ADaz-4aa882226/>
- Sparsa Roychowdhury <https://www.linkedin.com/in/sparsa-roychowdhury-phd-6336b831/>

## Development Status :open_book:

We have had conversations with the W3F team, planning to start a collaboration in this area

## Development Roadmap :nut_and_bolt:

### Estimate for **_The proof approach_**

|Description of the activity |Min effort expected |Max effort expected|
|----------------------------|--------------------|-------------------|
|List all the required structures to define the `g` function and to express the GRANDPA algorithm|4h|8h|
|Split the list of required structures in implementable ones and those with only interfaces|36h|58h|
|Write the interface of all the structures in the list|32h| |
|Write the statements of all the lemmas and the principal conclusions|8h| |
|Implementation of the `g` function using only the interfaces|8h| |
|Implementation of the GRANDPA protocol using only the interfaces|14h|22h|
|Proofs of section 2 lemmas|24h|40h|
|SUB TOTAL|126h|176h|
|Write the statements to be proved in COQ.|4h|8h|
|Proof of the lemma 4.2|8h|12h|
|Proof of Theorem 4.1|8h|20h|
|Proof of Corollary 4.3|4h|6h|
|Proof of intermediate lemmas.|24h|40h|
|SUB TOTAL|174h|214h|
|Write statements to be proved in COQ.|6h|8h|
|Proof of lemma 4.4.|12h|16h|
|Proof of lemma 4.5.|12h|16h|
|Proof of lemma 4.6.|18h|24h|
|Proof of lemma 4.7.|6h|10h|
|Proof of lemma 4.8.|6h|10h|
|Proof of lemma 4.9.|6h|10h|
|Proof of intermediate lemmas.|48h|68h|
|TOTAL|288h|376h|

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** $33200 (USD)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide Proof of Lemmas, Theorem, Corollary as described in detail |
| **0c.** | Statements | We will provide statements proved using COQ as described in detail|

### Estimate for the Alternative Approach **_The Model Checker TLC_**

|Description of the algorithm|Encoding effort|Verification effort|Combined|
|----------------------------|---------------|-------------------|--------|
|Initiate GRANDPA|2h|2h|4h|
|Play GRANDPA-round|24h|24h|48h|
|Derive-Primary|1h|1h|2h|
|Best Final Candidate|4h|4h|8h|
|GRANDPA Ghost|4h|4h|8h|
|Best pre-Vote Candidate|2h|2h|4h|
|Attempt to Finalize at Round|4h|4h|8h|
|Finalizable|8h|8h|16h|
|Process Catchup Request|8h|8h|16h|
|Process Catchup Response|8h|8h|16h|
|TOTAL|||130h

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** $13000 (USD)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Verification | We will provide encoding and property verification using TLA+ as described in detail|

## Future Plans

## Referral Program (optional) :moneybag:

## Additional Information :heavy_plus_sign:
**Multiple grant applications** I understand that your policy is to limit the number of grants per team, but we believe that this project is crucial for the development of the ecosystem and we have the resources and expertise to execute it well because we are a large size team. Therefore, we decided to apply for this grant despite the restriction and we hope you will consider our proposal favorably.
**How did you hear about the Grants Program?** Meeting with the Web3 Foundation team at the beautiful Sub0 conference in Lisbon

