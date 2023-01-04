# RFP: Validator Selection Algorithm

* **Status:** [Under Development](https://github.com/w3f/Grants-Program/blob/master/applications/validators_selection.md)
* **Proposer:** [jonasW3F](https://github.com/jonasW3F)

## Project Description 

Together with colleagues from academia, we developed an interactive process for nominations to better find suitable validators and the study is published [here](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515). The process is non-opinionated, which means that we do not have any opinion on any validator ex ante. The score of a validator is purely derived by the choices of the nominators.

After having validated the results in the study, I'd like to see this implemented. For that, we need to set up a proper backend that exposes an API for other services to connect to.


## Deliverables :nut_and_bolt:

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

- **Requirements**:
  - Linux system with python 3 and listed packages installed
  - 2GB of RAM
  - GPU (optional)
  - Network configuration allowing for communication on a selected port

- **Testing**
    - Test if the code behaves as expected.

* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):**  30 days
* **Total Costs:** 9000 USD (provisional)

### Milestone 1 (Implementation)

* **Estimated Duration:** 4 weeks
* **FTE:**  20 days
* **Costs:** 6000 USD


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
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
| 1. | Deployment | Deploy the code on a provided server. |
| 2. | Test live environment | Test the server efficiency and provide a report | 
| 3. | Polishing | Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like the way data are provided, configuration, etc. | 
