# Talk Away dapp

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** Polvo Criações I.S
- **Payment Address:** Polkadot payment address.
 19aP7BAPFEfiqCpJwPSLfpcggjQBokLHwgaVEePxtnc2mHN
- **Level:** 2

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
## Project Overview :page_facing_up:

It's our first application.


### Overview

Talk Away is a social impact language learning startup that offers a unique and immersive learning experience. Our innovative approach involves learning languages through walking and exploring the city, making language learning both fun and practical.

 As a teaching platform on the web3, we are building a dapp to further expand access to language learning, offering a journey that the walkings will be registered on chain and the walkings and some steps/challenges of the journeys will generate a certificate in NFT (SBT).
 Our mission is to provide a differentiated teaching approach to promote language knowledge for people with limited financial resources and migratory vulnerability. We also aim to connect people from all over the world, fostering greater awareness of global cultural diversity.

### Project Details

 In this moment we have a Proof of Concept with around 100 classes offered. Our next step is a MVP in web3.
 Our mobile app will build from scratch under Polkadot.

 Dapp Solid overview:
 -	The home page contains classes and tutor info. 
 -	Forms for creating a user/tutor. 
 -	Log in with the user’s wallet.
 -	The user profile contains info about the user. Attended class, level, certifications
 -	The tutor profile contains info about the tutor, classes, rating 
 -	Terms policy
 -	Contact us
 
  Small enums 
 User type: student-tutor 
 Level enum: determine the level the student has 
 Student type enum: free - with certificate 

 Student info will be saved on the contract: 
 -	User id 
 -	User name 
 -	User type
 -	Public key 
 -	Level 
 -	Certificate 
 -	Has payed 
 -	Has checked 

 Tutor info will be saved on the contract: 
 -	User id 
 -	User name 
 -	Rating 
 -	Course info hash will contain a hash to the saved class info and material if existing.
 Course material and info will be saved on IPFS 

 Certification will be SBTs and will be minted at the end of each level.

 Technical parts: The stack will be React Native, node.js, and mongoose. 

Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):
- The (future) tokenomics of your project 
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach

### Ecosystem Fit

By integrating Talkaway's language learning platform with Polkadot, the protocol could potentially access language learning data and insights, which could be used to enhance language learning outcomes and help individuals and organizations to better understand language acquisition.

 Through our work and the experience of our teachers, polkadot will learn more directly about the needs and behaviors of people who want to learn a new language within the ecosystem. For example: which language is most in demand on web3? Here in Brazil and elsewhere, people have a language barrier with English to deepen their knowledge and practices on web3 because of the lack of English. With the implementation of our MVP, Talk Away will provide this information to the blockchain ecosystem. Only 3% of people in Brazil speak this language.

 Polkadot will provide the blockchain infrastructure that will enable the creation of the dapp, this data and insights will come from our operation through the success of customers in our ecosystem.

 This could lead to the creation of new data-driven solutions and services that leverage insights from Talkaway's language learning platform and Polkadot Ecossystem

 Additionally, Talk Away's focus on promoting language knowledge for people with limited financial resources and migratory vulnerability could align with Polkadot Protocol's mission to democratize access to data and empower underrepresented groups. Overall, integrating Talkaway with blockchain could create new opportunities for data-driven innovation in language learning and support the broader mission of democratizing data access.

 Building a language hub has great potential for onboarding people from the web2 to the web3 universe, and so one can see how decentralized technology is useful in education.

 Polkadot will be fundamental to build the basic structure of the platform with advanced technology, and from there we will be able to scale our project. As a decentralized data exchange protocol, Polkadot provides a secure and decentralized way to share, monetize, and analyze data.



## Team :busts_in_silhouette:

### Team members

Fernanda Paixão (Founder) 

 DOUGLAS MIRNDA (C0-FOUNDER) 
 LUCAS OLIVEIRA (DEV)
 Mohammed ElJazouli (TUTOR)
 


### Contact

- **Contact Name:** Fernanda Paixão Moreira
- **Contact Email:** talkawaylanguage@gmail.com
- **Website:** http://talkawaylanguage.com 

### Legal Structure



- **Registered Address:** Talk Away, Rua Joaquim Murtinho, 700 zipcode: 20241-320, Rio de Janeiro, Brazil.
- **Registered Legal Entity:** Polvo Criações I.S (Inova Simples)
 46.008.424/0001-01 https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Comprovante.asp


### Team's experience

