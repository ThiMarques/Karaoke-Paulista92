import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="App bg-background-color text-text-color font-normal text-subtitle-font-size font-body-font subpixel-antialiased">
            <header className="text-title-color grid flex-col place-content-center
            desktop:max-w-lg desktop:text-center desktop:mx-auto">
                <nav className="h-[4.5rem] flex items-center justify-between w-full mx-6 desktop:max-w-[1120px] desktop:mx-auto desktop:space-x-[30rem]">
                    <Link to="/" className="text-title-color font-bold text-[1.31rem] font-title-font ">Karaoke Paulista</Link>

                    <div className="opacity-0 invisible top-[-20rem] ease-[0.2s] desktop:opacity-100 desktop:visible desktop:top-0 ">
                        <ul className="grid desktop:flex desktop:gap-8">
                            <li className="text-center"><Link to='/' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">Início</Link></li>
                            <li className="text-center"><Link to='/promotions' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">Promoções</Link></li>
                            <li className="text-center"><Link to='/rooms' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">Salas</Link></li>
                            <li className="text-center"><Link to='/services' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">Cardapio</Link></li>
                            <li className="text-center"><Link to='/map' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">Mapa</Link></li>
                            <li className="text-center"><Link to='/contact' className="relative transition hover:text-base-color desktop:font-normal desktop:text-subtitle-font-size desktop:font-body-font desktop:antialiased">Contato</Link></li>
                        </ul>
                    </div>

                </nav>
            </header>
            <div className='flex-col divide-y-0 bg-text-color-light h-[1px]'></div>
        </div>

    )
}

export default Header