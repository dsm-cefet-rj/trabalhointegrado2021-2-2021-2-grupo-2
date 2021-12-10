import React from "react";

// Componente de criação de grupo
class CriarGrupoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            descricao: "",
            imagem: "",
            error: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Função para atualizar o estado do componente
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Função para submeter o formulário
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.nome.length === 0) {
            this.setState({
                error: "Por favor, insira um nome para o grupo"
            });
        } else {
            this.setState({
                error: ""
            });
            this.props.onSubmit(this.state);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nome">Nome do grupo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    name="nome"
                                    value={this.state.nome}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descricao">Descrição</label>
                                <textarea

                                    className="form-control"
                                    id="descricao"
                                    name="descricao"
                                    value={this.state.descricao}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imagem">Imagem</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="imagem"
                                    name="imagem"
                                    value={this.state.imagem}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Criar grupo
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {this.state.error && (
                            <div className="alert alert-danger">
                                {this.state.error}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

}

export default CriarGrupoForm;