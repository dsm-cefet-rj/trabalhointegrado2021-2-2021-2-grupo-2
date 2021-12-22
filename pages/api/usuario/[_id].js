import { ObjectId } from "mongodb"
import { getSession } from "next-auth/react"
import connect from "../../../helper/DataBase"

export default async (req, res) => {
    const session = await getSession({ req })
    const { _id } = req.query;
    if (!session.session.user) {
        res.statusCode = 401;
        res.end();
        return;
    } else {
        const { db } = await connect();
        const usuario = await db.collection("users").findOne({ _id: new ObjectId(_id) });
        const mensagens = await db.collection("mensagens").find({ user_id: new ObjectId(_id) }).toArray();



        for (let i = 0; i < mensagens.length; i++) {
            const usuarioCopy = JSON.parse(JSON.stringify(usuario));

            delete usuarioCopy.mensagens;
            delete usuarioCopy.email;
            delete usuarioCopy.moderador;
            delete usuarioCopy.seguindo;
            delete usuarioCopy.propagandas;
            delete usuarioCopy.grupos;
            delete usuarioCopy.temaInterface;
            delete usuarioCopy.fonteInterface;
            delete usuarioCopy.dataCriacao;

            mensagens[i].usuario = usuarioCopy;
        }
        
        mensagens.sort((a, b) => {
            return new Date(b.data) - new Date(a.data)
        })

        usuario.mensagens = mensagens;
        console.log(usuario);
        res.status(200).json(usuario);
        return;
    }
}
