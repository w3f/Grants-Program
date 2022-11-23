# Faceless Protocol

- **Proposer:** Faceless Protocol
- **Payment Address:** 0xe2B3e38a8E2b81B6b21B3F295C19403629B15993

## Project Overview :page_facing_up:

### Overview

#### Introduction

The payment scheme of the existing blockchain networks such as Polkadot is based on blockchain addresses, which are usually random strings that are hard to memorize and manage. Therefore, it might lead to many inconveniences for the users such as funds being transferred to the wrong address. In contrast, traditional payment is usually based on human-readable identifiers (HRI) instead of random strings, and this is for a good reason. There are many application scenarios that require the payment to be based on one's HRIs. When you pay your debts to your friends, you want the transaction record to be bound to your identity so that it can serve as proof later that your debt has been paid. Or if you take a business trip, you want your accommodation receipt to associate with your company's identifier so that you can reimburse the cost later. If you go to a grocery store to buy some daily goods, you want the transaction record to have your own identity on it to prove to the grocery cashier you have paid the bill. As a matter of fact, you can find countless examples that demonstrate that it is preferable to have your payment based on HRIs instead of random addresses. Cryptocurrency has already brought fundamental change to the existing financial system and internet economy. The emerging Web 3.0 is starting to give the user back the ownership and control of their data. However, we believe to base the payment on HRIs instead of random blockchain addresses
remains a final mile to deliver before cryptocurrency and Web 3.0 truly become mainstream and finally take over our daily life.

