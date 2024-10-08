import React, { useState } from "react";
import "./App.css";

const XModal = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = user;

    if (!username || !email || !phone || !dob) {
      alert("All fields are required. Please fill in the missing field.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const today = new Date().toISOString().split("T")[0];
    if (dob > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    setIsModalOpen(false);
    setUser({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={handleOpenModal} className="openform">Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Fill Details</h3>
            <form onSubmit={handleSubmit}>
              <label>Username:</label>
              <input
                type="text"
                required
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
              <label>Email Address:</label>
              <input
                type="email"
                required
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <label>Phone Number:</label>
              <input
                type="text"
                id="phone"
                required
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
              <label>Date of Birth:</label>
              <input
                type="date"
                id="dob"
                required
                name="dob"
                value={user.dob}
                onChange={handleChange}
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
