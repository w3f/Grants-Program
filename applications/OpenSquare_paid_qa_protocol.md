# OpenSquare Paid QA protocol

* **Team Name:** OpenSquare
* **Payment Address:** 0x4905083abdD13bd95345A871701Fd0b08AbD46d1 (USDT)

## Project Overview :page_facing_up:

### Overview

We propose a grant to fund the implementation of OpenSquare Paid QA protocol 1.0 which is described in
this [spec repository](https://github.com/opensquare-network/qa-spec).

This protocol is substrate `system#remark` extrinsic based, and it helps users share their knowledge in a way with
bounties. A knowledge seeker can create a topic and promise a fund of tokens to useful answers. Any users can support a
topic with a promise to fund tokens. Topic/question answers can just provide knowledge without worry about submission to
a blockchain, while any others can do it. A topic author/supporter can resolve a topic at any time after the
creation/support action.

### Project Details

The spec 1.0 of this protocol can be found [here](https://github.com/opensquare-network/qa-spec). It defines the
necessary stuff and interactions for users to finish a workflow of knowledge sharing process. An example workflow will
be as follows:

1. Alice is very curious about how Polkadot/Kusama governance works, but can not understand it fully after reading the
   official wikis. So she raised a topic whose title is ‘How polkadot governance works?’, give some description and
   promise to fund at least 10 DOT for useful answers.
2. Bob answers this topic and signs his data with his polkadot key.
3. Charlie has the same question, then he promises a 1 KSM fund to support this topic.
4. David, as an expert, gives his explanation in a simple way to understand, and of course, signs his answer with his
   polkadot key.
5. Erin gives some interesting analogies and examples which make the answer more clear, also signed with his polkadot
   key.
6. Alice funds 8 DOT to David, 2 DOT to Erin, and resolves this topic.
7. Charlie funds 0.6 KSM to David, 0.4 KSM to Erin, and resolves this topic.

In the above process, Alice and Charlie have to submit the corresponding `NEW`, `SUPPORT` and `RESOLVE` interactions to
blockchain. Bob, David, and Erin don’t have to submit their answers to blockchain as an answer author, while usually
DAPP implementers may do the submission in a batch way.

The packages or components we have to implement includes:

* A scan package which tracks the interactions on a blockchain, and stores the structured data to the database.
* Scripts which interact with IPFS, fetch or upload content.
* A restful server will handle api calls from user interfaces and serve the structured data to them.
* A backend job which aggregates the signed answers and submits them to blockchain in a batch extrinsic.
* User interfaces.

The user interfaces will include:

* A topic list page where users can see all the topics. Each topic is shown with its author, title, created time,
  status, etc. There may be some filters, like token currency filter and amount filter.
* A topic authoring page where a topic author can edit the topic, sign the extrinsic and submit to blockchain.
* A topic detail page:
  * It shows the topic details and the answers.
  * A user can answer the topic and sign with his/her polkadot key.
  * A user can support this topic and sign the extrinsic to blockchain.
  * Any user can fund an answer or the topic.
  * It will show all the fund records, including from, to and the funded tokens.
  * The author and supporter can resolve the topic on this page.
* A user page which is identified by address:
  * A list of the created/supported topics.
  * A list answers.
  * Statistics of funds granted and received.
  * Maybe some interfaces for operations, like links to create a topic.
* In site notifications(centralized)
  * A topic author/supporter will receive a notification when there are new answers.
  * An answer author will receive a notification when his/her answer gets funded.
  
Please check part of the UIs [here](https://www.figma.com/proto/vqpglMGW8psHKB00eIVDUV/OpenSquare?page-id=3655%3A16149&node-id=3659%3A30988&viewport=322%2C48%2C0.08&scaling=min-zoom).

### Ecosystem Fit

* It’s `system#remark` based, lightweight, and gas free for topic answers.
* Target audience are all the community members who have questions to ask or topics to discuss, and who have knowledge
  to share.
* It provides a way with bounty for Pokadot ecosystem community members to share knowledge.
* I know [mem.co](https://mem.co/) who has similar planned products, but currently seems no products released. We
  OpenSquare developed a centralized paid QA platform in Chinese, but we think decentralization should be the right
  direction.

## Team :busts_in_silhouette:

### Team members

* Yongfeng Li(@wliyongfeng), Full stack developer
* Chaojun Huang(@hyifeng), Full stack developer
* Wentao Chen(@qiyisi), Full stack developer
* Yizhou Xin(@YoshiyukiSakura), Full stack developer
* Alcazar(@Popoulosss), Designer

You can see our team [here](https://www.opensquare.network/team/).

### Contact

* **Contact Name:** Yongfeng Li
* **Contact Email:** wliyongfeng@gmail.com
* **Website:** <https://www.opensquare.network>

### Legal Structure

* **Registered Address:** 3 FRASER STREET #05-25, DUO TOWER, SINGAPORE 189352
* **Registered Legal Entity:** OPENSQUARE FOUNDATION LTD.

### Team's experience

We have more than 3 years experience with Substrate/Polkadot related tech stack. Our recently developing products
include:

* [doTreasury](https://www.dotreasury.com/). We can now see it as a treasury business explorer but it aims to improve
  the treasury mechanism with retrospection.
* [Statescan](https://www.statescan.io). An explorer for asset para chains, and we have implemented
  Statemine/Statemint/Westmint.
* OpenSquare bounties business built on substrate. We got a grant for this, and please check
  details [here](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/open_square_network.md).
* OpenSquare off chain [voting](https://voting.opensquare.io/) platform. We got a grant to develop it, please check
  details [here](https://github.com/w3f/Grants-Program/blob/master/applications/OpenSquare-offchain-voting.md). We have
  supported Statemine assets since the grant delivery and got RMRK as our first user.

### Team Code Repos

<https://github.com/opensquare-network/>

Team members github accounts:

* <https://github.com/wliyongfeng>
* <https://github.com/hyifeng>
* <https://github.com/qiyisi>
* <https://github.com/YoshiyukiSakura>
* <https://github.com/Popoulosss>

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 6 weeks
* **Full-Time Equivalent (FTE):**  5 FTE
* **Total Costs:** 25,000 USD

Milestone 1 — Implement the paid QA businesses

* **Total Estimated Duration:** 6 weeks
* **Full-Time Equivalent (FTE):**  5 FTE
* **Total Costs:** 25,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Code-1 | Code will be open source, most organized in one monorepo by [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), hosted on [OpenSquare github account](https://github.com/opensquare-network/). It will be implemented in JavaScript, [React](https://reactjs.org/) for fronted, [koa](https://koajs.com/) for backend. Either fronted and backed will depend on polkadot.js, while fronted will also depend on [extension-dapp](https://github.com/polkadot-js/extension/tree/master/packages/extension-dapp) to interact with polkadot{.js} extension. |
| 0c. | Code-2 | Scan scripts will be hosted under one of the packages which track blocks and extract the [qa-spec](https://github.com/opensquare-network/qa-spec) interactions into structured business data and save them to DB. |
| 0d. | Code-3 | IPFS related functions which fetch content from IPFS and upload content to IPFS will be hosted under another package. These functions will be called when 1. Scan script finds spec interactions and we have to fetch the corresponding topic/answer from IPFS. 2. When a user creates a topic or gives an answer, IPFS functions will be called to upload the data to IPFS. 3. A background job which uploads content to IPFS in batch may also call these functions.|
| 0e. | Code-4 | There will be another package which hosts background jobs. The jobs upload the topics/answers to IPFS in a batch and submit the `ANSWER` interactions in a batch to blockchain. |
| 0f. | Documentation | We will provide docs to explain necessary concepts, how this site work, and some user workflows. |
| 0g. | Test cases | Core functions will be covered by unit tests to ensure functionality and robustness. They will be verified in simple npm scripts. |
| 1. | User story 1 | Alice creates a paid topic and promises to pay at least 10 DOT to useful answers. |  
| 2. | User story 2 | Bob answers this topic and signs his data with his polkadot key. |  
| 3. | User story 3 | Charlie has the same question, then he promises a 1 KSM fund to support this topic. |  
| 4. | User story 4 | David, as an expert, gives his explanation in a simple way to understand, and of course, signs his answer with his polkadot key. |  
| 5. | User story 5 | Erin gives some interesting analogies and examples which make the answer more clear, also signed with his polkadot key. |  
| 6. | User story 6 | Alice funds 8 DOT to David, 2 DOT to Erin, and resolves this topic. |  
| 7. | User story 7 | Charlie funds 0.6 KSM to David, 0.4 KSM to Erin, and resolves this topic. |  
| 8. | User story 8 | Either Alice, Charlie, David and Erin can see his/her collaborated topics or answers and statistics |  
| 7. | User story 9 | A user can see the fund records on this topic detail page |  
| 10. | User story 10 | Alice and Charlie will receive in-site notifications after Bob, David and Erin give their answers |  
| 11. | User story 11 | David and Erin will receive in-site notifications when their answer got funded |  
| 12. | User story 12 | All answer authors will receive in-site notifications when the topic author and all supporters resolved the topic |  
| 13. | User story 13 | Frank finds this resolved topic very useful to him, and fund Alice 1 DOT. |  
| 14. | User story 14 | Any user can see others’ profile pages. There will be statistics about fulfilled/unfilled fund promises, history created topics/answers, etc. |

## Future Plans

* Support more chains and add more token identifiers, so users can collaborate with more tokens.
* Add more topic field definitions, so users can collaborate with more ways, for example, a field to support a poll
  topic, a field to help users make categories.
* Credit/reputation building based on the behaviors, but it will be a long pan which need considerations together with
  other collaborations in OpenSquare developed platforms.

## Additional Information :heavy_plus_sign:

OpenSquare believes it's meaningful to record users' collaborations on chain. We can build users' credit/reputation
model based on the history collaboration records together with other behaviors like DeFi activities, etc. It finally
will help build a trusted collaboration network. Check more details from
our [paper](https://github.com/opensquare-network/papers/blob/master/whitepaper.md), though it's still a draft when
writing this proposal.
