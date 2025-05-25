import { useState } from 'react';
import axios from 'axios';

interface Flight {
  id: string;
  airline: string;
  departure: {
    airport: string;
    city: string;
    date: string;
    time: string;
  };
  arrival: {
    airport: string;
    city: string;
    date: string;
    time: string;
  };
  price: string;
  duration: string;
  stops: number;
}

interface Segment {
  departure: {
    iataCode: string;
    at: string;
  };
  arrival: {
    iataCode: string;
    at: string;
  };
  operating?: {
    carrierCode: string;
  };
  carrierCode: string;
  duration: string;
}

interface Itinerary {
  segments: Segment[];
}

interface Price {
  total: string;
  currency: string;
}

interface FlightOffer {
  id?: string;
  itineraries: Itinerary[];
  price: Price;
}

interface ApiResponse {
  data?: FlightOffer[];
}

interface SearchParams {
  origem: string;
  destino: string;
  dataInicio: string;
  dataFim: string;
  adultos: number;
  criancas: number;
}

export function useFlightSearch() {
  const [results, setResults] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createFlightHash = (offer: FlightOffer): string => {
    const firstSegment = offer.itineraries[0].segments[0];
    const lastSegment = offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1];
    
    const baseString = `${offer.id || ''}-${
      firstSegment.departure.iataCode
    }-${firstSegment.departure.at}-${
      lastSegment.arrival.iataCode
    }-${lastSegment.arrival.at}-${
      offer.price.total
    }`;
    
    let hash = 0;
    for (let i = 0; i < baseString.length; i++) {
      const char = baseString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return `flight-${Math.abs(hash).toString(36)}`;
  };

  const getAirlineName = (code: string): string => {
    const airlines: Record<string, string> = {
      '4Z': 'Airlink',
      'WV': 'FlyWestair',
      'TM': 'LAM Mozambique',
      'KQ': 'Kenya Airways'
    };
    return airlines[code] || code;
  };

  const getCityName = (airportCode: string): string => {
    const cities: Record<string, string> = {
      'MPM': 'Maputo',
      'JNB': 'Joanesburgo',
      'LAD': 'Luanda',
      'HRE': 'Harare',
      'WDH': 'Windhoek'
    };
    return cities[airportCode] || airportCode;
  };

  const formatDate = (isoString: string): string => {
    return new Date(isoString).toLocaleDateString('pt-PT');
  };

  const formatTime = (isoString: string): string => {
    return new Date(isoString).toLocaleTimeString('pt-PT', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const calculateDuration = (segments: Segment[]): string => {
    const totalMinutes = segments.reduce((total, segment) => {
      const duration = segment.duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
      const hours = parseInt(duration?.[1] || '0');
      const minutes = parseInt(duration?.[2] || '0');
      return total + (hours * 60) + minutes;
    }, 0);
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  };

  const formatPrice = (amount: string, currency: string): string => {
    const numericAmount = parseFloat(amount);
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numericAmount);
  };

  const transformFlightData = (apiData: ApiResponse): Flight[] => {
    if (!apiData?.data) return [];

    const uniqueFlights = new Map<string, boolean>();

    return apiData.data.reduce((acc: Flight[], offer: FlightOffer) => {
      const firstSegment = offer.itineraries[0].segments[0];
      const lastSegment = offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1];
      const airlineCode = firstSegment.operating?.carrierCode || firstSegment.carrierCode;

      const flightHash = createFlightHash(offer);

      if (!uniqueFlights.has(flightHash)) {
        uniqueFlights.set(flightHash, true);

        acc.push({
          id: flightHash,
          airline: getAirlineName(airlineCode),
          departure: {
            airport: firstSegment.departure.iataCode,
            city: getCityName(firstSegment.departure.iataCode),
            date: formatDate(firstSegment.departure.at),
            time: formatTime(firstSegment.departure.at)
          },
          arrival: {
            airport: lastSegment.arrival.iataCode,
            city: getCityName(lastSegment.arrival.iataCode),
            date: formatDate(lastSegment.arrival.at),
            time: formatTime(lastSegment.arrival.at)
          },
          price: formatPrice(offer.price.total, offer.price.currency),
          duration: calculateDuration(offer.itineraries[0].segments),
          stops: offer.itineraries[0].segments.length - 1
        });
      }
      return acc;
    }, []);
  };

  const search = async (formData: SearchParams) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<ApiResponse>('https://panoramatours.co.mz:4000/api/search-flights', formData);
      const transformedData = transformFlightData(response.data);
      setResults(transformedData);
    } catch (err) {
      console.error('Erro na busca de voos:', err);
      setError('Erro ao buscar voos. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, search };
}