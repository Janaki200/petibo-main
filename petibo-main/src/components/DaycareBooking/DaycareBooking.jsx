import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate

const DayCareBooking = () => {
  const navigate = useNavigate(); // Step 2: Declare navigate

  const [form, setForm] = useState({
    petName: '',
    ownerName: '',
    phoneNumber: '',
    date: '',
    time: '',
    specialInstructions: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Step 3: Navigate with form state
    navigate('/confirmationpage', { state: { ...form, type: 'Daycare' } });
    alert('Your veterinary appointment has been booked!');
  };

  return (
    <div className="container mx-auto my-20 max-w-xl p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">Pet Daycare Booking</h1>
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
          type="type"
          name="place"
          placeholder="place to book"
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
          name="specialInstructions"
          placeholder="Special instructions (optional)"
          value={form.specialInstructions}
          onChange={handleChange}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <button type="submit" className="primary-btn w-full hover:bg-purple-900">
          Book Daycare
        </button>
      </form>
    </div>
  );
};

export default DayCareBooking;
