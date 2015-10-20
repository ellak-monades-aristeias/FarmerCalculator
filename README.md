Table of contents
=================

  * [Table of contents](#table-of-contents)
  * [Overview](#overview)
  * [Software stack](#software-stack)
  * [Install prerequisites](#install-prerequisites)
  * [Installation](#installation)
  * [Publish for android](#publish-for-android)
  * [Publish fo iOS](#publish-for-ios)

Overview
====

The aim of this project is to provide an app to the farmers that will help them make some calculations. For example, when the plants are irrigated, a machine is moving, so if we know the speed and the total length, we can estimate the total amount of time that will be needed.
This app is based on the [ionic framework](http://ionicframework.com), so it can provide executables for iOS and Android.

Software stack
====

The application is based on the:
* [ionic framework](http://ionicframework.com)
* [cordova](https://cordova.apache.org)
* [AngularJS](https://angularjs.org)
* HTML, CSS, Javascript

Executable for android: [FarmCalc.apk](https://drive.google.com/file/d/0ByO53kxiSQoOMWRQOFdJUk9JR2c/view?usp=sharing).

Video Demonstration: [movie1](https://www.youtube.com/watch?v=n6vYNxQGAxA&feature=youtu.be),
 [video2](https://www.youtube.com/watch?v=-MtLT9r3L7g&feature=youtu.be).

Install prerequisites
====

Install `node.js`:

    sudo apt-get install npm node
If no package manager is available, go to [nodejs website](http://nodejs.org) and follow the instructions.

Install [cordova](http://cordova.apache.org):

    sudo npm install -g cordova

Install [Ionic](http://ionicframework.com):

    sudo npm install -g ionic

Install [android sdk](http://developer.android.com), intall the last api and create an emulator. In order to produce an executable for iOs, [xcode](https://developer.apple.com/xcode/) is needed, whic is available only for Mac OS X.

Install `ant`:

    sudo apt-get install ant

If Mac OS X is used, install `ios-sim`:

    sudo npm install -g ios-sim

Installation
====

Download the project:

    git clone https://github.com/ellak-monades-aristeias/FarmerCalculator.git

Go to the right forlder:

    cd FarmerCalculator/src/FarmCalc

Run a browser version:

    ionic serve --lab

Configure iOS platform:

    ionic platform ios

Configure android platform:

    ionic platform android

Run on an adroid simulatior:

    ionic emulate android

Run on an adroid device:

    ionic run android

Run on an iOS simulatior:

    ionic emulate ios

Run on an iOs device:

    ionic run ios

Publish for android
====

Create the key - certificate pair (only once):

    keytool -genkey -v -keystore ~/mykeyapp.keystore -alias mykeyapp -keyalg RSA -keysize 2048 -validity 100000

Run:

    cd FarmerCalculator/src/FarmCalc
    cordova plugin rm org.apache.cordova.console
    cordova build --release android
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/mykeyapp.keystore platforms/android/ant-build/MainActivity-release-unsigned.apk mykeyapp
    zipalign -v 4 platforms/android/ant-build/MainActivity-release-unsigned.apk ~/FarmCalc.apk

Publish for iOS
====

Open the project of xcode (inside the platrorm folder) and follow the instructions on Apples website.


