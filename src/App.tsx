import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import LGPD from './components/LGPD';

function App() {
  return (
    <Router>
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <main>
                <Hero />
                <Products />
                <HowItWorks />
                <Benefits />
                <About />
              </main>
            </>
          } />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-uso" element={<TermsOfUse />} />
          <Route path="/lgpd" element={<LGPD />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;