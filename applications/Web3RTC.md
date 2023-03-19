# Web3RTC - Decentralized Video Chat App

- **Team Name:** Web3RTC
- **Payment Address:** 0xC1921FF865fB72fbBFfAa178865af24c7eA7F8ba - (USDC, Ethereum (ERC20))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

It has been observed that people with different needs (work, social, school, etc.) seek different solutions to meet the increasing need for online meetings. Web3RTC is a video chat application built on completely decentralized technologies. It aims to establish connections between users without the need for any central server to store data or transmit media resources.

Web3RTC uses peer connections for both storing and transmitting operations:

#### Store Operations

Authentication processes (register - login), creating and retrieving room data (participant list, chat messages, etc.), storing and retrieving past meetings information, storing past meeting records, allowing to make changes for user preferences.

#### Transmitting Media Source Operations

Establishing connections between peers in the rooms with both voice (source: microphone) and video (source: camera, screen share) sources.

Since Web3RTC will use OrbitDB for database operations, IPFS for storing meeting records, and finally WebRTC for the media transmitting operations,
it guarantees that every action that users can take on the apps would be established by peer-to-peer connections.

### Project Details

Web3RTC has already been funded by the Filecoin grants team since October, 2022 and it's came to final milestone to submit. You can check the first proposal prepared for this project here: https://github.com/filecoin-project/devgrants/issues/1021.
We want to continue on developing and improving the project and the apps we published.

Therefore Web3RTC is not a newly started project to be start with. 5 applications have already been published for different 5 platforms untill today.

You can check all of these deliverables from the below links:

- Main web application: https://www.web3rtc.com/
- macOS App Link: https://bafybeihnxg3inm7uhyqjv3zauqwkocz3bdkjdyoskzj76e2gmfq5bbeswy.ipfs.w3s.link/
- Windows App Link: https://bafybeibslp4bi6xihkvwo4xclqvje6mlyz4p5ktnoclprjaydk3vaue4te.ipfs.w3s.link/
- Newly published Android App Link: https://play.google.com/store/apps/details?id=com.web3rtc.mobile
- Newly published IOS App Link: https://apps.apple.com/app/web3rtc/id6446179949

Web3RTC is a smooth way of the transaction from web2 to web3 ecosystems. The main purpose of these apps is to be cost-efficient and accessible from anywhere to anyone at any time. Since all the applications will use the same P2P logic for every action, it will lower the cost of the programs. With the applications planned for 5 different platforms (web app, IOS app, Android App, macOS app and Windows app) Web3RTC would have a wide usage case.

Last but not least, we believe that it would have a great impact on the Web3 Ecosystem for educational purposes about how to use these technologies since every projects were published as open source projects.

However, there are some constraints on the app usage because of the used technologies. WebRTC constraints affect the streaming quality, total peer connection number (since WebRTC uses local computer resources, restricting connections is a must), or being able to connect with other peers (NAT traversal problem for WebRTC). Also please note that OrbitDB is alpha-stage software. It means OrbitDB hasn't been security audited and programming APIs and data formats can still change.

Here are the available features of the applications:

- Web app was created and published with a custom domain name
- IOS app was created and published on App Store
- Android app was created and published on Google Play Store
- macOS app was created and published on IPFS
- Windows app was created and published on IPFS

Common Features:

- IPFS is used for all data management process
- Authentication process is added as Login and Register cases with OrbitDB.
- **Ability to Create a room**
- **Ability to Join a room**
- **Ability to Chat with others in the room**
- **Ability to Share voice and camera source**
- **Ability to Change media sources on web/macOS/windows apps**
- **Ability to Add other users to the contact list**
- **Ability to List Past Meetings**
- **Ability to List Contact List**
- **Ability to Manage App Settings,** are common dashboard usages for all apps.
- However, **Screen Sharing and Recording Screen** features are available for only Desktop and Web app.
- **Recording Screen** downloaded to the local computer as a first step. Also Web3Storage is added as another option for storing the recorded file.
- Sign-in with Metamask was added to the web app as an authentication option.

## Technology Stack
 - Webrtc
 - IPFS
 - OrbitDB
 - Web3.Storage
 - React
 - Mobx for state management
 - TailwindCSS


**_APP SCREENSHOTS_**

You sen see the web app screen shots below.

`Login Page`

<img width="1712" alt="Screenshot 2023-03-18 at 16 56 46" src="https://user-images.githubusercontent.com/41550693/226111046-e12f9c54-d0e0-4cb7-9b42-5da39b691d54.png">

`Register Page`

<img width="1711" alt="Screenshot 2023-03-18 at 16 57 18" src="https://user-images.githubusercontent.com/41550693/226111092-1c8f19f1-7692-4e4f-a002-72e46551a350.png">

`App Dashboard 1`

<img width="1713" alt="Screenshot 2023-03-18 at 16 57 33" src="https://user-images.githubusercontent.com/41550693/226111119-a24c69e3-0441-4cbd-b3a6-4d1f007ca050.png">

`App Dashboard 2`

<img width="1711" alt="Screenshot 2023-03-18 at 16 57 39" src="https://user-images.githubusercontent.com/41550693/226111166-b04c0a63-835b-4fa7-89a4-c2bc2c5f8d6e.png">

`App Dashboard 3`

<img width="1709" alt="Screenshot 2023-03-18 at 16 57 45" src="https://user-images.githubusercontent.com/41550693/226111198-4b5f1997-d0d6-4312-8179-8e161f9ab491.png">

`App Dashboard 4`

