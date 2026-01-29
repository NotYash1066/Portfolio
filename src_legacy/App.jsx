import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
