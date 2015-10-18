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
This app is based on the ionic framework (http://ionicframework.com), so it can provide executables for iOS and Android.

Software stack
====

The application is based on the:
* ionic framework (http://ionicframework.com)
* cordova (https://cordova.apache.org)
* AngularJS (https://angularjs.org)
* HTML, CSS, Javascript

Executable for android: [bin/FarmCalc.apk](bin/FarmCalc.apk).

Video Demonstration: [doc/movie1.mp4](doc/movie1.mp4).

Install prerequisites
====

1. Install node.js: *sudo apt-get install npm node*. If no package manager is available, go to (http://nodejs.org) and follow the instructions.
2.  Install cordova (http://cordova.apache.org): *sudo npm install -g cordova*
3. Install Ionic (http://ionicframework.com): *sudo npm install -g ionic*
4. Install android sdk (http://developer.android.com), intall the last api and create an emulator. In order to produce an executable for iOs, xcode (https://developer.apple.com/xcode/) is needed, whic is available only for Mac OS X.
5. Install ant: *sudo apt-get install ant*
6. If Mac OS X is used, install ios-sim: *sudo npm install -g ios-sim*

Installation
====

1. Download the project: *git clone https://github.com/ellak-monades-aristeias/FarmerCalculator.git*.
2. Go to the right forlder: *cd FarmerCalculator/src/FarmCalc*.
3. Run a browser version: *ionic serve --lab*.
4. Configure iOS platform: *ionic platform ios*.
5. Configure android platform: *ionic platform android*.
6. Run on an adroid simulatior: *ionic emulate android*.
7. Run on an adroid device: *ionic run android*.
8. Run on an iOS simulatior: *ionic emulate ios*.
9. Run on an iOs device: *ionic run ios*.

Publish for android
====

Create the key - certificate pair (only once):

1. *keytool -genkey -v -keystore ~/mykeyapp.keystore -alias mykeyapp -keyalg RSA -keysize 2048 -validity 100000*

Run:

1. *cd FarmerCalculator/src/FarmCalc*
2. *cordova plugin rm org.apache.cordova.console*
3. *cordova build --release android*
4. *jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/mykeyapp.keystore platforms/android/ant-build/MainActivity-release-unsigned.apk mykeyapp*
5. *zipalign -v 4 platforms/android/ant-build/MainActivity-release-unsigned.apk ~/FarmCalc.apk*

Publish for iOS
====

Open the project of xcode (inside the platrorm folder) and follow the instructions on Apples website.


