import React, { useState } from 'react'
import {Container, Form, Title, Button, Input, Banner, Logo} from './styles';
import { PATH } from '../../../utils/Consts';
import axios from 'axios';
import LogoImage from '../../../assets/voila_logo.png';

export default function LoginRestaurant() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        await axios.get(`${PATH}/client/login`, {params: {
                email: email,
                password: password
            }}).then(res => {
            console.log(res);
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
                <Button onClick={() => login()}>Login</Button>
            </Form>
        </Container>
    )
}
