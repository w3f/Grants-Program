# dApp-project-

* team_name: Talk Away
* contact_name: Fernanda Paixão e Douglas Miranda 
* contact_email: talkawaylanguage@gmail.com
* total_cost_dai: 14.000,00
* level: 2
* total_milestones : 2

Adress: Rua Joaquim Murtinho 700/s204. Zip code 20241320
This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a > (such as this one) should be removed. Please use markdown instead of HTML (e.g. instead of ).
See the [Grants Program Process]
(https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

Team Name: Talk Away
Payment Address: Polkadot payment address.
19aP7BAPFEfiqCpJwPSLfpcggjQBokLHwgaVEePxtnc2mHN

OVERVIEW

Talk Away is a social impact language learning startup that offers a unique and immersive learning experience. Our innovative approach involves learning languages through walking and exploring the city, making language learning both fun and practical.

As a teaching platform on the web3, we are building a dapp and a metaverse prototype to further expand access to language learning. We haven't chosen a location to deploy yet, we would like to use Polkadot's decentralized metaverse infrastructure. Like efinity or other parachain metaverses projects.

Our mission is to provide a differentiated teaching approach to promote language knowledge for people with limited financial resources and migratory vulnerability. We also aim to connect people from all over the world, fostering greater awareness of global cultural diversity.


TECHNICAL PART AND PROJECT DETAILS

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):
In this moment we have a Proof of Concept with around 100 classes offered. Our next step is a MVP in web3.
Our dApp will build from scratch under Polkadot.

* The smart contract will handle the following:

-	Create new user 
It will create a new user, either a free student or a certificate student.
-	Create new tutor 
It will create a tutor with information about the courses, services he will provide, and the price for his lesson. 
-	Create new resources 
-	Login/logout from the wallet and chack thebalance.
-	Pay per lesson: it will get the predefined price from the student and save it to the website contract address 
-	Payment for multiple classes will be an offer to get some discounts. 
-	Certificate generation 
-	Transfer payment to tutor: it will send the money from the website address to the tutor's address after the user call the check class successfully.
-	Check class for user: after each class, the user -student- will call this function so the class passes successfully and the money can be transferred to the tutor.
-	Check level: this function will be called by the tutor only and return the level of the user
To be able to handle the following information we need to create a struct for the user, tutor, 
certification 
-	Part of the classes payment will go to social projects that will be voted on by community: voting system and distribution of the fund.

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

Technical parts: The stack will be React.js, node.js, and mongoose. 

Dapp Solid overview:
-	The home page contains classes and tutor info. 
-	Forms for creating a user/tutor. 
-	Log in with the user’s wallet.
-	The user profile contains info about the user. Attended class, level, certifications
-	The tutor profile contains info about the tutor, classes, rating 
-	Terms policy
-	Contact us



ECOSYSTEM FIT
Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:
By integrating Talkaway's language learning platform with Polkadot, the protocol could potentially access language learning data and insights, which could be used to enhance language learning outcomes and help individuals and organizations to better understand language acquisition.

Through our work and the experience of our teachers, polkadot will learn more directly about the needs and behaviors of people who want to learn a new language within the ecosystem. For example: which language is most in demand on web3? Here in Brazil and elsewhere, people have a language barrier with English to deepen their knowledge and practices on web3 because of the lack of English. With the implementation of our MVP, Talk Away will provide this information to the blockchain ecosystem. Only 3% of people in Brazil speak this language.

Polkadot will provide the blockchain infrastructure that will enable the creation of the dapp, this data and insights will come from our operation through the success of customers in our ecosystem.

This could lead to the creation of new data-driven solutions and services that leverage insights from Talkaway's language learning platform and Polkadot Ecossystem

Additionally, Talk Away's focus on promoting language knowledge for people with limited financial resources and migratory vulnerability could align with Polkadot Protocol's mission to democratize access to data and empower underrepresented groups. Overall, integrating Talkaway with blockchain could create new opportunities for data-driven innovation in language learning and support the broader mission of democratizing data access.

Building a language hub has great potential for onboarding people from the web2 to the web3 universe, and so one can see how decentralized technology is useful in education.

