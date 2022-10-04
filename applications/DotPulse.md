# W3F Open Grant Proposal

- **Project Name:** DotPulse
- **Team Name:** CrossChain Labs
- **Payment Address:** 0xC289B81a8e5f8F8d691b4Cf1DBc16A7107B630e3 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

Polkadot has increasingly grown the open source developer ecosystem. But there is currently no way to get an activity overview and easily track the development among different Polkadot organisations on Github, understand what is their status, track the contributions made by developers and get an idea on how the repositories evolve. Is really hard to understand how the Polkadot ecosystem is progressing since the data is scattered all over GitHub, with contributors, commits, issues, repositories and PRs data.

The solution that CrossChain Labs presents is going to address the problems described above and will offer clarity on the open source Polkadot’s developer ecosystem. This will be done by scraping the data related to Polkadot’s organisations on GitHub and exposing it in a nicely designed dashboard that allows tracking the number of commits, repositories, contributors, PRs, the top contributors of the month, the evolution of commits and active contributors for each month over the last year and monitoring the recent commits that are being done in the various Polkadot organisations.

### Project Details

Deliverables:
- GitHub Scraper that will collect all the required data from GitHub
- DotPulse APIs that will serve to get the data from the scraper and interact with the DotPulse dashboard
- DotPulse Dashboard that will include:
  - the statistics top section with the overall number of commits, repositories, contributors and PRs
  - contributors of the month
  - commits graph with info regarding the last 12 months
  - issues graph that shows the number of open and closed issues together with their total
  - graph of active contributors for each month over the last year
  - the recent commits section that shows the activity of the ecosystem over the last 30 days, with clickable links to open a commit, its repository or the developer's profile on GitHub

Dashboard Overview

<img width="833" alt="DotPulse" src="https://user-images.githubusercontent.com/91743348/192284364-81506e70-8fb5-4e17-87f2-ab83fddebb20.png">

### Ecosystem Fit

The DotPulse project will enable all the interested parties to track the development among different Polkadot organisations on Github, to follow the number of commits, repositories, contributors, PRs, the top contributors of the month, the evolution of commits and active contributors for each month over the last year and monitor the recent commits that are being done in the various Polkadot organisations.

There are many benefits of getting the DotPulse project up and running:
 - it offers a clear overview on the open source development that is being done across the various Polkadot organizations, by having all the required data aggregated in one place
 - acknowledges the contributors of the month
 - displays the active contributors for each month over the last year
 - shows the evolution of the number of commits made on GitHub by developers throughout the entire Polkadot ecosystem
 - outlines the recent commits 
 
## Team :busts_in_silhouette:

### Team members

  - Andreea - Team Leader
  - Cristina - Full Stack Developer (JavaScript, React)
  - Catalin - Full Stack Developer (JavaScript, React)
  - Florin - UI/UX Designer (Sketch, Figma)

### Contact

- **Contact Name:** Andreea Stefan  
- **Contact Email:** andreea.stefan@crosschainlabs.tech
- **Website:** https://www.crosschainlabs.tech/

### Legal Structure

- **Registered Address:** Oaspetilor Boulevard, 15, Bucharest, Romania, #013865
- **Registered Legal Entity:** CrossChain Labs SRL

### Team's experience

