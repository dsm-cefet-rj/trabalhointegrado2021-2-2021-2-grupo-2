import React from "react";

class PropagandaCriar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            imagem: '',
            texto: '',
            titulo: '',
            error: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let propaganda = {
            link: this.state.link,
            imagem: this.state.imagem,
            texto: this.state.texto,
            titulo: this.state.titulo,
        };
        this.props.onSubmit(propaganda);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Criar Propaganda</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="titulo">Titulo</label>
                                        <input type="text" className="form-control" id="titulo" name="titulo" value={this.state.titulo} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="link">Link</label>
                                        <input type="text" className="form-control" id="link" name="link" value={this.state.link} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="imagem">Imagem</label>
                                        <input type="text" className="form-control" id="imagem" name="imagem" value={this.state.imagem} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="texto">Texto</label>
                                        <input type="text" className="form-control" id="texto" name="texto" value={this.state.texto} onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Criar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PropagandaCriar;
