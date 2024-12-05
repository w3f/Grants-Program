# BlockPublisher

- **Team Name:** Reaudito
- **Payment Details:**
  - **DOT**: 162QCGd1unek7Guieaxuoekf1oVN3RCg2fbxjwhRVMZ7H4cG
  - **Payment**: Payment in **USDC or USDT**, Polkadot AssetHub address 162QCGd1unek7Guieaxuoekf1oVN3RCg2fbxjwhRVMZ7H4cG

- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Overview
#### Decentralized Publishing of News, Journals, and Books

The advent of blockchain technology has the potential to transform the publishing industry in several ways. By leveraging decentralized networks and cryptographic techniques, blockchain-based publishing solutions can offer a more efficient, transparent, and accessible system for authors, publishers, and readers alike. It's also versatile enough to be used for entertainment content.



### Project Details

Key Features of Blockchain-Based Publishing:

- Decentralized Price Discovery: Blockchain-based platforms can facilitate decentralized price discovery, allowing readers to directly support authors by contributing to a community-driven funding pool. This approach ensures that authors receive fair compensation for their work, while readers have greater control over the content they consume.
- Subsidized Articles through Taxes: By implementing a token-based system, blockchain-based publishing platforms can introduce a novel approach to subsidizing articles. A small portion of the token's value can be allocated to support authors, making high-quality content more accessible to readers.
- Free Staking Coin for Enhanced Accessibility: To further promote open access and sustainability, blockchain-based publishing platforms can introduce a free staking coin. This coin can be used to purchase articles, remove paywalls, or access premium content, making it more convenient for readers to engage with published works.
- Open Access and Paywall Removal: The free staking coin can also be used to make articles open access or remove paywalls entirely. This approach can increase readership, promote knowledge sharing, and support the dissemination of high-quality research and content.

## Make the content Open Access Model

### Pasword Sharing:
Sharing passwords for encrypted files is problematic, in P2P systems. One approach is to store the hash of the password in the blockchain and use Zero Knowledge Proof.

Storing password hashes on blockchain can reveal the structure of a password and may be less secure. However, the purpose of the app is to promote open access and disclose the password after one or two months, once some funding for the article or content has been raised. Therefore, stringent password security is not required. Additionally, users can utilize an auto-password generator to create strong passwords.

### Secure Article Purchase:
When a buyer purchases an article, they will pay 1.5 or 1.2 times the price. The money will remain in escrow in smart contract, a secure and tamper-proof storage solution, until the buyer has proven they have access to the article.

What if a user doesn't submit proof after accessing the password? The reason for paying an additional amount is to incentivize them to provide proof that they have obtained the password and accessed the content. The money is refunded once they prove they have access to the password or content.

Knowing that users have access to the content will help build their reputation for the user. They can be granted special privileges, such as increased voting power or more chance to be selected as jurors during price discovery.

### Zero-Knowledge Proof:

To facilitate this, a zero-knowledge proof system will be used. In this system, the buyer must prove to the network that they possess the correct password, without revealing the password itself. One hash to match the hash stored in blockchain to validate the password is correct.

Example code of using zero knowledge proof for anonymous voting([an example code.](https://github.com/reaudito/anonymous-account-crates)

### Per-Article Fee and Open Access:

A per-article fee will be chosen from a list of tips provided. The money fund for the article will remain in escrow until the price discovery process is complete. If the article receives additional money from transaction costs and inflation of token, it will be released from escrow and article is made open access to the public.


## Price discovery

The price discovery process is achieved through the adaptation of the [Shivarthu protocol](https://github.com/reaudito/shivarthu/blob/main/docs/shivarthu/Shivarthu.md) or schelling game.

### Price discovery of mechanism through Score Schelling Game:

1) Here is how the score Schelling game works to calculate score. For example, you can have a score between -10 and +10. The range of -10 to +10 poses a problem because the mean works best without extreme values. If someone gives -10, and others give 1, the mean result can be skewed due to the -10 outlier. The trick is to remove outliers by computing the standard deviation and eliminating all values more than one standard deviation away from the mean. Subsequently, we calculate the new mean of the remaining values, which consist of atleast 68.27% of the dataset. This new mean becomes the score. If your given score is close to the new mean, you receive incentives. If it deviates from the new mean, a portion of your staking value is deducted. Commit and reveal scheme is used.


Code to calculate new mean:

```python
import statistics



def calculate_new_mean(items):
    mean = statistics.mean(items)
    print(mean)
    sd = statistics.stdev(items)
    print(sd)


    #The values less than one standard deviation away from the mean account for 68.27% of the set
    #So we calculate mean of this 68.27% of data removing outlier

    # New data
    new_items = []
    for x in items:
        if x >= mean - sd and x <= mean + sd:
            new_items.append(x)

    print(new_items)

    new_mean = statistics.mean(new_items)
    print(new_mean)
    print("********************")

items = [-10, 1, 1, 1, 5, 1, 1, 7]
calculate_new_mean(items)
# 0.875
# 4.969550137731641
# [1, 1, 1, 5, 1, 1]
# 1.6666666666666667
# ********************
items2 = [-10, -10, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
calculate_new_mean(items2)
# -1.5833333333333333
# 3.941811612428832
# [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
# 0.1
# ********************
items3 = [-10, -10, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, -9, -8, -7, -6, -5, -4, -3, -2, -1]
calculate_new_mean(items3)
# -3.0476190476190474
# 3.8141341150540375
# [0, 0, 0, 0, 0, 0, 0, 0, 0, -6, -5, -4, -3, -2, -1]
# -1.4
# ********************
```

3) Then, we will do quality score voting Schelling game that checks the quality or impact of positive externality. The score range is 0-5
4) A fixed amount of tokens is released for each score. The highest amount of tokens will be released for a score of 5, fewer tokens for a score of 1, and no tokens for a score of 0.


