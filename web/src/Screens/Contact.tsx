import React, { Component } from "react";

import { IoLogoWhatsapp, IoIosCall, IoIosPin, IoIosMail } from 'react-icons/io'

class Contact extends Component {
    render() {
        return (
            <section className="p-[calc(5rem + -p--header-height)] overflow-hidden">
                <div className="gap-16">
                    <div className="mx-6 text-center">
                        <h2 className=" text-title-color flex text-center antialiased font-bold p-8 font-title-font text-title-font-size">
                            Entre em contato com a gente
                        </h2>
                        <p className="text-text-color mb-8"> 
                            Entre em contato com o karaokê para fazer a sua reserva, tirar suas duvidas e ouvir suas criticas e sugestões.
                        </p>
                        <div>
                            <a 
                                href="https://api.whatsapp.com/send?phone=&text=Ola! Gostaria de reserva uma sala."
                                type="button"
                                target="_blank"
                                className="bg-base-color text-text-color-light h-14 inline-flex items-center py-0 px-8 rounded font-medium text-subtitle-font-size font-body-font transition hover:bg-base-color-alt"
                            >
                                <IoLogoWhatsapp />
                                Entrar em contato
                            </a>
                        </div>
                    </div>
                    <div>
                        <ul className="gap-8">
                            <li className="flex items-center"><IoIosCall />(11) 91234-5678</li>
                            <li className="flex items-center"><IoIosPin />R: L`amour 532</li>
                            <li className="flex items-center"><IoIosMail />gmailficticio@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact