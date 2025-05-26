import Pronto from '@/components/Pronto/Pronto'

import React from 'react'

export default function Parcerias() {
    return (
        <div>
            <div className=' mt-20'>


                <div className='max-w-[1640px] mx-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-50 items-center'>

                        <div className="h-full w-full min-w-[200px] min-h-[300px] sm:p-2 md:p-2 rounded-2xl bg-[url('/img/happy.jpg')] bg-cover bg-center bg-no-repeat flex" >
                        </div>

                        <div className=''>
                            <p className='text-[#F9D423] text-5xl font-bold'>Parcerias</p>
                            <p>Ao longo dos anos da sua existência, a Panorama Tours, Lda., foi </p>
                            <p>criando contactos, memorandos e parcerias com mais de 150</p>
                            <p>entidades constituídas por: Hotéis, Estancias Turísticas, </p>
                            <p>Transportadores, Rent a Car e Companhias Aéreas para garantirem </p>
                            <p>o funcionamento da empresa e satisfação dos seus clientes.</p>
                        </div>
                    </div>

                    <div className='mt-20 mb-20'>
                        <p className='text-3xl font-bold text-[#000000]'>Facilidades e Condições Especiais</p>
                        <div className='mt-5'>
                            <ul className="list-disc list-inside">
                                <li>
                                    O nosso corpo técnico é composto por Consultores de viagens e turismo devidamente treinados e prontos para fazer face às necessidades dos clientes;
                                </li>
                                <li>
                                    Indicação de um (1) a dois (2) consultores para atender de imediato e exclusivamente os serviços solicitados pela vossa empresa/instituição; </li>
                                <li>Asseguramos condições perfeitas e garantia de atendimento 24 horas, incluindo finais de semana e feriados, através dos colaboradores direcionados, S.O.S bem como um serviço pós-venda;</li>
                                <li>Prestamos assessoria para planeamento, organização de viagens (escolha de melhores rotas, frequência de voo, tarifas promocionais e negociação de taxas);</li>
                                <li>Prestamos assessoria para planeamento, organização de viagens (escolha de melhores rotas, frequência de voo, tarifas promocionais e negociação de taxas);</li>
                                <li>Oferecemos tarifas económicas, especiais ou tarifas de desconto, apresentando sempre que necessário factura-proforma de acordo com as rotas das companhias Aéreas utilizadas;</li>
                                <li>Garantimos a entrega directa dos bilhetes e documentos relativos às viagens com antecipação e pontualidade para o domicílio do requisitante e/ou do passageiro.</li>
                                <li>Orçamento proposto: oferecemos uma linha de crédito ILIMITADA que varia de 15 a 45 dias ou mais dependendo da negociação de acordo com as necessidades do cliente, mediante a aplicação de termos e condições.</li>
                                <li>Facilidades de pagamento:Disponibilizamos datas flexíveis para o pagamento;</li>
                                <li>Horário - o horário normal de expediente é das 8:00h ás 17:00h sem interrupção.</li>
                                <li>Serviço de Emergência (S.O.S):Estes serviços poderão ser solicitados a qualquer momento dentro ou fora da hora normal de expediente e através dos contactos abaixo.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Pronto />
        </div>

    )
}
