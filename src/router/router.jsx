import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import NoPage from "../pages/Nopage/NoPage";
import Details from "../Components/Details/Details";
import Login from "../Components/Login/Login";
import Register from "../Register/Register";
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
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: () => fetch('/public/services.json')
            },
        ]
    },
]);

export default router;