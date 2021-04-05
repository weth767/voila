import React from 'react';
import { Container, Content, InternalContent } from './styles';
import HeaderRestaurant from "../../../../components/HeaderRestaurant";
import MenuRestaurant from "../../../../components/MenuRestaurant";
import FooterComponent from "../../../../components/Footer";


export default function ItemNew() {
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
