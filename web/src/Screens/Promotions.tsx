import React, { Component } from "react";

import { CardPromotion } from "../Components/Card/CardPromotion";

import mulherOlhandoMusica from './../assets/mulherOlhandoMusica.png'

class Promotions extends Component {
    render() {
        return (
            <section className="p-[calc(5rem + -p--header-height)] desktop:p-[10rem 0]">
                <div className="mx-6 grid gap-8">
                    <h2 className="text-title-color flex justify-self-center p-8">Promoções</h2>
                    <div className="relative before:content-[''] before:h-full before:w-full before:bg-base-color before:absolute before:top-[-8.3%] before:left-[-33%] before:rounded-[0.25rem] before:z-0">
                        <img 
                            src={mulherOlhandoMusica}
                            className="relative rounded-[0.25rem]"
                        />
                    </div>    
                    <div className="mx-6 text-center">
                        <h2 className=" text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-4">Promoções</h2>
                        <p>
                            Faça sua festa, festa de aniversario, happy hour, confraternização, etc, no melhor karaokê de São Paulo.
                        </p>
                        <h2 className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-4">Pacote Especial</h2>
                        <CardPromotion />
                    </div>
                </div>
            </section>
        );
    }
}

export default Promotions 