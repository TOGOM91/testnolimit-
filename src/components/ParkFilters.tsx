// components/ParkFilters-refonte.tsx
import { useState } from 'react';
import { Filter, X, ChevronDown, ChevronUp, Zap, Users, TrendingUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filters } from '../types';
import { parks } from '../data/parks';

interface ParkFiltersProps {
  onFilterChange: (filters: Filters) => void;
  compact?: boolean;
}

// Extraire les activités uniques
const getUniqueActivities = () => {
  const allActivities = parks.flatMap(park => park.activities);
  const uniqueActivities = [...new Set(allActivities)];
  
  return uniqueActivities.map(activity => ({
    id: activity.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    label: activity,
    // Ajout d'emojis pour rendre plus ludique
    emoji: getActivityEmoji(activity)
  }));
};

// Helper pour associer des emojis aux activités
function getActivityEmoji(activity: string): string {
  const emojiMap: Record<string, string> = {
    'Accrobranche': '🌳',
    'Paintball': '🎯',
    'Escape Game': '🔐',
    "Tir à l'arc": '🏹',
    'Parcours filet': '🕸️',
    'Archery Tag': '🎯',
    'Tyrolienne': '⚡',
    'Orientation': '🧭'
  };
  return emojiMap[activity] || '⭐';
}

const AGE_OPTIONS = [
  { value: 3, label: '3+ ans', description: 'Parfait pour les petits aventuriers', color: 'blue' },
  { value: 6, label: '6+ ans', description: 'Notre best-seller !', color: 'green', popular: true },
  { value: 8, label: '8+ ans', description: 'Challenges excitants', color: 'orange' },
  { value: 10, label: '10+ ans', description: 'Pour les courageux', color: 'purple' },
  { value: 12, label: '12+ ans', description: 'Sensations fortes garanties', color: 'red' }
];

const DIFFICULTY_OPTIONS = [
  { 
    id: 'Débutant', 
    label: 'Débutant', 
    icon: '🌱',
    description: 'Accessible à tous',
    color: 'green'
  },
  { 
    id: 'Intermédiaire', 
    label: 'Intermédiaire', 
    icon: '⚡',
    description: 'Un peu de challenge',
    color: 'orange'
  },
  { 
    id: 'Avancé', 
    label: 'Avancé', 
    icon: '🔥',
    description: 'Pour les experts',
    color: 'red'
  }
];

