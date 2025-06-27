import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Quaries from "../Pages/Quaries/Quaries";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
import RecommendationForMe from "../Pages/RecommendatationForMe/RecommendationForMe";
import PrivateRoute from "./PrivateRoute";
import MyQuaries from "../Pages/MyQuaries/MyQuaries";
import MyRecommendations from "../Pages/MyRecommendations/MyRecommendations";


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
                path: '/login',
                Component: SignIn
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/recommendationsForMe',
                Component: RecommendationForMe
            },
            {
                path: '/myQuaries',
                Component: MyQuaries
            },
            {
                path: '/myRecommendations',
                Component: MyRecommendations
            },

        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
])

export default router;