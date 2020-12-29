import React, { useState } from 'react';
import { useEffect } from 'react';
import "./css/style.css";

const Tempapp = () =>
{
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai")

    useEffect( () =>
    {
      const fetchApi = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cb1312df8695a48d46c7614421f9c787`
        const response = await fetch(url);
        const resJson = await response.json();
        setCity(resJson.main);
      }
     
      fetchApi();
    },[search] )
    
    return(
        <>
        
<div class="container">
<br></br>
  <div class="row align-items-center h-100">
  <div class="col-5 mx-auto">
      <div class="card card-1">
        <center><h3>React Weather App</h3></center><br></br>
        <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" onChange={ (event)=>{setSearch(event.target.value)}}/>
     </div>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br><br></br><br></br><br></br>
       {!city ? (
         <p>No Data Found</p>
       ):(
        <div className="info">
           <h2 className="location">
          <center><i className="fas fa-street-view"></i>{search}</center> 
           </h2>
           <h3 className="temp">
           <center> {city.temp}°Cel</center>
           </h3>
          <center><h5 className="tempmin_max">Max : {city.temp_max}°Cel | Min : {city.temp_min}°Cel</h5>
           <h5 className="tempph">Pressure : {city.pressure} | Humidity : {city.humidity}</h5></center> 
       </div>
       )}
       
      
       

        </div>
      </div>
      
        
    </div>
  </div>

        </>
    )
}

export default Tempapp;