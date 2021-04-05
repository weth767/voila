import React from 'react';
import { Container, Content, InternalContent } from './styles';
import MenuRestaurant from "../../../components/MenuRestaurant";
import HeaderRestaurant from "../../../components/HeaderRestaurant";
import FooterComponent from "../../../components/Footer";

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
