import React, { useEffect, useState } from 'react';
import {
    Button,
    ButtonTable,
    Container,
    Content,
    ContentOptions,
} from './styles';
import { Redirect, useHistory } from 'react-router-dom';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import axios from 'axios';
import { PATH, USER_RESTAURANT } from '../../../../utils/Consts';
import { NotificationContainer, NotificationManager, } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import { useSelector } from 'react-redux';
import HeaderRestaurant from "../../../../components/HeaderRestaurant";
import MenuRestaurant from "../../../../components/MenuRestaurant";
import FooterComponent from "../../../../components/Footer";

export default function CategoryRestaurant() {
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const user = useSelector(state => state.user);

    const columns = [
        {
            Header: 'Nome',
            accessor: 'name'
        },
        {
            Header: 'Opções',
            Cell: row => (
                <ContentOptions>
                    <ButtonTable onClick={() => {deleteCategory(row.original.id)}}>Apagar</ButtonTable>
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
        await axios.get(`${PATH}/item-category/page`)
            .then(res => {
                setData(res.data.content);
                setIsLoaded(true);
            }).catch(err =>{
                setIsLoaded(true);
                return NotificationManager.error("Erro ao buscar categoria",
                    "Erro", 1000);
            });
    }

    function createCategory() {
        history.push('/restaurant/category-new');
    }

    async function deleteCategory(id) {
        await axios.delete(`${PATH}/item-category/${id}`)
            .then(res => {
                search();
            }).catch(err =>{
                return NotificationManager.error("Erro ao apagar categoria",
                    "Erro", 1000);
            });
    }

    return (
        <Container>
            {user.userLogged === false || user.userType !== USER_RESTAURANT ? <Redirect to="/restaurant/login"></Redirect> : null}
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant/>
                <Container>
                    <ReactTable className={'table'}
                                previousText={'Anterior'}
                                nextText={'Próximo'}
                                data={data}
                                columns={columns}
                                pageText={"Página"}
                                rowsText={"Linhas"}
                                ofText={"de "}
                                noDataText={"Não há registros a listar"}
                    />
                    <Button onClick={() => createCategory()} type="button">Cadastrar Nova Categoria</Button>
                    <FooterComponent/>
                </Container>
            </Content>
            <NotificationContainer/>
        </Container>
    );
}
