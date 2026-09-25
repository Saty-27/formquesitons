import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';
import './index.css';

const AppContent = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Only show intro once per session, on load
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500); // Wait for the 2.5s animation to finish
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="intro-overlay">
          <img src="/logo.svg" alt="inEdible | MoreIdeaLabs" className="intro-logo" />
        </div>
      )}
      
      <div className="app-container">
        <header className="header">
          <Link to="/">
            <img src="/logo.svg" alt="inEdible | MoreIdeaLabs" className="logo" />
          </Link>
          <nav>
            {!isAdmin ? (
              <Link to="/admin" className="btn btn-outline" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
                Admin Access
              </Link>
            ) : (
              <Link to="/" className="btn btn-outline" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
                Return to Form
              </Link>
            )}
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
