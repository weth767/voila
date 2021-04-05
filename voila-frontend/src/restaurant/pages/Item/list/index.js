import React, { useEffect, useState } from 'react';
import { Button, ButtonTable, Container, Content, ContentOptions } from './styles';
import MenuRestaurant from "../../../../components/MenuRestaurant";
import HeaderRestaurant from "../../../../components/HeaderRestaurant";
import FooterComponent from "../../../../components/Footer";
import axios from "axios";
import { PATH } from "../../../../utils/Consts";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { useHistory } from "react-router";
import ReactTable from "react-table-v6";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function ItemList() {
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

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
            Header: 'Categoria',
            accessor: 'itemCategory.description'
        },
        {
            Header: 'Opções',
            Cell: row => (
                <ContentOptions>
                    <ButtonTable onClick={() => {deleteItem(row.original.id)}}>Apagar</ButtonTable>
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
        await axios.get(`${PATH}/item/page`)
            .then(res => {
                setItems(res.data.content);
                setIsLoaded(true);
            }).catch(err =>{
                setIsLoaded(true);
                return NotificationManager.error("Erro ao buscar Extras",
                    "Erro", 1000);
            });
    }

    function createItem() {
        history.push('/restaurant/item-new');
    }

    async function deleteItem(id) {
        await axios.delete(`${PATH}/item/${id}`)
            .then(res => {
                search();
            }).catch(err =>{
                return NotificationManager.error("Erro ao apagar o item",
                    "Erro", 1000);
            });
    }

    return (
        <Container>
            {useSelector(state => state.user.userLogged) === false ? <Redirect to="/restaurant/login"/> : null}
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant class={'menu'}/>
                <Container>
                    <ReactTable className={'table'}
                                previousText={'Anterior'}
                                nextText={'Próximo'}
                                data={items}
                                columns={columns}
                                pageText={"Página"}
                                rowsText={"Linhas"}
                                ofText={"de "}
                                noDataText={"Não há registros a listar"}
                    />
                    <Button onClick={() => createItem()} type="button">Cadastrar Novo Item</Button>
                    <FooterComponent/>
                </Container>
            </Content>
            <NotificationContainer/>
        </Container>
    );
}
