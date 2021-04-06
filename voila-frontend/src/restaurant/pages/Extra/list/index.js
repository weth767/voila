import React, { useEffect, useState } from 'react';
import { Button, ButtonTable, Container, Content, ContentOptions } from './styles';
import { Redirect, useHistory } from 'react-router-dom';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import axios from 'axios';
import { PATH, USER_RESTAURANT } from '../../../../utils/Consts';
import { NotificationContainer, NotificationManager, } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import MenuRestaurant from "../../../../components/MenuRestaurant";
import HeaderRestaurant from "../../../../components/HeaderRestaurant";
import FooterComponent from "../../../../components/Footer";
import { useSelector } from 'react-redux';

export default function ExtraRestaurant() {
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const user = useSelector(state => state.user);

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
            {user.userLogged === false || user.userType !== USER_RESTAURANT ? <Redirect to="/restaurant/login"></Redirect> : null}
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant class={'menu'}/>
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
                    <Button onClick={() => createExtra()} type="button">Cadastrar Novo Extra</Button>
                    <FooterComponent/>
                </Container>
            </Content>
            <NotificationContainer/>
        </Container>
    );
}
