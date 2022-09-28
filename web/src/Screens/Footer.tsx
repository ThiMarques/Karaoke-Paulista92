import React, { Component } from "react";

import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

class Footer extends Component {
    render() {
        return(
            <footer>
                <div>
                    <div>
                        <a>karaokê Paulista</a>
                        <p>Nao aceitamos cheque.</p>
                        <p>Atendemos somente com reservas antecipadas.</p>
                    </div>

                    <div>
                        <a 
                            href="https://www.instagram.com/" 
                            target="_blank"
                        >
                            <IoLogoInstagram />
                        </a>
                        <a 
                            href="https://www.facebook.com/" 
                            target="_blank"
                        >
                            <IoLogoFacebook />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer