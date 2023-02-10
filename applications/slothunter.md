# Subalfred

- **Team Name:** hack-ink
- **Payment Address:** 0xccd79b2b77e71292924e85de130bfb1c03d94522 (Ethereum)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Slothunter is a CLI program.

**It could:**
1. Monitor the auction state.
   1. This program will run as a system service.
   2. It will fetch and cache the chain state periodically.
2. Calculate the current winner.
   1. Base on previous data, calculate the current auction winner.
3. Webhook, email notifications.
   1. Provide webhook and email notifications.
   2. This can be integrate to telegram, slack, etc.
   3. It could notify the users:
      1. New auction.
      2. Insufficient fund for bidding/contributing.
      3. New winner.
      4. Auction end.
4. Auto bidding/contributing.
   1. Use regular account to bid/contribute.
   2. Use proxy account to bid/contribute.
5. Customize bidding/contributing strategy.
6. Provide a config.toml to configure:
   1. Relaychain.
   2. Accounts.
   3. Bidding/contributing target and amount.
   4. Keep bidding/contributing every `x` blocks.
   5. Notification mailbox.
   6. Webhook URI.

### Ecosystem Fit

I noticed nobody realized there was a slot action, and no one participated in it until Kusama's 58th auction ended.

This could help small teams to catch the chance.

And this also could help teams/users to bid/contribute automatically.

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
- **Total Costs:** 18,000 USD

### Milestone 1

- **Estimated duration:** 4 weeks
- **FTE:**  1
- **Costs:** 18,000 USD

| Number | Deliverable                                  | Specification                                                                     |
| -----: | -------------------------------------------- | --------------------------------------------------------------------------------- |
|    0a. | License                                      | GPLv3                                                                             |
|    0b. | Documentation                                | There will be a guide to tell people how to use this.                             |
|    0c. | Testing guide                                | There will be a docker file and a guide to tell the auditor how to run the tests. |
|     1. | Monitoring component                         | As I described in the overview.                                                   |
|     2. | Auction winner calculator                    | As I described in the overview.                                                   |
|     3. | Notification component                       | As I described in the overview.                                                   |
|     4. | Auto bidding/contributing component          | As I described in the overview.                                                   |
|     5. | Bidding/contributing configuration component | As I described in the overview.                                                   |
|     6. | Releases                                     | Linux, macOS, Windows prebuilt binaries, and crates.io release.                   |

## Future Plans

- Keep connected with the community/parity and make it better.

## Additional Information :heavy_plus_sign:

We could talk about the bidding/contributing strategy. It's really flexible. If anyone got more ideas. I can integrate them into the program.

**How did you hear about the Grants Program?** GitHub.
