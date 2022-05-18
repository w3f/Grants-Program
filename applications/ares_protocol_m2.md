
# W3F Grant Proposal

* **Project Name:** Ares Protocol
* **Team Name:** Ares Labs
* **Payment Address:** 0xbcAf727812A103a7350554B814Afa940B9f8b87D (USDT)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview

Ares Protocol is a decentralized cross-chain Oracle that truly implements a new generation of cross-chain Oracle service protocol for data on-chain verification, and open a compensation channel for data users who suffer business losses from using Oracle data.

Ares Protocol is a stochastic secure Oracle solution developed based on the Substrate framework, supporting hybrid Babe and off-chain workhorses, incorporating on-chain governance, bringing the Optimistic challenge model into the Oracle space, supporting the Ink contract ecosystem, and bringing better quality Oracle services to Defi developers.

### Project Details

The project structure consists of staking-extends that control Pallet-Staking, ares-oracle that controls quotation and audit work, oracle-finance that controls financial management, and their high-level abstraction layer oracle-provider-support.

From the perspective of validators, new nodes will have the opportunity to apply to become validators of ares-chain by staking on Pallet-Staking. The staking-extends module is responsible for capturing new validators, 
and ares-oracle is responsible for creating audit tasks for new validators. and ask these nodes to execute, If the node executes successfully, it means that the audit is passed, otherwise the staking-extend module will remove the failed ones and make it impossible to participate in the election normally.

After the audit, the passed nodes participate in the operation of ares-chain. In addition to enjoying the normal NPos rewards, they can also receive commissions for paid quotations. These proof-of-work and reward distribution are all done through the oracle-finance module.

