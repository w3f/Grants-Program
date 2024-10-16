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
    - Press article (includes case study): https://www.cbn.com.cy/article/2024/5/9/774001/why-businesses-are-turning-to-crypto-payments/, Charlie Rexstrew, Cyprys Business News. 
- How did you identify these Universitas Muhammadiya Surakarta
https://journals2.ums.ac.id › lajPDF
Cryptocurrencies as Digital Payment Medi? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different? Please identify and assess any projects addressing the same need and explain how your project is distinct. Feel free to include applicable research data, statistics, or metrics.
  - If not, please indicate why such a project might not have been possible, successful, or attempted. 
- Are there any projects similar to yours in related ecosystems? 

## Team :busts_in_silhouette:

> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- Name of team leader
- Names of team members

### Contact

- **Contact Name:** Full name of the contact person in your team
- **Contact Email:** Contact email (e.g. john@duo.com)
- **Website:** Your website

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/{your_organisation}/{project_1}
- https://github.com/{your_organisation}/{project_2}

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/{team_member_1}
- https://github.com/{team_member_2}

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/{person_1}
- https://www.linkedin.com/{person_2}


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

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
