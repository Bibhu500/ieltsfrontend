// Login.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import { auth } from '../config/firebase'; 
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [apiError, setApiError] = useState('');
  const [recentEmails, setRecentEmails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve recent emails from local storage
    const storedEmails = localStorage.getItem('recentEmails');
    if (storedEmails) {
      setRecentEmails(JSON.parse(storedEmails));
    }
  }, []);

  const validateEmail = () => {
    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      try {

        // ** New Code 
        // TODO Add new Code

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const idToken = await user.getIdToken();
        console.log(idToken);
        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, { idToken }); 
        
        const data = await response.data;
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        // localStorage.setItem('token', token);
        
        // Update recent emails in local storage
        // const updatedRecentEmails = [email, ...recentEmails.filter((e) => e !== email)].slice(0, 5);
        // localStorage.setItem('recentEmails', JSON.stringify(updatedRecentEmails));
        
        navigate('/homepage');
        setApiError('');
      } catch (error) {
        console.error('Login Error:', error);
        setApiError(error.response.data.message);
      }
    }
  };

  return (
    <div className="w-full max-w-xs">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          list="emailSuggestions"
          className={`w-full mb-2 p-2 rounded border ${
            emailError ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:border-blue-500`}
        />
        <datalist id="emailSuggestions">
          {recentEmails.map((recentEmail) => (
            <option key={recentEmail} value={recentEmail} />
          ))}
        </datalist>
        {emailError && <p className="text-red-500 text-sm mb-2">{emailError}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
          className={`w-full mb-2 p-2 rounded border ${
            passwordError ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:border-blue-500`}
        />
        {passwordError && <p className="text-red-500 text-sm mb-2">{passwordError}</p>}
        {apiError && <p className="text-red-500 text-sm mb-2">{apiError}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
      </form>
      {/* <p className="mt-4 text-center">
        Do not have an account?{' '}
        <Link to="/signup" className="text-blue-500 hover:text-blue-600">
          Signup
        </Link>
      </p> */}
    </div>
  );
};

export default Login;