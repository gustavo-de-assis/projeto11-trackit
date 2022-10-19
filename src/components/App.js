import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/GlobalStyle";
import Cadastro from "./Cadastro";
import Login from "./Login";

export default function  App(){
    return(
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
        </Routes>
      </BrowserRouter>
    )
}