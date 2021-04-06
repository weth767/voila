import React from 'react';
import { Container, Content, InternalContent } from './styles';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuClient from "../../../components/MenuClient";
import FooterComponent from "../../../components/Footer";
import HeaderClient from "../../../components/HeaderClient";
import { USER_CLIENT } from '../../../utils/Consts';

export default function Orders() {

    const user = useSelector(state => state.user);

    return (
        <Container>
            {user.userLogged === false || user.userType !== USER_CLIENT ? <Redirect to="/client/login"></Redirect> : null}
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
