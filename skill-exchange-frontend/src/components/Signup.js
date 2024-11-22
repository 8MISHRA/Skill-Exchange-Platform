import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Icons for name, email, and password
import api from '../utils/api';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { name, email, password });
      navigate('/login'); // Navigate to the login page after signup
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  // Styles object for inline styling
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      padding: '20px',
      width: '90%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    logoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    logoIcon: {
      fontSize: '3rem',
      color: '#000',
    },
    title: {
      margin: '10px 0',
      fontSize: '1.8rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    inputGroup: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #000',
      borderRadius: '5px',
      overflow: 'hidden',
    },
    icon: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px',
      fontSize: '1.2rem',
    },
    input: {
      border: 'none',
      outline: 'none',
      padding: '10px',
      flex: 1,
    },
    button: {
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    buttonSecondary: {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #000',
      padding: '10px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logoContainer}>
          <FaUser style={styles.logoIcon} />
          <h1 style={styles.title}>Sign Up</h1>
        </div>
        <form onSubmit={handleSignup} style={styles.form}>
          <div style={styles.inputGroup}>
            <FaUser style={styles.icon} />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <FaEnvelope style={styles.icon} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <FaLock style={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        <div>
          <p>Already have an account?</p>
          <button
            style={styles.buttonSecondary}
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
