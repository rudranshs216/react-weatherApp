import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [location,setLocation] = useState("");
  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cfaaad37d819c513da73559e343e2fe5`;

  const search = (e) => {
    if(e.key === "Enter"){
      axios.get(url).then((response)=>{
        setData(response?.data);
        console.log(response?.data);
      })
      setLocation("")
    }

  }
 var photoUrl;
  if(data.weather){
    photoUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  }
  

  return (
    <div className="App">
    <div className="searchLocation">
    <div className="div">
    <input type="text" 
      placeholder='Search Location'
      value={location}
      onChange={(e)=>{setLocation(e.target.value)}}
      onKeyPress = {search}
    />
    </div>
      
    </div>
     <div className="container">
       <div className="top">
       <div className="detail">
         <p>{data?.name}         </p> 
       {data.main ? <h1>{Math.round(data?.main.temp - 273.15)} °C </h1> : null}
       {data.weather ? <img src={photoUrl ? photoUrl : null} alt="" /> : null}
       
         
       </div>
         <div className="description">
         {data.weather ? <p>{data?.weather[0].main}</p> : null}
           
           
         </div>
       </div>
       <div className="bottomKaBaap">
       <div className="bottom">
          <div className="info">
          {data.main ? <p>{Math.round(data?.main.feels_like - 273.15)} °C</p> : null }
            
            
            <p>Feels Like</p>
          </div>
          <div className="info">
          {data.main ? <p>{data?.main.humidity}%</p> : null}
          <p>Humidity</p>

          </div>
          <div className="info">
          {data.wind ? <p>{data?.wind.speed} mph</p> : null}
          
          <p>Wind Speed</p>

          </div>

       </div>
       </div>
       
     </div>
    </div>
  );
}

export default App;
