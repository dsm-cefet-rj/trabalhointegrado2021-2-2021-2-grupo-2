import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import Carregando from "../components/Carregando";
import { useSession } from "next-auth/react"

const CriarPropaganda = () => {
    const { data: session } = useSession()
    const [imagem, setImagem] = React.useState("");
    const [imagemPreview, setImagemPreview] = React.useState("");
    const [link, setLink] = React.useState("");
    const [duracao, setDuracao] = React.useState("");
    const [error, setError] = React.useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "imagem":
                setImagem(value);
                break;
            case "link":
                setLink(value);
                break;
            case "duracao":
                setDuracao(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async () => {
        const response = await fetch("/api/propagandas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imagem,
                link,
                duracao,
            })
        });
        if (response.ok) {
            alert("Propaganda criada com sucesso!");
            window.location.href = "/";
        } else {
            setError("Erro ao criar propaganda");
        }
    }

    return (
        <>
            {
                session ? (
                    <>
                        <DefaultLayout>
                            <div className="col-12">
                                <h1 className="text-muted text-center">Criação de propaganda</h1>
                            </div>
                            <div className="row" id='erro'>
                                <div className="col-12">
                                    <div className="alert alert-danger" role="alert" style={{
                                        display: erro ? "block" : "none"
                                    }}>
                                        {erro}
                                    </div>
                                </div>
                            </div>
                            <form action="/api/propagandas" method="post" enctype="multipart/form-data">
                                <div className="p-3 row">
                                    <div className="form-group">
                                        <label htmlFor="imagem">Imagem</label>
                                        <input type="file" name="imagem" id="imagem" value={imagem} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="p-3 row">
                                    <div className="form-group">
                                        <label htmlFor="link">Link</label>
                                        <input type="text" name="link" id="link" value={link} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="p-3 row">
                                    <div className="form-group">
                                        <label htmlFor="duracao">Duração</label>
                                        <input type="text" name="duracao" id="duracao" value={duracao} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="p-1 row">
                                    <button className="btn btn-success" onClick={handleSubmit}>Pagamento</button>
                                </div>
                            </form>
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

export default CriarPropaganda;