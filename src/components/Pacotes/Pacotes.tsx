import React from 'react'
import Image from 'next/image'
export default function Pacotes() {
    return (
        <div className='mt-30 mb-30'>
            <div className='max-w-[1440px] mx-auto p-8 relative'>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
                    <div className='relative'>
                        <div className='grid grid-cols-2  gap-4 mb-5'>
                            <div className=" h-32 rounded-2xl bg-[url('/img/praia.jpg')] bg-cover bg-center bg-no-repeat ">

                            </div>

                            <div className=" h-32 rounded-2xl bg-[url('/img/deserto.jpg')] bg-cover bg-center bg-no-repeat ">

                            </div>
                        </div>

                        <div className=" h-32 rounded-2xl bg-[url('/img/quarto.png')] bg-cover bg-center bg-no-repeat ">
                        </div>

                        <div className="absolute left-1/2  -translate-x-1/2 -translate-y-1/2 z-10 top-8">
                            <Image width={200}
                                height={40}
                                src="/img/woman.png"
                                alt="Ícone destino"
                                className="w-[450px]"
                            />
                        </div>

                    </div>

                    <div>
                        <div>
                            <p className='font-semibold text-[#0A4062] text-6xl'>Pacotes</p>
                            <p className='text-[#0A4062] text-6xl'>Turísticos</p>
                        </div>
                        <div className='text-[rgba(0,0,0,0.52)] text-sm mt-5'>
                            <p>Descubra Moçambique e o Mundo com a Atlantic Travel Lda.Oferecemos pacotes cuidadosamente planeados para todos os gostos e orçamentos:</p>
                        </div>

                        <div className='mt-5 flex items-center bg-[#FF8700] py-2 px-2 rounded-[30px] gap-4 w-5/12'>

                            <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                                <Image
                                    width={10}
                                    height={10}
                                    src="/icons/Arrow1.png"
                                    alt="Ícone destino"
                                    className="w-4 h-4 object-contain"
                                />
                            </div>

                            <p className='font-semibold text-[#fff]'>Pacotes Turísticos</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
