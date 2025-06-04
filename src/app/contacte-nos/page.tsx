import React from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'


export default function page() {
    return (
        <div>
            <div className='max-w-[1440px] mx-auto mt-30 p-5 sm:p-10'>
                <div className='bg-[#ff681a] p-8 rounded-2xl'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                        <div className='flex items-center gap-4 bg-white p-5 rounded-2xl'>
                            <div className='w-5 h-5 rounded-full bg-[#ff681a] p-5 flex justify-center items-center '>
                                <p> <MapPin className="w-5 h-5 text-blue-600" />  </p>
                            </div>

                            <div>
                                <p className='font-bold text-black text-nowrap'>Endereço</p>
                                <p className='text-sm text-nowrap'>Av. Ahmed Sekou Touré, 2773 R/C -</p>
                                <p>Cidade de Maputo - Moçambique</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 bg-white p-5 rounded-2xl'>
                            <div className='w-5 h-5 rounded-full bg-[#ff681a] p-5 flex justify-center items-center '>
                                <p> <Phone className="w-5 h-5 text-blue-600" />  </p>
                            </div>

                            <div>
                                <p className='font-bold text-black'>Contactos</p>
                                <ul className="list-disc list-inside">
                                    <li className='text-nowrap'>
                                        (+258) 87 403 0641
                                    </li>
                                    <li className='text-nowrap'>
                                        (+258) 84 749 1425
                                    </li>

                                    <li className='text-nowrap'>
                                        Whatsapp: 847491425
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 bg-white p-5 rounded-2xl'>
                            <div className='w-5 h-5 rounded-full bg-[#ff681a] p-5 flex justify-center items-center '>
                                <p> <Clock className="w-5 h-5 text-blue-600" />  </p>
                            </div>

                            <div>
                                <p className='font-bold text-black'>Horário</p>
                                <p className='text-sm text-nowrap'>Seg - Sex: 8:30 - 20:00</p>
                                <p className='text-nowrap'>Sábado: 9:30 - 21:30</p>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='text-center mt-10 mb-5'>
                    <p className='text-[#ff681a] font-bold mb-3'>Panorama Tours</p>
                    <p className='font-bold text-5xl mb-5'>Contacte-nos</p>
                    <p className='text-sm text-[#505050] font-semibold'>Comprometida em atingir e superar a satisfação das expectativas dos seus clientes. A Panorama Tours, apresenta uma estrutura bastante flexível e dinâmica, com uma equipe de front line altamente competente no ramo de negócios. Destaca-se também a comunicação fluente em Português, Inglês e línguas locais.</p>

                    <div className='mt-10'>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white sm:p-8 rounded-xl sm:shadow-md">
                            <div className="flex flex-col col-span-1">
                                <label htmlFor="nome" className="mb-2 font-semibold text-sm text-gray-700 text-start sm:text-center">Nome</label>
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Seu nome"
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col col-span-1">
                                <label htmlFor="email" className="mb-2 font-semibold text-sm text-gray-700 text-start sm:text-center">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="seu@email.com"
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col col-span-1">
                                <label htmlFor="telefone" className="mb-2 font-semibold text-sm text-gray-700 text-start sm:text-center">Telefone</label>
                                <input
                                    type="text"
                                    id="telefone"
                                    placeholder="+258 84 123 4567"
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col col-span-1">
                                <label htmlFor="assunto" className="mb-2 font-semibold text-sm text-gray-700 text-start sm:text-center">Assunto</label>
                                <input
                                    type="text"
                                    id="assunto"
                                    placeholder="Ex: Solicitar orçamento"
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col col-span-1 md:col-span-2">
                                <label htmlFor="mensagem" className="mb-2 font-semibold text-sm text-gray-700 text-start sm:text-center">Mensagem</label>
                                <textarea
                                    id="mensagem"
                                    rows={5}  
                                    placeholder="Escreva aqui a sua mensagem..."
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <div className="col-span-1 md:col-span-2 text-right">
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
                                >
                                    Enviar Mensagem
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
