import React from "react";
import style from "../styles/Mensagem.module.scss";

export default ({ Mensagem, UserId, key }) => {    
    const sendDenuncia = () => {
        alert('Sua denúncia foi registrada com sucesso')
        fetch("api/denuncia", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_user: Mensagem.usuario._id,
            }),
        }).then(res => {
            console.log(res);
        });
    }

    return (
        <div className={style.mensagem} style={{
            backgroundColor: Mensagem.corFundo,
            color: Mensagem.corFonte,
        }}>
            <div className={style.mensagemHeaderLeft}>
                <img className={style.userImage} src={Mensagem.usuario.image} alt="Imagem do usuário" />
                <h4 className={style.userName} >{Mensagem.usuario.name}</h4>
            </div>
            <div className={style.mensagemBody}>
                <p>{Mensagem.texto}</p>
                {Mensagem.image ? <img className={style.image} src={Mensagem.image} alt="Imagem da mensagem" /> : null}
            </div>
            <div className={style.mensagemFooter}>
                <a className="btn btn-link" href={`/perfil/${Mensagem.usuario._id}`}>Ver perfil</a>
                {Mensagem.permiteComentarios ? (
                    <a className="btn btn-info" href={`/mensagens/${Mensagem.usuario._id}/${0}`}>Detalhes</a>
                ) : (
                    <>
                    </>
                )}
                
                {UserId === Mensagem.usuario._id ? (
                    <>
                    </>
                ) : (
                    <button className="btn btn-danger" onClick={sendDenuncia}>Denunciar</button>
                )}
            </div>
        </div>
    );
}
