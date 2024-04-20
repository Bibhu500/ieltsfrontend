// LoginSignupPage.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from '../components/Login';
import Signup from '../components/Signup';

const LoginSignupPage = () => {
  const [activeComponent, setActiveComponent] = useState('login');
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      axios.post(`${import.meta.env.VITE_BASE_URL}/users/verifyuser`, { token: accessToken })
        .then((response) => {
          console.log(response);
          if (response.data.valid) {
            navigate('/homepage');
          } else {
            localStorage.removeItem('token');
          }
        })
        .catch((error) => {
          console.error('Error verifying token:', error);
          localStorage.removeItem('token');
        });
    }
  }, [navigate]);

  const handleHover = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Welcome to {import.meta.env.VITE_APP_NAME}!</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4" onMouseEnter={() => handleHover('login')}>
            <div className="flex flex-col justify-center items-center h-full">
              <h3 className="text-xl font-semibold mb-4 text-center">Login</h3>
              <div className={`${activeComponent === 'signup' ? 'blur' : ''}`}>
                <Login />
              </div>
            </div>
          </div>
          <div className="hidden md:block border-l border-gray-300 h-48 mx-4"></div>
          <div className="w-full md:w-1/2 md:pl-4" onMouseEnter={() => handleHover('signup')}>
            <div className="flex flex-col justify-center items-center h-full">
              <h3 className="text-xl font-semibold mb-4 text-center">Signup</h3>
              <div className={`${activeComponent === 'login' ? 'blur' : ''}`}>
                <Signup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;