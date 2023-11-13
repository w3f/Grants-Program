
# Nighthawk anti-phishing browser extension

- **Team Name:** PhishFort

- **Payment Address:** 0x689874C41A979082EEd74ca880Ca3487aF85710D (USDC)

- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

Phishing is the biggest security challenge that end users face in crypto, period. We are in desperate need for *crypto centric* solutions to our security issues in the space and phishing is no different. From fake Vitalik giveaways on Twitter to phishing streams from the EF on youtube to good old fashioned phishing emails, we have a challenge on our hands when it comes to keeping our users safe. Users need to know:

1. That when they interact with websites, social media accounts, social media posts, that they are in fact interacting with the person(s) they think they are (authenticity).

2. That as far as is possible, they are not interacting with malicious content online.

NightHawk addresses both of these problems using a clean UI and UX for the end user.

Phishing is far more than just a security threat to the ecosystem. It's regularly cited by both newcomers and experienced users as one of their biggest fears and hurdles to adoption in the space. Phishing is *a hurdle to adoption*. We put forward this project as a positive step towards keeping users safe online in our industry.

### Overview

Nighthawk is a free anti-phishing browser extension offering safe browsing in the web3 field.

The plugin is 100% open source, privacy focused and does nothing to store users browsing history or anything else privacy compromising on our servers. It is almost completely serverless with all activity happening in the browser for the user.

It's widely known that the crypto space, including the Polkadot community, is consistently under the threat of scams. While quantifying the exact losses is challenging, phishing attacks have resulted in the loss of hundreds of millions of dollars across the crypto ecosystem. PhishFort is embarking on a significant initiative by creating a consumer-oriented, community-driven, free, and efficient solution to combat this problem. While our primary business involves providing B2B services to various industry communities, this project is our way of giving back to the entire crypto industry without commercial interests.

Our motivation to undertake this endeavour stems from our deep understanding of the crypto landscape and the severe damage inflicted by phishing attacks in a matter of minutes. What has been missing in this fight against phishing is a swift response mechanism driven by the community. Although we take pride in promptly removing malicious content from the internet, we recognise the need to offer real-time protection to end users if we are to collectively address this problem. Nighthawk has been designed to serve this exact purpose.

For too long, end users have been easy prey for scammers, but we aim to change this dynamic. By allowing users to report scams and disseminate these reports to the entire user-base for near real-time protection, we aspire to transform potential victims into proactive responders.

### Project Details

The MVP of the project has been successfully deployed to the Chrome Store and Firefox Add-ons Store, available here:

https://chrome.google.com/webstore/detail/nighthawk-by-phishfort/bdiohckpogchppdldbckcdjlklanhkfc

https://addons.mozilla.org/en-US/firefox/addon/nighthawk_plugin/

The project architecture is available here: 
https://lucid.app/lucidchart/5bd2f714-60b0-4737-9350-aae8c7fdc754/edit?viewport_loc=-1255%2C-90%2C5345%2C3933%2C0_0&invitationId=inv_6045a213-7e87-4273-9a79-0e31d4bf19df

The stack is mostly TypeScript based, with React for most front end components and GCP cloud provider to facilitate the sharing of threat intel with the extension.

We have a highly ambitious goal with our next phase of Nighthawk. We plan to create a first of its kind LLM powered, real time, zero day phishing protection engine. The details for this are outlined in more detail below.

Here are three stages to this:

1. Heuristic engine development.

2. Rule generation and integrating submitting rules suggested by the community.

3. LLM based rule generation.

#### Stage 1 : heuristic engine development

- There are a number of basic heuristic rules that can be used to detect phishing.

- Rules allow the blocking of URLs which have not yet been discovered anywhere else, and are not present in blocklists anywhere in the world.

- Consider for example, if the title of a Talisman phishing website is the same as the legitimate website, but it is hosted on a different domain. This may indicate phishing. Writing a rule for a heuristic engine that checked the page title, presence of a logo, and current domain on a website would likely be effective at protecting against certain kinds of phishing attacks that copied the Talisman page verbatim.

- Another example of a heuristic rule might be to verify whether the CSS of a given website that a NightHawk user is interacting with has tried to copy the look and feel of Talisman. This may indicate phishing.

