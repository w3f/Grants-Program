# Galaxy 2.0

- Team Name: Galaxy.Do
- Payment Address: 16ULtRMx8p4DwVuR8prXJ2pRTFuR5gMesQy97MAXXGaHfTf5 (DOT)
- [Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels): 2

## Project Overview :page_facing_up:

### Overview

Galaxy is a distributed global **knowledge library** based on inter-connected whiteboard scenes.

Organizing knowledge efficiently is essential component of happy life for each individual, and key to success within any organization, ensuring everyone in a team stays on the same page, up-to-date with all relevant information, across multiple channels of communication. Therefore an increasing need for better tools, such as Obsidian, Notion and other advanced **Knowledge Management Systems**, arises.

In difference to other KMS, which are mostly limited to linearity of web pages or markdown documents, Galaxy utilizes primitive of **Excalidraw Whiteboard Scenes**, which can include all kind of images, text elements, embedded pdf or markdown documents, and even whole websites. It allows to visualize inherent connections present in between those different elements, being positioned on the same canvas, and it opens up **a new a dimension in terms of organizing knowledge**.

Continuing comparison with Obsidian, it only allows to store markdown documents in a local file system, organized into multiple Vaults. In difference, **Galaxy Desktop Browser** allows to store Scenes in **SQLite Vaults**. It allows to synchronize Scenes in between different people viewing and editing Scenes at the same time. Galaxy Browser can manage connections to multiple **Galaxy Database Servers**, efficiently organizing your knowledge base distributed across multiple machines.

Usually database connection requires authentication using login/password or ssh key, but instead Galaxy Server leverages **Access Management Pallette** implemented on Polkadot, which allows to apply complex access rules based on user identity. It can check, for instance, whether user has been explicitly listed as a member of specific organization to be allowed editing the Scene, or perhaps whether user has transferred payment in DOT to be allowed reading the Scene, and only then it allows to establish a connection to the Vault.

And the last piece, is a discovery. Similarly, as Github allows to discover and clone repositories, or Huggingface allows to discover and download pre-trained Models, the same way **Galaxy Web App** allows to read catalogue of public Vaults published in the Pallette along with their description, connection details, and requirements. Each Vault page includes a deep link which points to Server URL with specific Vault ID, on click it triggers Galaxy Browser to connect. In case if it's a subscription-based vault and it requires a payment, Galaxy Browser will ask first to top-up a **built-in Polkadot Wallet** and make a subscription payment, and only then Vault Server will allow connection, as explained above.

### Project Details

### Ecosystem Fit

Additionally to drawing Scenes manually, Galaxy also allows to create **Magic Scenes**. In difference from usual drawings, where you can add elements manually, in Magic Scene instead, you can manage input data with simple **CRUD** table view or any custom embedded app, and since each Magic Scene allows to define its own custom **Transform Macros**, it will automatically convert provided data into visual grid view on the canvas.

It allows to create various integration plugins to synchronize the canvas with external data sources. For instance, you can define a script that will keep track of all Grant Proposals simply by providing link to this repository, and then it will maintain Magic Scene in which you can zoom out to see all of the proposals with their respective updates. It works as well with documentation, codebase, etc, - by syncing source data into generated images you can see on the canvas.

## Team :busts_in_silhouette:

### Team members

### Contact

- Contact Name: Igor Berlenko
- Contact Email: igorberlenko7@gmail.com
- Website: https://galaxy.do

### Legal Structure

Decentralized Holonic Organization

### Team's experience

I have completed our first Polkadot Galaxy Grant a year ago: https://github.com/galaxydo/galaxy-polkadot (https://github.com/w3f/Grants-Program/blob/master/applications/galaxy.md#overview
)

Recently, I have completed another Galaxy Grant from ICP: https://github.com/galaxydo/icp-first-milestone-app

## Development Status :open_book:

One year ago, we have delivered our Desktop Polkadot App built with Deno. It allows to persist your local scenes in SQLite, spawn multiple windows for editing, execute macros scripts in your scenes, and share the scenes by uploading them to IPFS with named indexing in Polkadot hashmap contract.

Recently, we have delivered our Web App built on ICP, which demonstrates the concept of Magic Scenes, where you can switch to "Files Manager" mode to upload documents into Collection, and then switch to Canvas mode to see auto-generated images layout.

However, current approach of storing scenes in IPFS/ICP does not allow real-time collaboration because of certain limitations that we can avoid and make real-time collaboration over huge whiteboards possible with our new architecture. Also, current user experience of navigation across scenes in Desktop App is not intuitive, requiring users to understand Macros Engine, instead we can provide a simpler interface using files tree as in familiar files managers and database managers. Lastly, we can migrate to Bun instead of Deno, because it allows to compile apps with embedded static assets out-of-the box.

## Development Roadmap :nut_and_bolt:

My Proposal to organize this grant into three milestones, where first milestone implements minimal cohesive version of the system including all four components mentioned above: Desktop Browser, Database Server, Polkadot Pallette, and Discovery Web App.

Then two following milestones are expanding on the functionality of each component, targeting to fit the requirements for the following onboarding route:

(1) Individuals => (2) Organizations => (3) Publishers

The main diffence in this progression, from Individuals to Organizations, that's a requirement to be able deploy private infrastructure. In first version, all Individuals can connect to the same remote Vault and explore shared Scenes through Discovery App. In second version, Organization can deploy its own Vault Server and manage access to members by listing their IDs privately in their own instance of Access Manager, making it invisible to others, preventing DDoS attempts.

Then, moving from Organizations to Publishers, the main difference is a requirement to be able, while keeping Write Access inside of published organization, also to give Read Access to subscribers. Similarly as in first milestone, Scenes published into Publisher Vault will be visible in the Discovery App, but now requiring to complete subscription payments to establish connection.

### Overview

- Total Estimated Duration: 3 months
- Full-Time Equivalent (FTE): 3
- Total Costs: 30,000 USD

### Milestone 1 (Individuals)

- Estimated duration: 1 month
- Costs: 10,000 USD

### Milestone 2 (Organizations)

- Estimated duration: 1 month
- Costs: 10,000 USD

### Milestone 3 (Publishers)

- Estimated duration: 1 month
- Costs: 10,000 USD
