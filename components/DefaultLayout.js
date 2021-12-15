import React from "react";
import { useSession, signOut } from "next-auth/react"
import style from "../styles/DefaultLayout.module.scss"
import Link from "next/link";


// Componente layout padrão
const DefaultLayout = ({ children }) => {
    const { data: session } = useSession()
    const OpenMenu = () => {
        let menu = document.getElementById("menu")
        if (menu.style.display === "block") {
            menu.style.display = "none"
        } else {
            menu.style.display = "block"
        }
    }

    return (
        <>
            <div className={style.LayoutMenu}>
                <img src={session.user.image} alt={""} />
                <h6>{session.user.name}</h6>
                <a href="/">Feed </a>
                <button onClick={OpenMenu}>Menu</button>
            </div>
            <div className={style.MenuBody} id='menu'>
                <div>
                    <Link href="/criar-mensagem">Nova Mensagem</Link>
                </div>
                <div>
                    <a href={`/perfil/${session.user._id}`}>Meu Perfil</a>
                </div>
                <div>
                    <a href="/criar-grupo">Grupos</a>
                </div>
                <div>
                    <a href="/criar-propaganda">Propagandas</a>
                </div>
                <div>
                    <a href="/seguindo">Quem Estou Seguindo</a>
                </div>
                <div>
                    <Link href="/configuracoes">Configurações</Link>
                </div>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
            <div className={"LayoutBody"}>
                {children}
            </div>
        </>
    )
}

export default DefaultLayout;