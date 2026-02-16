import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {!isLoggedIn ? (
        <>
          {currentPage === 'login' && (
            <LoginPage 
              onLogin={handleLogin} 
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'register' && (
            <RegisterPage 
              onNavigate={handleNavigate}
              onRegister={(userData) => {
                setUser(userData);
                setIsLoggedIn(true);
                setCurrentPage('dashboard');
              }}
            />
          )}
        </>
      ) : (
        <>
          {currentPage === 'dashboard' && (
            <DashboardPage 
              user={user} 
              onNavigate={handleNavigate}
              onLogout={handleLogout}
            />
          )}
          {currentPage === 'profile' && (
            <ProfilePage 
              user={user} 
              onNavigate={handleNavigate}
              onLogout={handleLogout}
              onUpdateUser={setUser}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;