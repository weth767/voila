import React from 'react';
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Span } from "./styles";
import { GiHamburger } from "react-icons/gi";

export default function MenuClient() {
    return (
        <Menu>
            <MenuItem>
                <MdHome color={"#ff5757"} size={18}/>
                <Span><Link to="/client/home">Página Inicial</Link></Span>
            </MenuItem>
            <MenuItem>
                <GiHamburger color={"#ff5757"} size={18}/>
                <Span><Link to="/client/orders">Pedidos</Link></Span>
            </MenuItem>
        </Menu>
    );
}
