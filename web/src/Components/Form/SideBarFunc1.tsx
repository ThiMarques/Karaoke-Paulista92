import React from 'react';

import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

function SideBarFunc() {
    return (
        <div>
            <Sidebar>
                <Menu>
                    <MenuItem>Início</MenuItem>
                    <MenuItem>Promoções</MenuItem>
                    <MenuItem>Salas</MenuItem>
                    <MenuItem>Cardapio</MenuItem>
                    <MenuItem>Mapa</MenuItem>
                    <MenuItem>Contato</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default SideBarFunc; 