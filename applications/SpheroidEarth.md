# Spheroid Earth

- **Team Name:** Image Cloud Limited
- **Payment Address:** 0x730b8ee21629a98398bf4f013c882a2c3c303737 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

**Spheroid Earth** is an open visual positioning platform for AR/XR applications and metaverses.

We introduce an integrated pipeline and tools for:

- data collection from mobile devices with cameras;
- data processing with computer vision / AI pipeline;
- building visual search index and querying.

Our initial toolset aims to simplify the work of researchers in the fields of computer vision, photogrammetry, and structure from motion (SfM). It lays the foundation for using models in production and in decentralized environments in the future.

**Our ultimate goal is to build a Kusama/Polkadot parachain that serves as a global-scale visual search engine.** This engine will provide open APIs and data access for AR/XR metaverse builders, creators, advertisers, and end-users.

**:information_desk_person: Why is it necessary?** In applications designed for augmented/extended reality (AR/XR), virtual objects are superimposed over the real world. This means that the virtual world must be accurately positioned relative to the real world. To achieve this, the camera must be precisely positioned within the scene. Any inaccuracies or temporal instability may result in unrealistic and "uncanny" renderings.

The accuracy of GPS is insufficient in urban environments, typically introducing an error [of 5 meters (16 ft) or more when used on mobile devices](https://www.gps.gov/systems/gps/performance/accuracy/). Built-in compasses also have an error of 3 degrees or more. Overall, this results in a divergence of tens of meters on a city block scale. While technologies like LiDAR can address some of these issues, they are limited in range, typically covering only 4-5 meters.

For sub-meter, and even centimeter, location accuracy on a city block scale and beyond, visual recognition of the environment is the optimal solution. However, for world-scale positioning and multi-user scenarios, only proprietary solutions are available in the market.

**:earth_americas: Building an open alternative.** The visual positioning platform lays a foundation for world-scale AR/XR. Big corporations are creating their own proprietary solutions for that. We believe that an open and community-powered alternative is necessary and would eventually provide better service quality.

**:earth_americas: Scientific foundation.** [Structure-from-Motion (SfM)](https://en.wikipedia.org/wiki/Structure_from_motion) is a well-established technique in photogrammetry that enables the reconstruction of 3D scenes from 2D images. To perform 3D reconstruction using an SfM pipeline, correspondences between images must be calculated.

Calculating robust correspondences can be a challenging task, especially when dealing with changing environmental conditions and dynamic objects. Therefore, there is a high level of research activity in this area, and the state-of-the-art is updated several times a year since 2020.

Various algorithms are used to find correspondences, including classical ones such as SIFT, and modern ones based on "learnable descriptors" such as SuperPoint and D2-Net, as well as direct matchers (without explicit features) like LoFTR, among others.

![An-illustration-of-SfM-algorithm-Sweeney-2016-The-process-of-estimating-the-3D.png](https://spe-demo.b-cdn.net/shared/w3f-grants/SPE-SfM-algorithm-Sweeney-2016.png)

In addition to existing approaches based on SfM, a novel approach called NeRF has gained attention. This approach involves representing a 3D environment using a trained neural network, i.e., one trained network per scene. However, this area is not well researched and the representation is quite computationally intensive, and the artifacts require a lot of storage.

**:thought_balloon: From local-first to decentralized.** We start by developing a local-first solution that can be run on a local machine, e.g., laptop or GPU-powered desktop. Such a solution, being open-sourced, would engage computer vision / AI researchers, developers and enthusiasts. Down the road, the pipeline becomes decentralized.

### Project Details

The scope of the project is to develop a local-first solution for SfM pipeline that includes data collection, data processing, tools for datasets viewing, and manipulation.

1. Datasets format specification
2. Mobile application for datasets collection
3. API server to receive uploads from the mobile application
4. Web-based application to work with datasets: browse, cleansing, starting pipelines
5. Structure-from-Motion (SfM) toolset with pluggable image matchers
6. Mobile SDK and server API for localization

![SPE-local-first-schema.png](https://spe-demo.b-cdn.net/shared/w3f-grants/SPE-local-first-schema.png)

**#### Datasets format specification**

We are introducing a format for datasets distribution and exploration that is powered by a SQLite database. This will enable the use of standard and widely adopted tools such as Datasette to easily browse and investigate datasets. It will also allow distribution of datasets alongside with artifacts as a single file.

Proposed database schema contains tables:

| Table | Description |
| --- | --- |
| metadata | Common scene metadata as key-value |
| images | Images with metadata contained in the database |
| features | Features detected on the images |
| matches | Feature matches for pairs of images |
| pointclouds | Scenes point clouds |

Proposed database schema for the `metadata` table:

| Column name | Type | Description |
| --- | --- | --- |
| key | TEXT | Primary key |
| value | TEXT | Value stored for key |
| type | INTEGER | Casting type, 0=text, 1=integer, 2=real, 3=json |

Metadada keys: name, timestamp, orientation, device_id, device_model, device_os, device_os_version, app_name, app_version, geo_location, geo_latitude, geo_longitude, geo_altitude, notes, lens_focal_length, sensor_width, sensor_height, resolution_width, resolution_height

Proposed database schema for the `images` table:

| Column name | Type | Description |
| --- | --- | --- |
| name | VARCHAR | Image name, primary key |
| data | BLOB | Image data stored as blob |
| timestamp | DATETIME | Capture time of the image, in UTC timezone |
| format | VARCHAR | PNG of JPEG format for image data |
| geo_latitude | REAL | GPS latitude of the image |
| geo_longitude | REAL | GPS longitude of the image |
| geo_accuracy | REAL | GPS accuracy in meters |
| geo_azimuth | REAL | Compass azimuth of the image |
| intrinsic_matrix | TEXT | Camera intrinsic matrix in JSON format (from ARKit/ARCore) |
| extrinsic_matrix | TEXT | Camera extrinsic matrix in JSON format (from ARKit/ARCore) |
| resolution | VARCHAR | Resolution of the image |
| file_size | BIGINT | File size in bytes |
| quality_metrics | TEXT | Image quality metrics |

Structure for `features` is pretty straightforward, it should contain features IDs and feature descriptors, and `matches` should contain pairs of matched features with confidence values.

**#### Mobile application for datasets collection**

This is a simple native application designed for iOS/ARKit and Android/ARCore that includes the following functions:

- **Start new footage:** Initializes a new footage within the AR session, saves the current position within the virtual scene, and the global position via geo-location services.
- **Collect snapshots for the footage:** Saves images from the device's camera within the AR session, alongside metadata (intrinsics, extrinsics, geo-location). Images are saved periodically or based on "significant movement" detection. Significant movement is defined by distance of movement (e.g. 3 meters) and angle of movement (e.g. 10-15 degrees). Movement is detected through built-in AR tracking mechanisms.
- **Export footage:** Collected images are saved as PNG files and the metadata is stored as JSON files, named “img_00001.png” and “img_00001.json”, respectively. To export the footage, we upload images via HTTP API to a specified server, e.g. via WiFi to a local server.
- **Clean up footages:** Selectively deletes footages from a mobile device to save space.

**#### API server to receive uploads from the mobile application**

The API server is designed to receive datasets from the mobile application. It provides endpoints to manage dataset uploads, which can be customized to allow uploads to arbitrary destinations.

The procedure for uploading consists of the following steps:

1. The mobile device requests a new scene ID from the API via a POST request.
2. For each file to be uploaded, the mobile device provides the scene ID and requests upload credentials via a POST request. The response contains:
    - URL to send the upload to
    - Method to use (e.g. PUT or POST)
    - Headers to send with the request
3. Files are uploaded one by one, and after all files are uploaded, the API server is notified via a POST request. Additionally, the footage is marked as uploaded locally.

**#### Web-based application to work with datasets: browse, cleansing, starting SfM pipeline**

A web application is basically a data browser that contains various domain-specific features.

General features that need to be implemented include:

- Browsing the working directory to choose an SQLite database file.
- Browsing the database file and displaying the contents of its tables.
- An SQL console to execute custom database search queries.
- Simple filters to search by: name, timestamp, and geo location range.

Specific features include:

- Display image features as points rendered on top of the selected image.
- Display matching features between pairs of images as points connected by lines.
- Display the location projections of images on a plane, such as a top-down view.

All of the General and Specific features mentioned above are also available through Python modules, enabling usage from code, such as from Jupyter notebooks.

Additionally, an interactive point cloud viewer has been implemented to display 3D reconstructions.

**#### Configurable Structure-from-Motion (SfM) toolset**

We propose to create a toolset in Python to manage datasets and run SfM pipelines, with pluggable options for image matching algorithms. The toolset will utilize the OpenSfM framework for running generic SfM algorithms and will include features such as the import and export of datasets between SQLite, OpenSfM and COLMAP formats, as well as a pluggable interface for custom image matching models.

Toolset core requirements:

- Python 3.8+
- OpenSfM (up to date version from GitHub)
- NumPy 1.23.0+
- OpenCV 4.x

Key toolset features:

- Import and export datasets between SQLite and OpenSfM formats.
- Import and export datasets between SQLite and COLMAP formats.
- Use a pluggable interface to implement custom image matching models.
- Build a point cloud-based 3D reconstruction, and calculate the input camera's poses.
- Construct a search index of features and 3D coordinates of points to enable later searches.

Search index implementation is powered by SQLite and Faiss to perform [vector similarity search](https://github.com/asg017/sqlite-vss) queries efficiently.

It's worth noting that the resulting search index does not contain original images, so it's free from any personal data. This feature allows for publishing the search index as a shared resource, specifically on decentralized storage in the future.

**#### Mobile SDK and server API for localization**

To perform localization of client device, a "search request" must be made, which includes at least the following:

- The image itself or features that have been pre-calculated on the client device.
- Metadata, such as GPS and compass data.

The server-side implements the following workflow:

- If not provided by the client, image features are calculated.
- Using GPS and compass data, the search area is narrowed down.
- The calculated features are matched against features in the search index to return 2D-3D correspondences.
- The position of the client device performing the query is returned by [solving the Perspective-n-Point (PnP) task](https://docs.opencv.org/4.7.0/d5/d1f/calib3d_solvePnP.html) based on the 2D-3D correspondences.
    
    ![Solve-PnP-schema.jpg](https://spe-demo.b-cdn.net/shared/w3f-grants/SPE-Solve-PnP-schema.jpg)
    
### Ecosystem Fit

Our project aims to create an open visual positioning platform for AR/XR applications and metaverses. Initial implementation is intended to run on a local machine and open sourced. Down the road, the pipeline becomes decentralized, with decentralized storage of artifacts like search index and reconstructed models, and decentralized computations for updating and querying search index. Also we aim to create a Polkadot parachain specifically serving such a pipeline at some point in the future.

**Who is our target audience?**

Our project's initial users are computer vision/AI developers and enthusiasts interested in working with AR/XR datasets and developing open and community-powered alternatives to proprietary solutions for world-scale AR/XR. Once developed, our solution can be used by any third-party AR/XR application, such as games and city quests, making it a mass-market solution.

**What need(s) does your project meet?**

- This project provides an open and community-powered alternative to proprietary solutions for world-scale AR/XR.
- By "community-powered," we mean that revenue will be distributed among all contributors.

**Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

Currently, there are no other projects in the Substrate/Polkadot/Kusama ecosystem that cover all the scope of our project.

## Team :busts_in_silhouette:

### Team members

- Alexey Kinev
- Ekaterina Ponomarenko
- Sergey Kozlyukov

### Contact

- **Contact Name:** Alexey Kinev
- **Contact Email:** alexey.rudy@gmail.com
- **Website:** [https://github.com/rudyryk](https://github.com/rudyryk)

### Legal Structure

- **Registered Address:** Stasinou av., 1-4, 1060, Nicosia, Cyprus
- **Registered Legal Entity:** Image Cloud Limited

### Team's experience

**Alexey Kinev** has over 15 years of experience in software development, working with C/C++, Python, and JavaScript/TypeScript. He is a proponent of the open-source model and has contributed to various open-source projects. One notable contribution is the development and publication of [peewee-async](https://pypi.org/project/peewee-async/), a Python library that provides an async interface for the peewee ORM. Alexey is also experienced in building computer vision pipelines and has managed computer vision teams for projects such as [Ball tracer for tennis at Track Tennis](https://www.linkedin.com/in/rudyryk/overlay/experience/1181451773/multiple-media-viewer/?profileId=ACoAAASclksBjCH_JWVL-0GZme-ZZO-xUyYxbwc&treasuryMediaId=1635518785867) and [Spheroid Earth project](https://ecosystem.spheroid.io/earth/reconstructions/all).

**Ekaterina Ponomarenko** is an experienced senior data specialist with over 13 years of experience in Python, SQL, and working with enterprise-scale data pipelines. She has analyzed terabyte-scale datasets, built data processing for millions of daily data points, and developed AI/ML-powered solutions. In the [Spheroid Earth project](https://ecosystem.spheroid.io/earth/reconstructions/all), Ekaterina researched and implemented approaches to improve the accuracy of structure-from-motion pipelines.

**Sergey Kozlyukov** is currently conducting doctoral research on "inverse graphics" at Aalto University's Computer Science department. His research focuses on achieving a new state-of-the-art in dense image correspondence. He also led the implementation of a computer vision pipeline in the [Spheroid Earth project](https://ecosystem.spheroid.io/earth/reconstructions/all). In addition, he actively contributes to open source projects, including NixOS/nixpkgs. He is also an enthusiast of the Rust programming language.

### Team Code Repos

- [https://github.com/SpheroidEarth](https://github.com/SpheroidEarth)

GitHub accounts of team members:

- **Alexey Kinev** [https://github.com/rudyryk](https://github.com/rudyryk)
- **Ekaterina Ponomarenko** [https://github.com/alesten-code](https://github.com/alesten-code)
- **Sergey Kozlyukov** [https://github.com/SomeoneSerge](https://github.com/SomeoneSerge)

### Team LinkedIn Profiles

- [https://www.linkedin.com/in/rudyryk/](https://www.linkedin.com/in/rudyryk/)
- [https://www.linkedin.com/in/ekaterina-ponomarenko-phd-2a2560106/](https://www.linkedin.com/in/ekaterina-ponomarenko-phd-2a2560106/)

## Development Status :open_book:

We have developed a cloud-based pipeline that. It currently relies on proprietary services and is integrated with the Spheriod Universe ecosystem. The pipeline's data structures and data flows have been tested, and we have also made custom improvements to the structure-from-motion pipeline to increase reliability, which are not yet available in open source libraries.

The implementation includes:

- Data collection via the XR Hub mobile application (available for iOS and Android)
- A 3D scene reconstruction pipeline based on OpenSfM
- An image matching module based on modern models such as [LoFTR](https://github.com/zju3dv/LoFTR), [KP2D](https://github.com/TRI-ML/KP2D)

Artifacts examples produced with the pipeline:

- [Example 1](https://spe-media.b-cdn.net/viewer/#key=0c896058-5166-4496-a399-3aa74649411f&rev=0), Amsterdam, Netherlands
- [Example 2](https://spe-media.b-cdn.net/viewer/#key=0c8f20ca-6789-4f9d-96d6-50060ed750e7&rev=0), Winnipeg, Canada
- [Example 3](https://spe-media.b-cdn.net/viewer/#key=0c887982-db84-4b7d-a1ab-77c2e9b071e1&rev=0), Odessa, Ukraine
- [Example 4](https://spe-media.b-cdn.net/viewer/#key=0c83e62a-0e4f-455a-95c6-f3a405b15a73&rev=0), Conventry, UK

We are revising the stack and implementation to make it modular, suitable for research purposes, and open source our development.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):** 2.5 FTE
- **Total Costs:** 63,000 USD

### Milestone 1 — Data collection tools

- **Estimated duration:** 1 month
- **FTE:** 2.5 FTE
- **Costs:** 10,500 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and the Server’s API description. We will also provide build instrutions for mobile applications and a tutorial to run a data collection workflow. |
| 0c. | Testing and Testing Guide | Server’s API and core functions will be covered by unit tests to ensure functionality and proper requests validation. Also testing guide for mobile application is provided. |
| 0d. | Docker | We will provide a Dockerfiles and Docker Compose configuration to run API Server. |
| 0e. | Article | We will publish an instructional video on how to set up and use our data collection toolchain that connects mobile application with API server for research purposes. |
| 1. | API Server | We will implement the functionality described in the Project Details subsection “API server to receive uploads from the mobile application” |
| 2. | iOS mobile application | In iOS mobile application we will implement capturing images and metadata within ARKit session, storing on device locally, and uploading to the specified API Server. |
| 3. | Android mobile application | In Android mobile application we will implement capturing images and metadata within ARCore session, storing on device locally, and uploading to the specified API Server. |

### Milestone 2 — Datasets and pipeline management tools

- **Estimated Duration:** 1.5 months
- **FTE:** 2.5
- **Costs:** 15,750 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a researcher can work with our interface to explore datasets and run computatonal pipelines. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfiles that can be used to run tests and deploy tools. |
| 0e. | Article | We will publish an instructional video on how to set up and use our tools to work with datasets and run pipelines. |
| 1. | Web based application | We will implement the functionality described in the Project Details subsection “Web-based application to work with datasets” |
| 2. | Dataset tools | We will implement tools to explore datasets as Python library, so researchers could use that from Jypyter notebooks and Python based pipelines: getting contents, searching with SQL and exporting data to files. |

### Milestone 3 — **Configurable SfM toolset**

- **Estimated Duration:** 1.5 months
- **FTE:** 2.5
- **Costs:** 15,750 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and also documentation for toolset APIs. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains benefits and use cases for the unified pipeline,that includes tools for data collection, data expolarion and processing, also providing open and compatible dataset format. |
| 1. | Configurable SfM toolset | The toolset will include tools for managing datasets and running SfM pipelines. The toolset will also include a pluggable interface for custom image matching models. Overall, the goal of the toolset is to provide a flexible and modular solution for managing AR/XR datasets and running SfM pipelines for research purposes. |

### Milestone 4 — **Mobile SDK and server API for localization**

- **Estimated Duration:** 2 months
- **FTE:** 2
- **Costs:** 21,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and also documentation for mobile SDK and server APIs. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains how to run server for localization requests and how to use it with mobile SDK. |
| 1. | Mobile SDK | The Mobile SDK will include a library to perform requests to the visual positioning API and apply localization results in the context of AR sessions. |
| 2. | Server API for localization | The server API for localization will implement an endpoint to receive images with metadata as a query, and respond with the location results within the local scene context and global coordinate frame. |
| 3 | Benchmarks pipeline | The benchmarks pipeline will implement performing localization requests with predefined queries, compare the results with expected ones, and measure localization accuracy. |

## Future Plans

In the short term, our plan is to increase adoption of the toolset within the research community. This will involve promoting the toolset, collecting feedback, and refining the solution. Additionally, we plan to participate in relevant open challenges such as those on Kaggle.

Our long-term plan is to develop a toolset based on prior development that can be executed in a decentralized environment. Building a decentralized search index presents many challenges, including relevance ranking, preventing pollution of the search index, establishing protocols for rewarding contributions, deploying compute nodes, and addressing privacy-related concerns. Solving these challenges involves creating a parachain at some point.

![SPE-decetralized-schema.png](https://spe-demo.b-cdn.net/shared/w3f-grants/SPE-decetralized-schema.png)

The exact architecture of the decentralized visual positioning platform is beyond the scope of this application. However, we have initial considerations and foundational ideas on the matter.

We can decompose the platform into three blocks:

- Data collection and computational pipeline to generate a search index and other valuable artifacts, such as location 3D models.
- Storage of the search index and artifacts.
- Querying the search index, which may also involve a computational pipeline for localization.

Let's take a closer look at each block.

The process of **Data collection and computational pipeline** involves off-chain interactions that require human resources. For example, an individual may need to use a smartphone to record footage of a local public park. Afterwards, the footage is processed using a powerful machine that runs a computer vision pipeline. However, the number of tasks and footage required is enormous, as entire living areas ultimately need to be covered.

To address this challenge, we'd propose creating a decentralized marketplace for such gigs. This would involve individuals like Mira placing gigs for capturing footage of Central Park for X coins, and others like Alex completing the task. Mira would then approve the quality of the footage, and some automated consensus voting would be implemented to ensure fairness.

The **Storage of the search index and artifacts** is well-suited for a decentralized architecture, such as IPFS-like storage. Several existing solutions can address this issue. It is worth noting that storing the search index and artifacts does not violate privacy because the data is abstract at this point, whether it is point clouds or keypoint descriptors.

The community will benefit from having such an index because it can be used by anyone to perform visual positioning, considering that it is a fully open search database covering the entire planet. Additionally, it has the potential for a very resource-wise storage strategy. For example, some parts of the search index can simply be deprecated and then deleted when no one is willing to allocate coins to store that data, while useful parts remain.

Finally, **Querying the search index** can also benefit from a decentralized approach. For instance, if the organizer of the "Icing Lady" festival aims to deliver a seamless AR and Metaverse experience, it is essential to allocate computational resources for computing search query results. Decentralized protocols make it easy to allocate compute nodes by charging an account a certain amount and specifying the location area from which queries should be processed.

This is our current general vision for a decentralized approach, which may be refined and changed in the future. When designing our initial local-first computational pipeline, data formats, and tools, we consider their compatibility with future decentralized development.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

We have personal recommendations to apply from:

- Nico Morgan at Parity/Square One
- Robin Ejsmond-Frey, Growth Manager at Parity Technologies

Additional information:

- Spheroid Universe financed our previous development, so they are authorized to use the collected data non-exclusively. All the code developed during that stage can be open-sourced.
- Our team has developed a visual positioning system for the [VoxelBridge](https://voxelbridge.com/) project, which was made in collaboration with the **Kusama Network**.
    
    ![SPE-Kusama-Vancouver-Biennale-1](https://spe-demo.b-cdn.net/shared/w3f-grants/SPE-Kusama-Vancouver-Biennale-1.png)

    ![SPE-Kusama-Vancouver-Biennale-2](https://spe-demo.b-cdn.net/shared/w3f-grants/SPE-Kusama-Vancouver-Biennale-2.jpg)

    ![SPE-Kusama-Vancouver-Biennale-3](https://spe-demo.b-cdn.net/shared/w3f-grants/SPE-Kusama-Vancouver-Biennale-3.jpg)
