# Tip or Donate KSM Embeddable Button

* **Status:** [Implemented](https://github.com/Shard-Labs/kusama-tips-widget)
* **Proposer:** swader

## Project Description :page_facing_up: 

This is a request for proposals to build an embeddable self-contained "Propose tip or Donate KSM" button for websites.

The applying team is more than welcome to apply through [open grants](https://github.com/w3f/Open-Grants-Program), or [the Kusama Treasury itself](https://wiki.polkadot.network/docs/en/learn-treasury#creating-a-treasury-proposal).

## The Tipping System

Most Substrate-based chains like Polkadot and Kusama have an on-chain treasury. This treasury is filled from transaction fees, slashes, inflation, and donations. The treasury supports three different disbursement mechanisms: proposals, bounties, and tips. This RFP deals with Tips.

Anyone can propose a tip. The proposer becomes the finder, and receives a small fee if the tip is accepted. The Council votes on the tip by members seconding it with an arbitrary amount. The final amount to pay out is the median of all the amounts given by all Council members.

The tip begins its closing process (a countdown) when more than a half of councilors have seconded a tip. During this countdown, the remaining members can still submit their tips, but don't have to. After the countdown has elapsed, the `close_tip` extrinsic has to be called (by anyone) to perform the actual payout.

## Proposal

The Kusama Tip Button sould be a standalone embeddable snippet of HTML and JS code. When added to a website, a "Tip or Donate KSM" button should show, text customizable by website owner.

Before the user interacts with the button, the button's embedded code should:

1. Sanitize the current URL (remove UTM, hashes, alphabetically order query params, etc.)
2. Convert this URL to bytes
3. Check if a tip for the same URL already exists and IS ACTIVE (past tips for the same URL are OK)
    - if yes, grey out button and make it unavailable with the text "Tip already pending - click to see", linking to http://kusama.dotapps.io/#/treasury/tips (text customizable by website owner)
    - if no, button is available.

Once clicked, the button should:

- ask for permission to connect to PolkadotJS extension
    - if none is present, offer to install it (take user to Github page)
    - if allowed, a popup appears asking to "select an account"
    - if denied, cancel all
- offer two options: Propose Tip and Donate Directly (text customizable by website owner)
    - Propose Tip
        - clearly inform visitor that they need to have enough funds for both a fee AND a deposit, and that they will only get the deposit back after the tip has been paid out, which doesn't have to ever happen.
        - if current user is a Council member, ask for amount and then create a new Tip entry with treasury.tip_new
        - if current user is not in Council, create a new Tip entry with treasury.report_awesome. 
        - Optionally allow visitor to attach a message. If provided, use utility.batch to batch the tip creation with system.remark. Final system remark is: "Tip for URL: MESSAGE FROM TIPPER".
        - re-execute "tip exists" check to disable button and link to Tips page in treasury
    - Donate
        - ask visitor for amount
        - wrap Transfer in utility.batch function along with a system.remark. (not optional, always wrap)
        - allow visitor to enter a custom note
        - final system remark is "Donation for URL: MESSAGE FROM TIPPER".

## Challenges

### Performance

Websites must not be notably slowed down by this implementation. This is especially challenging because the button's code needs to do some checking well before a visitor interacts with it. Gating the approach more (i.e. behind an additional "Tipping" button) would degrade UX, especially if the click requires a long load and check time before even allowing progress into the Tip or Donate area.

Ideally, the code would be a minimal extraction of PolkadotJS API, or even slimmer standalone version, which could do the check painlessly. The tipping code itself can then be bigger and be async loaded only once a visitor interacts with the button. We assume the vast majority of users never will, so this is an acceptable tradeoff, but we welcome creative solutions to this problem.

### Tip Spam

It is reasonable to assume that highly popular websites will, in time, have many users wanting to create tips for them. The tip-existence check helps with that, but it does not help with minor URL modifications (i.e. no-effect query params) or tipping every page on a website.

The fee and deposit to create a Tip should take care of this problem.
