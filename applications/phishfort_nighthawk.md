# W3F Grant Proposal

- **Project Name:** Nighthawk anti-phishing extension
- **Team Name:** PhishFort
- **Payment Address:** 0x714a5b8Cd830B8a6FBf320d5678B30EF8C0fF365 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Phishing is the biggest security challenge that end users face in crypto, period. We are in desperate need for *crypto centric* solutions to our security issues in the space and phishing is no different. From fake Vitalik giveaways on Twitter to phishing streams from the EF on youtube to good old fashioned phishing emails, we have a challenge on our hands when it comes to keeping our users safe. Users need to know:
1. That when they interact with websites, social media accounts, social media posts, that they are in fact interacting with the person(s) they think they are (authenticity).
2. That as far as is possible, they are not interacting with malicious content online. 
NightHawk addresses both of these problems using a clean new UI and UX for the end user. 

Phishing is far more than just a security threat to the ecosystem. It's regularly cited by both newcomers and experienced users as one of their biggest fears and hurdles to adoption in the space. Phishing is *a hurdle to adoption*. We put forward this project as a positive step towards keeping users safe online in our industry.

### Overview

One line summary
------------
Nighthawk is an anti-phishing, open source, privacy focused browser extension designed from the ground up with the crypto industry in mind.

The Why
-------

It's no secret that along with just about every major ecosystem in the crypto space, Polkadot's community is regularly targeted by scammers. While losses are difficult to calculate, across the ecosystem phishing is the cause for the loss of hundreds of millions of dollars in phishing. This is our first major as foray at PhishFort into building a consumer facing, community driven and led, free, and effective solution to the problem. While PhishFort runs a B2B service that we provide to many of the communities in the industry, this stands as a non-commercial give back to the industry as a whole. We're building this because we know the space well, and we know how much damage phishing causes in a matter of minutes. A fast response, and community based reporting mechanism is a missing piece of this puszzle thus far. Although we pride ourselves on getting websites and malicious content removed from the internet quickly and efficiently, we need to offer this protection to end users in as near real time as possible if we're really going to solve this problem as a community. Nighthawk serves this purpose.  

For too long, end users have simply been targets and victims to scammers. With the ability to report scams and get them shared and protect end users in near real time with the entire userbase receiving these reports, we believe we can turn potential victims into first responders.

### Project Details

Mockups and a more general overview are available in this document: https://docs.google.com/presentation/d/1L-m1nv23j9byAg7Mf7OECIunYrnOXeJ_KyH_iQ5Ro0M/edit?usp=drive_web&ouid=108374994789776306258

From a technology perspective, there are 3 components to this.
1. The browser plugin itself, compatible with most chromium based browsers as well as Firefox.
2. A dashboard from which the user can manage their trusted sites, see community leaderboards and manage plugin settings.
3. The backend infrastructure such as API's and database which is used to store information about known threats that we can protect the user from.

The stack will largely be JS based, with React for most front end components and a cloud provider such as GCP or AWS to facilitate the sharing of threat intel with the extension.

We have released a proof of concept idea for this several years ago which while lacking in functionality, has given us some significant learnings over the years. The plugin while feature lacking echoes the philosophy we'll pursue with Nighthawk. Free, completely private, open source and effective.

### Ecosystem Fit

We want Nighthawk to be an absolute no-brainer for every single crypto user in the world. Noone is immune to the damage that phishing causes, from seasoned crypto veterans to newcomers who are still learning the ropes. We believe that the polkadot community as a whole will be a fantastic fit with high engagement levels, vulnerable users and a desire from the community leaders within the ecosystem to combat this problem.

There are some current answers to this problem on the market, most notably EAL by the crime fighting superstar Harry Denley. While we not only endorse but financially contribute to communtiy initiatives that combat phishing in the industry, PhishFort has become one of if not the major anti-phisihng provider in the space. This means that the all important _backend_ infratstructe - a constantly updated feed of newly discovered attacks, a team of trained and professional anti-phishing anaylsts, and experience being in the trenches daily fighting this problem as a company are needed to bolster a community facing solution to this problem. 

There are some other commercial solutions to this problem which both charge money, and are structured in such a way as to compromise the fundamental privacy of a users browsing experience. We personally have a strong aversion to comrpomises on user privacy and although we understand the need to charge for such a plugin, prefer answers to this problem that are transparent and accessible to anyone, anywhere in the world irrespective of their ability to afford such a solution.

## Team :busts_in_silhouette:

### Team members

