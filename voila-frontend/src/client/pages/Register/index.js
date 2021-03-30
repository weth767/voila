import React from 'react';
import {Button, Container, Title, Banner, Form, Logo} from './styles';
import LogoImage from '../../../assets/voila_logo.png';
import {Input} from "../Login/styles";

export default function Home() {
    return (
        <Container>
            <Form>
                <Logo src={LogoImage}/>
                <Title>Cadastre-se</Title>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
                <Button onClick={() => {}}>Selecionar Imagem</Button>
                <Button onClick={() => {}}>Registrar</Button>
            </Form>
            <Banner/>
        </Container>
    )
}
