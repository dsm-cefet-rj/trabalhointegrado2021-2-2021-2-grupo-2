import { useSession } from "next-auth/react"
import React, { useEffect } from "react";
import DefaultLayout from '../components/DefaultLayout';
import DefaultLayout from "../components/Carregando";

export default function Seguindo() {
    const { data: session } = useSession();
    const [seguidoList, setSeguidoList] = React.useState([]);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        if (session) {
            fetch(`/api/usuario/seguindo`, {
                method: "GET",
            }).then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Não foi possivel obter as mensagens")
            }).then(data => {
                setSeguidoList(data)
            }).catch(err => {
                setError(err.message)
            }, [])
        }
    });

    return (
        <>
            {session ? (<>
                <DefaultLayout>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <a href="/perfil/buscar">Buscar Usuario</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                {seguidoList ? (
                                    seguidoList.length > 0 ? (
                                        JSON.stringify(seguidoList)
                                    ) : (
                                        <p>Nenhum usuário seguido</p>
                                    )
                                ) : (
                                    <>
                                        <div className='finalMessage'>
                                            <h2>Carregando</h2>
                                        </div>
                                    </>
                                )}
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