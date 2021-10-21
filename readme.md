Voir page wiki sur github

## Android ##

  Bien choisir "SDK Tools Only" (exemple : installer_r24.3.3-windows.exe )
  http://developer.android.com/sdk/index.html#download


`C:\dev\android-sdk`

- (une seule fois) Installer android et les plugins : ionic cordova platform add android

- (une seule fois) Accepter la licence android SDK :
  - message d'erreur : "You have not accepted the license agreements of the following SDK components"
  - résolution :
      - lancer l'invite de commande windows 
      - `cd C:\dev\android-sdk\tools\bin`
      - `sdkmanager --licenses`

- Générer l’APK :
  - `SET ANDROID_HOME=C:\dev\android-sdk`
  - `npm run android-apk-release`
  
## iOS ##

- Générer le projet Xcode :
  - `npm run ios-release`