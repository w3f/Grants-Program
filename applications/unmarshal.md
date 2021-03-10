
# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** Unmarshal Smart Notifications
* **Team Name:** Unmarshal
* **Payment Address:** 0xf1be700d7d7c446a0bd41b35098fe44fd488cc4a

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

### More detailed Grant Application can be found [here](https://docs.google.com/document/d/1jfyrCB6WanbTqrR2MQfYDBVv9ANRQBSyuFxknsEijVg/edit?usp=sharing) 


## Project Overview :page_facing_up:
Unmarshal Smart Notications is a complete end to end solutions to send push notification to Mobile applications on various transactions.
DApps can keep their clients upto date with our notifications

### Overview

Unmarshal is a multi-chain Defi data network. As part of our vision, we aim to delivery data in the format and avenue that DApps require. 
Smart notifications will be one such avenue we want to serve the data. 

Unmarshal smart notifications can be delivered directly to mobile applications using firebase, websockets etc. or Clients can register the webhooks. 
Decoding the data and serving it in the formats required by clients is our core missions. so the notification will be decoded and converted in a single line description. 
DApps have the freedom to set their template.  

### Project Details
- Push smart notifications to users that have Polkadot ecosystem wallets
- Provide DeFi alerts, such as liquidation, updates, new dapps and the like 
- Allow DApps to create channels to directly communicate with their users (via wallets) 

Unmarshal has already built the notification for Binance Smart Chain for following transactions 
    * Send
    * Receive
    * Add liquidity 
    * Remove liquidity
    * Approve
    * Stake
    * UnStake
    * Exchange
    
Tech stack:

* Language: Golang
* Database: Mysql, Redis
* Messaging queue: Kafka
* Infrastructure: AWS
* Integration: Firebase, webhook, websockets


![Architecture](../src/polkadot_smart_notifications.png?raw=true "Title")

Registrations - 

Firebase:

    POST: https://notify.unmarshal.io/bulk-subscribe-notification
    [
        {
            "wallet_ids" : ["wallet hash"],
            "fcm": "fcm token",
            "client_id": "client id"
        }
    ]
    
    POST: https://notify.unmarshal.io/subscribe-notification
    {
        "wallet_ids" : ["wallet hash"],
        "fcm": "fcm token",
        "client_id": "client id"
    }
    
Notification Payload

	message := &messaging.Message{
		Token: "token",
		Notification: &messaging.Notification{
			Title: "Received 30,000 DAI",
			Body: "wallet id",
		},
		Data: map[string]string{
			"type": "receive",
			"data": custom data,
		},
		Android: &messaging.AndroidConfig{
			Notification: &messaging.AndroidNotification{
				ChannelID: "channel id",
			},
		},
	}

For Webhook:

      {
           "id": "0x3f7d49622ac5d5c6c5feb3fe41921aad2b09375ad7b4cc2293a0554da47ca790",
           "from": "0x9eD416d3Cd2ab36164eFBF857e09A62Da67C3CAb",
           "to": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
           "fee": "20737885291200000",
           "date": 1614088825,
           "status": "completed",
           "type": "send",
           "value": "0",
           "description": "Sent 15000 USDT",
           "sent": [
               {
                   "name": "Tether USD",
                   "symbol": "USDT",
                   "token_id": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                   "decimals": 6,
                   "value": "15000000000"
               }
           ]
       }


### Ecosystem Fit
The Unmarshal Notifications will be real time and in detailed format and the Application developers  can customize the notifications and build their own template of notification. 
The application users will have to submit their needs as to what notifications they would like their customers to see and Unmarshal will be able to provide a custom made Notification solution which the apps will just have to plug into their system. 
By using unmarshal’s solutions the app developers will be able to save a lot of time and effort and concentrate on other technical aspects of their apps and leave their notification implementation to us. 
We already have a working prototype for Binance Smart chain which would enable users to experience the notifications right away for the below transactions the users make 
Send, Receive, Add / Remove Liquidity, Stake / Unstake & Exchange. 

Aurras will be a part of the notification architecture where they will be able to read the events on blockchain and push it to the broker service. There needs to be another layer of work involved before the user will be seeing the notifications. 
Unmarshal on the other hand will be able to deliver the notifications directly to the mobile phones or apps of the users. 
 

## Team :busts_in_silhouette:

### Team members
* Manohara Kolagondanahalli
* Shivakumar H G
* Abhishek Sangwan
* Santhosh K S

### Contact
* **Contact Name:** Manohara K
* **Contact Email:** contact@unmarshal.io
* https://unmarshal.io

### Legal Structure
* **Registered Address:** 3 Fraser Street #05-25 Duo Tower, Singapore 189352
* **Registered Legal Entity:** EUCRYPT GLOBAL PTE. LTD.

