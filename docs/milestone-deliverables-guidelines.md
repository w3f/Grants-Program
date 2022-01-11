# Milestone Delivery Guidelines

These are the guidelines to be followed for milestones submitted for evaluation.

## Submission

Please submit all your milestones via PR to the [Grant Milestone Delivery repository](https://github.com/w3f/Grant-Milestone-Delivery).

## Invoice

Although a milestone needs to be reviewed and accepted, you can already submit your invoice through [this form](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform).

## Content

The submission should contain the following information:

- **Name of the grant project**
- **Link to the open-source code/delivery**
- **[License](#license)**
- **[Documentation](#documentation)**
- **[Formatted code](#formatted-code), according to a set of guidelines**
- **[Testing Guide](#testing-guide)**
- **A list of the [milestone deliverables](#milestone-deliverables)**
- **Any [additional information](#additional-information)**

## License

In order to successfully receive grant funding for your application it is necessary for the project to have open source code.
We prefer Apache 2.0, but MIT or Unlicense are also acceptable. If your delivery comprises multiple repositories, make sure to include the license for each of them.

## Documentation

We value high-quality open source code, but even the most performant code is of little use if it lacks proper documentation.

We require that you document (where applicable):

- API calls
- Architecture overview and individual component details
- Algorithms and protocols that are core to your project
- Any other fundamental building blocks to your technology

Unless absolutely necessary, make the documentation public as well, ideally as part of the appropriate code repository. This will make it easier for the community to use or adapt your project.

**Note**: Only focus on your **own** contributions. Do not write detailed explanations of already existing components, e.g. IPFS.

## Formatted code

A codebase that is easy to read is also easy to use. We suggest adopting one style from Day 1 and adhering to it across the entire team.
This helps to keep the commit history clean and facilitates any reviews of the introduced changes.

For **Substrate**, we strongly recommend formatting your code according to the [official guidelines](https://github.com/paritytech/substrate/blob/master/docs/STYLE_GUIDE.md).

For **Rust**, we encourage formatting any additional support libraries or helpers by following the [Style Guidelines](https://doc.rust-lang.org/1.0.0/style/README.html).

For **any other** deliveries, please commit to a particular style & let us know which official guidelines you adopt.

## Testing Guide

We require that each milestone delivery includes a comprehensive test suite, consisting of:

### A step-by-step guide demonstrating how your code achieves the milestones

Please provide documentation on how to install, compile, run and test the deliverable(s). Make sure to include all necessary prerequisites. Common issues while replicating test results involve, among others, undocumented dependencies, version numbers, local database setups, breaking changes in the main branch since delivery, OS- and browser-specific incompatibilities.

Depending on the deliverable, this could include (but is not limited to)

- how to embed your library in another application,
- how to make example API calls to your service,
- running your web app, and
- steps to complete some desired action in your mobile app.

### Unit tests

As with any quality software project, each logical code component should be testable.

### Integration tests

We prefer dockerfiles to avoid problems with versions and dependencies.


**Note**: If you are not delivering code as part of your project, such a test suite is not applicable. This mainly applies to projects centering on design, research or hardware. If that is the case, please provide detailed instructions on how else we can test/run/replicate your deliverable.

## Milestone Deliverables

Please provide a list of milestone deliverables. This list should closely reflect the list of deliverables agreed on in the Pull Request for the public **Grants Program** application or in Annex 1 of the grant contract for the private applications.

Each item in the list should include a link to the deliverable itself, e.g.:

- Google Doc link - make sure anyone with the link has View access
- GitHub repository - include the appropriate file/folder in the link

**Please highlight anything that deviates from the contract** and include further information that you think is relevant to the deliverable, either alongside the appropriate deliverable or under [Additional Information](#additional-information).

Please ensure the repo has the correct open-source license.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |
| 0a. | License | https://github.com/.../LICENSE | ... |
| 0b. | Documentation | ... | ... |
| 0c. | Testing Guide | ... | ... |
| 1. | ... | ... | ... |
| 2. | ... | ... | ... |

## Additional Information

Please add any additional comments that you consider relevant for the evaluation.
