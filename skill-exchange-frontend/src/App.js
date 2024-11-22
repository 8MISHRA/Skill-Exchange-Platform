import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  FaMoon,
  FaSun,
  FaHome,
  FaUser,
  FaSignInAlt,
  FaInfoCircle,
  FaEnvelope,
  FaQuestionCircle,
} from 'react-icons/fa';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock login state

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);
  const toggleSidebar = () => setIsSidebarOpen((prevState) => !prevState);

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    backgroundColor: isDarkMode ? '#0E0E10' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
    color: isDarkMode ? '#fff' : '#374151',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
  };

  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '50px',
    left: 0,
    height: 'calc(100% - 50px)',
    width: isSidebarOpen ? '250px' : '60px',
    backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
    color: isDarkMode ? '#f3f4f6' : '#374151',
    transition: '0.3s ease',
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex: 1374151,
  };

  const logoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px',
    marginBottom: '20px',
  };

  const sidebarLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isSidebarOpen ? 'flex-start' : 'center',
    gap: isSidebarOpen ? '10px' : '0',
    textDecoration: 'none',
    color: isDarkMode ? '#fff' : '#333',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '15px 0',
    marginLeft: isSidebarOpen ? '20px' : '0',
    transition: '0.3s ease',
  };

  const contentStyle = {
    marginLeft: isSidebarOpen ? '250px' : '60px',
    marginTop: '50px',
    padding: '20px',
    transition: '0.3s ease',
    flexGrow: 1,
    overflow: 'hidden',
  };

  return (
    <Router>
      <div style={appStyle}>
        {/* Header Navbar */}
        <header style={headerStyle}>
          <div>
            <button onClick={toggleSidebar} style={{ cursor: 'pointer', fontSize: '1.5rem' }}>
              {isSidebarOpen ? '×' : '≡'}
            </button>
          </div>
          <div>
            <button onClick={toggleTheme} style={{ cursor: 'pointer', marginRight: '20px' }}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            {isLoggedIn && (
              <button
                style={{
                  padding: '5px 15px',
                  backgroundColor: isDarkMode ? '#4b5563' : '#e5e7eb',
                  color: isDarkMode ? '#fff' : '#374151',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            )}
          </div>
        </header>

        {/* Sidebar Section */}
        <div style={sidebarStyle}>
          <div style={logoStyle}>
            <img
              src="logo.jpg" // Replace with your logo path
              alt="Company Logo"
              style={{
                width: isSidebarOpen ? '80px' : '40px',
                height: isSidebarOpen ? '80px' : '40px',
                transition: '0.3s ease',
              }}
            />
            {isSidebarOpen && <span>Skill Exchanger</span>}
          </div>

          <Link to="/" style={sidebarLinkStyle}>
            <FaHome /> {isSidebarOpen && 'Home'}
          </Link>

          <Link to="/about" style={sidebarLinkStyle}>
            <FaInfoCircle /> {isSidebarOpen && 'About'}
          </Link>

          <Link to="/profile" style={sidebarLinkStyle}>
            <FaUser /> {isSidebarOpen && 'Dashboard'}
          </Link>

          <Link to="/contact" style={sidebarLinkStyle}>
            <FaEnvelope /> {isSidebarOpen && 'Contact'}
          </Link>

          <Link to="/login" style={sidebarLinkStyle}>
            <FaSignInAlt /> {isSidebarOpen && 'Login'}
          </Link>

          <div style={{ marginTop: 'auto', marginBottom: '20px' }}>
          <Link to="/help" style={sidebarLinkStyle}>
            <FaQuestionCircle /> {isSidebarOpen && 'Need Help'}
          </Link>
        </div>
        </div>

        {/* Main Content Section */}
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
