# SubGame Network m2

* **Team Name:** [SubGame-Network](https://github.com/SubGame-Network)
* **Payment Address:** 3CK6HN4y2ZEKX7JMfdegds7B7GrUSmv65c

## Project Overview :page_facing_up: 
### Overview

![](https://i.imgur.com/UhLDmyL.png)

* **Introduction**

In [Milestone 1](https://github.com/w3f/Grants-Program/blob/master/applications/SubGame_Network.md), we created the first game module, and then we will add more game modules for users to apply. Now, in the Milestone 2 of SubGame, we will launch other game modules in succession. In order to display and explain these game modules and circulate them, we will build a pallet module lease platform where other users can lease. The way of leasing is to obtain the right to use the module according to his needs, so that other developers can easily develop games through the platform. Using the advantages of blockchain decentralization, compared with real leasing, to avoid the risk of performance, as well as the full traceability of leasing, to ensure the authenticity and non-tampering of data, which will upgrade the virtual currency ecology to a new level.

* **Team Interest**

All members of the team are convinced that blockchain will change the world, and have been working hard to create more transparent rules of the game. We have been observing and learning Substrate technology for more than a year. From the current point of view, substrate is our best choice.

### Project Details 
* **Components**

SubGame lease platform users can obtain the right to use the pallet within a certain time limit by staking **SGB**, and the developer can put the developed pallet on the lease platform.

![](https://i.imgur.com/CL4uzIq.png)
    
The lease platform mainly uses the two pallets, `Stake NFT Pallet` and `Lease Pallet`, to control the right to use the game Pallet. When the user stakes **SGB**, the platform will generate NFT tokens as the user's certificate of the pallet. The NFT tokens will be destroyed when the time limit expires. At that time, the right to use the pallet will be lost.

![](https://i.imgur.com/aLSeWXH.png)

**Lease Pallet:** Lease Pallet is used to control all behavior permissions on the lease platform.
**Stake NFT Pallet:** Stake NFT Pallet is used to bind specific other Pallets to generate exclusive NFT tokens.
**Game Pallet:** All (including future) different types of game modules.
**Front End:** We will provide a user interface for users to use, so that users have a good experience.


* **Scenarios**

After the user stakes the **SGB**, `Lease Pallet` will receive the request. At this time, the `Stake NFT Pallet` and the target `Game Pallet` will be called. The Stake NFT Pallet will generate the NFT tokens for the specific Game Pallet that is exclusive to the Game Pallet, and these NFT tokens have certain uses time limit, NFT tokens will be destroyed and **SGB** will be unlocked when the usage time limit is reached.

![](https://i.imgur.com/dIMczOD.png)

NFT tokens are checked by `Lease Pallet` within the use time limit, and users can use Game Pallet without restrictions.

![](https://i.imgur.com/MNnUPl1.png)

On the other hand, NFT tokens will be destroyed when the usage time limit is exceeded. At this time, after inspection by `Lease Pallet`, **SGB** will be automatically unlocked.

![](https://i.imgur.com/lIKjS17.png)

### Module Leasing Platform Template

* **Profile UI** 
There is a preliminary design:
[Mockup](https://www.figma.com/file/7ZUQSuAfNrrmq5s3LSIFik/SubGame?node-id=3614%3A61969) / [Prototype](https://www.figma.com/proto/7ZUQSuAfNrrmq5s3LSIFik/SubGame?node-id=3617%3A61973&scaling=scale-down&page-id=3614%3A61969&starting-point-node-id=3617%3A61973&show-proto-sidebar=1)
* **Features**
1. The leasing platform provides users with the right to use the module for a certain period of time by staking:
![](https://i.imgur.com/XiKc6ii.png)
2. The user can see the detailed usage method of the module, and obtain the right to use it by leasing according to their own needs:
![](https://i.imgur.com/HRSQSm3.png)

* **Pallets**

1. pallet-lease:
A list of leasable modules is defined in pallet-lease, and users can obtain module usage rights by staking nft tokens. Added the pub trait, which is provided for internal pallet Config injection, internal modules can use func to check whether the user has access permissions.
    ```rust
    pub trait LeaseTrait {
        ...
    }
    pub trait LeaseCall<AccountId, NFTId, PalletId>: LeaseTrait {
        check_authority(
            nft_id: NFTId, 
            pallet_id: PalletId, 
        ) 
        set_authority(
            nft_id: NFTId, 
            pallet_id: PalletId, 
        ) 
        // Revoke authority.
        revoke(
            nft_id: NFTId, 
            pallet_id: PalletId, 
        ) -> DispatchResult
    }
    ```



    **Types**
    - `PalletId`: A URI for an Pallet.
    - `PalletInfo<string, string>`: Contains the pallet name and description, you can easily understand the pallet information.
    - `LeaseInfo<PalletId,string>`: Record lease information.

    
    **Functions**
    - `pallet_list(PalletId) -> PalletInfo`:
    - `lease_pallet_list(NftId) -> Vec<(PalletId, LeaseInfo)>`:
    - `check_authority(NftId, PalletId) -> bool`: Check if you have permission to use the function.
    
2. pallet-stake-nft:
After providing users to stake SGB, they can get an nft token, and they can use special functions with nft token. SGB will be returned through redemption, and nft token will be burned at the same time. The module will provide different stake amount schemes and different valid periods. When the stake expires, nft token can no longer be used for special functions, SGB can be returned through redemption, and nft token will be burned.
    ```rust
    pub trait StakeNftTrait {
        ...
    }
    pub trait StakeNftCall<AccountId, NFTId, PalletId>: StakeNftTrait {
        effective_date_of(
            nft_id: NFTId, 
        ) -> Date
    }

    ```

    **Types**
    - `StakeInfo`: It records the nft token asset id and its stake effective date.
    - `ProgramId`: A URI for an Program.
    - `Program<BalanceOf<T>, Date>`: A plan that records the stake amount and effective date.

    **Functions**
    - `program() -> Vec<(ProgramId, Program)>`: Get program list.
    - `stake(NftId, ProgramId) -> DispatchResult`: Stake SGB.
    - `user_stake_info(AccountId) -> Vec<(NftId, StakeInfo)>`: Burn the given asset.
    - `effective_date_of(NftId) -> Date`: Query the effective stake date of nft token.

3. pallet-nft:
Non-fungible tokens( NFTs ) are cryptographic assets on blockchain with unique identification codes and metadata that distinguish them from each other. Unlike cryptocurrencies, they cannot be traded or exchanged at equivalency.
pallet-stake-nft and pallet-lease will be used.

    **Types**
    - `NFTId`: A URI for an asset.
    - `AssetInfo`: A set of attributes that uniquely describes an asset.
    - `AssetLimit`: The maximum number of assets, expressed as an unsigned 128-bit integer, that may exist in this set at once.
    - `UserAssetLimit`: The maximum number of assets, expressed as an unsigned 64-bit integer, that any single account may own from this set at once.

    **Functions**

    - `total() -> u128`: Returns the total number of assets in this set of assets.
    - `burned() -> u128`: Returns the total number of assets from this set that have been burned.
    - `total_for_account(AccountId) -> u64`: Returns the total number of asset from this set that are owned by a given account.
    - `assets_for_account(AccountId) -> Vec<(NftId, AssetInfo)>`: Returns the list of assets from this set that are owned by a given account.
    - `owner_of(NftId) -> AccountId`: Returns the ID of the account that owns the given asset from this set.
    - `mint(AccountId, AssetInfo) -> Result<NftId, DispatchError>`: Use the given attributes to create a new unique asset       that belongs to this set and assign ownership of it to the given account.
      - Failure cases: asset duplication, asset limit reached for set, asset limit for this set reached for account.
    - `burn(NftId) -> DispatchResult`: Burn the given asset.
      - Failure cases: asset doesn't exist.
    - `transfer(AccountId, NftId) -> DispatchResult`: Transfer ownership of the given asset from this set from its current owner to a given target account.
      - Failure cases: asset doesn't exist, asset limit for this set reached for target account.
      
4. pallet-gameA:
We will provide this game A pallet to users for lease. This is a sample pallet. There will be more pallets that can be leased in the future.
This kind of pallet will use pallet-lease to control func permissions in func.
    **Functions**
    - `demo(NftId) -> DispatchResult`: Using this function will check the lease pallet, if there is no permission, it will display `Error::PermissionDenied`.
    - `call_success(NftId) -> count`: Record the number of successful call func.
    - `call_fail(NftId) -> count`: Record the number of fail call func.

### Ecosystem Fit 
At present, there is no real decentralized game platform, but more decentralized games. Unlike the past, this time we are going to build a truly decentralized game ecological platform.

## Team :busts_in_silhouette:

### Team members
* Shanfeng xie - Project Lead/Management & Research
* QiangKai - Full-stack Developer
* ZheSheng Zhang - Front End Developer

### Contact
* **Contact Name:**  shanfeng 
* **Contact Email:**  shanfenggood@gmail.com

### Legal Structure 
No Legal Entity
### Team's experience
**Shanfeng Xie**
   -  Full-stack Developer   
   -  Over 15 years of experiences in Development and Management   
   -  Has plenty of experience in Software Development and Blockchain Development   
   -  Currently, focus on Cross-chain technologies   

**QiangKai**   
   -  Full-stack Developer   
   -  Over 8 years of experiences in Product Development   
   -  Has plenty of experience in Software Development   
   -  Currently focused on  Blockchain Development and Cross-chain Technologies 

**ZheSheng**
   -  Front-end Developer
   -  Over 6 years of experiences in Product Development 
   -  Has plenty of experience in React  
   -  Currently focused on  Blockchain Development
### Team Code Repos
* https://github.com/SubGame-Network/

### Team LinkedIn Profiles
* https://www.linkedin.com/in/shanfengxie/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 8 weeks
* **Full-time equivalent (FTE):** 4 FTE  
* **Total Costs:** 10,000 USD

### Milestone 2 : Build a module leasing platform

* **Estimated duration:** 8 weeks
* **FTE:** 4 FTE 
* **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | Documents containing the description of whole module leasing platform. |
| 0c. | Testing Guide | We will provide testing methods for lease module.|  
| 1a. | pallet-lease | You can use this pallet to lease assets and control lease-related permissions. | 
| 1b. | pallet-stake-nft | You can use this pallet to generate exclusive NFT tokens for other pallets. |
| 1c. | pallet-nft | We replicate this [NFT Pallet](https://github.com/danforbes/pallet-nft) in order to comply with our lease platform. | 
| 1d. | pallet-gameA | This is a sample game module for display on the lease platform. | 
| 2a. | Front End | We will provide a user interface for users to use, so that users have a good experience. This part will also be included in the dockerfile. |
| 2b. | UI mock-ups |https://www.figma.com/file/7ZUQSuAfNrrmq5s3LSIFik/SubGame?node-id=3649%3A62086 |
| 2c. | Tutorial | We will also provide tutorials on how to use the client. |
| 2d. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain and front end | 


## Future Plans

#### Marketing and Community Plans

* Hire 2-3 more developers in the next two months, and set up our core dev team.  
* Hire 1 marketing adviser to set up our marketing team.  

#### Development Plans

* In phase 0, Complete the test network, and complete 1 game template, test template games in a small range
* In phase 1, Develop more game templates, improve user experience, and launch the mainnet
* In phase 2, Provide platform OpenSDK to facilitate third-party business development based on the public chain
* Finally, Remove Sudo permissions and start community operation

## Additional Information :heavy_plus_sign: 
* https://github.com/SubGame-Network/
