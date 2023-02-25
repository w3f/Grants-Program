# Crowdloan Front End Template

* **Status:** [Under Development 1](https://github.com/w3f/Grants-Program/blob/master/applications/crowdloan_frontend_template.md), [Under Development 2](https://github.com/w3f/Grants-Program/blob/master/applications/Crowdloans-FET.md)
* **Proposer:** [SBalaguer](https://github.com/SBalaguer), [Noc2](https://github.com/Noc2)

## Project Description :page_facing_up: 

The following document intends to outline what a front-end white-label template could look like for teams to use to easily build their Polkadot Crowdloan ([see Wiki: Parachain Crowdloans](https://wiki.polkadot.network/docs/learn-crowdloans)) websites. Teams applying for this RFP can change and adapt this. 

The overall objective of this project is to provide a white-label solution to teams to be able to plug into and offer all the information users need to contribute to their Crowdloan. In essence, it's a collection of:
1. [Project information](#project-information)
2. [Rewards Schema](#rewards-schema)
3. [Current contributions](#current-contributions)
4. [Time left in Crowdloan and competition](#time-left-in-crowdloan-and-competition)
5. [Contribute CTA](#contribute-cta)
6. [After the Crowdloan](#after-the-crowdloan)

All of the above should be done _style agnostic_ so that the project can plug their own look and feel into the site.

### Project Information

This is just a place where the project can talk more about what they are doing.

### Rewards Schema

This is just a place what the reward schema looks like. It's important to know that different teams can have different rewards mechanisms. For example, a team can offer higher contribution to early-birds (first `x_amount_of_contributors`; first `y amount_of_tokens_contributed`), they can offer referrals or even they can get smarter and offer higher rewards if they are losing. 

In the end, for this section it's more important to give the teams the ability to query easily the information than rather to get them a UI pre-defined. In general, it would be good for the template to offer two out-of-the-box mechanisms:
1. Early Bird contributions.
2. Rewards schema.

Whichever the schema, there should be also a way of having this information available later on for the team to effectively give out the rewards.

### Current Contributions

Some teams like to show the number of contributors, others the list of addresses and how much they contributed, and others nothing at all. We need to give them all an option.

### Time left in Crowdloan and competition

Auctions have two phases: `start_period` and `ending_period`. During the `start_period` nothing important really happens, however every block of the `ending_period` matters, as this is when the candle can go out.

On top of this, teams will have other teams competing for the slots as well. This information needs to be displayed as well.

### Contribute CTA

A simple button to allow users to contribute directly through the UI. This should open PolkadotJS or whatever wallet the user prefers, and add this directly on chain. Important to manage the entire cycle of the contribution: 
- contribute -> waiting for finalization -> finalized.
- contribute -> waiting for finalization -> error.

### After the Crowdloan

Once the Crowdloan ends, it will be good for the team to easily query all contributors and have them sort it to calculate the rewards given the [rewads schema](#Rewards-Schema).

## Available Tools
- [PolkadotJS Apps](https://polkadot.js.org/docs/)
- [CAPI](https://github.com/paritytech/capi)

## Past examples
- [Acala](https://acala.network/acala/join-acala)
- [Calamari](https://mantanetwork.medium.com/the-calamari-crowdloan-on-kusama-74a3cb2a2a4b)
- [Basilisk](https://loan.bsx.fi/)
- [Parachains Info](https://parachains.info/auctions). In here check timeline and competition.
