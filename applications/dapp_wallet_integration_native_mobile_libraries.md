# Tesseract dApps/Wallet integration native mobile libraries

- **Team Name:** Tesseract
- **Continuation of:** [mobile dApps/Wallet Connection](https://github.com/w3f/Grants-Program/pull/508)

### Overview

This is a follow-up grant proposal aiming to reduce the integration barriers of the mobile dApp/Wallet integration protocol built during the [previous grant](https://github.com/w3f/Grants-Program/pull/508).

Tesseract dApp/Wallet integration protocol implemented in our [previously finished grant](https://github.com/w3f/Grants-Program/pull/508) provides excellent UX enhancement capabilities to the Polkadot Substrate ecosystem. Its current version allows native mobile applications to request public keys and transaction signatures through seamless integration with any Tesseract-compatible wallet installed on the same smartphone. You can see the **Polkadoot dApp interacting with a wallet** demo here: <https://www.youtube.com/watch?v=0AlDYB3Qglc>.

The version released during the previous grant is an excellent achievement for Tesseract. It is the first step toward implementing Tesseract’s full potential. Ultimately, we aim to make Tesseract a universal go-to dApp/Wallet integration solution capable of handling any scenario using the shortest peer-to-peer communication path. You can read more about it in detail in one of our articles: [Why do we need better dApp/Wallet connectors?](https://medium.com/@dileping/why-do-we-need-better-dapp-wallet-connectors-and-how-did-we-come-up-with-the-tesseract-protocol-987ce0e8a1ab)

To achieve such an ambitious goal, we need to cover two main areas of improvement:

1. Allow Tesseract to cover more use cases: add desktop dApps connectivity, ability to work with dApps running in browsers, etc.
2. Provide the dApp and Wallet developers with a way to integrate Tesseract as easily as it can get.

Even though covering more use cases ASAP sounds tempting, we believe that the UX improvements Tesseract’s current version brings to the Substrate community already provide enough value by itself to focus on and implement an easy way for the dApps and wallets to integrate Tesseract - a set of native libraries (Swift and Kotlin), that allows using Tesseract no harder than any native library the developers are used to.

### Why are the Tesseract native libraries necessary?

iOS and Android provide their developers with native programming languages, which are the standard for the platforms: Swift and Kotlin, respectively.

In contrast, Tesseract is built in Rust for its reliability, robustness, and cross-platform nature. While providing a lot of pros, Rust is quite hard and cumbersome to integrate into a mobile app (dApp or Wallet) and requires a lot of knowledge and effort, which is a significant barrier to Tesseract integration.

To counteract this barrier, we propose to build Swift and Kotlin native libraries that wrap all the complexity of Rust integration under the hood and provide the dApp and Wallet developers with easy and familiar native APIs that require no more effort than any other mobile library.

This way, we reduce the integration barrier to the minimum, allowing Tesseract to participate in Polkadot/Substrate community without bearing any additional complexity for the developer.

### What about cross-platform mobile apps (React Native, Flutter, etc.)?

Cross-platform mobile frameworks, such as React Native and Flutter, are popular among mobile developers. Providing libraries for these frameworks is definitely planned.

However, building a library for such a cross-platform framework is done via Swift/Kotlin bridges. This means that to build the APIs for the cross-platform frameworks, we first need to implement Swift/Kotlin Tesseract libraries. It’s an unavoidable prerequisite.

We are approaching the infrastructure around Tesseract in stages. Even though we would love to have React Native and Flutter asap, to avoid the grant bloating, we narrowed the scope down to Swift/Kotlin, which provides significant value by itself, allowing non-cross-platform developers to benefit from Tesseract while being a prerequisite step for cross-platform libraries development anyhow. React Native and Flutter are the next step.

### Native Libraries APIs

In total, there are four sets of APIs of Tesseract libraries to work on:

1. Android dApp side
2. Android Wallet side
3. iOS dApp side
4. iOS Wallet side

Each of the sides requires several rust libraries to be wrapped:

1. Tesseract itself
2. IPC transport
3. Test protocol
4. Substrate protocol

For the sake of simplicity, we will not list all the objects and methods here but rather provide examples of how native mobile developers can use Tesseract.

We aim to make the APIs as simple as we managed to do in Rust and keep them as similar among the platforms as possible. Even though implementing the bridges is not a trivial process and is a lot of interop code, the libraries’ “frontend” APIs still can be very easy and intuitive. Let’s jump straight to it.

#### dApp Side

Let’s start with some code examples we have in Rust. Here is how one would initialize Tesseract and request an account from the wallet in Rust on the dApp side:

```rust
let polkadot_wallet_service = Tesseract::new(Arc::new(delegate))
  .transport(TransportIPCAndroid::new(&env, application))
  .service(Substrate::Protocol);


let account = Arc::clone(&polkadot_wallet_service).get_account(AccountType::Sr25519).await?;
```

In iOS, it can look something like this:

```swift
let polkadotWalletService = Tesseract(delegate: delegate)
  .transport(IPCTransportIOS())
  .service(protocol: .polkadot)


let account = try await polkadotWalletService.getAccount()
```

And here is an example for Android:

```kotlin
val polkadotWalletService = Tesseract(delegate)
  .transport(TransportIPC(application))
  .service(Protocol.Polkadot)

val account = polkadotWalletService.getAccount().await()
```

#### Wallet Side

While the dApp APIs are typical for client-side APIs, the wallet-side APIs resemble some service implementation closely (i.e., a web service or an RPC). Here is how it works in Rust (an example is taken from the Developer Wallet):

```rust
let ipc = Transport::default(&env)?;
let tesseract = Tesseract::new()
  .transport(ipc)
  .service(TestService::new(...))
  .service(SubstrateService:new(...));
```

Also, `TestService` and `SubstrateService` are classes implementing a certain interface (separate for each) that defines how exactly the wallet should reply to the public key and transaction signature requests. Here are the Rust interface implementations:

```rust
impl tesseract::service::Service for TestService {
  type Protocol = Test;

  fn protocol(&self) -> &Test {
    &Test::Protocol
  }


  fn to_executor(self) -> Box<dyn tesseract::service::Executor + Send + Sync> {
    Box::new(tesseract_protocol_test::service::TestExecutor::from_service(Self))
  }
}
```

```rust
#[async_trait]
impl tesseract_protocol_test::TestService for TestService {
  async fn sign_transaction(self: Arc<Self>, req: &str) -> tesseract::Result<String> {
    //implementation code goes here
  }
}
```

The implementation of the Polkadot Service is going to be fairly similar, just different methods (Polkadot specific):

```rust
#[async_trait]
impl tesseract_protocol_substrate::SubstrateService for SubstrateService {
  async fn get_account(self: Arc<Self>, account_type: AccountType) -> tesseract::Result<GetAccountResponse> {
    //implementation code goes here
  }

  async fn sign_transaction(self: Arc<Self>, account_type: AccountType, account_path: &str, extrinsic_data: &[u8], extrinsic_metadata: &[u8], extrinsic_types: &[u8]) -> tesseract::Result<Vec<u8>> {
    //implementation code goes here
  }
}
```

Such an API implementation approach is pretty straightforward for both Swift and Kotlin. The initialization is a simple builder pattern, and the Rust’s traits here can be replaced with the protocols and interfaces of Swift and Kotlin 1:1 in this case. We are not providing additional examples here to keep the proposal concise, as we believe they are redundant for the wallet example due to its trivial outer API.

### Feasibility

All the APIs in the examples are tested to be achievable with the mock objects. The feasibility of creating such bridges was tested while creating the mobile demo applications and the Developer Wallet for the previous grant.

## Team :busts_in_silhouette:

### Team members

- Daniel Leping, @dileping on GitHub, CEO
- Yehor Popovych, @ypopovych on GitHub, CTO

### Contact

- **Contact Name:** Daniel Leping
- **Contact Email:** <daniel@tesseract.one>
- **Website:** <https://github.com/tesseract-one/>

### Legal Structure

- **Registered Address:** 251 Little Falls Drive, Wilmington, New Castle County, Delaware 19808-1674, USA
- **Registered Legal Entity:** Tesseract Systems, Inc.

### Team's experience

Our team has been building blockchain applications since 2017 and has worked together on Tesseract since 2018. The company got funded by SOSV and Emurgo in 2019 and took training in the dLab acceleration program.

This is our third grant application for W3F. Previously, we were awarded to build [Polkadot/Substrate Swift SDK](https://github.com/w3f/General-Grants-Program/pull/333) and the initial grant of [Tesseract dApp/Wallet integration protocol](https://github.com/w3f/Grants-Program/pull/508).

Prior to blockchain technology, we had a wealth of experience in building mobile applications and middleware, among which the most noticeable projects are: Swift Express and Reactive Swift.

The team has a 10-year history of working together, delivering various solutions of high complexity, including the mentioned above Swift Express and Reactive Swift, Cross++ ( cross-platform framework in C++ that allowed to keep the app logic shared while providing the capability to use native UIs) and tens of the web, mobile, and server applications for customers from around the world including the US, EU, Israel, Australia, etc.

### Team Code Repos

- <https://github.com/tesseract-one> - current main repo

#### Notable past open-source repos

- <https://github.com/crossroadlabs/Express>
- <https://github.com/reactive-swift>

#### Teams' github profiles

- <https://github.com/dileping>
- <https://github.com/ypopovych>

### Team LinkedIn Profiles

- <https://www.linkedin.com/in/danielleping/>
- <https://www.linkedin.com/in/yehor-popovych/>

## Development Roadmap :nut_and_bolt:

### Roadmap Overview

The development is split into four equal milestones, each covering client or wallet-side APIs in Kotlin or Swift. This split allows us to focus on a particular library at a time and achieve tangible and easily verifiable goals with each milestone.

- **Total Estimated Duration:** 16 weeks
- **Full-Time Equivalent (FTE):**  2

### Milestone 1: Wallet-side Library in Kotlin (Android)

- **Estimated duration:** 4 weeks
- **FTE:** 2

A library in Kotlin, wrapping the wallet-side Tesseract rust implementation. Provides Android Wallet developers with native Kotlin APIs of Tesseract.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to integrate Tesseract into a Wallet. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | Due to the client-side nature of the deliverable, there is no need for a docker image. |
| 0e. | Article | We will publish an article that explains how Tesseract makes dApps better and how to enable Tesseract protocol support in a Polkadot wallet for Android. |
| 1. | Wallet-side Android library | The library provides Kotlin APIs for Tesseract's wallet-side |
| 2. | Wallet-side IPC wrapper for Android | Kotlin wrapper for the wallet side of Android IPC transport |
| 3. | Wallet-side of the Test protocol in Kotlin | Kotlin API for the wallet side of Tesseract Test protocol |
| 4. | Wallet-side of the Substrate protocol in Kotlin | Kotlin API for the wallet side of Tesseract Substrate protocol |
| 5. | Android demo Wallet | A demo wallet that demonstrates the Kotlin APIs usage |

### Milestone 2: Wallet-side Library in Swift (iOS)

- **Estimated duration:** 4 weeks
- **FTE:** 2

A library in Swift, wrapping the wallet-side Tesseract rust implementation. Provides iOS Wallet developers with native Swift APIs of Tesseract.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to integrate Tesseract into a Wallet. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | Due to the client-side nature of the deliverable, there is no need for a docker image. |
| 0e. | Article | We will publish an article that explains how Tesseract makes dApps better and how to enable Tesseract protocol support in a Polkadot wallet for iOS. |
| 1. | Wallet-side iOS library | The library provides Swift APIs for Tesseract's wallet-side |
| 2. | Wallet-side IPC wrapper for iOS | Swift wrapper for the wallet side of iOS IPC transport |
| 3. | Wallet-side of the Test protocol in Swift | Swift API for the wallet side of Tesseract Test protocol |
| 4. | Wallet-side of the Substrate protocol in Swift | Swift API for the wallet side of Tesseract Substrate protocol |
| 5. | iOS demo Wallet | A demo wallet that demonstrates the Swift APIs usage |

### Milestone 3: Client-side library in Kotlin (Android)

- **Estimated duration:** 4 weeks
- **FTE:** 2

A library in Kotlin, wrapping the client-side Tesseract rust implementation. Provides Android dApp developers with native Kotlin APIs of Tesseract.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to integrate Tesseract into a dApp. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | Due to the client-side nature of the deliverable, there is no need for a docker image. |
| 0e. | Article | We will publish an article that explains how Tesseract makes dApps better and how to integrate it into a Polkadot dApp on Android. |
| 1. | Client-side Android library | The library provides Kotlin APIs for Tesseract's client-side |
| 2. | Client-side IPC wrapper for Android | Kotlin wrapper for the dApp side of Android IPC transport |
| 3. | Client-side of the Test protocol in Kotlin | Kotlin API for the dApp side of Tesseract Test protocol |
| 4. | Client-side of the Substrate protocol in Kotlin | Kotlin API for the dApp side of Tesseract Substrate protocol |
| 5. | Android demo dApp | A demo application that demonstrates the Kotlin APIs usage |

### Milestone 4: Client-side library in Swift (iOS)

- **Estimated duration:** 4 weeks
- **FTE:** 2

A library in Swift, wrapping the client-side Tesseract rust implementation. Provides iOS dApp developers with native Swift APIs of Tesseract.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to integrate Tesseract into a dApp. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | Due to the client-side nature of the deliverable, there is no need for a docker image. |
| 0e. | Article | We will publish an article that explains how Tesseract makes dApps better and how to integrate it into a Polkadot dApp on iOS. |
| 1. | Client-side iOS library | The library provides Swift APIs for Tesseract's client-side |
| 2. | Client-side IPC wrapper for iOS | Swift wrapper for the dApp side of iOS IPC transport |
| 3. | Client-side of the Test protocol in Swift | Swift API for the dApp side of Tesseract Test protocol |
| 4. | Client-side of the Substrate protocol in Swift | Swift API for the dApp side of Tesseract Substrate protocol |
| 5. | iOS demo dApp | A demo application that demonstrates the Swift APIs usage |

## Future Plans

As mentioned initially, we aim to make Tesseract a **universal go-to dApp/Wallet integration solution**. We approach the development of Tesseract step-by-step, with each additional step bringing a significant concrete value to the ecosystem.

The most critical areas we plan to cover are:

1. Simplifying the integration of Tesseract for various development platforms by providing more and more libraries for various platforms (JS, Flutter, etc.)
2. Cover more use cases. Due to its robust and flexible core, Tesseract is extremely extendible, allowing us to aim for a universal dApp/Wallet integration solution as the ultimate goal. With its first two implemented connectors (mobile IPC for iOS and Android), Tesseract proves its capabilities to provide first-class seamless integration for mobile dApps. Soon, we will release more connectors (Bluetooth, NFC, QR, etc.), allowing more dApps to benefit from our seamless wallet integration. Desktop, Web, and more kinds of dApps will be provided with a seamless wallet integration in the near future.

## Conclusion :heavy_plus_sign:

Thanks to the support of the Web3 Foundation, the first version of the Tesseract universal dApp/Wallet integration protocol was built and released successfully. Though, to start providing value to the Polkadot/Substrate community, we need to lower the current technical integration barriers imposed by the fact that Tesseract is built with Rust, which is hard and labor-intensive to integrate into mobile dApps and Wallets. To eliminate this, we propose to build a set of native Swift and Kotlin libraries that wrap Tesseract’s Rust implementation under the hood and provide mobile developers with a straightforward way to integrate Tesseract within minutes, thus significantly improving the UX of mobile dApps within Polkadot/Substrate ecosystem.

## Some links for reference

- Github: <https://github.com/tesseract-one/>
- Original grant proposal: <https://github.com/w3f/Grants-Program/blob/master/applications/mobile_dapp_connection.md>
- Demo video: <https://www.youtube.com/watch?v=0AlDYB3Qglc>

- Developer wallet (for Tesseract-compatible dApps testing): <https://github.com/tesseract-one/dev-wallet>
- Polkadot dApp example: <https://github.com/tesseract-one/polkachat.rs>
