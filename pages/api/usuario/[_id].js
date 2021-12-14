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
        res.status(200).json(usuario);
        return;
    }
}
