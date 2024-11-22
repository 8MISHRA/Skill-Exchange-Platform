import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await api.get('/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>Loading...</p>;
  }

  if (!user) {
    return <p style={{ textAlign: 'center', fontSize: '18px', color: 'red' }}>User profile not found.</p>;
  }

  const skills = user.skills || [];
  const learning = user.learning || [];

  // CSS-in-JS styles
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      fontSize: '24px',
      marginBottom: '20px',
    },
    headingIcon: {
      color: '#007bff',
      marginRight: '10px',
    },
    details: {
      fontSize: '16px',
      color: '#555',
      margin: '10px 0',
    },
    detailsIcon: {
      color: '#007bff',
      marginRight: '10px',
    },
    strongText: {
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        <i className="fas fa-user-circle" style={styles.headingIcon}></i> Profile
      </h2>
      <div>
        <p style={styles.details}>
          <i className="fas fa-user" style={styles.detailsIcon}></i>
          <strong style={styles.strongText}>Name:</strong> {user.name}
        </p>
        <p style={styles.details}>
          <i className="fas fa-envelope" style={styles.detailsIcon}></i>
          <strong style={styles.strongText}>Email:</strong> {user.email}
        </p>
        <p style={styles.details}>
          <i className="fas fa-cogs" style={styles.detailsIcon}></i>
          <strong style={styles.strongText}>Skills:</strong>{' '}
          {skills.length > 0 ? skills.join(', ') : 'No skills listed'}
        </p>
        <p style={styles.details}>
          <i className="fas fa-book" style={styles.detailsIcon}></i>
          <strong style={styles.strongText}>Learning:</strong>{' '}
          {learning.length > 0 ? learning.join(', ') : 'Not learning anything yet'}
        </p>
        <p style={styles.details}>
          <i className="fas fa-calendar-alt" style={styles.detailsIcon}></i>
          <strong style={styles.strongText}>Account Created:</strong>{' '}
          {new Date(user.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Profile;
