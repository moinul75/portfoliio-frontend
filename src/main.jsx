import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; // Assuming you use Axios for API requests
import App from './App.jsx'; // Assuming App.jsx is your main application component
import './index.css'; // Your CSS file
import api from '../src/api'; // Assuming api.js configures axios with VITE_URL

const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('/intro/1'); 
      setProfileData(response.data);
      updateDocumentTitle(response.data);
      updateFavicon(response.data)
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  const updateDocumentTitle = (data) => {
    if (data) {
      document.title = `${data.full_name} | ${data.designation}`;
    }
  };
  const updateFavicon = (data) => {
    if (data && data.profile_img) {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = data.profile_img;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  };

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

root.render(<Main />);