import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSession } from "next-auth/react"

// Componente de mensagem de nova mensagem
const NovaMensagemForm = () => {



    const { data: session } = useSession()
    if (session) {
        const [texto, setTexto] = React.useState("");
        const [permiteComentarios, setPermiteComentarios] = React.useState(false);
        const [corFundo, setCorFundo] = React.useState("#ffffff");
        const [corFonte, setCorFonte] = React.useState("#000000");
        const [imagem, setImagem] = React.useState("");
        const [imagemPreview, setImagemPreview] = React.useState("");
        const [erro, setErro] = React.useState("");

        const erroChange = (text) => {
            if (text) {
                document.getElementById("erro").style.display = "block";
                setErro(text)
            } else {
                document.getElementById("erro").style.display = "none"
                setErro('')
            }

        }

        // Função para enviar a mensagem
        const criarMensagem = async () => {
            // Verifica se o texto é vazio
            if (texto.length > 0) {
                // Verifica se a imagem é vazia
                if (imagem.length > 0) {
                    // Envia a mensagem com a imagem
                    const response = await fetch("/api/mensagens", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            texto: texto,
                            permiteComentarios: permiteComentarios,
                            corFundo: corFundo,
                            corFonte: corFonte,
                            imagem: imagem
                        })
                    })
                    // Verifica se a mensagem foi enviada com sucesso
                    if (response.ok) {
                        // Redireciona para a página de mensagens
                        window.location.href = "/mensagens"
                    } else {
                        // Exibe mensagem de erro
                        erroChange("Não foi possível enviar a mensagem")
                    }
                } else {
                    // Envia a mensagem sem imagem
                    const response = await fetch("/api/mensagens", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            texto: texto,
                            permiteComentarios: permiteComentarios,
                            corFundo: corFundo,
                            corFonte: corFonte
                        })
                    })
                    // Verifica se a mensagem foi enviada com sucesso
                    if (response.ok) {
                        // Redireciona para a página de mensagens
                        //window.location.href = "/mensagens"
                    } else {
                        // Exibe mensagem de erro
                        erroChange("Não foi possível enviar a mensagem")
                    }
                }
            } else {
                // Exibe mensagem de erro
                erroChange("Digite um texto para a mensagem")
            }
        };

        // Função para selecionar a imagem
        const selecionarImagem = async (event) => {
            // Verifica se o usuário selecionou uma imagem
            if (event.target.files.length > 0) {
                // Pega a imagem selecionada
                const imagem = event.target.files[0]
                // Verifica se a imagem é válida
                if (imagem.type === "image/jpeg" || imagem.type === "image/png") {
                    // Verifica se a imagem é maior que 1MB
                    if (imagem.size < 1000000) {
                        // Pega a URL da imagem
                        const url = URL.createObjectURL(imagem)
                        // Atualiza o preview da imagem
                        setImagemPreview(url)
                        // Atualiza a imagem
                        setImagem(imagem)

                        erroChange("")
                    } else {
                        // Exibe mensagem de erro
                        erroChange("A imagem deve ser menor que 1MB")

                        // Remove o preview da imagem
                        setImagemPreview("")
                        // Remove a imagem
                        setImagem("")
                    }
                } else {
                    // Exibe mensagem de erro
                    erroChange("A imagem deve ser do tipo JPEG ou PNG")

                    // Remove o preview da imagem
                    setImagemPreview("")
                    // Remove a imagem
                    setImagem("")
                }
            }
        };

        // Função para remover a imagem
        const removerImagem = () => {
            // Atualiza o preview da imagem
            setImagemPreview("")
            // Atualiza a imagem
            setImagem("")
        };

        // Função para alterar o texto
        const alterarTexto = (event) => {
            // Atualiza o texto
            setTexto(event.target.value)
        };

        // Função para alterar o estado de comentários
        const alterarComentarios = () => {
            // Atualiza o estado de comentários
            setPermiteComentarios(!permiteComentarios)
        };

        // Função para alterar o estado de cor de fundo
        const alterarCorFundo = (event) => {
            // Atualiza o estado de cor de fundo
            setCorFundo(event.target.value)
        };

        // Função para alterar o estado de cor de fonte
        const alterarCorFonte = (event) => {
            // Atualiza o estado de cor de fonte
            setCorFonte(event.target.value)
        };

        // Renderiza o componente
        return (
            <DefaultLayout>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Nova mensagem</h1>
                        </div>
                    </div>
                    <div className="row" id='erro'>
                        <div className="col-12">
                            <div className="alert alert-danger" role="alert">
                                {erro}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="texto">Texto</label>
                                <textarea className="form-control" id="texto" rows="3" onChange={alterarTexto}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="imagem">Imagem</label>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="imagem" onChange={selecionarImagem} />
                                    <label className="custom-file-label" htmlFor="imagem">Selecionar arquivo</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="imagemPreview">Preview da imagem</label>
                                <div className="custom-file">
                                    <img src={imagemPreview} alt="Preview da imagem" className="img-fluid" id="imagemPreview" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="corFundo">Cor de fundo</label>
                                <input type="color" className="form-control" id="corFundo" value={corFundo} onChange={alterarCorFundo} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="corFonte">Cor de fonte</label>
                                <input type="color" className="form-control" id="corFonte" value={corFonte} onChange={alterarCorFonte} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="permiteComentarios">Permite comentários</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="permiteComentarios" checked={permiteComentarios} onChange={alterarComentarios} />
                                    <label className="form-check-label" htmlFor="permiteComentarios">
                                        Permite comentários
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button type="button" className="btn btn-primary" onClick={criarMensagem}>Criar mensagem</button>
                        </div>
                    </div>

                </div>
            </DefaultLayout>
        )
    } else {
        return (
            <>
                <h1>E necessario esta logado para ver essa pagina</h1>
                <a href="/">Login</a>
            </>
        );
    }
}

export default NovaMensagemForm;
