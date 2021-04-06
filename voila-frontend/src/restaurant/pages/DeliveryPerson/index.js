import React from 'react';
import { Container, Content, InternalContent } from './styles';
import MenuRestaurant from "../../../components/MenuRestaurant";
import HeaderRestaurant from "../../../components/HeaderRestaurant";
import FooterComponent from "../../../components/Footer";
import { USER_RESTAURANT } from '../../../utils/Consts';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

export default function DeliveryPerson() {

    const user = useSelector(state => state.user);

    return (
        <Container>
            {user.userLogged === false || user.userType !== USER_RESTAURANT ? <Redirect to="/restaurant/login"></Redirect> : null}
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant/>
                <InternalContent>
                    <FooterComponent/>
                </InternalContent>
            </Content>
        </Container>
    );
}
