# Open Grant Proposal
* **Project Name:** Iclub network - A Cross Chain Interactive Video Communication Network
* **Team Name:** iclub.network
* **Payment Address:** BTC: 3MpN6EXtkCa1mFyhmgyqYvTrkBfZnMZv9T or DAI: 0x6521ccf8362f7eb0b3047655c877cefb66cdf316


## Project Overview :page_facing_up: 

### Overview

Please provide the following:
  * A brief description of the project.
We are applying this grant to enable real time messaging and video chat available to both Polkadot and Ethereum users based on Club. 
Club is an interactive real time video protocol and network which can be used in most blockchain today to provide real time video communication for the wallet users and blockchain developers.
Club is already implemeneted on Ethereum and ElastOS.
We are going to provide an implementation of cross chain real time vedio chat with the support of Polkadot Address and Ethereum address.
We will also implemnet the most wanted billing fucntion of Club in Substrate. 
  * Club is a decentralized interactive video network which enables real time video communication between blockchain users. Club includes a web, IOS and android client for end user and the Club network could be the backbone for third party applications.
  * By integrating WebRTC、DID(Decentralized IDentity) and decentralized peer to peer mesaging technologies (Whisper), Club enables real time audio/vedio communication and file transfer between wallet users.
  * Club provide the applicaton developer the missing parties of WebRTC to build a realtime video communication application, such as 
  the signalling layer for WebRTC, the media server, the account system of DID and peer to peer messaging found in most blockchain project.
  * Offline messaging notification for mobile application is another built-in features in CLUB protocol.
  * Beyond cross chain transaction, Club provides cross chain text messaging and realtime video communication.
  * An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
     + As Gavin Wood pointed out messaging is one of the four components to the post-Snowden Web
    (static content publication, dynamic messages, trustless transactions and an integrated user-interface).
     + As Gavin suggested an identity-based pseudonymous low-level messaging system is used for communicating between people on the network.
      It uses strong-cryptography in order to make a number of guarantees about the messages; 
      they can be encrypted with an identity's public key in order to guarantee only that identity can decode it. 
      They can be signed by the sender's private key to guarantee that it does indeed come from the sender and provide the receiver with a secure receipt of communication. A shared secret can provide the opportunity to communicate securely, including between groups, without the necessity of proof of receipt.
     * Moreover, realtime vedio communication can be built on top such kind of messaging protocol and WebRTC.
     * We will support the address in Substrate/Polkadot as the identity of the messaging part. They Poldadot address should be able to talk to Ethereum address.
     * Since the signaling protocol is missing in WebRTC, We are going to define the signaling protocol and send signaling messages over the peer to peer messaging protocol provided by Ethereum/Whisper.
     + The CLUB network will not be owned by any individuals or third party.
     Instead, we want to reply on the community of Polkadot to grow our network.
     The CLUB network relies on multiple individuals running CLUB nodes over publicly available infrastructure.
     CLUB nodes can run on the substate nodes in multiple devices and operating systems over the Internet.
     Beyond the Polkadot and Substrate, CLUB provides the important features neeed by distributed application.
     + The CLUB token will be issued on Polkadot. It will be used as the incentive to run CLUB node as well as the use of CLUB.
    Nodes participating in the CLUB network get paid for their services via blockchain payment channels in the form of CLUB tokens. 
    These CLUB tokens can be used within the CLUB network as a means of payment for requesting services from other CLUB nodes.

  * An indication of why your team is interested in creating this project.
   * Messaging is needed in every application, so does in cryto world. 
   Just like  most people still reply on centralized exchanges to trade cryptocurrencies,,
   but the crypto world is still using centralized communication tools owned by single platform and commercial company, such as Facebook, Twitter and WeChat. 
   * Also encouraged by uniswap which is pure decentralized exchange built on Ethereum, we are going to build decentralized video chat software 
   on top of the existing peer to peer network exsited in most blockchain.
   * Video Communication is hard to many developers.\
   Video SDK/API to simplied the development process is matured market for tradintion software industry, but it is not found in any messaging protocol in blockchain area such as hopr, status, ally/scrumble, etc. 
   * The user base of crypto currency is growing all the time and the real time text/audio/video function should be the basic function in most wallet and exchange app, it is at least hundreds of thousands or even millions, it is big enough for us at this stage. 
   * Technically, the messaging technologies is the underline technologies in every blockchain such as Substrate in Polkadot, 
    Whishper in Ethereum, Carrier in Elastos carrier and it can be used to implement peer to peer messaging.
   Based on cryptography, smart contracts, and peer-to-peer communication technologies, it is possible to build a decentralized real time video communication system with ensorship-resistance.

