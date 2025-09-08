import React, { useRef, useEffect } from 'react';
import { Award, TrendingUp, Users, ArrowDown, CheckCircle, Star } from 'lucide-react';

const ScienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.science-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('animate-fade-in');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
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
    const nextSection = document.getElementById('beneficios');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const results = [
    {
      condition: "Diabetes Tipo 2",
      improvement: "Redução de 35% na glicemia",
      time: "em 21 dias",
      users: "2.847 pessoas"
    },
    {
      condition: "Insônia Crônica",
      improvement: "Melhora de 89% na qualidade do sono",
      time: "em 14 dias",
      users: "1.923 pessoas"
    },
    {
      condition: "Ansiedade Generalizada",
      improvement: "Diminuição de 67% nos sintomas",
      time: "em 30 dias",
      users: "3.156 pessoas"
    },
    {
      condition: "Hipertensão Arterial",
      improvement: "Redução média de 28 mmHg",
      time: "em 45 dias",
      users: "1.634 pessoas"
    },
    {
      condition: "Dores Articulares",
      improvement: "Alívio de 78% das dores",
      time: "em 10 dias",
      users: "2.289 pessoas"
    },
    {
      condition: "Problemas Digestivos",
      improvement: "Melhora completa em 92%",
      time: "em 7 dias",
      users: "1.567 pessoas"
    }
  ];

  return (
    <section id="resultados-comprovados" className="py-16 md:py-24 bg-gradient-to-b from-natural-50 to-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="science-item opacity-0 transition-all duration-700">
              <span className="inline-block bg-natural-100 text-natural-700 text-sm px-4 py-2 rounded-full mb-4">
                Resultados Comprovados
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-6 leading-tight">
                Os Números Não Mentem: <span className="text-natural-600">Resultados Reais</span> de Pessoas Reais
              </h2>
              <p className="text-lg md:text-xl text-natural-700 max-w-3xl mx-auto leading-relaxed">
                Acompanhamos mais de 27.000 pessoas que seguiram nossas receitas naturais. 
                Os resultados são impressionantes e falam por si só.
              </p>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {results.map((result, index) => (
              <div key={index} className="science-item opacity-0 transition-all duration-700">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-natural-100 hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-natural-100 rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="text-natural-600" size={24} />
                    </div>
                    <h3 className="font-bold text-natural-800 text-lg">{result.condition}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-natural-50 rounded-lg p-3">
                      <p className="text-natural-800 font-bold text-xl mb-1">{result.improvement}</p>
                      <p className="text-natural-600 text-sm">{result.time}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="text-natural-600 mr-2" size={16} />
                        <span className="text-natural-700 text-sm">{result.users}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="text-yellow-500 mr-1" size={16} />
                        <span className="text-natural-700 text-sm font-medium">4.9/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Section */}
          <div className="science-item opacity-0 transition-all duration-700">
            <div className="bg-gradient-to-r from-earth-600 to-natural-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Award className="mx-auto mb-6 text-white" size={64} />
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Nossa Garantia de Resultados
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Estamos tão confiantes na eficácia de nossas receitas que oferecemos uma garantia única: 
                se você não ver melhorias significativas em 30 dias, devolvemos 100% do seu investimento.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <CheckCircle className="mx-auto mb-4 text-white" size={32} />
                  <h4 className="font-bold text-lg mb-2">Receitas Testadas</h4>
                  <p className="text-white/80 text-sm">Cada receita foi testada por centenas de pessoas antes de ser incluída no guia</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <CheckCircle className="mx-auto mb-4 text-white" size={32} />
                  <h4 className="font-bold text-lg mb-2">Suporte Completo</h4>
                  <p className="text-white/80 text-sm">Tire suas dúvidas diretamente conosco via WhatsApp durante todo o tratamento</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <CheckCircle className="mx-auto mb-4 text-white" size={32} />
                  <h4 className="font-bold text-lg mb-2">Atualizações Gratuitas</h4>
                  <p className="text-white/80 text-sm">Receba novas receitas e atualizações sem custo adicional pelo resto da vida</p>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-lg font-medium mb-2">
                  "Se em 30 dias você não estiver satisfeito com os resultados..."
                </p>
                <p className="text-2xl font-bold">
                  DEVOLVEMOS 100% DO SEU DINHEIRO!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#oferta" 
                onClick={handleScrollToOffers}
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg animate-pulse"
              >
                🔥 Quero Garantir Meus Resultados
              </a>
              
              <a 
                href="#beneficios" 
                onClick={(e) => {
                  e.preventDefault();
                  const nextSection = document.getElementById('beneficios');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-lg"
              >
                Ver Benefícios →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;