import React from 'react';
import Card from '../components/Card';
import Clientes from '../components/Clientes';
import Outros from '../components/Outros';
import Parcerias from '../components/Parcerias';



export default function page() {
  return (
    <div>
      <div className="relative w-full h-full min-h-[700px] bg-[url('/img/bgwomen.png')] bg-cover bg-center bg-no-repeat flex items-center justify-start">
        <div className="max-w-2xl text-white px-6">
          <h1 className="text-4xl font-bold mb-4">Panorama Tours</h1>
          <h2 className="text-2xl font-semibold mb-3">Quem Somos?</h2>
          <p className="text-lg leading-relaxed font-semibold">
            A Panorama Tours é uma agência de viagens que nasce no mercado para satisfazer as necessidades dos clientes no ramo de viagens e turismo. Tem como principal objectivo oferecer um agênciamento diferente, que se concentra sobretudo na qualidade e dinâmica.
          </p>

          <div className='flex items-center gap-10 mt-10'>
            <div className='border-white border-2 py-1 px-10 rounded-2xl'>
              <p className='font-bold text-white text-center '>5 Anos </p>
              <p>de Experiência</p>
            </div>

            <div className='border-white border-2 py-1 px-10 rounded-2xl'>
              <p className='font-bold text-white text-center '>+2,000</p>
              <p>Clientes Satisfeitos </p>
            </div>
          </div>
        </div>
      </div>
      <Card />
      <Clientes />
      <Outros />
      <Parcerias />
    </div>
  );
}
