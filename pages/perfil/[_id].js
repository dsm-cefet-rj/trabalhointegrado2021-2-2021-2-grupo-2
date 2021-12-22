import { useRouter } from 'next/router';
import { useSession } from "next-auth/react"
import React, { useEffect } from "react";
import DefaultLayout from '../../components/DefaultLayout';
import DefaultLayout from "../components/Carregando";
import Mensagem from "../../components/Mensagem";
import style from "../../styles/[_id].module.scss";

export default function PerfilPage() {
    const { data: session } = useSession();
    const router = useRouter();
    const { _id } = router.query;
    const [userData, setUserData] = React.useState({});
    const [error, setError] = React.useState(null);

    useEffect(async () => {
        if (session) {
            await fetch(`/api/usuario/${_id}`, {
                method: "GET",
            }).then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Não foi possivel obter as mensagens")
            }).then(data => {
                setUserData(data)
            }).catch(err => {
                setError(err.message)
            }, [])
        }
    });
    return (
        <>
            {session ? (<>
                <DefaultLayout>
                    {userData ? (
                        <>
                            <div className="container">
                                <div>
                                    <img className={style.userProfileImage} src={userData.image} alt="Imagem do usuário" />
                                    <h4 className={style.userProfileName} >{userData.name}</h4>
                                </div>
                            </div>
                            <div className={style.userProfileButtons}>
                                {(
                                    userData._id !== session.user._id) ? (<>
                                        <button>Seguir</button><button>Denunciar</button>
                                    </>) : (<>
                                        <a className='btn btn-link' href='/'>Quem estou seguindo</a>
                                    </>
                                )}
                            </div>
                            <p>{error}</p>
                            <div className="container">
                                {userData.mensagens ? (
                                    userData.mensagens.length > 0 ?
                                        userData.mensagens.map(message => {
                                            return (
                                                <Mensagem Mensagem={message} Self_Id={session.user._id} />
                                            )
                                        }) : (
                                            <p>O usuario não possui mensagens </p>
                                        )
                                ) : (
                                    <>
                                        <div className='finalMessage'>
                                            <h2>Carregando</h2>
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    ) : (<>

                        <div className='finalMessage'>
                            <h2>Carregando</h2>
                        </div>
                    </>)}
                </DefaultLayout>
            </>
            ) : (
                <>
                    <Carregando/>
                </>
            )}
        </>
    );
}