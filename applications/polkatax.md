# Open Grant Proposal

- **Project:** Polkatax

## Project Overview :page_facing_up:

The only two things certain in life are death and taxes - this project would help you to deal with the latter one. The idea is to create an application that will provide user an easy way to generate a nice CSV or XLS file that can be included to his declaration of taxes and therefore legalize his staking income. 

### Project Details

 - General purpose application for generating staking income document
 - Support multiple countries (English speaking and Czechia/Slovakia first)
 - Use of Subscan to gather rewards data
 - Use various exchanges API to determine the dollar price of the underlying asset at the time reward was received
 - Use Central Banks API to convert the USD price to the supported country native currency
 - Provide taxation guides and information for supported countries
 - Initial support for Polkadot and Kusama, add more Substrate-based projects along the way
 - Add fiat gateway for credit card payments

### Use case

Many people want to legalize their crypto incomes but they are not exactly sure how to do it. This application would serve as a simple guide on the taxation issues and will provide an easy and lucid way of visualizing their incomes and adding them to their declaration of taxes. I want to keep project rather simple and easy-to-use and incrementally add support for other countries and tokens becoming part of the Polkadot ecosystem.

#### Application UI

UI will be lean and simple, there will be a  page with guides (in their respective languages) and a simple page offering you to generate a report either from address you provide or the address you choose from the wallet integration. You will also pay a fee for the service from either a Polkadot wallet or by the standard means of the credit card. Result of this operation would be statistical data about your staking and document that you can enclose to your declaration of taxes.

### Ecosystem Fit

I think someone like this is missing in the Polkadot ecosystem and it will be needed even more when ecosystem matures and amplifies its user base.

## Team :busts_in_silhouette:

### Team members

- Petr Mensik (Founder of Polkadotters, Blockchain dev at Subauction, previously Jva/Clojure backend developer, graduate of Ostrava University of Technology)
- Michael Repetny (Product dev at Subauction, previously co-founder of web analytics Zeerat, graduate of University of Economics)
- we plan to bring one front-end developer (chosen from our community so we can teach more about Polkadot development) and tax specialist who will help us writing the guides

### Team Website

- https://polkadotters.medium.com

### Legal structure

- LLC in the Czech Republic

### Team's experience

All of us experienced developers with various experience - we have built applications ranging from personal websites to big enterprise systems. 
As far as our Polkadot experience goes, we have participated in the Polkadot Encode hackathon winning the 2nd spot and currently having NFT auction system under development with cooperation with other Substrate projects. Polkadotters also validate on a couple of networks (Kusama, Polkadot, Plasm and others) se we are quite familiar with staking.

### Team Code Repos

https://github.com/polkadotters/polkatax

### Team LinkedIn Profiles

- https://www.linkedin.com/in/petr-men%C5%A1%C3%ADk-2566394b/
- https://www.linkedin.com/in/repetny

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** ~2 month
- **Full-time equivalent (FTE):** 1.5
- **Total Costs:** ~15,000 USD

### Milestone 0: Implement staking data aggregator for Polkadot address 

- **Estimated Duration:** 1-2 weeks
- **FTE:** 1.5
- **Costs:** $5,000
- Implement:
    - buy www.polkatax.com domain and set up CI
    - deliver simple, already deployed application that can already create a downloadable file to enclosed with declaration of taxes

### Milestone 1: Add wallet integration

- **Estimated Duration:** 1-2 weeks
- **FTE:** 1.5
- **Costs:** $3,000
- Implement:
  - integrate Polkadot JS wallet that will allow user to select his staking address and also pay the fee for generating the file
  - add more statistic about staking income (how many tokens he earned, what was the daily average and others)

### Milestone 2: Writing the docs and guides

- **Estimated Duration:** 1-2 weeks
- **FTE:** 1.5
- **Costs:** $3,000
- Implement:
    - design guidelines with text in supported languages (currently English and Czech)
    - add integration to exchange API (Binance initially) for getting the USD price of the token

### Milestone 3: Credit card payments and wrapping up
- **Estimated Duration:** 1-2 weeks
- **FTE:** 1.5
- **Costs:** $4,000
- Implement:
  - add credit card payments 
  - properly test the whole application, tight up lose ends and ship it to the users

### Community engagement

This project actually comes straight out of the Polkadotters community on the request of some users that want to have their taxes in order. We believe that we will be able to promote the projects and help users to legalize their incomes from staking of Substrate-based projects.

We are also creating a DOT Validators Alliance (that will be launched soon) which is a joint project of various community leaders and builders that will help support of community validators and I think this project fits nicely into the bigger picture.

Our channels

- https://polkadotters.medium.com
- https://twitter.com/Polkadotters1
- https://www.facebook.com/groups/232197797602358/

## Future Plans

As stated in the beginning, we plan to add more Substrate projects (that are PoS based) as they come into the ecosystem. Also, we want to work with the community to add more translations and more languages so not only citizens of English-speaking countries can legalize their income.

Also, when the Polkadot ecosystem is deployed and functioning, we plan to integrate trades from Substrate-based DEXes (Acala DEX, HydraDX or Polkaswap come to our mind) so we can have comprehensive, easy to use solution for all Polkadot users who want to legalize their crypto incomes.

