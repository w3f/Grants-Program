---
id: apply
sidebar_position: 1
---

# Quickstart


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
    
    click C "Process/index" "Apply now"
    click D "https://wiki.polkadot.network/docs/en/learn-treasury" "https://wiki.polkadot.network/docs/en/learn-treasury" _blank
    click H "https://www.substrate.io/builders-program/" "https://www.substrate.io/builders-program" _blank
```