The benifits of a decentralized video communication platform is obviously:
  * Comparing to most video chat app today which is centralized, there is no central account system for users, 
  it uses DID(Decentralized Identifier) as the indentity and signature to secure.  
  There is no server either, it will be the blockchain nodes for the messaging relay and route, so there is no service nor maintenance team needed to keep the system running. 
 + There is no single point failure.
  * It is not owned by any commercial organiztion, it is a decentralized, censorship free realtime vedio communication network with enconomic incentives on blockchain. 
 + Privacy, Security and Censorship-resustance：
  Censorship-resistance is considered to be one of the main value propositions of Bitcoin. 
  The idea is that no nation-state, corporation, or third party has the power to control who can use the network. 
  Censorship-resistance ensures that the laws that govern the network are set in advance and can’t be retroactively altered to fit a specific agenda.


### Project Details 
We expect the teams to already have a solid idea about the project's expected final state.

Therefore, we ask the teams to submit (where relevant):
* Mockups/designs of any UI components
* API specifications of the core functionality
* An overview of the technology stack to be used
* Documentation of core components, protocols, architecture etc. to be deployed
* PoC/MVP or other relevant prior work or research on the topic
* Mockups/designs of any UI components
  https://www,iclub.network/
  https://t.callt.net/
* API specifications of the core functionality
  + Web, IOS and Android CLUB SDK
  + Android CLUB SDK is a java api set for webrtc connection using peer to peer messaging protocol. 
With the Android CLUB SDK, it is possible to build voip applications for mobile phones, tablets, wearables, TVs and car media systems 
that run on the Android Operating System (OS) while utilizing the functionalities of the Elastos Carrier and WebRTC protocol.

  * WebRTC replys on sigaling protocol to connect peers to build WebRTC connection.
We define and implement a simple protocol to build audio/vedio conversation and send data between peers.
This protocal can be implemented by underline peer to peer messaging protocol such as mixnet, tor, carrier in Elastos and whisper in Ethereum. 
In this project we will use Whisper to implement the protocol.
It can be implemeneted using the function provided by substrate as well.

### WebRTC Sigaling Protocol

| type               | sdp      | candidates | reason   | options  |
|--------------------|----------|------------|----------|----------|
| offer              | required | -          | -        | required |
| answer             | required | -          | -        | -        |
| candidate          | -        | required   | -        | -        |
| removal-candidates | -        | required   | -        | -        |
| bye                | -        | -          | required | -        |

### Example
#### 1. Offer

```json
{
	"type":"offer",
	"sdp":"rtc_session_description_generated_by_webrtc",
	"options":["audio","video","data"]
}
```
### 2. Answer
```
{
	"type":"answer",
	"sdp":"rtc_session_description_generated_by_webrtc"
}
```
### 3. Candidate

```
{
	"type":"candidate",
	"candidates": [{
		"sdp": "candidate:684496083 1 udp 1685855999 112.65.48.165 17465 ...",
		"sdpMLineIndex": 0,
		"sdpMid": audio
	}]
}
```
### 4. Removal-Candidate

```
{
	"type":"remove-candidates",
	"candidates": 
	[
		{
			"sdp": "candidate:684496083 1 udp 1685855999 112.65.48.165 17465 ...",
			"sdpMLineIndex": 0,
			"sdpMid": audio
		}, 
		{
			"sdp": "rtc_candiate_desciption",
			"sdpMLineIndex": 0,
			"sdpMid": audio
		}, 
		...
	]
}
```
### 5. Bye

```
{
	"type":"bye"
	"reason": "reject"
}
```

### 6. Send Data by datachannel
```
{
	"fileId": UUID,  //created from the UUID, such as "E621E1F8-C36C-495A-93FC-0C247A3E6E5F"
	"index": Int, //当前发送文件的切片索引
	"mime": String, //Multipurpose Internet Mail Extensions，
	"data": String, //data Base-64 encoded string.
}
```

### An overview of the technology stack to be used
+ Account/User System: DID is used as the address of the instant messenger, it is generated on the user's device in stead of central server.
It can also be any address in a Polkadot or Ethereum wallet and it need the signature of the walller.
+ Audio/Video: The Audio/Vedio and Data communicate is done by WebRTC, which is an open source project from Google.
With WebRTC, you can add real-time communication capabilities to your application that works on top of an open standard.
 It supports video, voice, and generic data to be sent between peers, allowing developers to build powerful voice- and video-communication solutions. 
 + The technology is available on all modern browsers as well as on native clients for all major platforms. The technologies behind WebRTC are implemented as an open web standard and available as regular JavaScript APIs in all major browsers. For native clients, like Android and iOS applications, a library is available that provides the same functionality. The WebRTC project is open-source and supported by Apple, Google, Microsoft and Mozilla, amongst others.
