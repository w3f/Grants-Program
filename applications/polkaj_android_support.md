# W3F Open Grant Proposal


* **Project Name:** PolkaJ Android Support
* **Team Name:** Nathan Schwermann
* **Payment Address:** 0x454cfAa623A629CC0b4017aEb85d54C42e91479d


## Project Overview :page_facing_up: 



This proposal is a follow-up to the PolkaJ grant https://github.com/w3f/Open-Grants-Program/pull/12 
I am not affiliated with the original team, but I have spoken with them about this propoal and they have encouraged me to submit it. 

### Overview

The PolkaJ java client is built using Java 11 APIs and native x86 code which can not run on Android.
This project proposal will make the necessary changes to support the Android platform as well as provide examples.


### Project Details 

We will make the following changes and additions to the PolkaJ project in order to support Android versions 7 and up.
* Platform targeting in the build script (currently only builds the platform you are building from)
* Build script changes to also compile the rust code to ARM in addition to x86 based on the target
* Make necessary changes to JNI code to support ARM when needed and remove Java 9 dependency
* Add `CallFactory` and `SubscriptionFactory` to client Builder interface
* Refactor `polkaj-api-http` and `polkaj-api-ws` which both use Java 11 and can not be used on Android to implement the new Call and Subscription Factory apis
* Extract and refactor tests from `polkaj-api-http` and `polkaj-api-ws` to be reusable for any implementations of the factory as well as additional coverage for Builder changes to support factories
* Add new module `polkaj-okhttp` which will implement `CallFactory` and `SubscriptionFactory` using [okhttp](https://square.github.io/okhttp/), the most widely adopted http client used in the Android development community.
* Unit test against shared tests for java.net versions of factories, same code coverage
* `polkaj-ktx` modules adding support kotlin extensions and coroutine support
* Example Android app, uses existing command line examples in Android GUI
* Update documentation for build script changes and for examples on each platform
* Fix broken balance example on OSX

### Ecosystem Fit 
This is an improvement and addition to an existing project.


## Team :busts_in_silhouette:

### Team members
* Nathan Schwermann

### Contact
* **Contact Name:** Nathan Schwermann
* **Contact Email:** schwiz@gmail.com

### Legal Structure 
Individual / Sole Proprietor

### Team's experience
I have ten years of experience in Android client development in the telecom and payment industries. I have led and maintained development on applications with millions of monthly active users.

### Team Code Repos
* https://github.com/nschwermann

### Team LinkedIn Profiles
* https://www.linkedin.com/in/nathanschwermann/

## Development Status :open_book: 
* I have verified where Java 11 and 9 are currently being used and what I can all compile with a Java 8 target needed by Android as well as an analysis of the current implementation and which changes will be needed to support Android quickly and efficiently.
* I have spoken to the original PolkaJ developer Igor via LinkedIn about the proposed changes, he agreed with and encouraged the approach.


## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 3 Months
* **Full-time equivalent (FTE):**  1
* **Total Costs:** 21,000 DAI

### Milestone 1 Platform Targeting
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 7,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code and update the existing examples documentation for platform targeting. |
| 0c. | Testing Guide | We will maintain or improve current code coverage. |
| 1a. | schnorrkel module Targets| Build script will generate targeted artifacts for linux-x86_64, linux-arm_64, windows-x86_64, mac-x86_64|  
| 1b. | schnorrkel module Android Compatibility | Will remove Java 9 dependency |  
| 1c. | schnorrkel module Mac OS Compatibility | Fix native library loading on mac  |  
| 2a. | api-base: Factories | We will add common Builder interface with added components for RpcCallFactory and SubscriptionFactory |  
| 2b. | api-base: Factory Tests| We will extract existing http/ws tests to new common factory tests suite|  
| 3a. | api-http: Factory | Refactor to implement RpcCallFactory|  
| 3b. | api-http: Tests | Unit tests 90% coverage Integration tests with api base previously extracted from this module|  
| 4a. | api-ws: Factory | Refactor to implement RpcCallFactory|  
| 4b. | api-ws: Tests | Unit tests 90% coverage Integration tests with api base previously extracted from this module| 
| 5a. | Examples scripts| Update examples to use correct platform target |  


### Milestone 2 OkHttp / Java 8 Compatible
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 7,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code and documentation for using okhttp module. |
| 0c. | Testing Guide | Will have 90% code coverage Unit tests and Integration test with api base |
| 1. | polkaj-api-okhttp module | Will add new module with RpcCallFactory and SubscriptionFactory implementations. |  
| 2. | Example | Will update examples and example documentation to allow switching between okhttp and http/ws socket implementations  |  

### Milestone 3 Android and Kotlin
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 7,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code and documentation for using kotlin module and including polkaj inside an Android project. |
| 0c. | Testing Guide | Will have 90% code coverage Unit tests and Integration test with api base |
| 1. | polkaj-ktx module | Will include support for Kotlin coroutines and additional kotlin convenience methods|  
| 2a. | Example | Will port examples into an Android app with a simple GUI to select each example and allow user input where possible |  
| 2b. | Example blog| Will write blog post and submit to medium explaining new changes to PolkaJ made to support Android and a walk through guide how to integrate PolkaJ into your Android project. |  


## Future Plans

I will continue to look for use cases where Android can be used in the polka dot network. I am excited to see the future and hope to remain involved.
