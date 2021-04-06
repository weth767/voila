import React from 'react';
import { useSelector } from "react-redux";
import HeaderRestaurant from "../../../components/HeaderRestaurant";
import { Container, Content, OrderContent } from "./styles";
import MenuRestaurant from "../../../components/MenuRestaurant";
import FooterComponent from "../../../components/Footer";
import { Redirect } from "react-router-dom";

export default function OrderStatus({ match }) {
    const params = match.params;
    return(
        <Container>
            {useSelector(state => state.user.userLogged) === false ? <Redirect to="/restaurant/login"/> : null}
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant/>
                <OrderContent>
                    <FooterComponent/>
                </OrderContent>
            </Content>
        </Container>
    );
}
