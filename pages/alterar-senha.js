class AlterarSenha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            senhaAtual: '',
            senhaNova: '',
            senhaNovaConfirmacao: '',
            mensagem: ''
        };
    }

    render() {
        return (
            <div className="AlterarSenhaPage">
                <div className="AlterarSenhaHeader">
                    <h1>Alterar senha</h1>
                </div>
                <form className="AlterarSenhaBody">
                    <div className="form-group">
                        <label htmlFor="senhaAtual">Senha atual</label>
                        <input type="password" className="form-control" id="senhaAtual" placeholder="Senha atual" onChange={this.handleChangeSenhaAtual} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senhaNova">Nova senha</label>
                        <input type="password" className="form-control" id="senhaNova" placeholder="Nova senha" onChange={this.handleChangeSenhaNova} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senhaNovaConfirmacao">Confirmar nova senha</label>
                        <input type="password" className="form-control" id="senhaNovaConfirmacao" placeholder="Confirmar nova senha" onChange={this.handleChangeSenhaNovaConfirmacao} />
                    </div>
                    <div className="form-group">
                        <p>{this.state.mensagem}</p>
                    </div>
                    <div className="AlterarSenhaButtons">
                        <button type="button" className="btn btn-primary" onClick={this.handleClickAlterarSenha}  >Alterar senha</button>
                    </div>
                </form>
            </div>
        )
    }

    handleChangeSenhaAtual(event) {
        this.setState({ senhaAtual: event.target.value });
    }

    handleChangeSenhaNova(event) {
        this.setState({ senhaNova: event.target.value });
    }

    handleChangeSenhaNovaConfirmacao(event) {
        this.setState({ senhaNovaConfirmacao: event.target.value });
    }

    handleClickAlterarSenha(event) {
        event.preventDefault();
        if (this.state.senhaNova !== this.state.senhaNovaConfirmacao) {
            this.setState({ mensagem: 'As senhas não conferem' });
            return;
        }
        if (this.state.senhaNova.length < 8) {
            this.setState({ mensagem: 'A senha deve ter no mínimo 8 caracteres' });
            return;
        }

        fetch('/api/alterar-senha', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                senhaAtual: this.state.senhaAtual,
                senhaNova: this.state.senhaNova
            })
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({ mensagem: 'Senha alterada com sucesso' });
                } else {
                    this.setState({ mensagem: 'Senha atual incorreta' });
                }
            });
    }
}

export default AlterarSenha;
