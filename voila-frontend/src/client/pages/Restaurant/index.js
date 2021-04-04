import React, { useEffect, useState } from 'react';
import {
    Container,
    Content,
    Footer,
    Header,
    HeaderImage,
    InternalContent,
    Options,
    Title,
    User,
    UserSpan
} from './styles';
import { FiLogOut } from 'react-icons/fi';
import UserImage from '../../../assets/user.png';
import LogoImage from '../../../assets/voila_logo2.png';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { PATH } from "../../../utils/Consts";
import LogoRestaurant from '../../../assets/restaurant.png';
import { Showroom } from "../Orders/styles";

export default function Restaurant({ match }) {
    const history = useHistory();
    const params = match.params;
    const [restaurant, setRestaurant] = useState(undefined);

    function logout() {
        history.push('/client/login');
    }

    useEffect(() => {
        findResturant().then(() => {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function findResturant() {
        await axios.get(`${PATH}/restaurant/${params.id}`).then(result => {
            console.log(result.data);
            setRestaurant(result.data);
        });
    }

    // function viewItem(id) {
    //
    // }

    return (
        <Container>
            <Header>
                <img alt="Imagem de logo" src={LogoImage}/>
                <Title>VOILÀ</Title>
                <User>
                    <img alt="Imagem de logo" src={UserImage}/>
                    <UserSpan>Usuario</UserSpan>
                    <Options>
                        <FiLogOut size={32} color={'#fff'} onClick={() => logout()}/>
                    </Options>
                </User>
            </Header>
            <Content>
                <InternalContent>
                    <HeaderImage>
                        <img src={restaurant && restaurant.personLegal.person.image ?
                            'data:image/png;base64,' + restaurant.personLegal.person.image :
                            LogoRestaurant
                        }
                             alt={'restaurant'}/>
                    </HeaderImage>
                    <Showroom>
                        {/*{restaurant ? restaurant.map(restaurant => (*/}
                        {/*    <Card key={restaurant.id} onClick={() => viewItem(restaurant.id)}>*/}
                        {/*        /!* eslint-disable-next-line jsx-a11y/img-redundant-alt *!/*/}
                        {/*        <img src={restaurant.personLegal.person.image ?*/}
                        {/*            'data:image/png;base64,' + restaurant.personLegal.person.image : LogoRestaurant}*/}
                        {/*             alt={`${restaurant.personLegal.person.name} image`}/>*/}
                        {/*        <span>{restaurant.personLegal.person.name}</span>*/}
                        {/*        <p>{restaurant.open ? 'Aberto': 'Fechado'}</p>*/}
                        {/*    </Card>*/}
                        {/*)): null}*/}
                    </Showroom>
                    <Footer>Voila © Todos direitos reservados</Footer>
                </InternalContent>
            </Content>
        </Container>
    );
}
