import React from 'react';
import {
    Container,
    Content, Footer,
    Header,
    Menu,
    MenuItem,
    Options,
    OrderContent,
    OrderItem,
    OrderList,
    Title,
    User,
    UserSpan
} from './styles';
import { MdHome, MdDirectionsBike, MdRestaurantMenu, MdAttachMoney } from 'react-icons/md';
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';

export default function Home() {
    return (
        <Container>
            <Header>
                {/*<LogoImage src={LogoImage} alt={"Imagem de Logo"}/>*/}
                <Title>VOILÀ</Title>
                <User>
                    {/*<UserLogo src={''}/>*/}
                    <UserSpan>Usuario</UserSpan>
                    <Options>
                        <GiHamburgerMenu size={32} color={'#fff'}/>
                    </Options>
                </User>
            </Header>
            <Content>
                <Menu>
                    <MenuItem>
                        <MdHome color={"#ff5757"}/>
                        <span>Página Inicial</span>
                    </MenuItem>
                    <MenuItem>
                        <GiHamburger color={"#ff5757"}/>
                        <span>Pedidos</span>
                    </MenuItem>
                    <MenuItem>
                        <MdDirectionsBike color={"#ff5757"}/>
                        <span>Entregadores</span>
                    </MenuItem>
                    <MenuItem>
                        <MdRestaurantMenu color={"#ff5757"}/>
                        <span>Cardápio</span>
                    </MenuItem>
                    <MenuItem>
                        <MdAttachMoney color={"#ff5757"}/>
                        <span>Financeiro</span>
                    </MenuItem>
                </Menu>
                <OrderContent>
                    <OrderList>
                        <OrderItem/>
                    </OrderList>
                    <OrderList>
                        <OrderItem/>
                    </OrderList>
                    <OrderList>
                        <OrderItem/>
                    </OrderList>
                    <Footer>Voila © Todos direitos reservados</Footer>
                </OrderContent>
            </Content>
        </Container>
    );
}
