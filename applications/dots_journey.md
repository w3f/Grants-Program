# Dot's Journey

-   **Team Name:** e-Dolphin (e-Dolphin S.A.C.)
-   **Payment Details:**
    -   **DOT**: 162NzgLon2FvCCAC4jficpcWQPBLUpziy2Y4qaB7FRR8GHWq
    -   **Payment**: 162NzgLon2FvCCAC4jficpcWQPBLUpziy2Y4qaB7FRR8GHWq (USDC)
-   **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Dot's Journey is a qualitative data tracker for the Polkadot & Kusama ecosystems and a user-friendly onboarding tool designed for non-crypto users. It aims to provide Spanish (the primary audience) and English speakers with an intuitive understanding of the ecosystem and its projects through a combination of categorization/subcategorization, vision cards (avoiding routes), and step-by-step guides. The goal is to enable users to quickly engage with the ecosystem.

For projects, Dot's Journey serves as a visibility and onboarding tool by offering frictionless listings and streamlined processes in both Spanish and English. In the next phase, it will also serve as a source of qualitative data accessible via API.

Dot's Journey is a specialized version of our ONE app, tailored for the Polkadot & Kusama ecosystems. This proposal is designed to empower Spanish-speaking communities by facilitating their discovery and understanding of these ecosystems, enabling them to interact with features like wallets, staking, OpenGov, and identity. Users will also have the option to create watchlists for their favorite projects. The goal is to build a fully functional web app available in both Spanish and English.

#### Why?

We developed a prototype of ONE, which was tested by Peruvian users in June 2024. The app received a 100% satisfaction rating due to its unique value and the positive reception from users unfamiliar with crypto (more details will be provided in the ecosystem fit section).

Our motivation for creating Dot’s Journey is to break down the entry barriers faced by Spanish-speaking communities. We aim to provide a clear, user-friendly interface that enhances understanding of the Polkadot & Kusama ecosystems. This will empower users, allowing them to take action quickly within the ecosystem while tracking their favorite parachains and dapps in Spanish. Currently, these processes involve a lot of friction for this audience. In the long term, Dot’s Journey (which will be exclusive to Polkadot & Kusama and open source) will complement ONE in fostering the adoption of web3 technologies.

### Project Details

#### 1. Wireframes

**1.1 Wireframe · Vision (‘Visión’ in Spanish)**

