import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Hero from './components/Hero';
import About from './components/About';
import Protocol from './components/Protocol';
import Cars from './components/Cars';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Protocol />
      <Cars />
      <Reviews />
      <Contact />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;