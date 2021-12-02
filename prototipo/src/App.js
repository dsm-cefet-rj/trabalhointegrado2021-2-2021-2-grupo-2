import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import CriarConta from "./components/CriarConta";
import "./App.scss";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element = {<Login />}/>
                <Route exact path="/criar-conta" element = {<CriarConta />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
