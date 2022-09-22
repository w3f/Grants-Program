# Vue.js + TypeScript Substrate Front-End Template

* **Status:** Open
* **Proposer:** [WunderbarNetwork](https://github.com/WunderbarNetwork)
* **Your Project(s):** [WunderbarNetwork](https://github.com/WunderbarNetwork)

## Project Description :page_facing_up:

When building our app, we have used a very useful existing community template - the [Substrate Front End Template](https://github.com/substrate-developer-hub/substrate-front-end-template) from the Substrate Developer Hub. This template is built using React.js and JavaScript. We are proposing to create an _alternative_ version of this template, which would achieve two major outcomes:

1) It would be written using TypeScript as opposed to JavaScript.

Even though most developers who code in TypeScript can work well with JavaScript and vice versa, the "conversion" is not always straight-forward, and despite JavaScript being around for a very long time (and seemingly not going anywhere), TypeScript is gaining rapidly in popularity and most greenfield projects would prefer TypeScript over JavaScript.

According to [StackOverflow's 2022 Survey](https://survey.stackoverflow.co/2022/), JavaScript is the most commonly used technology (for the tenth year in a row!), however TypeScript is steadily closing in. Looking at the _loved vs. dreaded_ category though, the picture is very different - TypeScript is loved by **73.46%** of developers (and is near the very top of the list), whereas JavaScript achieved a score of **61.46%** to be placed in the middle of the table.

2) It would use Vue.js instead of React.js

Similarly to the above, React.js is still undeniably in the lead when it comes to web framework popularity (according to the same survey, **42.62%** of projects would be using React), however at **18.86%** Vue.js is still in the top 6 and is on the rise.

Overall, we believe that the combination of TypeScript's strong, static typing, and Vue's simplicity will together serve the purpose of providing an alternative source of very clear examples of how to interface with a Substrate Node from a modern front-end application, which should be of great value to the community.

The delivered application would retain the same license (_The Unlicense_) as the existing Substrate Front-End Template application.

## Deliverables :nut_and_bolt:

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  1 FTE
* **Total Costs:** US$ 20,000.00

### Milestone 1

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Vue.js Component Library | A component library to provide a mechanism for interactions and showing outputs of Substrate Node API integration directives. This would be written in Vue 3 using the Composition API and TypeScript. |
| 2. | Vue.js Composables | In Vue.js, Composables are re-usable functions that encapsulate logic. We would provide a common set of composables that would showcase interactions with the Substrate Node (i.e. executing pallet callables, transfering balance, subscribing to event updates, etc.) |
| 3. | Tests | Mocha + Chai tests as an alternative way to demonstrate API usage, plus provide a starting point and template for developers to implement their own testing. |
| 4. | Vue.js App | Putting everything together - any developer should be able to quickly install and run the app without any modification and experience interacting with the Substrate Node first hand. |
