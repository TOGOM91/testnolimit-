import { useState, useEffect } from 'react';

interface FooterData {
  colors: {
    background: string;
    primary: string;
    secondary: string;
  };
  contact: {
    phone: string;
    email: string;
    description: string;
  };
  stats: Array<{
    number: string;
    label: string;
  }>;
  quickLinks: Array<{
    label: string;
    to: string;
  }>;
  activities: Array<{
    name: string;
    emoji: string;
    link: string;
  }>;
  legalLinks: Array<{
    label: string;
    to: string;
  }>;
  cta: {
    title: string;
    subtitle: string;
  };
  parks: Array<{
    id: string;
    name: string;
    location: string;
    emoji: string;
    minAge: number;
    rating: number;
    minPrice: number;
    activities: string[];
  }>;
  showBackToTop: boolean;
  currentYear: number;
}

export function useFooterData() {
  const [data, setData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const apiUrl = 'http://localhost/test-nolimit/wordpress/wp-json/nolimit/v1/footer';
    
    fetch(apiUrl)
      .then(res => {
        if (!res.ok) throw new Error('Erreur API Footer');
        return res.json();
      })
      .then(data => {
        console.log('✅ Footer chargé depuis WordPress:', data);
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ Erreur chargement footer:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
