# Opentribe - Learn, earn & build in Polkadot
- **Team Name:** Dotgraphic
- **Payment Details:** 
  - **DOT Address**: 15V2Rfi6METM3FJpZJH5QVM3WYHEmNLcQ52FcMPYTtdTipA4
  - **Payment**: USDC
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview 📄

### Overview
Opentribe aims to become a discovery platform where users can explore Grants, Bounties, Jobs, Tools, and Educational material for the Polkadot/Substrate ecosystem, all under one roof.

Opentribe aims to become a discovery platform where users can explore Grants, Bounties, Jobs, Tools, and Educational material for the Polkadot/Substrate ecosystem, all under one roof.

The platform will be divided into two main categories:

1. **Earn:** This section will include:
   - Grants from all parachains
   - Bounties: Bite-sized tasks for freelancers
   - Jobs from all parachains

2. **Build:** This section will feature:
   - Tools for the Polkadot ecosystem
   - Educational resources for the Polkadot ecosystem

Our project relates to the Polkadot ecosystem by providing a centralized hub for opportunities and resources, making it easier for developers, creators, and companies to connect and contribute to the growth of the ecosystem.

### Project Details

#### Tech Stack

- [Next.js 15](https://nextjs.org/): We will be using Next.js as our React framework.
- [React](https://reactjs.org/): For building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): For styling.
- [Prisma](https://www.prisma.io/): As our ORM for database management.
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction): For building our API.
- Database: We will be using a managed PostgreSQL database.
- Authentication: We will use [NextAuth.js](https://next-auth.js.org/) for authentication, supporting Google OAuth, email authentication, and wallet integration.

#### API Schema

- `/api/auth`: Handles user authentication
- `/api/users`: Manages user profiles
- `/api/grants`: CRUD operations for grants
- `/api/bounties`: CRUD operations for bounties
- `/api/jobs`: CRUD operations for jobs
- `/api/tools`: CRUD operations for tools
- `/api/learn`: CRUD operations for educational resources
#### Data Model

[![](https://mermaid.ink/img/pako:eNrNWEtz2zYQ_iscHlvn0KsmFz_ijDNq6rHk6UyrHGBgRaMCscwCcMKq_u9dPiRRFEgpiaZTHSQSu9gXvn1A61SignSSSiOcu9EiI5EvbMKfRweUvP3nzZtkLgxY31-dFWgdUmd5kf6ySBMmLdKf-OGyKIyWwmu0w0yz8JRr50Z5qrXZShszIgalFmaq7WrRCmrN6zO-J7FxZYDjCoP15SjLB3zaqGlic9T1ONvvSKt3XwsgDVZCw9l812YeldqYepSNzR3lGQ7rHHEk6FMQZB_AYaDK-jZk1UEdOcEoDyOhZRkJwT3pv2EKL2DGInAaV63tI4ACNaJxj6vhq3Olici6Wak-Pz8-3t0kWnVWZp60zRLIhTaHy4EFWJHDIWWpyfmPURKrHqAUhEtt4F5LHyhCRwucH0BXGiNisQuYLuWLMAb8pVIEznW9ZevnZQGJ56_O-o3wkEgC_lGXvk8IheoSXvdD2mbJ-sCKPz8lEvM8WO3LyyW7qWtrXYxRsG732_LOemCT_aFHMhCxmnd5YbAEirjMaXlPsOT927Ss6VecDiBssgIo7uwSGWcv7E7Ul03pWEcMwLwQtowfY0t8HATHhuFhOkibf9HexzxjtzmCo4qnmEXwoa0KzlM5uG32jOS30OrFokmsk3KF7TMR4xQ4SbroQfTWoPCJRy9MnfJDZy27djMwEgKpCy66_rqqDAcSxQuQyKA2exaX-wyfA_Ro7eaCM_EF1AxvBfX0toK5ZlbogLnOD1JHgVCG83QE2rcoQxT6WdAKqs1RKrWVeo-4bb8P7JAmyDkoLnHR5c6-D0FlLPWaNONMi-Sv_fcz1YO2bv-PgLMLTB85Rw_PVY3EdfvNf3QCowD4keOp5orzn03H3Ljj-HTuvtOZhk5ziDO8QCe6Tb0jY-aFD3yE9c-ZTNyNNEcsrMubqObgfl3Ke4iNIr3fxXbTz2mR2fWsvqQ4ztexXsOdJsjBBt_iQt1qMMrFkdlLjvhEsZcq_VGEW_23evwN2PYiOxcy9qbwH8pHiTwzRSByaO9G3bkTcQeS0xyJWLyVcG7btneYExKwnsVldasrO9eQWG59H8aqnddsa4ZUJrJ9GIrod-npi9ner48JqhnvjfBLpDwp2odjt5-euv2L8alYGJmqCc0BDrg-k7_Zzu87AljVWx5K6tf0Is2B-H6n0klam7lI_TPXtkU64UcZCilW_LKwFasIHmellemECxxcpIQhe04nS2EcvzXwa_-D2bCA0h7p1_ZPmurnImU3_0DM242v_wIYMWHH?type=png)](https://mermaid.live/edit#pako:eNrNWEtz2zYQ_iscHlvn0KsmFz_ijDNq6rHk6UyrHGBgRaMCscwCcMKq_u9dPiRRFEgpiaZTHSQSu9gXvn1A61SignSSSiOcu9EiI5EvbMKfRweUvP3nzZtkLgxY31-dFWgdUmd5kf6ySBMmLdKf-OGyKIyWwmu0w0yz8JRr50Z5qrXZShszIgalFmaq7WrRCmrN6zO-J7FxZYDjCoP15SjLB3zaqGlic9T1ONvvSKt3XwsgDVZCw9l812YeldqYepSNzR3lGQ7rHHEk6FMQZB_AYaDK-jZk1UEdOcEoDyOhZRkJwT3pv2EKL2DGInAaV63tI4ACNaJxj6vhq3Olici6Wak-Pz8-3t0kWnVWZp60zRLIhTaHy4EFWJHDIWWpyfmPURKrHqAUhEtt4F5LHyhCRwucH0BXGiNisQuYLuWLMAb8pVIEznW9ZevnZQGJ56_O-o3wkEgC_lGXvk8IheoSXvdD2mbJ-sCKPz8lEvM8WO3LyyW7qWtrXYxRsG732_LOemCT_aFHMhCxmnd5YbAEirjMaXlPsOT927Ss6VecDiBssgIo7uwSGWcv7E7Ul03pWEcMwLwQtowfY0t8HATHhuFhOkibf9HexzxjtzmCo4qnmEXwoa0KzlM5uG32jOS30OrFokmsk3KF7TMR4xQ4SbroQfTWoPCJRy9MnfJDZy27djMwEgKpCy66_rqqDAcSxQuQyKA2exaX-wyfA_Ro7eaCM_EF1AxvBfX0toK5ZlbogLnOD1JHgVCG83QE2rcoQxT6WdAKqs1RKrWVeo-4bb8P7JAmyDkoLnHR5c6-D0FlLPWaNONMi-Sv_fcz1YO2bv-PgLMLTB85Rw_PVY3EdfvNf3QCowD4keOp5orzn03H3Ljj-HTuvtOZhk5ziDO8QCe6Tb0jY-aFD3yE9c-ZTNyNNEcsrMubqObgfl3Ke4iNIr3fxXbTz2mR2fWsvqQ4ztexXsOdJsjBBt_iQt1qMMrFkdlLjvhEsZcq_VGEW_23evwN2PYiOxcy9qbwH8pHiTwzRSByaO9G3bkTcQeS0xyJWLyVcG7btneYExKwnsVldasrO9eQWG59H8aqnddsa4ZUJrJ9GIrod-npi9ner48JqhnvjfBLpDwp2odjt5-euv2L8alYGJmqCc0BDrg-k7_Zzu87AljVWx5K6tf0Is2B-H6n0klam7lI_TPXtkU64UcZCilW_LKwFasIHmellemECxxcpIQhe04nS2EcvzXwa_-D2bCA0h7p1_ZPmurnImU3_0DM242v_wIYMWHH)




#### Primary Entities

1. **User:** A user can sign up with a Google account and choose to be either a talent/user or a sponsor/company. They can view and interact with all sections of the platform.

2. **Grant:** Represents funding opportunities from various parachains. Can be created by sponsors and applied to by talents.

3. **Bounty:** Represents smaller, bite-sized tasks. Can be created by sponsors and completed by talents.

4. **Job:** Represents full-time or part-time job opportunities within the Polkadot ecosystem. Can be posted by sponsors and applied to by talents.

5. **Tool:** Represents development tools, libraries, or resources for the Polkadot ecosystem. Can be submitted and viewed by all users.

6. **Learn:** Represents educational content related to Polkadot. Can be submitted and viewed by all users.

#### Designs

##### Opentribe - Explore Bounties
![Opentribe - Explore Bounties](https://i.imgur.com/xu8yfR1.png)

##### Opentribe - Connect Wallet
![Opentribe - Connect Wallet](https://i.imgur.com/yf2OYiS.png)

We will create designs based on the provided screenshots, adapting them to specific components. The UI will feature:

1. A clean, modern interface with a dark theme option
2. Separate sections for Earn (Grants, Bounties, Jobs) and Build (Tools, Learn)
3. Filtering and search functionality for each section
4. User profiles with the ability to showcase skills and past work
5. A dashboard for sponsors to manage their listings
6. Responsive design for mobile and desktop use

### Ecosystem Fit

Our project fits into the Polkadot/Substrate ecosystem by providing a centralized platform for discovering opportunities and resources. This addresses several needs:

1. It simplifies the process of finding grants, bounties, and jobs for developers and creators.
2. It provides a unified place for projects and companies to list opportunities, increasing visibility.
3. It creates a hub for educational resources and tools, making it easier for newcomers to learn about and contribute to the ecosystem.

The target audience includes:
- Developers looking for opportunities in the Polkadot ecosystem
- Projects and companies seeking talent or offering grants
- Newcomers to the ecosystem looking for educational resources
- Anyone interested in discovering tools and libraries for Polkadot development

While there are similar platforms in other ecosystems (like SuperTeam for Solana), Opentribe will be tailored specifically to the needs of the Polkadot community.

## Team :busts_in_silhouette:

### Team members

- Team Leader: Nitesh


### Contact

- **Contact Name:** Nitesh
- **Contact Email:** graphicsofdot@gmail.com
- **Website:** https://www.dotgraphic.info/

### Legal Structure

- **Registered Address:** To be Registered


### Team's experience

[Provide details about your team's relevant experience, especially in web development, React, and blockchain projects.]

### Team Code Repos

- https://github.com/dotgraphic1



## Development Status :open_book:

[Provide any relevant information about the current development status, research conducted, or any prototypes you may have created.]

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 10,000 USD

### Milestone 1 — Core Platform Development

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 5,000 USD

|  Number | Deliverable               | Specification                                                                                                                               |
| ------: | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | Apache 2.0                                                                                                                                  |
| **0b.** | Documentation             | We will provide both inline documentation of the code and a basic tutorial that explains how a user can start using Opentribe.              |
| **0c.** | Testing and Testing Guide | Core functions will be covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                               |
|      1. | User Authentication       | Implement Google OAuth for user authentication and authorization.                                                                           |
|      2. | User Profiles             | Develop user profile functionality, allowing users to choose between talent/user and sponsor/company roles.                                 |
|      3. | Grants Section            | Implement the Grants section, including listing, filtering, and application process.                                                        |
|      4. | Bounties Section          | Develop the Bounties section with similar functionality to the Grants section.                                                              |
|      5. | Front-end Development     | Create responsive UI components using React and Tailwind CSS for the developed features.                                                    |

### Milestone 2 — Additional Features and Launch

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 5,000 USD

|  Number | Deliverable               | Specification                                                                                                                               |
| ------: | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | Apache 2.0                                                                                                                                  |
| **0b.** | Documentation             | We will provide both inline documentation of the code and a comprehensive guide for using all features of Opentribe.                        |
| **0c.** | Testing and Testing Guide | Core functions will be covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                               |
| **0e.** | Article                   | We will publish an article that explains the features and benefits of Opentribe for the Polkadot ecosystem.                                 |
|      1. | Jobs Section              | Implement the Jobs section, including listing, filtering, and application process.                                                          |
|      2. | Tools Section             | Develop the Tools section, allowing users to submit and browse Polkadot development tools.                                                  |
|      3. | Learn Section             | Create the Learn section for educational resources, with submission and browsing functionality.                                             |
|      4. | Search Functionality      | Implement a robust search feature across all sections of the platform.                                                                      |
|      5. | Platform Launch           | Deploy the platform and make it available for public use.                                                                                   |

## Future Plans

- Establish partnerships with major Polkadot ecosystem projects to list their opportunities on Opentribe.
- Implement a reputation system for users based on their contributions and completed tasks.
- Develop a mobile app for easier access to opportunities on the go.
- Integrate with Polkadot wallets for seamless payments and identity verification.
- Expand the educational resources section with interactive tutorials and courses.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

We are excited about the potential of Opentribe to significantly contribute to the growth and accessibility of the Polkadot ecosystem. By providing a centralized hub for opportunities and resources, we aim to lower the barrier of entry for new developers and creators while also supporting established projects in finding the talent they need.
