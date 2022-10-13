# W3F Open Grant Proposal

# Polkadot Name System(PNS)

- **Team Name:** Polkadot Name System
- **Payment Address:** 0x7682Ba569E3823Ca1B7317017F5769F8Aa8842D4 (USDT/USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## **Project Overview 📄**

### **Overview**

- Tag line: Polkadot Name System (PNS) - DID infrastructure for Polkadot.

- Brief description: Polkadot Name System (PNS), as a decentralized name system for Polkadot, provides domain name services for all parachains within the multi-chain fabric of Polkadot. PNS provides domain names that ends with .dot and is able to resolve a variety of on-chain and off-chain record type, including wallet addresses, smart contract addresses, IPFS, NFT assets, URLs, SSL certificates, social media accounts, emails, etc. Users have full ownership of their Web3 digital identity. By the date of application, PNS is launching on Moonbeam network.

- Indication 1: PNS is a Polkadot native project. With the goal of building DID infrastructure for Polkadot, we use .dot as the suffix of the domain name and plan to develop a DNS pallet that can be deployed by any parachain. DNS pallet allows each Substrate node to adhere to the DNS/DNS- over-HTTPS protocol, that is, all Substrate nodes can be used as nodes of DNS resolver. These nodes fully guarantee the security and stability of PNS as a decentralized domain name system.

- Indication 2: We have recognized that DID is essential for Web3. Given that there are more and more non-financial applications recently, (such as DAO organization, social networking, games, etc,) the activities and data accumulated by user operations in the network will become the foundation of a user's persona and reputation. PNS can aggregate the information of a Web3 user on different chains, and even web2 data through verified credentials, to achieve overall identity aggregation. By providing a Polkadot-native name “.dot” domain, PNS aims to create a greater sense of belonging for the Polkadot community.

### **Project Details**

- Mockups/designs of any UI components
    
    [https://www.pns.link](https://www.pns.link)
    
- Data models / API specifications of the core functionality
    
    Currently, PNS is implemented in a Solidity contract and is deployed on the Moonbeam Network.
    
    **On-chain contracts**
    
    **PNS Registry** contract is the ownership mapping of all the domain name IDs to the owner's address. Every PNS domain name is hashed into an uint256 token ID with EIP-137 namehash ([https://eips.ethereum.org/EIPS/eip-137](https://eips.ethereum.org/EIPS/eip-137)). It is also an ERC721-compliant ([https://eips.ethereum.org/EIPS/eip-721](https://eips.ethereum.org/EIPS/eip-721)) contract, and all the domain names can be queried and transferred as NFT.
    
    **PNS Controller** contract is the registrar of PNS domain names. It allows users to register and renew domains, or create subdomains.
    
    **PNS Resolver** contract allows users to set and update their records, including ETH/BTC/DOT wallet addresses, contract addresses, IPFS addresses, IPv4/IPv6 addresses, NFT, URL, email, and other social accounts.
    
    **PNS Manager APP**:
    The domain registration and management app for PNS
    
    **PNS SDK**:
    It allows others to integrate PNS easily.
    
    **Programmable Interfaces**:
    
    ```
    interface IPNS is IERC721MetadataUpgradeable {
    
        event NewResolver(uint256 tokenId, address resolver);
    
        event NewSubdomain(address to, uint256 tokenId, uint256 subtokenId, string name);
    
        // To create a new subdomain, it can only be invoked by the controller contract.
        function mintSubdomain(address to, uint256 tokenId, string calldata name) external returns (uint256);
    
        // To burn some domain by authorised users
        function burn(uint256 tokenId) external;
    
        // To check if a user is owner or approved user of a PNS domain
        function isApprovedOrOwner(address addr, uint256 tokenId) external view returns(bool);
    
        // To check if a PNS token ID exists.
        function exists(uint256 tokenId) external view returns(bool);
    
        // The interface to register new domains, it can only be invoked by the controller contract.
        function mint(address to, uint256 newTokenId) external;
    }
    
    ```
    
    ```
    interface IController {
    
        event PriceChanged(uint256[] basePrices, uint256[] rentPrices);
        event ConfigUpdated(uint256 flags);
        event MetadataUpdated(uint256[] data);
        event NameRenewed(uint256 node, uint256 cost, uint256 expires, string name);
        event NameRegistered(address to, uint256 node, uint256 cost, uint256 expires, string name);
    
        // To get the original registered domain of a certain domain, eg `name.dot` for `a.name.dot`, `b.a.name.dot` etc.
        function origin(uint256 tokenId) external view returns(uint256);
    
        // To get the expire timestamp of a domain
        function expire(uint256 tokenId) external view returns(uint256);
    
        // To check if a domain is available
        function available(uint256 tokenId) external view returns(bool);
    
        // To register a new domain with name, owner address and duration
        function nameRegister(string calldata name, address owner, uint256 duration) external payable returns(uint256);
    
        // To register a new domain with extra configs
        function nameRegisterWithConfig(string calldata name, address owner, uint256 duration, uint256 data, uint256[] calldata keyHashes, string[] calldata values) external payable returns(uint256);
    
        // To renew a domain name
        function renew(string calldata name, uint256 duration) external payable;
    
        // To create a new subdomain by authorised users
        function mintSubdomain(address to, uint256 tokenId, string calldata name) external;
    }
    
    ```
    
    ```
    interface IResolver {
    
        event NewKey(string indexed keyIndex, string key);
        event Set(uint256 indexed tokenId, uint256 indexed keyHash, string value);
        event ResetRecords(uint256 indexed tokenId);
    
        event SetName(address indexed addr, uint256 indexed tokenId);
        event SetNftName(address indexed nftAddr, uint256 indexed nftTokenId, uint256 indexed tokenId);
    
        // To get and set the unique domain name of a certain address
        function getName(address addr) external view returns (uint256);
        function setName(address addr, uint256 tokenId) external;
    
        // To get and set the unique domain name of a certain NFT
        function getNftName(address nftAddr, uint256 nftTokenId) external view returns (uint256);
        function setNftName(address nft, uint256 nftTokenId, uint256 nameTokenId ) external;
    
        // To get and set the records for a domain name
        function get(string calldata key, uint256 tokenId) external view returns (string memory);
        function getByHash(uint256 keyHash, uint256 tokenId) external view returns (string memory value);
        function setByHash(uint256 keyHash, string calldata value, uint256 tokenId ) external;
    
        // To get and set the records in batch for a domain name
        function getMany(string[] calldata keys, uint256 tokenId) external view returns (string[] memory);
        function getManyByHash(uint256[] calldata keyHashes, uint256 tokenId) external view returns (string[] memory values);
        function setManyByHash(uint256[] calldata keyHashes, string[] calldata values, uint256 tokenId ) external;
    }
    
    ```
    

- An overview of the technology stack to be used
    
    Solidity: On-chain contracts of PNS Registry
    
    TypeScript & React.js: PNS SDK and PNS Manager APP
    
    Elixir: PNS API Backend
    
    Subquery: for on-chain data indexing and GraphQL query
    
- Documentation of core components, protocols, architecture, etc. to be deployed
    
    [https://pns-team.notion.site/PNS-White-Paper-v1-1-a7831a1d4ca941bfb0170acccb655b38](https://pns-team.notion.site/PNS-White-Paper-v1-1-a7831a1d4ca941bfb0170acccb655b38)
    
- The tokenomics of PNS
    - As a decentralized domain name service, we charge 20 USD for the registration fee and 5 USD for an annual fee, similarly to ENS. All fees are charged in GLMR currently, the native token of Moonbeam Network, and more tokens will be supported in the future. The service fee is used to build PNS App and to maintain PNS services. For now, we have no plan to run any ICO or issue ERC20 tokens.
- Business-oriented activities (marketing, business planning), events, or outreach
    
    In the current stage, our main marketing strategy is to collaborate with parachains and DApps to promote PNS and get more Web2 users onboarded to Web3.
    
    We attended 2022 Polkadot Decoded in Hangzhou and gave a talk: Polkadot Name System: DID Infrastructure ([https://www.youtube.com/watch?v=sFkKQak5SOA](https://www.youtube.com/watch?v=sFkKQak5SOA))
    

### **Ecosystem Fit**

- Where and how does your project fit into the ecosystem?
    
    With the development of Web3, an increasing number of non-financial projects stand out, including but not limited to the field of social apps, games, and DAOs.
    
    PNS provides a human-readable and verifiable identity for accounts and assets in Web3. The use cases of PNS include:
    
    1. Web3 Profile (https://web3profile.dot.site/)
    
    Individuals or organizations can use PNS to resolve the .dot domain names to wallet addresses, displaying on-chain and off-chain data to show what you did and who you are.
    
    2. Human readable identifier
    
    The long address is replaced by a human-readable and memorable name. Use your PNS domain name rather than the address in other DApps.
    
    3. Social Media
    
    PNS is used as a unified portal for users’ social accounts on web3. Owning a PNS domain name helps others to recognize, remember, and find you.
    
    4. DAO
    
    Subdomains can be seen as member certificates of organizations. For example, Zeus from Olympus, who owned olympus.dot, may get a subdomain zeus.olympus.dot issued by olympus.dot. Once you see the subdomain, you know that Zeus is from Olympus.
    
    5. NFT
    
    Artists can use PNS to build their own brands. Subdomains can be linked with the address of the NFT so that the buyers can check whether the artworks they are going to buy are created by the artist. You can demonstrate your NFT collections by linking NFTs to PNS.
    
    6. Decentralized Web
    
    Use PNS to resolve to an IP/IPFS address of your decentralized webpage. Name files with PNS and simply share them with PNS domains.
    
- Who is your target audience (parachain/DApp/wallet/UI developers, designers, your own user base, some DApp's userbase, yourself)?
    
    PNS aims to build the DID infrastructure for the whole Polkadot ecosystem. Thus, our target audience is of a very wide range of types. 
    
    1. Parachains and DApps can help others to better recognize them by having their own PNS domain name. For example, during the airdrop, projects can use human-readable .dot names rather than long addresses. Community members can visit the project's websites through their PNS names if they are set to redirect function.
    2. Blockchain explorers can display users and projects .dot name. This increases the readability of subjects in the browser.
    3. Wallets can support PNS resolvability to let users use their .dot names to transfer assets instead of long addresses.
    4. Individuals (developers and web3 users) can use PNS to transfer assets or display their profiles. 
    5. NFT creators and collectors can use PNS and subdomains to link their artifacts. 
    6. DAO can use PNS to manage their memberships or assign subdomains to contributors. 

- What need(s) does your project meet?
    1. Create a sense of community belonging. Now on the Internet, when people see yourname.eth, they know this person is a Web3 user. But no domain name can let others know that this person is a Polkadot user. PNS can fill this gap and give all Polkadot users a sense of belonging.
    2. Aggregate fragmental identities. PNS can integrate various on-chain and off-chain data to integrate the fragmental identities on different parachains.
    3. NFT Naming. PNS can be bounded to NFT assets and make it easier to check and verify NFT assets ownership. 
    
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
    
    The most similar project to PNS is ENS.
    
    ENS is a decentralized name system in Ethereum. It is also the biggest non-financial project in Web3.
    
    There are several differences worth highlighting: 
    
    1. PNS have better support for Polkadot parachain data and addresses.
    2. The PNS contracts are built from the ground up with a more flexible and extensible design in mind. Our unique features includes:
        - Better compliance with ERC721 standard
        - Can easily resolve to NFTs and check the ownership
        - Can easily add more customized record types
        - Batch operations allowed

## **Team 👥**

### **Team members**

Jia Jiang: Senior Solidity contract developer and backend engineer.

Ryan Ye: Ph.D., Business School of the City University of Hong Kong, has experience in business management within a complex social system.

Siwei: Backend Engineer

catslovefish.dot: Product Manager

Fangda Zou: Frontend Engineer

### **Contact**

- **Contact Name:** Ryan Ye
- **Contact Email:** contact@pns.link
- **Website:** https://www.pns.link

### **Legal Structure**

- **Registered Address:** 12 Purvis Street #02-10, Singapore 188591
- **Registered Legal Entity:** PARALLEL IDENTITY PTE. LTD.

### **Team's experience**

The Polkadot Name System (PNS) team was established in June 2021. We have rich Web3 development experience and community operation experience.

We have won Community Choice award in the 2nd Polkadot Hackathon held by Parity and OneBlock community in July, 2021. 

We have presented PNS on Polkadot Decoded 2022. 

Currently, PNS team has participated in Web3Bootcamp. 

### **Team Code Repos**

- [https://github.com/pnsproject](https://github.com/pnsproject)
- [https://github.com/pnsproject/pns-sdk](https://github.com/pnsproject/pns-sdk)
- [https://github.com/pnsproject/pns-contracts](https://github.com/pnsproject/pns-contracts)

Team members:

- [https://github.com/jiangplus](https://github.com/jiangplus)
- [https://github.com/qieman](https://github.com/qieman)
- [https://github.com/sg552](https://github.com/sg552)

## **Development Status** and Security Audit **📖**

The PNS contracts are built from the ground up with a more flexible and extensible design in mind. 

We have finished the solidity contract development and got contracts audited by PeckShield. The audit report is available at the Github repo ([https://github.com/pnsproject/pns-contracts/tree/master/audit](https://github.com/pnsproject/pns-contracts/tree/master/audit)). We have fixed all the issues from the audit report.

## **Development Roadmap 🔩**

### Overview

- Support multi tokens for payment of PNS registration and renewal.
- Account ownership and social network identity integration with verifiable credentials
- PNS HTTPS API

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 7.5
- **Total Costs:** $30,000

### **Milestone 1 —** Account ownership and social network identity verification with verifiable credentials

- **Estimated duration:** 1 month
- **FTE:** 2.5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT  |
| 0b. | Documentation | We will provide documentation that explains how a user can set the social network identity of their PNS.   |
| 0c. | Tests | Core credential verification functions will be fully covered by unit tests to ensure functionality and robustness.  |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.  |
| 0e. | Article | We will write an article in our blog that explains the work done as part of the grant.  |
| 1. | Account ownership verification | Users can set multiple wallet addresses on PNS and attach on-chain verifiable credentials to show their ownership of the address. For example, you can add a signed message to show your ownership to some address when setting the DOT record of your PNS domain, so that others could know the authenticity of that record.  |
| 2. | Social network identity integration | Users can add various off-chain social network records to their own PNS and verify them.  |

Implementation details of account ownership verification:

Domain name owners can now set the ETH, DOT record of their PNS domain, which is one of the targeted use cases. However, users can also set the ETH address of any third party to his own PNS without verifications, which may cause problems. With account ownership verification, users can attach cryptographically signed verifiable credentials to the records to show they are the owner of the resolved addresses. Those VCs are also written as new on-chain PNS records.

For example, PNS domain name owner who want to have their ETH address verified, should sign a message of:

```
{
    types: {
         EIP712Domain: [],
     Data: [
                { name: 'Message', type: 'string' }
            ]},
     domain: {},
     primaryType: 'Data',
     message: {
                Message: `I'm verifying the DOT address of PNS domain name ${PNSDomainName.dot}`
     }
}
```

Implementation details of social network identity verification:

PNS also allows users to verify their social network identities. Users can set their Twitter record of their PNS domain. In order to verify they are the true owner, PNS will ask the users to sign a message with the domain name owner wallet, then they will need to post the message on Twitter or other social networks. PNS backend service will then fetch the message on social networks to check that it is published correctly, and it will issue verifiable credentials to the user.

The user will have to follow the following process:

 1) The user should sign a message with the domain name owner wallet to get a signature saying that domain owner wants to claim the ownership of the Twitter account.

 2) The message and signature is publicly posted on Twitter or other social networks, which is to show that the Twitter account owner acknowledges such a claim. This tweet is publicly available and can be verified by anyone.

 3) The user should post the tweet url to PNS backend service. PNS will check that: the wallet address, the PNS domain ownership and the Twitter account is coherent with each other.

 4) PNS will provide a cryptographically signed verifiable crenditial to the user, which can be stored on-chain or off-chain.

In this way, we know that 1) the PNS domain owner wants to claim the Twitter account, 2) the Twitter account owner wnats to claim the PNS domain, 3) the required information is publicly verifiable, and 4) PNS or other authorized parties have checked the data and provided signed crenditials.

The verification process is off-chain, but it uses on-chain data and provides valuable information for DID.

For example, PNS domain name owner who want to have their Twitter account verified, should sign a message of:

```
{
    types: {
         EIP712Domain: [],
     Data: [
                { name: 'Message', type: 'string' }
            ]},
     domain: {},
     primaryType: 'Data',
     message: {
                Message: `I'm verifying my Twitter account with handle ${twitterId}`
     }
}
```

They will get the signature. Then they should publish a message on Twitter:

```
I'm verifying my Twitter account with handle ${twitterId}

https://pns.link/details/${PNSDomainName.dot}

sig:
${signature}
```

Those verifiable credentials are optional, and once they are set correctly, the PNS domain name will be marked Verified on the PNS Manager App. And the data is also accessible on chain or via API services.


### **Milestone 2  — PNS HTTP API**

- **Estimated duration:** 1 month
- **FTE:** 2.5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT  |
| 0b. | Documentation | API server docs for easy integration.   |
| 0c. | Tests | Core resolution function will be fully covered by unit tests to ensure functionality and robustness.  |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.  |
| 0e. | Article | We will write an article in our blog that explains the work done as part of the grant.  |
| 1. | HTTP API Server for PNS query | Building a HTTP API server for querying PNS records, which will return JSON data with the domain name, namehash, owner address, expire time and records of different types, eg. ETH address, dot address, Twitter account, email address and so on. It will help other DApps and services to integrate with PNS. |
| 2. | PNS Subquery Graph | Building and deploying a Subquery indexing service to pull the on-chain data off-chain and store the data into Postgres DB. It will speed up the PNS query and make it more reliable. It can also track all subdomains of a domain name, which is not possible with on-chain PNS interface. This is the companion service of the HTTP API server.  |

Example API results:


```

{
  "name": "henry.dot",
  "namehash": "0x...",
  "owner": "0x...",
  "expire_time": 1500000000,
  "records": {
    "eth": "0x...",
    "dot": "5G...",
    "twitter": "henry"
  }
  "children": [
    ...
  ]
}

```

### **Milestone 3  —** Multi-token support for PNS Registration and Renewal

- **Estimated duration:** 1 month
- **FTE:** 2.5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT  |
| 0b. | Documentation | We will provide documentation that explains how a user can register a domain with DOT, KSM, USDT.   |
| 0c. | Tests | Core payment functions will be fully covered by unit tests to ensure functionality and robustness.  |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.  |
| 0e. | Article | We will write an article in our blog that explains the work done as part of the grant.  |
| 1. | Multi-token support | Since Polkadot is a multi-chain ecosystem, users may have different assets on different chains. As a DID infrastructure, PNS serves users across all parachains. If PNS only supports one token, e.g. GLMR on Moonbeam, those without such tokens may find it difficult to use their DIDs. Thus, it is necessary to support multiple tokens to register PNS. This is not intended to promote a specific token, but to facilitate all Polkadot users at the ecosystem level. We will implement the functionality to accept DOT, KSM to register PNS domains. We will also use the Chainlink Datafeed as our price oracle. |
| 2. | Interaction with Frontend and Payment ABI of price oracle | PNS registration and renewal fee is priced in USD. In order to display the price and receive the fee correctly, the PNS App should read the price of tokens from other oracles and allow users to pay various tokens to obtain their PNS.  |



## **Future Plans**

- We are planning to build a substrate pallet version of PNS and deploy it to partnered parachains. PNS pallet will be the multi-parachain DID infrastructure merged with substrate framework, and users can write and query the name records on their own favorite parachain.
- We are also trying to build a DNS protocol pallet with customized Substrate RPC that can answer DNS queries.  In this way, apps and browsers can query on-chain PNS records with DNS protocol without any middleman (like users’s website record through ICANN), which is more secure and decentralized.

## **Additional Information ➕**

**How did you hear about the Grants Program?** 

Web3 Foundation Website and recommendation by other projects

**Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:**

- PNS smart contract has already be deployed on Moonbeam and we have 11k+ registration along with 4k+ unique address holders. Check [https://moonscan.io/token/0x7d5f0398549c9fdea03bbdde388361827cb376d5](https://moonscan.io/token/0x7d5f0398549c9fdea03bbdde388361827cb376d5) for more information.
- More than 20 Polkadot projects including Moonbeam, Litentry, Relation, SubQuery, PolkaWorld and so on have claimed their project domains end with .dot
- Plan to integrate with blockchain explorers.

