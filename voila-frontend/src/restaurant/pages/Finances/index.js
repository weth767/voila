import React from 'react';
import { Container, Content, InternalContent } from './styles';
import MenuRestaurant from "../../../components/MenuRestaurant";
import HeaderRestaurant from "../../../components/HeaderRestaurant";
import FooterComponent from "../../../components/Footer";
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

export default function Finances() {
    return (
        <Container>
            {useSelector(state => state.user.userLogged) === false ? <Redirect to="/restaurant/login"></Redirect> : null}
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
