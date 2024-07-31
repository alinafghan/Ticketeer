import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import Ticketeer from "./Pages/Ticketeer";
import EventPage from "./Pages/EventPage";
import CreateEventPage from "./Pages/CreateEventPage";
import LoginAsOrganizer from "./Pages/loginAsOrganizer";
import RegisterAsOrganizer from "./Pages/RegisterAsOrganizer";
import BookTicketPage from "./Pages/BookTicketPage";
import DeleteEventPage from "./Pages/DeleteEventPage";
import UpdateEventPage from "./Pages/UpdateEventPage";
import OrganizerHomePage from "./Pages/OrganizerHomePage";
import ChooseEventToUpdatePage from "./Pages/ChooseEventToUpdatePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>

      <Routes>
        <Route path="/org_home" element={<OrganizerHomePage />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Ticketeer />} />
      </Routes>

      <Routes>
        <Route path="/event/:event_id" element={<EventPage />} />
      </Routes>

      <Routes>
        <Route path="/update/event" element={<ChooseEventToUpdatePage />} />
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

      <Routes>
        <Route path="/book" element={<BookTicketPage />} />
      </Routes>

      <Routes>
        <Route path="/delete/event" element={<DeleteEventPage />} />
      </Routes>

      <Routes>
        <Route path="/update/event/:event_id" element={<UpdateEventPage />} />
      </Routes>
    </Router>
  );
};

export default App;
