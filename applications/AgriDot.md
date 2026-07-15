# AgriDot - Web3 application for farmers

- **Team Name:** AgriDot
- **Payment Details:**
  - **DOT**: 1ukfa64f2WxSvJy8zwNC2RpSiajt2X1hsYQqBHmM9DTjT8R 
  - **Payment**: Fiat payment - Details shared on 8. January 2025 at 18:36 via email in the application below.
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1 🐣

## Project Overview :page_facing_up:
<div align="center">
<img width="400" alt="AgriDot" src="https://github.com/user-attachments/assets/fb233743-eb46-4015-8fcd-e6e06513dce4"></img>
  <h4 align="center"> Empowering farmers and beekeepers with blockchain-based NFT field management and community-driven knowledge sharing. </h4>
  <p align="center">
  </p>
  <h1></h1>
</div>

AgriDot is an innovative application tailored for farmers and beekeepers, leveraging blockchain technology to enhance agricultural management, increase farmer awareness, and foster community collaboration. The platform enables users many benefits such as:
- Creating and managing their fields as NFTs (Publicly/Privately)
- Field weather monitoring
- Pest tracking (Community shared)
- Sharing valuable agricultural knowledge through guides (Community shared)
- Crop origin proofs (For public fields)

Both Pests and Guides will also be NFT-based, minted into sovereign collections of AgriDot, moderated by our team. Farmers will be able to donate to other farmers if their Pest report or Guide proves to be useful.

AgriDot will be fully deployed on Polkadot, fully open source, transparent, and common good, eliminating the need for any databases storing user data. By introducing a novel use case and engaging a unique user base, this project adds to the diversity and utility of the Polkadot ecosystem.

### Project Details
This proposal presents a solution for integrating an agricultural use case into Polkadot. Currently, there are no other agricultural solutions on Polkadot for comparison. This solution fills a gap by introducing new niche use cases and a niche user base to Polkadot. The solution allows farmers to outsource useful information about their fields, about nearby pests and learn new practices and tips through guides.

What will Farmers be able to do in the early stage:
- Create a Public/Private field as NFT.
  - Public fields are publicly and transparently displayed on Blockchain (NFT explorers are able to easily display them), allowing for crop origin proofs, that farmers can distribute with their crops (Either place them on their products or show them to their business partners).
  - Private fields are privately created with NFT metadata hashed by SHA256 (NFT explorers are unable to display NFT metadata, it can only be seen through AgriDot by field owner). This option is available for farmers that want to use application privately.
