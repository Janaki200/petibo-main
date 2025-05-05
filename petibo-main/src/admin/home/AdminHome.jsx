import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import adminservices from '../../services/adminservices';

const AdminHome = () => {
  const [admin, setAdmin] = useState(null);
  const [activeTab, setActiveTab] = useState('requests');
  const [requests, setRequests] = useState([]);
  const [scheduled, setScheduled] = useState([]);
  const [completed, setCompleted] = useState([]);
  const navigate = useNavigate();

  const email = localStorage.getItem('email');

  useEffect(() => {
    const loadData = async () => {
      try {
        if (!email) {
          navigate('/');
          return;
        }

        const user = await adminservices.fetchAdmin(email);
        setAdmin(user);

        const services = await adminservices.fetchServiceRequests(email);
        
        const pendingList = [];
        const scheduledList = [];
        const completedList = [];

        for (let req of services) {
          if (req.status === 'Pending') {
            pendingList.push(req);
          } else if (req.status.startsWith('Scheduled')) {
            scheduledList.push(req);
          } else if (req.status === 'Completed') {
            completedList.push(req);
          }
        }

        setRequests(pendingList);
        setScheduled(scheduledList);
        setCompleted(completedList);
      } catch (error) {
        alert(error.message);
        navigate('/');
      }
    };

    loadData();
  }, [email, navigate]);

  const handleSchedule = async (service) => {
    try {
      const scheduledStatus = `Scheduled for ${service.date} ${service.time}`;
      await adminservices.updateRequestStatus(service, scheduledStatus);
      setRequests(prev => prev.filter(r => r !== service));
      setScheduled(prev => [...prev, { ...service, status: scheduledStatus }]);
    } catch (error) {
      alert("Failed to schedule: " + error.message);
    }
  };
  
  const handleDelete = async (service) => {
    try {
      await adminservices.deleteServiceRequest(service);
      setRequests(prev => prev.filter(r => r !== service));
    } catch (error) {
      alert("Failed to delete: " + error.message);
    }
  };
  
  const handleComplete = async (service) => {
    try {
      await adminservices.updateRequestStatus(service, 'Completed');
      setScheduled(prev => prev.filter(r => r !== service));
      setCompleted(prev => [...prev, { ...service, status: 'Completed' }]);
    } catch (error) {
      alert("Failed to mark as completed: " + error.message);
    }
  };

  const renderServiceCard = (service, showActions = false, showComplete = false) => (
    <div key={service.ownerEmail + service.date + service.time} className="p-4 mb-3 rounded-lg border shadow bg-white">
      <p className="font-bold">🐶 {service.petName} ({service.serviceType})</p>
      <p>👤 Owner: {service.ownerName}</p>
      <p>📞 {service.phoneNumber}</p>
      <p>📅 {service.date} at {service.time}</p>
      <p>📍 Place: {service.place}</p>
      <p>📝 Notes: {service.specialInstructions || "None"}</p>
      <p className="text-sm text-gray-500">Status: {service.status}</p>
  
      <div className="mt-4 flex gap-4">
        {showActions && (
          <>
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              onClick={() => handleSchedule(service)}
            >
              ✅ Schedule
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => handleDelete(service)}
            >
              🗑 Delete
            </button>
          </>
        )}
        {showComplete && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => handleComplete(service)}
          >
            ✔️ Complete
          </button>
        )}
      </div>
    </div>
  );
  
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'requests':
        return requests.length
          ? requests.map(service => renderServiceCard(service, true))
          : <p>No pending requests.</p>;
      case 'scheduled':
        return scheduled.length
        ? scheduled.map(service => renderServiceCard(service, false, true))
        : <p>No scheduled services.</p>;
      case 'completed':
        return completed.length
          ? completed.map(service => renderServiceCard(service))
          : <p>No completed services.</p>;
      default:
        return null;
    }
  };
  

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* HUD */}
      {admin && (
        <div className="bg-purple-100 p-4 rounded-xl shadow-md mb-6 text-purple-900">
          <h2 className="text-xl font-bold">{admin.name}</h2>
          <p>📞 {admin.phone}</p>
          <p>📍 {admin.location}</p>
          <p>🏥 Role: {admin.role}</p>
        </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {['requests', 'scheduled', 'completed'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab
                ? 'bg-purple-700 text-white'
                : 'bg-purple-200 text-purple-800'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white p-4 rounded-xl shadow">{renderTabContent()}</div>
    </div>
  );
};

export default AdminHome;
