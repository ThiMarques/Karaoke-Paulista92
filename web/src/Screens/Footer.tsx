import React, { Component } from "react";

import instagram from './../assets/instagram.svg';
import facebook from './../assets/facebook.svg';

class Footer extends Component {
    render() {
        return(
            <footer className="bg-base-color py-16 px-0">
                <div className="mx-6 grid gap-8">
                    <div>
                        <a className="text-title-color font-title-font inline-block mb-6 font-bold ">karaokê Paulista</a>
                        <p className="text-text-color-light mb-3">Nao aceitamos cheque.</p>
                        <p className="text-text-color-light mb-3">Atendemos somente com reservas antecipadas.</p>
                    </div>

                    <div className="grid-flow-col w-fit grid gap-8">
                        <a 
                            href="https://www.instagram.com/" 
                            target="_blank"
                            className="inline-block"
                        >
                            <img src={instagram} className="text-2xl"/>
                        </a>
                        <a 
                            href="https://www.facebook.com/" 
                            target="_blank"
                            className="inline-block"
                        >
                            <img src={facebook} className="text-2xl fill-text-color-light"/>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer