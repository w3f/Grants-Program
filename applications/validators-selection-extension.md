
# Validators selection extension


- **Team Name:** Optymalizacja AI Grzegorz Miebs
- **Payment Address:** bc1qtcjq0jpcup43ny5e66f6kuvcn9pyhamguecsgu BTC
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview :page_facing_up:
Extenstion of grant [Validators selections](https://github.com/w3f/Grants-Program/pull/1326)


### Overview

The project aims to improve existing API for validators selection by providing more than one question in one request and therefore improve UI/UX by limiting waiting time for the response.
In the current version, the server returns one question per request thus there is a need to wait for the response between answering one question and displaying the second one. In the case of e.g. slow internet, this time can be noticeable which has a negative impact on user experience. The idea is to provide not only the next question but also the next one so it can be displayed immediately without waiting for a response from the server. Since the next question depends on the previous answer all possible questions have to be sent.

### Project Details

The aim of this project is to extend the already existing backend. The final result will be a Python flask application exposing its functionality via RESTful API
New endpoints:
- **Providing a pair of validators for comparison**:
- Input:
	- previous comparisons
- Output:
	1. next pair
	2. current model’s quality
	3. current model
	4. current ranking
	5. 1-4 if first option from the next pari is chosen
	6. 1-4 if second option is chosen

- **Obtaining new set of validators**
Cron job downloading new validators data and preprocessing them for the server usage

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
The most relevant project is of course study regarding this topic with the article available [here](https://www.sciencedirect.com/science/article/pii/S0305048323000336) and code [here](https://github.com/miepsik/validators_selection)
Other related projects:

-   Multicriteria job planning for bus and tram drivers for the public transport system of Poznań
-   Selection of a sustainable third-party reverse logistics provider [https://doi.org/10.1016/j.omega.2018.05.007](https://doi.org/10.1016/j.omega.2018.05.007)

### Team Code Repos

- https://github.com/miepsik


### Team LinkedIn Profiles

- https://www.linkedin.com/in/grzegorz-miebs/


## Development Status :open_book:

- academic publication [link](https://www.sciencedirect.com/science/article/pii/S0305048323000336)
- base project [link](https://github.com/miepsik/validators_selection)


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 weeks
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 9000USD

### Milestone 1 

- **Estimated duration:** 4 weeks
- **FTE:**  1
- **Costs:** 9000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use the API |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Workshop | We will organize a workshop with the team that implements UI to explain how to use new API |
| 1. | Next two pairs | Develop an algorithm for efficient calculations of the next two pairs to be compared to maximize the model’s information gain. |
| 2. | Data obtaining | Develop a function for the data acquisition and preprocessing |
| 3. | Internal testing | Unit tests covering the functionality and logic |


## Future Plans
- Integration with the UI designed by the W3F team.
- Creating a decentralized version of the algorithm

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation 
Previous grant: [Validators selections](https://github.com/w3f/Grants-Program/pull/1326)
