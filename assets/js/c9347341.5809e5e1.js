"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[31759],{13114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(8209);const r={},l="Dotflow",o={unversionedId:"applications/Dotflow",id:"applications/Dotflow",title:"Dotflow",description:"- Team Name: Sergej Sakac & Oliver Lim",source:"@site/applications/Dotflow.md",sourceDirName:"applications",slug:"/applications/Dotflow",permalink:"/applications/Dotflow",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Dotflow.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Problem",id:"problem",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Privacy",id:"privacy",level:3},{value:"UI Design",id:"ui-design",level:3},{value:"My Identity page",id:"my-identity-page",level:4},{value:"Transfer page",id:"transfer-page",level:4},{value:"Address Book page",id:"address-book-page",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Target Audience",id:"target-audience",level:4},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Sergej Sakac",id:"sergej-sakac",level:4},{value:"Oliver Lim",id:"oliver-lim",level:4},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Example \u2014 Basic functionality",id:"milestone-1-example--basic-functionality",level:3},{value:"Milestone 2 Example \u2014 Additional features",id:"milestone-2-example--additional-features",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],h={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dotflow"},"Dotflow"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Sergej Sakac & Oliver Lim"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x1e86CD18E4443B5f57b0133077954Cd84896964d (USDC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("h4",{id:"problem"},"Problem"),(0,i.kt)("p",null,"We can most certainly agree that the future is multi-chain. As such, it is not uncommon for users to hold multiple accounts across various chains for reasons such as distinct address formats and security benefits. However, this practice presents a challenge in managing multiple addresses. Adding to the complexity is the need to verify the address of the intended recipient, as it may have changed over time."),(0,i.kt)("p",null,"In summary, there are two key challenges to address: the management of multiple addresses and making sure the addresses of the recepients did not change in the meantime."),(0,i.kt)("p",null,"To mitigate these challenges, we aim to simplify the user experience by abstracting away the complexity of address management."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Our project will comprise two smart contracts coded in ink!, and a React.js-based user interface."),(0,i.kt)("p",null,"One of the ink! contracts will store the user's address-related data in an entity called ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity"),". Each user will have their own ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity"),", containing their addresses across different chains. The Identity creators will be responsible for updating their addresses if any changes occur. Every Identity will be assigned a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityNo"),", which will serve a crucial purpose in the address book contract and UI."),(0,i.kt)("p",null,"Additionally, this contract will feature a function that, based on input arguments, will return the appropriate destination address for token transfers. This function will mainly be used by the user interface."),(0,i.kt)("p",null,"The second contract will be an address book that enables users to store the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityNos")," of the people they are most frequently engaged with. Each user will have the option to create their own address book, where they can add a nickname to each identity to differentiate them easily. Each address book will be attached to a wallet so that when a user logs in with his wallet the UI and provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityKey")," the frontend will automatically be able to display the address book to the user."),(0,i.kt)("p",null,"The UI will serve the purpose of interacting with both smart contracts. Users will be able to create an identity and customize the addresses of their identity. Using the UI users will also be able to create their address book and customize it. The most important functionality the UI will provide will be the routing.\nWhen a user wants to transfer some tokens to an identity the user will only have to worry about the token, origin and destination chain, and the identity they want to send the tokens to. Based on all of this the UI will query the identity contract and based on that create a transaction that will route the tokens to the proper address."),(0,i.kt)("p",null,"In case the origin and destination chain are not the same, the UI will create an XCM message that will route the tokens to the proper blockchain. For the XCM transaction to work there has to be an existing XCM channel between the two blockchains."),(0,i.kt)("h3",{id:"privacy"},"Privacy"),(0,i.kt)("p",null,"Most of us don't want to share all of our addresses with the rest of the world. For that reason, we are including some privacy features that will keep all our addresses private.\nAll of the addresses in the identity smart contract will be encrypted with a secret key."),(0,i.kt)("p",null,"Users will have multiple addresses each attached to a certain blockchain. AES 128-bit ciphers will be generated by the UI per each blockchain. These ciphers will only change if the user changes them when updating an address, otherwise, they will always be the same for the associated blockchain.\nCiphers will be created when creating an identity or when adding a new blockchain address to the identity. These ciphers will be stored in a structured format so that the frontend code can associate each cipher with a blockchain. Ciphers will be stored locally in the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-- We will call this data the 'Identity Key' --\nblockchain_name_1:cipher_1;blockchain_name_2:cipher_2;...and so on\n")),(0,i.kt)("p",null,"Each address will be encrypted with the associated cipher before it gets stored in the identity contract. This will ensure that no one has access to an identity's addresses simply by reading the contract's state."),(0,i.kt)("p",null,"To share an identity with someone the ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity Key")," will also be needed to be sent together with the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityNo"),". In case an identity doesn't want to expose all of their addresses to someone else, but only some of them, it is possible to send part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity Key")," that contains the ciphers for the blockchain addresses he wants to share.\nOf course, the user won't need to do this task manually, the UI will make this task very simple. The following section will show how this will work from the user's perspective."),(0,i.kt)("p",null,"In case we update some of our addresses but we want to restrict access to the users that previously were granted access to that address there will be an option to regenerate the cipher. This way everyone that had access to the old address won't have access to the new one."),(0,i.kt)("h3",{id:"ui-design"},"UI Design"),(0,i.kt)("p",null,"The UI will consist of three main parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"My Identity page"),(0,i.kt)("li",{parentName:"ul"},"Transfer page"),(0,i.kt)("li",{parentName:"ul"},"Address book page")),(0,i.kt)("h4",{id:"my-identity-page"},"My Identity page"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://postimg.cc/dh42rHhS"},(0,i.kt)("img",{parentName:"a",src:"https://i.postimg.cc/nLt38NpZ/1-1-dashboard-2.png",alt:"1-1-dashboard-2.png"}))),(0,i.kt)("p",null,"The user will be able to create his own identity and provide the addresses he owns on to his identity."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.postimg.cc/jdKdPQS5/1-1-create-identity.png",alt:"Add Address"})),(0,i.kt)("p",null,"In case some of the addresses the user owns change over time he will be able to edit them.\nAlso, we can select the option to regenerate the cipher so that people that had access to the old address won't be able to access the new one."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://postimg.cc/jW9gtWQ0"},(0,i.kt)("img",{parentName:"a",src:"https://i.postimg.cc/509Z5LX0/1-1-create-identity-4.png",alt:"1-1-create-identity-4.png"}))),(0,i.kt)("p",null,"When sharing their identity users will also be able to select which addresses will be available for the person they are sending their identity to. The user will have to copy his ",(0,i.kt)("inlineCode",{parentName:"p"},"identityNo")," but also the ",(0,i.kt)("inlineCode",{parentName:"p"},"identityKey")," which specifies which addresses are accessible for the user that receives this key."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://postimg.cc/fV9scj4D"},(0,i.kt)("img",{parentName:"a",src:"https://i.postimg.cc/BnhvGMML/1-1-create-identity-2.png",alt:"1-1-create-identity-2.png"}))),(0,i.kt)("h4",{id:"transfer-page"},"Transfer page"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://postimg.cc/75MYwz6w"},(0,i.kt)("img",{parentName:"a",src:"https://i.postimg.cc/Cx9ZCHpB/2-1-transfer-1.png",alt:"2-1-transfer-1.png"}))),(0,i.kt)("p",null,"Ther user will be able to transfer tokens to an identity by specifying the origin chain, destionation chain, and the receiver's ",(0,i.kt)("inlineCode",{parentName:"p"},"identityNo"),"."),(0,i.kt)("h4",{id:"address-book-page"},"Address Book page"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.postimg.cc/QtXyT9kK/3-1-Address-book.png",alt:"Address book page"})),(0,i.kt)("p",null,"The user will be able to add identities to his own address book. The identities will be added by providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"identityNo")," and some nickname for the identity.\nAlso by clicking on the transfer icon on one of the identities the user will be redirected to the transfer page where the ",(0,i.kt)("inlineCode",{parentName:"p"},"identityNo")," will be automatically filled out."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://postimg.cc/PPLbMNSd"},(0,i.kt)("img",{parentName:"a",src:"https://i.postimg.cc/xT5snzHN/3-1-Address-book-3.png",alt:"3-1-Address-book-3.png"}))),(0,i.kt)("p",null,"When adding an Identity to an address book the user will also be required to provide the Identity Key which will be used for decrypting the identity's addresses when sending tokens."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"This project fits perfectly with the Polkadot ecosystem because it has everything we need to make it work. Polkadot is a multi-chain network, so a lot of users have different addresses on different chains for the same reasons we mentioned earlier. That's why the problems we talked about are important in this ecosystem."),(0,i.kt)("p",null,"XCM is going to be a core component of our project since it'll help us transfer tokens between the parachains and the relay chain."),(0,i.kt)("h4",{id:"target-audience"},"Target Audience"),(0,i.kt)("p",null,"Our target audience is people who deal with sending assets frequently over the Polkadot network."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sergej Sakac ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Szegoo"},"Szegoo")),(0,i.kt)("li",{parentName:"ul"},"Oliver Lim ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cuteolaf"},"cuteolaf"))),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Sergej Sakac"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:sakacszergej@gmail.com"},"sakacszergej@gmail.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Szegoo"},"https://github.com/Szegoo"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Kanalska 7 Novi Sad Serbia"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," MASTER UNION LLC.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("h4",{id:"sergej-sakac"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/Szegoo"},"Sergej Sakac")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"More than three years of programming experience"),(0,i.kt)("li",{parentName:"ul"},"Active contributor to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/pulls?q=is%3Apr+author%3ASzegoo"},"Substrate")),(0,i.kt)("li",{parentName:"ul"},"Member of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/polkadot-fellows/seeding/pull/36"},"fellowship")),(0,i.kt)("li",{parentName:"ul"},"Contributor to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rmrk-team/rmrk-substrate/pulls?q=is%3Apr+is%3Aclosed+author%3ASzegoo"},"rmrk-pallets"))),(0,i.kt)("h4",{id:"oliver-lim"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/cuteolaf"},"Oliver Lim")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Full stack blockchain developer with 5+ years of experience"),(0,i.kt)("li",{parentName:"ul"},"Quick learner and active contributor to open source projects",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fair-squares/fair-squares"},"Fair Squares")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/imbuenetwork"},"Imbue Network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/anagolay/anagolay"},"Anagolay Network")),(0,i.kt)("li",{parentName:"ul"},"...")))),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("p",null,"We will be working on two separate repos, one for the UI and the other for the ink! contracts."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/TheDotflow/dotflow-ui"},"https://github.com/TheDotflow/dotflow-ui")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/TheDotflow/dotflow-ink"},"https://github.com/TheDotflow/dotflow-ink"))),(0,i.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Szegoo"},"https://github.com/Szegoo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cuteolaf"},"https://github.com/cuteolaf"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://linkedin.com/in/sergej-sakac-334a47252"},"http://linkedin.com/in/sergej-sakac-334a47252")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/oliver-lim-2215a8235/"},"https://www.linkedin.com/in/oliver-lim-2215a8235/"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2,5 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1.5 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 19,000 USD")),(0,i.kt)("h3",{id:"milestone-1-example--basic-functionality"},"Milestone 1 Example \u2014 Basic functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1,5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 8,000")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Ink! contracts and the UI code will be well documented and open for everybody to take a look. The UI will be simple and intuitive to use.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The Identity ink! contract will be well tested with unit and integration tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test all the functionality delivered with this milesone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Identity Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"We will write the code for the Identity contract using ink! so that our contracts can be compiled to wasm and deployed to any blockchain that implements the contracts pallet. The Identity contract will provide a range of functions, including creating an identity, adding addresses that are mapped to specific blockchains, and updating these addresses as needed. The contract will automatically generate a unique identifier, referred to as ",(0,i.kt)("inlineCode",{parentName:"td"},"identityNo"),", for each identity. To ensure maximum security, we will allow the identity creator to specify the accounts that are authorized to modify the identity's addresses. This will enable the creator to retain control of the identity even if they lose access to the account used to create it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"My Identity page"),(0,i.kt)("td",{parentName:"tr",align:null},"The My Identity page will be developed using React.js, providing users with a user-friendly interface to interact with the Identity contract. This will include the ability to create a new identity, add or remove addresses associated with an identity, and access and copy the unique ",(0,i.kt)("inlineCode",{parentName:"td"},"identityNo")," to share with others. This UI will also generate the ",(0,i.kt)("inlineCode",{parentName:"td"},"Identity Key")," for the user's identity and will update it every time he adds a new blockchain address. This ",(0,i.kt)("inlineCode",{parentName:"td"},"Identity Key")," will be accessible for the identity creator when sharing his identity. The interface will be based on the mock design presented in the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Szegoo/Grants-Program/edit/application/applications/Dotflow.md?pr=%2Fw3f%2FGrants-Program%2Fpull%2F1657#ui-design"},"UI design")," section.")))),(0,i.kt)("h3",{id:"milestone-2-example--additional-features"},"Milestone 2 Example \u2014 Additional features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1,5 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1,5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 11,000")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"The contract and the website code will be well documented and open for everybody to check. The UI will have a simple UI that will be intuitive to use.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The Address Book ink! contract will be well tested with unit and integration tests. The functionality for generating XCM messages will very well tested to make sure the tokens are always transfered to the proper destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test all the functionality delivered with this milesone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish a Medium article that explains the details of our project.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Address Book"),(0,i.kt)("td",{parentName:"tr",align:null},"We will develop the code for the Address Book contract using ink! so that our contracts can be compiled to wasm and deployed to any blockchain that implements the contracts pallet. The Address Book will enable users to create an address book and populate it with the identities they interact with most frequently. The identities will be added via their identityNo since our main goal is abstracting away addresses from the users. When adding an identity to an address book the Identity Key will also be needed. The address book will be stored on chain but the ",(0,i.kt)("inlineCode",{parentName:"td"},"IdentityKey")," will be stored in local storage. The application will expect the user to provide the ",(0,i.kt)("inlineCode",{parentName:"td"},"IdentityKey")," when using the app from a different device for the first time.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Routing functionality."),(0,i.kt)("td",{parentName:"tr",align:null},"The code responsible for routing tokens to the correct destination will be incorporated into the frontend code written in TypeScript. This code will incorporate the necessary logic for constructing XCM messages to route tokens to the appropriate address. In cases where the destination chain is the same as the origin, a simple transaction will be executed. Because of possible race conditions where the identity owner is trying to update an address on a parachain while another user is trying to send funds to that identity on that parachain we introduce additional checks on the frontend. Before sending a transaction that will transfer the funds, the frontend will check whether there are any pending transactions happening that would change the address on the chain the user is transferring funds to. In case there is a pending transaction the user will get a warning and will be advised to wait for a moment and try sending the transaction again.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Address Book page"),(0,i.kt)("td",{parentName:"tr",align:null},"We will write the code for the Address Book UI using React.js. The UI will be based on the provided mock design that we displayed above in the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Szegoo/Grants-Program/edit/application/applications/Dotflow.md?pr=%2Fw3f%2FGrants-Program%2Fpull%2F1657#ui-design"},"UI design section"),". The UI will make it possible for users to create an address book and add identities to it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Transfer page"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a user interface using React.js that will enable users to send tokens to a designated ",(0,i.kt)("inlineCode",{parentName:"td"},"IdentityId"),". This UI will abstract away the complexity of addresses and leverage the Routing functionality described in this table(Section 2) to handle token routing. The UI design will be based on the mock design presented in the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Szegoo/Grants-Program/edit/application/applications/Dotflow.md?pr=%2Fw3f%2FGrants-Program%2Fpull%2F1657#ui-design"},"UI design")," section for optimal user experience.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Our future plan is to expand our core functionality and add more features so that the tokens can be routed based on some different criteria. Some example of these ideas are: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Route tokens based on the amount, sender and/or the token itself"),(0,i.kt)("li",{parentName:"ul"},"Split the transferred amount to multiple addresses")),(0,i.kt)("p",null,"An exciting feature we would like to build in the future is enable token transfers between blockchains that are not part of the Polkadot network(e.g. Polkadot<->Ethereum)."),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," GitHub"))}c.isMDXComponent=!0}}]);