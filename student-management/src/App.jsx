import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import StudentsList from "./pages/StudentsList";
import checkAuth from "../components/checkAuth";
import AutoLogin from "../components/AutoLogin";

function App() {
  return (
    <BrowserRouter>
      <AutoLogin>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/students"
            element={checkAuth(StudentsList)()}
          />
        </Routes>
      </AutoLogin>
    </BrowserRouter>
  );
}

export default App;
