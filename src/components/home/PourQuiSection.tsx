// components/home/PourQuiSection.tsx
/* SECTION POUR QUI - Demande client 14/01/2025 - 4 catégories */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, Cake, Briefcase } from 'lucide-react';

interface PourQuiCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  icon: React.ReactNode;
  color: string;
}

const pourQuiData: PourQuiCard[] = [
  {
    id: 'duo',
    title: 'En Duo',
    description: 'Vivez l\'aventure à deux',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/pour-qui/duo',
    icon: <Heart className="size-8" />,
    color: '#eb700f' // Orange NoLimit
  },
  {
    id: 'famille',
    title: 'En Famille',
    description: 'Des aventures pour toute la famille',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/pour-qui/famille',
    icon: <Users className="size-8" />,
    color: '#357600' // Vert NoLimit
  },
  {
    id: 'enfant',
    title: 'Enfants',
    description: 'Anniversaires et sorties scolaires',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/pour-qui/enfant',
    icon: <Cake className="size-8" />,
    color: '#eb700f'
  },
  {
    id: 'entreprise',
    title: 'Entreprises',
    description: 'Team building et séminaires',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/pour-qui/entreprise',
    icon: <Briefcase className="size-8" />,
    color: '#357600'
  }
];

export function PourQuiSection() {
  return (
    <section id="pour-qui" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4" style={{ color: '#357600' }}>
            Pour Qui ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Que vous soyez en duo, en famille, avec des enfants ou en équipe, nous avons l'aventure qu'il vous faut
          </p>
        </motion.div>

        {/* Grid - 2x2 sur desktop, 2x2 sur tablette, stack sur mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {pourQuiData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={card.link} className="block group">
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                  {/* Image de fond */}
                  <div className="absolute inset-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Overlay gradient sombre */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"
                  />

                  {/* Contenu */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    {/* Icône avec couleur thématique */}
                    <motion.div
                      className="mb-4 p-3 rounded-full w-fit"
                      style={{ backgroundColor: `${card.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div style={{ color: card.color }}>
                        {card.icon}
                      </div>
                    </motion.div>

                    {/* Titre */}
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-white/90 mb-4 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      {card.description}
                    </p>

                    {/* Bouton En savoir plus */}
                    <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>En savoir plus</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>

                  {/* Bordure colorée au hover */}
                  <div
                    className="absolute inset-0 border-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ borderColor: card.color }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
