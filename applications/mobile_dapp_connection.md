# Polkadot/Substrate dApps/Wallet Connection using Tesseract

## Project Description

The goal of this proposal is to **enhance the usability and security of Polkadot/Substrate native mobile applications** (the ones in AppStore and Play Market). By enabling the apps to connect to the wallets when a signature for a transaction is needed, we propose to get rid of a cumbersome and potentially insecure private key handling burden.

To achieve this goal, we propose to implement Tesseract (dApps/wallets connection) protocol for Polkadot/Substrate.

### Why Tesseract is good for the ecosystem

iOS and Android are (arguably) the most popular app platforms today. With smooth experience and high security provided by Tesseract’s capability to eliminate private key handling, the dApps could more easily match the expectations of an application from AppStore or PlayMarket, thus leading to lesser friction in dApps adoption.

### How Tesseract integrates into Substrate/Polkadot

Once implemented, any Polkadot/Substrate native mobile dApp developer will be able to add Tesseract support with just several lines of code.

As an example, this is how our integration currently works in Swift for the Ethereum network:

```swift
import Tesseract

// Check that we have a wallet installed. You should handle this situation in your app.
guard Tesseract.Ethereum.isKeychainInstalled else {
    fatalError("Wallet is not installed!")
}

// Our HTTP RPC URL. Can be Infura
let rpcUrl = "https://mainnet.infura.io/v3/{API-KEY}"

// Creating Web3 instance. Try to reuse the existing instance of Web3 in your app.
let web3 = Tesseract.Ethereum.Web3(rpcUrl: rpcUrl)
```

For more information, please check: <https://github.com/tesseract-one/Tesseract.swift>

Our current implementation of the reference wallet for iOS, supporting Ethereum can be found here: <https://apps.apple.com/us/app/tesseract-wallet/id1459505103>. We plan to approach Tesseract supporting Polkadot wallet with a consequent separate proposal. It’s either going to be a reference wallet implementation or integration with some existing Polkadot wallets.

### How is Tesseract different?

Since the deliverables of this proposal are mobile-specific, but Tesseract is so much more than just a solution for mobile dApps and we’d like to share this aspect as well. We've split this section into two parts: the first answering the question specifically about mobile and the second covering a more general comparison of Tesseract's approach.

#### How is Tesseract different on mobile?

The short answer to this question is that Tesseract can provide a potentially more familiar mobile UX due to deeper integration with the underlying OS, by utilizing OS native IPC (Inter-Process Communication) protocol.

To demonstrate the advantages of our approach, let’s first briefly cover the other options available:
* **Key inside the dApp** - not really an external signature provider, as the app manages the private key inside. Worth mentioning, as quite a number of native mobile dApps use this approach. The user just has to copy the private key into the dApp. Simplest, but raises security concerns and the usability is questionable.
* **Centralized proxies** - centralized custodial wallet solution for decentralized applications. Example: Fortmatic
* **URLs (aka deep-linking)** - allows jumping between applications on smartphones using special URLs. This way a dApp can switch to the wallet by forming a request in a URL form and receive a response from the wallet switching back the same way. This approach works to a limited extent, suffering from routing problems (especially on iOS) and can’t support multiple wallets without a 3rd party router (or a maintained list of supported wallets matched to their unique URLs). On iOS, if more than one application can open a URL, the app is chosen randomly which rises a security concern. From the UX standpoint, it looks like the apps are switching back and forth. Deep-linking is sometimes used together with relays (see below).
* **Centralized signing relays** - allows a mobile wallet to sign transactions using centralized servers as connection relays. Usually works together with a deep-linking handshake, inheriting its issues and behavior (iOS routing issues, app switching UX). Also, such a solution can’t be considered optimal, due to the fact that two apps running on the same device have to communicate through a server somewhere on the internet. Examples: WalletConnect, WalletLink
* **Decentralized signing relays** - this approach works similarly to Centralized signing relays, except that p2p mesh is used instead of a centralized relay server. Examples: Beacon

