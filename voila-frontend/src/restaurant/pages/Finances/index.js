import React from 'react';
import {
    Container,
    Content,
    Footer,
    Header,
    InternalContent,
    Menu,
    MenuItem,
    Options,
    Title,
    User,
    UserSpan
} from './styles';
import { MdAttachMoney, MdHome } from 'react-icons/md';
import { GiHamburger } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import UserImage from '../../../assets/user.png';
import LogoImage from '../../../assets/voila_logo2.png';
import { useHistory } from 'react-router-dom';

export default function Finances() {
    const history = useHistory();
    function logout() {
        history.push('/client/login');
    }

    function toHome() {
        history.push('/restaurant/home');
    }

    function toOrders() {
        history.push('/restaurant/orders');
    }

    function toFinances() {
        history.push('/restaurant/finances');
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
                    <MenuItem onClick={() => toHome()}>
                        <MdHome color={"#ff5757"} size={18}/>
                        <span>Página Inicial</span>
                    </MenuItem>
                    <MenuItem onClick={() => toOrders()}>
                        <GiHamburger color={"#ff5757"} size={18}/>
                        <span>Pedidos</span>
                    </MenuItem>
                    <MenuItem onClick={() => toFinances()}>
                        <MdAttachMoney color={"#ff5757"} size={18}/>
                        <span>Financeiro</span>
                    </MenuItem>
                </Menu>
                <InternalContent>
                    <Footer>Voila © Todos direitos reservados</Footer>
                </InternalContent>
            </Content>
        </Container>
    );
}
