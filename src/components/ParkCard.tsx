// components/ParkCard.tsx
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Park } from '../types';
import { motion } from 'framer-motion';

interface ParkCardProps {
  park: Park;
  compact?: boolean;
  index?: number;
}

// Fonction helper pour obtenir l'emoji d'une activité
const getActivityIcon = (activity: string): string => {
  const iconMap: Record<string, string> = {
    'Accrobranche': '🌳',
    'Tyrolienne': '⚡',
    'Tyrolienne 300m': '⚡',
    'Paintball': '🎯',
    'Parcours filet': '🕸️',
    "Tir à l'arc": '🏹',
    'Archery Tag': '🏹',
    'Escape Game': '🔐',
    'Parcours extrême': '🔥',
    'Orientation': '🧭',
    'Chasse au trésor': '🗺️',
    'Parcours Kids': '👶',
    'Animations pédagogiques': '📚'
  };
  return iconMap[activity] || '🎯';
};

export function ParkCard({ park, compact = false, index = 0 }: ParkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <Link to={`/park/${park.id}`} className="group block h-full">
        <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg">
          {/* Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={park.image}
              alt={park.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Rating Badge */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-lg">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              <span className="font-black text-gray-900">{park.rating}</span>
            </div>

            {/* Contenu en bas */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-4xl font-black text-white mb-2 drop-shadow-2xl">
                {park.name}
              </h3>
              <div className="flex items-center gap-2 text-white/90 mb-4">
                <MapPin className="size-5" />
                <span className="font-bold text-lg">{park.location.split(',')[0]}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-500 px-6 py-3 rounded-xl shadow-xl">
                <span className="text-white font-black text-xl">Dès {park.minPrice}€</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6">
            {/* Tags activités */}
            <div className="flex flex-wrap gap-2">
              {park.activities.slice(0, 3).map((activity) => (
                <span
                  key={activity}
                  className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-bold"
                >
                  {activity}
                </span>
              ))}
              {park.activities.length > 3 && (
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold">
                  +{park.activities.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
