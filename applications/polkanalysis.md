# Polkanalysis

- **Team Name:** Apolixit
- **Payment Details:**
  - **DOT:** 16aP3oTaD7oQ6qmxU6fDAi7NWUB7knqH6UsWbwjnAhvRSxzS
  - **Payment:** If fiat payment is available, I will send you an email once my grant is approved.
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/2430#issuecomment-3447738002)

## Project Overview :page_facing_up:

Polkanalysis is a Substrate-based blockchain explorer (I should call it "Yet another explorer" :P).
It’s a web application and an API that combines data directly retrieved from the chain with a background service that also performs on-chain queries to populate a database.

The goal is to gather all useful data and display it in a highly synthesized way. I aim for Polkanalysis to be a project that allows non-technical users to explore the ecosystem and gain a broad overview with ease. Additionally, the idea is to display not only the current data but also historical data.

The project is currently connected to Polkadot and PeopleChain. I plan to release an initial version with these two chains before expanding to others.

### Overview

Polkanalysis allows users to monitor both real-time and historical data on a Substrate-based blockchain. It also includes a search engine to query blocks, events, extrinsics, and various key information based on the pallets that compose the blockchain.

The project has evolved significantly during its development.
Polkanalysis is entirely built on the .NET stack, which is possible thanks to the creation of the Substrate Gaming organization by Cedric DECOSTER (formerly on Ajuna's repositories) and serves as a reference point for .NET developers interested in the Polkadot ecosystem.
I believe it is essential to support the ecosystem in languages and frameworks other than TypeScript, to increase the number of potential developers contributing to Substrate's development.

Initially, this was a side project to improve my skills and dive into the Substrate ecosystem. Over time, the project became more structured and evolved into an application that I now intend to take to production.

### Project Details

The first design of the application is available on [Figma here](https://www.figma.com/proto/uWqAxS1gVg23QB3DOirfXZ/Polkanalysis-App?node-id=0-1&t=sPOqPfJY09CVaRj5-1).

I might hire a UX/UI designer for future improvements, as design is not my core expertise.

The design system is based on [FluentUI Blazor](https://www.fluentui-blazor.net).

The exposed data models are:
  - For the **Infrastructure** (retrieving data from different blockchains), the same classes used in the Polkadot SDK, meaning we retain the same properties and structure types as in Rust.
  - For the **API**, it consists of simple DTOs (Data Transfer Objects) aggregating data from the infrastructure. For example, an `AccountDto` contains details such as the user's name, twitter, email, DOT balance (free, reserved, etc.), Identicon, and account type (validator, nominator, technical committee, etc.).

This project is entirely built in C# .NET with a clean architecture.

  ### 1. Technical Details: :
  - **Language/Framework**: C# 12 / .NET 8
  - **Web application**: [Blazor](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor)
  - **Mobile application (not yet implemented)**: [.NET MAUI](https://dotnet.microsoft.com/en-us/apps/maui)
  - **Database**: PostgreSQL
  - **ORM**: [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core)
  - **Data model validation**: [FluentValidation](https://docs.fluentvalidation.net/en/latest/) – used primarily to validate input classes before they are processed by the application.

  ### 2. Architecture
  Here is the "big picture" architecture diagram, which can also be found [on IcePanel](https://s.icepanel.io/7HTG6lgfZPrXYU/Sfwv).

  ![image](https://bl6pap003files.storage.live.com/y4ms4lR7my0aN7vwxKlCiWROidSGcbEQ4OyB2B54I5CjglCPuz-qWuIkfiJUQBzCK2VTqkNGt1bcg4P9qMAiTmh0jlzQHKu-zP90NNBW0qNOrXZ0P8nTIlVu0VkBvr4feUfnriysRgl0FW3JGRxOfQp4WLSIFcGVwLPQSM4EC1uEspu_6D-yxvQk4tZj6fmoJMUQx6bTYmCynQK9nJX25Yb9AvbaV6rLRFQDEcEcoOhHOc?encodeFailures=1&width=1400&height=1134)

  #### 2.a Frontend Projects:

  | Project Name       | Details                                                                                              |
  |--------------------|------------------------------------------------------------------------------------------------------|
  | **API**            | Exposes endpoints for a given blockchain, providing data on blocks, events, extrinsics, metadata, etc. |
  | **Web application**| Displays the information provided by the API and allows for comprehensive searches.                   |
  | **Front shared component** | Reusable Razor components shared between Blazor (Web app) and MAUI (Mobile app).              |
  | **Worker**         | A background service that fetches data from the blockchain and stores it in the database for searches and aggregations. |

  The **Web application**, **Worker**, and **API** components are duplicated for each blockchain. Each project is parameterized with the name of the target blockchain. As a result, we will have X * 3 projects to deploy.

  #### 2.b Domain Project:

  | Project Name | Details                                                                                                |
  |--------------|--------------------------------------------------------------------------------------------------------|
  | **Domain**   | Handles all "business logic," fetching data (from the blockchain or the database) and returning processed classes. |

  The Domain is the entry point called by all frontend components (API, Web App, Worker), ensuring that business logic is centralized.

  #### 2.c Infrastructure Projects:

  | Project Name              | Details                                                                                              |
  |---------------------------|------------------------------------------------------------------------------------------------------|
  | **Infrastructure Blockchain** | Retrieves all relevant blockchain data (Pallets, RuntimeCalls, RPCs, etc.) and maps them to Polkanalysis classes. |
  | **Infrastructure Database**   | Retrieves information from the database, populated by the **Worker** project.                      |

  #### 2.c Generated Projects:

  | Project Name                | Details                                                                                           |
  |-----------------------------|---------------------------------------------------------------------------------------------------|
  | **Polkadot NET API Ext**     | Generated by the Substrate Toolchain to communicate with the Polkadot blockchain.                 |
  | **PeopleChain NET API Ext**  | Generated by the Substrate Toolchain to communicate with the PeopleChain parachain.                |

  These **NET API Ext** projects are generated using my fork of the [Substrate.NET.Toolchain](https://github.com/Apolixit/Substrate.NET.Toolchain) from [SubstrateGaming](https://github.com/SubstrateGaming/Substrate.NET.Toolchain). My fork generates a classes for every versions, allowing for queries from the genesis hash.

  #### 2.d Utils Projects:

  | Project Name     | Details                                                                                                   |
  |------------------|-----------------------------------------------------------------------------------------------------------|
  | **Backend tool**  | Internal tool for dynamically generating code and automating repetitive tasks. It generates SQL tables and associated unit tests for a given event. |

  This allows frontend components to perform advanced searches, such as filtering transactions above a certain value or within a specified range. However, some events are too complex or may change across spec versions, so this can't be generalized.

The components to be deployed (I’ve started deploying them on Azure) are:
  - API (one instance per blockchain)
  - Web application (one instance per blockchain)
  - Background worker (one instance per blockchain)
  - Database (currently on Azure, though I am exploring cost-effective alternatives).

Polkanalysis will not allow interaction with the blockchain.

Users will not be able to create an identity or pools through the application.
  The focus is on retrieving and aggregating data, with no need for users to log in or validate extrinsics.


### Ecosystem Fit


First of all, Polkanalysis is entirely based on the .NET ecosystem, which means that I don't use [PolkadotJS API](https://polkadot.js.org/docs/api/).
A significant part of the development could have been simplified if I had used it.
However, the goal of this project is precisely to grow, stabilize, and develop the C# .NET layer within the Substrate ecosystem.
Indeed, C# has been one of the top 5 most-used backend programming languages for several years. It has gained significant popularity through its use in Unity. Today, Polkadot focuses its marketing efforts within the .NET ecosystem through this compatibility with Unity (notably with the [Polkadot SDK for Unity](https://assetstore.unity.com/packages/decentralization/infrastructure/polkadot-sdk-for-unity-273535)). But with Polkanalysis, I aim to provide another development path with the web developpment that could also attract many developers.
It is now possible to build an entire backend to communicate with a relay chain or parachain in C#, to develop an API, or even a web and mobile application using [Blazor](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor).
Regarding mobile applications, this is precisely what Rosta did with [PlutoWallet](https://github.com/RostislavLitovkin/PlutoWallet).

The Polkanalysis web application & API serve as the final showcase, but it mainly proves that Polkadot’s C# .NET ecosystem is becoming mature and stable enough for production-ready projects.


My audience is people who wish to get metrics on blockchains.
I also want Polkanalysis to be clear and easy to use so that newcomers can understand the exposed data without difficulty.

Blockchain data is public, but it is not always easy to query or to obtain precise, interesting, and clear data. Polkanalysis aims to meet this need by offering a clear and simple-to-use application, along with an API for developers who want to easily access this data.

Initially, I identified these needs myself, as I was quite lost with the complexity of Polkadot when I first encountered it. It requires significant time spent reading the documentation to get a general understanding. I want to simplify access to the data and explain what each element or functionality on the blockchain is used for.

There are several explorers in the Substrate ecosystem, with Subscan being the most well-known.
  Polkanalysis does not aim to compete with Subscan, which is already well-established in the ecosystem. My goal is to display fewer technical details and more visual data. Specifically, to present information in a clearer, more tangible way, similar to what [Polkadot Staking](https://staking.polkadot.cloud/#/overview) or [DotLake Dash](https://data.parity.io/home) are doing.

Othesr explorers :
 - [Statescan](https://www.statescan.io/)
 - [Polkastats](https://polkastats.io/)
 - [Calamar](https://calamar.app/)

## Team :busts_in_silhouette:

### Team members

- Name of team leader : Apolixit
- Names of team members

### Contact

- **Contact Name:** [Romain FRIOT](https://github.com/Apolixit/)
- **Contact Email:** friotromain@gmail.com

### Legal Structure

- **Registered Address:** 14 rue Emile Raspail, 94110 ARCUEIL, FRANCE
- **Registered Legal Entity:** None

### Team's experience

I would like to give a brief history of how the project was born and introduce myself.
My name is Romain, and I have been a .NET developer for about ten years.
At the end of 2021, I started wanting to develop in a blockchain ecosystem, which coincided with the launch of the slot auctions on Polkadot. The highly technical side of the Substrate ecosystem quickly caught my interest. At that time, I wondered if it was possible to find .NET resources, and I quickly found the first pieces with DOTMog, a video game developed with Unity in C#, which led to the creation of Ajuna.
I contacted Cedric (Darkfriend77) and started using the first layers he developed (Substrate.NET.API and Substrate.NET.Toolchain).
At that point, I developed my first small project, a POC called [MoneyPot.NET](https://github.com/Apolixit/MoneyPot.NET), by creating a custom pallet and a Blazor front end.
This led to the creation of Substrate Gaming, and I became, along with Cedric and Rosta, one of the developers maintaining and developing this organization.

In November 2023, we participated in the Polkadot Hackathon Winter 2023 and won first place by creating [Hexalem](https://github.com/SubstrateGaming/Hexalem), a multiplayer strategy game built on a hexagonal grid with custom Substrate pallets handling our backend logic.

As for Polkanalysis, the development of the project started two years ago. It was initially a side project, allowing me to develop a concrete application based on the Substrate Gaming organization. Over time, the project has become more and more refined, and it is now very close to a first version that can be deployed in production.

### Team Code Repos

- https://github.com/Apolixit/Polkanalysis
- https://github.com/Apolixit/MoneyPot.NET
- https://github.com/SubstrateGaming
- https://github.com/SubstrateGaming/Hexalem

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/romain-friot-7391b0154/


## Development Status :open_book:

The development of Polkanalysis is already quite advanced compared to the first milestone.
You can [check the repo here](https://github.com/Apolixit/Polkanalysis).

## Development Roadmap :nut_and_bolt:

At present, the entirety of the first milestone has already been implemented.
However, the project is not yet stable enough for production.

The goal is to deliver a first production-ready version by **January 2025**.
I explain why I am applying for a grant now in the **Additional Information** section.

### Overview

- **Total Estimated Duration:** 2 years, but only in free time
- **Full-Time Equivalent (FTE):**  0.4 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** Percentage of Total Costs to be paid in (vested) DOT: 50%

### Milestone 1 - First release - Web application / Rest API / Background worker on Polkadot and PeopleChain

- **Estimated duration from now:** 4 months
- **FTE:**  1
- **Costs:** 30,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | The Polkanalysis code is documented as much as possible to be understandable and reusable by other developers. Each method includes a brief summary to explain its purpose. Each project has its own Readme file. |
| **0c.** | Testing and Testing Guide | Improve the code coverage of the application from 60% to 80%. |
| **0d.** | Docker | We will provide a docker compose file that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Code quality | The project is analyzed with each build on [SonarCloud](https://sonarcloud.io/project/overview?id=Apolixit_Polkanalysis) to ensure clean, stable, and consistent code. |
| 1. | **Web application** | |
| 1.a | Block / events / extrinsics (search & display) | Pages to display details, along with a search engine to look up various blocks, events, and extrinsics. |
| 1.b | Validators & Nominators (search & display) | Search engine and detailed page for validators & nominators. |
| 1.c | Pools (search & display) | Search engine and detailed page for nomination pools |
| 1.d | Accounts (search & display) | Search engine and detailed pages for blockchain accounts, displaying transactions and identity information. |
| 1.e | Runtime & Metadata | Listing of the different Metadata + SpecVersion. For each, details of the number of calls / events / storage / constants. |
| 1.f | SpecVersion comparison | Comparison of two different versions to identify changes. |
| 2. | **Web API** | A REST API accessible by everyone to display domain-related information |
| 2.a | Enpoint documentation | Documentation for all endpoints to facilitate usage for external callers. |
| 2.b | Playwright API test | Writing Playwright tests for all API endpoints (End-to-End tests). |
| 3. | **Worker** | A background worker that queries the blockchain and inserts useful data into a database. |
| 3.a | Blockchain adaptation | The background worker has only been tested on Polkadot. I need to slightly refactor it to adapt to PeopleChain (and others in the future) because the functions to call may vary from one blockchain to another. |
| 3.b | Re-run worker | Handle, with a more efficient way, the re launch of the worker (if something failed, or need to index something new). I need to avoid to remove / insert all the data again, but just be focused on the new data that did not exist yet into the database |
| 4. | Domain | The domain is the project that contains the business logic. Here are the details below: |
| 4.a | Performance improvement | Some use cases take too long to respond (approximately 5 seconds). I need to parallelize my asynchronous calls and test that each use case responds in less than 2 seconds (ideally less) |
| 4.b | Cache generalisation | I have set up Redis for some use cases, but I need to generalize it across all use cases (where it makes sense) |
| 5. | **Infrastructure** | Exposes the different Polkadot pallets I want to integrate into Polkanalysis. For Polkadot, I expose the following pallets: Auctions, Autorship, Babe, Balances, Crowdloan, Identity (for older versions, newer versions are handled by PeopleChain below), NominationPools, Registrar, Session, Staking, System, Timestamp. |
| 5.a | Delegate to other chain | Improve the system that delegates certain calls to parachains like PeopleChain. I am not taking into account the block time, and my calls to PeopleChain are inconsistent.|
| 6. | **New spec version version** | When a new spec version is deployed, I still have too much manual work. I need to develop batches to automate this process, specifically generating the new version, compiling it, and producing the associated .dll file. |

### Milestone 0 - Works that already be done

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT (link to [this commit](https://github.com/Apolixit/Polkanalysis/pull/37/commits/368923f840c48c58f2bb17d7a9cfea81573dc63b)) |
| **0b.** | Documentation | The Polkanalysis code is documented as much as possible to be understandable and reusable by other developers. Each method includes a brief summary to explain its purpose. Each project has its own Readme file. |
| **0c.** | Testing and Testing Guide | The code coverage of the application is 60%. There is a mix of unit tests and integration tests (which directly call the node). |
| **0d.** | Docker | We will provide a docker compose file that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Code quality | The project is analyzed with each build on [SonarCloud](https://sonarcloud.io/project/overview?id=Apolixit_Polkanalysis) to ensure clean, stable, and consistent code. |
| **0f.** | .NET Aspire | In addition to the docker compose file, for local testing purposes, I will add a .NET Aspire project that allows launching the applications that make up Polkanalysis from a dashboard and aggregating logs/metrics/traces within a single application. |
| 1. | Web application | A web application developed with Blazor to display information about blocks, events, extrinsics, account details, metadata and spec version, nominators/validators/nomination pools. |
| 2. | Web API | A REST API accessible by everyone to display domain-related information (see details in point 5). |
| 3. | Worker | A background worker that queries the blockchain and inserts useful data into a database. |
| 4. | Domain | The domain is the project that contains the business logic. Here are the details below: |
| 4.a | **Explorer Service** | |
| 4.a.i | Block details | For a given block, returns key information (block hash, metadata version, block validator), the number of events, extrinsics, and associated logs. |
| 4.a.ii | Block listing | Returns information on the last X blocks. |
| 4.a.iii | Events | Returns details of events linked to a block or extrinsic. For each event, displays the module, method, and associated parameters in JSON format. |
| 4.a.iv | Extrinsics | Returns details of the extrinsics linked to a block. For each extrinsic, displays the module, method, and parameters in JSON format. |
| 4.a.v | Logs | Returns details of the logs associated with a block. |
| 4.a.vi | Date | Returns the date of a block. |
| 4.b | **Account service** | |
| 4.b.i | Account address | Returns address information (public key, substrate address) and identity for a given account. |
| 4.b.ii | Account type | Returns a list that characterizes whether the account is a nominator, validator, in a pool, is a root account, etc. |
| 4.b.iii | Balances | Returns free, frozen, reserved tokens, tokens locked in pools or crowdloans. |
| 4.b.iv | Account details | Returns identity, balances, transaction history for a given account. |
| 4.c | **Financial service** | |
| 4.c.i | Account transactions | Returns a list of an account's transactions (since its creation or within a given period). |
| 4.c.ii | Global transactions | Returns a list of all transactions on the blockchain (since its creation or within a given period). This allows the calculation of volume. |
| 4.d | **Runtime service** | |
| 4.d.i | Version details | For a given spec version, returns details of each pallet (calls/events/constants/errors). |
| 4.d.ii | Versions listing | Displays all spec versions of a blockchain, with the duration of this version, the number of pallets it contains, etc. |
| 4.d.iii | Versions comparison | Compares the metadata of two spec versions and analyzes the elements that have changed between these versions. |
| 4.e | **Parachain service** | |
| 4.e.i | Chain details | Displays information on a Substrate chain. |
| 4.f | **Search service** | |
| 4.f.i | Search | Global search engine. Allows searching block numbers, block hashes, accounts (via address or identity), pools. |
| 4.g | **Staking service** | |
| 4.g.i | Validators listing | Returns a list of all validators (active and inactive). |
| 4.g.ii | Validator details | Returns information about a given validator. |
| 4.g.iii | Validator rewards | Returns the rewards for each era for a given validator. |
| 4.g.iv | Nominators bounded to validator | Returns a list of nominators who have voted for a given validator. |
| 4.g.v | Nominators listing | Returns a list of nominators. |
| 4.g.vi | Nominator details | Returns information about a nominator. |
| 4.g.vii | Pools listing | Returns a list of active nomination pools. |
| 4.g.viii | Pool detail | Returns details of a pool. |
| 4.g.ix | Payee account | Returns the reward account associated with a given stash account. |
| 4.g.x | Era | Returns information from a given era. |
| 4.h | **Other services** | |
| 4.h.i | Search blocks | Queries the database to search for blocks (previously saved by the Workers project). This is useful for displaying results in a table in the web app. |
| 4.h.ii | Search events | Same as search blocks but for events. |
| 4.h.iii | Search extrinsics | Same as search blocks but for extrinsics. |
| 4.h.iv | Fetch price | Calls CoinGecko to fetch the current blockchain price and insert it into the database. |
| 4.i | **Helpers** | |
| 4.i.i | Caching | All of these use cases can be saved into a Redis distributed cache. |
| 5. | Polkadot Infrastructure | Exposes the different Polkadot pallets I want to integrate into Polkanalysis. For Polkadot, I expose the following pallets: Auctions, Autorship, Babe, Balances, Crowdloan, Identity (for older versions, newer versions are handled by PeopleChain below), NominationPools, Registrar, Session, Staking, System, Timestamp. |
| 5.a | Polkadot mapping | Polkadot storage is retrieved directly from the project generated by my fork of [Substrate.NET.Toolchain](https://github.com/Apolixit/Substrate.NET.Toolchain). However, I still need to map all the different versions into my own classes (see point 1 of the section __technical difficulties__). |
| 6. | PeopleChain Infrastructure | Exposes the different PeopleChain pallets I want to integrate into Polkanalysis. For PeopleChain, I expose the following pallets: Balances, Identity, Parachain Info, System, Timestamp. |
| 6.a | PeopleChain mapping | Same as for Polkadot, I map the different versions of PeopleChain to my own classes (see point 1 of the section __technical difficulties__). |
| 6. | Database Infrastructure | Inserts into the database various blockchain data I want to save (some key events such as account creation, token transfers, different validators for each era, etc.). |
| 7. | Utils | Various small projects to manage application configuration, logging, monitoring (I use OpenTelemetry). |
| 9. | Substrate.NET.Toolchain fork | As explained, the [Substrate.NET.Toolchain](https://github.com/SubstrateGaming/Substrate.NET.Toolchain) project only handles the latest version of the blockchain, which is perfect for most cases. However, for Polkanalysis, I need to be able to query the entire blockchain from the genesis hash to the present. To avoid over-complicating the original project, I created a fork that allows generating all blockchain versions (see point 2 of the section __technical difficulties__). |
| 9. | [Substrate gaming projects](https://github.com/SubstrateGaming) | In addition to Polkanalysis, I have created and maintain the [Substrate Gaming](https://github.com/SubstrateGaming) projects. |
| 9.a | [Substrate gaming Metadata](https://github.com/SubstrateGaming/Substrate.NET.Metadata) | I created this project in Substrate Gaming because it can be useful for everyone. It handles different metadata versions (from v9 to v15) and allows for comparing different versions of metadata (to create a history of what has changed, or even a small release note with some AI). |
| 9.b | [Substrate gaming NET.API](https://github.com/SubstrateGaming/Substrate.NET.API) | [Cedric Decoster](https://github.com/darkfriend77) is the lead developer and maintainer of this repo. I also contribute occasionally when I need something for Polkanalysis (or at Cedric's request). |

## Technical difficulties

I am very satisfied with the number of features I've been able to implement in Polkanalysis. It’s important to keep in mind that not using PolkadotJS slows down development considerably, but it also offers an alternative for C# .NET developers.

However, there are still a number of technical difficulties that I haven't fully resolved, and they seem essential if I want to minimize the work needed to accommodate blockchain evolution in the future:

1. PolkadotMapping and PeopleChainMapping classes
   The goal is for my domain not to have to manage different runtime versions and blockchain metadata. So I created large mapping classes, which will map what I receive (e.g., the AccountId32 of version 9430 of Polkadot) to my own AccountId32 class.
   As long as this class doesn't change over time, everything goes well, but if new properties are added/renamed/removed, I have to manually adapt my mapping, which is very time-consuming.
   The same issue applies to enums (events, calls, etc.) when elements are modified. I created a whole system to "decompose" them using reflection, but it's not optimal.

2. The generation of different blockchain versions works well. But all metadata below v14 causes issues because the metadata wasn’t detailed enough. So I can’t be sure I’m implementing certain events correctly. To solve this, I check whether a class exists in version v14 and retrieve the structure from that. This works in 80% of cases, but if the same class was different in the past, my implementation is incorrect, and I must manually override it (you can see an [example here](https://github.com/SubstrateGaming/Substrate.NET.Metadata/blob/master/Substrate.NET.Metadata/Conversion/ManualNodes.cs#L39) with the AccountInfo class).

3. Starting from spec version 1002006, the identity pallet was removed and migrated to PeopleChain. If I make a request for identity information on Polkadot, I now need to redirect it to PeopleChain. The challenge is knowing which block I should query. Polkadot has a 6-second block time, while PeopleChain has a 12-second block time, but this doesn’t guarantee that the blocks are perfectly aligned or produced at the same time (or that a block wasn't produced after 15 seconds instead of 12). So, for now, I simply apply a rule of three, but I know the algorithm isn't fully accurate.

## Future Plans

I plan to maintain this project and continue integrating various Polkadot parachains in the future (Asset Hub, Coretime, Collective, and Hydration as well). My goal is to first release the version described in Milestone 1 before adding these parachains.

As for funding, I still need to work on it, but I’d like to incorporate pricing for API usage (check details in "Marketing and long term" section). By default, the API will be public and free, but with a free plan that limits the number of requests per second (primarily to avoid excessive hosting costs and prevent spamming from bots).
I think monetizing higher-tier plans that allow businesses to access a significantly larger number of requests would be a good approach.

Depending on the popularity of the project, I may consider hiring developers to help or outsourcing part of the work.
In any case, the project does not aim, at least initially, to manage all existing parachains, nor to compete with the major explorers out there (such as Subscan).

## Marketing and long term

The goal of this project is to cover its operational costs.

### Marketing Strategies
1. *Monetize the API* :
By default, the API will be free to use, with an integrated rate limiter. If individuals or companies wish to request more data, a paid plan will be offered along with an API KEY.
2. *Custom Endpoints* :
For certain users, if there is a need for new endpoints for their usage, these will be charged.
3. *Data Extraction* :
Certain data can be extracted upon request, as long as Polkanalysis possesses it, and charges will apply based on the complexity and volume of the request.

### Cost-Saving Strategies
1. *Store relevant data in the database* :
The goal will be to store relevant data in the database to avoid excessive billing. To achieve this, I plan to conduct studies (typically with Matomo Analytics) to analyze which pages generate traffic and which pages are the least consulted. This will help in providing a tool with content that interests internet users and customers.
2. *Potentially retain data for a limited Time* :
I am currently saving all events from each block in the database. The idea would be to keep only the last X months worth of data to prevent unnecessarily bloating the database. I will primarily check whether users analyze the blockchain mainly in the past or primarily in the present.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

The first person who talked to me about the Grants Program was Cedric when I started the project.
As explained in the Team's experience section, the project began two years ago, with around two hours of work per day on average (across all projects, including Polkanalysis, Substrate.NET.Metadata, and Hexalem when we participated in the hackathon, etc.).
Today, I’ve completed 90% of Milestone 1 (actually 100%, but I need to fix a number of bugs).

I am only requesting the grant now because I didn't want to put pressure on myself with deadlines, knowing that this is already a part of my daily life in my main job. My goal was to finish almost everything first, then request the grant, so I could take the time to develop and learn at my own pace.

To conclude, this is the first grant I am requesting (for any project).

I am available if you’d like to have a conversation or see some initial demos of the application :)

## Screenshots

### API
![image](https://bl6pap003files.storage.live.com/y4mPr1uHiOeZFQ86ll6EnPZkE3kOGQzwQw33BkCMTxlHEqUs5eHmtwM3rB8r2dFN7VSyaKHFew-69ig8odRnPvKuOrA2NHl-if9tbWUdm1JVsvSJ-1uJYZ7c9foRlanbOlEfsrCIVT4kemC4Z-EHxkgXH9tH_3pZhLm25fxIUpOPYX0TkTK2cxTa9_SuEdfXQRu8AZ3O7ldrB5z8HWQTAJNNg?encodeFailures=1&width=1346&height=792)

![image](https://bl6pap003files.storage.live.com/y4m8FIafhVxQrHt_2otBSw34HIfY6e_aNnFzj5V1qw13jkboNnsFNyom-hifBKiGjHR2DCP6yEffynz50xV5RL331B0-Ed6blVqyfprU6oHbxSKRbJ1EHGebUWBOWbXvxtKizjDR3f7nX1Ghkvfjrou51o96L_ZKne-NOq4kxk2RGpGN3SxZYodDzS8Ho0iCBFgXXnSKUrgpasSH6y5AQ-wVA?encodeFailures=1&width=908&height=855)

![image](https://bl6pap003files.storage.live.com/y4mX1J45esfMXakY_FjiAQwron7A_OyDX9f7-Pr-FM7yGt_bI-n2R-3mraFn67D8UdES8PUmTmGe7_LKOLKmAZjn2uaWBILwwuQk8XBY0Z4hD8fkH1bjLF2VBlQm-_PZJcodp3OzthFFBi33L2JhkHgSbUsrXDenluz4CoPU54dKAPaeqx68NY65AntEx9UuI0ToYmRtdBcX-TlOungYXL3-w?encodeFailures=1&width=998&height=843)


### Worker

![image](https://bl6pap003files.storage.live.com/y4m2BrsF_4T-bdYgpAzhwIYjfcN_GVYWJD40LvUXpb6mbJJqigXroNSE7-plc7UZul823YVrof6u0TrFzvDi9dsAMxCYF1toe8iglC4VxIWBg2HHChjzHXJx8P6LoPan0rdO1QNJvgUJn9kBWTkDU_jlTXSgrFloqIzXns_Qj5SCdJLut0GRZlynU3diGLiNmmbko-ftGqyCAKJYCmhxX8eBIXIl3vCc8SvChDS-vg0G2k?encodeFailures=1&width=1131&height=870)

![image](https://bl6pap003files.storage.live.com/y4mZSgjDtCDnghlrLRLxtLYJf-CXtFasA5_dnv1n2aBE6_aCu_fPBQg_atZoke5CKw2IIcm48YMnebTMg2i7PO6aa_uWuAuTR4_bdq-hhPGhTP3GmFiiZaO8WWXn_6FMak6gAwT10RNpXQvy_8ZlMQP-WMDJ0QHrCqhxdCDRBDVeOxfRY0lcZdEKji-fBewjnzZABos70KqsyM5eVE33maro2F9m5V7dJ9NeUHVFxlvDBU?encodeFailures=1&width=1295&height=905)
