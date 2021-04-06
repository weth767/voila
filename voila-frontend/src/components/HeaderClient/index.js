import React, { useState } from 'react';
import LogoImage from "../../assets/voila_logo2.png";
import UserImage from "../../assets/user.png";
import { FiLogOut } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
import { useHistory } from "react-router";
import { Header, Options, Title, User, UserSpan } from "./styles";
import Modal from 'react-modal';
import { useSelector } from "react-redux";

export default function HeaderClient() {
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    };

    const history = useHistory();
    const user = useSelector(state => state.user);
    const [showOrder,setShowOrder] = useState(false);

    function logout() {
        history.push('/client/login');
    }

    function openOrder() {
        setShowOrder(true);
    }

    function closeOrder(){
        setShowOrder(false);
    }

    return (
        <>
            <Modal
                id="teste"
                isOpen={showOrder}
                onRequestClose={closeOrder}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <h2>Hello</h2>
                <div>
                    I am a modal
                </div>
            </Modal>
            <Header>
                <img alt="Imagem de logo" src={LogoImage}/>
                <Title>VOILÀ</Title>
                <User>
                    <img alt="Imagem de logo" src={UserImage}/>
                    <UserSpan>{user.username}</UserSpan>
                    <Options>
                        <MdAddShoppingCart size={32} color={'#fff'} onClick={() => openOrder()}/>
                        <FiLogOut size={32} color={'#fff'} onClick={() => logout()}/>
                    </Options>
                </User>
            </Header>
        </>
    );
}
