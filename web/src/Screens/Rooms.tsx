import React, { Component } from 'react' 

import { CardRooms } from '../Components/Card/CardRooms';

class Rooms extends Component {
    render() {
        return (
            <section className='p-[calc(5rem + -p--header-height)] desktop:p-[10rem 0]'>
                <div className='mx-6 grid gap-8'>
                    <header className='mb-16 border-b-[1px solid]'>
                        <h2 className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-3">Salas</h2>
                        <h3 className='mb-4 text-subtitle-font-size'>
                            Atenção: É proibido o uso de confetes, serpentinas ou qualquer outro material decorativo que dificultem a limpeza do ambiente. 
                            No descumprimento das mesmas, será cobrado taxa adicional.
                        </h3>
                    </header>
                    <div className='gap-6'>
                        <CardRooms />
                    </div>
                </div>
            </section>
        );
    }
}

export default Rooms