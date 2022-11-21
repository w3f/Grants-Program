# Crowdloan Front End Template

- **Team Name:** 10Clouds Sp. z o.o.
- **Payment Address:** 0xa79aa9572c7e1f8909fcc9674d676b73d5a71faa (aUSD)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Responding to RFP: https://github.com/w3f/Grants-Program/blob/master/rfps/open/crowdloan_front_end_template.md

### Overview

A front-end white-label template for teams to use to easily build their Polkadot Crowdloan websites.

### Project Details

The overall objective of this project is to provide a white-label solution to teams to be able to plug into and offer all the information users need to contribute to their Crowdloan. In essence, it's a collection of:

1. Project information
2. Rewards Schema
3. Current contributions
4. Time left in Crowdloan and competition
5. Contribute CTA
6. After the Crowdloan

All of the above should be done style agnostic so that the project can plug their own look and feel into the site.
(as per RFP)

### Ecosystem Fit

Defined by RFP

## Team :busts_in_silhouette:

### Team members

- Product Delivery Manager - Jedrzej Wencka
- Tech Lead - Aleksander Krasnicki
- React - Maciej Topor
- Design Lead - Krzysztof Juszczyk
- UX & Product Designer - Paweł Poterała


### Contact

- **Contact Name:** Edgar Czop
- **Contact Email:** edgar.czop@10clouds.com
- **Website:** https://10clouds.com/

### Legal Structure

- **Registered Address:**  ul. Chmielna 73, 00-801 Warsaw, Poland
- **Registered Legal Entity:** 10Clouds Sp. z o.o. (Ltd.)

### Team's experience

