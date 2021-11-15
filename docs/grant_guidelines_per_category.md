# Grant guidelines for most popular grant categories

While we ask teams to provide details of their envisioned solution, we are aware that precise implementation might slightly differ from the initial specification. Should there be large deviations from the original plan, please communicate this to the Grants Team ahead of time.

The list below serves only as a guide and is not exhaustive.

## Runtime Modules/Chains

### Applies to

- Building/extending a Substrate pallet

### Requirements

- List the publicly exposed methods
- For each method, specify (to the best of present knowledge):
  - Method signature (incl. parameters with their types, return type)
  - Short description (code template)
- Runtime Storage defined by your module
- [Use case diagram](https://www.wikiwand.com/en/Use_case_diagram) with e.g. UML or SysML (or similar tool demonstrating how external users/system components interact with one another)


## Development Tools

### Applies to

- CLI tools
- IDE / IDE plugin

### Requirements

- State what programming language you'll use
- Describe the commands that you want to make available to the users:
  - Name
  - Parameters
  - Result (value returned / file created or modified / application started etc.)


## UI Development

### Applies to

- Building a web application with front-end components
- Developing a mobile app

### Requirements

- Provide mockups and/or wireframes (e.g. Figma)
- List frameworks & tools for development & testing (e.g. React Native, Angular)

## Backend Development

### Applies to

- Building a service/mobile app/webapp that relies on a back-end component

### Requirements

- State what language & framework you'll use (e.g. python with Django, Rust with Rocket)
- Define  your database requirements and which system you'll use
- Choose how & where will your backend be hosted (cloud provider, IPFS, localhost?)
- Consider scaling & how you plan to handle it
- Consider CI/CD
- If you are (planning on) hosting the backend yourself, consider adding a [security.txt](https://securitytxt.org/) file so people can get in touch with you regarding (potential) security issues
- Provide a link to your Github repository if you already have the structure in place


## Cryptography

### Applies to

- New crypto library
- Extending existing library's functionalities

### Requirements

- Specify what programming language you'll use
- Provide any publications/papers you will base your work on
- Research other crypto libraries providing similar functionalities. State whether/how you plan to use their work. If they don't suit your needs, provide a detailed explanation why and what's missing
- List any existing crypto libraries that you will use as reference implementation (e.g. in a different language)
