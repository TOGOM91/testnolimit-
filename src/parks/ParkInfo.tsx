import { usePark } from '../utils/usePark';
import { motion, useInView } from 'framer-motion';
import { Clock, MapPin, Phone, Mail, Car, Bike, Shield, AlertCircle, Utensils, ShoppingBag, Droplets, Trees, Wifi, Accessibility, Info, ChevronDown, Sparkles, Zap } from 'lucide-react';
import { useRef } from 'react';

export function ParkInfo() {
  const park = usePark();
  if (!park) return null;

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
            alt="Infos pratiques"
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
            <Info className="size-4" style={{ color: '#eb700f' }} />
            <span className="text-white text-sm font-medium">Préparez votre visite</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
          >
            Infos{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #357600, #4a9d00)' }}>
                pratiques
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
            Tout ce qu'il faut savoir avant votre visite
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer"
          >
            <span className="text-xs uppercase tracking-wider">Découvrir</span>
            <ChevronDown className="size-5" />
          </motion.div>
        </motion.div>
      </section>

      
      {/* ========================================
          SECTION HORAIRES & ACCÈS
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Horaires */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2"
              style={{ borderColor: '#357600' }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#35760015' }}
                >
                  <Clock className="size-8" style={{ color: '#357600' }} />
                </motion.div>
                <h2 className="text-3xl font-black" style={{ color: '#111111' }}>
                  Horaires
                </h2>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl" style={{ backgroundColor: '#35760008' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#357600' }} />
                    <div className="font-black text-lg" style={{ color: '#111111' }}>
                      Haute saison
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm mb-2">Avril - Septembre</div>
                  <div className="text-2xl font-black" style={{ color: '#357600' }}>
                    9h00 - 19h00
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gray-50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-gray-400" />
                    <div className="font-black text-lg" style={{ color: '#111111' }}>
                      Basse saison
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm mb-2">Octobre - Mars</div>
                  <div className="text-2xl font-black text-gray-700">
                    10h00 - 17h00
                  </div>
                </div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 p-4 rounded-xl border-2"
                  style={{ borderColor: '#eb700f', backgroundColor: '#eb700f08' }}
                >
                  <AlertCircle className="size-6 flex-shrink-0 mt-0.5" style={{ color: '#eb700f' }} />
                  <div>
                    <div className="font-bold" style={{ color: '#eb700f' }}>
                      Important
                    </div>
                    <div className="text-gray-700 text-sm">
                      Fermé les lundis hors vacances scolaires
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Accès */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2"
              style={{ borderColor: '#eb700f' }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#eb700f15' }}
                >
                  <MapPin className="size-8" style={{ color: '#eb700f' }} />
                </motion.div>
                <h2 className="text-3xl font-black" style={{ color: '#111111' }}>
                  Accès
                </h2>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl" style={{ backgroundColor: '#eb700f08' }}>
                  <div className="font-bold text-lg mb-2" style={{ color: '#111111' }}>
                    📍 Adresse
                  </div>
                  <div className="text-gray-700">{park.location}</div>
                </div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#35760015' }}>
                    <Car className="size-6" style={{ color: '#357600' }} />
                  </div>
                  <div>
                    <div className="font-black text-gray-900 mb-1">En voiture</div>
                    <div className="text-gray-600 text-sm">
                      Parking gratuit sur place • 200 places
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#eb700f15' }}>
                    <Bike className="size-6" style={{ color: '#eb700f' }} />
                  </div>
                  <div>
                    <div className="font-black text-gray-900 mb-1">À vélo</div>
                    <div className="text-gray-600 text-sm">
                      Piste cyclable + stationnement vélos sécurisé
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      
      {/* ========================================
          SECTION ÉQUIPEMENTS - FOND NOIR
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
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-6 text-sm font-medium border border-white/20"
            >
              <Shield className="size-4" style={{ color: '#eb700f' }} />
              Services disponibles
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Sur{' '}
              <span style={{ color: '#eb700f' }}>place</span>
            </h2>
            <p className="text-white/80 text-lg">
              Tout le confort pour une journée parfaite
            </p>
          </motion.div>

          {/* Grille d'équipements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: 'Vestiaires', desc: 'Casiers sécurisés gratuits', color: '#357600' },
              { icon: Utensils, title: 'Restauration', desc: 'Snack et aire de pique-nique', color: '#eb700f' },
              { icon: ShoppingBag, title: 'Boutique', desc: 'Souvenirs et équipements', color: '#357600' },
              { icon: Droplets, title: 'Sanitaires', desc: 'WC et douches', color: '#eb700f' },
              { icon: Trees, title: 'Zone ombragée', desc: 'Espaces de détente', color: '#357600' },
              { icon: Wifi, title: 'WiFi gratuit', desc: 'Connexion illimitée', color: '#eb700f' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}30` }}
                >
                  <item.icon className="size-8" style={{ color: item.color }} />
                </motion.div>
                <h3 className="text-xl font-black text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* ========================================
          SECTION RÈGLEMENT & CONSEILS
          ======================================== */}
      <AnimatedSection className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Card règlement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 shadow-xl border-2"
              style={{ 
                borderColor: '#eb700f',
                background: 'linear-gradient(135deg, #eb700f08 0%, #eb700f03 100%)'
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#eb700f' }}
                >
                  <AlertCircle className="size-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-black" style={{ color: '#111111' }}>
                  À savoir avant votre visite
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: '👕', text: 'Tenue sportive et chaussures fermées obligatoires' },
                  { icon: '💍', text: 'Bijoux et objets de valeur à laisser en vestiaire' },
                  { icon: '👨‍👩‍👧', text: 'Mineurs accompagnés d\'un adulte responsable' },
                  { icon: '🌤️', text: 'Activités suspendues en cas de météo défavorable' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white"
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Encart sécurité */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-6 rounded-2xl bg-white border-2"
                style={{ borderColor: '#357600' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#35760015' }}>
                    <Shield className="size-6" style={{ color: '#357600' }} />
                  </div>
                  <h3 className="font-black text-lg" style={{ color: '#111111' }}>
                    Votre sécurité est notre priorité
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Tout notre matériel est conforme aux normes européennes et vérifié quotidiennement. 
                  Nos moniteurs sont tous diplômés d'État et formés aux premiers secours.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      
      {/* ========================================
          SECTION CTA
          ======================================== */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #357600 0%, #2d6100 50%, #357600 100%)' }}>
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
              <span className="text-white">Prêt à réserver ?</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Toutes les infos sont claires ?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Il ne vous reste plus qu'à réserver votre aventure !
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full hover:shadow-2xl transition-all font-bold text-white"
                style={{ backgroundColor: '#eb700f' }}
              >
                <Sparkles className="size-5" />
                Réserver maintenant
              </a>
            </motion.div>
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