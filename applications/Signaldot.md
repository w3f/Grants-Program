# Open Grant Proposal

* **Project Name:**  Signal app is compatible with substrate's private key system
* **Team Name:**  Singaldot team
* **Payment Address:**  0x51B95210a847Cb8a4C6cf231Ad85420bA99057d4

## Project Overview :page_facing_up: 

### Project Details 

## signal protocol
Signal protocol is a true end-to-end communication encryption protocol. It is known as the most secure communication protocol in the world. No third party including servers can view the communication content. Popular applications facebook messenger, whatsapp, and a single app use this protocol.

The default conversation mode of telegram that we are familiar with is not end-to-end encryption. The server can obtain the user’s private key and decrypt the chat content. Although current reports indicate that Telegram sells user chat content to any organization, the user’s privacy and security The company's professional ethics is always not safe.

The signal protocol can be used in two-party communication and group communication to ensure the encrypted transmission of transmitted messages, pictures, audio, and video files. Even if the key of a certain message is leaked, hackers cannot decrypt the previous and subsequent messages, so the signal protocol can provide forward and backward security.	

## **Diffie**–**Hellman** key exchange

The two parties can determine a "negotiation key" in an insecure network without pre-communication. This key can be used as a symmetric key to encrypt message content in subsequent communications.This avoids the risk of leakage caused by the two parties' online negotiation of keys.Suppose Alice and Bob want to determine a message key, the principle of the DH protocol can be expressed by the following formula:

DH(Private key A, Public key B) = Message s = DH(Private key B, Public key A)

The DH protocol algorithm requires two parameters: its own private key and the other party's public key. For Alice and Bob, they only need to know each other's public key, and the calculated key S is the same.

The application process of the DH protocol is as follows:



![ECDH](https://img.imgdb.cn/item/6017638f3ffa7d37b39e3ac3.png)

1) Alice and Bob each create a key pair that conforms to the DH protocol. Assuming that Alice's key pair is (private key A, public key A), and Bob's key pair is (private key B, public key B);

2) Both parties send their own public keys to each other, even if there is a hacker monitoring, they can only get public key A and public key B;

3) Alice uses her private key and Bob's public key to calculate the message key as S, that is, DH (private key A, public key B) = key S;

4) Bob uses his private key and Alice's public key to calculate the message key as S; that is, DH (private key B, public key A) = key S;

5) Both parties have determined the negotiation key S at the same time, and the message key can be derived from S for encrypted communication.

6) The hacker only knows the public key A and the public key B. Because he does not know the private key of either party, he cannot calculate the key S.

In summary, two key pairs can safely create a "negotiation key". It is a very safe method to use DH protocol to create key in encrypted communication.

## X3DH

The signal protocol uses the X3DH protocol to create the message key. X3DH protocol is based on DH protocol, but introduces more public key parameters to improve security. Under the X3DH protocol, there are 3 roles:

1) The initiator of the session, in this case we assume Alice;

2) The receiver of the session, in this case we assume it is Bob;

3) Server: Used to store various public keys of all users.

In the X3DH protocol, perhaps to improve security, everyone has to create three key pairs, as follows:

1) Identity Key Pair —— a long-term key pair conforming to the DH protocol, created when the user registers, and bound to the user identity;

2) Signed Pre Key (Signed Pre Key)-a mid-term key pair compliant with the DH protocol, created when the user registers, signed by the identity key, and periodically rotated. This key may be for protection The identity key is not disclosed;

3) One-Time Pre Keys —— Curve25519 key pair queue for one-time use, generated during installation and supplemented when insufficient.

Everyone must upload the public keys of these three key pairs to the server for others to use when they initiate a conversation.

If Alice wants to send a message to Bob, he must first determine the message key with Bob. The process is roughly as follows:

1) Alice wants to create an ephemeral key, we set it as EPK-A, this key pair is prepared for the ratchet algorithm later, and has little effect here;

2) Alice obtains the public keys of Bob's three key pairs from the server: identity key pair IPK-B; signed pre-shared key SPK-B; one-time pre-shared key OPK-B;

