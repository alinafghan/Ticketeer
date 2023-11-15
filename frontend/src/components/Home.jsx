// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our event ticketing application!</p>
      <p>Explore our upcoming events and purchase tickets.</p>
      <Link to="/events">
        <button>View Events</button>
      </Link>
      <Link to="/users">
        <button>View Users</button>
      </Link>
    </div>
  );
};

export default Home;
