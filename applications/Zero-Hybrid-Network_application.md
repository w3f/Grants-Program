# Open Grant Proposal

* **Project Name:** Substrate for Mobile
* **Team Name:** CoolTeam
* **Payment Address:** 3QGTG7iYBm6NVBa1wVv9zQcgGaD4taLzru
## Project Overview :page_facing_up:

### Overview

RISC CPU is fast growingin recent years, especially the CPUs based on ARM core due to the mobile devices widely used. With such trend, the mobile devices will be much more widely and essentially used in blockchain instead of just be blockchain clients or wallets in the past. We will see, in the future, the blockchain network could be built up with mobile phones or other mobile devices with lower energy consumption.

Rust is ready for more and more ARM devices, to run a Rust application on mobile devices is not so difficult now. But at the mean while, there is no way to run Substrate based projects on mobile phones. Because Substrate is NOT for mobile devices yet.

This application is aimed to propose a solution to run the Substrate based projects on mobile phones.

### Project Details

Substrate for Mobile is the porting of Substrate Framework on mobiles. The main idea is to provide a adapter layer for OS related interfaces, such as storage, network, threading etc, for Substrate Framework based on Android NDK and iOS SDK.

![](https://raw.githubusercontent.com/ZeroHybrid-Network/materials/main/Layers.jpg)

Figure 1 Architecture of Substrate for Mobile

Substrate Framework based project will be built as a library for Android/iOS, the application will load the library and launch the project. 

The **adapter layer** is the key part of whole project. **Adapter layer** provides interfaces for Substrate Framework to interact with Android OS and Android application/service through JNI (Java Native Interface) by the power of Android NDK.


![](https://raw.githubusercontent.com/ZeroHybrid-Network/materials/main/Flow%20of%20Calls.jpg)

Figure 2 Flow of calls

It will be similar like this, the `Adapter Layer` will provide methods in Rust for caller from Android application/service based on [jni-rs](https://github.com/jni-rs/jni-rs)
```Rust
#![cfg(target_os="android")]     
#![allow(non_snake_case)]

use std::ffi::{CString, CStr};
use jni::JNIEnv;
use jni::objects::{JObject, JString};
use jni::sys::{jstring};

#[no_mangle]
pub unsafe extern fn Java_com_example_android_MainActivity_hello(env: JNIEnv, _: JObject, j_recipient: JString) -> jstring {
    let recipient = CString::from(
        CStr::from_ptr(
            env.get_string(j_recipient).unwrap().as_ptr()
        )
    );

    let output = env.new_string("Hello ".to_owned() + recipient.to_str().unwrap()).unwrap();
    output.into_inner()
}
```

The Android application will call Substrate methods like shown below.
```Java
package com.example.android

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.util.Log

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        System.loadLibrary("rust")
        Log.d("rust", hello("World"))
    }

    external fun hello(to: String): String
}
```


In the beginning, Android will be the only target OS to run Substrate based projects. Later, more OS will be added and a mobile phone blockchain project named Zero Hybrid Network will be built on top of this application.

### Ecosystem Fit

There is no similar project yet.

## Team :busts_in_silhouette:

### Team members

* [Ma Wang](https://github.com/wannam2049)
### Contact

* **Contact Name:** Ma Wang
* **Contact Email:** ma.wang@zerohybrid.network
### Legal Structure

None

### Team's experience

The team is experienced in developing mobile applications and mobile games. In 2010, the team developed their own mobile 2d game engine, and started their own 3d game engine in 2016, both game engines support Android, iOS, Windows Phone.

### Team Code Repos

* [https://github.com/ZeroHybrid-Network](https://github.com/ZeroHybrid-Network)
## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 2 FTE
* **Total Costs:** 20000.000 USD
### Milestone 1 — Run the Substrate template project on Android

* **Estimated Duration:** 3 months
* **FTE:** 2
* **Costs:** 20000.000 USD


|Number|Deliverable|Specification|
|:----|:----|:----|
|0a.|License|Apache 2.0 / MIT / Unlicense|
|0b.|Documentation|We will provide a basic tutorial that explains how a user can run a Substrate node on Android. Once the node is up, it will be possible to send test transactions that will show how the new functionality works.|
|0c.|Testing Guide|In the guide we will describe how to run these tests|
|0d.|Article/Tutorial|We will write an article or tutorial that explains the work done as part of the grant.|
|1.|Adapt Layer|We will create an adapt layer to port Substrate with NDK. The interfaces for storage, network, threading and so on will be ported.|
|2.|Android Application|We will create an Android Application to launch a Substrate Node and form a network with mobile phones.|


## Future Plans

Phase I:

* Provide the ported Substrate on Android OS for POC

Phase II:

* This project will provide full abilities of Substrate on Android OS
* Bring more developers to contribute on this project

Phase III:

* More mobile devices will be supported including iOS
* More projects to be developed based on this project
## Additional Information :heavy_plus_sign:

Currently, our member have tried to build other projects based on Substrate, and now, we have investigate and successfully port a Rust application with NDK on Android.




