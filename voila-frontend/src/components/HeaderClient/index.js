import React from 'react';
import LogoImage from "../../assets/voila_logo2.png";
import UserImage from "../../assets/user.png";
import { FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router";
import { Header, Options, Title, User, UserSpan } from "./styles";

export default function HeaderClient() {
    const history = useHistory();
    function logout() {
        history.push('/client/login');
    }

    return (
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
    );
}
