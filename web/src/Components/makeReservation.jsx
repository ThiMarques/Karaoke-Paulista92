import * as Dialog from '@radix-ui/react-dialog'

function MakeReservation() {

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-white inset-0 fixed' />
            
            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
                <Dialog.Title className='text-3xl font-black'>Fazer uma reserva</Dialog.Title>
            </Dialog.Content>
        </Dialog.Portal>
    );
}

export default MakeReservation
