import React from "react";

import Header from "../Components/indexHome";
import Footer from './Footer'

import whatsapp from './../assets/whatsapp.svg'
import phone from './../assets/phone.svg'
import mapPin from './../assets/map-pin.svg'
import mail from './../assets/mail.svg'

function Contact() {
    
    return (
        <div>
        <Header />
        <section className="py-36 px-0 desktop:p-[10rem 0]">
            <div className="mx-6 grid gap-16 desktop:mx-auto desktop:max-w-[1120px] desktop:grid-flow-col desktop:items-center">
                <div className="desktop:max-w-[25rem]">
                    <h2 className=" text-title-color flex text-center subpixel-antialiased font-bold p-8 font-title-font text-title-font-size">
                        Entre em contato com a gente
                    </h2>
                    <p className="mb-8 text-text-color"> 
                        Entre em contato com o karaokê para fazer a sua reserva, tirar suas duvidas e ouvir suas criticas e sugestões.
                    </p>        
                    <a 
                        href="https://api.whatsapp.com/send?phone=&text=Ola! Gostaria de reserva uma sala."
                        type="button"
                        target="_blank"
                        className="bg-base-color h-14 inline-flex items-center py-0 px-8 mr-[0.625rem] rounded-[0.25rem] font-medium text-2xl font-body-font transition hover:bg-base-color-alt "
                    >
                        <img src={whatsapp} className="before:text-text-color-light text-2xl mr-[0.625rem]"/>
                        <p className="text-text-color-light">Entrar em contato</p>
                    </a>
                </div>
                <div>
                    <ul className="gap-8 grid text-text-color">
                        <li className="flex items-center"><img src={phone} className="before:text-text-color-light text-2xl mr-[0.625rem]"/>(11) 91234-5678</li>
                        <li className="flex items-center"><img src={mapPin} className="before:text-text-color-light text-2xl mr-[0.625rem]"/>R: L`amour 532</li>
                        <li className="flex items-center"><img src={mail} className="before:text-text-color-light text-2xl mr-[0.625rem]"/>gmailficticio@gmail.com</li>
                    </ul>
                </div>
            </div>
        </section>
        <Footer />
        </div>
    );
    
}

export default Contact