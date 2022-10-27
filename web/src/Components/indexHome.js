import { Link } from "react-router-dom"

import { useState } from 'react';

function Header() {
    const [isNavOpen, setIsNavOpen] =useState(false)

    return (
        <div className="App bg-background-color text-text-color font-normal text-subtitle-font-size font-body-font subpixel-antialiased">
            <header id="header" className="text-title-color grid top-0 left-0 z-[100] w-full desktop:text-center desktop:mx-auto">
                <nav className="h-[4.5rem] flex items-center justify-between w-full mx-6 desktop:max-w-[1120px] desktop:mx-auto desktop:space-x-[30rem]">
                    <Link to="/" className="text-title-color font-bold text-[1.31rem] font-title-font ">Karaoke Paulista</Link>

                    <section className="MOBILE-MENU flex desktop:hidden">
                        <div className="HAMBURGUER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span className="block h-0.5 w-8 bg-base-color"></span>
                            <span className="block h-0.5 w-8 bg-base-color"></span>
                            <span className="block h-0.5 w-8 bg-base-color"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div className="CROSS-ICON absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                                <svg className="h-8 w-8 text-base-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="NAVIGATION-MOBILE-OPEN grid flex-col items-center justify-between min-h-[250px]">
                                <li className="text-center">
                                    <Link to='/' className="font-bold text-title-font-size font-title-font text-title-color text-center subpixel-antialiased relative transition hover:text-base-color">
                                        Início
                                    </Link>
                                </li>
                                <li className="text-center">
                                    <Link to='/promotions' className="font-bold text-title-font-size font-title-font text-title-color text-center subpixel-antialiased relative transition hover:text-base-color">
                                        Promoções
                                    </Link>
                                </li>
                                <li className="text-center">
                                    <Link to='/rooms' className="font-bold text-title-font-size font-title-font text-title-color text-center subpixel-antialiased relative transition hover:text-base-color">
                                        Salas
                                    </Link>
                                </li>
                                <li className="text-center">
                                    <Link to='/services' className="font-bold text-title-font-size font-title-font text-title-color text-center subpixel-antialiased relative transition hover:text-base-color">
                                        Cardapio
                                    </Link>
                                </li>
                                <li className="text-center">
                                    <Link to='/map' className="font-bold text-title-font-size font-title-font text-title-color text-center subpixel-antialiased relative transition hover:text-base-color">
                                        Mapa
                                    </Link>
                                </li>
                                <li className="text-center">
                                    <Link to='/contact' className="font-bold text-title-font-size font-title-font text-title-color text-center subpixel-antialiased relative transition hover:text-base-color">
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                    
                    <div className="opacity-0 invisible top-[-20rem] ease-[0.2s] desktop:opacity-100 desktop:visible desktop:top-0 ">
                        <ul className="DESKTOP-MENU hidden space-x-8 desktop:flex desktop:gap-8">
                            <li className="text-center">
                                <Link to='/' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">
                                    Início
                                </Link>
                            </li>
                            <li className="text-center">
                                <Link to='/promotions' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">
                                    Promoções
                                </Link>
                            </li>
                            <li className="text-center">
                                <Link to='/rooms' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">
                                    Salas
                                </Link>
                            </li>
                            <li className="text-center">
                                <Link to='/services' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">
                                    Cardapio
                                </Link>
                            </li>
                            <li className="text-center">
                                <Link to='/map' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">
                                    Mapa
                                </Link>
                            </li>
                            <li className="text-center">
                                <Link to='/contact' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <style>
                    {`
                    .hideMenuNav {
                        display: none;
                    }
                    .showMenuNav {
                        display: grid;
                        position: fixed;
                        width: 100vw;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        z-index: 10;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;

                        background-color: #111111;
                        color: #44cd5e;
                        opacity: 1;
                        place-content: center; 
                        gap: 4rem;
                    }
                    `}
                </style>
            </header>
            <div className='flex-col divide-y-0 bg-text-color-light h-[1px]'></div>
        </div>

    )
}

export default Header