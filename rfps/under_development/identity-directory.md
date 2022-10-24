# RFP: Substrate Identity Directory

* **Status:** [Under Development 1](https://github.com/w3f/Grants-Program/blob/master/applications/SubIdentity.md), [Under Development 2](https://github.com/w3f/Grants-Program/blob/master/applications/substrate-identity-directory.md)
* **Proposer:** swader
* **Projects you think this work could be useful for**: Kusama, Polkadot, Substrate chains

## Project Description :page_facing_up: 

In Substrate-based chains which implement the [Identity pallet](https://github.com/paritytech/substrate/tree/master/frame/identity), users can register on-chain information about themselves. It is currently difficult to search by any of the identity fields. There is also no way to link directly to an on-chain account and see human-readable reports of its interactions with the chain, let alone quickly send tokens to it or otherwise interact directly with that account.

The Identity Directory is a **fully client-side web application** which makes this possible.

It accepts input such as https://kusama.polkaperson.com/swader or https://kusama.polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT or https://polkaperson.com/ThJ.

The service:

- reads the input param
- if the input param is an address or an index (second and third option respectively), the [single page view](#single-page-view) opens
- if the input param is not an address (first option), a [list page view](#list-page-view) opens

### List Page View

The service looks through all the registered identities on Kusama or Polkadot, and lists all the identities that have the provided value set as ANY of the fields in their identity entry. Clicking any of them takes a person to the [Single Page View](#single-page-view) and changes the URL to https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT with the appropriate address, since addresses are unique.

Alternatively, if the address has a [**frozen index**](https://wiki.polkadot.network/docs/en/learn-accounts#indices) attached, the index should replace the address in the URL for usability, i.e. https://polkaperson.com/ThJ.

### Single Page View

The single page view contains a beautifully rendered identity card of an on-chain identity along with all the metadata in the identity entry, an avatar if provided, any verifications from registrars in the chain, and buttons somewhere in the UI that allow you to Send tokens directly to the user. 

![](https://i.imgur.com/PpQy855.jpg)

*Above screenshot is from [Pulse HTML template](https://themeforest.net/item/pulse-personal-academic-vcard-template/10654629).*

The UI should be tweetdeck-like in that it offers multiple columns, each with a specific purpose, and the columns should be close-able and re-orderable, so users can just order them as they choose. The order should be remembered across the app, and there should be a toggle to **freeze** a layout for a specific user (i.e. maybe you only want Validator Performance for a certain validator but maybe you're interested in *everything* a high-profile account does on chain so you want all the columns).

### Plugins

The application should support a plug-in ecosystem for different sub-views of identities. The hosted, on-line version would come with some default plugins activated (see [Default Plugins](#default-plugins)) while the off-line version should support simple installation of other plugins. Most plug-ins will be rendered as **additional columns of data**, except in some cases (i.e. replace the "recent news" ticket at the top of the screen with a "recent on-chain tips issued", or a plug-in which adds push notifications).

Note: **if a user is not connecting to an archive node, archive data should be unavailable**. The plugins (default, optional, and third party plug-ins) are responsible for realizing this and reporting to the user that some info won't be available if the user connects to only a full node.

### Layouts and Linking

The individual events and positions in the various columns should be **linkable**, and URLs will dictate which columns are visible and in which order. So a URL like https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT#governance@448217&rmrk@330589, would render a screen on which the governance default plugin would scroll to block 448217, and the RMRK column would scroll to block 330589, and RMRK would come AFTER the governance column in the view. Setting it as `#rmrk@330589&governance@448217` would make rmrk appear BEFORE governance. Including a column/plugin without a block number serves to simply activate it in the UI, e.g. https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT#governance@448217&rmrk@330589 would contain the default basic identity column + governance + rmrk, and https://polkaperson.com/HviHUSkM5SknXzYuPCSfst3CXK4Yg6SWeroP6TdTZBZJbVT#governance@448217&rmrk@330589&identityhistoyt&society&remarks would also activate optional columns which show an account's identity registration history, their [Society](https://guide.kusama.network/docs/en/maintain-guides-society-kusama) participation, and all the `system.remark` calls they issued.

#### Default Plugins

- `basic info`: a column with basic information about an account, similar to the sidebar on Polkadot JS Apps UI. Should discern between registrars - it should list each registrar who verified this identity and the verification level they gave (i.e. KnownGood vs KnownBad etc.)
- `governance`: a column listing all of an account's governance activity like votes, proposals, marking the times when the account was a council member, etc. It should resemble a vertical timeline, with related events referencing each other, quoted-tweet style. Events should be linkable as decribed above, i.e. `governance@477723`. The column should **clearly** mark when a user was a council member but failed to uphold their duties, i.e. there was a motion but the user did not vote, and other interesting info (i.e. the user did not do ANYTHING the council can do while being a council member).
- `treasury`: a history of an account's interactions with the treasury - tip proposals and endorsements, treasury proposals and grant wins, votes on TP motions if user was council at the time (and clear marks if the user FAILED to vote on a TP motion during his activity as councilor).
- `validator`: showing the history/summary of the account's participation in securing the network
#### Optional Plugins

The off-line version (self-run version) should support simple installation of plug-ins like so:

```bash=
yarn add @web3id/rmrk
```

This would add the community-developed RMRK plugin column with details about an account's NFT activity on Kusama.

Optional plugins to support at launch:

- `txhistory` for listing all of an account financial transactions (moving of tokens)
- `identityhistory` for listing all of an account's interactions with identities - when they submitted their info, when and who verified them, etc.
- `remarkshistory` for listing all of an account's past issued remarks
- `society` for displaying an account's participation in Society, including how much they bid, when they were accepted, when their full payout is due, how many times they defended, how many times they voted, and other Society-related ops.

## Deliverables

### Milestone 1

A basic application is developed which supports querying by address, index, or identity fields, and displays a basic mobile-friendly list view or single page view with the "basic info" column fully functional. The user should be able to set their own node endpoint.

### Milestone 2

Default plugins are developed: governance and treasury. Events in the columns are linkable, and layouts of the columns can be saved. The app is updated with these defaults and hosted on IPFS. Performance is crucial at this stage - caching queries and results and being creative with approaches is tantamount to UX. One example approach: allow users to enter their pinata key, and store set of fetched information to IPFS and pin on pinata (free tier of 1GB pins). On future queries of archive info, fetch from IPFS instead if faster. Along with pinata, users could also define their own IPFS node endpoint and serve their own IPFS data if they have one.

### Milestone 3

Optional plugins are developed, implemented into the app, and tested for per-identity layout saving and rendering on both mobile and desktop. The app should, at this point, support easy installation of plug-ins and have a `yarn build` step that builds the site for offline or IPFS use.

### Milestone 4

Maintenance phase - the team is expected to deliver comprehensive documentation on developing plugins and hosting your own Identity Directory with and without IPFS and other supporting options. The team should help plug-in implementers finalize their work and review their plug-ins.

Please note that the proposal should include a proposal for medium to long term maintenance of this project, especially as architecture changes and parachains launch.

## Other considerations

The application:

- MUST be IPFS-hostable, so fully client-side
- MUST be docker-less and SHOULD be react-less, for ease of use and installation on regular machines, and to conserve resources. The goal is to be able to download the app directly, even zipped, and run it on one's machine without much difficulty and technical know-how. (Of course, if one wishes to add plugins, one has to use NodeJS and install them with `yarn`, then `build` the app to get something runnable)
- SHOULD be mobile-friendly, at least mobile-runnable. The Pulse theme linked above does come with mobile friendliness built-in, perhaps this is something to be inspired by.

## Additional Plug-in Ideas

These can later become RFPs of their own.

- `rmrk`: lists a user's interactions with the NFT ecosystem on Kusama. [More info](https://rmrk.app).
- `standing`: a card which visualizes someone's standing in the community. Can hook into Polkassembly to see how many discussions they participated in, look into votes and other on-chain activity, and build a subjective profile on how productive a member of the chain's society this person is.
- `earnings`: visualizes and documents a user's earnings over time, both through staking and nominating, along with a historic overview of when the user was bonded, unbonded, etc.
