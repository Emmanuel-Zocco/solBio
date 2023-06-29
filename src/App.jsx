import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/header';
import HeroSection from './components/heroSection';
import FeaturedProjects from './components/FeaturedProjects';
import Biografia from './components/Biografia';
import Contacto from './components/Contacto';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Element name="inicio" style={{ marginBottom: '250px', marginTop:'200px' }}>
        <HeroSection />
      </Element>
      <Element name="biografia" style={{ marginBottom: '50px' }}>
        <Biografia />
      </Element>
      <Element name="proyectos" style={{ marginBottom: '50px' }}>
        <FeaturedProjects />
      </Element>
      <Element name="contacto" style={{ marginBottom: '50px' }}>
        <Contacto />
      </Element>
    </div>
  );
}

export default App;
