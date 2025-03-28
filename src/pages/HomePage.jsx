import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
function HomePage() {
  return (
    <div >
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
      </main>
      
      
    </div>
  );
}

export default HomePage;
