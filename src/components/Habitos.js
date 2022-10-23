import { useState } from "react";
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

export default function Habitos(){
    const [habitos, setHabitos] = useState([]);

    return(
        <>
        <Header/>
            <BodyHabitos>
                <Titulo>
                    <p>Meus Hábitos</p>
                    <button>+</button>
                </Titulo>
                <Lista>
                    {habitos.length === 0 ? 
                    <p>Você não tem nenhum hábito cadastrado ainda.
                         Adicione um hábito para começar a trackear!</p>
                         :
                         habitos.map((h)=> <li>h</li>)

                    }
                </Lista>
            </BodyHabitos>
        <Footer/>
        </>
    )
}

const BodyHabitos = styled.div`
    padding: 100px 20px;

`
const Titulo = styled.div`
    height: 36px;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;

    p{
        font-weight:500;
        font-size: 25px;
    }

    button{
        width: 40px;
        height: 36px;

        font-size: 20px;
        background-color: #52B6FF;
        color: #fff;

        border-radius: 5px;
        border-style: none; 
    }
`
const Lista = styled.div`
    p{
        padding-top: 10px;
        font-size: 16px;
        font-weight: 500;

    }
`