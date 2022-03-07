# DOT PAY

- **Project Name:** DOT PAY
- **Team Name:** Crypto Pay Lab (CPL)
- **Payment Address:**  3CnxDH6myTaK6MVy3SawVF2FC6FdgfK8pj （BTC address）
- **[Level]:** 2

### Overview

#### Why Dotpay

Many developers love open source very much, but they have no way to devote themselves to the construction of open source, 

because they can't get enough compensation for users' lives in the process of contributing to open source projects, so they must be employed by a certain company.

We hope to use the power of blockchain to change this status quo. 

The owner of an open source project can initiate paid tasks, and developers can complete tasks to get paid. 

Note that it is not a tip. This will allow more power to participate in open source projects and make open source projects better. 

The development of the company generates greater value, and then more funds can be used to pay developers to form a virtuous circle.


#### What is Dotpay

DotPay is a platform that supports paid tasks to complete open source projects on Github.

Our mission is to make open source better with the Polkadot ecosystem:

- Attract more Github developers, especially who are not familiar with blockchain to expand the user-number of Polkadot ecosystem.
- Earn DOT tokens by completing open source tasks to encourage Github developers to communicate, cooperate and innovate with each other.

### Project Details

Page 1: task list
![image](https://user-images.githubusercontent.com/94216827/142724732-b7675c28-bfbb-492d-9f9e-e7ba53c9f4a0.png)

Page 2: Configure Github webhook
![image](https://user-images.githubusercontent.com/94216827/142724798-20a0409d-195a-47b9-ba3b-01c6c647eab5.png)

Page 3: Recharge
![image](https://user-images.githubusercontent.com/94216827/142724518-a22d1760-eeb8-4399-b0ac-e04348002beb.png)

Page 4: Creat tasks and trigger the payment 
![image](https://user-images.githubusercontent.com/94216827/142757369-7bb816ae-b834-4a80-a562-8bb21da0624f.png)

Page 5: Bind reward address

If the developer has not bound the address before, 
the system will prompt him to use the following instructions to bind, 
just reply to similar instructions like `/dotpay bind [address]` in the issue corresponding to the task

![image](https://user-images.githubusercontent.com/94216827/145700577-bb02ef26-cebd-4516-bc9b-772a90f36b68.png)

### Flow-process diagram

![image](https://user-images.githubusercontent.com/94216827/142736787-f9bdb340-8703-48b5-9b5a-24dd70f42f08.png)

DotPay is a payment platform, you can initiate open source tasks and paid with DOT tokens  (for example, you can initiate paid collaboration tasks when you encounter difficulties in architecture construction, requirements analysis, document construction and testing). Those who complete the tasks as required can receive tokens after the task initiator verifies that the tasks are completed

The specific process is as follows:
1. Alice recharge Dot tokens on the platform.
2. Alice initiates paid open source tasks on the Github (such as the task about architecture construction, requirements analysis, document construction, development and testing, etc )
3. Bob accepted this task on Github and completed it!
4. Alice clicks on the payment instruction.
Github receives the instruction and trigger the webhook to contact Bob by email and other notification methods to notify that 10 DOT tokens have been put into our platform
Exclusive account Wallet.
5. Call Polkadot API for on-chain transfer.
6. Bob withdraws 10 DOT tokens from our platform to his wallet(such as Polkawallet or MetaMask), if Bob already bind his own address, will transfer DOT to his account directly.

### Data models / API specifications of the core functionality

> Create tasks

```
{
  "id": "issue id",
  "name": "issue name",
  "repo": "paritytech/substrate",
  "author": "gavofyork",
  "pay": "10DOT",
  "describe": "issue overview",
  "createTime": "",
  "updataTime": "",
}
```

> Apply task

```
{
   "issueID": "issue id",
   "applier": "Bob",
   "applyTime": ""
}
```

> Payment

Command line in issue reply: `/pay Bob 10DOT`

```
{
   "id": "payment id",
   "from": "Alice",
   "to": "Bob",
   "amount": "10DOT",
   "RMKS": "Alice pay bob",
}
```

### An overview of the technology stack to be used

* Font-end, typescipt,react
* Backend, golang,Rust
* Devops, github action, kubenretes
* Search, MeiliSearch

### Key Functions

0. User management
    - Using github OAuth2 login, user group management. 
    
1. Email / Issue informal
    - Imformal user to withdraw their DOT tokens.

2. Webhook sever
    - Github webhook management, listen events and trigger payment.

3. Transfer module
    - Transfer by calling the API of the chain.

4. Recharge / Withdraw
    - User recharge DOT tokens if they want to pay others on Github.
    - User withdraw  DOT tokens to their own wallet.

5. Issue search
    - Users can find and filter paid collaboration tasks that meet their requirements in the issue search form.

6. Payment secrect management 
    - Create it on DotPay website and config it to github secrect to pay user DOT.
    
7. Recharge & transfer by ink! contract

* Set the maximum amount and maximum total amount for each transaction
set_limit(per_transfer_amount, total_transfer_amount)
Only the owner of the project has the calling permission

* Set up the transfer whitelist
set_witelist(username, address)
Only the owner of the project has the calling permission

* Transfer interface
transfer(address,amount)
The platform has the calling permission

Benefits of this design:
* The platform no longer needs the owner to recharge, just need to sign a contract with the owner
* The platform does not have the authority to set a whitelist, ensuring that the platform cannot transfer funds to addresses other than the whitelist set by the owner
* The single maximum amount and the total amount set to a certain extent ensure the safety of the owner's funds


### Ecosystem Fit

As far as I am concerned, there are no similar projects in Polkadot ecosystem. 

Maybe we have some similarities with dotmarket, there are still many differences to compare with dotmarket,

dotpay will focus on open-source payment collaboration, deep integration with GitHub, closer to end-users，

what's more important is we prefer to realize open source payment cooperation in Polkadot ecosystem. 

As we all know Polkadot offers flexible cross-chain interoperation functionality with a large user base and volume expectation, 

and as a mainstream cryptocurrency with high market value, DOT tokens is easier for developers to accept and be recognized，

we also believe that we will attract more Github developers especially who not familiar with blockchain to join and expand the user-number of Polkadot ecosystem.

And we also look forward to cooperating with dotmarket in the future.

## Team :busts_in_silhouette:

### Team members 

We will pleased to offer github accounts, LinkedIn and any other information in private.

All team members can contact privately for any specific information.

* Richard Fang: team leader, core developer

* Fugen Wang: Background development
  - responsible for the development of the website background.

* Yang Li: 
  - Responsible for front-end development.

* Peng Qiao: Rust developer 
  - Responsible for back-end development, relevant development of blockchain, payment task management module, and docking API and key management module on the chain.

 
* Wei Zhang: 
  - Responsible for operation, promotion in the open source community after the website is launched, and attracting open source projects to use our services.
 
* AdaLam:  PD/PMO  
  - Responsible for product design and project schedule management.
 
### Team's Experience

* Richard Fang:
    - As an expert in the field of cloud computing in one of the biggested Internet listed companies with 7 years of rich working  experience. 
    - The author of a well-known cloud native project which has more than 5K stars and 4k paid enterprise users. 

* Fugen Wang:
   - CEO of an Internet start-up company and manages more than a dozen employees with 7 years working experience.
  
* Yang Li:
   - Andriod/IOS front-end engineer with 5 years working experience.
 
* Peng Qiao: 
   - A core member of AI Research Institute wich is one of the top AI listed companies in China with 5 years working experience.
 
* Wei Zhang:
   - An advertising director, one of the top AI listed companies in China with 7 years of rich working experience.
 
* AdaLam: PD/PMO
  - Familiar with product design and project schedule management.

### Contact

- **Contact Name:**  AdaLam
- **Contact Email:** adalamlzy@gmail.com
- **Website:**  comming soon 

- **Contact Name:** Richard Fang
- **Contact Email:** lamelegdog@gmail.com

### Legal Structure

We will be pleased to offer specific information in private.

### Team Code Repos

https://github.com/bytepayment 

https://github.com/bytepayment/bytepay  

### Team LinkedIn Profiles

We will provid in private through Google Form.

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 8 weeks
* **Full-time equivalent (FTE):**  5
* **Total Costs:**  30,000 USD

### Milestone 1 — User account management & repo management & mnemonic management
* **Estimated Duration:** 4 weeks
* **FTE:**  5
* **Costs:**  15,000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Dotpay user guide, workflow, and what is dotpay. |
| 0c. | Testing Guide | We will provide uni test for user management and recharge management modules(70% cover), the two module UI test report |
| 0d. | Docker | We will provide Dockerfile and docker image to run the website in one command line |
| 1. | User management, create an polkadot account for each developer | We will provide login function, you can login our website using github, and we will create an polkadot account for each user by default |
| 2. | Repo & webhook management| We will fetch your github repo list, so you can active the repo you want integrate with polkadot, the webhook module will listen the pay event and tigger transform module to pay developer DOT |
| 3. | Address binding | Develop using github issue comment to bind there polkadot address. `/dotpay bind [address]` |
| 4. | Recharge management | Recharge DOT to your platform account |
| 5. | Transfer ink! contract| We will provide an tested ink! contract on Substrate Smart Contracts Node, provide transfer limit, witelist and transfer function. The platform will integrate the contract when the Polkadot mainnet contract para chain is available. |

### Milestone 2 — Transfer module, task module, informal, withdraw module
* **Estimated Duration:** 4 weeks
* **FTE:**  5
* **Costs:**  15,000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide docs about how to create a task, how to tigger the payment, and how to withdraw |
| 0c. | Testing Guide | We will provide uni test for task,transfer,informal,withdraw modules(70% cover), and UI test report |
| 0d. | Docker | We will provide Dockerfile and docker image to run the website in one command line, and you can to test those modules |
| 1. | Task management | Create a paid task by comment an issue, it will trigger the create task event though the webhook, and webhook server will save the task and show it on our page, when developer complete the task, will tigger transfer module to pay the developer |
| 2. | Tansfer module | Trigger a payment by comment an issue, like `/pay Bob 10DOT`, the DOT will transfer to developer platform account |
| 3. | Withdraw module | Withdraw the DOT from our platform to developer own wallet, if developer bind it own address, payment will transfer to the account directly |
| 4. | Informal | Developer will receive the event, tell him how to withdraw DOT in our platform, robot will send Bob email and comment the issue |



## Development Status

https://github.com/bytepayment/bytepay

We have developed the webhook event processing module.
The following is a brief description of what the repository contains:
Including GitHub webhook server，it can listen to GitHub events, handle some specific instructions in the issue, and extend the instruction processor.

## Future Plans

-  About our future plan, we will support more payment scenarios, such as website recharge VIP and online payment to buy goods after completing this grant.
-  And then, we are going to support more platforms to expand the number of users, not only completing paid tasks on Github , but also on Telegram, Discord, Twitter, etc,
   and we also have an idea that cross-chain cooperation with other project.
-  After that, We will launch our own Polkadot para-chain tokens and the open source developers will receive  tokens by completing the paid tasks on Github.

## FAQ

> Why not use Paypal? 

Paypal has obvious borders for global developer collaboration, and it is not convenient to use. 

In fact, we did similar attempts at the earliest and found that many countries do not use Paypal at all. 

And we hope that open source paid collaboration More decentralized rather than relying on a certain company.
