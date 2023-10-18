# Anleitung zum Hosten von statischen Webseiten bei kostenlosen Providern

## Firebase Hosting

1. **Firebase-Konto erstellen**: Falls Sie noch kein Firebase-Konto haben, registrieren Sie sich auf [Firebase](https://firebase.google.com/) und loggen Sie sich ein.

2. **Firebase CLI installieren**: Installieren Sie die Firebase-Befehlszeilenschnittstelle (CLI) mit folgendem Befehl:
   ```shell
   npm install -g firebase-tools
   ```

3. **Webseite bereitstellen**:
   - Navigieren Sie zu Ihrem Projektverzeichnis, in dem sich Ihre statischen Dateien befinden.
   - Führen Sie `firebase login` aus, um sich bei Ihrem Firebase-Konto anzumelden.
   - Führen Sie `firebase init` aus und wählen Sie Hosting aus. Befolgen Sie die Anweisungen, um Ihr Projekt zu konfigurieren.
   - Verwenden Sie `firebase deploy` zum Hochladen Ihrer Webseite.

4. **Bereitgestellte URL**
   Nach dem erfolgreichen Bereitstellen erhalten Sie eine URL, unter der Ihre Webseite erreichbar ist.

## Netlify

1. **Netlify-Konto erstellen**: Registrieren Sie sich auf [Netlify](https://www.netlify.com/) und loggen Sie sich in Ihr Konto ein.

2. **Neue Seite erstellen**:
   - Klicken Sie auf "Sites" und dann auf "New site from Git".
   - Verknüpfen Sie Ihr Git-Repository mit Netlify.

3. **Build-Einstellungen konfigurieren**:
   - Stellen Sie sicher, dass Ihre Build-Einstellungen richtig konfiguriert sind.
   - Netlify kann automatisch Ihre statische Webseite bauen und bereitstellen.

4. **Bereitgestellte URL**
   Nach dem erfolgreichen Bereitstellen erhalten Sie eine URL für Ihre Webseite.

## GitHub Pages

1. **GitHub-Konto erstellen**: Falls Sie noch kein GitHub-Konto haben, registrieren Sie sich auf [GitHub](https://github.com/) und loggen Sie sich ein.

2. **Erstellen Sie ein Repository**: Erstellen Sie ein neues Repository und laden Sie Ihre statischen Dateien hoch.

3. **Branch und Ordner auswählen**:
   - Gehen Sie in den Einstellungen Ihres Repositories.
   - Wählen Sie im Abschnitt "GitHub Pages" den Branch und Ordner aus, der für die Veröffentlichung Ihrer Webseite verwendet werden soll.

4. **Bereitgestellte URL**
   Nach der Konfiguration können Sie auf die bereitgestellte GitHub Pages-URL zugreifen.

## GitLab Pages

**1. GitLab Repository erstellen:** Gehen Sie zu GitLab und melden Sie sich in Ihrem Konto an und erstellen Sie ein neues Git-Repository für Ihr Webseitenprojekt.

**2. Statische Dateien hinzufügen:** Laden Sie Ihre statischen Webseiten-Dateien in das GitLab-Repository hoch. Dies können HTML, CSS, JavaScript und andere Ressourcen für Ihre Webseite sein.

**3. GitLab Pages konfigurieren:** 
- Gehen Sie zu den Einstellungen Ihres GitLab-Projekts.
- Navigieren Sie zum Abschnitt "Pages" oder "Webseiten" und konfigurieren Sie Ihre Einstellungen, einschließlich des Ausgabeverzeichnisses und der Domain (wenn gewünscht).

**4. Webseite veröffentlichen:** Speichern Sie Ihre Einstellungen und warten Sie, bis GitLab Pages Ihre Webseite generiert und veröffentlicht. <br/>
Ihre Webseite wird nun unter Ihrer GitLab Pages-Domain oder der konfigurierten Domain (falls vorhanden) verfügbar sein. <br/>

Das ist alles! Ihre statische Webseite wird nun über GitLab Pages gehostet.