We have seen novel solutions emerging from various blockchain ecosystems that try to base payment on HRIs. The [Polkadot name system (PNS)](https://www.pns.link/) is a good example. However, most of these naming services focuses specifically on providing HRIs for the users of one single blockchain ecosystem and fails to bridge the users of the different ecosystems and hence are against the "breaking the digital barriers" ethos of Web 3.0. Most importantly, the new HRI system fails to incorporate many existing Web 2.0 human-readable identifiers that users are more comfortable using in practice, such as their various social media identities, email addresses (based on which PayPal systems are built), etc. We believe it is far more interesting to build a cross-platform payment scheme based on a generic HRI system that combines the users' existing Web 2.0 and Web 3.0 identifiers.

Different from the current internet economy that by and large is segmented by the digital wall garden erected by various internet monopoly companies, a cross-platform payment scheme will open up many interesting application scenarios that truly embody the spirit of Web 3.0. For instance, a Twitter user who doesn't necessarily have a medium account, when he/she sees a medium article he/she likes, he/she can simply tip the article author from his/her Twitter account via our Faceless protocol. If a Facebook user watches an advertisement on an estate NFT from Decentraland, he/she can pay for the NFT directly from his/her Facebook account via Faceless. A cross-platform payment scheme based on a generic HRI system will not only serve the purpose of bringing Web 2.0 users into the Web 3.0 world but also taps into this immense market and helps realize the full potential of Web 3.0.

Another limit of existing HRI-based payment solutions is the lack of privacy. This is actually closely tied to another interesting application of Faceless protocol, i.e., regulatory-compliant payment. Due to the explosive growth of Web 3.0 payment and its application such as decentralized finance (DeFi), NFT, etc, traditional financial institution is starting to migrate to Web 3.0. However, in order for the Cryptocurrency market to attract institutional money on a large scale, one has to address its regulatory concerns. The privacy issue is likely to play a central part in the regulatory compliance requirements. This has been demonstrated when Meta (previously Facebook) tried to launch its own cryptocurrency Diem (previously Libra). The most widely raised regulatory compliance issue of Diem during the senate hearing is the privacy issue \cite{Libra_privacy1,Libra_privacy2}. Faceless will provide a private payment scheme based on HRI and hence resolve the privacy issue.

Our protocol will become a fierce competitor in the sphere of regulatory-compliant payment. In the traditional banking system, whenever a client tries to open a bank account, the first thing the bank staff will ask for is his/her identity card as the client's identity is the foundation of regulation-compliant operations. In the Web 3.0 world, the HRIs will serve as the basis of regulatory-compliant finance. Faceless satisfies two vital requirements of regulatory compliance: 1. HRI will serve as the basis of regulatory compliance, 2. our payment solution will be private, which addresses a central issue in any regulatory-compliance requirement. One's HRIs such as social media accounts or PNS account can serve as the foundation to implement various regulation-compliant operations such as anti-money laundering. More sophisticated applications such as trusted decentralized finance (DeFi) can also be built on top of our system. For instance, one could build a credit system or lending and borrowing system based on one's HRIs.

Global Web 3.0 blockchain market revenue is estimated to reach 87 billion US dollars by 2030 \cite{Web3.0_market_size}, and the Web 3.0 payment revenue will be an 18 billion USD market. Even Faceless only takes ten percent of the Web 3.0 payment market, its revenue should be close to 2 billion USD. The growth potential for Faceless is limitless.

### Project Details

#### 1. Project Architecture

In the web 3.0 world, the tokens should be transferred directly between the HRIs while the blockchain addresses serve a role similar to the bank accounts
that are the portal of the tokens in the blockchain layer flowing in and out of these accounts. The relationship between the HRIs and blockchain addresses
is similar to bank accounts and payment accounts such as Paypal accounts, Wechat accounts, or Alipay accounts. A user can own a Paypal account, Wechat
account, or Alipay account, all of which are tied to the bank accounts. In our case, the HRI accounts will process all the daily transactions that are usually small-amount and high-frequency, while the blockchain address will be used for depositing and withdrawing large-amount and low-frequency tokens from the HRI accounts. The general idea of our architecture is shown in the figure.

<p align="center">
  <img src="https://github.com/lornacrevelingwgo23/img/blob/main/Screenshot%202022-05-22%20at%2014.44.22.png" alt="" width="70%"/>
</p>

Our scheme is based on identity-based encryption. The idea of identity-based encryption \cite{Shamir84} was proposed by Adi Shamir as a replacement for the traditional public-key encryption scheme, which requires a public key infrastructure to verify the correspondence between a public key and the user's real identity. In an identity-based encryption scheme, the user's identity is treated as one's public key, and a user with a secret key corresponding to the respective identity can be used to decrypt the ciphertext encrypted under the respective identity. In other words, instead of using a random string as the user's public key, the IBE system treats HRI as the user's public key. Another interesting feature of the IBE system is that there exists a master key that can be used to derive as many as necessary secret keys corresponding to different identities. This feature enables a user in our proposed scheme to use a master key to derive multiple secret keys to manage the private payment of multiple HRIs. A layer-2 private payment scheme based on the IBE scheme will generate the ciphertext for the transferred balance under the receiver's identity, which could be any HRI owned by the receiver. Since the encryption is directly tied to the users' identity, this will eliminate the need for an extra substrate pallet to manage the connection between the public key and HRIs.

At a high level, our framework shares certain similarities with the Zether scheme. To guarantee the confidentiality of the transferred amount, the transferred amount will be encrypted under the receiver's identity and homomorphically added to the receiver's ciphertext. The ciphertext of the transferred amount will be accompanied by a zero-knowledge proof showing the payment consistency etc. Since the main focus of our scheme is to protect the privacy of layer-2 payments between different HRIs, we can guarantee the privacy of the identifiers as long as the underlying encryption scheme can guarantee the privacy of the underlying identities. This is why we require the underlying IBE scheme to be anonymous, which implies that no useful information on the identity can be deduced from the ciphertext. Note each layer-1 account will manage one single set of public parameters and master key, which can be used to generate and manage multiple secret keys for multiple HRIs. However, both the registration of public parameters in the substrate pallet and the subsequent operations of the account does not reveal any useful information to help the adversary infer the underlying HRIs.

#### 2.  Preliminaries

2.1 Zether framework

The Zether framework \cite{bunz2019zether} and its variants \cite{SuterusuWP,SuterusuWebsite,tornado,AztecWP} require a user to select a secret key and register a corresponding layer-2 public key in the substrate pallet.
The substrate pallet initializes the user's layer-2 account with encryption of 0. Here the encryption algorithm is the homomorphic Elgamal encryption scheme. The user can then fund the account by homomorphic adding b tokens to the encrypted balance. The tokens can also be transferred between two layer-2 accounts, the user needs to generate two ciphertexts of the transferred amount for both the sender and receiver's public keys respectively. Zether employs a zero-knowledge proof scheme to prove that the two ciphertexts encrypt the same amount and the remaining sender balance after the sent amount deduced from the original account is still positive. To guarantee the anonymity of the involved sender and receiver public keys, the Zether framework adopts a one-our-of-many zero-knowledge proof scheme to ensure the sender and receiver's public keys are hidden among the public keys of anonymity set. The Zether framework also provides a mechanism to prevent the front-running and replay attacks, which we also adopt in this work.

2.2 Anonymous IBE (AIBE) with homomorphic property

The following `AIBE` scheme is a variant of the identity-based encryption proposed by Boneh and Franklin \cite{BonehF03}, that has homomorphic property with regard to identical identities. An identity-based encryption scheme usually consists of four algorithms: <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= Setup(\lambda)" style={{border: "none"}} /> takes the security parameter <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= \lambda" style={{border: "none"}} /> as inputs and outputs the master key <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= msk" style={{border: "none"}} /> and corresponding public parameter <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= para" style={{border: "none"}} />, which includes the corresponding public key <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= mpk" style={{border: "none"}} />. <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= Extract(ID, msk)" style={{border: "none"}} /> generates a secret key <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= SK_{\mbox{ID}}" style={{border: "none"}} /> corresponding to an identity <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= ID" style={{border: "none"}} /> using the master secret key <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= msk" style={{border: "none"}} />. The encryption algorithm <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= Encrypt(\mbox{ID}, para, m)" style={{border: "none"}} /> takes a message <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= m" style={{border: "none"}} />, public parameter <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= para" style={{border: "none"}} /> to generate a ciphertext corresponding to the identity <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= ID" style={{border: "none"}} />. The decryption algorithm <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= Decrypt(ID, para, C, SK_{\mbox{ID}})" style={{border: "none"}} /> decrypts the ciphertext <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= C" style={{border: "none"}} /> corresponding to <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= ID" style={{border: "none"}} /> with the identity secret key <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= SK_{\mbox{ID}}" style={{border: "none"}} />.

- <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= Setup(\lambda)" style={{border: "none"}} />. Given a security parameter <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= \lambda \in \mathbb{Z}" style={{border: "none"}} />, the algorithm works as follows:
On input <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= \lambda" style={{border: "none"}} /> to generate a prime <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= Q" style={{border: "none"}} />, two groups <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= \mathbb{G}_1, \mathbb{G}_2" style={{border: "none"}} /> of order <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= Q" style={{border: "none"}} />, and an admissible bilinear map <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= e:{\mathbb{G}_1} \times {\mathbb{G}_1} \to {\mathbb{G}_2}" style={{border: "none"}} />. Choose a random generator <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= g \in \mathbb{G}_1" style={{border: "none"}} />. Pick a random <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= s \in \mathbb{Z}^*_q" style={{border: "none"}} /> as the master secret key <img src="http://chart.googleapis.com/chart?cht=tx&chl= msk" style={{border: "none"}} /> and set the master public key as <img src="http://chart.googleapis.com/chart?cht=tx&chl= mpk=y=g^s" style={{border: "none"}} />. Choose a cryptographic hash function <img src="http://chart.googleapis.com/chart?cht=tx&chl= H:{\left\{ {0,1} \right\}^*} \to \mathbb{G}^*_1" style={{border: "none"}} />. The message space is <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= \mathcal{M} = \mathbb{Z}^*_q" style={{border: "none"}} />. The system parameters are <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= para = \left\langle {q,{\mathbb{G}_1},{\mathbb{G}_2},e,g,mpk,{H_1}} \right\rangle" style={{border: "none"}} />.

- <img src="http://chart.googleapis.com/chart?cht=tx&chl= Extract(ID, msk)" style={{border: "none"}} />. For a given string <img src="http://chart.googleapis.com/chart?cht=tx&chl= ID \in \{0, 1\}^*" style={{border: "none"}} />, the algorithm computes <img src="http://chart.googleapis.com/chart?cht=tx&chl= SK_{\mbox{ID}}" style={{border: "none"}} /> as <img src="http://chart.googleapis.com/chart?cht=tx&chl= {H_1}{\left( {{\rm{ID}}} \right)^s}" style={{border: "none"}} />.

- <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= Encrypt(ID, para, m)" style={{border: "none"}} />. To encrypt <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= m \in \mathcal{M}" style={{border: "none"}} /> under the public key <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= ID" style={{border: "none"}} /> do the following: (1) choose a random <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= r \in \mathbb{Z}^*_q" style={{border: "none"}} />, and (2) set the ciphertext to be

<p align="center">
  <img src="https://github.com/lornacrevelingwgo23/img/blob/main/Screenshot%202022-05-21%20at%2016.55.30.png" alt="" width="20%"/>
</p>

- <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= Decrypt(ID, para, C, SK_{\mbox{ID}})" style={{border: "none"}} />. Let <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= C = \left( {{C_1},{C_2}} \right)" style={{border: "none"}} /> be a ciphertext encrypted under the identity <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= ID" style={{border: "none"}} />. Calculate <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= m" style={{border: "none"}} /> such that <img src="https://github.com/lornacrevelingwgo23/img/blob/main/Screenshot%202022-05-21%20at%2016.55.44.png" alt="" width="20%"/>

Homomorphic property: it is easy to verify that the ciphertexts encrypted for an identitical identity under the same public parameters satisfy homomorphic property, i.e., $Encrypt(ID, para, m_1) \circ Encrypt(ID, para, m_2)= Encrypt(ID, para, m_1+m_2)$.

Anonymity: It can be proven the ciphertext of the above scheme is indistinguishable from two random group elements under the selective-ID model and random oracle. It implies the ciphertext does not reveal any extra information about the underlying identity it is encrypted for. Therefore, it guarantees the identity anonymity of the ciphertext. The anonymous IBE scheme was previously used to design a Cloud-Assisted Privacy-Preserving Mobile Health Monitoring scheme \cite{LinSZF13}.

We intend to implement our AIBE scheme based on this [CP-ABE library](https://github.com/Fraunhofer-AISEC/rabe) since attribute-based encryption (ABE) is the generalization of identity-based encryption.

2.3 Zero-knowledge proofs and Digital signature

Zero-knowledge proof is a fundamental building block of our anonymous payment scheme. It guarantees zero-knowledge property, which implies no efficient verifier can learn anything more than the validity of the statement. It also guarantees soundness, which prevents an adversary from producing valid proof of a statement without knowing the corresponding secret. We use similar notations for zero-knowledge proof as in Zether. Our zero-knowledge proof system has three algorithms (`ZKP.Setup`, `Prove`, `ZKP.Verify`), where `ZKP.Setup` takes security parameters as inputs and outputs public parameters. `Prove` takes as a witness of a statement as inputs and outputs a proof for the statement. `ZKP`.`Verify` checks if the proof is valid with respect to the statement. We will adopt the [ZeroPool](https://github.com/zeropoolnetwork/zeropool-substrate) library to implement our ZKP algorithms.

Digital signature is also a vital building block. It consists of the following algorithms (`Sig`.`Setup`, `Sign`, `Sig`.`Verify`). It follows the same definition as in Zether.

#### 3. Our scheme

3.1 Setup

`Setup` (Fig. \ref{Fig:setup}). The setup algorithm calls `AIBE`.`Setup`, `ZKP`.`Setup` and `Sig`.`Setup` as subroutines, which are the setup algorithms for the AIBE scheme, the zero-knowledge proof system and the digital signature scheme, respectively. The setup method also initializes account tables acc and pending transfers table pTransfers, and a variable <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= b_{\mbox{total}}" style={{border: "none"}} /> that tracks the total amount of tokens held by the pallet. The setup also specifies an epoch length E, a maximum amount value MAX and the maximum size of identifier set IM under the management of one master public key.

3.2 User algorithms

A user will use a master secret key $msk$ to manage multiple identities. A user runs one of the following algorithms to interact with the pallet. The outputs of these algorithms are raw transactions.

User algorithms

`CreateAccount`($1^\lambda$)($msk$, $mpk$) takes the security parameter $\lambda$ as input and outputs a master secret key $msk$ and the respective master public key $mpk$.

`CreateFundTx`($mpk$, $i_{\mbox{ID}}$, $amt$, $\mbox{ID}$) adds funds to an identifier $\mbox{ID}$ with $amt$ tokens under the management of the master public key $mpk$. It outputs $tx_{\mbox{fund}}$.

`CreateTransferTx`($msk_{from}$, $mpk_{to}$, $amt$, $st$, $\mbox{ID}$, $i_{\mbox{ID}}$, $\bar{\mbox{ID}}$, $i_{\bar{\mbox{ID}}}$) transfers money from one identifier $\mbox{ID}$ under the management of $mpk_{from}$ to the other identifier $\bar{\mbox{ID}}$ under the management of $mpk_{to}$. It takes a secret key $msk_{from}$, a destination public key $mpk_{to}$, an amount $amt$, and the state of the pallet $st$, the sender identifier $\mbox{ID}$ and the respective index $i_{\mbox{ID}}$, the receiver identifier $\bar{\mbox{ID}}$ and the respective $i_{\bar{\mbox{ID}}}$ at a certain block height $h$ as inputs. It outputs $tx_{trans}$.

`CreateBurnTx`($msk$, $\mbox{ID}$, $i_{\mbox{ID}}$, $st$) withdraws the entire balance from an account. It takes a secret key $msk$ and a state $st$ as inputs. It outputs $tx_{\mbox{burn}}$.  

`ReadBalance`($msk$, $st$) reads the balance of an account. It takes a secret key $msk$ and state $st$ as inputs, and outputs an integer $b$.

Note since we intend to keep the identifiers $\{\mbox{ID}\}$ under the management of $mpk$ secret, whenever a new identifier is registered under $mpk$, a new index will be assigned to the corresponding identity, which will be denoted as $i_{\mbox{ID}}$. The set of identifiers under the management of $mpk$ will be denoted as $\mbox{ID}_{mpk}$. Only the index of the identifier will be transferred publicly.

To protect the user anonymity and amount confidentiality, our scheme needs to invoke zero-knowledge proof as the sub-routine. The statements of the zero-knowledge proof are specified as follows:

Let (${C_{{\rm{ID}},1}}$,${C_{{\rm{ID}},2}}$) be the encryption
of balance for ID under $mpk=y=g^s$. The pallet needs to deduct b*from ID's balance and add the same amount to $\overline {{\rm{ID}}}$'s balance, which will be put into a pending state. Since we need to hide b* in this process, user will encrypt b* under both ($mpk=y$, ID), and ($\overline{mpk}=\overline{y}$, $\overline {{\rm{ID}}} $) to get ($C_1$, $C_2$) and ($C_1$, ${\bar C}_2$), respectively. Now, it must provide a proof to show that:

1. both ciphertexts are well formed and encrypt the same value b*;
2. b* is a positive value; and,
3. the remaining balance of ID, say b', is positive too.

More formally, a user proves the following statement <img src="<http://chart.googleapis.com/chart?cht=tx&chl>= st_{transfer}" style={{border: "none"}} /> for the transfer operation:

<p align="center">
  <img src="https://github.com/lornacrevelingwgo23/img/blob/main/Screenshot%202022-05-21%20at%2016.56.15.png" alt="" width="50%"/>
</p>

The following is the statement for the burning transaction, i.e., $st_{burn}$. The statement shows that the user knows a valid secret key $s{k_{{\rm{ID}}}}$ with respect to the public parameters of the AIBE scheme and the identity ID, and (${C_{{\rm{ID}},1}},{C_{{\rm{ID}},2}}$) is a valid encryption of $b$ for ID.

<p align="center">
  <img src="https://github.com/lornacrevelingwgo23/img/blob/main/Screenshot%202022-05-21%20at%2016.56.32.png" alt="" width="50%"/>
</p>

3.3 Substrate pallet

Our substrate pallet has three main functions `Fund`, `Transfer`, and `Burn`. They take $tx_{\mbox{fund}}$, $tx_{\mbox{trans}}$, and $tx_{\mbox{burn}}$ as inputs respectively. These functions check whether the inputs are valid by verifying a proof or checking a nonce. If any of these checks fail, the function outputs 0.

#### Team Interest

The Faceless Protocol team consists of senior cryptographers, engineers and startup founders. Our team has decades of research and development experience in zero-knowledge proof and blockchain. Our engineering team has been responsible for the design and implementation of multiple successful blockchain projects based on zero-knowledge proof and other cryptographic algorithms such as [Suterusu](https://suterusu.io/), which has processed over 250 million USD worth of transactions and served over 15000 users. We have a deep understanding of Zether protocol from our past experience in designing and implementing Suterusu protocol. Our research team has also published papers at top cryptography conferences such as [Eurocrypt](https://eprint.iacr.org/2021/540), CCS, Usenisec etc. The background of Our engineering team includes major internet companies such as Alibaba, Microsoft, Huawei, Oracle, etc.

##### Substrate/Polkadot Integration

We will leverage the existing cryptographic library in the Polkadot ecosystem, such as [ZeroPool](https://github.com/zeropoolnetwork/zeropool-substrate) to build the underlying cryptographic library that implements the zero-knowledge proof for the private payment scheme. We will also implement the AIBE scheme and integrate the Faceless protocol with the Polkadot ecosystem. Furthermore, we will also build a substrate pallet that integrates the verification logic of the associated zero-knowledge proof and provide the necessary UI for the users to interact with all these algorithms to launch the private payment for HRIs. Our ultimate goal is to launch a parachain on Polkadot so that the Faceless protocol can provide privacy service to the users of Polkadot ecosystem.

##### Open API and SDK

The ultimate goal of Faceless Protocol is to provide an essential open API and SDK fully powering the private payment framework for HRIs on Polkadot, including:

- A cryptographic library that implements the faceless cryptographic library, including the underlying AIBE scheme and the associated zero-knowlege proof algorithm for the private payment. A substrate module that integrates the verification logic of the zero-knowledge proof.
- The client can trigger the aforementioned cryptographic modules and the necessary UI to enable the users to interact with all these algorithms.

#### Ecosystem Fits

Payment schemes in the Web 3.0 world will be based on HRIs. This is the only way to truly tie the payment to the application scenario and push the Web 3.0 payment to the broader users. The HRI-based payment will serve the purpose of bringing the Web 2.0 users to the Web 3.0 world. Polkadot is at the forefront of Web 3.0, and it has been the pioneer in establishing the standard for Web 3.0 DID. A private payment scheme for HRI is a perfect fit for the Polkadot ecosystem. It will facilitate the wider deployment and usage of Web 3.0 DID, especially by satisfying the need of those privacy-conscious users. It will protect the payment privacy of the users when they enjoy the convenience of HRI-based payment and potentially introduce them to many interesting applications of HRI-based private payment such as regulation-compliant private payment, etc.

We have known a few existing private payment schemes for the Polkadot ecosystem, such as Raze or Manta networks. However, none of these private payment schemes is specifically designed for HRIs, and it's not clear how they can easily adapt their scheme to the case of HRIs. There exist many payment schemes outside of the Polkadot ecosystem, such as Tornado.cash, Aztec, and Suterusu. However, none of these payment schemes are designed for HRIs either. There also exists a few other schemes that try to either connect Web 2.0 users to the Web 3.0 world such as CyberConnect or naming services such as PNS and ENS, which can serve as a foundation for an HRI-based payment scheme. However, neither of them provides any private payment solution, which is technically challenging.

## Team :busts_in_silhouette:

### Team Members

- [Heisenberg lin](https://medium.com/@lh-76196) - Applied cryptographer.
- Michelle Han - Chief Marketing Officer.
- Zico Huang - Cryptography engineer.

### Legal Structure

- Faceless Technology Ltd. is a company registered in the BVI.

### Team Experience

**Heisenberg lin**  

Ph.D, degrees in Applied cryptography and privacy-preserving distributed systems from SJTU and UFL. Postdoc in EPFL, Switzerland. Associate principal engineer in ASTRI, Hong Kong, PI of several blockchain projects supported by multi-million-HKD funds. Over 20 top-tier publications with over 1559 citations on applied cryptography and information security. Two US patents. Currently CTO of Suterusu project.

**Michelle Han**  

She was the co-founder of a top real estate consulting company in China. The company served many unicorn clients including ByteDance and Alibaba. After entering the blockchain field, as the CMO of the Suterusu project, she maintained an active community of over 80000 members and led multiple successful large community events. She is an expert on building a comprehensive network of KOLs and media outlets in various countries and channels.

**Zico Huang**  

Ph.D. degree in Applied cryptography from EPFL, Switzerland. Senior cryptographic research engineer in top Internet companies such as Alibaba, and Microsoft. Developed multiple cryptography libraries that have been widely used in the industry. Multiple publications on top information security conferences and journals.  

### Team Profiles

- [https://www.linkedin.com/in/huang-lin](https://www.linkedin.com/in/huang-lin-0b70b886/), [https://lh-76196.medium.com/](https://lh-76196.medium.com/)

- [https://www.linkedin.com/in/michellehan](https://www.linkedin.com/in/michellehan-228252233/)
- [https://github.com/zicofish](https://github.com/zicofish)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months

- **Full-time equivalent (FTE):** 3 FTE
- **Total Costs:** 30,000 DAI

#### Milestone 1 — Implement Cryptographic Modules

- **Estimated Duration:** 1 month

- **FTE:** 1
- **Costs:** 10K DAI

The main deliverable of this milestone includes:

- A cryptographic library written in Rust that implements the underlying anonymous identity-based encryption and zero-knowledge proof scheme.

- A substrate pallet that integrates the verification logic of the associated zero-knowledge proof for the faceless protocol.

| **Number** | **Deliverable**                       | **Specification**                                            |
| ---------- | ------------------------------------- | ------------------------------------------------------------ |
| 0a.        | License                               | Apache License 2.0                                           |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article/Tutorial | We will publish a medium article that explains the functionality of the proposed cryptographic library and substrate pallet delivered in this milestone.
| 1.         | Cryptographic modules  | We will implement the cryptographic modules including the aforementioned anonymous identity-based encryption based on the [CP-ABE library](https://github.com/Fraunhofer-AISEC/rabe) and the associated zero-knowledge proof based on the [ZeroPool library](https://github.com/zeropoolnetwork/zeropool-substrate). The cryptographic modules will be written in Rust. We will implement a substrate pallet that integrates the verification logic of the Faceless private payment scheme. The main statements of the zero-knowledge proof schemes are defined in $st_{transfer}$ and $st_{burn}$. |
| 2.         | Benchmark | Perform unit tests on the individual algorithms to ensure their safety. Benchmark on the computational cost of the proposed algorithms. |
| 3.         | Docker | We will provide a dockerfile to demonstrate the usage of our modules. |

#### Milestone 2 —— Client Implementation and Integration

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 20K DAI

The main deliverable of the milestone is the client that can trigger the aforementioned cryptographic modules and the necessary UI to enable the users to interact with all these algorithms.

| **Number** | **Deliverable**                       | **Specification**                                            |
| ---------- | ------------------------------------- | ------------------------------------------------------------ |
| 0a.        | License                               | Apache License 2.0                                           |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article/Tutorial | We will publish a medium article that explains the functionality of the proposed client and UI delivered in this milestone.
| 1.         | Client modules        | We will implement the client that can trigger the aforementioned cryptographic modules, i.e., all the user algorithms including `CreateAccount`, `CreateFundTx`, `CreateTransferTx`, `CreateBurnTx`, `ReadBalance`. We will provide a basic UI to take inputs from the users for all these algorithms and receive the outputs. |
| 2.         | Benchmark | Perform unit tests on the individual algorithms to ensure their safety. Benchmark on the latency and usability of the proposed client functionalities. |
| 3.         | Docker  | We will provide a dockerfile to demonstrate the usage of our modules. |

### Community Engagement

- **Bounty Program for General Community:** We will reward users who contribute positively to community building and content creation through an Ambassador Program. The community management team will be available 24/7 to answer questions.

- **Incentive Program for users using our protocol:** After the main functions are completed, we will provide incentives for users to adopt our protocol.
- **Parachain Loan Offering Campaign:** We may hold a Parachain Loan Offering and reward users for helping our auction with Faceless Protocol tokens.

## Future Plans

We will hire at least 8-10 more devs in the next three months. Meanwhile, we will apply for the Substrate Builder's Program. After that, Faceless Protocol wants to become a parachain for the Polkadot network.

### Reference

[Libra_privacy1] [Us lawmakers hammer facebook exec over libra's threat to privacy, July
17, 2019.](https://www.theguardian.com/technology/2019/jul/17/facebook-libracryptocurrency-congress)

[Libra_privacy2] [Us senators grill facebook on
privacy, trust issues in libra hearing, July 16, 2019.](https://www.theguardian.com/technology/2019/jul/17/facebook-libracryptocurrency-congress)

[Web3.0_market_size] PMI, [Web 3.0 Blockchain Market is estimated to be US$ 87761.35 million by 2030 with a CAGR of 45.20% - By PMI](https://www.globenewswire.com/news-release/2022/05/05/2436993/0/en/Web-3-0-Blockchain-Market-is-estimated-to-be-US-87761-35-million-by-2030-with-a-CAGR-of-45-20-By-PMI.html)

[Shamir84] Adi Shamir. Identity-based cryptosystems and signature schemes. In G. R. Blakley and
David Chaum, editors, Advances in Cryptology, Proceedings of CRYPTO '84, Santa
Barbara, California, USA, August 19-22, 1984, Proceedings, volume 196 of Lecture
Notes in Computer Science, pages 47-53. Springer, 1984.

[bunz2019zether] Benedikt Bunz, Shashank Agrawal, Mahdi Zamani, and Dan Boneh. Zether: Towards
privacy in a smart contract world. In Joseph Bonneau and Nadia Heninger,
editors, Financial Cryptography and Data Security - 24th International Conference,
FC 2020, Kota Kinabalu, Malaysia, February 10-14, 2020 Revised Selected Papers,
volume 12059 of Lecture Notes in Computer Science, pages 423-443. Springer,
2020.

[SuterusuWP] [Huang Lin. Suterusu white paper, 2019](https://github.com/suterusuteam/suterusu-documents)

[SuterusuWebsite] <https://suterusu.io/>.

[tornado] <https://docs.tornado.cash/tornado-cash-nova/logging-in-tornado-cash-nova>.

[AztecWP] Zachary J. Williamson, [The aztec protocol, 2018](https://github.com/AztecProtocol/AZTEC/blob/master/AZTEC.pdf)

[BonehF03] Dan Boneh and Matthew K. Franklin. Identity-based encryption from the weil
pairing. SIAM J. Comput., 32(3):586-615, 2003.

[LinSZF13] Huang Lin, Jun Shao, Chi Zhang, and Yuguang Fang. CAM: cloud-assisted privacy
preserving mobile health monitoring. IEEE Trans. Inf. Forensics Secur., 8(6):985-997, 2013.
