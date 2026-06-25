# React + Vite
# Das soll die Ordnerstruktur sein!
```

src/
│
├── main.jsx
├── App.jsx
│
├── layouts/
│   └── MainLayout.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Users.jsx
│   ├── UserDetail.jsx
│   ├── Dashboard.jsx
│   ├── Profile.jsx
│   ├── Settings.jsx
│   ├── Login.jsx
│   └── NotFound.jsx
│
├── routes/
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
│
└── components/
    └── Navbar.jsx

``` 

# React Router Demo Projekt

Dieses Projekt ist eine Einführung in React Router und zeigt grundlegende sowie erweiterte Routing-Funktionen in einer React-Anwendung.

## Inhalte des Projekts

- Navigation zwischen Seiten ohne Reload
- Layout-Struktur mit gemeinsamen Komponenten
- Dynamische Routen mit URL-Parametern
- Verschachtelte Routen (Nested Routes)
- Geschützte Bereiche (Protected Routes)
- Query Parameter Verarbeitung
- 404 Fehlerseite

---

# Voraussetzungen

Für die Nutzung dieses Projekts werden folgende Tools benötigt:

- Node.js (LTS Version empfohlen)
- npm (wird mit Node.js installiert)

Prüfen der Installation:

```

node -v
npm -v
```
Installation
1. Repository klonen
git clone <REPOSITORY-URL>
cd react-router-demo
2. Abhängigkeiten installieren
npm install
3. React Router installieren

Falls nicht bereits enthalten:

npm install react-router-dom
4. Entwicklungsserver starten
npm run dev

Die Anwendung ist anschließend unter folgender Adresse erreichbar:
```
http://localhost:5173
```

Der Bereich /dashboard ist geschützt.

Ohne Login erfolgt eine automatische Weiterleitung zur Login-Seite.

Login erfolgt im Beispiel über den lokalen Speicher:

localStorage.setItem("loggedIn", "true");

Abmeldung:

localStorage.removeItem("loggedIn");
Navigation

Die Navigation erfolgt über die Navbar-Komponente.
```
Diese enthält Links zu:

Home
About
Users
Dashboard
Login
Dynamische Routen

Beispiel für eine dynamische Route:

/users/1
/users/2
```
Die ID wird über React Router ausgelesen:
```
import { useParams } from "react-router-dom";

const { id } = useParams();
Query Parameter
```
Beispiel:

/about?mode=dark

Auslesen im Code:

import { useSearchParams } from "react-router-dom";

const [searchParams] = useSearchParams();
const mode = searchParams.get("mode");
Nested Routes

Im Dashboard werden Unterseiten verwendet:

/dashboard/profile
/dashboard/settings

Diese werden über <Outlet /> im Layout gerendert.

404 Seite

Für nicht vorhandene Routen wird eine Fehlerseite angezeigt:

Seite nicht gefunden

Route:

path="*"
Technische Grundlagen
React (Vite)
React Router DOM
JavaScript (ES6+)
Hinweise
Änderungen werden automatisch im Browser aktualisiert (Hot Reload)
Dateinamen sind case-sensitive
Fehler zuerst in der Browser-Konsole prüfen (F12)
Jede Seite befindet sich im Ordner src/pages
Lernziel

Ziel dieses Projekts ist das Verständnis von Client-Side Routing in React sowie der Aufbau moderner Single Page Applications mit React Router.
