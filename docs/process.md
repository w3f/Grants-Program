---
title: Apply
---

If you are certain you want to apply for a W3F grant, head straight to our [application process documentation](Process/how-to-apply.md). Otherwise, check out the flowchart below for a broad overview of which funding source your application might fit best.


## Funding Opportunities Overview

For a longer list and a description of the programs listed below, check out [our page on alternative funding opportunities](funding.md).

```mermaid
flowchart LR
    A(Project Focus)
    A -->|Development| B[Stage of Development]
    A -->|Research| C[Grants Program]
    A -->|Other| D[Treasury]
    B -->|Existing POC| E[Goal of the Application]
    B -->|No POC| F[Grants Program]
    E -->|Funding| G[Treasury or Grants Program]
    E -->|Support| H[Substrate Builders Program]
    style C stroke:#e83e8c,stroke-width:2px,stroke-dasharray: 5 5
    style D stroke:#e83e8c,stroke-width:2px,stroke-dasharray: 5 5
    style F stroke:#e83e8c,stroke-width:2px,stroke-dasharray: 5 5
    style G stroke:#e83e8c,stroke-width:2px,stroke-dasharray: 5 5
    style H stroke:#e83e8c,stroke-width:2px,stroke-dasharray: 5 5
    
    click C "Process/how-to-apply" "Apply now"
    click F "Process/how-to-apply" "Apply now"
    click D "https://wiki.polkadot.network/docs/en/learn-treasury" "https://wiki.polkadot.network/docs/en/learn-treasury" _blank
    click H "https://www.substrate.io/builders-program/" "https://www.substrate.io/builders-program" _blank
```
