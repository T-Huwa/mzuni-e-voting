import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './Layouts/DashboardLayout';
import Candidates from './Pages/Candidates';
import VoterLogin from './Pages/VoterLogin';
import StudentUnionVoting from './Pages/StudentUnionVoting';

function Dashboard() {
  return <h1 className="text-3xl font-bold p-4">Dashboard</h1>;
}

function Settings() {
  return <h1 className="text-3xl font-bold p-4">Settings</h1>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/vote" element={<StudentUnionVoting />} />
        <Route path="/login" element={<VoterLogin />} />
      </Routes>
    </Router>
  );
}

