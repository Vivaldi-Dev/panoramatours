import { useState } from 'react';
import axios from 'axios';

interface Flight {
  id: string;
  airline: string;
  departure: {
    airport: string;
    city: string;
    country: string;
    date: string;
    time: string;
  };
  arrival: {
    airport: string;
    city: string;
    country: string;
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
    const first = offer.itineraries[0].segments[0];
    const last = offer.itineraries[0].segments.at(-1)!;

    const base = `${offer.id || ''}-${first.departure.iataCode}-${first.departure.at}-${last.arrival.iataCode}-${last.arrival.at}-${offer.price.total}`;
    let hash = 0;
    for (let i = 0; i < base.length; i++) {
      const char = base.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0;
    }
    return `flight-${Math.abs(hash).toString(36)}`;
  };

  const getAirlineName = (code: string): string => {
    const airlines: Record<string, string> = {
      '4Z': 'Airlink',
      'WV': 'FlyWestair',
      'TM': 'LAM Mozambique Airlines',
      'KQ': 'Kenya Airways',
      'ET': 'Ethiopian Airlines',
      'TA': 'LAM',
      'SA': 'South African Airways'
    };
    return airlines[code] || code;
  };

  const getCityName = (iataCode: string): string => {
    const cities: Record<string, string> = {
      'MPM': 'Maputo',
      'JNB': 'Joanesburgo',
      'LAD': 'Luanda',
      'HRE': 'Harare',
      'WDH': 'Windhoek',
      'LUN': 'Lusaka',
      'BEY': 'Beirute',
      'NBO': 'Nairóbi'
    };
    return cities[iataCode] || iataCode;
  };

  const getCountryName = (iataCode: string): string => {
    const countries: Record<string, string> = {
      'MPM': 'Moçambique',
      'JNB': 'África do Sul',
      'LAD': 'Angola',
      'HRE': 'Zimbábue',
      'WDH': 'Namíbia',
      'LUN': 'Zâmbia',
      'BEY': 'Líbano',
      'NBO': 'Quênia'
    };
    return countries[iataCode] || 'Desconhecido';
  };

  const formatDate = (iso: string): string =>
    new Date(iso).toLocaleDateString('pt-PT');

  const formatTime = (iso: string): string =>
    new Date(iso).toLocaleTimeString('pt-PT', {
      hour: '2-digit',
      minute: '2-digit'
    });

  const calculateDuration = (segments: Segment[]): string => {
    const totalMinutes = segments.reduce((acc, seg) => {
      const match = seg.duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
      const h = parseInt(match?.[1] || '0');
      const m = parseInt(match?.[2] || '0');
      return acc + (h * 60) + m;
    }, 0);
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    return `${h}h${m > 0 ? ` ${m}m` : ''}`;
  };

  const formatPrice = (amount: string, currency: string): string =>
    new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(parseFloat(amount));

  const transformFlightData = (apiData: ApiResponse): Flight[] => {
    if (!apiData?.data) return [];
    const seen = new Map<string, boolean>();

    return apiData.data.reduce((acc: Flight[], offer) => {
      const firstSeg = offer.itineraries[0].segments[0];
      const lastSeg = offer.itineraries[0].segments.at(-1)!;
      const airlineCode = firstSeg.operating?.carrierCode || firstSeg.carrierCode;
      const id = createFlightHash(offer);

      if (!seen.has(id)) {
        seen.set(id, true);
        acc.push({
          id,
          airline: getAirlineName(airlineCode),
          departure: {
            airport: firstSeg.departure.iataCode,
            city: getCityName(firstSeg.departure.iataCode),
            country: getCountryName(firstSeg.departure.iataCode),
            date: formatDate(firstSeg.departure.at),
            time: formatTime(firstSeg.departure.at)
          },
          arrival: {
            airport: lastSeg.arrival.iataCode,
            city: getCityName(lastSeg.arrival.iataCode),
            country: getCountryName(lastSeg.arrival.iataCode),
            date: formatDate(lastSeg.arrival.at),
            time: formatTime(lastSeg.arrival.at)
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
      const res = await axios.post<ApiResponse>('/api/search-flights', formData);
      const transformed = transformFlightData(res.data);
      setResults(transformed);
    } catch (err) {
      console.error('Erro ao buscar voos:', err);
      setError('Erro ao buscar voos. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, search };
}
