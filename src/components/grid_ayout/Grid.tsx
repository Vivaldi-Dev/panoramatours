"use client"

import React from 'react';
import Form from '../Form/Form';

type CardImage = {
  id: number;
  image: string;
  banner: string;
};

interface GridProps {
  onChangeBackground: (imagePath: string) => void;
}

const cardImages: CardImage[] = [
    { id: 1, image: '/img/banner2.jpg', banner: '/img/banner2.jpg' },
    { id: 2, image: '/img/banner1.jpg', banner: '/img/banner1.jpg' },
    { id: 3, image: '/img/banner3.jpg', banner: '/img/banner3.jpg' }
];

export default function Grid({ onChangeBackground }: GridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
            <div className="md:col-span-7 p-4 rounded">
                <Form />
            </div>
            <div className="md:col-span-5 p-4 rounded">
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    {cardImages.map((card) => (
                        <div
                            key={card.id}
                            className="h-64 p-8 rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                            style={{ backgroundImage: `url(${card.image})` }}
                            onClick={() => onChangeBackground(card.banner)}
                        >
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}