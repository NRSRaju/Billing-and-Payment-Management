import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';  // Import the CSS file
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard/BillingTab';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="card">
      <h1>Welcome to the Dashboard</h1>
      <button onClick={() => navigate('/user')}>User Dashboard</button>
      <button onClick={() => navigate('/admin')}>Admin Dashboard</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
