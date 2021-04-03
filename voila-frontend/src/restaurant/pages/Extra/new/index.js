import React,{useState} from 'react';
import {
    Container,
    Content, 
    Header, Menu,
    MenuItem,
    Options,
    Title,
    User, UserSpan,
    Button,
    Input,
    Form,
    Select,
    TitleForm,
    Span
} from './styles';
import { MdHome, MdDirectionsBike, MdRestaurantMenu, MdAttachMoney } from 'react-icons/md';
import { GiHamburger } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import UserImage from '../../../../assets/user.png';
import LogoImage from '../../../../assets/voila_logo2.png';
import { Link, useHistory } from 'react-router-dom';
import 'react-table-v6/react-table.css'
import axios from 'axios';
import { PATH,MAX_SIZE_FILE } from '../../../../utils/Consts';
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import 'react-notifications/lib/notifications.css';

export default function ExtraCreateRestaurant() {

    const history = useHistory();
    const [description, setDescription] = useState();
    const [isActive, setIsActive] = useState();
    const [price, setPrice] = useState();
    const [picture, setPicture] = useState();

    function logout() {
        history.push('/restaurant/login');
    }
    function checkInput() {
        if(description === "" || description == null){
            NotificationManager.error("Erro o campo 'descrição' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(isActive === "" || isActive == null){
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
                <Menu>
                <MenuItem>
                        <MdHome color={"#ff5757"} size={18}/>
                        <Span><Link to="/restaurant/home">Página Inicial</Link></Span>
                    </MenuItem>
                    <MenuItem>
                        <GiHamburger color={"#ff5757"} size={18}/>
                        <Span><Link to="/restaurant/home">Pedidos</Link></Span>
                    </MenuItem>
                    <MenuItem>
                        <MdDirectionsBike color={"#ff5757"} size={18}/>
                        <Span><Link to="/restaurant/home">Entregadores</Link></Span>
                    </MenuItem>
                    <MenuItem>
                        <MdRestaurantMenu color={"#ff5757"} size={18}/>
                        <Span><Link to="/restaurant/category">Categorias</Link></Span>
                    </MenuItem>
                    <MenuItem>
                        <MdRestaurantMenu color={"#ff5757"} size={18}/>
                        <Span><Link to="/restaurant/extra">Extra</Link></Span>
                    </MenuItem>
                    <MenuItem>
                        <MdAttachMoney color={"#ff5757"} size={18}/>
                        <Span><Link to="/restaurant/home">Financeiro</Link></Span>
                    </MenuItem>
                </Menu>
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
                        <Input type={"number"} onChange={e => setPrice(e.target.value)} placeholder={"Digite o valor do extra"}/>
                        <Input type="file" id="inputPicture" className="form-control-file" onChange={e => sendFile(e)} accept="image/png, image/jpeg" />
                    </Form>
                    <Button onClick={() => {save()}} type="button">Cadastrar</Button>
                </Container>
            </Content>
            <NotificationContainer></NotificationContainer>
        </Container>
    );
}
