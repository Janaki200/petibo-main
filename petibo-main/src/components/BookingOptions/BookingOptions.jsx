import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-20 text-center space-y-12">
      <h1 className="text-4xl font-bold text-purple-900">Choose Your Booking</h1>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        <button
          onClick={() => navigate('/daycares')}
          className="bg-purple-700 text-white px-8 py-4 rounded-xl text-xl hover:bg-purple-900 transition"
        >
          Veterinary Booking
        </button>

        <button
          onClick={() => navigate('/clinics')}
          className="bg-teal-600 text-white px-8 py-4 rounded-xl text-xl hover:bg-teal-800 transition"
        >
          Day Care Booking
        </button>
      </div>
    </div>
  );
};

export default BookingOptions;
