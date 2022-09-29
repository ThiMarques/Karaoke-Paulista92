import React, { Component } from 'react' 

import { CardRooms } from '../Components/Card/CardRooms';

class Rooms extends Component {
    render() {
        return (
            <div className='contaienr'>
                <h2 className="text-title-color flex text-center antialiased font-bold p-8 font-title-font text-title-font-size">Salas</h2>
                <h3 className='text-text-color flex justify-self-center p-8 mb-4'>
                    Atenção: É proibido o uso de confetes, serpentinas ou qualquer outro material decorativo que dificultem a limpeza do ambiente. 
                    No descumprimento das mesmas, será cobrado taxa adicional.
                </h3>
                <div className='gap-6'>
                    <CardRooms />
                </div>
            </div>
        );
    }
}

export default Rooms