import { ObjectId } from "mongodb"
import { getSession } from "next-auth/react"
import connect from "../../../helper/DataBase"

export default async (req, res) => {
    const session = await getSession({ req })
    if (!session.session.user) {
        res.statusCode = 401;
        res.end();
        return;
    }else if (req.method !== "GET"){
        res.statusCode = 405;
        res.end();
        return;
    } else {
        const { busca } = req.query;
        const { db } = await connect();
        const usuarios = await db.collection("users").find().toArray();// TODO: buscar pelo nome do usuario
        res.json(usuarios);
        res.end();
    }
}