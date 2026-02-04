import { Outlet, NavLink, Link } from 'react-router-dom';
import { usePark } from '../utils/usePark';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Star, Calendar, Phone, Mail, Clock } from 'lucide-react';
import { useRef } from 'react';

export function ParkLayout() {
  const park = usePark();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  if (!park) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO avec parallax */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div 
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <img
            src={park.image}
            alt={park.name}
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl"
          style={{ backgroundColor: '#357600', opacity: 0.15 }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Badges */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <Star className="size-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-gray-900">{park.rating}</span>
                  <span className="text-sm text-gray-600">({park.reviewCount} avis)</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold"
                >
                  {park.activities.length} activités
                </motion.div>
              </div>

              <h1 className="text-6xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
                {park.name}
              </h1>

              <div className="flex items-center gap-2 text-white/90 mb-8">
                <MapPin className="size-5" />
                <span className="text-xl font-bold">{park.location}</span>
              </div>

              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-orange-500 px-6 py-3 rounded-xl"
                >
                  <span className="text-white font-black text-xl">Dès {park.minPrice}€</span>
                </motion.div>

                <Link to="/booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold"
                  >
                    Réserver
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NAV INTERNE sticky */}
      <nav className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto py-4 scrollbar-hide">
            {[
              { to: '', label: 'Accueil', end: true },
              { to: 'activities', label: 'Activités' },
              { to: 'prices', label: 'Tarifs' },
              { to: 'info', label: 'Infos pratiques' },
              { to: 'contact', label: 'Contact' }
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `font-bold text-sm whitespace-nowrap pb-1 transition-all ${
                    isActive
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-600 hover:text-green-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* CONTENU */}
      <Outlet />
    </div>
  );
}