import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './LoginPage';
import Register from './RegisterPage';
import HomePage from './HomePage';
import Ticketeer from './Ticketeer';

const App = () => {



    return(

      <Router>

    

              <Routes>
              <Route path="/home" element={<HomePage />} />
              </Routes>

              <Routes>
              <Route path="/login" element={<Login />} />
              </Routes>

              <Routes>
              <Route path="/register" element={<Register />} />
              </Routes>

              <Routes>
              <Route path="/front" element={<Ticketeer/>} />
              </Routes>
      

              </Router>

    
        
      
    )
}

export default App;