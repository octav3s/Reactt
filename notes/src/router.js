import { createBrowserRouter } from "react-router-dom";
import list from "./components/list";
import 
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App /> },
    { path: 'aboutus', element: <Aboutus /> },
]);

export default router;