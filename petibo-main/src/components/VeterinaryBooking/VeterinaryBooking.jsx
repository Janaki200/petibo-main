import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VeterinaryBooking = () => {
    const navigate = useNavigate(); 
  const [form, setForm] = useState({
    petName: '',
    ownerName: '',
    phoneNumber: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmationpage', { state: form });
    alert('Your veterinary appointment has been booked!');
  };

  
  
  return (
    <div className="container mx-auto my-20 max-w-xl p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">Veterinary Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="petName"
          placeholder="Pet's Name"
          value={form.petName}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Owner's Name"
          value={form.ownerName}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Owner's Phone Number"
          value={form.phoneNumber}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
         <input
          type="text"
          name="place"
          placeholder="Owner's Phone Number"
          value={form.place}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          name="reason"
          placeholder="Reason for visit"
          value={form.reason}
          onChange={handleChange}
          rows="3"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <button type="submit" className="primary-btn w-full hover:bg-purple-900">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default VeterinaryBooking;
