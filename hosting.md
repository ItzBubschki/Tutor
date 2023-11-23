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

2. **Erstellen Sie ein Repository**: Erstellen Sie ein neues Repository 
3. **GitHub Pages aktivieren**:
   - Klicken Sie auf "Settings" und scrollen Sie nach unten zu "GitHub Pages".
   - Wählen Sie den Branch aus, der Ihre statischen Dateien enthält.
   - Klicken Sie auf "Save".
4. **Github action einrichten**
   ```yaml
name: CI/CD

on:
push:
branches: [ main ]
pull_request:
branches: [ main ]

jobs:
build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}

      - name: install and build
        run: |
          # cd todo (nur wenn project nicht im root ordner liegt)
          npm install
          npm run build

      - name: Deploy
        run: |
          # cd todo (nur wenn project nicht im root ordner liegt)
          git config --global user.name $user_name
          git config --global user.email $user_email
          git remote set-url origin https://${github_token}@github.com/${repository}
          npm run deploy
        env:
          user_name: 'github-actions[bot]'
          user_email: 'github-actions[bot]@users.noreply.github.com'
          github_token: ${{ secrets.ACTIONS_DEPLOY_ACCESS_TOKEN }}
          repository: ${{ github.repository }}

```


