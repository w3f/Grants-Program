# W3F Open Grant Proposal

* **Project Name:** Maslow Life Network
* **Team Name:** Vanadium
* **Payment Address:** 3HvWkYocTb9wgCQBEjYrTa7Ke8yCZYDAmX (BTC Address)

## Project Overview :page_facing_up: 

Considering the fact that the current social platforms (facebook/instragram/twitter, etc.) on the market are controlled by centralized platforms, and the problem of messy information on social networks has existed for a long time, Maslow Life Network is a decentralized social platform. Committed to transferring control from centralized power to individuals. Compared with other social platforms that use its own algorithms to control community content, Maslow Life Network uses open logic to determine community content. One of the main purposes of the platform is to return the beneficiary rights of user data and content to users, and to establish a blockchain decentralized social platform. We intend to expand to other areas of life on the basis of this social platform, while creating a perfect social space and convenient application functions.

![](https://i.imgur.com/tMpY3hh.png)

### Overview

Maslow Life Network is used to develop various life or social applications, given the future scalability of social applications, we need a technology that will not be hard-forked and can be upgraded. Substrate can meet the huge development needs of Maslow Life Network, And can be used in the future polkadot’s cross-chain advantages to interacting with others chain. People from all over the world can communicate freely on this platform.

We will initially build three social module pallets based on Substrate, including the creation of basic user information/friendships/posts to create a basic social application environment, so that users become application controllers to solve the problem of centralized control of traditional platforms. And through the existing NFT pallet (https://github.com/danforbes/pallet-nft), And cast user post into NFT(Consumption of LNT) and users will consume fees(Consumption of LNT) to use these pallets to solve the problem of information clutter and value, making Maslow Life Network a social platform for the Polkadot ecological community. In the future, Under this framework, all applications such as a donation reward mechanism similar to live broadcast or paid dating will be transparent and open. Our team believes that it is very important to establish a healthy and transparent social ecology, so that users can start using and better understand the blockchain ecology, and believe that this can make the application of the blockchain more popular.

Note: LNT is the native currency of Maslow Life Network


### Project Details 

First of all, we will first use the Substrate framework to build the Maslow Life Network to adapt to the data throughput of the social application module. Then, we will first make three pallets with personal information/friendship/posts, package them into RestfulApi in golang, and combine them with UI design and React to integrate and display Dapp. In this application, users can initially create their own avatar and use it to build friendships with other users and publish their own posts. Finally, post will be cast into NFT (Consumption of LNT), and users use these pallets will consume a certain amount of fee(Consumption of LNT), in order to solve the information confusion and value problems mentioned in the previous section. In the future, it will not rule out the possibility of transactions between users.

![](https://i.imgur.com/wZRKoDJ.png)

We have planned a preliminary wireframe (https://956dkl.axshare.com), let us use this wireframe to make a rough explanation.

1. In terms of personal information, users can create their own characters in a virtual world for future communication in this virtual world, but we will treat it as a user on a social platform. You can use ```pub fn sign_up``` to create an instance of an account, ```pub fn sign_in``` to log in, and ```pub fn update_user``` to update personal information of the account.

![](https://i.imgur.com/wuLQuNw.png)

![](https://i.imgur.com/Tx4YBPG.png)

2. In the friends section, you can basically see the list of friends and detailed information, which can be roughly demonstrated and interacted in the wireframe. You can use ```pub fn submit_relationship_approve``` to send an offer to establish a friendship relationship, and the other party can use ```pub fn relationship_approve_review``` to make a promise, and ```pub fn set_relationship_limit``` is the upper limit of friendship checker.If you exceed the friend limit, you need to pay LNT to expand the friend limit.

![](https://i.imgur.com/8uORBbO.png)

![](https://i.imgur.com/cC0ZMPS.png)
![](https://i.imgur.com/0Tk5kjQ.png)

3. The post function can be used for simple post/mood interaction in the minimum feasible application. You can use ```pub fn post``` to send post information, and you can use ```pub fn post_feel``` to send the feeling about the post. Finally, these posts can be cast into NFT to solve the problem of information value.
![](https://i.imgur.com/8wxIhsQ.png)

![](https://i.imgur.com/iVdeB2h.png)


### Ecosystem Fit 

* Users can create a circle of friends in this application, and then share many interesting things about life on this circle of friends.
* Since the user uses any pallet to consume LNT, it can effectively eliminate spam, and the post will be cast into NFT and consume LNT once, which can promote the emergence of truly valuable information.


## Team :busts_in_silhouette:

### Team members
* Diego Li(Full-Time, Founder, CEO & CTO)
* Justinian Li (Full-Time, Product Owner, COO, Senior Project Manager, Senior Product Owner&Manager)
* River Lu (Full-Time, Senior Project Manager, Senior Product Owner&Manager)
* Penny Chang (Full-Time, Senior User Experience Design, Senior User Interface Design)
* Paul Chuang (Full-Time, Senior Blockchain Developer, Front-end Developer)
* Jiang Yu (Full-Time, Senior Blockchain Developer, Front-end Developer)
* Jason Mo (Full-Time, Senior Blockchain Developer & Backend Developer & System Analysis)
* Tony Chen (Full-Time, Senior Blockchain Developer & Backend Developer & Database Administrator)

### Contact
* **Contact Name:** Chaoyang Li(Diego Li)
* **Contact Email:** m21917@gmail.com
* **Website:**

### Legal Structure 
* **Registered Address:** 3F.-12, No. 121, Sec. 1, Chongqing S. Rd., Zhongzheng Dist., Taipei City 100006, Taiwan (R.O.C.)
* **Registered Legal Entity:** Vanadium Technology Co., Ltd.

### Team's experience
* **Diego Li**
  * Founder of Vanadium Technology
  * Over 10 years of experiences in Software Development
  * Devops import 
  * Solution Architect 
* **Justinian Li** 
  * Over 10 years of experiences in Software Development
  * Product Owner
  * Product Manager
  * Project Manager
* **River Lu**
  * Over 6 years of experiences in Software Development
  * Product Owner
  * Product Manager
  * Project Manager 
* **Penny Chang**
  * Over 10 years of experiences in User Experience Design
* **Paul Chuang**
  * Over 10 years of experiences in Development 
  * Blockchain Developer
  * Front-end Developer
* **Jiang Yu**
  * Over 10 years of experiences in Development
  * Blockchain Developer
  * Front-end Developer
* **Jason Mo** 
  * Over 10 years of experiences in Development
  * Blockchain Developer
  * Backend Developer
  * System Analysis
* **Tony Chen**
  * Over 10 years of experiences in Development
  * Blockchain Developer
  * Backend Developer
  * Database Administrator

## Development Roadmap :nut_and_bolt: 
### Overview
* **Total Estimated Duration:**  2 months
* **Full-Time Equivalent (FTE):** 8 FTE
* **Total Costs:** 25,000 USD

### Milestone 1  — Implement Substrate Modules & application
* **Estimated Duration:** 2 months
* **FTE:**  8 FTE
* **Costs:** 25,000 USD
  
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0.|
| 0b. | Documentation | User interface design mockup / User guidelines / Pallet usage guidelines / Software Build guidelines / Test methods guidelines |
| 1. | Foundation | Fork the substrate framework and analyze how to use it on the Github.|
| 2. | Para-chain | Build the Maslow Life Network needed for subsequent development based on the substrate framework, Then write instructions and provide them on Github.|
| 3. | Personal information pallet | Build a Personal information pallet based on the Substrate framework,includes Wallet address/ Last name/ First Name/ Nickname/ Birthday/ Country / Birthplace/ Gender/ Avatar.|
|  | **function：** |`pub fn sign_up(origin, info: User)->dispatch::DispatchResult`<br><br>`pub fn update_user(origin, info: User)->dispatch::DispatchResult`|
|  | **storage：** |`Users get(fn get_use<br>r_info): map hasher(blake2_128_concat) u32=> Vec<User>`|
| 4. | Friendship pallet | Build a Friend pallet based on the Substrate framework, includes Submit/ Relationship/ Unrelationship/ Agree/ Unagree/ Timestamp/ Limit.|
|  | **function：** |`pub fn submit_relationship_approve(origin, user_id: u32)->dispatch::DispatchResult`：<br><br>`pub fn relationship_approve_review(origin, relationship_id: u32, approve: u8)->dispatch::DispatchResult`<br><br>`pub fn set_relationship_limit(origin, limit: u32)->dispatch::DispatchResult`|
|  | **storage：** | `RelationshipMap get(fn get_relationship): map hasher(blake2_128_concat) Account=> Vec<Relationship> ;`<br><br>`RelationshipApprove get(fn get_relationship_approve): map hasher(blake2_128_concat) Account=> Vec<RelationshipApprove> ;`|
| 5. | Post pallet | Create Post pallet based on Substrate framework, includes Avatar/ Last name/ First Name/ Nickname/ Timestamp/ Content/ Feel/ Others respond feel|
|  | **function：** |`pub fn post(origin, post_info: <Post>)`<br><br>`pub fn post_feel(origin, post_id: u32, feel_info: <PostFeel>)`|
|  | **storage：** |`UserPost get(fn get_post): map hasher(blake2_128_concat) Account=> Vec<PostID> ;`<br><br>`Post get(fn get_post): map hasher(blake2_128_concat) PostID=> Vec<Post> ;`<br><br>`PostFeel get(fn get_post): map hasher(blake2_128_concat) PostID=> Vec<PostFeel> ;`|
| 6. | Dapp implementation | Integrate the pallet, and use react to develop Dapp on the front end to complete the minimum feasible application.| 

## Future Plans

In the future,live donation reward mechanism or paid dating may be added first, and to solve the problems of opaque reward system and unfair extraction mechanism under traditional platforms. Maslow Life Network will establish an open/transparent/fair platform, not only that, but also expand it. To other applications, such as adding different items such as e-commerce/message/sports/tourism, integrating community mechanisms, and establishing a complete ecosystem.
