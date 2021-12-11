import Configuracao from "./Configuracao";

class Usuario {
    constructor(id, nome, email, senha, foto, moderador, mensagens, propagandas,
        grupos, temaInterface, fonteInterface) {

        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.foto = foto;
        this.moderador = moderador;
        this.mensagens = mensagens;
        this.propagandas = propagandas;
        this.grupos = grupos;
        this.temaInterface = temaInterface;
        this.fonteInterface = fonteInterface;
    }
}

export default Usuario;
