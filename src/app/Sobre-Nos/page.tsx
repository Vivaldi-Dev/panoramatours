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
          <p className="text-md leading-relaxed font-semibold">
            A Panorama Tours é muito mais do que uma simples agência de viagens. É uma parceira estratégica para quem valoriza experiências autênticas, soluções ágeis e um atendimento diferenciado. Fundada com o propósito de inovar o setor de viagens e turismo em Moçambique, oferecemos um serviço comple to que alia tecnologia de ponta, atendimento humanizado e uma equipa experiente e apaix onada por criar memórias inesquecíveis. Estamos preparados para servir tanto clientes particulares como corporações, oferecendo um serviço flexível, seguro e adaptado às mais diversas necessidades desde uma viagem de lazer até à gestão integral de viagens empresariais complexas.          </p>

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
