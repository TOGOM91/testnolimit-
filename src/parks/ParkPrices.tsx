import { usePark } from '../utils/usePark';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Users, Clock, Shield, Gift, Calendar, Sparkles, ArrowRight, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export function ParkPrices() {
  const park = usePark();
  if (!park) return null;

  const pricingOptions = [
    {
      name: 'Individuel',
      price: park.minPrice,
      description: 'Parfait pour une personne',
      features: ['Accès à toutes les activités', 'Équipement inclus', 'Encadrement professionnel', 'Assurance comprise'],
      popular: false,
      icon: '🧗',
      color: '#357600'
    },
    {
      name: 'Groupe (5-10 pers)',
      price: park.minPrice - 5,
      description: 'Idéal entre amis',
      features: ['Accès à toutes les activités', 'Équipement inclus', 'Encadrement professionnel', 'Réduction groupe', 'Photo souvenir offerte'],
      popular: true,
      icon: '👥',
      color: '#eb700f'
    },
    {
      name: 'Entreprise',
      price: 'Sur devis',
      description: 'Team building sur mesure',
      features: ['Programme personnalisé', 'Équipement inclus', 'Encadrement dédié', 'Forfait restauration possible', 'Salle de réunion'],
      popular: false,
      icon: '🏢',
      color: '#357600'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-white">
      
      {/* ========================================
          SECTION HERO
          ======================================== */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src={park.image}
            alt="Tarifs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/70 via-[#111111]/50 to-[#111111]/80" />
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl"
          style={{ backgroundColor: '#357600', opacity: 0.2 }}
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
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full blur-3xl"
          style={{ backgroundColor: '#eb700f', opacity: 0.2 }}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Contenu */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-6"
          >
            <Gift className="size-4" style={{ color: '#eb700f' }} />
            <span className="text-white text-sm font-medium">Tarifs transparents</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
          >
            Nos{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #357600, #4a9d00)' }}>
                tarifs
              </span>
              <motion.span
                className="absolute inset-0 blur-xl"
                style={{ background: 'linear-gradient(to right, rgba(53, 118, 0, 0.4), rgba(74, 157, 0, 0.4))' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Des formules adaptées à tous vos besoins
          </motion.p>
        </div>
      </section>

      
      {/* ========================================
          SECTION CARTES DE TARIFS
          ======================================== */}
      <AnimatedSection className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        {/* Pattern subtil */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23111111' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-2xl"
          style={{ backgroundColor: '#357600', opacity: 0.08 }}
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-40 h-40 rounded-full blur-2xl"
          style={{ backgroundColor: '#eb700f', opacity: 0.08 }}
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingOptions.map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: "spring" }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative group"
              >
                {/* Badge populaire */}
                {option.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: idx * 0.15 + 0.3 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg"
                    style={{ background: 'linear-gradient(to right, #eb700f, #d66310)' }}
                  >
                    <Sparkles className="size-4 inline mr-1" />
                    Le plus populaire
                  </motion.div>
                )}

                {/* Card */}
                <div 
                  className={`relative bg-white rounded-3xl p-8 shadow-lg transition-all ${
                    option.popular ? 'ring-4' : 'border-2 border-gray-100'
                  }`}
                  style={option.popular ? { borderColor: '#eb700f' } : {}}
                >
                  {/* Icône et nom */}
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-6xl mb-4"
                    >
                      {option.icon}
                    </motion.div>
                    <h3 className="text-2xl font-black mb-2" style={{ color: '#111111' }}>
                      {option.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </div>

                  {/* Prix */}
                  <div className="text-center mb-8 py-6 rounded-2xl" style={{ backgroundColor: `${option.color}08` }}>
                    <div className="text-5xl font-black mb-1" style={{ color: option.color }}>
                      {typeof option.price === 'number' ? `${option.price}€` : option.price}
                    </div>
                    {typeof option.price === 'number' && (
                      <div className="text-gray-500 text-sm font-medium">par personne</div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, featureIdx) => (
                      <motion.li
                        key={featureIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + featureIdx * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${option.color}20` }}>
                          <CheckCircle className="size-4" style={{ color: option.color }} />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bouton */}
                  <Link to="/booking" state={{ parkId: park.id }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                        option.popular
                          ? 'text-white shadow-xl'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                      style={option.popular ? { 
                        background: 'linear-gradient(to right, #eb700f, #d66310)' 
                      } : {}}
                    >
                      Réserver maintenant
                      <ArrowRight className="size-5" />
                    </motion.button>
                  </Link>
                </div>

                {/* Glow effect au hover pour carte populaire */}
                {option.popular && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    className="absolute -inset-1 rounded-3xl blur-xl -z-10"
                    style={{ backgroundColor: '#eb700f' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      
      {/* ========================================
          SECTION BON À SAVOIR - FOND NOIR
          ======================================== */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#111111' }}>
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
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl"
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
        <motion.div
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#eb700f', opacity: 0.15 }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-6 text-sm font-medium border border-white/20"
              >
                <Shield className="size-4" style={{ color: '#eb700f' }} />
                Informations importantes
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Bon à{' '}
                <span style={{ color: '#eb700f' }}>savoir</span>
              </h2>
              <p className="text-white/80 text-lg">
                Toutes les informations pratiques pour votre visite
              </p>
            </div>

            {/* Grille d'infos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Clock,
                  title: 'Annulation gratuite',
                  desc: 'Jusqu\'à 48h avant votre venue',
                  color: '#357600'
                },
                {
                  icon: Users,
                  title: 'Tarifs dégressifs',
                  desc: 'À partir de 10 personnes',
                  color: '#eb700f'
                },
                {
                  icon: Shield,
                  title: 'Assurance incluse',
                  desc: 'Couverture complète pendant l\'activité',
                  color: '#357600'
                },
                {
                  icon: Calendar,
                  title: 'Réservation flexible',
                  desc: 'Modifiez vos dates jusqu\'à 7 jours avant',
                  color: '#eb700f'
                },
                {
                  icon: Gift,
                  title: 'Carte cadeau',
                  desc: 'Offrez une expérience inoubliable',
                  color: '#357600'
                },
                {
                  icon: Star,
                  title: 'Programme fidélité',
                  desc: '-10% dès la 3ème réservation',
                  color: '#eb700f'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                  whileHover={{ x: 5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}30` }}
                    >
                      <item.icon className="size-7" style={{ color: item.color }} />
                    </motion.div>
                    <div>
                      <h4 className="font-black text-white mb-2 text-lg">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      
      {/* ========================================
          SECTION CTA FINALE
          ======================================== */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #357600 0%, #2d6100 50%, #357600 100%)' }}>
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: '#eb700f' }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -60, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-sm font-medium border border-white/30"
            >
              <Zap className="size-4" />
              <span className="text-white">Une question sur nos tarifs ?</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Besoin d'un devis personnalisé ?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Notre équipe vous répond en moins de 2h pour créer l'offre parfaite
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full hover:shadow-2xl transition-all font-bold text-white relative overflow-hidden"
                  style={{ backgroundColor: '#eb700f' }}
                >
                  <motion.span
                    className="absolute inset-0"
                    style={{ backgroundColor: '#d66310' }}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <Calendar className="size-5 relative z-10" />
                  <span className="relative z-10">Réserver maintenant</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full hover:bg-white/20 transition-all font-bold"
                >
                  Demander un devis
                  <ArrowRight className="size-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ========================================
// COMPOSANT HELPER: Section animée
// ========================================
function AnimatedSection({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}