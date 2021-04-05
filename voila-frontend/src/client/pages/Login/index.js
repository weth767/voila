import React, {useState} from 'react'
import {Banner, Button, Container, ContainerFlex, Form, Input, Logo, Span, Title} from './styles';
import {PATH} from '../../../utils/Consts';
import axios from 'axios';
import LogoImage from '../../../assets/voila_logo.png';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { NotificationContainer, NotificationManager } from "react-notifications";
import 'react-notifications/lib/notifications.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function login() {
        if (!email || email.length === 0) {
            return;
        }
        if (!password || password.length === 0) {
            return;
        }
        await axios.get(`${PATH}/client/login`, {params: {
                email: email,
                password: password
            }}).then(async res => {
                await dispatch({
                    type: 'LOGIN',
                    payload: {
                        userEmail: res.data.email,
                        username: res.data.username,
                    }
                });
                history.push('/client/home');
            }, error => {
                return NotificationManager.error("Email ou senha incorretos",
                    "Erro", 1000);
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
            <NotificationContainer />
        </Container>
    )
}
