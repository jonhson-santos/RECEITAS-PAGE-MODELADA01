import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KnowledgeSection from './components/KnowledgeSection';
import ScienceSection from './components/ScienceSection';
import NaturalRemediesList from './components/NaturalRemediesList';
import RecipeVideos from './components/RecipeVideos';
import Gallery from './components/Gallery';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Product from './components/Product';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
      
      scrollRevealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.9) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    handleScroll(); // Initial check for elements in viewport
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main className="pt-16">
        <Hero />
        <KnowledgeSection />
        <NaturalRemediesList />
        <RecipeVideos />
        <ScienceSection />
        <Gallery />
        <Benefits />
        <Testimonials />
        <Product />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;