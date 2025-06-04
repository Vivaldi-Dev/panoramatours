import Link from 'next/link'
import React from 'react'

function Services() {
    return (
        <div className='bg-[#D9D9D9] h-[600px]'>
            <div className='max-w-[1440px] mx-auto p-8'>
                <p className='font-semibold text-2xl text-center'>Serviços em Destaque</p>

                <div className='mt-10'>
                    <div className='flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto scrollbar-hide px-1'>

                        <div className="relative h-96 min-w-[80%] sm:min-w-0 shrink-0 rounded-3xl bg-[url('/img/mulher.jpg')] bg-cover bg-center bg-no-repeat">
                            <div className="absolute bottom-0 w-full min-h-[130px] p-4 bg-black/70 backdrop-blur-sm rounded-b-3xl flex flex-col justify-between">
                                <div>
                                    <p className='font-bold text-white mb-0 leading-none'>Pacotes Turísticos</p>
                                    <p className='font-bold text-white leading-none'>Personalizados</p>
                                    <p className='text-white font-semibold text-sm mb-1'>
                                        Roteiros únicos, criados à tua medida.
                                    </p>
                                </div>
                                 <Link href="/pacotes-turisticos">
                                    <p className="py-1.5 px-4 rounded-full bg-[#FF8700] text-[#fff] w-fit font-semibold text-sm">
                                        Ver opções
                                    </p>
                                </Link>
                            </div>
                        </div>

                        <div className="relative h-96 min-w-[80%] sm:min-w-0 shrink-0 rounded-3xl bg-[url('/img/visto.jpg')] bg-cover bg-center bg-no-repeat">
                            <div className="absolute bottom-0 w-full min-h-[130px] p-3 bg-black/70 backdrop-blur-sm rounded-b-3xl flex flex-col justify-between">
                                <div>
                                    <p className='font-bold text-white mb-0  leading-none'>Vistos</p>
                                    <p className='text-white font-semibold text-sm mb-1  leading-none'>
                                        Roteiros únicos, criados à tua medida.
                                    </p>
                                </div>
                                <Link href="/servicos">
                                    <p className="py-1.5 px-4 rounded-full bg-[#FF8700] text-[#fff] w-fit font-semibold text-sm">
                                        Ver opções
                                    </p>
                                </Link>
                            </div>
                        </div>

                        <div className="relative h-96 min-w-[80%] sm:min-w-0 shrink-0 rounded-3xl bg-[url('/img/reserlva.jpg')] bg-cover bg-center bg-no-repeat">
                            <div className="absolute bottom-0 w-full min-h-[130px] p-3 bg-black/70 backdrop-blur-sm rounded-b-3xl flex flex-col justify-between">
                                <div className="space-y-0">
                                    <p className='font-bold text-white leading-none'>Reserva de Hotéis & Transfers</p>
                                    <p className='font-bold text-white leading-none'>seguros e mais.</p>
                                    <p className='text-white font-semibold text-sm'>Viaja sem preocupações, tratamos de vistos.</p>
                                </div>

                                <Link href="/servicos">
                                    <p className="py-1.5 px-4 rounded-full bg-[#FF8700] text-[#fff] w-fit font-semibold text-sm">
                                        Ver opções
                                    </p>
                                </Link>
                            </div>
                        </div>

                        <div className="relative h-96 min-w-[80%] sm:min-w-0 shrink-0 rounded-3xl bg-[url('/img/consultor.jpg')] bg-cover bg-center bg-no-repeat">
                            <div className="absolute bottom-0 w-full min-h-[130px] p-3 bg-black/70 backdrop-blur-sm rounded-b-3xl flex flex-col justify-between">
                                <div>
                                    <p className='font-bold text-white mb-0 leading-none'>Reserva de Hotéis & Transfers</p>
                                    <p className='font-bold text-white mb-0 leading-none'>seguros e mais.</p>
                                    <p className='text-white font-semibold text-sm mb-1'>
                                        Viaja sem preocupações, tratamos de vistos.
                                    </p>
                                </div>
                                <p className='py-1.5 px-4 rounded-full bg-[#FF8700] text-[#fff] w-fit font-semibold text-sm'>
                                    
                                    Ver opções
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
