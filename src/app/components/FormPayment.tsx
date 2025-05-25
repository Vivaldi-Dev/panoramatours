import React from 'react';

export default function FormPayment() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md max-w-5xl mx-auto mt-10">
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

                <div className="absolute top-0 left-1/2 h-full border-l-2 border-black"></div>

              
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
                <button className="flex-1 bg-blue-200 text-blue-800 font-semibold py-2 rounded-lg hover:bg-blue-300">
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
    );
}
