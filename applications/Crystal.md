# Open Grant Proposal
- **Project Name:** Crystal
- **Team Name:** Crystal
- **Payment Address:** 0xBCE49f8009E6059CA7a00A9EaA7168CC11D256A3

### Project Overview

Crystal is a web-platform that will provide game developers with the opportunity to integrate NFTs into their products (apps or games). For example, users will be able to change the skin of their character or open additional game locations through the purchase of an NFT. On the other hand, our product will allow artists to create NFTs that will be used in games.

Our product will be developed using Polkadot and Moonbeam and will allow game developers and artists to publish NFTs with specified parameters, characteristics and capabilities that it will get in a game or application. NFTs can be created, exchanged and sold via our web-platform.

The main element of the platform is the API that our application will provide, as well as a set of libraries for the Unity 3D and Unreal Engine game engines, which will allow game developers to integrate NFTs into their games and to get a list of NFTs that the user owns, in order to provide the player with additional features that are associated with this NFT.

We see great potential in the NFT technology and the growth of this market, but it seems to us that the Art-NFT market is close to its limits in the nearest future. Now users are increasingly interested in the real benefits of owning an NFT. NFT integration into games requires additional web3 competencies from game developers. A small number of game developers have these competencies, so this market is still poorly developed, but has great potential due to the high interest in NFT technology.

We want to implement our project using Polkadot, as we think that the parachains technology will help make our application more resistant to heavy loads and a large number of requests. We also see great prospects in the entire Polkadot ecosystem since there are more and more applications and parachains using Polkadot technologies.

Links:
1. https://getcrystal.org
2. https://twitter.com/getcrystalorg
3. https://getcrystalorg.medium.com

Application usage examples:

Creating of NFT collection:
https://drive.google.com/file/d/1N4o9IIcdWYV8xgZAfiiArjKa4kJllJbd/view?usp=sharing

<img src = "https://github.com/GetCrystalOrg/PolkaDOT-Crystal/blob/main/Screenshot%202022-10-20%20at%2012.55.54.png" width="300" height="475">

<img src = "https://github.com/GetCrystalOrg/PolkaDOT-Crystal/blob/main/Screenshot%202022-10-20%20at%2012.56.03.png" width="450" height="375">


Creating of NFT:    
https://drive.google.com/file/d/1QLLfluwWtbwudqjyu7wraQm-ixu0ljMy/view?usp=sharing


<img src = "https://github.com/GetCrystalOrg/PolkaDOT-Crystal/blob/main/Screenshot%202022-10-20%20at%2012.56.24.png" width="450" height="420">
Put up for auction:
https://drive.google.com/file/d/1UVU9X4YAAld84sbFig7G75j9Jbq2p_kX/view?usp=sharing

<img src = "https://github.com/GetCrystalOrg/PolkaDOT-Crystal/blob/main/Screenshot%202022-10-20%20at%2012.55.19.png" width="300" height="475">

<img src = "https://github.com/GetCrystalOrg/PolkaDOT-Crystal/blob/main/Screenshot%202022-10-20%20at%2012.55.33.png" width="300" height="475">

Marketplace:

<img src = "https://github.com/GetCrystalOrg/PolkaDOT-Crystal/blob/main/Screenshot%202022-10-20%20at%2012.54.50.png" width="300" height="475">

<img src = "https://github.com/GetCrystalOrg/PolkaDOT-Crystal/blob/main/Screenshot%202022-10-20%20at%2012.54.19.png" width="300" height="475">

<img src = "https://github.com/GetCrystalOrg/PolkaDOT-Crystal/blob/main/Screenshot%202022-10-20%20at%2012.55.08.png" width="300" height="475">

## Project Details
Our product is consisted of three modules that are necessary for proper work:
1. Web application
2. API interface for apps (including games)
3. Libraries for games engines (Unity 3D and Unreal engine)

### Web application

Technology: ReactJS / Solidity

1.	Authorization via web3 wallet connection
2.	NFT creating and upload
3.	NFT collections creating and upload
4.	Creating NFT parameters
5.	Changing NFT parameters via API
6.	Creating an access key to get a list of user’s NFTs 
7.	Connecting a public wallet to an account
8.	Generating a unique account key


