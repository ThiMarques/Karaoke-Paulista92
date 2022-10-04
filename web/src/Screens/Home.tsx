import React, { Component } from 'react';

import amigosKaraoke from './../assets/amigosKaraoke.png'  

class Home extends Component {
    render() {
        return (
            <section className="py-36 px-0 overflow-hidden desktop:p-[10rem 0]">
                <div className="m-0 grid gap-8 desktop:grid-flow-col desktop:justify-between desktop:my-0 desktop:mx-auto desktop:max-w-[1120px]">
                    <div className="relative rounded-[0.25rem] before:content-[''] before:h-full before:w-full before:bg-base-color before:absolute before:top-[-16.8%] before:left-[16.7%] before:rounded-[0.25rem] before:z-0 desktop:order-1">
                        <img 
                            src={amigosKaraoke} 
                            className="relative right-[2.93rem] rounded-[0.25rem]"
                        />
                    </div>           
                    <div className='mx-6 mb-4 text-center desktop:order-none desktop:max-w-sm desktop:text-left'>
                        <h2 className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center desktop:text-left">
                            Procurando um lugar pra se divertir e ter uma experiência única com os seus amigos?
                        </h2>
                        <p className="mb-8">
                            Aqui você encontra os melhores serviços de karaokê box em São Paulo !
                            <br />
                            Salas exclusivas aos grupos, com ar condicionado, iluminação personalizada, atendimento de bar e repertório contendo canções tanto nacionas quanto internacionais.
                        </p>
                        <button className="bg-base-color text-text-color-light h-14 inline-flex items-center py-0 px-8 rounded-[0.25rem] font-medium text-subtitle-font-size font-body-font transition hover:bg-base-color-alt ">
                            <span className="text-white">
                                Faça já a sua reserva conosco.
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home
