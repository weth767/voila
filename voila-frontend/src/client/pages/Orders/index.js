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
import { MdHome } from 'react-icons/md';
import { GiHamburger } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import UserImage from '../../../assets/user.png';
import LogoImage from '../../../assets/voila_logo2.png';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Orders() {
    function logout() {
        history.push('/client/login');
    }
    const history = useHistory();

    function toOrders() {
        history.push('/client/home');
    }

    function toHome() {
        history.push('/client/home');
    }

    return (
        <Container>
            {useSelector(state => state.user.userLogged) === false ? <Redirect to="/restaurant/login"></Redirect> : null}
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
                </Menu>
                <InternalContent>
                    <Footer>Voila © Todos direitos reservados</Footer>
                </InternalContent>
            </Content>
        </Container>
    );
}
