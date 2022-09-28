import React, { Component } from "react";

import { IoLogoWhatsapp, IoIosCall, IoIosPin, IoIosMail } from 'react-icons/io'

class Contact extends Component {
    render() {
        return (
            <div>
                <h1 className="text-title-color">Entre em contato com a gente</h1>
                <p className="text-text-color"> 
                    Entre em contato com o karaokê para fazer a sua reserva, tirar suas duvidas e ouvir suas criticas e sugestões.
                </p>
                <div>
                    <a 
                        href="https://api.whatsapp.com/send?phone=&text=Ola! Gostaria de reserva uma sala."
                        type="button"
                        target="_blank"
                    >
                        <IoLogoWhatsapp />
                        Entrar em contato
                    </a>
                </div>
                <div>
                    <ul>
                        <li><IoIosCall />(11) 91234-5678</li>
                        <li><IoIosPin />R: L`amour 532</li>
                        <li><IoIosMail />gmailficticio@gmail.com</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Contact