+ WebRTC does not work alone and it needs a signaling protocol to help the peer to find each other
and build the initial connection.
+ Messaging: There is peer to peer messaging system in most blockchain system so we can use it to be the signaling platform for WebRTC peers.. In this project we will use whisper as the protocol to send signaling messaing for setup call.
+ Billing: smart contracr and tokens
 
### Core components, protocols, architecture etc. to be deployed
### 1. Messaging network
#### requirement of instant messaging 
1. broadcasting
2. offline messaging
3. online peer to peer messaging
4. realtime audio/vedio communication
5. file transmition 

While Ethereum Whisper support number 1 and 2 in the above list; 
Number 3 needs something like ElastOS Carrier or something similar, such as lower API like The RLPx Transport Protocol.
Peer to peer offline messaging and storage server can be implemented on top of Number 3.
Number 4 and 5 is handled by WebRTC while the WebRTC connection is setup by on line peer to peer messaging.

### 2. Turn server
The term stands for Traversal Using Relay NAT, and it is a protocol for relaying network traffic.
### 3. Push Notification Server
Since most apps are forced to be offline when it is switched to background, we need to use
the messaging channel of the Phone device. On IOS it is APNS and Voice Push Notification service,
on Android it is called FCM, Firebase Cloud Messaging 
### 4. Token
The Club token is a modular utility token that fuels the Club Chat network. 
This includes a Decentralized Push Notification and Advertise Market, Governance of the Club client, Incentives of Messaging, Turn Server and Notification Nodes.
the Club Token will leverage our economic attention to build the network effect of an open platform.

### 5. App
#### App for IOS and Android, a web client with a metamask plugin or dapp in wallet which supports WebRTC.
+ Those app is heavyly reply on WebRTC. The WebRTC standard covers, 
on a high level, two different technologies: media capture devices and peer-to-peer connectivity.
Media capture devices includes video cameras and microphones, but also screen capturing "devices".
 For cameras and microphones, we use navigator.mediaDevices.getUserMedia() to capture MediaStreams. 
 For screen recording, we use navigator.mediaDevices.getDisplayMedia() instead.
+ The peer-to-peer connectivity is handled by the RTCPeerConnection interface. 
This is the central point for establishing and controlling the connection between two peers in WebRTC.
+ The App replies on peer to peer messaging to communication;
+ The App is offline for most of time and it replies on the offline push messaging to get online when needed.


### Ecosystem Fit 
+ There are many project in the space of decentralized communication, such as status, topnetwork, yeecall.
While most projects are building the infrastructure from ground and replying on communities to provide different kinds of communication related application,
it still very hard to implement an instant messenger since most backend features required by an instant messenger are still missing.
+ We are going to build an easy integrated decentralized messaging app for end user and api for developer in cryto world by integrating many technologies in different blockchain.
we want to serve the whole blockchain world. 

## Team :busts_in_silhouette:


### Legal Structure 
* **Registered Address:** Address of your registered legal entity, if available. Please keep it on one line. (e.g. High Street 1, London LK1 234, UK)
* **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team members
* Name of team leader: Wei Li, Master Degree of Computer Science, Nanjing University
* Names of team members: Yi Wang, Master Degree of Computer Science, University of Chinese Academy of Sciences
* Names of team members: Xianghuan Li, BS of Computer Science, Shanghai University
* Names of team members: Tomas Shao, BS of Computer Science, Southwest Minzu University

### Contact
* **Contact Name:** Wei Li
* **Contact Email:** liwei@callus.app
* Website https://www.iclub.network

### Legal Structure 
* **Registered Address:** 
Pudong Software Park
Suite 11-205, 498 Guoshoujing Road,
PuDong, 
Shanghai, PRC 201203
* **Registered Legal Entity:** 
Shanghai Allcom Network Technologies

### Team's experience
+ Wei Li,over 20 years experiences in email,voip and instant messaging software development.
+ Wang Yi,5 years experiences in blockchain technoliges and 2 years in RUST development.
+ Xianghuan Li, 7 years experiences in fullstack software development, Java, Javascript, Rest, Android & IOS, Voip, SIP
+ Tomas Shao, 10 years experiences in IOS development, Swift, Objective-C, C/C++ 
+ Experience in WebRTC and Blockchain:
  + WebRTC Java/Android SDK: https://github.com/elastos/Elastos.NET.WebRTC.Android.SDK/releases/tag/release-v1.0.0 
  + WebRTC Swift/iOS SDK: https://github.com/elastos/Elastos.NET.WebRTC.iOS.SDK/releases/tag/release-v1.0.0 
  + WebRTC with metamask: https://www.callpass.cn/metamask
