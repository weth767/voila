import React from 'react';
import { Container, Content, InternalContent } from './styles';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuClient from "../../../components/MenuClient";
import FooterComponent from "../../../components/Footer";
import HeaderClient from "../../../components/HeaderClient";

export default function Orders() {
    return (
        <Container>
            {useSelector(state => state.user.userLogged) === false ? <Redirect to="/client/login"></Redirect> : null}
            <HeaderClient/>
            <Content>
                <MenuClient/>
                <InternalContent>
                    <FooterComponent/>
                </InternalContent>
            </Content>
        </Container>
    );
}
