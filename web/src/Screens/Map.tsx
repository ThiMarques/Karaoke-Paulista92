import React, { Component } from 'react'

class Map extends Component {
    render() {
        return (
            <section className='py-36 px-0 desktop:p-[10rem 0]'>
                <div className='mx-6 grid gap-8'>
                    <div className='mx-6 text-center '>
                        <h2 className='text-title-color font-bold font-title-font text-title-font-size subpixel-antialiased text-center mb-4'>
                            Aqui você poderá saber como chegar ao nosso estabelecimento.
                        </h2>
                    </div>
                    <div className='overflow-hidden pb-[56.25%] relative h-0'>
                        <iframe 
                            className='l-0 t-0 w-full h-full absolute'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9744755003844!2d-46.65144888527599!3d-23.5693601846789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59bf1ae8f3e3%3A0xf2e1653fe9e406e2!2sKaraok%C3%AA%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1647972706363!5m2!1spt-BR!2sbr" 
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </section>
        );
    }
}

export default Map