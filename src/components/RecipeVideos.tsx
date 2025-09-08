import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const RecipeVideos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "Receita Matadora Para Cansaço",
      description: "Aprenda a preparar um energizante natural que combate o cansaço e fadiga",
      thumbnail: "https://i.imgur.com/2XaNx8k.png",
      videoUrl: "https://i.imgur.com/R4XdhG9.mp4"
    },
    {
      id: 2,
      title: "Remédio Caseiro para Insônia",
      description: "Descubra como preparar uma mistura natural que garante noites de sono tranquilo",
      thumbnail: "https://i.imgur.com/sheucwT.png",
      videoUrl: "https://i.imgur.com/xNuvkro.mp4"
    },
    {
      id: 3,
      title: "Receita Natural para Queda de Cabelo",
      description: "Veja como preparar um tratamento natural que fortalece e previne a queda capilar",
      thumbnail: "https://i.imgur.com/siysPpY.png",
      videoUrl: "https://i.imgur.com/kvG5AOq.mp4"
    },
    {
      id: 4,
      title: "Receita para Dores Articulares",
      description: "Aprenda a fazer um anti-inflamatório natural que alivia dores rapidamente",
      thumbnail: "https://i.imgur.com/0zfuOPw.png",
      videoUrl: "https://i.imgur.com/dRR0sj1.mp4"
    }
  ];

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section id="videos-receitas" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-natural-800 mb-4">
              Veja Como Preparar Algumas <span className="text-natural-600">Receitas Naturais</span>
            </h2>
            <p className="text-lg text-natural-700 max-w-2xl mx-auto">
              Assista a demonstrações práticas de como preparar remédios naturais eficazes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="group cursor-pointer" 
                data-video="true"
                onClick={() => {
                  setSelectedVideo(video.videoUrl);
                }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="text-natural-600 ml-1" size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-natural-800 mb-2 group-hover:text-natural-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-natural-700 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#oferta" 
                onClick={(e) => {
                  e.preventDefault();
                  const offersSection = document.getElementById('oferta');
                  if (offersSection) {
                    offersSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg animate-pulse"
              >
                🔥 Quero Acesso a Todas as Receitas
              </a>
              
              <a 
                href="#depoimentos" 
                onClick={(e) => {
                  e.preventDefault();
                  const nextSection = document.getElementById('depoimentos');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-block border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-lg"
              >
                Ver Depoimentos →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="aspect-video rounded-lg overflow-hidden">
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeVideos;