import React from 'react'
import { Facebook, Instagram, Phone, Linkedin } from "lucide-react";
import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='bg-[#D9D9D98C] pt-20'>
            <div className='max-w-[1440px] mx-auto px-5 mt-10 '>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 h-full '>

                    <div className="flex flex-col items-start justify-between h-full ">
                        <Image width={270} height={50} src="/logotipo.png" alt="Logo" className="" />
                        <div className='flex space-x-4 mb-10 mx-6'>
                            <a href="https://wa.me/258874030641" target="_blank" rel="noopener noreferrer">
                                <Phone className="w-6 h-6" />
                            </a>
                            <a href="https://facebook.com/suaempresa" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com/suaempresa" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/company/suaempresa" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div className="text-sm text-gray-700 space-y-2">
                        <h4 className="font-bold text-base text-black">Menu</h4>
                        <p> <Link href="/" className="hover:underline" >Início  </Link> </p>
                        <p><Link href="/" className="hover:underline">Início</Link></p>
                        <p><Link href="/sobre" className="hover:underline">Sobre Nós </Link> </p>
                        <p><Link href="/servicos" className="hover:underline">Serviços </Link> </p>
                        <p><Link href="/pacotes" className="hover:underline">Pacotes Turísticos </Link> </p>
                        <p><Link href="/contacto" className="hover:underline">Contacte-nos </Link> </p>
                    </div>

                    <div className="text-sm text-gray-700 space-y-2 mb-20">
                        <h4 className="font-bold text-base text-black">Contacte-nos</h4>
                        <p>📞 (+258) 87 403 0641  |  (+258) 84 749 1425</p>
                        <p>✉️ info@panoramatours.co.mz</p>
                        <p>📍 Av. Ho Chi Minh, 1881 R/C, Flete Nr.2, Hotel Fátima</p>
                        <p className='font-bold text-black'>Horário Comercial: Segunda a Sexta-feira (9h00 - 17h00)</p>
                    </div>
                </div>


            </div>
            <div className='mt-10 border-t border-gray-300 pt-4 text-center text-white text-sm text-gray-600 p-4 bg-[#0871B5]'>
                © Copyright 2025 Panorama Tours, Lda. | Design by EquipePanorama Tours, Lda.
            </div>
        </footer>
    )
}
