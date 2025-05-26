'use client';
import { useAirportSearch } from '@/hooks/useAirportSearch';
import React, { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Airport {
  id?: string;
  iataCode: string;
  name: string;
  cityName: string;
  countryName: string;
}

interface FormData {
  origem: string;
  destino: string;
  dataInicio: string;
  dataFim: string;
  adultos: number;
  criancas: number;
}

export default function FlightSearchForm() {
  const router = useRouter();
  const origemRef = useRef<HTMLDivElement>(null);
  const destinoRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState({
    origem: false,
    destino: false
  });

  const [formData, setFormData] = useState<FormData>({
    origem: '',
    destino: '',
    dataInicio: '',
    dataFim: '',
    adultos: 1,
    criancas: 0
  });

  const {
    setSearchTerm: setOrigemSearch,
    suggestions: origemSuggestions,
    loading: origemLoading,
    error: origemError,
    clearSuggestions: clearOrigemSuggestions
  } = useAirportSearch();

  // Hook para busca de aeroportos (destino)
  const {
    setSearchTerm: setDestinoSearch,
    suggestions: destinoSuggestions,
    loading: destinoLoading,
    error: destinoError,
    clearSuggestions: clearDestinoSuggestions
  } = useAirportSearch();

  // Fechar dropdowns quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (origemRef.current && !origemRef.current.contains(event.target as Node)) {
        setShowDropdown(prev => ({ ...prev, origem: false }));
      }
      if (destinoRef.current && !destinoRef.current.contains(event.target as Node)) {
        setShowDropdown(prev => ({ ...prev, destino: false }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [id]: id === 'adultos' || id === 'criancas'
        ? Math.max(0, parseInt(value) || 0)
        : value
    }));

    if (id === 'origem') {
      setOrigemSearch(value);
      setShowDropdown(prev => ({ ...prev, origem: value.length > 1 }));
    }
    if (id === 'destino') {
      setDestinoSearch(value);
      setShowDropdown(prev => ({ ...prev, destino: value.length > 1 }));
    }
  };

  const handleSelectAirport = (field: 'origem' | 'destino', airport: Airport) => {
    // Atualiza o campo no formulário com o código IATA
    setFormData(prev => ({
      ...prev,
      [field]: airport.iataCode
    }));

    // Fecha o dropdown
    setShowDropdown(prev => ({ ...prev, [field]: false }));

    // Limpa as sugestões
    if (field === 'origem') {
      clearOrigemSuggestions();
    } else {
      clearDestinoSuggestions();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.origem || !formData.destino || !formData.dataInicio) {
      alert('Preencha origem, destino e data de ida');
      return;
    }

    router.push(
      `/transporte?origem=${formData.origem}` +
      `&destino=${formData.destino}` +
      `&dataInicio=${formData.dataInicio}` +
      `&dataFim=${formData.dataFim || ''}` +
      `&adultos=${formData.adultos}` +
      `&criancas=${formData.criancas}`
    );
  };

  // Componente de sugestões de aeroporto
  const AirportSuggestions = ({
    suggestions,
    loading,
    error,
    onSelect,
    show
  }: {
    suggestions: Airport[];
    loading: boolean;
    error: string | null;
    onSelect: (airport: Airport) => void;
    show: boolean;
  }) => {
    if (!show) return null;

    return (
      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md max-h-60 overflow-auto border border-gray-300">
        {loading && <div className="px-4 py-2 text-gray-500">Carregando...</div>}
        {error && <div className="px-4 py-2 text-red-500">{error}</div>}
        {!loading && !error && suggestions.length === 0 && (
          <div className="px-4 py-2 text-gray-500">Nenhum aeroporto encontrado</div>
        )}
        {suggestions.map((airport) => (
          <div
            key={`${airport.iataCode}-${airport.cityName}`}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onMouseDown={() => onSelect(airport)} // ✅ Aqui está o ajuste principal
          >
            <div className="font-semibold">
              {airport.name} ({airport.iataCode})
            </div>
            <div className="text-sm text-gray-600">
              {airport.cityName}, {airport.countryName}
            </div>
          </div>
        ))}

      </div>
    );
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:mb-6">
          <div className="relative" ref={origemRef}>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="origem">
              Origem
            </label>
            <div className="border border-gray-300 rounded flex items-center px-4 py-3 bg-white">
              <Image width={10} height={10} className="w-5 h-5 mr-3" src="/icons/origem.png" alt="Ícone origem" />
              <input
                className="appearance-none block w-full text-gray-700 bg-transparent focus:outline-none"
                id="origem"
                type="text"
                placeholder="Cidade ou código do aeroporto"
                value={formData.origem}
                onChange={(e) =>
                  handleInputChange({ target: { id: 'origem', value: e.target.value.toUpperCase() } })
                }
                onFocus={() => setShowDropdown(prev => ({ ...prev, origem: true }))}
                required
              />

            </div>
            <AirportSuggestions
              suggestions={origemSuggestions}
              loading={origemLoading}
              error={origemError}
              onSelect={(airport) => handleSelectAirport('origem', airport)}
              show={showDropdown.origem && formData.origem.length > 1}
            />
          </div>

          <div className="relative" ref={destinoRef}>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="destino">
              Destino
            </label>
            <div className="border border-gray-300 rounded flex items-center px-4 py-3 bg-white">
              <Image width={10} height={10} className="w-5 h-5 mr-3" src="/icons/destino.png" alt="Ícone destino" />
              <input
                className="appearance-none block w-full text-gray-700 bg-transparent focus:outline-none"
                id="destino"
                type="text"
                placeholder="Cidade ou código do aeroporto"
                value={formData.destino}
                onChange={(e) =>
                  handleInputChange({ target: { id: 'destino', value: e.target.value.toUpperCase() } })
                }
                onFocus={() => setShowDropdown(prev => ({ ...prev, destino: true }))}
                required
              />

            </div>
            <AirportSuggestions
              suggestions={destinoSuggestions}
              loading={destinoLoading}
              error={destinoError}
              onSelect={(airport) => handleSelectAirport('destino', airport)}
              show={showDropdown.destino && formData.destino.length > 1}
            />
          </div>

          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dataInicio">
              Data de Ida
            </label>
            <div className="border border-gray-300 rounded flex items-center px-4 py-3 bg-white">
              <Image width={20} height={20} className="w-5 h-5 mr-3" src="/icons/calendar.png" alt="Ícone calendário" />
              <input
                className="appearance-none block w-full text-gray-700 bg-transparent focus:outline-none"
                id="dataInicio"
                type="date"
                value={formData.dataInicio}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>

          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dataFim">
              Data de Volta (Opcional)
            </label>
            <div className="border border-gray-300 rounded flex items-center px-4 py-3 bg-white">
              <Image width={20} height={20} className="w-5 h-5 mr-3" src="/icons/calendar.png" alt="Ícone calendário" />
              <input
                className="appearance-none block w-full text-gray-700 bg-transparent focus:outline-none"
                id="dataFim"
                type="date"
                value={formData.dataFim}
                onChange={handleInputChange}
                min={formData.dataInicio || new Date().toISOString().split('T')[0]}
                disabled={!formData.dataInicio}
              />
            </div>
          </div>


          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="adultos">
              Adultos
            </label>
            <div className="border border-gray-300 rounded flex items-center px-4 py-3 bg-white">
              <Image width={20} height={20} className="w-5 h-5 mr-3" src="/icons/adult.png" alt="Ícone adulto" />
              <input
                className="appearance-none block w-full text-gray-700 bg-transparent focus:outline-none"
                id="adultos"
                type="number"
                min="1"
                max="10"
                value={formData.adultos}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>


          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="criancas">
              Crianças (2-12 anos)
            </label>
            <div className="border border-gray-300 rounded flex items-center px-4 py-3 bg-white">
              <Image width={20} height={20} className="w-5 h-5 mr-3" src="/icons/child.png" alt="Ícone criança" />
              <input
                className="appearance-none block w-full text-gray-700 bg-transparent focus:outline-none"
                id="criancas"
                type="number"
                min="0"
                max="10"
                value={formData.criancas}
                onChange={handleInputChange}
              />
            </div>
          </div>



        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-150">
            SIMULAR
          </button>
        </div>
      </form>
    </div>
  );
}