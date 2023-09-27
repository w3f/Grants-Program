# Data Analysis Tools for Substrate-based Blockchains

:::caution
This Request for Proposals is currently considered **under development**, meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it’s better to double check this with the grants team.
:::

- **Status:** [Under Development 1](https://github.com/w3f/Grants-Program/pull/1716), [Under Development 2](https://github.com/w3f/Grants-Program/pull/1768), [Under Development 3](https://github.com/w3f/Grants-Program/pull/1883)
- **Proposer:** [dsm-w3f](https://github.com/dsm-w3f), [michalisFr](https://github.com/michalisFr)

## Project Description :page_facing_up:

Block Explorers are tools that index blockchain data and allow people to easily exhibit it using a web user interface. Examples of Block Explorers in the Polkadot/Kusama ecosystem are (not exhaustive) Subscan, Calamar, and Statescan. For common users, the features commonly found in block explorers are enough. However, for advanced users, the data analysis involves accessing many screens and following long paths through blockchain data.


For example, Accounts has some provenance information that is pretty difficult or currently impossible to extract in block explorers. The account reference counter, account balance reserved provenance (see: https://docs.substrate.io/reference/account-data-structures/), and OpenGov delegations are examples of it. Some questions raised that use this data:


- Which transactions/accounts were responsible for the reserved balance in an account?
- What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?
- Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track, taking into account indirect delegations too (e.g. Account A delegates to Account B which delegates to Account C)?

This information is useful and requested for actual heavy users of the Polkadot/Kusama ecosystem.

This RFP is not limited to the example above and intends to support other analyses. This RFP is also not limited to adding new features to the existent block explorer, as applicants can propose new analysis tools as well. Please notice that the intention here is not to create new block explorers that would have the same information, presented in the same way, as the current ones.

## Deliverables :nut_and_bolt:

The expected deliverables are the tool features that provide specific data analysis. The data analysis provided by the tool should be detailed in the deliverables. Each analysis should be dynamic, reflecting the current state of the blockchain, and be presented in a web user interface, in a way that advanced non-technical users can consume, i.e., the user does not need to have programming skills. Please list each data analysis that will be supported by the tool in the deliverables including:

- The data analysis question. (ex: Which transactions were responsible to reserve the balance amount in an account?)
- The expected input for the data analysis (ex: an account)
- The expected output for the data analysis (ex: a set of transactions that made/removed a balance reserve in the input account)


The proposed analysis should not overlap with existing ones if the information is easy to extract in block explorers of the Polkadot/Kusama ecosystem. They can, however, overlap if the information is not simple or can't intuitively be found by non-technical users in the current block explorers (ex. based on multiple steps in the block explorer or based on events data).

The user interface provided should allow the users to make or find the questions that can be answered by the tool. The tools should NOT demand that users need to know or learn technical query languages such as SQL, GraphQL, or any other.
