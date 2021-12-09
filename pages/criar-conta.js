import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import CriarConta from "../components/ContaCriar";

class Criarconta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: "",
            confirmarSenha: "",
            error: '',
        };
    }

    changePage = (e) => {
        if (this.state.tipo === 'login') {
            this.setState({
                tipo: 'cadastro'
            })
        } else {
            this.setState({
                tipo: 'login'
            })
        }
    }
    render() {

        return (
            <div className="loginPage">
                <div className="loginHeader">
                    <h1>Djan</h1>
                    
                </div>
                <h2>Criar nova conta</h2>
                <CriarConta />
            </div>
        );

    }
}

export default Criarconta;