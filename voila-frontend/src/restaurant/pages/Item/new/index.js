import React, { useEffect, useState } from 'react';
import { Container, Content, InternalContent } from './styles';
import HeaderRestaurant from "../../../../components/HeaderRestaurant";
import MenuRestaurant from "../../../../components/MenuRestaurant";
import FooterComponent from "../../../../components/Footer";
import { NotificationContainer, NotificationManager } from "react-notifications";
import axios from "axios";
import { MAX_SIZE_FILE, PATH, USER_RESTAURANT } from "../../../../utils/Consts";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Form, Input, Select, TitleForm } from "../../Extra/new/styles";
import InputCurrency from "../../../../components/InputCurrency";

export default function ItemNew() {
    const history = useHistory();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [isActive, setIsActive] = useState();
    const [picture, setPicture] = useState();
    const [category, setCategory] = useState();
    const [extras, setExtras] = useState([]);
    const user = useSelector(state => state.user);

    const [categories, setCategories] = useState([]);
    const [extrasList, setExtrasList] = useState([]);

    useEffect(() => {
        getAllCategories();
        getAllExtras();
    }, []);

    async function getAllCategories() {
        await axios.get(PATH + "/item-category")
            .then((result) => {
                setCategories(result.data);
            });
    }

    async function getAllExtras() {
        await axios.get(PATH + "/extra")
            .then((result) => {
                setExtrasList(result.data);
            });
    }

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
            NotificationManager.error("Erro o campo 'Preço' é obrigatório",
                "Erro", 1000);
            return false;
        }
        if(category === "" || category == null){
            NotificationManager.error("Erro o campo 'Categoria' é obrigatório",
                "Erro", 1000);
            return false;
        }
        return true;
    }
    async function save() {
        if(!checkInput()){
            return;
        }
        console.log(extras);
        let ex = extras.map(extra => ({id: extra, description: undefined, image: undefined, isActive: true, price: 1.5}));
        await axios.post(`${PATH}/item`, {
            description:description,
            isActive:isActive,
            extras: ex,
            itemCategory: {id: category, name: undefined},
            price:price,
            image:picture,
            restaurantId: user.restaurantId
        }).then(res => {
            NotificationManager.success("Item cadastrada com sucesso",
                "Sucesso", 1000);
            history.push('/restaurant/item')
        }).catch(err => {
            NotificationManager.error("Erro ao cadastrar item",
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

    const handleSelect = (e) => {
        setExtras(Array.from(e.target.selectedOptions, option => Number(option.value)));
    }

    return (
        <Container>
            {user.userLogged === false || user.userType !== USER_RESTAURANT ? <Redirect to="/restaurant/login"></Redirect> : null}
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant/>
                <Container>
                    <TitleForm>Item</TitleForm>
                    <Form>
                        <Input type={"text"} onChange={e => setDescription(e.target.value)} placeholder={"Digite a descrição do Item"}/>
                        <Select defaultValue={"category"} onChange={e => {setCategory(e.target.value)}}>
                            <option value="category" selected disabled hidden>Selecione uma Categoria</option>
                            {categories.map((categoryItem) => (
                                <option key={categoryItem.id} value={categoryItem.id}>{categoryItem.name}</option>
                            ))}
                        </Select>
                    </Form>
                    <Form>
                        <Select defaultValue={"extras"} onChange={handleSelect} multiple>
                            <option value={"extras"} selected disabled hidden>Selecione os extras</option>
                            {extrasList.map((extraItem) => (
                                <option key={extraItem.id} value={extraItem.id}>{extraItem.description}</option>
                            ))}
                        </Select>
                        <Select defaultValue={"isActive"} onChange={e => {setIsActive(e.target.value)}}>
                            <option value="isActive" selected disabled hidden>Selecione uma opção</option>
                            <option value={true} >Ativo</option>
                            <option value={false} >Inativo</option>
                        </Select>
                    </Form>
                    <Form>
                        <InputCurrency handleChange={handleChange}
                                       placeholder="Digite o valor do item"/>
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
