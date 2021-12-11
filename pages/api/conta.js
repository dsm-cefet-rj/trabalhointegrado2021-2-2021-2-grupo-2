import { UsersDB } from '../../helper/UsersDB';
import Usuario from '../../Negocio/Usuario';
import Configuracao from '../../Negocio/Configuracao';
import bcrypt from 'bcrypt';




export default function handler(req, res) {
    {
        let data = JSON.parse(req.body);
        switch (req.method) {
            case 'POST':
                {
                    // POST /api/conta Cria uma conta
                    if (!data.nome || !data.email || !data.senha) {
                        res.status(400).send('Dados insuficientes');
                        break;
                    } else {
                        // hash da senha
                        const senha = bcrypt.hashSync(data.senha, 10);
                        const usuario = Object.assign(new Usuario(), {
                            id: undefined,
                            nome: data.nome,
                            email: data.email,
                            senha: senha,
                            foto: "https://avatars0.githubusercontent.com/u/52709853",
                            moderador: false,
                            mensagens: [],
                            propagandas: [],
                            grupos: [],
                            temaInterface: "white",
                            fonteInterface: "Roboto"

                        });
                        let result = UsersDB.createUser(usuario)
                        if (result == -1) {
                            res.status(400).send('Erro de criação');
                            return;
                        } else {
                            res.status(200).send('Usuário criado com sucesso');
                            return;
                        }
                    }
                }
            default:
                res.status(405).send('Método não permitido');
                break;
        }
    }
}