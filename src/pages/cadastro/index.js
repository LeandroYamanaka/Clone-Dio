import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import {Column,Container,Span,CadastroText,Row,SubtitleLogin,Title,TitleLogin, Wrapper} from './style'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
    nome: yup.string().required('Campo obrigatório')
  }).required();

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const handleClickSignIn = () => { 
        navigate('/login')
      }

    return (<>
            <Header/>
            <Container>
                <Column>
                    <Title>                        
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>                    
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form>
                            <Input  name="nome" control={control} placeholder="Nome completo" leftIcon={<MdPerson/>}/>
                            <Input  name="email" control={control} placeholder="Email" leftIcon={<MdEmail/>}/>
                            <Input  name="password" control={control} placeholder="Password" type="password" leftIcon={<MdLock/>}/>
                            <Button title="Criar minha conta" variant='secondary'  type="submit"></Button>
                        </form>
                        <Row>
                            <CadastroText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                            </CadastroText>
                            
                        </Row>
                        <Row>
                            <CadastroText>
                            Já tenho conta. 
                            <Span onClick={handleClickSignIn}> Fazer login</Span>
                            </CadastroText>
                        </Row>
                    </Wrapper>                    
                </Column>
            </Container>
        </>
    )
}

export {Cadastro};