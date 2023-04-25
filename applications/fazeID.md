# Faze ID

- **Team Name:** Jett Hays
- **Payment Address:** 0x33644e4D6bb589854fbb906276147Afd7de86E09 (ERC-20 DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


### Overview

We are building privacy-preserving face recognition for the browser. All biometric data is collected and hashed on the client to preserve user privacy.

Once complete, Faze will allow you to verify your humanity and identity on any web application. This will benefit many decentralized projects which currently struggle with Sybil resistance. Example applications include collateralized loans and verifying unique users for airdrops within the Substrate ecosystem. 

Combining privacy and authentication is a unique challenge. Working on this problem is a way to stretch the limits of our technical abilities while extending the security of web3 applications. 


### Project Details

Faze ID will add an authentication factor (biometric verification) previously unavailable on the browser. Existing login standards like passwords and one-time codes are inconvenient, insecure, and dependent on the security of the authentication provider—recent projects like Sign In With Ethereum attempt to replace these methods with session signatures. While session signatures are necessary to circumvent ‘big login,’ biometric authentication can further improve decentralized login. 

The status quo needs to be improved. For example, Gitcoin Passport has traction but is essentially a wrapper around centralized identity providers like Google and Twitter. Other approaches often rely on exchanges, but this is a non-starter for privacy-focused users. So instead, Faze will leverage privacy-preserving face recognition to facilitate authentication and Sybil resistance. An overview of the Faze facial recognition pipeline is included below.

**Authentication Flow**

Faze ID follows a simple authentication flow. When a user wants to log in to a website, a face scan modal is presented. The face scan is then sent to a server for validation. The server returns a JWT to the client if authenticated, and the user’s session is initiated. We aim to provide private and fast authentication that takes less than ten seconds.

**Privacy Preservation**

Facial features are calculated and hashed on the client before being sent to the server. Matching is done via locality-sensitive hashing, which hashes similar inputs to the same output. Validation can then be performed via a constant time registry retrieval. 

**Developer Experience**

Faze Id will provide a simple react component for developers to integrate face auth into any browser-based application. The component will handle face scans and authentication. A callback will be included that will allow developers to access the authentication result (JWT, unique ID, etc.). Faze Id will be free and open-sourced under the Apache 2.0 license. The integration will be as simple as installing an NPM package and adding a single code reference to the Face Id component. 


### Ecosystem Fit

Replacing centralized trust with decentralized technology is a crucial challenge for the Web3 industry. However, many projects within the Substrate ecosystem and beyond need help with Sybil resistance. For example, many projects bootstrap adoption with airdrops. But without identity verification, airdrops are susceptible to bots. 

This is a personal issue. For the past year, I have been building an open-source wallet. We would like to send new users ‘seed money’, but doing so requires verifying the unique humanity of each user. Without centralized ID providers, this is close to impossible. We hope Faze ID will solve our problem and help with Sybil resistance throughout the industry. It is easy to imagine how other Substrate wallets like Nova would benefit from such a solution. 



## Team :busts_in_silhouette:

### Team members

- Leader: Jett Hays 
- Advisor: Mayank Goel (in conjunction with CMU SMASH lab) 

### Contact

- **Contact Name:** Jett Hays
- **Contact Email:** jehays@andrew.cmu.edu
- **Website:** [jetthays.com](https://jetthays.com/)

### Legal Structure

Individual / Sole Proprietor


### Team's experience

I am the President of the Carnegie Mellon blockchain club, where I help members build and understand the decentralized future. Previous projects have included an open-source key management package[https://github.com/KryptikApp/kryptik-seedloop] and a multichain web wallet. Both projects have received support from Carnegie Mellon and multiple blockchain foundations.

If approved, this grant will be supervised by Carnegie Mellon’s SMASH lab (led by Mayank Goel), which is focused on smart sensing solutions. 

I received a previous grant from the Web3 Foundation for *distributedKeyManagement*, also built under my name Jett Hays. 


### Team Code Repos

- <https://github.com/KryptikApp>
- <https://github.com/KryptikApp/faze>
- <https://github.com/KryptikApp/kryptikwebapp>
- <https://github.com/KryptikApp/kryptik-seedloop>

- <https://github.com/jettblu>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/jett-hays-491b541b7/>


## Development Status :open_book:

![Face assist logo](https://faze.kryptik.app/_next/image?url=%2FfazeLogo.png&w=96&q=75)

Faze ID began as a research project at Carnegie Mellon. Since the initial idea a few months ago, most of our time has been spent researching privacy-preserving model techniques. This led us to client-side feature extraction and locality-sensitive hashing. Initial software development has been focused on ‘face assistance,’ which guides users to the optimal orientation and position for face scans. To view our initial work and an overview of the project, visit [this link](https://faze.kryptik.app/).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 12 weeks
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** 10,000 USD

### Milestone 1 — Recognition and Authentication

- **Estimated duration:** 6 weeks
- **FTE:**  1.2
- **Costs:** 5,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a video **tutorial** that explains how a developer can integrate Faze ID.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests, using the Vitest framework.|
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Face Assist Module | The face assist module will guide users to the correct psoition for face scans and ensure high quality data collection. |
| 2. | Locality Sensitive Hashing Module | This module will provide a library for hashing similar inputs to the same value as described in literature. The library will be released as an NPM pcakage. |
| 3. | Web Deployment | We will wrap these modules in a nice UI. The interface will be hosted with Vercel at this [link](https://faze.kryptik.app/). This deployment will be used during the research phase for data collection.|

### Milestone 2 — Liveness Detection and Evaluation

- **Estimated duration:** 3 Weeks
- **FTE:**  1
- **Costs:** 2,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide **inline documentation** of the code.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests, using the Vitest framework.|
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Liveness detection Module | This module will issue challenges to the client and ensure the user is attentive and human. Initial ideas involve task and response challenges, such as blinking at requested intervals.|
| 2. | Model Evaluation | We will test our combined recognition and liveness model on at least 50 paid research participants. Desired metrics include model recall, false positive rate, and attention tracking.|
| 3. | Results Summary| We will publish our evaluation results and insights as a long form article. These metrics will serve as reference for future integrations (for instance, defi aps may use false positive rates to quantify risk scores).|

### Milestone 3 — Rsearch Paper and Faze Package

- **Estimated duration:** 5 weeks
- **FTE:**  1.2
- **Costs:** 3,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide **inline documentation** of the code.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests, using the Vitest framework.|
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article| We will publish an article that provides a step by step explanation of the Faze ID system and how each function is implemented in code. This will be published as a blog post. |
| 1. | Formal Review | This period will be spent reviewing our evaluation results and connecting our results with existing literature. Specific questions we want to address are as follows? What is the model'smperformance? What are the privacy guaruntees of Faze Id? Does hash function selection affect model performance? Is the system viable for production, in terms of complexity and performance?|
| 2. | Research Paper | This paper will include an in depth analysis of the research questions discussed above. Mayank Goel will help advise this paper. The paper will be released as an open source document on Github. We expect this paper to provide a strong foundation for future privacy focused identity solutions within the Web3 space.|
| 3. | Faze ID NPM Component|We will make final adjustements to the interface and model parameters based on the feedback of study participants. We will bundle our code into a single component that will be released as an NPM package.|

...


## Future Plans

Once complete, we will begin inteegrating Faze ID within the Kryptik wallet. In the long term, we would like to onboard other Web3 aplications that would benefit from sybil resistance. A few club memers at Carnegie Mellon are working on DeFi protocols that have expressed interest in incoporating Faze and are naturral first adopters.

Finally, we are interested in how privacy preserving techniques devloped for Faze can be extended to other decentralized applications that require matching, such as recommendation systems. 


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** I first heard about the grants program at EthDenver 2022. I then learned more about the program via the Web3 Foundation Website.

My previous research has had a heavy focus on both security and machine learning, which are the main components of this grant. Past work has been supported by a wide range of institutions including CMU and the SOlana, Web3, and NEAR foundations.
