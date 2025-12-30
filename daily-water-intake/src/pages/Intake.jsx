import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

function Intake() {
    const email = useSelector(state => state.auth.email);
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    function addIntake() {
        if (!amount) return;

        const data = JSON.parse(localStorage.getItem("water_intakes")) || {};
        const list = data[email] || [];
        const today = new Date().toISOString().split("T")[0];

        if (list.find(i => i.date === today)) {
            setMessage("Only one entry per day allowed");
            return;
        }

        list.push({ date: today, amount: Number(amount) });
        data[email] = list;
        localStorage.setItem("water_intakes", JSON.stringify(data));

        setMessage("Intake added");
        setAmount("");
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Add Intake</h2>

                <div className="form-group">
                    <label>Amount (ml)</label>
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>

                <button onClick={addIntake}>Add</button>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}

export default Intake;
