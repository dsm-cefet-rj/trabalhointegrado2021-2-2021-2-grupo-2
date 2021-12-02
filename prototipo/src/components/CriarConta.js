import React from "react";
import { Button } from "react-bootstrap";

class CriarConta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: "",
            confirmarSenha: "",
            erro: ""
        };
    }
    render() {
        return (
            <div className="login-page">
                <div className="login-header">
                    <h1>Djan</h1>
                    <h2>Criar Conta</h2>
                </div>
                <div className="container">
                    <form onSubmit={this.criarConta} className="login-body">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                aria-describedby="nome"
                                placeholder="Nome"
                                value={this.state.nome}
                                onChange={this.atualizarNome}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.atualizarEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                id="senha"
                                aria-describedby="senha"
                                placeholder="Senha"
                                value={this.state.senha}
                                onChange={this.atualizarSenha}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmarSenha">Confirmar Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmarSenha"
                                aria-describedby="confirmarSenha"
                                placeholder="Confirmar Senha"
                                value={this.state.confirmarSenha}
                                onChange={this.atualizarConfirmarSenha}
                            />
                        </div>
                        <div className="login-buttons">
                            <div className="d-grid gap-2">
                                <Button type="submit" variant="outline-success">Criar Conta</Button>
                                <Button href="/" variant="outline-warning">Voltar</Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="erro">{this.state.erro}</div>
            </div>
        );
    }
    CriarConta = event => {
        event.preventDefault();
        const { nome, email, senha, confirmarSenha } = this.state;
        if (senha !== confirmarSenha) {
            this.setState({ erro: "Senhas não conferem" });
            return;
        }
        //TODO: Criar conta
        //this.props.criarConta(nome, email, senha);
    }
}

export default CriarConta;
