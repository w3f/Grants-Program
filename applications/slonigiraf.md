# SLON - a recommendation letter system

- **Team Name:** Slonigiraf
- **Payment Address:** bc1qyuk4rdeqvc2rmetfhr3key4clty5sglaw4n5wx (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

- SLON is a recommendation letter system on a blockchain.
- Reputation is the cornerstone of economic life. Societies with great social trust grow faster than those that do not trust each other. Today we have many private reputation systems: Airbnb, which allows travelers and homeowners to trust each other, Uber, which ranks taxi drivers and passengers by their history and comments about each other, Google Places, which ranks restaurants and other businesses... \
The reputation systems mentioned above collect recommendations from people and centrally accumulate this value within a private company. \
[It’s known](https://www.econstor.eu/bitstream/10419/176431/1/10.1186_s40854-016-0039-4.pdf) that such systems are vulnerable to ballot-stuffing, bad-mouthing, and various attack models including constant attack, camouflage attack, whitewashing attack and sybil attack. \
Traditional reputation systems try to solve such problems by tying economic interactions to reputation or ranking, for example Amazon.com flags a product's rating if it comes from a "verified purchase". However, such ratings can be influenced by the seller imitating the buyer and rating their own product. \
However, there is a well-known working orthogonal approach that has proven to be effective and stable for more than centuries and is decentralized - letters of recommendation. \
A letter of recommendation is a document issued by a person with a social reputation. Such a person (referee) recommends an employee for hiring in the company. The company can downgrade and ultimately damage the referee's reputation if they refer a bad employee, so the referee makes some profit from the employee before recommending them, often not in monetary terms to deal with such risk. Thus, the referee acts as an insurer. \
A letter of recommendation divides the rating system into two parts: a statement about the employee and the reputation of the referee. For example, if Uber uses this approach, then the taxi driver rating will consist of a series of letters of recommendation, and referees will lose reputation if they recommend a bad taxi driver to a new client. \
The recommendation letter system has limited applications due to the difficulty of disseminating information about bad-faith referees who cheat the system, and the difficulty of calculating the actual reputation of the referee. \
We are aiming to create a blockchain recommendation letter system that can solve the problems of maintaining the reputation of referees and punishing them in case of bad recommendations.
- Our team has an experience of using a recommendation letter system at a public school education. We apply it to teacher-student interaction where a teacher issues recommendation letters about student skills. The idea initially was developed in 2019 year as a [paper game](https://slon-i-giraf.ru/app/work?view=paperGameView&language=ENG). Then in 2020 we implemented the web version of this educational model on Java/Mysql and use it for now.
- This grant application is asking for funding to create a reputation letter system in the form of a Substrate pallet that can be used in any substrate-based chain that provides a reputation tracking feature.

### Project Details

- The pallet interface will consist of functions that enable users to check a letter validity and penalize referees for dishonest behavior. Invalid recommendation letters are planned to be stored as Map of boolean arrays with keys consisting of referees addresses concatenated to the index of the window where letter id resides. Valid recommendation letters will be stored off chain to save blockchain space.
- The identity of users is tracked as follows: each letter of recommendation contains public keys of the referee and the worker. The referee key is linked to a publicly visible reputation balance. If the referee's balance falls below the amount of the letter penalty, the letter of recommendation is considered temporarily void. If the worker wants to present the employer with an active letter of recommendation for employment, the employee signs an agreement to give the employer the right to impose fines. The worker knows the real identity and public keys of the employees and referee, the referee know the real identity and public key of the worker. The referee knows the public key of who fined him and the real identity of the worker who had the letter. This information is enough to prevent "silent" fines. Referees can keep track of each penalty with the help of a worker. A Sibyl attack is basically impossible in such a system, since all transactions are carried out between real individuals. Note that the worker can be his own referee, but it is economically unprofitable for him, because he cannot adequately determine the risk of being a bad worker. It is safer for the employee not to issue the letter himself, but to ask the referee to do it.
- A letter of recommendation is NOT registered on the blockchain when issued. This design principle saves blockchain space and hides important personal information from intruders. A letter of recommendation is a sign by guarantee of a string consisting of the letter_id, the public key of the guarantee, the public key of the worker, and the amount of reputation staked on this letter. The worker can sign the employer's right to send a letter of recommendation to the blockchain to penalize the guarantee.
- We plan to use Rust / Substrate to complete this part of the project. We initially thought that smart contracts on Ethereum/Polka etc would be enough. However we implement the system that should process requests from millions of users every day. \
Let's calculate the required number of transactions per second. \
There are two types of transactions that are sent: first - usual for any blockchain - transfer of SLON between holders. We will not count this type of transaction because the number of second type transactions is large enough to convince us that we need a parallelization.
The second type transaction is a reimbursement where the person who is eligible to punish the recommender uses that right. \
We will take into account only our educational project where we do have real world statistics about reimbursement transactions.
Usually we process about 30 reimbursements per 45 minutes lesson per class of 20 students or 0.67 transactions per minute per 20 students.
In Russia there are about 15 million pupils at schools. If we assume that all teachers will use such a system at lesson we get (0.671510^6/20) transactions per minute or 8375 transactions per second. \
Substrate gives about 1000 transactions per second per chain. Thus we need at least 9 chains only for Russia to make this blockchain work. One can argue that in Russia there are different time zones and transaction load will be lowered by this means. But don't forget that on Earth we have about 50x more pupils than in Russia. \
Thus no single chain can process transactions if all pupils in Russia will use our educational model at classes - too many transactions, even considering that we use offchain as much as possible. Thus we look for any approach to shard and parallelize transaction processing. Polkadot design with relay and parachains looks great to solve this parallelization issue. As we need a lot of parachains to make the system work it's unlikely to include all of them in Polkadot or Kusama directly. Instead we plan to use our own relay chain with our parachains. [Our relay chain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwss1.slonigiraf.org#/explorer) can be connected to Polkadot or Kusama with bridges. We’ve already launched our own relay chain and it’s active from 12 April 2021.
- We've built PoC/MVP product on Java Vaadin framework that can be used via
  link: <https://slon-i-giraf.ru/app/work?language=ENG>
- What needs to be completed: datastore, penalizing capability, letter validity lookup, tests, documentation,
  example integration to parachain template, example UI.

### Ecosystem Fit

- Our projects fits to dApp part of Polkadot/Kusama like ecosystem.
- The project audience consists of pupils, students, teachers, employees and companies. Most of them never touched crypto world.
  This part of the project is intended to build the blockchain API that will be used in future for UI creation.
- Our projects meet the need for a decentralized reputation system.
- Recommendation letter is a well known tool in the real world but was never ported to blockchain.

## Team :busts_in_silhouette:

### Team members

- Reshetov Denis. Founder, Rust/JavaScript developer.

### Contact

- **Contact Name:** Denis Reshetov
- **Contact Email:** reshetovdenis@gmail.com
- **Website:** <https://www.slonigiraf.org/>

### Legal Structure

- **Registered Address:** Golubinskaya 9, Moscow, Russia
- **Registered Legal Entity:** Individual entrepreneur Reshetov Denis.

### Team's experience

Denis Reshetov graduated from Moscow State University, Faculty of Bioengineering and Bioinformatics (2009).\
Denis is good at different programming languages such as Java and Javascript and have a lot of [publications in
bioinformatics](https://pubmed.ncbi.nlm.nih.gov/?term=reshetov+d&filter=simsearch2.ffrft&sort=date) and one year of Rust/Substrate experience.

### Team Code Repos

Company:

- <https://github.com/slonigiraf>

Team leader:

- <https://github.com/reshetovdenis>
- <https://github.com/slonigiraf/slon-token>

### Team LinkedIn Profiles (if available)

- <https://ru.linkedin.com/in/reshetovdenis>

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
Function to penalize a referee. Will allow a worker to enable employer to penalize the referee.
Should test if referee and worker signatures are valid and a letter was not previously used.

```
pub fn reimburse(
   origin: OriginFor&lt;T&gt;,
   letter_id: u32,
   referee_id: H256,
   worker_id: H256,
   employer_id: H256,
   ask_price: BalanceOf&lt;T&gt;,
   referee_sign: H512,
   worker_sign: H512,
  ) -> DispatchResultWithPostInfo
```

Function to see if the letter is valid. Should return TRUE if referee was not penalized yet.

```
fn was_letter_used(
  referee: H256,
  number: usize,
 ) -> bool
```

<br/>
<b>Runtime Storage defined by your module:</b><br/>
Invalid letters are planned to be stored as Map of boolean arrays with key consisted of referee address concatenated to index of window where letter id resides.

```
# [pallet::storage]
# [pallet::getter(fn letter_of_owner_by_index)]
pub(super) type OwnedLetersArray&lt;T: Config&gt; =
StorageMap&lt;_, Twox64Concat, (H256, u64), Vec&lt;bool&gt;, ValueQuery&gt;;
```

<br/>
<b>Private functions:</b>

<br/>
Function that creates a part of datastore to mark fraud letter. See runtime storage definition.

```
fn mint_chunk(
  to: H256,
  chunk: usize,
 ) -> DispatchResult
```

<br/>
Function to see if chunk of datastore exists.

```
fn chunk_exists(
  to: H256,
  chunk: usize,
 ) -> bool
```

<br/>
Conversion from letter index to coordinates of it in datastore.

```
fn coordinates_from_letter_index(number: usize) -> LetterCoordinates
```

<br/>
Conversion from coordinates in datastore to letter index.

```
fn letter_index_from_coordinates(coordinates: LetterCoordinates) -> usize
```

<br/>
See if letter is fraud.

```
fn was_letter_canceled(
  guarantee: H256,
  number: usize,
 ) -> bool
```

<br/>
Mark letter as fraud.

```
fn mark_letter_as_fraud(
  guarantee: H256,
  letter_number: usize,
 ) -> DispatchResult
```

<br/>
<b>Benchmarking:</b>

Data structures to run benchmarks and create weights

```
benchmarks! {
 create {
  ...
 }: _(RawOrigin::Signed(caller))

 reimburse {
  ...
 }: _(RawOrigin::Signed(caller), origin, letter_id, referee_id, worker_id, employer_id, ask_price, referee_sign, worker_sign)
}

impl_benchmark_test_suite!(
 ...
);
```

<br/>
<b>Weights</b>

```
pub trait WeightInfo {
 fn reimburse() -> Weight;
}

pub struct SubstrateWeight&lt;T&gt;(PhantomData&lt;T&gt;);
impl&lt;T: frame_system::Config&gt; WeightInfo for SubstrateWeight&lt;T&gt; {
 fn create() -> Weight {
  ...
 }
}

impl WeightInfo for () {
 fn create() -> Weight {
  ...
 }
}

```

</td></tr>
<tr><td> 2. </td><td> Example UI </td><td>

<b>Recommendation letter creation</b><br/>
Template/Example React.js component that allows to create a letter of recommendation for guarantees. <br/>
Contains a text area where guarantee can specify text of the letter; text field to specify a public <br/>
key of worker; a button to sign a transaction; QR code of the signed letter to be transferred to the worker.
<br/><br/>
<b>Penalization right transfer</b><br/>
Template/Example React.js component that transfers a right to penalize guarantees to employer. <br/>
Creates a QR code that can be shown to an employer to transfer the letter text, guarantee and <br/>
worker public keys, signatures of guarantee and worker.
<br/><br/>
<b>Penalization submission to a blockchain</b><br/>
Template/Example React.js component for employers to send recommendation letter for penalization of <br/>
guarantees. Contains a text field to show a text of the letter; a button to send a penalization transaction <br/>
to the blockchain.
<br/><br/>
<b>Simple UI</b><br/>
Should contain React.js components mentioned above combined in a single page web application based <br/>
on the [substrate-front-end-template](https://github.com/substrate-developer-hub/substrate-front-end-template).
</td></tr>
  </tbody>
</table>

[Use case diagram](https://drive.google.com/file/d/1tJp9ucrf-1OMzSmOJ5X9taixQed4gmSS/view?usp=sharing)

## Future Plans

- We plan to launch a chain with this pallet in short term and integrate it with our current App.
- Next we plan to integrate React.js components with our MVP that to use in schools and universities.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation.
Checkout the [paper version](https://slon-i-giraf.ru/app/work?view=paperGameView&language=ENG) of this protocol that can be used in any educational process:
