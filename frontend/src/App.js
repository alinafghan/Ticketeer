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

  useEffect(() => {
    axios.get("http://localhost:8000/countries").then((response) => {
      setListofEvents(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/locations").then((response) => {
      setListofEvents(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/organizers").then((response) => {
      setListofEvents(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/performer_type_ARouter").then((response) => {
      setListofEvents(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/performer_type_BRouter").then((response) => {
      setListofEvents(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/performerRouter").then((response) => {
      setListofEvents(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/seats").then((response) => {
      setListofEvents(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/tickets").then((response) => {
      setListofEvents(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/transactions").then((response) => {
      setListofEvents(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/users").then((response) => {
      setListofEvents(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/venues").then((response) => {
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
