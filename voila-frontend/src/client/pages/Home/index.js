import React, { useEffect, useState } from 'react';
import { Card, Container, Content, InternalContent, Showroom } from './styles';
import { Redirect, useHistory } from 'react-router-dom';
import axios from "axios";
import { PATH } from "../../../utils/Consts";
import LogoRestaurant from '../../../assets/restaurant.png';
import HeaderClient from "../../../components/HeaderClient";
import MenuClient from "../../../components/MenuClient";
import FooterComponent from "../../../components/Footer";
import { useSelector } from 'react-redux';

export default function Home() {
    const history = useHistory();
    const [resturants, setRestaurants] = useState([]);

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

    return (
        <Container>
            {useSelector(state => state.user.userLogged) === false ? <Redirect to="/client/login"></Redirect> : null}
            <HeaderClient/>
            <Content>
                <MenuClient/>
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
                    <FooterComponent/>
                </InternalContent>
            </Content>
        </Container>
    );
}