### Team's experience
Unmarshal team has 25 years of engineering experience collectively. Some of us have worked in high scale and critical services in companies like Grab, Gojek and Swiggy. 
* Manohar was working as Engineering owner in Allocation service which was most critical team and his service has 100% uptime for 3years. 
* Shiva Kumar was team lead and lead consultant with Gojek and Navi

### Team Code Repos
* https://github.com/eucrypt
* https://github.com/manoharaksh
* https://github.com/shivhg
* https://github.com/manoharkshetty

### Team LinkedIn Profiles
* https://www.linkedin.com/in/manoharak
* https://www.linkedin.com/in/shivhg/
* https://www.linkedin.com/in/thestrongenough/
* https://www.linkedin.com/in/santhosh-k-s-875a96163/

## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimated Duration:** 2 Months
* **Full-time equivalent (FTE):**  2 FTE
* **Total Costs:** $30,000

| Priority | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Setup | Setup codebase, deployment infrastructure. 
| 1 | Transaction listening  | Listen to blockchain transactions via websocket preferably own node to avoid dependency on the public nodes  |
| 2 | Kafka integration | Integrate with kafka to avoid the data loss during deployments and orderly processing of the events. This kafka stream can be exposed to client as well as it will be useful for applications such as bridges  |
| 3 | Transaction decoder | Extract the transaction information such as type(send, receive, approve etc) using the contract ABI decoding, differentiate the sent and received tokens and token transfers from the transaction logs and receipts  |
| 4 | Firebase integration for demo app | Add framework to integrate with firebase for clients - with firebase we can directly send notifications to client apps. No work required by clients |
| 5 | Webhook integration for demo app | Add framework to integrate with webhooks for any client - with this clients need to handle the logic to send notification or handle it in their end |
| 6 | Client integration handbook | Documentation for integration with Unmarshal notification |
| 7 | subscription API  | Subscription API to subscribe for price trend, protocol volume etc. This will be limited by topics supported in our system |
| 8 | API SDK for subscription | Notification subscription API SDK - single subscription, bulk subscription, It will be powered by a light weight rest API that takes information such as address to track, specific events and client id to identify the notification avenue |
| 9 | Dex integration for new pair | Unmarshal's USP is decoding and transformation of data into business context, instead of providing raw transaction, Unmarshal converts transaction into business context and users subscribe to just a specific business context such as new pair  |
| 10 | Protocol(polkaswap) integration | Integrate with polkaswap to send notification on add / remove liquidity for subscribers |
| 11 | Protocol(polkaswap) integration - 2 | Integrate with dex to send notification on new liquidity pair for subscribers |
| 12 | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 13 | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |


### Milestone 1 — Notification v1
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Setup | Setup codebase, deployment infrastructure. 
| 1 | Transaction listening  | Listen to blockchain transactions via websocket preferably own node to avoid dependency on the public nodes  |
| 2 | Kafka integration | Integrate with kafka to avoid the data loss during deployments and orderly processing of the events. This kafka stream can be exposed to client as well as it will be useful for applications such as bridges  |
| 3 | Transaction decoder | Extract the transaction information such as type(send, receive, approve etc) using the contract ABI decoding, differentiate the sent and received tokens and token transfers from the transaction logs and receipts  |
| 4 | Firebase integration for demo app | Add framework to integrate with firebase for clients - with firebase we can directly send notifications to client apps. No work required by clients |
| 5 | Webhook integration for demo app | Add framework to integrate with webhooks for any client - with this clients need to handle the logic to send notification or handle it in their end |
| 6 | Client integration handbook | Documentation for integration with Unmarshal notification |


### Milestone 2 — Additional features
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 7 | subscription API  | Subscription API to subscribe for price trend, protocol volume etc. This will be limited by topics supported in our system |
| 8 | API SDK for subscription | Notification subscription API SDK - single subscription, bulk subscription, It will be powered by a light weight rest API that takes information such as address to track, specific events and client id to identify the notification avenue |
| 9 | Dex integration for new pair | Unmarshal's USP is decoding and transformation of data into business context, instead of providing raw transaction, Unmarshal converts transaction into business context and users subscribe to just a specific business context such as new pair  |
| 10 | Protocol(polkaswap) integration | Integrate with polkaswap to send notification on add / remove liquidity for subscribers |
| 11 | Protocol(polkaswap) integration - 2 | Integrate with dex to send notification on new liquidity pair for subscribers |
| 12 | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 13 | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |

## Future Plans
* Add notifications for all para chains
* Add support for localisation
* Add support for other third party message delivery services 

## Additional Information :heavy_plus_sign:

* Unmarshal smart notifications in already in testing phase for Binance Smart Chain. 
We will adding support for whole polkadot ecosystem. 

decoder: http://decoder.unmarshal.io/
Documentation: http://docs.unmarshal.io/
Notification service: https://docs.google.com/document/d/1jfyrCB6WanbTqrR2MQfYDBVv9ANRQBSyuFxknsEijVg/edit?usp=sharing
Website: http://unmarshal.io/
