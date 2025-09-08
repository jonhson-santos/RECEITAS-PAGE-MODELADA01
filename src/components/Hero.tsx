import React, { useEffect, useRef } from 'react';
import { ArrowDown, BookOpen, Users, Award, Clock, Shield, Star } from 'lucide-react';

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
    const nextSection = document.getElementById('receitas-lista');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-16 pb-12 md:pt-20 md:pb-20 bg-gradient-to-b from-red-50 to-white overflow-hidden">
      {/* Background urgency elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 md:opacity-15">
        <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-red-200 rounded-l-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 md:w-1/3 h-full bg-orange-200 rounded-r-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Urgency Banner */}
          <div className="bg-red-600 text-white rounded-full px-6 py-3 mb-6 inline-block animate-pulse">
            <span className="font-bold">🔥 OFERTA LIMITADA: Apenas hoje com 90% de desconto!</span>
          </div>

          <h1 
            ref={headlineRef}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 opacity-0 transition-opacity duration-500 leading-tight"
          >
            <span className="text-red-600">PARE</span> de gastar R$ 200+ por mês em remédios!
            <br />
            <span className="text-natural-800">Cure-se com ingredientes de</span> <span className="text-green-600 underline">R$ 5 da sua cozinha</span>
          </h1>
          
          <p 
            ref={subheadlineRef}
            className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 opacity-0 transition-opacity duration-500 px-2 font-medium"
          >
            <span className="bg-yellow-200 px-2 py-1 rounded">27.000+ brasileiros</span> já economizaram milhares de reais tratando diabetes, insônia, ansiedade e +60 condições usando apenas <span className="font-bold text-green-700">ingredientes comuns da cozinha</span>
          </p>

          {/* Social Proof + Urgency */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl border-2 border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">R$ 2.847</div>
                <p className="text-gray-700 text-sm">Economia média por família/ano</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7 dias</div>
                <p className="text-gray-700 text-sm">Para ver os primeiros resultados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <p className="text-gray-700 text-sm">Aprovação dos usuários</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="text-yellow-500 fill-current" size={20} />
                <Star className="text-yellow-500 fill-current" size={20} />
                <Star className="text-yellow-500 fill-current" size={20} />
                <Star className="text-yellow-500 fill-current" size={20} />
                <Star className="text-yellow-500 fill-current" size={20} />
              </div>
              <p className="text-green-800 font-medium">
                "Em 3 semanas minha glicemia baixou de 180 para 120 usando apenas canela e limão!"
              </p>
              <p className="text-green-600 text-sm mt-1">- Maria Silva, 58 anos, São Paulo</p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">🎯 O que você vai descobrir HOJE:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm font-bold">✓</span>
                </div>
                <span>Como baixar diabetes em 21 dias com chá de canela especial</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm font-bold">✓</span>
                </div>
                <span>Receita secreta para dormir 8h sem remédio (funciona em 15 min)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm font-bold">✓</span>
                </div>
                <span>Como acabar com ansiedade usando apenas 2 ingredientes</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm font-bold">✓</span>
                </div>
                <span>+3.000 receitas para +60 problemas de saúde</span>
              </div>
            </div>
          </div>

          {/* Scarcity Timer */}
          <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4 mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="text-red-600" size={24} />
              <span className="font-bold text-red-600 text-lg">ATENÇÃO: Oferta expira em:</span>
            </div>
            <div className="text-2xl font-bold text-red-600">23:47:32</div>
            <p className="text-gray-700 text-sm mt-1">Depois volta para R$ 97,00</p>
          </div>
          
          <div 
            ref={ctaRef} 
            className="opacity-0 transition-all duration-500 space-y-6"
          >
            {/* Main CTA */}
            <div className="space-y-4">
              <a 
                href="#oferta" 
                onClick={handleScrollToOffers}
                className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xl md:text-2xl font-bold px-12 py-6 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 animate-pulse border-4 border-green-400"
              >
                🔥 SIM! QUERO ECONOMIZAR R$ 2.847 POR ANO
                <div className="text-sm font-normal mt-1">👇 Clique aqui e pague apenas R$ 9,99 (90% OFF)</div>
              </a>
              
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Shield size={16} className="text-green-600" />
                  <span>Garantia 7 dias</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-blue-600" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} className="text-purple-600" />
                  <span>+27k famílias</span>
                </div>
              </div>
            </div>
            
            {/* Secondary CTA */}
            <div className="flex justify-center">
              <a 
                href="#receitas-lista" 
                onClick={handleScrollToNext}
                className="inline-block border-2 border-gray-400 text-gray-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-base"
              >
                <ArrowDown size={16} className="inline mr-2" />
                Ver algumas receitas gratuitas primeiro
              </a>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm font-medium">
                ⚠️ <strong>ÚLTIMO AVISO:</strong> Apenas 47 vagas restantes com desconto de 90%. Depois volta ao preço normal de R$ 97,00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;