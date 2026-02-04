import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const difficultyColors = {
    'Débutant': 'bg-green-100 text-green-700',
    'Intermédiaire': 'bg-orange-100 text-orange-700',
    'Avancé': 'bg-red-100 text-red-700'
  };

  return (
    <Link to={`/activity/${activity.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={activity.image}
            alt={activity.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Difficulty Badge */}
          <div className={`absolute top-4 right-4 ${difficultyColors[activity.difficulty]} rounded-full px-4 py-2 shadow-lg`}>
            <span className="text-sm">{activity.difficulty}</span>
          </div>

          {/* Price Badge */}
          <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 shadow-lg">
            <span className="text-sm text-gray-600">À partir de </span>
            <span className="text-green-700">{activity.price}€</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-green-800 mb-3 group-hover:text-green-600 transition-colors">
            {activity.name}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-2">
            {activity.description}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="size-4 text-orange-500" />
              <span>{activity.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="size-4 text-green-600" />
              <span>Dès {activity.minAge} ans</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-green-700 group-hover:text-green-600 transition-colors">
              En savoir plus
            </span>
            <ArrowRight className="size-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
