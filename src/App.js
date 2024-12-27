import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.error("Error fetching the user data:", error);
      });
  }, []);

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <div className="profile-card">
        <div className="profile-image">
          <img src={user.picture.large} alt="User" />
        </div>
        <div className="profile-details">
          <div className="name-row">
            <span>
              <strong>First Name:</strong> {user.name.first}
            </span>
            <span>
              <strong>Last Name:</strong> {user.name.last}
            </span>
          </div>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Phone Number:</strong> {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
