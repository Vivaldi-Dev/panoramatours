import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa';


export default function Header() {
    return (
        <>
            <div className='bg-black fixed top-0 w-full z-[999] py-3'>
                <div className='max-w-[1640px] mx-auto'>
                    <div className='flex justify-between items-center '>
                        <div>
                            <Image width={250} height={40} src="/logotipo.png" alt="Logo" className='' />
                        </div>

                        <div className='flex gap-8 items-center text-white font-semibold'>
                            <Link className='font-semibold' href="/">Início</Link>
                            <Link className='font-semibold' href="/Sobre-Nos">Sobre Nós</Link>
                            <Link className='' href="/servicos">Serviços</Link>
                            <Link className='' href="/pacotes-turisticos">Pacotes Turísticos</Link>
                            {/* <Link className='' href="/blog">Blog & Inspiração</Link> */}
                            <Link className='' href="/contacte-nos">Contacte-nos</Link>
                        </div>

                        <div className='flex items-center gap-4'>
                            <p className='h-4 w-4 flex justify-center items-center bg-[#06853A] p-4 rounded-full'>
                                <a
                                    href="https://wa.me/258849551298"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 text-xl"
                                >
                                    <FaWhatsapp className='text-white' />
                                </a>
                            </p>

                            <div className='flex items-center bg-[#0871B5] px-4 py-1 rounded-[41px] gap-4'>
                                <Image width={50} height={10} className='w-[30px]' src="/icons/phone.png" alt="Phone icon" />
                                <div className='text-sm'>
                                    <p className='text-[#F9D423] font-semibold mb-0'>Grátis:</p>
                                    <p className='font-semibold text-white'>(+258) 84 74 91 425</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


