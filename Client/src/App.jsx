import React from 'react';
// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Components/Home';
import NavbarComponent from './Components/NavbarComponent';
import About from './Components/About';
import Chart from './Components/Chart';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import AuthPage from './Components/AuthPage';
import Dashboard from './Components/Dashboard';
import Notfound from './Components/Notfound';

const PageContent = () => {
  const location = useLocation();

  // Show landing sections only on "/"
  const isHome = location.pathname === '/';

  return (
    <>
     <Toaster position="top-right" />
      {isHome && <NavbarComponent />}  {/* ✅ Show Navbar only on home page */}
      {isHome && (
        <>
          <div id="home" className="scroll-mt-24"><Home /></div>
          <div id="about" className="scroll-mt-24"><About /></div>
          <div id="Charts" className="scroll-mt-24"><Chart /></div>
          <div id="pricing" className="scroll-mt-24"><Pricing /></div>
          <div id="contact" className="scroll-mt-24"><Contact /></div>
           <div id="Dashboard" className="scroll-mt-24"><Dashboard /></div>
        </>
      )}

      <Routes>
        <Route path="/auth" element={<AuthPage />} />
         <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

function App() {
  
  return (
    <>
   
    
    <Router>
      <PageContent />
    </Router>
    </>
  );
}

export default App;
