import React from 'react';
import Card from '../components/Card';
import Clientes from '../components/Clientes';
import Outros from '../components/Outros';
import Parcerias from '../components/Parcerias';


export default function page() {
  return (
    <div>

      <div className="relative w-full sm:h-full sm:min-h-[700px] bg-[#DA2A24] bg-[url('/img/bgwomen.png')] bg-cover bg-[60%] md:bg-center bg-no-repeat flex items-center justify-start overflow-hidden mt-10">
        <div className="md:max-w-xl lg:max-w-4xl  text-white ">
          <div className='sm:px-10 md:px-20 lg:px-40 mt-20 relative'>

            <div className=' grid grid-cols-12 sm:hidden mb-10 items-center'>
              <div className="col-span-12 p-4">
                <div className='w-[70%] sm:w-full'>
                  <h1 className="text-2xl sm:text-4xl font-bold ">Panorama Tours</h1>
                  <h2 className="text-2xl font-semibold mb-3">Quem Somos?</h2>
                  <p className="text-[12px] md:text-md leading-relaxed font-semibold">
                    A Panorama Tours é muito mais do que uma simples agência de viagens. É uma parceira estratégica para quem valoriza experiências autênticas, soluções ágeis e um atendimento diferenciado. Fundada com o propósito de inovar o setor de viagens e turismo em Moçambique, oferecemos um serviço comple to que alia tecnologia de ponta, atendimento humanizado e uma equipa experiente e apaix onada por criar memórias inesquecíveis. Estamos preparados para servir tanto clientes particulares como corporações, oferecendo um serviço flexível, seguro e adaptado às mais diversas necessidades desde uma viagem de lazer até à gestão integral de viagens empresariais complexas.</p>
                  <div className='flex items-center gap-2 sm:gap-10 mt-10'>
                    <div className='border-white border-2 py-1 px-5 md:px-10 rounded-2xl'>
                      <p className='font-bold text-white text-center '>5 Anos </p>
                      <p className='text-nowrap'>de Experiência</p>
                    </div>

                    <div className='border-white border-2 px-5 md:px-10 rounded-2xl'>
                      <p className='font-bold text-white text-center '>+2,000</p>
                      <p className='text-nowrap'>Clientes Satisfeitos </p>
                    </div>

                  </div>
                </div>
              </div>

            </div>



            <div className='hidden sm:block'>
              <h1 className="text-2xl sm:text-4xl font-bold mb-4">Panorama Tours</h1>
              <h2 className="text-2xl font-semibold mb-3">Quem Somos?</h2>
              <p className="text-md leading-relaxed font-semibold">
                A Panorama Tours é muito mais do que uma simples agência de viagens. É uma parceira estratégica para quem valoriza experiências autênticas, soluções ágeis e um atendimento diferenciado. Fundada com o propósito de inovar o setor de viagens e turismo em Moçambique, oferecemos um serviço comple to que alia tecnologia de ponta, atendimento humanizado e uma equipa experiente e apaix onada por criar memórias inesquecíveis. Estamos preparados para servir tanto clientes particulares como corporações, oferecendo um serviço flexível, seguro e adaptado às mais diversas necessidades desde uma viagem de lazer até à gestão integral de viagens empresariais complexas.</p>
              <div className='flex items-center gap-10 mt-10'>
                <div className='border-white border-2 py-1 px-5 md:px-10 rounded-2xl'>
                  <p className='font-bold text-white text-center '>5 Anos </p>
                  <p className='text-nowrap'>de Experiência</p>
                </div>

                <div className='border-white border-2 px-5 md:px-10 rounded-2xl'>
                  <p className='font-bold text-white text-center '>+2,000</p>
                  <p className='text-nowrap'>Clientes Satisfeitos </p>
                </div>

              </div>
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
