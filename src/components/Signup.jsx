// Signup.js
import { useState } from 'react';
import axios from 'axios';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateUsername = () => {
    if (!username) {
      setUsernameError('Username is required');
      return false;
    } else {
      setUsernameError('');
      return true;
    }
  };

  const validateEmail = () => {
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

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validateUsername() && validateEmail() && validatePassword()) {
      try {

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        const firebaseId = user.uid;
        console.log(firebaseId);        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/signup`, { fullName: username, email, firebaseId});
        console.log(response.data);
        setSuccessMessage('User created successfully!');
        setApiError('');
        setUsername('');
        setEmail('');
        setPassword('');
      } catch (error) {
        console.error(error);
        setApiError('An error occurred. Please try again later.');
        setSuccessMessage('');
      }
    }
  };

  return (
    <div className="w-full max-w-xs">
      <h1 className="text-2xl font-bold mb-4 text-center">Signup</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={validateUsername}
          className={`w-full mb-2 p-2 rounded border ${usernameError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
        />
        {usernameError && <p className="text-red-500 text-sm mb-2">{usernameError}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          className={`w-full mb-2 p-2 rounded border ${emailError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
        />
        {emailError && <p className="text-red-500 text-sm mb-2">{emailError}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
          className={`w-full mb-2 p-2 rounded border ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
        />
        {passwordError && <p className="text-red-500 text-sm mb-2">{passwordError}</p>}
        {apiError && <p className="text-red-500 text-sm mb-2">{apiError}</p>}
        {successMessage && <p className="text-green-500 text-sm mb-2">{successMessage}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;