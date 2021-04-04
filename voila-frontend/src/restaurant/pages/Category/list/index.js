import React, { useEffect, useState } from 'react';
import { Button, ButtonTable, Container, Content, ContentOptions } from './styles';
import { useHistory } from 'react-router-dom';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import axios from 'axios';
import { PATH } from '../../../../utils/Consts';
import { NotificationContainer, NotificationManager, } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import HeaderRestaurant from "../../../../components/HeaderRestaurant";
import MenuRestaurant from "../../../../components/MenuRestaurant";
import FooterComponent from "../../../../components/Footer";

export default function CategoryRestaurant() {
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

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
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant/>
                <Container>
                    <ReactTable className={'table'}
                                data={data}
                                columns={columns}
                    />
                    <Button onClick={() => createCategory()} type="button">Cadastrar Nova Categoria</Button>
                    <FooterComponent/>
                </Container>
            </Content>
            <NotificationContainer/>
        </Container>
    );
}