+ Experience in Rust
  + https://github.com/AngoraFuzzer/Angora 
 
### Team Code Repos
* https://github.com/clubnetwork
* https://github.com/allcomsh
* https://github.com/gxyzwangyi
* https://github.com/Tomas-Shao

### Team LinkedIn Profiles
* https://www.linkedin.com/in/wei-li-24329451/
* https://www.linkedin.com/in/patrick-wang-b1950678/

## Development Roadmap :nut_and_bolt: 

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions it should be clear how the project is related to Substrate and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their roadmap as 1 month = 1 milestone. 

For each milestone:
* Please be sure to include a specification of your software. Treat it as a contract - the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* Please include total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project. 
* Please indicate the milestone duration, as well as number of Full-Time Employees working on each milestone, and include the number of days along with their cost per day.
* Deliverables 0a-0d are mandatory and should not be removed, unless you explicitly specify a reason within the PR's `Additional Notes` section (e.g. Milestone X is research oriented and as such there is no code to test)

### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  6 FTE
* **Total Costs:** 30,000 DAI

### Milestone 1 Web Realtime Video Chat using Substrate address
* **Total Estimated Duration:** 1/2 month
* **Full-time equivalent (FTE):**  1
* **Total Costs:** $5,000
* Deliverables: Web browser with wallet plugin which can demostrate the audio/vedio communication
* Specification:
* support vedio call using SS58 address format and extrinsic signature and verification
* bind Poldadot address and whisper address
* still use Whisper as the messaging platform
* Programming Language: Javascript, Rust
* Web SDK
* Web Demo

### Milestone 2 Implement crosschain WebRTC singaling messaging 
* **Estimated Duration:** 1/2 month
* **FTE:**  1
* **Costs:** $5,000
* **Deliverables:** Vedio Call between Polkador wallet and Ethereum wallet
* **Specification:**
* Implement address registration and lookup function for readable name, Poldadot address and Ethereum address
 which convert the address or name to the whisper address
* Programming Language: Solidity, Javascript, Rust
 

### Milestone 3 IOS APP Realtime Video using Substrate address
* **Total Estimated Duration:** 1/2 month
* **Full-time equivalent (FTE):**  1
* **Total Costs:** $5,000
* Deliverables: IOS and Android APP which can demostrate the audio/vedio communication
* Specification:
* support vedio call using SS58 address format and extrinsic signature and verification
* bind Poldadot address and whisper address
* still use Whisper as the messaging platform
* Programming Language: Solidity, Javascript, Swift
* IOS SDK
* IOS demo


### Milestone 4 Android APP Realtime Video using Substrate address
* **Total Estimated Duration:** 1/2 month
* **Full-time equivalent (FTE):**  1
* **Total Costs:** $5,000
* Deliverables: IOS and Android APP which can demostrate the audio/vedio communication
* Specification:
* support vedio call using SS58 address format and extrinsic signature and verification
* bind Poldadot address and whisper address
* still use Whisper as the messaging platform
* Programming Language: Solidity, Javascript, JAVA
* Android SDK
* Android demo

### Milestone 5 A token and smart contract system immplemented in Substrate 
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** $10,000
* Deliverables: White paper of the token destibution, token and smart contact
* Specification:
* issue of CLUB tokens
* smart contract for user behavior rugulation which can be used to prohibit spam or other bad action; 
* smart contract for miner incentives which will be paid to run messaging, notification and turn server;
* Programming Language: Solidity, Javascript, Rust


## Future Plans
In the next two years, We are going to implement the decentralized messaging protocol and build the messaging network and an instant messaging app on top of it(a dicentralized Zoom kind of app) for cryto world and we will continue to improve the user experience.

It will also be a real time communication SDK (a dicentralized communication development toolkit like Twillio, Agora, Jigou, a communication version of Chainlink) for app application development, especially wallet application.

## Additional Information :heavy_plus_sign: 
* What work has been done so far?
  + We have developed an IOS and Android app with Audio and Vedio chat. Those apps relies on Elastos's carrier as backend protocol for peer to peer signaling messaging.
  + We have integrate WebRTC Audio/Vedio communication with metamask wallet. 
https://www.callpass.cn/metamask
  + We have implemetd peer to peer and group text messaging chat and video chat using Ethereum's whisper and swarm.
https://t.callt.net
It relys on a private side chain to do messaging routing and offline messaging.
* Are there are any teams who have already contributed (financially) to the project?
  + No
* Have you applied for other grants so far?
  + No