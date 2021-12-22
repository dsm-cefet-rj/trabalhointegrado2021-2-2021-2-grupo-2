import { useSession } from "next-auth/react"
import DefaultLayout from "../components/DefaultLayout";
import Carregando from "../components/Carregando";
import { Dropdown } from "react-bootstrap";
import React from "react";
import style from "../styles/configuracoes.module.scss"

const configuracoes = () => {
    const { data: session } = useSession()
    const [interfaceTema = "light", setInterfaceTema] = React.useState("light")
    const [interfaceFonte = "roboto", setInterfaceFonte] = React.useState("14px")
    const [mensagem, setMensagem] = React.useState("")

    const alterarTema = (event) => {
        setInterfaceTema(event.target.value)
    }

    const alterarFonte = (event) => {
        setInterfaceFonte(event.target.value)
    }

    const handleClickSalvar = async (event) => {
        const response = await fetch("/api/usuario", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                temaInterface: interfaceTema,
                fonteInterface: interfaceFonte
            })
        }).then(res => {
            if (res.ok) {
                setMensagem("Alterações salvas com sucesso")
            }
            throw new Error("Não foi possivel salvar as alterações")
        }).catch(err => {
            setMensagem("Não foi possivel salvar as alterações")
        })
    }

    return (
        <>
            {session ? (
                <DefaultLayout>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-muted text-center">Configurações</h1>
                            </div>
                        </div>
                        <div>
                            <img className={style.image} src={session.user.image} alt="Foto Usuario" />
                        </div>
                        <div className="row">
                            <div className={style.userInfo}>
                                <h2>{session.user.name}</h2>
                                <h3>{session.user.email}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className={style.userInfo}>
                            <a href="/excluir-conta" className="btn btn-danger btn-lg">Excluir Conta</a>
                        </div>
                    </div>
                    <form className="container">
                        <div className="form-group">
                            <label htmlFor="cor-interface">Cor Interface</label>
                            <select className="form-select" onChange={alterarTema}>
                                <option value="">light</option>
                                <option value="">dark</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="fonte-interface">Fonte Interface</label>
                            <select className="form-select" onChange={alterarFonte}>
                                <option value="roboto">Roboto</option>
                                <option value="roboto-condensed">Roboto Condensed</option>
                                <option value="roboto-mono">Roboto Mono</option>
                                <option value="roboto-slab">Roboto Slab</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <p>{mensagem}</p>
                        </div>
                    </form>
                    <div className={style.ConfigButtons}>
                        <button className="btn btn-success btn-lg" onClick={handleClickSalvar} >Salvar</button>
                        <a href='/' className="btn btn-warning btn-lg">Cancelar</a>
                    </div>
                </DefaultLayout>
            ) : (
                <>
                    <Carregando/>
                </>
            )}
        </>
    )
}

export default configuracoes;
