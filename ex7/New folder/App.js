import React from 'react'

function App() {


  const [value, updatevalue] = React.useState({ name: "", dl:0, fs:0, se:0, rs:0, ent:0, tab:0 });

  const [list, updatelist] = React.useState([]);

  function changehandler(e) {

    updatevalue({ ...value, [e.target.name]: e.target.value });
    
  }

  
let { name, dl, fs, se, rs, ent, tab } = value;
  
  function add() {

    updatelist([...list, { name, dl, fs, se, rs, ent, tab }])

    updatevalue( { name: "", dl:0, fs:0, se:0, rs:0, ent:0, tab:0 })

  }
  return (
    <div>
        <table>
          <tbody>
          <tr>
            <td>name : </td>
            <td><input type={"text"} value={value.name} name='name' onChange={changehandler}></input></td>
          </tr>
          <tr>
            <td>Deep Learning : </td>
            <td><input type={"number"} value={value.dl} name='dl' onChange={changehandler} ></input></td>
          </tr>
          <tr>
            <td>Full Stack : </td>
            <td><input type={"number"} value={value.fs} name='fs' onChange={changehandler}></input></td>
          </tr>
          <tr>
            <td>Software Engineering : </td>
            <td><input type={"number"} value={value.se} name='se' onChange={changehandler}></input></td>
          </tr>
          <tr>
            <td>Recommender System : </td>
            <td><input type={"number"} value={value.rs} name='rs' onChange={changehandler}></input></td>
          </tr>
          <tr>
            <td>EntrepreneurShip : </td>
            <td><input type={"number"} value={value.ent} name='ent' onChange={changehandler}></input></td>
          </tr>
          <tr>
            <td>Tableau : </td>
            <td><input type={"number"} value={value.tab} name='tab' onChange={changehandler}></input></td>
          </tr>
          </tbody>
        </table>
        <button onClick={add}>Submit</button>
        
        <table border={1}>
          <tbody>
            <tr>
              <th>name</th>
              <th>Deep Learning</th>
              <th>Full Stack</th>
              <th>Software Engineering</th>
              <th>Recommender System</th>
              <th>EntrepreneurShip</th>
              <th>Tableau</th>
              <th>Total</th>
            </tr>
            {
              list.map(
                (info, ind) => {
                  return (
                    <tr key={ind}>
                      <td>{info.name}</td>
                      <td>{info.dl}</td>
                      <td>{info.fs}</td>
                      <td>{info.se}</td>
                      <td>{info.rs}</td>
                      <td>{info.ent}</td>
                      <td>{info.tab}</td>
                      <td>{parseInt(info.dl)+parseInt(info.fs)+parseInt(info.se)+parseInt(info.rs)+parseInt(info.ent)+parseInt(info.tab)}</td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
    </div>
  )
}

export default App