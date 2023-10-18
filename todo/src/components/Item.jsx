import "./Item.css"

export function Item({text, index, unfinished, finishTask, unfinishTask, deleteTask}) {
    return (
        <div className="item">
            <input type="checkbox" checked={!unfinished}
                   onClick={unfinished ? () => finishTask(index) : () => unfinishTask(index)}/>
            {text}
            <button onClick={() => deleteTask(index, unfinished)}
                    style={{backgroundColor: "red", marginLeft: 15, color: "white", borderWidth: 0, borderRadius: 5}}>X
            </button>
        </div>
    )
}