Polkadot will be fundamental to build the basic structure of the platform with advanced technology, and from there we will be able to scale our project. As a decentralized data exchange protocol, Polkadot provides a secure and decentralized way to share, monetize, and analyze data.

Total Estimated Duration: 2 months
Full-Time Equivalent (FTE): 60 days (Building the dapp) with 5 people full time. 120 days spreading and reach out people with 5 people full time.
Total Costs: US$ 14.000,00 (milestone 1 and 2)

Milestone 1 — Basic functionality
Estimated duration: 1 month
FTE: 1,5
Costs: 7.000 USD

Talk Away app testnet format - Decentralized learning platform. Gamification of proficiency levels with smart contract automation and certification for each level in SBTs. In this first milestone, we will do the first test.
The Talk Away application has the potential to be an open-source base for other educational projects. The structure is made with a logbook between student and tutor, where there will be a journey, in which the experiences will be registered with the blockchain technology - smart contracts and certified in SBTs, besides the financial decentralization in which part of the profit will go to social projects voted and distributed by the community with smart contracts.

DERIVERABLES

Documentation
We will provide both inline documentation of the code and a basic tutorial that explains how a user can the app as a client and share our codes in githubs.

Testing guide

Share the app for our community to test the testnet app.

Onboarding to web2 customers for use of the platform.

Smart contract

We will release our smart contract codes in a github page of our app structure.

Contact

* Contact Name: Fernanda Paixão Moreira
* Contact Email: talkawaylanguage@gmail.com
* Website: http://talkawaylanguage.com/
* Legal Structure
Registered Address: Talk Away, Rua Joaquim Murtinho, 700 zipcode: 20241-320, Rio de Janeiro, Brazil.
Registered Legal Entity: Polvo Criações I.S (Inova Simples)
46.008.424/0001-01 https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Comprovante.asp

TEAM'S EXPERIENCE

Fernanda Paixão (Founder) Our team is versatile and international, as is our platform proposal! She holds a master's degree in art from the Federal University of the State of Rio de Janeiro, received a university grant from a Brazilian research foundation - CAPES, has written articles in some Brazilian journals.

DOUGLAS MIRNDA (C0-FOUNDER) Douglas, aka Mr. Technocoins, founder of CoinMasters & Unstable Lab DAO, spreading cryptolove in Brazil and helping other blockchains with his projects and events. He created the Rio Crypto Hub, a monthly event, now happening in 4 states.

RASHA ABDULLRAZZACK She's Turkish and has arrived to join our team for the next stage of Talk Away's entry to web3! We still have few developers in the world who are experts in building a dApp and Rasha is one of them. She is a web developer on the Near Education team.

GUSTAVO MANUTE He is a digital artist, meta-architect and voxel designer. His trajectory at web3 began in 2021 on the tezos, ethereum and matic networks. Currently, he works as an advisor at Nomade Label DAO and with several works related to the metaverse. He participated in a Near Foundation fellowship in collaboration with Near Alexandria Library, and built many spaces with Ethereum partnership in voxel metaverse.

Mohammed ElJazouli He is Moroccan, resident in Brazil, professor of Arabic and French, currently studying for a Masters in Social Sciences at the Fluminense Federal University. Fábio Sousa He is Brazilian, an English teacher, graduated in Letters from UNESA and holds a Cambridge C1 certificate.

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

https://github.com/riocryptohub/riocryptohub; https://rashaabdulrazzak.github.io/my-profile/#/; https://github.com/TalkAway?tab=repositories
Team LinkedIn Profiles
https://tr.linkedin.com/in/rasha-abdulrazzak; https://br.linkedin.com/in/douglas-miranda-; https://br.linkedin.com/in/fernanda-paix%C3%A3o-1483ba240

DEVELOPMENT STATUS 📖
If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

https://medium.com/@nomadelabel/decentralized-education-what-decentralization-do-we-want-c58b619828d9

https://gov.near.org/t/approved-july-august-2022-cultural-event-to-launch-payment-in-crypto-currency-on-the-talk-away-platform/23351

