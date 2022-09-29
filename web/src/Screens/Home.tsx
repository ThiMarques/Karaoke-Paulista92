import React, { Component } from 'react';

import amigosKaraoke from './../assets/amigosKaraoke.png'  

class Home extends Component {
    render() {
        return (
            <section className="p-[calc(5rem + -p--header-height)] overflow-hidden">
                <div className="grid-flow-col justify-between m-auto grid gap-8">
                    <h2 className="text-title-color flex justify-self-center p-8">HOME</h2>
                    <section className="flex-col grid justify-items-stretch place-content-center">
                        <div className='mx-6 text-center'>
                            <h2 className=" text-title-color flex text-center antialiased font-bold p-8 font-title-font text-title-font-size">
                                Procurando um lugar pra se divertir e ter uma experiência única com os seus amigos?
                            </h2>
                            <p className="text-text-color flex justify-self-center p-8 mb-8">
                                Aqui você encontra os melhores serviços de karaokê box em São Paulo !
                                <br />
                                Salas exclusivas aos grupos, com ar condicionado, iluminação personalizada, atendimento de bar e repertório contendo canções tanto nacionas quanto internacionais.
                            </p>
                            <button className="bg-base-color h-14 inline-flex items-center py-0 px-8 rounded font-medium text-subtitle-font-size font-body-font transition hover:bg-base-color-alt">
                                <span className="text-white">
                                    Faça já a sua reserva conosco.
                                </span>
                            </button>
                        </div>
                        <img 
                            src={amigosKaraoke} 
                            className="relative right-[2.93rem]"
                        />
                    </section>
                </div>
            </section>
        );
    }
}

export default Home
