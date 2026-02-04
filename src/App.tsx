import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { ActivityDetailPage } from './pages/ActivityDetailPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { GroupsPage } from './pages/GroupsPage';

// PARKS
import { ParkLayout } from './parks/ParkLayout';
import { ParkHome } from './parks/ParkHome';
import { ParkActivities } from './parks/ParkActivities';
import { ParkPrices } from './parks/ParkPrices';
import { ParkInfo } from './parks/ParkInfo';
import { ParkContact } from './parks/ParkContact';

import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">
          <Routes>
            {/* GLOBAL */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/activity/:id" element={<ActivityDetailPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/groups" element={<GroupsPage />} />

            {/* PARKS (mini-sites) */}
            <Route path="/parks/:parkId" element={<ParkLayout />}>
              <Route index element={<ParkHome />} />
              <Route path="activities" element={<ParkActivities />} />
              <Route path="prices" element={<ParkPrices />} />
              <Route path="info" element={<ParkInfo />} />
              <Route path="contact" element={<ParkContact />} />
            </Route>

            {/* LEGAL */}
            <Route path="/legal" element={<LegalPage title="Mentions légales" />} />
            <Route path="/privacy" element={<LegalPage title="Politique de confidentialité" />} />
            <Route path="/terms" element={<LegalPage title="Conditions générales de vente" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

// Simple legal page component
function LegalPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-md">
          <h1 className="text-green-800 mb-6">{title}</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Cette page contient les informations légales de NoLimit Aventure.
            </p>
            <p className="text-gray-600">
              Dans un environnement de production, cette page contiendrait les mentions légales complètes,
              la politique de confidentialité ou les conditions générales de vente selon le cas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
