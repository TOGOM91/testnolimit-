import { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Gift, 
  Briefcase, 
  Heart, 
  PartyPopper,
  Check, 
  Send,
  Building,
  GraduationCap,
  Crown,
  UsersRound,
  Ticket,
  ArrowRight
} from 'lucide-react';
import React from 'react';

export function GroupsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupType: '',
    participantCount: '',
    preferredDate: '',
    park: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const groupTypes = [
    {
      icon: Building,
      name: 'Pour les entreprises',
      description: 'Team-building, séminaires, incentives',
      features: [
        'Programmes sur mesure',
        'Activités collaboratives',
        'Salles de réunion',
        'Analyse post-événement'
      ],
      color: 'from-blue-500 to-blue-600',
      minParticipants: 10,
      target: 'Professionnels'
    },
    {
      icon: GraduationCap,
      name: 'Pour les Enfants',
      description: 'Écoles, centres de loisirs, anniversaires',
      features: [
        'Activités pédagogiques',
        'Encadrement renforcé',
        'Espace sécurisé',
        'Goûter inclusif'
      ],
      color: 'from-green-500 to-green-600',
      minParticipants: 8,
      target: '3-17 ans'
    },
    {
      icon: Crown,
      name: 'Pour les adultes (+18 ans)',
      description: 'EVG, EVJF, anniversaires (+6 personnes)',
      features: [
        'Parcours privatisés',
        'Challenges personnalisés',
        'Bar et restauration',
        'Photos souvenir'
      ],
      color: 'from-purple-500 to-purple-600',
      minParticipants: 6,
      target: 'Adults'
    },
    {
      icon: UsersRound,
      name: 'Pour la famille',
      description: 'Réunions familiales, célébrations (+6 personnes)',
      features: [
        'Parcours multi-âges',
        'Espace privatisé',
        'Menu familial',
        'Animations incluses'
      ],
      color: 'from-orange-500 to-orange-600',
      minParticipants: 6,
      target: 'Familles'
    },
    {
      icon: Ticket,
      name: 'Pour les CSE',
      description: 'Vente groupée de billets, événements spéciaux',
      features: [
        'Tarifs négociés',
        'Billets nominatifs',
        'Planning flexible',
        'Contact dédié'
      ],
      color: 'from-red-500 to-red-600',
      minParticipants: 20,
      target: 'Comités d\'entreprise'
    }
  ];

  const groupAdvantages = [
    'Tarifs dégressifs selon la taille du groupe',
    'Coordinateur dédié à votre événement',
    'Planning personnalisé selon vos besoins',
    'Paiement en plusieurs fois sans frais',
    'Espaces privatifs disponibles gratuitement',
    'Options restauration variées (du snack au traiteur)',
    'Assurance annulation et modification flexible',
    'Photos et vidéos souvenirs offertes'
  ];

  const successStories = [
    {
      company: 'TechStart Inc.',
      type: 'Team-building',
      participants: 45,
      feedback: 'Une journée exceptionnelle qui a renforcé notre cohésion d\'équipe !',
      rating: 5
    },
    {
      company: 'École Primaire Jean Moulin',
      type: 'Sortie scolaire',
      participants: 60,
      feedback: 'Les enfants étaient ravis, tout était parfaitement organisé.',
      rating: 5
    },
    {
      company: 'Famille Martin',
      type: 'Anniversaire familial',
      participants: 25,
      feedback: 'Des souvenirs inoubliables créés pour les grands-parents !',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1653154138513-ed13199917e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Événements groupes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 container mx-auto">
          <h1 className="text-white mb-6">Groupes & Événements</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Des expériences sur mesure pour tous vos événements collectifs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
              📊 De 6 à 200 participants
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
              🎯 Programmes personnalisés
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
              💰 Meilleur prix garanti
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Group Types */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-green-800 mb-4">Nos formules groupes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une solution adaptée pour chaque type de groupe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.name}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-r ${type.color} w-14 h-14 rounded-xl flex items-center justify-center`}>
                      <Icon className="size-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {type.target}
                    </span>
                  </div>
                  <h3 className="text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{type.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Participants minimum</span>
                      <span className="font-bold text-green-600">{type.minParticipants}+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                        style={{ width: `${(type.minParticipants / 50) * 100}%` }}
                      />
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-700">
                        <Check className="size-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-xl hover:from-green-50 hover:to-green-100 hover:text-green-700 transition-all group-hover:shadow-md flex items-center justify-center gap-2">
                    En savoir plus
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Advantages */}
        <section className="mb-20 bg-gradient-to-br from-green-50 via-white to-orange-50 rounded-3xl p-8 md:p-12 border border-green-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-green-800 mb-4">Avantages exclusifs groupes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nous simplifions l'organisation de votre événement pour vous garantir une expérience sans souci
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {groupAdvantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-5 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <Check className="size-4 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-green-800 mb-4">Ils nous font confiance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les retours d'expérience de nos clients groupes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900">{story.company}</h4>
                    <p className="text-sm text-gray-500">{story.type}</p>
                  </div>
                  <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
                    <span className="text-green-700 font-bold">{story.rating}.0</span>
                    <span className="text-green-600 ml-1">★</span>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">"{story.feedback}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Users className="size-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{story.participants} participants</span>
                  </div>
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                    Voir le témoignage complet →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quote Form */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-green-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Users className="size-14 text-green-600 mb-6" />
                <h2 className="text-green-800 mb-4">Demande de devis gratuit</h2>
                <p className="text-gray-600 mb-6">
                  Notre équipe vous accompagne dans l'organisation de votre événement sur mesure.
                  Remplissez ce formulaire et recevez votre devis personnalisé sous 24h.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="size-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Réponse rapide</h4>
                      <p className="text-sm text-gray-600">Devis sous 24h ouvrées</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="size-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Sans engagement</h4>
                      <p className="text-sm text-gray-600">Proposition gratuite et sans engagement</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center h-full flex flex-col justify-center">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="size-8 text-white" />
                    </div>
                    <h3 className="text-green-800 mb-3">Demande envoyée !</h3>
                    <p className="text-green-700 mb-6">
                      Nous avons bien reçu votre demande de devis. Notre équipe spécialisée groupes vous contactera dans les 24h pour élaborer ensemble votre événement sur mesure.
                    </p>
                    <div className="text-sm text-green-600">
                      📞 Vous pouvez aussi nous appeler au 01 23 45 67 89
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-gray-700 mb-2 text-sm font-medium">Type de groupe *</label>
                      <select
                        value={formData.groupType}
                        onChange={(e) => setFormData({ ...formData, groupType: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez votre type de groupe</option>
                        <option value="entreprise">Entreprise / Team-building</option>
                        <option value="enfants">Enfants / École / Anniversaire</option>
                        <option value="adultes">Adultes / EVG-EVJF</option>
                        <option value="famille">Famille / Réunion</option>
                        <option value="cse">CSE / Comité d'entreprise</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm font-medium">Participants *</label>
                        <input
                          type="number"
                          value={formData.participantCount}
                          onChange={(e) => setFormData({ ...formData, participantCount: e.target.value })}
                          required
                          min="6"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="15"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm font-medium">Budget estimé</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Budget approximatif</option>
                          <option value="500-1000">500-1000€</option>
                          <option value="1000-2000">1000-2000€</option>
                          <option value="2000-5000">2000-5000€</option>
                          <option value="5000+">5000€ et plus</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm font-medium">Votre nom *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm font-medium">Email *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="jean@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 text-sm font-medium">Message / Besoins spécifiques</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                        placeholder="Décrivez-nous votre projet, activités souhaitées, dates envisagées..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all hover:shadow-lg flex items-center justify-center gap-2 font-bold text-lg"
                    >
                      Obtenir mon devis gratuit
                      <ArrowRight className="size-5" />
                    </button>
                    
                    <p className="text-center text-xs text-gray-500">
                      En soumettant ce formulaire, vous acceptez nos conditions générales et notre politique de confidentialité.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              📞 Préférez-vous échanger par téléphone ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0123456789" 
                className="px-6 py-3 bg-white border border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition-colors font-medium"
              >
                Appeler le 01 23 45 67 89
              </a>
              <a 
                href="mailto:groupes@nolimit-aventure.fr" 
                className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium"
              >
                groupes@nolimit-aventure.fr
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}