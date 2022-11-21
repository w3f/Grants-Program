# SubRelay

- **Team Name:** SubRelay
- **Payment Address:** 0x1aE740dC9F0F2f7404feA35bEb0D59105B9121Cf (USDT - Ethereum Network)
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

SubRelay is a no-code solution to build automation workflows on any Substrate-based chain. The application helps users to create their off-chain automated workflows by subscribing to on-chain events through the interface. We aimed to make the app easy for average users but remain a powerful tool for advanced users. With this in mind, we designed Subrelay to be generic and flexible with any use cases. Additionally, the SubRelay can integrate with any runtime of any blockchain building on the Substrate, such as Polkadot, Kusama, and Statemine.

The app was motivated by our desire to monitor the on-chain events and send webhook requests to our internal system. We wanted to build a solution that not only can solve our problems but also benefit the entire ecosystem of Substrate/Polkadot. Our vision is to make SubRelay the most popular event relay service for any chain in the Polkadot ecosystem.

### Project Details

#### Wireframe

##### Welcome screen & authentication

<img width="965" alt="image" src="https://user-images.githubusercontent.com/99380346/199423745-86e1138c-baa9-4ab8-95a0-10c41ba467e5.png" />


<img width="949" alt="image" src="https://user-images.githubusercontent.com/99380346/199423786-ad5db12f-0d99-4062-a601-1e7383a015c2.png" />

##### Workflow list

<img width="1048" alt="image" src="https://user-images.githubusercontent.com/99380346/199423962-888d0044-fbf4-4c16-bd20-5902e59c8754.png" />

##### Create a new workflow

###### 1. Trigger

<img width="957" alt="image" src="https://user-images.githubusercontent.com/99380346/199424027-efabf1bd-64d7-4df2-bb1b-585c38c200cd.png" />

<img width="955" alt="image" src="https://user-images.githubusercontent.com/99380346/199424158-58e7681e-b000-492b-8bb6-155bce2b6327.png" />

<img width="967" alt="image" src="https://user-images.githubusercontent.com/99380346/199424196-b85e5cea-2579-4cfb-8953-303be9728267.png" />

<img width="919" alt="image" src="https://user-images.githubusercontent.com/99380346/199424301-4d72238f-a482-4ae2-a578-db8d648c8406.png" />

<img width="941" alt="image" src="https://user-images.githubusercontent.com/99380346/199424325-f9395969-7709-4061-be2f-8a7c749ff62e.png" />

<img width="1163" alt="image" src="https://user-images.githubusercontent.com/99380346/199424348-6aace79c-796c-4291-9f62-9c52f6620d18.png" />


###### 2. Action

<img width="936" alt="image" src="https://user-images.githubusercontent.com/99380346/199424416-acca9121-1617-4cc6-90e5-2d58e009e909.png" />

<img width="980" alt="image" src="https://user-images.githubusercontent.com/99380346/199424437-cab85945-213c-4f62-961a-6feb8625e8ef.png" />

<img width="1152" alt="image" src="https://user-images.githubusercontent.com/99380346/199424468-41fcd586-7f95-4949-a2b7-363171d07192.png" />

<img width="945" alt="image" src="https://user-images.githubusercontent.com/99380346/199424486-37948f4e-d634-4363-8a66-e3a1bddd1cfb.png" />

##### Executions history

<img width="958" alt="image" src="https://user-images.githubusercontent.com/99380346/199424614-185e01bf-c329-4ef9-960d-8ae041ad68ce.png" />


#### Database schema

