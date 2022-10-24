import axios from "axios"
import { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/img/logo.png"


export default function Cadastro() {
    const [sendInfo, setSendInfo] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });

    function realizaCadastro(e) {
        e.preventDefault();

        setSendInfo(true);
        const cadastro = {...userInfo}

        console.log(cadastro);

      /*   const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;
        axios.post(URL, cadastro).then((ans) => {
            alert("Cadastro realizado com sucesso!");
            navigate("/");
        }).catch((err) => {
                alert(err.response.data.message); 
        })        */
    }

    function formHandler(e){
        const {name, value} = e.target;
        setUserInfo({ ...userInfo, [name]:value});
    }

    return (
        <ContainerCadastro>
            <img src={logo} alt="logo" />

            <form onSubmit={realizaCadastro} disabled={sendInfo}>
                <input
                    name="email"
                    value={userInfo.email}
                    type="email"
                    placeholder="E-mail"
                    onChange={formHandler}
                    required
                />
                <input
                    name="password"
                    value={userInfo.password}
                    type="password"
                    placeholder="Senha"
                    onChange={formHandler}
                    required
                />
                <input
                    name="name"
                    value={userInfo.name}
                    type="text"
                    placeholder="Nome"
                    onChange={formHandler}
                    required
                />
                <input
                    name="image"
                    value={userInfo.image}
                    type="url"
                    placeholder="Foto"
                    onChange={formHandler}
                    required
                />
                <button type="submit" disabled={sendInfo}>{sendInfo ? <ThreeDots  color={"white"}/> : "Entrar"}</button>
            </form>
            <Link to={"/"}>Já tem uma conta? Faça Login!</Link>

        </ContainerCadastro>
    )
}

const ContainerCadastro = styled.div`
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