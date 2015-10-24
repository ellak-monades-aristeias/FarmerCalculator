Table of contents
=================

  * [Table of contents](#table-of-contents)
  * [Overview](#overview)
  * [Software stack](#software-stack)
  * [Install prerequisites](#install-prerequisites)
  * [Installation](#installation)
  * [Publish for android](#publish-for-android)
  * [Publish fo iOS](#publish-for-ios)
  * [Παραδοτέο-URLS](#παραδοτέο-urls)

Overview
====

The aim of this project is to provide an app to the farmers that will help them make some calculations. For example, when the plants are irrigated, a machine is moving, so if we know the speed and the total length, we can estimate the total amount of time that will be needed.
This app is based on the [ionic framework](http://ionicframework.com), so it can provide executables for iOS and Android.

[README_users.md](README_users.md)

[README_developers.md](README_developers.md)

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


Παραδοτέο-URLS
====

<table>
<tr> <th>Παραδοτέο</th> <th>Σύντομη περιγραφή</th> <th>Url</th> </tr>
<tr>
<th>1</th>
<th>
Δημιουργία εφαρμογής για iOS και Android με τις εξής δυνατότητες:
<ol>
<li>
Για πότισμα, υπολογισμός του χρόνου που χρειάζεται για να τελειώσει το πότισμα, αν ξέρουμε την συνολική απόσταση και μετατόπιση ανά λεπτό.
</li>
<li>
Για πότισμα, υπολογισμός της μετατόπισης ανά λεπτό, αν ξέρουμε την συνολική απόσταση και τον επιθυμητό χρόνο ολοκλήρωσης.
</li>
<li>
Για την σπορά, υπολογισμός της συνολικής ποσότητας, αν ξέρουμε την επιφάνεια και την επιθυμητή ποσότητα ανά μονάδα επιφάνειας.
</li>
<li>
Για την σπορά, υπολογισμός της ποσότητας ανά μονάδα επιφάνειας, αν ξέρουμε την συνολική ποσότητα.
</li>
<li>
Για την σπορά, υπολογισμός των συνολικών γραμμών, αν ξέρουμε το συνολικό μήκος και την απόσταση ανάμεσα σε δύο σειρές.
</li>
<li>
Για την σπορά, υπολογισμός του μήκους ανάμεσα σε δύο σειρές, αν ξέρουμε το συνολικό μήκος και το επιθυμητό πλήθος σειρών.
</li>
<li>
Για την συγκομιδή, υπολογισμός της απόδοσης ανά μονάδα επιφάνειας, αν ξέρουμε την συνολική επιφάνεια και την συνολική συγκομιδή.
</li>
<li>
Για την συγκομιδή, υπολογισμός της συνολικής συγκομιδής αν ξέρουμε την επιφάνεια και την απόδοση ανά επιφάνεια.
</li>
<li>
Για την σπορά σε γραμμές (πχ βαμβάκι), υπολογισμός των σχέσεων στα γρανάζια αν ξέρουμε την συνολική επιφάνεια και το πλήθος σπόρων ανά μονάδα επιφάνειας.
</li>
<li>
Για την σπορά χωρίς γραμμές (πχ σιτάρι), υπολογισμός των σχέσεων στα γρανάζια αν ξέρουμε την συνολική επιφάνεια και την ποσότητα σπόρων ανά μονάδα επιφάνειας.
</li>
<li>
Για την λίπανση με διανομέα (χωνί), υπολογισμός της ταχύτητας που πρέπει να κινείται το τρακτέρ και της ρύθμισης του μοχλού στο άνοιγμα αν ξέρουμε την συνολική επιφάνεια και το σύνολο του λιπάσματος.
</li>
<li>
Για το ψέκασμα, υπολογισμός της ποσότητας νερού και φαρμάκου (σύνολο μείγματος) αν ξέρουμε την συνολική επιφάνεια, την αναλογία φαρμάκου / νερού και την αναλογία μείγματος ανά μονάδα επιφάνειας.
</li>
</ol>
</th>
<th>
<ol>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/index.html
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/js/FarmCalcModule.js
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/js/SideController.js
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/views/potisma.html
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/js/PotismaController.js
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/views/sporaMeKila.html
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/js/SporaMeKilaController.js
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/views/sporaMeGrammes.html
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/js/SporaMeGrammesController.js
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/views/sigkomidi.html
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/js/SigkomidiController.js
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/views/granaziaGrammes.html
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/js/GranaziaGrammesController.js
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/views/granaziaKila.html
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/js/GranaziaKilaController.js
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/views/lipansh.html
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/js/LipanshController.js
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/views/psekasmos.html
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/www/js/PsekasmosController.js
</li>
</th>
</tr>
<tr>
<th>2</th>
<th>Δημιουργία video και φυλλαδίου.</th>
<th>
<ol>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/doc/paper.pdf
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/doc/paper.odt
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/doc/video1.avi
</li>
<li>
https://github.com/ellak-monades-aristeias/FarmerCalculator/blob/master/doc/video2.avi
</li>
<li>
https://www.youtube.com/watch?v=n6vYNxQGAxA&feature=youtu.be
</li>
<li>
https://www.youtube.com/watch?v=-MtLT9r3L7g&feature=youtu.be
</li>
<li>
https://drive.google.com/file/d/0ByO53kxiSQoOMWRQOFdJUk9JR2c/view?usp=sharing
</li>
</th>
</tr>
</table>