- See forecast information for any added field (current, hourly & long-term).
- Add pest information for other Farmers with nearby fields.
- See pests, that occurred in nearby locations (Only displaying how far from the nearest field owned by the Farmer wanting to see this information (To keep privacy for private field owners). The maximal search distance can be customized by Farmer.
- Farmers can reward farmers, who publish useful pest information by voluntary donation.
- Add useful agricultural guides (Useful practices, crop cultivation & more).
- See agricultural guides.
- Farmers can reward farmers, who publish useful guides by giving them "like" by voluntary donation. The guides have a simple ranking system and farmers can sort guides by most liked or most recent.
- Farmers can report malicious guides and moderators (Our team) will be able to remove them (Burn the asset on behalf of AgriDot, as all guides and pests are minted under a unified collection (one collection for all pests and one collection for all guides)).
- Farmers can create crop origin proofs by creating crop NFT that is associated with public field. These proofs can help farmers build transparency and trust from their business partners.

Application advantages compared to traditional Web2 agriculture applications:
- No database with personal details. Everything is stored on the Blockchain transparently.
- Verifiable & immutable crop origin proofs.
- Simple, yet useful blockchain-based Pest report system.

**UI design proposal**

The UI of the application is designed to be simple to use and to abstract complexity anywhere possible to provide smooth UX for Farmers. Everything Blockchain/Polkadot related contains simple to understand explanation/guide Farmers can easily follow. Below is an example of a login screen & field overview screen.

<img width="609" alt="UI" src="https://github.com/user-attachments/assets/67fbfeaf-7017-4de6-b4a9-274c3e934e57"></img>

We have prepared design mockups with simple workflows for the Web3 version in [Figma - here](https://www.figma.com/design/WR2ZtOiYJcq9cBZvRzH4l9/AgriDot). This Figma project also contains the design of our [current PoC](https://github.com/kacena123/aurora-borealis) Web2 solution for comparison. We believe, that the improvement in UI is substantial.

**Data Models**

The application utilizes [Kusama Asset Hub](https://parachains.info/details/assethub) as the chain for NFTs (As minting an NFT is a matter of cents on Kusama) and pallet called "NFTs" for concrete operations with collections and NFTs. To query the metadata of NFTs associated with the wallet address of concrete user application uses [Subsquid indexer](https://parachains.info/details/subsquid). The queries for [Subsquid indexer](https://parachains.info/details/subsquid) are created by Kodadot's package called [Uniquery](https://github.com/kodadot/uniquery).

Below we demonstrate a simple use case of application cold startup, field creation, and crop origin proof creation.

![agridot field and crop sequential](https://github.com/user-attachments/assets/ac82d2a0-76db-4789-beb3-4bf7af495b02)

**Technology stack**
- React native
- PolkadotJS
- NodeJS
- Typescript
- Subsquid
- Kodadot Uniquery
- NFTs pallet
  
### Ecosystem Fit

Currently, there are no similar projects within the Substrate/Polkadot/Kusama ecosystem that focus on agriculture and beekeeping using blockchain technology. This distinctiveness positions AgriDot as a pioneering project in this domain.

There are some agricultural projects in other blockchain ecosystems, however, none have successfully integrated the unique features of NFTs and decentralized community collaboration in the way AgriDot aims to achieve.

While the main target audience of this project are Farmers and Beekeepers, other users may find the availability of useful Guides and even Pest reports (If they have small fields at home) very useful. While benefits, that AgriDot gains by enhancing Blockchain technology are substantial, the farmers are often not that technical and need to be shown, that the blockchain can be useful for them. This is why the application will notify them, that the data is transparently stored on the Polkadot blockchain and that the application does not collect nor will need to collect any data from them.

The application bridges an important gap in niche user base and niche use case, that has not yet been explored on Polkadot by anyone.

We have created a survey that was sent to 300 small and medium Agricultural businesses in Slovakia to gain insight on whether Farmers will be open to such an application and if so, if they will be willing to accept, that it will use Blockchain to enhance transparency. We received an overwhelming amount of responses from 167 farmers, that an application like this is very needed and they also provided us with feedback as to what should the application contain. We share the experiment results below.

![chart1](https://github.com/user-attachments/assets/f42530a8-2bdc-458d-8ebd-6302f3e47316)

First, we asked Farmers which listed features would they like to see in the ideal Agricultural application. The most useful for them is by far the weather monitoring. They also highly ranked Pest information and crop origin proofs. Based on this we then designed the application to fit most of the Farmer's needs.

![chart2](https://github.com/user-attachments/assets/441dfc2c-9675-4cf6-bfab-bf67e0be4b38)

In the second question, we asked Farmers if they would be open to Blockchain-based application that would enhance transparency of how their data is handled. More than 120 farmers stated, that they are open to this innovation and the rest of the farmers stated, that they are not open or that they are not sure which means, that the Farmers, that stated that they are not sure could change their mind once they try the application.

### Related work

**AgriApp** 

AgriApp is an Indian Web2 application for farmers - [Web](https://agriapp.com/), [Google Play](https://play.google.com/store/apps/details?id=com.criyagen&hl=en_US). It offers a range of features, including crop monitoring, advice on fertilization, irrigation, pest control, soil analysis, and weather forecasting. It also includes tools for managing work schedules, planning maintenance, and tracking costs and revenues. Additionally, the app features a store where users can purchase various pesticide products and fertilizers. Some advanced features are available only in paid versions of the app, which entails additional costs. Given the app's extensive functionality, it may be complex for new users, and fully utilizing its features may require some time to learn compared to AgriDot which is designed to focus on user-friendliness, meaning that even new users can quickly navigate and use the application without extensive training. Another downside is, that AgriApp does not have open-source code and users are unable to verify if their data is not used for malicious practices or sold compared to AgriDot which doesn't store any user data and has fully open-source code.

**Agrichain**

The AgriChain Web3 application is a tool aimed at improving transparency and efficiency in the agricultural sector through blockchain technology - [Web](https://agrichain.com/
), [Google Play](https://play.google.com/store/apps/details?id=com.agrichain&hl=sk
), [Research article](https://link.springer.com/chapter/10.1007/978-3-030-96527-3_1). Its main advantage is the ability to track every stage of the supply chain, which allows accurate recording of transactions and the origin of products. In this way, the application tries to increase trust in the quality and safety of food.
AgriChain's user interface is intuitive and easy to use, allowing even less experienced users to effectively manage their operations. The application also provides analytical tools to optimize production and manage inventory and payments through smart contracts.
Agrichain primarily targets large farmers and large supply chains. Smaller farmers and beekeepers may find it much more difficult and costly to implement AgriChain into their production. Agrichain places great emphasis on supply chain efficiency and transparency and focuses mainly on management, while not supporting other functions such as weather, pest monitoring and also community functions between individual farmers compared to AgriDot.

**AgriDigital**

AgriDigital Onfarm is a Web3 application designed for modern farmers that simplifies and optimizes the management of agricultural production - [Web](https://www.agridigital.io/), [Google Play](https://play.google.com/store/apps/details?id=io.waypath.app&hl=sk&gl=US). It is part of the AgriDigital ecosystem, which focuses on the digitization and streamlining of Agricultural business. The application allows farmers to manage and monitor the warehouse and also manage the sale of stocks of cultivated crops. It enables detailed management of landlord distributions and profit shares, thus ensuring transparency in the distribution of income. AgriDigital Onfarm generates detailed reports on total yield per specific field, as well as gross yield at the farm and individual field levels, enabling performance analysis at various levels. It has an intuitive interface, which makes it easy to use even for less technical users. Its main goal is to increase the efficiency and performance of farms using analytical tools. The main downside of AgriDigital compared to AgriDot is, that AgriDigital is not available in all countries and its services are not free. The AgriDigital application focuses more on managing crop sales and farmer finances. It does not offer functionality such as weather monitoring, or pest control and does not support a community system.

## Team :busts_in_silhouette:

### Team members

- Katarína Valová - Core developer, Master's degree student Faculty of Informatics and Information Technologies STU in Bratislava, Slovakia

### Contact

- **Contact Name:** Katarína Valová
- **Contact Email:** valova.katarin@gmail.com

### Legal Structure

- **Registered Address:** Stošická 472, Liptovský Mikuláš 03104, Slovak Republic
- **Registered Legal Entity:** Katarína Valová

### Team's experience

Katarína is studying Master's degree at the Faculty of Informatics and Information Technologies STU in Bratislava, her Bachelor's thesis was about creating application meant to ease farmers' lives by providing them key information about their fields and pests. Katarína was recently introduced to Web3 by her new university Master's thesis supervisor [Dušan](https://github.com/dudo50). She found out, that she is very passionate about transforming Web2 applications into Web3 applications, making them much less resource-dependent and more transparent. Katarína found passion in writing research articles about this topic and participated in the local university conference. Katarína also sees this as an opportunity to introduce a new niche use case to Polkadot and she is very excited to explore this ecosystem further and expose it to farmers. 

### Team Code Repos

- https://github.com/kacena123/aurora-borealis

### Team Github Profiles

- https://github.com/kacena123

### Team LinkedIn Profiles

- https://www.linkedin.com/in/katka-val/

### Advisors
Ecosystem developers who agreed to provide advisory help during the project implementation phase:

- Dudo50 founder of ParaSpell (Interoperability solutions)

## Development Status :open_book:

Currently, there is a PoC called [Aurora Borealis](https://github.com/kacena123/aurora-borealis) developed and ready to be used as a Web2 application in Kotlin. The enhanced version will be programmed in a more widely used React Native framework, and have a complete design overhaul and Web3 migration.

We have created Figma mockups of how would this Web2 to Web3 migration look. They were mentioned in the project details but we will link them here too - [figma link](https://www.figma.com/design/WR2ZtOiYJcq9cBZvRzH4l9/AgriDot).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 10,000 USD
- **DOT %:** 50%

### Milestone 1 - Working Web3 solution - AgriDot

- **Estimated duration:** 4 month
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** on how to interact with the application from registration to interaction with the blockchain. |
| **0c.** | Testing and Testing Guide | We will provide unit tests for core application functionality. Guide on how to launch these tests will be mentioned in the README.md |
| **0d.** | Docker | We will provide a docker file that will let you try all the implemented functionality mentioned in the milestone description. |
| 0e. | Article | We will provide a summary article that will mention all the innovations brought during the development of AgriDot. This article will be published on [Medium](https://medium.com/). |
| 1.a | Fields as NFTs (Private) | We will implement functionality that allows farmers to mint their fields as NFTs (via "[NFTs](https://wiki.polkadot.network/docs/learn-nft-pallets#nfts-pallet)" pallet) in a secure, hashed way (in-app hashed by AgriDot key phrase (each NFT will be checked for the correspondation between signed wallet address and owner of NFT before being decoded and displayed (as additional protection step))) so only AgriDot will be able to decode them and display them to farmers who own them. |
| 1.b | Fields as NFTs (Public) | We will implement functionality that allows farmers to mint their fields (via "[NFTs](https://wiki.polkadot.network/docs/learn-nft-pallets#nfts-pallet)" pallet) in a public way, so any NFT explorer will be able to display them (NFTs will have a standard format (name, image, metadata(containing field coordinates) )). These fields will then be able to be used with "4. Crop origin proofs" allowing farmers to create a proof of crop origin that will be linked to their public field. |
| 1.c | See the weather for your NFT fields | We will implement functionality that lets you query the coordinates of your NFT fields and display weather for the upcoming period (This feature will use [Kodadot uniquery](https://github.com/kodadot/uniquery) package for creating queries that will be used with [Subsquid indexer](https://www.sqd.dev/). Weather for farmer's NFTs will be queried from [Open-Meteo](https://open-meteo.com/) open-source API (or else if found better)) |
| 2.a | Pests as NFTs | We will implement Pest functionality. Pests will be minted to a unified collection (via "[NFTs](https://wiki.polkadot.network/docs/learn-nft-pallets#nfts-pallet)" pallet), with coordination of the Field where it appeared (Coordinate will be private (Hashed in-app by AgriDot key phrase)), farmers will only know, that a certain Pest appeared X km away from their field (They will be able to set how far they wish to monitor pests) |
| 2.b | Donation system for Pest reporters | We will implement a donation system for pest reporters. Farmers that actively report Pests and are useful to the community can receive donations from Farmers who are willing to thank them for this information (Potentially saving their crops & giving them the ability to prepare for Pest arrival well ahead). This feature will use a standard transfer pallet. |
| 3.a | Guides as NFTs | We will implement guides to be mintable as NFTs into the unified collection (via "[NFTs](https://wiki.polkadot.network/docs/learn-nft-pallets#nfts-pallet)" pallet). Guides allow farmers to share their knowledge with other farmers (They can range from DIY guides to crop-growing or animal caretaking guides). |
| 3.b | Rating and donation system for Guides | We will implement functionality that allows farmers to provide guide rating by small donation to Farmer who created the Guide. The application will display the amount of "Likes"(Donations) and a report button (So malicious guides can be removed by administrators). This functionality requires a database, however only for 2 anonymous details (Concrete guide NFT ID & amount of times, that farmers donated (Not saving who (which address donated). The database will only increase like a counter once the donation is finalized in the block also). This feature will use a standard transfer pallet. |
| 4. | Crop origin proofs | We will implement a feature that allows farmers to mint NFTs of crops (via "[NFTs](https://wiki.polkadot.network/docs/learn-nft-pallets#nfts-pallet)" pallet), that were cultivated on field that farmer minted. Farmer will then be able to use these NFTs as proof of crop origin. The application will generate a QR code for NFT explorer that will contain details about the crop and its origin field (If the field was minted as Public). |
| 5.a | Comprehensive documentation I | We will provide comprehensive documentation for developers - on how to start the application and different functions overview (Via GitHub pages) |
| 5.b | Comprehensive documentation II | We will provide comprehensive documentation for users - on how to create a Polkadot wallet, how to use the application, and a basic application overview (Via Github pages) |


## Future Plans

The application is and will be a common good, further living from donations made by farmers - We will implement voluntary donations for certain features so they can support the application if they would like to. As server costs will be minimal (Due to the lack of a complex database & full use of on-chain storage) this shouldn't be an issue to achieve. The application will strictly not contain any ads. As for innovations, we would like to focus on a few key areas in the Polkadot network further on: 
- Adding support for managing animals (Same way, that fields are managed) and adding proofs of origin for products that are produced by animals/from animals.
- Implementing schedules feature (To allow farmers to create simple schedules to structure their work)
- Adding support for notifications regarding Pests or Weather (It can help farmers notice problems faster)
- Simple crop/products marketplace
- Creating a simple on-chain storage pallet (To further enhance Guides, allowing for larger texts and sub-sectioning).
- Building Parachain focused on Farmers and Agriculture (There are many great use cases that can help ease farmers' lives).

These innovations will drive the next wave of digital transformation in agriculture.

As for gaining users, we will notify the contacted farmers about the application & we plan to contact farmers in other states through agriculture festivals and 
agricultural technology exhibitions.

## Referral Program :moneybag:

- **Referrer:** [Dudo50](https://github.com/dudo50)
- **Payment Address:** 139zHfuPsG62FKQtwjxMwqZAwPNZG6BooUWgF6L3LWYLUu3z (Polkadot)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation by the university thesis supervisor.

The main problem Farmers seem to have with Blockchain is a lack of trust in this technology. We would like to prove them otherwise and explain to them in the simplest way possible, that this technology is very useful in various use cases that we wish to explore and bring to them throughout their (and our) journey with AgriDot.
