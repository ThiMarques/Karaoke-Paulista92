import React, { Component } from "react";

import { IoLogoWhatsapp, IoIosCall, IoIosPin, IoIosMail } from 'react-icons/io'

import {  } from 'react-native-ionicons'

class Contact extends Component {
    render() {
        return (
            <section className="p-[calc(5rem + -p--header-height)] desktop:p-[10rem 0]">
                <div className="mx-6 grid gap-16">
                    <div>
                        <h2 className=" text-title-color flex text-center subpixel-antialiased font-bold p-8 font-title-font text-title-font-size">
                            Entre em contato com a gente
                        </h2>
                        <p className="mb-8"> 
                            Entre em contato com o karaokê para fazer a sua reserva, tirar suas duvidas e ouvir suas criticas e sugestões.
                        </p>        
                        <a 
                            href="https://api.whatsapp.com/send?phone=&text=Ola! Gostaria de reserva uma sala."
                            type="button"
                            target="_blank"
                            className="bg-base-color h-14 inline-flex items-center py-0 px-8 mr-[0.625rem] rounded-[0.25rem] font-medium text-2xl font-body-font transition hover:bg-base-color-alt "
                        >
                            <IoLogoWhatsapp className=""/>
                            
                            <p className="text-text-color-light">Entrar em contato</p>
                        </a>
                    </div>
                    <div>
                        <ul className="gap-8">
                            <li className="flex items-center"><IoIosCall className="text-base-color text-2xl mr-[0.625rem]"/>(11) 91234-5678</li>
                            <li className="flex items-center"><IoIosPin className="text-base-color text-2xl mr-[0.625rem]"/>R: L`amour 532</li>
                            <li className="flex items-center"><IoIosMail className="text-base-color text-2xl mr-[0.625rem]"/>gmailficticio@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact