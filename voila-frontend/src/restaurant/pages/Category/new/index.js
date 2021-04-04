import React, { useState } from 'react';
import { Button, Container, Content, Form, Input, Select, TitleForm } from './styles';
import { useHistory } from 'react-router-dom';
import 'react-table-v6/react-table.css'
import axios from 'axios';
import { PATH } from '../../../../utils/Consts';
import { NotificationContainer, NotificationManager, } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import MenuRestaurant from "../../../../components/MenuRestaurant";
import HeaderRestaurant from "../../../../components/HeaderRestaurant";
import FooterComponent from "../../../../components/Footer";

export default function CategoryCreateRestaurant() {

    const history = useHistory();
    const [name, setName] = useState();
    const [isActive, setIsActive] = useState();

    function logout() {
        history.push('/restaurant/login');
    }
    function checkInput() {
        if(name === "" || name == null){
            NotificationManager.error("Erro o campo 'nome' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(isActive === "" || isActive == null){
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
        await axios.post(`${PATH}/item-category`, {
            name:name,
            isActive:isActive,
        }).then(res => {
            NotificationManager.success("Categoria cadastrada com sucesso",
                 "Sucesso", 1000);
            history.push('/restaurant/category')
        }).catch(err => {
            NotificationManager.error("Erro ao cadastrar categoria",
                 "Erro", 1000);
        });
    }

    return (
        <Container>
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant/>
                <Container>
                    <TitleForm>Categoria</TitleForm>
                    <Form>
                        <Input type={"text"} onChange={e => setName(e.target.value)} placeholder={"Digite o Nome da Categoria"}/>
                        <Select defaultValue={"isActive"} onChange={e => {setIsActive(e.target.value)}}>
                            <option value="isActive" selected disabled hidden>Selecione uma opção</option>
                            <option value={true} >Ativo</option>
                            <option value={false} >Inativo</option>
                        </Select>
                    </Form>
                    <Button onClick={() => {save()}} type="button">Cadastrar</Button>
                    <FooterComponent/>
                </Container>
            </Content>
            <NotificationContainer/>
        </Container>
    );
}
