# Nolik

- **Team Name: Chainify
- **Payment Address:** 0x9aD97d8605F80003106B0ED7DEe330F064674365 (USDT)
- **Level: 1

## Project Overview :page_facing_up:

### Overview

Nolik is a protocol for delivering digital content for web 3.0.
It allows developers to create applications for formal communication that connect people without any form of censorship or third-party control.
The protocol design is based on the ServiceLess approach, meaning that no services from third parties are needed for users to communicate.

We achieve that by using combination of blockchian and IPFS technologies.
To build a blockchain engine we are going to use Substrate framework with a custom runtime.
Blockchain logic will allow users to create programmable messages rules so they could control on a cryptographic level how they are going to receive messages.
For example, users will be able to create a white list (or black list) of senders which will protect them from spam or irrelevant conversations.
Another example would be creating rules like accepting messages within a particular block range or if a particular token is attached to the message, etc.

### Project Details

#### The problem we are targeting

The name Nolik stands for No Leak.
We believe that privacy is a fundamental right of every person and we believe that it should be protected.
Unlike privacy-first messaging applications like Signal or Threema, we offer a tool that allows communication without a need to trust an app itself.
It also allows communication without a permission of a third-party which creates a great foundation on which users can rely and build their tools on top of this ecosystem.

#### Technology overview

Nolik uses a combination of blockchain and IPFS technologies.
The user generates an IPFS file with a particular structure on a client-side and broadcasts it to the blockchain network with additional metadata.
In addition to required information about the transaction (like signature, sender, recipient, etc.) we provide additional information about the message.
We split the blockchain level and messages level by creating a separate set of encryption keys.
Blockchain (identity) keypairs stand for token management and messages (accounts) keypairs stand for message encryption.
Users can have several identities (like personal or corporate).
At the same time, each identity can have multiple accounts (like email addresses).
Each message is encrypted with a public key of the recipient.
The network does not take part in key distribution which provides decentralized end-to-end encryption and guarantees mathematical protection of third-party access to the content of the messages.
As an encryption library, we use the [NaCl](https://nacl.cr.yp.to) encryption library with the ed25519 curve.
You can find how the protocol works in detail below.
The protocol is flexible and allows the creation of various data structures which can fit the needs of any app.

#### Use case example

Nolik protocol could be used for a media service that protects journalists and whistleblowers from political oppression and technological borders like firewalls, blockings, etc.
The protocol guarantees the delivery of the message through the network due to the absence of a single point of failure.
A freedom of speech which is guaranteed mathematically.
The network does not ask the users to disclose their identities.
This means that behind every post there is nothing but a public key.
The journalist can prove his identity by publicly attaching the public key to his identity (for example, in social media) and signing some sample data.
But if a journalist or a whistleblower would like to hide their identity nothing will stop him from doing that.
By default every message is encrypted.
It sounds great but there is a potential scalability downside.
To deliver the message to a million people the journalist will have to encrypt the same message million times.
The journalist can create a separate account which stands for a channel.
That account is a proxy that delivers the message to the audience.
The private key of that channel account can be shared with the subscribers and the journalist will have to encrypt the message only once with the public key of a channel account.
That can work, but there is another problem with that.
Anyone will be able to spread the message for the same audience just by sending a message to a channel account.
This problem can be fixed with programmable messages.
On the channel creation stage, the journalist can add a rule that the channel account should accept the messages only from particular public key.
This approach allows them to deliver the message to an unlimited audience and save tons of resources.
The same method can be used for creating private or public group conversations.

#### The Protocol

Nolik protocol is designed to make trustless communication possible.
It provides flexibility for developers so they can build their applications on top of the platform.

The protocol allows to:
- Stay protected from a middleware attack
- Communicate without servers or service as a third-party
- Protect messages from unauthorized access with decentralized end-to-end encryption
- Guarantee that the message was sent at a particular date and time
- Have a provable immutability of message content, metadata, and the timestamp information
- Prove that the message was sent by a particular sender
- Prove that the message was sent to a particular recipient or recipients
- Make sure that all recipients received the same message at the same time
- Send messages from multiple senders at the same time
- Verify the sender and be protected from a phishing attack
- Attach tokens (like NFTs) to message
- Use different clients to get access to messages

Each message contains two main parts - the transaction data and the IPFS data.
The transaction data is additional information that is sent along with required information within a transaction body.
It contains general metadata about the sender and recipient or recipients of the message.
This information has a specific purpose and requires specific fields to be provided.
The metadata is validated and checked at a sending stage and if something is wrong will be rejected by miners.

The other part is IPFS data.
This is a document that stores the message content which is uploaded to the IPFS network
It has a specific key-value structure that allows storing any kind of information.
The IPFS hash of a file is attached to the transaction and the data itself is stored in the IPFS network.
The recipient will be able to download the data and decrypt it on a local device.
It is important to mention that the IPFS file has a limited lifetime due to the IPFS garbage collection mechanism, so it should be downloaded within a short period after sending.
However, to solve this issue users within a community can create services that can pin IPFS files and store them for a longer time.
Another great way to solve this issue would be using FileCoin or similar services to make sure that the recipient will get the message in a longer period.

#### Encryption

The message encryption is based on the Diffie-Hellman protocol with the ed25519 curve.
To encrypt the message the sender generates a shared secret with the recipient's public key and her private key.
At the same time, the recipient generates the same shared secret with the sender's public key and his private key.
There is no problem with decrypting the message if the recipient knows the sender's public key.
But if the recipient does not know the sender's public key, he will not be able to decrypt the message.

That problem is usually solved by a third party that matches sender and recipient and exchanges their public keys.
Nolik protocol allows solving this problem without a third party.
To do that we use a trick with one-time-use nonce and sender's public key which stay unencrypted.
They are required for the recipient, so he can decrypt the real sender's (sender's) public key and decrypt the message.
We will dive into details below.

