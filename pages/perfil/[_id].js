import { useRouter } from 'next/router';
import DefaultLayout from '../../components/DefaultLayout';

export default function PerfilPage({ user }) {
    const { data: session } = useSession()

    const getUserMessages = () => {
        fetch("api/feed", {
            method: "GET",
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            }
            )
    }

    if (session) {
        return (
            <DefaultLayout>
                <div className="perfilContainer">
                    <div className="perfilHeader">
                        <div className="perfilHeaderLeft">
                            <img src={user.image} alt="Imagem do usuário" />
                        </div>
                        <div className="perfilHeaderRight">
                            <h1>{user.name}</h1>
                        </div>
                    </div>
                    <div className="perfilBody">

                    </div>
                </div>
            </DefaultLayout>
        );
    } else {
        return (
            <>
                <h1>E necessario esta logado para ver essa pagina</h1>
                <a href="/">Login</a>
            </>
        )
    }
}

export const getServerSideProps = async (context) => {
    const { id } = context.query
    const res = await fetch(`api/user/${id}`)
    const user = await res.json()
    return {
        props: {
            user:user
        }
    }
}