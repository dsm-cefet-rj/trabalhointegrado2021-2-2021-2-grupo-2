import { ObjectId } from "mongodb"
import { getSession } from "next-auth/react"
import connect from "../../helper/DataBase"

export default async (req, res) => {
    const session = await getSession({ req })
    if (!session.session.user) {
        res.statusCode = 401;
        res.end();
        return;
    }
    if (req.method === "PUT") {
        const data = await req.body;
        const id = new ObjectId(session.session.user._id);

        const { db } = await connect()
        const dbResp = await db.collection("users").updateOne({ _id: id }, {
            $set: data
        });
        console.log(dbResp);
        res.status(200).end();
        return;
    } else if (req.method === "GET") {
        if (req.body.id) {
            const { db } = await connect()
            const id = ObjectId(req.body.id);
            const usuario = await db.collection("users").findOne({ _id: id });
            res.status(200).json(usuario);
            return;
        }
        if (req.body.name) {
            const { db } = await connect()
            const name = req.body.name;
            const usuarios = await db.collection("users").find({ name: name });
            res.status(200).json(usuarios);
            return;
        }
        res.status(400).end();
        return;
    } if (req.method === "DELETE") {
        const { db } = await connect()
        const id = new ObjectId(session.session.user._id);
        await db.collection("users").deleteOne({ _id: id });
        res.status(200).redirect('/').end();
        return;
    } else {
        res.statusCode = 405;
        res.end();
        return;
    }
}