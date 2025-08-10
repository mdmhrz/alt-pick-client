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
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactSupport from "../Pages/ContactSupport/ContactSupport";
import TermsOfService from "../Pages/TermsOfService/TermsOfService";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";



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
                path: '/about-us',
                Component: AboutUs
            },
            {
                path: '/support',
                Component: ContactSupport
            },
            {
                path: '/termsAndService',
                Component: TermsOfService
            },
            {
                path: '/privacy-policy',
                Component: PrivacyPolicy
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
                loader: ({ params }) => fetch(`https://alt-pick-server.vercel.app/queries/${params.id}`),
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