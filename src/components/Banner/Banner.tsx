"use client"
import React, { useState } from 'react';
import Grid from '../grid_ayout/Grid';

export default function Banner() {
    const [backgroundImage, setBackgroundImage] = useState('/img/bgbanner.jpg');
    return (
        <div
            className="relative w-full h-120 md:h-auto md:min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out will-change-transform"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >


            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative z-10 h-full md:min-h-screen flex flex-col items-center justify-between px-4 py-24 md:py-32">
                <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto">
                    <p className="text-white text-sm sm:text-lg  mb-2 md:mb-4">Viagens Internacionais | Viagens Nacionais</p>
                    <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-lg sm:mb-2">Explore o Mundo</h1>
                    <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-lg mb-6">com Confiança</h1>
                    <h1> </h1>
                    <div className='font-semibold text-white text-sm md:text-lg'>
                        <p>Desde cidades históricas na Europa a aventuras na África do</p>
                        <p>Sul, criamos itinerários sob medida com voos, hotéis e</p>
                        <p>experiências únicas.</p>
                    </div>
                </div>

                <div className="w-full max-w-[1640px] mx-auto pb-8 md:pb-12 mt-30 -mb-40">
                    <div className="opcityc  rounded-xl shadow-lg backdrop-blur-sm">
                        <Grid onChangeBackground={setBackgroundImage} />
                    </div>
                </div>
            </div>
        </div>
    );
}