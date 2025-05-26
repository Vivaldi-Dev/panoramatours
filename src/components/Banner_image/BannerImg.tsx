import React from 'react'
import Image from 'next/image'

function BannerImg() {
    return (
        <div className=" h-[500px] bg-[url('/img/bannerimg.png')] bg-cover bg-center bg-no-repeat p-8" >
            <div className='p-8'>
                <p className='text-white mb-0'>Viagens Internacionais  | Viagens Nacionais</p>
                <p className='text-white text-6xl font-semibold'>Viaje com</p>
                <p className='text-white text-6xl font-semibold'> confiança!</p>
                <div className='text-white font-semibold mt-5'>
                    <p>Assine nossa newsletter e receba ofertas exclusivas, dicas</p>
                    <p>de viagem e novidades da Atlantic Travel.</p>


                    <div className='mt-5 flex items-center bg-[#FF8700] py-2 px-2 rounded-[30px] gap-4 w-2/12'>

                        <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                            <Image width={20} height={20}
                                src="/icons/Arrow1.png"
                                alt="Ícone destino"
                                className=" object-contain"
                            />
                        </div>

                        <p className='font-semibold text-white'>Assinar newsletter</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default BannerImg
