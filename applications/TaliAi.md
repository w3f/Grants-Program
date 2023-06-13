# Tali AI - Developer Support Bot 

- **Team Name:** Tali AI (tryTali.com)
- **Payment Address:** 0xce6BF74d6B9D998E5f44364899DaBe3cb3bA8497
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview :page_facing_up:

### Overview

We propose to build a specialized Discord bot (and or widget that lives on docs page) for Polkadot that will use the latest technology around LLM’s (Large Language Models) to import Polkadot's Github repos, documentation, video content and Discord Q&A’s to provide an interface for Polkadot users/developers to ask questions in natural language.

The idea is to provide another member to Polkadot's DevRel team, reducing support hours on Discord and a path of triage for commonly asked questions (making the team and users get answers quicker).


### Project Details

Tali works by ingesting various data sources associated with a project, including documentation, articles, YouTube videos, tutorials, and Q&A's. This data is then stored in a vector database and can be queried against.

When the Tali is asked a question responses typically take between 30-40 seconds, with the timing largely dependent on OpenAI. We're transitioning to a self-hosted approach to bypass any bottlenecks. Our ultimate goal is to reduce the wait time to just 10 seconds. Consider our current process as a funnel: the topmost part is Information Retrieval (IR), followed by several zero-shot prompts that eventually lead to the answer.

Specifically, we store the document embeddings in a vector database and perform a hybrid search to pull documents upon receiving a query. Beyond querying the data repositories, we conduct a web search and generate dynamic documents from the results. We subsequently rank and quality control each document, selecting the most relevant ones. This refines the initial database/web query. Finally, we synthesize the top documents before delivering a response to the user. We aim to introduce fine-tuning for every part of the pipeline in the future.


### Ecosystem Fit

The core of technical Web3 projects depends on a healthy ecosystem of developers using the protocols. Developers learn how to use the various projects through inspecting developer docs and Github repositories. As expected, the documentation doesn’t cover everything and a team of people are needed to provide “front line” support to those building / using the protocol.

Enter Developer Relations, a team tasked with being the first human interface with protocols who provide 2 critical roles for the project: building developer communities & tracking product market fit.

The issue that often arises is a lack of human capital to be able to deal with the number of requests & questions that populate a DevRel teams day.

We propose to provide a solution that will enable the Polkadot DevRel team to be able to focus on what they do best: solving unique customer problems and building trust in the protocol. By providing a bot that can answer previously asked questions it will enable DevRel to become more effective and in turn provide higher quality support to end users.

## Team :busts_in_silhouette:

### Team members

-Ali Agha
-Tenzin Rose


### Contact

- **Contact Name:** Ali Agha
- **Contact Email:** Ali@trytali.com
- **Website:** tryTali.com

### Legal Structure

- **Registered Address:** 611 South DuPont Highway,  Ste 102,  #316
Dover, DE 19901
- **Registered Legal Entity:** Tali AI LLC 

### Team's experience

Ali Agha

Ali Agha is a technologist and entrepreneur with a focus on decentralized solutions. With his previous venture, Olypsis Technologies, Ali provided Web3 consulting services for countless startups and major companies like IBM and Thomson Reuters. Ali first became engaged in the blockchain space in 2015 when he discovered bitcoin. Since that time he has dedicated his career to creating a more fair and just world through the power of decentralization.

Github: https://github.com/OlypsisAli

Twitter: https://twitter.com/iamAliAgha

Tenzin Rose

Tenzin Rose is an entrepreneur and full-stack developer with a background in cloud infrastructure sales. He’s worked with startups / enterprises globally, helping them deploy projects successfully & drive revenue. His current passions are web development, all things Ethereum and getting to grips with the moon math in ZKP.

He’s worked previously on many interesting projects including building out zkGiving, an app that enables people to donate privately to charities of their choice.

Github: https://github.com/niznet89
Projects: https://www.m00nlink.xyz/tenzin
Twitter: https://twitter.com/tenzin_rose

### Team Code Repos

- https://github.com/niznet89
- https://github.com/OlypsisAli

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/niznet89
- https://github.com/OlypsisAli

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ali-agha/
- https://www.linkedin.com/in/tenzinrose/


## Development Status :open_book:
We currently have deployed bots for Lens Protocol and Balancer. 

Please see a video demo here: 
https://drive.google.com/file/d/1Ezn-iA8843hq2xGgq5fJh5sgiQ4gCA8W/view?usp=drive_link

## Development Roadmap :nut_and_bolt:

Pre Implementation: We’d like to work with the DevRel team to understand their needs, sticking points and time sinks to see where the bot can be of most assistance. We’ll use these insights to see which data sources need to be implemented.

Milestone 1: Implementation of Data Sources [2 weeks]: Once discovery has been done, we’ll spend the time implementing the 3-4 most high value data sources to Tali. We will leverage a vector database to enable embeddings based search on queries. Optimization around how files are loaded, index creation and integrating various data sources will need to be tested.

End state: Have 3-4 data sources that can be queried on. Expected bugs: hallucinations, mismatch on query / documents.

Milestone 2: Testing + Optimization [2 weeks]: Arguably the most important part of the process. The focus will be to discard hallucinations and optimize prompt engineering so only relevant answers appear, ideally with source material & links for the user to follow up on. The purpose of this will be to make the bot production ready.

End state: Production-ready bot ready (once signed off on by DevRel team) to be deployed to Polkadot discord and or webpage via a widget.


### Overview

- **Total Estimated Duration:** 1 Month 
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** $5,000 USD 

### Milestone 1 Example — Test Bot 

- **Estimated duration:** 2 weeks
- **FTE:**  2
- **Costs:** 2500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Tali Test Bot | Test bot that can be used by the internal team to test answers|



### Milestone 2 Example — Production Bot 

- **Estimated Duration:** 2 weeks
- **FTE:**  2
- **Costs:** 2,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Tali Production Bot | Production bot that can be deployed to discord and/or as a widget on the documentation page.|


## Future Plans

We will be working on Tali full time for the foreseeable future. 

We plan to continue supporting the project by improving answer quality and by adding a dashboard where the DevRel team can see the queries being asked and relevant metrics associated with the bot.

Another concept we're exploring involves creating public documentation or content (such as blogs or guides) based on corrections/custom docs. Essentially, if knowledge is missing from the sources and the client creates custom documents to supplement the language model's knowledge base, doesn’t this also identify gaps in public documentation? And shouldn't the creation of custom docs lead to the generation of public documentation? In this way, we address two issues simultaneously. This process could also be influenced by the volume of questions on a particular topic. 

