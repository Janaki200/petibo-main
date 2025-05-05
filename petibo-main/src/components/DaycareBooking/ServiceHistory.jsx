import React, { useEffect, useState } from 'react';
import Userservices from '../../services/Userservices';

const ServiceHistory = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceRequests = async () => {
      const email = localStorage.getItem('email');
      if (!email) {
        alert('User email not found in localStorage.');
        return;
      }

      try {
        const result = await Userservices.fetchServiceReq(email);
        setServices(result);
      } catch (err) {
        console.error('Error fetching services:', err);
        alert(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceRequests();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading service history...</p>;

  return (
    <div className="container mx-auto p-6 my-10 max-w-4xl bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Pet History</h2>
      
      {services.length === 0 ? (
        <p className="text-center text-gray-500">No service records found.</p>
      ) : (
        <div className="space-y-4">
          {services.map((service, index) => {
            // Conditional class assignment based on status
            let tileStyle = '';
            if (service.status === 'Completed') {
              tileStyle = 'border-green-500 bg-green-50';
            } else if (service.status.startsWith('Scheduled')) {
              tileStyle = 'border-blue-500 bg-blue-50';
            } else {
              tileStyle = 'border-gray-300 bg-white';
            }

            return (
              <div key={index} className={`border p-4 rounded-md shadow-sm ${tileStyle}`}>
                <p><strong>Pet Name:</strong> {service.petName}</p>
                <p><strong>Owner Name:</strong> {service.ownerName}</p>
                <p><strong>Phone Number:</strong> {service.phoneNumber}</p>
                <p><strong>Date:</strong> {service.date}</p>
                <p><strong>Time:</strong> {service.time}</p>
                <p><strong>Place:</strong> {service.place}</p>
                <p><strong>Service Type:</strong> {service.serviceType}</p>
                <p><strong>Status:</strong> {service.status}</p>
                <p><strong>Service Provider Email:</strong> {service.serviceEmail}</p>
                <p><strong>Owner Email:</strong> {service.ownerEmail}</p>
                {service.specialInstructions && (
                  <p><strong>Special Instructions</strong> {service.specialInstructions}</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ServiceHistory;
