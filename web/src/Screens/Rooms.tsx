import React, { Component } from 'react' 

import { CardRooms } from '../Components/Card';

class Rooms extends Component {
    render() {
        return (
            <div className='contaienr'>
                <h1 className="text-title-color flex justify-self-center p-8">Salas</h1>
                <h3 className='text-text-color flex justify-self-center p-8 mb-4 '>
                    Atenção: É proibido o uso de confetes, serpentinas ou qualquer outro material decorativo que dificultem a limpeza do ambiente. 
                    No descumprimento das mesmas, será cobrado taxa adicional.
                </h3>
                <div>
                    <CardRooms />
                </div>
            </div>
        );
    }
}

export default Rooms