import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Header from '../components/Header';
import About from '../components/About';

function HomePage() {
  return (
    <div >
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      
      
    </div>
  );
}

export default HomePage;
