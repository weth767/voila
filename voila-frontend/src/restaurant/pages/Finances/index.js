import React, { useEffect, useState } from 'react';
import { Container, Content, FinanceListItem, FinanceListTitle, FinancesList, InternalContent } from './styles';
import MenuRestaurant from "../../../components/MenuRestaurant";
import HeaderRestaurant from "../../../components/HeaderRestaurant";
import FooterComponent from "../../../components/Footer";
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import axios from "axios";
import { PATH } from "../../../utils/Consts";

export default function Finances() {
    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());
    const [financesCreditCard, setFinancesCreditCard] = useState([]);
    const [financesDebitCard, setFinancesDebitCard] = useState([]);
    const [financesMoney, setFinancesMoney] = useState([]);

    useEffect(() => {
        findFinances().then(() => {});
    }, []);

    async function findFinances() {
        await axios.get(PATH + '/finances', {
            params: {
                minDate: minDate,
                maxDate: maxDate
            }
        }).then((result) => {
            let finances = result.data;
            setFinancesCreditCard(finances.filter((finance) => finance.paymentType === "CREDIT_CARD"));
            setFinancesDebitCard(finances.filter((finance) => finance.paymentType === "DEBIT_CARD"));
            setFinancesMoney(finances.filter((finance) => finance.paymentType === "MONEY"));
        });
    }

    return (
        <Container>
            {useSelector(state => state.user.userLogged) === false ? <Redirect to="/restaurant/login"/> : null}
            <HeaderRestaurant/>
            <Content>
                <MenuRestaurant/>
                <InternalContent>
                    <FinancesList>
                        <FinanceListTitle>Entradas Dinheiro</FinanceListTitle>
                        {financesMoney.map((finance) => (
                            <FinanceListItem key={finance.id}>
                                <span>{finance.dateTime}</span>
                                <span>{finance.totalValue}</span>
                            </FinanceListItem>
                        ))}
                    </FinancesList>
                    <FinancesList>
                        <FinanceListTitle>Entradas Cartão de Crédito</FinanceListTitle>
                        {financesCreditCard.map((finance) => (
                            <FinanceListItem key={finance.id}>
                                <span>{finance.dateTime}</span>
                                <span>{finance.totalValue}</span>
                            </FinanceListItem>
                        ))}
                    </FinancesList>
                    <FinancesList>
                        <FinanceListTitle>Entradas Cartão de Debíto</FinanceListTitle>
                        {financesDebitCard.map((finance) => (
                            <FinanceListItem key={finance.id}>
                                <span>{finance.dateTime}</span>
                                <span>{finance.totalValue}</span>
                            </FinanceListItem>
                        ))}
                    </FinancesList>
                    <FooterComponent/>
                </InternalContent>
            </Content>
        </Container>
    );
}
