import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import adminservices from '../../services/adminservices';

const AdminRegister = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    role: 'clinic', 
    location: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (form.email && form.password && form.name && form.location && form.role && form.phone) {
      try {
        const admin = {
          name: form.name,
          email: form.email,
          password: form.password,
          phoneNumber: form.phone,
          role: form.role, 
          place: form.location,
        };
        await adminservices.registerAdmin(admin)
        alert('Account created successfully!');
        navigate('/admin');
      } catch (error) {
        alert(error);
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">Admin Register</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Clinic/Daycare Name"
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
            type="text"
            name="location"
            placeholder="Clinic/Daycare Location"
            value={form.location}
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

          {/* Toggle for Clinic or Daycare */}
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="clinic"
                checked={form.role === 'clinic'}
                onChange={handleChange}
                className="mr-2"
              />
              Clinic
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="daycare"
                checked={form.role === 'daycare'}
                onChange={handleChange}
                className="mr-2"
              />
              Daycare
            </label>
          </div>

          <button type="submit" className="primary-btn w-full hover:bg-purple-900">
            Create Account
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <span
            className="text-purple-700 cursor-pointer"
            onClick={() => navigate('/admin')}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;
