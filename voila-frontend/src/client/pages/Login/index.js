import React, { useState } from 'react'
import {Container, Form, Button, Input, Banner, Logo} from './styles';
import { PATH } from '../../../utils/Consts';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        axios.get(PATH + `/client/login?email=${email}&password=${password}`)
            .then(res => {
                console.log(res);
            });
    }

    return (
        <Container>
            <Banner/>
            <Form>
                <Logo/>
                <Input onChange={e => setEmail(e.target.value)} placeholder={"Digite o e-mail"}/>
                <Input onChange={e => setPassword(e.target.value)} placeholder={"Digite a senha"}/>
                <Button click={()=> login()}>Login</Button>
            </Form>
        </Container>
    )
}