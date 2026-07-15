# Wallet Aggregator Library

:::danger
This Request for Proposals is _closed_, meaning we are not looking for any more proposals on this topic at the moment.
:::

* **Status:** [Implemented: SubConnect](https://github.com/Koniverse/SubConnect), [Implemented: talisman-connect](https://github.com/TalismanSociety/talisman-connect) 
* **Proposer:** [Matteo Casonato](https://github.com/0xCaso)

## Project Description :page_facing_up: 

Users of Polkadot and Substrate-based projects need to connect their wallet to a front-end when using a dApp. At the moment, there are [several wallets and browser extensions](https://wiki.polkadot.network/docs/build-wallets) that can be used (Polkadot-JS, Talisman, Fearless, just to name a few). However, it's common that the frontends don't support all of them, and the users need to install a new wallet or browser extension to connect to the frontend.

This project aims to create a **React library** that allows users to connect with any wallet or browser extension to the frontends that adopts it. This way, the users can use the wallet they prefer, and the frontends can support all of them without the need to implement the connection logic for each wallet, just integrating one library (making life easier for developers). Though we would prefer a React library, we would also consider implementations for other libraries as well.

## Deliverables :nut_and_bolt:

The following items could be the initial deliverables of the project. Of course, improvements and additions are more than welcome.
- Initial **research**:
  - study from the [RainbowKit](https://www.rainbowkit.com/docs/introduction) library (which is the same thing, already developed for EVM chains);
  - understand which wallets/extensions can be integrated, what is needed to connect to them, etc.;
- Library **development**:
  - various connectors for each wallet;
  - UI components (connect button, account and chain selector, etc.);
- UI/UX (for both users/devs) **improvement**:
  - addition of a tool that scaffolds a new project with the wallet connection library (firable, for example, with `npm init @user/wallet-aggregator@latest`);
  - selective account disclosure implementation (view [this](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/privacy-enhancement-polkadot-extension.md) RFP).
