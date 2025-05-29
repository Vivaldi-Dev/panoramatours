import React from 'react'
import Image from 'next/image'

function Card() {
    return (
        <div className='max-w-[1640px] mx-auto pl-5 py-10 md:p-8 sm:mb-30 sm:mt-30'>
            {/* Wrapper para scroll em telas pequenas */}
            <div className="overflow-x-auto md:overflow-visible scrollbar-hide">

                <div className='flex md:grid md:grid-cols-3 gap-6 px-1 w-max md:w-full'>

                    {/* Card 1 */}
                    <div className='relative min-w-[250px] md:min-w-0'>
                        <div className="absolute top-2 left-2 w-full h-full border-2 border-[#ff681a] rounded-2xl rotate-10 z-0"></div>
                        <div className="w-[236px] md:w-full h-[300px] sm:min-h-[400px] md:min-h-[200px] rounded-2xl bg-[#D9D9D9] flex flex-col justify-between p-4 relative">
                            <div className='flex w-15 h-15 justify-center items-center bg-[#0682CF] rounded-full'>
                                <Image width={30} height={10} src="/icons/vetor.png" alt="" />
                            </div>
                            <div className='mt-4'>
                                <h2 className='font-bold mb-2 text-[12px] sm:text-2xl'>Missão</h2>
                                <p className="text-sm">Proporcionar serviços turísticos de alta qualidade...</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className="absolute top-2 -left-2 w-full h-full border-2 border-[#ff681a] rounded-2xl rotate-10 z-0"></div>

                        <div className=" w-[236px] md:w-full relative h-[300px] sm:h-full sm:min-h-[400px] md:min-h-[200px] sm:p-2 md:p-2 rounded-2xl bg-[#D9D9D9] flex flex-col justify-between">
                            <div className=' mb-0 p-4'>
                                <div className='flex w-15 h-15 justify-center items-center  bg-[#0682CF] rounded-full '>
                                    <Image width={30} height={10} src="/icons/loader.png" alt="" />
                                </div>

                                <div className=' mt-4 mb-0'>
                                    <div className='font-bold mb-2 sm:mb-5 text-[12px] sm:text-2xl '>
                                        <p>Visão</p>
                                    </div>

                                    <p className="text-sm ">
                                        Ser reconhecida como agência de referência em Moçambique e além-fronteiras, destacando-nos pela excelência no planeamento de viagens e contribuição para o desenvolvimento do turismo.                                </p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='relative'>
                        <div className="absolute top-2 -left-2 w-full h-full border-2 border-[#ff681a] rounded-2xl rotate-10 z-0"></div>
                        <div className="w-[236px] md:w-full relative  h-[300px] sm:h-full sm:min-h-[400px] md:min-h-[200px] sm:p-2 md:p-2 rounded-2xl bg-[#D9D9D9] flex flex-col justify-between">
                            <div className=' mb-0 p-4'>
                                <div className='flex w-15 h-15 justify-center items-center  bg-[#0682CF] rounded-full '>
                                    <Image width={30} height={10} src="/icons/userverso.png" alt="" />
                                </div>

                                <div className=' mt-4 mb-0'>
                                    <div className='font-bold mb-2 sm:mb-5 text-[12px] sm:text-2xl'>
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
        </div>

    )
}

export default Card
