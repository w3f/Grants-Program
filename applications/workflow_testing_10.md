# Open Grant Proposal

* **Project Name:** Workflow Testing
* **Team Name:** Marcinosososos
* **Contact Name:** Marcin
* **Contact Email:** marcin@web3.foundation
* **Registered Address:** Swiss Alps, CH 8123
* **Payment Address:** 1NKWsqRaWZDNX17cuzfyykcAA317njqzSn

## Project Overview :page_facing_up: 

sup is a substrate package manager using git, it allows developer new node-template 
and upgrade substrate dependencies in one comamnd.

Hope this project can help more and more developers to join the ecosystem.

## Team :busts_in_silhouette:

* **Members:** Mercury Fletcher
* **LinkedIn Profiles:** https://www.linkedin.com/in/mercury-fletcher-2277191a3/
* **Code Repos:** https://github.com/clearloop/sup
* **Website:**	https://github.com/clearloop/sup
* **Legal Structure:** Pensonal
* **Team's Experience:** Author of [ElvisJS](https://github.com/elvisjs/elvis), [leetcode-cli](https://github.com/clearloop/leetcode-cli)


## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 2 days
* **Full-time equivalent (FTE):**  0.285
* **Total Costs:** 0.1 BTC

### Milestone 1 — Generate Node-Template in one command

* **Estimated Duration:** 1 day
* **FTE:** 0.285
* **Costs:** 0.05 BTC

Just run:

```
$ cargo install sup
$ sup new <node-template>
$ cd <node-template> && cargo build
```

And it will work.

| Number | Deliverable                    | Specification                             |
|--------|--------------------------------|-------------------------------------------|
| 0      | `sup new <node-template>`      | New node-template in one command          |
| 1      | `sup update`                   | Update sup registry                       |
| 2      | `sup source --query <pattern>` | List substrate dependencies with versions |
| 3      | `sup tag --limit <n>`          | List avaiable registry tags               |


### Milestone 2 — Upgrading Substrate depencidencies in one command

* **Estimated Duration:** 1 day
* **FTE:** 0.285
* **Costs:** 0.05 BTC

Run: 

```
$ sup upgrade --tag <substrate-tag> --registry <substrate-based-registry>
```

+ Upgrades the registry of substrate by tag for the current project.
+ Supports customize subtrate registry(including substrate-based registry)

| Number | Deliverable                                        | Specification                                                |
| ------ | -------------------------------------------------- | ------------------------------------------------------------ |
| 0      | `sup new <node-template> --tag <t> --registry <r>` | New node-template with specified tag and registry            |
| 1      | `sup update --registry <r>`                        | Update target registry                                       |
| 2      | `sup source --tag <t> --registry <r>`              | List substrate dependencies with versions                    |
| 3      | `sup tag --registry <r>`                           | List avaiable tags of target registry                        |
| 4      | `sup upgrade --tag <t> --registry <r>`             | Upgrade current project to the target or latest tag of the current or target registry |

### Community engagement

The tutorials and Documentation that we provide will be published as articles in Medium, [rust.cc](rust.cc) and other social media platforms with due mention about Web3 grant.
