import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function attemptLogin() {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            alert("Invalid credentials");
            return;
        }

        dispatch(login(email));
        navigate("/intake");
    }

    return (
        <div className="container">
            <h2>Login</h2>

            <div className="form-group">
                <label>Email</label>
                <input onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </div>

            <button onClick={attemptLogin}>Login</button>
        </div>
    );
}

export default Login;
