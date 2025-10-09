import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CoreBusiness from './components/CoreBusiness';
import FutureLayout from './components/FutureLayout';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <CoreBusiness />
        <FutureLayout />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