In contrast, Tesseract’s transport on smartphones is based on another technology, deeply integrated into the underlying OS - inter-process communication (IPC). This way we have managed to achieve a convenient UX. The behavior is centered around modal screens, which are quite widely used in various applications (please, check our demo: <https://drive.google.com/file/d/17YMdJS9CH6SXqP-YPUMKbm0BWdAE2Rx3/view>). There is no central authority and the data goes through the shortest route - communication is done point to point between two processes running on the same device. It works equally well on both iOS and Android without any dApp/Wallet routing issues (the user can pick the wallet to use for a signature). As for security - after extensive testing, we have not found any ways to hijack a transaction so far.

The table below summarises our comparison considerations, demonstrating why we have decided to utilize the IPC protocol instead of something else:

| Transport\Criteria           |                                                              Universal (iOS and Android)                                                              |                                                Secure                                               |                      Convenient (from a usability standpoint)                     |           Decentralized          |                     Optimal (shortest data path)                     |
|------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|:--------------------------------:|:--------------------------------------------------------------------:|
| Key inside the dApp          |                                                                           ✅                                                                           |                     ❌ because of giving away the private key to a 3rd party dApp                    |                     ❌ the user has to copy/paste private keys                     |                 ✅                |                                   ✅                                  |
| Centralized proxies          |                                                                           ✅                                                                           |                       ⚠️ controversial, due to the inherent custodial mechanism                      |                                         ✅                                         |        ❌ custodial wallet        | ❌ data has to go through the internet to facilitate a local transfer |
| URLs                         | ⚠️ has routing issues on iOS. Can be solved either by maintaining compatible wallets list (in code? On a server?) or through a 3rd routing application | ⚠️ Due to random selection of the app matching the URL on iOS has a potential spoofing vulnerability |                         ✅ explicit app switching behavior                         |                 ✅                |                                   ✅                                  |
| Centralized signing relays   |                                               ⚠️ inherits deep-linking issues as it’s used for handshake                                               |                      ⚠️ inherits deep-linking issues as it’s used for handshake                      | ✅ same as deep-linking (if the deep linking handshake is used) or manual (if not) | ❌ uses central servers as relays | ❌ data has to go through the internet to facilitate a local transfer |
| Decentralized signing relays |                                               ⚠️ inherits deep-linking issues as it’s used for handshake                                               |                      ⚠️ inherits deep-linking issues as it’s used for handshake                      | ✅ same as deep-linking (if the deep linking handshake is used) or manual (if not) |                 ✅                | ❌ data has to go through the internet to facilitate a local transfer |
| IPC (Tesseract)              |                                                                           ✅                                                                           |                                                  ✅                                                  |                  ✅ modal screens, OS integrated wallet selection                  |                 ✅                |                                   ✅                                  |

#### How is Tesseract different beyond mobile?

Tesseract protocol was designed adaptable to existing and new potential use cases through flexibility provided by multi-transport (IPC, socket, QR-code, etc.) architecture, in contrast to its single-transport protocol counterparts. While some transport protocols can shine in one scenario, a totally different approach may be needed for another. There are a number of known (and probably quite some yet-to-be-discovered) use cases of how dApps and wallets may need to interact. Some common examples are:
* A dApp and a wallet run on the same smartphone
* A dApp and a wallet run on the same desktop
* A dApp runs on the desktop and a wallet runs on a smartphone
* etc.

Here is a short table, that summarises the comparison of some common transport protocols versus the use cases. While there are way more use cases than the table covers, the ones included are sufficient to showcase that neither transport is capable of covering all the use cases by itself. Also, here we show only transports that are not compromising decentralization.

| dApp                               | Mobile                                                                                                                                                                        | Desktop                                                                                                                                                     | Desktop                                                                                                                                                                            | Mobile                                                                                                                                            |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Wallet                             | Mobile                                                                                                                                                                        | Mobile                                                                                                                                                      | Desktop                                                                                                                                                                            | Desktop                                                                                                                                           |
| Description                        | A very common scenario, when both the dApp and the Wallet run on the same smartphone.                                                                                         | Another common scenario, when a dApp runs on a desktop computer and the wallet is on the smartphone.                                                        | A scenario when a user needs to run a dApp and the wallet on the same desktop computer.                                                                                            | This case covers a dApp running on the phone and the wallet on a desktop.                                                                         |
| IPC                                | ✅ Direct dApp/Wallet interaction. Native platform’s look and feel.                                                                                                            | ❌ By definition works only on the same device.                                                                                                              | ✅ Direct dApp/Wallet interaction.                                                                                                                                                  | ❌ By definition works only on the same device.                                                                                                    |
| Deep-link                          | ⚠️ Direct dApp/Wallet interaction. Apps switching behavior. Has routing issues on iOS.                                                                                         | ❌ By definition works only on the same device.                                                                                                              | ⚠️ Can work to an extent how well the OS supports deep linking.                                                                                                                     | ❌ By definition works only on the same device.                                                                                                    |
| Network (direct socket connection) | ❌ Potentially can work on Android, especially with a deep-linking handshake. Problematic on iOS: background sockets are against Apple guidelines.                             | ✅ Works best when both devices are on the same WiFi. Needs a QR-code or NFC handshake.                                                                      | ✅ Works well as the desktops don’t set any limitations on sockets in the background. To avoid routing problems can be used together with a separate handshake (i.e. deep-linking). | ✅ Works best when both devices are on the same WiFi. Needs a QR-code or NFC handshake.                                                            |
| Network (p2p)                      | ⚠️ Can work, though requires an internet connection for communication that is actually between apps on the same device, which is not ideal. Requires a deep-linking handshake. | ✅ Works best for situations when devices are not in close proximity and don’t share the same WiFi. Needs a QR-code or NFC handshake.                        | ⚠️ Can work, though requires an internet connection for local communication, which is not ideal.                                                                                    | ✅ Works best for situations when devices are not in close proximity and don’t share the same WiFi. Needs a QR-code or NFC handshake.              |
| QR-code                            | ⚠️ Can potentially be made to work, though would require image copy-pasting, which is not an ideal UX.                                                                         | ✅ Best use - a handshake mechanism for another transport. Even though technically it can work by itself if both devices have cameras, it’s not an ideal UX. | ⚠️ Can potentially be made to work, though would require image copy-pasting, which is not an ideal UX.                                                                              | ⚠️ While it technically can work, might provide an awkward experience to the user turning screens of large devices into the cameras of each other. |
| Bluetooth/NFC                      | ❌ By definition works only with separate physical devices.                                                                                                                    | ✅ Works best for devices in close proximity, especially if a shared WiFi is not an option.                                                                  | ❌ By definition works only with separate physical devices.                                                                                                                         | ✅ Works best for devices in close proximity, especially if a shared WiFi is not an option.                                                        |

Since none of the transport protocols are universal enough to be an optimal choice for every use case, we’ve designed Tesseract to be non-constrained by this factor. Instead, Tesseract can use any implemented transport protocol, based on the scenario and/or the user’s choice, due to its layered architecture. The following diagram demonstrates a simplified architecture of the Tesseract protocol:

![Architecture of Tesseract](https://drive.google.com/uc?id=1Fmad82-5ZRYi-bhD12RMhfYotrWwPrVF)

This way, Tesseract can potentially handle any known or future use case to the extent the most matching transport can, which is not an available option for the single-transport bound solutions.

### Why our Team is interested

As we indicated in our first proposal, which was awarded and currently coming to the end ([Swift API](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/swift_api.md)), that our long term goal was to bring Tesseract support to the Polkadot community.

The Swift API library from our first proposal was an essential step for us, as Swift is the programming language of iOS and we need this to implement Tesseract support for Polkadot/Substrate on iOS. Since we are finishing with the first grant application, we have prepared the current proposal to continue the integration process of Tesseract into Polkadot/Substrate ecosystem.

## Team members

* Daniel Leping, @dileping on GitHub, CEO
* Yehor Popovych, @ypopovych on GitHub, CTO

## Team Website

<https://tesseract.one>

## Team's experience

Our team has been building blockchain applications since 2017 and has worked together on [Tesseract](https://tesseract.one/) since 2018. The company got funded by [SOSV](https://sosv.com/) and [Emurgo](https://emurgo.io/) in 2019 and took training in the [dlab acceleration program](https://dlab.vc/).

This is our second grant application for Polkadot. Previously, we were awarded to build [Polkadot/Substrate Swift SDK](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/swift_api.md).

Prior to blockchain technology, we had a wealth of experience in Swift, building applications, and middleware. The most noticeable projects are [Swift Express](https://github.com/crossroadlabs/Express), [Reactive Swift](https://github.com/reactive-swift).

The team has a 10-year history of working together, delivering various solutions of high complexity, including the mentioned above Swift Express and Reactive Swift, Cross++ ( cross-platform framework in C++ that allowed to keep the app logic shared while providing the capability to use native UIs) and tens of the web, mobile, and server applications for customers from around the world including the US, EU, Israel, Australia, etc.

## Team Code Repos

* <https://github.com/tesseract-one>
* <https://github.com/crossroadlabs/Express>
* <https://github.com/reactive-swift>

## Team LinkedIn Profiles

* <https://www.linkedin.com/in/danielleping/>
* <https://www.linkedin.com/in/yehor-popovych/>

## Tesseract Overview

The main goal of the Tesseract protocol is to enable dApp developers to provide a smooth and easy-to-understand user experience without compromising privacy and decentralization. Being a protocol that allows dApps to run without having access to the user's private key, Tesseract facilitates communication with the Wallets to request transaction and data signatures, thus providing a possibility to get rid of private key handling and having a look and feel of a “normal” application.

Before digging into the technical details, we want to share the “feel” of how the Tesseract-based dApps work: <https://drive.google.com/file/d/17YMdJS9CH6SXqP-YPUMKbm0BWdAE2Rx3/view>.

Such a user experience is achieved by having a seamless connection between the dApp and the wallet via Tesseract protocol.

Even though mobile is the first focus, Tesseract is not limited to being the mobile-only solution. It can maintain the connection between dApps and wallets working in various environments: smartphone, desktop, or even crossing the border of a single device (i.e. a dApp runs on the computer and the wallet is on the smartphone). This is achieved by having a layered architecture, that depending on the current environment, allows using a suitable transport protocol.

Tesseract protocol does not require a server to keep the keys. All the requests are done directly to the wallet application through IPC (if the device is the same) or other p2p communication protocol (if cross-device).

### Tesseract Architecture

Tesseract protocol is designed from the perspective of flexibility to make it adaptable for various scenarios. To achieve this goal, Tesseract uses a layered structure in its core and messages, that are enveloped according to the protocol layer.

The layers-based implementation is largely inspired by the OSI model (the model of network protocols).

#### Layered structure

As mentioned above, Tesseract has a layered structure. The basic three layers are:

* **Application Layer** - responsible for communication via specific protocol (i.e. Polkadot): transaction signing request, messages signing, public key requests - all here.
* **Presentation Layer** - provides enveloping of application-specific data into transportable packages. Defines text/binary packet structures transferrable via any underlying transport.
* **Transport Layer** - implementation of various transport types. IPC, p2p NFC, URLs, QR-codes, Bluetooth, etc.

##### Application Layer

The application layer can be anything, depending on the specific network plus Tesseract’s application-layer protocol for controlling connection establishment, checking the presence of other application-layer protocols, etc.

###### Tesseract application-layer protocol

Tesseracts’ application layer API is responsible for the following:
* Checking the presence of specific application-level protocol extensions
* Event subscription
* Inter-device connection initialization

###### Polkadot application-layer protocol

This is the part where Polkadot gets integrated:
* Signing data
* Signing transactions
* Public key querying

From the perspective of the dApp developer - nothing changes. The developer still uses the same familiar Polkadot APIs. The only difference is that when Tesseract is integrated as a signature provider, the transactions are rerouted to an external wallet for signing, and then sent back to the dApp.

##### Presentation Layer

The presentation layer defines how the data is enveloped to be properly delivered to the destination. The current implementation uses JSON text messages (the easiest to debug and has great support in various platforms). Binary is a future consideration.

##### Transport Layer

This layer is what makes Tesseract so flexible and allows it to work in various environments. It determines how exactly the dApp’s requests packets are transferred to the wallets and how the wallets reply. By having multiple options of the transports, the dApps can communicate to the wallets located anywhere: on the same device or not. Communication between devices can be pretty much anything that can transfer data (TCP/IP, Bluetooth, NFC, etc.). For the current proposal though, we want to limit the number of transport layers implementations to the following:
* iOS IPC
* Android IPC

By implementing the above transfer protocols, we already allow developers to create native mobile dApps that don’t have to carry a private key. While more protocols bring more value, this way we can release the first version sooner and go to market sooner with a concrete value proposition.

In the future, we plan to implement protocols that allow inter-device communication. Possible options for the near future include:
* QR codes/(NFC) - mainly for a persistent connection initialization, especially in trustless environments
* WebRTC - potentially the best option for browsers
* TCP/IP - easier to implement for desktop apps then WebRTC
* Bluetooth - browsers/between devices

### Tesseract Implementation

The implementation of Tesseract, pretty much like any other protocol, is a set of libraries that allow applications to communicate through it. In the case of Tesseract, there are two sets of libraries: one for the dApps (allows querying the wallets) and one for the Wallet (allows replying to the signing requests).

Currently, Tesseract has a partial implementation in Swift and works on iOS: <https://github.com/tesseract-one/Tesseract.swift>.

For the sake of having a single cross-platform implementation (fewer bugs, single codebase), we propose to implement it in Rust and add language-specific wrappers in the future (i.e. Swift, Java, ReactNative, etc.).

For the details on the proposed implementation, please refer to the *Development Roadmap* section.

## Development Roadmap

### Milestone 1: Cross-platform Tesseract Core in Rust

Duration: 8 weeks

This is the very foundation of the Tesseract protocol.

| Number | Deliverable                        | Specification                                                                                                                                                                                                 |
|--------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                            | Apache 2.0                                                                                                                                                                                                    |
| 0b.    | Documentation                      | Documentation for Tesseract Core:<br />1) overview with usage examples<br />2) messages and envelopes structures<br />3) APIs for application and transport level with examples                                     |
| 0c.    | Testing Guide                      | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                             |
| 0d.    | Docker                             | Due to the client-side nature of the deliverable, there is no need for a docker image.                                                                                                                        |
| 0e.    | Article                            | We will publish an article that explains the value Tesseract brings to the dApp developers and how Tesseract Core serves as a foundation for all future work.                                                 |
| 1.     | Architecture                       | Repository with overall code structure. Serves as a framework for all the further development. Defines the layered structure and contains all the code that makes the layers (details below) to work together |
| 2.     | Application-level framework        | Defines how application level calls are formed as data structures and passed down to the next layer                                                                                                           |
| 3.     | Messages and envelopes             | Implements serialization and envelopes for the app level structures + parsing and identification on the other side                                                                                            |
| 4.     | Transport-level framework          | Transport level abstractions, interfaces, data flow + transport initialization and selection logic                                                                                                            |
| 5.     | Transport-layer development APIs   | APIs for transport protocol (IPC, socket, etc.) development. Will have two transport types: persistent, single-shot                                                                                           |
| 6.     | Application-layer development APIs | APIs for application level stuff development (i.e. Tesseract handshaking and transport selection, Polkadot APIs)                                                                                              |

### Milestone 2: Platforms and Polkadot/Substrate Support

Duration: 6 weeks

This milestone is based on the foundation built in Milestone 1 and focuses on platform-specific transport extensions (iOS, Android) and Substrate integration.

| Number | Deliverable                                   | Specification                                                                                                                                                                                                                                                                                |
|--------|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                                       | Apache 2.0                                                                                                                                                                                                                                                                                   |
| 0b.    | Documentation                                 | We will provide:<br />1) README-type documentation for substrate-specific application-level APIs with examples<br />2) Rust API docs for substrate-specific application-level APIs<br />3) instructions on how to build and run the test apps for both iOS and Android                             |
| 0c.    | Testing Guide                                 | Substrate application layer will be fully covered by unit tests for both dApp and Wallet sides with a mock transport. For the IPC transport, we will provide test apps for both iOS and Android.                                                                                             |
| 0d.    | Docker                                        | Due to the client-side nature of the deliverable, there is no need for a docker image.                                                                                                                                                                                                       |
| 0e.    | Article                                       | We will publish an article that describes how to start using Tesseract in Substrate applications. It's a continuation of the article from Milestone 1 and will tease part3, promising more examples and details.                                                                             |
| 1.     | iOS IPC transport protocol implementation     | Implementation of IPC transport for iOS. Code is tested with small test app on an iOS device.                                                                                                                                                                                                |
| 2.     | Android IPC transport protocol implementation | Implementation of IPC transport for Android. Code is tested with small test app on an Android device.                                                                                                                                                                                        |
| 3.     | Substrate protocol specification              | Markdown-based documentation that provides details of workflows and messages required for proper substrate-based calls handling and transaction signing. This is separate from the main documentation and is a detailed description of the protocol to be implemented in the following step. |
| 4.     | Substrate protocol implementation             | 1) implementation of Substrate application layer<br />2) substrate-specific application-level APIs                                                                                                                                                                                             |

