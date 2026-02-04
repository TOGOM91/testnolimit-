// pages/AboutPage.tsx
import { 
  History, 
  Target, 
  MapPin, 
  Briefcase, 
  Newspaper, 
  Users,
  Award,
  Leaf,
  Heart,
  Shield,
  Star,
  TrendingUp
} from 'lucide-react';
import { parks } from '../data/parks';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6">
            Découvrir NoLimit Aventure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depuis 2015, nous créons des expériences aventureuses inoubliables dans nos parcs à travers la France.
            Notre mission : reconnecter les gens à la nature et à leurs proches.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Notre Histoire */}
          <a href="#histoire" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-green-100 hover:border-green-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl group-hover:bg-green-200 transition-colors">
                  <History className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Notre Histoire</h3>
              </div>
              <p className="text-gray-600">
                De Chevry à la France entière, découvrez notre parcours depuis 2015.
              </p>
            </div>
          </a>

          {/* Notre ADN, nos valeurs */}
          <a href="#adn" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-green-100 hover:border-green-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl group-hover:bg-green-200 transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Notre ADN, nos valeurs</h3>
              </div>
              <p className="text-gray-600">
                Sécurité, respect de la nature et plaisir partagé : nos piliers fondateurs.
              </p>
            </div>
          </a>

          {/* Nos parcs */}
          <a href="#parcs" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-green-100 hover:border-green-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl group-hover:bg-green-200 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Nos parcs</h3>
              </div>
              <p className="text-gray-600">
                {parks.length} parcs uniques à travers la France, chacun avec son identité.
              </p>
            </div>
          </a>

          {/* Nos emplois */}
          <a href="#emplois" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-green-100 hover:border-green-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl group-hover:bg-green-200 transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Nos emplois</h3>
              </div>
              <p className="text-gray-600">
                Rejoignez notre équipe passionnée et faites de l'aventure votre métier.
              </p>
            </div>
          </a>

          {/* Nos Actualités */}
          <a href="#actualites" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-green-100 hover:border-green-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl group-hover:bg-green-200 transition-colors">
                  <Newspaper className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Nos Actualités</h3>
              </div>
              <p className="text-gray-600">
                Découvrez nos dernières nouveautés, événements et projets.
              </p>
            </div>
          </a>

          {/* Nos partenaires */}
          <a href="#partenaires" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-green-100 hover:border-green-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl group-hover:bg-green-200 transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Nos partenaires</h3>
              </div>
              <p className="text-gray-600">
                Les organisations qui nous font confiance et partagent nos valeurs.
              </p>
            </div>
          </a>
        </div>

        {/* Notre Histoire Section */}
        <section id="histoire" className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <History className="w-8 h-8 text-green-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Notre Histoire</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Tout commence en <strong>2015</strong> à Chevry, en Essonne. Passionnés par la nature et les sports outdoor, 
                    trois amis décident de créer le premier parc NoLimit Aventure. Leur objectif : proposer des activités 
                    aventureuses accessibles à tous, en plein cœur de la forêt.
                  </p>
                  <p>
                    Face au succès immédiat, nous ouvrons notre deuxième parc à <strong>Nemours en 2017</strong>, 
                    puis <strong>Montargis en 2019</strong>, <strong>Digny en 2021</strong> et enfin <strong>Le Coudray en 2022</strong>.
                  </p>
                  <div className="bg-green-50 p-6 rounded-xl mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-green-700">{parks.length}</div>
                        <div className="text-sm text-gray-600">Parcs en France</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-700">8 ans</div>
                        <div className="text-sm text-gray-600">D'expérience</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-700">75k+</div>
                        <div className="text-sm text-gray-600">Aventuriers par an</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-700">98%</div>
                        <div className="text-sm text-gray-600">Clients satisfaits</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-green-700 p-8 md:p-12 flex items-center">
                <div>
                  <Award className="w-16 h-16 text-white mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Notre vision</h3>
                  <p className="text-green-100">
                    Devenir le leader français des parcs aventure en développant un réseau de parcs 
                    respectueux de l'environnement et accessibles à tous les budgets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre ADN Section */}
        <section id="adn" className="mb-20">
          <div className="text-center mb-12">
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre ADN, nos valeurs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ces 5 valeurs fondamentales guident chacune de nos décisions et actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Sécurité avant tout",
                description: "Équipements certifiés, formations continues et protocoles stricts",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Respect de la nature",
                description: "Installations écoresponsables, préservation de la biodiversité",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Plaisir partagé",
                description: "Ambiance conviviale, souvenirs inoubliables en famille ou entre amis",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Excellence",
                description: "Service client irréprochable, installations toujours entretenues",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Innovation",
                description: "Nouvelles activités, technologies pour améliorer l'expérience",
                color: "from-purple-500 to-purple-600"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${value.color} text-white rounded-xl mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nos parcs Section */}
        <section id="parcs" className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <MapPin className="w-8 h-8 text-green-600 mb-2" />
              <h2 className="text-3xl font-bold text-gray-900">Nos parcs</h2>
            </div>
            <Link 
              to="/parcs" 
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Voir tous les parcs
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parks.slice(0, 3).map((park) => (
              <div key={park.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={park.image} 
                    alt={park.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{park.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{park.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {park.activities.slice(0, 3).map((activity, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="font-bold">{park.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({park.reviewCount})</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">{park.minPrice}€</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nos emplois Section */}
        <section id="emplois" className="mb-20">
          <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-3xl p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3">
                <Briefcase className="w-12 h-12 text-white mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Nos emplois</h2>
                <p className="text-green-100 text-lg mb-6">
                  Rejoignez une équipe passionnée qui grandit chaque année ! Nous recrutons des moniteurs, 
                  responsables de parc, commerciaux et plus encore.
                </p>
                <div className="space-y-3">
                  {[
                    "Contrats saisonniers et CDI",
                    "Formation complète assurée",
                    "Évolution de carrière possible",
                    "Ambiance dynamique et familiale"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-green-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0 md:pl-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Postes à pourvoir</h3>
                  <div className="space-y-3">
                    {[
                      "Moniteur accrobranche",
                      "Responsable parc",
                      "Agent d'accueil",
                      "Commercial B2B"
                    ].map((poste, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span className="text-green-100">{poste}</span>
                        <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">Recrute</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors duration-200">
                    Voir les offres détaillées
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Actualités Section */}
        <section id="actualites" className="mb-20">
          <div className="text-center mb-12">
            <Newspaper className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Actualités</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Suivez nos dernières nouveautés, événements spéciaux et projets de développement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ouverture d'un nouveau parc à Toulouse",
                date: "15 mars 2024",
                description: "Nous sommes ravis d'annoncer l'ouverture de notre premier parc dans le Sud de la France !",
                tag: "Nouveauté"
              },
              {
                title: "Événement spécial : Noël en forêt",
                date: "Décembre 2023",
                description: "Découvrez nos parcours illuminés et nos ateliers de Noël familiaux.",
                tag: "Événement"
              },
              {
                title: "Nouveau parcours extrême à Nemours",
                date: "Octobre 2023",
                description: "Testez notre nouveau parcours Black, le plus technique de notre réseau.",
                tag: "Innovation"
              }
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 p-6">
                  <span className="px-3 py-1 bg-white text-green-600 text-xs font-bold rounded-full">
                    {news.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.description}</p>
                  <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                    Lire l'article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nos partenaires Section */}
        <section id="partenaires" className="mb-20">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos partenaires</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des organisations qui partagent nos valeurs et nous accompagnent dans notre développement.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-xl p-6 flex items-center justify-center h-24 border border-gray-200 hover:border-green-300 transition-colors">
                  <div className="text-2xl font-bold text-gray-400">LOGO {index + 1}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nos engagements RSE</h3>
                <ul className="space-y-3">
                  {[
                    "Partenaire avec l'Office National des Forêts",
                    "Soutien aux associations locales",
                    "Matériaux écoresponsables",
                    "Formation des jeunes en insertion"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Devenir partenaire</h3>
                <p className="text-gray-600 mb-4">
                  Vous souhaitez collaborer avec NoLimit Aventure ? Nous sommes ouverts aux partenariats 
                  commerciaux, institutionnels et associatifs.
                </p>
                <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200">
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt pour l'aventure ?</h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez les milliers d'aventuriers qui ont déjà découvert l'expérience NoLimit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors duration-200">
                Réserver maintenant
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-200">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}