"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6615],{8563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var s=a(87462),o=(a(67294),a(3905));a(95657);const i={},n="polkadot-validator-setup maintenance",r={unversionedId:"docs/RFPs/Open/validator-setup-maintenance",id:"docs/RFPs/Open/validator-setup-maintenance",title:"polkadot-validator-setup maintenance",description:"Status:* Open",source:"@site/docs/RFPs/Open/validator-setup-maintenance.md",sourceDirName:"docs/RFPs/Open",slug:"/docs/RFPs/Open/validator-setup-maintenance",permalink:"/Grants-Program/docs/RFPs/Open/validator-setup-maintenance",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Open/validator-setup-maintenance.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"User Account Access Security Analysis for Wallets",permalink:"/Grants-Program/docs/RFPs/Open/user-account-access-analysis"},next:{title:"XCM library & tools",permalink:"/Grants-Program/docs/RFPs/Open/xcm-tool"}},l={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,s.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"polkadot-validator-setup-maintenance"},"polkadot-validator-setup maintenance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Teams/People that could deliver the RFP:")," @melozo, @pmensik, @tylerztl, @bLd75")),(0,o.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,o.kt)("p",null,"One of the more accessible ways of spinning up validator nodes is by using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-validator-setup"},(0,o.kt)("inlineCode",{parentName:"a"},"polkadot-validator-setup"))," repository, which uses a mix of terraform and ansible tools to create a server, adjust its configuration and install the necessary packages needed for running a substrate node."),(0,o.kt)("p",null,"This RFP aims at providing maintenance to that repository and add some small features."),(0,o.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,o.kt)("p",null,"A list of possible tasks to work on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fixing issues and improving documentation"),(0,o.kt)("li",{parentName:"ul"},"updating any libraries/deps needed"),(0,o.kt)("li",{parentName:"ul"},"support additional terraform backends to store the terraform state (currently only ",(0,o.kt)("inlineCode",{parentName:"li"},"gcp"),", could add ",(0,o.kt)("inlineCode",{parentName:"li"},"s3"),": see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-validator-setup/issues/108"},"this issue")," and local storage or even git - it should be discouraged in prod but very useful for testing). See also ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-validator-setup/issues/7"},"this issue")),(0,o.kt)("li",{parentName:"ul"},"investigate pass-phrased ssh key deployment: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-validator-setup/issues/109"},"issue 109")),(0,o.kt)("li",{parentName:"ul"},"add additional cloud providers to terraform: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-validator-setup/issues/111"},"alicloud"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-validator-setup/issues/116"},"OVS"))))}c.isMDXComponent=!0}}]);