"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[45753],{97649:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(8209);const i={},o="Solang developer experience improvements.",l={unversionedId:"applications/Solang_developer_experience_improvements",id:"applications/Solang_developer_experience_improvements",title:"Solang developer experience improvements.",description:"- Project Name: Solang Maintenance",source:"@site/applications/Solang_developer_experience_improvements.md",sourceDirName:"applications",slug:"/applications/Solang_developer_experience_improvements",permalink:"/applications/Solang_developer_experience_improvements",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Solang_developer_experience_improvements.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Solang Improvement Project Details",id:"solang-improvement-project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Contributor \ud83d\udc65",id:"contributor-",level:2},{value:"Contact",id:"contact",level:3},{value:"Relevant Experience",id:"relevant-experience",level:3},{value:"Github Handle",id:"github-handle",level:3},{value:"LinkedIn Profile",id:"linkedin-profile",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1: Improve debug buffer usage",id:"milestone-1-improve-debug-buffer-usage",level:3},{value:"Milestone 2: Implement Solang projects:",id:"milestone-2-implement-solang-projects",level:3},{value:"Assurance That the Current Project Owners Are Willing to Review/Accept Your Contributions:",id:"assurance-that-the-current-project-owners-are-willing-to-reviewaccept-your-contributions",level:3},{value:"Current and Future Plans",id:"current-and-future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"solang-developer-experience-improvements"},"Solang developer experience improvements."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Project Name:")," Solang Maintenance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contributor Name:")," Salaheldin Soliman")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Payment Details:")," DAI (ERC20)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Address"),": 0x9036b20920ddf473e796d24afd0fe04d4dde0b68")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1"))),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Solang compiles Solidity smart contracts to Substrate and Solana targets. An in-depth overview of Solang's purpose and motivation can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://hyperledger.github.io/hyperledger-hip/HIPs/solang.html"},"https://hyperledger.github.io/hyperledger-hip/HIPs/solang.html"),"."),(0,r.kt)("h3",{id:"solang-improvement-project-details"},"Solang Improvement Project Details"),(0,r.kt)("p",null,"The aim of this project is to improve Solidity developer experience on Substrate chains through undertaking the following two milestones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/solang/milestone/5"},"lmprove debug buffer usage"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The debug buffer can be used by the smart contract as a way to communicate with the developer during runtime, e.g. for printing messages or displaying the return code of API calls into the runtime environment. Currently, the debug buffer lacks any kind of structure, which can make for an awkward debugging experience. The goal is to use a JSON data structure within the debug buffer. This makes its usage more human friendly and even allows front-end tools to parse the content of the debug buffer in a defined way.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Currently, runtime errors are lost. Solang inserts an ",(0,r.kt)("inlineCode",{parentName:"p"},"unreachable")," instruction, causing nothing more than a regular ",(0,r.kt)("inlineCode",{parentName:"p"},"trap")," in case of runtime errors (like arithmetic overflows, failed assert statements, etc..). The aim here is to output the runtime error in the formatted debug buffer, so that a developer knows what went wrong (this doesn't even happen in Ethereum's Solc currently). The line number of the solidity source file in which that error is encountered will be displayed as a further improvement.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The debug buffer is not something meant to be used in production deployments (pallet contracts does not even support this in production setups). However, at the time of writing, ",(0,r.kt)("inlineCode",{parentName:"p"},"solang")," does not have any means to omit all code generation related to the debug buffer. This results in (potentially a lot of) wasted gas. So another goal of this milestone is to implement a CLI flag for the compiler that effectively turns all logic related to debug printing into No-Op.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/solang/milestone/6"},"Solang projects"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At the time of writing, the only way to configure the compiler's behavior is to use CLI flags and options. An ever-growing list of compiler options (like optimization flags) and possible runtime configuration options is making this more and more awkward. This information can be provided to the compiler via a ",(0,r.kt)("inlineCode",{parentName:"p"},"TOML")," file, similar to what we see in other languages (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To make this work, the compiler will need to implement functionality to parse its options out of such a ",(0,r.kt)("inlineCode",{parentName:"p"},"TOML")," file. Additionally, some tooling should be implemented to help our users working with it. The first one will be a new sub-command ",(0,r.kt)("inlineCode",{parentName:"p"},"solang new"),', which generates a new "Project" containing ',(0,r.kt)("inlineCode",{parentName:"p"},"Solang.toml")," file with sensible defaults as well as some Solidity ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/solang#simple-example"},"flipper example")," contract. Naturally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," subcommand provides some configuration options itself, like specifying the project name or runtime target.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A further issue addressed here is that a Solidity developer using Solang currently has no way to tell the compiler some information like contract authors and version. Since this information is needed for metadata generation, it is just populated with some non-meaningful default value. As a consequence, at the time of writing, ",(0,r.kt)("inlineCode",{parentName:"p"},"solang")," users need to edit the metadata file manually after each and every compilation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Another improvement is for specifying the runtime target configuration. As-is, developers only have some low-level options like specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"balance")," (",(0,r.kt)("inlineCode",{parentName:"p"},"value"),') size used by the runtime. A better solution would be able to provide high-level representations of currently deployed on-chain runtime configurations and the compiler will take care of the rest. For instance, providing a target configuration of "Substrate version ',(0,r.kt)("inlineCode",{parentName:"p"},"X"),'" or "pallet contract nodes version ',(0,r.kt)("inlineCode",{parentName:"p"},"Y"),'" will inform the compiler to generate contracts compatible with the default configuration of pallet contracts in substrate version ',(0,r.kt)("inlineCode",{parentName:"p"},"X")," or contacts node version ",(0,r.kt)("inlineCode",{parentName:"p"},"Y")," respectively. Other possible options for the user should be to just directly specify the parachain, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Rococo")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Shiden")," (randomly named examples)."))))),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Who is your target audience and how does your project fit into the ecosystem?")),(0,r.kt)("p",null,'We still have a long way to go in terms of developer experience with Solidity on Substrate based chains. Although Solang as a compiler itself can be considered a huge step towards attracting solidity developers to the Polkadot/Kusama ecosystems: The Solidity developer experience on Ethereum far exceeds that of "Solidity Contracts on Substrate", caused by our inferior tooling and debugging story. The mentioned improvements are some immediate measures to address that. This grant will benefit any substrate parachain looking to leverage the possibility of using Solidity for their own good, as it will help level the developer experience for Solidity developers regardless whether they target Ethereum or Substrate.'),(0,r.kt)("h2",{id:"contributor-"},"Contributor \ud83d\udc65"),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Name:")," Salaheldin Soliman")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"p",href:"mailto:salaheldin_sameh@aucegypt.edu"},"salaheldin_sameh@aucegypt.edu")))),(0,r.kt)("h3",{id:"relevant-experience"},"Relevant Experience"),(0,r.kt)("p",null,"Worked on Solang as part of the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.hyperledger.org/display/INTERN"},"Hyperledger Mentorship Program"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Implemented ",(0,r.kt)("a",{parentName:"li",href:"https://solang.readthedocs.io/en/latest/code_gen_options.html#array-bound-checks-optimization"},"array bounds checks optimization"),"."),(0,r.kt)("li",{parentName:"ol"},"Implemented ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/solang/pull/988"},"multiplication overflow detection during runtime"),"."),(0,r.kt)("li",{parentName:"ol"},"Implemented ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/solang/pull/1024#ref-commit-baaa425"},"constant overflow detection during compilation"),"."),(0,r.kt)("li",{parentName:"ol"},"Improved ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/solang/pull/1068"},"Solang's parser resilience"),".")),(0,r.kt)("h3",{id:"github-handle"},"Github Handle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/salaheldinsoliman"},"https://github.com/salaheldinsoliman"))),(0,r.kt)("h3",{id:"linkedin-profile"},"LinkedIn Profile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/salaheldinsoliman/"},"https://www.linkedin.com/in/salaheldinsoliman/"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"This project is a part of larger repository: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/solang"},"Hyperledger Solang"),". Solang is a Solidity compiler for Solana and Substrate, a formal documentation for the repo can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://solang.readthedocs.io/en/latest/"},"https://solang.readthedocs.io/en/latest/"),"."),(0,r.kt)("p",null,"There was no formal research done on the topic, but it can be noted that Solidity developer experience on Substrate chains is falling behind Ethereum's. Discussions with Solang's owner ",(0,r.kt)("a",{parentName:"p",href:"sean@mess.org"},"Sean Young")," and maintainer ",(0,r.kt)("a",{parentName:"p",href:"cyrill@parity.io"},"Cyrill Leutwiler")," , from Parity, have further solidified this statement. The above-mentioned tasks are a further step to alleviate this, through giving Solidity devs a smoother experience creating and debugging his contracts via Solang."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start Date:")," December 20, 2022")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Estimated Duration:")," 6 Months + 1 month spare.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sprint/Period Duration:"),"\nFirst period(milestone): 4 months\nSecond period(milestone): 3 months\nGrace period(Time allocated for events that are not pre-calculated, like emergencies or unexpected work): 1 month")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Full-Time Equivalent (FTE):")," 0.5 FTE (20h per week)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Total Costs:")," $5,000"))),(0,r.kt)("h3",{id:"milestone-1-improve-debug-buffer-usage"},"Milestone 1: Improve debug buffer usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Time Estimate"),": 4 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE (Full time Equivalent)"),": 0.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cost:")," 3,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"I will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and some basic instructions of how a Solidity developer can utilize the debug buffer. I will also provide ",(0,r.kt)("strong",{parentName:"td"},"documentation")," of the newly added runtime errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"I will add unit tests to ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/solang/tree/main/integration/substrate"},"Solang's Substrate integration tests"),". The tests will ensure that the output of the omitted debug buffer is as expected(regarding prints, API calls, runtime errors and overall structure). Also, I will make sure that running Solang's test suite via ",(0,r.kt)("inlineCode",{parentName:"td"},"cargo test --workspace")," produces no failing tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"There will be no independent DockerFiler for this milestone, because Solang has its own DockerFile, which can be used to test the mentioned functionalities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/solang/issues/1048"},"Use structured data in the debug buffer")),(0,r.kt)("td",{parentName:"tr",align:null},"Completing this issue will result in a well structured debug buffer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/solang/issues/1083"},"Print execution errors in the debug buffer")),(0,r.kt)("td",{parentName:"tr",align:null},"Now that the debug buffer is well structured, runtime errors can be inserted in it for the user to debug.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/solang/issues/972"},"Execution errors to be passed with source file and line number")),(0,r.kt)("td",{parentName:"tr",align:null},"Instead of having an arbitrary error emitted on the debug buffer, the line number of the instruction will be inserted so that the dev will have an easier debugging experience.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Bug Fix"),(0,r.kt)("td",{parentName:"tr",align:null},"Fix ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/solang/issues/1051"},"Bug: Substrate Integration tests fail to compile with -g"))))),(0,r.kt)("h3",{id:"milestone-2-implement-solang-projects"},"Milestone 2: Implement ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/hyperledger/solang/milestone/6"},"Solang projects"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time Estimate:")," 2 months\n",(0,r.kt)("strong",{parentName:"p"},"FTE (Full time Equivalent):")," 0.5\n",(0,r.kt)("strong",{parentName:"p"},"Cost:")," 2,000 USD"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"I will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and some basic instructions of how a Solidity developer can utilize the command ",(0,r.kt)("inlineCode",{parentName:"td"},"solang new")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"Solang.toml")," file to provide compiler configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"I will add unit tests to ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/solang/tree/main/integration/substrate"},"Solang's Substrate intergation tests"),". The tests will ensure that the generated contract runs as expected on the configured chain. The tests will also ensure other information like contract author and version are correctly inserted the ",(0,r.kt)("inlineCode",{parentName:"td"},"Solang.toml"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"There will be no independent DockerFiler for this milestone, because Solang has its own DockerFile, which can be used to test the mentioned functionalities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"I will write a blog post that describes the two milestone, the target audience would be Solidity developers who want to try out Substrate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Implement ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/hyperledger/solang/milestone/6"},"Solang projects")),(0,r.kt)("td",{parentName:"tr",align:null},"The functionalities mentioned under ",(0,r.kt)("inlineCode",{parentName:"td"},"Solang Improvement Project Details: Solang Projects")," will be delivered.")))),(0,r.kt)("h3",{id:"assurance-that-the-current-project-owners-are-willing-to-reviewaccept-your-contributions"},"Assurance That the Current Project Owners Are Willing to Review/Accept Your Contributions:"),(0,r.kt)("p",null,"Discussions with project owner ",(0,r.kt)("a",{parentName:"p",href:"sean@mess.org"},"Sean Young")," and maintainer ",(0,r.kt)("a",{parentName:"p",href:"cyrill@parity.io"},"Cyrill Leutwiler")," resulted in that the issues presented above would be reviewed and merged."),(0,r.kt)("h2",{id:"current-and-future-plans"},"Current and Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improve Substrate developer experience via the above-mentioned tasks"),(0,r.kt)("li",{parentName:"ul"},"Continue improving Solang till maturation from the Substrate side."),(0,r.kt)("li",{parentName:"ul"},"Possibly develop an IDE based on Solang that matches Ethereum's Remix")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")),(0,r.kt)("p",null,"Recommendation from Solang's maintainers ",(0,r.kt)("a",{parentName:"p",href:"sean@mess.org"},"Sean Young")," and ",(0,r.kt)("a",{parentName:"p",href:"cyrill@parity.io"},"Cyrill Leutwiler")))}u.isMDXComponent=!0}}]);