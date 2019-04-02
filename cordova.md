# Setup cordova in new machine

### 1. run command `npm i cordova -g` in terminal.
### 2. Install [Java Development Kit (JDK) 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
### 3. Install [Android Studio](https://developer.android.com/studio/index.html).
### 4. Adding SDK Packages
Open the Android Stuido -> SDK Manager, and make sure the following are installed:
* Android Platform SDK for your targeted version of Android
* Android SDK build-tools version 19.1.0 or higher
* Android Support Repository (found under "Extras")
### 5. Setting environment variables
Cordova's CLI tools require some environment variables to be set in order to function correctly. The CLI will attempt to set these variables for you, but in certain cases you may need to set them manually. The following variables should be updated:
* Set the `JAVA_HOME` environment variable to the location of your JDK installation (location ex. C:\Program Files\Java\jdk1.8.0_171)
* Set the `ANDROID_HOME` environment variable to the location of your Android SDK installation (location ex. C:\Users\noamb\AppData\Local\Android\Sdk)
* It is also recommended that you add the Android SDK's `tools`, `tools/bin`, and `platform-tools` directories to your `PATH`. (locations ex. C:\Users\noamb\AppData\Local\Android\Sdk\tools, C:\Users\noamb\AppData\Local\Android\Sdk\tools\bin, C:\Users\noamb\AppData\Local\Android\Sdk\platform-tools)

# Cordova Build Release

## Step 1 : Generate your Private Key ( if you have one, then discard this step ) :
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias fire-truck<br/>
`SKIP this step because it's already generated in this project. see file 'my-release-key.jks' in project. generated keystore password is - 'fire-truck'`

## Step 2 : Create the APK
run command `cordova build android --release`<br/>

## Step 3 : Sign your APK
run command - `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks platforms\android\build\outputs\apk\android-release-unsigned.apk fire-truck`

## Step 4 : Optimize your Apk using Zipalign
* open terminal in release folder: `platforms\android\build\outputs\apk\`
* run command `zipalign -v 4 android-release-unsigned.apk <name>.apk`