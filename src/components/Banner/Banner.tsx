"use client"
import React, { useState } from 'react';
import Grid from '../grid_ayout/Grid';


export default function Banner() {
    const [backgroundImage, setBackgroundImage] = useState('/img/bgbanner.jpg');
    return (
        <div
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center transition-all duration-500 ease-in-out will-change-transform"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >

            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative z-10 text-center mt-[-50px] md:mt-[50px]">
                <p className="text-white">Viagens Internacionais | Viagens Nacionais</p>
                <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">Explore o Mundo</h1>
                <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">com Confiança</h1>
                <div className='font-semibold text-white mt-5 text-lg'>
                    <p>Desde cidades históricas na Europa a aventuras na África do</p>
                    <p>Sul, criamos itinerários sob medida com voos, hotéis e </p>
                    <p>experiências únicas.</p>
                </div>
            </div>

            {/* <div className="absolute bottom-5 mt-50 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-[1640px] mx-auto">
                <div className="opcityc rounded-xl  shadow-lg">
                    <Grid onChangeBackground={setBackgroundImage} />
                </div>
            </div> */}

        </div>
    );
}



