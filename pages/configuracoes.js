import { Dropdown } from "react-bootstrap";
import { message } from "statuses";

class configuracoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: props.usuario,
            message: '',
        };
    }

    render() {
        return (
            <div className="ConfigPage">
                <div className="ConfigHeader">

                    <h1>Configurações</h1>

                    <img src={this.setState.usuario.foto} alt="Foto Usuario" className="ConfigeHeader-logo" />
                </div>
                <form className="ConfigBody">
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Nome"
                            value={this.state.usuario.nome}
                            onChange={this.atualizarNome}
                        />
                    </div>
                    <div className="ConfigButtons">
                        <Link href="/alterar-senha" className="btn btn-primary">Alterar Senha</Link>
                        <Link href="/excluir-conta" className="btn btn-primary">Excluir Conta</Link>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cor-interface">Cor Interface</label>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="secondary"
                                id="dropdown-cor-interface">
                                {this.state.usuario.interfaceTema}
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Action</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fonte-interface">Fonte Interface</label>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="secondary"
                                id="dropdown-cor-interface">
                                {this.state.usuario.interfaceFonte}
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Action</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="form-group">
                        <p>{this.state.mensagem}</p>
                    </div>
                    <div className="ConfigButtons">
                        <button type="submit" className="btn btn-primary" onClick={this.handleClickSalvar} >Salvar</button>
                        <button type="submit" className="btn btn-primary" onClick={this.handleClickCancelar}>Cancelar</button>
                    </div>
                </form>
            </div>
        );
    }

    handleClickSalvar = (event) => {
        event.preventDefault();
        fetch('/api/alterar-configuracoes' + this.state.usuario.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: this.state.usuario.nome,
                interfaceTema: this.state.usuario.interfaceTema,
                interfaceFonte: this.state.usuario.interfaceFonte,
            })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    usuario: data,
                    message: 'Alterado com sucesso!'
                });
            }
            );
    }

    handleClickCancelar = (event) => {
        event.preventDefault();
        this.setState({
            mensagem: '',
        });
    }

    atualizarNome = (event) => {
        this.setState({ usuario: { ...this.state.usuario, nome: event.target.value } });
    }
}