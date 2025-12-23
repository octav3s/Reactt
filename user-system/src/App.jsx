import { useState } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
