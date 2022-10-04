import React, { Component } from 'react'
import { CardService } from '../Components/Card/CardService';

class Service extends Component {
    render() {
        return (
            <section className='py-36 px-0 desktop:p-[10rem 0]'>
                <div className="mx-auto grid gap-8">
                    <h2 className='text-title-color mb-4 font-bold text-title-font-size font-title-font subpixel-antialiased text-center'>Cardapio</h2>
                    <CardService />
                </div>
            </section>
        );
    }
}

export default Service 