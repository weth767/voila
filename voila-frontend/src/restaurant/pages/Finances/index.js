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
import { MdAttachMoney, MdDirectionsBike, MdHome, MdRestaurantMenu } from 'react-icons/md';
import { GiHamburger } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import UserImage from '../../../assets/user.png';
import LogoImage from '../../../assets/voila_logo2.png';
import { Link, useHistory } from 'react-router-dom';
import { Span } from "../Home/styles";

export default function Finances() {
    const history = useHistory();
    function logout() {
        history.push('/client/login');
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
                <InternalContent>
                    <Footer>Voila © Todos direitos reservados</Footer>
                </InternalContent>
            </Content>
        </Container>
    );
}
