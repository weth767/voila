import React from 'react';
import LogoImage from "../../assets/voila_logo2.png";
import UserImage from "../../assets/user.png";
import { FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router";
import { Header, Options, Title, User, UserSpan } from "./styles";
import { useDispatch, useSelector } from 'react-redux';

export default function HeaderRestaurant() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.user);

    async function logout() {
        await dispatch({
            type: 'LOGOUT'
        });
        history.push('/restaurant/login');
    }

    return (
        <Header>
            <img alt="Imagem de logo" src={LogoImage}/>
            <Title>VOILÀ</Title>
            <User>
                <img alt="Imagem de logo" src={UserImage}/>
                <UserSpan>{user.username}</UserSpan>
                <Options>
                    <FiLogOut size={32} color={'#fff'} onClick={() => logout()}/>
                </Options>
            </User>
        </Header>
    );
}
