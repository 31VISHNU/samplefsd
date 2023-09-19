import React from 'react'
import images from "./imgImports";
function App() {

  const[int,setint] = React.useState(0);
  const[data,] = React.useState(images)

  const next = ()=>{

    if(int>=(data.length-1)){
      setint(0);
    }
    else{
      setint(int+1);
    }
    
  }
  
  const prev = ()=>{
    
    if(int<=0){
      setint(data.length-1);
    }
    else{
      setint(int-1);
    }

  }
  
  return (
    <div align='center'>
      <img src={`${images[int]['img']}`} alt={`${images[int]['name']}`}/>
      <div>
      <button onClick={next} > Click me for next image</button>
      <button  onClick={prev} > Click me for prev image</button>
      </div>
    </div>
  )
}

export default App