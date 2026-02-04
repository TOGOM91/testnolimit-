import { useParams, Link } from 'react-router-dom';
import { activities } from '../data/activities';
import { parks } from '../data/parks';
import { 
  Clock, Users, AlertCircle, Calendar, CheckCircle, MapPin, Star, ArrowRight, 
  Shield
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ParkCard } from '../components/ParkCard';

export function ActivityDetailPage() {
  const { id } = useParams();
  const activity = activities.find((a) => a.id === id);
  const heroRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const scrollEffect = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.3;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };
    
    window.addEventListener('scroll', scrollEffect);
    return () => {
      window.removeEventListener('scroll', scrollEffect);
    };
  }, []);

  if (!activity) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center max-w-md mx-auto px-4">
          <AlertCircle className="size-20 text-gray-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Activité introuvable</h1>
          <Link 
            to="/activities" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-semibold"
          >
            Retour aux activités
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    );
  }

  const availableParks = parks.filter((park) =>
    park.activities.some((a) =>
      a.toLowerCase().includes(activity.name.toLowerCase().split(' ')[0])
    )
  );

  const difficultyConfig = {
    'Débutant': { color: 'bg-green-500', text: 'text-green-600', bg: 'bg-green-50' },
    'Intermédiaire': { color: 'bg-orange-500', text: 'text-orange-600', bg: 'bg-orange-50' },
    'Avancé': { color: 'bg-red-500', text: 'text-red-600', bg: 'bg-red-50' }
  };

  const config = difficultyConfig[activity.difficulty];
  const gallery = activity.gallery || [activity.image, activity.image, activity.image, activity.image];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero simplifié avec parallax */}
      <div className="relative h-[85vh] overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0"
        >
          <img
            src={activity.image}
            alt={activity.name}
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <span className={`${config.color} text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg`}>
                  {activity.difficulty}
                </span>
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="size-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-gray-900">4.9</span>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black text-white mb-8 drop-shadow-2xl">
                {activity.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="size-5" />
                  <span className="font-semibold">{activity.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Users className="size-5" />
                  <span className="font-semibold">Dès {activity.minAge} ans</span>
                </div>
                <div className="px-6 py-3 bg-orange-500 text-white rounded-xl font-black text-xl">
                  {activity.price}€
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Description */}
            <section className="bg-white rounded-3xl p-8 shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed">{activity.description}</p>
            </section>

            {/* Galerie photos */}
            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Photos</h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Grande image principale */}
                <div className="col-span-2 h-96 rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src={gallery[activeImage]} 
                    alt={`${activity.name} - Photo ${activeImage + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* 3 petites images */}
                {gallery.slice(1, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx + 1)}
                    className={`h-64 rounded-3xl overflow-hidden shadow-lg transition-all ${
                      activeImage === idx + 1 ? 'ring-4 ring-orange-500' : ''
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${activity.name} - Photo ${idx + 2}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                ))}
              </div>
            </section>

            {/* Inclus */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-black text-gray-900 mb-6">Inclus</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-6 text-green-600" />
                  <span className="font-semibold text-gray-800">Équipement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-6 text-green-600" />
                  <span className="font-semibold text-gray-800">Encadrement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-6 text-green-600" />
                  <span className="font-semibold text-gray-800">Assurance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-6 text-green-600" />
                  <span className="font-semibold text-gray-800">Briefing sécurité</span>
                </div>
              </div>
            </section>

            {/* Restrictions */}
            <section className="bg-orange-50 rounded-3xl p-8 shadow-lg border-2 border-orange-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <AlertCircle className="size-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-gray-900">Restrictions</h2>
              </div>
              <ul className="space-y-3">
                {activity.restrictions.map((restriction, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-800 font-medium">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    {restriction}
                  </li>
                ))}
              </ul>
            </section>

            {/* Parcs disponibles avec ParkCard */}
            <section>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Nos parcs ({availableParks.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {availableParks.map((park, index) => (
                  <ParkCard key={park.id} park={park} index={index} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Card réservation */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="text-gray-600 text-sm mb-2">À partir de</div>
                  <div className="text-6xl font-black text-gray-900 mb-1">{activity.price}€</div>
                  <div className="text-gray-500 text-sm">par personne</div>
                </div>

                <Link
                  to="/booking"
                  state={{ activityId: activity.id }}
                  className="block w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl text-center font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all hover:scale-105 shadow-xl mb-6"
                >
                  Réserver maintenant
                </Link>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Calendar className="size-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Dispo immédiate</div>
                      <div className="text-sm text-gray-600">Confirmation instant</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Shield className="size-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Annulation gratuite</div>
                      <div className="text-sm text-gray-600">Jusqu'à 48h avant</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats compactes */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-black text-gray-900">98%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-gray-900">15K+</div>
                    <div className="text-xs text-gray-600">Participants</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-gray-900">4.9</div>
                    <div className="text-xs text-gray-600">Note moyenne</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-gray-900">100%</div>
                    <div className="text-xs text-gray-600">Sécurisé</div>
                  </div>
                </div>
              </div>

              {/* Contact minimaliste */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white shadow-xl">
                <h3 className="text-xl font-black mb-3">Des questions ?</h3>
                <p className="text-sm text-white/90 mb-4">On répond en 2h max</p>
                <button className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all">
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}