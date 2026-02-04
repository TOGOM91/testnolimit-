// pages/ActivitiesPage.tsx - VERSION HARMONISÉE AVEC HOMEPAGE
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Search, Filter, Zap, Users, TrendingUp, Clock, Target, Sparkles, ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import { activities } from '../data/activities';
import { ActivityCard } from '../components/ActivityCard';

export function ParkActivities() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filtrage des activités
  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || activity.level === selectedLevel;
    const matchesAge = selectedAge === 'all' || activity.minAge <= parseInt(selectedAge);
    const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesAge && matchesCategory;
  });

  // Catégories uniques
  const categories = Array.from(new Set(activities.map(a => a.category)));

  return (
    <div className="min-h-screen overflow-hidden bg-white">
      
      {/* ========================================
          SECTION HERO IMMERSIVE
          ======================================== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1653154138513-ed13199917e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Activités NoLimit"
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
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-6"
          >
            <Zap className="size-4" style={{ color: '#eb700f' }} />
            <span className="text-white text-sm font-medium">Plus de 20 activités</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
          >
            Trouvez votre{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #357600, #4a9d00)' }}>
                aventure
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
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Des activités outdoor et indoor pour tous les âges et tous les niveaux
          </motion.p>

          {/* Barre de recherche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une activité..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-white/30 focus:border-white/60 focus:outline-none text-gray-900 placeholder-gray-500 font-medium shadow-2xl"
              />
            </div>
          </motion.div>
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
            <span className="text-xs uppercase tracking-wider">Explorer</span>
            <ChevronDown className="size-5" />
          </motion.div>
        </motion.div>
      </section>

      
      {/* ========================================
          SECTION FILTRES - STYLE HOMEPAGE
          ======================================== */}
      <section className="relative -mt-20 pb-12 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            {/* Compteur de résultats centré */}
            <div className="text-center mb-8">
              <div className="text-sm text-gray-600">
                <span className="font-bold text-2xl" style={{ color: '#357600' }}>{filteredActivities.length}</span> activité{filteredActivities.length > 1 ? 's' : ''} disponible{filteredActivities.length > 1 ? 's' : ''}
              </div>
            </div>

            {/* Filtres en ligne centrés - Style HomePage */}
            <div className="flex flex-wrap justify-center gap-3">
              {/* Tous les niveaux */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedLevel('all')}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: selectedLevel === 'all' ? '#357600' : 'white',
                  color: selectedLevel === 'all' ? 'white' : '#374151',
                  border: `2px solid ${selectedLevel === 'all' ? '#357600' : '#e5e7eb'}`
                }}
              >
                Tous niveaux
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedLevel('Débutant')}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: selectedLevel === 'Débutant' ? '#357600' : 'white',
                  color: selectedLevel === 'Débutant' ? 'white' : '#374151',
                  border: `2px solid ${selectedLevel === 'Débutant' ? '#357600' : '#e5e7eb'}`
                }}
              >
                🌱 Débutant
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedLevel('Intermédiaire')}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: selectedLevel === 'Intermédiaire' ? '#357600' : 'white',
                  color: selectedLevel === 'Intermédiaire' ? 'white' : '#374151',
                  border: `2px solid ${selectedLevel === 'Intermédiaire' ? '#357600' : '#e5e7eb'}`
                }}
              >
                ⚡ Intermédiaire
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedLevel('Avancé')}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: selectedLevel === 'Avancé' ? '#357600' : 'white',
                  color: selectedLevel === 'Avancé' ? 'white' : '#374151',
                  border: `2px solid ${selectedLevel === 'Avancé' ? '#357600' : '#e5e7eb'}`
                }}
              >
                🔥 Avancé
              </motion.button>

              {/* Séparateur visuel */}
              <div className="w-px h-10 bg-gray-200" />

              {/* Âges */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedAge('all')}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: selectedAge === 'all' ? '#eb700f' : 'white',
                  color: selectedAge === 'all' ? 'white' : '#374151',
                  border: `2px solid ${selectedAge === 'all' ? '#eb700f' : '#e5e7eb'}`
                }}
              >
                Tous âges
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedAge('3')}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: selectedAge === '3' ? '#eb700f' : 'white',
                  color: selectedAge === '3' ? 'white' : '#374151',
                  border: `2px solid ${selectedAge === '3' ? '#eb700f' : '#e5e7eb'}`
                }}
              >
                👶 3 ans+
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedAge('8')}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: selectedAge === '8' ? '#eb700f' : 'white',
                  color: selectedAge === '8' ? 'white' : '#374151',
                  border: `2px solid ${selectedAge === '8' ? '#eb700f' : '#e5e7eb'}`
                }}
              >
                👦 8 ans+
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedAge('12')}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: selectedAge === '12' ? '#eb700f' : 'white',
                  color: selectedAge === '12' ? 'white' : '#374151',
                  border: `2px solid ${selectedAge === '12' ? '#eb700f' : '#e5e7eb'}`
                }}
              >
                🧑 12 ans+
              </motion.button>

              {/* Séparateur visuel */}
              <div className="w-px h-10 bg-gray-200" />

              {/* Catégories */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory('all')}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: selectedCategory === 'all' ? '#357600' : 'white',
                  color: selectedCategory === 'all' ? 'white' : '#374151',
                  border: `2px solid ${selectedCategory === 'all' ? '#357600' : '#e5e7eb'}`
                }}
              >
                Toutes catégories
              </motion.button>

              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
                  style={{
                    backgroundColor: selectedCategory === cat ? '#357600' : 'white',
                    color: selectedCategory === cat ? 'white' : '#374151',
                    border: `2px solid ${selectedCategory === cat ? '#357600' : '#e5e7eb'}`
                  }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Bouton reset si filtres actifs */}
            {(selectedLevel !== 'all' || selectedAge !== 'all' || selectedCategory !== 'all' || searchQuery) && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-6 pt-6 border-t"
                style={{ borderColor: '#e5e7eb' }}
              >
                <button
                  onClick={() => {
                    setSelectedLevel('all');
                    setSelectedAge('all');
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="text-sm font-medium hover:underline"
                  style={{ color: '#6b7280' }}
                >
                  Réinitialiser les filtres
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      
      {/* ========================================
          SECTION GRILLE D'ACTIVITÉS - STYLE CIRCULAIRE
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
          {filteredActivities.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {filteredActivities.map((activity, index) => (
                <Link
                  key={activity.id}
                  to={`/activity/${activity.id}`}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative cursor-pointer"
                  >
                    {/* Card circulaire */}
                    <div className="relative w-full aspect-square rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 transition-all">
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
                        <h3 className="text-lg font-black text-white mb-2 px-2">
                          {activity.name}
                        </h3>

                        {/* Badges */}
                        <div className="flex flex-col gap-1.5">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/30">
                            {activity.difficulty}
                          </span>
                          <span className="px-3 py-1 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/30" style={{ backgroundColor: 'rgba(53, 118, 0, 0.3)' }}>
                            {activity.minAge}+ ans
                          </span>
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md"
                        style={{ background: 'linear-gradient(135deg, rgba(53, 118, 0, 0.92), rgba(74, 157, 0, 0.92))' }}
                      >
                        <span className="text-white font-bold text-sm flex items-center gap-2 px-4">
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
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/20">
                <Search className="size-12 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-3 text-white">
                Aucune activité trouvée
              </h3>
              <p className="text-white/70 mb-6 text-lg">
                Essayez de modifier vos critères de recherche
              </p>
              <button
                onClick={() => {
                  setSelectedLevel('all');
                  setSelectedAge('all');
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-8 py-4 text-white rounded-full font-bold hover:shadow-xl transition-all"
                style={{ backgroundColor: '#357600' }}
              >
                Réinitialiser les filtres
              </button>
            </motion.div>
          )}
        </div>
      </section>

      
      {/* ========================================
          SECTION STATISTIQUES - FOND SOLIDE
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
              <Sparkles className="size-4" style={{ color: '#eb700f' }} />
              Nos chiffres clés
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Des activités{' '}
              <span style={{ color: '#eb700f' }}>pour tous</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Découvrez ce qui fait la force de NoLimit Aventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Sparkles, value: '3+', label: 'Dès 3 ans', desc: 'Parcours adaptés pour les petits', color: '#357600' },
              { icon: TrendingUp, value: '20+', label: 'Activités', desc: 'Large choix varié', color: '#eb700f' },
              { icon: Users, value: '100%', label: 'Encadrement pro', desc: 'Moniteurs diplômés', color: '#357600' },
              { icon: Target, value: '98%', label: 'Satisfaction', desc: 'Clients ravis', color: '#eb700f' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="relative group"
              >
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all text-center h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}30` }}
                  >
                    <stat.icon className="size-10" style={{ color: stat.color }} />
                  </motion.div>
                  <div className="text-5xl font-black text-white mb-3">{stat.value}</div>
                  <div className="text-xl font-bold text-white mb-2">{stat.label}</div>
                  <div className="text-sm text-white/70">{stat.desc}</div>
                </motion.div>

                {/* Glow effect au hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.4 }}
                  className="absolute -inset-1 rounded-2xl blur-xl -z-10"
                  style={{ backgroundColor: stat.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* ========================================
          SECTION CTA RÉSERVATION
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
              <Target className="size-4" />
              <span className="text-white">Prêt à vous lancer ?</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Réservez votre aventure
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Choisissez votre activité et réservez votre créneau en quelques clics
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/booking"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full hover:shadow-2xl transition-all font-bold text-white relative overflow-hidden"
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
                <ArrowRight className="size-5 relative z-10" />
              </Link>
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