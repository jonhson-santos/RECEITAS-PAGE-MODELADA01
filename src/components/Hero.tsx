import React, { useEffect, useRef } from 'react';
import { ArrowDown, BookOpen, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { ref: headlineRef, delay: 0 },
      { ref: subheadlineRef, delay: 200 },
      { ref: ctaRef, delay: 400 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('animate-fade-in');
        }, delay);
      }
    });
  }, []);

  const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offersSection = document.getElementById('oferta');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('conhecimento');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-16 pb-12 md:pt-20 md:pb-20 bg-gradient-to-b from-natural-50 to-white overflow-hidden">
      {/* Simplified background for mobile */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 md:opacity-15">
        <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-natural-200 rounded-l-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 md:w-1/3 h-full bg-earth-200 rounded-r-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={headlineRef}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-natural-900 mb-4 md:mb-6 opacity-0 transition-opacity duration-500 leading-tight"
          >
            Você está tratando <span className="text-natural-600">sintomas</span>... enquanto a verdadeira solução está <span className="text-earth-700">esquecida na sua cozinha</span>
          </h1>
          
          <p 
            ref={subheadlineRef}
            className="text-base md:text-lg lg:text-xl text-natural-800 mb-6 md:mb-8 opacity-0 transition-opacity duration-500 px-2"
          >
            Descubra o guia natural que já ajudou milhares de brasileiros a dormir melhor, controlar o açúcar no sangue, reduzir a ansiedade e muito mais — com ingredientes que você já tem em casa.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md border border-natural-100">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-natural-600 mr-2" size={24} />
                <span className="text-2xl md:text-3xl font-bold text-natural-800">27k+</span>
              </div>
              <p className="text-natural-700 text-sm md:text-base">Famílias Transformadas</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md border border-natural-100">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="text-natural-600 mr-2" size={24} />
                <span className="text-2xl md:text-3xl font-bold text-natural-800">3000+</span>
              </div>
              <p className="text-natural-700 text-sm md:text-base">Receitas Naturais</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md border border-natural-100">
              <div className="flex items-center justify-center mb-2">
                <Award className="text-natural-600 mr-2" size={24} />
                <span className="text-2xl md:text-3xl font-bold text-natural-800">98%</span>
              </div>
              <p className="text-natural-700 text-sm md:text-base">Satisfação</p>
            </div>
          </div>
          
          <div 
            ref={ctaRef} 
            className="opacity-0 transition-all duration-500 space-y-4"
          >
            {/* Selo de Garantia */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-natural-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-natural-800 font-medium text-sm">7 dias de garantia total</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="#oferta" 
                onClick={handleScrollToOffers}
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base md:text-lg font-bold px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 animate-pulse"
              >
                🔥 Quero Meu Guia Agora
              </a>
            </div>
            
            <div className="flex justify-center mt-4">
              <a 
                href="#conhecimento" 
                onClick={handleScrollToNext}
                className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-base"
              >
                ✨ Ver Como Funciona
              </a>
            </div>
            
            <p className="text-natural-600 text-sm">
              + de 27.000 famílias já estão utilizando estes remédios naturais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;