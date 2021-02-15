
# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** Unmarshal Smart Notifications
* **Team Name:** Unmarshal
* **Payment Address:** 0xf1be700d7d7c446a0bd41b35098fe44fd488cc4a

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

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


### Ecosystem Fit
We didn't find anyone with Smart Notifications in Polkadot ecosystem. 

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

### Milestone 1 Example — Implement Substrate Modules
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Setup | Setup codebase, deployment infrastructure. 
| 1 | Transaction listening module | Add module to listen to chain transactions |
| 2 | Transaction decoder module | Add module to decode the chain transactions |
| 3 | Firebase integration for demo app | Add framework to integrate with firebase for any client |
| 4 | Webhook integration for demo app | Add framework to integrate with webhooks for any client |
| 5 | Client integration handbook | Documentation for integration with Unmarshal notification |


### Milestone 2 Example — Additional features
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 6 | Dex integration for new pair | Integrate with dex to send notifications on new pairs |
| 7 | Protocol(polkaswap) integration for new liquidity pairs | Integrate with dex to send notification on liquidity |
| 8 | subscription module | Subscription module to subscribe to price trend, protocol volume etc |
| 9 | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 10 | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |

## Future Plans
* Add notifications for all para chains
* Add support for localisation
* Add support for other third party message delivery services 

## Additional Information :heavy_plus_sign:

* Unmarshal smart notifications in already in testing phase for Binance Smart Chain. 
We will adding support for whole polkadot ecosystem. 
