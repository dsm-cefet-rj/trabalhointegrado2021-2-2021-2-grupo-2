import Button from "@restart/ui/esm/Button";
import React from "react";

//Mensagem que aparece no feed
class Mensagem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            texto: "",
            data: "",
            fotoUsuario: "",
            nomeUsuario: "",
            periteComentario: false,
            CorFonte: "",
            corFundo: "",
            imagem: "",
        };
    }

    sendDenuncia() {
        //TODO: Enviar denuncia
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            texto: this.props.texto,
            data: this.props.data,
            fotoUsuario: this.props.fotoUsuario,
            nomeUsuario: this.props.nomeUsuario,
            periteComentario: this.props.periteComentario,
            CorFonte: this.props.CorFonte,
            corFundo: this.props.corFundo,
            imagem: this.props.imagem,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="foto-perfil">
                    <img src={this.state.fotoUsuario} alt="foto de perfil" />
                </div>
                <div className="nome">
                    <p>{this.state.nomeUsuario}</p>
                </div>
                {
                    this.state.texto != '' ?
                        <div className="texto-mensagem">
                            <p className="texto-mensagem">{this.state.texto}</p>
                            <p className="data-mensagem">{this.state.data}</p>
                        </div>
                        :
                        {}
                }
                {
                    this.state.imagem != '' ?
                        <div className="imagem-mensagem">
                            <img src={this.state.imagem} alt="imagem da mensagem" />
                        </div>
                        :
                        {}
                }
                <div className="data-mensagem">
                    <p className="data-mensagem">{this.state.data}</p>
                </div>
                <div class="d-grid gap-2">
                    {
                        this.state.periteComentario ?
                            <a href="#">Comentar</a>
                            :
                            {}
                    }
                    <Button variant="danger" onClick={this.sendDenuncia}>Denunciar</Button>
                </div>
            </div >
        );
    }

}

export default Mensagem;