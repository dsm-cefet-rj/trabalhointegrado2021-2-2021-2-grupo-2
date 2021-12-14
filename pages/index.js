import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react"
import { Button } from "react-bootstrap";
import DefaultLayout from "../components/DefaultLayout";
import Mensagem from "../components/Mensagem";
import style from "../styles/index.module.scss";


export default function Index() {
    const { data: session } = useSession()
    const [messagesData, setMessagesData] = React.useState(null);
    const [error, setError] = React.useState(null);

    useEffect(async () => {
        if (session) {
            await fetch("api/feed", {
                method: "GET",
            }).then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Não foi possivel obter as mensagens")
            }).then(data => {
                setMessagesData(data)
            }).catch(err => {
                setError(err)
            }, [])
        }
    });

    return (
        <>
            {
                session ? (
                    <DefaultLayout>
                        <div className={style.feedContainer}>
                            <h1>Feed</h1>
                            {error && <p>{error.message}</p>}
                            {messagesData ?
                                messagesData.map(message => {
                                    return (
                                        <Mensagem key={message._id} Mensagem={message} />
                                    )
                                }) : (
                                    <div className={style.finalMessage}>
                                        <h2>Carregando</h2>
                                    </div>
                                )}
                            <div className={style.finalMessage}>
                                <h2>Fim das mensagens</h2>
                            </div>
                        </div>
                    </DefaultLayout>
                ) : (
                    <div className={style.loginPage} >
                        <div className={style.loginHeader}>
                            <h1>Djan</h1>
                        </div>
                        <div>
                            <div className="row">
                                <Button onClick={() => signIn('github')} variant="outline-success btn-lg">Login com GitHub</Button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
