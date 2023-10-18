import {useState} from "react";
import {Item} from "./Item";

export function Lists() {
    const [unfinished, setUnfinished] = useState([]);
    const [finished, setFinished] = useState([]);
    const [input, setInput] = useState("");

    function addTask() {
        setUnfinished([...unfinished, input]);
        setInput("");
    }

    function finishTask(index) {
        setFinished([...finished, unfinished[index]]);
        setUnfinished(unfinished.filter((_, i) => i !== index));
    }

    function unfinishTask(index) {
        setUnfinished([...unfinished, finished[index]]);
        setFinished(finished.filter((_, i) => i !== index));
    }

    function deleteTask(index, unfinished) {
        if (unfinished) {
            setUnfinished(unfinished.filter((_, i) => i !== index));
        } else {
            setFinished(finished.filter((_, i) => i !== index));
        }
    }

    return (
        <div className="lists">
            <div className="unfinished-list" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                {unfinished.map((text, index) => (
                    <Item key={index} text={text} index={index} unfinished={true} finishTask={finishTask}
                          unfinishTask={unfinishTask} deleteTask={deleteTask}/>
                ))}
                <div>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} style={{marginTop: 20}}/>
                    <button onClick={addTask}
                            style={{backgroundColor: "blue", color: "white", fontSize: "large", borderRadius: 10, borderWidth: 0}}>+
                    </button>
                </div>
            </div>
            <div className="finished-list" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <h2>Finished:</h2>
                {finished.map((text, index) => (
                    <Item key={index} text={text} index={index} unfinished={false} finishTask={finishTask}
                          unfinishTask={unfinishTask} deleteTask={deleteTask}/>
                ))}
            </div>
        </div>
    )
}