import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmationpage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold text-red-600">No booking information available.</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Go Back to Booking
        </button>
      </div>
    );
  }

  const {
    petName,
    ownerName,
    phoneNumber,
    date,
    time,
    reason,
    specialInstructions,
    type // from navigate(..., { state: { ..., type: 'Daycare' } })
  } = state;

  const appointmentType = type || 'Veterinary';

  return (
    <div className="container mx-auto my-20 max-w-xl p-6 bg-white rounded-xl shadow-lg text-center">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Appointment Confirmed!</h1>
      <div className="text-left space-y-2">
        <p><strong>Appointment Type:</strong> {appointmentType}</p>
        <p><strong>Pet's Name:</strong> {petName}</p>
        <p><strong>Owner's Name:</strong> {ownerName}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        {reason && <p><strong>Reason:</strong> {reason}</p>}
        {specialInstructions && <p><strong>Special Instructions:</strong> {specialInstructions}</p>}
      </div>
      <button
        onClick={() => navigate('/home')}
        className="mt-6 px-6 py-2 bg-purple-700 text-white rounded hover:bg-purple-900"
      >
        Book Another Appointment
      </button>
    </div>
  );
};

export default Confirmationpage;
