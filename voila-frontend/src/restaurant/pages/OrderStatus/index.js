import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import HeaderRestaurant from "../../../components/HeaderRestaurant";
import { Container, Content, CenterContent } from "./styles";
import MenuRestaurant from "../../../components/MenuRestaurant";
import FooterComponent from "../../../components/Footer";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { PATH } from "../../../utils/Consts";

export default function OrderStatus({ match }) {
    const params = match.params;
    const [orderData, setOrderData] = useState();

    async function getOrderData() {
        await axios.get(PATH + `/order/data/${params.orderId}`)
            .then((result) => {
                console.log(result.data);
                setOrderData(result.data);
            });
    }

    useEffect(() => {
        getOrderData();
    }, []);

    return(
        <Container>
            {useSelector(state => state.user.userLogged) === false ? <Redirect to="/restaurant/login"/> : null}
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant/>
                <CenterContent>
                    <FooterComponent/>
                </CenterContent>
            </Content>
        </Container>
    );
}
