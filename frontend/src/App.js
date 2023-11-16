import './App.css';
import axios from "axios";
import {useEffect, useState } from "react";

function App() {

  const [listOfCountries, setListOfCountries] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:8000/countries").then((response) =>{


    setListOfCountries(response.data);
    console.log(response.data);
    })
  }, [])


return (
  <div className="App">
    {listOfCountries.map((value) => {
      return (
        <div key={value.country_id} className="country">
          <div className="country_id">{value[0]}</div>
          <div className="country_name">{value[1]}</div>
        </div>
      );
    })}
  </div>
); 

/*
return (
  <div className="App">
    {listOfCountries.map((value, index) => {
      return (
        <div key={index} className="country">
          <div className="country_id">{value[0]}</div>
          <div className="country_name">{value[1]}</div>
        </div>
      );
    })}
  </div>
);*/
  }


export default App;
