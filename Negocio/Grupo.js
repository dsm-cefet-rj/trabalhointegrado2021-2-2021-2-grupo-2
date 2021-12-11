import Usuario from "./Usuario";

class Grupo{
    constructor(grupoId = 0,dono = new Usuario(),membros = [],mensagens = [],nome = "unset",foto = "unset",descricao = "unset",dataCriacao = 0){
        this.grupoId = grupoId;
        this.dono = dono;
        this.membros = membros;
        this.mensagens = mensagens;
        this.nome = nome;
        this.foto = foto;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
    }
}

export default Grupo;
