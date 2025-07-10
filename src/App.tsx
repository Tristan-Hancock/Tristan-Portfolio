import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ventures from './components/Ventures';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <Ventures />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;