import {useRouter} from 'next/router';

function PerfilPage() {
    const router = useRouter();
    const nome = router.query.nome;
    return (
        <div>
        <h1>{nome}</h1>
        <p>
            <a href="/">Home</a>
        </p>
        </div>
    );
}

export default PerfilPage;