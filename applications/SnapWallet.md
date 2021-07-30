# W3F Open Grant Proposal

* **Project Name:** SnapWallet
* **Team Name:** Wisgloo Labs
* **Payment Address:** 0xc544153D50430eeA22FD8BAcdFfb0D6B6046432f (DAI)


## Project Overview :page_facing_up:

### Overview

SnapWallet is a localStorage based Web Wallet SDK for Substrate chains. It makes user-onboarding easier and quicker and can also be used as a burner wallet.

### Project Details

Two packages will be developed, one will be a vanilla JS web wallet and the other will be for react framework. By implementing two packages, we can ensure nominal package sizes, clear documentation, and ecosystem standard API specifications.

The SDK will be compatible with @polkadot/extension-dapp package. We will be using @polkadot/extension-inject to tap into the global object.

SnapWallet will support a wide variety of UX options like:
* Option to automatically create an account as soon as the web app is loaded(useful as a burner wallet)
* Download the account JSON and import account
* Send/receive token(QR code/address)
* Support for white-labeling and complete styling customization for all UI components
* i18n translation support for all UI components

The complete plan would be to:
1. Develop and release vanilla JS and React SDK of the web wallet.
2. Documentation page and example GitHub repos for how to use the web wallet SDK.
3. Buying a domain and setting up a landing page with a demo of the wallet.

### Mockups

![Onboarding Step 1](https://user-images.githubusercontent.com/20946466/127680838-19e171ce-ed06-4ce5-9eca-dd36b2289351.png)
![Onboarding Step 2](https://user-images.githubusercontent.com/20946466/127680846-c8380ebd-5707-4d16-8c12-9b95ac698c0d.png)
![Onboarding Step 3](https://user-images.githubusercontent.com/20946466/127680855-8914d554-9e14-496c-bab1-41a28b6b2f23.png)
![Onboarding Step 4](https://user-images.githubusercontent.com/20946466/127680872-13593eb2-6676-4cdf-9e58-4a0f576c7134.png)
![Onboarding Step 5](https://user-images.githubusercontent.com/20946466/127680884-e925fa83-d73f-4667-857d-5cf0d5bc7030.png)


### Ecosystem Fit

* SnapWallet would greatly improve user experience, especially in mobile devices. 
* Developers of any Substrate based chain can use it to easily onboard new users along with great developer experience.


## Team :busts_in_silhouette:

### Team members

* Rakesh UP
* Koushik KM
* Hitesh Chauhan

### Contact

* **Contact Name:** Rakesh UP
* **Contact Email:** rakesh@wisgloo.com
* **Website:** https://wisgloo.com/

### Team's experience

Wisgloo Labs is set out to build multiple products in both Ethereum and Substrate/Polkadot ecosystem and also other Web 2.0 products. We have previously built Wisgloo(a platform for creators to monetize their content and to build their communities) and Spots(a social bookmarking app). Spots is yet to be launched.

We have experience building a DeFi options interface [Ziku](https://zikufinance.com/) as part of the Opyn Grant Program. Link to grant proposal details [here](https://github.com/opynfinance/OGP/pull/17).

### Team Code Repos

* https://github.com/wisgloo
* https://github.com/wisgloo/ziku
* Two other projects(Wisgloo, Spots) are not open source. We can give you access upon request.

### Team Github Profiles

* https://github.com/RakeshUP
* https://github.com/koushikmohan1996
* https://github.com/hiteshkundal

### Team LinkedIn Profiles

* https://www.linkedin.com/in/rakesh-up/
* https://www.linkedin.com/in/koushik-mohan/
* https://www.linkedin.com/in/hiteshchauhanbrandcer/


## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 1.5 - 2 months
* **Full-Time Equivalent (FTE):**  2.5 FTE
* **Total Costs:** 24,000 DAI

### Milestone 1 — Develop the Web Wallet SDK 

* **Estimated duration:** 3 weeks - 1 month
* **FTE:**  2
* **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide a documentation website and example repos to showcase how to use the SDK |
| 0c. | Testing Guide | SDK functions will be fully covered by unit tests to ensure functionality and robustness. UI components will be covered by visual testing |
| 0d. | Deliverables | npm packages for the SDK(vanilla JS and React JS SDK) and example repos |
| 1 | React SDK | Design the UI for the SDK popups and develop that
| 2 | Vanilla JS SDK | The complete Web Wallet functionality for Vanilla JS
| 3 | CI/CD | CI with visual and unit testing. Auto deploys to npm after a branch is tagged using GitHub Actions.

### Milestone 2 — NPM release, Landing page, Documentation & Example repos

* **Estimated Duration:** 3 weeks - 1 month
* **FTE:**  3
* **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide a documentation website and example repos to showcase how to use the SDK |
| 0c. | Testing Guide | SDK functions will be fully covered by unit tests to ensure functionality and robustness. UI components will be covered by visual testing |
| 0d. | Deliverables | release the npm packages, landing page and a documentation website |
| 0e. | Article | We will publish an article that explains SnapWallet in major platforms 
| 1 | Landing page | A NextJS landing page that provides an interactive demo of the SDK
| 2 | Documentation | GitBook documentation for the packages individually 
| 3 | Example Repos | Provide example repos for both vanilla JS and React


## Future Plans

Wisgloo Labs is set out to build an open-source decentralized community platform for substrate-based chains and dapps.
We believe SnapWallet would be a good starting point to get into Substrate/Polkadot ecosystem. We intend to build a permanent team around SnapWallet and the upcoming decentralized community platform.
