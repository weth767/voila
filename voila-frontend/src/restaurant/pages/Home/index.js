import React, { useEffect, useState } from 'react';
import { Container, Content, OrderContent, OrderItem, OrderList, OrderTitle } from './styles';
import axios from "axios";
import { PATH, STATUS_ORDERS, USER_RESTAURANT } from "../../../utils/Consts";
import HeaderRestaurant from "../../../components/HeaderRestaurant";
import MenuRestaurant from "../../../components/MenuRestaurant";
import FooterComponent from "../../../components/Footer";
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";

export default function HomeRestaurant() {
    const url = "https://images.vexels.com/media/users/3/143047/isolated/preview/b0c9678466af11dd45a62163bdcf03fe-iacute-cone-plano-de-hamb-uacute-rguer-de-fast-food-by-vexels.png";
    const [ordersWaiting, setOrdersWaiting] = useState([]);
    const [ordersPreparing, setOrdersPreparing] = useState([]);
    const [ordersDelivered, setOrdersDelivered] = useState([]);
    const history = useHistory();
    const user = useSelector(state => state.user);

    async function findOrders() {
        await axios.get(PATH + '/order/status/' + STATUS_ORDERS[0].id)
            .then((result) => {
                setOrdersWaiting(result.data);
            });
        await axios.get(PATH + '/order/status/' + STATUS_ORDERS[1].id)
            .then((result) => {
                setOrdersPreparing(result.data);
            });
        await axios.get(PATH + '/order/status/' + STATUS_ORDERS[4].id)
            .then((result) => {
                setOrdersDelivered(result.data);
            });
    }

    useEffect(() => {
        findOrders();
    }, []);

    function viewOrder(orderId) {
        history.push(`/restaurant/orderstatus/${orderId}`);
    }

    return (
        <Container>
            {user.userLogged === false || user.userType !== USER_RESTAURANT ? <Redirect to="/restaurant/login"></Redirect> : null}
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant/>
                <OrderContent>
                    <OrderList>
                        <OrderTitle>Pedidos em Espera</OrderTitle>
                        {ordersWaiting.map((order => (
                            <OrderItem key={order.id} onClick={() => viewOrder(order.id)}>
                                <img width={32} height={32} src={url} alt={''}/>
                                <span>{order.id + " - " + new Date(order.dateTime).toLocaleDateString() + " "
                                + new Date(order.dateTime).toLocaleTimeString()}</span>
                                <span>R$ {order.totalValue}</span>
                            </OrderItem>
                        )))}
                    </OrderList>
                    <OrderList>
                        <OrderTitle>Pedidos em Produção</OrderTitle>
                        {ordersPreparing.map((order => (
                            <OrderItem>
                                <img width={32} height={32} src={url} alt={''}/>
                                <span>{order.id + " - " + order.datetime}</span>
                            </OrderItem>
                        )))}
                    </OrderList>
                    <OrderList>
                        <OrderTitle>Pedidos Entregues</OrderTitle>
                        {ordersDelivered.map((order => (
                            <OrderItem>
                                <img width={32} height={32} src={url} alt={''}/>
                                <span>{order.id + " - " + order.datetime}</span>
                            </OrderItem>
                        )))}
                    </OrderList>
                    <FooterComponent/>
                </OrderContent>
            </Content>
        </Container>
    );
}
