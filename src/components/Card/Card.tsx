import React from 'react'
import Image from 'next/image'
import { Plane } from 'lucide-react';
import { FaHandshake } from 'react-icons/fa';


function Card() {
    return (
        <div className='max-w-[1640px] mx-auto p-8 mb-30 mt-30 '>
            <p className='font-bold text-2xl text-center mb-15'> Bem-vindo à Panoramatours, Lda.</p>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-20'>
                <div className="h-full min-h-[400px] sm:p-2 md:p-2 rounded-2xl bg-[url('/img/homemafrica.jpg')] bg-cover bg-center bg-no-repeat flex" >
                </div>

                <div className='relative'>
                    <div className="absolute top-2 -left-2 w-full h-full border-2 border-[#FF8700]  rounded-2xl rotate-10 z-0"></div>

                    <div className="relative  h-full sm:min-h-[400px] md:min-h-[200px] sm:p-2 md:p-2 rounded-2xl bg-[#D9D9D9] flex flex-col justify-between">
                        <div className=' mb-0'>
                           <FaHandshake className="w-10 h-10 text-[#FF8700]" />
                            <div className=' mt-4 mb-0 p-4'>
                                <div className='font-bold mb-5'>
                                    <p>Com mais de 5 anos</p>
                                    <p> transformando sonhos em</p>
                                    <p> experiências memoráveis</p>
                                </div>

                                <p className="text-sm ">
                                    A Panorama Tours é muito mais do que uma
                                    simples agência de viagens. É uma parceira
                                    estratégica para quem valoriza experiências
                                    autênticas, soluções ágeis e um atendimento
                                    diferenciado. Fundada com o propósito de
                                    inovar o setor de viagens e turismo em
                                    Moçambique, oferecemos um serviço comple
                                    to que alia tecnologia de ponta, atendimento
                                    humanizado e uma equipa experiente e apaix
                                    onada por criar memórias inesquecíveis.
                                    Estamos preparados para servir tanto clientes
                                    particulares como corporações, oferecendo
                                    um serviço flexível, seguro e adaptado às mais
                                    diversas necessidades  desde uma viagem
                                    de lazer até à gestão integral de viagens
                                    empresariais complexas.                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='relative'>
                    <div className="absolute top-2 -left-2 w-full h-full border-2 border-[#FF8700] rounded-2xl rotate-10 z-0"></div>
                    <div className="relative h-full sm:min-h-[400px] md:min-h-[200px] sm:p-2 md:p-2 rounded-2xl bg-[#D9D9D9] flex flex-col justify-between">
                        <div className=' mb-0'>
                           <Plane className="w-10 h-10 text-[#FF8700]" />
                            <div className=' mt-4 mb-0 p-4'>
                                <div className='font-bold mb-5'>
                                    <p>Garantimos profissionalismo,</p>
                                    <p>segurança e excelência em</p>
                                    <p>cada passo da tua jornada.</p>
                                </div>


                                <p className="text-sm ">
                                    Do bilhete ao regresso, planeamos contigo, dos destinos mais próximos às aventuras internacionais, temos soluções à tua medida. Do primeiro contacto ao pós-viagem, estamos sempre ao teu lado.                            </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card
