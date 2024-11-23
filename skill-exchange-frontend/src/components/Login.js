import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { FaEnvelope, FaLock, FaUserShield } from 'react-icons/fa'; // Icons for email, password, and logo
import api from '../utils/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Reset error on every attempt
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      navigate('/profile'); // Navigate to profile page after login
    } catch (error) {
      setError('Invalid credentials, please try again.'); // Set error message if login fails
    }
  };

  // Styles object for inline styling
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
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
    message: {
      fontSize: '1rem',
      marginBottom: '20px',
      color: '#555',
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
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#444', // Darker shade on hover
    },
    signup: {
      marginTop: '15px',
      textAlign: 'center',
      fontSize: '0.9rem',
    },
    signupButton: {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #000',
      padding: '10px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background-color 0.3s ease',
    },
    signupButtonHover: {
      backgroundColor: '#f1f1f1', // Light shade on hover
    },
    errorMessage: {
      color: 'red',
      fontSize: '1rem',
      marginBottom: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logoContainer}>
          <FaUserShield style={styles.logoIcon} />
          <h1 style={styles.title}>Skill Exchange</h1>
        </div>
        <p style={styles.message}>Welcome back! Please log in to your account.</p>
        
        {/* Display error message if any */}
        {error && <p style={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleLogin} style={styles.form}>
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
            Login
          </button>
        </form>
        
        <div style={styles.signup}>
          <p>Don't have an account?</p>
          <button
            style={styles.signupButton}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
