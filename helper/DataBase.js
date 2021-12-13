import { MongoClient } from "mongodb";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true

}

const client = new MongoClient(process.env.DATABASE_URL, options);

async function connect() {
    if (!client.isConnected) await client.connect();

    const db = await client.db(process.env.DATABASE_NAME);

    return { db: db, client: client };
}

export default connect;
