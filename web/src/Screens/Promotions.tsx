import React, { Component } from "react";

import { CardPromotion } from "../Components/Card";

class Promotions extends Component {
    render() {
        return (
            <div>
                <h1 className="text-title-color flex justify-self-center p-8">Promoções</h1>
                <section className="flex-col grid justify-items-stretch place-content-center">
                    <p className=" text-text-color flex justify-self-center p-8">
                        Faça sua festa, festa de aniversario, happy hour, confraternização, etc, no melhor karaokê de São Paulo.
                    </p>
                    <h2 className="text-title-color flex justify-self-center p-8">
                        Pacote Especial
                    </h2>
                    <CardPromotion />
                </section>
            </div>
        );
    }
}

export default Promotions 