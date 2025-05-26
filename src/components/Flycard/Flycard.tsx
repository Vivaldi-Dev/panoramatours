'use client';
import { Calendar } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image'

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

interface FlycardProps {
  flights?: Flight[];
  loading: boolean;
}

function FormPayment({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-[#0096ff] backdrop-opacity-100 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div>
            <h2 className="font-bold text-lg mb-4">1. Dados pessoais</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Nome completo</label>
                <input
                  type="text"
                  placeholder="Panorama Tours"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Data de Nascimento</label>
                <input
                  type="text"
                  placeholder="DD / MM / AA"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="panorama@gmail.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Telefone</label>
                <input
                  type="text"
                  placeholder="(+258)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">2. Dados do Pagamento</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Nome no cartão</label>
                <input
                  type="text"
                  placeholder="Panorama Tours"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Número do cartão</label>
                <input
                  type="text"
                  placeholder="XXXXXXXXXXXX"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Validade (MM/AA)</label>
                <input
                  type="text"
                  placeholder="DD / MM / AA"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Código de segurança (CVV)</label>
                <input
                  type="text"
                  placeholder="XYZ"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-10 gap-4">
          <button className="flex-1 bg-blue-100 text-blue-700 font-semibold py-2 rounded-lg hover:bg-blue-200">
            Falar com consultor
          </button>
          <button
            className="flex-1 bg-blue-200 text-blue-800 font-semibold py-2 rounded-lg hover:bg-blue-300"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button className="flex-1 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700">
            Confirmar viagem
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-gray-600">
          Após confirmar a viagem, verifique seu email onde enviaremos a sua <strong>fatura de pagamento</strong>
        </p>
      </div>
    </div>
  );
}

export default function Flycard({ flights = [], loading }: FlycardProps) {
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 6;

  const safeFlights = Array.isArray(flights) ? flights : [];

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = safeFlights.slice(indexOfFirstFlight, indexOfLastFlight);

  const totalPages = Math.ceil(safeFlights.length / flightsPerPage);
  const visiblePages = 5;
  const currentGroup = Math.floor((currentPage - 1) / visiblePages);
  const startPage = currentGroup * visiblePages + 1;
  const endPage = Math.min(startPage + visiblePages - 1, totalPages);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-lg text-blue-600">Buscando voos...</span>
        </div>
      </div>
    );
  }


  if (safeFlights.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Nenhum voo encontrado. Tente alterar seus critérios de busca.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1640px] mx-auto p-8 mb-30">
      {selectedFlight && (
        <FormPayment onClose={() => setSelectedFlight(null)} />
      )}

      <p className="font-bold text-2xl text-center">Bem-vindo à Atlantic Travel, Lda.</p>
      <p className="text-center text-sm text-[#0682CF] mb-20">
        O planeamento personalizado e seguro da sua viagem
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentFlights.map((flight) => (
          <div key={flight.id} className="relative mb-10">
            <div className="absolute top-2 -left-2 w-full h-full border-2 border-[#F9D423] rounded-2xl rotate-10 z-0 "></div>

            <div className="relative h-full rounded-2xl bg-white shadow-md flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    width={70}
                    height={20}
                    src="/icons/bracos.png"
                    alt="Airline"
                    className=" object-contain"
                  />
                  <div>
                    <p className="font-bold">{flight.airline}</p>
                    <p className="text-sm text-gray-500">
                      {flight.duration} • {flight.stops > 0 ? `${flight.stops} escala${flight.stops > 1 ? 's' : ''}` : 'Voo direto'}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Calendar className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="text-gray-500 text-sm">Partida</p>
                      <p className="font-semibold">{flight.departure.date} • {flight.departure.time}</p>
                      <p className="text-gray-700">{flight.departure.city} ({flight.departure.airport})</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Calendar className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="text-gray-500 text-sm">Chegada</p>
                      <p className="font-semibold">{flight.arrival.date} • {flight.arrival.time}</p>
                      <p className="text-gray-700">{flight.arrival.city} ({flight.arrival.airport})</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">Preço total</p>
                    <p className="font-bold text-2xl">{flight.price}</p>
                  </div>
                  <button
                    className="bg-[#F9D423] hover:bg-[#f8cc0a] text-[#0871B5] font-semibold py-2 px-4 rounded-full flex items-center gap-2"
                    onClick={() => setSelectedFlight(flight)}
                  >
                    <span>Selecionar</span>
                    <Image
                      width={20}
                      height={20} src="/icons/Arrow1.png" alt="Ícone" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {startPage > 1 && (
            <button
              onClick={() => paginate(startPage - 1)}
              className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              ‹
            </button>
          )}

          {Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
            const pageNum = startPage + index;
            return (
              <button
                key={pageNum}
                onClick={() => paginate(pageNum)}
                className={`px-4 py-2 rounded-full ${currentPage === pageNum
                  ? 'bg-[#0871B5] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {pageNum}
              </button>
            );
          })}

          {endPage < totalPages && (
            <button
              onClick={() => paginate(endPage + 1)}
              className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              ›
            </button>
          )}
        </div>
      </div>

    </div>
  );
}