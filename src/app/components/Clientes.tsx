import React from 'react'
import Image from 'next/image'

export default function Clientes() {
    return (
        <div className='mx-auto max-w-[1640px] mb-5 sm:p-8'>
            <div className='text-center'>
                <p className='text-2xl font-bold'>Nossos Clientes</p>
                <p className='text-black font-semibold text-sm'>
                    Ao longo dos anos, construímos relações de confiança com instituições
                </p>
                <p className='text-black font-semibold text-sm'>
                    públicas, ONGs e empresas privadas, incluindo:
                </p>
            </div>
            <div className='mt-30 sm:mt-0 h-[180px] sm:h-full flex sm:grid grid-cols-1 sm:grid-cols-5 gap-10  overflow-x-auto scrollbar-hide px-1'>
                {[
                    '/img/Rectangle8.jpg',
                    '/img/Rectangle2.png',
                    '/img/Rectangle3.png',
                    '/img/Rectangle4.png',
                    '/img/Rectangle.jpg'
                ].map((src, idx) => (
                    <div key={idx} className='shadow bg-white rounded-2xl flex justify-center h-full p-2'>
                        <Image className='w-[300px] ' src={src} alt={`Logo cliente ${idx + 1}`} width={100} height={100} style={{maxWidth:"none"}} />
                    </div>
                ))}
            </div>
        </div>
    )
}
