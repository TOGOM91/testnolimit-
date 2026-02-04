import { usePark } from '../utils/usePark';
import { motion } from 'framer-motion';
import { CheckCircle, Users, MapPin, Star, Calendar, Shield, ArrowRight, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { activities } from '../data/activities';

export function ParkHome() {
  const park = usePark();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  if (!park) return null;

  // Récupérer les activités du parc qui correspondent aux activités disponibles
  const parkActivitiesDetails = activities.filter(activity => 
    park.activities.some(parkActivity => 
      parkActivity.toLowerCase().includes(activity.name.toLowerCase().split(' ')[0])
    )
  );

  // Galerie d'images
  const gallery = [park.image, park.image, park.image, park.image];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h2 className="text-4xl font-black mb-6" style={{ color: '#111111' }}>
                Bienvenue au parc
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {park.description}
              </p>
              
              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3">
                {park.highlights.map((highlight, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Section Activités - EXACTEMENT COMME LA HOME PAGE */}
            <section className="relative py-12 overflow-hidden rounded-3xl" style={{ backgroundColor: '#111111' }}>
              {/* Pattern de grille */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 0 L 100 0 L 100 1 L 0 1 Z M 0 0 L 0 100 L 1 100 L 1 0 Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
                  backgroundSize: '50px 50px'
                }}
              />

              {/* Glow effects */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
                style={{ backgroundColor: '#357600', opacity: 0.15 }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10 px-8">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-4 text-sm font-medium border border-white/20"
                  >
                    <Zap className="size-4" style={{ color: '#eb700f' }} />
                    Nos activités
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                    Découvrez nos{' '}
                    <span className="relative inline-block" style={{ color: '#eb700f' }}>
                      activités
                      <motion.span
                        className="absolute bottom-1 left-0 right-0 h-3 -z-10 blur-sm"
                        style={{ backgroundColor: 'rgba(235, 112, 15, 0.3)' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </span>
                  </h2>
                </motion.div>

                {/* Grid d'activités rondes */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                  {parkActivitiesDetails.map((activity, index) => (
                    <Link
                      key={activity.id}
                      to={`/activity/${activity.id}`}
                      className="block"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        onClick={() => setSelectedActivity(activity.id)}
                        className="group relative cursor-pointer"
                      >
                        {/* Card ronde */}
                        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 transition-all">
                          {/* Image de fond */}
                          <div className="absolute inset-0">
                            <img
                              src={activity.image}
                              alt={activity.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/40 via-[#111111]/60 to-[#111111]/80" />
                          </div>

                          {/* Contenu centré */}
                          <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
                            <h3 className="text-lg font-black text-white mb-2">
                              {activity.name}
                            </h3>

                            {/* Badges */}
                            <div className="flex gap-2 flex-wrap justify-center">
                              <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/30">
                                {activity.difficulty}
                              </span>
                              <span className="px-2 py-1 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/30" style={{ backgroundColor: 'rgba(53, 118, 0, 0.3)' }}>
                                {activity.minAge}+ ans
                              </span>
                            </div>
                          </div>

                          {/* Hover overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md"
                            style={{ background: 'linear-gradient(135deg, rgba(53, 118, 0, 0.85), rgba(74, 157, 0, 0.85))' }}
                          >
                            <span className="text-white font-bold text-base flex items-center gap-2">
                              En savoir plus
                              <ArrowRight className="size-4" />
                            </span>
                          </motion.div>
                        </div>

                        {/* Glow effect */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 0.4 }}
                          className="absolute -inset-1 rounded-full blur-xl -z-10"
                          style={{ background: 'linear-gradient(to right, #357600, #eb700f)' }}
                        />
                      </motion.div>
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to="activities"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full hover:shadow-2xl transition-all font-bold"
                    style={{ color: '#111111' }}
                  >
                    <span>Voir toutes les activités</span>
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* Galerie photos */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-black" style={{ color: '#111111' }}>
                  Galerie
                </h2>
                <div className="flex gap-2">
                  {gallery.map((_, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.3 }}
                      onClick={() => setActiveImage(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${activeImage === idx ? 'bg-orange-500 scale-125' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Grande image */}
                <motion.div 
                  className="col-span-2 h-96 rounded-3xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src={gallery[activeImage]} 
                    alt={park.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>

                {/* 2 petites images */}
                {gallery.slice(1, 3).map((img, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveImage(idx + 1)}
                    className={`h-48 rounded-3xl overflow-hidden shadow-lg transition-all ${
                      activeImage === idx + 1 ? 'ring-4 ring-orange-500' : ''
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={park.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.section>

            {/* Infos pratiques */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-black text-gray-900 mb-6">Infos pratiques</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="size-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Horaires</div>
                    <div className="text-gray-600 text-sm">9h00 - 18h00</div>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="size-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Adresse</div>
                    <div className="text-gray-600 text-sm">{park.location}</div>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="size-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Capacité</div>
                    <div className="text-gray-600 text-sm">Jusqu'à {park.capacity} personnes</div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              
              {/* Card réservation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 shadow-2xl"
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-black text-gray-900 text-xl">{park.rating}</span>
                  <span className="text-gray-600 text-sm">({park.reviewCount} avis)</span>
                </div>

                <div className="text-center mb-8">
                  <div className="text-gray-600 text-sm mb-2">À partir de</div>
                  <div className="text-6xl font-black text-gray-900 mb-1">{park.minPrice}€</div>
                  <div className="text-gray-500 text-sm">par personne</div>
                </div>

                <Link to="/booking" state={{ parkId: park.id }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-xl mb-6"
                  >
                    Réserver maintenant
                  </motion.button>
                </Link>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Calendar className="size-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Dispo immédiate</div>
                      <div className="text-sm text-gray-600">Confirmation instantanée</div>
                    </div>
                  </motion.div>
                  
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Shield className="size-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Annulation gratuite</div>
                      <div className="text-sm text-gray-600">Jusqu'à 48h avant</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white shadow-xl"
              >
                <h3 className="text-xl font-black mb-3">Une question ?</h3>
                <p className="text-sm text-white/90 mb-4">Notre équipe répond en 2h</p>
                <Link to="contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold"
                  >
                    Nous contacter
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}