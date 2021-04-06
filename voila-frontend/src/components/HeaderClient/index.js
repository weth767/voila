import React, { useState } from 'react';
import LogoImage from "../../assets/voila_logo2.png";
import UserImage from "../../assets/user.png";
import { FiLogOut } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
import { useHistory } from "react-router";
import {
    Button,
    Card,
    ContainerImage,
    ContainerModal,
    Content,
    Header, Input,
    Options, Select,
    Title,
    User,
    UserSpan
} from "./styles";
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";
import RestaurantImage from '../../assets/restaurant.png';
import axios from "axios";
import { PATH, PAYMENT_TYPES } from "../../utils/Consts";
import 'react-notifications/lib/notifications.css';
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";

export default function HeaderClient() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.user);
    const [showOrder, setShowOrder] = useState(false);
    const [needExchange, setNeedExchange] = useState(false);
    const [exchange, setExchange] = useState(0);
    const [paymentType, setPaymentType] = useState('');
    const [needDelivery, setNeedDelivery] = useState(false);

    async function logout() {
        await dispatch({
            type: 'LOGOUT'
        });
        history.push('/client/login');
    }

    function getTotalValue() {
        return user.orderItems.map(orderItem => orderItem.totalPrice).reduce((a, b) => a + b, 0);
    }

    function checkInput() {
        if (paymentType === "" || paymentType == null) {
            NotificationManager.error("Erro o campo 'Tipo de Pagamento' é obrigatório",
                "Erro", 1000);
            return false;
        }
        if (needExchange && (!exchange || exchange === '')) {
            NotificationManager.error("Erro o campo 'Troco' é obrigatório",
                "Erro", 1000);
            return false;
        }
        return true;
    }

    async function finishOrder() {
        if (!checkInput()) {
            return;
        }
        let items = user.orderItems.map(orderItem => orderItem.item);
        items.forEach(item => {
            item.restaurantId = user.restaurantId
        });
        axios.post(PATH + '/order', {
            dateTime: new Date(),
            totalValue: getTotalValue(),
            needExchange: needExchange,
            exchange: Number(exchange),
            paymentType: paymentType,
            needDelivery: needDelivery,
            restaurant: {
                id: user.restaurantId
            },
            client: {
                id: user.clientId
            },
            items: items,
        }).then(() => {
            history.push('/client/home');
        });
    }

    function openOrder() {
        setShowOrder(true);
    }

    function closeOrder(){
        setShowOrder(false);
    }

    function goToHome() {
        history.push('/client/home');
    }

    return (
        <>
            <Modal
                id="modalItem"
                isOpen={showOrder}
                onRequestClose={closeOrder}
                preventScroll={true}
                style={{display: 'flex', flexDirection: 'column-reverse', justifyContent: 'center',
                    alignItems: 'center'}}
            >
                <ContainerImage>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={RestaurantImage} alt="Restaurant image"/>
                </ContainerImage>
                <ContainerModal>
                    {user.orderItems.map(orderItem => (
                        <Card>
                            <span>Descrição do Item: {orderItem.item.description}</span>
                            <span>Preço do Item: R$ {orderItem.item.price}</span>
                            <span>Quantidade do Item: {orderItem.amount}</span>
                            <span>Valor Total deste Item: R$ {orderItem.totalPrice}</span>
                        </Card>
                    ))}
                    <Content>
                        <Select defaultValue={"needExchange"} onChange={e => {setNeedExchange(e.target.value)}}>
                            <option value="needExchange" selected disabled hidden>Precisa de Troco?</option>
                            <option value={true} >Sim</option>
                            <option value={false} >Não</option>
                        </Select>
                    </Content>
                    <Content>
                        <Input disabled={!needExchange} type="text" id="exchange" placeholder="Digite o troco para qual valor"
                            onChange={e => setExchange(e.target.value)}/>
                    </Content>
                    <Content>
                        <Select defaultValue={"paymentType"} onChange={e => {setPaymentType(e.target.value)}}>
                            <option value="paymentType" selected disabled hidden>Tipo de Pagamento</option>
                            {PAYMENT_TYPES.map(pt => (
                                <option value={pt.id}>{pt.name}</option>
                            ))}
                        </Select>
                    </Content>
                    <Content>
                        <Select defaultValue={"needDelivery"} onChange={e => {setNeedDelivery(e.target.value)}}>
                            <option value="needDelivery" selected disabled hidden>Precisa de entrega?</option>
                            <option value={true} >Sim</option>
                            <option value={false} >Não</option>
                        </Select>
                    </Content>
                    <Card>
                        <span>Valor total dos Itens</span>
                        <span>Preço do Item: R$ {getTotalValue()}</span>
                    </Card>
                    <Button onClick={() => finishOrder()}>Finalizar Pedido</Button>
                </ContainerModal>
            </Modal>
            <Header>
                <img alt="Imagem de logo" src={LogoImage}/>
                <Title onClick={() => goToHome()}>VOILÀ</Title>
                <User>
                    <img alt="Imagem de logo" src={UserImage}/>
                    <UserSpan>{user.username}</UserSpan>
                    <Options>
                        <MdAddShoppingCart size={32} color={'#fff'} onClick={() => openOrder()}/>
                        <FiLogOut size={32} color={'#fff'} onClick={() => logout()}/>
                    </Options>
                </User>
            </Header>
            <NotificationContainer/>
        </>
    );
}
