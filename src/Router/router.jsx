import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Quaries from "../Pages/Quaries/Quaries";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomeLayout,
            },
            {
                path: '/quaries',
                Component: Quaries
            },
            {
                path: '/signIn',
                Component: SignIn
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
])

export default router;