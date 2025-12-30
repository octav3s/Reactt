import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

function List() {
    const email = useSelector(state => state.auth.email);
    const [intakes, setIntakes] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editAmount, setEditAmount] = useState("");
    const [page, setPage] = useState(1);
    const perPage = 5;

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("water_intakes")) || {};
        setIntakes(data[email] || []);
    }, [email]);

    function deleteIntake(index) {
        const data = JSON.parse(localStorage.getItem("water_intakes"));
        data[email].splice(index, 1);
        localStorage.setItem("water_intakes", JSON.stringify(data));
        setIntakes([...data[email]]);
    }

    function saveEdit(index) {
        const data = JSON.parse(localStorage.getItem("water_intakes"));
        data[email][index].amount = Number(editAmount);
        localStorage.setItem("water_intakes", JSON.stringify(data));
        setEditIndex(null);
        setIntakes([...data[email]]);
    }

    const start = (page - 1) * perPage;
    const pageData = intakes.slice(start, start + perPage);

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Intake List</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount (ml)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pageData.map((i, idx) => {
                            const actualIndex = start + idx;
                            return (
                                <tr key={actualIndex}>
                                    <td>{i.date}</td>
                                    <td>
                                        {editIndex === actualIndex ? (
                                            <input
                                                type="number"
                                                value={editAmount}
                                                onChange={e => setEditAmount(e.target.value)}
                                            />
                                        ) : (
                                            i.amount
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === actualIndex ? (
                                            <button onClick={() => saveEdit(actualIndex)}>Save</button>
                                        ) : (
                                            <button onClick={() => {
                                                setEditIndex(actualIndex);
                                                setEditAmount(i.amount);
                                            }}>
                                                Edit
                                            </button>
                                        )}
                                        <button onClick={() => deleteIntake(actualIndex)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <Pagination
                    page={page}
                    setPage={setPage}
                    total={intakes.length}
                    perPage={perPage}
                />
            </div>
        </div>
    );
}

export default List;