- Team lead: Matt Marx
- 23 team members at PhishFort all of whom will contribute to this in various ways, from engineering to analysis of reports, to the design of the project.
- 2 additional engineers who are yet to be hired pending funding.
- 1 community member to maintain and build the all important community behind the project.

### Contact

- **Contact Name:** Matt Marx
- **Contact Email:** matt.marx ( at ) phishfort.com
- **Website:** https://phishfort.com

### Legal Structure

- **Registered Address:** 160 Robinson Road, #14-04 Singapore Business Federation Centre, Singapore
- **Registered Legal Entity:** PROTAKEDOWN PTE. 

### Team's experience

PhishFort is an anti-phishing security team dedicated to fighting phishing in the crypto world. We've been working in the space for 4 years now, building quietly and helping some of the biggest web3 and crypto companies in the world execute an anti-phishing strategy with us. We detect and shut down scams in the space and we're proud of the work we've done and continue to do to date. EF will know many of our partners (wallets, DEXs, dApps etc) who we work with in the space to keep safer. 

The above is shared to say that above all else, we as a team do nothing but fight phishing in the crypto space, 24/7.

### Team Code Repos

- https://github.com/phishfort

Most of our codebase is backend and closed source, so we don't have much to publicly point to unfortunately. However where we have open sourced data, including some of our threat intelligence you can find it on the link above.

## Development Status :open_book:

As mentioned, a previous POC that we released, _Protect_ is available here:
- https://phishfort.com/protect
- https://github.com/phishfort/protect

There is currently no development taking place on the new Nighthawk plugin that we can share. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 8 months
- **Full-Time Equivalent (FTE):**  5
- **Total Costs:** $50,000

### Milestone 1 - Road to Alpha

- **Estimated duration:** 4 month
- **FTE:**  6
- **Costs:** 25,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | TBD - it'll be open source as the POC is, but we want to ensure that this is not commercialised by anyone that might look to do so. |
| 0b. | Article | An article announcing the project as well as the communities that have chosen to be a part of this ambitious project |
| 1. | Talent acquisition | Bringing on the right people that we need on the team to compliment the resources that we have already in the team |
| 2. | Dashboard | The first iteration of the dashboard, showing a leaderboard for reports submitted by the community, a settings tab, and trusted site management.  |  
| 3. | Plugin | A plugin designed according to design specifiation we release. In addition to being clean and simple from a UX perspective, this needs to be highly performant. |  
| 4. | Backend Infrastructure | We need to provision and develop the various APIs, database structures and supporting backend code that will be required to support the project |  


### Milestone 2 Beta Launch and community feedback

- **Estimated Duration:** 2 month
- **FTE:**  6
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | Community | Creation of community engagement platfroms across Discord and TG |
| 1. | Bug fixes | Address the bugs we find once it's deployed across multiple devices and endpoints |
| 2. | Dashboard - Additional features | Implement changes based on broader community feedback, if there are sensible and easy to structure improvements or changes that we can make to the dashboard. |  
| 3. | Plugin  - Additional features | Implement changes based on broader community feedback, if there are sensible and easy to structure improvements or changes that we can make to the plugin. |  
| 4. | Gaurdian Network Inception | Slowly start to onboard "Guardians", members of the community that contribute reports and issue these to us as a team |  


### Milestone 3: Public launch and community building

- **Estimated Duration:** 2 month
- **FTE:**  2
- **Costs:** 10,000 USD

Getting this into as many hands as possible is important for us, and so marketing this will be important. Providing support to the community who we will incentivise to grow and report scams when they find them will also be important. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Launch marketing | Work with our partners as well as media to publicise the launch of Nighthawk |
| 2. | Bug fixes | Address the bugs we find once it's deployed across multiple devices and endpoints |
| 3. | Content creation FAQs | Produce a simple knowledge base for victims of phishing, inluding education and potential preventative action that might be available|  
| 4. | Gaurdian Network Growth | Gamify the guardian network, potentially with giveaways for the top Guardians each month/quarter, and public acknowledgment of their work |  
| 5. | Community management | Answer FAQs and provide assistance to the community getting started with the plugin |


## Future Plans

We're anxious to get this launched sooner rather than later - each day we delay is another potential victum. This version will be the simplest, cleanest and most effective version of the plugin that we believe will address a large portion of the challenges that we face. Done the line however, there is significant scope to add AI and hueristics to the plugin that may be able to flag suspicious content before it's even been reported.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.
A team member recommended that we apply to this. I'm not sure that they want to be mentioned by name but they've been a large encouragement to us and the project in general which we're grateful for and hope to deliver something that's going to make them proud for their support and recommendation. 
