import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSession } from "next-auth/react"

const CriarGrupo = () => {
    const { data: session } = useSession()
    const [imagem, setImagem] = React.useState("");
    const [imagemPreview, setImagemPreview] = React.useState("");
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

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
    return (
        <>
            {
                session ? (
                    <>
                        <DefaultLayout>
                            <h1>Criação de Grupo</h1>
                            <form action="/api/grupos" method="post" enctype="multipart/form-data">
                                <div className="form-group">
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" name="name" id="name" value={name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Descrição</label>
                                    <input type="text" name="description" id="description" value={description} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="imagem">Imagem</label>
                                    <input type="file" name="imagem" id="imagem" value={imagem} onChange={handleChange} />
                                </div>
                                
                                <button type="submit">Criar Grupo</button>
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

export default CriarGrupo;
