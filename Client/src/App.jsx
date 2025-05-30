// import React, { useEffect } from 'react'; // ✅ Make sure useEffect is imported
import Home from './Components/Home';
import NavbarComponent from './Components/NavbarComponent';
import About from './Components/About';
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
    </>
  );
}

export default App;
