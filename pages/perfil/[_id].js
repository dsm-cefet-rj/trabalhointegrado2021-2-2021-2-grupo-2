import { useRouter } from 'next/router';
import { useSession } from "next-auth/react"
import React, { useEffect } from "react";
import DefaultLayout from '../../components/DefaultLayout';

export default function PerfilPage({ user }) {
    const { data: session } = useSession()
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
                console.log(data);
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
                    <div className="userProfile">
                        <div className="userProfile__header">
                            <img className="userProfileHeader" src={userData.image} alt="Imagem do usuário" />
                            <h4 className="userProfileName" >{userData.name}</h4>
                        </div>
                    </div>
                    <div className="userProfileButtons">
                        {(
                            userData._id !== session.user._id) ? (<>
                                <button>Seguir</button><button>Denunciar</button>
                            </>) : (<>
                                <a>Quem estou seguindo</a>
                            </>
                        )}
                    </div>
                    <div className="userProfileMessages">
                                    
                    </div>


                    <p>usuario _id: {_id}</p>
                    <p>Data: {JSON.stringify(userData)}</p>
                    <p>{error}</p>
                </DefaultLayout>
            </>
            ) : (
                <>
                    <h1>E necessario esta logado para ver essa pagina</h1>
                    <a href="/">Login</a>
                </>
            )}
        </>
    );
}