import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../assets/login.jpg'; // Ensure the path is correct
import Userservices from '../services/Userservices';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Dummy authentication check
    if (form.email && form.password) {
      
      try {
      const user = {
        email: form.email,
        password: form.password
      }
      await Userservices.loginuser(user)
      localStorage.setItem('email', user.email);
      navigate('/home'); 
      } catch (error) {
        alert(error)
        // alert('Invalid login credentials.');
      }
      
    } else {
      alert('Invalid login credentials.');
    }
  };

  return (
    <div
      className="w-full h-screen" // Ensure the div takes up the full height of the screen
      style={{
        backgroundImage: `url(${login})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button type="submit" className="primary-btn w-full hover:bg-purple-900">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don’t have an account?{' '}
          <span
            className="text-purple-700 cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
