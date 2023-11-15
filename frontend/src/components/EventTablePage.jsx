// src/components/EventTablePage.jsx
import React, { useEffect, useState } from 'react';
import { getEvents } from '../dataController/api';

const EventTablePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <div>
      <h1>Event Table Page</h1>
      {/* Display the events data in a table */}
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            {/* Add more table headers based on your data */}
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              {/* Add more table cells based on your data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTablePage;
