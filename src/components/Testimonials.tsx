import React, { useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      age: 58,
      location: "São Paulo, SP",
      image: "https://i.pinimg.com/1200x/4c/eb/85/4ceb85b3066d28a976fc51dc75cfc763.jpg",
      quote: "Em 3 semanas seguindo as receitas do chá para diabetes, minha glicemia reduziu de 180 para 120. Meu médico ficou impressionado!",
      condition: "Diabetes Tipo 2",
      rating: 5
    },
    {
      id: 2,
      name: "João Pereira",
      age: 45,
      location: "Belo Horizonte, MG", 
      image: "https://i.pinimg.com/736x/d7/45/49/d7454953e338e985810634f4c30b8f20.jpg",
      quote: "Sofria com insônia há anos. Desde que comecei a preparar a mistura natural antes de dormir, consigo ter 7 horas de sono tranquilo.",
      condition: "Insônia Crônica",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Costa", 
      age: 52,
      location: "Rio de Janeiro, RJ",
      image: "https://i.pinimg.com/736x/be/78/24/be7824a79d2a9a94dea3bc2dc1141873.jpg",
      quote: "Depois de 2 meses usando as receitas para ansiedade, consegui reduzir minhas crises e retomar o controle da minha vida.",
      condition: "Ansiedade",
      rating: 5
    }
  ];

  const carouselImages = [
    "https://ervasmedicinaisonline.shop/wp-content/uploads/2025/06/AnyConv.com__depoimento04.webp",
    "https://ervasmedicinaisonline.shop/wp-content/uploads/2025/06/AnyConv.com__depoimento06.webp",
    "https://ervasmedicinaisonline.shop/wp-content/uploads/2025/06/AnyConv.com__depoimento01-1.webp"
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    testimonialRefs.current.forEach((testimonial) => {
      if (testimonial) observer.observe(testimonial);
    });

    return () => {
      testimonialRefs.current.forEach((testimonial) => {
        if (testimonial) observer.unobserve(testimonial);
      });
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
    const nextSection = document.getElementById('produto');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="depoimentos" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-3 md:mb-4 leading-tight">
            Depoimentos Reais de <span className="text-natural-600">Transformação</span>
          </h2>
          <p className="text-base md:text-lg text-natural-700 max-w-2xl mx-auto px-2">
            Depoimentos reais de pessoas que recuperaram sua saúde com nossas receitas naturais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              ref={el => testimonialRefs.current[index] = el}
              className="opacity-0 transition-opacity duration-700 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-natural-800">{testimonial.name}</h4>
                  <p className="text-natural-600 text-sm">{testimonial.age} anos, {testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-natural-200" size={24} />
                <p className="text-natural-700 italic mb-3 pl-4">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="bg-natural-50 rounded-lg p-3">
                <span className="text-natural-600 text-sm font-medium">Condição tratada:</span>
                <span className="text-natural-800 font-bold ml-2">{testimonial.condition}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carrossel de Depoimentos */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-center text-xl md:text-2xl font-bold text-natural-800 mb-6">
            Mais Depoimentos de Transformação
          </h3>
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img 
                      src={image} 
                      alt={`Depoimento ${index + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicadores */}
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-natural-600' : 'bg-natural-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center bg-natural-50 rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 max-w-2xl mx-auto border border-natural-100 shadow-sm md:shadow-md">
          {/* Garantia movida para baixo */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">30 Dias de Garantia Total</h3>
                  <p className="text-green-100">Se não funcionar, devolvemos 100% do seu dinheiro</p>
                </div>
              </div>
              <p className="text-lg text-green-100">
                Estamos tão confiantes que nossas receitas vão transformar sua saúde, 
                que oferecemos garantia total. Sem riscos para você!
              </p>
            </div>
          </div>
          
          <p className="text-base md:text-lg text-natural-800 mb-3 md:mb-4">
            Você também pode transformar sua saúde com ingredientes simples da sua cozinha
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#oferta" 
              onClick={handleScrollToOffers}
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg animate-pulse"
            >
              🔥 Quero Começar Minha Transformação
            </a>
            
            <a 
              href="#produto" 
              onClick={handleScrollToNext}
              className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
            >
              <ArrowDown size={16} className="inline mr-2" />
              Ver Mais Detalhes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;