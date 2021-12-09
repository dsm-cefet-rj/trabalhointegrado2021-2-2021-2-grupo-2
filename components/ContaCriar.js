import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

class CriarConta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: "",
            confirmarSenha: "",
            erro: "",
        };
    }
    render() {
        return (
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
                    <div className="erro">{this.state.erro}</div>
                    <div className="loginButtons">
                        <div className="d-grid gap-2">
                            <Button type="submit" variant="outline-success">Criar Conta</Button>
                            <Link href="/" variant="outline-warning">Voltar</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    atualizarNome = event => {
        this.setState({ nome: event.target.value });
    };

    atualizarEmail = event => {
        this.setState({ email: event.target.value });
    };

    atualizarSenha = event => {
        this.setState({ senha: event.target.value });
    };

    atualizarConfirmarSenha = event => {
        this.setState({ confirmarSenha: event.target.value });
    };

    criarConta = event => {
        event.preventDefault();
        if (this.state.senha !== this.state.confirmarSenha) {
            this.setState({ erro: "Senhas não conferem" });
            return;
        }
        fetch("/api/criar-conta", {
            method: "POST",
            body: JSON.stringify({
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha,
            }),
        })
            .then(response => {
                if (response.status === 200) {
                    this.props.history.push("/");
                } else {
                    this.setState({ erro: response.statusText });
                }
            })
            .catch(error => {
                this.setState({ erro: "Erro ao criar conta" });
            });
    };
}

export default CriarConta;
