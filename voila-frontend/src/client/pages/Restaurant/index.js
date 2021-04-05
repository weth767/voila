import React, { useEffect, useState } from 'react';
import { Container, Content, HeaderImage, InternalContent } from './styles';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { PATH } from "../../../utils/Consts";
import LogoRestaurant from '../../../assets/restaurant.png';
import { Showroom } from "../Orders/styles";
import HeaderClient from "../../../components/HeaderClient";
import FooterComponent from "../../../components/Footer";

export default function Restaurant({ match }) {
    const history = useHistory();
    const params = match.params;
    const [restaurant, setRestaurant] = useState(undefined);

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
            <HeaderClient/>
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
                    <FooterComponent/>
                </InternalContent>
            </Content>
        </Container>
    );
}
