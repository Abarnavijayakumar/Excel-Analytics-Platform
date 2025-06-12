// import React, { useEffect } from 'react'; // ✅ Make sure useEffect is imported
import Home from './Components/Home';
import NavbarComponent from './Components/NavbarComponent';
import About from './Components/About';
import Chart from './Components/Chart';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {
  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);

  return (
    <>
      <NavbarComponent />
      <Home />
      <About />
      <Chart />
      <Pricing />
      <Contact />
    </>
  );
}

export default App;
