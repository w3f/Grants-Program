# W3F Maintenance Grant Proposal

- **Project Code Name:** Crossbow (formerly `Creator`)
- **Team Name:** DodoRare, Inc.
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

In the previous grant, we built a tool that can automate building rust game projects for Android and iOS and tested it on applications with base elements such as 2D image / 3D model rendering, music, touch events, networking (substrate communication), etc. Also, we made it engine agnostic, and the process itself of creating similar apps pretty straightforward. But there are plenty of things left to do to provide full support of features for more advanced games: like notifications, permissions, in-app purchases, better sounds and music support, Google Play/Apple ID authentication, AdMob, iOS Bitcode, Android Application Bundles, or AAB, etc. Most of these problems are not easy to solve, and many projects facing them are moving to more popular engines because you never know how much time it will take to add IAP or authentication to your project in pure rust. So our intention on this grant is to continue fixing and adding the most crucial components of games so that the whole rust community can use them in any rust project without any problems.

### Overview

Crossbow - Cross-Platform Rust Toolkit for Games.

A goal of the `crossbow` project is to provide a complete infrastructure for game development in rust. In addition, the project simplifies the creation and packaging of crates for Android, iOS, and other platforms. Finally, we want to make most of our tools - engine agnostic to help rust game developers integrate them into their games, engines, and crates.

Plenty of Polkadot / Kusama / Substrate game projects want to develop their games in pure rust game engines, but as there's no well-tested and reliable software - they choose standard game engines. It's terrible for the Substrate ecosystem in several ways: 1. they could enhance the rust ecosystem; 2. generate more rust jobs that will potentially start own Polkadot projects in the future or contribute to the ecosystem itself; 3. miss an opportunity to integrate full or light Substrate node directly in-game for peer2peer synchronization and a lot of other exciting stuff.

Of course, there are already a bunch of promising game engine projects, but they almost all don't provide at least adequate support to simple tools like mobile permissions, game SDK, auth, achievements, etc. That's why we want to create a single game toolkit for the most popular platforms.

### Maintenance list

- https://github.com/dodorare/crossbow
- https://github.com/dodorare/android-manifest-rs
- https://github.com/dodorare/apple-bundle-rs

> ⚠️ *Note that we may move some libraries to separate repositories for more convenient maintenance in the future.*

## Team :busts_in_silhouette:

### Team members

- David Knyshenko, Blockchain/Full stack developer and Team Leader
- Oleksii Knyshenko, Mobile/Backend developer
- Kulmurzin Adil, Android developer
- Daniil Anikin, Mobile/System developer
- Rodrigo Oliveira, Game/Mobile developer

### Contact

- **Contact Name:** David Knyshenko
- **Contact Email:** info@dodorare.com
- **Website:** https://dodorare.com

### Legal Structure

- **Registered Address:** 651 N Broad St Suite 206, Middletown, DE 19709.
- **Registered Legal Entity:** DodoRare, Inc.

### Team's experience

