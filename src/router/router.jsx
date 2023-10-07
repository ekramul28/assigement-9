import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import NoPage from "../pages/Nopage/NoPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <NoPage></NoPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router;