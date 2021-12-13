import React from "react";
import DefaultLayout from "./DefaultLayout";

// Componente de mensagem de nova mensagem
const NovaMensagemForm = ({ onSubmit }) => {



    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <DefaultLayout>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="texto">Texto</label>
                        <input
                            type="text"
                            className="form-control"
                            id="texto"
                            name="texto"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="permiteComentario">Permite Comentário</label>
                        <input
                            type="checkbox"
                            className="form-control"
                            id="permiteComentario"
                            name="permiteComentario"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="corFundo">Cor de Fundo</label>
                        <input
                            type="color"
                            className="form-control"
                            id="corFundo"
                            name="corFundo"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="corFonte">Cor de Fonte</label>
                        <input
                            type="color"
                            className="form-control"
                            id="corFonte"
                            name="corFonte"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">Imagem</label>
                        <input
                            type="file"
                            className="form-control"
                            id="imagem"
                            name="imagem"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >Enviar</button>
                </form>
            </div>
        </DefaultLayout>
    );
}

export default NovaMensagemForm;
