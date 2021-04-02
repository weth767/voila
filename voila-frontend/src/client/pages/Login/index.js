import React, {useState} from 'react'
import {Banner, Button, Container, ContainerFlex, Form, Input, Logo, Span, Title} from './styles';
import {PATH} from '../../../utils/Consts';
import axios from 'axios';
import LogoImage from '../../../assets/voila_logo.png';
import {Link} from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        if (!email || email.length === 0) {

        }
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
                <Title>Conectar-se</Title>
                <Input type={"email"} onChange={e => setEmail(e.target.value)} placeholder={"Digite o e-mail"}/>
                <Input type={"password"} onChange={e => setPassword(e.target.value)} placeholder={"Digite a senha"}/>
                <Button type={"button"} onClick={() => login()}>Login</Button>
                <ContainerFlex>
                    <Span><Link to="/client/register">Não tenho conta</Link></Span>
                    <Span><Link to="/client/recovery">Esqueci minha senha</Link></Span>
                </ContainerFlex>
            </Form>
        </Container>
    )
}
