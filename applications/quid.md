# 👁‍🗨U!D

- **Team Name:** Quid Labs (quid.eth)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

### Project Overview :page_facing_up:

- Core [Diagram](https://imgur.com/a/pH2WKgm): stablecoin (QD) that starts out under-backed. No secondary token.

  - Because (БО) initial distribution ([!BO](https://github.com/QuidMint/iBO)) distributes future stablecoins at a discount.

- !BO deposits are in tether, staying staked for a year (after year ends, mint at 90 LTV).
  - Half of the tether is swapped for a PoS basket (starting with ETH and DOT).

- QD holders can deposit their ERC20 into one or several implementations of the core protocol...
  - ...or take on leveraged exposure therein (paying APR by bringing external liquidity, thus making QD backed over time).
  - In the initial phase (until QD is backed) exposure comes from the depositors (no roundtrips against external venues). 

- Depositors can choose not to earn APY (simply staying insured).
  - This way, they provide liquidity to the protocol, but APR and APY cancels out. 

- As per Kings 3:16-28, liquidations take [half](https://twitter.com/QuidMint/status/1735926977683406950) the borrower's initial collateral.
  - If borrowers pay double APR they are still able to claim back the half.
  - All the collateral accumulated on leverage (not owned by borrower to begin with) is claimed. 
- There is no recovery mode (unlike Liquity), and absorption of losses is deferred.
  - Until user decides to redeem their QD for underlying (only possible after 1yr).
  - Until then, all P&L is in QD (and compounding is improved by taking in liquidations 1:1 debt against collat).
    - Governance (weighted median voting for [SCR](https://www.risk.net/definition/solvency-capital-requirement-scr#:~:text=The%20solvency%20capital%20requirement%20is,the%20course%20of%20a%20year.)) is required to take profits.
- Positions close to liquidations are automatically shrunk (but only up 1.1 CR).

### Ecosystem Fit

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  - All of the above.
- What need(s) does your project meet?
  - Knowledge society with real community and educational memes.
    - Fight Club meets DeFi, but no misogyny and way less bloody.
- How did you identify these needs?
  - I liquidated my life savings...because it's really not about the money (it's about sending a message).
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?  
  - QU!D began as VIG on EOS, 4 years ago (C++)...before it reached >1M TVL,
    - a team called Equilibrium was heavily "inspired" by our code.
- Are there any projects similar to yours in related ecosystems?
  - THORchain, BUMP 

### Team :busts_in_silhouette:

- **Contact Name:** John Quid (pseudonym)
- **Contact Email:** john@quid.io
- **Website:** quid.io

### Legal Structure

- **Registered Address:**  PO Box 144, 3119 9 Forum Lane, Camana Bay,
  - George Town, Grand Cayman, KY1-9006, Cayman Islands
- **Registered Legal Entity:** Quid Labs

### Team's experience

Made contributions to Bancor Protocol and...Liquity.

### Team Code Repos

- https://github.com/quidmint

- Research diary (aka Cossak's Codex): http://quips.wtf

### Development Roadmap :nut_and_bolt:

- **Total Estimated Duration:** 9 months 🐣
- **Full-Time Equivalent (FTE):**  2-3 FTE
- **Total Costs:** 80,000 USD

### Milestone 1 - Frontend

- **Estimated duration:** 2-3 months
- **FTE:**  2
- **Costs:** 15,000 USD

Finalize frontend (with DOT intgration in addition to existing ETH). UX with 3 main faders:  
- cross-fader between long and short: 
  - and one volume fader for each (one for long, one for short); 
- Two P&L buttons:  
  - take profits and withdraw is activated on a certain date
- Two voting sliders for each collateral type
- Analytics dashboard showing  aggregate stats and individual
  - risk-adjusted returns;
  - most recently liquidated;
  - top borrowers in terms of P&L, etc.

### Milestone 2 - Core development

- **Estimated Duration:** 4-6 months
- **FTE:**  2
- **Costs:** 35,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0. | Testing | Our existing rust code (ported to ink!) must have unit-test coverage (min. 50%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 1. | ink! sub-module | We will use OpenBrush to create a way for QD from Ethereum to land inside the core protocol contract (ink! so that it can run in multiple pallettes).
| 2. | Oracle module | Feeds price data into the contract along with annualized vol from taapi.com |
| 3. | Watcher Bot | Similar to Solana's Serum crankshaft script...monitors positions across chains for liquidation. |
| 4. | External Venues | QU!D protocol runs as a closed loop ecosystem temporarily, but integration at the contract level with orderbooks or AMMs is an eventual necessity. |

### Milestone 3 - Onboard users (cross-chain) and expand scope

- **Estimated Duration:** 3-4 months
- **FTE:**  2
- **Costs:** 30,000 USD

- Update UX to include push notifications based on more TA Oracle feeds (allows semi-automated trading decisions)
  - Signal over-bought / over-sold based on a handful of technical analysis indicators
    - RSI (+ stochastic), MACD, SMA, and Bollinger Bands
- Cross-pallet communication for ink! if this is possible.
- Allowing multiple implementations to enhance each other for portfolio diversity (credit supply chain optimisation via broader execution),
  - instead of passing staking derivatives back and forth (with redundant token instances on each chain)
    - experiment communicating, instead, by changing the beneficiaries of options.
  - experiment with a more advanced stress testing model for options pricing than the existing implementation

