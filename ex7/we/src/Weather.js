import React from 'react';
import Axios from "axios";

function Weather() {

  const [city,setcity] = React.useState("");
  const [data,setdata] = React.useState([]);
  const key = "d4a10d6bb9c17cc99204981e6b2cc28a";

  const add = async () => {
    
    try{
      const response = await Axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
      setdata([...data,response.data]);

      setcity("");
    }
    catch(err){
      alert("Enter The Correct City Name");
    }
    
  }

  return (
    <div>
      <h1>Weather App</h1>
      <input type={"text"} value={city} onChange={(e) => setcity(e.target.value)} ></input>
      <button onClick={add}>Get</button>

      {data.map((i) => (
        <div>
          <div>
            <h2>City Name : {i.name}</h2>
        <h3>Humidity : {i.main.humidity}</h3>
        <h3>Pressure : {i.main.pressure}</h3>
        <h3>Temperature : {i.main.temp}</h3>
        </div>
        </div>
      ))}
      
    </div>
  )
}

export default Weather