- With a combination of the right rules, these simple but effective heuristic checks become highly effective means of protecting an end user against phishing. The heuristic engine relies on practical rules of common-sense strategies, allowing for quick decision-making and can evolve efficiently to meet new kits, actors, and threats as they arise.

- Architecting both the heuristic engine as well as the structure and make up of the rules is a crucial first step in the plan toward zero day phishing prevention. These rules fuel the engine and apply practical strategies.

#### Stage 2 : Rule generation and integrating submitting rules suggested by the community

- After creating the initial subset of rules, the key theme of this next milestone is around opening up this process to the community at large. By leveraging ambassadors in the community, we greatly enhance our reach and the breadth of the rules Nighthawk users are protected by.

- Create an interface for community rule-submitting to allow the community to submit rules.

- Testing of the users’ submitted rules for false positives and giving automated feedback on the rule. This is important, as while rules are powerful and have great potential to curb phishing, a poorly written or untested rule might have intended consequences, such as flagging a legitimate website as phishing to the end user.

- Expand the ruleset crafted by the team and integrate rules suggested by the community that work at flagging new kits/scams.

- Explore and organize subsets of data to facilitate the process of training the model.

#### Stage 3 : LLM based rule generation[This is where the magic happens 🪄]

 - Rules submitted by the community as well as rules crafted by our team internally are a good starting point, however, these are limited by the response time between a human finding a scam or new kit, and writing the corresponding rule that would block this site in the plugin. This gap in the time between detection and the time to alert potential victims who may be visiting the website can be costly and highly damaging in phishing, where every minute counts.

- We propose an automated pipeline for automatically generating rules in real time. When a scam is reported or submitted, we aim to have an LLM generate a corresponding rule that would protect the user from visiting the site. This could be automatically tested, tuned, adapted, before being deployed across the Nighthawk ecosystem in real time. Configuring a LLM is essential to tailor its behavior to our specific needs, which allows adapting the model to unique tasks, enhancing its relevance and performance.

- We intend to train/fine-tune LLM for specific tasks that can result in the generation of rules for phishing kits that remain undetected by existing methods or individuals. Given how fast the LLM space is iterating, it is difficult to outline which of the RAG/FT/PEFT techniques and on which model will be most relevant, but it will likely require the adaptation of a model in some way in order to perform accurately.

- We believe that this will be a first of its kind in the world, and not just in the Crypto industry. Leveraging language models to provide anti-phishing protection on the fly to a high risk community, while remaining fully open source and private.

An overview is also available here: https://docs.google.com/presentation/d/1wRe9HADBgxuqN5fjf98OYCxV-7XVe4cVmglCFUSQ_78/

### Ecosystem Fit

We want Nighthawk to be an absolute no-brainer for every single crypto user in the world. Noone is immune to the damage that phishing causes, from seasoned crypto veterans to newcomers who are still learning the ropes. We believe that the polkadot community as a whole will be a fantastic fit with high engagement levels, vulnerable users and a desire from the community leaders within the ecosystem to combat this problem.

There are some current answers to this problem on the market, most notably EAL by the crime fighting superstar Harry Denley. While we not only endorse but financially contribute to community initiatives that combat phishing in the industry, PhishFort has become one of if not the major anti-phishing provider in the space. This means that the all important _backend_ infrastructure - a constantly updated feed of newly discovered attacks, a team of trained and professional anti-phishing analysts, and experience being in the trenches daily fighting this problem as a company are needed to bolster a community facing solution to this problem.

There are some other commercial solutions to this problem which both charge money, and are structured in such a way as to compromise the fundamental privacy of a users browsing experience. We personally have a strong aversion to compromises on user privacy and although we understand the need to charge for such a plugin, prefer answers to this problem that are transparent and accessible to anyone, anywhere in the world irrespective of their ability to afford such a solution.

## Team :busts_in_silhouette:

### Team members

- Team Lead: Valentyn

- 5 team members at PhishFort all of whom will contribute to this in various ways, from engineering to analysis of reports, to the design of the project.

- One additional engineer to be hired pending funds.

  

### Contact

- **Contact Name:** Valentyn Markushev

