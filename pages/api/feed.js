import { ObjectId } from "mongodb"
import { getSession } from "next-auth/react"
import connect from "../../helper/DataBase"


export default async (req, res) => {
    const session = await getSession({ req })
    if (req.method !== "GET") {
        res.statusCode = 405;
        res.end();
        return;
    } else if (!session.session.user) {
        res.statusCode = 401;
        res.end();
        return;
    } else {
        let _idUsuariosSeguidos = [ObjectId(session.session.user._id)]
        session.user.seguindo.forEach(id => {
            _idUsuariosSeguidos.push(new ObjectId(id))
        });

        const { db } = await connect();
        const usuarios = await db.collection("users").find({ _id: { $in: _idUsuariosSeguidos } }).toArray();
        let messages = [];

        for (let i = 0; i < usuarios.length; i++) {
            const usuario = JSON.parse(JSON.stringify(usuarios[i]));
            delete usuario.mensagens;
            delete usuario.email;
            delete usuario.moderador;
            delete usuario.seguindo;
            delete usuario.propagandas;
            delete usuario.grupos;
            delete usuario.temaInterface;
            delete usuario.fonteInterface;
            delete usuario.dataCriacao;
            for (let j = 0; j < usuarios[i].mensagens.length; j++) {
                usuarios[i].mensagens[j].usuario = usuario;
            }
            messages = messages.concat(usuarios[i].mensagens);
        }

        messages.sort((a, b) => {
            return new Date(b.data) - new Date(a.data)
        });

        res.status(200).json(messages);
    }
}