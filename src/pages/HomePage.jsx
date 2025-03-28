import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Header from '../components/Header';

function HomePage() {
  return (
    <div >
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default HomePage;
