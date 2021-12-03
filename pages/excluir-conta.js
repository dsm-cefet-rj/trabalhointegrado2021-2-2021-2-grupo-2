import { Button } from 'react-bootstrap';

class ExcluirConta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            senha: '',
            mensagem: ''
        };
    }

    render() {
        return (
            <div className="ExcluirContaPage">
                <div className="ExcluirContaHeader">
                    <h1>Alterar senha</h1>
                </div>
                <p> Para excluir sua conta, digite sua senha atual.</p>
                <p> Não sera possivel recuperar sua conta após a exclusão.</p>
                <form className="ExcluirContaBody">
                    <div className="form-group">
                        <label htmlFor="senha">Confirme a sua senha</label>
                        <input type="password"
                            className="form-control"
                            id="senha"
                            placeholder="Senha atual"
                            onChange={this.handleSenhaChange} />
                    </div>
                    <div className="form-group">
                        <p>{this.state.mensagem}</p>
                    </div>
                    <div className="ExcluirContaButtons">
                        <Button
                            onClick={this.handleClickExcluirConta}
                            variant="danger">
                            Excluir Conta
                        </Button>
                    </div>
                </form>
            </div>
        );
    }

    handleSenhaChange = (event) => {
        this.setState({ senha: event.target.value });
    }

    handleClickExcluirConta = (event) => {
        event.preventDefault();
        const { senha } = this.state;

        fetch('/api/excluir-conta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ senha })
        })
            .then(response => response.json())
            .then(data => {
                if (data.mensagem) {
                    this.setState({ mensagem: data.mensagem });
                } else {
                    this.props.history.push('/');
                }
            }
            );
    }

}