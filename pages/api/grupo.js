import { getSession } from "next-auth/react"
import connect from "../../helper/DataBase"
import { ObjectId } from "mongodb"

export default async (req, res) => {
    const session = await getSession({ req })
    if (req.method !== "POST") {
        res.statusCode = 405;
        res.end();
        return;
    }else if (session.session.user) {
        const { db } = await connect();
        let mensagem = req.body;
        mensagem.data_criacao = new Date();
        mensagem.dono_id = ObjectId(session.session.user._id);
        await db.collection("grupos").insertOne(mensagem);

        res.end();
        return;
    }else {
        res.statusCode = 401;
        res.end();
        return;
    }
}