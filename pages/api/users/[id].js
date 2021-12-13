
export default async (req, res) => {
    const { id } = req.query
    const { db } = await connect()

    const user = await db.collection("users").findOne({
        idGithub: id
    })

    res.statusCode = 200
    res.json(user)
}
