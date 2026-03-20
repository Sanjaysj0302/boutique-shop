import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import SplashScreen from './components/SplashScreen';

import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomOrder from './pages/CustomOrder';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <BrowserRouter>
        <div className="header-container">
          <Navbar />
          <Marquee />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/custom-order" element={<CustomOrder />} />
        </Routes>

        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </>
  );
}

export default App;
