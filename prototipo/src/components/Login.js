import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
        };
    }
    render() {
        return (
            <div className="login-page">
                <div className="login-header">
                    <h1>Djan</h1>
                </div>
                <div className="container">
                    <div className="login-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <div className="login-buttons">
                                <div className="d-grid gap-2">
                                    <Button type="submit" variant="outline-success">Entar</Button>
                                    <Button href="/criar-conta" variant="outline-warning">Criar Conta</Button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const { email, password } = this.state;
        if (email && password) {
            //TDOO: login

        } else {
            this.setState({
                error: 'Please enter a valid email and password',
                loading: false
            });
        }
    }
}

export default Login;