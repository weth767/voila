import React from 'react';
import { MdAttachMoney, MdDirectionsBike, MdHome, MdRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Span } from "./styles";

export default function MenuRestaurant() {
    return (
        <Menu>
            <MenuItem>
                <MdHome color={"#ff5757"} size={18}/>
                <Span><Link to="/restaurant/home">Página Inicial</Link></Span>
            </MenuItem>
            <MenuItem>
                <MdDirectionsBike color={"#ff5757"} size={18}/>
                <Span><Link to="/restaurant/deliverypersons">Entregadores</Link></Span>
            </MenuItem>
            <MenuItem>
                <MdRestaurantMenu color={"#ff5757"} size={18}/>
                <Span><Link to="/restaurant/category">Categorias</Link></Span>
            </MenuItem>
            <MenuItem>
                <MdRestaurantMenu color={"#ff5757"} size={18}/>
                <Span><Link to="/restaurant/extra">Extra</Link></Span>
            </MenuItem>
            <MenuItem>
                <MdAttachMoney color={"#ff5757"} size={18}/>
                <Span><Link to="/restaurant/finances">Financeiro</Link></Span>
            </MenuItem>
        </Menu>
    );
}
