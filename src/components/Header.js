import { useState } from "react";
import styled from "styled-components";
import trackit from "../assets/img/TrackIt.png"

export default function Header(){
    const [userImg, setUsrImg] = useState("https://upload.wikimedia.org/wikipedia/commons/5/5a/Canis_lupus_265b.jpg");

    return(
        <HeaderDiv>
            <img src={trackit} alt=""/>
            <div>
                <img src={userImg} alt=""/>
            </div>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    width:375px;
    height: 70px;
    background-color: #126BA5;

    position: fixed;

    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
    img{
        padding: 20px;
    }
    div{
        img{
            aspect-ratio: 1/1;
            width: 40px;
            border-radius: 50%;
        }
    }


`
