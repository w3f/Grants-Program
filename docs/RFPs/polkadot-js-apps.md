# Polkadot-JS Apps Maintenance

:::tip
This Request for Proposal is currently _open_, meaning we are actively looking for (additional) teams to apply for it.
:::

* **Status:** Open
* **Proposer:** @keeganquigley
* **Teams/People that could deliver the RFP:** LimeChain, PolkaGate (formerly Polkadot-JS Plus), Talisman, Nova


## Project Description :page_facing_up: 

We're looking for teams who are interested in maintaining the [Polkadot-JS](https://github.com/polkadot-js/) repositories. This could be in the form of a [maintenance grant](https://github.com/w3f/Grants-Program/blob/master/applications/maintenance/maintenance-template.md), with an initial fixed time commitment, for example.

This includes all the developer tooling at polkadot.js.org, such as the console UI, client, website, and API.

### Maintenance list

The following is a list of repos that need to be maintained and potentially further developed:

- https://github.com/polkadot-js/apps
- https://github.com/polkadot-js/docs
- https://github.com/polkadot-js/tools
- https://github.com/polkadot-js/api
- https://github.com/polkadot-js/extension
- https://github.com/polkadot-js/common
- https://github.com/polkadot-js/dev
- https://github.com/polkadot-js/ui
- https://github.com/polkadot-js/wasm
- https://github.com/polkadot-js/build-deno.land
- https://github.com/polkadot-js/build-bundle
- https://github.com/polkadot-js/phishing

## Maintenance Responsibilities :nut_and_bolt:

This section should specify what kind of tasks and responsibilities your maintainer team will cover during the contract period. Feel free to outline a list of issues/bugs or pull requests that need further development - you can specify them here to provide more context on what tasks you will close. You are also free to argue whether it would make more sense to transfer the repos to your organization, or to work on a fork.

Some example responsibilities might be:

- We will maintain the project's documentation.
- We will answer issues and discussions.
- We will look to resolve issues and merge open pull requests.
- We will fix new bugs as we receive and help contributors who have pull requests get any needed information.

> ⚠️ *Note that all code should be published under an open-source license during the maintenance period.*

## Technical Considerations

- **Roadmap:** What is the team's roadmap for future development and updates? How will they go about prioritizion?
- **Strategy:** How will the team manage bug fixes, new features, and community contributions?
- **Testing and CI/CD:** Will the team keep the current infrastructure or replace it?
- **Supported Frameworks and Libraries:** Do you foresee any potential maintenance challenges? Is there anything that requires special attention?


## Deliverables :nut_and_bolt:

The following items could be the initial deliverables of the project. These are just examples of course; improvements/additions are welcome. The listed costs are placeholders.

### Overview

- **Start Date:** Date, when you plan to start with the maintenance work.
- **Sprint/Period Duration:** Duration of the sprint/period (e.g. 4 weeks)
- **Total Duration:** Duration of the entire maintenance contract (e.g. 2 years)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. .5 FTE)
- **Max budget per sprint/period:** Requested max budget in USD per sprint/period (e.g. 7,000 USD).
- **Hourly rate:** Amount of budget per hour, since it’s unlikely that the maintenance of the project requires the exact same workload each sprint.

### Milestone 1 - Initial Stabilization

* **Estimated Duration:** 1 month
* **FTE:**  1.5
* **Costs:** $4000


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a.| License | Apache 2.0
| 0b.| Article | We will write an article or public-facing announcement explaining our intentions to the community.
| 1. | Codebase Assessment | We will conduct a thorough review of the codebase, docs, and testing infrastructure. We will look to identify any critical bugs or outdated dependencies. |
| 2. | Updates | We will address any issues related to breaking changes, and prioritize tasks. |
| 3. | Polkadot-JS API | For the initial phase, we will focus on bug fixes, documentation updates, and minor improvements. |

### Milestone 2 - Maintenance & Improvement
 
 Additional milestones might look similar to this one.

* **Estimated Duration:** 6 months
* **FTE:**  1.5
* **Costs:** $6000


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a.| License | Apache 2.0
| 0b.| Documentation | Improve API docs for devs and users.
| 0c. | Testing & CI/CD | We will improve testing quality and implement a robust CI/CD pipeline for automated testing and build. |
| 1. | Updates/Optimizations | We will update outdated dependencies and establish communication with existing contributors to prioritize updates. |
| 2. | Enhancements/Improvements | We will integrate community contributions to resolve issues and merge open PRs. |
| 3. | Refactoring | We will make small refactoring changes to the codebase for better modularity and maintainability in accordance with community suggestions.
| 4. | Housekeeping | Describe general upkeep tasks, misc.

### Milestone 3 - Feature Development (Optional)
 
* **Estimated Duration:** 3 months
* **FTE:**  1.5
* **Costs:** $6000


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a.| License | Apache 2.0
| 1. | Feature Development | We will implement features based on community feedback and roadmap. |
| 2. | Performance Optimizations | We will conduct analysis to improve API response times and resource usage. |
| 3. | Polkadot-JS API | We will... |
| 4. | Polkadot-JS Apps | We will... |

## Future Plans

Please include here

- how you intend to maintain the project long-term.
- the team's roadmap and intentions in relation to it.

## Additional Information :heavy_plus_sign:

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- Whether you know of other teams who might be interested in maintaining a particular repo.
- Previous grants you may have applied for.