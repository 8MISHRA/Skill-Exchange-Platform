import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa'; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(error.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputWrapper}>
          <FaUser style={styles.icon} />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputWrapper}>
          <FaEnvelope style={styles.icon} />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputWrapper}>
          <FaCommentDots style={styles.icon} />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      {status && <p style={styles.status}>{status}</p>}
    </div>
  );
};

// Styles object for easier readability and reusability
const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
  },
  icon: {
    color: '#007BFF',
    marginRight: '10px',
    fontSize: '20px',
  },
  input: {
    flex: '1',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    outline: 'none',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
    transition: '0.3s',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    height: '100px',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
    transition: '0.3s',
    resize: 'none',
    border: 'none',
    outline: 'none',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  status: {
    marginTop: '20px',
    color: 'green',
  },
};

export default Contact;
