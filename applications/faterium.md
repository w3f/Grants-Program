# Faterium

- **Team Name:** DodoRare, Inc.
- **Payment Address:** 0x6f083B9888D65A7CA7b8936982BE8Be328eF6d56 (ERC20 USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Faterium is a decentralized voting platform that provides business tools for content creators to monetize their projects and directly engage the community on important decisions. It helps game developers, creators and artists to easily create own assets, distribute them and earn by providing crowdfunding polls on various topics that are important to their community.

### Problem Summary

Services like [Patreon](https://patreon.com/) help content creators get support from their community, and [Kickstarter](https://www.kickstarter.com/) helps raise money for a new creative projects. These are very good services and everyone is used to them, but we see opportunity here: the community can’t directly influence the creation process and be truly involved into it.

### Solution Summary

We have found a solution that can give creators new opportunities to monetize their project and directly involve their community in the creation process through regular voting and events with valuable rewards.

We will provide a simple interface where creators can create special polls in a few clicks, set which currency will be used for voting, and then invite the community to participate in it.

Also, we will make convenient tools for creating, distributing and integrating of own assets and NFTs, thanks to which people who are not familiar with Web3 will be able to use the power of decentralization in their projects such as games, online books, movies and comics.

We integrate social elements into the platform, such as rating, discussion forums or community-created proposals. And it will give creators even more ways to interact with the community.

In addition, we will make SDKs and APIs to help integrate our platform into existing services and projects, such as games, websites for reading books or comics, or websites for watching movies, which will open up endless possibilities for adopting the technology.

### Glossary

- **User Profile** - a collection of settings and information associated with a user.
- **Community** - a customizable space where polls, discussions, and events of a specific community will be located, it can be either a personal space or a project space.
- **Crowdfunding Polls** - a way for creators to decide what community wants and raise money for a project or idea. Authors themselves determine which currency they want to use for voting and what percentage they will receive after the end of the poll.
- **Poll Rewards** - any kind of reward that users can receive after winning the poll. It can be either a unique NFTs or any gifts personally from the author of the poll.

### Infrastructure Scheme

![Faterium - Faterium Platform](https://i.imgur.com/8FRSNOz.jpeg)

### Wireframes

<table>
  <tr>
    <td>
      <b>1. Main Page</b>
    </td>
    <td>
      <b>2. Categories</b>
    </td>
    <td>
      <b>3. Community</b>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://user-images.githubusercontent.com/24860875/201780450-fb221baa-2100-4e14-ab3f-e9df7ec387b8.png" />
    </td>
    <td valign="top">
      <img src="https://user-images.githubusercontent.com/24860875/201781849-7c6fe810-a636-4ec1-ba02-ab0ef30e712b.png" />
    </td>
    <td valign="top">
      <img src="https://user-images.githubusercontent.com/24860875/201780587-781954ea-576d-4d47-b3aa-ddc7e9b6bacd.png" />
    </td>
  </tr>
  <tr>
    <td>
      <b>4. Poll</b>
    </td>
    <td>
      <b>5. User Profile</b>
    </td>
    <td>
      <b>6. Create Community</b>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://user-images.githubusercontent.com/24860875/201782560-2a31d346-ce7d-427b-ab10-21914fd322c8.png" />
    </td>
    <td valign="top">
      <img src="https://user-images.githubusercontent.com/24860875/201782714-d2bd07bf-cbd5-4fd2-bc33-081b1bc4427b.png" />
    </td>
    <td valign="top">
      <img src="https://user-images.githubusercontent.com/24860875/201782840-4bbd6e92-f610-4019-9e95-4dca0511b319.png" />
    </td>
  </tr>
  <tr>
    <td>
      <b>7. Create Asset</b>
    </td>
    <td>
      <b>8. Create Poll</b>
    </td>
    <td>
      <b>9. Profile Settings</b>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://user-images.githubusercontent.com/24860875/201786471-da4cabbe-235e-4113-9f41-d0fa8f7102a9.png" />
    </td>
    <td valign="top">
      <img src="https://user-images.githubusercontent.com/24860875/201786558-6011b8fa-9a3e-4ae6-9f34-a4c157b738bc.png" />
    </td>
    <td valign="top">
      <img src="https://user-images.githubusercontent.com/24860875/201786922-8d909ed6-c757-4e06-8d82-224d960cef27.png" />
    </td>
  </tr>
</table>

### Substrate and Backend API

![image](https://user-images.githubusercontent.com/24860875/201778800-35f70227-5f26-49db-9123-e99e47711c39.png)

### Usecases

The Faterium platform can be useful for a large pool of content creators and projects. Such as game developers, comic and manga artists, book writers, movie and anime creators, bloggers and streamers, journalists and politicians, etc. Faterium can be used in all areas where the creators would like to give the community the tools to vote and influence. Now, we would like to show a couple of interesting use cases of the platform.

#### Simplified user flow diagram

![image](https://user-images.githubusercontent.com/24860875/201778526-3cf974df-a33b-4979-8275-67f4fc04480a.png)

#### Comics Creator

Imagine talented comics creator - Bob Johnson, that has several popular multi-series comics and thousands of fans waiting for new chapters. Bob is looking for a new way to get funding for his projects, and at the same time get feedback from his community.

He comes to the Faterium platform, configures user profile and creates his first crowdfunding poll, in less than 30 minutes. Bob sets the duration of the poll to 3 days, selects DOT as the voting currency and also sets what will happen after the poll ends - 50% of winners assets go to the poll creator, and winners will receive remaining 50% of assets alongside unique NFTs as reward.

In the poll, he asks his community a question: "Which comic should I develop this month?". Also, Bob describes options in the poll and give detailed information about what he will do after the end of the poll. Then he posts the poll with unique link in his social media. Fans are happy that the author is preparing new series of comics and they decide to help him by voting. They log in via the [polkadot{.js} extension](https://polkadot.js.org/extension/), choose one of the options in the poll and send assets.

After the end of the poll, the Bob receives finances that will help him to create new series. At the same time, fans took part in an important decision and supported their favorite author, and of course were rewarded with rare NFTs! Looks nice!

#### Game Developer

Let's look at another example - a famous game developer. The developer wants to launch the game on as many platforms as possible, so he needs to integrate cryptocurrency into the game in a soft way. Also, he wants to do something unique and increase the involvement of his community.

He chooses to use the Faterium platform, configures user profile and creates a community on the platform. Since his game has a very interesting plot and characters, he decides to create an asset for each key character in the game. Thanks to a user-friendly interface, he mints new assets in a short time. Then, with the help of the Faterium SDK, he adds these assets to the game as special rewards for players and announce the new feature on his social media.

Then, he releases new story missions in the game, and players who have assets of their favorite characters, now can directly influence on how the game's story develops by spending assets and voting on various plot twists and character decisions. Players who love the story of the game now have cool tools to interact and influence the game, and last but not least, they can freely sell and buy these assets on decentralized marketplaces.

It is important to note that game developers who already have own tokens or assets may not create a new one, but use an existing one by bridging it to the Faterium platform.

### Ecosystem Fit

The main goal of Polkadot is to create a decentralized network where users are in control. Faterium empowers as many people as possible to create safe, fair, universal voting polls on any topic possible. In addition, the Faterium platform will not focus only on its own Substrate Network - our main development goal is to cover as many Web3 networks as possible along with Web2. All this will help attract a lot of people who are not familiar with the crypto, influencers, other projects and games. That's why Polkadot and Faterium are compatible and can help each other make Web3 even more popular.

## Team :busts_in_silhouette:

### Legal Structure

- **Registered Legal Entity:** DodoRare, Inc.
- **Registered Address:** 651 N Broad St Suite 206, Middletown, DE 19709.

### Contact

- **Contact Name:** David Knyshenko
- **Contact Email:** [info@dodorare.com](mailto:info@dodorare.com)
- **Website:** [dodorare.com](https://dodorare.com/)

### Team members

- [**David Knyshenko**](https://www.linkedin.com/in/david-knyshenko/), Blockchain/Fullstack Developer & Team Leader
- [**Oleksii Knyshenko**](https://www.linkedin.com/in/oleksii-knyshenko/), Rust Developer
- [**Daniil Anikin**](https://github.com/Heezay), Rust Developer
- [**Andrew Spodarenko**](https://www.behance.net/andrewspodarenko), UI/UX Designer
- [**Dariya Davydova**](https://www.artstation.com/keunhwajae), Digital Artist & Designer

### Team's experience

- [Crossbow](https://github.com/w3f/Grants-Program/pull/668) - Our second W3F grant to enhance and improve Mobile Game Framework: Cross-Platform build tools and toolkit for Rust and Substrate community. By [our team](https://github.com/dodorare).
- [Narnao Labyrinth](https://narnao.com/) - Our team has been working on this game project for more than a year. Some unique features originally from Narnao - now evolved into something bigger inside Faterium. The launch of the Narnao Labyrinth is tightly connected to the launch of Faterium, it will be a flagman project that will show most of the features and will initially bring the gamer community to Faterium. By [our team](https://dodorare.com/).
- Mobile Game Framework - Our first team Web3Foundation [grant](https://github.com/enfipy/Grants-Program/blob/master/applications/mobile-game-framework.md), mobile building tool. By [our team](https://github.com/dodorare).
- Substrate Atom and VSCode plugins - Have contributed some code to Web3Foundation Grant for Substrate [VSCode](https://github.com/everstake/vscode-plugin-substrate/graphs/contributors) and [Atom](https://github.com/everstake/atom-plugin-substrate/graphs/contributors) plugins while worked in outsource company. By [enfipy](https://github.com/enfipy).
- [Polkadot CosmosSDK Integration](https://github.com/adoriasoft/polkadot_cosmos_integration) - Also, contributed to another Web3Foundation Grant while worked in another outsource company. Built logic behind ABCI pallet and Substrate with Tendermint. By [enfipy](https://github.com/enfipy).

### Team Code Repos

Website Links:

- [faterium.com](https://faterium.com/)
- [dapp.faterium.com](https://dapp.faterium.com/)

Github Organizations:

- [@dodorare](https://github.com/dodorare)
- [@faterium](https://github.com/faterium)

Repositories:

- [faterium/faterium-node](https://github.com/faterium/faterium-node)
- [faterium/faterium-dapp](https://github.com/faterium/faterium-dapp)
- [faterium/faterium-server](https://github.com/faterium/faterium-server)

GitHub accounts of developer team:

- https://github.com/enfipy
- https://github.com/olvyko
- https://github.com/Heezay

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 7 weeks
- **Full-time equivalent (FTE):** 5
- **Total Costs:** 30,000 USD

### Milestone 1 — Crowdfunding Polls

- **Estimated Duration:** 4 weeks
- **FTE:** 5
- **Costs:** 17,000 USD

The main goal of the `Milestone 1` is to create base functionality for `Crowdfunding Polls`. To make it possible - we will create Substrate Node that will contain basic template pallets, alongside with [Pallet Assets](https://github.com/paritytech/substrate/tree/master/frame/assets) (for creating assets), and [Pallet Scheduler](https://github.com/paritytech/substrate/tree/master/frame/scheduler) (for scheduling polls endings). Also, we will create a new Pallet called `Crowdfunding Polls Pallet`.

To minimize storage on chain (as [polkassembly](https://github.com/Premiurly/polkassembly/blob/master/front-end/src/components/CreateTreasuryProposal/TreasuryProposalFormButton.tsx#L189) and Polkadot [do](https://wiki.polkadot.network/docs/learn-treasury#announcing-the-proposal)) - we will create a Golang server that will [embed](https://pkg.go.dev/github.com/ipfs/kubo/core/coreapi) [IPFS node](https://docs.ipfs.tech/reference/go/api/#go-embedded-client) and [PocketBase](https://pocketbase.io/docs/use-as-framework/) (or launch nearby in separate docker containers), to create the best User Experience and make it possible to store big media files as IPFS CID in database. To make it simple and straightforward in usage - we will launch test Substrate Network with our pallet on our servers, and create pages for creating Polls, and voting (with help of [polkadot{.js} extension](https://polkadot.js.org/extension/)).

Please, see the Substrate API design of the Faterium Platform [above](#substrate-and-backend-api).

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | **License** | We will add Apache 2.0 Licenses to all repositories. |
| 0b. | **Documentation** | We will provide both **inline documentation** of the code and a **live demo**. |
| 0c. | **Testing Guide** | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | **Docker** | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | **Crowdfunding Polls Pallet** | As described above - we will create a Substrate Pallet for creating `Crowdfunding Polls`. |
| 2. | **Configure Substrate Node** | As described above - we will create a Substrate Node from template and integrate `Pallet Assets`, `Pallet Scheduler` and our `Pallet Crowdfunding Polls`. |
| 3. | **Faterium Server with PocketBase and IPFS** | As described above - we will create a Golang Server with API through PocketBase for uploading polls details in `IPFS Node`. |
| 4. | **Launch testnet Substrate network on the server** | As described above - we will setup and run Faterium test network on our servers to make sure that everything works as designed. |
| 5. | **Pages for creating Polls and voting on it** | As described above - we will create pages for creating and using `Crowdfunding Polls` to make sure that all functionality is working well. |

### Milestone 2 — Profiles, Communities, and Pages

- **Estimated Duration:** 3 weeks
- **FTE:** 5
- **Costs:** 13,000 USD

The main goal of the `Milestone 2` is to create UI design (see [wireframes](#wireframes) for the reference) and all main functionality of Faterium Platform: Communities, User Profiles, Categories, Assets, Crowdfunding Polls. After completion of `Milestone 1` - we will have Golang Server that we will extend with new functionality: wallet connect, user profile configuration, community creation, asset creation, voting.

Please, see the Backend API design of the Faterium Platform [above](#substrate-and-backend-api).

Also, we will prepare and publish and Article, that will explain a new concept of `Crowdfunding Polls`.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | **License** | We will add Apache 2.0 Licenses to all repositories. |
| 0b. | **Documentation** | We will provide both **inline documentation** of the code and a **live demo**. |
| 0c. | **Testing Guide** | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | **Docker** | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | **Article** | We will publish an **article** that explains the concept of the Faterium Network, it's features, and usecases. More general-public-oriented version of what described in this application. |
| 1. | **Create design for Faterium dApp** | As described above - we will create a UI design for Faterium Platform. |
| 2. | **Extend Faterium server** | As described above - we will update and extend Faterium Server to make it work as designed. |
| 3. | **All web pages for dApp** | As described above - we will create all website pages from design and connect them to Faterium Server / Faterium Network node. |

## Future Plans

1. [IPFS Cluster](https://ipfscluster.io/) Integration.
2. DEX + Subsidizing System / Fuel-Gas Tanks.
3. Anti-spam System + Account Verification.
4. Author & Project Verification.
5. Faterium API & SDK.
6. Faterium Android and iOS Apps.
7. Faterium Discord and Telegram Bots.
