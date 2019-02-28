# animationtrinantesmetropole

1. Pre-install
- install nodejs dernière version

2. Lancer l'application
- copier le dossier animationtrinantesmetropole
- lancer l'invite de commande windows
- aller dans le dossier : C:\dev\github-repositories\animationtrinantesmetropole
- lancer la commande : npm install
- installer les dépendances : npm install -g ionic
- compiler le projet : ionic serve

3.Déployer sur un serveur
- éditer le fichier C:\dev\github-repositories\animationtrinantesmetropole\src\index.html, incrémenter le numéro de version à la ligne 58, après AT-RM-PA-VERSAPPLI_01
  Exemple :
  ```
  <script src="build/main.js?v=5"></script>
  devient
  <script src=« build/main.js?v=6"></script>
  ```
- copier le dossier via Filezilla : source C:\dev\github-repositories\animationtrinantesmetropole\www

4. Déployer sur le play store :
- Installer Java (JDK 6 ou supérieur)
http://www.oracle.com/technetwork/java/javase/downloads/index.html
jdk-8u201-windows-x64.exe
C:\dev\jdk1.8.0_201\

- Installer Android SDK Tools
  Bien choisir "SDK Tools Only" (exemple : installer_r24.3.3-windows.exe )
  http://developer.android.com/sdk/index.html#download


C:\dev\android-sdk\sdk

- (une seule fois) Installer android et les plugins : ionic cordova platform add android
- Générer l’APK :
  SET ANDROID_HOME=C:\dev\android-sdk\sdk 
  ionic cordova build —prod —release android