# W3F Grant Proposal

- **Project Name:** Slonigiraf
- **Team Name:** Slonigiraf
- **Payment Address:** bc1qyuk4rdeqvc2rmetfhr3key4clty5sglaw4n5wx (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

- Slonigiraf is an p2p education system.
- We want to bring to Web3 infrastructure the renowned Slonigiraf learning game, which has been designed to deliver more
  interactive and productive lessons through peer-to-peer learning and quality control through cross-exams. This game in
  a nutshell consists of the following parts:\
  Sara (student) pays Tanya (teacher) to teach skill_1 and issue a certificate that Sarah has this skill. Such a
  certificate not only shows that Sarah has skill_1, but also gives Sarah the ability to allow other people fine Tania a
  fixed amount of money if Sarah lacks the skill. The penalty could be applied only once.\
  Sarah then goes to another teacher Teri and pays him to teach skill_2 and get a certificate. Sarah provides Teri the
  opportunity to revise skill_1 and penalize Tania.\
  Sarah then goes to Ed (the employer) to get a job that requires skill_1 and skill_2. Sarah presents Ed with
  certificates and give Ed a chance to punish Tanya and Terry. If Ed believes Sarah has the skills, he will hire Sarah
  and also pay Sarah for the certificates use. Otherwise, Ed may penalize teachers for incorrect certificates.\
  SLON works as a reputation token. You could be surprised that we provide a possibility to buy reputation but this design
  really works - since you pay for your reputation, you value it.\
  The relation between SLONs and guarantees is following: teacher can issue 5 guarantees having 100 SLONs on his account, 
  but each guarantee, if penalized, costs teacher 100 SLON.\
  All parties: Sarah, Tanya, Teri and Ed are economically motivated to behave honestly.\
  Ed is economic incentivized penalize a teacher in case if Sarah lack the skill because he gets SLON from such teacher.\
  Let's consider different ways of misbehavior of parties.\
We should note here that Sara and Tanya, Sara and Teri are persons who trust each other, and Ed is a public company that Sara trusts. This "trust" is an essential composite of the system. Teacher will not issue a certificate for a student whom he doesn't trust. A student will not show a certificate to a company that is known for misbehavior.\
A). Sarah gets a certificate from Tanya but then intentionally tells Teri that she lack such skill. Teri penalize Tanya and Tanya loses some amount of SLON. As Tanya knows exactly that Sarah is good at the skill then Tanya decides not to work any more with Sarah and not to issue other certificates for Sarah. Sarah loses faith in herself in Tanya's mind. And this "faith" cost a lot. By the way Sarah has no motif to act in such way.\
B). The same as above but Sarah allows Ed to penalize Tanya. Sarah will not get a work if she do so. It's not profitable for Sarah.\
C). Ed knows that Sarah has a skill but penalize a teacher. He will lose all new workers - nobody wants to work with unfair hirer
D). Teri knows that Sarah has a skill but penalize Tanya. Sarah knows that Teri cheated and will not work with him in future, Teri will lose a profit from issuing future certificates for Sarah.\
E). Sarah bribes a teacher to issue a certificate. Ed will examine her and penalize the teacher. The pennalization sum is larger that Sarah's bribe. Thus the teacher can't afford to get a bribe from a student.\
  In different professions two models of payments exist: per hour (or per month) and per result. The first one is secure to workers but doesn't motivate them to produce the result. The second one - paying for the result enables to democratize the service market - you just pay for what you need and don't require CVs of worker. Also it enables us to include students and pupils in system as teachers - students teach each other and pay each other only for the result.\
  The idea initially was developed in 2019 year at a private school as a [paper game](https://slon-i-giraf.ru/app/work?view=paperGameView&language=ENG)\
Then in 2020 we implemented the web version of this educational model on Java/Mysql and use it for now.
Some of our classes are online and free to participate and you can join and see how does it work - 
every Saturday we have free to join biology class where students teach and examine each other 
using of Java/Mysql version of system. [Here](https://t.me/bio_slonigiraf) is our telegram group of the class. And [here](https://us02web.zoom.us/j/86918554814?pwd=aUpndVI0dU9KclNybk1pVlM3K0FkQT09) is a Zoom link (20.00 each Saturday, Moscow time). There is an ongoing study to compare the efficacy of such learning to traditional lecture based approach. We're looking for the comparison results to be published by the end of 2022 year.\
By the way working in pairs is known to improve the learging in schools, see for example paper on [programming teaching](https://www.sciencedirect.com/science/article/abs/pii/S0360131520302219?dgcid=rss_sd_all). Thus it's highly likely that adding the quality controls for such work in pairs is a further improvement.
- This grant application request funding to build datastore for the Slonigiraf game results in a form of Substrate
  pallet that could be used in a parachain to any Substrate based relay chain representing the first educational dApp at
  the ecosystem.
- Moving this game to blockchain version enables the team to issue tokens (SLON) and create an economical stimulus to
  education organizations to join via token donations to them. Thus we are highly aimed to complete this project.

### Project Details

- The pallet interface will be consisted of functions that enable users to check a certificate validity \
  and penalize teachers for dishonest behavior. Invalid certificates are planned to be stored as Map of boolean arrays
  with key consisted of teacher address concatenated to index of window where certificate id resides. Valid certificates
  will be stored offchain to save blockchain space.
- The identity of users is tracked as follows: each certificate contains the address of the teacher and student. There is a balance known to all on the teacher's address. If the teacher's balance becomes less than the amount of the fine for the certificate, this certificate is considered temporarily canceled. If a student wants to show an active certificate to an employer to get a job, or to another teacher in order to take a second exam, the student signs that he agrees to grant that person the right to impose fines. The student knows the real identity and addresses of employee and teachers, teachers know a real identity and blockchain address of the student. Teacher knows the address who fined him and a real identity of the students who had the certificate. This information is enough to prevent "silent" fines. Teacher can track each fine with aid from the student. Sybil attack is not possible in principle in such system, as all transactions are done between real world identities.
- We plan to use Rust / Substrate to complete this part of the project.
we initially thought that smart contracts on Ethereum/Polka etc would be enough. But there are two problems with such approach: UX and technical.
UX one requires users to buy the token that allows to pay for smart contract execution. Most of our users don't know anything about crypto, thus it's exceptionally hard to make them buy some crypto. SLON token initially is given for free to any school/university.
Technical. We implement the system that should process requests from millions of users every day.\
Let's calculate the required number of transactions per second.\
There are two types of transactions that are sent: first - usual for any blockchain - transfer of SLON between holders. We will not count this type of transaction because the number of second type transactions is large enough to convince that we need a parallelization.\
The second type transaction is a reimbursement where the person who is eligible to punish the teacher uses that right.\
We have enough statistics from the school that uses such educational approach to estimate number of reimbursement transactions per second. Usually we process about 30 reimbursements per 45 minutes lesson per class of 20 students or 0.67 transactions per minute per 20 students.\
In Russia there are about 15 million of pupils at schools. If we assume that all teachers will use such system at lesson we get (0.67*15*10^6/20) transactions per minute or 8375 transactions per second.\
Substrate gives about 1000 transactions per second per chain. Thus we need at least 9 chains only for Russia to make this blockchain work. One can argue that in Russia there are different time zones and transaction load will be lowered by this mean. But don't forget that on Earth we have about 50x more pupils than in Russia.\
Thus no single chain can process transactions if all pupils in Russia will use our educational model at classes - too many transactions, even considering that we use offchain as much as possible. Thus we look for any approach to shard and parallelize transaction processing. Polkadot design with relay and parachains looks great to solve this parallelization issue.
- The reputation system in current education system is organized as following: universities issue diploma and risk to lose their reputation by graduating students with bad skills. We propose just accelerate that feedback loop for those who issue diploma and lower a barrier to enter market of diploma issuing to make it more democratic and competitive.
- We've built PoC/MVP product on Java Vaadin framework that can be used via
  link: https://slon-i-giraf.ru/app/work?language=ENG
- What needs to be completed: datastore, penalizing capability, certificate validity lookup, tests, documentation,
  example integration to parachain template
- UI part is not intended to be done for this proposal and can be submitted at next proposal.

### Ecosystem Fit

- Our projects fits to dApp part of Polkadot/Kusama ecosystem.
- The project audience consists of pupils, students, teachers and employees. Most of them never touched crypto world.
  This part of the project is intended to build the blockchain API that will be used in future for UI creation.
- Our projects meet the need for a new educational paradigm.
- Our educational model is unique and no similar approach exists neither in blockchain world nor in regular economic
  life.

## Team :busts_in_silhouette:

### Team members

- Reshetov Denis. Founder, Rust/JavaScript developer.

### Contact

- **Contact Name:** Denis Reshetov
- **Contact Email:** reshetovdenis@gmail.com
- **Website:** https://www.slonigiraf.org/

### Legal Structure

- **Registered Address:** Golubinskaya 9, Moscow, Russia
- **Registered Legal Entity:** Individual entrepreneur Reshetov Denis.

### Team's experience

Denis Reshetov graduated from Moscow State University, Faculty of Bioengineering and Bioinformatics (2009).\
Denis is good at different programming languages such as Java and Javascript and have a lot of [publications in
bioinformatics](https://pubmed.ncbi.nlm.nih.gov/?term=reshetov+d&filter=simsearch2.ffrft&sort=date) and one year of Rust/Substrate experience.

### Team Code Repos

Company:

- https://github.com/slonigiraf

Team leader:

- https://github.com/reshetovdenis
- https://github.com/slonigiraf/slon-token

### Team LinkedIn Profiles (if available)

- https://ru.linkedin.com/in/reshetovdenis

## Development Status :open_book:

- We've built PoC/MVP product on Java Vaadin framework that can be used via
  [link](https://slon-i-giraf.ru/app/work?language=ENG)
- The white paper and overall design is presented [here](https://docs.google.com/document/d/1XP7yICWpr8MQuSTCSBpWYN-8lSAXuGgyk90ZBMj5kc0/edit?usp=sharing)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 months
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 10,000 USD

### Milestone 1 — Implement Substrate Module

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD

<table>
  <tbody>
    <tr>
      <th>Number</th>
      <th align="center">Deliverable</th>
      <th align="center">Specification</th>
    </tr>
<tr><td> 0a. </td><td> License </td><td> Unlicense </td></tr>
<tr><td> 0b. </td><td> Documentation </td><td> We will provide both <b>inline documentation</b> of the code and a basic <b>tutorial</b> that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. </td></tr>
<tr><td> 0c. </td><td> Testing Guide </td><td> Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. </td></tr>
<tr><td> 0d. </td><td> Docker </td><td> We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. </td></tr>
<tr><td> 0e. </td><td> Article </td><td> We will publish an <b>article</b> that explains what was done/achieved as part of the grant. (Content, language and medium should reflect your target audience described above.)</td></tr>
<tr><td> 1. </td><td> Substrate module </td><td> <b>Publicly exposed methods:</b> <br/> 
Function to penalize a teacher. Will allow a student to enable employer to penalize the teacher. 
Should test if teacher and student signatures are valid and certificate was not previously used.
<pre>
pub fn reimburse(
			origin: OriginFor<T>,
			insurance_id: u32,
			teacher_id: H256,
			student_id: H256,
			employer_id: H256,
			ask_price: BalanceOf<T>,
			teacher_sign: H512,
			student_sign: H512,
		) -> DispatchResultWithPostInfo 
</pre>

Function to see if the certificate is valid. Should return TRUE if teacher was not penalized yet.
<pre>
fn was_insurance_used(
		teacher: H256,
		number: usize,
	) -> bool 
</pre>
<br/>
<b>Runtime Storage defined by your module:</b><br/>
Invalid certificates are planned to be stored as Map of boolean arrays with key consisted of teacher address concatenated to index of window where certificate id resides.
<pre>
#[pallet::storage]
#[pallet::getter(fn insurance_of_owner_by_index)]
pub(super) type OwnedInsurancesArray<T: Config> =
StorageMap<_, Twox64Concat, (H256, u64), Vec<bool>, ValueQuery>;
</pre>
</td></tr>
  </tbody>
</table>

[Use case diagram](https://drive.google.com/file/d/1hqeF9jXbK-9rwgn-2y7WDZXOOzz6B9od/view?usp=sharing)

## Future Plans

- We plan to launch a chain with this pallet in short term and integrate it with our current App.
- Next we plan to rewrite the user interface using polkadot.js to exclude current UI centralization.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation.
Checkout the [paper version](https://slon-i-giraf.ru/app/work?view=paperGameView&language=ENG) of this protocol that can be used in any educational process:
