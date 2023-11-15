// src/components/UserTablePage.jsx
import React, { useEffect, useState } from 'react';
import { getUsers } from '../dataController/api';

const UserTablePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User Table Page</h1>
      {/* Display the users data in a table */}
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            {/* Add more table headers based on your data */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {/* Add more table cells based on your data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTablePage;
