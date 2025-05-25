import React from 'react'
import Image from 'next/image'

function Card() {
    return (
        <div className='max-w-[1640px] mx-auto p-8 mb-30 mt-30'>
            <p className='font-bold text-2xl text-center '> Bem-vindo à Atlantic Travel, Lda.</p>
            <p className='text-center text-sm text-[#0682CF] mb-20'>O planeamento personalizado e seguro da sua viagem</p>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-20'>
                <div className="h-full min-h-[400px] sm:p-2 md:p-2 rounded-2xl bg-[url('/img/homemafrica.jpg')] bg-cover bg-center bg-no-repeat flex" >
                </div>

                <div className='relative'>
                    <div className="absolute top-2 -left-2 w-full h-full border-2 border-[#F9D423] rounded-2xl rotate-10 z-0"></div>

                    <div className="relative  h-full sm:min-h-[400px] md:min-h-[200px] sm:p-2 md:p-2 rounded-2xl bg-[#D9D9D9] flex flex-col justify-between">
                        <div className=' mb-0'>
                            <Image src="/icons/bracos.png" className='' alt="" width={70} height={50} />
                            <div className=' mt-4 mb-0 p-4'>
                                <div className='font-bold mb-5'>
                                    <p>Com mais de 15 anos</p>
                                    <p> transformando sonhos em</p>
                                    <p> experiências memoráveis</p>
                                </div>

                                <p className="text-sm ">
                                    Ajudamos milhares de viajantes a descobrir destinos, viver culturas e colecionar histórias, dentro e fora de Moçambique. Orgulhamo-nos de ser membros da IATA e da AVITUM, reforçando o nosso compromisso com padrões internacionais de qualidade. Ao longo da nossa história, conquistamos a confiança de milhares de viajantes e o reconhecimento de instituições de referência.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='relative'>
                    <div className="absolute top-2 -left-2 w-full h-full border-2 border-[#F9D423] rounded-2xl rotate-10 z-0"></div>
                    <div className="relative h-full sm:min-h-[400px] md:min-h-[200px] sm:p-2 md:p-2 rounded-2xl bg-[#D9D9D9] flex flex-col justify-between">
                        <div className=' mb-0'>
                            <Image src="/icons/aviao.png" alt="" width={70} height={50}  />
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
