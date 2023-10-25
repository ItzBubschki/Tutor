export function Item({text, index, unfinished, finishTask, unfinishTask, deleteTask}) {
    return (
        <div className="item">
            <input type="checkbox" checked={!unfinished}
                   onClick={unfinished ? () => finishTask(index) : () => unfinishTask(index)}/>
            {text}
            <button onClick={() => deleteTask(index, unfinished)} className="delete-task">X
            </button>
        </div>
    )
}
