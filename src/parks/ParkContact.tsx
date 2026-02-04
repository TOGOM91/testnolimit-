import { usePark } from '../utils/usePark';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Sparkles, Zap, AlertCircle, CheckCircle } from 'lucide-react';
import { useRef, useState } from 'react';

export function ParkContact() {
  const park = usePark();
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!park) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

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
            alt="Contact"
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
            <MessageCircle className="size-4" style={{ color: '#eb700f' }} />
            <span className="text-white text-sm font-medium">Nous sommes là pour vous</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl"
          >
            Contactez-{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #357600, #4a9d00)' }}>
                nous
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
            Notre équipe répond en moins de 2h • 7j/7
          </motion.p>
        </div>
      </section>

      
      {/* ========================================
          SECTION CONTACT INFO & FORMULAIRE
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Infos de contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Téléphone */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg border-2"
                style={{ borderColor: '#357600' }}
              >
                <div className="flex items-start gap-5">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#35760015' }}
                  >
                    <Phone className="size-8" style={{ color: '#357600' }} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1 font-medium">Téléphone</div>
                    <a 
                      href="tel:0123456789"
                      className="text-2xl font-black mb-2 block hover:underline"
                      style={{ color: '#357600' }}
                    >
                      01 23 45 67 89
                    </a>
                    <div className="text-gray-600 text-sm">
                      Lundi au dimanche • 9h - 18h
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg border-2"
                style={{ borderColor: '#eb700f' }}
              >
                <div className="flex items-start gap-5">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#eb700f15' }}
                  >
                    <Mail className="size-8" style={{ color: '#eb700f' }} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1 font-medium">Email</div>
                    <a 
                      href="mailto:contact@nolimit.fr"
                      className="text-xl font-black mb-2 block hover:underline"
                      style={{ color: '#eb700f' }}
                    >
                      contact@nolimit.fr
                    </a>
                    <div className="text-gray-600 text-sm">
                      Réponse garantie sous 24h
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Adresse */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200"
              >
                <div className="flex items-start gap-5">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gray-100"
                  >
                    <MapPin className="size-8 text-gray-700" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1 font-medium">Adresse du parc</div>
                    <div className="text-xl font-black text-gray-900 mb-2">
                      {park.location}
                    </div>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(park.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
                      style={{ color: '#357600' }}
                    >
                      Voir sur Google Maps
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Urgence */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #eb700f 0%, #d66310 100%)' }}
              >
                {/* Glow effect background */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="size-8" />
                    <h3 className="text-2xl font-black">Urgence jour J</h3>
                  </div>
                  <p className="text-white/90 mb-4 text-sm">
                    En cas d'urgence le jour de votre visite
                  </p>
                  <a 
                    href="tel:0612345678"
                    className="text-3xl font-black hover:underline"
                  >
                    06 12 34 56 78
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border-2"
              style={{ borderColor: '#357600' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#35760015' }}
                >
                  <MessageCircle className="size-7" style={{ color: '#357600' }} />
                </motion.div>
                <h2 className="text-3xl font-black" style={{ color: '#111111' }}>
                  Envoyez un message
                </h2>
              </div>

              {/* Message de succès */}
              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl border-2 flex items-center gap-3"
                  style={{ 
                    borderColor: '#357600',
                    backgroundColor: '#35760008'
                  }}
                >
                  <CheckCircle className="size-6" style={{ color: '#357600' }} />
                  <div>
                    <div className="font-bold" style={{ color: '#357600' }}>
                      Message envoyé !
                    </div>
                    <div className="text-sm text-gray-600">
                      Nous vous répondrons sous 24h
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none transition-all"
                    style={{ 
                      focusBorderColor: '#357600'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#357600'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none transition-all"
                    onFocus={(e) => e.target.style.borderColor = '#357600'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none transition-all"
                    onFocus={(e) => e.target.style.borderColor = '#357600'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Sujet
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none transition-all"
                    onFocus={(e) => e.target.style.borderColor = '#357600'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  >
                    <option>Réservation</option>
                    <option>Question sur une activité</option>
                    <option>Demande de devis groupe</option>
                    <option>Réclamation</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none transition-all resize-none"
                    onFocus={(e) => e.target.style.borderColor = '#357600'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 text-white rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 relative overflow-hidden"
                  style={{ background: 'linear-gradient(to right, #357600, #4a9d00)' }}
                >
                  <motion.span
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.1 }}
                  />
                  <Send className="size-5 relative z-10" />
                  <span className="relative z-10">Envoyer le message</span>
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous répondre.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      
      {/* ========================================
          SECTION FAQ RAPIDE - FOND NOIR
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
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full mb-6 text-sm font-medium border border-white/20"
            >
              <Sparkles className="size-4" style={{ color: '#eb700f' }} />
              Questions fréquentes
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Besoin d'une réponse{' '}
              <span style={{ color: '#eb700f' }}>rapide ?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: 'Quels sont les horaires ?',
                a: '9h-19h en haute saison, 10h-17h en basse saison',
                color: '#357600'
              },
              {
                q: 'Puis-je annuler ?',
                a: 'Annulation gratuite jusqu\'à 48h avant',
                color: '#eb700f'
              },
              {
                q: 'Parking disponible ?',
                a: 'Oui, parking gratuit de 200 places',
                color: '#357600'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all"
              >
                <div className="text-lg font-black text-white mb-3">{faq.q}</div>
                <div className="text-white/70 text-sm">{faq.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
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
              <span className="text-white">Vous préférez réserver directement ?</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Réservez en ligne
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              C'est rapide, simple et vous recevez une confirmation immédiate
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