# Omnipeer

- **Team Name:** Omnipeer
- **Payment Address:** [0xDffbf4f35d22C141FeFA8fa9A5a5483B3D29205f](https://etherscan.io/address/0xDffbf4f35d22C141FeFA8fa9A5a5483B3D29205f) (USDT, Ethereum (ERC20))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
## Project Overview :page_facing_up:

### Overview

Omnipeer is a p2p file transfer, p2p chat and decentralized storage platform.

Omnipeer is a new era data storage & transfer platform that aims to bring the benefits of peer-to-peer technologies to non-technical users in a user-friendly and intuitive way. Inspired by the logic of friendship in social media, Omnipeer allows users to easily perform functions such as file transfer and messaging by adding friends. The platform is designed to be accessible from any device with a browser, enabling cross-platform peer-to-peer communication between smartphones and computers.

The first module of Omnipeer includes features such as file upload to IPFS, p2p file transfer, and p2p chat. However, Omnipeer has ambitious plans to add even more functionality in future modules, expanding the platform's capabilities and making it an even more valuable tool for users.

Omnipeer will make integrations such as NFT storage and transfer for the next milestone and aims to do this with the Polkadot tech stack.

I am deeply interested in the web3 foundation and the Polkadot ecosystem because I believe that the decentralized and open-source nature of these technologies has the potential to revolutionize various industries and create a more fair and equitable online world. By utilizing the Polkadot tech stack in my project, I hope to create a strong and reliable infrastructure that can be used by other projects in the ecosystem. Additionally, by being a part of the Polkadot community, I believe that I will have the opportunity to collaborate and learn from other like-minded individuals and projects, ultimately leading to the growth and success of Omnipeer.

### Project Details

#### Design & Showcase Video

<img width="1944" alt="omnipeer-homepage" src="https://user-images.githubusercontent.com/40897846/212908940-ffbf5e89-ee8d-4d76-8592-f7c05ffec6b1.png">

https://user-images.githubusercontent.com/40897846/212909056-6aca1455-1564-4a42-98f1-529ed5de2f90.mov

  
#### Data Models

Omnipeer consists 5 data models for core functionality, these models creates DynamoDB tables and helps us to make CRUD functionalities via GraphQL thanks to AWS Amplify.

**User Model**

The User model has several fields, such as "owner", "email", "peerId", "fullName", "about", "role", "nickname", "avatar", "chats", "friends", "storage" and "streams". The "owner" field is the primary key and unique identifier of the user. The "email" field is an indexed field and "chats", "friends", "storage" and "streams" fields has many relationship with other models.

Overall, this model is used to store information about a user, such as their email, peerId, fullName, and other details. Additionally, the model is set up to only allow the owner to create, read, and update the data and private role can only read the data.
  
        type User @model @auth(rules: [
        { allow: owner, operations: [create, read, update] },
        { allow: private, operations: [read] }
        ]
        ){
            owner: String! @primaryKey
            email: AWSEmail! @index(name: "byEmail", queryField: "userByEmail")
            peerId: String
            fullName: String
            about: String
            role: String
            nickname: String
            avatar: AWSURL
            chats: [Chat] @hasMany(indexName: "byUserId", fields: ["owner"])
            friends: [Friendship] @hasMany(indexName: "friendByUserId", fields: ["owner"])
            storage: [Storage] @hasMany
            streams: [Stream] @hasMany
        }


**Friendship Model**

The Friendship model has several fields, such as "id", "contactId", "contact", "status" and "owners". The "id" field is the primary key and unique identifier of the friendship. The "contactId" field is an indexed field and "contact" field links the friendship to a user. The "status" field is the status of the friendship and "owners" field is a list of owner identities.

Overall, this model is used to store information about a friendship between two users, such as their status and contact details. Additionally, the model is set up to only allow the owner to create, read, and update the data by checking the "owners" field.

        type Friendship 
        @model 
        @auth(rules: 
        [
            { allow: owner, operations: [create, read, update], ownerField: "owners" }  
        ]
        ){
            id: ID! @primaryKey
            contactId: String! @index(name: "friendByUserId", queryField: "friendsByUserId")
            contact: User @belongsTo(fields: ["contactId"])
            status: FriendshipStatus!
            owners: [String!]!
        }

**Stream Model**

The Stream model has several fields, such as "id", "name", "size", "status" and "owners". The "id" field is the primary key and unique identifier of the stream. The "name" field is the name of the stream, "size" field is the size of the stream and "status" field is the status of the stream. The "owners" field is a list of owner identities.

Overall, this model is used to store information about a stream, such as its name, size, and status. Additionally, the model is set up to only allow the owner to create, read, and update the data by checking the "owners" field.

        type Stream @model @auth(rules: [{ allow: owner, operations: [create, read, update], ownerField: "owners" }]){
            id: ID! @primaryKey
            name: String!
            size: Int!
            status: StreamStatus!
            owners: [String!]!
        }

**Chat Model**

The Chat model has several fields, such as "id", "senderId", "userId", "unseenMsgs", "chat" and "owners". The "id" field is the primary key and unique identifier of the chat. The "senderId" field is the sender of the chat message and "userId" is an indexed field of the user who receives the message. The "unseenMsgs" field is the number of unseen messages, "chat" field is an array of json objects, and the "owners" field is a list of owner identities.

Overall, this model is used to store information about a chat, such as the sender, the user who receives the message, the number of unseen messages, and the chat message details. Additionally, the model is set up to only allow the owner to create, read, and update the data by checking the "owners" field and the subscriptions level is set to public.

        type Chat 
        @model (subscriptions: { level: public }) 
        @auth(rules: 
        [
            { allow: owner, operations: [create, read, update], ownerField: "owners" },
        ]){
            id: ID! @primaryKey
            senderId: String!
            userId: String! @index(name: "byUserId", queryField: "chatsByUserId")
            unseenMsgs: Int!
            chat: [AWSJSON]
            owners: [String!]! 
        }

**Storage Model**

The Storage model has four fields: "cid", "name", "type" and "size". The "cid" field is the primary key, meaning that it is a unique identifier for each entry in the Storage table, and cannot be null. The "name", "type" and "size" fields also cannot be null and are of type String and Int respectively.

Overall, this model is used to store information about a storage item, such as its name, type, and size. Additionally, the model is set up to only allow the owner to create and read data.

        type Storage @model @auth(rules: [{ allow: owner, operations: [create, read] }]){
            cid: String! @primaryKey
            name: String!
            type: String!
            size: Int!
        }

  
#### Technology Stack

- React
- Next.js
- AWS Dynamo DB
- AWS App Sync (GraphQL)
- AWS Amplify Hosting
- AWS Amplify
- IPFS
- web3.storage 
- nft.storage (will implement)
- Omnipeer IPFS Daemon (will implement)
- Moonbeam (We will use it's EVM compatibility to run NFT functionality on a Substrate chain.)

  
#### Documentation 

After all milestones are completed, documentations explaining the system technically and containing detailed information for end users will be created and published.  

#### PoC/MVP or other relevant prior work or research on the topic

The project is now ready to be tested live by providing its basic functionality, future milestones will be tested in the same way before they go live.

**Landing Page:** https://omnipeer.net/
<br>
**MVP Link:** https://dev.omnipeer.net/
  
#### What your project is _not_ or will _not_ provide or implement
  - Constant connection guarantee (due to the nature of p2p connections)
  - Unlimited storage quota for end users via third party storage services (like web3.storage)
  - Group chat functionality for this version

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  

    Polkadot's [Chains and Pallets section](https://wiki.polkadot.network/docs/build-open-source#chains-and-pallets) is the best shot for the omnipeer, File Storage & Chat rows are well suited with the project definition.

  
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?


    It is suitable for end users who want onchain or offchain solutions for their file or nft storage needs. Users can quickly transfer files, chat or do nft transactions through a wallet without the need for an intermediary.    
    

- What need(s) does your project meet?

    The project must meet the specifications outlined in the milestones and provide a positive user experience. Please refer to the milestones for more detailed information. 
    
  
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different? 
  <br>
    There are many different projects in the Polkadot ecosystem that focus on areas like storage, NFTs, and messaging. However, what sets Omnipeer apart from these other projects is its user-friendly interface. With Omnipeer, you don't need any technical knowledge to take advantage of its features - everything is designed to be simple and easy to use. This makes Omnipeer a great choice for anyone looking to take advantage of the benefits of the Polkadot ecosystem without needing to become an expert in the underlying technology.
  

## Team :busts_in_silhouette:

### Team members

- Tolga Yaycı

### Contact

- **Contact Name:** Tolga Yaycı
- **Contact Email:** tolgayayci@protonmail.com
- **Website:** [LinkedIn](https://www.linkedin.com/in/tolgayayci/)

### Legal Structure

- **Registered Address:** -
- **Registered Legal Entity:** -

### Team's experience

As a full stack developer with 2 years of experience and a background in developing dApps for the past year, I have gained valuable skills and knowledge in the field of software development. I have a particular interest in the Web3 and NFT space, and have created a few apps related to this area. In addition to my technical skills, I have also been actively involved in the wider tech community. I have served as a Chainlink Community Advocate, Aave Turkey Community Manager, and Founding Chair of Gazi University ACM Student Chapter. My previous role as a Microsoft Learn Student Ambassador has also given me the opportunity to share my knowledge and experience with others. I have set of experiences and skills and particularly in the areas of full stack software development and community management.

### Team Code Repos

- https://github.com/tolgayayci/omnipeer/tree/dev
- https://github.com/tolgayayci

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/tolgayayci


## Development Status :open_book:

Our project has made significant progress and we have achieved the first milestone of our development plan. This milestone includes an MVP (Minimum Viable Product) version of the project which has been completed and is now available for testing. You can check out the working version by visiting the link shared below.

We are now moving on to the next milestone, and in the development roadmap section below, we will provide more information about the details of the first milestone we achieved and what we plan to accomplish in the future. So, we encourage you to check out the development roadmap section for more information.

- Dev Branch (MVP): https://github.com/tolgayayci/omnipeer/tree/dev
- MVP Link: https://dev.omnipeer.net/


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 25000 USD

### Milestone 1 — MVP

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **1.** | Real Time File Transfer | Real Time File Transfer is a feature that allows for the transfer of files between peers in real time using the libp2p-webrtc-star library. One of the benefits of this feature is that it does not require users to know the peer ID's of the parties they are transferring files with, as omnipeer is able to detect and connect to the appropriate peers automatically. This makes it easy and convenient for users to transfer files with others in real time. |
| **2.** | Real Time Chat | Real Time Chat is a feature that allows users to communicate with one another in real time. With this feature, users can add friends and use the libp2p-pubsub library to send and receive messages. It is important to note that in order to use the Real Time Chat feature, both users must be online at the same time in order to send and receive messages. This feature allows for convenient and immediate communication between users. |
| **3.** | Web3 Storage File Upload  | Web3.storage file upload is a feature that allows users to upload files to a decentralized storage network using the web3.storage API. One of the benefits of this feature is that it allows users to store files in a decentralized way, which can be more secure and resistant to censorship compared to traditional centralized storage solutions. However, it is important to note that this feature has a limited quota, and using it may incur costs in the future. |
| **4.** | Usage Stats ( Stream & Upload) | Usage Stats is a feature that allows users to track and monitor their usage of a particular service on Omnipeer. The feature includes both Stream and Upload options, which allow users to view and analyze their usage data in real time or upload it for later analysis. This feature can be useful for understanding how a service or application is being used, identifying patterns and trends in usage, and identifying areas for improvement. It can also be helpful for identifying potential problems or issues that may need to be addressed. |
| **5.** | Add Friend & Edit Profile | Add Friend and Edit Profile are features that allow users to manage their social connections and personal information within a Omnipeer. The Add Friend feature allows users to connect with others and build their network of contacts, while the Edit Profile feature allows users to update and customize their personal information and settings. These features can be useful for building and maintaining relationships within a community, and for ensuring that users' personal information is accurate and up-to-date. |
| **6.** | Landing Page | Omnipeer Landing Page (https://omnipeer.net) |


### Milestone 2 - Final Version

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 15,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant. |
| **1.** | Omnipeer IPFS Daemon  | Omnipeer IPFS Daemon is a feature that allows users to perform large file uploads using our nodes. It is designed to provide users with a convenient way to transfer large amounts of data over the Omnipeer, and is free to use for higher quotas. Omnipeer IPFS Daemon runs on our nodes, which means that users can rely on the stability and performance of our infrastructure to ensure their uploads are successful. |
| **2.** | Magic Implementation | Magic Implementation is a feature that allows users to easily onboard and authenticate with both Web3 and Web2 using magic links. This feature is powered by the Magic SDK, which enables passwordless authentication and streamlines the process of accessing Web3 and Web2 resources. With Magic Implementation, users can quickly and securely access a wide range of online services without the need for complex passwords or other authentication methods. This feature is particularly useful for applications and services that require secure and seamless access to web-based resources. |
| **3.** | NFT Metadata Upload, Mint & Transfer  | NFT Metadata Upload, Mint & Transfer is a feature that allows users to create, manage, and transfer their own non-fungible tokens (NFTs). This feature enables users to attach metadata to their NFTs, including information such as the token's name and description, and then mint new NFTs with these unique attributes. The NFT Mint & Transfer feature also allows users to transfer their NFTs to other users. The NFT Metadata Upload process can be performed using Omnipeer IPFS Daemon, NFT.storage, Pinata, or Web3.storage, depending on the user's preference. The NFT Mint & Transfer portion of the feature will be handled on the Polkadot ecosystem. This feature is useful for creators and collectors of NFTs, as it provides a convenient and efficient way to create, manage, and trade their unique digital assets. |
| **4.** | In App & Email Notifications | In App & Email Notifications is a feature that allows users to receive notifications about various events or updates within an application or service. This feature can be used to notify users about new messages, updates to their account or profile, or any other relevant information. In App & Email Notifications can be delivered through the application itself, or via email if the user prefers. This feature is useful for keeping users informed and up-to-date with the latest happenings within the Omnipeer services. It can also help users stay organized and on top of important tasks or events. |
| **5.** | Upload, Stream and NFT Stats | Upload, Stream, and NFT Stats is a feature that allows users to track and monitor various metrics related to their file uploads, streams, and non-fungible tokens (NFTs). |


## Future Plans

In the short term, we plan to use Omnipeer by promoting it to users and encouraging them to try out the platform. We will enhance the user experience by continually improving the interface and adding new features. We will also promote the platform through social media and online advertising. Additionally, we will offer support to users by providing tutorials and assistance with any issues that may arise. By doing so, we hope to attract a large user base and establish Omnipeer as a popular choice for peer-to-peer file transfer and decentralized storage.

In addition to this, I will hire another developer in the second milestone for development, and I will make sure that milestone will be developed solidly and we will create support systems according to usage data.

## Referral Program (optional) :moneybag: 

- **Referrer:** -
- **Payment Address:** -

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

I have provided information about Omnipeer, a peer-to-peer file transfer and decentralized storage platform, including its technical details and the milestones related to achieving our goals. I am looking forward to the opportunity for you to test the MVP version of the platform. If there is anything that is unclear, please let me know and I will be happy to provide additional information. 

Thank you for your time.


