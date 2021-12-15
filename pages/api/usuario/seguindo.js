import { ObjectId } from "mongodb"
import { getSession } from "next-auth/react"
import connect from "../../../helper/DataBase"

export default async (req, res) => {
    const session = await getSession({ req })
    if (!session.session.user) {
        res.statusCode = 401;
        res.end();
        return;
    } else {
        let _idUsuariosSeguidos = []
        session.user.seguindo.forEach(id => {
            _idUsuariosSeguidos.push(new ObjectId(id))
        });

        const { db } = await connect();
        const usuarios = await db.collection("users").find({ _id: { $in: _idUsuariosSeguidos } }).toArray();

        usuarios.forEach(usuario => {
            delete usuario.mensagens;
            delete usuario.email;
            delete usuario.moderador;
            delete usuario.seguindo;
            delete usuario.propagandas;
            delete usuario.grupos;
            delete usuario.temaInterface;
            delete usuario.fonteInterface;
            delete usuario.dataCriacao;
        });

        res.status(200).json(usuarios);
    }
}