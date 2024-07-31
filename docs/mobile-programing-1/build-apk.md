---
sidebar_position: 26
---

# Build APK using EAS
Expo Application Services (EAS) Build allows you to build a ready-to-submit binary of your app for the Google Play Store or Apple App Store. In this guide, let's learn how to do that.

Alternatively, if you prefer to install the app directly to your Android device/emulator or install it in the iOS Simulator, we will point you toward resources that explain how to do that.

## Install the latest EAS CLI
EAS CLI is the command-line app that you will use to interact with EAS services from your terminal. To install it, run the command:

```bash
npm install -g eas-cli
```

## Log in to your Expo account
If you are already signed in to an Expo account using Expo CLI, you can skip the steps described in this section. If you are not, run the following command to log in:

```bash
eas login
```

## Configure the project
create file ``eas.json`` in root project the example of configuration for ``eas.json``is shown below:

```js
// eas.json

{
    "build": {
      "preview": {
        "android": {
          "buildType": "apk"
        }
      },
      "preview2": {
        "android": {
          "gradleCommand": ":app:assembleRelease"
        }
      },
      "preview3": {
        "developmentClient": true
      },
      "production": {}
    }
  }
```

Or run the following command to generate ``eas.json`` file

```bash
eas build:configure
```

## Run a build

```bash
eas build -p android --profile preview

Waiting for build to complete. You can press Ctrl+C to exit.
⠴ Build in progress...

```
after finishing build, go to expo account, select your project > build.

for more informatin folow this link 
- [EAS Documentation](https://docs.expo.dev/eas/)
