import React from "react";

class MensagemDetails extends React.Component {
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
            comentarios: this.props.comentarios,
        });
    }
}