```

Table user {
  id varchar [pk]
  address varchar
}

Table chain {
  uuid varchar [pk]
  chain_id varchar // chain_id in block
  created_at datetime
  version varchar
  name varchar
  img_url varchar
  config jsonb
  latest boolean
}

Table event {
  id varchar [pk]
  chain_uuid varchar
  name varchar
  description varchar
  fields jsonb
  sample jsonb
}

Table workflow {
  id varchar [pk]
  user_id varchar
  created_at datetime
  updated_at datetime
  status varchar
}

Table workflow_log {
  id varchar [pk]
  started_at datetime
  finished_at datetime
  workflow_version_id varchar
  input jsonb
  status varchar
}

Table workflow_version {
  id varchar [pk]
  workflow_id varchar
  name varchar
  chain_uuid varchar
  created_at datetime
  version varchar
}

Table task_log {
  task_id varchar pk
  workflow_log_id varchar pk
  started_at_at varchar
  finished_at datetime
  status boolean
  output jsonb
  input jsonb
 }
 
Table task {
  id varchar [pk]
  name varchar
  workflow_version_id varchar
  type varchar
  config jsonb
  depend_on varchar
 }

Ref: chain.uuid > event.chain_uuid
Ref: task.id > task_log.task_id
Ref: user.id > workflow.user_id
Ref: chain.uuid > workflow_version.chain_uuid
Ref: workflow_version.id > task.workflow_version_id
Ref: task.id > task.depend_on
Ref: workflow_version.workflow_id > workflow.id
Ref: workflow_log.workflow_version_id > workflow_version.id
Ref: workflow_log.id > task_log.workflow_log_id

```


#### API specs

##### ***GET** /chains*

- Response

```json
    [
      {
        "uuid": "849e9dec-5ab8-11ed-9b6a-0242ac120002",
        "name": "Polkadot",
        "img_url": "string",
        "version": "v1.2.0",
      }
    ]
```

##### ***GET** /chains/{chain_uuid}/events*

- Response

```json
    [
      {
        "id": "849e9dec-5ab8-11ed-9b6a-0242ac120002",
        "name": "balances.deposit",
        "description": "string",
      },
      {
        "id": "849e9dec-5ab8-11ed-9b6a-0242ac120002",
        "name": "balances.transfers",
        "description": "string",
      },
      {
        "id": "849e9dec-5ab8-11ed-9b6a-0242ac120002",
        "name": "ntf.minted",
        "description": "string",
      }
    ]
```


##### ***GET** /chains/{chain_uuid}/events/{event_id}*

- Response

```json
    {
      "id": 123,
      "name": "balances.deposit",
      "description": "string",
      "fields": [
        {
          "name": "data.who",
          "type": "string",
          "description": "who sent"
        },
        {
          "name": "data.amount",
          "type": "number",
          "description": ""
        },
        {
          "name": "status",
          "type": "string",
          "description": "status of this event"
        },
        {
          "name": "extrinsic.name",
          "type": "string",
          "description": "this event belong to this extrinsic"
        }
      ],
      "sample": {
        "id": 123,
        "name": "balances.deposit",
        "description": "",
        "data": {
          "who": "",
          "amount": 123
        },
        "status": "success",
        "extrinsic": {
          "name": "balances.deposit"
        },
        "block": {
          "hash": "",
          "number": 123,
          "timestamp": ""
        }
      }
    }
```

##### ***GET** /workflows*

- Query params

| **Query Param** | **Description** | **Example** |
| ---| ---| --- |
| limit | The number of workflows per page | 10 |
| offset | page | 0 |
| search | Search workflow by name | "foo" |
| chain\_uuid | Filter workflows by chain UUID | 2 |
| status | Filter workflows by status. | "running" |

- Response

```json
{
  "workflows": [
    {
      "id": 10,
      "name": "name 1",
      "chain": {
        "uuid": "uasdasdsd",
        "name": "Acala"
      },
      "created_at": "2022-11-02T03:12:39.018Z",
      "updated_at": "2022-11-02T03:12:39.018Z",
      "status": "running"
    }
  ],
  "limit": 10,
  "offset": 0,
  "total": 1
}

```

##### ***POST** /workflows*

- Request body

