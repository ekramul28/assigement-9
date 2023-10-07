import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import NoPage from "../pages/Nopage/NoPage";
import Details from "../Components/Details/Details";
import Login from "../Components/Login/Login";
import Register from "../Register/Register";
import ProtectRout from "../ProtectRout/ProtectRout";
import Service from "../OurServices/Servise/Servise";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <NoPage></NoPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <ProtectRout><Service></Service></ProtectRout>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/details/:id",
                element: <ProtectRout><Details></Details></ProtectRout>,
                loader: () => fetch('/public/services.json')
            },
        ]
    },
]);

export default router;