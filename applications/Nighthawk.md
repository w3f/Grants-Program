# Nighthawk anti-phishing browser extension

- **Team Name:**  Phishfort

- **Payment Address:** 0x689874C41A979082EEd74ca880Ca3487aF85710D (USDC)

- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):**  2

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

Our motivation to undertake this endeavor stems from our deep understanding of the crypto landscape and the severe damage inflicted by phishing attacks in a matter of minutes. What has been missing in this fight against phishing is a swift response mechanism driven by the community. Although we take pride in promptly removing malicious content from the internet, we recognize the need to offer real-time protection to end users if we are to collectively address this problem. Nighthawk has been designed to serve this exact purpose.

For too long, end users have been easy prey for scammers, but we aim to change this dynamic. By allowing users to report scams and disseminate these reports to the entire userbase for near real-time protection, we aspire to transform potential victims into proactive responders.



### Project Details

The MVP of the project has been successfully deployed to the Chrome Store and Add-ons Store, available here: 

https://chrome.google.com/webstore/detail/nighthawk-by-phishfort/bdiohckpogchppdldbckcdjlklanhkfc

https://addons.mozilla.org/en-US/firefox/addon/nighthawk_plugin/

Project architecture is available here: https://lucid.app/lucidchart/5bd2f714-60b0-4737-9350-aae8c7fdc754/edit?viewport_loc=-1255%2C-90%2C5345%2C3933%2C0_0&invitationId=inv_6045a213-7e87-4273-9a79-0e31d4bf19df

The stack is mostly TypeScript based, with React for most front end components and GCP cloud provider to facilitate the sharing of threat intel with the extension.

As a next step, we aspire to integrate auto-classification and rule-generation engine into the plugin.

Here are three steps to this:

1. Heuristic engine development
2. Rule generation engine implementation
3. Auto-classification engine implementation

This technology will be operating locally without sending any browsing data to us.

The general overview is available here: https://docs.google.com/presentation/d/1wRe9HADBgxuqN5fjf98OYCxV-7XVe4cVmglCFUSQ_78/edit?usp=sharing
  


### Ecosystem Fit

  We want Nighthawk to be an absolute no-brainer for every single crypto user in the world. None is immune to the damage that phishing causes, from seasoned crypto veterans to newcomers who are still learning the ropes. We believe that the polkadot community as a whole will be a fantastic fit with high engagement levels, vulnerable users and a desire from the community leaders within the ecosystem to combat this problem.

There are some current answers to this problem on the market, most notably EAL by the crime fighting superstar Harry Denley. While we not only endorse but financially contribute to communtiy initiatives that combat phishing in the industry, PhishFort has become one of if not the major anti-phisihng provider in the space. This means that the all important _backend_ infratstructe - a constantly updated feed of newly discovered attacks, a team of trained and professional anti-phishing anaylsts, and experience being in the trenches daily fighting this problem as a company are needed to bolster a community facing solution to this problem.

There are some other commercial solutions to this problem which both charge money, and are structured in such a way as to compromise the fundamental privacy of a users browsing experience. We personally have a strong aversion to compromises on user privacy and although we understand the need to charge for such a plugin, prefer answers to this problem that are transparent and accessible to anyone, anywhere in the world irrespective of their ability to afford such a solution.

  

## Team :busts_in_silhouette:

  

### Team members

- Team Lead: Valentyn
-  6 team  members  at  PhishFort  all  of  whom  will  contribute to this in various ways, from engineering to analysis of reports, to the design of the  project.
- One additional engineer to be hired pending funds.

### Contact

- **Contact Name:** Valentyn Markushev

- **Contact Email:** Valentyn.markushev ( at ) phishfort.com

- **Website:** https://nighthawk.phishfort.com/
  https://www.phishfort.com/

  

### Legal Structure

  

- **Registered Address:** 160  Robinson  Road, #14-04 Singapore  Business Federation Centre, Singapore

- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

  

### Team's experience

  PhishFort is an anti-phishing security team dedicated to fighting phishing in the crypto world. We've been working in the space for 4 years now, building quietly and helping some of the biggest web3 and crypto companies in the world execute an anti-phishing strategy with us. We detect and shut down scams in the space and we're proud of the work we've done and continue to do to date. EF will know many of our partners (wallets, DEXs, dApps etc) who we work with in the space to keep safer.

The above is shared to say that above all else, we as a team do nothing but fight phishing in the crypto space, 24/7.

### Team Code Repos

Public repo of the project:
https://github.com/phishfort/nighthawk-extension

  

## Development Status :open_book:

  

Currently, we are working on some minor UI/UX changes based on the given feedback, mostly frontend.

There is currently no development taking place on the rule generation initiative that we can share.



## Development Roadmap :nut_and_bolt:


### Overview

  

- **Total Estimated Duration:** 9 month

- **Full-Time Equivalent (FTE):** 5

- **Total Costs:** $30,000
  

### Milestone 1 — Heuristic engine

  

- **Estimated duration:** 4 month

- **FTE:** 6

- **Costs:** 12,000 USD


| Number | Deliverable | Specification |

| -----: | ----------- | ------------- |

| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |

| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |

| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |

| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |

| 1. | Talent acquisition | Bringing  on the right  people that we need on the team to  compliment the resources  that  we have already in the team |

| 2. | Research | Conduct a final research on set of rules to start off with |

| 3. | Write rules | Create a set of rules for the first heuristic engine |

| 4. | False positive avoidance  | Test all the possible scenarios to avoid any false-positives |

### Milestone 2  — Rule generation
  

- **Estimated Duration:** 3 month

- **FTE:** 5

- **Costs:** 10,000 USD

  
| 1. | Rule engine | Advance rule engine with user submitting rules  |

| 2. | False positive check | False positive auto check for community rules |

| 3. | UI for notifications| Create a set of notifications for users that submitted rules |

### Milestone 3  — Auto-classification

- **Estimated Duration:** 2 month

- **FTE:** 5

- **Costs:** 8,000 USD
  
| 1. | LLM  | Implement LLM based rule generation to achieve auto-classification |

| 2. | Final false positive check | Conduct testing of the LLM engine |

| 3. | Public announcement | Make a public announcement through our social media |

  

## Future Plans

  
We are a team of security professionals who will battle phishing to make web3 space as secure as possible for everyone. We believe that auto-classification would bring anti-phishing protection to a new level. In addition, crypto communities is a crucial part of our venture, thus we want to foster a strong sense of collaboration, transparency, and innovation within these communities to drive the success of our project and contribute to the broader growth of the cryptocurrency ecosystem.  .
  

## Additional Information :heavy_plus_sign:


- Previous grants you may have applied for - last year we acquired a grant from Coinbase to build the MVP. Unfortunately, their grant program is closed this year. Thus, we are actively seeking fresh prospects to enhance Nighthawk further.
