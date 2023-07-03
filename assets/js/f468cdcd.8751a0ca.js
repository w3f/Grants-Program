"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[33482],{18552:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));a(8209);const i={},o="PHP Substrate API",r={unversionedId:"docs/RFPs/Closed/php-api",id:"docs/RFPs/Closed/php-api",title:"PHP Substrate API",description:"Proposer:* swader",source:"@site/docs/RFPs/Closed/php-api.md",sourceDirName:"docs/RFPs/Closed",slug:"/docs/RFPs/Closed/php-api",permalink:"/docs/RFPs/Closed/php-api",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Closed/php-api.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"On-chain Quadratic Funding",permalink:"/docs/RFPs/Closed/on-chain-quadratic-funding"},next:{title:"PHP Version of SCALE Codec",permalink:"/docs/RFPs/Closed/php-scale"}},l={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Notes",id:"notes",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"php-substrate-api"},"PHP Substrate API"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/api"},"swader")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Status:")," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/gmajor-encrypt/php-substrate-api"},"Implemented"))),(0,s.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,s.kt)("p",null,"The Substrate API is currently most developed in TypeScript and Rust. This RFP is looking for teams willing to implement a PHP version, perhaps in tandem with the PHP SCALE Coded (see relevant RFP)."),(0,s.kt)("p",null,"The PHP API should:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"be able to hook into a running Substrate node via WS or HTTP"),(0,s.kt)("li",{parentName:"ul"},"read and write to RPC endpoints (will need SCALE codec - see relevant related RFP)")),(0,s.kt)("p",null,"Optionally, the API should support types as exposed by the API. Supporting types is a long term project as those evolve constantly and differ from chain to chain, so if this road is taken by the applying team, it should be stated in a separate milestone and well defined in added maintenance time and cost (i.e. this is not something that can be delivered once - it would require a long term commitment)."),(0,s.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,s.kt)("p",null,"The basic deliverable of this project is an API package hosted on Packagist which can instantiate a connection to a Substrate node and talk to constants, chain storage, and RPC endpoints. For inspiration, see the JS version: ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs"},"https://polkadot.js.org/docs")),(0,s.kt)("p",null,"Example use:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"reading from RPC")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$api = new SubstrateApi\\Api("websocket_or_http_url");\necho $api->rpc->system->chain(); // Kusama\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"writing a tx:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$api = new SubstrateApi\\Api("websocket_or_http_url");\n$signer = new SubstrateApi\\Keyring\\Signer("privatekey");\n$api->setSigner($signer);\n$tx = $api->tx->balances->transfer("recipient_address", 10000);\n$tx->signAndSend();\n')),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"look into ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/paritytech/scale-info"},"https://github.com/paritytech/scale-info"))))}u.isMDXComponent=!0}}]);