export function ParkFilters({ onFilterChange, compact = false }: ParkFiltersProps) {
  const [filters, setFilters] = useState<Filters>({
    activities: [],
    minAge: null,
    difficulty: [],
    location: '',
    maxDistance: null
  });
  const [expandedSections, setExpandedSections] = useState({
    activities: !compact,
    age: !compact,
    difficulty: !compact
  });
  const [hoveredActivity, setHoveredActivity] = useState<string | null>(null);

  const ACTIVITIES = getUniqueActivities();

  const handleActivityToggle = (activityId: string) => {
    const newActivities = filters.activities.includes(activityId)
      ? filters.activities.filter(id => id !== activityId)
      : [...filters.activities, activityId];
    
    const newFilters = { ...filters, activities: newActivities };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleAgeChange = (age: number | null) => {
    const newFilters = { ...filters, minAge: age };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDifficultyToggle = (difficultyId: string) => {
    const newDifficulty = filters.difficulty.includes(difficultyId)
      ? filters.difficulty.filter(id => id !== difficultyId)
      : [...filters.difficulty, difficultyId];
    
    const newFilters = { ...filters, difficulty: newDifficulty };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      activities: [],
      minAge: null,
      difficulty: [],
      location: '',
      maxDistance: null
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const activeFilterCount = filters.activities.length + (filters.minAge ? 1 : 0) + filters.difficulty.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-2xl shadow-green-500/10 p-8 mb-12 border border-gray-100"
    >
      {/* ===== HEADER REPENSÉ ===== */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30"
          >
            <Filter className="size-6 text-white" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-black text-green-800 flex items-center gap-2">
              Filtres de recherche
              {activeFilterCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center justify-center w-7 h-7 bg-green-500 text-white text-sm font-bold rounded-full"
                >
                  {activeFilterCount}
                </motion.span>
              )}
            </h3>
            <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
              <Sparkles className="size-3 text-yellow-500" />
              {activeFilterCount > 0 
                ? `${activeFilterCount} filtre${activeFilterCount > 1 ? 's' : ''} actif${activeFilterCount > 1 ? 's' : ''} (ET logique)`
                : 'Affinez vos résultats avec plusieurs critères'}
            </p>
          </div>
        </div>
        
        <AnimatePresence>
          {activeFilterCount > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl transition-all font-medium"
            >
              <X className="size-4" />
              Réinitialiser
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-6">
        
        {/* ===== SECTION ACTIVITÉS LUDIQUE ===== */}
        <motion.div
          layout
          className="border-2 border-gray-100 rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-white hover:border-green-200 transition-colors"
        >
          <button
            onClick={() => setExpandedSections(prev => ({ ...prev, activities: !prev.activities }))}
            className="flex items-center justify-between w-full text-left group"
          >
            <div className="flex items-center gap-3">
              <Zap className="size-5 text-green-600" />
              <div>
                <span className="font-bold text-gray-900 text-lg">Activités</span>
                <span className="ml-3 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {filters.activities.length > 0 
                    ? `${filters.activities.length}/${ACTIVITIES.length} sélectionnées`
                    : `${ACTIVITIES.length} disponibles`}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedSections.activities ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="size-5 text-gray-400 group-hover:text-green-600 transition-colors" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {expandedSections.activities && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {ACTIVITIES.map((activity, index) => {
                    const isSelected = filters.activities.includes(activity.id);
                    return (
                      <motion.button
                        key={activity.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleActivityToggle(activity.id)}
                        onMouseEnter={() => setHoveredActivity(activity.id)}
                        onMouseLeave={() => setHoveredActivity(null)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-4 py-4 rounded-xl transition-all font-medium text-sm ${
                          isSelected
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/40 border-2 border-green-400'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300'
                        }`}
                      >
                        {/* Emoji animé */}
                        <motion.div
                          animate={isSelected ? { rotate: [0, -10, 10, 0] } : {}}
                          transition={{ duration: 0.5 }}
                          className="text-2xl mb-1"
                        >
                          {activity.emoji}
                        </motion.div>
                        
                        {activity.label}
                        
                        {/* Checkmark */}
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                            >
                              <span className="text-xs">✓</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ===== GRILLE ÂGE + DIFFICULTÉ ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* ÂGE MINIMUM - Design carte */}
          <motion.div
            layout
            className="border-2 border-gray-100 rounded-2xl p-6 bg-gradient-to-br from-blue-50/50 to-white hover:border-blue-200 transition-colors"
          >
            <button
              onClick={() => setExpandedSections(prev => ({ ...prev, age: !prev.age }))}
              className="flex items-center justify-between w-full text-left group mb-4"
            >
              <div className="flex items-center gap-3">
                <Users className="size-5 text-blue-600" />
                <span className="font-bold text-gray-900 text-lg">Âge minimum</span>
              </div>
              <motion.div
                animate={{ rotate: expandedSections.age ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="size-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {expandedSections.age && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-2 overflow-hidden"
                >
                  {AGE_OPTIONS.map((age, index) => {
                    const isSelected = filters.minAge === age.value;
                    const colorClasses = {
                      blue: 'from-blue-500 to-blue-600 border-blue-400 shadow-blue-500/40',
                      green: 'from-green-500 to-emerald-600 border-green-400 shadow-green-500/40',
                      orange: 'from-orange-500 to-orange-600 border-orange-400 shadow-orange-500/40',
                      purple: 'from-purple-500 to-purple-600 border-purple-400 shadow-purple-500/40',
                      red: 'from-red-500 to-red-600 border-red-400 shadow-red-500/40'
                    };

                    return (
                      <motion.button
                        key={age.value}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleAgeChange(age.value)}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative w-full px-4 py-4 rounded-xl text-left transition-all ${
                          isSelected
                            ? `bg-gradient-to-r ${colorClasses[age.color]} text-white shadow-lg border-2`
                            : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="font-bold text-base mb-0.5 flex items-center gap-2">
                              {age.label}
                              {age.popular && (
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  isSelected ? 'bg-white/20' : 'bg-green-100 text-green-700'
                                }`}>
                                  ⭐ Populaire
                                </span>
                              )}
                            </div>
                            <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                              {age.description}
                            </div>
                          </div>
                          
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                            >
                              <span className="text-sm">✓</span>
                            </motion.div>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                  
                  {/* Option "Aucun filtre" */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => handleAgeChange(null)}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 rounded-xl text-left transition-all font-medium ${
                      filters.minAge === null
                        ? 'bg-gray-800 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Tous les âges
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* DIFFICULTÉ - Design badges */}
          <motion.div
            layout
            className="border-2 border-gray-100 rounded-2xl p-6 bg-gradient-to-br from-orange-50/50 to-white hover:border-orange-200 transition-colors"
          >
            <button
              onClick={() => setExpandedSections(prev => ({ ...prev, difficulty: !prev.difficulty }))}
              className="flex items-center justify-between w-full text-left group mb-4"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="size-5 text-orange-600" />
                <div>
                  <span className="font-bold text-gray-900 text-lg">Niveau</span>
                  {filters.difficulty.length > 0 && (
                    <span className="ml-2 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {filters.difficulty.length} choisi{filters.difficulty.length > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedSections.difficulty ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="size-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {expandedSections.difficulty && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-3 overflow-hidden"
                >
                  {DIFFICULTY_OPTIONS.map((difficulty, index) => {
                    const isSelected = filters.difficulty.includes(difficulty.id);
                    const colorClasses = {
                      green: 'from-green-500 to-emerald-600 border-green-400 shadow-green-500/30',
                      orange: 'from-orange-500 to-orange-600 border-orange-400 shadow-orange-500/30',
                      red: 'from-red-500 to-red-600 border-red-400 shadow-red-500/30'
                    };

                    return (
                      <motion.button
                        key={difficulty.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleDifficultyToggle(difficulty.id)}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className={`relative w-full px-5 py-4 rounded-xl text-left transition-all ${
                          isSelected
                            ? `bg-gradient-to-r ${colorClasses[difficulty.color]} text-white shadow-lg border-2`
                            : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-orange-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <motion.span
                            className="text-3xl"
                            animate={isSelected ? { 
                              rotate: [0, -10, 10, 0],
                              scale: [1, 1.2, 1]
                            } : {}}
                            transition={{ duration: 0.5 }}
                          >
                            {difficulty.icon}
                          </motion.span>
                          <div className="flex-1">
                            <div className="font-bold text-base">{difficulty.label}</div>
                            <div className={`text-xs mt-0.5 ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                              {difficulty.description}
                            </div>
                          </div>
                          
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0 }}
                                className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center"
                              >
                                <span className="text-sm font-bold">✓</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ===== FILTRES ACTIFS (CHIPS ANIMÉS) ===== */}
      <AnimatePresence>
        {activeFilterCount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 pt-6 border-t-2 border-gray-100"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="size-4 text-yellow-500" />
              <p className="text-sm font-semibold text-gray-700">Filtres actifs :</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.activities.map(activityId => {
                const activity = ACTIVITIES.find(a => a.id === activityId);
                return activity && (
                  <motion.span
                    key={activity.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-medium shadow-lg shadow-green-500/30"
                  >
                    <span>{activity.emoji}</span>
                    {activity.label}
                    <button
                      onClick={() => handleActivityToggle(activity.id)}
                      className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                    >
                      <X className="size-3" />
                    </button>
                  </motion.span>
                );
              })}
              
              {filters.minAge && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg shadow-blue-500/30"
                >
                  👶 {filters.minAge}+ ans
                  <button
                    onClick={() => handleAgeChange(null)}
                    className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                  >
                    <X className="size-3" />
                  </button>
                </motion.span>
              )}
              
              {filters.difficulty.map(difficultyId => {
                const difficulty = DIFFICULTY_OPTIONS.find(d => d.id === difficultyId);
                return difficulty && (
                  <motion.span
                    key={difficulty.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-medium shadow-lg shadow-orange-500/30"
                  >
                    <span>{difficulty.icon}</span>
                    {difficulty.label}
                    <button
                      onClick={() => handleDifficultyToggle(difficulty.id)}
                      className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                    >
                      <X className="size-3" />
                    </button>
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}