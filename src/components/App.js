import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/GlobalStyle";
import Cadastro from "./Home/Cadastro";
import Habitos from "./Habitos";
import Historico from "./Historico";
import Hoje from "./Hoje";
import Login from "./Home/Login";


export default function  App(){
    return(
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/habitos" element={<Habitos />}/>
            <Route path="/hoje" element={<Hoje/>}/>
            <Route path="/historico" element={<Historico/>}/>
        </Routes>
      </BrowserRouter>
    )
}