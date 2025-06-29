import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
import RecommendationForMe from "../Pages/RecommendatationForMe/RecommendationForMe";
import PrivateRoute from "./PrivateRoute";
import MyRecommendations from "../Pages/MyRecommendations/MyRecommendations";
import AddQuery from "../Pages/AddQuery/AddQuery";
import MyQueries from "../Pages/MyQuaries/MyQuaries";
import QueryDetails from "../Pages/QueryDetails/QueryDetails";
import Queries from "../Pages/Queries/Queries";



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
                path: '/queries',
                Component: Queries
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
                element: <PrivateRoute><RecommendationForMe></RecommendationForMe></PrivateRoute>
            },
            {
                path: '/myQueries',
                element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
            },
            {
                path: '/myRecommendations',
                element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
            },
            {
                path: '/add-query',
                element: <PrivateRoute><AddQuery></AddQuery></PrivateRoute>
            },
            {
                path: '/query-details/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/queries/${params.id}`),
                element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>
            },

        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
])

export default router;