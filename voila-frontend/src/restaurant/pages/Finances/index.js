import React from 'react';
import { Container, Content, Footer, InternalContent } from './styles';
import MenuRestaurant from "../../../components/MenuRestaurant";
import HeaderRestaurant from "../../../components/HeaderRestaurant";
import FooterComponent from "../../../components/Footer";

export default function Finances() {
    return (
        <Container>
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
