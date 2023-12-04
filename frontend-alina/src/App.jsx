import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./LoginPage";
import Register from "./RegisterPage";
import HomePage from "./HomePage";
import Ticketeer from "./Ticketeer";
import EventPage from "./EventPage";
import CreateEventPage from "./CreateEventPage";
import LoginAsOrganizer from "./loginAsOrganizer";
import RegisterAsOrganizer from "./RegisterAsOrganizer";

const App = () => {
  return (
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
        <Route path="/front" element={<Ticketeer />} />
      </Routes>

      <Routes>
        <Route path="/event" element={<EventPage />} />
      </Routes>

      <Routes>
        <Route path="/create/event" element={<CreateEventPage />} />
      </Routes>

      <Routes>
        <Route path="/loginOrg" element={<LoginAsOrganizer />} />
      </Routes>

      <Routes>
        <Route path="/registerOrg" element={<RegisterAsOrganizer />} />
      </Routes>
    </Router>
  );
};

export default App;