3) Alice starts to use the DH protocol to calculate the negotiation key. The parameters to be introduced include: the private keys of the two key pairs created by herself, and the three public keys of Bob. Then use a similar permutation and combination method to bring your own private key and the other party’s public key into the DH algorithm calculation respectively;

  DH1 = DH(IPK-A, SPK-B)

  DH2 = DH(EPK-A, IPK-B)

  DH3= DH(EPK-A, SPK-B)
  
  DH4 = DH(IPK-A, OPK-B)

  as the picture shows:

  ![x3dh](https://img.imgdb.cn/item/60176cfc3ffa7d37b3a23d37.png)



Then connect the four calculated values before and after to get the initial key, as follows:

  DH = DH1 || DH2 || DH3 || DH4

  note: "||" represents the connector, such as 456||123=456123

But the DH key is too long to be used as a message key, so a KDF calculation is performed on this initial key (KDF is a kind of key derivation algorithm, which can be regarded as an enhanced hash) to derive a fixed length Message key S

  S = KDF（DH1 || DH2 || DH3 || DH4）

At this step, Alice finally calculated the message key S.

4) Alice uses the message key S to encrypt the message, and sends it to Bob together with her identity public key IPK-A and ephemeral public key EPK-A.

5) After Bob receives Alice's message, he takes out Alice's 2 public keys, together with his own key, and uses the same algorithm as Alice to calculate the message key S.

6) Bob and Alice use the message key for encrypted communication.

From the above, X3DH is actually a complex version of the DH protocol, which solves the problem of how to determine the message key in an insecure network. But it is still not secure enough. You can think about it. Once the message key is cracked (although the probability is very small, it may happen), then all the messages of Alice and Bob can be decrypted. If a key is leaked, all chats are It will be cracked, which is too expensive.

If it is possible to change the message key every time a message is sent, then even if a certain message key is cracked, the hacker can only decrypt this message, and other messages cannot be decrypted. Therefore, the ratchet algorithm will be used, and the specific details will not be discussed.


## What we are doing:
On the basis of the message encryption of the signal protocol, combined with the private key system of the blockchain, to realize a privacy encrypted communication suitable for the blockchain field.

The signal protocol uses three types of key systems to ensure private communication. On this basis, we will add a fourth private key system to control encrypted currencies.

The private key system of signal protocol is unaware and uncontrollable by users, while our private key system is user-controllable and can be replaced at any time.

At present, we are debugging some codes of signal (https://github.com/signalapp). On the basis of these codes, we will increase the binding and mapping of the substrate ecological private key system, and provide the import of private keys. With the export function, a simple, usable, and private communication software that supports encrypted currency transfer is realized.



## Team :busts_in_silhouette:

### Team members
Sheng Xun(leader,a veteran in the blockchain industry, has participated in the development of bytom, Consortium  chain, and has early experience in developing instant messaging software.)

Ming Cheng(Product manager, participated in the design of timely communication software in traditional Internet.)

Li Sun(Familiar with user interface development,traditional Internet practitioners)

There are also several part-time developers. At the same time, we have established a community and have some resources for promotion.


### Contact

* **Contact Name:** Sheng Xun

* **Contact Email:**  swanson22727399@gmail.com

  

### Team Code Repos

https://github.com/singaldot/libsignal-client

## Development Roadmap 🔩

### Overview

* **Total Estimated Duration:**  3 months
* **Full-time equivalent (FTE):**  3 FTE
* **Total Costs:**  15000 DAI

### Milestone 1 Example — Implement Substrate Modules 

* **Estimated Duration:** 2 months
* **FTE:**  3 FTE
* **Costs:** 15000 DAI

| Number | Deliverable                                      | Specification                                   |
| ------ | ------------------------------------------------ | ----------------------------------------------- |
| 0a.    | License                                          | AGPL-3.0                                        |
| 0b.    |  Documentation | We will provide both inline documentation of the code and a basic tutorial that explain how users can use the tools we provide |
| 0c.    | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
|  0d.  | Article /Tutorial | 	We will write an article or tutorial that explains the work done as part of the grant. |
| 1      | libcoming-client | Add the substrate private key system on the basis of libsignal-client, providing basic functions of transfer, balance inquiry, private key import and export |
 | 2     | android and ios client |Private communication, import and export of digital currency accounts, transfer of digital currency, group building  

## Future Plans

Support some cryptocurrencies in the polkadot ecology, and provide the function of sending red packets.

## Additional Information :heavy_plus_sign: 

https://github.com/signalapp/libsignal-client

https://signal.org/
