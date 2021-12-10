import React from "react";

class Propaganda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            link: props.link,
            imagem : props.imagem,
            texto: props.texto,
            titulo: props.titulo,
            id: props.id
        };
    }

    render() {
        return (
            <div className="propaganda">
                <div className="propaganda-texto">
                    <h3>{this.state.titulo}</h3>
                    <p>{this.state.texto}</p>
                </div>
                <div className="propaganda-imagem">
                    <img src={this.state.imagem} alt=""/>
                </div>
            </div>
        );
    }

}

export default Propaganda;