#### The transaction metadata

Each message contains a specific set of information that is included in the blockchain transaction body.
On the other side, recipient or recipients will be able to track the blockchain transactions and decrypt those which were sent to them.

The transaction metadata contains several required parameters.

```
batch:
  - nonce:
      onetimeuse: 9+R1VuCq52vsH2+74eh48N0Bg/awoN+h 
      ciphertext: lGheWGDG9kN9pa/W6Z1fKTxKsw5EigQAFsj24HlSa/bcxkbT+FKS7w==
      blake2hash: i5rnYmpvX2F4vwB/Up79MqzGbNXaYtoaU611y9N+OfbJtOp0uD/dbDGvqKtCnOTn0RYLJibhlja+reNMD8wjAg==
    sender:
      onetimeuse: FD3SRQjTFGKc4v4lGhnI22vsU4cuz4tdK54YSn5M2GA=
      ciphertext: 9ETKvShWVRl41GycxtF4W2XNEVgPReA7z+A+gc3C0Xnq9ooYRy9SKoapKpwKBs0E/uetvEs8TbDZcy8g
      blake2hash: ufZCpgWmZyqO0AbI6iBHmfohefe2pLub7xmq+ThL8d/b5tRk2S5hPRRYcQr0Ec/bjOgDc4nazOl4VyHp3mWphA==
      signatures:
        - p/HWd+Ss7+uyrd6J0f/7CiOmVLP6We0AOuSyGtvznmmhdhxckPYA88HaKenThnNpJtAiEwkEarKWvhTXjZIQAg==
        - gyJr87SRksBagyRCXdmuZIy5jz+zASEE4/wjKVvo55IYJMaxxhs9vfKsOjCaFDl+pN9a1In7vCsTHTkvXNnxDA==
    verifiers:
      - onetimeuse: TGaimIF5AL367/cryycgV/SVvKu3zyU8NSTZgENiUTE=
        ciphertext: 3W8ZZdDzCSXSFb0GD9y5A1mC71GnFlfTVzuJr1H3fcNvnvTvL71ze+ImJlKr2YRTBsmqxQfoVkFPF8nM
        blake2hash: K87gzWsO9NPopBineYtjI7b0bggY2KlSDgVWlMjzjJjMgSumfeH5c5jSoMC61lVYf8zvtAZobXhmN6YPwuieOQ==
        signatures:
          - p/HWd+Ss7+uyrd6J0f/7CiOmVLP6We0AOuSyGtvznmmhdhxckPYA88HaKenThnNpJtAiEwkEarKWvhTXjZIQAg==
          - gyJr87SRksBagyRCXdmuZIy5jz+zASEE4/wjKVvo55IYJMaxxhs9vfKsOjCaFDl+pN9a1In7vCsTHTkvXNnxDA==
    recipient:
      ciphertext: Umpc5sLtvFpUGz1UG+7FyW9/LqFlMLnoitscTyKeyRHIiXgEn9Azk9K4d/J8cXPZ
      blake2hash: TIkWoqizgHIf86hGvPIs+HTrQRRi1qpFx69Qy6/bwcbNmPtxXfgvNnB+w79auKl56Ek837Wxeto650A2ILwPJQ==
    data: QmcpfNLr43wdKMLbJ4nu4yBDKDxQggSRcLVEoUYFcjJNZR
    
    
```

