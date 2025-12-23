import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        axios
            .get("https://worksheet-student.mashupstack.com/students", {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            })
            .then((res) => setStudents(res.data));
    }, [user]);

    return (
        <div>
            <h2>Students List</h2>
            <ul>
                {students.map((s) => (
                    <li key={s._id}>
                        {s.name} - {s.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentsList;
