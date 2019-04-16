# animationtrinantesmetropole

1. Pre-install
- install nodejs dernière version

2. Lancer l'application
- faire un clone du projet github animationtrinantesmetropole : https://github.com/vivreanantes/animationtrinantesmetropole 
- lancer l'invite de commande windows
- aller dans le dossier : C:\dev\github-repositories\animationtrinantesmetropole
- lancer la commande : npm install
- installer les dépendances : npm install -g ionic
- compiler le projet : ionic serve

3.Déployer sur un serveur
- éditer le fichier C:\dev\github-repositories\animationtrinantesmetropole\src\index.html, incrémenter le numéro de version à la ligne 58, après AT-RM-PA-VERSAPPLI_01
  Exemple :
  ```
  <script src="build/main.js?v=20190224"></script>
  devient
  <script src=« build/main.js?v=20190301"></script>
  ```
- copier le dossier via Filezilla : source C:\dev\github-repositories\animationtrinantesmetropole\www

4. Déployer sur le play store :
- Installer Java (JDK 6 ou supérieur)
    url : http://www.oracle.com/technetwork/java/javase/downloads/index.html
    exemple de composant : jdk-8u201-windows-x64.exe
    répertoire installation : C:\dev\jdk1.8.0_66

- Installer Android Studio

- Installer Android SDK Tools
  Bien choisir "SDK Tools Only" (exemple : installer_r24.3.3-windows.exe )
  http://developer.android.com/sdk/index.html#download


C:\dev\android-sdk

- (une seule fois) Installer android et les plugins : ionic cordova platform add android

- (une seule fois) Accepter la licence android SDK :
  - message d'erreur : "You have not accepted the license agreements of the following SDK components"
  - résolution : 
      lancer l'invite de commande windows 
      cd C:\dev\android-sdk\tools\bin
      sdkmanager --licenses

- Générer l’APK :
  SET ANDROID_HOME=C:\dev\android-sdk
  ionic cordova build —prod —release android
  
  
  