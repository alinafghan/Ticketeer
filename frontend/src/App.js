import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

  const [listOfEvents, setListofEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/event").then((response) => {
      setListofEvents(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/eventcategory").then((response) => {
      setListofEvents(response.data);
    });
  }, []);

  return 
  <div className="App"> 
  {listOfEvents.map((value, key) => {
    return <div> {value.title} </div>
  })} 
  </div>; 
}

export default App;
