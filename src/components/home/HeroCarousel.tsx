// components/home/HeroCarousel.tsx
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroImage {
  url: string;
  title: string;
  subtitle: string;
}

interface HeroCarouselProps {
  images?: HeroImage[];
  autoPlayInterval?: number;
}

export function HeroCarousel({ 
  images: customImages, 
  autoPlayInterval = 5000 
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const defaultImages: HeroImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1630804261876-7e18e3a9c7aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      title: 'Tyrolienne géante',
      subtitle: 'Sensation de vol garantie'
    },
    {
      url: 'https://images.unsplash.com/photo-1653154138513-ed13199917e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      title: 'Accrobranche extrême',
      subtitle: 'Défis à la hauteur'
    },
    {
      url: 'https://images.unsplash.com/photo-1759872138838-45bd5c07ddc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      title: 'Paintball stratégique',
      subtitle: 'Adrénaline et esprit d\'équipe'
    }
  ];
  
  const images = customImages || defaultImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      {/* Images du carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
      </div>

      {/* Contrôles de navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label="Image précédente"
      >
        <ChevronLeft className="size-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label="Image suivante"
      >
        <ChevronRight className="size-6 text-white" />
      </button>

      {/* Indicateurs de position */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}