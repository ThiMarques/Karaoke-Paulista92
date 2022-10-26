import React from "react";

import { CardPromotion } from "../Components/Card/CardPromotion";
import Header from "../Components/indexHome";
import Footer from './Footer'

import mulherOlhandoMusica from './../assets/mulherOlhandoMusica.png'

function Promotions() {

    return (
        <div>
        <Header />
        <section className="py-36 px-0 desktop:p-[10rem 0]">
            <div className="mx-6 grid gap-8 desktop:my-0 desktop:mx-auto desktop:max-w-[1120px] desktop:justify-between desktop:grid-flow-col">
                <div className="relative before:content-[''] before:h-full before:w-full before:bg-base-color before:absolute before:top-[-8.3%] before:left-[-33%] before:rounded-[0.25rem] before:z-0
                desktop:before:content-[''] desktop:before:h-3/5 desktop:before:w-full desktop:before:bg-base-color desktop:before:absolute desktop:before:top-[-8.3%] desktop:before:left-[-33%] desktop:before:z-0">
                    <img 
                        src={mulherOlhandoMusica}
                        className="relative rounded-[0.25rem]"
                    />
                </div>    
                <div className="mx-6 text-center">
                    <h2 className=" text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-4">Promoções</h2>
                    <p className="text-text-color ">
                        Faça sua festa, festa de aniversario, happy hour, confraternização, etc, no melhor karaokê de São Paulo.
                    </p>
                    <h2 className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-4">Pacote Especial</h2>
                    <CardPromotion />
                </div>
            </div>
        </section>
        <Footer />
        </div>
    );
    
}

export default Promotions 