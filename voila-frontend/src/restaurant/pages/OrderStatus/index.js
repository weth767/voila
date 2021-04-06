import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import HeaderRestaurant from "../../../components/HeaderRestaurant";
import {
    Container,
    Content,
    CenterContent,
    ClientContent,
    TextContent,
    OrderContent,
    Card,
    ValueContent, ButtonsContent
} from "./styles";
import MenuRestaurant from "../../../components/MenuRestaurant";
import FooterComponent from "../../../components/Footer";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { PATH, STATES, STATUS_ORDERS, USER_RESTAURANT } from "../../../utils/Consts";

export default function OrderStatus({ match }) {
    const history = useHistory();
    const user = useSelector(state => state.user);
    const params = match.params;
    const [orderData, setOrderData] = useState();

    async function getOrderData() {
        await axios.get(PATH + `/order/data/${params.orderId}`)
            .then((result) => {
                setOrderData(result.data);
            });
    }

    useEffect(() => {
        getOrderData();
    }, []);

    async function updateStatusOrder(cancel) {
        let status;
        if (cancel) {
            status = STATUS_ORDERS.find(status => status.id === "CANCELED").id;
        } else {
            status = STATUS_ORDERS.find(status => status.id === orderData.status).next;
        }
        await axios.put(PATH + `/order/${orderData.id}/${status}`)
            .then(() => {
                history.push('/restaurant/home');
            });
    }

    return(
        <Container>
            {user.userLogged === false || user.userType !== USER_RESTAURANT ? <Redirect to="/restaurant/login"/> : null}
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant/>
                <CenterContent>
                    <ClientContent>
                        <TextContent>
                            <label>Cliente: </label>
                            <span>{orderData ? orderData.client.personNatural.person.name + ', ' + orderData.client.personNatural.cpf  : ''}</span>
                        </TextContent>
                        <TextContent>
                            <label>Endereço: </label>
                            <span>{orderData ? orderData.client.personNatural.person.address.street + ', ' +
                                orderData.client.personNatural.person.address.number + ', ' +
                                orderData.client.personNatural.person.address.complement + ', ' +
                                orderData.client.personNatural.person.address.neighborhood + ', ' +
                                orderData.client.personNatural.person.address.city.name + ', ' +
                                STATES.find(st => st.id === orderData.client.personNatural.person.address.city.state).name
                                : ''}</span>
                        </TextContent>
                        <TextContent>
                            <label>Data/Hora pedido: </label>
                            <span>{orderData ? new Date(orderData.dateTime).toLocaleDateString() + ' - ' +
                                new Date(orderData.dateTime).toLocaleTimeString(): ''}</span>
                        </TextContent>
                    </ClientContent>
                    <OrderContent>
                        {orderData ? orderData.items.map(item => (
                            <Card>
                                <span>{item.description}</span>
                                <span>{item.itemCategory.name}</span>
                                <span>R${item.price}</span>
                            </Card>
                        )): null}
                    </OrderContent>
                    <ValueContent>
                        <span>Valor total: {orderData ? 'R$' + orderData.items.map(item => item.price).reduce((a,b) => a + b, 0) : ''}</span>
                    </ValueContent>
                    <ButtonsContent>
                        <button type='button' onClick={() => updateStatusOrder(true)}>Cancelar Pedido</button>
                        <button type='button' onClick={() => updateStatusOrder(false)}>Alterar Status</button>
                    </ButtonsContent>
                    <FooterComponent/>
                </CenterContent>
            </Content>
        </Container>
    );
}
