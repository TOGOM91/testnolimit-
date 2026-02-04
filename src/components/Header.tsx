// components/Header.tsx - VERSION COMPLÈTE AVEC MEGA MENUS
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar, Sparkles, Heart, MapPin, Users, Building2, GraduationCap, PartyPopper, Phone, HelpCircle, Briefcase, Gift } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeaderData } from '../hooks/useHeaderData';
import nolimitLogoFallback from '../assets/nolimit-logo-removebg.png';

export function Header() {
  const { data: headerData, loading, error } = useHeaderData();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [megaMenuPosition, setMegaMenuPosition] = useState<'left' | 'center' | 'right'>('center');
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);

  // ✅ Afficher un loading pendant le chargement
  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white h-20 flex items-center justify-center border-b">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </header>
    );
  }

  // ✅ Si erreur, utiliser les valeurs par défaut
  if (error || !headerData) {
    console.warn('⚠️ Impossible de charger les données WordPress');
    return <DefaultHeader />;
  }

  // ✅ Extraire les données de WordPress
  const {
    logo,
    primaryColor,
    secondaryColor,
    greenColor,
    ctaText,
    ctaUrl,
    showParkSelector,
    menuItems,
    parks
  } = headerData;

  const isActive = (path: string) => location.pathname === path;

  // Calculer la position du mega menu selon l'item cliqué
  const handleMegaMenuOpen = (menuId: string, event: React.MouseEvent) => {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const buttonCenter = rect.left + rect.width / 2;

    if (buttonCenter < windowWidth * 0.33) {
      setMegaMenuPosition('left');
    } else if (buttonCenter > windowWidth * 0.67) {
      setMegaMenuPosition('right');
    } else {
      setMegaMenuPosition('center');
    }

    setActiveMegaMenu(menuId);
  };

  return (
    <>
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg border-b shadow-sm"
        style={{ borderColor: primaryColor }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* ✅ Logo depuis WordPress */}
            <Link to="/" className="flex items-center group relative z-50">
              <motion.img
                src={logo?.url || nolimitLogoFallback}
                alt={logo?.alt || 'NoLimit Aventure'}
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            {/* ✅ Navigation Desktop depuis WordPress */}
            <nav className="hidden lg:flex items-center gap-2">
              {menuItems.map((item) => {
                if (item.type === 'simple') {
                  return (
                    <Link
                      key={item.id}
                      to={item.url || '/'}
                      className="px-4 py-2 rounded-lg transition-all font-medium hover:bg-orange-50"
                      style={isActive(item.url || '/') ? { 
                        backgroundColor: `${primaryColor}15`,
                        color: primaryColor,
                        fontWeight: 'bold'
                      } : {
                        color: primaryColor
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                } else if (item.type === 'megamenu') {
                  const isActiveMenu = activeMegaMenu === item.id.toString();
                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={(e) => {
                        handleMegaMenuOpen(item.id.toString(), e);
                      }}
                      onMouseLeave={() => setActiveMegaMenu(null)}
                    >
                      <button
                        className="flex items-center gap-1 px-4 py-2 rounded-lg transition-all font-medium hover:bg-orange-50"
                        style={isActiveMenu ? { 
                          backgroundColor: `${primaryColor}15`,
                          color: primaryColor,
                          fontWeight: 'bold'
                        } : {
                          color: primaryColor
                        }}
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: isActiveMenu ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="size-4" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isActiveMenu && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full pt-4 z-50"
                            style={{
                              left: megaMenuPosition === 'left' ? '0' : megaMenuPosition === 'center' ? '50%' : 'auto',
                              right: megaMenuPosition === 'right' ? '0' : 'auto',
                              transform: megaMenuPosition === 'center' ? 'translateX(-50%)' : 'none',
                              minWidth: '800px',
                              maxWidth: '90vw'
                            }}
                          >
                            <div 
                              className="bg-white rounded-2xl shadow-2xl border-2 overflow-hidden"
                              style={{ borderColor: primaryColor }}
                            >
                              <div className="h-1" style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }} />
                              {renderMegaMenuContent(item.megaMenuType || 'discover')}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return null;
              })}
            </nav>

            {/* ✅ CTA Buttons depuis WordPress */}
            <div className="hidden lg:flex items-center gap-3">
              {showParkSelector && parks && parks.length > 0 && (
                <select 
                  className="px-4 py-2.5 border-2 rounded-xl text-sm font-medium hover:shadow-md focus:outline-none focus:ring-2 transition-all cursor-pointer bg-white"
                  style={{ 
                    borderColor: greenColor,
                    color: primaryColor
                  }}
                  onChange={(e) => e.target.value && navigate(e.target.value)}
                >
                  <option value="">📍 Tous les parcs</option>
                  {parks.map((park) => (
                    <option key={park.id} value={park.url}>
                      {park.emoji} {park.location}
                    </option>
                  ))}
                </select>
              )}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={ctaUrl}
                  className="relative flex items-center gap-2 px-6 py-3 text-white rounded-full font-bold transition-all shadow-lg overflow-hidden group"
                  style={{ backgroundColor: secondaryColor }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <Calendar className="size-4 relative z-10" />
                  <span className="relative z-10">{ctaText}</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-all"
              style={{ 
                backgroundColor: isMenuOpen ? primaryColor : '',
                color: isMenuOpen ? 'white' : primaryColor
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

          {/* ✅ Mobile Navigation depuis WordPress */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden overflow-hidden border-t"
                style={{ borderColor: primaryColor }}
              >
                <div className="py-6 space-y-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.type === 'simple' ? (item.url || '/') : '#'}
                      onClick={() => item.type === 'simple' && setIsMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl transition-all font-medium hover:bg-orange-50"
                      style={{ color: primaryColor }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="pt-4 space-y-2">
                    {showParkSelector && parks && parks.length > 0 && (
                      <select 
                        className="w-full px-4 py-3 border-2 rounded-xl text-sm font-medium"
                        style={{ 
                          borderColor: greenColor,
                          color: primaryColor
                        }}
                        onChange={(e) => {
                          if (e.target.value) {
                            navigate(e.target.value);
                            setIsMenuOpen(false);
                          }
                        }}
                      >
                        <option value="">📍 Choisir mon parc</option>
                        {parks.map((park) => (
                          <option key={park.id} value={park.url}>
                            {park.emoji} {park.location}
                          </option>
                        ))}
                      </select>
                    )}
                    
                    <Link
                      to={ctaUrl}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 text-white rounded-full font-bold"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      <Calendar className="size-4" />
                      {ctaText}
                    </Link>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Overlay pour mega menus */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMegaMenu(null)}
            className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
            style={{ top: '80px' }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// Header par défaut (si API échoue)
function DefaultHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg border-b shadow-sm border-orange-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={nolimitLogoFallback} alt="NoLimit Aventure" className="h-12 w-auto" />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-2">
            <Link to="/" className="px-4 py-2 rounded-lg transition-all font-medium hover:bg-orange-50 text-orange-500">
              Accueil
            </Link>
            <Link to="/activities" className="px-4 py-2 rounded-lg transition-all font-medium hover:bg-orange-50 text-orange-500">
              Activités
            </Link>
            <Link to="/contact" className="px-4 py-2 rounded-lg transition-all font-medium hover:bg-orange-50 text-orange-500">
              Contact
            </Link>
          </nav>
          
          <div className="hidden lg:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/booking"
                className="relative flex items-center gap-2 px-6 py-3 text-white rounded-full font-bold transition-all shadow-lg overflow-hidden group bg-orange-500"
              >
                <Calendar className="size-4 relative z-10" />
                <span className="relative z-10">Réserver</span>
              </Link>
            </motion.div>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-all"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}

// Fonction pour rendre le contenu du mega menu
function renderMegaMenuContent(type: string) {
  switch(type) {
    case 'discover':
      return <MegaMenuDiscover />;
    case 'audience':
      return <MegaMenuAudience />;
    case 'groups':
      return <MegaMenuGroups />;
    case 'prepare':
      return <MegaMenuPrepare />;
    default:
      return <MegaMenuDiscover />;
  }
}

// Composants de mega menus (identique à votre version originale)
function MegaMenuDiscover() {
  const links = [
    { to: '/about', icon: Sparkles, label: 'Notre Histoire', desc: 'Découvrez nos origines' },
    { to: '/values', icon: Heart, label: 'Nos Valeurs', desc: 'Notre ADN et engagement' },
    { to: '/parks', icon: MapPin, label: 'Nos Parcs', desc: '5 destinations uniques' },
    { to: '/jobs', icon: Briefcase, label: 'Nos Emplois', desc: 'Rejoignez l\'aventure' },
    { to: '/news', icon: Sparkles, label: 'Actualités', desc: 'Les dernières news' },
    { to: '/partners', icon: Users, label: 'Nos Partenaires', desc: 'Ils nous font confiance' },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      <div className="col-span-1 relative h-64 rounded-2xl overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
          alt="NoLimit Aventure"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
          <div className="text-white">
            <h3 className="font-black text-2xl mb-2">Qui sommes-nous ?</h3>
            <p className="text-sm text-white/90">Passion, aventure et dépassement de soi</p>
          </div>
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-2 gap-3">
        {links.map((link, index) => (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
          >
            <Link
              to={link.to}
              className="flex items-start gap-4 p-4 rounded-xl hover:shadow-md transition-all group border-2 border-transparent hover:border-orange-500"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all bg-orange-50"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <link.icon className="size-6 text-orange-500" />
              </motion.div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-1 group-hover:translate-x-1 transition-transform">
                  {link.label}
                </div>
                <div className="text-sm text-gray-600">{link.desc}</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MegaMenuAudience() {
  const audiences = [
    { to: '/solo', icon: '🧗', label: 'En Solo', desc: 'Rencontrez d\'autres aventuriers' },
    { to: '/couple', icon: '💑', label: 'En Couple', desc: 'Une journée romantique' },
    { to: '/family', icon: '👨‍👩‍👧‍👦', label: 'En Famille', desc: 'Des souvenirs inoubliables' },
    { to: '/gift', icon: '🎁', label: 'Pour Offrir', desc: 'Le cadeau parfait' },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-4 gap-4 mb-6">
        {audiences.map((audience, index) => (
          <motion.div
            key={audience.to}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
          >
            <Link
              to={audience.to}
              className="block p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl border-2 border-orange-500 transition-all group text-center hover:bg-orange-50"
            >
              <motion.div 
                className="text-6xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {audience.icon}
              </motion.div>
              <div className="font-bold text-gray-900 mb-2">
                {audience.label}
              </div>
              <div className="text-sm text-gray-600">{audience.desc}</div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="pt-6 border-t-2 border-orange-500/20">
        <Link
          to="/quote"
          className="flex items-center justify-center gap-2 w-full px-6 py-4 text-white rounded-xl font-bold hover:shadow-xl transition-all bg-gradient-to-r from-orange-500 to-orange-600"
        >
          <Phone className="size-5" />
          Demander un devis personnalisé
        </Link>
      </div>
    </div>
  );
}

function MegaMenuGroups() {
  const groupTypes = [
    { to: '/groups/corporate', icon: Building2, label: 'Entreprises', desc: 'Team-building & séminaires', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop' },
    { to: '/groups/kids', icon: GraduationCap, label: 'Enfants', desc: 'Écoles & anniversaires', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=300&h=200&fit=crop' },
    { to: '/groups/adults', icon: PartyPopper, label: 'Adultes', desc: 'EVG, EVF & fêtes', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=200&fit=crop' },
    { to: '/groups/family', icon: Users, label: 'Grandes familles', desc: 'Réunions de famille', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=200&fit=crop' },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 gap-4 mb-6">
        {groupTypes.map((type, index) => (
          <motion.div
            key={type.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, type: "spring" }}
          >
            <Link
              to={type.to}
              className="group block rounded-2xl overflow-hidden hover:shadow-2xl transition-all border-2 border-orange-500"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={type.image} alt={type.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <type.icon className="size-6" />
                    <span className="font-black text-xl">{type.label}</span>
                  </div>
                  <div className="text-sm text-white/90">{type.desc}</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <Link
          to="/groups/cse"
          className="px-4 py-3 rounded-xl font-bold hover:shadow-lg transition-all text-center text-white bg-orange-500"
        >
          CSE & Comités
        </Link>
        <Link
          to="/groups/quote"
          className="px-4 py-3 rounded-xl font-bold hover:shadow-lg transition-all text-center text-white bg-orange-600"
        >
          Demander un devis
        </Link>
      </div>
    </div>
  );
}

function MegaMenuPrepare() {
  const tips = [
    { to: '/blog/good-day', icon: '✨', label: 'Passer une bonne journée', desc: 'Tous nos conseils' },
    { to: '/blog/typical-day', icon: '⏰', label: 'Une journée type', desc: 'Programme et timing' },
    { to: '/blog/fitness', icon: '💪', label: 'Niveau sportif requis', desc: 'Accessible à tous' },
    { to: '/blog/booking', icon: '📅', label: 'Dois-je réserver ?', desc: 'Conseils de réservation' },
    { to: '/blog/weather', icon: '🌤️', label: 'Météo défavorable', desc: 'Que faire en cas de pluie ?' },
    { to: '/blog/pets', icon: '🐕', label: 'Animaux de compagnie', desc: 'Règles et conditions' },
  ];

  return (
    <div className="p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-black mb-2 text-gray-900">Préparez votre visite</h3>
        <p className="text-gray-600">Toutes les réponses à vos questions</p>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, type: "spring" }}
          >
            <Link
              to={tip.to}
              className="block p-5 rounded-2xl hover:shadow-lg border-2 border-transparent hover:border-orange-500 transition-all group"
            >
              <motion.div 
                className="text-4xl mb-3"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tip.icon}
              </motion.div>
              <div className="font-bold text-sm mb-1 text-gray-900">
                {tip.label}
              </div>
              <div className="text-xs text-gray-600">{tip.desc}</div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t-2 border-orange-500/20">
        <Link
          to="/faq"
          className="flex items-center justify-center gap-2 font-bold text-orange-500 transition-colors"
        >
          <HelpCircle className="size-5" />
          Voir toutes les questions fréquentes
        </Link>
      </div>
    </div>
  );
}