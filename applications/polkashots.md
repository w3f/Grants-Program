# polkashots.io

* **Proposer:** Nicolas Ochem
* **Payment Address:** bc1qu45ws52gkjgmwgu8gmqh2ejkcf4clt93jnnvsm

## Project Overview :page_facing_up: 

### Overview

Implement, release and maintain a snapshot website for Polkadot and Kusama.

### Project Details

Substrate has an `--export-chain` and `--import-chain` feature to allow node operators to sync faster.

This is a key feature to be able to recover quickly in case of node failure. This results in decreased downtime, which is beneficial for the ecosystem.

This work will consist of an open source project, and a production website.

#### polkadot-snapshot-generator
The open-source project, `polkadot-snapshot-generator`, will consist of:

* infrastructure code for running a Polkadot node (or Kusama, or any substrate node) on Kubernetes on a cloud platform, deployed with Terraform
* code to take filesystem-level snapshot of a live chain, then run `export-chain` command
* mechanism to upload the snapshot to a storage bucket and publish a website with the most recent snapshot
* a master cronjob, the `snapshot engine`, that triggers snapshot creation on a schedule

There will be 2 kind of generated snapshots: RocksDB and Parity DB, until RocksDB becomes deprecated.

#### polkashots.io

We will also deploy and maintain https://polkashots.io, a website hosted on Cloud Infrastructure which will make snapshots available for free for community members.

The snapshot generation frequency will be configurable. 24 hours frequency seems reasonable. Nodes typically sync very fast from a 24 hour lag.

Snapshots will be stored on a public Google cloud storage bucket. We will be providing Polkadot and Kusama snapshots.

The snapshots will be clearly identified by block height and block hash. Hyperlinks will be provided to the main indexing websites (Polkascan, Polkastats) so the user can verify that the snapshot they are downloading is indeed the legitimate Polkadot chain.

Additionally, the snapshots will be hashed and a signature will be published on the polkashots.io website.

There will be static links (such as https://polkashots.io/dot/rocksdb) that always point to a recent snapshot, which should simplify setup of an automated recovery mechanism.

We will modify our own existing projects, [polkadot-k8s](https://github.com/midl-dev/polkadot-k8s) and [polkadot-k8s-aux](https://github.com/midl-dev/polkadot-k8s-aux). We will configure the default behaviour when spinning up a new chain to download snapshots automatically from the polkashots website.

### Ecosystem Fit
To my knowledge, there is no other active snapshot website for Polkadot/Kusama.

[This page](https://dotleap.com/how-to-import-a-pre-synced-kusama-database/) appears to be no longer updated.

People on Riot Validator Lounges regularly ask for fresh snapshots.

## Team :busts_in_silhouette:

### Team members
* Nicolas Ochem

### Team Website
* https://MIDL.dev

### Legal Structure 
MIDLDEV OU (incorporated in Estonia).

### Team's experience
We are a blockchain SaaS infrastructure company and this project is in line with the range of services that we offer. We can deliver a solid codebase and a website that will be dependable, fast and relevant.

### Team Code Repos
* https://github.com/midl-dev
* https://github.com/nicolasochem

### Team LinkedIn Profiles
* https://www.linkedin.com/in/nicolasochem/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** One month
* **Full-time equivalent (FTE):**  0.5
* **Total Costs:** 1 BTC

Note: the cost will cover the initial development as well as the costs related to hosting the website and snapshots for some time.

### Milestone 1
* **Estimated Duration:** 1 month
* **FTE:**  0.5
* **Costs:** 1 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | The code will be easy to deploy, taking only a few utilities and one single command. The entire cycle - from spinup to teardown - will be clearly explained in the README
| 0c. | Tutorial | We will be posting a follow-up on [our post about deploying a Polkadot validator on Kubernetes](https://medium.com/better-programming/a-polkadot-validator-on-kubernetes-3e694cb43841) to explain how to use snapshots to deploy a validator. |
| 1. | Terraform | A Terraform manifest to deploy all cloud resources in a simple way.|
| 2. | Docker | A set of Docker container descriptions (Dockerfiles and scripts) that are used to manage the snapshot website |
| 3. | Kubernetes | A Kubernetes manifest, built with Kustomize, to deploy the containers and cronjobs for snapshot creation |
| 4. | Testing | While infrastructure code is not a natural candidate for testing due to its heavy reliance on external components, we will be providing a script to parse terraform, dockerfile and kubernetes codebase and check for consistency |
| 5. | Live website | Deploy polkashots.io with recently updated snapshots |

The open-source project will have three directories, `terraform`, `k8s` and `docker`. Their contents are described below.

##### Terraform

The terraform module takes parameters such as `chain_name`, `billing_account`... as input, and uses the [Terraform GCP provider](https://www.terraform.io/docs/providers/google/index.html). It creates a Google Cloud Project and a Kubernetes cluster.

Inside the cluster, it deploys a configurable number of Kubernetes namespaces as described below.

It also configures [Google Cloud Build](https://cloud.google.com/cloud-build) to automatically build the containers needed to run the snapshotting jobs, and push them to the cluster.

The entire setup can be destroyed with `terraform destroy`.

##### Kubernetes

A Kubernetes Deployment runs a Polkadot or Kusama node in a Pod with a Persistent Volume for storage.

This node can optionally be brought up from a snapshot itself (in case the snapshot engine itself needs to be recreated).

It is not possible to do `export-chain` on a running node, therefore it is necessary to leverage some cloud filesystem snapshotting capabilities.

A Kubernetes Cron Job triggers a pod with special privileges that in turns triggers the following Kubernetes actions:

* take a [Persistent Volume Snapshot](https://kubernetes.io/docs/concepts/storage/volume-snapshots/) of the Polkadot node storage
* create a persistent volume from the snapshot
* triggers a Kubernetes job called "snapshotter" which:
  * mounts the persistent volume created from snapshot
  * runs the `export-chain` command against it
  * compresses, hashes the snapshot, then uploads it to a bucket
  * builds a Jekyll static website from source and pushes it to Firebase, with relevant metadata of the generated snapshot
* tears down all objects created above

#### Docker

A series of custom-build containers built for performing the actions described in the previous section, namely:

* snapshot-importer: imports a snapshot when initially kicking off the setup
* snapshot-engine: the job that sends kubernetes control plane commands to generate a filesystem-level snapshot
* snapshotter: the job that performs `export-chain` and pushes it to a bucket
* website-builder: the job that builds the Jekyll static site

The Dockerfiles and associated scripts to build the containers listed above will be shipped as part of the project.

### Community engagement

We will be announcing the website and the project on Medium.

## Future Plans
We may be extending offers to various Substrate chains to have their snapshots hosted on our platform.

## Additional Information :heavy_plus_sign: 
Earlier we received a grant from the Tezos foundation, part of the purpose was to develop a [similar snapshotting project](https://github.com/midl-dev/tezos-snapshot-generator) for the Tezos blockchain.
