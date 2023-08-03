# APPI: Auto-funded public P2P infrastructure

* **Status:** [Implemented](https://github.com/nodefactoryio/vedran)
* **Proposer:** [swader](https://github.com/swader)
* **Projects you think this work could be useful for**: https://kusama.network, https://polkadot.network

## Project Description :page_facing_up: 

In Ethereum, most user-facing applications default to Infura as an endpoint to access full node information. 

While it is tempting to conclude that this is because running home nodes is prohibitively expensive, the main reason is in fact **inertia**. Put simply, people weren't given the option or incentive to run their own nodes fast enough, and defaulted to an easier route which stuck.

There have been attempts at financing home-run infrastructure - projects like [VIPNode](https://vipnode.org/) have lead the charge - but the aforementioned inertia prevented any significant adoption. Another recent contender is Pokt.network.

This document describes auto-funded public p2p infrastructure (APPI) for the Polkadot and, specifically, Kusama ecosystem. The idea is to incentivize people to run full and archive nodes at home, without relying on cloud servers and centralized points of failure.

## Dependencies

Depends on Treasury Recurring Payouts: https://github.com/paritytech/substrate/issues/6551

## Overview

The payout, approved by a Council motion for a specific pool of nodes would go to the the [payout script](#payout-script) (identified as an address), then the pool would distribute the funds based on the [database](#database).

## Deliverables :nut_and_bolt:

### Load Balancer (LB)

The Load Balancer is a tool that assigns an incoming connection request to a node in its pool. The Load Balancer should only accept nodes with the **same settings** as every other node. 

E.g. if a node is running with some RPC endpoints off, it should not share a pool with a node that has them all on, otherwise the users connecting to the pool might experience lower QoS.

The Load Balancer should monitor for node **freshness** via [LB Daemon](LB-Daemon) and log penalties into the [Database](#Database) if a node is offline (not reporting a ping for more than 30 seconds) or not fresh (a node's latest and best block lag behind the best in the pool by more than 10 blocks).

A penalized node should enter an initial cooldown of 1 minute, and issue another check after the cooldown expires. After every check, if the offense is still on-going, the duration of the last cooldown doubles. When a node's cooldown exceeds 17 hours, the node is permanently removed from the pool (automatically removed from the whitelist).

An LB operator can define the following settings:

- LB name
- LB capacity (max number of nodes)
- Whitelist (list of node IDs)
- Fee (cut to take)
- Selection method (random or round robin)
- Aliases: if the operator is running alternative clones of the same LB on other infra, aliases can be defined here. All LB clones should also define the same list of aliases, including the original. This should reduce reliance on a single LB endpoint.
- Payout period in days
- Payout script executable path

The LB should be able to automatically and periodically - based on *payout period* - call out to a [Payout script](#payout-script) which takes as input a list of addresses and points.

#### Payout Calculation

The LB adds points to a node in the ratio of 90:10 for requests:liveness. In other words, a node that has been online but got no requests due to bad luck should still be paid something.

### Database

An **append-only database** for historical data ([see below](LB-Daemon)) should be running alongside the LB. The LB operator should be able to define the age of the data to store. The age should default to 30 days.

Can be Prometheus if the [daemon](LB-Daemon) is built in a way that exposes this information.

### LB Daemon

The LB Daemon is a background process (perhaps with Prometheus metrics exposed) meant to run alongside a Substrate node. This Daemon:

- pings its home LB every few seconds with the node's ID
- alphabetically orders and standardizes, then hashes a node's startup settings (exclude basepath and name) and sends them along with every ping
- retrieves the node's best and latest blocks and sends them along with every ping
- reports telemetry data to the LB, like connected peers, memory use, etc. The LB stores this data into the [Database](#Database)

Without a companion Daemon, a node **cannot** join a pool.

### Payout script

The Payout script is in charge of disbursing payments. This is a multi-pay script which takes as input a mapping of addresses and points. The payout script should be an account of the chain it is paying out for (e.g. a Kusama account if we're dealing with a Kusama pool), so that it can receive the [auto-payout from the Treasury](https://github.com/paritytech/substrate/issues/6551).

The payout script should be a standalone executable. Future efforts can develop payout scripts for other chains, which would make them immediately compatible with the other components in this document.

### Dashboard

Similar to [Telemetry](https://telemetry.polkadot.io/), the Dashboard should output stats for all nodes of a given LB as well as that LB itself (fee, name, contact info). Alongside those standard stats, the dashboard should also show historical information on the LB's performance as well as the performance of individual nodes in that LB. This information comes from the [Database](#Database).

---

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  160 hours
* **Total Costs:** ~20000 USD

## Milestones

### Milestone 1: LB Daemon and Database

See [LB Daemon](lb-daemon) and [Database](database) for definitions.

Summary: The LB Daemon, a standalone daemon to run alongside a Kusama or Polkadot node, should be able to feed node information into a remote database.

* **Estimated Duration:** 2 weeks
* **FTE:**  40 hours
* **Costs:** 5000 USD

### Milestone 2: Load Balancer

See [Load Balancer](Lead-Balancer-LB) for definition.

Summary: The LB should be able to read the database from milestone 1 and route RPC requests to qualified nodes.

* **Estimated Duration:** 4 weeks
* **FTE:**  80 hours
* **Costs:** 10000 USD

### Milestone 3: Payout Script

See [Payout Script](#Payout-script) and [Payment Calculation](#Payment-calculation) for details.

Summary: The Payout script should be callable externally and be able to distribute payments from a single stash of tokens to multiple addresses in a single call, using a provided data file of ratios provided by the caller.

* **Estimated Duration:** 1 week
* **FTE:**  20 hours
* **Costs:** 5000 USD

### Milestone 4: Dashboard

See [Dashboard](#dashboard) for details.

Summary: A dashboard for public insight into a given pool should be developed. The pool operator should be able to easily deploy this dashboard on his own infrastructure, with or without wrapper services like Docker.

* **Estimated Duration:** 1 week
* **FTE:**  20 hours
* **Costs:** 5000 USD
