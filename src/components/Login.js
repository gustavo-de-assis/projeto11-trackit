import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default  function Login(){
    return(
        <Container>
            <img src={logo} alt="logo"/>

            <form onSubmit={()=>alert("oi")}>
                <input 
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    />
                <input
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    />
                <button type="submit">Entrar</button>
            </form>
            
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
        }
    }
`