We’re CrossChain Labs, a team of of designer and software developers with hands-on experience on blockchain technology and development of decentralised applications, with previous experience as ConsenSys employees. Some of the latest dev-grants were for projects from Filecoin (https://filmarket.io/) and NEAR protocol (NEAR registrar, Audit Registry, near.link, Developer Dashboard) with tech stack: IPFS, Arweave, rust, react, go and javascript.
We're creative, experienced, responsible, organised and do our best to make high quality work and bring ideas to life.

### Team Code Repos

- https://github.com/CrossChainLabs
- https://github.com/CrossChainLabs/near-registrar
- https://github.com/CrossChainLabs/audit-registry
- https://github.com/CrossChainLabs/near-dns
- https://github.com/CrossChainLabs/near-api-go
- https://github.com/CrossChainLabs/coredns-near
- https://github.com/CrossChainLabs/near-link
- https://github.com/CrossChainLabs/filmarket-contract

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/yellow-cube
- https://github.com/arctic-ash
- https://github.com/aliasccl

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/andreea-stefan-66740b20/
- https://www.linkedin.com/in/cristina-varteniuc-6b3121224/
- https://www.linkedin.com/in/catalin-vlad-48b828229/
- https://ro.linkedin.com/in/florin-gradinaru-73891bb

## Development Status :open_book:

Since Polkadot has increasingly grown the open source developer ecosystem, there is a need to get an activity overview and easily track the development among different Polkadot organisations on Github, understand what is their status, track the contributions made by developers and get an idea on how the repositories evolve. Is really hard to understand how the Polkadot ecosystem is progressing since the data is scattered all over GitHub, with contributors, commits, issues, repositories and PRs data.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 8 weeks
- **Full-Time Equivalent (FTE):**  3 FTE, 1 PTE
- **Total Costs:** 42,000 USD

### Milestone 1

- **Estimated duration:** 4 weeks
- **FTE:**  3.5
- **Costs:** 20,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Documentation | We will provide both documentation of the code and a basic video tutorial that explains how a user can easily use DotPulse app |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Implement Github scraper functionality | Periodically update the list of repositories that are being part of the Polkadot organizations on GitHub |
| 2. | Implement Github scraper functionality | Calculate the total number of commits, repositories, contributors and PRs from the entire Polkadot ecosystem |
| 3. | Implement Github scraper functionality | Get the contributors of the month based on the number of commits |
| 4. | Implement Github scraper functionality | Calculate the total number of commits across all the repositories for each month over the last year |
| 5. | Implement Github scraper functionality | Collect the total number of issues that are being opened or closed at the moment |
| 6. | Implement Github scraper functionality | Calculate the number of active contributors  for each month over the last year |
| 7. | Implement Github scraper functionality | Collect the list of recent commits across all the Polkadot's Github repositories from the last 30 days |
| 8. | Finalize the UX | With all its design elements
| 9. | Implement the DotPulse APIs required by frontend | Statistics API that returns the overall number of commits, repositories, contributors, PRs |
| 10. | Implement the DotPulse APIs required by frontend | Contributors API that returns the list of contributors of the month based on the number of commits over the last month |
| 11. | Implement the DotPulse APIs required by frontend | Issues APIs that return the total number of issues, the number of closed and open issues |
| 12. | Implement the DotPulse APIs required by frontend | Commits API that returns the total number of commits per month 

### Milestone 2

- **Estimated duration:** 4 weeks
- **FTE:**  3.5
- **Costs:** 21,500 USD, 
- NOTE: The M2 calculation includes the cloud infrastructure cost estimated at $1,000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Documentation | We will provide both documentation of the code and a basic video tutorial that explains how a user can easily use DotPulse app |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e.	| Article | We will publish an article that explains what was achieved as part of the grant and how users can benefit the most from DotPulse functionalities. |
| 1. | Implement the DotPulse APIs required by frontend | Active contributors API that returns the number of active developers for each month over the last year |
| 2. | Implement the DotPulse APIs required by frontend | Recent commits API that returns the list of recent commits across all Polkadot repositories over the last 30 days |
| 3. | Build the DotPulse dashboard | Display the statistics top section with the overall number of commits, repositories, contributors and PRs |
| 4. | Build the DotPulse dashboard | Show the contributors of the month |
| 5. | Build the DotPulse dashboard | Commits graph with info regarding the last 12 months |
| 6. | Build the DotPulse dashboard | Issues graph that shows the number of open and closed issues together with their total |
| 7. | Build the DotPulse dashboard | Active contributors graph |
| 8. | Build the DotPulse dashboard | The recent commits section that shows the activity of the ecosystem over the last 30 days, with clickable links to open a commit, its repository or the developer's profile on GitHub |
| 9. | Prepare the final adjustments | Create the production infrastructure on Google Cloud |
| 10. | Prepare the final adjustments | Deploy dotpulse.io webapp |
| 11. | Prepare the final adjustments | Run the final tests |
| 12. | Prepare the final adjustments | Public release

## Future Plans

To drive adoption of the DotPulse platform, CrossChain Labs will:
- create a YouTube video tutorial showcasing the DotPulse functionalities and usage
- distribute it via Polkadot Discord channels
- add Google Analytics to track users engagement in order to adapt and improve accordingly

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Friends & Colleagues
