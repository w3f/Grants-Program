# CryptoCheckout

- **Team Name:** CrypCheck's team (solo at this moment)
- **Payment Details:**
  - **DOT**: 12gaMBQBEFbNRPtjGtccxf9iZfT9RguPmb3Bj2D8gNNuHGRL.
  - **USDC (ERC20)**:
    0xa3A235c475Dbb8f4D7220366251C6E2Ff43C6755
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
This project uses apache as web server (it can be nginx), php & javascript for the front & the back ends, nosql db to store useful data such as merchants, transactions, bayer details...
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
    - How to exploit the large maket ($2.28T), serve the large user base (at least 500M).
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
        - A time issue (which may be available next few months).
          
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
        -  Due to the pricacy of the merchants, the previous developments/edits were decprecated, the merchants prefer to not generate their wallets with CryptoCheckout, it enables the merchants to accept DOT by sharing only their addresses (the last update).
          
## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** Duration of the whole project is 1 month.
- **Full-Time Equivalent (FTE):**  1 FTE (considering 8 hours per day).
- **Total Costs:** 4,200 USD.
- **DOT %:** 50%.

### Milestone 1 WordPress plugin- WooCommerce payment methods extension

- **Estimated duration:** 1-2 weeks
- **FTE:**  1
- **Costs:** 2,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user (merchant) can accept DOT payments on his WooCommerce store, & how another user (buyer) use his DOT balance to purchase something using test network, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant.|
| 1. | WordPress plugin: WooCommerce payment method/gateway | We will create a WordPress plugin that will add crypto payments to the WooCommerce payment methods. |

### Milestone 2 Shopify app- Shopify payment app

- **Estimated duration:** 1-2 weeks
- **FTE:**  1
- **Costs:** 2,200 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user (merchant) can accept DOT payments on his Shopify store, & how another user (buyer) use his DOT balance to purchase something using test network, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.|
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant.|
| 1. | Shoify app: Shopify payment app | We will create a Shopify payment app that will add crypto payments to such Shopify store, unlike WordPress, the Shopify apps must be hosted, running on such vm or vps & connected to the main server, not just a source code, & unlike other Shopify apps, the development of payment apps requires a review to unlock features related with payment processing. |
| 1a. | The Shopify payment app's phase 1 | Developing the admin app settings, paying 200$ & submit for review. |
| 1b. | The Shopify payment app's phase 2 | Developing the UI of the buyer, implmenting the logic between admin app settings & the buyer UI, connections between front end & the backend.... |


## Future Plans

Future plans are:
    

- Funding this project initially, by creating crowdfunding campaign on any platform, republic or kickstarter for example, for a pre seed round, then via VCs, it may also via token sale.
- Marketing plans in the short term are:
    - Introducing our saas to any inline business, via email marketing fellowing spam act 2003/standards, by building our private mail servers, there are 200k of most visited online business, 6M whole online businesses.
    - Introducing our saas via the social media platforms, x for example if we get funded.
    - Making partnerships with any potential partner.
- After we get funded, we build the team & attaching roles & responsibilities, starting with
    - Growth resp that contact & handle partnerships
    - Full stack/DevOps engineers to customize, add new features, monitor & tracing fails,...
    - PR/marketing agents
    - Customer support to handle requests from clients & collect feedbacks.
## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** Polkadot/Kusama (USDT/USDC) payment address. Please also specify the currency. (e.g. 15oF4... (USDT))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** via ChatGPT

Additional info:
- We already build private mail servers & contact our clients, we don't get them first time, but let us understand our client needs, resulting updating functionalities, the UI (accessibility of the product), the pricing,...
- There are no other teams contibute financially to this project.
- We've applied for pre seed funding ($200k) to the Ethereum foundation (rejected).
