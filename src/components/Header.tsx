import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-3 md:py-4'
      }`}
      style={{ position: 'fixed' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="text-natural-600 mr-2" size={24} />
          <span className="font-serif font-bold text-natural-800 text-lg md:text-xl">Farmácia Natural</span>
        </div>

        <nav className="hidden md:flex gap-4 lg:gap-6 items-center">
          <a href="#beneficios" className="text-natural-700 hover:text-natural-900 transition-colors text-sm lg:text-base">Benefícios</a>
          <a href="#depoimentos" className="text-natural-700 hover:text-natural-900 transition-colors text-sm lg:text-base">Depoimentos</a>
          <a href="#perguntas" className="text-natural-700 hover:text-natural-900 transition-colors text-sm lg:text-base">Dúvidas</a>
          <a 
            href="#oferta" 
            className="bg-natural-600 hover:bg-natural-700 text-white px-4 lg:px-5 py-2 rounded-full font-medium transition-colors shadow-md hover:shadow-lg text-sm lg:text-base"
          >
            Quero Receber Agora
          </a>
        </nav>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-natural-800 p-2 hover:bg-natural-50 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <a 
              href="#beneficios" 
              className="text-natural-700 py-2 border-b border-gray-100 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#depoimentos" 
              className="text-natural-700 py-2 border-b border-gray-100 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#perguntas" 
              className="text-natural-700 py-2 border-b border-gray-100 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Dúvidas
            </a>
            <a 
              href="#oferta" 
              className="bg-natural-600 text-white py-3 rounded-full font-medium text-center shadow-md text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Quero Receber Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;