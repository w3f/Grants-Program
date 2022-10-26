            # W3F Grant Proposal
- **Project Name:** SubSupplyChain
- **Team Name:** TwinP
- **Payment Address:** 0xd042e53e22e9f941ceba02f4adb9d1b32ef43675
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
## Project Overview

### Overview
- We will build a Supply Chain product using blockchain
- The Supply Chain product will be used by businesses for package delivery.
- My team is happy to create this project because they want to build something to help businesses and the web3 community.

### Project Details
This project will help the supply chain avoid third-party authorities handling delivery by saving money and time. I would like to explain the purpose of the project with a real example.
In this process will take place four different actors: admin, client, manager, courier.
The whole process can have a status like ordered, assembling, ready to deliver, in delivering or sent. The
package will have only one owner(for every step) and he will be in charge of the package.


ADMIN
- The admin (business owner) has the authority to grant addresses. The admin has the authority to grant
  a courier to his managers. The manager can create a shop with items available.Property of an item: id,
  weight, price, and quantity.

MANAGER
- The company will have a certain number of managers. A client can make an order and money/token will be
  locked to a third account and assigned randomly to one manager. Funds would be released to the company
  if the client receive the package. The order properties are weight, QRcode, company name, client name,
  address, number of items, the id of the item, price for every item. After the manager
  has the order in his name he has the right to pass the status of that package from assembling to ready
  to deliver or to decline it and the funds would be unlocked to the client.

COURIER
- The courier will scan a package and take ownership of it or decline it.From now on he will be in charge if any
  package gets damaged or lost, or he can decline the package for any reason like miss information, package
  opened, etc.

CLIENT
- After an order the client should scan the QR code and take ownership of the package or decline it for
  any reason like a damaged package. If the client scans the package, the money would be released to the
  admin, if not, the money would be released to the client.

ADMIN
- Creation of admin (once the admin is created no one else can be admin)
- Creation of manager (admin grants other addresses as managers)
- Creation of couriers and their managers (admin grants other addresses as courier and his manager)
- Creation of items with id,price,address, QR code,and weight.
- Can see the status of the package just by id.

MANAGER
- Change the status of the package from ordered to assembling and from assembling to ready to deliver.
- Can see the status of the package just by id

COURIER
- Scan the packages assigned to his name and take ownership or decline it and change the status of the package.
- Can see the status of the package just by id.

CLIENT
- Make an order 
- Scan his package and take ownership or decline it.
- Can see the status of the package just by id.

NOTE: Qr code would be in string format.

### Technical Details

Pallet: admin_pallet
This pallet would contain all the functionality of admin
Method of admin pallet: 
1-creat_admin // The first account which calls this method will be the admin, the account address will be stored.
2-create_manager // A list of address would be stored.
3-create_courier_managers // A hashmap structured would be stored, the key would be the menager in charge and the value would be its courier
4-create_items // A vector with a Structure will be stored with details like weight, qrcode, id etc.
5-show_package_status // An id will be given as param and its status will be shown.

Pallet: manager_pallet
This pallet would contain all the functionality of manager
Method of manager pallet:
1-change_status // Every package would have an id, the manager can change the status for the package by id and store the new status
2-show_package_by_id // Show the package details (status, QRcode, weight etc) , this information will be found in storage.

Pallet: curier_pallet
This pallet would contain all the functionality of curier
Method of curier pallet:
1- scan_package // A method which is given as param the QRcode and it changes the ownership of package.
2- show_package_by_id // Show the package details (status, QRcode, weight etc) , this information will be found in storage.

Pallet: client_pallet
This pallet would contain all the functionality of curier
Method of curier pallet:
1- scan_package // A method which is given as param the QRcode and it changes the ownership of package.
2- show_package_by_id // Show the package details (status, QRcode, weight etc) , this information will be found in storage.
3- make_order // A hashmap structure will be stored. The key would be the address of client and the order will be a structure with a vector which will contain the item id and the other properties.

### Ecosystem Fit
- Substrate learners would have a SupplyChain system as an example.
- Blockchain ensure transparency and security. It enables companies to track the changes efficiently and records what is changed, why who, and when made the changes.
- Current systems are centralized, which means that a malicious attacker can have full control,  with blockchain networks, there is no central authority over the whole system

## Team
### Team members
- MSc Eljo Prifti - Substrate/Rust developer with proven experience. Contributor to substrate open source repositories.
- Eng Gerti Prifti - Substrate/Rust developer with proven experience

### Contact

- **Contact Name:** MSc Eljo Prifti
- **Contact Email:** elioprifti@gmail.com
- **Website:** https://www.linkedin.com/in/elioprifti/

### Legal Structure

- **Registered Address:**  We do not have any registered address
- **Registered Legal Entity:** We do not have any registered legal entity

