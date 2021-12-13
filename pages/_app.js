import { SessionProvider } from "next-auth/react"
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default App;
