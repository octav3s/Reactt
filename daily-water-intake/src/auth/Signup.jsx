import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function registerUser() {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.find(u => u.email === email)) {
            alert("User already exists");
            return;
        }

        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/login");
    }

    return (
        <div className="container">
            <h2>Signup</h2>

            <div className="form-group">
                <label>Name</label>
                <input onChange={e => setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </div>

            <button onClick={registerUser}>Signup</button>
        </div>
    );
}

export default Signup;
