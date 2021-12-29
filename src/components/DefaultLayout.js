import React from "react";
import style from "../styles/DefaultLayout.scss"
export default function DefaultLayout ({ children }){

    const session = {
        user: {
            name: "Nicolas Vycas Nery",
            email: "vycasnicolas@gmail.com",
            image: "https://avatars.githubusercontent.com/u/15125899?v=4",
            temaInterface: "light",
            fonteInterface: "roboto"
        }
    };

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
                    <a href="/criar-mensagem">Nova Mensagem</a>
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
                    <a href="/configuracoes">Configurações</a>
                </div>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
            <div className={"LayoutBody"}>
                {children}
            </div>
        </>
    )
}
