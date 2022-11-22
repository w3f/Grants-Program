# daos

* **Team Name:** daos-org
* **Payment Address:** 0x08A7876db92b07057E12fAF29AA3CCF33b5aAe3D (USDT ERC20)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Overview

* This project provides a more flexible governance framework for a large number of small groups with common characteristics. It allows developers to create behavior templates based on this set of governance solutions in the simplest way possible,
However, the origin of each specific behavior in the template completely depends on the users in the population (here we can call it the instance), that is, different user groups using the same type of template can have different Origin combinations.
This can be very useful, especially for products like LISTEN and KICO that have a strong group nature. Rooms are a template, multiple assets are a template, ico are a behavior template.
* In addition to the methods provided by DAOS, the origin of other methods executed externally by DAO is DAO-Account, which is equivalent to an ordinary user. This is a very subtle design of governance. It allows for higher voter participation and greater resource mobility throughout the system.
Each large group can be subdivided indefinitely into smaller groups, and smaller groups can be combined into larger groups indefinitely, similar to the Federal Republic.

## Project Details

### Background

* polkadot provides a set of on-chain governance solutions, but it is also very limited. It assumes that any demands made by each user can be fulfilled through the system's very limited referendum or parliamentary resources. This is obviously unreasonable.
This leads to inefficiency and low willingness of users to vote and participate, which is the root of centralization.
* The polkadot  democracy and council are not flexible enough to make more decisions at the non-system level. Parallel chains have many application-level businesses, each of which can be viewed as a behavior template,
Different groups have different origin requirements for specific behaviors.
So we're offering this flexible governance supplement, where we want each community to be able to make more decisions autonomously and efficiently,
They have their own dao's democracy and council, but this is not enough to break the system, because each group performs external execution transactions using origin as a common user.
* It's nice that every DAO executes a transaction with origin as an ordinary user, and you can imagine that the council members in polkadot are made up of part dao-account, which will help decentralize a lot of projects.

> Together with the KICO team, after more than two months of thinking and design, DAOS came into being.

### project pallets

1. `create-dao pallet`
Create a DAO based on a specific behavior template provided by the developer
2. `agency pallet`
Similar to polkadot's collective module, and most of the code from collective module.
The difference is that each DAO has its own authority agency, and there is no limit to the number of daos on the chain. And it implements EnsureOriginWithArg, where `set_ensure_for_every_call` sets the execution origin of each method.
This is useful because it gives each method more flexibility to get agency origin instead of hard-coding it `in runtime/lib.rs`.
3. `doas pallet`
The agency must first call the `pub fn do_as_collective` of this module when calling non-daos external transactions
4. `square pallet`
A bit like the Democracy module in polkadot, it can get dao-root Origin and execute any methods that can be executed in a DAO. The difference is that there is a Square in each DAO and it introduces a voting threshold requirement.
Different methods can set different thresholds for voting by `set_min_vote_weight_for_every_call`, that is, origin can be set dynamically.
5. `sudo pallet`
Somewhat like the Sudo module in polkadot, let a user own the dao-root origin in the DAO. Each DAO has a sudo, a substitute for Democracy, that can be removed.
6. `emergency pallet`
It uses native referendums or parliaments to help each DAO handle emergencies, such as parameter Settings failing to work properly.

### Workflow

To be added

## Ecosystem Fit

This is a project without any token, focused on community contribution, and tt is now ready for use on KICO and LISTEN.
We believe that this is a very useful product for other projects in application,
it will bring you not only the convenience of development, but also the free flow and integration of resources, as long as you pay attention to it.
Developers can use our governance model by providing a behavior template, regardless of the number of DAOs but only the type of DAOs.
If your project doesn't want to use council and Democracy because the governance resources are limited,
then you need to write a voting system for group decisions. This is a repetitive job and it doesn't add much value.
I recommend using DAOS and leaving the governance code writing to the DAOS team.
We will continue to update, it makes sense, and both KICO and LISTEN are high-quality projects in Kusama and have been given slots.

## Team

### Team members

* JimYam
* wetalice
* Zifan Zhang
* You Lam

### Team's experience

* JimYam has been engaged in blockchain chain development for 5 years and is passionate about blockchain industry innovation. Currently, he is the main developer of LISTEN parallel chain team. Having worked in Tencent for 3 years, he has unique insights into social products. He has been following polkadot ecological development since Substrate1.0.
* wetalice Graduated from top5 universities in China, good at economics and game theory. Currently he is the lead developer for the KICO team.
* Zifan Zhang has worked for NetEase and did front-end development for 6 years. Currently, he has his own entrepreneurial team in Singapore.
* You Lam is test engineer who has been working in the industry for 9 years.

