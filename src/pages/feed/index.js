import {Link} from 'react-router-dom'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {Container, Column, Title, TitleHighlight} from './style'
import bannerImage from '../../assets/banner.jpg';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

const Feed = () => {
    return (<>
            <Header autenticado={true}/>
            <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />                
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
              <UserInfo percentual={70} nome="Leandro Yamanaka" image="https://avatars.githubusercontent.com/u/78807020?s=400&u=632f78324bf9e8177d83da826d6f96bf34d175c0&v=4"/>
              <UserInfo percentual={45} nome="Leandro Yamanaka" image="https://avatars.githubusercontent.com/u/78807020?s=400&u=632f78324bf9e8177d83da826d6f96bf34d175c0&v=4"/>
              <UserInfo percentual={35} nome="Leandro Yamanaka" image="https://avatars.githubusercontent.com/u/78807020?s=400&u=632f78324bf9e8177d83da826d6f96bf34d175c0&v=4"/>
              <UserInfo percentual={25} nome="Leandro Yamanaka" image="https://avatars.githubusercontent.com/u/78807020?s=400&u=632f78324bf9e8177d83da826d6f96bf34d175c0&v=4"/>
              <UserInfo percentual={20} nome="Leandro Yamanaka" image="https://avatars.githubusercontent.com/u/78807020?s=400&u=632f78324bf9e8177d83da826d6f96bf34d175c0&v=4"/>
            </Column>                
            </Container>
        </>
    )
}

export {Feed};