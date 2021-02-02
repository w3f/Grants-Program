# Open Grants Program <!-- omit in toc -->

<p align="center">
  <img src="./src/Open_Grants_Program.png" style="width:1300px";>
</p>

**:loudspeaker: Important:** The Web3 Foundation Open Grants Program focuses on technology grants up to **USD 30k for initial grants** and **USD 100k for follow-up grants**, which are tracked **transparently** on GitHub and disbursed in **bitcoin or DAI**.

**_This page is also available in [Chinese (中文)](./README_CN.md)._**

---

- [:clipboard: About](#clipboard-about)
  - [Introduction](#introduction)
  - [Team](#team)
    - [W3F Grants Committee](#w3f-grants-committee)
    - [W3F Grants Evaluators](#w3f-grants-evaluators)
    - [W3F Operations Team](#w3f-operations-team)
- [:pencil: Process](#pencil-process)
- [:bulb: Help](#bulb-help)
  - [Additional information](#additional-information)
  - [Real-time conversation](#real-time-conversation)
- [:rocket: Alternative Funding Sources](#rocket-alternative-funding-sources)
  - [Treasury](#treasury)
  - [General Grants Program](#general-grants-program)
  - [Other Grant Programs](#other-grant-programs)

## :clipboard: About

### Introduction

The Open Grants Program focuses on funding software development and research efforts related to **Polkadot, Kusama and Substrate**. It tries to achieve this while being:

- fully transparent,
- simple, and
- effective

The Web3 Foundation Open Grants Program focuses on technology grants up to **USD 30k for initial grants** and **USD 100k for follow-up grants**, which are tracked **transparently** on GitHub and disbursed in **bitcoin or DAI**. For larger grants, payments in other currencies and partly private submissions, please visit our [Web3 Foundation General Grants page](https://github.com/w3f/General-Grants-Program) on GitHub.

You can find a list of areas in the Web 3.0 Technology Stack that demand particular development [here](https://github.com/w3f/Web3-collaboration/blob/master/grants/grants.md#areas-of-interest-for-technical-grants), as well as a list of previously accepted projects [here](https://github.com/w3f/Web3-collaboration/blob/master/grants/accepted_grant_applications.md).

Additionally the builders program [feedback board](https://feedback.parity.io/) may contain some useful ideas for grant projects.

### Team

#### W3F Grants Committee

The Committee consists of individuals who know the funding priorities of the Polkadot ecosystem. The committee evaluates grant applications and provides feedback on these applications.

In cases where a niche expert opinion is desirable, one of the committee members may request such a review.

- [Aeron Buchanan](https://github.com/aeronbuchanan)
- [Marcin Górny](https://github.com/mmagician)
- [Robert Hambrock](https://github.com/Lederstrumpf)
- [David Hawig](https://github.com/Noc2)
- [Bill Laboon](https://github.com/laboon)
- [Rouven Pérez](https://github.com/RouvenP)
- [Reto Trinkler](https://github.com/retotrinkler)
- [Björn Wagner](https://github.com/bjornwgnr)
- [Benjamin Weiß](https://github.com/BenWhiteJam)
- [Gavin Wood](https://github.com/gavofyork)

#### W3F Grants Evaluators

Evaluators are individuals able to evaluate the technology delivered as a result of the Open Grants Program. The committee decides about the evaluators and has the right to add or remove evaluators (supermajority needed).

- [Marcin Górny](https://github.com/mmagician)
- [David Hawig](https://github.com/Noc2)

#### W3F Operations Team

Operations Team takes care of legal documents, invoicing and remittances.

- [Kasper Mai Jørgensen](https://github.com/KasperJor)
- [Rouven Pérez](https://github.com/RouvenP)

## :pencil: Process

1. **Grant Application:**
   1. [Fork](https://github.com/w3f/Open-Grants-Program/fork) this repository
   2. In the newly created fork, create a **copy** of the [application-template.md](./applications/application-template.md). In other words: In the GitHub web interface, you need to create a new file and copy the content of the [application-template.md](./applications/application-template.md) inside the new file. _Don't change the template file directly!_
   3. Label the file as "project_name.md".
   4. Fill out the template with the details of your project. The more information you provide, the faster the review.
   5. Once you have completed the application, click on "Create new pull request". The pull request should only contain _one new file_ — the markdown file you created from the template.
   6. Sign off on the [terms and conditions](https://github.com/w3f/Open-Grants-Program/blob/master/src/T&Cs.md) presented by [claassistantio](https://github.com/claassistantio) as Contributor License Agreement (CLA). You might need to reload the pull request to see the comment by [claassistantio](https://github.com/claassistantio).
2. **Application Review:**
   1. The committee can (and usually does) issue comments and request changes on the pull request.
   2. The application is accepted when all requested changes are addressed, the terms and conditions have been agreed upon and one third of the committee approves your pull request.
3. **Milestone Delivery:**
   1. [Fork](https://github.com/w3f/Grant-Milestone-Delivery/fork) the [Grant Milestone Delivery](https://github.com/w3f/Grant-Milestone-Delivery) repo with the **same GitHub account, which you used to submit the application!**
   2. In the newly created fork, create a **copy** of the [milestone-delivery-template.md](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/milestone-delivery-template.md).
   3. Label the file as **`project_name_milestone_number.md`**.
   4. Fill out the [invoice form](https://forms.gle/QvsbeSA3ziuC9k9b9).
   5. Fill out the template with the details of your milestone including a **link to the initial pull request**.
   6. Once you have completed the application, click on "Create new pull request".
4. **Milestone Review:**
   1. Evaluators can (and usually do) issue comments and request changes on the pull request.
   2. Grants Evaluators will merge your pull request to accept the deliverable.
5. **Milestone Payment:**
   1. The Operations Team receives a notification once the delivery was accepted or after two weeks without any feedback after the initial delivery. As soon as feedback is provided by the evaluators, this feedback first needs to be resolved.
   2. Operations Team makes the payment to the Bitcoin or Ethereum address specified in the initial application.

_The grant application can be amended at any time. However, this necessitates a reevaluation by the Committee._

Additionally, we try to enforce the [code of conduct](https://github.com/w3f/Open-Grants-Program/blob/master/CODE_OF_CONDUCT.md) and based on this may [block users](https://github.blog/2016-04-04-organizations-can-now-block-abusive-users/).

## :bulb: Help

### Additional information

| <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="22" cy="22" r="21" fill="black" stroke="black" stroke-width="2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 11C15.9239 11 11 15.9253 11 22C11 28.0747 15.9239 33 22 33C28.0747 33 33 28.0747 33 22C33 15.9253 28.0747 11 22 11V11ZM22 31.625C20.647 31.625 19.3586 31.3459 18.1912 30.8412L23.2004 25.2065C23.3117 25.08 23.375 24.9178 23.375 24.75V22.6875C23.375 22.3094 23.0656 22 22.6875 22C20.2592 22 17.6976 19.4769 17.6729 19.4521C17.545 19.3215 17.3704 19.25 17.1875 19.25H14.4375C14.058 19.25 13.75 19.5594 13.75 19.9375V24.0625C13.75 24.3224 13.8957 24.5616 14.1281 24.6771L16.5 25.8624V29.8994C14.0057 28.1614 12.375 25.2711 12.375 22C12.375 20.5232 12.7064 19.1249 13.3018 17.875H15.8125C15.9954 17.875 16.17 17.8021 16.2979 17.6743L19.0479 14.9242C19.1771 14.795 19.25 14.6204 19.25 14.4375V12.7738C20.1217 12.5152 21.0444 12.375 22 12.375C23.5125 12.375 24.9439 12.7242 26.2157 13.3457C26.1277 13.4214 26.0397 13.4997 25.9586 13.5822C25.1776 14.3619 24.75 15.3972 24.75 16.4986C24.75 17.6 25.1776 18.6381 25.9586 19.415C26.7396 20.1974 27.7901 20.6236 28.8709 20.6236C28.9396 20.6236 29.0084 20.6222 29.0771 20.6181C29.3728 21.7319 29.909 24.629 28.897 28.6165C28.8874 28.655 28.8819 28.6935 28.8791 28.7306C27.1301 30.5154 24.6964 31.6236 22.0014 31.6236L22 31.625V31.625Z" fill="white"/> </svg> | <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="22" cy="22" r="21" fill="black" stroke="black" stroke-width="2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.8C14 22.12 22 34 22 34C22 34 30 22.12 30 17.8C30 13.495 26.4218 10 22 10C17.5782 10 14 13.495 14 17.8V17.8ZM16.9091 17.995C16.9091 15.34 19.3527 13 22 13C24.6473 13 27.0618 15.37 27.0618 18.01C27.0618 20.665 24.6327 23.47 21.9709 23.47C19.3236 23.47 16.9091 20.65 16.9091 17.995V17.995Z" fill="white"/> </svg> | <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="22" cy="22" r="21" fill="black" stroke="black" stroke-width="2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5261 16.8457C31.4161 16.2841 32.099 15.3936 32.4194 14.3328C31.5862 14.8541 30.6654 15.2311 29.683 15.4352C28.8991 14.5512 27.7787 14 26.5387 14C24.1597 14 22.2319 16.0345 22.2319 18.5436C22.2319 18.8998 22.2677 19.2469 22.3416 19.5784C18.7621 19.3886 15.5881 17.5815 13.4619 14.8307C13.0909 15.5041 12.8789 16.2841 12.8789 17.1161C12.8789 18.6918 13.6394 20.0828 14.7956 20.8992C14.0893 20.8758 13.4249 20.6691 12.8431 20.3311V20.387C12.8431 22.5892 14.3272 24.4261 16.3006 24.8421C15.9382 24.9487 15.5585 25.002 15.1641 25.002C14.8868 25.002 14.6156 24.9747 14.3543 24.9214C14.9016 26.7258 16.4929 28.0415 18.3788 28.0766C16.9033 29.296 15.0458 30.0214 13.028 30.0214C12.6804 30.0214 12.3365 30.0019 12 29.959C13.9068 31.2473 16.1712 32 18.6043 32C26.53 32 30.8614 25.0761 30.8614 19.0714C30.8614 18.8738 30.859 18.6775 30.8503 18.4837C31.6922 17.8428 32.4244 17.042 33 16.1307C32.2272 16.4921 31.3964 16.7365 30.5261 16.8457Z" fill="white"/> </svg> | <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="22" cy="22" r="21" fill="black" stroke="black" stroke-width="2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M32.9287 16.4034L32.9327 16.407C32.9647 16.4322 32.9752 16.4768 32.9531 16.5129L26.2838 27.3504L21.489 19.559L25.3096 13.35C25.4467 13.1276 25.6996 13 25.9538 13C26.0151 13 26.0763 13.0095 26.1362 13.0248C26.1839 13.037 26.231 13.0521 26.2758 13.0746L32.9123 16.3929L32.9199 16.3967C32.9234 16.3984 32.9261 16.4009 32.9287 16.4034ZM19.3845 25.2123V18.1446L25.6666 28.3534L19.3845 25.2123ZM26.6105 28.8253L31.7816 31.4108C32.4545 31.7473 33 31.5117 33 30.8848V18.4423L26.6105 28.8253ZM11.8123 13.1762L18.2939 16.4171C18.3181 16.4291 18.3334 16.4539 18.3334 16.4808V30.8848C18.3334 31.3456 18.0845 31.6201 17.7297 31.6201C17.6037 31.6201 17.4644 31.5855 17.3181 31.5123L11.6092 28.658C11.2741 28.4904 11 28.0469 11 27.6723V13.6782C11 13.3096 11.1991 13.09 11.4829 13.09C11.5838 13.09 11.6952 13.1177 11.8123 13.1762Z" fill="white"/> </svg> | <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="22" cy="22" r="21" fill="black" stroke="black" stroke-width="2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1984 15C25.7833 15 25.3597 15.0747 24.9278 15.2239C24.4958 15.3732 24.094 15.5747 23.7226 15.8281C23.3509 16.0815 23.0313 16.3195 22.7633 16.5417C22.4955 16.7639 22.241 17 22 17.25C21.7588 17 21.5044 16.7639 21.2366 16.5417C20.9687 16.3195 20.649 16.0817 20.2773 15.8281C19.9056 15.5746 19.5038 15.3732 19.0719 15.2239C18.64 15.0747 18.2164 15 17.8013 15C16.3013 15 15.1261 15.4306 14.2757 16.2917C13.4252 17.1528 13 18.3472 13 19.875C13 20.3402 13.0788 20.8196 13.2361 21.3124C13.3934 21.8055 13.5727 22.2257 13.7735 22.5728C13.9743 22.92 14.2021 23.2587 14.4565 23.5885C14.711 23.9184 14.8969 24.1457 15.014 24.2707C15.1312 24.3957 15.2232 24.4859 15.2902 24.5414L21.558 30.8123C21.6786 30.9375 21.8259 31 22 31C22.1741 31 22.3214 30.9375 22.442 30.8126L28.6998 24.5624C30.2333 22.9723 31 21.4097 31 19.875C31 18.3472 30.5747 17.1528 29.7242 16.2917C28.8738 15.4305 27.6986 15 26.1984 15Z" fill="white"/> </svg> | <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="22" cy="22" r="21" fill="black" stroke="black" stroke-width="2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8681 25.427C24.8962 25.427 24.0795 24.646 24.0795 23.6829C24.0795 22.7199 24.8962 21.913 25.8681 21.913C26.84 21.913 27.6282 22.7199 27.6282 23.6829C27.6282 24.646 26.84 25.427 25.8681 25.427M26.2809 28.8121C25.3756 29.7084 23.9795 30.144 22.013 30.144C22.0089 30.144 22.004 30.1432 21.9992 30.1432C21.9951 30.1432 21.9902 30.144 21.9854 30.144C20.0188 30.144 18.6235 29.7084 17.7191 28.8121C17.4412 28.5368 17.4412 28.0915 17.7191 27.8169C17.9962 27.5423 18.4456 27.5423 18.7235 27.8169C19.3476 28.4353 20.4146 28.7365 21.9854 28.7365C21.9902 28.7365 21.9951 28.7373 21.9992 28.7373C22.004 28.7373 22.0089 28.7365 22.013 28.7365C23.5838 28.7365 24.6516 28.4353 25.2765 27.8169C25.5544 27.5415 26.0038 27.5423 26.2809 27.8169C26.558 28.0923 26.558 28.5376 26.2809 28.8121M16.3717 23.6829C16.3717 22.7207 17.1868 21.913 18.1579 21.913C19.1298 21.913 19.918 22.7207 19.918 23.6829C19.918 24.646 19.1298 25.427 18.1579 25.427C17.1868 25.427 16.3717 24.646 16.3717 23.6829M30.6658 12.5725C31.324 12.5725 31.8596 13.1032 31.8596 13.7546C31.8596 14.4068 31.324 14.9375 30.6658 14.9375C30.0076 14.9375 29.4721 14.4068 29.4721 13.7546C29.4721 13.1032 30.0076 12.5725 30.6658 12.5725M35.002 21.7673C35.002 20.0594 33.6002 18.6704 31.8766 18.6704C31.1306 18.6704 30.4456 18.9313 29.9076 19.3653C28.002 18.1784 25.5837 17.4634 22.9914 17.312L24.3436 13.0758L28.0597 13.943C28.1572 15.2837 29.2884 16.345 30.6658 16.345C32.1066 16.345 33.2792 15.183 33.2792 13.7546C33.2792 12.3269 32.1066 11.165 30.6658 11.165C29.6582 11.165 28.7822 11.7335 28.3458 12.5637L24.0275 11.5563C23.6659 11.4718 23.3002 11.6779 23.188 12.029L21.5092 17.2871C18.7162 17.3547 16.0906 18.0722 14.0452 19.3283C13.5146 18.9168 12.8474 18.6704 12.1233 18.6704C10.3998 18.6704 8.99799 20.0594 8.99799 21.7673C8.99799 22.8229 9.53432 23.7562 10.351 24.315C10.3169 24.5606 10.299 24.8078 10.299 25.0582C10.299 27.1929 11.5513 29.1785 13.825 30.6488C16.0044 32.0588 18.8893 32.835 21.9472 32.835C25.0051 32.835 27.8899 32.0588 30.0694 30.6488C32.3431 29.1785 33.5953 27.1929 33.5953 25.0582C33.5953 24.8303 33.5799 24.6041 33.5515 24.3794C34.4226 23.8295 35.002 22.864 35.002 21.7673" fill="white"/> </svg> | <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="21" fill="black" stroke="black" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32 25.5642V18.4358C32 18.4358 32 15 28.5534 15H15.4454C15.4454 15 12 15 12 18.4358V25.5642C12 25.5642 12 29 15.4454 29H28.5534C28.5534 29 32 29 32 25.5642M25.8829 22.01L19.3354 25.8432V18.1756L25.8829 22.01" fill="white"/> </svg> |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| [W3F Website](https://web3.foundation) | [W3F Forum](https://forum.web3.foundation) | [W3F Twitter](https://twitter.com/web3foundation) | [W3F Medium](https://medium.com/web3foundation) | [Polkadot Wiki](https://wiki.polkadot.network/en/) | [Web 3.0 Reddit](https://www.reddit.com/r/web3) | [W3F YouTube](https://www.youtube.com/channel/UClnw_bcNg4CAzF772qEtq4g) |

### Real-time conversation

We have Riot channels for real-time discussions on Web3 and Polkadot. Join the conversations.

- [Web3 Foundation](https://matrix.to/#/#web3foundation:matrix.org)
- [Polkadot Watercooler](https://matrix.to/#/#polkadot-watercooler:matrix.org)

## :rocket: Alternative Funding Sources

### Treasury

The treasury is a pot of on-chain funds collected through transaction fees, slashing, staking inefficiencies, etc. The funds held in the treasury can be spent on spending proposals. Both [Polkadot](https://polkadot.network/) and [Kusama](https://kusama.network/) offer everyone the opportunity to apply for funding via the treasury. See:

- [Treasury Wiki](https://wiki.polkadot.network/docs/en/learn-treasury)
- [Kusama Treasury Guide](https://docs.google.com/document/d/1p3UQUjph5t8TVaWnTkfrI5mE-BABnM9Xvtuhdlhl6JE/edit)
- [Polkadot Treasury Guide](https://docs.google.com/document/d/1IZykdp2cyQavcRyZd_dgNj5DcgxgZR6kAqGdcNARu1w/edit)

### General Grants Program

For larger grants, payments in fiat and partly private submissions, please visit our [Web3 Foundation General Grants page](https://github.com/w3f/General-Grants-Program) on GitHub.

### Other Grant Programs

Below is list of other grant programs in the polkadot/substrate ecosystem:

- [Darwinia Grants Program](https://docs.darwinia.network/docs/en/dev-bounty#grant-program)
- [Moonbeam Grants Program](https://moonbeam.network/community/grants/)

## :information_source: License <!-- omit in toc -->

[Apache License 2.0](https://github.com/w3f/Open-Grants-Program/blob/master/LICENSE) © Web3 Foundation
