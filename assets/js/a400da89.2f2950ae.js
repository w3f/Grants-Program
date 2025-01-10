"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[19820],{8506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"applications/polkaj_android_support","title":"PolkaJ Android Support","description":"Team Name:* Nathan Schwermann","source":"@site/applications/polkaj_android_support.md","sourceDirName":"applications","slug":"/applications/polkaj_android_support","permalink":"/applications/polkaj_android_support","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/polkaj_android_support.md","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),l=t(28453);const d={},r="PolkaJ Android Support",o={},a=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Client refactoring",id:"milestone-1-client-refactoring",level:3},{value:"Milestone 2 OkHttp / Java 8 Compatible",id:"milestone-2-okhttp--java-8-compatible",level:3},{value:"Milestone 3 Android and Kotlin",id:"milestone-3-android-and-kotlin",level:3},{value:"Future Plans",id:"future-plans",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"polkaj-android-support",children:"PolkaJ Android Support"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Name:"})," Nathan Schwermann"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," 0x454cfAa623A629CC0b4017aEb85d54C42e91479d"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Status:"})," ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/pull/301#issuecomment-1168484070",children:"Terminated"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(n.p,{children:["This proposal is a follow-up to the PolkaJ grant ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/pull/12",children:"https://github.com/w3f/Open-Grants-Program/pull/12"}),"\nI am not affiliated with the original team, but I have spoken with them about this propoal and they have encouraged me to submit it."]}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"The PolkaJ java client is built using Java 11 APIs and native x86 code which can not run on Android.\nThis project proposal will make the necessary changes to support the Android platform as well as provide examples."}),"\n",(0,s.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(n.p,{children:"We will make the following changes and additions to the PolkaJ project in order to support Android versions 7 and up."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Build script changes to also compile the rust code to ARM in addition to x86 based on the target"}),"\n",(0,s.jsx)(n.li,{children:"Make necessary changes to JNI code to support ARM when needed and remove Java 9 dependency"}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"RpcCallAdapter"})," and ",(0,s.jsx)(n.code,{children:"SubscriptionCallAdapter"})," to client Builder interface"]}),"\n",(0,s.jsxs)(n.li,{children:["Refactor ",(0,s.jsx)(n.code,{children:"polkaj-api-http"})," and ",(0,s.jsx)(n.code,{children:"polkaj-api-ws"})," which both use Java 11 and can not be used on Android to implement the new Call and Subscription Factory apis"]}),"\n",(0,s.jsxs)(n.li,{children:["Extract and refactor tests from ",(0,s.jsx)(n.code,{children:"polkaj-api-http"})," and ",(0,s.jsx)(n.code,{children:"polkaj-api-ws"})," to be reusable for any implementations of the factory as well as additional coverage for Builder changes to support factories"]}),"\n",(0,s.jsxs)(n.li,{children:["Add new module ",(0,s.jsx)(n.code,{children:"polkaj-okhttp"})," which will implement ",(0,s.jsx)(n.code,{children:"RpcCallAdapter"})," and ",(0,s.jsx)(n.code,{children:"SubscriptionCallAdapter"})," using ",(0,s.jsx)(n.a,{href:"https://square.github.io/okhttp/",children:"okhttp"}),", the most widely adopted http client used in the Android development community."]}),"\n",(0,s.jsx)(n.li,{children:"Unit test against shared tests for java.net versions of factories, with the same or higher code coverage."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"polkaj-ktx"})," modules adding support kotlin extensions and coroutine support"]}),"\n",(0,s.jsx)(n.li,{children:"Example Android app, uses existing command line examples in Android GUI"}),"\n",(0,s.jsx)(n.li,{children:"Update documentation for build script changes and for examples on each platform"}),"\n",(0,s.jsx)(n.li,{children:"Fix broken balance example on OSX"}),"\n",(0,s.jsx)(n.li,{children:"Add new artifacts polkaj-schnorrkel_android.jar, polkaj-okhttp.jar"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(n.p,{children:"This is an improvement and addition to an existing project."}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Nathan Schwermann"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Nathan Schwermann"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Email:"})," ",(0,s.jsx)(n.a,{href:"mailto:schwiz@gmail.com",children:"schwiz@gmail.com"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsx)(n.p,{children:"Individual / Sole Proprietor"}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(n.p,{children:"I have ten years of experience in Android client development in the telecom and payment industries. I have led and maintained development on applications with millions of monthly active users."}),"\n",(0,s.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/nschwermann",children:"https://github.com/nschwermann"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/nathanschwermann/",children:"https://www.linkedin.com/in/nathanschwermann/"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"I have completed parts 1, 1b, 2a, 5, 90% complete 3a and 50% 4a from milestone 1."}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 3 Months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-time equivalent (FTE):"}),"  1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 21,000 DAI"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1-client-refactoring",children:"Milestone 1 Client refactoring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month (2 weeks left after re-approval of milestone delivery)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 7,000 DAI"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide both inline documentation of the code and update the existing examples documentation with api changes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0c."}),(0,s.jsx)(n.td,{children:"Testing Guide"}),(0,s.jsx)(n.td,{children:"We will maintain or improve current code coverage."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"schnorrkel module remove Java 9 dependency"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1b."}),(0,s.jsx)(n.td,{children:"schnorrkel module Mac OS Compatibility"}),(0,s.jsx)(n.td,{children:"Fix native library loading on mac"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2a."}),(0,s.jsx)(n.td,{children:"api-base: Factories"}),(0,s.jsx)(n.td,{children:"We will add common Builder interface with added components for RpcCallFactory and SubscriptionFactory"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2b."}),(0,s.jsx)(n.td,{children:"api-base: Factory Tests"}),(0,s.jsx)(n.td,{children:"We will extract existing http/ws tests to new common factory tests suite"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3a."}),(0,s.jsx)(n.td,{children:"api-http: Factory"}),(0,s.jsx)(n.td,{children:"Refactor to implement RpcCallFactory"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3b."}),(0,s.jsx)(n.td,{children:"api-http: Tests"}),(0,s.jsx)(n.td,{children:"Unit tests 90% coverage Integration tests with api base previously extracted from this module"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4a."}),(0,s.jsx)(n.td,{children:"api-ws: Factory"}),(0,s.jsx)(n.td,{children:"Refactor to implement SubscriptionCallAdapter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4b."}),(0,s.jsx)(n.td,{children:"api-ws: Tests"}),(0,s.jsx)(n.td,{children:"Unit tests 90% coverage Integration tests with api base previously extracted from this module"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"examples"}),(0,s.jsx)(n.td,{children:"Fix Balance example not working on OSX"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2-okhttp--java-8-compatible",children:"Milestone 2 OkHttp / Java 8 Compatible"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 7,000 DAI"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide both inline documentation of the code and documentation for using okhttp module."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0c."}),(0,s.jsx)(n.td,{children:"Testing Guide"}),(0,s.jsx)(n.td,{children:"Will have 90% code coverage Unit tests and Integration test with api base"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"polkaj-api-okhttp module"}),(0,s.jsx)(n.td,{children:"Will add new module with RpcCallFactory and SubscriptionFactory implementations. Adds new artifact polkaj-okhttp.jar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Example"}),(0,s.jsx)(n.td,{children:"Will update examples and example documentation to allow switching between okhttp and http/ws socket implementations"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"schnorrkel module Android Compatibility"}),(0,s.jsx)(n.td,{children:"Will build RUST code for ARM adds new artifact polkaj-schnorrkel_android.jar"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-3-android-and-kotlin",children:"Milestone 3 Android and Kotlin"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 7,000 DAI"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"We will provide both inline documentation of the code and documentation for using kotlin module and including polkaj inside an Android project."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0c."}),(0,s.jsx)(n.td,{children:"Testing Guide"}),(0,s.jsx)(n.td,{children:"Will have 90% code coverage Unit tests and Integration test with api base"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"polkaj-ktx module"}),(0,s.jsx)(n.td,{children:"Will include support for Kotlin coroutines and additional kotlin convenience methods"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2a."}),(0,s.jsx)(n.td,{children:"Example"}),(0,s.jsx)(n.td,{children:"Will port desktop examples into an Android app with a simple GUI to select each example and allow user input where possible"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2b."}),(0,s.jsx)(n.td,{children:"Example blog"}),(0,s.jsx)(n.td,{children:"Will write blog post and submit to medium explaining new changes to PolkaJ made to support Android and a walk through guide how to integrate PolkaJ into your Android project."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(n.p,{children:"I will continue to look for use cases where Android can be used in the polka dot network. I am excited to see the future and hope to remain involved."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);