import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
import Userservices from '../../services/Userservices';

const DayCareBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const daycare = location.state?.daycare;

  // If no daycare data is provided, show a fallback message
  if (!daycare) return <p>No daycare data received.</p>;

  const [form, setForm] = useState({
    petName: '',
    ownerName: '', // To be fetched
    phoneNumber: '', // To be fetched
    date: '',
    time: '',
    specialInstructions: '',
    place: daycare.place // Show daycare's place as a default value
  });

  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage error state

  // Fetch user details using email (from the current user)
  const fetchUserDetails = async () => {
    try {
      const email = localStorage.getItem('email');
      const user = await Userservices.fetchUser(email);
      
      // Update form state with user details
      setForm((prevForm) => ({
        ...prevForm,
        ownerName: user.name,
        phoneNumber: user.phone
      }));
    } catch (error) {
      setError('Failed to fetch user details');
    } finally {
      setLoading(false);
    }
  };

  // Call fetchUserDetails when component mounts
  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Navigate to the confirmation page with form data
    try {
      const req = { 
        petName: form.petName,
        ownerName:form.ownerName , // To be fetched
        phoneNumber: form.phoneNumber, // To be fetched
        date: form.date,
        time: form.time,
        specialInstructions: form.specialInstructions,
        place: daycare.place ,
        serviceEmail: daycare.email,
        serviceType: daycare.role,
        status: "Pending",
        ownerEmail: localStorage.getItem('email')
      }
     await Userservices.bookServicecare(req)
      alert('Your pet service appointment has been booked!');
      navigate("/history")
    } catch (error) {
      alert(error)
    }
  };

  if (loading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto my-20 max-w-xl p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">Pet Daycare Booking</h1>
      
      {/* Display daycare details */}
      <div className="bg-gray-100 p-4 mb-6 rounded-md shadow-sm">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">Daycare Details</h2>
        <p><strong>Name:</strong> {daycare.name}</p>
        <p><strong>Email:</strong> {daycare.email}</p>
        <p><strong>Phone:</strong> {daycare.phoneNumber}</p>
        <p><strong>Place:</strong> {daycare.place}</p>
        <p><strong>Role:</strong> {daycare.role}</p>
      </div>

      {/* Booking form */}
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
          placeholder="Place to book"
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
