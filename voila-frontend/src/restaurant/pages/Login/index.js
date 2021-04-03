import React, { useState } from 'react'
import {Banner, Button, Container, ContainerFlex, Form, Input, Logo, Span, Title} from './styles';
import { PATH } from '../../../utils/Consts';
import axios from 'axios';
import LogoImage from '../../../assets/voila_logo.png';
import {Link} from 'react-router-dom';
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";

export default function LoginRestaurant() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        await axios.get(`${PATH}/restaurant/login`, {params: {
            email: email,
            password: password
        }}).then(res => {
            console.log(res);
        }).catch(err =>{
            return NotificationManager.error("Email ou senha incorretos",
                 "Erro", 1000);
        });
    }

    return (
        <Container>
            <Banner/>
            <Form>
                <Logo src={LogoImage}/>
                <Title>Entrar como Restaurante</Title>
                <Input type={"email"} onChange={e => setEmail(e.target.value)} placeholder={"Digite o e-mail"}/>
                <Input type={"password"} onChange={e => setPassword(e.target.value)} placeholder={"Digite a senha"}/>
                <Button onClick={() => login()} type="button">Login</Button>
                <ContainerFlex>
                    <Span><Link to="/restaurant/register">Não tenho conta</Link></Span>
                    <Span><Link to="/client/recovery">Esqueci minha senha</Link></Span>
                </ContainerFlex>
            </Form>
            <NotificationContainer />
        </Container>
    )
}
