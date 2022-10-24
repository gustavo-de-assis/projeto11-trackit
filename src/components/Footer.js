import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
    const percentage = 15;
    return (
        <FooterDiv>
            <Link to="/habitos">Hábitos</Link>

            <Link to="/hoje">
                <Progresso>
                    <CircularProgressbarWithChildren
                        value={percentage}
                        text={`${percentage}%`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                            strokeLinecap: 'round'
                        })}
                    > <span> Hoje </span>
                    </CircularProgressbarWithChildren>
                </Progresso>
            </Link>
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
const Progresso = styled.div `
    width: 91px;
    height: 91px;
    margin-bottom: 30px;
`