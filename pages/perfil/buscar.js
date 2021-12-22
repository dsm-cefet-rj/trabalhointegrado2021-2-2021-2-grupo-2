import { useSession } from "next-auth/react"
import React, { useEffect } from "react";
import DefaultLayout from '../../components/DefaultLayout';
import DefaultLayout from "../components/Carregando";

export default function PerfilPage() {
    const { data: session } = useSession();
    const [busca, setBusca] = React.useState('');
    const [resultados, setResultados] = React.useState([]);
    const [error, setError] = React.useState(null);

    const handleBuscaChange = (e) => {
        setBusca(e.target.value);
    }

    const handleBuscaActio = (e) => {
        e.preventDefault();
        fetch(`/api/usuario/buscar`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                busca
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error("Não foi possivel obter as mensagens")
        }).then(data => {
            setResultados(data)
        }).catch(err => {
            setError(err.message)
        }, [])
    }

    return (
        <>
            {session ? (<>
                <DefaultLayout>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Buscar" value={busca} onChange={handleBuscaChange} />
                                </div>
                                <button className="btn btn-primary" onClick={handleBuscaActio}>Buscar</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <ul className="list-group">
                                        {resultados ? (
                                            resultados.length > 0 ? (
                                                resultados.map(resultado => {
                                                    return (
                                                        <li className="list-group-item">
                                                            <a href={`/perfil/${resultado._id}`}>{resultado.name}</a>
                                                        </li>
                                                    )
                                                })
                                            ) : (
                                                <p>Nenhum usuário encontrado</p>
                                            )) : (
                                            <>
                                                <div className='finalMessage'>
                                                    <h2>Carregando</h2>
                                                </div>
                                            </>
                                        )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </DefaultLayout>
            </>) : (
                <>
                    <Carregando/>
                </>
            )}
        </>
    );
}