### Contact

* **Contact Name:** JimYam
* **Contact Email:** transxask1@gmail.com

### Legal Structure

* **Registered Address:** N/A
* **Registered Legal Entity:** N/A

### Team Code Repos

* [https://github.com/daos-org/daos.git](https://github.com/daos-org/daos.git)
* [https://github.com/DICO-TEAM/dico-chain.git](https://github.com/DICO-TEAM/dico-chain.git)
* [https://github.com/listenofficial/listen-parachain.git](https://github.com/listenofficial/listen-parachain.git)

### Development Status

* [https://github.com/daos-org/daos.git](https://github.com/daos-org/daos.git)

***

## Development Roadmap

### Overview

* **Total Estimated Duration:** 2 months
* **Full-Time Equivalent (FTE):** 6FTE
* **Total Costs:** 10k USD

### Milestone 1 — Implement Create-Dao, Agency, DoAS, Square, and Sudo Modules

* **Estimated duration:** 1 month
* **FTE:** 6
* **Costs:** 6000 USD

|Number   | Deliverable       | Specification                                                                                                                                                               |
|-----:  |-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|0a.     | License           | MIT, APACHE2.0                                                                                                                                                              |
|0b.     | Documentation     | Write Document for each module                                                                                                                                              |
|0c.     | Testing           | Write test code for each module                                                                                                                                             |
|0d.      | Example           | Provides code for examples of using DAOS on substrate projects                                                                                                              |
|0e.      | Comment           | Provide detailed comments for each module                                                                                                                                   |
|0f.      | Benchmarking      | Write Benchmarking code for each module                                                                                                                                     |
|1.       | create-dao pallet | Developers can quickly create a behavior template that works with daos, and users can create DAOs based on behavior templates in this module.                               |
|2.        | agency pallet     | A power agent in DAO can solve some things in DAO more quickly. The module can set the difficulty level of transactions that can be executed by power agent, namely Origin. Has its own voting system|
|3.     | doas pallet       | Through this module, the agency can obtain a dao-account, which is the identity of an ordinary user to perform external transactions                                        |
|4.     | square pallet     | The highest authority in dao, can execute all transactions in dao. And the execution difficulty of each transaction can be set in this modlue, namely vote weight. Has its own voting system         |
|5.     | sudo pallet       | Giving someone root privileges can execute all executable methods in dao. It should be remove when the DAO is necessary for decentralization.                               |

### Milestone 2 - Emergency, UI design and JS code implementation examples

* **Estimated duration:** 1 month
* **FTE:** 3
* **Costs:** 4000 USD

|Number   | Deliverable                         | Specification                                                                                                                    |
|-----:   |-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
|0a. | Documentation                       | Provide documentation for using daos                                                                                             |
|0b. | Testing                             | Complete all module tests                                                                                                        |
|0c. | Comment                             | Comment for each module                                                                                                          |
|0d. | weight                              | Implement default weight for each module                                                                                         |
|1.       | emergency pallet                    | When dao cannot run normally for some reason, such as wrong parameter settings, it can be adjusted through democracy and council |
|2.       | Add more `set_xxx` in these pallets | More parameters can be set directly and governance is more flexible                                                              |
|3.       | UI design                           | Providing a UI framework                                                                                                         |
|4.        | JS                                  | Provides js code cases based on UI framework implementation                                                                      |
> The hardest thing about Milestone 2 is UI design, because the front end doesn't know what behavior boundaries the behavior template designer set. Our current solution is to design with metadata.

## Future Plans

We will focus on getting more people to use this project than just LISTEN and KICO. A mature product should pay more attention to the sinking market and listen to differences
voice of the community. Using this project, the voice of every small community can be noticed.
We will continue to introduce more algorithms at the governance level to meet the governance needs of different project parties. We welcome more developers to join us to improve.

## Additional Information :heavy_plus_sign:

* **How did you hear about the Grants Program?**

    Announcement by another team
* **This is an example of kico network use daos for its own vc behavior template**.  

    [https://github.com/DICO-TEAM/dico-chain/blob/main/runtime/kico/src/vc.rs#L275](https://github.com/DICO-TEAM/dico-chain/blob/main/runtime/kico/src/vc.rs#L275)
    [https://github.com/DICO-TEAM/dico-chain/blob/main/runtime/kico/src/lib.rs#L1602](https://github.com/DICO-TEAM/dico-chain/blob/main/runtime/kico/src/lib.rs#L1602)
    > This case is to create a vc behavior template for any type of asset (including NFT), and users can create a DAO based on any asset id.