![Vision](https://drive.google.com/uc?id=1WEgO6TpdcvtY6rrqceqs-Sv8D3b8_ViB)

_What will the user be able to do in ‘Vision’?_

-   Users can choose to see all projects in the ecosystem or filter between Polkadot and Kusama.
-   They can select categories to review, with unique groupings for 'All', 'Polkadot', and 'Kusama'. For example, while 'All' may have a full AI category, filtering by 'Kusama' might show 'AI, IoT, and others' due to fewer projects.
-   They will see trending projects for the day through a simple algorithm we’ll develop.
-   More detailed relay chain information will be available on the desktop version.
-   Users will access all ecosystem projects (with tokens) categorized and subcategorized.
-   Wordmarks of each project (if available) will be visible.
-   By clicking on the ‘Vision’ button, users will access special Vision cards that feature project-friendly details, founder information, technology summaries, narrative blockchain explanations, and quantitative data.
-   Users can add projects to a 'watchlist.'
-   Tooltips will be available for project subcategories with simple info.
-   Navigation on mobile will be intuitive, and Vision cards can be reviewed easily.
-   Language can be switched between Spanish and English from the top-right corner.
-   Documentation for Dot's Journey, a user guide, and a channel for builders will also be accessible in the top-right corner.
-   Users can log in via Web2 (Google) or Web3 (Polkadot and Kusama wallets).

**1.2 Wireframe · Get started (‘Empieza ya’ in Spanish)**

![Get started](https://drive.google.com/uc?id=1iCr6FKvpvVoo3z1Ml82J9K64gUoxo6D7)

_What can the user do in ‘Get started’?_

-   They can choose from categories like 'wallets,' 'staking,' 'OpenGov,' or 'Identity' to start their journey.
-   Upon selecting a category, users can also choose a specific project within that category. For instance, under 'wallets,' they can select from 'Subwallet', 'Talisman', 'Nova', etc.
-   Numbered step cards will guide users through processes. Each card will include a number, description, and button to access important information about that step. For example, in step 3 of Subwallet, the ‘mnemonic phrase’ button links to a Polkadot article in English. If we cannot find an original source for Polkadot or Kusama in Spanish, we will translate the guide into Spanish or make a summary (if the guide is very long) and reference the Spanish guide with its English source. We will include it in our documentation. We have not yet quantified the amount of work in this part, but we are committed to covering this part so that there is no friction with Spanish-speaking users.
-   The number of steps may vary between projects. For example, 'Subwallet' might have 5 steps, while 'Talisman' may have 6.
-   Users will be able to scroll horizontally on desktop and vertically on mobile to navigate the steps.
-   Language switching, documentation access, and login features similar to Vision will also be available.

**1.3 Wireframe · My Account (‘Mi Cuenta’ in Spanish)**

![My Account](https://drive.google.com/uc?id=1sNEvaCJUXDmOwbMqCLHeveagaeMyb7ba)

_What will the user be able to do in 'My Account'?_

-   Access their profile with summarized info.
-   View their watchlist of favorite projects.
-   Use Vision cards to add or remove projects from their watchlist.
-   View trending projects.
-   Access a top-right menu for editing their profile, rating the app, submitting suggestions, and logging out. If the suggestions are not related to Dot's Journey and are related to ecosystem projects, we can organize the information (as long as they are not related to pricing) and then upload it to GitHub so that projects can read the feedback (if they have any).

**1.4 Mockup · Vision's Card (after clicking the Vision button)**

_We provide an example of one of our cards, as the mockup can give a pretty clear idea of ​​what we hope to achieve._

![Vision Card](https://drive.google.com/uc?id=1Hsm4ThYE39CSS2fBu61NFN-SZPmXVy_M)

What will the user be able to do with the card?

-   See the project's isotype, name, and category.
-   Access key project links (in the case of Spanish, we prioritize links in Spanish – if the project has them – otherwise we will include the official ones in English). Our design allows a maximum of 12 to 14 link icons.
-   View new data such as project-friendly information, founders, technology summaries, blockchains explained narratively and quantitative data.
-   See FDV and CEX/DEX volume pie charts.
-   View performance analysis versus their main relay chain (Polkadot or Kusama), categorized as ‘to improve,’ ‘good,’ or ‘very good.’ Polkadot and Kusama performance will be compared to Bitcoin.
-   Tooltips will offer simple explanations for all descriptions.
-   Projects will be categorized by ONE metrics, such as ‘Top 50,’ ‘Hot,’ or ‘New’ if available.
-   Other features as recommended by W3F.

#### 2. Data models / API specifications

Dot’s Journey core functionality revolves around three types of data models:

-   _Ecosystem Data in Vision:_ This includes data collected about projects within the Polkadot and Kusama ecosystems. The information is project-friendly and structured to provide details on founders, technology overviews, and narrative explanations of blockchains. It also features wordmarks and project summaries aimed at a non-crypto audience, making it easy for beginners to understand.

    While we display condensed information using cards, we may add more data properties as recommended by W3F that developers can use at a later stage via API (outside the scope of our proposal). Data will be available in English and Spanish.

-   _Price Data from Coingecko API:_ To provide real-time and accurate pricing information for Polkadot and Kusama tokens, Dot’s Journey integrates Coingecko’s API.
-   _User Profile and Feedback Data:_ Although a smaller part of the core data, Dot’s Journey stores feedback and basic profile information from users who engage with the app. This helps to personalize user experience and gather insights into how well they’re interacting with the Polkadot & Kusama ecosystems.

#### 3. An overview of the technology stack to be used

The tech stack for Dot’s Journey includes:

-   _Frontend_: Built with React 18.2 (or higher) for a highly responsive UI, custom CSS, minor UI features with Ant Design, and Polkadot.js for wallet integrations.
-   _Backend_: Node.js 18 (or higher), Firebase for authentication, Firestore as the main database, and Firebase Cloud Functions for backend logic. Firebase 10.12 or higher.
-   _Web3 Integrations_: Polkadot.js 11.2 (or higher) for wallet and network integration with Polkadot and Kusama.
-   _Deployment_: Firebase Hosting for the frontend.

#### 4. Core components, protocols, architecture, etc. to be deployed

-   Cloud-based Architecture: The web app is deployed on a cloud infrastructure (Google Cloud via Firebase), handling serverless backend tasks and ensuring scalability, security, and real-time updates. This setup also enables rapid deployment of updates and new features.
-   Modular Frontend-Backend: The web app follows a modular architecture where each component (Vision, Get started, My Account) operates independently but interacts with the core backend, allowing future scalability and easy implementation of new features.
-   Protocols: Standard REST APIs are used for communication between the frontend and backend.

#### 5. Others

We attach [ONE mockups](https://drive.google.com/file/d/1rCCHrvPYGfOOz19AqvzmC3IsGPoHQM3R/view?usp=sharing) in the dark version as a reference.

### Ecosystem Fit

Our project fits into the Polkadot and Kusama ecosystems by enhancing accessibility and visibility for both Spanish and English-speaking users and developers. By creating an onboarding platform we provide an entry point for those unfamiliar with Polkadot and Kusama, while also boosting the visibility of parachains, dapps, and wallets within the ecosystem.

**Who is your target audience?**

Our target audience includes:

-   _New users_ who are unfamiliar with crypto or blockchain, especially Spanish speakers.
-   _Parachain/dapp developers_ who seek better visibility in Spanish-speaking markets.
-   _Designers and UI/UX developers_ who can leverage our design to create more inclusive interfaces.
-   _Community managers and content creators_ looking for high-quality, localized resources to engage their audience.

**What need(s) does your project meet?**

Our project addresses key needs for localized, accessible content about Kusama and Polkadot for non-technical, Spanish-speaking users. We are solving three main issues:

1. _Lack of Spanish-language apps._ There is a shortage of user-friendly, localized apps that help users (especially non-technical users) onboard, understand wallets, interact with dapps, and engage with governance tools. This makes it difficult to quickly increase Polkadot and Kusama’s visibility to new users.
2. _Barrier for non-technical users._ The user journey in Polkadot and Kusama can be more complex than other networks. If English speakers find it challenging, non-English speaking communities have an even more challenging user journey due to the language barrier.
3. _Difficulty for new parachains and dapps to reach Spanish-speaking audiences._ Without proper translation and localized content, new projects struggle to engage effectively with this audience.

**How did you identify these needs?**

We identified these needs through:

-   _Research within the ecosystem and forum discussions_, where language barriers and the lack of Spanish-language apps were highlighted as issues to consider.
-   _Feedback from early users of our ONE prototype_, which confirmed a strong demand for simplified, user-friendly, localized content.

    **ONE Case Study:** In June 2024, we tested a prototype of ONE with Peruvian users. Of the feedback we received, 80% was incorporated into our MVP. Key findings include:

    -   100% of users rated ONE highly for its value and ease of understanding, especially those unfamiliar with crypto. Comments included: 'Complete and easy-to-understand information', 'No ads, quick access, and appealing icons', 'Compared to Binance and Coinmarketcap, for me ONE is original, I have not seen anything similar', 'The content and design is unique', 'In another application you only see buttons to start an operation without a small explanation', 'It flows more optimally', 'There are a variety of topics subject to everyone's interest', 'Information is more friendly', 'I have not seen other similar apps or pages before', 'It is excellent', 'It is well done', among others.
    -   The web app was easy to navigate for 100% of women who already use technology, and for 77% of users overall.
    -   ONE performed well for 82% of users.
    -   The Vision section caught the attention of users more familiar with technology.
    -   73% of users accessed the app via mobile, where our UX is particularly strong.

**Are there any other projects similar to yours in the Substrate/Polkadot/Kusama ecosystem or related ecosystems?**

We’ve identified several related projects, but none are available in Spanish:

-   _Polkadot & Kusama Guides_: Not available in Spanish. While similar to our “Get Started” section, the guides are in English and rely on routed articles. In contrast, Dot's Journey consolidates processes (wallets, staking, OpenGov, and identity) into a single, frictionless interface. We can complement the Polkadot and Kusama guides with access to the original sources by clicking on buttons and with translation of relevant written content that the user needs to consult.
-   _Parachains.info_: Polkadot & Kusama ecosystem projects directory. Not available in Spanish. It could be related to our Vision section, but it’s a more comprehensive project information solution with multiple pages (routes). However, Dot’s Journey Vision will use an embedded analytics variation to avoid routes (the user clicks, and the card appears), and with good performance. As an example, users can browse 5-6 cards (by clicking the Vision button) in about 20 seconds in ONE if they want to explore quickly.
-   _Awesome-DOT.com_: Central Library of Polkadot ecosystem. Not available in Spanish. It could be related to our Vision section, but it's not an app and the user has to click on a link and go to another page (usually not available in Spanish) to find out what they are looking for, which causes friction.
-   _Dotinsights_: A Polkadot & Kusama ecosystem map with a clean UI, not available in Spanish. Not available in Spanish. It could be related to our Vision section in terms of categorization. However, Dot’s Journey Vision focuses on simple protocol information details to enhance user comprehension, making it friendly for users unfamiliar with crypto, while Dotinsights caters more to community preferences. We see Dotinsights as a potential complement, using it as a reference for project listings while focusing on our strengths: subcategorization, qualitative information, and onboarding.

## Team :busts_in_silhouette:

### Team members

-   Giancarlo Bocanegra (CEO & CTO)
-   Jesús Higa (Head of Backend)
-   Giuliana Bocanegra (Researcher and Head of Design)
-   Diana López (Researcher and Head of Communication)

### Contact

-   **Contact Name:** Giancarlo Bocanegra
-   **Contact Email:** gian@e-dolphin.io
-   **Website:** https://e-dolphin.io/

### Legal Structure

-   **Registered Address:** Av. Los Próceres Cdra. 10 Mz G1 Lt 38, Santiago de Surco, Lima, Perú.
-   **Registered Legal Entity:** E-DOLPHIN S.A.C.

### Team's experience

e-Dolphin's team brings together a wide range of expertise, including blockchain engineering, software development, cloud computing, design, and user-centered processes, with a focus on empowering Spanish-speaking communities in Web3.

Gian is an expert in Full Stack Software Development and Blockchain Engineering, specializing in building decentralized applications (dApps). His expertise in system architecture design and cloud computing enables him to deploy and manage efficient cloud-based blockchain systems.

Jesús focuses on Backend Development and Cloud Infrastructure, building robust, secure, and scalable server-side applications. His expertise also includes blockchain and admin systems for web applications.

Giuliana combines design thinking and user-centered processes to ensure that products are both functional and visually appealing. She also conducts research on Polkadot & Kusama.

Diana simplifies complex technical information for end-users, while conducting research on Polkadot & Kusama. She leads documentation and communication efforts, ensuring clarity in how information is presented.

### Team Code Repos

-   https://github.com/eDolphinLabs
-   [ONE · Explora con Visión](https://one.e-dolphin.io/)

### Team LinkedIn Profiles

-   https://pe.linkedin.com/in/giancarlo-bocanegra-37ab08191?trk=org-employees
-   https://pe.linkedin.com/in/enmanuel-jes%C3%BAs-higa-mel%C3%A9ndez-a47395110?trk=org-employees
-   https://pe.linkedin.com/in/giuliana-bocanegra-3346171bb?trk=org-employees
-   https://pe.linkedin.com/in/diana-l-0a4aab224?trk=org-employees

### Team Github

-   https://github.com/giankbo
-   https://github.com/JesusHiga

## Development Roadmap :nut_and_bolt:

### Overview

-   **Total Estimated Duration:** 4 months
-   **Full-Time Equivalent (FTE):** 3 FTE, with team members contributing to various deliverables based on their skill set.
-   **Total Costs:** 29,250 USD
-   **DOT %:** 50%

### Milestone 1 Ecosystem Data and Vision

-   **Estimated duration:** 2 months
-   **FTE:** 3.5
-   **Costs:** 18,000 USD

|  Number | Deliverable                          | Specification                                                                                                                                                                                                                                                       |
| ------: | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                              | Apache 2.0                                                                                                                                                                                                                                                          |
| **0b.** | Documentation                        | We will provide both inline code documentation and a basic tutorial that explains how users can use Dot's Journey.                                                                                                                                                  |
| **0c.** | Testing and Testing Guide            | All key components will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                 |
| **0d.** | Docker                               | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone, except for documentation deliverables.                                                                                                                |
|     0e. | Article/ Guide                       | We will publish a First User Guide in both English and Spanish that explains Vision and includes an anatomy of the Vision card.                                                                                                                                     |
|      1. | Ecosystem Data                       | We will conduct research and develop scripts to gather and organize all information from the Polkadot and Kusama ecosystems regarding projects with tokens, supplying the Vision's cards (and other necessary data). This will be done in both English and Spanish. |
|      2. | Relay Chain Card Component           | Development of the Vision card for Polkadot and Kusama relay chains.                                                                                                                                                                                                |
|      3. | Parachains and dApps Card Component  | Development of the Vision card for parachains and dApps.                                                                                                                                                                                                            |
|      4. | Categorization Component             | Development of the logic to filter and map ecosystem projects according to the wireframe.                                                                                                                                                                           |
|      5. | Firestore for Qualitative Data       | Development of logic to perform CRUD operations on qualitative data from collections.                                                                                                                                                                               |
|      6. | Cloud Function for Quantitative Data | Development of logic to fetch prices and other quantitative data.                                                                                                                                                                                                   |
|      7. | Listing Channel                      | Enable a preliminary listing channel for projects in English, incorporating data in both English and Spanish.                                                                                                                                                       |
|      8. | Web dApp (Vision Part)               | Implement the first version of the web dApp, in both English and Spanish.                                                                                                                                                                                           |

### Milestone 2 Onboarding and Additional features

-   **Estimated Duration:** 2 months
-   **FTE:** 2.5
-   **Costs:** 11,250 USD

|  Number | Deliverable                                 | Specification                                                                                                                                                       |
| ------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                     | Apache 2.0                                                                                                                                                          |
| **0b.** | Documentation                               | We will provide inline code documentation and a basic tutorial explaining how users can complete onboarding and its benefits.                                       |
| **0c.** | Testing and Testing Guide                   | All key components will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone, except for documentation deliverables.                |
|     0e. | Article/ Guide                              | We will publish a Complete User Guide that explains the new sections in both English and Spanish.                                                                   |
|      1. | Onboarding Card Component                   | Development of the onboarding card component, including the wordmark, step description, link button, among others.                                                  |
|      2. | Step Grouping Component                     | Development of logic to display user steps based on user selection.                                                                                                 |
|      3. | Profile Editing and App Rating Component    | Development of the component for user profile editing and app rating, including CRUD operations in Firestore.                                                       |
|      4. | Guides and Articles in Spanish              | Translation of articles and guides into Spanish to be referenced in the app's onboarding cards (Spanish version), linked to their original English sources.         |
|      5. | Web2 and Web3 Login                         | Development of Web2 (Google) authentication logic and Web3 authentication via JSON Web Tokens (JWTs) on the server, integrated with Polkadot.js.                    |
|      6. | Web dApp (Get Started and My Account Part): | Implement the finalized version of the web dApp, in both English and Spanish.                                                                                       |

## Future Plans

Our main motivation is to make it easier for people to understand and adopt Polkadot and Kusama in Spanish and English. We believe that Dot's Journey will be very useful in achieving this. Additionally, by combining Dot's Journey with ONE (a web app focusing on all blockchains), we see this as a strategic opportunity to further drive ecosystem adoption.

Future developments:

-   Data Accessibility: providing ecosystem data through APIs to allow easy integration and usage for developers and projects.
-   Multilingual Support: expanding language options will make the platform more accessible to a wider audience.
-   Portfolio Viewer: tracking user projects and assets across the ecosystem.
-   Analytics: introducing deeper analytics features to give users actionable insights.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

-   _Work you have already done:_ For Dot's Journey, we have completed the wireframes and conducted research and analysis to create the proposal. As for ONE (where the idea for Dot's Journey originates), we have developed a PoC, design, and an MVP that is currently live. We have shared a summary of user experience testing based on Vision in the "ecosystem fit" section, along with some mockups.
-   _If there are any other teams who have already contributed (financially) to the project:_ No other teams have contributed financially; the e-Dolphin team built ONE independently.
-   _Previous grants you may have applied for:_ We have not applied for any other grants. However, we recently applied for an OpenGov sponsorship in Kusama for our ONE MVP (focused on Kusama, in Spanish, and without software development). Although we didn't secure the sponsorship due to missing KPIs and a limited track record in the ecosystem, this experience inspired us to create Dot's Journey, which we believe is a better fit. As an open-source solution, Dot's Journey incorporates both Polkadot and Kusama in English and Spanish, with a clear focus on software development.
