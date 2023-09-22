# Polkadot.{js} Desktop Application

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Proposer:** [EthWorks](https://github.com/EthWorks/)
* **Payment Address:** 37hdwwNqXHMrni1WGHruwWVzUy5kmsEfJs

## Project Description :page_facing_up:

[Polkadot.{js}](https://polkadot.js.org/apps/) web application is now widely used to interact with Polkadot-based networks (Kusama, Alexander etc.). Soon it will also be a go-to app for the Polkadot Mainnet.

There are two problems which we’d like to address with this development effort:

1. So far, this application is feature-rich, but hard to use, especially for beginners.
2. The default way of holding the account secrets is browser’s local storage. It’s not a safe way to hold user’s private keys

We’d like to package the app as a desktop application. This implies a change to the way accounts information is stored. Instead of browser’s local storage we’d use the filesystem for that, which is a much safer option.
To make it easier to use the application, especially for new users, we will work on improving the look and feel and UX experience, starting with the [Accounts](https://polkadot.js.org/apps/#/accounts) section.

Our team worked previously on Polkadot.{js} Browser Extension. We already have a decent understanding of the Polkadot frontends and theirs UX shortcomings.

## Team :busts_in_silhouette:

* **Members:** Krzysztof, Natalia, Bartek, Ivan, optionally other developers at Ethworks
* **LinkedIn Profiles:** [Krzysztof](https://www.linkedin.com/in/krzysztofjelski/), [Natalia](https://www.linkedin.com/in/nkirejczyk/), [Bartek](https://www.linkedin.com/in/bart%C5%82omiej-rutkowski-958751118/), [Ivan](https://www.linkedin.com/in/ivan-rukhavets-904ba7146/)
* **Code Repos:** <https://github.com/polkadot-js/apps> (the repo we want to contribute to)
* **Website:** <https://ethworks.io>
* **Legal Structure:**<br/>
    Ethworks sp z o.o.<br/>
    VAT ID: PL7010771665.<br/>
    Ignacego Krasickiego 35<br/>
    02-611 Warsaw, Poland<br/>
    Office:<br/>
    Czeczota 29<br/>
    02-606 Warsaw, Poland
* **Team's Experience:**

We have been actively involved in the Ethereum ecosystem for many years, many of us even before Ethworks was founded. During this time we had the opportunity to build many widely used tools such as Ethereum.rb (the ethereum library for the Ruby language) or Waffle (a library for writing and testing smart contracts).

For our clients we have developed numerous customer-facing dApps. We not only know how to create robust and reliable software, but also clean, modern and user-friendly UI. Our design team had pleasure to work with such great brands as Ethereum Foundation, Bitcoin or IOTA.

Additionally members of Ethworks are building Universal Login, a tool for storing funds and connecting to Ethereum applications, aiming to simplify on-boarding of new users.

In a previous [grant from W3F](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/polkadot_js_chrome_extension.md), we did an UX-overhaul of Polkadot.{js} extension and extended it with useful features.

## Development Roadmap :nut_and_bolt:

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 1.25
* **Total Costs:** 3,37 BTC

### Milestone 1

#### Package as Electron App

* **Estimated Duration:** 1 month
* **FTE:** 1.25
* **Costs:** 1,12 BTC

First step will be to convert the [Polkadot.{js} web application](https://polkadot.js.org/apps/) into a desktop application. We’ll use [Electron](https://www.electronjs.org/) for that.

To make the application functional, we need to change the storage of accounts. So, instead of using browser’s local storage, we’ll store the accounts encrypted on the filesystem.

Part of the work will be the setup of CI/CD pipeline, including application signing and preparing packages for multiple platforms.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | [Polkadot.{js} web application](https://polkadot.js.org/apps/) as an Electron app | Functionality of the current web app delivered as a desktop app |
| 2. | Redesigned account storage | Feature of using the filesystem to store encrypted accounts |
| 3. | Continuous Integration environment | Pipeline that build the desktop applications and runs automated tests on it |
| 4. | Continuous Delivery to automate packaging for Mac, Windows and Linux | Pipeline that creates release packages of the application for 3 operating system) |
| 5. | Documentation | Updates to the relevant documentation where needed |

### Milestone 2

#### Account creation redesign and visual improvements

* **Estimated Duration:** 1 month
* **FTE:** 1.25
* **Costs:** 1,12 BTC

We’d like to improve [Accounts](https://polkadot.js.org/apps/#/accounts), the part of the application new users will mostly interact with. Thus we want to start with a redesign of this section in Milestone 2.

New designs will be more inviting to the users. We'll improve usability of account creation features by redesigning the flows and interactions.

As part of the design we’ll create new visual components (sidebar, buttons, notifications, etc.).

Here's how we envision the Accounts list:
![Preliminary design - Accounst list](https://i.imgur.com/KhKdMwl.png)
The following two designs are a result of our re-thinking of the user onboarding process. In this milestone we won't be working on the user onboarding yet. However, we might use parts of the following designs in the account creation modals.
![Preliminary design - First account creation](https://i.imgur.com/sO51bph.png)
![Preliminary design - Adding a new account](https://i.imgur.com/C9ys8Pn.png)

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Accounts design | Design of [Accounts](https://polkadot.js.org/apps/#/accounts) application, including sidebar and visual components (in Figma). |
| 2. | Updated UX flow for Account creation | Implement redesigned account creation flow. Password validation improvements. |
| 3. | Initial Style Guide | Document containing color palette and UI components for the application. |
| 4. | Implement new style | Implement parts of the new designs, including consistent font usage, new navigation, minor improvements of layout and dark mode. |

### Milestone 3

#### Improve User Experience in Accounts app

* **Estimated Duration:** 1 month
* **FTE:** 1.25
* **Costs:** 1,13 BTC

In this Milestone we'll tackle usability issues with [Accounts](https://polkadot.js.org/apps/#/accounts).

Currently, users face following difficulties:

* cannot see at a glance the totals of their balances across all accounts
* account names cannot be edited
* accounts list default sort is not intuitive and cannot be changed by the user
* unlock is not next to the locked balance, but in the drop down menu
* some information provided in the accounts list gives little value to users (eg. type, tags, transactions count) and could be hidden in some detail view
* expanding balances messes up the table layout
* account modals don't react to keyboard, e.g. Enter to confirm or Escape to quit

For sure coming up with an effective design will require some iterating over wireframes/prototypes, and possibly also with implementations.

Code-wise, we'll remove dependencies on SUI library components where possible. Also, we're going to add more unit and UI automated tests and remove code duplication where possible.

For a more detailed preliminary backlog, consult [this list](https://workflowy.com/s/accounts-backlog/9ppyPN0DpdNL3vG5).

| Number | Deliverable | Specification |
| -------| ----------- | ------------- |
| 1.     | Accounts list redesign | Figma design that solve all usability issues mentioned above |
| 2.     | Accounts list implementation | Implementing the designs in Polkadot-JS apps |
| 3.     | Accounts sidebar implementation | Re-Implementing the sidebar that pops up after clicking on an account |
| 4.     | Accounts App modals improvements | Improve usability and consistency in Account modal, eg. Derive, Add Proxy. Remove code duplication between Create and Derive |
| 5.     | Documentation updates | We'll add or update the relevant documentation where needed, including screenshots in polkadot wiki |

## Additional Information :heavy_plus_sign:

### Work done so far

* [Preliminary designs](https://www.figma.com/proto/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=763%3A81&viewport=-213%2C-44%2C0.2232329249382019&scaling=min-zoom)

### Have you applied for other grants so far?

We have successfully applied for a grant on [Polkadot.{js} Extension](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/polkadot_js_chrome_extension.md). We are now awaiting acceptance of the last milestone of this grant.

### Similar projects

We're aware of the [SubstrateIDE](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/SubstrateIDE.md) project, which also uses [Electron](https://www.electronjs.org/) to package the [Polkadot.{js}](https://polkadot.js.org/apps/) app. However, in case of this project the focus is on providing a developer environment, of which the Polkadot Apps is just a part. In our grant application we focus more on providing an end-user solution.
