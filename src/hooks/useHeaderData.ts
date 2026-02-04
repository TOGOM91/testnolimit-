import { useState, useEffect } from 'react';

interface HeaderData {
  logo: {
    url: string;
    alt: string;
  } | null;
  primaryColor: string;
  secondaryColor: string;
  greenColor: string;
  ctaText: string;
  ctaUrl: string;
  showParkSelector: boolean;
  menuItems: Array<{
    id: number;
    label: string;
    type: 'simple' | 'megamenu';
    url?: string;
    position: number;
    megaMenuType?: string;
    megaMenu?: any;
  }>;
  parks: Array<{
    id: string;
    name: string;
    location: string;
    emoji: string;
    url: string;
  }>;
}

export function useHeaderData() {
  const [data, setData] = useState<HeaderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // IMPORTANT : Remplacez par l'URL de votre WordPress
    const apiUrl = 'http://localhost/test-nolimit/wordpress/wp-json/nolimit/v1/header';
    
    fetch(apiUrl)
      .then(res => {
        if (!res.ok) throw new Error('Erreur API');
        return res.json();
      })
      .then(data => {
        console.log('✅ Données chargées depuis WordPress:', data);
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ Erreur chargement header:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}