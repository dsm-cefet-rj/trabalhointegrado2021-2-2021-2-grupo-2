import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "../components/Login";


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: "",
            confirmarSenha: "",
            error: '',
            tipo: 'login',
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
                <div className="LoginHeader">
                    <h1>Djan</h1>
                    <h2>Login</h2>
                </div>
                    <Login/>
            </div>
        );

    }
}

export default Index;