### Milestone 3: Demo applications

Duration: 6 weeks

To demonstrate the capabilities of Tesseract, we would like to provide easy-to-understand examples. These examples should be fully working (even though very basic and not intended for production use) and capable to showcase the capabilities to an unfamiliar audience.

| Number | Deliverable         | Specification                                                                                                                                                                                                                        |
|--------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License             | Apache 2.0                                                                                                                                                                                                                           |
| 0b.    | Documentation       | We will provide:<br />1) README-type documentation describing the key aspects of how the test applications work <br />2) instructions on how to build and run the test apps for both iOS and Android                                     |
| 0c.    | Testing Guide       | We will provide a guide how to build and run the apps.                                                                                                                                                                               |
| 0d.    | Docker              | Due to the client-side nature of the deliverable, there is no need for a docker image.                                                                                                                                               |
| 0e.    | Article             | We will publish an article (part3) that covers more details about the integration of Tesseract into Substrate dApps and wallets. The article will also cover some of our plans, specifically - java and swift libraries integration. |
| 1.     | Android Demo Wallet | Android Wallet test application with logic implemented in Rust, which demonstrates how a wallet can sign substrate transactions using the Rust APIs.                                                                                 |
| 2.     | Android Demo dApp   | Android test dApp with logic implemented in Rust, that demonstrates transaction creation and signing through Tesseract via test wallet. The transaction is submitted to test-net after being signed.                                 |
| 3.     | iOS Demo Wallet     | iOS Wallet test application with logic implemented in Rust, which demonstrates how a wallet can sign substrate transactions using the Rust APIs.                                                                                     |
| 4.     | iOS Demo dApp       | iOS test dApp with logic implemented in Rust, that demonstrates transaction creation and signing through Tesseract via test wallet. The transaction is submitted to test-net after being signed.                                     |

