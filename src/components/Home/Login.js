import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/img/logo.png"


export default  function Login(){
    const [loginInfo, setLoginInfo] = useState({email:"",password:""})
    const [loginAttempt, setLoginAttempt]= useState(false);
    const URL ='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    function logUser(e){
        e.preventDefault();

        const log = {...loginInfo}
        console.log(loginInfo);
        
        setLoginAttempt(true);

         axios.post(URL, log)
        .then((ans)=>console.log('Logado com sucesso', ans.data))
        .catch((err)=>{
                alert("Usuário não cadastrado!")
                console.log(err.response.data.message)
                setLoginAttempt(false);
            }
        ) 
                
    }

    function logHandler(e){
        const {name, value} = e.target;
        setLoginInfo({ ...loginInfo, [name]:value});
    }

    return(
        <Container>
            <img src={logo} alt="logo"/>

            <form onSubmit={logUser} disabled={loginAttempt}>
                <input 
                    name="email"
                    value={loginInfo.email}
                    onChange={logHandler}
                    type="email"
                    placeholder="E-mail"
                    required
                    />
                <input
                    name="password"
                    value={loginInfo.password}
                    onChange={logHandler}
                    type="password"
                    placeholder="Senha"
                    required
                    />
                <button type="submit" disabled={loginAttempt}>{loginAttempt ? <ThreeDots color={"white"}/>:'Entrar'}</button>
            </form>
            <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        margin-top: 70px;
        margin-bottom: 30px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input, button{
            width: 305px;
            height: 45px;
            margin: 5px;
            border-radius: 5px;
            border: 1px solid #D4D4D4;
        }
        button{
            background-color: #52B6FF;
            color: #fff;
            

            display: flex;
            justify-content: center;
            align-items: center;
            
            :hover{
                cursor: pointer;
                opacity: 0.8;
            }
            :disabled{
                opacity: 0.8;
            }
        }
    }
    a{
        text-decoration: underline;
        color: #52B6FF;
        margin-top: 50px;
    }
`