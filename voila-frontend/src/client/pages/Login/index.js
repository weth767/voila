import React from 'react'
import {Container, Form, Button, Input, Banner, Logo} from './styles';

export default function Login() {
    return (
        <Container>
            <Banner/>
            <Form>
                <Logo/>
                <Input placeholder={"Digite o e-mail"}/>
                <Input placeholder={"Digite a senha"}/>
                <Button>Login</Button>
            </Form>
        </Container>
    )
}