##### Batch

---
Each message is encrypted with the recipient's public key based on Diffie-Hellman protocol.
If there are several recipients the same message is encrypted several times for different recipients.
All the versions of the same message should be provided in the batch section.
The message should contain nonce, sender, recipient, and data sections.

**Nonce** is a section with a one-time generated 24-bit value.
It allows making sure that the same message (like "Hi") can not be brute-forced by a malicious third party.
There are two nonce values - the private (encrypted) and the one-time-use one.
As we mentioned earlier the message is encrypted with the sender's real public key, but for security reasons we encrypt it.
One-time-use nonce is used along with one-time-use public key to encrypt sender's real public key.

**Sender** is a section with information about the sender of a particular message.
It contains the encrypted public key of a sender.
The one-time-use public key is required for the recipient, so he could decrypt the sender's real public key.

**Verifiers** is an optional section with additional verifiers of a message.
Think of it like multisignature but for messages.
This can be useful for various cases.
For example when a message from an employee is verified by his organization or the message from a user verified from the app.

**Recipient** is a section with information about the recipient of the message.
It contains encrypted public keys of a recipient.

**Data** is a field with the IPFS hash of a file with encrypted data.
The structure of that file is described below.

##### Nonce

---
The **onetimeuse** value is a one-time public 24-bit nonce that is generated on transaction creation.
It is used as salt to sender->ciphertext, sender->blake2hash, verifier->ciphertext, verifier->blake2hash and recipient->blake2hash fields.

The **ciphertext** value is an encrypted nonce. It can be decrypted only by sender and recipient.
It is used to salt nonce->ciphertext, nonce->blake2hash, and recipient->ciphertext fields.
It could be used for salting sender->blake2hash, verifier->blake2hash and recipient->blake2hash fields but in this case, senders, verifiers and recipients would have to try to decrypt every message in the blockchain.

The **blake2hash** value is salted with the nonce blake2 hash of the nonce.
Every recipient will have a unique nonce that can be used to prove message metadata and the content of the message independently from other recipients.

##### Sender

---
**Sender** is a 32-bit string that represents the sender's public key and account address at the same time.

The **onetimeuse** value is a one-time-use public key that is generated on transaction creation.
It is used to encrypt the sender's real public key for the recipient.
Based on Diffie-Hellman protocol, sender generates a one-time-use keypair of public and private keys.
Based on the one-time-use private key and recipients' public key, the sender generates a shared secret.
At the same time the recipient (same as other network participants) can have access to a one-time-use public key.
Based on recipient's private key and one-time-use public key recipient can decrypt the sender's real public key.

The **ciphertext** value is an encrypted sender's public key (address).
It can be decrypted only by the recipient.

The **blake2hash** value is a hashed sender's public key salted with a one-time-use nonce blake2 hash.

The formula looks like this:

```
H(H(pk), N)
```

