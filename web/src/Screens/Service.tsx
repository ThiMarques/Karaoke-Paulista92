import React, { Component } from 'react'
import { CardService } from '../Components/Card';

class Service extends Component {
    render() {
        return (
            <div>
                <h1 className='text-title-color flex'>Cardapio</h1>
                <div>
                <CardService />
                </div>
            </div>
        );
    }
}

export default Service 