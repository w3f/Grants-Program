"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[82083],{15875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"applications/supersig_fellowship","title":"Supersig","description":"This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don\'t remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a > (such as this one) can be removed.","source":"@site/applications/supersig_fellowship.md","sourceDirName":"applications","slug":"/applications/supersig_fellowship","permalink":"/applications/supersig_fellowship","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/supersig_fellowship.md","tags":[],"version":"current","frontMatter":{}}');var i=n(74848),a=n(28453);const r={},l="Supersig",o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Limit Call Data Size",id:"limit-call-data-size",level:3},{value:"Limit Number of Live Proposals",id:"limit-number-of-live-proposals",level:3},{value:"Enable off-chain signing (optional work)",id:"enable-off-chain-signing-optional-work",level:3},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 pallet_supersig MVP",id:"milestone-1--pallet_supersig-mvp",level:3},{value:"Milestone 2 \u2014 Supersig UI and feedback from Fellowship",id:"milestone-2--supersig-ui-and-feedback-from-fellowship",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"supersig",children:"Supersig"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a ",(0,i.jsx)(t.code,{children:">"})," (such as this one) can be removed."]}),"\n",(0,i.jsxs)(t.p,{children:["See the ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/#pencil-process",children:"Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Decentration"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," (BTC)37hhQbMnXTrEgFnQUA9xJEeQMW7DuGvxuz"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u26a0\ufe0f ",(0,i.jsx)(t.em,{children:"The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe."})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.p,{children:'"A Supersig is a Multisig with superpowers"'}),"\n",(0,i.jsxs)(t.p,{children:['A new pallet, RPC and UI that enables organisations to benefit from much more flexibility than multisig, where users can add and remove members, as well as optionally add "Master" users that have more power than "Standard" users. see our prior grant phase completion ',(0,i.jsx)(t.a,{href:"https://decentration.medium.com/decentration-completes-supersig-w3f-funded-grant-5e788f858ca8",children:"blog post"})]}),"\n",(0,i.jsx)(t.p,{children:"This is Decentration's second grant proposal for Web3. Our ethos is to build, simple user friendly products that many would be used by many. Our aim is to see Supersig be used across many chains and communities, rather than used by just one small community in the ecosystem. This second grant core aim is to make changes that enables supersig to go into the Statemine parachain. In order to do this some refactoring needs to take place both in the pallet and in the frontend. This has been based on feedback from two key product owners, Joe from Statemint/mine, and Jaco from polkadot-js."}),"\n",(0,i.jsx)(t.p,{children:"To avoid private gatekeeping, the PR into Statemine would require approval from Fellowship members. Therefore we need to make a few changes that will have it in the best state so it is approved, as well as be prepared for any further feedback provided to make any other changes."}),"\n",(0,i.jsx)(t.p,{children:"Our frontend app needs some changes in order for Jaco to accept it into the official apps repo after it has been PR'd into Statemine. As well as this we want to build a separate (non polkadot-js) custom user interface."}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["a ",(0,i.jsx)(t.em,{children:"supersig"})," is like a ",(0,i.jsx)(t.em,{children:"multisig"})," but with superpowers."]}),"\n",(0,i.jsx)(t.li,{children:"we want to continue to change and improve to be to a system chain standard."}),"\n",(0,i.jsx)(t.li,{children:"make changes to pallet of supersig based on feedback from statemine product owner."}),"\n",(0,i.jsx)(t.li,{children:"make changes to UI based on feedback from polkadot-js apps product owner."}),"\n",(0,i.jsxs)(t.li,{children:["You can try out the first version here, see our test ",(0,i.jsx)(t.a,{href:"https://apps.decentration.org/?rpc=wss%3A%2F%2Fsoupcan1.jelliedowl.com#/supersig/dashboard",children:"chain"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["An overview of the technology stack to be used: Substrate, Rust, React/Typescript.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"PoC/MVP or other relevant prior work or research on the topic. Decentration has:"}),"\n",(0,i.jsxs)(t.li,{children:["delivered ",(0,i.jsx)(t.a,{href:"https://github.com/kabocha-network/pallet_supersig",children:"Supersig v1"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["launched ",(0,i.jsx)(t.a,{href:"https://github.com/kabocha-network/parachain/",children:"Kabocha crowdloan"})]}),"\n",(0,i.jsxs)(t.li,{children:["developed pallet_mint: where funding proposals that are approved mint new coins, instead of from a treasury. ",(0,i.jsx)(t.a,{href:"https://github.com/kabocha-network/parachain/pull/6",children:"https://github.com/kabocha-network/parachain/pull/6"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["What your project is ",(0,i.jsx)(t.em,{children:"not"})," or will ",(0,i.jsx)(t.em,{children:"not"})," provide or implement","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"In this grant proposal we are focussing on making iterations to the minimimal viable version of the pallet to make it less prone to bloat due to unbounded call data in the storage, we won't be creating a new pallet."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:"Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Where and how does your project fit into the ecosystem?"})," The aim is for it to be part of system chains on kusama and thereafter polkadot's Statemint. We want to maximise for ubiquitous use, and we believe this is the most effective route to get there."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Who is your target audience?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Multsig users of Substrate chains, who desire more flexibility and create scalable organisations."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"What need(s) does your project meet?"})," It helps users of Substrate chains improve the fund management of the teams and projects that get funded by the community treasury."]}),"\n",(0,i.jsxs)(t.li,{children:["Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"pallet_collective is very similar, but as there are only a limited number of instances available, and such instances needed a general on-chain upgrade to instantiate, it is not useful for our needs."}),"\n",(0,i.jsx)(t.li,{children:"pure proxy in the proxy_pallet has similarities in how addresses are created on-chain."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Name of team leader:"})," Ramsey Ajram"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"Names of team members:"})," Tsubasa Mori, Nathan Gardet Derc"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Ramsey Ajram"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:ramsey@decentration.org",children:"ramsey@decentration.org"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://decentration.org",children:"https://decentration.org"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," Digital Trust Company"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," Decentration Trust Company (470-2018-233-GB-001)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsxs)(t.p,{children:["Ramsey (decentration) - Substrate Engineer, Product manager, startup technical founder. Launched ",(0,i.jsx)(t.a,{href:"https://kabocha.network",children:"Kabocha"})," parachain, chain development and launch; team lead product owner of Supersig. Alumni of Polkadot Blockchain Academy\nHere is a recent contribution from Ramsey in a ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IiAkJAfZsug&t=2299s",children:"Substrate Seminar"})]}),"\n",(0,i.jsxs)(t.p,{children:["Nathan Gardet-Derc (erudyx) - Substrate / Rust Engineer, contributor to Kabocha, Rusty Crewmate. developer on ",(0,i.jsx)(t.a,{href:"https://github.com/kabocha-network/pallet_supersig",children:"pallet_supersig"}),". Alumni of Polkadot Blockchain Academy"]}),"\n",(0,i.jsx)(t.p,{children:"Tsubasa Mori (KingdomParadise) - Full stack developer - Javascript / Typescript / React / Rust / Node.js / Next.js"}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/decentration/apps/tree/supersig-v1.0.0",children:"https://github.com/decentration/apps/tree/supersig-v1.0.0"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/kabocha-network/pallet_supersig",children:"https://github.com/kabocha-network/pallet_supersig"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/decentration",children:"https://github.com/decentration"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/KingdomParadise",children:"https://github.com/KingdomParadise"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/gdnathan",children:"https://github.com/gdnathan"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsxs)(t.p,{children:["pallet started here:\n",(0,i.jsx)(t.a,{href:"https://github.com/kabocha-network/pallet_supersig/tree/polkadot-v0.9.37",children:"https://github.com/kabocha-network/pallet_supersig/tree/polkadot-v0.9.37"})]}),"\n",(0,i.jsx)(t.p,{children:"*Supersig is functional, accessible and usable for developers to integrate and for their end users."}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsxs)(t.p,{children:["This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories ",(0,i.jsx)(t.a,{href:"../docs/grant_guidelines_per_category.md",children:"here"}),". Since these will be part of the agreement, it helps to describe ",(0,i.jsx)(t.em,{children:"the functionality we should expect in as much detail as possible"}),", plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected."]}),"\n",(0,i.jsxs)(t.p,{children:["Below we provide an ",(0,i.jsx)(t.strong,{children:"example roadmap"}),". In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We ",(0,i.jsx)(t.em,{children:"recommend"})," that teams structure their roadmap as 1 milestone \u2248 1 month."]}),"\n",(0,i.jsx)(t.p,{children:"For each milestone,"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Milestone 1"})," To make changes to ",(0,i.jsx)(t.code,{children:"pallet_supersig"})," and ",(0,i.jsx)(t.code,{children:"apps frontend"})," so that it is up to scratch with system chain level use, accepted by polkadot-js apps, and prepared for Fellowship review."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The pallet will be refactored based on feedback from Joe Petrowski, product owner of Statemine, after he is satisfied withe changes we will make the case to the Polkadot Fellowship."}),"\n",(0,i.jsx)(t.li,{children:"Based on feedback from Jaco, product owner of polkadot-js, changes need to be made so that supersig-app is accepted officially into the repo and if it is accepted into Statemine."}),"\n",(0,i.jsx)(t.li,{children:"The pallet will be tested on the Pop-Art, community run relay test network"}),"\n",(0,i.jsx)(t.li,{children:"The pallet will be well benchmarked."}),"\n",(0,i.jsx)(t.li,{children:"The pallet will aim to be on Statemine parachain on kusama."}),"\n",(0,i.jsx)(t.li,{children:"Unit integration tests"}),"\n",(0,i.jsx)(t.li,{children:"Easy to spin up node to test pallet"}),"\n",(0,i.jsx)(t.li,{children:"Clearly written as Readme and inline documentation"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Details for pallet:"}),"\n",(0,i.jsx)(t.p,{children:'We will likely be making a limit on call data size and a cap on the number of "live proposals" there can be per chain.'}),"\n",(0,i.jsx)(t.h3,{id:"limit-call-data-size",children:"Limit Call Data Size"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Limit call data size: Introduce a maximum call data size limit in the configuration trait. This limit can be set to a reasonable default value, which can be changed as required. Users will be prevented from submitting call data exceeding this limit:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[pallet::config]\npub trait Config: frame_system::Config {\n    // ...\n    /// The maximum size of call data allowed (in bytes).\n    #[pallet::constant]\n    type MaxCallDataSize: Get<u32>;\n    // ...\n}\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Check call data size: Before storing the call data in create, approve, and other relevant functions, ensure that its size is within the specified limit."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"// In the `create` function\nensure!(\n    call_data.len() <= T::MaxCallDataSize::get() as usize,\n    Error::<T>::CallDataTooLarge\n);\n\n// Similarly, add checks in the `approve` and other relevant functions.\n\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Add a new error variant for oversized call data:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[pallet::error]\npub enum Error<T> {\n    // ...\n    /// The call data size exceeds the maximum allowed limit.\n    CallDataTooLarge,\n    // ...\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"limit-number-of-live-proposals",children:"Limit Number of Live Proposals"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Add the LiveProposalMaximum associated type to the pallet's Config trait:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"pub trait Config: frame_system::Config {\n    // ...\n    type LiveProposalMaximum: Get<u32>;\n    // ...\n}\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Add a storage item to track the number of active proposals for each Supersig account:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[pallet::storage]\n#[pallet::getter(fn active_proposals)]\npub type ActiveProposals<T: Config> = StorageMap<_, Twox64Concat, SupersigId, u32, ValueQuery>;\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Modify the submit_call extrinsic to check the number of active proposals before allowing a new one:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[pallet::weight(T::WeightInfo::submit_call())]\npub fn submit_call(origin: OriginFor<T>, supersig_id: SupersigId, call_data: Vec<u8>) -> DispatchResultWithPostInfo {\n    let who = ensure_signed(origin)?;\n    // ...\n\n    let current_active_proposals = Self::active_proposals(supersig_id);\n    ensure!(current_active_proposals < T::LiveProposalMaximum::get(), Error::<T>::TooManyActiveProposals);\n\n    // ...\n}\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsx)(t.li,{children:"Increment the number of active proposals for the Supersig account when a new proposal is submitted:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"ActiveProposals::<T>::mutate(supersig_id, |active_proposals| *active_proposals += 1);\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsx)(t.li,{children:"Add an error variant for the case when there are too many active proposals:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[pallet::error]\npub enum Error<T> {\n    // ...\n    TooManyActiveProposals,\n}\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsx)(t.li,{children:"Decrement the number of active proposals when a proposal is approved or rejected. You can do this in the approve and reject extrinsics:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"ActiveProposals::<T>::mutate(supersig_id, |active_proposals| *active_proposals = active_proposals.saturating_sub(1));\n"})}),"\n",(0,i.jsx)(t.p,{children:"As a non binding idea to test, we shall also be exploring the idea of enabling off-chain signing, though this will require a lot of refactoring:"}),"\n",(0,i.jsx)(t.h3,{id:"enable-off-chain-signing-optional-work",children:"Enable off-chain signing (optional work)"}),"\n",(0,i.jsx)(t.p,{children:"To incorporate off-chain signing in the supersig pallet while maintaining the same features such as adding and removing members, we would need to do the following:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create a CallHash type alias to represent the hash of the call data:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"pub type CallHash<T> = <T as frame_system::Config>::Hash;\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Change the CallData storage item to use the CallHash instead of the actual call data:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[pallet::storage]\n#[pallet::getter(fn call_data)]\npub type CallData<T: Config> = StorageMap<_, Twox64Concat, SupersigId, CallHash<T>, OptionQuery>;\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Modify the create and approve functions to accept a call_hash parameter instead of the call data:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"pub fn create(origin: OriginFor<T>, call_hash: CallHash<T>, ...);\npub fn approve(origin: OriginFor<T>, call_hash: CallHash<T>, ...);\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsx)(t.li,{children:"In the create and approve functions, calculate the call hash and ensure it matches the provided call_hash parameter:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"// In the `create` function\nlet actual_call_hash = T::Hashing::hash_of(&call_data);\nensure!(\n    actual_call_hash == call_hash,\n    Error::<T>::InvalidCallHash\n);\n// as well add the check in the `approve` function.\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsx)(t.li,{children:"Add a new error variant for mismatched call hashes:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[pallet::error]\npub enum Error<T> {\n    // ...\n    /// The provided call hash does not match the actual call hash.\n    InvalidCallHash,\n    // ...\n}\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsx)(t.li,{children:"Update the extrinsics and RPCs to work with call hashes instead of call data."}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"refactor-page-supersig-ui-for-polkadot-js-fork",children:"Refactor Page-Supersig UI for polkadot js fork"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A lot of functions need to be transformed into the hooks that polkadot js apps use as a standard."}),"\n",(0,i.jsx)(t.li,{children:"Very strict linting and standards, currently sitting at 300 errors."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Milestone 2"})," Custom UI foundation MVP, and act on feedback from Fellowship."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Build a custom interface where the user interacts with their organisation created with supersig. The interface will initially support Statemine, Kabocha, and Soupcan (testnet).\nThe interface will leverage all the features ",(0,i.jsx)(t.a,{href:"https://trello.com/1/cards/64197a7bcc843f46bfb0ab2b/attachments/64198bf574e7348c470997bb/download/Screenshot_2023-03-21_at_10.46.20.png",children:"here"}),", but in a cleaner and bespoke user interface like ",(0,i.jsx)(t.a,{href:"https://trello.com/c/fUTXOuo3/619-create-supersig-ui-for-m2-2",children:"this simple mockup"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Custom UI will be simpler and more bespoke to organising, initially around supersig. It will begin with similar features to page-supersig on polkadot-js app, however it will be the foundation for then future building blocks, such as: multisig interface, automated payments, and other statemine/mint primitives, XCM apps, etc. We can prioritise on what those will be based on feedback, and in future milestone. With our own interface we have the freedom to create something different and specific to a core set of interrelated tools, rather than abide by polkadot-js which is designed to encompass basically everything."}),"\n",(0,i.jsx)(t.li,{children:"Make improvements so that Fellowship member feedback is satisfied (if any)."}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u26a1"," If any of your deliverables is based on somebody else's work, make sure you work and publish ",(0,i.jsx)(t.em,{children:"under the terms of the license"})," of the respective project and that you ",(0,i.jsx)(t.strong,{children:"highlight this fact in your milestone documentation"})," and in the source code if applicable! ",(0,i.jsx)(t.strong,{children:"Teams that submit others' work without attributing it will be immediately terminated."})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 7 to 11 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," USD 18,000"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1--pallet_supersig-mvp",children:"Milestone 1 \u2014 pallet_supersig MVP"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 4 to 5 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 11,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"We will provide inline documentation of the supersig pallet's code, and a basic tutorial that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the supersig functionality works."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"We will publish an article that explains supersig pallet to developers on a blog post; and a substrate workshop/seminar that explains that shows how the pallet was designed (if there available slot, else a video shared on loom/youtube)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Substrate module: pallet_supersig"}),(0,i.jsx)(t.td,{children:"We will refactor the pallet so that it does not store unbounded call data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Supersig-app: polkadot-js-ui"}),(0,i.jsx)(t.td,{children:"We need to make various changes and use a lot of polkadot js hooks in order Jaco to accept the PR: refactoring converting a lot of hooks to be the native polkadot-rs hooks rather than our own hooks; linting; changing augment-types; linting, and 300 errors when building for the polkadot-js PR."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Benchmarking"}),(0,i.jsx)(t.td,{children:"The pallet will be benchmarked and unit tested using worst case weightings."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2--supersig-ui-and-feedback-from-fellowship",children:"Milestone 2 \u2014 Supersig UI and feedback from Fellowship"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 3 to 6 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 7,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"We will provide inline documentation and a tutorial with a polkadot-js apps fork that guides a developer to simply set up supersig pallet and UI."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing messages"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by e2e testing guide and informative error messages."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile that can be used to test all the functionality delivered with milestone 2. The dockerfile will be a polkadot JS UI fork, it will also be the smallest possible file size (MBs not GBs)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"We will publish an article that explains supersig pallet to the end-user. The article will be on medium and subsocial."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"React/Typecript: Supersig UI"}),(0,i.jsx)(t.td,{children:"We will build a custom user interface so that users can interact with supersig."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Substrate chain"}),(0,i.jsx)(t.td,{children:"We will create a custom substrate template that will contain pallet supersig"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Polkadot JS Apps UI Fork"}),(0,i.jsx)(t.td,{children:"We will add the custom feature to a polkadot JS UI fork (and make a PR to the main repo), so that the user can see the pallet in action, end to end."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"After success with supersig being a system level chain, maintain it, and work on future versions, as well as XCM accesibility."}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Who can vouch for Ramsey(Decentration)?"})," Josh Muir (Kusama Council and Dat Dot), Dan Shields, Will Chevdor, Sacha Lanski..."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);