// import React, { useEffect } from 'react'; // ✅ Make sure useEffect is imported
import Home from './Components/Home';
import NavbarComponent from './Components/NavbarComponent';
import About from './Components/About';
import Chart from './Components/Chart';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import AuthPage from './Components/AuthPage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Home />
      <About />
      <Chart />
      <Pricing />
      <Contact />
      <Routes>
        {/* <Route path="/AuthPage" element={<AuthPage />} /> */}
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
