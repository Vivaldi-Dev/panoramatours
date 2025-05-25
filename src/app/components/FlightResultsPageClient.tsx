
'use client';

import Flycard from '@/components/Flycard/Flycard';
import { useFlightSearch } from '@/hooks/useFlightSearch';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FlightResultsPageClient() {
  const searchParams = useSearchParams();
  const { search, results, loading: flightLoading } = useFlightSearch();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      const searchData = {
        origem: searchParams.get('origem') || '',
        destino: searchParams.get('destino') || '',
        dataInicio: searchParams.get('dataInicio') || '',
        dataFim: searchParams.get('dataFim') || '',
        adultos: parseInt(searchParams.get('adultos') || '1'),
        criancas: parseInt(searchParams.get('criancas') || '0')
      };
      
      console.log('Buscando voos com:', searchData);
      search(searchData);
      setInitialLoad(false);
    }
  }, [searchParams, initialLoad, search]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Flycard 
        flights={results} 
        loading={flightLoading} 
      />
    </div>
  );
}
