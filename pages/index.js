import React from "react";
import Login from "../components/ContaLogin";


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
                <div className="loginHeader">
                    <h1>Djan</h1>
                </div>
                <h2>Login</h2>
                <Login/>
            </div>
        );

    }
}

export default Index;