Where "H" is a blake2 hash function, "pk" is the sender's public key and N is a one-time nonce.
The sender knows his public keys, and that allows to identify related messages among others.
The downside of this approach is that once one knows the sender's public key he will be able to track the account activity.
To fix this the one-time-use nonce can be replaced with private nonce, but in this case, the sender will have to decrypt every message in the blockchain.

List of **signatures** is a set of cryptographic proofs (digital signatures) of sender and one-time use private key.
Both of the signatures sign the hash of all hashes according to the formula:

```
H(nH | sH | v(0)H...v(n)H | rH | dH)
```

Where "H" is a blake 2 hash function, "nH" is nonce blake2hash value, "sH" is sender's blake2hash value, "v(0)H...v(n)H" are concatenated verifiers' blake2hash values, "rH" is recipient's blake2hash value, "dH" is IPFS file hash.

##### Verifiers

The **Verifiers** section contains a set of verifiers that provide additional confirmation to the message.
Each verifier is a 32-bit string that represents the verifiers' public key and account address at the same time.

The **onetimeuse** value is a one-time use public key that is generated on transaction creation.
It is used to encrypt the verifier's real public key for the recipient.
Based on Diffie-Hellman protocol verifier generates one-time use keypair of public and private keys.
Based on the one-time use private key and recipient's public key, the verifier generates a shared secret.
At the same time the recipient (same as other network participants) can have access to one-time-use public key.
Based on recipient's private key and one-time-use public key recipient can decrypt the verifier's real public key.

The **ciphertext** value is an encrypted verifier's public key (address).
It can be decrypted only by the recipient.

The **blake2hash** value is salted with one-time-use nonce blake2 hash of a hashed verifier's public key.
The formula looks like this:

```
H(H(pk), N)
```

Where "H" is a blake2 hash function, "pk" is the verifier's public key and N is a one-time-use nonce.
Verifier knows his public keys, and that allows to identify related messages among others.
The downside of this approach is that once one knows the sender's public key he will be able to track the account activity.
To fix this the one-time-use nonce can be replaced with private nonce, but in this case, a verifier will have to decrypt every message in the blockchain.

List of **signatures** is a set of cryptographic proofs (digital signatures) of each verifier and one-time-use public key.
Both of the signatures sign the hash of all hashes according to the formula:

```
H(nH | sH | v(0)H...v(n)H | rH | dH)
```

Where "H" is a blake 2 hash function, "nH" is nonce blake2hash value, "sH" is sender's blake2hash value, "v(0)H...v(n)H" are concatenated verifiers' blake2hash values, "rH" is recipient's blake2hash value, "dH" is IPFS file hash.

##### Recipient

---
**Recipient** is a 32-bit string that represents the recipient's public key and account address at the same time.

The **ciphertext** value is an encrypted recipient's public key (address).
It can be decrypted only by sender and recipient.

The **blake2hash** vvalue is a blake2 hash of a hashed recipient's public key salted with one-time-use nonce.

The formula looks like this:

```
H(H(pk), N)
```

Where "H" is a blake2 hash function, "pk" is the recipient's public key and N is a one-time-use nonce.
The recipient knows his public keys, and that allows to identify  related messages among others.
The downside of this approach is that once one knows the recipient's public key he will be able to track the account activity.
To fix this the one-time-use nonce can be replaced with private nonce, but in this case, the recipient will have to decrypt every message in the blockchain.

##### Data

---
Data is a section with an IPFS hash of a file that contains encrypted message information in key-value format.
We will discuss the structure of an IPFS file below.

#### The IPFS data file

---
The data file is a text file with a specific data structure.
It contains encrypted data which can be decrypted only by the sender and recipient of a message.
The data structure is simple key-value storage with encrypted information.

The Key field stands for a name of a particular field. For example, name, email, phone number, header, body, etc.
The Value field stands for the value of the corresponding key field.

