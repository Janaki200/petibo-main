import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Userservices from "../../services/Userservices";

const Daycares = () => {
  const [daycares, setDaycares] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Correctly use the useNavigate hook

  useEffect(() => {
    const getDaycares = async () => {
      try {
        const data = await Userservices.fetchServices();
        setDaycares(data);
      } catch (error) {
        console.error("Failed to load daycares:", error.message);
      } finally {
        setLoading(false);
      }
    };

    getDaycares();
  }, []);

  const handleBook = (daycare) => {
    navigate('/daycare-booking', { state: { daycare } }); // Pass the daycare object via state
  };

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading daycares...</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Available Daycares</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {daycares.map((daycare, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-between border border-gray-200"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-600">{daycare.name}</h2>
              <p className="text-gray-700"><strong>Email:</strong> {daycare.email}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {daycare.phoneNumber}</p>
              <p className="text-gray-700"><strong>Place:</strong> {daycare.place}</p>
              <p className="text-gray-600 text-sm italic">Role: {daycare.role}</p>
            </div>
            <button
              onClick={() => handleBook(daycare)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
            >
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daycares;
