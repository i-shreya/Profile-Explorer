import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import ProfileDetailPage from './pages/ProfileDetailPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <ProfileProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="pb-16 sm:pb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile/:id" element={<ProfileDetailPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ProfileProvider>
  );
}

export default App;