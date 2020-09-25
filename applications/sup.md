# Open Grant Proposal

* **Project:** Sup
* **Proposer:** [clearloop](https://github.com/clearloop)
* **Payment Address:** Substrate package manager

## Project Overview :page_facing_up: 

The dependencies of substrate are managed `git`, which represents `relative path` instead of
`http` link in `Cargo.toml`, it's hard to set up a new `node-template`, however, for the projects
which are based on subtrate, upgrading the versions of the subtrate dependencies is too much
complex and inefficiently.

We are building a substrate package manager in Rust, which implements:

+ One command generating a substrate node-template
+ One command upgrading the substrate deps
+ ...how about wasm runtime? need some advice

Hope this project can help more and more developers to join the ecosystem.

## Team :busts_in_silhouette:

* **Members:** Mercury Fletcher
* **LinkedIn Profiles:** https://www.linkedin.com/in/mercury-fletcher-2277191a3/
* **Code Repos:** https://github.com/clearloop
* **Website:**	https://github.com/clearloop/sup
* **Legal Structure:** Pensonal
* **Team's Experience:** Author of [ElvisJS](https://github.com/elvisjs/elvis), [leetcode-cli](https://github.com/clearloop/leetcode-cli), [darwinia/shadow](https://github.com/darwinia-network/shadow) and [cdr.today](https://github.com/CdrToday/ct).


## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 4 weeks
* **Full-time equivalent (FTE):**  0.285
* **Total Costs:** 0.5 BTC

### Milestone 1 — Generate Node-Template in one command

* **Estimated Duration:** Already Done
* **FTE:** 0.285
* **Costs:** 0.3 BTC

Just run:

```
$ cargo install sup
$ sup new <your-awesome-substrate-based-project>
$ cd <your-awesome-substrate-based-project> && cargo build
```

And it will work.


### Milestone 2 — Upgrading Substrate Dependencies in one command

* **Estimated Duration:** 1 week
* **FTE:** 0.285
* **Costs:** 0.1 BTC

Run: 

```
$ sup upgrade --tag <substrate-tag>
```

Upgrades the dependencies of substrate by tag for current project.


### Milestone 2 — Documentation

* **Estimated Duration:** 2 week
* **FTE:** 0.285
* **Costs:** 0.1 BTC

More docs about this project, share this project to people who doesn't have experince
of substrate, upgrading.


### Milestone 3 — UnKnown

* **Estimated Duration:** ?
* **FTE:** 0.285
* **Costs:** ? BTC

Not sure what could be done together further more, but need to round up.

### Community engagement

The tutorials and Documentation that we provide will be published as articles in Medium, [rust.cc](rust.cc) and other social media platforms with due mention about Web3 grant.

## Future Plans

We have a lot of ideas about the ecosystem, currently this project is the first step.
