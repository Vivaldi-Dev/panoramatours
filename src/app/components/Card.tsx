import React from 'react'
import Image from 'next/image'

function Card() {
    return (
        <div className='max-w-[1640px] mx-auto p-8 mb-30 mt-30'>
            <p className='font-bold text-4xl text-center '> O nosso lema é</p>
            <p className='text-center text-sm font-semibold text-[#0682CF] mb-20'>O planeamento personalizado e seguro da sua viagem</p>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-20'>


                <div className='relative'>
                    <div className="absolute top-2 -left-2 w-full h-full border-2 border-[#F9D423] rounded-2xl rotate-10 z-0"></div>

                    <div className="relative  h-full sm:min-h-[400px] md:min-h-[200px] sm:p-2 md:p-2 rounded-2xl bg-[#D9D9D9] flex flex-col justify-between">
                        <div className=' mb-0 p-4 '>
                            <div className='flex w-15 h-15 justify-center items-center  bg-[#0682CF] rounded-full '>
                                <Image width={30} height={10} src="/icons/vetor.png" alt="" />
                            </div>

                            <div className=' mt-4 mb-0'>
                                <div className='font-bold mb-5 text-2xl'>
                                    <p>Missão</p>
                                </div>

                                <p className="text-sm ">
                                    Proporcionar serviços turísticos de alta qualidade, intermediando produtos com ética profissional, transparência e respeito às necessidades dos nossos clientes.                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='relative'>
                    <div className="absolute top-2 -left-2 w-full h-full border-2 border-[#F9D423] rounded-2xl rotate-10 z-0"></div>

                    <div className="relative  h-full sm:min-h-[400px] md:min-h-[200px] sm:p-2 md:p-2 rounded-2xl bg-[#D9D9D9] flex flex-col justify-between">
                        <div className=' mb-0 p-4'>
                            <div className='flex w-15 h-15 justify-center items-center  bg-[#0682CF] rounded-full '>
                                <Image width={30} height={10} src="/icons/loader.png" alt="" />
                            </div>

                            <div className=' mt-4 mb-0'>
                                <div className='font-bold mb-5 text-2xl'>
                                    <p>Visão</p>
                                </div>

                                <p className="text-sm ">
                                    Ser reconhecida como agência de referência em Moçambique e além-fronteiras, destacando-nos pela excelência no planeamento de viagens e contribuição para o desenvolvimento do turismo.                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='relative'>
                    <div className="absolute top-2 -left-2 w-full h-full border-2 border-[#F9D423] rounded-2xl rotate-10 z-0"></div>
                    <div className="relative h-full sm:min-h-[400px] md:min-h-[200px] sm:p-2 md:p-2 rounded-2xl bg-[#D9D9D9] flex flex-col justify-between">
                        <div className=' mb-0 p-4'>
                            <div className='flex w-15 h-15 justify-center items-center  bg-[#0682CF] rounded-full '>
                                <Image width={30} height={10} src="/icons/userverso.png" alt="" />
                            </div>

                            <div className=' mt-4 mb-0'>
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
