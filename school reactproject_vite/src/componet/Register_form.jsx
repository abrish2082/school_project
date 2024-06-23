import React, { useState } from 'react';
//import axios from 'axios'; // Assuming you've installed axios
import axios from 'axios';
const Register = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="program">Program of Interest:</label>
      <select id="program" name="program" value={formData.program} onChange={handleChange}>
        <option value="">Select a Program</option>
        <option value="math">Mathematics</option>
        <option value="computer_science">Computer Science</option>
        <option value="history">History</option>
      </select>
      <br />

      <label htmlFor="graduation_year">Expected Graduation Year:</label>
      <input
        type="number"
        id="graduation_year"
        name="graduationYear"
        value={formData.graduationYear}
        onChange={handleChange}
        min="2024"
        required
      />
      <br />

      <button type="submit">Register Now</button>
    </form>
  );
};
export default Register;