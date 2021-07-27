# Open Grants Program

<p align="center">
  <img src="./src/Grants_Program.png" style="width:1300px";>
</p>

**:loudspeaker: 重要提示:** Web3 基金会 Open Grants 计划重点关注技术拨款，**初期拨款最高为3万美元**，**后续拨款最高为10万美元**，这些拨款会在 GitHub 上**公开透明**地供查阅并以 **比特币 或 DAI** 支付。

**重要**: 提交的申请必须使用英文

---

- [:clipboard: 关于](#clipboard-关于)
    - [简介](#简介)
    - [团队](#团队)
- [:pencil: 流程](#pencil-流程)
- [:bulb: 帮助](#bulb-帮助)
  - [额外资料](#额外资料)
  - [即时联络](#即时联络)
- [:rocket: 其它拨款途径](#rocket-其它拨款途径)
  - [国库](#国库)
  - [一般 Grants 计划](#一般-Grants-计划)
  - [其他 Grants 计划](#其他-Grants-计划)
- [:information_source: 开源许可证](#开源许可证)

## :clipboard: 关于

### 简介

Open Grants Program 专注于分配资源到与 **Polkadot，Kusama 和 Substrate** 相关的软件开发和研究工作，并尝试通过以下方式达到:
- 完全公开透明
- 简单
- 有效率

Web3 基金会 Open Grants Program 专注于技术拨款，**初期拨款为3万美元**，**后续拨款最高为10万美元**，这些拨款会在 GitHub 上**公开透明**地供查阅以 **比特币或 DAI** 支付。有关更大金额的拨款，其他货币付款以及部分私人提交的资料，请前往 GitHub 上的 [Web3 基金会 Grants 的页面](https://github.com/w3f/Web3-collaboration/blob/master/grants/grants.md)。

您可以在[此处](https://github.com/w3f/Web3-collaboration/blob/master/grants/grants.md#areas-of-interest-for-technical-grants)找到需要特定开发的 Web 3.0技术堆栈中的列表，并在[此处](https://github.com/w3f/Web3-collaboration/blob/master/grants/accepted_grant_applications.md)找到以前接受的申请项目。

此外，builders program [反馈板](https://feedback.parity.io/)也可能包含一些有关拨款项目的有用想法。

### 团队

**W3F Grants 委员会**

该委员会由了解 Polkadot 生态系统优先事项的个人组成。
委员会负责评估拨款申请并提供有关这些申请的反馈。

在需要专家意见的情况下，委员会成员之一可能要求进行此类审查。

* [Aeron Buchanan](https://github.com/aeronbuchanan)
* [Marcin Górny](https://github.com/mmagician)
* [Robert Hambrock](https://github.com/Lederstrumpf)
* [David Hawig](https://github.com/Noc2)
* [Bill Laboon](https://github.com/laboon)
* [Rouven Pérez](https://github.com/RouvenP)
* [Reto Trinkler](https://github.com/retotrinkler)
* [Björn Wagner](https://github.com/bjornwgnr)
* [Benjamin Weiß](https://github.com/BenWhiteJam)
* [Gavin Wood](https://github.com/gavofyork)

**W3F Grants 评估人员**

评估人员是能够评估 Open Grants Program 提交的技术交付。委员会决定评估人员，并有权添加或删除评估人员(需要绝大多数)。

* [Marcin Górny](https://github.com/mmagician)
* [David Hawig](https://github.com/Noc2)

**W3F 运营团队**

运营团队负责法律文件，发票和汇款。

* [Kasper Mai Jørgensen](https://github.com/KasperJor)
* [Rouven Pérez](https://github.com/RouvenP)

## :pencil: 流程

1. **申请 Grant:**
    1. [克隆](https://github.com/w3f/Open-Grants-Program/fork)此仓库
    2. 在新创建的克隆中，创建 [application-template.md](./applications/application-template.md) **副本**。 换句话说: 在 GitHub Web 界面中，您需要创建一个新文件并在新文件中复制 [application-template.md](./applications/application-template.md) 的内容。 不要直接更改模板文件!
    3. 将文件名称改为 "project_name.md"。
    4. 在模板上填写项目的详细信息。
    5. 一旦填写好后，点击 "create new pull request"。
    6. 签署由 [claassistantio](https://github.com/claassistantio) 发出贡献者许可协议(CLA) 提出的[条款和条件](https://github.com/w3f/Open-Grants-Program/blob/master/src/T&Cs.md)。您可能需要重新加载 pull request 才能查看 [claassistantio](https://github.com/claassistantio) 的留言。
2. **审查申请:**
    1. 委员会可以发表留言并要求对 pull request 进行更改。
    2. 当三分之一委员会接受你的 pull request 请求，同意条款和条件并解决了所有请求的更改时，该申请即被接受。
3. **交付里程碑:**
    1. 用您于**提交申请的同一个 GitHub 帐户**来[克隆](https://github.com/w3f/Grant-Milestone-Delivery/fork) [Grant Milestone Delivery](https://github.com/w3f/Grant-Milestone-Delivery) 仓库!
    2. 在新创建的克隆中，创建 [milestone-delivery-template.md](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/milestone-delivery-template.md) **副本**。
    3. 将文件名称改为 "project_name_milestone_number.md"。
    4. 填写[发票表格](https://forms.gle/vgQEZzvvFUjCyBiW6)。
    5. 在模板中填写里程碑的详细资料，包括指向**最初 PR 的链接**。
    6. 所有资料填写好后，点击 "create new pull request"。
4. **审核里程碑:**
    1. 评估人员将会发表评论并请求对 PR 进行更改。
    2. Grants 评估人员以批准 PR 以接受可交付成果。
5. **里程碑付款:**
    1. 交付一旦被接受，或者在交付后两周没有任何反馈，运营团队就会收到通知。 评估人员提供反馈后，首先需要解决该反馈。
    2. 运营团队将向在最初申请中指定的比特币或以太坊地址付款。

*拨款申请可以随时修改，因此委员会需要重新评估。*

此外，我们会尝试执行[行为准则](https://github.com/w3f/Open-Grants-Program/blob/master/CODE_OF_CONDUCT.md)，并以此为基础[封锁潜在用户](https://github.blog/2016-04-04-organizations-can-now-block-abusive-users/)。

## :rocket: 其它拨款途径

### 国库

国库是通过交易费用，惩罚，低抵押率等手段收集的一堆链上资金。可以通过提出支出建议来使用国库中持有的资金。 [Polkadot](https://polkadot.network/) 和 [Kusama](https://kusama.network/) 为所有人也提供了通过国库申请资金的机会。请查看:

- [国库 Wiki](https://wiki.polkadot.network/docs/en/learn-treasury#docsNav)
- [Kusama 国库手册](https://docs.google.com/document/d/1p3UQUjph5t8TVaWnTkfrI5mE-BABnM9Xvtuhdlhl6JE/edit)
- [Polkadot 国库手册](https://docs.google.com/document/d/1IZykdp2cyQavcRyZd_dgNj5DcgxgZR6kAqGdcNARu1w/edit)

### 一般 Grants 计划

有关更大金额的拨款，法定和部分私人付款，请前往 GitHub 上的 [Web3 基金会 Grants 页面](https://github.com/w3f/Web3-collaboration/blob/master/grants/grants.md)。

### 其他 Grants 计划

以下是 Polkadot/Substrate 生态系统中其他资助计划：

- [达尔文 Grants 计划](https://docs.darwinia.network/docs/en/dev-bounty#grant-program)
- [Moonbeam Grants 计划](https://moonbeam.network/community/grants/)


## :bulb: 帮助

### 额外资料

* [W3F 网页](https://web3.foundation)
* [W3F 讨论区](https://forum.web3.foundation)
* [W3F 推特](https://twitter.com/web3foundation)
* [W3F Medium](https://medium.com/web3foundation)
* [Polkadot 维基](https://wiki.polkadot.network/en/)
* [Web 3.0 Reddit](https://www.reddit.com/r/web3)

### 即时联络
我们可以在 Riot 上的 Web3 和 Polkadot 频道上进行即时讨论。 加入对话。
* [Web3 基金会](https://matrix.to/#/#web3foundation:matrix.org)
* [Polkadot Watercooler](https://matrix.to/#/#polkadot-watercooler:matrix.org)

## :information_source: 开源许可证
[Apache License 2.0](https://github.com/w3f/Open-Grants-Program/blob/master/LICENSE) © Web3 Foundation
