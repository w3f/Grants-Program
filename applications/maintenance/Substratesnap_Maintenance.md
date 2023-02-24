# SubstrateSnap Maintainance Grant Proposal

- **Team Name:** ChainSafe Systems
- **Payment Address:** 0x85D81Ab61Fe16CDcaeF2Ca556ED4577A51b9b07C (DAI ERC20)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 


## Project Overview :page_facing_up:

**This proposal is for a maintenance grant to undertake the following:**

1. Complete a rewrite of the [SubstrateSnap](https://github.com/ChainSafe/metamask-snap-polkadot) (formally Polkadot-Metamask Snap) to conform to the new Metamask Snaps API. 
2. Update the `@polkadot/api` library to the latest version and ensure that it works with [Lavamoat](https://github.com/LavaMoat/LavaMoat).
3. Update the Demo and Wiki page.
4. Open a Github Pull Request on https://polkadot.js.org/apps/#/explorer to enable usage of the Metamask Flask via Snap.




### Overview


- The SubstrateSnap (plugin) enables support for the Polkadot and Kusama network inside of Metamask and by doing so enables Polkadot dApps easy integration with Metamask.
- ChainSafe believes that Snaps are vital to fostering increased adoption of web3 systems and as such consider the maitainance of the ChainSafe SubstrateSnap a strategic priority.     

### Project Details

This is a maitainance proposal for a project that has already been developed. The initial development was originally funded through a [W3F grant](https://github.com/w3f/General-Grants-Program/pull/244). The project is open-source and its repository and Wiki page can be located using the following links:

https://github.com/ChainSafe/metamask-snap-polkadot
https://github.com/ChainSafe/metamask-snap-polkadot/wiki 


### Ecosystem Fit

**Who is your target audience and how does your project fit into the ecosystem?**

  Metamask is currently the most widely used web3 wallet solution with recent on-chain data (Feb 2022) reporting approximately 21 million in monthly active users (MAU.)
  
  When fully integrated with Metamask, the SubstrateSnap will allow all of these users simple and effortless access to the Polkadot and Kusama ecosystems and as such increase the use of substrate-based applications.
  
  

  

  
**What need(s) does your project meet?**

  With an ever-growing number of popular blockchains, each with its own native wallet, users often find themselves needing to access multiple wallet applications and keep track of several different seed phrases. This process is tedious and acts as a blocker to the scalability and interoperability  of web3 solutions as a whole. 

Further, by maintaining the SubstrateSnap, it is our goal that websites will not have to implement custom handling, but simply add our packages for seamless integration.
  

**Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

  Although a great application, we also feel that the native Polkadot.js wallet lacks a certain level of user-friendliness and as such may be acting as a barrier to entry for the ecosystem. By granting users the flexibility to use their wallet of choice within their ecosystem of choice, in this case, Metamask and Substrate, ecosystems can begin to freely share user interactions and as such mutually benefit from an increase in user activity across all applications. 


## Team :busts_in_silhouette:

### Team members

- Marin Petrunić - Head of Engineering, Consulting
- Bernard Stojanović - Team Lead
- Ivan Rubido - Software Developer

### Contact

- **Contact Name:** Bryant Soorkia - Business Development
- **Contact Email:** bryant@chainsafe.io
- **Website:** www.chainsafe.io

### Legal Structure

Registered Address: 251 Spadina Ave, Unit 204, Toronto, Ontario, Canada
Registered Legal Entity: ChainSafe Systems Inc.

### Team's experience

ChainSafe is a global leader in blockchain research and development and specializes in the designing and building of web3-related infrastructure. We believe that empowering developers with blockchain-agnostic tools is essential for the future of decentralized systems.

The firm encompasses top engineering talent from around the globe and also enjoys a strong reputation within the blockchain community.  

In addition to protocol-level client implementations (such as “Gossamer” on Polkadot), ChainSafe also has demonstrated experience of developing a Metamask Snap for the Filecoin Foundation "Filsnap" as well as engineering the SubstrateSnap (formerly Polkadot-Metamask Snap) itself. Further, ChainSafe is currently in active discussions with a number of blockchain foundations that are exploring Metamask Snaps. We believe that this experience uniquely positions us as an ideal choice to maintain the SubstrateSnap.



In addition to the above, ChainSafe also rounds out its deep Web 3.0 portfolio with undertakings into product development such as the privacy-first decentralized storage solution ChainSafe Files, among others such as the ChainSafe Gaming SDK and ChainBridge.



### Team Code Repos

- https://github.com/ChainSafe
- https://github.com/ChainSafe/gossamer
- https://github.com/ChainSafe/PINT
- https://github.com/ChainSafe/chainlink-polkadot
- https://github.com/ChainSafe/filsnap
- https://github.com/ChainSafe/files-cli

### Team Github Handles

- https://github.com/mpetrunic 
- https://github.com/BeroBurny
- https://github.com/irubido

### Team LinkedIn Profiles 

- https://www.linkedin.com/in/mpetrunic/
- https://www.linkedin.com/in/bernard-stojanovi%C4%87-4a9b7a110/
- https://www.linkedin.com/in/ivan-rubido-917169151/

## Development Status :open_book:



Approximately 2 years ago, Node Factory (recently acquired by ChainSafe) submitted a grant proposal for the maintenance of the SubstrateSnap (formerly Polkadot-Metamask Snap). As the market was not quite ready for Snaps at the time, it was decided that Snaps would be put on hold until further notice. 

https://github.com/w3f/General-Grants-Program/pull/244

ChainSafe would like to formally re-apply for this grant as we feel that there is now a real need for Snaps in the market. 

After recent discussions between Bryant Soorkia (ChainSafe - Business Development) and David Hawig (W3F - Head of Grants), it was established that a crucial factor in determining the necessity of Snap maintenance would be confirmation of Metamask's intentions to implement the snap into the full version of the Metamask and not just Metamask Flask.

Following this, ChainSafe and Metamask had a discussion on Wednesday the 9th of March 2022, and confirmed that Metamask will shortly be announcing a Snaps rollout timeline for several different chains. It is expected this announcement will be made in the next few weeks. One such chain will be Filecoin (Filsnap), a project that ChainSafe also engineered. Although we do not yet know the exact date, Metamask has indicated that the SubstrateSnap will be included in the roll-out of all Snaps.

Evidence of the above has been shared with David Hawig via email.


## Development Roadmap :nut_and_bolt:


**Why the Specific Project Should Continue Being Supported:**

Given that Metamask has recently shifted its focus towards interoperability and as such, Snaps, we believe that this presents an ideal opportunity for The Web3 Foundation to leverage first-mover advantage. By maintaining the SubstrateSnap, it will allow W3F to take advantage of this by being one of the first Snaps that are ready for deployment prior to launch.




**Overview of the Features/Bugs That Need Development Contributions:** 
1. Complete a rewrite of the [SubstrateSnap](https://github.com/ChainSafe/metamask-snap-polkadot) to conform to the new Metamask Snaps API. 
2. Update the `@polkadot/api` library to the latest version and ensure that it works with [Lavamoat](https://github.com/LavaMoat/LavaMoat).
3. Update the Demo and Wiki page.
4. Open a Github Pull Request on https://polkadot.js.org/apps/#/explorer to enable the usage of Metamask Flask via Snap.


**Assurance That the Current Project Owners Are Willing to Review/Accept Your Contributions:** 
We are owners of the SubstrateSnap repository. Further, the maintainers of Polkadot applications are open to accepting a pull request that adds Snap functionality as described here: https://github.com/polkadot-js/apps/pull/2865



### Overview / Budget

- **Estimated Duration:**  3 Months - followed by a renewal review.
- **Sprint/Period Duration:**  Monthly - with 1 x 'syncs' per month prior to being in production, and the possibility to increase to 2 x 'syncs' per month when in production and upon discussion.
- **Full-Time Equivalent (FTE):**  0.5 FTE (20h per week)
- **Discounted Monthly Rate Per Period:** US$16,000 / eng-month.

- **Total Costs:** US$48,000




## Current and Future Plans

- Complete a re-brand to SubstrateSnap to ensure users understand that it is compatible with Kusama ecosystem as well and not just Polkadot.
- Continue engaging in communications with MetaMask to coordinate the launch of Snaps on Metamask.
- Create promotional materials (blog posts, social media posts, etc) to promote SubstrateSnap to the wider community.
- Continue maintaining the Snap into the future.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
 ChainSafe is a long-standing friend of The Web3 Foundation and has collaborated on several projects over the past few years. It was through this relationship that ChainSafe was made aware of the Maintenance Grant program.  It is also worth noting that ChainSafe has been awarded W3F grant funding for other projects in the past, one such being Gossamer.
 
 