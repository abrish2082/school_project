// import react from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {Hello} from './componet/function_component'
// import Hi from './componet/class_component'
// import Welcome from './componet/jsx'
// import Register from './componet/Register_form'
// import RegistrationForm from './componet/RegistrationForm'

// //import Hello from './componet/function_component'
// function App() {
//   return (
//     <div className="App">
    
//   {/* <Hello />
//   <Hi /> */}
//   <RegistrationForm />
//     </div>
//   );
  
// }  

// export default App
import React, { useState } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm'; // Import the RegistrationForm component

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    graduationYear: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/register', formData);
      console.log('Registration successful:', response.data);
      // Handle successful registration (e.g., clear form, show success message)
      setFormData({ name: '', email: '', phone: '', program: '', graduationYear: '' }); // Clear form data
    } catch (err) {
      console.error('Error registering student:', err);
      // Handle error message
    }
  };

  return (
    <div className="App">
      <h1>Student Registration</h1>
      <RegistrationForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
 