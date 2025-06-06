import React, { useEffect, useState } from 'react';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';

function App() {
  const [userData, setUserData] = useState(null);

  // Load saved user data from localStorage when the app starts
  useEffect(() => {
    const stored = localStorage.getItem('userData');
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-green-100">
      {/* Show Dashboard if user data exists, otherwise show Onboarding */}
      {userData ? (
        <Dashboard userData={userData} />
      ) : (
        <Onboarding setUserData={setUserData} />
      )}
    </div>
  );
}

export default App;