## Future Plans

The long-term vision for Tesseract is to be a safe, secure, and user-friendly way for any application to access a user’s wallet and private keys, on as many blockchains as possible.

At the moment, though, we want to bring the details about the next short-term steps, that we believe are essential for the project to start bringing traction.

The next immediate step is making the use of Tesseract protocol easy for the Polkadot developers, which requires integration with the ecosystem. Specifically integration with:
* Swift SDK (our library from the previous proposal: <https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/swift_api.md>): <https://github.com/tesseract-one/Substrate.swift>
* Java SDK (we’ve found two options so far):
	* <https://github.com/polkadot-java/api>
	* <https://github.com/emeraldpay/polkaj>

This will enable Mobile developers to start using Tesseract without any additional tools switching. Just adding a couple of lines of code for initialization.

Simultaneously, we are going to deal with the wallet side by either providing a reference wallet implementation or by integrating with the existing Polkadot wallets (TBD).

## Conclusion

The quest for a better dApp signature provider is not new and there are quite some approaches. All the solutions have their pros and cons, but none are universal, secure, and decentralized at the same time.

Tesseract was designed with the idea that it’s not enough to solve one of the problems or to provide a limited number of use cases. **We believe that to break the dApps adoption barrier, there must be a solution that is universal, secure, usable, and decentralized at the same time.**

## Some links for reference:

Tesseract’s Github: <https://github.com/tesseract-one/>

Tesseract’s implementation in Swift: <https://github.com/tesseract-one/Tesseract.swift>

Tesseract’s reference wallet: <https://apps.apple.com/us/app/tesseract-wallet/id1459505103>

Demo video: <https://drive.google.com/file/d/17YMdJS9CH6SXqP-YPUMKbm0BWdAE2Rx3/view>

Our previous proposal (Substrate/Polkadot Swift API): <https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/swift_api.md>

Our previous proposal codebase: <https://github.com/tesseract-one/Substrate.swift>