- **Contact Email:** Valentyn.markushev ( at ) phishfort.com

- **Website:** https://nighthawk.phishfort.com/

https://www.phishfort.com/

### Legal Structure

 
- **Registered Address:** 160 Robinson Road, #14-04 Singapore Business Federation Centre, Singapore

- **Registered Legal Entity:** PROTAKEDOWN PTE.

### Team's experience

PhishFort is an anti-phishing security team dedicated to fighting phishing in the crypto world. We've been working in the space for 4 years now, building quietly and helping some of the biggest web3 and crypto companies in the world execute an anti-phishing strategy with us. We detect and shut down scams in the space and we're proud of the work we've done and continue to do to date. EF will know many of our partners (wallets, DEXs, dApps etc) who we work with in the space to keep safer.

The above is shared to say that above all else, we as a team do nothing but fight phishing in the crypto space, 24/7.

### Team Code Repos

Public repo of the project:

https://github.com/phishfort/nighthawk-extension

https://github.com/phishfort

Most of our codebase is backend and closed source, so we don't have much to publicly point to unfortunately. However, where we have open sourced data, including some of our threat intelligence you can find it on the link above.

  

## Development Status :open_book:

  
Currently, we are working on some minor UI/UX changes based on the given feedback, mostly frontend.

There is currently no development taking place on the rule generation initiative that we can share.

  
## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 9 month

- **Full-Time Equivalent (FTE):** 5

- **Total Costs:** $30,000

### Milestone 1 — Heuristic engine

- **Estimated duration:** 2 month

- **FTE:** 6

- **Costs:** 8,000 USD



| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation |FAQ and Onboarding for the user to explain how the extension works |
| **0c.** | Testing and Security | In addition to automated testing, our infrastructure has and will continue to undergo security audits by iosiro.com for major releases. |
| 1. | Talent acquisition | Bringing on the right people that we need on the team to compliment the resources that we have already in the team |
| 2. | Research | Conduct a final research on set of rules to start off with |
| 3. | Design heuristic engine and rule structure | Finalize the architecture and rule definition |
| 4. | Create initial rule sets | For the first milestone we'll be handcrafting and manually assessing the initial set of rules |
| 5. | Accuracy modeling and testing | Run initial rules in controlled environment and minimize false positives and assess performance|

  

### Milestone 2 — Rule generation

- **Estimated Duration:** 4 month

- **FTE:** 5

- **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Functionality for accepting rules from users | Add UI/UX, testing, evaluation and distribution of users' submitted rules |
| 2. | False positive check | False positive auto check for community rules against an appropriate dataset |
| 3. | Performance feedback for users' rule| Run a test of the users' rules on sample websites and report performance back to users. This allows the user to assess whether the rule performs as expected |
| 4. | Data collection| Search, sort and pack subsets of data sets for model training for Milestone 3|


### Milestone 3 — Auto-classification

- **Estimated Duration:** 3 month

- **FTE:** 5

- **Costs:** 10,000 USD

  

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Model configuration | Group rule datasets and relevant training data for LLM processing |
| 2. | Model training | Apply insights to the data using human and machine-assisted activities and expose the model to a vast amount of data. Research to be conducted on performance of RAG/FT/PEFT and choose an appropriate mechanism|
| 3. | Model performance evaluation | Determine the effectiveness of the data within the model and adjusting pre-trained parameters to improve its performance|
| 4. | Alpha testing | Test the model within small group of volunteers and team|
| 5. | Open beta | After bug fixing and mitigating issues, open testing to a wider audience |
| 6. | Release | Public release |


## Future Plans

We are a team of security professionals who will battle phishing to make web3 space as secure as possible for everyone. We believe that auto-classification would bring anti-phishing protection to a new level. In addition, crypto communities are a crucial part of our venture, thus we want to foster a strong sense of collaboration, transparency, and innovation within these communities to drive the success of our project and contribute to the broader growth of the cryptocurrency ecosystem.

## Additional Information :heavy_plus_sign:

- Previous grants you may have applied for - last year we acquired a grant from Coinbase to build the MVP. Unfortunately, their grant program is closed this year. Thus, we are actively seeking fresh prospects to enhance Nighthawk further.
