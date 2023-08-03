# Galaxy: Three-dimensional Web for Polkadot Users

- **Team Name:** Galaxy.Do
- **Payment Address:** 0xF1dcdA1C9E76BBf32791da01e464A3F55bd7000c (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

![image](https://user-images.githubusercontent.com/4569866/228949639-f89bb602-59c5-4b30-917e-8a8b3cdebc20.png)

Web has revolutionized the way we organize and explore knowledge.

Although web pages digitalized physical documents, they also inherited some of limitations.

That's the reason most web pages are vertically scrollable, in one dimension only, imitating physical predecessor.

Whiteboards expanding it's space into second dimension leverage human ability of spatial awareness to enhance the understanding.

As hyper text links navigate user in between of web site pages, same way whiteboards can be also inter-linked to expand information into a third dimension.

Then multiple related whiteboards can be rendered as layers on the same canvas with seamless transition in between the layers, thus expanding the knowledge into a third dimension.

That's the quintessence of Stretch Text concept, which makes it possible to express interconnectedness of all knowledge (intertwingularity)

**Current grant is offering to develop canvas-based browser which allows polkadot users to create, organize, and share knowledge leveraging three-dimensional Stretch Text space.**

### Project Details

#### 1. Frontend - Excalidraw

![image](https://user-images.githubusercontent.com/4569866/228949713-8de6ff8c-fdde-41ab-8ae9-d895ab3e7b02.png)

The scene is represented as an object; it contains UI State, list of elements, and files cache.

Whenever the elements on the scene updated, it triggers rendering of the canvas.

Each element is represented as an object too: text, images, shapes.

If given element object has a text field, then each line of the text passed to fillText canvas method.

If given element is an image though, it's content is fetched from files cache, and then passed to drawImage canvas method.
Files cache is simply a mapping from image content hash to the blob content.

UI implemented in React rendering on top of the canvas allows to seamlessly create and manipulate the elements on the canvas.

Selected elements can be joined into groups, and then selected groups can be serialized and saved as a separate layers.

As user navigates across an infinite canvas, the layers outside of viewport can be unloaded and relevant layers appear.

#### 2. Networking - Polkadot

![image](https://user-images.githubusercontent.com/4569866/228949758-62d6cc1e-ed11-493e-800d-846857aaebcb.png)

Each layer can be serialized into JSON file and then saved to IPFS.

User who created the layer, then makes a transaction to claim ownership of it.

In the transaction, user is passing IPFS link and chosen Layer Name.

The smart contract deployed on the pallete, maintains the mapping from Layer Link to IPFS Link.

Layer Link is represented as deep link in format of `galaxy://<wallet address/<layer name>`.

#### 3. Backend - Chisel

![image](https://user-images.githubusercontent.com/4569866/228949811-b22de278-3e80-4cf1-8b45-c1e8dcb31879.png)

Galaxy Browser consist of frontend app, backend server, and database.

REST API implemented in Rust is running a Deno runtime to handle the network requests in between frontend and database.

When user opens a deep link, layer loading will be handled by backend endpoint which returns the scene object in response to frontend request.

Same endpoint will first resolve Layer Link to IPFS link through polkadot as described above, then fetch content of IPFS link,
perform validation of deserialized content to ensure it corresponds scene schema, then save every element as a separate object
in the database, then fetch images and save them to database as well, and then consturct a scene object.

*The proposed architecture also allows to implement more advanced features: search across different layers, tagging and versioning, recommendations, parallel tranclusion, and microtransactions.*

### Ecosystem Fit

Here open for suggestions. Specifically to consider partnerships with: wallets, storage solutions, content sharing platforms and social networks, copyright and microtransaction services.

## Team :busts_in_silhouette:

### Team members

### Contact

- **Contact Name:** Igor Berlenko
- **Contact Email:** igorberlenko7@gmail.com
- **Website:** https://galaxy.do

### Legal Structure

Opensource Code. Governance with DHO (Hypha DAO).

https://github.com/hypha-dao/hypha-substrate

### Team's experience

My profile:

- https://github.com/7flash

Relevant repositories I have contributed to:

- https://github.com/excalidraw/excalidraw
- https://github.com/chiselstrike/chiselstrike
- https://github.com/zsviczian/obsidian-excalidraw-plugin
- https://github.com/JoinSeeds/seeds_light_wallet
- https://github.com/ColdStack-Network/blockchain

## Development Status :open_book:

The Galaxy Browser is all inspired by Xanadu Spaces, and particularly the architecture described above solves the problem of "Browser Law" articulated by Ted Nelson in following video:

https://www.youtube.com/watch?v=kV_vYkSmkxk

In the next video I showed a short demo of Galaxy Browser with additional features such as layers transitions, command palletes, contextual GPT, and StableDiffusion-bookmarks.

https://www.youtube.com/watch?v=8Y7_gvmMyKY

The demo implementation is made possible because of Zsolt work on his Obsidian plugin excalibrain.

These might be relevant discussions in Excalidraw:

Layers: https://github.com/excalidraw/excalidraw/issues/6266#issuecomment-1439488787

Pinned Anchors: https://github.com/excalidraw/excalidraw/issues/3276#issuecomment-1246985074

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 10,000 USD

### Milestone 1 — Proof of Concept

- **Estimated duration:** 1 week
- **Costs:** 2,500 USD
- **First Milestone is PoC implements following scenario:**

User opens Galaxy Web App, connects Polkadot Wallet, draws some elements, clicks button to save layer to IPFS and shares a link.
Another user opens the app, choose to load layer from IPFS, inserts the received link, and can see the elements created by first user appear on his canvas.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Frontend: Galaxy Web App | A new repository which integrates Excalidraw whiteboard with Polkadot wallet and IPFS storage |

### Milestone 2 — Minimal Valuable Product

- **Estimated Duration:** 3 weeks
- **Costs:** 7,500 USD
- **Second Milestone is MVP implements following scenario:**

User installs desktop Galaxy App, opens "galaxy://" deep link which is resolved to IPFS, scene is rendered on canvas. User adds other elements on the scene and saves them into a new layer. User closes and reopens the app. He can see both layers with images loaded from database instantly.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** and **video** that explains how to setup and use the Galaxy Browser. |
| 1. | Galaxy Browser | Complete App to organize, share and explore knowledge |
| 2. | Smart contract | It will allow users to claim ownership over layers and resolve Layer Links into IPFS Links |

### Next Milestones

**Transclusion scenario** might be beyond the scope of testing promised deliverables but still might be implemented within a timeline:

User is loading two layers from different wallets into his scene, then saves the whole scene into a new layer with tranclusion of two non-changed layers.
Creators of original two layers receives notification of forked version.
Creator of first layer opens the forked version, only second layer is loaded. It happens because first layer already exist in his database.
Creator of second layer makes changes in some elements which is reflected in combined layer without any actions from creator of combined layer.
It works because during tranclusion, the elements are not copied, and because Layer Link of the original layer remains the same whilst referencing to a different IPFS link.

**Microtransactions scenarios** will be implemented later. Though worth mentioning here as the most exciting future/feature:

Different artists publishing their paintings, each painting as a separate Galaxy Layer.
Another user creates a gallery layer with automated script taking the highest ranked paintings into it.
Viewers have to subscribe into the gallery layer to view it.
The subscription payments are distributed in between all of the authors included in the gallery, as well with gallery curators.
Even though viewers can have direct view access to each individual paintings for free, but there is a reason which makes the gallery worth to pay for. That's important to notice, how rearrangement of images on the whiteboard, brings in additional value.
Also notice, how curators managing the gallery are being rewarded along with actual painting authors.
The same mechanics can be applied to any other type of information: news, expert opinions, financial forecasts, etc.
Content Explorers, who rearrange and recommend the most relevant pieces of information in the Web, will be financially incentivized along with actual content creators.

## Future Plans

I believe in opensource community to drive the long term development of the project, and of course can see myself leading it as long as needed.

## Referral Program (optional) :moneybag: 

- **Referrer:** github.com/n13
- **Payment Address:** bc1q7axtazzhsdttextp0qspueaagv4pgfm5l9ne64 (BTC)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation

- Previous grants you may have applied for: https://pomelo.io/grants/galaxy
