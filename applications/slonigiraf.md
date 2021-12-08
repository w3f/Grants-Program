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
  All parties: Sarah, Tanya, Teri and Ed are economically motivated to behave honestly.
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
- We plan to use Rust / Substrate to complete this part of the project.
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
