import style from "../styles/Login.scss";

export default function Login() {
    return (
        <div className={style.loginPage} >
            <div className={style.loginHeader}>
                <h1>Djan</h1>
            </div>
            <div>
                <div className="row">
                    <a href="/feed" className="outline-success btn-lg">Login</a>
                </div>
            </div>
        </div>
    );
}