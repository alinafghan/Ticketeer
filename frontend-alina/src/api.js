import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://localhost:3005', // Replace with your backend server URL
  timeout: 5000, // Adjust as needed
});

export default Instance;