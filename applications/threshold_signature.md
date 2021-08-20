# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

* **Project Name:** ComingChat
* **Team Name:** PolkaX
* **Payment Address:** 0x006E97e28CAa58D3357d070C9535D6CD06bD875e(DAI)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:
ComingChat is a privacy social software that supports the signal protocol at the bottom.
 Substrate supports sr25519 and Schnower's multi-signature, but does not support threshold signatures. 
The purpose of this project is to provide a threshold signature wallet for the substrate blockchain that supports the sr25519 protocol.
Implementation categories include: 
  -  End-to-end private encrypted group chat based on ComingChat, which serves as the basis of private communication for each distributed node with threshold signatures.
  -  Implement the MAST protocol of BTC taproot in the form of a module on Substrate, which is used to combine the multisig logic of sr25519 to implement threshold signatures based on aggregate signatures.
