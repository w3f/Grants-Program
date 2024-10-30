# CryptoCheckout

- **Team Name:** CrypCheck's team (solo at this moment)
- **Payment Details:**
  - **DOT**: 12EsK6AEtBN2XKvu2hZiR9jKpDvYFs7tdgzoLwAdmUWnFjj9.
- **Level:** 1

## Project Overview :page_facing_up:
### Overview
Secure simple decentralized crypto payments gateway.<br/>
The merchant must provide a valid DOT address when generating merchant ID in order to receive DOT payments (the only thing required).<br/>
The team interesting developing this project to redefine the online payments by using the crypto wallet instead credit cards.

### Project Details
#### Architecture
![](https://cryptocheckout.co/archi.jpg)
#### Tech stack
This project uses apache as web server (it can be nginx), php & javascript for the front & the back ends, nosql db to store useful data such as merchants, transactions, bayer details
#### Documentation
Accepting crypto payments with CryptoCheckout does not require specific tech stack.<br/>
The merchant must insert valid DOT address & generate merchant ID from the home page (no signup required).<br/>
Include our script on the page where the products/services are, providing his merchant ID on the link eg:
   
    <script src="https://cryptocheckout.co/crypto.js&id=fa8b" ></script>

Initialize the "Pay with CryptoCheckout" button

    showbtn('MycontainerdivID',{usd:1},onApprove=function(transactionId){//Do something},onError=function(error){//Do something});
    
Handle the server side payment validation, by using this endpoint to get transaction details:<br/>
https://cryptocheckout.co/?transaction=transactionId, the transactionId is retreived from the onApprove(transactionId) event, eg in case using php: <br/>

    <?php
    if( isset($_GET['transactionId'] ){
        $transaction_object = json_decode(file_get_contents('https://cryptocheckout.co/?transaction='.$_GET['transactionId']));
        if( abs(floatval($product_price)*floatval($transaction_object->rate)-floatval($transaction_object->amount))<=0.000001 && $transaction_object->completed == true && !in_array($_GET['transactionId'],$transactions_list) ){
            blacklist_transaction($_GET['transactionId']);
            // generate orderId
            $orderId = md5(strval(round(microtime(true)*1000)));
            header('Content-type: application/json');
            echo json_encode(array('result'=>true,'msg'=>'Thank you for your purchase!','orderId'=>$orderId));
            die();
        }else{
            header('Content-type: application/json');
            echo json_encode(array('result'=>false,'msg'=>'We can\'t validate your payment'));
            die();
        }
    }else{
        header('Content-type: application/json');
        echo json_encode(array('result'=>false,'msg'=>'transactionId is required'));
        die();
    }
    
#### The MVP
The product demo (Pay with CryptoCheckout's button) available within the homepage for both users (desktop & mobile):<br/> https://cryptocheckout.co<br/>
#### Limitation(s)
This project does not provide UI for the merchant's transactions history or sending funds, the merchant should use the platform/app where the provided address is generated.<br/>

### Ecosystem Fit
- The project fit the ecosystem in its main coin (DOT), more specific in its transactions, simply by confirm such amount were sent from such buyer to such seller.<br/>
- The target audiance is any person has DOT address/wallet, it could be as a merchant has online business want to accept DOT, or naturel user want to pay using his DOT balance.<br/>
- This project meet these needs:
    - How to exploit the large maket ($2.28T), serve the large uaer base (at least 500M).
    - New online payments solution with reduced transaction fee.
    - Financial technology with high security levels, with more freedom (decentralized) & confidential.
- The previous needs identified within:
    - Scientific article: https://journals2.ums.ac.id/laj/article/download/743/480/5791, Cryptocurrencies as Digital Payment Media: Opportunities 
and Challenges, Denny & Hari Sutra Disemadi, Universitas Muhammadiyah Surakarta, Feb 2023 (the page 7/15)
    - Case study: https://www2.deloitte.com/content/dam/Deloitte/us/Documents/audit/us-corporates-using-crypto-pov.pdf, The Business Benefit of Using Cryptocurrency, Deloitte US (the pages 3/16, 4/16)
    - Press article (includes case study): https://www.cbn.com.cy/article/2024/5/9/774001/why-businesses-are-turning-to-crypto-payments/, Charlie Rexstrew, Cyprus Business News.

- There are no projects like this in the Substrate / Polkadot / Kusama ecosystem.
    - The reasons that does not make it happens, successful or attempted are:
        - Risky step (creating the saas is complexe & require much work & time without garanteed results).
        - A time issue (which will be available next few months).
          
- There are many projects like this in related ecosystems. 

## Team :busts_in_silhouette:

### Team members

- Benraouane Soufiane (solo at this moment)

### Contact

- **Contact Name:** Benraouane Soufiane
- **Contact Email:** admin@cryptocheckout.co or benrawane2012@gmail.com
- **Website:** /

### Legal Structure

- **Registered Address:** (still not incorporated).
- **Registered Legal Entity:** (Still not incorporated).

### Team's experience
Benraouane Soufiane: he started his career as an Envato author (making WordPress plugins/themes, selling them within the marketplace), then he built the WP auto translator known as Hirak, an online tool like POEDIT, then by 2019, he developed mini web apps with their apis such as translator, ip to country, currency exchange rates, until 2021 he started with the AI where where he built the OCR using the tesseractjs package & the faceapi using the tensorflowjs package, by 2022 he started with the web3 & the development of the CryptoCheckout
### Team Code Repos

- https://github.com/BenraouaneSoufiane/hypersub-bot
- https://github.com/BenraouaneSoufiane/glodollar-donation-frame/tree/main

The previous repos are my most recent attemps, both are on the farcaster protocol (decentralized social media), the second repo uses the nextjs open graph images

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/benraouane-soufiane-5993bb275

## Development Status :open_book:

The repo of the whole CryptoCheckout's project: https://github.com/BenraouaneSoufiane/cryptocheckout.co/tree/main/site

Built with php (without any framework) & jQuery, uses nosql bds for performance issues (located in the db directory)
- index.php constract the main page & contain the core functionalities, includes all the api requests (generating new merchant id, handling the script inclusion call, validating the payments,...).
- Folders with crypto currencies symbols contain the qr images for each transaction.
- Other folders contain the main index.php file of each page.
  
- Documentation: the source code is in the app.js file, within the api folder.
    - At the initial release, where the wallet were generated on the site when the merchant hit generate merchant ID ([changelog](https://cryptocheckout.co/changelog)), this project used the official js packages for each crypto currency to implement the basic operations like generating wallets, creating, signing & submitting transaction fellowing the official documentation for each crypto currency. Below are examples but not limited:
        - For Polkadot, this project used @polkadot/api package: https://www.npmjs.com/package/@polkadot/api fellowing this documentation: https://polkadot.js.org/docs/ui-keyring/start/install.
    - After the update, this project ignore the previous packages when generating & importing the wallet to be used for the transactions, to match the addresses with the TrustWallet & Metamask apps/extensions, it used the official TrustWallet package:
        - https://www.npmjs.com/package/@trustwallet/wallet-core, fellowing this official doc: https://developer.trustwallet.com/developer/wallet-core/integration-guide/wallet-core-usage.
        -  The last update ignore all that previous development, for privacy issue, (the merchant prefer to not generate their wallet with CryptoCheckout, so we enable the merchant accept DOT by sharing only their addresses), the previous updates are DEPREACATED now.
## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables are based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested.
- **DOT %:** Percentage of Total Costs to be paid in (vested) DOT (>= 50%)

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language, and medium should reflect your target audience described above.) |
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone. You can refer to details provided in previous sections.) |
| 2. | Substrate module: Y | The Y Substrate module will... |
| 3. | Substrate module: Z | The Z Substrate module will... |
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |
| 5. | Library: ABC | We will deliver a JS library that will implement the functionality described under "ABC Library" |
| 6. | Smart contracts: ... | We will deliver a set of ink! smart contracts that will...


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

...


## Future Plans

Please include here

- how you intend to finance the project's long-term maintenance and development,
- how you intend to use, enhance, and promote your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** Polkadot/Kusama (USDT/USDC) payment address. Please also specify the currency. (e.g. 15oF4... (USDT))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
