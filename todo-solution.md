# Mögliche Lösung für die Todo App
## Struktur
App > Lists > ListItem

## ListItem
### Was wollen wir anzeigen?
- [x] Text
- [x] Checkbox
- [x] Löschen Button

### Was brauchen wir an Infos? (props)
- [x] Inhalt
- [x] ID
- [x] Checked
- [x] Löschen Funktion
- [x] Ändern Funktionen (fertig stellen/doch nicht mehr fertig)

### Code:
```jsx
function clickChecked() {
    if (checked) {
        unfinishTask(ID);
    } else {
        finishTask(ID);
    }
}

function clickDelete() {
    deleteTask(ID, checked);
}
```
```jsx
<div className="item">
    <input type="checkbox" checked={checked}
           onClick={clickChecked}/>
    {text}
    <button onClick={clickDelete} className="delete-task">
        X
    </button>
</div>
```

### Style:
```css
.item {
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin-bottom: 5px;
}
```

## Lists
### Was wollen wir anzeigen?
- [x] Überschriften
- [x] Liste von unfertigen Tasks
- [x] Liste von fertigen Tasks
- [x] Input Feld um neue Tasks zu erstellen

### Was müssen wir uns merken (state)?
- [x] Liste von unfertigen Tasks
- [x] Liste von fertigen Tasks
- [x] Inhalt des Input Feldes

#### Wichtige Side-infos für JavaScript arrays:
- `array.push(element)`: Fügt ein Element am Ende des Arrays hinzu
- `array.splice(index, 1)`: Löscht ein Element an der Stelle `index` aus dem Array
- `array.filter((element) => element !== elementToDelete)`: Erzeugt ein neues Array, in dem alle Elemente aus `array` sind, die nicht `elementToDelete` sind
- Aber: React merkt es nicht, wenn wir den Array state direkt verändern. Deshalb müssen wir immer eine Kopie des Arrays machen und diese dann verändern. Das geht so:
  - `[...array]`: Kopie des Arrays
  - `[...array, element]`: Kopie des Arrays mit einem neuen Element am Ende

### Code:
```jsx
const [unfinished, setUnfinished] = useState([]);
const [finished, setFinished] = useState([]);
const [input, setInput] = useState("");
```
```js
function finishTask(index) {
    setFinished([...finished, unfinished[index]]);
    setUnfinished(unfinished.filter((_, i) => i !== index));
}
```
```jsx
<div className="lists">
    <div className="task-list">
        {unfinished.map((text, index) => (
            <Item key={index} text={text} index={index} unfinished={true} finishTask={finishTask}
                  unfinishTask={unfinishTask} deleteTask={deleteTask} />
        ))}
        <div>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} style={{ marginTop: 20 }} />
            <button onClick={addTask} className="add-task">+</button>
        </div>
    </div>
    <div className="task-list">
        <h2>Finished:</h2>
        {finished.map((text, index) => (
            <Item key={index} text={text} index={index} unfinished={false} finishTask={finishTask}
                  unfinishTask={unfinishTask} deleteTask={deleteTask} />
        ))}
    </div>
</div>
```
### Style:
```css
.task-list {
    display: flex;
    align-items: center;
    flex-direction: column;
}
```