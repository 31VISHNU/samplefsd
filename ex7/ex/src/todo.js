import React from "react";

export default function Todo() {

    const [input, setinput] = React.useState("");
    const [list, setlist] = React.useState([]);
    const [count, updatecount] = React.useState(0);

    const add = (todo) => {
        const todolist = {
            id: Math.random(),
            todo: todo
        };

        setlist([...list, todolist]);

        setinput("");

        updatecount(count + 1);
    }
    const change = (event)=>{
         setinput(event.target.value)
    }

    return (
    <div align="center">
            <div><h1>To Do List</h1></div>
            <input type={"text"} onChange={change}></input>
            <button onClick={() => add(input)}>Add</button>
            {list.map((i) => (
                <p key={i.id}>
                    {i.todo}
                </p>
            ))}
        </div>
        )
}