Fernanda Paixão (Founder) Our team is versatile and international, as is our platform proposal! She holds a master's degree in art from the Federal University of the State of Rio de Janeiro, received a university grant from a Brazilian research foundation - CAPES, has written articles in some Brazilian journals.

 DOUGLAS MIRNDA (C0-FOUNDER) Douglas, aka Mr. Technocoins, founder of CoinMasters & Unstable Lab DAO, spreading cryptolove in Brazil and helping other blockchains with his projects and events. He created the Rio Crypto Hub, a monthly event, now happening in 4 states.

 LUCAS OLIVEIRA Senior Blockchain Engineer | Rust, Substrate, Solidity, Vyper, Ink!, Python, Typescript, WebAssembly. He graduated in Mathematics (2021), and attended events at the largest mathematics institute in the world (IMPA).He received the Blockchain Professional Certification from the University of California - Berkeley (2021). He worked as a Blockchain Developer at Lunes Platform for 2.5 years reaching the position of Blockchain Leader. 
In 2022 He dedicated myself to completing the introduction to DeFi at the University of Nicosia.

 Mohammed ElJazouli He is Moroccan, resident in Brazil, professor of Arabic and French, currently studying for a Masters in Social Sciences at the Fluminense Federal University. Fábio Sousa He is Brazilian, an English teacher, graduated in Letters from UNESA and holds a Cambridge C1 certificate.
 
### Team Code Repos

- 
- https://github.com/TalkAway?tab=repositories

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/riocryptohub/riocryptohub; 
-https://github.com/olivmath
- 
### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/olivmath/; 
- https://br.linkedin.com/in/douglas-miranda-; 
- https://br.linkedin.com/in/fernanda-paix%C3%A3o-1483ba240
- 
## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

https://medium.com/@nomadelabel/decentralized-education-what-decentralization-do-we-want-c58b619828d9

 https://gov.near.org/t/approved-july-august-2022-cultural-event-to-launch-payment-in-crypto-currency-on-the-talk-away-platform/23351
 
## Development Roadmap :nut_and_bolt:

1 month: dapp building  | start of project presentations to communities | dapps working check

### Overview

- **Total Estimated Duration:**  2 months
- **Full-Time Equivalent (FTE):**  30 days (Building the dapp) with 5 people full time. 60 days spreading and reach out people with 5 people full time. 
- **Total Costs:** 10,000 USD. 

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 10,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
|0 | 0a.	License | MIT
| 1. | Develop out Polkadot & Kusama core functionalities | - Polkadot & Kusama chain integration/support in wallet;<br/>- Polkadot & Kusama core functionalities ( send, receive, create/restore wallet and etc);<br/>- Complete Polkadot & Kusama transaction history with advanced information; 
 | 2. |  The smart contract will handle the following: Create new user | It will create a new user, either a free student or a certificate student. |Create new tutor | It will create a tutor with information about the courses, services he will provide, and the price for his lesson. | Create new resources | Login/logout from the wallet and chack the balance.
 | 3. | - Contact/Address book;<br/>- Payment requests;<br/>- Pay per lesson: it will get the predefined price from the student and save it to the website contract address | Payment for multiple classes will be an offer to get some discountS.| Certificate generation | Transfer payment to tutor: it will send the money from the website address to the tutor's address after the user call the check class successfully| Check class for user: after each class, the user -student- will call this function so the class passes successfully and the money can be transferred to the tutor. | Check level: this function will be called by the tutor only and return the level of the use | To be able to handle the following information we need to create a struct for the user, tutor, certification,	Part of the classes payment will go to social projects that will be voted on by community: voting system and distribution of the fund.<br/>- 
 | 4. | Internal testing | Internal testing and auditing of the developments, infrastructure and integrations |
 | 5. | <br/>- We will create a video tutorial to demonstrate how to use Polkadot crypto currecy and how you can open a wallet |
 | 6. | <br/>- We will do several onboardings and launch the app in 3 cities of Brazil at Rio Crypto Hub event - Florianópolis, São Paulo and Rio de Janeiro.
 



...


## Future Plans

next 3 months

To improve and continue the Digital marketing actions to genral public and onbording to the web3 language | Institutional partnership




## Additional Information :heavy_plus_sign:

By one year we are organization a hub in Rio de Janeiro called Rio Crypto Hub and we are expanding this to other cities of Brazil. 
See our social midias: https://www.instagram.com/riocryptohub/ https://twitter.com/RioCryptoHub
