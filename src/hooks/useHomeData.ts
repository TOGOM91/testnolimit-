import { useState, useEffect } from 'react';
import { API_ENDPOINTS, HomeData, fetchAPI } from '../config/api';

export const useHomeData = () => {
  const [data, setData] = useState<HomeData | null>(null);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState<Error | null>(null);

        useEffect(() => {
            const fetchData = async () => {
                  try {
                          setLoading(true);
                                  const homeData = await fetchAPI<HomeData>(API_ENDPOINTS.home);
                                          setData(homeData);
                                                  setError(null);
                                                        } catch (err) {
                                                                setError(err instanceof Error ? err : new Error('Failed to fetch home data'));
                                                                        setData(null);
                                                                              } finally {
                                                                                      setLoading(false);
                                                                                            }
                                                                                                };

                                                                                                    fetchData();
                                                                                                      }, []);

                                                                                                        return { data, loading, error };
                                                                                                        };