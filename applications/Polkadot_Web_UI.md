# Open Grant Proposal
* **Project Name:** Polkadot UI Web Identicon + Angular Identicon
* **Team Name:** RidOne Technologies
* **Payment Address:** DAI  0xfA34F566bDDcA92Dc656310F08AC5aE64fC46456
## Project Overview 
### Overview

The project goal is to develop framework agnostic Polkadot.js Web Identicon and also Angular Identicon components for  generating identity icon with address as input.The project is inspired by [polkadot/react-identicon](https://www.npmjs.com/package/@polkadot/react-identicon)

### Project Details 

With a wide variety of front-end javascript framework, having framework agnostic components or tools is important for a broader and easier adoption of those components.
The polkadot.js UI for now has only React and Vue UI components but actually there are others javascript frontend frameworks like Angular, svelte, ember.js,..

The project consist of the following parts :

- **Web UI Identicon** : will be defined as Web component and can be used like any other native html element like  `p` or `div` and it  will be used by any Javascript Front-end project using Polkadot.js. For example `Angular`, `React`, `React-Native`, `Ember`, `Vue`, ....


- **The Angular UI Identicon** : this component will be specific for the Angular projects using Polkadot.js library ang needing the UI Identicon component like [polkadot/react-identicon](https://www.npmjs.com/package/@polkadot/react-identicon) is specific to react.js applications.

- **Technical documentation**, **demo**  and **tutorials** on how to use the components

We will not reinvent the wheel but rather be inspired by the logic used inside the react component and transpose it into the Angular Indenticon component and the Web (framework agnostic) Identicon component. 

For The Web and the Angular Idendicons once approved will be deployed into the `npm` registry.

### Ecosystem Fit 
The `Polkadot.js Web UI Identicon` will be of a good utility and will allow an easy adoption for team using a javascript frontend framework. For Angular developers there also will have their the angular flavor.

## Team 
### Team members
- Mor GUEYE: Founder
### Contact
* **Contact Name:** Mor GUEYE
* **Contact Email:** gueyemor2009@gmail.com
* **Website:** ongoing
### Legal Structure 
* **Registered Address:** Pikine, Dakar, Senegal
* **Registered Legal Entity:** Ridone Technologies
### Team's experience
Mor actually based in Paris, has a strong experience building [web](https://www.linkedin.com/in/mor-gueye-7659241a3/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAC-oHT0Bsgb6uTTo3vFaGn_x3xd7077jBqA,1613649142392)/) and [mobile](https://www.linkedin.com/in/mor-gueye-7659241a3/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAC-oHT0Bsgb6uTTo3vFaGn_x3xd7077jBqA,1613649240649)/) applications using technologies like Angular, Ionic, Flutter.

He has succesfully participated in development of the Orange Money mobile application 
for [ios](https://apps.apple.com/sn/app/orange-money-senegal/id1447224280) and [android](https://play.google.com/store/apps/details?id=com.orange.mobile.orangemoney&hl=fr&gl=US) using the Angular/Ionic stack.
He has done consulting and development for 7 years and is now in blockchain applications development after the completion of the [Substrate Runtime Developer Academy](https://www.industryconnect.org/substrate-runtime-developer-academy/) program by Industry Connect and Acala and Parity Technologies.
The oragnization repo is quie new but some worki is ongoing in the background.

### Team Code Repos
- [Angular Identicon](https://github.com/RidOne-technologies/polkadot-angular-identicon)
- [Web Identicon](https://github.com/RidOne-technologies/polkadot-web-identicon)

### Team LinkedIn Profiles
- [Mor GUEYE](https://www.linkedin.com/in/mor-gueye-7659241a3/)

## Development Roadmap 
### Overview
* **Total Estimated Duration:** 5 weeks
* **Full-time equivalent (FTE):** 0.62 FTE  
* **Total Costs:** 7,000 DAI

### Milestone 1: Angular-UI Identicon and Web Identicon for polkadot.js
* **Estimated Duration:** 4 weeks
* **FTE:**  0,62
* **Costs:** 7,000 DAI

In this milestone, We will implement Angular and Web  UI components
| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Angular_Identicon | implementation of the component + Testing |
| 2. | Web_Identicon | implementation of the web component + Testing |
| 3. | publishing into NPM registry|
| 4. | Documentation/ Tutorials | Documentation and Tutorials on usage example for both Angular and Web Identicon |

## Future Plans
Creating a Flutter Identicon either by using under the hood the `Polkadot UI Web Identicon`  with  webview.
