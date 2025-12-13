import React, { useState } from "react";
import Navbar from './Navbar';

function Crud() {
    var [items, setItems] = useState([
        { id: 1, name: "John" },
        { id: 2, name: "David" },
        { id: 3, name: "William" }
    ]);

    return (
        <div>
            <div> <Navbar /> </div><br />

            <div className="container">
                <table className=" table table-bordered table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <button className="btn btn-danger">Delete</button>
                                <button className="btn btn-primary"> Edit </button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>)
}

export default Crud;