```
data:
  - key:
      ciphertext: hTMsuuf3FIGFsdmA4u3QLQC4n3h0+IjK8xh00g==
      blake2hash: PooMcKS8CdDMivT85XxVT5ja1seYd0747ajWVkxhWVdDRu+qncQpGG70QqfRQ5YfF0N7PFwOlSlrqEZQ+wBjvg==
    value:
      ciphertext: 8lE+cdCwWIoj+bFX96w/tRy4gGBytomY/hQ36qc6FwJ8
      blake2hash: EAKLDl1/H0ZroFQ00bFe9cS5dwyxotITdLfRUW3sF+2SgL10VbF5BYHNqxPNJqFYfQCrXOehgCQ4xuuAJ25VqA==
```

#### Key

---
The **ciphertext** value is an encrypted name of a particular field.
It can be decrypted only by sender and recipient.

The **blake2hash** value is salted with the private nonce blake2 hash of data content.

#### PoC and prior work

We have been working on decentralized messaging apps for the last several years.
During this time the protocol became much more solid and stable.
Here are some related links:

>[Nolik Github](https://www.github.com/chainify/nolik)

>[Nolik Messenger v2 Demo -- 1m 37s](https://youtu.be/11HUUfQ0jLc)

This is the latest open-source version of the messenger.
The protocol is more or less the same, but to run the messaging service one has to use centralized servers to increase the user experience.

The **latest** version I've been working on is not open-source because it was a custom build for an external company, but here is a video demo of how the messenger works:

>[XYZ Messenger Demo (EN) -- 5m 38s](https://youtu.be/HSMjikDiheY)

This technology has been used in production at a nonprofit organization [HelpTeens](https://helpteens.ru) in Saint-Petersburg that provides free online psychological support for teenagers.
We used Nolik to protect kids' privacy and keep their secrets safe.
It worked perfectly, but we had to stop using the technology due to legal restrictions.
A new set of legal rules obligates any company to disclose the decryption keys to authorities and we had nothing to disclose.

Unlike the open-source version, it has a significant difference in architecture.
This version of a messenger works with a **serverless** approach.
It means that there is no server infrastructure required to communicate.
Users could just download the web app from GitHub and start communicating from localhost.
This concept perfectly shows the power of decentralization and what blockchain is actually about.

>[Nolik Messenger v1 Demo -- 1m 31s](https://youtu.be/3UxkLws9IgE)

>[Article at Habr (RU)](https://habr.com/ru/company/binarydistrict/blog/430842/)

>[Article at Te-St (RU)](https://te-st.ru/2019/10/10/mental-health-platforms-for-online-therapy/)

>[Presentation to community of psychologists (RU) -- 19m 4s](https://youtu.be/E68EaOGjghU)

We've worked closely with the [Waves](https://waves.tech) team and contributed to adding encryption methods to their products, like Waves Keeper.
>[Chainfy intro by Waves (EN) -- 1m 50s](https://www.coursera.org/lecture/mastering-web3-waves/chainify-A2u8I)

>[YC S19 application pitch (EN) - 2m 24s](https://youtu.be/G72KP_Kgwdw)

The technology has changed but the core principles are still the same.

>[Nolik DB Demo -- 1m 11s](https://youtu.be/PyueRPY4fHc)
This is an experiment from one of the hackathons.
I applied the Nolik protocol to build a decentralized database that allows the storage of structured data using SQL syntax.

#### Non-goals

During this grant program we do not intend to build a messaging application.
We also do not intend to launch Nolik mainnet or testnet.
At this point, our main focus is the protocol and the blockchain engine behind it, the same as the user feedback and finding a market fit.

### Ecosystem Fit

Although Nolik is designed to be an independent product, the secure platform with programmable messages can be used not only for user-to-user interaction but application-to-application interaction as well.
For example, apps will be able to exchange secrets like private keys, send tokens or a WASM code.
That might be one of the possible benefits for the Polkadot community, but we will know if there is any value only by talking to users.

## Team :busts_in_silhouette:

### Team members

- Amir Boziev

### Contact

- **Contact Name:** Amir Boziev
- **Contact Email:** aboziev@gmail.com

### Legal Structure

No legal entity yet

### Team's experience

#### Amir Boziev

Since 2018 I've been involved in various projects in different domains including edTech, private messaging, data security, social good, and others.
I've increased my expertise in product development, marketing, and programming.
Worked as a researcher in blockchain tech to find a product-market-fit for this amazing technology which I'm passionate about.

For the last five years, I've been learning how to make successful products.
My last two MVPs took less than 48 hours to build and both of them generate revenue.
One of them is growing.
Right now I am learning [Game Thinking Mechanicks](http://gamethinking.io) to make better products.

Previously worked as a Director of blockchain products and strategy at Latoken.
I've been working with amazingly talented people on product management and the development of both decentralized and centralized crypto exchanges.
We also have been working on fundamental research and development of a framework that simulates the behavior of a blockchain on a network level.

We've analyzed the most popular consensus algorithms (PoW, PoS, dPoS BFT, etc.) and blockchain platforms (Bitcoin, Ethereum, Cordana, Ripple, Waves, Hashgraph, etc.).

I also was fortunate to be a speaker and moderator of technical panel discussions at Blockchain Economic Forum in Singapore and San-Francisco (cross-chain communication, mining, security, scalability, etc.) and to work with the Moscow blockchain community as head of educational Chain{Dev} project.

Full-stack web developer, Python, JS, Docker, SQL, Blockchain.
Rust experience: 3+ months, but moving fast.

### Team Code Repos

- <https://github.com/chainify>
- <https://github.com/chainify/nolik>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- <https://github.com/amrbz>

### Team LinkedIn Profiles

- <https://www.linkedin.com/in/amrbz>

## Development Status :open_book:

- [XYZ Messenger](https://docs.google.com/document/d/1Vxieh7b6wTQZoHpBQQTC5bH58kwcYlF0wm8yh0acXCI/edit?usp=sharing)

- [Rhizome](https://docs.google.com/document/d/1nbqO-ZHKTltqS7a10MYHKIetiFPd_NS6danfV7rGp1I/edit?usp=sharing)

Those are research documents that lead me to this project.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 9,800 USD

### Milestone 1 — Implement Substrate Modules

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 4,900 USD

This milestone will allow the operation of a local dev chain.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation of the code and a basic tutorial that explains how a user can spin up one of our Substrate nodes. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate module: Account Rules | We will create a Substrate module that will allow users to create a wite-list and a black-list of senders |  
| 2. | Substrate module: Message Validation | We will create a Substrate module that will validate the message on sending stage to accept or reject it |  
| 3. | Substrate chain | Both modules of our custom chain will allow users to set up account rules and validate incoming messages on whether the senders have a right to send a message or not. In case of a rejected transaction user will get a related error message|  

### Milestone 2 — Develop CLI tools

This milestone will allow the usage of CLI tools, which are going to be written in Rust language. They will allow users to interact with the network by composing, sending, and accepting messages.

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 4,900 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation** of the code and a basic tutorial that explains how a user can use our CLI tools and interact with a network. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to compile CLI tools for further usage |
| 0e. | Article | We will publish an article that explains the idea of the protocol, how to deploy a local dev node and start messaging |
| 1. | CLI: compose| We will create a CLI tool that will allow users to compose a message to one or several recipients |  
| 2. | CLI: send| We will create a CLI tool that will allow broadcasting the message to the network|  
| 3. | CLI: get | We will create a CLI tool that will allow to download and read received messages if any |
| 4. | CLI | CLI tools will allow users to compose messages, send them to recipients and read incoming messages on request |  

## Future Plans

### Short-term

- Apply to the Substrate Builders Program.
- Develop the PoC blockchain core with CLI tools
- Make customer research and validate product ideas
- Launch a public testnet and build a Messaging app

### Long-term

* Close seed funding round and form a team
- Apply to W3F L3 grant program
- Convert to mainnet
- Build a messaging app

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Personal recommendation of my friends:
- <https://github.com/kmadorin>
- <https://github.com/CryptoBadBoy> W3F grant program alumni (Fratcapp)
