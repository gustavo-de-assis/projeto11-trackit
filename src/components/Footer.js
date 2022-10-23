import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer(){
    return(
        <FooterDiv>
            <Link to="/habitos">Hábitos</Link>
            <img />
            <Link to="/historico">Histórico</Link>
        </FooterDiv>
    )
}

const FooterDiv = styled.div`
    width:375px;
    height: 70px;
    background-color: #fff;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    position: fixed;
    bottom: 0;
    left:0;
    a{
        text-decoration: none;
        color: #52B6FF;
    }

`