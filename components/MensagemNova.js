import React from "react";

// Componente de mensagem de nova mensagem
class NovaMensagemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: "",
            permiteComentario: false,
            corFundo: "",
            corFonte: "",
            imagem: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Função para atualizar o estado do componente
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // Função para submeter o formulário
    handleSubmit(event) {
        event.preventDefault();
        this.props.novaMensagem(this.state);
        this.setState({
            texto: "",
            permiteComentario: false,
            corFundo: "",
            corFonte: "",
            imagem: ""
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="texto">Texto</label>
                        <input
                            type="text"
                            className="form-control"
                            id="texto"
                            name="texto"
                            value={this.state.texto}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="permiteComentario">Permite Comentário</label>
                        <input
                            type="checkbox"
                            className="form-control"
                            id="permiteComentario"
                            name="permiteComentario"
                            checked={this.state.permiteComentario}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="corFundo">Cor de Fundo</label>
                        <input
                            type="color"
                            className="form-control"
                            id="corFundo"
                            name="corFundo"
                            value={this.state.corFundo}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="corFonte">Cor de Fonte</label>
                        <input
                            type="color"
                            className="form-control"
                            id="corFonte"
                            name="corFonte"
                            value={this.state.corFonte}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">Imagem</label>
                        <input
                            type="file"
                            className="form-control"
                            id="imagem"
                            name="imagem"
                            value={this.state.imagem}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >Enviar</button>
                </form>
            </div>
        );
    }
}

export default NovaMensagemForm;

