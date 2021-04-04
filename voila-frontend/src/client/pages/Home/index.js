import React, { useEffect, useState } from 'react';
import {
    Container,
    Content, Footer,
    Header, Menu,
    MenuItem,
    Options,
    InternalContent,
    Title,
    User, UserSpan, Showroom, Card
} from './styles';
import { MdHome } from 'react-icons/md';
import { GiHamburger } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import UserImage from '../../../assets/user.png';
import LogoImage from '../../../assets/voila_logo2.png';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { PATH } from "../../../utils/Consts";
import LogoRestaurant from '../../../assets/restaurant.png';

export default function Home() {
    const history = useHistory();
    const [resturants, setRestaurants] = useState([]);
    function logout() {
        history.push('/client/login');
    }

    useEffect(() => {
        findResturants().then(() => {});
    }, []);

    async function findResturants() {
        await axios.get(`${PATH}/restaurant`).then(result => {
            setRestaurants(result.data);
        });
    }

    function viewRestaurant(id) {
        history.push(`/client/restaurant/${id}`);
    }

    function toHome() {
        history.push('/client/home');
    }

    function toOrders() {
        history.push('/client/orders');
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
                </Menu>
                <InternalContent>
                    <Showroom>
                        {resturants.map(restaurant => (
                            <Card key={restaurant.id} onClick={() => viewRestaurant(restaurant.id)}>
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img src={restaurant.personLegal.person.image ?
                                    'data:image/png;base64,' + restaurant.personLegal.person.image : LogoRestaurant}
                                     alt={`${restaurant.personLegal.person.name} image`}/>
                                <span>{restaurant.personLegal.person.name}</span>
                                <p>{restaurant.open ? 'Aberto': 'Fechado'}</p>
                            </Card>
                        ))}
                    </Showroom>
                    <Footer>Voila © Todos direitos reservados</Footer>
                </InternalContent>
            </Content>
        </Container>
    );
}
