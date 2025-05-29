import React from 'react'

import Image from 'next/image'

export default function Pronto() {
    return (
        <div className='bg-[#0A4062]'>
            <div className='max-w-[1440px] mx-auto p-10'>
                <div className='mt-5'>
                    <p className='font-semibold sm:text-5xl text-white '>Pronto para a tua próxima aventura</p>
                    <p className='font-semibold text-white'>Simula agora o teu orçamento online ou fala com um dos nossos consultores </p>
                </div>
                <div className='block sm:flex items-center gap-4 mt-4'>
                    <div className="flex items-center bg-[rgba(0,0,0,0.52)] py-2 px-4 rounded-full gap-4 mb-5 sm:mb-0 ">
                        <p className=' rounded-full bg-[#F9D423] p-4'>
                            <Image width={30} height={30} className='w-4 h-4 sm:max-h-full sm:w-full' src="/icons/CreditCard.png" alt="" />
                        </p>
                        <p className='text-white font-semibold'>Simular orçamento</p>
                    </div>

                    <div className="flex items-center border-[#FFFFFF] border-2 py-2 px-4 rounded-full gap-4 ">
                        <p className=' rounded-full bg-[#F9D423] p-4'>
                            <Image width={30} height={30} className='w-4 h-4 sm:max-h-full sm:w-full' src="/icons/Vector.png" alt="" />
                        </p>
                        <p className='text-white font-semibold'>Falar com um consultor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
