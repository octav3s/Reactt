import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

function Login() {
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate();

    function attemptLogin() {
        var user = {
            email: email,
            password: password
        };

        axios.post('https://worksheet-auth.mashupstack.com/login', user)
            .then(response => {
                alert('Successfully Logged In');
                console.log('Token:', response.data.token);
                navigate('/');
            })
            .catch(error => {
                if (error.response?.data?.message) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('Failed to connect to API');
                }
            });
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1>Login</h1>
                        {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : ''}
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={email}
                                onInput={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onInput={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary float-right"
                                onClick={attemptLogin}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
