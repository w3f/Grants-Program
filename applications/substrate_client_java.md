# Substrate Client for Java

- **Team Name:** Doken  
- **Payment Address:** Information provided in the "W3F Technical Grant Application Form"  

## Project Overview :page_facing_up:

### Overview

#### Tagline: Java version of a Polkadot/Substrate network client.

The key objective of this grant is to design and build a production ready Java (one the most popular platforms) client which allows Java applications to interact with Polkadot/Substrate based networks. The substrate-client-java will be a library written in Java and fully compatible with Java 8 which still is the most common version of Java in enterprises.

#### Relevance to Substrate & Polkadot

There currently is a number of language-specific client libraries that can be used to interact with Substrate-based blockchains, as indicated in [client-libraries](https://docs.substrate.io/v3/integration/client-libraries). However no stable and well maintained Java library for Java applications exists:
- [polkadot-java](https://github.com/polkadot-java/api) is totally outdated, thus absolutely unusable.
- [polkaj](https://github.com/emeraldpay/polkaj) is not maintained, lacks support for Java 8 (the most popular version of Java so far), is focused mainly on polkadot so isn't generic enough and doesn't provide any easy/convenient way to operate a custom pallet.

The objective of this grant is to fill in this gap. Being an enterprise ourselves and building comercial products with substrate we know exactly what is needed for other enterprises to have the best experince with the Substrate.

### Project Details

#### Key deliverables

- *Java 8 or higher.*
The substrate-client-java will be compatible with Java 8 and higher, in order to make this library available and usable for as many projects as possible.

- *Non-blocking API.*
  The API is designed to be non-blocking in order to not engage resources to wait for responses from a node, especially when working with web sockets.
  
  Each method returns `CompletableFuture<>`.

- *Declarative approach.*
- *Make API simpler for usage.*
- *Let users organize their code similar to the one in the pallet they are interacting with.*
- *Hide difficulties of low level and infrastructure code.*
- *Facilitate the future maintenance.*

#### Annotations and code generation

The best approach to reach project’s goals is to use annotations and code generation techniques. Below are listed some annotations that this API shall provide:
- [x] Scale
    - [x] `@ScaleWriter`;
    - [x] `@ScaleReader`;
    - [x] `@Scale`;
    - [x] `@ScaleGeneric`;
    - [x] `@Ignore`;

- [x] Rpc
    - [x] `@RpcInterface`;
    - [x] `@RpcCall`;
    - [x] `@RpcSubscription`;
    - [x] `@RpcEncoder`;
    - [x] `@RpcDecoder`;

- [ ] Pallet
    - [ ] `@Pallet`;
    - [ ] `@Transaction`;
    - [ ] `@Query`;
    - [ ] `@EventHandler`.

These allow the generation of scale serializers, deserializers, RPC methods, code for interaction with pallet, etc.
In the next sections you will find further examples.

---
**Note:** In the list above [ ] indicates annotations not yet developed, whereas [x] those that have been developed already.

---

- *@Pallet* is going to be a common annotation to combine others in the same interface.
- *@Query* annotation will be developed in Milestone 1.
- *@EventHandler* annotation will be developed in Milestone 2.
- *@Transaction* annotation will be developed in Milestone 3.

#### Deferred parametrization of codecs
Annotations for codecs allow deferring parameters of a generic until it's used at an RPC method. E.g.:
 ```java
@RequiredArgsConstructor
@Getter
@ScaleWriter
public class Some<A> {
    private final int number;
    private final A some;
}

@RpcInterface(section = "test")
public interface TestSection {
  @RpcCall(method = "sendSome")
  CompletableFuture<Boolean> doNothing(@Scale Some<Parameter> value);
}
```
Annotation processors will generate scale writer for the class `Some` which expects another writer as a dependency.
When a processor faces a parameter like `Some<String> value`, it injects the `Strings`'s writer into the writer of `Some`.

#### GC Manageable requests.
We take care of either lost responses or canceled futures by not holding handlers that are needed to match an RPC request with a response.

#### Tests run with substrate node.
All API methods related to the substrate node will be tested for operability and compatibility.
Currently we use [test containers](https://www.testcontainers.org/) and docker image [parity/substrate:v3.0.0](https://hub.docker.com/layers/parity/substrate/v3.0.0/images/sha256-1aef07509d757c584320773c476dcb6077578bbf2f5e468ceb413dcf908897f1?context=explore). But we have plans to increase number of supported versions.

#### Our vision of the API

##### How to generate scale codec for DTO (implemented)

```java
@RequiredArgsConstructor
@Getter
@ScaleWriter
public class SignedExtra<E extends Era> implements Extra, SignedExtension {
    @Ignore
    private final long specVersion;
    @Ignore
    private final long txVersion;
    @Ignore
    private final BlockHash genesis;
    @Ignore
    private final BlockHash eraBlock;
    private final E era;
    @Scale(ScaleType.CompactBigInteger.class)
    private final BigInteger nonce;
    @Scale(ScaleType.CompactBigInteger.class)
    private final BigInteger tip;

    @Override
    public AdditionalExtra getAdditionalExtra() {
        return new SignedAdditionalExtra(specVersion, txVersion, genesis, eraBlock);
    }
}
```

##### How to generate RPC interface (implemented)

```java
@RpcInterface(section = "author")
public interface Author {
    @RpcCall(method = "hasKey")
    CompletableFuture<Boolean> hasKey(@Scale PublicKey publicKey, String keyType);

    @RpcCall(method = "insertKey")
    CompletableFuture<Void> insertKey(String keyType, String secretUri, @Scale PublicKey publicKey);

    @RpcCall(method = "submitExtrinsic")
    @Scale
    CompletableFuture<Hash> submitExtrinsic(@Scale Extrinsic<?, ?, ?, ?> extrinsic);

    @RpcSubscription(type = "extrinsicUpdate", subscribeMethod = "submitAndWatchExtrinsic", unsubscribeMethod = "unwatchExtrinsic")
    CompletableFuture<Supplier<CompletableFuture<Boolean>>> submitAndWatchExtrinsic(@Scale Extrinsic<?, ?, ?, ?> extrinsic,
                                                                                    BiConsumer<Exception, ExtrinsicStatus> callback);
}
```

##### Create instance of API (TBD)

```java
Api api = Api.builder()
        .useWs()
        .withNodes("127.0.0.1:9944", "127.0.0.2:9944")
        .scanAnnotatedFrom("com.my_company.first", "com.my_company.second")
        .build();
```

##### RPC: call method (implemented but not integrated into the API)

```java
CompletableFuture<RuntimeVersion> versionFuture = api.getRpc()
        .getState()
        .getRuntimeVersion();
```

##### RPC: subscribe (implemented but not integrated into the API)

```java
CompletableFuture<?> unsubscribe = api.getRpc()
        .getChain()
        .subscribeNewHeads((ex, header) -> { print(header); });
```

##### Pallet: transaction (TBD)

```java
api.pallete(MyPallet.class)
        .myExtrinsic(someValue)
        .signAndSend(KEY_PAIR);
```


#### Features Roadmap<a name="features_roadmap"></a>

The following list shows the features which are already implemented ([x]) as well as those yet to be implemented ([]).

- [x] Transport - layer that interacts with a node. It provides async API for RPC requests.
- [x] Scale
    - [x] Scale codec - implementation of the [SCALE](https://docs.substrate.io/v3/advanced/scale-codec/) for standard types.
    - [x] Support scale for *union* types
    - [x] Scale code generation - approach to generate scale encoders/decoders for annotated classes.
- [ ] Signing:
    - [x] SR25519
    - [ ] ED25519
- [x] RPC code generation
    - [x] RPC interfaces with methods
    - [x] RPC encoders/decoders
    - [ ] Declare known RPC sections and methods.
- [ ] Handling metadata
- [ ] Pallet API
    - [ ] Transactions
    - [ ] Queries
    - [ ] Constants
    - [ ] Events 

### Ecosystem Fit

#### How does substrate-client-java fit into the ecosystem

We have identified that many teams dealing with both legacy and up-to-date Java systems need to define appropriate approaches to communicate with Substrate-based blockchains. For example wrapping the polkadot javascript client or trying to build their own implementation. We intend to make this work easier by offering to the community a ready to use and production ready library to be used in all Java application. We will use this solution ourselves in our production environment, since we have multiple applications running on different versions of Java platform that needs to communicate with the Polkadot ecosystem.

#### Target audience and needs met by substrate-client-java

With our solution we meet the need of any Java developer who needs to write new Java applications or adapt existing Java applications to communicate with a Substrate based blockchain.

#### Other projects similar to substrate-client-java 

To our knowledge only one other project has tried to create a java library to communicate with Substrate-based blockchain, [java-client](https://github.com/w3f/Grants-Program/blob/master/applications/java-client.md). 
This project however was focused mainly on implementing what we indicated as "Declared known RPC sections and methods", and is targeting Java 11.

Our solution targets Substrate instead of Polkadot, and is implemented with code generation technique, which brings a more generic, flexible and adaptable library. Our client is designed so that a custom pallet can be easily consumed without writing much code. And we support Java 8+ which still is the most popular version according to multiple surveys:
- https://www.jetbrains.com/lp/devecosystem-2021/java/
- https://www.jrebel.com/blog/2021-java-technology-report
- https://snyk.io/blog/developers-dont-want-to-leave-java-8-as-64-hold-firm-on-their-preferred-release/


## Team :busts_in_silhouette:

### Team members

- Alexander Kalankhodzhaev, Team Leader
- Maria Manchovska, Product Manager
- Vadim Nabiev, Senior Developer
- Plamen Uzunov, Senior Java developer
- Teodor Georgiev, Software developer 
- Maria Kostadinova, Information Designer 

### Contact

- **Contact Name:** Alexander Kalankhodzhaev
- **Contact Email:** Alexander.Kalankhodzhaev@strategyobject.com
- **Website:** www.strategyobject.com

Grateful if you could also copy the email address doken.network@gmail.com in all official communications.

### Legal Structure

- **Registered Address:** ul. "Tsaribrodska" 70, 1309 Sveta Troitsa, Sofia, Bulgaria
- **Registered Legal Entity:** Strategy Object EOOD

### Team's experience

Alexander has over 14 years of experience as a software engineer and 3 years as a blockchain tech lead. Vadim has over 10 years as a software enfgineer and 2 years as Rust developer. Plamen is a Senior Engineer with over 15 years experience in particular in Java and cryptography. Teodor is a junior developer who recently joined the team, with a particular focus in Java development.

### Team Code Repos

- [Strategy Object](https://github.com/orgs/strategyobject/)
- [Alexander](https://github.com/kalaninja/)
- [Vadim](https://github.com/vnabiev/)
- [Plamen](https://github.com/PapiUzunov/)

### Team LinkedIn Profiles (if available)

- [Alexander](https://www.linkedin.com/in/kalaninja/)
- [Vadim](https://www.linkedin.com/in/nabiev-v-r/)
- [Plamen](https://www.linkedin.com/in/plamen-uzunov-2761b47/)
- [Teodor](https://www.linkedin.com/in/teodor-georgiev-248914192/)

## Development Status :open_book:

The development of the substrate-client-java has been ongoing for some months now and we currently have already implemented the features indicated with [x] in the [Features Roadmap](#features_roadmap) section above. 

The current version of the substrate-client-java is available at https://github.com/strategyobject/substrate-client-java.
 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 7 months
- **Full-Time Equivalent (FTE):**  2.9 FTE
- **Total Costs:** Information provided in the "W3F Technical Grant Application Form"

### Milestone 1 — Queries API

Implement a query api similar to the one of polkadot-js.

- **Estimated duration:** 1 month
- **FTE:**  3 FTE
- **Costs:** Information provided in the "W3F Technical Grant Application Form"

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can execute queries. |
| 2. | Testing | Core functions will be covered by unit and integration tests to ensure functionality and robustness. |
| 3. | Wiki | We will publish a wiki page that explains the details of the implementation for queries within the substrate-client-java library. |
| 4. | Query API | We will add queries capabilities to the substrate-client-java. | 

### Milestone 2 — Events support

- **Estimated duration:** 1 month
- **FTE:**  3 FTE
- **Costs:** Information provided in the "W3F Technical Grant Application Form"

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can handle events. |
| 2. | Testing | Core functions will be fully covered by unit and integration tests to ensure functionality and robustness. |
| 3. | Wiki | We will publish a wiki page that explains the details of the implementation for events within the substrate-client-java library. |
| 4. | Events support | We will add event-handling capabilities to the substrate-client-java. | 

### Milestone 3 — Transactions API

Implement a transactions api similar to `api.tx` of polkadot-js.

- **Estimated duration:** 1 month
- **FTE:**  3 FTE
- **Costs:** Information provided in the "W3F Technical Grant Application Form"

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can submit transactions. |
| 2. | Testing | Core functions will be fully covered by unit and integration tests to ensure functionality and robustness. |
| 3. | Wiki | We will publish a wiki page that explains the details of the implementation for transactions within the substrate-client-java library. |
| 4. | Transactions API | We will add transactions capabilities to the substrate-client-java. | 

### Milestone 4 — RPC sections and methods

Implement RPC sections and methods that remained unimplemented from the previous steps.

- **Estimated duration:** 1 month
- **FTE:**  3 FTE
- **Costs:** Information provided in the "W3F Technical Grant Application Form"

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Documentation | We will provide **inline documentation** of the declared RPC sections and methods. |
| 2. | Testing | Core functions will be fully covered by integration tests to ensure functionality and robustness. |
| 3. | Wiki | We will publish a wiki page that explains the details of the implementation for RPC sections and methods within the substrate-client-java library. |
| 4. | RPC methods | We will add missing RPC sections and methods to the substrate-client-java. | 

### Milestone 5 — Handling of Metadata

- **Estimated duration:** 1 month
- **FTE:**  3 FTE
- **Costs:** Information provided in the "W3F Technical Grant Application Form"

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains about handling of metadata. |
| 2. | Testing | Core functions will be fully covered by unit and integration tests to ensure functionality and robustness. |
| 3. | Wiki | We will publish a wiki page that explains the details of metadata handling within the substrate-client-java library. |
| 4. | Metadata support | We will add metadata capabilities to the substrate-client-java. | 

### Milestone 6 — ED25519

- **Estimated duration:** 1 month
- **FTE:**  2.5 FTE
- **Costs:** Information provided in the "W3F Technical Grant Application Form"

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that covers ED25519. |
| 2. | Testing | Core functions will be fully covered by unit tests to ensure functionality and robustness. |
| 3. | Wiki | We will publish a wiki page that explains the details of using ED25519 within the substrate-client-java library. |
| 4. | ED25519 | We will add ED25519 support to the substrate-client-java. | 

### Milestone 7 — Constants API

Implement Constants API similar to `api.consts` of polkadot-js that allows access to the runtime constants.

- **Estimated duration:** 1 month
- **FTE:**  2.5 FTE
- **Costs:** Information provided in the "W3F Technical Grant Application Form"

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to access the runtime constants. |
| 2. | Testing | Core functions will be fully covered by unit and integration tests to ensure functionality and robustness. |
| 3. | Wiki | We will publish a wiki page that explains the details of the constants api within the substrate-client-java library. |
| 4. | Constants | We will add constants access capabilities to the substrate-client-java. | 


## Future Plans

We intend to use the substrate-client-java to integrate our corporate Java-based ecosystem with our Substrate-based solutions. Moreover we are ready to share the client library  we are developing and its source code to the community, further develop and maintain it. We have resources and are ready to deliver later bugfixes, improvements, new features and keep the client up to date with the newer versions of Substrate. We plan to grow a community of Java developers who need to integrate their applications to a Substrate-based blockchain and the usage of substrate-client-java will ease their work.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We heard about the Grants Program by Web3 Foundation and we have been in contact with managers at parity.io who guided us towards this application.

We have indicated the work we have already done in the section  [Features Roadmap](#features_roadmap) above, where we indicated the already implemented features with [x].

There are no other teams who have already contributed to this project, not previoulsy grants we applied for.
