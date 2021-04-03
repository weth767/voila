import React, { useEffect, useState } from 'react';
import { Container, Content, Footer, Header, InternalContent, Options, Title, User, UserSpan } from './styles';
import { FiLogOut } from 'react-icons/fi';
import UserImage from '../../../assets/user.png';
import LogoImage from '../../../assets/voila_logo2.png';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { PATH } from "../../../utils/Consts";

export default function Restaurant() {
    const history = useHistory();

    const [resturants, setRestaurants] = useState([]);

    function logout() {
        history.push('/client/login');
    }

    useEffect(() => {
        findResturants().then(() => {});
    }, []);

    async function findResturants() {
        await axios.get(`${PATH}/restaurant`).then(result => {
            setRestaurants(result.data);
        });
    }

    return (
        <Container>
            <Header>
                <img alt="Imagem de logo" src={LogoImage}/>
                <Title>VOILÀ</Title>
                <User>
                    <img alt="Imagem de logo" src={UserImage}/>
                    <UserSpan>Usuario</UserSpan>
                    <Options>
                        <FiLogOut size={32} color={'#fff'} onClick={() => logout()}/>
                    </Options>
                </User>
            </Header>
            <Content>
                <InternalContent>
                    <Footer>Voila © Todos direitos reservados</Footer>
                </InternalContent>
            </Content>
        </Container>
    );
}
