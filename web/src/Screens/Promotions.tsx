import React, { Component } from "react";

import { CardPromotion } from "../Components/Card/CardPromotion";

import mulherOlhandoMusica from './../assets/mulherOlhandoMusica.png'

class Promotions extends Component {
    render() {
        return (
            <section className="p-[calc(5rem + -p--header-height)] overflow-hidden">
                <div className="grid-flow-col justify-between m-auto grid gap-8">
                    <h2 className="text-title-color flex justify-self-center p-8">Promoções</h2>
                    <img 
                        src={mulherOlhandoMusica}
                        className="relative"
                    />
                    <section className="flex-col grid justify-items-stretch place-content-center">
                        <div className="mx-6 text-center">
                            <h2 className=" text-title-color flex text-center antialiased font-bold p-8 font-title-font text-title-font-size">Promocoes</h2>
                            <p className=" text-text-color flex justify-self-center p-8 mb-8">
                                Faça sua festa, festa de aniversario, happy hour, confraternização, etc, no melhor karaokê de São Paulo.
                            </p>
                            <h2 className="text-title-color flex text-center antialiased font-bold p-8 font-title-font text-title-font-size">
                                Pacote Especial
                            </h2>
                            <CardPromotion />
                        </div>
                    </section>
                </div>
            </section>
        );
    }
}

export default Promotions 