import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { useState } from 'react';

import Input from './Input';

interface Room {
    id: String;
    room: String
}

function CreateAdModal() {

    const [rooms, setRooms] = useState<Room[]>([]);
    const [weekDays, setWeekDays] = useState<String[]>([]);

    return(
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

            <Dialog.Content className="fixed bg-background-color py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25 ">
                <Dialog.Title className='text-3xl font-black'>Fazer uma reserva</Dialog.Title>

                <form action="" className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Qual o seu nome?</label>
                        <Input name='name' id='name' placeholder='Coloque o seu nome aqui'/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Qual o seu email?</label>
                        <Input name='email' id='email' placeholder='Coloque o seu email aqui'/>
                    </div>

                    <div>
                        <label htmlFor="room">Qual sala você gostaria de reservar?</label>
                        <select 
                            name='room' 
                            id='room' 
                            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none" 
                            defaultValue=""
                        >
                            <option disabled value="">Selecione a sala que você quer reservar</option>

                            {/* {rooms.map(room => {
                                return <option key={room.id} value={room.id}>{room.room}</option>
                            })} */}

                        </select>
                    </div>

                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="weekDays">Qual dia você quer reservar?</label>

                            <ToggleGroup.Root 
                                type="multiple"
                                className="grid grid-cols-4 gap-2"
                                value={weekDays}
                                onValueChange={setWeekDays}
                            >
                                <ToggleGroup.Item 
                                    value="0"
                                    title="Domingo"
                                    className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-base-color' : 'bg-zinc-900'}`}
                                    >
                                    Dom
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="1"
                                    title="Segunda"
                                    className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-base-color' : 'bg-zinc-900'}`}
                                    >
                                    Seg
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="2"
                                    title="Terça"
                                    className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-base-color' : 'bg-zinc-900'}`}
                                    >
                                    Ter
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="3"
                                    title="Quarta"
                                    className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-base-color' : 'bg-zinc-900'}`}
                                    > 
                                    Qua
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="4" 
                                    title="Quinta"
                                    className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-base-color' : 'bg-zinc-900'}`}
                                    >
                                    Qui
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="5"
                                    title="Sexta"
                                    className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-base-color' : 'bg-zinc-900'}`}
                                    >
                                    Sex
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="6"
                                    title="Sábado"
                                    className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-base-color' : 'bg-zinc-900'}`}
                                    >
                                    Sab
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <label htmlFor="hourStart">Qual horario do dia?</label>
                            <div className='grid grid-cols-2 gap-2'>
                                <Input name='hourStart' id='hourStart' type="time" placeholder='De' />
                                <Input name='hourEnd' id='hourEnd' type="time" placeholder='Ate' />
                            </div>
                        </div>
                    </div>

                    <footer className='mt-4 flex justify-end gap-4'>       
                        <Dialog.Close 
                            className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                        >
                            Cancelar
                        </Dialog.Close>
                        <button 
                            type='submit'
                            className='bg-base-color px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-base-color-alt'
                        >
                            Fazer a reserva
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}

export default CreateAdModal