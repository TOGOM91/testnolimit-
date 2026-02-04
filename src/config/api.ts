// API Configuration for NoLimit WordPress Integration
// Base URL for WordPress API (en développement local)
export const API_BASE_URL = 'http://localhost/test-nolimit/wordpress/wp-json/nolimit/v1';

// API Endpoint paths
export const API_ENDPOINTS = {
  header: `${API_BASE_URL}/header`,
    footer: `${API_BASE_URL}/footer`,
      home: `${API_BASE_URL}/home`,
        homeConfig: `${API_BASE_URL}/home-config`,
          parks: `${API_BASE_URL}/parks`,
            activities: `${API_BASE_URL}/activities`,
              faqs: `${API_BASE_URL}/faqs`,
                reviews: `${API_BASE_URL}/reviews`,
                  groups: `${API_BASE_URL}/groups`,
                    news: `${API_BASE_URL}/news`,
                      pourqui: `${API_BASE_URL}/pourqui`,
                        actualites: `${API_BASE_URL}/actualites`,
                        } as const;

                        // Helper function to make API requests
                        export const fetchAPI = async <T>(endpoint: string): Promise<T> => {
                          try {
                              const response = await fetch(endpoint);
                                  if (!response.ok) {
                                        throw new Error(`API Error: ${response.status} ${response.statusText}`);
                                            }
                                                return await response.json();
                                                  } catch (error) {
                                                      console.error(`Failed to fetch from ${endpoint}:`, error);
                                                          throw error;
                                                            }
                                                            };

                                                            // Types for API responses
                                                            export interface HeaderData {
                                                              logo_url?: string;
                                                                menu_items?: Array<{ label: string; url: string; submenu?: Array<{ label: string; url: string }> }>;
                                                                  contact_info?: { phone?: string; email?: string };
                                                                  }

                                                                  export interface FooterData {
                                                                    company_name?: string;
                                                                      description?: string;
                                                                        social_links?: Array<{ platform: string; url: string }>;
                                                                          contact_info?: { phone?: string; email?: string; address?: string };
                                                                            copyright?: string;
                                                                            }

                                                                            export interface HomeData {
                                                                              hero_title?: string;
                                                                                hero_subtitle?: string;
                                                                                  hero_image?: string;
                                                                                    sections?: Array<{ title: string; content: string; image?: string }>;
                                                                                    }

                                                                                    export interface Park {
                                                                                      id: number;
                                                                                        title: string;
                                                                                          description: string;
                                                                                            image?: string;
                                                                                              location?: string;
                                                                                                rating?: number;
                                                                                                }

                                                                                                export interface Activity {
                                                                                                  id: number;
                                                                                                    title: string;
                                                                                                      description: string;
                                                                                                        image?: string;
                                                                                                          price?: number;
                                                                                                            duration?: string;
                                                                                                            }

                                                                                                            export interface FAQ {
                                                                                                              id: number;
                                                                                                                question: string;
                                                                                                                  answer: string;
                                                                                                                  }

                                                                                                                  export interface Review {
                                                                                                                    id: number;
                                                                                                                      author: string;
                                                                                                                        content: string;
                                                                                                                          rating: number;
                                                                                                                            date?: string;
                                                                                                                            }

                                                                                                                            export interface Group {
                                                                                                                              id: number;
                                                                                                                                name: string;
                                                                                                                                  description: string;
                                                                                                                                    image?: string;
                                                                                                                                      members_count?: number;
                                                                                                                                      }

                                                                                                                                      export interface NewsItem {
                                                                                                                                        id: number;
                                                                                                                                          title: string;
                                                                                                                                            content: string;
                                                                                                                                              image?: string;
                                                                                                                                                date: string;
                                                                                                                                                  author?: string;
                                                                                                                                                  }