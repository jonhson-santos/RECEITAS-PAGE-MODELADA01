import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NaturalRemediesList from './components/NaturalRemediesList';
import Gallery from './components/Gallery';
import KnowledgeSection from './components/KnowledgeSection';
import RecipeVideos from './components/RecipeVideos';
import Testimonials from './components/Testimonials';
import ScienceSection from './components/ScienceSection';
import Benefits from './components/Benefits';
import Product from './components/Product';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Clean scroll reveal implementation
    const handleScroll = () => {
      const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
      
      scrollRevealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <NaturalRemediesList />
        <Gallery />
        <KnowledgeSection />
        <RecipeVideos />
        <Testimonials />
        <ScienceSection />
        <Benefits />
        <Product />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;