* Mobile Game Framework - Our first team Web3Foundation [grant](https://github.com/enfipy/Grants-Program/blob/master/applications/mobile-game-framework.md), mobile building tool. By [our team](https://github.com/dodorare).

* Substrate Atom and VSCode plugins - Have contributed some code to Web3Foundation Grant for Substrate [VSCode](https://github.com/everstake/vscode-plugin-substrate/graphs/contributors) and [Atom](https://github.com/everstake/atom-plugin-substrate/graphs/contributors) plugins while worked in outsource company. By [enfipy](https://github.com/enfipy).

* [Polkadot CosmosSDK Integration](https://github.com/adoriasoft/polkadot_cosmos_integration) - Also, contributed to another Web3Foundation Grant while worked in another outsource company. Built some logic behind ABCI, pallet and substrate with tendermint. By [enfipy](https://github.com/enfipy).

### Team Code Repos

- https://github.com/dodorare

GitHub accounts of all team members:
- https://github.com/enfipy
- https://github.com/olvyko
- https://github.com/Heezay
- https://github.com/Adoka3710
- https://github.com/rodrigocam

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ackerman-david/
- https://www.linkedin.com/in/oleksii-knyshenko/

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 5.0 months
* **Full-time equivalent (FTE):** 3.5
* **Total Costs:** 40,000 USD

### Milestone 1 — AAB and new engine support

* **Estimated Duration:** 1 month
* **FTE:** 3.5
* **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can create own game project with Macroquad and our toolkit, generate and sign AAB file. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Add aapt2 tool wrapper | Add wrapper for [aapt2](https://developer.android.com/studio/command-line/aapt2) tool for AAB generation. |
| 2. | Add bundletool wrapper | Add wrapper for [bundletool](https://developer.android.com/studio/command-line/aapt2) for generation AAB file. |
| 3. | Support AAB (needs deliverable#1 and deliverable#2) | Add support of generation AAB file. [Android App Bundle](https://developer.android.com/guide/app-bundle) is a publishing format that includes all your app’s compiled code and resources. |
| 4. | Support Macroquad engine | Add support of [Macroquad](https://macroquad.rs/) engine. We will change our crossbundle command-line tool to support Android building of Macroquad. |
| 5. | Enhance documentation | Write better code and wiki documentation. |

### Milestone 2 — Android Plugins and Cross-platform permissions

* **Estimated Duration:** 2.0 month
* **FTE:** 4.0
* **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how to create own Android plugins and how to use cross-platform permissions. Also, update docs on how to install and start using toolkit. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Support Android Plugins | Add support of Android plugins to help add additional functionality provided by the Android platform and ecosystem (like Ads, Auth, In-app purchases, etc.). Something similar to [Godot Android plugins](https://docs.godotengine.org/en/stable/tutorials/plugins/android/android_plugin.html) and [Unity Plugins](https://github.com/google/play-unity-plugins) (or [here](https://github.com/playgameservices/play-games-plugin-for-unity)). |
| 2. | Support Cross-platform permissions | Provide a single cross-platform permission API that works with any [iOS](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/accessing-user-data/), [Android](https://developer.android.com/games/develop/permissions) application that can be accessed from shared code no matter how the user interface is created. |
| 3. | Simple installation of Android SDK and NDK | Simple installation with environment variables, libs, etc. Make installation of Android SDK, NDK, tools more robust. |

### Milestone 3 — Android Plugins

* **Estimated Duration:** 2.0 months
* **FTE:** 3.5
* **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how to use Google Play Billing and In-App updates in your own rust game project. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Sign in with Google | Add support of [Google Sign In](https://developers.google.com/games/services/common/concepts/sign-in) inside any application. |
| 2. | Android In-App purchases with Google Play Billing | Add support for [Google Play Billing](https://github.com/godotengine/godot-google-play-billing). Make it possible to buy items from your game. |
| 3. | Support Android In-App updates | Add support for [Android In-App updates](https://developer.android.com/guide/playcore/in-app-updates). |
| 4. | Support Android In-App billing | Add support for [Android In-App billing](https://github.com/google/play-unity-plugins/tree/master/GooglePlayPlugins). |
| 5. | Article | We will prepare and publish an article/tutorial that explains how to add Sign in with Google, create own Android Plugins with our toolkit (what was done/achieved as part of the grant). |

## Future Plans

Possible additional features:

- Firebase SDK.
- Android Game SDK.
- Some features that people will may be interested in.

Also we want to make similar stuff for native iOS apps. Current nearest plans are:

| Number | Title | Specification |
| -----: | ----------- | ------------- |
| 1. | Support iOS Plugins | Add support of iOS plugins to help add additional functionality provided by the Apple platforms and ecosystem (like Ads, Auth, In-app purchases, etc.). Something similar to [Godot iOS plugins](https://docs.godotengine.org/en/stable/tutorials/platform/ios/ios_plugin.html). |
| 2. | Sign in with Apple | Add support of [Apple Sign In](https://github.com/lupidan/apple-signin-unity) inside any application. |
| 3. | Better support for Apple xcrun, xcode proj | Add better support and rust wrappers for Apple xcode tools, xcrun. Make cool xcode project generation library. |
| 4. | Apple Game Center | Add [Apple Game Center](https://developer.apple.com/documentation/gamekit) support. |
| 5. | Support Apple In-App purchases | Support Apple [StoreKit](https://developer.apple.com/documentation/storekit/in-app_purchase). Make it possible to buy items from your application. |

## Additional Information :heavy_plus_sign:

**How did you hear about the Maintenance Grants Program?** Personal recommendation.
