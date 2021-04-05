import React, { useState } from 'react';
import { Button, Container, Content, Form, Input, Select, TitleForm } from './styles';
import { Redirect, useHistory } from 'react-router-dom';
import 'react-table-v6/react-table.css'
import axios from 'axios';
import { MAX_SIZE_FILE, PATH } from '../../../../utils/Consts';
import { NotificationContainer, NotificationManager, } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import InputCurrency from "../../../../components/InputCurrency";
import HeaderRestaurant from "../../../../components/HeaderRestaurant";
import MenuRestaurant from "../../../../components/MenuRestaurant";
import FooterComponent from "../../../../components/Footer";
import { useSelector } from 'react-redux';

export default function ExtraCreateRestaurant() {
    const history = useHistory();
    const [description, setDescription] = useState();
    const [isActive, setIsActive] = useState();
    const [price, setPrice] = useState();
    const [picture, setPicture] = useState();

    function checkInput() {
        if(description === "" || description == null){
            NotificationManager.error("Erro o campo 'descrição' é obrigatório",
                "Erro", 1000);
            return false;
        }
        if(isActive === "" || isActive === null){
            NotificationManager.error("Erro o campo 'Ativo' é obrigatório",
                "Erro", 1000);
            return false;
        }
        if(price === "" || price == null){
            NotificationManager.error("Erro o campo 'Ativo' é obrigatório",
                "Erro", 1000);
            return false;
        }
        return true;
    }
    async function save() {
        if(!checkInput()){
            return;
        }
        await axios.post(`${PATH}/extra`, {
            description:description,
            isActive:isActive,
            price:price,
            image:picture
        }).then(res => {
            NotificationManager.success("Extra cadastrada com sucesso",
                "Sucesso", 1000);
            history.push('/restaurant/extra')
        }).catch(err => {
            NotificationManager.error("Erro ao cadastrar extra",
                "Erro", 1000);
        });
    }

    function sendFile(e) {
        const file = e.target.files;
        const reader = new FileReader();
        reader.readAsArrayBuffer(file[0]);
        reader.onloadend = () => {
            const fileByteArray = [];
            const array = new Uint8Array(reader.result);
            if(array.length > MAX_SIZE_FILE){
                e.target.value = null;
                return NotificationManager.error("Erro a imagem deve ter no máximo 16MB!",
                    "Erro", 1000);
            }
            for (let i = 0; i < array.length; i++) {
                fileByteArray.push(array[i]);
            }
            setPicture(fileByteArray);
        }

    }

    const handleChange = (event, value, maskedValue) => {
        event.preventDefault();
        setPrice(value);
    };

    return (
        <Container>
            {useSelector(state => state.user.userLogged) === false ? <Redirect to="/restaurant/login"/> : null}
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant/>
                <Container>
                    <TitleForm>Extra</TitleForm>
                    <Form>
                        <Input type={"text"} onChange={e => setDescription(e.target.value)} placeholder={"Digite a descrição do extra"}/>
                        <Select defaultValue={"isActive"} onChange={e => {setIsActive(e.target.value)}}>
                            <option value="isActive" selected disabled hidden>Selecione uma opção</option>
                            <option value={true} >Ativo</option>
                            <option value={false} >Inativo</option>
                        </Select>
                    </Form>
                    <Form>
                        <InputCurrency handleChange={handleChange}
                                       placeholder="Digite o valor do extra"/>
                        <Input type="file" id="inputPicture" className="form-control-file" onChange={e => sendFile(e)} accept="image/png, image/jpeg" />
                    </Form>
                    <Button onClick={() => {save()}} type="button">Cadastrar</Button>
                    <FooterComponent/>
                </Container>
            </Content>
            <NotificationContainer/>
        </Container>
    );
}
