# Alternative javascript console for Polkadot JS API

:::caution
This Request for Proposals is currently considered **under development**, meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it’s better to double check this with the grants team.
:::

* **Status:** [Under Development](https://w3f.github.io/Grants-Program/applications/sandox)
* **Proposer:** [muddlebee](https://github.com/muddlebee)
* **Projects you think this work could be useful for** [optional]: Javascript console at https://polkadot.js.org/apps/#/js

## Project Description :page_facing_up: 

### Current State
We have a Javascript console on the Developer tab which is really useful for running Polkadot-JS API scripts [Polkadot-JS API docs](https://polkadot.js.org/docs/)


**Link** - [https://polkadot.js.org/apps/#/js](https://polkadot.js.org/apps/#/js), UI screenshot below

![image](https://user-images.githubusercontent.com/8139783/197954316-1449075f-b8be-4a30-a759-873c15f8a14f.png)


**Current limitations of the above console**:
Cannot save code properly, not many keyboard shortcuts, cannot customize configurations.

**Alternative polkadot js API playground**
1. [https://github.com/subdirectory/subshell](https://github.com/subdirectory/subshell)


### Proposed-RFP

A new Polkadot-JS API playground with VS Code-like configurations like save the code, workspace, keyboard shortcuts, etc.
[https://polkadot.js.org/apps/#/js](https://polkadot.js.org/apps/#/js)

some examples -> https://playground.substrate.dev/
here we have to manually build and run our js bundles
![image](https://user-images.githubusercontent.com/8139783/198254152-abdd0f2e-62d4-4f0f-aad1-bcfdd6d48a74.png)

**Why alternative javascript console for Polkadot-JS API**?

Current polkadot js API console which I mentioned in beginning of this post, has some limitations, which we can overcome by creating a better version for smoother dev experience.



## Deliverables :nut_and_bolt:

The following items could be the initial deliverables of the project. Of course, improvements and additions are more than welcome.

- Initial research:
  - study how the current javascript console is developed at https://polkadot.js.org/apps/#/js
  - understand the libaries currently integrated from [polkadot JS API docs](https://polkadot.js.org/docs/)

- Development:
  - design a new UI/UX with better experience than current javascript console with features like
    - save code preferably with secure session management
    - keyboard shortcuts
    - [example](#Proposed-RFP)
    
    Any additional features which make the Polkadot-JS experience more productive and smoother are welcome.

