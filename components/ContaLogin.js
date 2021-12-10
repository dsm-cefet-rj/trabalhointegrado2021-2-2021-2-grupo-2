import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
        };
    }

    render() {
        return (
            <div className="container">
                <div>
                    <form onSubmit={this.login}>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="loginError">
                            {this.state.error}
                        </div>
                        <div className="loginButtons">
                            <div className="row">
                                <Button type="submit" variant="outline-success">Entrar</Button>
                            </div>
                            <div className="row">
                                <Link href="/criar-conta" class="btn btn-outline-warning" >Criar Conta</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    login = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        } else {
            this.setState({
                error: 'Preencha todos os campos'
            });
        }
    }

}

export default Login;
