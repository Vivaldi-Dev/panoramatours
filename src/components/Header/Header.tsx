'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa';
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='bg-black fixed top-0 w-full z-[999] py-3'>
                <div className='max-w-[1640px] px-10 mx-auto'>
                    <div className='flex justify-between items-center gap-4 '>
                        <div>
                            <Image width={250} height={40} src="/logotipo.png" alt="Logo" className='' />
                        </div>

                        <div className='hidden md:flex gap-8 items-center text-white font-semibold'>
                            <Link className='font-semibold md:text-sm lg:text-lg' href="/">Início</Link>
                            <Link className='font-semibold  md:text-sm lg:text-lg text-nowrap' href="/Sobre-Nos">Sobre Nós</Link>
                            <Link className='font-semibold  md:text-sm lg:text-lg text-nowrap' href="/servicos">Serviços</Link>
                            <Link className='font-semibold  md:text-sm lg:text-lg text-nowrap' href="/pacotes-turisticos">Pacotes Turísticos</Link>
                            {/* <Link className='' href="/blog">Blog & Inspiração</Link> */}
                            <Link className='font-semibold  md:text-sm lg:text-lg text-nowrap' href="/contacte-nos">Contacte-nos</Link>
                        </div>

                        <div className='hidden md:flex items-center gap-4'>
                            <p className='h-4 w-4 flex justify-center items-center bg-[#06853A] p-4 rounded-full'>
                                <a
                                    href="https://wa.me/258847491425 "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 text-xl"
                                >
                                    <FaWhatsapp className='text-white' />
                                </a>
                            </p>

                            <div className='flex items-center bg-[#FF8700] px-4 py-1 rounded-[41px] gap-4 w-full'>
                                <Image width={50} height={10} className='w-[30px]' src="/icons/phone.png" alt="Phone icon" />
                                <div className='text-sm'>

                                    <p className='font-semibold text-[12px] text-nowrap text-white'>(+258) 84 74 91 425</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            
                            <button onClick={() => setIsOpen(true)} className="md:hidden">
                                <Menu className="w-8 h-8 text-white" />
                            </button>
                        </div>
                    </div>


                    {isOpen && (
                        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-6">
                            <div className="flex justify-end">
                                <button onClick={() => setIsOpen(false)}>
                                    <X className="w-8 h-8 text-black" />
                                </button>
                            </div>
                            <Link className='font-semibold' href="/" onClick={() => setIsOpen(false)}>Início</Link>
                            <Link className='font-semibold' href="/Sobre-Nos" onClick={() => setIsOpen(false)}>Sobre Nós</Link>
                            <Link className='' href="/servicos" onClick={() => setIsOpen(false)}>Serviços</Link>
                            <Link className='' href="/pacotes-turisticos">Pacotes Turísticos</Link>
                            {/* <Link className='' href="/blog" onClick={() => setIsOpen(false)}>Blog & Inspiração</Link> */}
                            <Link className='' href="/contacte-nos" onClick={() => setIsOpen(false)}>Contacte-nos</Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}


