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
import { PATH } from '../../../../utils/Consts';
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import 'react-notifications/lib/notifications.css';

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
                        <Span><Link to="/restaurant/finances">Financeiro</Link></Span>
                    </MenuItem>
                </Menu>
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
                </Container>
            </Content>
            <NotificationContainer></NotificationContainer>
        </Container>
    );
}