### Game API

The module that will be used for connection between a game and the web application.

Technology: JS / Rest API

1.	Authorization by an account key
2.	Obtaining a list of user’s NFTs through his public key
3.	Changing the parameters of an NFT by the author of the collection (for example, when it is necessary to update the parameters of an item in the game) 


### Libraries for game engines (Unity 3D and Unreal engine)
This will allow you to easily integrate interaction with a web application and  with NFTs in order to give game developers the opportunity to use the NFT technology in their projects.

Technology: C# / C++

1.	Authorization by a unique account key
2.	Getting a list of NFTs owned by the user
3.	Linking game objects (3D model, location, skill, etc.) to NFTs
4.	Changing parametersof NFTs automatically or semi-automatically


![alt text](https://github.com/GetCrystalOrg/PolkaDOT-Crystal/blob/main/4c87195e-083c-474f-93bf-1ec0ef02e65b.jpg?raw=true)



## Ecosystem Fit
The video game industry is attractive for developers, as the number of its users is growing every year and now amounts to 3 billion people, and the total earnings of companies in this industry have exceeded 150 billion dollars a year. In the blockchain world, there is a small number of applications that allow integrating NFT into games, and they don’t have full-fledged functionality that allows trading in-game items through the blockchain comfortably and simply. Our project aims to solve this problem. Our app will position Polkadot at the intersection of the blockchain and the gaming industry. The project will attract new users from the gamers' community to the Polkadot network, which can increase the capitalization of DOT. We will strive to integrate both indie games and serious projects with a large number of players into our platform.
## Development Roadmap
### Milestone 1 

| Description                                                                                                                                                                                      | Duration                                                                                                                                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connecting and parsing transactions of Polkadot / Moonbeam                                                                                                                              | 21   days                                                                                                                                                                                        |
| Developing and uploading of smart contracts (EVM) on the blockchain. Integrating of RPC methods for working with smart contracts. Connecting RPC methods to the Crystal Platform | 14   days                                                                                                                                                                                        |
| Connecting a WEB3 wallet and IPFS for NFT storage                                                                                                                                               | 7   days                                                                                                                                                                                         |
| Creating an account and publishing NFTs and NFT collections                                                                                                                                           | 7   days                                                                                                                                                                                         |
| NFT transfer and trading funtions                                                                                                                           | 7   days                                                                                                                                                                                         |

Result: NFT marketplace launched on Polkadot / Moonbeam with full functionality for trading. Ready platform architecture to start work on the NFT GAME API.

| Employee   Engagement             | % Engagement of   total work time | Price   |
|-----------------------------------|-----------------------------------|---------|
| Senior Frontend Developer (React) | 55%                               | $ 2706  |
| Senior Backend Developer (NodeJS) | 20,0%                             | $ 1840  |
| Blockchain Developer              | 40,0%                             | $ 3120  |
| Unity 3D Developer                | 0%                                | $ 0     |
| Unreal Engine Developer           | 0%                                | $ 0     |
| QA                                | 25%                               | $  450  |
|                                   | Total   Milestone Cost            | $  8116 |



### Milestone 2
| Description                                                                                                                         | Duration                                                                                                                                                                                                              |
|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Developing of NFT GAME API architecture and documentation                                                                          | 14 days                                                                                                                                                                                                               |
| Developing of the API, connection of methods for linking information about the owner of the NFT and its game item | 7   days                                                                                                                                                                                                              |
| Testing the API                                                                                                                     | 4   days                                                                                                                                                                                                              |

Result: the first version of NFT GAME API with the main methods of authorization and interaction with NFT from game modules for UNITY 3D and Unreal Engine. Documentation describing how to work with the NFT GAME API. 

| Employee   Engagement             | % Engagement of   total work time | Price   |
|-----------------------------------|-----------------------------------|---------|
| Senior Frontend Developer (React) | 35%                               | $ 1722  |
| Senior Backend Developer (NodeJS) | 50,0%                             | $ 4600  |
| Blockchain Developer              | 40,0%                             | $ 3120  |
| Unity 3D Developer                | 70,0%                             | $ 1820  |
| Unreal Engine Developer           | 70,0%                             | $ 2030  |
| QA                                | 25%                               | $ 450   |
|                                   | Total   Milestone Cost            | $ 13742 |



### Milestone 3
| Description                                                                              | Duration                                                                                                                                                                                                                                         |
|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Creating of architecture and documentation for game modules (UNITY 3D and Unreal engine) | 10 days                                                                                                                                                                                                                                          |
| Developing of the NFT GAME API connection module for UNITY 3D                         | 14   days                                                                                                                                                                                                                                        |
| Developing of the NFT GAME API connection module for Unreal engine                                 | 14   days                                                                                                                                                                                                                                        |
| Binding NFT GAME API and modules for Unity 3D and Unreal engine                          | 5   days                                                                                                                                                                                                                                         |
| Testing the operation of the NFT GAME API and modules for game engines                 | 4   days                                                                                                                                                                                                                                         |

Result: ready-made modules for the UNITY 3D and Unreal engine game engines that developers can use to interact with the NFT GAME API. Documentation describing how to work with NFT GAME API plugins for Unity 3D and Unreal Engine game engines. 

| Employee   Engagement             | % Engagement of   total work time | Price  |
|-----------------------------------|-----------------------------------|--------|
| Senior Frontend Developer (React) | 10,0%                             | $ 492  |
| Senior Backend Developer (NodeJS) | 10,0%                             | $ 920  |
| Blockchain Developer              | 10,0%                             | $ 780  |
| Unity 3D Developer                | 0%                                | $ 0    |
| Unreal Engine Developer           | 0%                                | $ 0    |
| QA                                | 25%                               | $ 450  |
|                                   | Total   Milestone Cost            | $ 2642 |



### Milestone 4
| Description                                                                              | Duration                                                                                                                                                                                                                                                                                                        |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Development   of a DEMO game using the NFT GAME API                                      | 21 days                                                                                                                                                                                                                                                                                                         |
| NFT GAME API connection                                                                  | 3   days                                                                                                                                                                                                                                                                                                        |
| Connecting the Unity 3D module                                                           | 4   days                                                                                                                                                                                                                                                                                                        |
| Testing the game, writing documentation and an example of using the developed product | 7   days                                                                                                                                                                                                                                                                                                        |

Result: DEMO GAME, which uses the game module and the NFT GAME API, demonstrates all the possibilities of working with NFT that will be available to game developers. Documentation describing the process of connecting modules for Unity 3D and Unreal engine game engines to the NFT GAME API. 

| Employee   Engagement             | % Engagement of   total work time | Price  |
|-----------------------------------|-----------------------------------|--------|
| Senior Frontend Developer (React) | 0%                                | $ 0    |
| Senior Backend Developer (NodeJS) | 20,0%                             | $ 1840 |
| Blockchain Developer              | 10,0%                             | $ 780  |
| Unity 3D Developer                | 30,0%                             | $ 780  |
| Unreal Engine Developer           | 30,0%                             | $ 870  |
| QA                                | 25%                               | $ 450  |
|                                   | Total   Milestone Cost            | $ 4720 |


### Team involved
| Project   team                      | Engagement   (months) | Rate per   month |
|-------------------------------------|-----------------------|------------------|
| Senior   Frontend Developer (React) | 1,2                   | $ 4100,00        |
| Senior   Backend Developer (NodeJS) | 2                     | $ 4600,00        |
| Blockchain   Developer              | 1,5                   | $ 5200,00        |
| Unity 3D   Developer                | 1                     | $ 2600,00        |
| Unreal   Engine Developer           | 1                     | $ 2900,00        |
| QA                                  | 1                     | $ 1800,00        |
| Total                               | 3,5 (parallel work)   | $ 29220,00       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
   
   
### Team members
| Current Crystal's team                                    | New member                         |
|-----------------------------------------------------------|------------------------------------|
| Frontend - https://gitlab.com/SergeySMD1                  | Unity and Unreal Engine:           |
| Backend - https://gitlab.com/pcarolei                     | https://github.com/SunRay27,       |
| Web3 - https://gitlab.com/deftelai                        | https://sunray27.github.io/MySite  |
| QA, Designer, Marketer - https://behance.net/exactlyalina |                                    |
| Product Manager - https://linkedin.com/in/timakhovich     |                                    |
