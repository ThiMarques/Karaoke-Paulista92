import Header from '../Components/indexHome'
import Footer from './Footer';
import MakeReservation from '../Components/makeReservation'

import CreateAdBanner from '../Components/Form/CreateAdBanner';
import CreateAdModal from '../Components/Form/CreateAdModal'

import * as Dialog from '@radix-ui/react-dialog';

import amigosKaraoke from './../assets/amigosKaraoke.png'  


function Home() {

    return (
        <div>
        <Header />
        <section className="py-36 px-0 overflow-hidden desktop:p-[10rem 0]">
            <div className="m-0 grid gap-8 desktop:grid-flow-col desktop:justify-between desktop:my-0 desktop:mx-auto desktop:max-w-[1120px]">
                <div className="relative rounded-[0.25rem] before:content-[''] before:h-full before:w-full before:bg-base-color before:absolute before:top-[-16.8%] before:left-[16.7%] before:rounded-[0.25rem] before:z-0 desktop:order-1">
                    <img 
                        src={amigosKaraoke} 
                        className="relative right-[2.93rem] rounded-[0.25rem]"
                    />
                </div>           
                <div className='mx-6 mb-4 text-center desktop:order-none desktop:max-w-sm desktop:text-left'>
                    <h2 className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center desktop:text-left">
                        Procurando um lugar pra se divertir e ter uma experiência única com os seus amigos?
                    </h2>
                    <p className="mb-8 text-text-color">
                        Aqui você encontra os melhores serviços de karaokê box em São Paulo !
                        <br />
                        Salas exclusivas aos grupos, com ar condicionado, iluminação personalizada, atendimento de bar e repertório contendo canções tanto nacionas quanto internacionais.
                    </p>
                </div>
            </div>
            <Dialog.Root>
                <CreateAdBanner />
                <CreateAdModal />
            </Dialog.Root>
        </section>
        <Footer />
        </div>
    );
    
}

export default Home
