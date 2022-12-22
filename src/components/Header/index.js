import React from 'react'
import {BuscarInputContainer, Column, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper} from './style'
import { Button } from '../Button';
import logo from '../../assets/logo-dio.jpg';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio"/>
                {autenticado ? (
                <>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>
                ) : null}                
            </Row>
            <Row>
                {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/78807020?s=400&u=632f78324bf9e8177d83da826d6f96bf34d175c0&v=4"/>
                ) : (
                <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
                </>)}                
            </Row>
            
        </Container>
    </Wrapper>
  )
}

export { Header}
