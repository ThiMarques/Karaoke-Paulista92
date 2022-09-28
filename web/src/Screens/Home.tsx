import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2 className="text-title-color flex justify-self-center p-8">HOME</h2>
                <section className="flex-col grid justify-items-stretch place-content-center">
                    <p className=" text-title-color flex justify-self-center p-8">
                        Procurando um lugar pra se divertir e ter uma experiência única com os seus amigos?
                    </p>
                    <p className="text-text-color flex justify-self-center p-8">
                        Aqui você encontra os melhores serviços de karaokê box em São Paulo !
                        Salas exclusivas aos grupos, com ar condicionado, iluminação personalizada, atendimento de bar e repertório contendo canções tanto nacionas quanto internacionais.
                    </p>
                    <button className="bg-base-color h-14">
                        <span className="text-white">
                            Faça já a sua reserva conosco.
                        </span>
                    </button>
                </section>
            </div>
        );
    }
}

export default Home
