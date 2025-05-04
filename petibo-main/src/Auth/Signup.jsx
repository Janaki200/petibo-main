import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signup from '../assets/signup.jpg';
import UserServices from '../services/Userservices';

const Signup = () => {
  const [form, setForm] = useState({ email: '', password: '', name: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (form.email && form.password && form.name) {
    try {
      const user = {
        name: form.name ,
        email: form.email,
        password: form.password ,
        phone: form.phone
      }
      await UserServices.registeruser(user)
      alert('Account created successfully!');
      navigate('/'); // redirect to login
    } catch (error) {
      alert(error)
    }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div
      className="w-full h-screen" // Ensure the div takes up the full height of the screen
      style={{
        backgroundImage: `url(${signup})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
           <input
            type="phone"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
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
            Create Account
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <span
            className="text-purple-700 cursor-pointer"
            onClick={() => navigate('/')}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
