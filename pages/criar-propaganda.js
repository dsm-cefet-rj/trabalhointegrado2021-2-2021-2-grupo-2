import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSession } from "next-auth/react"

const CriarPropaganda = () => {
    const { data: session } = useSession()
    const [imagem, setImagem] = React.useState("");
    const [imagemPreview, setImagemPreview] = React.useState("");
    const [link, setLink] = React.useState("");
    const [duracao, setDuracao] = React.useState("");

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

    return (
        <>
            {
                session ? (
                    <>
                        <DefaultLayout>
                            <div className="col-12">
                                <h1 className="text-muted text-center">Criação de propaganda</h1>
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
                                    <button className="btn btn-success" type="submit">Pagamento</button>
                                </div>
                            </form>
                        </DefaultLayout>
                    </>

                ) : (
                    <>
                        <h1>E necessario esta logado para ver essa pagina</h1>
                        <a href="/">Login</a>
                    </>
                )
            }
        </>
    );
}

export default CriarPropaganda;