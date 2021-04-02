import React, {useState} from 'react';
import {} from './styles';
import {Banner, Button, Container, ContainerFlex, Form, Input, Logo, Span, Title} from "./styles";
import LogoImage from "../../../assets/voila_logo.png";
import {Link} from "react-router-dom";
import axios from "axios";
import {PATH} from "../../../utils/Consts";
import {useHistory} from 'react-router-dom';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showEmail, setShowEmail] = useState(true);
    const history = useHistory();

    async function verifyEmailRegistered() {
        await axios.get(`${PATH}/client/exists`, {params: {
                email: email,
            }}).then(res => {
                if (res.data) {
                    setShowEmail(false);
                }
        });
    }

    async function resetPassword() {
        await axios.put(`${PATH}/client/reset-password`, {
                email: email,
                password: password
            }).then(() => {
                history.push('/login');
            });
    }

    function resetData() {
        setEmail('');
        setPassword('');
        setShowEmail(true);
    }

    return (
        <Container>
            <Form>
                <Logo src={LogoImage}/>
                <Title>Recuperar senha</Title>
                {
                    showEmail ?
                    <Input placeholder={"Digite seu e-mail"} value={email} type={"email"}
                           onChange={(event) => setEmail(event.target.value)} /> :
                    <Input placeholder={"Digite a nova senha"} value={password} type={"password"}
                           onChange={(event) => setPassword(event.target.value)} />}
                {
                    showEmail ?
                    <Button type={"button"} onClick={() => verifyEmailRegistered()}>Verificar</Button> :
                    <ContainerFlex>
                        <Button type={"button"} onClick={() => resetPassword()}>Resetar Senha</Button>
                        <Button type={"button"} onClick={() => resetData()}>Voltar</Button>
                    </ContainerFlex>
                }
                <Span><Link to="/client/login">Já tenho conta</Link></Span>
            </Form>
            <Banner/>
        </Container>
    );
}
