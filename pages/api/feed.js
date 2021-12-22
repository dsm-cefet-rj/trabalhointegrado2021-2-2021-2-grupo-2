import { ObjectId } from "mongodb"
import { getSession } from "next-auth/react"
import connect from "../../helper/DataBase"


export default async (req, res) => {
    const session = await getSession({ req })
    if (req.method !== "GET") {
        res.statusCode = 405;
        res.end();
        return;
    } else if (session.session.user) {
        let _idUsuariosSeguidos = [ObjectId(session.session.user._id)]

        session.user.seguindo.forEach(id => {
            _idUsuariosSeguidos.push(new ObjectId(id))
        });

        const { db } = await connect();

        // Pegar todos os usuários que o usuário está seguindo
        let usuarios = await db.collection("users").find({ _id: { $in: _idUsuariosSeguidos } }).toArray();

        // Pegar as mensagens de todos os usuarios que o usuario está seguindo
        let messages = await db.collection("mensagens").find({ user_id: { $in: _idUsuariosSeguidos } }).sort({ date: -1 }).limit(25).toArray();

        // Remover dados não necessários
        for (let i = 0; i < usuarios.length; i++) {
            let usuario = JSON.parse(JSON.stringify(usuarios[i]));
            delete usuario.mensagens;
            delete usuario.email;
            delete usuario.moderador;
            delete usuario.seguindo;
            delete usuario.propagandas;
            delete usuario.grupos;
            delete usuario.temaInterface;
            delete usuario.fonteInterface;
            delete usuario.dataCriacao;;
            delete usuario.dataUltimoLogin;
            usuarios[i] = usuario;
        }


        // Adicionar dados dos usuários a cada mensagem
        messages.forEach(message => {
            message.usuario = usuarios.find(user => user._id.toString() === message.user_id.toString());
        });

        res.status(200).json(messages);
    } else {
        res.statusCode = 401;
        res.end();
        return;
    }
}