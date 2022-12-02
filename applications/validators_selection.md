
# Validators selection


- **Team Name:** Optymalizacja AI Grzegorz Miebs
- **Payment Address:** bc1qtcjq0jpcup43ny5e66f6kuvcn9pyhamguecsgu BTC
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1



## Project Overview :page_facing_up:

Response to an RFP [validator-selection-algorithm](https://github.com/w3f/Grants-Program/blob/master/docs/rfps/Open/validator-selection-algorithm.md "validator-selection-algorithm.md").

### Overview


This project aims to create a decision-support tool aiding nominators in selecting validators based on their individual preferences. These preferences are expressed in a very easy and intuitive way by performing pairwise comparisons. A nominator has to answer several times (around 6) which one out of two present validators they prefer. Based on these comparisons a mathematical model reflecting the nominator's preference is created. Finally, the model is used to rank validators. 
I was already involved in a research phase of this project hence I'd like to make a final version.

### Project Details

The aim of this project is only a backend. The final result will be a Python flask application exposing its functionality via RESTful API

- **Functionality**:
  - **Providing a pair of validators for comparison**:
    - Input:
      - previous comparisons
    - Output:
      - next pair
      - current model’s quality
      - current model
  - **Providing a ranking for a given model**
    - Input:
      - model
    - Output:
      - ranking of validators
  - **Accepting new data**
      - Input:
          - validators.csv file that contains information of recent era data from trusted sources
      


### Ecosystem Fit


This application will be used in a validators selection phase, thus all nominators are its audience. The project makes the selection process easier and more robust. To the best of my knowledge, there isn't a similar project.

## Team :busts_in_silhouette:

### Team members

- Grzegorz Miebs

### Contact

- **Contact Name:** Grzegorz Miebs
- **Contact Email:** grzegorz.miebs@protonmail.ch
- **Website:**

### Legal Structure

- **Registered Address:** Poland, Poznan 61-853, Wierzbowa 2/22
- **Registered Legal Entity:** Optymalizacja AI Grzegorz Miebs

### Team's experience

I have 4 years of industry experience as a data scientist and 6 years of academic experience in a multicriteria decision support field. 
The most relevant project is of course study regarding this topic with the preprint available here: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515
Other related projects:

-   Multicriteria job planning for bus and tram drivers for the public transport system of Poznań
-   Selection of a sustainable third-party reverse logistics provider [https://doi.org/10.1016/j.omega.2018.05.007](https://doi.org/10.1016/j.omega.2018.05.007)

### Team Code Repos

- https://github.com/miepsik


### Team LinkedIn Profiles

- https://www.linkedin.com/in/grzegorz-miebs/

## Development Status :open_book:

- preprint https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515


## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 30 days
- **Full-Time Equivalent (FTE):**  1FTE
- **Total Costs:** 9,000 USD

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 4 weeks
- **FTE:**  20 days
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains how this algorithm works and how to use the software |
| 1. | Next pair | Develop an algorithm for efficient calculations of the next pair to be compared to maximize the model’s information gain. |  
| 2.  | Ranking calculation  | Develop an algorithm calculating a score for each validator | 
| 3.  | New data  | Develop a function for the data preprocessing | 
| 4.  | Internal testing  | Unit tests covering the functionality and logic |



### Milestone 2 (Testing)

* **Estimated Duration:** 2 weeks
* **FTE:**  10 days
* **Costs:** 3000 USD


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains how this algorithm works and how to use the software |
| 1. | Deployment | Deploy the code on a test server provided by the Grants Team or by myself. |
| 2. | Test live environment | Test the server efficiency by checking an average response time for each endpoint and provide a report | 
| 3. | Polishing | Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like the way data are provided, configuration, etc. |


## Future Plans


The possible extensions are:

-   analysis of the obtained results and nominators' preferences
-   capturing drift of preferences and just updating the model instead of repeating the whole pairwise comparison procedure


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation

