import React, { Component } from 'react'
import { CardService } from '../Components/Card/CardService';

class Service extends Component {
    render() {
        return (
            <section className='p-[calc(5rem + -p--header-height)] overflow-hidden'>
                <div>
                    <h1 className='text-title-color flex text-center antialiased font-bold p-8 font-title-font text-title-font-size'>Cardapio</h1>
                    <div>
                    <CardService />
                    </div>
                </div>
            </section>
        );
    }
}

export default Service 