import React from 'react'

import { CardService } from '../Components/Card/CardService';
import Header from '../Components/indexHome';
import Footer from './Footer';

function Services() {

    return (
        <div>
        <Header />
        <section className='py-36 px-0 desktop:p-[10rem 0]'>
            <div className="mx-auto grid gap-8 desktop:mx-auto desktop:max-w-[1120px]">
                <h2 className='text-title-color mb-4 font-bold text-title-font-size font-title-font subpixel-antialiased text-center'>Cardapio</h2>
                <CardService />
            </div>
        </section>
        <Footer />
        </div>
    );
    
}

export default Services 