## Integration with other social media
The FOSS UI interface can be integrated with other FOSS social media platforms like Mastodon and Bluesky for cross-posting, increasing visibility of articles and posts.

### Ecosystem Fit

Build on substrate, it will become parachain in Kumama or Polkadot


## Team

### Team Members
- Amiya Ranjan Behera
- Ipsita Pradhan
- Tanushree Behera


### Contact
- Contact Name: Amiya Ranjan Behera
- Contact Email: amiyatulu@gmail.com


### Team's experience

Amiya Ranjan Behera is a full stack developer with 12 years of experience in software development.
Has experience in substrate, rust, reactjs, leptos python and also in building mobile apps in react native and tauri.

Ipsita Pradhan (Ph.D), is a GIS analyst and developer, and has two year experince in rust, substrate, polkadot, and leptos.

Tanushree Behera (B.Ed) has one and half year experinece in rust, substrate, polkadot and leptos.

### Team Code Repos

- https://github.com/orgs/reaudito/repositories

### Overview
- **Total Estimated Duration:** 1 Years and 8 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** 50% Dot

## Milestone:


### Milestone 1:

- Substrate Template Development:

Develop Substrate templates for price discovery, article storage, and staking coin management.


- **Estimated duration:** 8 month
- **FTE:**  1,3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  GPL |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user about the project |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains our project (what was done/achieved as part of the grant.) |
| 1. | Basic schema | Develop Substrate templates for price discovery, article storage, and staking coin management.|
| 2. | Tests | Implement and test the Substrate templates to ensure seamless integration with the overall system.|

### Milestone 2:

- Leptos UI Development:

Design and develop a user-friendly UI for article upload, viewing, and interaction with the Substrate templates using Leptos.
Integrate the Leptos UI with the Substrate templates to enable a seamless user experience.

- **Estimated duration:** 6 month
- **FTE:**  1,3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  GPL |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user about the project |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains our project (what was done/achieved as part of the grant.) |
| 1. | Leptos UI Development | Design and develop a user-friendly UI for article upload, viewing, and interaction with the Substrate templates using Leptos.|


### Milestone 3:

- Zero-Knowledge Proof (ZKP) Integration:

Develop a ZKP system for secure article purchasing, ensuring that buyers can prove ownership of the article without revealing the password.
Integrate the ZKP system with the Substrate templates and Leptos UI to enable secure and private article purchasing.

- **Estimated duration:** 6 month
- **FTE:**  1,3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License |  GPL |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user about the project |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains our project (what was done/achieved as part of the grant.) |
| 1. | ZKP for article purchase | Develop a ZKP system for secure article purchasing, ensuring that buyers can prove ownership of the article without revealing the password. RiscZero framework is used for ZKP system.|
| 2. | UI | Integrate the ZKP system with the Substrate templates and Leptos UI to enable secure and private article purchasing. |


## Future Plans

- how you intend to finance the project's long-term maintenance and development

Once the token value of the app increases, future maintenance cost and development is done through native treasury or governance of the app.

- how you intend to use, enhance, and promote your project in the short term, and

In the short term, our developer team focus on building a robust foundation for our project by hiring and leading a marketing team to increase visibility and user adoption. To ensure the project's initial sustainability and growth, we will explore funding opportunities through venture capital and the Polkadot treasury

- the team's long-term plans and intentions in relation to it.

Polkadot is really a mature framework for dapp developers. Our developer team consists of full-time, dedicated professionals focused on contributing to the Polkadot ecosystem. With Polkadot providing the necessary minimum financial support, we are committed to Polkadot ecosystem development and are willing to maintain our projects for decades to come.
