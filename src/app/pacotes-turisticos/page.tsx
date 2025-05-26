import React from 'react';
import Image from 'next/image'
export default function page() {
    return (
        <div>
            <div className='max-w-[1640px] mx-auto mt-40 p-8'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>

                    <div className='bg-[#D9D9D9] rounded-4xl relative'>
                        <div className='flex items-center p-4 gap-4'>
                            <div className='flex items-center justify-center w-20 h-20 rounded-full'>
                                <Image width={70} height={10} src="/icons/mozicon.png" alt="" className='rounded-full' />
                            </div>
                            <div className='font-bold text-black'>
                                <p>Pemba</p>
                                <p>Praias Paradisíacas</p>
                            </div>
                        </div>
                        <div className='h-40'>
                            <Image
                                width={500} height={100}
                                src="/img/flyimg.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className='text-center mt-4 mb-20'>
                            <p className='text-sm font-semibold text-[#000000D4]'>Pemba, Cabo Delgado</p>
                            <p className='text-2xl font-bold'>46.347 MZN</p>
                        </div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex items-center bg-[#FF8700] py-2 px-5 rounded-[30px] gap-4 shadow-md">
                            <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                                <Image
                                    width={20} height={20}
                                    src="/icons/Arrow1.png"
                                    alt="Ícone destino"
                                    className="w-4 h-4 object-contain"
                                />
                            </div>
                            <p className='font-semibold text-white'>Selecionar Tarifa</p>
                        </div>
                    </div>

                    <div className='bg-[#D9D9D9] rounded-4xl relative'>
                        <div className='flex items-center p-4 gap-4'>
                            <div className='flex items-center justify-center w-20 h-20 rounded-full'>
                                <Image width={70} height={10} src="/icons/mozicon.png" alt="" className='rounded-full' />
                            </div>
                            <div className='font-bold text-black'>
                                <p>Vilanculos</p>
                                <p>Lua de Mel</p>
                            </div>
                        </div>
                        <div className='h-40'>
                            <Image
                                width={500} height={100}
                                src="/img/flyimg.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className='text-center mt-4 mb-20'>
                            <p className='text-sm font-semibold text-[#000000D4]'>Vilanculos Beach Lodge</p>
                            <p className='text-2xl font-bold'>138.390 MZN</p>
                        </div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex items-center bg-[#FF8700] py-2 px-5 rounded-[30px] gap-4 shadow-md">
                            <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                                <Image
                                    width={20} height={20}
                                    src="/icons/Arrow1.png"
                                    alt="Ícone destino"
                                    className="w-4 h-4 object-contain"
                                />
                            </div>
                            <p className='font-semibold text-white'>Selecionar Tarifa</p>
                        </div>
                    </div>

                    <div className='bg-[#D9D9D9] rounded-4xl relative'>
                        <div className='flex items-center p-4 gap-4'>
                            <div className='flex items-center justify-center w-20 h-20 rounded-full'>
                                <Image width={70} height={10} src="/icons/mozicon.png" alt="" className='rounded-full' />
                            </div>
                            <div className='font-bold text-black'>
                                <p>Ilha de Bazaruto</p>
                                <p>Luxo Total</p>
                            </div>
                        </div>
                        <div className='h-40'>
                            <Image
                                width={500} height={100}
                                src="/img/flyimg.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className='text-center mt-4 mb-20'>
                            <p className='text-sm font-semibold text-[#000000D4]'>Anantara Bazaruto Resort</p>
                            <p className='text-2xl font-bold'>Consultar Preço</p>
                        </div>
                        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex items-center bg-[#FF8700] py-2 px-5 rounded-[30px] gap-4 shadow-md">
                            <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                                <Image
                                    width={20} height={20}
                                    src="/icons/Arrow1.png"
                                    alt="Ícone destino"
                                    className="w-4 h-4 object-contain"
                                />
                            </div>
                            <p className='font-semibold text-white'>Selecionar Tarifa</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
