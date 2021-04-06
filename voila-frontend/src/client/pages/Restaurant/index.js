import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    Container,
    ContainerModal,
    Content,
    HeaderImage,
    Input,
    InternalContent,
    Showroom,
    Span,
    Title
} from './styles';
import { Redirect, useHistory } from 'react-router-dom';
import axios from "axios";
import { PATH } from "../../../utils/Consts";
import LogoRestaurant from '../../../assets/restaurant.png';
import HeaderClient from "../../../components/HeaderClient";
import FooterComponent from "../../../components/Footer";
import { useDispatch, useSelector } from 'react-redux';
import FoodLogo from '../../../assets/food.jpg';
import Modal from 'react-modal';

export default function Restaurant({ match }) {
    const history = useHistory();
    const params = match.params;
    const [restaurant, setRestaurant] = useState();
    const [modalOpen,setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const user = useSelector(state => state.user);

    useEffect(() => {
        findResturant().then(() => {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function findResturant() {
        await dispatch({
            type: 'NEW_ORDER',
        });
        await axios.get(`${PATH}/restaurant/${params.id}`).then(result => {
            setRestaurant(result.data);
        });
    }

    function openModal(item) {
        setSelectedItem(item);
        setModalOpen(true);
    }

    function closeOrder(){
        setModalOpen(false);
    }

    async function saveItemOnOrder() {
        let am = amount !== undefined ? Number(amount) : 0;
        let orderItem = {
            item: selectedItem,
            amount: am,
            totalPrice: selectedItem.price * am
        };
        user.orderItems.push(orderItem);
        await dispatch({
            type: 'ORDER',
            payload: {
                orderItems: user.orderItems,
                restaurantId: params.id
            }
        });
        closeOrder();
    }

    return (
        <Container>
            {useSelector(state => state.user.userLogged) === false ? <Redirect to="/client/login"></Redirect> : null}
            <Modal
                id="modalItem"
                isOpen={modalOpen}
                onRequestClose={closeOrder}
                preventScroll={true}
                style={{display: 'flex', flexDirection: 'column-reverse', justifyContent: 'center',
                    alignItems: 'center'}}
            >
                <ContainerModal>
                    <img src={selectedItem ? 'data:image/png;base64,' + selectedItem.image: LogoRestaurant}
                         alt={selectedItem ? selectedItem.description + 'image' : 'image'}/>
                    <Title>Item: {selectedItem ? selectedItem.description : ''}</Title>
                    <Span>Preço: R$ {selectedItem ? selectedItem.price : ''}</Span>
                    <Input type={'number'} value={amount} placeholder={'Selecione a quantidade'}
                           onChange={e => setAmount(e.target.value)} />
                    <Button onClick = {() => saveItemOnOrder()}>Salvar item no pedido</Button>
                </ContainerModal>
            </Modal>
            <HeaderClient/>
            <Content>
                <InternalContent>
                    <HeaderImage>
                        <img src={restaurant && restaurant.personLegal.person.image ?
                            'data:image/png;base64,' + restaurant.personLegal.person.image :
                            LogoRestaurant
                        } alt={'restaurant'}/>
                    </HeaderImage>
                    <Showroom>
                        {restaurant ? restaurant.items.map(item => (
                            <Card key={item.id} onClick={() => openModal(item)}>
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img src={item.image ?
                                    'data:image/png;base64,' + item.image : FoodLogo}
                                     alt={`${item.description} image`}/>
                                <span>{item.description}</span>
                                <p>{`R$ ${item.price}`}</p>
                            </Card>
                        )): null}
                    </Showroom>
                    <FooterComponent/>
                </InternalContent>
            </Content>
        </Container>
    );
}
