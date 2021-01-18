# Open Grant Proposal

> 本条款和条件中引用了本文档，因此需要包含所有必需的信息。不要删除任何以粗体字母或标题形式出现的必填部分! 有关如何提交提案的资料，请前往[Open Grants Program 流程](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md)。

**重要**: 提交的申请必须使用英文

* **项目名称:** 项目的名称 (例如 DuoSwap 模块)
* **团队名称:** 团队的法定名称 (例如 Duo)
* **收款地址:** 比特币 或 以太坊(DAI) 的收款地址。我们暂时不会接收其它币种。(例如 123mp123...)

*您的申请将会有一个结合以上您提供的 GitHub 帐户和付款地址作为唯一识别码。请好好保存。*

## 项目概览 :page_facing_up:
如果这个申请是用来回覆 RFP，请在这部份第一行表明。

### 概览

请提供以下资料:
  * 项目简介
  * 请指出怎样把你的项目整合到 Substrate / Polkadot / Kusama
  * 请指出为什么你们有兴趣做这个项目

### 项目详细资料
我们希望团队对项目的预期最终成果已经有扎实的想法。

因此，我们要求团队提交 (如果相关):
* 任何 UI 的模型/设计
* 核心功能 API 的规范
* 要使用的技术堆栈概述
* 要部署的核心组件，协议，架构等的文档
* PoC / MVP 或其他有关该项目的先前工作或研究

### 生态合适
有其它项目跟你们类似吗？ 如果有的话，你们的项目跟他们有什么分别？

## 团队 :busts_in_silhouette:

### 成员
* 联络人名称
* 组员名称

### 联络方式
* **联络人:** 联络人全名 (例如 陈大文)
* **电邮:** 联络人电邮 (例如 john@duo.com)
* 网页

### 法律结构
* **注册地址:** 您注册的法人实体的地址 (如果有)。 请保持在同一行。(例如 High Street 1, London LK1 234, UK)
* **注册法人实体:** 您的注册法人名称（如果有)。(例如 Duo Ltd.)

### 团队经验
请描述团队的相关经验。如果项目涉及开发工作，我们将会很有兴趣您能挑出团队成员在过去的项目中所做出的一些有趣的代码成果。对于与研究相关的拨款，请参考相关领域中的过去项目。

### 团队 Github 代码库
* https://github.com/<your_repo_1>
* https://github.com/<your_repo_2>

### 团队 LinkedIn 资料
* https://www.linkedin.com/<person_1>
* https://www.linkedin.com/<person_2>

## 开发路线图 :nut_and_bolt:

本节应将开发路线图划分为多个里程碑。由于里程碑将出现在拨款合同中，因此有助于描述我们应该期望的功能，以及我们如何检查产品中是否存在此功能。每当交付里程碑时，我们都会参考合同以确保一切均按预期交付。

下面我们提供了一个**路线图例子**。 在描述中，应该清楚说明项目与 Substrate 或与 Polkadot 的关系。 我们建议工作范围应在3个月内，并且团队将路线图的结构定为1个月= 1个里程碑。

在每个里程碑:
* 请确保包括您的软件规范。将其视为合同 - 详细程度必须足以验证稍后软件是否符合规格。为了帮助您定义，我们在[此处](../src/grant_guidelines_per_category.md)建立了一个档案，其中包含一些拨款类别的例子。
* 请列出每个里程碑需求的资金总额。
* 请注意，每个里程碑都需要文档（例如教程，API 规格，架构详细信息)。 这确保了该代码可以被社区广泛使用。
* 请提供一个包含单元测试和集成测试的测试套件，以及有关如何运行它们的教程。
* 请致力提供 dockerfiles 用于交付项目。
* 请指出里程碑的所需时间，以及在每个里程碑上工作的全职员工的人数，并包括日数以及每天的费用。
* 成果(Deliverable) 0a-0d 是强制性的，不可删除，除非您在 PR 的 `其他说明(Additional Notes)` 部分中明确指定了原因（例如 里程碑 X 是面向研究的，因此没有可测试的代码）

### 概览
* **估算总需要时间:** 整个项目需时 (例如 2个月)
* **全职人力工时(FTE):**  受雇人的工作量 ([请参考这里](https://en.wikipedia.org/wiki/Full-time_equivalent)) (例如 2 FTE)
* **总金额:** 整个项目所需要的 BTC 或 DAI 金额。在提交申请时，第一次申請的金额需要低于 $30k 美元 (例如: 0.50 BTC)，而之后接着的申请可以是 $100k。

### 里程碑 1 例子 — 实现 Substrate 模块
* **估计时间:** 1个月
* **FTE:**  1
* **费用:** 0.75 BTC

| 数字(Number) | 成果(Deliverable) | 规范(Specification) |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be coded for the first milestone) |
| 2. | Substrate module: Y | We will create a Substrate module that will... |
| 3. | Substrate module: Z | We will create a Substrate module that will... |
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### 里程碑 2 例子 - 额外功能
...

## 未来计划
请包括团队的长远计划和意向。

## 额外资料 :heavy_plus_sign:
任何额外资料你认为对这个申请是相关但是还没有包括。

其他额外资料包括:
* 到目前为止已经做了什么工作？
* 是否有其它团队已经有在财务上为该项目做出了贡献?
* 你是否已经申请了其它的拨款?