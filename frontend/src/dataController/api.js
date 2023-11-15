

const BASE_URL = "http://localhost:8000";

// Events APIs
export const getEvents = async () => {
    const response = await fetch(`${BASE_URL}/events`);
    const data = await response.json();
    return data;
};

export const getEventById = async (id) => {
    const response = await fetch(`${BASE_URL}/events/${id}`);
    const data = await response.json();
    return data;
};

export const createEvent = async (event) => {
    const response = await fetch(`${BASE_URL}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
    });
    const data = await response.json();
    return data;
};

export const updateEvent = async (id, event) => {
    const response = await fetch(`${BASE_URL}/events/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
    });
    const data = await response.json();
    return data;
};

export const deleteEvent = async (id) => {
    const response = await fetch(`${BASE_URL}/events/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
};

// Countries APIs
export const getCountries = async () => {
    const response = await fetch(`${BASE_URL}/countries`);
    const data = await response.json();
    return data;
};

export const getCountryById = async (id) => {
    const response = await fetch(`${BASE_URL}/countries/${id}`);
    const data = await response.json();
    return data;
};

export const createCountry = async (country) => {
    const response = await fetch(`${BASE_URL}/countries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(country),
    });
    const data = await response.json();
    return data;
};

export const updateCountry = async (id, country) => {
    const response = await fetch(`${BASE_URL}/countries/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(country),
    });
    const data = await response.json();
    return data;
};

export const deleteCountry = async (id) => {
    const response = await fetch(`${BASE_URL}/countries/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
};



// Define the API endpoints for the users table
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
};

export const getUserById = async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const data = await response.json();
  return data;
};

export const createUser = async (user) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const updateUser = async (id, user) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const deleteUser = async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};
