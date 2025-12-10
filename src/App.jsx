import { useState } from 'react';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="bg-black min-vh-100 text-white">
      <MyNavbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
