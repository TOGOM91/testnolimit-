// pages/HomePage.tsx - VERSION FINALE AVEC COULEURS NOLIMIT
import { Link } from 'react-router-dom';
import { Calendar, Mail, Play, MapPin, Sparkles, ChevronDown, Zap, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { ParksList } from '../components/ParkList';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { MainMenu } from '../components/home/MainMenu';
import { AncrageMenu } from '../components/home/AncrageMenu';
import { PourQuiSection } from '../components/home/PourQuiSection';
import { ActualitesSection } from '../components/home/ActualitesSection';
import { activities } from '../data/activities';

export function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        setMousePosition({
          x: (clientX - innerWidth / 2) / 50,
          y: (clientY - innerHeight / 2) / 50,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-white">
      {/* MENU ANCRAGE - UNIQUEMENT PAGE ACCUEIL - Ne pas répliquer sur autres pages */}
      <AncrageMenu />

      {/* ========================================
          SECTION 1: HERO IMMERSIF AVEC PARALLAX
          ======================================== */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Carrousel avec overlay gradient dynamique */}
        <div className="absolute inset-0">
          <HeroCarousel />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 via-[#111111]/30 to-[#111111]/70" />
        </div>

        {/* Floating elements avec couleurs NoLimit */}
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
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full blur-3xl"
          style={{ backgroundColor: '#eb700f', opacity: 0.15 }}
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

        {/* Contenu principal avec parallax */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
         

          {/* Titre avec animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl"
          >
            L'aventure vous{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #357600, #4a9d00)' }}>
                appelle
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
      
          </motion.div>

           {/* Badge animé */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-6 mt-6"
          >
            <Sparkles className="size-4" style={{ color: '#eb700f' }} />
            <span className="text-white text-sm font-medium">L'aventure commence ici</span>
          </motion.div>
        </motion.div>

        

        {/* Bouton vidéo avec animation pulse */}
        <motion.div 
          className="absolute bottom-8 right-8 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          {!isVideoPlaying ? (
            <motion.button
              onClick={() => setIsVideoPlaying(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all border border-white/20"
            >
              <motion.div 
                className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
                <Play className="size-6 ml-1 relative z-10" style={{ color: '#357600' }} />
              </motion.div>
              <div className="text-left">
                <div className="font-bold">Voir la vidéo</div>
                <div className="text-sm opacity-80">Découvrez l'expérience</div>
              </div>
            </motion.button>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-96 h-64 rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: '#111111' }}
            >
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                onPause={() => setIsVideoPlaying(false)}
                onEnded={() => setIsVideoPlaying(false)}
              >
                <source src="https://www.youtube.com/watch?v=VT2qF97pQNw&list=RDCLAK5uy_mfyL5_q5gAnd-5w7ZgcAqU_-okvlcOA-c&index=2" />
              </video>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll indicator animé */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          
        </motion.div>
      </section>

      
      {/* ========================================
          SECTION 2: PARCS AVEC FOND TEXTURED
          ======================================== */}
      <AnimatedSection id="parcs" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Pattern topographique subtil */}
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-medium shadow-lg text-white"
              style={{ backgroundColor: '#357600' }}
            >
              <MapPin className="size-4" />
              Nos destinations
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#111111' }}>
              Nos parcs à travers{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #357600, #4a9d00)' }}>
                la France
              </span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg font-medium">
              5 destinations uniques pour des aventures inoubliables
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <ParksList 
              compact={true} 
              showFilter={true} 
              maxItems={3}
              centeredFilters={true}
            />
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/parks"
              className="group inline-flex items-center gap-2 px-8 py-4 text-white rounded-full hover:shadow-2xl transition-all font-bold relative overflow-hidden"
              style={{ background: 'linear-gradient(to right, #357600, #4a9d00)' }}
            >
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                style={{ opacity: 0.1 }}
              />
              <span className="relative z-10">Voir tous les parcs</span>
              <MapPin className="size-5 relative z-10 group-hover:rotate-12 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      
      {/* ========================================
          SECTION 3: ACTIVITÉS - CARDS INTERACTIVES
          ======================================== */}
      <section id="activites" className="relative py-20 overflow-hidden" style={{ backgroundColor: '#111111' }}>
        {/* Pattern de grille */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 0 L 100 0 L 100 1 L 0 1 Z M 0 0 L 0 100 L 1 100 L 1 0 Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Glow effects avec couleurs NoLimit */}
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
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-4 text-sm font-medium border border-white/20"
            >
              <Zap className="size-4" style={{ color: '#eb700f' }} />
              Explorer nos activités
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Quelle activité{' '}
              <span className="relative inline-block" style={{ color: '#eb700f' }}>
                vous tente ?
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
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Explorez nos activités et trouvez celle qui correspond à votre niveau d'aventure
            </p>
          </motion.div>

          {/* Grid d'activités */}
          <div className="max-w-7xl mx-auto">
            <ActivitiesExplorerRond />
          </div>

          {/* CTA vers page activités */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/activities"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full hover:shadow-2xl transition-all font-bold relative overflow-hidden"
              style={{ color: '#111111' }}
            >
              <span className="relative z-10">Voir toutes les activités</span>
              <ArrowRight className="size-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION POUR QUI */}
      <PourQuiSection />

      {/* SECTION ACTUALITÉS */}
      <ActualitesSection />

      {/* ========================================
          SECTION NEWSLETTER
          ======================================== */}
      <div id="reserver" className="relative bg-gradient-to-b from-gray-50 to-white">
        <NewsletterSection compact={true} />
      </div>

      
      {/* ========================================
          SECTION CTA FINAL
          ======================================== */}
      <section className="relative py-24 text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #357600 0%, #2d6100 50%, #357600 100%)' }}>
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
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-sm font-medium border border-white/30"
            >
              <Sparkles className="size-4" />
              Dernière étape
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Prêt pour l'aventure ?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Réservez votre journée et créez des souvenirs inoubliables
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/booking"
                  className="group px-8 py-4 rounded-full hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2 font-bold shadow-2xl relative overflow-hidden text-white"
                  style={{ backgroundColor: '#eb700f' }}
                >
                  <motion.span
                    className="absolute inset-0"
                    style={{ backgroundColor: '#d66310' }}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Réserver maintenant</span>
                  <Calendar className="size-5 relative z-10 group-hover:rotate-12 transition-transform" />
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
// COMPOSANT: Explorateur d'activités interactif (format rond)
// ========================================
function ActivitiesExplorerRond() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  // Mapper les activités réelles avec des emojis
  const activitiesDisplay = [
    {
      id: 'accrobranche',
      name: 'Accrobranche',
      emoji: '🌳',
      level: 'Intermédiaire',
      age: '6+',
      image: activities[0].image
    },
    {
      id: 'paintball',
      name: 'Paintball',
      emoji: '🎯',
      level: 'Débutant',
      age: '12+',
      image: activities[1].image
    },
    {
      id: 'escape-game',
      name: 'Escape Game',
      emoji: '🔐',
      level: 'Intermédiaire',
      age: '10+',
      image: activities[2].image
    },
    {
      id: 'tir-arc',
      name: "Tir à l'arc",
      emoji: '🏹',
      level: 'Débutant',
      age: '8+',
      image: activities[3].image
    },
    {
      id: 'parcours-filet',
      name: 'Parcours Filet',
      emoji: '🕸️',
      level: 'Débutant',
      age: '3+',
      image: activities[4].image
    },
    {
      id: 'archery-tag',
      name: 'Archery Tag',
      emoji: '⚡',
      level: 'Intermédiaire',
      age: '10+',
      image: activities[5].image
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activitiesDisplay.map((activity, index) => (
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
            {/* Card principale - FORMAT ROND */}
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 transition-all">
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
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                {/* Emoji animé */}
                <motion.div
                  animate={{
                    rotate: selectedActivity === activity.id ? [0, -10, 10, 0] : 0,
                    scale: selectedActivity === activity.id ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-3"
                >
                  {activity.emoji}
                </motion.div>

                {/* Nom de l'activité */}
                <h3 className="text-xl font-black text-white mb-2 transition-colors" style={{
                  color: selectedActivity === activity.id ? '#eb700f' : 'white'
                }}>
                  {activity.name}
                </h3>

                {/* Badges */}
                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/30">
                    {activity.level}
                  </span>
                  <span className="px-2 py-1 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/30" style={{ backgroundColor: 'rgba(53, 118, 0, 0.3)' }}>
                    {activity.age} ans
                  </span>
                </div>
              </div>

              {/* Hover overlay avec picto flouté et texte "En savoir plus" */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md"
                style={{ background: 'linear-gradient(135deg, rgba(53, 118, 0, 0.85), rgba(74, 157, 0, 0.85))' }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="text-5xl opacity-40 blur-sm">{activity.emoji}</div>
                  <span className="text-white font-bold text-lg flex items-center gap-2">
                    En savoir plus
                    <ArrowRight className="size-4" />
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Glow effect au hover */}
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
  );
}

// ========================================
// COMPOSANT HELPER: Section animée réutilisable
// ========================================
function AnimatedSection({ 
  children, 
  className = "",
  id
}: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
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