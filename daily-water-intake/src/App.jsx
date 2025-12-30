import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Intake from "./pages/Intake";
import List from "./pages/List";
import Diff from "./pages/Diff";
import "./App.css";

function App() {
  const email = useSelector(state => state.auth.email);

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/intake" element={email ? <Intake /> : <Navigate to="/login" />} />
      <Route path="/list" element={email ? <List /> : <Navigate to="/login" />} />
      <Route path="/diff" element={email ? <Diff /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
