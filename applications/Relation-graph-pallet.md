# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Project Name:** Relation
- **Team Name:** Relationlabs
- **Payment Address:** 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:  

### Overview

Relation is a Multi Chain Social protocol of Web3.

Relation is committed to building Web3.0 through a series of infrastructure 0 social networks. Users can easily and conveniently manage their social network data through relation, and insert them into the application according to their own needs. Relationship will make social more democratic and return the ownership of social data to users.

Developers can build applications based on relationship and insert appropriate data models into your applications. It will help you efficiently solve the infrastructure of data storage, update, search and recommendation, so as to quickly build the social map of your applications. Through this unified way of building social applications, the data in social networks will have better composability and interoperability, and relation enables data to flow and combine among applications.

Firstly, relation will add Polkadot's signature verification scheme to the user's relation account, so that users of Poka ecology can register and access the Web3 social graph built by relation.

Secondly, based on the existing user data model, relation will expand the picture, video, file sharing and other scenes in social scenes for relation one by integrating ctrust services.

Finally, relation will build the relation graph pallet, which is a parallel thread of graph database based on substrate and will be used to build the social graph subgraph of Poka ecology.

### Project Details

1.	Relation ONE 文档github索引
2.	个人Canister数据模型及API文档索引
3.	技术栈简述：@hehe补充
4.	现有系统架构图+平行线程pallet的设计架构图
5.	Relation toolsuite文档链接

### Ecosystem Fit

- Access Polkadot JS, and deploy the relation graph pallet to build the sub graph of Poka ecological social graph, so as to lower the threshold of social scene construction of Poka ecology.
- DAPP developers and relation's own user base
- Relationship effectively reduces the development threshold of building Web3 decentralized social applications, and returns the user's data sovereignty to the user, allowing users to capture their own data value.
- Mem protocol。 Firstly, through the self built graph dB, relation can effectively reduce the technical threshold of developers and make high-frequency operation possible on the blockchain. Secondly, the existing implementation of relation can better serve gamefi, while MEM seems to be more focused on the creator economy.

## Team :busts_in_silhouette:

### Team members

- Name of team leader
- Names of team members

### Contact

- **Contact Name:** Full name of the contact person in your team
- **Contact Email:** Contact email (e.g. john@duo.com)
- **Website:**

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/<your_organisation>
- https://github.com/<your_organisation>/<project_1>
- https://github.com/<your_organisation>/<project_2>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/<team_member_1>
- https://github.com/<team_member_2>

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/<person_1>
- https://www.linkedin.com/<person_2>

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

•	预计总工期：整个项目的工期（例如 2 个月）
•	全职当量 (FTE)： 在整个项目期间从事项目工作的全职员工的平均人数（参见维基百科，例如 2 FTE）
•	总成本：整个项目要求的美元金额（例如 12,000 美元）。请注意，接受标准和额外好处取决于所申请的资金水平。这和每个里程碑的成本需要以美元提供；如果赠款以比特币支付，金额将根据支付时的汇率计算。


### Milestone 1 — Relation账户实现波卡签名验证模块

- **Estimated duration:** 0.5 month
- **FTE:**  2
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0b. | Documentation | 我们将提供代码的内联文档解释开发者如何在Relation账户中实现波卡签名验证功能，并说明其安全性. |
| 0c. | Testing Guide | 单元测试将完全覆盖核心功能，以确保功能性和稳健性。在指南中，我们将描述如何运行这些测试. |
| 0d. | Docker | 我们将提供一个 Dockerfile(s)，可用于测试此里程碑提供的所有功能. |

### Milestone 2— Crust 集成

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0b. | Documentation | 我们将提供代码的内联文档解释开发者如何通过Crust服务扩展用户的个人存储空间以及的文件服务索引功能更 |
| 0c. | Testing Guide | 单元测试将完全覆盖核心功能，以确保功能性和稳健性。在指南中，我们将描述如何运行这些测试. |
| 0d. | Docker | 我们将提供一个 Dockerfile(s)，可用于测试此里程碑提供的所有功能. |

### Milestone 3 — Relation Graph Pallet

- **Estimated duration:** 2 month
- **FTE:**  2
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | 我们将提供代码的内联文档解释开发者如何通过Crust服务扩展用户的个人存储空间以及的文件服务索引功能更 |
| 0d. | Docker | 我们将提供一个 Dockerfile(s)，可用于测试此里程碑提供的所有功能. |
| 0e. | 文章 | 我们将发表一篇文章/研讨会，解释 Relation Graph Pallet的实现方案以及对于生态的意义. |
| 1. | Substrate module: X | 我们将创建一个substrate pallet模版，可以根据我们的指引快速部署属于用户自己的图数据库. |

## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.