```json
{
  "name": "workflow 1",
  "tasks": [
    {
      "name": "trigger 1",
      "type": "trigger",
      "config": {
        "event": "balances.deposit",
        "chain_uuid": 1,
        "conditions": [
          [
            {
              "variable": "data.amount",
              "operator": "greaterThan",
              "value": 1
            }
          ],
          [
            {
              "variable": "data.amount",
              "operator": "lessThan",
              "value": 10
            }
          ]
        ]
      },
      "depend_on_name": null
    },
    {
      "name": "notify webhook",
      "type": "notification",
      "config": {
        "channel": "webhook",
        "config": {
          "headers": {
            "API_KEY": "encrypted"
          }
          "url": "https://webhook.com"
        },
        "depend_on_name": "trigger 1"
      }
    }
  ]
}
```

- Response

```json
{
  "id": 22,
  "created_at": "2022-11-02T03:12:39.018Z",
  "updated_at": "2022-11-02T03:12:39.018Z",
  "status": "running",
  "name": "workflow 1",
  "chain": {
    "uuid": "asdasdasd",
    "name": "Acala"
  },
  "tasks": [
    {
      "id": 1,
      "name": "trigger 1",
      "type": "trigger",
      "config": {
        "event": "balances.deposit",
        "chain_uuid": "asdasdasd",
        "conditions": [
          [
            {
              "variable": "data.amount",
              "operator": "greaterThan",
              "value": 1
            }
          ],
          [
            {
              "variable": "data.amount",
              "operator": "lessThan",
              "value": 10
            }
          ]
        ]
      },
      "depend_on": null
    },
    {
      "name": "notify webhook",
      "type": "notification",
      "config": {
        "channel": "webhook",
        "config": {
          "headers": {
            "API_KEY": "encrypted"
          },
          "url": "https://webhook.com"
        },
        "depend_on": 1
      }
    }
  ]
}
```

##### ***DELETE** /workflows/{workflow_id}*

##### ***GET** /workflow/logs*

- Query params

| **Query Param** | **Description** | **Example** |
| ---| ---| --- |
| limit | The number of logs per page | 10 |
| offset | page | 0 |
| search | Search logs by workflow name | "foo" |
| chain_uuid | Filter logs by workflow's chain uuid | 2 |
| status | Filter logs by status. | "running" |

- Response

```json
{
  "logs": [
    {
      "id": 10,
      "workflow": {
          "id": 10,
          "name": "name 1",
          "chain": {
            "id": 1,
            "name": "Acala"
          },
      },
      "started_at": "2022-11-02T03:12:39.018Z",
      "finished_at": "2022-11-02T03:12:39.018Z",
      "status": "success"
    },
    {
      "id": 11,
      "workflow": {
          "id": 10,
          "name": "name 1",
          "chain": {
            "id": 1,
            "name": "Acala"
          },
      },
      "started_at": "2022-11-02T03:12:39.018Z",
      "finished_at": "2022-11-02T03:12:39.018Z",
      "status": "failed"
    }
  ],
  "limit": 10,
  "offset": 0,
  "total": 2
}
```


#### Techstack

