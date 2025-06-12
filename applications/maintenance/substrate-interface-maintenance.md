# `substrate-interface` maintenance

- **Team Name:** Stanislav Terliakov
- **Payment Address:** 13fczWPtdAtkePBYgW5SuwVBvDvEfXYPAPsfbue5ez2CrGEF (DOT, USDC).
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

`py-polkadot-sdk` (available on PyPI as `substrate-interface`) is a Python SDK for interfacing with Substrate nodes.

It's been around since 2019. This package powers hundreds, if not thousands, of real-world projects. 

Here's a brief usage summary:

- 235k PyPI downloads last month ([PyPIStats](https://pypistats.org/packages/substrate-interface)), without any signs
  of decreasing usage.
- 258 GitHub stars.

It is the primary Python SDK for interacting with Substrate, which means it is one of the cornerstones
of server-side development that needs access to Substrate information and modifications.

Unfortunately, currently it is essentially unmaintained:

- Only two commits have been made in 2025, both only affecting documentation.
- Package unit tests are failing in CI.
- There are many lint errors despite using *very* low-level linter configuration that fails to catch many common
  kinds of bugs. These lint errors are just intentionally ignored/hidden in CI.
- Open issues keep accumulating, including severe runtime crashes (see below).
- Officially declared Python support is for versions from 3.7 to 3.11. Latest Python version is 3.13,
  released in Oct. 2024, and 3.7 is EOL (end of life) for years.
- Package has very low type annotations (aka type hints) coverage. Static typing became de-facto standard in Python
  world several years ago, so lack of sufficient static information has significant negative impact on developer
  experience and IDE feedback.
- Lack of metadata V15 support indicates significant gap between this library and latest Substrate development.

Current state of `substrate-interface` development does not match the reliability and quality of the rest of the
ecosystem.

### Maintenance list

- https://github.com/JAMdotTech/py-polkadot-sdk

## Team :busts_in_silhouette:

### Team members

- Stanislav Terliakov

### Contact

- **Contact Name:** Stanislav Terliakov
- **Contact Email:** terlya.stas@gmail.com
- **Website:** https://sterliakov.github.io/

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

I'm a backend developer with over five years of Python experience, currently leading a development team at Simpleem.
I have extensive blockchain experience, including multiple award-winning hackathon submissions
([DevPost profile](https://devpost.com/sterliakov)), and Python is my primary development language.

My open-source contributions include over 50 merged [pull requests](https://github.com/python/mypy/pulls/sterliakov)
to mypy, a static type checker maintained by the Python core team, and contributions to other projects.
I also previously developed and continue to maintain a [Rust SDK](https://github.com/sterliakov/thor-devkit.rs)
for VeChain, which powers several real-world projects and was funded by a VeChain grant.

### Team Code Repos

- https://github.com/sterliakov/mypy-issues
- https://github.com/sterliakov/thor-devkit.rs
- https://github.com/sterliakov/toggl-tracker

GitHub account: https://github.com/sterliakov

### Team LinkedIn Profiles (if available)

N/A

## Development Status :open_book:

I have not started maintenance tasks in that repository. I have contacted the developer team asking for their
preference (https://github.com/JAMdotTech/py-polkadot-sdk/issues/419).

See the next section for more specific action points in scope of this grant.

## Maintenance Responsibilities :nut_and_bolt:

High-priority tickets I will resolve:

- Runtime crash with no workaround: https://github.com/JAMdotTech/py-polkadot-sdk/issues/405
- Runtime crash: https://github.com/JAMdotTech/py-polkadot-sdk/issues/412
- Runtime crash: https://github.com/JAMdotTech/py-polkadot-sdk/issues/336
- Missing important functionality: https://github.com/JAMdotTech/py-polkadot-sdk/issues/348
- Other tickets depending on their prioritization

Implementation defects I intend to address:

- Failing unit tests
- Insufficient static type annotations coverage
- Existing lint violations
- Weak linter configuration
- Lack of automated code formatting
- Extremely outdated GitHub actions, not conformant to modern CI/CD security standards
- No centralized dependency management (vulnerability scans, dependabot, etc.)

Additionally, I will triage the existing tickets (or guarantee quick replies to issues opened again my fork
and PR reviews). 

### Overview

- **Start Date:** As soon as this proposal is approved
- **Sprint/Period Duration:** 2 weeks
- **Total Duration:** 3 months
- **Full-Time Equivalent (FTE):** 0.5 FTE
- **Max budget per sprint/period:** 6000 USD (estimated at 20 h/week with 25% extra allowance), 
  capped at 30000 USD for the whole period.
- **DOT %:** 50
- **Hourly rate:** 120 USD

## Future Plans

- Expand the documentation and specifically usage examples
- List this project on my public pages
- Continue contributing to `substrate-interface` or maintaining my fork in future

## Additional Information :heavy_plus_sign:

**How did you hear about the Maintenance Grants Program?** Web3 Foundation Website
