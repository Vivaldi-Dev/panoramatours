"use client";
import Pronto from "@/components/Pronto/Pronto";
import React, { useState } from "react";
import Image from 'next/image';

interface Servico {
    id: number;
    titulo: string;
    imagem: string;
    descricao: string[];
}

const servicos = [
    {
        id: 1,
        titulo: "Passagens Aéreas",
        imagem: "/img/pagens.png",
        descricao: [
            "Nacionais e Internacionais com as Melhores Tarifas",
            "Emissão de bilhetes aéreos para voos domésticos e internacionais",
            "Acesso a tarifas promocionais exclusivas",
            "Reservas em classe económica, executiva e primeira classe",
            "Gestão de milhas e programas de fidelidade",
            "Parcerias com mais de 50 companhias aéreas para oferecer as melhores opções!",
        ],
    },
    {
        id: 2,
        titulo: "Viagens Corporativas",
        imagem: "/img/viajem.png",
        descricao: [
            "Organização de seminários e workshops",
            "Logística para conferências e feiras",
            "Gestão de viagens corporativas",
            "Programas de incentivo para colaboradores",
            "Já atendemos mais de 500 eventos corporativos!",
        ],
    },
    {
        id: 3,
        titulo: "Viagens de Lazer",
        imagem: "/img/Lazer.jpg",
        descricao: [
            "Emissão de bilhetes aéreos para voos domésticos e internacionais",
            "Acesso a tarifas promocionais exclusivas",
            "Reservas em classe económica, executiva e primeira classe",
            "Gestão de milhas e programas de fidelidade"
        ],
    },

    {
        id: 4,
        titulo: "Excursões Temáticas",
        imagem: "/img/Excursoes.jpg",
        descricao: [
            "Se está à procura de uma viagem que seja mais do que lazer, a Paranorama Tours tem o programa ideal para si! Apresentamos as nossas Excursões Temáticas, pensadas para quem deseja explorar, aprender e se encantar em cada detalhe.",

        ],
    },

    {
        id: 5,
        titulo: "Seguros de Viagens ",
        imagem: "/img/seguros.jpg",
        descricao: [
            "Cobertura para cancelamentos de viagem",
            "Assistência médica internacional",
            "Proteção contra extravio de bagagem",
            "Planos individuais e familiares"
        ],
    },

    {
        id: 6,
        titulo: "Acomodação ",
        imagem: "/img/Acomodacao.png",
        descricao: [
            "Reservas em hotéis, resorts e apartamentos",
            "Acesso a tarifas corporativas e descontos exclusivos",
            "Seleção de estabelecimentos por categoria e localização",
            "Reservas para grupos e eventos especiais"
        ],
    },

    {
        id: 7,
        titulo: "Team Buildings",
        imagem: "/img/buildings.jpg",
        descricao: [
            "Na Paranorama Tours, acreditamos que uma equipa forte se constrói também fora do escritório. É por isso que criámos programas especiais de Team Building, pensados para promover o espírito de grupo, a cooperação e o bem-estar — tudo isso em cenários inspiradores e descontraídos."
        ],
    },
];

export default function Page() {
    const [selecionado, setSelecionado] = useState<Servico>(servicos[0]);
    const [mobileAberto, setMobileAberto] = useState<number | null>(null);

    const toggleMobile = (id: number) => {
        setMobileAberto(prev => prev === id ? null : id);
    };

    return (
        <div>
            <div className="max-w-[1640px] mx-auto mt-30 sm:mt-40 px-4">

                <div className="hidden md:grid md:grid-cols-2">
                    <div className="mb-20">
                        <p className="text-sm font-bold">Panorama Tourds Lda.</p>
                        <p className="font-bold text-2xl">Nossos Serviços</p>
                        <div className="font-semibold text-sm">
                            <p>serviços turísticos, consolidando-nos como</p>
                            <p>Desde 2009, já facilitamos mais de 500.000 uma das agências mais experientes de</p>
                            <p>Moçambique.</p>
                        </div>

                        {servicos.map((servico) => (
                            <div
                                key={servico.id}
                                onClick={() => setSelecionado(servico)}
                                className={`border-b border-black mt-10 w-3/4 cursor-pointer ${selecionado.id === servico.id ? 'text-black' : 'text-black/30'
                                    }`}
                            >
                                <p className="px-4 py-2">{servico.titulo}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mb-10">
                        <div className="h-[400px]">
                            <Image
                                width={1000}
                                height={200}
                                src={selecionado.imagem}
                                alt={selecionado.titulo}
                                className="w-full h-full object-cover rounded-3xl"
                                priority
                            />
                        </div>

                        <div className="mt-10">
                            <p className="font-bold text-black text-xl">{selecionado.titulo}</p>
                            <div className="mt-5">
                                {selecionado.descricao[0] && <p>{selecionado.descricao[0]}</p>}
                                {selecionado.descricao.length > 1 && (
                                    <ul className="list-disc list-inside mt-2">
                                        {selecionado.descricao.slice(1).map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:hidden">
                    <p className="text-sm font-bold">Panorama Tourds Lda.</p>
                    <p className="font-bold text-2xl">Nossos Serviços</p>
                    <div className="font-semibold text-sm mb-8">
                        <p>serviços turísticos, consolidando-nos como</p>
                        <p>Desde 2009, já facilitamos mais de 500.000 uma das agências mais experientes de</p>
                        <p>Moçambique.</p>
                    </div>

                    {servicos.map((servico) => (
                        <div key={servico.id} className="mb-4 border-b border-gray-200">
                            <button
                                onClick={() => toggleMobile(servico.id)}
                                className="flex justify-between items-center py-4 w-full text-left"
                            >
                                <p className="font-medium">{servico.titulo}</p>
                                <span className="text-xl">
                                    {mobileAberto === servico.id ? '−' : '+'}
                                </span>
                            </button>

                            {mobileAberto === servico.id && (
                                <div className="pb-4 animate-fadeIn">
                                    <div className="h-[200px] mb-4">
                                        <Image
                                            width={500}
                                            height={200}
                                            src={servico.imagem}
                                            alt={servico.titulo}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>
                                    <div>
                                        {servico.descricao[0] && <p className="mb-2">{servico.descricao[0]}</p>}
                                        {servico.descricao.length > 1 && (
                                            <ul className="list-disc list-inside pl-5 space-y-1">
                                                {servico.descricao.slice(1).map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <Pronto />
        </div>
    );
}