![ares-component-workflow](https://raw.githubusercontent.com/aresprotocols/ocw-suit/master/docs/ares-component-workflow.png)

#### Pallet: ares-oracle
* submit_local_xray
  An offline method that submits and saves the local publicly data by the validator node to the chain for debugging.
- submit_ask_price
  Submit an ares-price request, The request is processed by all online validators, and the aggregated result is returned immediately.

* submit_forced_clear_purchased_price_payload_signed
  An offline method that submits and saves the purchase-result data. If the count of validator submitted by purchase-id already reached the threshold requirements, then average price will be aggregation and mark PURCHASED_FINAL_TYPE_IS_PART_PARTICIPATE

* submit_purchased_price_unsigned_with_signed_payload
  An offline method that submits and saves the purchase-result data. If all validators submit price-result, then average price will be aggregation and mark PURCHASED_FINAL_TYPE_IS_ALL_PARTICIPATE

* submit_price_unsigned_with_signed_payload
  An offline method that submits and saves the free ares-price results.
* submit_create_pre_check_task
  Submit a pre-check task. When a new validator is elected, a pre_check_task task will be submitted through this method within a specific period.
  This task is used to ensure that the ares-price response function of the validator node can be used normally.
* submit_offchain_pre_check_result
  When the validator responds to the pre-check task, the pre-check result data is submitted to the chain. If approved, it will be passed in the next election cycle, not immediately.
* submit_offchain_http_err_trace_result
  When there is an error in the offchain http request, the error data will be submitted to the chain through this Call
* update_purchased_param
  Updating the purchase-related parameter settings requires the Technical-Committee signature to execute.
* update_ocw_control_setting
  Update the control parameters of ares-oracle
* revoke_update_request_propose
  Revoke the key-pair on the request token list.
* update_request_propose
  Modify or add a key-pair to the request list.
* update_allowable_offset_propose
  Update the value of the allowable offset parameter to determine the abnormal range of the submitted price
* update_pool_depth_propose
  Update the depth of the price pool. When the price pool reaches the maximum value, the average price will be aggregated and put on the chain.
* update_pre_check_token_list
  Update the pre-checked Trading pairs list for checking the validator price feature.
* update_pre_check_session_multi
  session-multi indicates the trigger pre-check session period before the era.
* update_pre_check_allowable_offset
  The maximum offset allowed for pre-check when validation.


#### Workflow
**Validator Pre-Audit**
1. Ares-oracle obtains the newly elected validator through the `IStakingNpos::pending_npos` trait,
   and submits the `pre-check` task to the chain through `submit_create_pre_check_task` extrinsics.
2. Use the `IStakingNpos::near_era_change` trait to determine whether the session period close to the election has been reached, and if so, submit the new verification task to the chain through `submit_offchain_pre_check_result` extrinsics.
3. Validators that do not pass the review will not appear in the list of targets for elections.

**Free Trade-price**
1. When the offchain is working, the block author of the current block will be obtained according to the data provided by `authorship`.
2. If the "authority-id" corresponding to the block author is consistent with the local "keystore",
   obtain the list of "transaction pairs" corresponding to the block, and send an http request to obtain its price,
   then call the `submit_price_unsigned_with_signed_payload`  extrinsics upload the result to the chain .
3. The chain will verify whether the submission matches the block author of the current block, and if so, the result will be stored in the `price` pool.
4. When the `price` pool reaches the specified depth (this depth can be modified by the extrinsics `update_pool_depth_propose`),
   the average price aggregation event `Event::AggregatedPrice` occurs, which will generate an average price to the chain.
5. The price related to a `trade pairs` can be read through the `aresOracle.aresAvgPrice store`.

**Paid Trade-price**
1. Users can submit a `submit_ask_price` transaction to have all nodes on the chain make an offer,
   but this requires payment some fee, which is more time-sensitive than getting the price for free.
2. If submit a task successfully, you need to get the `purchase_id` from the `Event::NewPurchasedRequest` event,
   which will be used as the associated key value for other queries. The amount of payment is related to the number
   of `trade pairs` requests. If the nodes participating in the response are less than the response threshold,
   the task will fail, and the fee will not be deducted. (This threshold can be modified by extrinsics `update_purchased_param`).
3. Once the price are aggregated successfully, an `Event::PurchasedAvgPrice` event will be generated,
   and the relevant fees will be deducted from the `origin` account. Users can also read the corresponding result data through the `aresOracle.purchasedAvgPrice` store.

#### Moudle: oracle-provider-support
* has_pre_check_task
  Determine whether there is a pre-check task for the validator through a stash account.

* get_pre_task_by_authority_set
  Get the pre-check information related to a certain ares-authority collection, the specific matching authority-id, account-id, and the block submitted by the task.
  Precheck tasks that only match the first ares-authority

* check_and_clean_obsolete_task
  Trigger this method on a specific cycle to clean up too old and passed tasks

* take_price_for_pre_check
  Obtain PreCheckList result data according to Trading pairs specified by check_config

* save_pre_check_result
  Will verify the data on-chain based on the result of PreCheckList and return PreCheckStatus as the result

*  get_pre_check_status
   Get the pre-check status that a validator has stored, this status will affect whether it will be added to the validator list.

* clean_pre_check_status
  Remove pre-check status stored by a validator

* create_pre_check_task
  Create a pre-check task, return true if the creation is successful else return false

#### Workflow
**KeyTypeId of Ares**
1. Configure the definition of the `sr25519 AuthorityId` provided by the `scrypto` module into `ares-oracle::AuthorityAres`.
2. If session is enabled, `ares-oracle` needs to be configured into SessionKey.

**Pre-review task flow**
1. Use `has_pre_check_task` to determine whether a validator has a pre-check task.
2. If there is a pre-review task, get the corresponding price response through `take_price_for_pre_check`.
3. Check and save the result data through `save_pre_check_result`,
   the returned results include `PreCheckStatus::Prohibit` and `PreCheckStatus::Pass`.
4. Pass the block height to the `check_and_clean_obsolete_task` function to remove obsolete pre-review tasks and pre-check result to prevent overbloating.


#### Pallet: oracle-finance
* current_era_num
  To get the current ear, you need to consider that if the era-length changes, you still need to guarantee that the vector of time zones increases.

* get_earliest_reward_era
  Get the earliest reward era.

* calculate_fee_of_ask_quantity
  Input in a price_count to calculate the cost of the purchase.

* reserve_for_ask_quantity
  Keep the balance for the purchase.

* unreserve_ask
  Release the funds reserved for the purchase, which occurs after the failure of the ask-price.

* pay_to_ask
  Execute the payment, which will transfer the user’s balance to the Pallet

* record_submit_point
  Record the Points of the validator under an order

* get_record_point
  Get the Point of the record
* take_reward
  Claim all rewards under a given era

*  get_era_income
   Get total income balance for an era.

* get_era_point
  Read the total balance for an era.

* check_and_slash_expired_rewards
  Check for expired rewards and destroy them if overdue

* take_purchase_reward
  Validators get rewards corresponding to eras.
  Note: An ear cannot be the current unfinished era, and rewards are not permanently stored. If the reward exceeds the depth defined by T::HistoryDepth, you will not be able to claim it.

* take_all_purchase_reward
  Validators get rewards, it will help validators get all available rewards
  Note: An ear cannot be the current unfinished era, and rewards are not permanently stored. If the reward exceeds the depth defined by T::HistoryDepth, you will not be able to claim it.

#### Workflow
**Reward Deposit**

1. Payment is through the `Trait` provided by `IForPrice`. It is necessary to call `reserve_for_ask_quantity`
   to reserve the part balance of asker and associate it with the order-id.

2. Through the Trait implementation provided by `IForReporter`, call `record_submit_point` to save the point.
   The block height needs to be passed in, and the pallet will convert it to the corresponding era and record it under an order-id.

3. After the price-response is successful, call `pay_to_ask` to release the Balance reserved above,
   and pay the actual ask fee to the oracle-finance pallet.

**Claim Reward**
1. Rewards are claimed by era, and rewards cannot be obtained for unfinished eras. You need to calculate
   the 'Balance' corresponding to each point in the corresponding era. Algorithm: `Single Point Bonus` = `Total Revenue`/`Total Points` on era.
2. The validator needs to use the `Controller` account to perform the claim operation, This is for security reasons.
   The total amount received is equal to:  `Validator Points` * `Single Point Bonus`.
3. Rewards are transferred to the validator's Stash account via `oracle-finance` pallet.

#### Moudle: staking-extend
* current_staking_era()  /
  Get the Era of the current Staking pallet.

* near_era_change()      
  period_multiple: session-multi indicates the trigger pre-check session period before the era.
* old_npos()             
  Get the list of validators before the election.
* pending_npos()         
  Get the list of new validators after the current election, excluding validators from the previous session.
#### Workflow
**Adapter execution**

1. `ElectionProvider` of `Staking Config` is set to `staking_extend::elect::OnChainSequentialPhragmen`,
   `GenesisElectionProvider` is set to `staking_extend::elect::OnChainSequentialPhragmenGenesis`
2. `DataProvider` of `frame_election_provider_support::onchain::Config` is set to `staking_extend::data::DataProvider`
3. `DataProvider` of `pallet_election_provider_multi_phase::Config` is set to `staking_extend::data::DataProvider<Self>`
4. After that, the staking election request will be sent to `staking_extend`,
   and then the Election module will also obtain the candidate list from `staking_extend`,
   and the adapter connection is successful.
5. Call the `pending_npos` method to obtain a list of the new elected list,
   and then cooperate with the implementation of the `IAresOraclePreCheck::get_pre_check_status` trait to block the newly selected validator.


### Ecosystem Fit

The ecosystem finally runs on the Substrate-Babe consensus. At this point the block author is random, 
so the attacker cannot predict the next author, however, the attacker can still submit fake prices by controlling multiple validating nodes. 
This is where it becomes necessary to increase the depth of the quotes pool. 
A deeper pool of quotes means that more prices are involved in the median calculation, and prices that deviate from the median are eliminated and recorded, the cost is slower aggregation.

Another attack method is to submit prices through old blocks, call as old block attacks. Ares-oracle only allows block authors to submit quotes, 
and quotes are submitted through offchain-worker. Therefore, data uploads to the chain are asynchronous, only one set of prices can be submitted per block, 
but not all blocks need to submit prices, attackers can try to use them to submit fake prices, so ares-oracle reviews the submission interval to avoid such attacks, and mark attacking nodes.

Therefore, ares-oracle is determined to build a decentralized, safe and stable infrastructure based on the Substrate ecosystem, and is working hard for this goal.

## Team :busts_in_silhouette:

### Team members

- https://github.com/jiyilanzhou
- https://github.com/kami1983
- https://github.com/zzm-Zhong
- https://github.com/qwwind

### Contact

- **Contact Name:** Keric
- **Contact Email:** jiyilanzhou@gmail.com
- **Website:** https://www.aresprotocol.io/

### Team's experience

* Keric: 10 years development experience, proficient in public chain and cross chain development, proficient in using go and rust, p2p network expert.
* kami1983: 15 years of experience in protocol stack formulation and development, research work related to big data and blockchain, and robot quantification experience.
* zzm-Zhong: 10 years of work experience in IoT software development and management, familiar with contract and DAPP development.
* qwwind: More than 10 years of software development experience, proficient in /Java/Golang/node, etc. engaged in blockchain research and development, familiar with eos/eth.


### Team Code Repos

- https://github.com/aresprotocols
- https://github.com/aresprotocols/ares
- https://github.com/aresprotocols/ocw-suit


## Development Status :open_book:
- https://warehouseui.aresprotocol.io/
  Multi price data source weight configuration

## Development Roadmap :nut_and_bolt:


### Overview

### Milestone 1 Implement the rotation quotation rule

- **Estimated duration:** 4 weeks
- **FTE:**  3
- **Costs:** 15000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | Provide a document on how to build nodes and introduce the workflow of Oracle. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Docker-Compose.yml that can be used to test all the functionality provided by this milestone 1. |
| 1. | Block author submission mechanism | Only block authors have the right to submit prices. In order to ensure the fairness of submitted quotations, the Jump-Block mechanism is used to prevent the same person from making continuous quotations. |  
| 2. | Adjustable depth quote pool | The quotation pool is used to store the price before the average price is generated, and its depth can be adjusted by the governance module. Greater depth is safer but slower. | 
| 3. | Abnormal price handling | The price submitted by the node that deviates too much from the average price will be deleted and recorded. | 
| 4. | Substrate module: oracle-provider-support | Create a high-level abstraction module of the ares-oracle, which is used to define Trait, Struct, and Crypto that interact with other modules. |  
| 5. | Substrate module: ares-oracle | Create the oracle main module, initiate an http request through offchain-worker, submit the price to the chain, and finally aggregate the average price. |
| 6. | Launch base chain | Start the quotation node, aggregate the average price through oracle, and support the adjustment of oracle parameters through governance |  


### Milestone 2  — Financial system, validator review interface

* **Estimated Duration:** 4 weeks
* **FTE:**  3
* **Costs:** 15000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | On the basis of milestone 1, the module method and the usage instructions of the input parameters are provided. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Docker-Compose.yml that can be used to test all the functionality provided by this milestone 2. |
| 1. | Debug tools `xray` | Provides RPC tools for node debugging, which is convenient for validators to test the correctness of node deployment. |
| 2. | Financial functionality | Accept payment requests and provide an interface for validators to receive rewards. |
| 3. | Audit functionality | Through the audit, you can automatically verify whether the node's warehouse parameter settings and http functions are normal. If not, the validator will be removed. |
| 4. | Substrate module: oracle-finance | Create the payment ledger module of the oracle machine, manage and store the user's payment, and pay the validator's salary. |  
| 5. | Substrate module: staking-extend | Create a staking extension module, and control the election by adding an adapter to the original pallet-staking module, so as to cooperate with the ares-oracle to complete the audit of the verifier. |
| 6. | Launch testnet | Launch a testnet based on Babe consensus and invite community users to participate in running nodes. |


## Future Plans

If basic functions have been completed, `Ares` will:

* Code refactoring, Check and abstract merge code logic.
* Offence handling, Nodes that submit abnormal prices and nodes that attempt to attack with old blocks will have their stake slashed and removed from the validator set.
* Parachain Communication, By accessing the Polkadot parachain, it provides a safe and stable on-chain price for the parachain ecosystem.
* Substrate module: ares-xcm, Accept and send parachain requests, broadcast oracle prices, and process parachain orders.
* Launch parachain, Integrate all modules into the Substrate chain. After running, the chain will automatically review new validator nodes, and validators who pass the review will participate in the quotation and receive rewards.

## Additional Information :heavy_plus_sign:

We expect any developer who is interested in `Ares protocol` join us and build an efficient framework.
