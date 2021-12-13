import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import connect from "../../../helper/DataBase"

const Options = ({
    site: process.env.NEXTAUTH_URL,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
    ],
    callbacks: {
        session: async (session) => {

            const { db } = await connect()

            let userData = await db.collection("users").findOne({
                email: session.session.user.email
            })
            if (!userData) {
                await db.collection("users").insertOne({
                    name: session.session.user.name,
                    email: session.session.user.email,
                    image: session.session.user.image,
                    moderador: false,
                    seguindo: [],
                    mensagens: [],
                    propagandas: [],
                    grupos: [],
                    temaInterface: "light",
                    fonteInterface: "roboto",
                    dataCriacao: new Date()
                })
            }

            userData = await db.collection("users").findOne({
                email: session.session.user.email
            })

            Object.assign(session.session.user, userData)
            session.user = session.session.user
            return session
        }
    },
    events: {
        signIn: async (message) => {
            const user = message.user

            const { db } = await connect()

            const userExists = await db.collection("users").findOne({
                email: user.email
            })

            if (!userExists) {
                await db.collection("users").insertOne({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    moderador: false,
                    seguindo: [],
                    mensagens: [],
                    propagandas: [],
                    grupos: [],
                    temaInterface: "light",
                    fonteInterface: "roboto",
                    dataCriacao: new Date()
                })
            }

            return message
        }
    },
    database: process.env.DATABASE_URL,
})

export default (req, res) => NextAuth(req, res, Options)
