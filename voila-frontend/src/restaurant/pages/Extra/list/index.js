import React,{useEffect,useState} from 'react';
import {
    Container,
    Content, 
    Header, Menu,
    MenuItem,
    Options,
    Title,
    User, UserSpan,
    Button,
    ContentOptions,
    ButtonTable,
    Span
} from './styles';
import { MdHome, MdDirectionsBike, MdRestaurantMenu, MdAttachMoney } from 'react-icons/md';
import { GiHamburger } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import UserImage from '../../../../assets/user.png';
import LogoImage from '../../../../assets/voila_logo2.png';
import { Link, useHistory } from 'react-router-dom';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import axios from 'axios';
import { PATH } from '../../../../utils/Consts';
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import 'react-notifications/lib/notifications.css';

export default function ExtraRestaurant() {
    const history = useHistory();

    const [isLoaded, setIsLoaded] = useState(false);

    const [data, setData] = useState([]);

    
    const columns = [
        {
            Header: 'Descrição',
            accessor: 'description'
        },
        {
            Header: 'Preço',
            accessor: 'price'
        },
        {
            Header: 'Opções',
            Cell: row => (
                <ContentOptions>
                    <ButtonTable onClick={() => {deleteExtra(row.original.id)}}>Apagar</ButtonTable>
                </ContentOptions>
            )
         }
    ];

    useEffect(()=> {
        if(!isLoaded){
            search();
        }
       
    },[isLoaded]);

    async function search() {
        await axios.get(`${PATH}/extra/page`)
        .then(res => {
            setData(res.data.content);
            setIsLoaded(true);
        }).catch(err =>{
            setIsLoaded(true);
            return NotificationManager.error("Erro ao buscar Extras",
                 "Erro", 1000);
        });
    }

    function logout() {
        history.push('/restaurant/login');
    }

    function createExtra() {
        history.push('/restaurant/extra-new');
    }

    async function deleteExtra(id) {
        await axios.delete(`${PATH}/extra/${id}`)
        .then(res => {
            search();
        }).catch(err =>{
            return NotificationManager.error("Erro ao apagar extra",
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
                    <ReactTable
                        data={data}
                        columns={columns}
                    />
                    <Button onClick={() => createExtra()} type="button">Cadastrar Novo Extra</Button>
                </Container>
            </Content>
            <NotificationContainer></NotificationContainer>
        </Container>
    );
}
