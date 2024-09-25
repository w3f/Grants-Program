# Project Alphaday - Live Beta Version Data Aggregator Dashboard

- **Team Name:** Alphabox Solutions Pte. Ltd.
- **Payment Address:** 14g3mVhMHTXVkqAC4844zi3gvKrd4KEkUiVBoHw7G42tnaUv (DOT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Alphaday is a powerful crypto workflow aggregator that pulls in news, on-chain data, social media, web3 services and much more into one customizable UI.

We help solve the issue of information fragmentation and aim to serve as a central point where any user (whether they are a developer, enthusiast, investor) can instantly get the Polkadot/Kusama information they need, stay up to date on the latest videos & podcasts featuring Polkadot/Kusama and much more.

Alphaday is and will remain to be free-to-use for end users.

### Project Details

We’ve conducted market research on users and currently people’s regular crypto workflows consist of jumping from one browser tab to another to check prices, read news, follow social feeds, participate in discussions. A typical crypto user will have 6 to 10 open tabs at any given time and people have referred to Alphaday as the ‘tab killer’ because all the information you’d need across all your different tabs is available on Alphaday.

We are aiming to be the de facto homepage for all crypto users. People using Alphaday to stay up to date with their favourite crypto projects, listen to podcasts, do research, participate in discussions and much more. Other competitors are all competing within much narrower niches. We get their services and integrate them into our app so users don’t have to jump from one service to another, it's all available on Alphaday.

Example Dashboard: https://app.alphaday.com/b/aave/



#### User Metrics

We launched our public beta in August 2022 and currently have ~15,000 MAU active users (organic) with minimal resources spent on marketing; our roadmap for 2024 is focused on marketing a lot more. Average session time per user is 9 minutes and retention rate across 1/7/30 days is 56%/53%/50% as measured by Hotjar.

#### Tech Stack

Alphaday is a React-Typescript dashboard on the frontend using a Python-Django backend built on distributed infrastructure with Postgres and Redis Databases.

#### Challenges

As the primary core product is already developed, developing and deploying the dashboard poses minimal risk. 

Our challenges revolve mostly around:
Changes in API or RSI feeds that need to be updated on a regular basis
News sources or other content sources that need to be added or removed
Manual importation of data, such as upcoming events, that are not picked up by the Alphaday aggregator engine.
New developments or integrations, and quality assurance/testing of new features and widgets.

### Ecosystem Fit

We do not have direct competitors who are competing in the experience aggregator space but our individual widgets do overlap with features offered by Dune, Nansen, Zapper/Zerion, Coingecko, Discord, DeFiLama, Snapshot.

Bear in mind that the above are feeding data to Alphaday itself.

If we get any early traction on the Polkadot/Kusama dashboard we can immediately start to build more Polkadot/Kusama-exclusive widgets. This would likely entail API integrations into the dashboard, such as the already integrated Uniswap widget.

We aim to create a dashboard that serves any Polkadot/Kusama user, holders, developers, VCs, and pretty much any stakeholder whether they are completely new to the Polkadot/Kusama ecosystem or an expert.

## Team :busts_in_silhouette:

### Team members

Deniz Omer, Founder

Felipe Faraggi, Co-founder

Pablo Palomo, Technical Lead

Vicente Almonacid, Software Engineer

Charles Nwankwo, Developer

Jonathan Irhodia, Developer

Gideon Anyalewechi, Developer

Zehra Naz Hacisuleyman, Marketing

Selim Cetiner, Content Specialist & Marketing Operations

Michael Hagopian, QA & Partnerships

### Contact

- **Contact Name:** Michael Hagopian
- **Contact Email:** mike@alphaday.com
- **Website:** alphaday.com, app.alphaday.com

### Legal Structure

- **Registered Address:** Alphabox Solutions Pte. Ltd.
- **Registered Legal Entity:** 45 North Canal Road, #01-01 Lew Building, 059301 Singapore

### Team's experience

Deniz has been involved in the Ethereum space since early 2016 and joined Kyber Network in 2017 as Head of Ecosystem Growth before quitting to start Alphaday full-time in 2021. Previously he worked at Thomson Reuters for a decade building financial products that rivaled the Bloomberg Terminal. He is currently also a Venture Partner at IOSG.VC.
https://twitter.com/DenizOmer, https://www.linkedin.com/in/denizomer/ 

Felipe has also been involved in Ethereum since 2016 and was a Developer Advocate at Pegasys and Consensys before quitting to work full time on Alphaday.
https://github.com/faraggi, https://twitter.com/felipefaraggi, https://www.linkedin.com/in/faraggi/ 

### Team Code Repos

- Felipe - https://github.com/faraggi
- Pablo - https://github.com/ppalomo
- Vicente - https://github.com/v-almonacid
- Charles - https://github.com/Xavier-Charles
- Jonathan - https://github.com/elcharitas
- Gideon - https://github.com/getgiddy

### Team LinkedIn Profiles (if available)

- Deniz - https://www.linkedin.com/in/denizomer/ 
- Felipe - https://www.linkedin.com/in/faraggi/ 
- Pablo - https://www.linkedin.com/in/pablo-palomo-07127711/ 
- Vicente - https://www.linkedin.com/in/vicente-almonacid/ 
- Charles - https://www.linkedin.com/in/charles-nwankwo-01/ 
- Jonathan - https://linkedin.com/in/elcharitas 
- Gideon - https://www.linkedin.com/in/getgiddy/ 
- Zehra - https://www.linkedin.com/in/zehranazh/
- Selim - https://www.linkedin.com/in/selim-cetiner-167364234/
- Michael - https://www.linkedin.com/in/mikael-h-87bb4ba4/

## Development Status :open_book:

Product is live at: app.alphaday.com

Landing Page: https://alphaday.com/ 
Twitter: https://twitter.com/AlphadayHQ 
Discord: https://discord.com/invite/8KSmPyT5k8 
Github: https://github.com/AlphadayHQ 
Linkedin: https://www.linkedin.com/company/alphaday
Pitch Deck: https://alphaday.com/deck 
Demo: https://www.youtube.com/watch?v=ThCd_W3rK_8 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 4,000 USD

### Milestone 1 — Development & Deployment of the Dashboard

- **Estimated duration:** 2 months
- **FTE:**  2
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | Not applicable to Alphaday, as we have no Substrates nodes or sending functionality on the app |
| 0c. | Testing Guide | We can provide a document as a guide to give a bit more detail on how to test a completed dashboard's functionality. It will be a reference to the points listed below (1-14) |
| 0d. | Article | We will publish articles and other posts about the dashboard and the project once we deploy it. |
| 1. | Blog | The latest Polkadot official announcements and blog post content |
| 2. | News | A feed of all news mentions of Polkadot/Kusama from coindesk, cointelegraph and 20+ other news sources aggregated from across the internet |
| 3. | Calendar | A calendar containing all Polkadot/Kusama events including meetups, hackathons with Polkadot/Kusama bounties, AMAs |
| 4. | Documentation | Complete Polkadot/Kusama Document directory |  
| 5. | Forum | Integration with Polkadot Governance Forum to show the latest and trending discussion topics |  
| 6. | Social | Discord & Reddit Integration to show a feed of latest discussions for both Polkadot/Kusama |  
| 7. | Misc | FAQ, Polkadot Whitepaper, DOT/KSM tokenomics information |
| 8. | Token Price | Live DOT/KSM spot price chart |
| 9. | Developer Resources | Developer tools, API’s, tutorials, guides, grants & bounties, documentation, and any other ‘Build’ resources that can help build with Polkadot/Kusama |  
| l0. | Careers | Polkadot/Kusama/Web3 Careers integration to show the latest open jobs listed |  
| 11. | Roadmap |  A widget featuring the Polkadot roadmap with all the descriptions and links included |  
| 12. | Ecosystem | Categorized links and descriptions of products and services offered in the Polkadot/Kusama ecosystem |  
| 13. | TVL Data | Polkadot/Kusama TVL data through Defillama integration |
| 14. | Team | Polkadot/Kusama founders information |

### Milestone 2 — Maintenance & Curation of Dashboard

- **Estimated duration:** 2 months
- **FTE:**  2
- **Costs:** 1,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | API’s & RSS feeds | Changes in API or RSI feeds that need to be updated on a regular basis. |
| 2. | Updating Automated Sources | News sources or other content sources to be added or removed. |
| 3. | Manual Data Curation | Manually import data, such as upcoming events, that are not picked up by the Alphaday aggregator engine. |
| 4. | Further Development & Upkeep |  New developments or integrations, and quality assurance/testing of new features and widgets |

...

## Future Plans

If we get a grant we will start working on the board immediately and we should have it ready within 2 months. Once we’ve launched the board, we use forums and other channels available to gather feedback and tune the dashboard. We will continue this process of iterating, deploying, and collecting feedback continuously to build a dashboard that Polkadot/Kusama stakeholders truly love to use.

We have just recently released a new mobile app version of Alphaday. The dashboard will be available on the desktop version, and we will adapt the new mobile app to automatically filter the ‘superfeed’ based on each project’s url; e.g. ‘/b/polkadot’ would direct users to the alphaday superfeed page and automatically filter it for Polkadot.

Other future plans include further development of the app as a whole, and adding new features and functionalities. We have also started focusing on marketing more this year to boost the value our partners get from us, as well as to increase awareness of Alphaday.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

Established partners: Aave, Chiliz, TheGraph, Avalanche, Metis, Dfinity, Zcash, XRPL, Ethereum Classic, RocketPool, Starknet and others.
