import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import DefaultLayout from "../components/Carregando";
import { useSession } from "next-auth/react"

const CriarGrupo = () => {
    const { data: session } = useSession()
    const [imagem, setImagem] = React.useState("");
    const [imagemPreview, setImagemPreview] = React.useState("");
    const [nome, setName] = React.useState("");
    const [descricao, setDescription] = React.useState("");
    const [error, setError] = React.useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "imagem":
                setImagem(value);
                break;
            case "name":
                setName(value);
                break;
            case "description":
                setDescription(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async () => {
        const response = await fetch("/api/grupos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imagem,
                nome,
                descricao,
            })
        });
        if (response.ok) {
            alert("Grupo criado com sucesso!");
            window.location.href = "/";
        } else {
            setError("Erro ao criar grupo");
        }
    }

    return (
        <>
            {
                session ? (
                    <>
                        <DefaultLayout>
                            <div className="col-12">
                                <h1 className="text-muted text-center">Criação de Grupo</h1>
                            </div>
                            <div className="container">
                                <div className="row" id='erro'>
                                    <div className="col-12">
                                        <div className="alert alert-danger" role="alert" style={{
                                            display: erro ? "block" : "none"
                                        }}>
                                            {erro}
                                        </div>
                                    </div>
                                </div>
                                <form action="/api/grupos" method="post" enctype="multipart/form-data">
                                    <div className="p-3 row">
                                        <div className="form-group">
                                            <label htmlFor="name">Nome</label>
                                            <input type="text" name="name" id="name" value={nome} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="p-3 row">
                                        <div className="form-group">
                                            <label htmlFor="description">Descrição</label>
                                            <input type="text" name="description" id="description" value={descricao} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="p-3 row">
                                        <div className="form-group">
                                            <label htmlFor="imagem">Imagem</label>
                                            <input type="file" name="imagem" id="imagem" value={imagem} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="p-3 row">
                                        <button className="btn btn-success" onClick={handleSubmit}>Criar Grupo</button>
                                    </div>
                                </form>
                            </div>
                        </DefaultLayout>
                    </>

                ) : (
                    <>
                        <Carregando/>
                    </>
                )
            }
        </>
    );
}

export default CriarGrupo;