- Front-end: [Vue.js](https://vuejs.org/), [Quasar Framework](https://quasar.dev/)
- Back-end:
  - API Framework: Node, [Nest](https://github.com/nestjs/nest)
  - Database: [PostgreSQL](https://www.postgresql.org/)
  - Queue: Redis
  - Infrastructure: Docker

### Ecosystem Fit

As mentioned above, SubRelay can integrate with any Substrate-based chain, bringing a massive benefit to the Substrate/Polkadot ecosystem.

There is a wide range of our target users, but we think there are a few main groups of the user:

- **Normal blockchain user:** The interface of SubRelay is designed to support normal users who want to do a simple task such as watching the change in their balance by setting a notification.

- **Crypto experts:** Although SubRelay's interface is easy to use to support normal users who need a simple workflow, it also is a powerful tool for experts. There is no limitation on what can build with SubRelay. For example, a defi farmer can monitor their liquidity pools, borrowing, and lending positions, or an NFT trader can watch their favorite collections' prices.

- **Developers/ Team:** From the developer's perspective, there is no easy way to integrate an existing system with a blockchain. Our solution will help the teams save time and resources to focus on solving their business requirements instead of wasting their time building a service to integrate with the chain.

Web3Go MoonPush looks similar to our project, but SubRelay is more generic and flexible. There are a few key differences:

- SubRelay can integrate with any Substrate-based chain.
- SubRelay supports subscribing to any runtime events.
- SubRelay provides a highly customizable event filter and action configuration.
- SubRelay has log systems that allow users to manage workflow performance by recording all success and failure pipelines.

## Team :busts_in_silhouette:

### Team members

- Chi Tran - Team Leader
- Anh Thi Chieu
- Bu Le

### Contact

- **Contact Name:** Tran Thi Diem Chi
- **Contact Email:** ttdiemchi@gmail.com
- **Website:** http://subrelay.xyz

### Legal Structure

We are very early and have not set up a legal identity. If necessary, we will set it up as soon as possible. Otherwise, we want to spend our resources on product development.

### Team's experience

Our team has five-year experience in software development for SaaS startups, and provide custom enterprise solutions for top brands. We also have been spending more than a year in blockchain research and development so far. With these experiences, we know the best way to build a great product that connects web2 to web3.

### Team Code Repos

**Organization repos**

- https://github.com/subrelay
- https://github.com/subrelay/subrelay-api
- https://github.com/subrelay/interface

**Team members**

- https://github.com/chidtr
- https://github.com/anhthichieu
- https://github.com/budtr

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  1.5
- **Total Costs:** 30,000 USD

### Milestone 1:  Core functions

- **Estimated duration:** 2.5 months
- **FTE:**  1,5
- **Costs:** 15000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide a basic tutorial that explains the concept of SubRelay, how to create a workflow, and other features |
| 0d. | Docker | We will provide a Dockerfile(s) for the self-hosted version |
| 1. | Feature: Authentication by PolkadotJs wallet | The dashboard and api will allow user to authentication by PolkadotJs wallet|
| 2. | Feature: Create a new workflow | Create a new workflow page which the same as the wireframe above. But Email, Telegram and Discord integrations will not in scope of this milestone.|
| 3. | Feature: List of workflows | A page display workflows of user same as the wireframe above.|
| 4. | Feature: Executions of workflows | A page display workflows execution history  of user same as the wireframe above. |
| 5. | API | We will release an api version which include create workflow, list workflow and list workflow executions.  |
| 6. | Integration | We will integrate the interface features (listed in 1, 2, 3, 4) with the api. |


### Milestone 2:  Extensions development and testing

- **Estimated duration:** 2,5 months
- **FTE:**  1,5
- **Costs:** 15000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide the tutorial for the new features added in milestone 2 |
| 0c. | Testing and Testing Guide | The interface and API will be covered by unit tests and e2e tests. We will provide documentation on how to run the tests and setup CI to run the tests |
| 0d. | Docker | We will release a new Docker file which includes new features added in milestone 2 |
| 0e. | Article | We will publish an article that explains the concepts and features of SubRelay, and the grant |
| 1. | Feature: Email integration | Integrate with Email to send the notification about on-chain event.|
| 2. | Feature: Telegram integration | Integrate with Telegram to send the notification about on-chain event.|
| 3. | Feature: Discord integration | Integrate with Discord to send the notification about on-chain event. |
| 4. | Feature: Workflow execution detail | A page display workflow execution in detail.|
| 5. | API | We will release an api version which include email, telegram, discord integration and workflow exection detail |
| 6. | Integration | We will integrate the interface features (listed in 1, 2, 3, 4) with the api. |

## Future Plans

In the short-term plan, we will launch a community cloud version to get the tractions and feedback from the users to improve the product.
We will add more features such as parallel workflow, workflow templates, and user onboarding processes for the long-term plan.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
