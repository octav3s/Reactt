import { createBrowserRouter } from "react-router-dom";
import Navbar from './navbar';
import App from "./App";

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    
]);

export default router;