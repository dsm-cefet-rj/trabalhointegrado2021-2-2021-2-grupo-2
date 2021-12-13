import { getSession } from "next-auth/react"
import connect from "../../helper/DataBase"

export default async (req, res) => {
    const session = await getSession({ req })
    if (req.method !== "POST") {
        res.statusCode = 405
        res.end()
        return
    } else if (!session.session.user) {
        res.statusCode = 401
        res.end()
        return
    }

    const { db } = await connect()

    const userData = await db.collection("users").findOne({
        email: session.session.user.email
    })

    let mensagem = req.body;
    mensagem.data = new Date();

    userData.mensagens.push(mensagem);

    await db.collection("users").updateOne({
        email: session.session.user.email
    }, {
        $set: {
            mensagens: userData.mensagens
        }
    })

    res.end()
}