<img width="1711" alt="Screenshot 2023-03-18 at 16 58 35" src="https://user-images.githubusercontent.com/41550693/226111216-065acf80-75d4-4f4a-9df4-2f9eb32b07e6.png">

`Room with 2 Participants (web app - ios app)`

<img width="2049" alt="Screenshot 2023-03-18 at 17 05 17" src="https://user-images.githubusercontent.com/41550693/226111246-570d497d-ff1a-4cdb-ab22-e03651689b00.png">

You can check the improvements of the design and app features compared to initial grant issue from this link: https://github.com/filecoin-project/devgrants/issues/1021.
Also, if you are interested in the project, i can share with you an User Testing Report (we completed the first testing process last week) and demo links for each app.

### Ecosystem Fit

Since Web3RTC is completely built on top of the decentralized technologies such as IPFS, OrbitDB and WebRTC, with 5 applications it aims to offer simple and effective User Inteface solutions for online meetings on the Web3 ecosystem.
We haven't seen any similar project on the web3 ecosystem yet. If you have any suggestions to improve our ecesystem fit for Polkadot or the app in general, we would definitely like see your valuable thoughts.

## Team :busts_in_silhouette:

### Team members

- Utkucan YILDIRIM

### Contact

- **Contact Name:** Utkucan Yıldırım
- **Contact Email:** yil.utkucan@gmail.com
- **Website:** web3rtc.com

### Legal Structure

- **Registered Address:** -
- **Registered Legal Entity:** -

### Team's experience

I am a software developer mainly focused on front-end development areas. However, I am also interested in many various topics such as Web3 and P2P apps (specifically with the WebRTC apps) for in that matter. I have 3+ years of work experience in my professional career and approximately 2 years of knowledge of WebRTC technologies.
Web3RTC is my first approved and supported (by Filecoin) project, and I want to develop it with my team as i could.

### Team Code Repos

- **https://github.com/utkucy/ipfs-webrtc** Main repo for all of the apps
- **https://github.com/utkucy/webrtc-mobile** Sub repo for mobile app publishments.

- https://github.com/utkucy

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ucy/

## Development Status :open_book:

It's nearly come to end to meet initial proposal's deliverables. We are currently making user tests and small developments on the applications.

## Development Roadmap :nut_and_bolt:

We want to get user requests as many as we can and continue to add new features to improve Web3RTC. 
Also, since there are some limitations because of the WebRTC, we want to increase the consistency of the applications in the future.


### Overview

- **Total Estimated Duration:** 2-3 Weeks
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 30,000 USD

### Milestone 1

- **Estimated duration:** 2-3 weeks
- **FTE:** 1
- **Costs:** 30,000 USD


|  Number | Deliverable               | Specification                                                                                                                                                                                                                                 |
| ------: | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | GPLv3 Unlicense                                                                                                                                                                                                          |
| **0b.** | Documentation             | A README file is published that explains how a user can use the apps or a developer can run the apps. We want to update the README file if we make any changes. |
| **0c.** | Testing and Testing Guide | Detailed User Testing Reports was prepared for the first step. Which we described how did we run these tests.                                                                                                                                           |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
|     0e. | Article                   | We will publish a page for our web app that shows the current updates about our product.                                                |
| 1 | App Development and Publishment | **Creating and publishing the web app** |
| 2 | App Development and Publishment | **Normal authentication flow (login-register) added** |
| 3 | App Development and Publishment | **Ability to Create a room** |
| 4 | App Development and Publishment | **Ability to Share voice and camera source** |
| 5 | App Development and Publishment | **Ability to Change media sources** |
| 6 | App Development and Publishment | **Ability to Add other users to the contact list** |
| 7 | App Development and Publishment | **Ability to List Past Meetings** |
| 8 | App Development and Publishment | **Ability to List Contact List** |
| 9 | App Development and Publishment | **Ability to Manage App Settings** |
| 10 | App Development and Publishment | **Ability to Record a screen sharing and download it in WebP format to a local computer** |
| 11 | App Development and Publishment | **Custom domain for the web app** |
| 12 | App Development and Publishment | **Publishing the web app's code as open source with GNU GPLv3 license on GitHub.** |
| 13 | App Development and Publishment | **Ability to Chat with others in the room.** |
| 14 | App Development and Publishment | **Metamask authentication process will be added to web app.** |
| 15 | App Development and Publishment | **Web3Storage added as another option to store the recorded meeting file.** |
| 16 | App Development and Publishment | **Creating and publishing the Desktop apps for both macOS and Windows Platforms. All milestone steps mentioned above features were be completed for the apps.** |
| 17 | App Development and Publishment | **Creating both the IOS and Android apps. All of the common features stated in the Deliverables section were implemented for both apps** |
| 18 | App Development and Publishment | **Both mobile apps were published in their app stores.** |
| 19 | Improvement and Maintenance | End-to-end testing process for all 5 apps. |
| 20 | Improvement and Maintenance | Sponsors page will be added to apps |
| 21 | Improvement and Maintenance | Downloadable application file links will be demonstrated in a different page on the web application |
| 21 | Improvement and Maintenance | Other features that we consider as useful to application logic will be added to applications to meet our user requests according to results of our testing processes |




## Future Plans

- We want to continue to develop product's usability
- All of the applications are now available online but we want to update continiously the product for bugs and user requests.
- Implement the new changes in used technologies if there will be any.
- Add new features in the futere according to requests and team status.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Announcement by another team / personal recommendation

This project is granted by Filecoin. (https://github.com/filecoin-project/devgrants/issues/1021)
