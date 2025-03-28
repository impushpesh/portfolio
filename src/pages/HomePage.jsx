import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
function HomePage() {
  return (
    <div >
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
