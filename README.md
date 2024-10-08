# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
-

## Modifying your App

Now that you have successfully run the app, let's modify it.

1. Modify **[App bundle Id](https://docs.expo.dev/build-reference/variants/)** in app.json file

```json
    "ios": {
      "bundleIdentifier": "com.myapp"
    },
    "android": {
      "package": "com.myapp"
    }
```

2. Add **[App Icon](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/#add-the-icon-in-app-config)** in app.json file.
   Further customization of the Android icon is possible using the android.adaptiveIcon property, which will override both of the previously mentioned settings.(https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/#custom-configuration-tips-for-android-and-ios)

```json
{
  "icon": "./assets/images/icon.png"
}
```

```json
  "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#7862E3"
      }
    },
```

3. Integrate **[EsLint and Husky](https://docs.expo.dev/guides/using-eslint/#setup-instructions-for-sdk-50-and-below) (https://sanjanahumanintech.medium.com/to-integrate-husky-with-a-react-native-134723b94569)**

### Steps:

- 1. run command npx expo lint
- 2. Run yarn add husky --dev
- 3. npx husky init
- 4. Add
  ```bash
   npm run lint
  ```
- 5. Run chmod +x .husky/pre-commit
- 6. Then test by commiting code
- 7. Add your own rules in tsconfig.json