The team was involved in creating an internal NFT Marketplace white-label (https://marketplace.10clouds.io). As the name suggests it's a website that allows mint and trade NFTs between users. It is strongly inspired by OpenSea and follows the same lazy minting pattern. After login with Metamask user can customize the profile, create collections, and start lazy-minting NFTs. The website contains extensive search/filters for collections and NFTs. An NFT can be created as _Open for offers_ which means another user can offer a price for which they want to buy it and the owner can accept any of them. The other way of selling is the „Buy now" option which allows you to sell NFTs for a set, fixed price. In both scenarios, the NFT is minted during the sale process and transferred to the new owner.

The app is written in Next.js on the front-end and contains our own Smart Contracts currently deployed on Goerli testnet, and the Backend is written in Python with GraphQL. We have our own subgraph created in The Graph to aggregate the information about events emitted from our contracts (to update the UI accordingly).

### Team Code Repos

- https://github.com/10clouds

- Maciej Topor https://github.com/maciejt10c
- Aleksander Krasnicki https://github.com/plakak

### Team LinkedIn Profiles (if available)

- [Product Delivery Manager - Jedrzej Wencka](https://www.linkedin.com/in/jedrzej-wencka-94382137/)
- Tech Lead - Aleksander Krasnicki
- [React - Maciej Topor](https://www.linkedin.com/in/maciej-topor/)
- [Design Lead - Krzysztof Juszczyk](https://www.linkedin.com/in/juszczyk/)
- UX & Product Designer - Paweł Poterała


## Development Status :open_book:

We are currently in a very initial phase of gathering benchmarks for the approach and setting the general approach to deliver an experience that fits the target audience.

From our initial research we came to the conclusion that the solution should follow these traits:

### Using a Jamstack approach & Webflow template

We aim to provide front-end templates that can be used with one major static site generator (SSG). This follows similar approaches like Github Pages templates for projects that contain the most important information and link-stubs to make it easy for Github projects to present themselves.

The Jamstack will allow us to leverage the vast community behind it for future involvement of customisations and ports to other SSGs as is evidenced by the activities of these communities who are eager to port interesting templates to their SSG of choice.

In addition to this we plan to create a Webflow template variant for teams who are more comfortable with it. Optionally we can also publish the Figma design as a basis for custom layouts by the community.

### One Page approach

We will also suggest a One Page or Single Page approach that, while still having the option for a menu, presents all information in one page as the name suggests. This has the following advantages:

- **Most simple approach for projects.** Projects often underestimate the effort to create content and at the same time keep certain information to a digestible length
- **Less scope allows more variants.** If we limit the scope to a single page, we can more easily provide additional template designs that follow the structure but still give some individuality for each project.

### SSG support (Jamstack only)

We aim to start with the support of Gatsby, a popular React-based choice for SSGs, with a vast community of its own. An initial survey of the Parity community should be done to see whether these assumptions match and should be revised.

When it comes to other SSGs, the ports can either be motivated by further grants or left to the community of open source volunteers. As mentioned before, there is an intrinsic motivation of each SSG’s community to port popular templates.

**Deployment choices (Jamstack only)**

The Jamstack approach allows the community to use virtually every popular way of hosting the project sites. We are assessing whether it is beneficial to include a “Deploy to Netlify” button in the projects as well to lower the initial barrier. However, projects will be able to deploy their pages to (but not be limited):

- Netlify
- Github Pages
- Gitlab Pages
- Vercel
- Cloudflare
- AWS S3 (and similar solutions)

### Easy to get started

We’re assuming that the approach is also a familiar way for the Parity community to get started with their project pages. It’s as simple as fork, customize, deploy.

For parts of the community who are less comfortable with the Jamstack approach we will provide a Webflow template as well.

### Illustrative Examples

- https://github.blog/2012-04-02-instantly-beautiful-project-pages/
- https://pages.github.com/
- https://government.github.com/
- https://github.com/collections/github-pages-examples
- …


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4-5 weeks
- **Full-Time Equivalent (FTE):**  2 (Product Designer & React Developer) + Support Team (PDM, Leads, UX Designer)
- **Total Costs:** 30,000 USD

### Milestone 1

- **Estimated duration:** 4-5 weeks
- **FTE:**  2 (as above)
- **Costs:** 30,000 USD

| Number | Deliverable | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -----: | ----------- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a. | License | MIT or TBD                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0b. | Documentation | For both approaches (Webflow & Jamstack) we provide how-to guides. Jamstack will be documented in the Github repo.                                                                                                                                                                                                                                                                                                                                           |
| 0c. | Article | We will publish an article presenting the templates and how to use them.                                                                                                                                                                                                                                                                                                                                                                                     |
| 1a. | Benchmarking | Design research of existing Crowdloan pages and other one pages designs, like Github project pages templates. <br />This will allow us to synthesize viable options of the page designs                                                                                                                                                                                                                                                                        |
| 1b. | Design Direction Prototype | Aiming to create as many medium to high-fidelity dd prototypes as possible that allows the Grants team and the community to have an input on the design direction<br />The aim is to have the prototypes at 25%-50% completeness, to see major components/features and the general design direction. This way we don't waste time on dismissed design directions.<br />The designs should follow good practices in general without requiring additional research |
| 1c. | Repo Setup | Repo setup incl. base libraries/frameworks, initial technical documentation. Undesigned base scaffold. Allows the implementation to be simplified by forking                                                                                                                                                                                                                                                                                                 |
| 2. | Jamstack implementation in Gatsby | One (1) chosen design direction<br /><br />Minimum sections:<br />- Project information<br />- Rewards Schema<br />- Current contributions<br />- Time left in Crowdloan and competition<br />- Contribute CTA<br />- After the Crowdloan<br /><br />Implemented as One Page Design                                                                                                                                                                                              |
| 3. | Webflow implementation | One (1) chosen design direction<br /><br />Minimum sections:<br />- Project information<br />- Rewards Schema<br />- Current contributions<br />- Time left in Crowdloan and competition<br />- Contribute CTA<br />- After the Crowdloan<br /><br />Implemented as One Page Design                                                                                                                                                                                              |
| 4. | Figma Template Publishing | Allows to use it for other solutions                                                                                                                                                                                                                                                                                                                                                                                                                         |





## Future Plans

When provided with the initial set of templates and their usage instructions, we envision the following:

- Creating a hub repo that also uses a Jamstack approach to give a list of available templates, allowing the community to preview the templates easily and contribute templates or forks to other SSGs in a convenient place
  The hub could also include:
- Good content practices partially provided by our team of UX writers
  - FAQs
  - Tips and Tricks taken from successful Crowdloans



## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Multiple contact people from Parity (e.g. Alberto Navarro or Richard Casey).

**Work we have already done**

- [Crescent](https://www.crescent.app/)
  ![image](https://i.imgur.com/gLw8g3V.png)
- [Solo music](https://www.solomusic.io/)
  ![image](https://i.imgur.com/ZWtJPve.png)
- [LevelField](https://www.levelfield.us/)
  ![image](https://i.imgur.com/Zr9d4fu.png)
- [G-coin by Emergent Technology](https://gcoin.com/)
  ![image](https://i.imgur.com/1OD1Jtg.png)
- [Omise](https://www.omise.co/)
  ![image](https://i.imgur.com/ElSnQtX.png)

We contributed to Devnet support SLA for parachains.
