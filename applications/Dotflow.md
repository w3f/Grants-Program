# Dotflow

- **Team Name:** Sergej Sakac & Oliver Lim
- **Payment Address:** 0x1e86CD18E4443B5f57b0133077954Cd84896964d (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

#### Problem
We can most certainly agree that the future is multi-chain. As such, it is not uncommon for users to hold multiple accounts across various chains for reasons such as distinct address formats and security benefits. However, this practice presents a challenge in managing multiple addresses. Adding to the complexity is the need to verify the address of the intended recipient, as it may have changed over time.

In summary, there are two key challenges to address: the management of multiple addresses and making sure the addresses of the recepients did not change in the meantime.

To mitigate these challenges, we aim to simplify the user experience by abstracting away the complexity of address management.

### Project Details

Our project will comprise of two smart contracts coded in ink!, and a React.js-based user interface.

The first contract will store users' address-related data in an entity called `Identity`. Each user will have their own `Identity`, which will contain their addresses across different chains. The Identity creators will be responsible for updating their addresses if any changes occur. Every Identity will be assigned a unique `IdentityNo`, which will serve a crucial purpose in the second contract.

Additionally, this contract will feature a function that, based on input arguments, will return the appropriate destination address for token transfers. This function will mainly be used by the user interface.

The second contract will be an address book that enables users to store the `IdentityNos` of the people they are most frequently engaged with . Each user will have the option to create their own address book, where they can add a nickname to each identity to differentiate them easily.

The UI we are going to build will serve the purpose of interacting with both of our contracts. Users will be able to create an identity and customize the addresses of their identity. Using the UI users will also be able to create their address book and customize it. The most important functionality the UI will provide will be routing.
When a user wants to transfer some tokens to an identity the user will only have to worry about the token, origin and destination chain and the identity they want to send the token to. Based on all of this the UI will query the first contract and based on that create a transaction that will route the tokens to the proper address.

In case the origin and destination chain are not the same, the UI will create an XCM message that will route the tokens to the proper blockchain.

### UI Design
The UI will consist of three main parts:

- My Identity page
- Transfer page
- Address book page

#### My Identity page
![My Identity page](https://i.postimg.cc/288CDys6/1-1-dashboard-1.png)

The user will be able to create his own identity and provide the addresses that he owns on different chains. 

![Add Address](https://i.postimg.cc/jdKdPQS5/1-1-create-identity.png)

In case some of the addresses the user owns change over time he will be able to edit them.

![Edit Address](https://i.postimg.cc/G2w1rdB2/1-1-create-identity-1.png)

#### Transfer page
[![2-1-transfer-1.png](https://i.postimg.cc/Cx9ZCHpB/2-1-transfer-1.png)](https://postimg.cc/75MYwz6w)

Ther user will be able to transfer tokens to an identity by specifying the origin chain, destionation chain, and the receiver's `identityNo`.

#### Address Book page
![Address book page](https://i.postimg.cc/QtXyT9kK/3-1-Address-book.png)

The user will be able to add identities to his own address book. The identities will be added by providing the `identityNo` and some nickname for the identity.
 Also by clicking on the transfer icon on one of the identities the user will be redirected to the transfer page where the `identityNo` will be automatically filled out.

![Add identity](https://i.postimg.cc/TwzSg9j3/3-1-Address-book-2.png)

### Ecosystem Fit

This project fits perfectly with the Polkadot ecosystem because it has everything we need to make it work. Polkadot is a multi-chain network, so a lot of users have different addresses on different chains for the same reasons we mentioned earlier. That's why the problems we talked about are important in this ecosystem.

XCM is going to be a core component of our project since it'll help us transfer tokens between the parachains and the relay chain.

#### Target Audience
Our target audience is people who deal with sending assets frequently over the Polkadot network.

## Team :busts_in_silhouette:

### Team members

- Sergej Sakac [Szegoo](https://github.com/Szegoo)
- Oliver Lim [cuteolaf](https://github.com/cuteolaf)

### Contact

- **Contact Name:** Sergej Sakac
- **Contact Email:** sakacszergej@gmail.com
- **Website:** https://github.com/Szegoo

### Legal Structure
- **Registered Address:** Kanalska 7 Novi Sad Serbia
- **Registered Legal Entity:** MASTER UNION LLC.

### Team's experience

#### [Sergej Sakac](https://github.com/Szegoo) 
- More than three years of programming experience
- Active contributor to [Substrate](https://github.com/paritytech/substrate/pulls?q=is%3Apr+author%3ASzegoo)
- Member of the [fellowship](https://github.com/polkadot-fellows/seeding/pull/36)
- Contributor to [rmrk-pallets](https://github.com/rmrk-team/rmrk-substrate/pulls?q=is%3Apr+is%3Aclosed+author%3ASzegoo)

#### [Oliver Lim](https://github.com/cuteolaf)
- Full stack blockchain developer with 5+ years of experience
- Quick learner and active contributor to open source projects
  - [Fair Squares](https://github.com/fair-squares/fair-squares)
  - [Imbue Network](https://github.com/imbuenetwork)
  - [Anagolay Network](https://gitlab.com/anagolay/anagolay)
  - ...

### Team Code Repos

We will be working on two separate repos, one for the UI and the other for the ink! contracts.

- https://github.com/TheDotflow/dotflow-ui
- https://github.com/TheDotflow/dotflow-ink

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/Szegoo
- https://github.com/cuteolaf

### Team LinkedIn Profiles (if available)

- http://linkedin.com/in/sergej-sakac-334a47252
- https://www.linkedin.com/in/oliver-lim-2215a8235/

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2,5 months
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** 19,000 USD

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Ink! contracts and the UI code will be well documented and open for everybody to take a look. The UI will be simple and intuitive to use. |
| **0c.** | Testing and Testing Guide | The Identity ink! contract will be well tested with unit and integration tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milesone. |
| 1. | Identity Contract | We will write the code for the Identity contract using ink! so that our contracts can be compiled to wasm and deployed to any blockchain that implements the contracts pallet. The Identity contract will provide a range of functions, including creating an identity, adding addresses that are mapped to specific blockchains, and updating these addresses as needed. The contract will automatically generate a unique identifier, referred to as `identityNo`, for each identity. To ensure maximum security, we will allow the identity creator to specify the accounts that are authorized to modify the identity's addresses. This will enable the creator to retain control of the identity even if they lose access to the account used to create it.|
| 2. | My Identity page | The My Identity page will be developed using React.js, providing users with a user-friendly interface to interact with the Identity contract. This will include the ability to create a new identity, add or remove addresses associated with an identity, and access and copy the unique `identityNo` to share with others. The interface will be based on the mock design presented in the [UI design](https://github.com/Szegoo/Grants-Program/edit/application/applications/Dotflow.md?pr=%2Fw3f%2FGrants-Program%2Fpull%2F1657#ui-design) section. |


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1,5 month
- **FTE:**  1,5
- **Costs:** 11,000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Both contracts and the website code will be well documented and open for everybody to check. The UI will have a simple UI that will be intuitive to use. |
| **0c.** | Testing and Testing Guide | The Address Book ink! contract will be well tested with unit and integration tests. The functionality for generating XCM messages will very well tested to make sure the tokens are always transfered to the proper destination. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milesone. |
| 0e. | Article | We will publish a Medium article that explains the details of our project. |
| 1. | Address Book Contract | We will develop the code for the Address Book contract using ink! so that our contracts can be compiled to wasm and deployed to any blockchain that implements the contracts pallet. The Address Book contract will enable users to create an address book and populate it with the identities they interact with most frequently. |
| 2. | Routing functionality. | The code responsible for routing tokens to the correct destination will be incorporated into the frontend code written in TypeScript. This code will incorporate the necessary logic for constructing XCM messages to route tokens to the appropriate address. In cases where the destination chain is the same as the origin, a simple transaction will be executed.
| 3. | Address Book page | We will write the code for the Address Book UI using React.js. The UI will be based on the provided mock design that we displayed above in the [UI design section](https://github.com/Szegoo/Grants-Program/edit/application/applications/Dotflow.md?pr=%2Fw3f%2FGrants-Program%2Fpull%2F1657#ui-design). The UI will make it possible for users to create an address book and add identities to it. |
| 4. | Transfer page | We will create a user interface using React.js that will enable users to send tokens to a designated `IdentityId`. This UI will abstract away the complexity of addresses and leverage the Routing functionality described in this table(Section 2) to handle token routing. The UI design will be based on the mock design presented in the [UI design](https://github.com/Szegoo/Grants-Program/edit/application/applications/Dotflow.md?pr=%2Fw3f%2FGrants-Program%2Fpull%2F1657#ui-design) section for optimal user experience. |


## Future Plans

Our future plan is to expand our core functionality and add more features so that the tokens can be routed based on some different criteria. Some example of these ideas are: 

- Route tokens based on the amount, sender and/or the token itself
- Split the transferred amount to multiple addresses

An exciting feature we would like to build in the future is enable token transfers between blockchains that are not part of the Polkadot network(e.g. Polkadot<->Ethereum).

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** GitHub
