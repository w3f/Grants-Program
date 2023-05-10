# Slothunter

- **Team Name:** hack-ink
- **Payment Address:** 0xccd79b2b77e71292924e85de130bfb1c03d94522 (Ethereum) USDC
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Slothunter is a Rust CLI program.

It's goal is to help teams/users to participate in the Polkadot auction more easily and efficiently.

### Ecosystem Fit

I noticed nobody realized there was a slot action, and no one participated in it until Kusama's 58th auction ended.

This could help small teams to catch the chance.

And this also could help teams/users to bid/contribute automatically.

### Details(spec)

Slothunter will be implemented in Rust, which means it will be efficient and stable while running as a system service.

This grant contains 7 parts.

1. Monitor the auction state.
   1. This program will run as a system service.
   2. It will fetch and cache the chain state periodically.
2. Calculate the current winner.
   1. Base on previous data, calculate the current auction winner.
3. Email and webhook notifications.
   1. It could notify the users:
      1. New auction started.
      2. Insufficient fund for bidding/contributing.
      3. Stop bidding/contributing and reason.
      4. New winner.
      5. Auction ended.
   2. The email and webhook addresses are configurable.
   3. The notification will be logged in the terminal by default.
   4. The email/webhook notification can be enabled or disabled by user. e.g. Some users think the email is annoying.
   5. All the notification content will be present in json style.
   6. Webhook notification can be integrated to Slack, Telegram, etc. e.g. the telegram bot will provide a listen address and Slothunter will push the notification to the bot periodically.
4. Auto bidding/contributing.
   1. Auto bid/contribute if there is new winner. And the bot will stop if the new winner's price is greater than the max acceptable value in the configuration file.
   2. Able to use regular account to bid/contribute.
   3. Able to use proxy account to bid/contribute.
5. Customize bidding/contributing strategy, including:
   1. Set max acceptable value.
   2. Set bidding/contributing frequency every `x` blocks.
6. Provide a config.toml to configure:
   1. Relaychain.
   2. Bidding/contributing account.
   3. Bidding/contributing amount, target and max acceptable price.
   4. Keep bidding/contributing every `x` blocks.
   5. Notification mailbox.
   6. Webhook URI.
7. A Telegram bot, this should be easily deployed on any ubuntu:20.04+ server.

Teams/users could start the bot before the auction. And all the things should go as expected.
Teams/users could deploy the telegram bot and get latest auction status in group.

## Team :busts_in_silhouette:

### Team members

- Xavier Lau

### Contact

- **Contact Name:** Xavier Lau
- **Contact Email:** xavier@inv.cafe
- **Website:** https://linktr.ee/aurevoirxavier

### Legal Structure

Personal. (no legal structure entry)

### Team's experience

[Xavier Lau](https://github.com/AurevoirXavier)

- Six years of experience in Rust.
- Three years of experience in Substrate.
- Darwinia Network core developer, since 2019.
- Actively at [Substrate StackExchange](https://substrate.stackexchange.com/users/251/aurevoirxavier).
- Grants contributor, [Subalfred](https://github.com/hack-ink/subalfred).

### Team Code Repos

- https://github.com/hack-ink
- https://github.com/hack-ink/array-bytes
- https://github.com/hack-ink/githuber
- https://github.com/hack-ink/subalfred
- https://github.com/hack-ink/unescaper

Please also provide the GitHub accounts of all team members.
If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/AurevoirXavier

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/xavier-lau-b0655310a

### Overview

- **Total Estimated Duration:** 5 weeks
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 11,000 USD

### Milestone 1 Slothunter CLI tool

- **Estimated duration:** 4 weeks
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable                                  | Specification                                                                                                                                                                   |
| -----: | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                                      | GPLv3                                                                                                                                                                           |
|    0b. | Documentation                                | There will be a guide to tell people how to use this.                                                                                                                           |
|    0c. | Testing guide                                | There will be a docker file and a guide to tell the auditor how to run the tests. It will guide you how to setup an auction and do the tests.                                   |
|     1. | Auction winner calculator                    | Based on the 0c., run the binary, you should see the current winner from the terminal log.                                                                                      |
|     2. | Notification component                       | Based on the 0c., run the binary, you should receive these notification correctly.                                                                                              |
|     3. | Auto bidding/contributing component          | Based on the 0c., run the binary, you should see you are bidding/contributing your parathread from the Polkadot Apps.                                                           |
|     4. | Bidding/contributing configuration component | Based on the 3., you can customize your bidding/contributing strategy in a toml file, you should see your bidding/contributing behavior works the same as the strategy defined. |
|     5. | Releases                                     | Linux, macOS, Windows prebuilt binaries, and crates.io release.                                                                                                                 |

### Milestone 2 Slothunter notification Slack/Telegram bot setup guide

- **Estimated duration:** 1 weeks
- **FTE:**  1
- **Costs:** 1,000 USD

| Number | Deliverable         | Specification                                                                                                              |
| -----: | ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License             | GPLv3                                                                                                                      |
|    0b. | Documentation       | There will be a guide to tell people how to use this.                                                                      |
|    0c. | Testing guide       | There will be a guide to tell the auditor how to run the tests.                                                            |
|     1. | Workshop repository | Follow the tutorial in this repository to setup the bot, and you should see the notification appear in Slack and Telegram. |

## Future Plans

- Keep connected with the community/parity and make it better.

## Additional Information :heavy_plus_sign:

We could talk about the bidding/contributing strategy. It's really flexible. If anyone got more ideas. I can integrate them into the program.

I have talked to some teams few months ago. Because they ask me what script did I use during the bidding. Can I share it?
Actually, I set some proxies accounts and share them with my team members. Then we watch the auction manually. If there is a new winner we could bid immediately.

As I said before, there is even an empty auction in Kusama. This is not friendly and not good for the ecosystem. So, I decided to develop this. And I think it is valuable.

**How did you hear about the Grants Program?** GitHub.
