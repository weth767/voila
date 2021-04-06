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

    const user = useSelector(state => state.user);
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
            {user.userLogged === false || user.userType !== USER_RESTAURANT ? <Redirect to="/restaurant/login"></Redirect> : null}
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