### Team's experience

Hello, my name is Elio. I have a master's degree in computer science and I have more than 6 years of experience as a professional software developer in the Android/Java developer in the market. I have been deeply fascinated by blockchain and discovered Substrate. I have spent 1+ year learning/contributing to Rust/Substrate.I am a contributor to the Substrate recipes repo,  taking it upon myself to upgrade Substrate “Kitchen Node” Recipes from v1 to v2, which took 5-6 months working in my spare time.

Hello, my name is Gerti. Over the last 5 years, I've been continuously working towards achieving clients' business goals through the application of IT technology. The collaborations I've had working in a few industries brought to life numerous products with an audience of thousands and even millions of users. The secret behind this success was creating an intuitive, visually attractive application customized to the needs of the target clientele.In addition to the substantial experience working as a Java Enterprise, I've also gained a Master's Degree in Computer Science that has equipped me with a strong knowledge of the newest tools and technologies to create flawless products your clients will enjoy.For the last few years, I have been curious about Substrate/Rust, and I am learning it in my spare time.
### Team Code Repos

- https://github.com/JoshOrndorff/recipes/pull/471
- https://github.com/herou/recipes


### Winner of a small grant to build an Escrow system on top of substrate
Deliver everything on time and meet all the requirements
- https://github.com/w3f/Grants-Program/pull/1094 - Winner of Grant Level 1
- https://github.com/herou/EscrowPallet - Source code
- https://github.com/w3f/Grant-Milestone-Delivery/pull/599 - Milestone 1
- https://github.com/w3f/Grant-Milestone-Delivery/pull/566 - Milestone 2 and 3

### Team Github

- Eljo : https://github.com/herou
- Gerti: https://github.com/gertt

### Team LinkedIn Profiles
- MSc Eljo Prifti: https://www.linkedin.com/in/elioprifti/
- Eng Gerti Prifti: https://www.linkedin.com/in/gertiprifti/

## Development Status
We would like to use the Substrate template node
- [Substrate node template](https://github.com/substrate-developer-hub/substrate-node-template)

## Development Roadmap

### Overview

- **Total Estimated Duration:** 3-5 months
- Full-Time Equivalent (FTE): 2 FTE
- **Costs:** $30,000 USDT


### Milestone 1 — Implement admin functionalities

- Estimated Duration: 1-2 months
- FTE: 2
- Costs: $10,000 USDT

| Number | Deliverable                                                                                             | Specification                                                                                                                                     |
|-------:|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                                                                                                 | Apache 2.0                                                                                                                                        |
|    0b. | Documentation                                                                                           | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how an address can be an admin.                  |
|    0c. | Testing Guide                                                                                           | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Article                                                                                                 | We will publish an **article** that explains how an SupplyChain system can be created and how can it be used.                                     
|    0e. | Benchmarking                                                                                            | Benchmarking will be provided for creat_admin, create_manager, create_courier_managers, create_items, show_package_status .                       
|    0f. | Substrate modules: creat_admin, creat_manager, creat_courier_managers, creat_items, show_package_status | We will create a SupplyChain system that will creat_admin, create_manager, create_courier_managers, create_items, show_package_status             |


### Milestone 2 — Implement manager functionalities

- Estimated Duration: 1-2 months
- FTE: 2
- Costs: $10,000 USDT

| Number | Deliverable                                                            | Specification                                                                                                                                     |
|-------:|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                                                                | Apache 2.0                                                                                                                                        |
|    0b. | Documentation                                                          | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how an address can be a manager.                 |
|    0c. | Testing Guide                                                          | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Article                                                                | We will publish an **article** that explains how an SupplyChain system can be created and how can it be used.                                     
|    0e. | Benchmarking                                                           | Benchmarking will be provided for change_status, show_package_by_id                                                                               
|    0f. | Substrate modules: change_status, show_package_by_id | We will create a Substrate module that will change_status, show_package_by_id                                                                     |

### Milestone 3 — Implement courier, client functionalities

- Estimated Duration: 1-2 months
- FTE: 2
- Costs: $10,000 USDT


| Number | Deliverable                                                     | Specification                                                                                                                                     |
|-------:|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                                                         | Apache 2.0                                                                                                                                        |
|    0b. | Documentation                                                   | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how an address can be a courier, client.         |
|    0c. | Testing Guide                                                   | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Article                                                         | We will publish an **article** that explains how an SupplyChain system can be created and how can it be used.                                     
|    0e. | Benchmarking                                                    | Benchmarking will be provided for scan_package, make_order, show_package_by_id.                                                                   
|    0f. | Substrate modules: scan_package, make_order, show_package_by_id | We will create a Substrate module that will scan_package, make_order, show_package_by_id                                                          |

## Future Plans

- In the future we may have the android version as front-end and add rpc develop on blockchain side.