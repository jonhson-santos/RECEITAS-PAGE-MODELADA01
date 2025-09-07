import React, { useState } from 'react';
import { Play } from 'lucide-react';

const Video: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoId = "YqhcwFFFAN0";
  
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="aspect-video rounded-xl md:rounded-2xl shadow-lg md:shadow-xl bg-natural-900 relative group overflow-hidden">
        {!videoLoaded ? (
          <div 
            className="absolute inset-0 bg-gradient-to-br from-natural-600 to-natural-800 flex items-center justify-center cursor-pointer"
            onClick={() => setVideoLoaded(true)}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-105 group-active:scale-95">
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-natural-600 flex items-center justify-center shadow-lg">
                <Play fill="white" size={20} className="text-white ml-0.5 md:ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white p-3 md:p-4 lg:p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-medium text-sm md:text-base">Assista como estas receitas naturais estão transformando vidas</p>
            </div>
          </div>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
      
      <div className="mt-3 md:mt-4 text-center">
        <p className="text-natural-700 font-medium text-sm md:text-base">
          ⭐ Mais de 27.000 brasileiros já assistiram este vídeo
        </p>
      </div>
    </div>
  );
};

export default Video;