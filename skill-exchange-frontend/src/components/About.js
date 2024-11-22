import React from 'react';

const About = ({ isDarkMode }) => {
  const pageStyle = {
    padding: '20px',
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const textStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    textAlign: 'justify',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={textStyle}>
        Welcome to our application! We are committed to providing innovative solutions that make your life easier. 
        Our mission is to create high-quality, user-friendly platforms that meet your needs and exceed your expectations.
      </p>
      <p style={textStyle}>
        This application is built using cutting-edge technologies like React for the frontend and Node.js for the backend. 
        Our team is passionate about delivering the best experience possible for our users.
      </p>
      <p style={textStyle}>
        Thank you for choosing us. If you have any questions or feedback, feel free to <a href="/contact" style={{ color: isDarkMode ? '#4fc3f7' : '#007bff' }}>contact us</a>.
      </p>
    </div>
  );
};

export default About;
