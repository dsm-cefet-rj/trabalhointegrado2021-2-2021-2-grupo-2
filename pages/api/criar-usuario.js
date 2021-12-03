import {createUser} from '../../helper/UsersDB';
import Usuario from '../../Negocio/Usuario';

export default function handler(req, res) {
    if (!req.body.nome || !req.body.email || !req.body.senha) {
        return res.status(400).send('Dados insuficientes');
    }else{
        const usuario = new Usuario({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            foto: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
            interfaceTema: "White",
            interfaceFonte: "Roboto",
        });
        let result = createUser(usuario)
        if(result == -1){
            return res.status(400).send('Usuário já existe');
        }else{
            return res.status(200).send('Usuário criado com sucesso');
        }
    }
}