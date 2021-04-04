import React, { useState } from 'react';
import {
    Container,
    Content, Footer,
    Header, Menu,
    MenuItem,
    Options,
    OrderContent,
    OrderItem,
    OrderList, OrderTitle,
    Title,
    User, UserSpan,
    Span
} from './styles';
import { MdHome, MdDirectionsBike, MdRestaurantMenu, MdAttachMoney } from 'react-icons/md';
import { GiHamburger } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import UserImage from '../../../assets/user.png';
import LogoImage from '../../../assets/voila_logo2.png';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

export default function HomeRestaurant() {
    const url = "https://images.vexels.com/media/users/3/143047/isolated/preview/b0c9678466af11dd45a62163bdcf03fe-iacute-cone-plano-de-hamb-uacute-rguer-de-fast-food-by-vexels.png";
    const history = useHistory();
    const [orders, setOrders] = useState([]);

    function logout() {
        history.push('/client/login');
    }

    async function findOrders() {
        await axios.get('/orders')
            .then((result) => {
                setOrders(result.data);
            });
    }

    return (
        <Container>
            <Header>
                <img alt="Imagem de logo" src={LogoImage}/>
                <Title>VOILÀ</Title>
                <User>
                    <img alt="Imagem de logo" src={UserImage}/>
                    <UserSpan>Usuario</UserSpan>
                    <Options>
                        <FiLogOut size={32} color={'#fff'} onClick={() => logout()}/>
                    </Options>
                </User>
            </Header>
            <Content>
                <Menu>
                    <MenuItem>
                        <MdHome color={"#ff5757"} size={18}/>
                        <Span><Link to="/restaurant/home">Página Inicial</Link></Span>
                    </MenuItem>
                    <MenuItem>
                        <GiHamburger color={"#ff5757"} size={18}/>
                        <Span><Link to="/restaurant/home">Pedidos</Link></Span>
                    </MenuItem>
                    <MenuItem>
                        <MdDirectionsBike color={"#ff5757"} size={18}/>
                        <Span><Link to="/restaurant/home">Entregadores</Link></Span>
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
                        <Span><Link to="/restaurant/home">Financeiro</Link></Span>
                    </MenuItem>
                </Menu>
                <OrderContent>
                    <OrderList>
                        <OrderTitle>Pedidos em Espera</OrderTitle>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                    </OrderList>
                    <OrderList>
                        <OrderTitle>Pedidos em Produção</OrderTitle>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                    </OrderList>
                    <OrderList>
                        <OrderTitle>Pedidos Entregues</OrderTitle>
                        <OrderItem>
                            <img width={32} height={32} src={url} alt={''}/>
                            <span>Pedido #7818</span>
                        </OrderItem>
                    </OrderList>
                    <Footer>Voila © Todos direitos reservados</Footer>
                </OrderContent>
            </Content>
        </Container>
    );
}
