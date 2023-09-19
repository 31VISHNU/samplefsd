import React from "react";

export default function Todolist() {

    const [input, setinput] = React.useState("");
    const [list, setlist] = React.useState([]);
    const [count, updatecount] = React.useState(0);
    const [progress, updateprogress] = React.useState(0);
    const [complete, setcomplete] = React.useState(0);

    const addtodo = (todo) => {
        const newtodo = {
            id: Math.random(),
            todo: todo
        };

        setlist([...list, newtodo]);

        setinput("");

        updatecount(count + 1);
    }

    const prog = () => {

        updateprogress(progress + 1);
    }

    const deletetodo = (id) => {

        const newlist = list.filter((todo => todo.id !== id));

        setlist(newlist);

        setcomplete(complete + 1);
        updatecount(count - 1);
        updateprogress(progress - 1);

    }


    return (<div style={{
        display: "grid",
        gridTemplateRows: "80% 50%",
    }}>
        <h1 style={{
            textAlign: "center",
        }}>🎈To Do List🎈</h1>
        <div style={{
            display: "grid",
            gridTemplateColumns: "30% 30% 30%",
            textAlign: "center",
            marginLeft: "150px",
            fontFamily: "fantasy"
        }}>
            <div>Total No Of Work : {count} </div>
            <div>Work In Progress : {progress} </div>
            <div>Work Completed : {complete} </div>
        </div>
        <div style={{
            textAlign: "center",
            marginLeft: "50px",
            height: "50px"
        }}>
            <input type={"text"} value={input} onChange={(e) => setinput(e.target.value)} style={{
                height: "35px",
                textAlign: "center",
                width: "350px",
                fontFamily: "fantasy",
                fontSize: "20px"

            }} ></input>
            <button onClick={() => addtodo(input)} style={{
                height: "38px",
                fontFamily: "fantasy"
            }} >Add</button>
            {/* <ul style={{
                fontFamily: "fantasy",
                fontSize: "30px",
                marginLeft: "100px",
                textAlign: "center",
            }}> */}
            {list.map((i) => (
                <p key={i.id} style={{
                    fontFamily: "fantasy",
                    fontSize: "30px",
                    marginLeft: "100px",
                    textAlign: "center",
                }} >{i.todo}
                    <button onClick={() => prog()} style={{ marginLeft: "30px", fontFamily: "fantasy" }}>On Progress</button>
                    <button onClick={() => deletetodo(i.id)} style={{ marginLeft: "30px", fontFamily: "fantasy" }}>Completed</button>
                </p>
            ))}
            {/* </ul> */}
        </div>
    </div>)
}