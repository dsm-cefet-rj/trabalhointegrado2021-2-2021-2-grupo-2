import React from "react";

class EditarMensagemForm extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            texto: this.props.mensagem.texto,
            corFundo: this.props.mensagem.corFundo,
            corFonte: this.props.mensagem.corFonte,
            imagem: this.props.mensagem.imagem
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.editarMensagem(this.state);
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="texto">Texto</label>
                        <input type="text" className="form-control" id="texto" name="texto" value={this.state.texto} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="corFundo">Cor de Fundo</label>
                        <input type="color" className="form-control" id="corFundo" name="corFundo" value={this.state.corFundo} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="corFonte">Cor de Fonte</label>
                        <input type="color" className="form-control" id="corFonte" name="corFonte" value={this.state.corFonte} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">Imagem</label>
                        <input type="text" className="form-control" id="imagem" name="imagem" value={this.state.imagem} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
    }
}

export default EditarMensagemForm;