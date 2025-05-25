import { useState, useEffect } from 'react';
import axios from 'axios';

interface Airport {
  iataCode: string;
  cityCode: string;
  name: string;
  cityName: string;
  countryName: string;
}

interface LocationAPIResponse {
  iataCode: string;
  name: string;
  address?: {
    cityCode?: string;
    cityName?: string;
    countryName?: string;
  };
}


export const useAirportSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchTerm.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchAirports = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://panoramatours.co.mz:4000/api/search', {
          params: {
            keyword: searchTerm,
            view: 'FULL'
          }
        });

        if (Array.isArray(response.data)) {
          const formattedAirports = response.data.map((location: LocationAPIResponse): Airport => ({
            iataCode: location.iataCode,
            cityCode: location.address?.cityCode || '',
            name: location.name,
            cityName: location.address?.cityName || '',
            countryName: location.address?.countryName || ''
          }));
          setSuggestions(formattedAirports);
        } else {
          setError('Formato de dados inesperado da API');
        }

      } catch (err: unknown) {
        console.error('Erro na busca de aeroportos:', err);

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Erro ao buscar aeroportos');
        }
      }

    };

    const debounceTimer = setTimeout(fetchAirports, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
    loading,
    error
  };
};
