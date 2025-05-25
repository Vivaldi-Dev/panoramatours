"use client";
import Pronto from "@/components/Pronto/Pronto";
import React, { useState } from "react";
import Image from 'next/image'

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
    const [selecionado, setSelecionado] = useState(servicos[0]);

    return (

        <div>
            <div className="max-w-[1640px] mx-auto mt-40">

                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="mb-20">
                        <p className="text-sm font-bold">Panorama Tourds Lda.</p>
                        <p className="font-bold text-2xl">Nossos Serviços</p>
                        <div className="font-semibold text-sm">
                            <p>serviços turísticos, consolidando-nos como</p>
                            <p>Desde 2009, já facilitamos mais de 500.000  uma das agências mais experientes de </p>
                            <p>Moçambique.</p>
                        </div>

                        {servicos.map((servico) => (
                            <div
                                key={servico.id}
                                onClick={() => setSelecionado(servico)}
                                className={`border-b border-[#000000] mt-10 w-3/4 cursor-pointer ${selecionado.id === servico.id ? 'text-black' : 'text-[rgba(0,0,0,0.3)]'
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
                            />
                        </div>

                        <div className="mt-10">
                            <p className="font-bold text-black text-xl">{selecionado.titulo}</p>
                            <div className="mt-5">
                                {selecionado.descricao.length > 0 && (
                                    <>
                                        <p>{selecionado.descricao[0]}</p>
                                        <ul className="list-disc list-inside mt-2">
                                            {selecionado.descricao.slice(1).map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Pronto />
        </div>

    );
}
