import React from 'react';
import {Button, Container, Title, Banner, Form, Logo, Input, ContainerFlex, Span} from './styles';
import LogoImage from '../../../assets/voila_logo.png';
import {Link} from "react-router-dom";

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
                <ContainerFlex>
                    <Span><Link to="/client/login">Já tenho conta</Link></Span>
                </ContainerFlex>
            </Form>
            <Banner/>
        </Container>
    )
}
