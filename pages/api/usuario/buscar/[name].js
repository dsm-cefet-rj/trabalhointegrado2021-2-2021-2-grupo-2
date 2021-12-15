import { getSession } from "next-auth/react"
import connect from "../../../../helper/DataBase"

export default async (req, res) => {
    const session = await getSession({ req })
    const { name } = req.query;
    if (!session.session.user) {
        res.statusCode = 401;
        res.end();
        return;
    } else {
        
        const { db } = await connect()
        const  usuarios = await db.collection("users").find({ name: name });
        console.log(usuarios);
        res.status(200).json(usuarios);
        return;
    }
}