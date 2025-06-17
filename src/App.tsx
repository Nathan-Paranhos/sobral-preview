import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      
      <main>
        <Hero />
        <Products />
        <HowItWorks />
        <Benefits />
        <About />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;