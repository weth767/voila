import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Container, Title, Banner, Form, Logo,Input,Select} from './styles';
import LogoImage from '../../../assets/voila_logo.png';
import axios from 'axios';
import { PATH, MAX_SIZE_FILE, STATES } from '../../../utils/Consts';
import 'react-notifications/lib/notifications.css';
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";

export default function RegisterRestaurant() {

    const stateList = STATES.map((state,i) =>
        <option key = {i} value={state.id}>{state.name}</option>
    );


    function setCities(citiesSelected) {
        setCityOption(citiesSelected.map((city,i) =>
            <option key = {i} value={city.id}>{city.name}</option>
        ));
    }
    

    const history = useHistory();

    const [cities, setCityOption] = useState();

    const [cnpj, setCnpj] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState();
    const [state, setState] = useState();
    const [street,setStreet] = useState();
    const [number,setNumber] = useState();
    const [neighborhood,setNeighborhood] = useState();
    const [complement,setComplement] = useState();
    const [city,setCity] = useState();


    function checkInput() {
        if(cnpj === "" || cnpj == null){
            NotificationManager.error("Erro o campo 'CNPJ' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(name === "" || name == null){
            NotificationManager.error("Erro o campo 'nome' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(phone === "" || phone == null){
            NotificationManager.error("Erro o campo 'telefone' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(email === "" || email == null){
            NotificationManager.error("Erro o campo 'e-mail' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(username === "" || username == null){
            NotificationManager.error("Erro o campo 'nome de usuário' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(password === "" || password == null){
            NotificationManager.error("Erro o campo 'senha' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(street === "" || street == null){
            NotificationManager.error("Erro o campo 'rua' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(number === "" || number == null){
            NotificationManager.error("Erro o campo 'número' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(complement === "" || complement == null){
            NotificationManager.error("Erro o campo 'complemento' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(neighborhood === "" || neighborhood == null){
            NotificationManager.error("Erro o campo 'bairro' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(state === "" || state == null){
            NotificationManager.error("Erro o campo 'estado' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        if(city === "" || city == null){
            NotificationManager.error("Erro o campo 'cidade' é obrigatório",
                 "Erro", 1000);
            return false;
        }
        return true;
    }

    async function findCity(stateSelected) {
        setState(stateSelected);
        await axios.get(`${PATH}/city/${stateSelected}`)
        .then(res => {
            setCities(res.data);
        }).catch(err => {
            console.log(err);
            NotificationManager.error("Erro ao buscar cidades",
                 "Erro", 1000);
        });
    }


    function sendFile(e) {
        const file = e.target.files;
        const reader = new FileReader();
        reader.readAsArrayBuffer(file[0]);
        reader.onloadend = () => {
            const fileByteArray = [];
            const array = new Uint8Array(reader.result);
            if(array.length > MAX_SIZE_FILE){
                e.target.value = null;
                return NotificationManager.error("Erro a imagem deve ter no máximo 16MB!",
                 "Erro", 1000);
            }
            for (let i = 0; i < array.length; i++) {
                fileByteArray.push(array[i]);
             }
            setPicture(fileByteArray);
        }
       
    }

    async function register() {
        if(!checkInput()){
            return;
        }
        await axios.post(`${PATH}/restaurant`, {
            open:true,
            personLegal: {
                cnpj:cnpj,
                person:{
                    name: name,
                    phone: phone,
                    image:picture,
                    account:{
                        email:email,
                        username:username,
                        password:password
                    },
                    address:{
                        street: street,
                        number: number,
                        neighborhood: neighborhood,
                        complement: complement,
                        city: {
                            name:city,
                            state:state
                        }
                    }
                }
            },
        }).then(res => {
            NotificationManager.success("Restaurante cadastrado com sucesso",
                 "Sucesso", 1000);
            history.push('/restaurant/login')
        }).catch(err => {
            NotificationManager.error("Erro ao cadastrar restaurante",
                 "Erro", 1000);
        });
    }

    return (
        <Container>
            <Form>
                <Logo src={LogoImage}/>
                <Title>Cadastre seu Restaurante</Title>
                <Container>
                    <Input type={"text"} onChange={e => setCnpj(e.target.value)} placeholder={"Digite o CNPJ"}/>
                    <Input type={"text"} onChange={e => setName(e.target.value)} placeholder={"Digite o Nome do Restaurante"}/>
                </Container>
                <Container>
                    <Input type={"text"} onChange={e => setPhone(e.target.value)} placeholder={"Digite o Telefone"}/>
                    <Input type={"email"} onChange={e => setEmail(e.target.value)} placeholder={"Digite o e-mail"}/>
                </Container>
                <Container>
                    <Input type={"text"} onChange={e => setUsername(e.target.value)} placeholder={"Digite o Nome de usuário"}/>
                    <Input type={"password"} onChange={e => setPassword(e.target.value)} placeholder={"Digite a senha"}/>
                </Container>
                <Container>
                    <Input type={"text"} onChange={e => setStreet(e.target.value)} placeholder={"Digite a rua"}/>
                    <Input type={"text"} onChange={e => setNumber(e.target.value)} placeholder={"Digite o número"}/>
                </Container>
                <Container>
                    <Input type={"text"} onChange={e => setComplement(e.target.value)} placeholder={"Digite o complemento"}/>
                    <Input type={"text"} onChange={e => setNeighborhood(e.target.value)} placeholder={"Digite bairro"}/>
                </Container>
                <Container>
                    <Select defaultValue={"State"} onChange={e => {findCity(e.target.value)}}>
                        <option value="State" selected disabled hidden>Selecione um estado</option>
                        {stateList}
                    </Select>
                    <Select defaultValue={"City"} onChange={e => setCity(e.target.value)}>
                        <option value="City" selected disabled hidden>Selecione uma cidade</option>
                        {cities}
                    </Select>

                </Container>
                <Input type="file" id="inputPicture" className="form-control-file" onChange={e => sendFile(e)} accept="image/png, image/jpeg" />
                <Button onClick={() => {register()}} type="button">Registrar</Button>
            </Form>
            <Banner/>
            <NotificationContainer />
        </Container>
    )
}
