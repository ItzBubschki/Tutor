# Challenge: Rezepte App
## Wichtige Infos
### API: Woher bekommt ihr die Rezepte?
- Alle Rezepte mit dem Namen Arrabiata: www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
- Rezept mit bestimmter ID

### Userflow:
- Startseite: Zuletzte angesehene Rezepte
- Suche: Suche nach Rezepten
- Rezeptseite: Rezept mit Zutaten und Anleitung

## Verschiedene Seiten?
### React Router
- React Router ist eine Library, die uns hilft, verschiedene Seiten in React zu bauen
- Wir müssen sie installieren: `npm install react-router-dom`
- Wir müssen sie importieren: `import {BrowserRouter, Route, Switch} from "react-router-dom";`
- Wir müssen sie um unsere App wickeln:
```jsx
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/recipe/:id">
          <RecipePage/>
        </Route>
        <Route path="/">
          <StartPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
```
- Wir müssen die Links auf die verschiedenen Seiten mit `<Link>` machen:
```jsx
<Link to="/search">Suche</Link>
```
- Wir müssen die URL der Seite (beim Inspizieren eines Rezeptes) auslesen mit `useParams()`:
```jsx
const {id} = useParams();
```